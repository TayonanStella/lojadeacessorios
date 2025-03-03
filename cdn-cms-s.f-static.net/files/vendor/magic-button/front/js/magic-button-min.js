function S123MagicButton(settings) {
    var _ = {
        containerSelector: settings.containerSelector,
        jsonSelector: settings.jsonSelector,
        type: settings.type,
        availableNetworks: settings.availableNetworks,
        websiteID: settings.websiteID,
        translations: settings.translations,
        disabledOptions: settings.disabledOptions ? settings.disabledOptions : [],
        $GLOBALS: settings.$GLOBALS,
        iconPosition: settings.iconPosition ? settings.iconPosition() : null,
        messageOptions: {},
        menuLayoutNUMSelector: settings.menuLayoutNUMSelector,
        $mainNav: settings.$mainNav,
        hasGreeter: settings.hasGreeter,
        style: settings.style
    };
    if (!_.$GLOBALS) return;
    _.init = function() {
        if (IsOnlyContent()) return;
        if (IsWizard()) {
            $(document).on('s123.page.ready.S123MagicButton.' + _.type, function(event) {
                buildButton();
            });
        }
        buildButton();
    };
    _.showContactBox = function(boxType) {
        if (boxType === 'contactUs') {
            buildPopup('popupFloatDivSearch', '', ContactBoxGenerateForm(_.messageOptions[boxType].value), '', true, true, true, 'right', '');
            ContactBoxFormValidation();
        } else {
            var src = 'https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/' + S123.escapeHtml(_.messageOptions[boxType].value) + '&tabs=messages&width={{width}}&height={{height}}&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId';
            var $box = _.$container.find('.m-btn-c[data-type="' + _.type + '"] .contact-box');
            var $container = $box.find('.box-body');
            $box.attr('data-type', boxType);
            $box.show();
            $box.find('.box-icon').html(_.messageOptions[boxType].icon);
            $box.find('.box-text').html(_.messageOptions[boxType].title);
            src = src.replace('{{width}}', $container.width());
            src = src.replace('{{height}}', $container.height());
            $container.html('<iframe src="' + src + '" class="fb-customerchat"></div>');
            hideOptionsList();
        }
        hideGreeter();
    };
    _.destroy = function() {
        _.$container.find('.m-btn-c[data-type="' + _.type + '"]').remove();
    };

    function buildButton() {
        _.$container = $(_.containerSelector);
        _.menuLayoutNUM = $(_.menuLayoutNUMSelector).val();
        if (_.$container.length === 0) return;
        _.messageOptions = new Data();
        var userData = tryParseJSON($(_.jsonSelector).val());
        if (!userData) return;
        if (!userData.active) return;
        loadData(userData);
        if (_.$container.find('.m-btn-c[data-type="' + _.type + '"]').length > 0) {
            _.$container.find('.m-btn-c[data-type="' + _.type + '"]').replaceWith(generateHTML(userData));
        } else {
            _.$container.append(generateHTML(userData));
        }
        if (_.iconPosition) _.$container.addClass('mg-b-icon-position-' + _.iconPosition);
        screenSizeHandler(userData);
        detectLastOption();
        addControllerEvents();
        addBottomMenuHandler(findBootstrapEnvironment() == 'xs');
        if (_.hasGreeter) {
            _.Greeter.init({
                $container: _.$container.find('.m-btn-c[data-type="' + _.type + '"]'),
                data: userData.greeter,
                activeItems: getActiveItems(_.messageOptions),
                messageOptions: _.messageOptions,
                siteLogo: userData.siteLogo,
                siteName: userData.siteName,
                websiteID: _.websiteID,
            });
        }
        _.ExternalLinksPreventor.init({
            $container: _.$container.find('.m-btn-c[data-type="' + _.type + '"]'),
            type: _.type,
            translations: _.translations,
        });
        _.$container.attr('data-' + _.type, true);
        $(document).trigger('S123MagicButton.initialized', [_.type]);
    }

    function ContactBoxGenerateForm(emailCollector) {
        var firstEmail = emailCollector.split(', ')[0];
        var html = '';
        html += '<div class="global-contact-email-container">';
        html += '<div class="g-c-email-info-box">';
        html += '<h3>' + translations.globalContactEmail.contactUs + '</h3>';
        html += '<p>' + translations.globalContactEmail.infoBox.replace('{{email_address}}', '<a href="mailto:' + firstEmail + '">' + firstEmail + '</a>') + '</p>';
        html += '</div>';
        html += '<form class="g-c-email-form">';
        html += '<div class="row">';
        html += '<div class="col-sm-6 col-xs-12">';
        html += '<div class="form-group">';
        html += '<label for="emailForm_fullName" class="white">' + S123.escapeHtml(translations.globalContactEmail.fullName) + '</label>';
        html += '<input type="text" name="emailForm_fullName" placeholder="' + S123.escapeHtml(translations.globalContactEmail.fullName) + '" class="form-control" required data-msg-required="' + S123.escapeHtml(translations.jqueryValidMsgRequire) + '">';
        html += '</div>';
        html += '</div>';
        html += '<div class="col-sm-6 col-xs-12">';
        html += '<div class="form-group">';
        html += '<label for="emailForm_email" class="white">' + S123.escapeHtml(translations.emailAddress) + '</label>';
        html += '<input type="text" name="emailForm_email" placeholder="' + S123.escapeHtml(translations.emailAddress) + '" class="form-control" required data-msg-required="' + S123.escapeHtml(translations.jqueryValidMsgRequire) + '" data-rule-email="true" data-msg-email="' + S123.escapeHtml(translations.jqueryValidMsgEmail) + '">';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="row">';
        html += '<div class="col-xs-12">';
        html += '<div class="form-group">';
        html += '<label for="emailForm_description" class="white">' + S123.escapeHtml(translations.globalContactEmail.description) + '</label>';
        html += '<textarea class="form-control" name="emailForm_description" rows="4" placeholder="' + S123.escapeHtml(translations.globalContactEmail.description) + '"></textarea>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="row">';
        html += '<div class="col-xs-12">';
        html += '<button type="submit" class="btn btn-primary btn-block">' + S123.escapeHtml(translations.send) + '</button>';
        html += '<input type="hidden" name="websiteID" value="' + $('#websiteID').val() + '">';
        html += '<input type="hidden" name="w" value="' + $('#w').val() + '">';
        html += '<input type="hidden" name="isMagicBtn" value="1">';
        html += '<input type="hidden" name="recaptchaToken" value="">';
        html += '</div>';
        html += '</div>';
        html += '</form>';
        html += '<div class="g-c-email-message-sent-box">';
        html += '<div class="row">';
        html += '<div class="col-sm-6 col-xs-12 col-md-offset-3">';
        html += '<h3 class="g-c-email-message-content">' + S123.escapeHtml(translations.globalContactEmail.thankYouMessage) + '</h3>';
        html += '</div>';
        html += '</div>';
        html += '<div class="row">';
        html += '<div class="col-sm-6 col-xs-12 col-md-offset-3">';
        html += '<button type="button" class="btn btn-primary close-order-thank-you">' + S123.escapeHtml(translations.globalContactEmail.thankYouCloseBtn) + '</button>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html;
    };

    function ContactBoxFormValidation() {
        var $form = $('.g-c-email-form');
        $form.validate({
            errorElement: 'div',
            errorClass: 'help-block',
            focusInvalid: true,
            ignore: "",
            highlight: function(e) {
                $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
            },
            success: function(e) {
                $(e).closest('.form-group').removeClass('has-error');
                $(e).remove();
            },
            submitHandler: function(form) {
                var $form = $(form);
                $form.find('button:submit').prop('disabled', true);
                $.ajax({
                    type: "POST",
                    url: "/versions/" + $('#versionNUM').val() + "/include/contactEmailO.php",
                    data: $form.serialize(),
                    success: function(data) {
                        $form.trigger("reset");
                        $form.addClass("hidden");
                        $(".g-c-email-message-sent-box").show();
                        $(".g-c-email-info-box").hide();
                        $form.next().find(".close-order-thank-you").on("click", function() {
                            buildPopup_CloseAction('popupFloatDivSearch');
                        });
                        $form.find('button:submit').prop('disabled', false);
                        WizardNotificationUpdate();
                    }
                });
                return false;
            }
        });
    };

    function detectLastOption() {
        var order = 0;
        var $lastChild = null;
        _.$container.find('.m-btn-c[data-type="' + _.type + '"] .options-list[data-type="magicButton"] li').removeClass('is-last-item');
        _.$container.find('.m-btn-c[data-type="' + _.type + '"] > .options-list[data-type="magicButton"] li').each(function(index, option) {
            var optionOrder = parseInt($(this).css('order'));
            if (order <= optionOrder && $(this).is(':visible')) {
                order = optionOrder;
                $lastChild = $(this);
            }
        });
        if ($lastChild) $lastChild.addClass('is-last-item');
    }

    function loadData(userData) {
        var activeItems = getActiveItems(userData.items);
        if (activeItems.length > 0 && _.type == 'share') {
            userData.items.copyLink = new Item({
                isActive: true,
                order: getHigestOrder(userData.items),
                icon: '',
                value: '',
                messageName: 'Copy Link',
                action: {
                    contact: '',
                    share: 'onClick="$(document).trigger(\'S123MagicButton.copyLink_' + _.type + '\')"',
                }
            });
        }
        $.each(userData.items, function(key, data) {
            if (!_.messageOptions[key]) return;
            if (_.disabledOptions.indexOf(key) != -1) return;
            _.messageOptions[key].value = data.dialCode + data.value;
            _.messageOptions[key].order = data.order;
            _.messageOptions[key].isActive = true;
        });
        _.style = userData.style ? userData.style : 'mainColor';
    }

    function getButtonStyle() {
        if (_.style === 'black') return 'btn-primary-black';
        if (_.style === 'white') return 'btn-primary-white';
        if (_.style === 'grey') return 'btn-primary-grey';
        return 'btn-primary';
    }

    function getHigestOrder(items) {
        var order = 0;
        $.each(items, function(index, messageOption) {
            if (order < messageOption.order) {
                order = messageOption.order;
            }
        });
        return order;
    }

    function generateHTML(userData) {
        var html = '';
        var activeItems = getActiveItems(_.messageOptions);
        if (activeItems.length === 0) return html;
        html += '<div class="m-btn-c" data-type="' + _.type + '">';
        if (activeItems.length > 1) {
            html += '<div class="fixed-action-btn btn-primary ' + getButtonStyle() + ' magic-btn">';
            html += '<a class="open-list">';
            if (_.type === 'contact') {
                html += S123.s123IconToSvg.getHtml('comments', '', '');
            } else {
                html += S123.s123IconToSvg.getHtml('share-alt', '', '');
            }
            html += '</a>';
            html += '<a class="close-list">';
            html += S123.s123IconToSvg.getHtml('times', '', '');
            html += '</a>';
            html += '</div>';
        } else {
            html += '<div class="fixed-action-btn single-item ' + activeItems[0] + ' magic-btn">';
            html += '<a ' + getOptionActionAttrByType(_.messageOptions[activeItems[0]]) + ' id="' + activeItems[0] + 'MagicButton">' + _.messageOptions[activeItems[0]].icon + '</a>';
            html += '</div>';
        }
        if (activeItems.length > 1 || userData.mobileFullWidth) {
            html += '<ul class="options-list" data-type="magicButton">';
            for (var i = 0; i < activeItems.length; i++) {
                var key = activeItems[i];
                var option = _.messageOptions[key];
                html += '<li class="list-item ' + key + ' ' + key + '-list" style="order:' + option.order + ';">';
                html += '<a ' + getOptionActionAttrByType(option) + ' class="btn-floating">' + option.icon + '</a>';
                html += '</li>';
            }
            html += '</ul>';
        }
        if (_.type === 'contact') {
            html += '<div class="contact-box">';
            html += '<div class="box-heading">';
            html += '<span class="box-icon"></span>';
            html += '<span class="box-text"></span>';
            html += '<span class="icon-close">';
            html += S123.s123IconToSvg.getHtml('times', '', '');
            html += '</span>';
            html += '</div>';
            html += '<div class="box-body"></div>';
            html += '</div>';
        }
        html += '</div>';
        return html;
    }

    function getOptionActionAttrByType(option) {
        var action = option.action[_.type];
        if (_.type === 'contact') {
            if (option.messageName == 'WhatsApp') {
                option.value = option.value.replace(/\D/g, '');
            }
            action = action.replace('{{value}}', S123.escapeHtml(option.value));
        } else {
            action = action.replace(new RegExp('\\{{appID}}', 'gm'), S123.escapeHtml(option.value));
            action = action.replace(new RegExp('\\{{pageURL}}', 'gm'), encodeURIComponent(window.location.href));
            action = action.replace(new RegExp('\\{{successPageURL}}', 'gm'), encodeURIComponent(window.location.href));
            action = action.replace(new RegExp('\\{{description}}', 'gm'), S123.escapeHtml(removeNewLines($('meta[name="description"]').attr('content'))));
            action = action.replace(new RegExp('\\{{media}}', 'gm'), removeNewLines($('meta[property="og:image"]').attr('content')));
            action += ' data-allow-external-link="true"';
        }
        return action;
    }

    function removeNewLines(str) {
        if (!str || str.length === 0) return str;
        return str.replace(/(\r\n|\n|\r)/gm, '');
    }

    function addControllerEvents() {
        var $mgContainer = _.$container.find('.m-btn-c[data-type="' + _.type + '"] .magic-btn:not(.single-item)');
        $mgContainer.off('click').on('click', function(event) {
            event.preventDefault();
            if (!_.$container.find('.m-btn-c[data-type="' + _.type + '"] .magic-btn').hasClass('show-list')) {
                showOptionsList();
            } else {
                hideOptionsList();
            }
        });
        if (findBootstrapEnvironment() != 'xs' || IsWizard()) {
            $mgContainer.off('mouseenter').on('mouseenter', function() {
                clearTimeout(_.timer);
                showOptionsList();
            }).off('mouseleave').on('mouseleave', function() {
                _.timer = setTimeout(function() {
                    hideOptionsList();
                }, 500);
            });
            _.$container.find('.m-btn-c[data-type="' + _.type + '"] .options-list').off('mouseenter').on('mouseenter', function() {
                clearTimeout(_.timer);
            }).off('mouseleave').on('mouseleave', function() {
                _.timer = setTimeout(function() {
                    hideOptionsList();
                }, 500);
            });
        }
        $(document).off('S123MagicButton.showContactBox_' + _.type).on('S123MagicButton.showContactBox_' + _.type, function(event, messageOption) {
            _.showContactBox(messageOption);
        });
        $(document).off('S123MagicButton.copyLink_' + _.type).on('S123MagicButton.copyLink_' + _.type, function(event) {
            var clipboard = new Clipboard('.m-btn-c[data-type="' + _.type + '"] .copyLink-list', {
                text: function(trigger) {
                    return window.location.href;
                }
            });
            $.gritter.add({
                title: _.translations.copyLink.success,
                time: 3000
            });
            hideOptionsList();
        });
        if (_.type === 'contact') {
            _.$container.find('.m-btn-c[data-type="' + _.type + '"] .contact-box .icon-close').off('click').on('click', function() {
                _.$container.find('.m-btn-c[data-type="' + _.type + '"] .contact-box').hide();
            });
        } else {
            $(document).off('S123MagicButton.showShareWindow').on('S123MagicButton.showShareWindow', function(event, url) {
                if (_.ExternalLinksPreventor.isActive()) {
                    _.ExternalLinksPreventor.showMessage(url);
                    return;
                }
                var newwindow = window.open(url, 'Share Page', 'width=550,height=507,toolbar=0,menubar=0,location=0');
                if (window.focus) {
                    newwindow.focus();
                }
                hideOptionsList();
            });
        }
    }

    function showOptionsList() {
        _.$container.find('.m-btn-c[data-type="' + _.type + '"] .contact-box').hide();
        _.$container.find('.m-btn-c[data-type="' + _.type + '"] .magic-btn').addClass('show-list');
        _.$container.find('.m-btn-c[data-type="' + _.type + '"] .options-list').addClass('visible');
        hideGreeter();
    }

    function hideOptionsList() {
        _.$container.find('.m-btn-c[data-type="' + _.type + '"] .magic-btn').removeClass('show-list');
        _.$container.find('.m-btn-c[data-type="' + _.type + '"] .options-list').removeClass('visible');
    }

    function getActiveItems(itemsObject) {
        var activeItems = [];
        $.each(itemsObject, function(key, option) {
            if (option.value.length > 0) {
                activeItems.push(key);
            }
        });
        return activeItems;
    }

    function Data() {
        var userMessageOptions = {};
        var supportedNetworks = {
            faceBookMessanger: new Item({
                isActive: false,
                order: 0,
                icon: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/facebook-messenger-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                iconWithColor: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/facebook-messenger-color-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                value: '',
                messageName: 'Facebook Messenger',
                title: _.translations.facebookMessenger.title,
                action: {
                    contact: 'onClick="$(document).trigger(\'S123MagicButton.showContactBox_' + _.type + '\',[\'faceBookMessanger\'])"',
                    share: 'href="https://www.facebook.com/dialog/send?app_id={{appID}}&link={{pageURL}}&redirect_uri={{pageURL}}" target="_blank"',
                }
            }),
            whatsApp: new Item({
                isActive: false,
                order: 1,
                icon: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/whatsApp-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                value: '',
                messageName: 'WhatsApp',
                title: _.translations.whatsApp.title,
                action: {
                    contact: 'href="https://wa.me/{{value}}" target="_blank"',
                    share: 'href="https://api.whatsapp.com/send?text={{pageURL}}" target="_blank"',
                }
            }),
            phone: new Item({
                isActive: false,
                order: 2,
                icon: S123.s123IconToSvg.getHtml('phone', '', ''),
                value: '',
                messageName: 'Phone',
                title: _.translations.phone.title,
                action: {
                    contact: 'href="tel:{{value}}"',
                    share: '',
                }
            }),
            contactUs: {
                isActive: false,
                order: 3,
                icon: S123.s123IconToSvg.getHtml('envelope', '', ''),
                value: '',
                messageName: 'Contact Us',
                title: _.translations.contactUs.title,
                action: {
                    contact: 'onClick="$(document).trigger(\'S123MagicButton.showContactBox_' + _.type + '\',[\'contactUs\'])"',
                    share: 'onClick="$(document).trigger(\'S123MagicButton.showContactBox_' + _.type + '\',[\'contactUs\'])"',
                }
            },
            skype: new Item({
                isActive: false,
                order: 4,
                icon: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/skype-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                value: '',
                messageName: 'Skype',
                title: _.translations.skype.title,
                action: {
                    contact: 'href="skype:{{value}}?chat"',
                    share: '',
                }
            }),
            telegram: new Item({
                isActive: false,
                order: 5,
                icon: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/telegram-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                value: '',
                messageName: 'Telegram',
                title: _.translations.telegram.title,
                action: {
                    contact: 'href="https://t.me/{{value}}" target="_blank"',
                    share: 'href="https://telegram.me/share/url?url={{pageURL}}&text={{description}}" target="_blank"',
                }
            }),
            faceBook: new Item({
                isActive: false,
                order: 6,
                icon: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/facebook-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                value: '',
                messageName: 'Facebook',
                title: _.translations.facebook.title,
                action: {
                    contact: '',
                    share: 'onClick="$(document).trigger(\'S123MagicButton.showShareWindow\',[\'https://www.facebook.com/sharer/sharer.php?u={{pageURL}}&t={{description}}\'])"',
                }
            }),
            twitter: new Item({
                isActive: false,
                order: 7,
                icon: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/twitter-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                value: '',
                messageName: 'Twitter',
                title: _.translations.twitter.title,
                action: {
                    contact: '',
                    share: 'onClick="$(document).trigger(\'S123MagicButton.showShareWindow\',[\'https://twitter.com/intent/tweet?text={{description}} - {{pageURL}}\'])"',
                }
            }),
            pinterest: new Item({
                isActive: false,
                order: 8,
                icon: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/pinterest-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                value: '',
                messageName: 'Pinterest',
                title: _.translations.pinterest.title,
                action: {
                    contact: '',
                    share: 'onClick="$(document).trigger(\'S123MagicButton.showShareWindow\',[\'https://www.pinterest.com/pin/create/bookmarklet/?url={{pageURL}}&media={{media}}&description={{description}}\'])"',
                }
            }),
            gmail: new Item({
                isActive: false,
                order: 9,
                icon: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/gmail-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                value: '',
                messageName: 'Gmail',
                title: _.translations.gmail.title,
                action: {
                    contact: '',
                    share: 'href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su={{description}}&body={{pageURL}}&ui=2&tf=1" target="_blank"',
                }
            }),
            linkedIn: new Item({
                isActive: false,
                order: 10,
                icon: S123.s123IconToSvg.getHtml('linkedin', '', ''),
                value: '',
                messageName: 'LinkedIn',
                title: _.translations.linkedIn.title,
                action: {
                    contact: '',
                    share: 'href="https://www.linkedin.com/shareArticle?mini=true&url={{pageURL}}&title={{description}}&summary={{pageURL}}&source=LinkedIn" target="_blank"',
                }
            }),
            tumblr: new Item({
                isActive: false,
                order: 11,
                icon: '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/tumblr-icon.png?v=' + _.$GLOBALS['v-cache'] + '">',
                value: '',
                messageName: 'Tumblr',
                title: _.translations.tumblr.title,
                action: {
                    contact: '',
                    share: 'onClick="$(document).trigger(\'S123MagicButton.showShareWindow\',[\'https://www.tumblr.com/widgets/share/tool/preview?posttype=link&canonicalUrl={{pageURL}}&title={{description}}&caption={{description}}\'])"',
                }
            }),
            emailApp: new Item({
                isActive: false,
                order: 12,
                icon: S123.s123IconToSvg.getHtml('envelope', '', ''),
                value: '',
                messageName: 'Email App',
                title: _.translations.emailApp.title,
                action: {
                    contact: '',
                    share: 'href="mailto:?to=&subject={{description}}&body={{pageURL}}"',
                }
            }),
            copyLink: new Item({
                isActive: false,
                order: 13,
                icon: S123.s123IconToSvg.getHtml('clone', '', ''),
                value: '',
                messageName: 'Copy Link',
                title: _.translations.copyLink.title,
                action: {
                    contact: '',
                    share: 'onClick="$(document).trigger(\'S123MagicButton.copyLink_' + _.type + '\')"',
                }
            }),
        };
        for (var i = 0; i < _.availableNetworks.length; i++) {
            if (supportedNetworks[_.availableNetworks[i]]) {
                userMessageOptions[_.availableNetworks[i]] = supportedNetworks[_.availableNetworks[i]];
            }
        }
        return userMessageOptions;
    }

    function Item(data) {
        function Def() {
            return {
                isActive: false,
                order: 0,
                icon: '',
                value: '',
                messageName: '',
                action: {
                    contact: '',
                    share: '',
                },
                hasInput: _.type === 'contact'
            };
        }
        var def = new Def();
        if (data) {
            data = S123.objectAssign(new Def(), data); // (objectAssign overwrite objects)
        } else {
            data = def;
        }
        return data;
    }

    function addBottomMenuHandler(isMobile) {
        if (!isMobile && IsHomepage() && (_.menuLayoutNUM == '15' || _.menuLayoutNUM == '20')) {
            var scrollTopOffset = _.$mainNav.outerHeight() + _.$container.outerHeight();
            if ($(window).scrollTop() <= scrollTopOffset) _.$container.hide();
            $(window).off('scroll.S123MagicButton').on('scroll.S123MagicButton', function() {
                if ($(window).scrollTop() > scrollTopOffset) {
                    _.$container.stop().fadeIn(200, function() {
                        detectLastOption();
                    });
                } else {
                    _.$container.hide();
                }
            });
        } else {
            _.$container.show();
            $(window).off('scroll.S123MagicButton');
        }
        $(document).off('s123.pjax.complete.S123MagicButton').on('s123.pjax.complete.S123MagicButton', function() {
            addBottomMenuHandler(findBootstrapEnvironment() == 'xs');
        });
        $(document).off('previewScale.deviceTypeChange.S123MagicButton').on('previewScale.deviceTypeChange.S123MagicButton', function(event, deviceType) {
            addBottomMenuHandler(deviceType == 'mobile');
        });
    }

    function screenSizeHandler(userData) {
        addRemoveScreenTypeClass();
        mobileFullWidthHandler();
        $(window).off('resize.S123MagicButton.' + _.type).on('resize.S123MagicButton.' + _.type, function() {
            clearTimeout(_.resizeHandler);
            _.resizeHandler = setTimeout(function() {
                addRemoveScreenTypeClass();
                detectLastOption();
                mobileFullWidthHandler();
            }, 500);
        });

        function addRemoveScreenTypeClass() {
            if (findBootstrapEnvironment() == 'xs') {
                _.$container.addClass('mobile-view');
            } else {
                _.$container.removeClass('mobile-view');
            }
        }

        function mobileFullWidthHandler() {
            if (_.type != 'contact') return;
            if (findBootstrapEnvironment() == 'xs') {
                if (IsWizard() && _.MobileFullWidth.initialized) _.MobileFullWidth.destroy();
                _.MobileFullWidth.init({
                    type: _.type,
                    $container: _.$container,
                    activeItems: getActiveItems(_.messageOptions),
                    messageOptions: _.messageOptions,
                    isActive: userData.mobileFullWidth
                });
            } else {
                _.MobileFullWidth.destroy();
            }
        }
    }

    function hideGreeter() {
        if (!_.hasGreeter) return;
        _.Greeter.hide();
    }
    _.Greeter = {
        timeOut: 5000,
        init: function(settings) {
            if (!settings) return;
            var _ = this;
            _.$container = settings.$container;
            _.data = settings.data;
            _.activeItems = settings.activeItems;
            _.messageOptions = settings.messageOptions;
            _.siteName = settings.siteName;
            _.siteLogo = settings.siteLogo;
            _.websiteID = settings.websiteID;
            if (!_.isActive()) return;
            _.$html = $(_.generateHtml());
            _.$container.append(_.$html);
            setTimeout(function() {
                _.show();
            }, _.timeOut);
            _.$html.find('.icon-close').off('click').on('click', function() {
                _.hide();
            });
        },
        show: function() {
            this.$container.addClass('show-greeting');
        },
        hide: function() {
            this.$container.removeClass('show-greeting');
            $.cookie('m_b_g_' + this.websiteID, JSON.stringify({
                disable: true
            }), {
                expires: 1,
                path: '/'
            });
        },
        generateHtml: function() {
            var html = '';
            var hasLogo = this.siteLogo.length > 0;
            html += '<div class="g-m-c" style="visibility: hidden;">';
            html += '<div class="box-heading g-m-header">';
            html += '<span class="icon-close">';
            html += S123.s123IconToSvg.getHtml('times', '', '');
            html += '</span>';
            html += '</div>';
            html += '<div class="g-m-body box-body" data-has-logo="' + hasLogo + '">';
            if (hasLogo) {
                html += '<div class="g-m-logo">';
                if (this.siteLogo.indexOf('site123-image-icon') != -1) {
                    html += S123.s123IconToSvg.getHtml(S123.escapeHtml(this.siteLogo), '', '');
                } else if (this.siteLogo.indexOf('.svg') != -1) {
                    html += '<div class="svg-m" style="mask: url(\'' + this.siteLogo + '\'); -webkit-mask: url(\'' + this.siteLogo + '\');"></div>';
                } else {
                    html += '<img src="' + S123.escapeHtml(this.siteLogo) + '" alt="' + S123.escapeHtml(this.siteName) + '" class="img-responsive">';
                }
                html += '</div>';
            }
            html += '<div class="g-m-content">';
            html += '<p>' + this.data.value + '</p>';
            html += '<ul class="options-list" data-type="magicButtonGreeter">';
            for (var i = 0; i < this.activeItems.length; i++) {
                var key = this.activeItems[i];
                var option = this.messageOptions[key];
                html += '<li class="list-item ' + key + ' ' + key + '-list" style="order:' + option.order + ';">';
                html += '<a ' + getOptionActionAttrByType(option) + ' class="btn-floating">' + option.icon + '</a>';
                html += '</li>';
            }
            html += '</ul>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            return html;
        },
        isActive: function() {
            if ($.cookie('m_b_g_' + this.websiteID)) return false;
            if (!this.data.value) return false;
            if (this.data.value.length === 0) return false;
            return this.data.active;
        }
    };
    _.ExternalLinksPreventor = {
        init: function(settings) {
            var _ = this;
            _.$container = settings.$container;
            _.type = settings.type;
            _.translations = settings.translations;
            if (!_.isActive()) return;
            var host = new RegExp('/' + window.location.host + '/');
            _.$container.find('a').each(function() {
                if (this.href && !host.test(this.href) && this.href.length > 0) {
                    $(this).off('click.ExternalLinksPreventor').on('click.ExternalLinksPreventor', function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        _.showMessage(this.href);
                    });
                }
            });
        },
        showMessage: function(link) {
            topWindow.mbcExternalLinksPreventor = bootbox.alert({
                backdrop: true,
                title: _.translations.ExternalLinksPreventor.title,
                message: _.translations.ExternalLinksPreventor.previewExternalLinkMsg,
                className: 'external-links-preventor'
            });
        },
        isActive: function() {
            if (_.type === 'contact') return false;
            return IsManagment == '2';
        }
    };
    _.MobileFullWidth = {
        initialized: false,
        init: function(settings) {
            if (this.initialized) return;
            var _ = this;
            _.type = settings.type;
            _.$container = settings.$container;
            _.messageOptions = settings.messageOptions;
            _.activeItems = settings.activeItems;
            _.isActive = _.activeItems.length > 0 && _.activeItems.length <= 4 && settings.isActive ? settings.isActive : false;
            if (_.isActive) {
                _.$optionsList = _.$container.find('.m-btn-c[data-type="' + _.type + '"] .options-list:not([data-type="magicButtonGreeter"])');
                _.$optionsList.addClass(getButtonStyle());
                $.each(_.messageOptions, function(index, option) {
                    var $option = _.$optionsList.find('.' + index + '-list');
                    if ($option.length == 0) return;
                    if (option.iconWithColor) {
                        var $newImage = $(option.iconWithColor);
                        $option.find('img').replaceWith($newImage);
                        $newImage.addClass('converted');
                        $newImage.data('option-name', index);
                    }
                    $option.append('<div class="option-title">' + option.title + '</div>');
                });
                _.$container.addClass('m-f-w');
                _.initialized = true;
            }
            _.$container.show();
        },
        destroy: function() {
            if (!this.initialized) return;
            var _ = this;
            _.$container.removeClass('m-f-w');
            _.$optionsList.removeClass(getButtonStyle());
            _.$optionsList.find('.option-title').remove();
            _.$optionsList.find('img.converted').each(function(index, img) {
                if (!$(this).data('option-name')) return;
                $(this).replaceWith(_.messageOptions[$(this).data('option-name')].icon);
            });
            _.initialized = false;
        }
    };
    _.init();
    return _;
}
jQuery(function($) {
    if (IsIE11()) return;
    var $magicButtonSettings = tryParseJSON($('#magicButtonSettings').val());
    var $shareMagicButtonSettings = tryParseJSON($('#shareMagicButtonSettings').val());
    if (IsWizard() || $magicButtonSettings.active || $shareMagicButtonSettings.active) {
        loadCssFile(function() {
            if (IsWizard() || $magicButtonSettings.active) {
                S123.contactMagicButton = new S123MagicButton({
                    containerSelector: '.magic-button-container .all-magic-buttons',
                    jsonSelector: '#magicButtonSettings',
                    type: 'contact',
                    availableNetworks: ['faceBookMessanger', 'whatsApp', 'phone', 'contactUs', 'skype', 'telegram'],
                    websiteID: $('#websiteID').val(),
                    translations: translations.magicBtn,
                    $GLOBALS: typeof $GLOBALS !== 'undefined' ? $GLOBALS : null,
                    menuLayoutNUMSelector: '#layoutNUM',
                    $mainNav: $('#mainNav'),
                    hasGreeter: true,
                    iconPosition: function() {
                        if (!IsWizard()) return;
                        var interface_dir = topWindow.$('html').attr('dir');
                        var website_dir = $('html').attr('dir');
                        if (interface_dir === 'ltr' && website_dir === 'ltr') {
                            return 'left';
                        } else if (interface_dir === 'rtl' && website_dir === 'rtl') {
                            return 'right';
                        } else {
                            return null;
                        }
                    }
                });
            }
            if (IsWizard() || $shareMagicButtonSettings.active) {
                S123.shareMagicButton = new S123MagicButton({
                    containerSelector: '.magic-button-container .all-magic-buttons',
                    jsonSelector: '#shareMagicButtonSettings',
                    type: 'share',
                    availableNetworks: ['faceBook', 'twitter', 'pinterest', 'gmail', 'linkedIn', 'tumblr', 'whatsApp', 'telegram', 'copyLink'],
                    websiteID: $('#websiteID').val(),
                    translations: translations.magicBtn,
                    $GLOBALS: typeof $GLOBALS !== 'undefined' ? $GLOBALS : null,
                    menuLayoutNUMSelector: '#layoutNUM',
                    $mainNav: $('#mainNav'),
                    hasGreeter: false,
                    iconPosition: function() {
                        if (!IsWizard()) return;
                        var interface_dir = topWindow.$('html').attr('dir');
                        var website_dir = $('html').attr('dir');
                        if (interface_dir === 'ltr' && website_dir === 'ltr') {
                            return 'left';
                        } else if (interface_dir === 'rtl' && website_dir === 'rtl') {
                            return 'right';
                        } else {
                            return null;
                        }
                    }
                });
            }
        });
    }

    function loadCssFile(callBack) {
        if ($('head .m-b-css').length > 0) return;
        if (isMinimize) {
            var $cssFile = $('<link class="m-b-css" rel="stylesheet" href="' + $GLOBALS['cdn-system-files'] + '/files/vendor/magic-button/front/css/magic-button-min.css?v=' + $GLOBALS['v-cache'] + '" type="text/css" crossorigin="anonymous">');
        } else {
            var $cssFile = $('<link rel="stylesheet" class="m-b-css" href="' + $GLOBALS['cdn-system-files'] + '/files/vendor/magic-button/front/css/magic-button.css?v=' + $GLOBALS['v-cache'] + '" type="text/css" crossorigin="anonymous">');
        }
        $cssFile.one('load', function() {
            callBack.call(this);
        });
        $('head').append($cssFile);
    }
});