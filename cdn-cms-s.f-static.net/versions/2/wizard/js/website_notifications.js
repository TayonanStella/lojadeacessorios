/**
 * Websites Notification Object
 */
var WebsiteNotification = (function() {

    // Create object
    var Notification = {
        rtl: ($('html[dir=rtl]').length !== 0 ? true : false),
        isMobile: ($('html[data-device="mobile"]').length !== 0 ? true : false),
        ignorePackageChangedMessage: false
    };

    /**
     * Initialize
     */
    Notification.init = function(settings) {
        // set settings
        Notification.page_type = settings.page_type;
        Notification.$container = settings.$container;
        Notification.user_id = settings.user_id;
        Notification.websiteID = settings.websiteID;
        Notification.website_uniqueID = settings.website_uniqueID;
        Notification.trialBOO = settings.trialBOO;
        Notification.light_mode = settings.light_mode;
        Notification.popover_placement = settings.popover_placement;
        // generate the notifications initialize HTML
        Notification.generateInitHTML();
        // create a notifications Dom object
        var $n = $('<div class="wizard-website-notification"></div>');
        // Add the notifications popover content counters
        $n.counters = {
            notification: $('#notificationsPopoverContent .li-no-new-notification'),
            forms: $('#notificationsPopoverContent .n-p-c-form-messages .counter'),
            store: $('#notificationsPopoverContent .n-p-c-store .counter'),
            articles: $('#notificationsPopoverContent .n-p-c-articles .counter'),
            blog: $('#notificationsPopoverContent .n-p-c-blog .counter'),
            mailingList: $('#notificationsPopoverContent .n-p-c-mailing-list .counter'),
            events: $('#notificationsPopoverContent .n-p-c-events .counter'),
            jobs: $('#notificationsPopoverContent .n-p-c-jobs .counter'),
            pricing: $('#notificationsPopoverContent .n-p-c-pricing .counter'),
            donate: $('#notificationsPopoverContent .n-p-c-donate .counter'),
            scheduleBooking: $('#notificationsPopoverContent .n-p-c-schedule-booking .counter'),
            restaurantReservations: $('#notificationsPopoverContent .n-p-c-restaurant-reservations .counter'),
            foodDelivery: $('#notificationsPopoverContent .n-p-c-food-delivery .counter'),
            eCommerce: $('#notificationsPopoverContent .n-p-c-e-commerce .counter'),
            eCommerce_review: $('#notificationsPopoverContent .n-p-c-e-commerce-review .counter'),
            eCommerce_backInStock: $('#notificationsPopoverContent .n-p-c-e-back-in-stock .counter'),
            onlineCourses: $('#notificationsPopoverContent .n-p-c-online-courses .counter')
        };
        // add the dashboard activities counters
        if (Notification.page_type === 'dashboard') {
            $n.dashboard_counters = {
                forms: $('.activityButtons .form-notifications-counter'),
                store: $('.activityButtons [data-module-type="37"] .store-notifications-counter'),
                articles: $('.activityButtons .articles-notifications-counter'),
                blog: $('.activityButtons .blog-notifications-counter'),
                mailingList: $('.activityButtons .mailing-notifications-counter'),
                events: $('.activityButtons .events-notifications-counter'),
                jobs: $('.activityButtons .jobs-notifications-counter'),
                pricing: $('.activityButtons .pricing-table-notifications-counter'),
                donate: $('.activityButtons .donate-notifications-counter'),
                scheduleBooking: $('.activityButtons .schedule-booking-notifications-counter'),
                restaurantReservations: $('.activityButtons .restaurant-reservations-notifications-counter'),
                foodDelivery: $('.activityButtons .food-delivery-notifications-counter'),
                eCommerce: $('.activityButtons [data-module-type="112"] .store-notifications-counter'),
                onlineCourses: $('.activityButtons .online-courses-notifications-counter')
            };
        }
        // Notifications popover initialize
        Notification.popover.init();
        // append the object relatively to the container
        Notification.$container.css({
            position: 'relative'
        }).append($n);
        // notifications updating initialize
        Notification.update();
        // initialize the pusher object to update the notifications on real time
        Pusher_SetEvent('channel-website-notification-' + Notification.websiteID, 'messageEvent', function() {
            // notifications updating initialize
            Notification.update();
        });
        // initialize the pusher object to reload the wizard on real time when the package changed
        Pusher_SetEvent('channel-website-wizard-reload-' + Notification.websiteID, 'messageEvent', function() {
            // notifications updating initialize
            Notification.update();
        });
        // initialize the pusher object to show the Sale (coupon discount) on real time when he got one
        Pusher_SetEvent('channel-user-sale-refresh' + Notification.user_id, 'messageEvent', function() {
            // notifications updating initialize
            Notification.update();
        });
        // set objects
        Notification.$n = $n;
    };

    /**
     * The function generate the notifications initialize HTML.
     */
    Notification.generateInitHTML = function() {
        $html = `
		<!-- Website Notifications -->
        <div class="hidden">
            <div id="notificationsPopoverContent" class="form-group">
                <ul class="list-unstyled">
                    <li class="li-no-new-notification hidden">
                        <span>${translations.websiteNotification.noNewNotifications}</span>
                    </li>
                    <li class="li-form-messages hidden">
                        <a class="n-p-c-form-messages" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=messages" target="_blank"><i class="fal fa-envelope"></i><span class="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.formMessages}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-articles hidden">
                        <a class="n-p-c-articles" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=17" target="_blank"><i class="fal fa-comments"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.articleComments}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-blog hidden">
                        <a class="n-p-c-blog" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=52" target="_blank"><i class="fal fa-comments"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.blogComments}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-store hidden">
                        <a class="n-p-c-store" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=37" target="_blank"><i class="fal fa-dollar"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.storeOrders}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-mailing-list hidden">
                        <a class="n-p-c-mailing-list" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=mailing" target="_blank"><i class="fal fa-paper-plane"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.mailingList}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-events hidden">
                        <a class="n-p-c-events" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=2" target="_blank"><i class="fal fa-ticket"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.events}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-jobs hidden">
                        <a class="n-p-c-jobs" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=40" target="_blank"><i class="fal fa-briefcase"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.jobs}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-pricing hidden">
                        <a class="n-p-c-pricing" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=10" target="_blank"><i class="fal fa-money-bill"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.pricingTable}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-donate hidden">
                        <a class="n-p-c-donate" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=15" target="_blank"><i class="fal fa-credit-card"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.donate}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-schedule-booking hidden">
                        <a class="n-p-c-schedule-booking" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=96" target="_blank"><i class="fal fa-calendar"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.scheduleBooking}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-restaurant-reservations hidden">
                        <a class="n-p-c-restaurant-reservations" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=94" target="_blank"><i class="fal fa-cutlery"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.restaurantReservations}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-food-delivery hidden">
                        <a class="n-p-c-food-delivery" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=97" target="_blank"><i class="fal fa-truck"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.foodDelivery}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-e-commerce hidden">
                        <a class="n-p-c-e-commerce" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=112" target="_blank"><i class="fal fa-money-bill"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.store}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-e-commerce-review hidden">
                        <a class="n-p-c-e-commerce-review" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=112&customActiveTab=reviews" target="_blank"><i class="fal fa-money-bill"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.storeReview}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-e-commerce-back-in-stock hidden">
                        <a class="n-p-c-e-back-in-stock" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=112&customActiveTab=backInStock" target="_blank"><i class="fal fa-money-bill"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.storeBackInStockRequest}&nbsp;&nbsp;</a>
                    </li>
                    <li class="li-online-courses hidden">
                        <a class="n-p-c-online-courses" href="/versions/2/wizard/modules/mDash.php?wu=${Notification.website_uniqueID}&t=142" target="_blank"><i class="fal fa-graduation-cap"></i><span dir="ltr">&nbsp;<span class="counter">0</span></span>&nbsp;${translations.websiteNotification.onlineCourses}&nbsp;&nbsp;</a>
                    </li>
                </ul>
            </div>
        </div>`;
        // append the HTML
        $('body').append($html);
    }

    /**
     * The function count the notification number and sent it to a callback function.
     */
    Notification.count = function(callback) {
        // secure parameters
        if (!$.isNumeric(Notification.websiteID)) return;
        // count the notification number via Ajax
        $.post('/versions/' + versionNUM + '/wizard/include/websiteNotificationsV_beta_V4.php', {
            w: Notification.websiteID,
            type: 'total'
        }).done(function(data) {
            // get object
            data = tryParseJSON(data);
            // security - check if the data is an object
            if (!data || typeof data !== "object") return;
            // run call back
            callback.call(this, data.notifications);
            // run upgrade button
            Notification.constructUpgradeButton(data.sale);
            // add discount
            if (Notification.page_type === 'wizard') {
                addDiscountToUpgradeModal(Notification.websiteID, data.sale);
            }
            // run global page event for other tools
            $(document).trigger('s123.wizard_notification_loaded', [data]);
            // check if the user package changed if it did will alert him to refresh
            if (Notification.page_type === 'wizard' &&
                data.packageNUM != packageNUM &&
                !Notification.ignorePackageChangedMessage &&
                !isBsModalOpen('#packageChangedModal')) {
                // show the package changed modal
                var packageChangedModal = bootbox.confirm({
                    title: '<span><b>' + translations.packageChangeTitle + '</b></span>',
                    message: translations.packageChangeMessageWizard,
                    buttons: {
                        confirm: {
                            label: translations.yes,
                            className: 'btn-success'
                        },
                        cancel: {
                            label: translations.no,
                            className: 'btn-default'
                        }
                    },
                    callback: function(result) {
                        // refreshing the page 
                        if (result == true) {
                            window.location.reload();
                            // update flag ignore package changed message because the user click on No button
                        } else if (result == false) {
                            Notification.ignorePackageChangedMessage = true;
                        }
                    }
                });
                // add ID on the package changed modal
                packageChangedModal.on("shown.bs.modal", function() {
                    packageChangedModal.attr("id", "packageChangedModal");
                });
            }
            // we removed the publish count until we decide about that
            $('.unPublishChangesCount').hide();
        });
    }

    /**
     * The function is creating the upgrade button with a counter
     */
    Notification.constructUpgradeButton = function(data) {
        // remove the button to prevent duplicated buttons
        $('#discountButton').remove();
        // no need to execute if there is no data
        if (data.saleReducedNUM == 0 || data.saleExpiry == '') return;
        // set the HTML
        var html = '';
        html = '<div id="discountButton">';
        html += '<span class="d-b-sale-seperator">&nbsp;-&nbsp;</span>';
        html += '<span class="d-b-sale-amount">' + translations.DiscountOFF.replace('{{discount_percentage}}', data.saleReducedNUM) + '</span>';
        html += '<span class="d-b-sale-expiry" id="saleExpiry">' + data.saleExpiry + '</span>';
        html += '</div>';
        // append the HTML
        $(html).appendTo('#upgradeButtonButton');
        // show discount timer
        $("#saleExpiry").countdown(ConvertUtcToLocalTime($("#saleExpiry").html()), function(event) {
            var totalHours = event.offset.totalDays * 24 + event.offset.hours;
            $(this).html(event.strftime(totalHours + ':%M:%S'));
        });
    }

    /**
     * The function update the notifications number.
     */
    Notification.update = function(callback) {
        Notification.count(function(data) {
            // parse the data if it's not an object
            if (typeof data !== 'object') {
                // get object
                data = tryParseJSON(data);
            }
            // security - check if the data is an object
            if (!data || typeof data !== "object") return;
            /**
             * Update websites notifications and we display the new notification in
             * the popover only if the user have notification in the same tool .
             */
            if ($.isNumeric(data.forms)) {
                if (data.forms != 0) {
                    Notification.$n.counters.forms.html('+' + data.forms);
                    Notification.$n.counters.forms.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.forms.html(data.forms);
                        Notification.$n.dashboard_counters.forms.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.forms.closest('li').addClass('hidden');
                    Notification.$n.counters.forms.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.forms.html(0);
                        Notification.$n.dashboard_counters.forms.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.products)) {
                if (data.products != 0) {
                    Notification.$n.counters.store.html('+' + data.products);
                    Notification.$n.counters.store.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.store.html(data.products);
                        Notification.$n.dashboard_counters.store.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.store.closest('li').addClass('hidden');
                    Notification.$n.counters.store.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.store.html(0);
                        Notification.$n.dashboard_counters.store.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.articles)) {
                if (data.articles != 0) {
                    Notification.$n.counters.articles.html('+' + data.articles);
                    Notification.$n.counters.articles.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.articles.html(data.articles);
                        Notification.$n.dashboard_counters.articles.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.articles.closest('li').addClass('hidden');
                    Notification.$n.counters.articles.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.articles.html(0);
                        Notification.$n.dashboard_counters.articles.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.blog)) {
                if (data.blog != 0) {
                    Notification.$n.counters.blog.html('+' + data.blog);
                    Notification.$n.counters.blog.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.blog.html(data.blog);
                        Notification.$n.dashboard_counters.blog.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.blog.closest('li').addClass('hidden');
                    Notification.$n.counters.blog.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.blog.html(0);
                        Notification.$n.dashboard_counters.blog.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.mailingList)) {
                if (data.mailingList != 0) {
                    Notification.$n.counters.mailingList.html('+' + data.mailingList);
                    Notification.$n.counters.mailingList.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.mailingList.html(data.mailingList);
                        Notification.$n.dashboard_counters.mailingList.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.mailingList.closest('li').addClass('hidden');
                    Notification.$n.counters.mailingList.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.mailingList.html(0);
                        Notification.$n.dashboard_counters.mailingList.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.events)) {
                if (data.events != 0) {
                    Notification.$n.counters.events.html('+' + data.events);
                    Notification.$n.counters.events.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.events.html(data.events);
                        Notification.$n.dashboard_counters.events.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.events.closest('li').addClass('hidden');
                    Notification.$n.counters.events.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.events.html(0);
                        Notification.$n.dashboard_counters.events.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.jobs)) {
                if (data.jobs != 0) {
                    Notification.$n.counters.jobs.html('+' + data.jobs);
                    Notification.$n.counters.jobs.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.jobs.html(data.jobs);
                        Notification.$n.dashboard_counters.jobs.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.jobs.closest('li').addClass('hidden');
                    Notification.$n.counters.jobs.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.jobs.html(0);
                        Notification.$n.dashboard_counters.jobs.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.pricing)) {
                if (data.pricing != 0) {
                    Notification.$n.counters.pricing.html('+' + data.pricing);
                    Notification.$n.counters.pricing.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.pricing.html(data.pricing);
                        Notification.$n.dashboard_counters.pricing.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.pricing.closest('li').addClass('hidden');
                    Notification.$n.counters.pricing.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.pricing.html(0);
                        Notification.$n.dashboard_counters.pricing.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.donate)) {
                if (data.donate != 0) {
                    Notification.$n.counters.donate.html('+' + data.donate);
                    Notification.$n.counters.donate.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.donate.html(data.donate);
                        Notification.$n.dashboard_counters.donate.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.donate.closest('li').addClass('hidden');
                    Notification.$n.counters.donate.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.donate.html(0);
                        Notification.$n.dashboard_counters.donate.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.scheduleBooking)) {
                if (data.scheduleBooking != 0) {
                    Notification.$n.counters.scheduleBooking.html('+' + data.scheduleBooking);
                    Notification.$n.counters.scheduleBooking.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.scheduleBooking.html(data.scheduleBooking);
                        Notification.$n.dashboard_counters.scheduleBooking.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.scheduleBooking.closest('li').addClass('hidden');
                    Notification.$n.counters.scheduleBooking.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.scheduleBooking.html(0);
                        Notification.$n.dashboard_counters.scheduleBooking.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.restaurantReservations)) {
                if (data.restaurantReservations != 0) {
                    Notification.$n.counters.restaurantReservations.html('+' + data.restaurantReservations);
                    Notification.$n.counters.restaurantReservations.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.restaurantReservations.html(data.restaurantReservations);
                        Notification.$n.dashboard_counters.restaurantReservations.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.restaurantReservations.closest('li').addClass('hidden');
                    Notification.$n.counters.restaurantReservations.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.restaurantReservations.html(0);
                        Notification.$n.dashboard_counters.restaurantReservations.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.foodDelivery)) {
                if (data.foodDelivery != 0) {
                    Notification.$n.counters.foodDelivery.html('+' + data.foodDelivery);
                    Notification.$n.counters.foodDelivery.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.foodDelivery.html(data.foodDelivery);
                        Notification.$n.dashboard_counters.foodDelivery.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.foodDelivery.closest('li').addClass('hidden');
                    Notification.$n.counters.foodDelivery.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.foodDelivery.html(0);
                        Notification.$n.dashboard_counters.foodDelivery.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.eCommerce)) {
                if (data.eCommerce != 0) {
                    Notification.$n.counters.eCommerce.html('+' + data.eCommerce);
                    Notification.$n.counters.eCommerce.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.eCommerce.html(data.eCommerce);
                        Notification.$n.dashboard_counters.eCommerce.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.eCommerce.closest('li').addClass('hidden');
                    Notification.$n.counters.eCommerce.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.eCommerce.html(0);
                        Notification.$n.dashboard_counters.eCommerce.addClass('hidden');
                    }
                }
                if (Notification.$n.dashboard_counters) {
                    var tmp_counter = $.isNumeric(data.eCommerce) ? data.eCommerce : 0;
                    tmp_counter += $.isNumeric(data.eCommerce_review) ? data.eCommerce_review : 0;
                    tmp_counter += $.isNumeric(data.eCommerce_backInStock) ? data.eCommerce_backInStock : 0;
                    if (tmp_counter != 0) {
                        Notification.$n.dashboard_counters.eCommerce.html(tmp_counter);
                        Notification.$n.dashboard_counters.eCommerce.removeClass('hidden');
                    } else {
                        Notification.$n.dashboard_counters.eCommerce.html(0);
                        Notification.$n.dashboard_counters.eCommerce.addClass('hidden');
                    }
                }
            }
            if ($.isNumeric(data.eCommerce_review)) {
                if (data.eCommerce_review != 0) {
                    Notification.$n.counters.eCommerce_review.html('+' + data.eCommerce_review);
                    Notification.$n.counters.eCommerce_review.closest('li').removeClass('hidden');
                } else {
                    Notification.$n.counters.eCommerce_review.closest('li').addClass('hidden');
                    Notification.$n.counters.eCommerce_review.html(0);
                }
            }
            if ($.isNumeric(data.eCommerce_backInStock)) {
                if (data.eCommerce_backInStock != 0) {
                    Notification.$n.counters.eCommerce_backInStock.html('+' + data.eCommerce_backInStock);
                    Notification.$n.counters.eCommerce_backInStock.closest('li').removeClass('hidden');
                } else {
                    Notification.$n.counters.eCommerce_backInStock.closest('li').addClass('hidden');
                    Notification.$n.counters.eCommerce_backInStock.html(0);
                }
            }
            if ($.isNumeric(data.onlineCourses)) {
                if (data.onlineCourses != 0) {
                    Notification.$n.counters.onlineCourses.html('+' + data.onlineCourses);
                    Notification.$n.counters.onlineCourses.closest('li').removeClass('hidden');
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.onlineCourses.html(data.onlineCourses);
                        Notification.$n.dashboard_counters.onlineCourses.removeClass('hidden');
                    }
                } else {
                    Notification.$n.counters.onlineCourses.closest('li').addClass('hidden');
                    Notification.$n.counters.onlineCourses.html(0);
                    if (Notification.$n.dashboard_counters) {
                        Notification.$n.dashboard_counters.onlineCourses.html(0);
                        Notification.$n.dashboard_counters.onlineCourses.addClass('hidden');
                    }
                }
            }
            if (!$.isNumeric(data.total)) return;
            if (data.total != 0) {
                Notification.$n.counters.notification.addClass('hidden');
                //$('#notificationsPopoverContent .li-no-new-notification').addClass('hidden');
                Notification.$n.text(data.total).css({
                    'opacity': 1,
                    'pointer-events': 'auto'
                });
            } else {
                Notification.$n.counters.notification.removeClass('hidden');
                //$('#notificationsPopoverContent .li-no-new-notification').removeClass('hidden');
                Notification.$n.css({
                    'opacity': 0,
                    'pointer-events': 'none'
                });
            }
        });
    }

    /**
     * Notifications popover
     */
    Notification.popover = {
        /**
         * Notifications popover initialize
         */
        init: function() {
            // set objects
            this.$btn = $('#wizardTab0button');
            this.$content = $('#notificationsPopoverContent');
            // set the popover template
            let template = '';
            template += '<div class="popover wizard-notification" data-page-type="' + Notification.page_type + '">';
            template += '<div class="arrow"></div>';
            template += '<h3 class="popover-title"></h3>';
            template += '<div class="popover-content"></div>';
            if (Notification.page_type === 'wizard') {
                template += '<h3 class="popover-footer"><div class="form-group wizard-light-mode-box hidden"><span>Light Mode</span><input type="hidden" name="wizardLightMode" value="off"><label class="pull-right"><input id="showWizardLightMode" name="showWizardLightMode" class="ace ace-switch" type="checkbox"><span class="lbl"></span></label></div><a id="returnToDash" onclick="SendUserToDashboard(\'/versions/' + versionNUM + '/wizard/dashboard.php?wu=' + Notification.website_uniqueID + '\');"><i class="fal fa-arrow-left" aria-hidden="true"></i>' + translations.ReturnToDashboard + '</a><a id="wizardLogoutLink" href="/manager/login/logout.php?l=' + t_language + '"><i class="ace-icon fal fa-power-off"></i>' + translations.logout + '</a></h3>';
            }
            template += '</div>';
            /**
             * Bootstrap's Popovers Plugin Initial
             * Documentation : http://getbootstrap.com/javascript/#popovers
             */
            Notification.popover.$btn.popover({
                container: 'body',
                title: translations.Notifications,
                content: Notification.popover.$content,
                html: true,
                trigger: 'manual',
                template: template,
                placement: Notification.popover_placement
            });
            /**
             * When we added the trial banner at the top the popover top
             * position calculate has an issue so we fix it.
             */
            if (Notification.trialBOO) {
                Notification.popover.fixTopPosition();
            }
            // Fire when the popover has been made visible (will wait for CSS transitions to complete)
            Notification.popover.$btn.on('shown.bs.popover', function() {
                // initial `showWizardLightMode` checkbox 
                if (Notification.light_mode && Notification.light_mode == 1) {
                    $('.wizard-notification #showWizardLightMode').attr('checked', true);
                }
                // initial Bootstrap Tooltip
                $('.popover.modules-setting [data-rel=tooltip]').tooltip({
                    container: 'body',
                    placement: 'auto'
                });
                // destroy the Popover when the user clicks outside it
                $(document).on('mousedown.notificationsPopover', function(event) {
                    // prevent multiple hides when user clicks on the setting button itself
                    if ($(event.target).closest(Notification.popover.$btn).length !== 0) return;
                    if ($(event.target).closest('.popover.wizard-notification').length === 0) {
                        Notification.popover.hide();
                    }
                });
                // destroy the Popover when the user on iFrames
                $(window).one('blur.notificationsPopover', function(event) {
                    Notification.popover.hide();
                });
                // change light wizard theme
                $('.wizard-notification #showWizardLightMode').off('change').on('change', function() {
                    // get object
                    var isChecked = $(this).is(':checked');
                    if (isChecked) {
                        Notification.light_mode = 1;
                    } else {
                        Notification.light_mode = 0;
                    }
                    // change the wizard theme - dark / light
                    ChangeWizardTheme();
                    // save wizard theme
                    $.ajax({
                        type: "POST",
                        url: "/manager/login/updateLightMode.php",
                        data: {
                            showWizardLightMode: isChecked
                        }
                    });
                });
            });
            // Home Tab
            Notification.popover.$btn.on('click', function(event) {
                // if the popover is open we close it
                if (Notification.popover.$btn.data('p-o-open')) {
                    Notification.popover.hide();
                    return;
                }
                Notification.popover.show();
            });
        },
        /**
         * Display the notifications popover
         */
        show: function() {
            Notification.popover.$btn.data('p-o-open', true);
            Notification.popover.$btn.popover('show');
        },
        /**
         * Hide the notifications popover
         */
        hide: function() {
            Notification.popover.$btn.data('p-o-open', false);
            Notification.popover.$btn.popover('hide');
            $(document).off('mousedown.notificationsPopover');
            $(window).off('blur.notificationsPopover');
            $(window).off('scroll.notificationsPopover');
        },
        /**
         * Fix the top position of the popover.
         */
        fixTopPosition: function() {
            // calculate the top position 
            var top = WebsiteNotification.popover.$btn.offset().top + (WebsiteNotification.popover.$btn.height() / 2) - 10;
            // append the top via `style` because we can't do it via JS
            if (Notification.page_type === 'wizard') {
                $('body').append('<style>.popover.wizard-notification { top: ' + top + 'px !important }</style>');
            }
        }
    };

    // Return the object
    return Notification;
})();