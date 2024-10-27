"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t)
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function _createSuper(i) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(i);
        if (r) {
            var n = _getPrototypeOf(this).constructor;
            e = Reflect.construct(t, arguments, n)
        } else e = t.apply(this, arguments);
        return _possibleConstructorReturn(this, e)
    }
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
    } catch (e) {
        return !1
    }
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function _createForOfIteratorHelper(e, t) {
    var n;
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
                r = function() {};
            return {
                s: r,
                n: function() {
                    return i >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[i++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: r
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var o, a = !0,
        l = !1;
    return {
        s: function() {
            n = e[Symbol.iterator]()
        },
        n: function() {
            var e = n.next();
            return a = e.done, e
        },
        e: function(e) {
            l = !0, o = e
        },
        f: function() {
            try {
                a || null == n.return || n.return()
            } finally {
                if (l) throw o
            }
        }
    }
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var Emitter = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, [{
            key: "on",
            value: function(e, t) {
                return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
            }
        }, {
            key: "emit",
            value: function(e) {
                this._callbacks = this._callbacks || {};
                var t = this._callbacks[e];
                if (t) {
                    for (var n = arguments.length, i = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    var o, a = _createForOfIteratorHelper(t);
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            o.value.apply(this, i)
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                }
                return this
            }
        }, {
            key: "off",
            value: function(e, t) {
                if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
                var n = this._callbacks[e];
                if (!n) return this;
                if (1 === arguments.length) return delete this._callbacks[e], this;
                for (var i = 0; i < n.length; i++) {
                    if (n[i] === t) {
                        n.splice(i, 1);
                        break
                    }
                }
                return this
            }
        }]), e
    }(),
    Dropzone = function() {
        _inherits(b, Emitter);
        var a = _createSuper(b);

        function b(e, t) {
            var n, i, r;
            if (_classCallCheck(this, b), (n = a.call(this)).element = e, n.version = b.version, n.defaultOptions.previewTemplate = n.defaultOptions.previewTemplate.replace(/\n*/g, ""), n.clickableElements = [], n.listeners = [], n.files = [], "string" == typeof n.element && (n.element = document.querySelector(n.element)), !n.element || null == n.element.nodeType) throw new Error("Invalid dropzone element.");
            if (n.element.dropzone) throw new Error("Dropzone already attached.");
            b.instances.push(_assertThisInitialized(n)), n.element.dropzone = _assertThisInitialized(n);
            var o = null != (r = b.optionsForElement(n.element)) ? r : {};
            if (n.options = b.extend({}, n.defaultOptions, o, null != t ? t : {}), n.options.forceFallback || !b.isBrowserSupported()) return _possibleConstructorReturn(n, n.options.fallback.call(_assertThisInitialized(n)));
            if (null == n.options.url && (n.options.url = n.element.getAttribute("action")), !n.options.url) throw new Error("No URL provided.");
            if (n.options.acceptedFiles && n.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            if (n.options.uploadMultiple && n.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
            return n.options.acceptedMimeTypes && (n.options.acceptedFiles = n.options.acceptedMimeTypes, delete n.options.acceptedMimeTypes), null != n.options.renameFilename && (n.options.renameFile = function(e) {
                return n.options.renameFilename.call(_assertThisInitialized(n), e.name, e)
            }), "string" == typeof n.options.method && (n.options.method = n.options.method.toUpperCase()), (i = n.getExistingFallback()) && i.parentNode && i.parentNode.removeChild(i), !1 !== n.options.previewsContainer && (n.options.previewsContainer ? n.previewsContainer = b.getElement(n.options.previewsContainer, "previewsContainer") : n.previewsContainer = n.element), n.options.clickable && (!0 === n.options.clickable ? n.clickableElements = [n.element] : n.clickableElements = b.getElements(n.options.clickable, "clickable")), n.init(), n
        }
        return _createClass(b, null, [{
            key: "initClass",
            value: function() {
                this.prototype.Emitter = Emitter, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype.defaultOptions = {
                    url: null,
                    method: "post",
                    withCredentials: !1,
                    timeout: 3e4,
                    parallelUploads: 2,
                    uploadMultiple: !1,
                    chunking: !1,
                    forceChunking: !1,
                    chunkSize: 2e6,
                    parallelChunkUploads: !1,
                    retryChunks: !1,
                    retryChunksLimit: 3,
                    maxFilesize: 256,
                    paramName: "file",
                    createImageThumbnails: !0,
                    maxThumbnailFilesize: 10,
                    thumbnailWidth: 120,
                    thumbnailHeight: 120,
                    thumbnailMethod: "crop",
                    resizeWidth: null,
                    resizeHeight: null,
                    resizeMimeType: null,
                    resizeQuality: .8,
                    resizeMethod: "contain",
                    filesizeBase: 1e3,
                    maxFiles: null,
                    headers: null,
                    clickable: !0,
                    ignoreHiddenFiles: !0,
                    acceptedFiles: null,
                    acceptedMimeTypes: null,
                    autoProcessQueue: !0,
                    autoQueue: !0,
                    addRemoveLinks: !1,
                    previewsContainer: null,
                    hiddenInputContainer: "body",
                    capture: null,
                    renameFilename: null,
                    renameFile: null,
                    forceFallback: !1,
                    dictDefaultMessage: "Drop files here to upload",
                    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                    dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                    dictInvalidFileType: "You can't upload files of this type.",
                    dictResponseError: "Server responded with {{statusCode}} code.",
                    dictCancelUpload: "Cancel upload",
                    dictUploadCanceled: "Upload canceled.",
                    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                    dictRemoveFile: "Remove file",
                    dictRemoveFileConfirmation: null,
                    dictMaxFilesExceeded: "You can not upload any more files.",
                    dictFileSizeUnits: {
                        tb: "TB",
                        gb: "GB",
                        mb: "MB",
                        kb: "KB",
                        b: "b"
                    },
                    init: function() {},
                    params: function(e, t, n) {
                        if (n) return {
                            dzuuid: n.file.upload.uuid,
                            dzchunkindex: n.index,
                            dztotalfilesize: n.file.size,
                            dzchunksize: this.options.chunkSize,
                            dztotalchunkcount: n.file.upload.totalChunkCount,
                            dzchunkbyteoffset: n.index * this.options.chunkSize
                        }
                    },
                    accept: function(e, t) {
                        return t()
                    },
                    chunksUploaded: function(e, t) {
                        t()
                    },
                    fallback: function() {
                        var e;
                        this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
                        var t, n = _createForOfIteratorHelper(this.element.getElementsByTagName("div"));
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i = t.value;
                                if (/(^| )dz-message($| )/.test(i.className)) {
                                    (e = i).className = "dz-message";
                                    break
                                }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        e || (e = b.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e));
                        var r = e.getElementsByTagName("span")[0];
                        return r && (null != r.textContent ? r.textContent = this.options.dictFallbackMessage : null != r.innerText && (r.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
                    },
                    resize: function(e, t, n, i) {
                        var r = {
                                srcX: 0,
                                srcY: 0,
                                srcWidth: e.width,
                                srcHeight: e.height
                            },
                            o = e.width / e.height;
                        null == t && null == n ? (t = r.srcWidth, n = r.srcHeight) : null == t ? t = n * o : null == n && (n = t / o);
                        var a = (t = Math.min(t, r.srcWidth)) / (n = Math.min(n, r.srcHeight));
                        if (r.srcWidth > t || r.srcHeight > n)
                            if ("crop" === i) a < o ? (r.srcHeight = e.height, r.srcWidth = r.srcHeight * a) : (r.srcWidth = e.width, r.srcHeight = r.srcWidth / a);
                            else {
                                if ("contain" !== i) throw new Error("Unknown resizeMethod '".concat(i, "'"));
                                a < o ? n = t / o : t = n * o
                            }
                        return r.srcX = (e.width - r.srcWidth) / 2, r.srcY = (e.height - r.srcHeight) / 2, r.trgWidth = t, r.trgHeight = n, r
                    },
                    transformFile: function(e, t) {
                        return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e)
                    },
                    previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Check</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Error</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                    drop: function() {
                        return this.element.classList.remove("dz-drag-hover")
                    },
                    dragstart: function() {},
                    dragend: function() {
                        return this.element.classList.remove("dz-drag-hover")
                    },
                    dragenter: function() {
                        return this.element.classList.add("dz-drag-hover")
                    },
                    dragover: function() {
                        return this.element.classList.add("dz-drag-hover")
                    },
                    dragleave: function() {
                        return this.element.classList.remove("dz-drag-hover")
                    },
                    paste: function() {},
                    reset: function() {
                        return this.element.classList.remove("dz-started")
                    },
                    addedfile: function(t) {
                        var n = this;
                        if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                            t.previewElement = b.createElement(this.options.previewTemplate.trim()), t.previewTemplate = t.previewElement, this.previewsContainer.appendChild(t.previewElement);
                            var e, i = _createForOfIteratorHelper(t.previewElement.querySelectorAll("[data-dz-name]"));
                            try {
                                for (i.s(); !(e = i.n()).done;) {
                                    var r = e.value;
                                    r.textContent = t.name
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            var o, a = _createForOfIteratorHelper(t.previewElement.querySelectorAll("[data-dz-size]"));
                            try {
                                for (a.s(); !(o = a.n()).done;)(r = o.value).innerHTML = this.filesize(t.size)
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            this.options.addRemoveLinks && (t._removeLink = b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>")), t.previewElement.appendChild(t._removeLink));
                            var l, s = function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.status === b.UPLOADING ? b.confirm(n.options.dictCancelUploadConfirmation, function() {
                                        return n.removeFile(t)
                                    }) : n.options.dictRemoveFileConfirmation ? b.confirm(n.options.dictRemoveFileConfirmation, function() {
                                        return n.removeFile(t)
                                    }) : n.removeFile(t)
                                },
                                u = _createForOfIteratorHelper(t.previewElement.querySelectorAll("[data-dz-remove]"));
                            try {
                                for (u.s(); !(l = u.n()).done;) {
                                    l.value.addEventListener("click", s)
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        }
                    },
                    removedfile: function(e) {
                        return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
                    },
                    thumbnail: function(e, t) {
                        if (e.previewElement) {
                            e.previewElement.classList.remove("dz-file-preview");
                            var n, i = _createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-thumbnail]"));
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var r = n.value;
                                    r.alt = e.name, r.src = t
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            return setTimeout(function() {
                                return e.previewElement.classList.add("dz-image-preview")
                            }, 1)
                        }
                    },
                    error: function(e, t) {
                        if (e.previewElement) {
                            e.previewElement.classList.add("dz-error"), "string" != typeof t && t.error && (t = t.error);
                            var n, i = _createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-errormessage]"));
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    n.value.textContent = t
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                    },
                    errormultiple: function() {},
                    processing: function(e) {
                        if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.innerHTML = this.options.dictCancelUpload
                    },
                    processingmultiple: function() {},
                    uploadprogress: function(e, t) {
                        if (e.previewElement) {
                            var n, i = _createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-uploadprogress]"));
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var r = n.value;
                                    "PROGRESS" === r.nodeName ? r.value = t : r.style.width = "".concat(t, "%")
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                    },
                    totaluploadprogress: function() {},
                    sending: function() {},
                    sendingmultiple: function() {},
                    success: function(e) {
                        if (e.previewElement) return e.previewElement.classList.add("dz-success")
                    },
                    successmultiple: function() {},
                    canceled: function(e) {
                        return this.emit("error", e, this.options.dictUploadCanceled)
                    },
                    canceledmultiple: function() {},
                    complete: function(e) {
                        if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete")
                    },
                    completemultiple: function() {},
                    maxfilesexceeded: function() {},
                    maxfilesreached: function() {},
                    queuecomplete: function() {},
                    addedfiles: function() {}
                }, this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1
            }
        }, {
            key: "extend",
            value: function(e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                for (var r = 0, o = n; r < o.length; r++) {
                    var a = o[r];
                    for (var l in a) {
                        var s = a[l];
                        e[l] = s
                    }
                }
                return e
            }
        }]), _createClass(b, [{
            key: "getAcceptedFiles",
            value: function() {
                return this.files.filter(function(e) {
                    return e.accepted
                }).map(function(e) {
                    return e
                })
            }
        }, {
            key: "getRejectedFiles",
            value: function() {
                return this.files.filter(function(e) {
                    return !e.accepted
                }).map(function(e) {
                    return e
                })
            }
        }, {
            key: "getFilesWithStatus",
            value: function(t) {
                return this.files.filter(function(e) {
                    return e.status === t
                }).map(function(e) {
                    return e
                })
            }
        }, {
            key: "getQueuedFiles",
            value: function() {
                return this.getFilesWithStatus(b.QUEUED)
            }
        }, {
            key: "getUploadingFiles",
            value: function() {
                return this.getFilesWithStatus(b.UPLOADING)
            }
        }, {
            key: "getAddedFiles",
            value: function() {
                return this.getFilesWithStatus(b.ADDED)
            }
        }, {
            key: "getActiveFiles",
            value: function() {
                return this.files.filter(function(e) {
                    return e.status === b.UPLOADING || e.status === b.QUEUED
                }).map(function(e) {
                    return e
                })
            }
        }, {
            key: "init",
            value: function() {
                var o = this;
                if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(b.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage, "</button></div>"))), this.clickableElements.length) {
                    ! function r() {
                        return o.hiddenFileInput && o.hiddenFileInput.parentNode.removeChild(o.hiddenFileInput), o.hiddenFileInput = document.createElement("input"), o.hiddenFileInput.setAttribute("type", "file"), (null === o.options.maxFiles || 1 < o.options.maxFiles) && o.hiddenFileInput.setAttribute("multiple", "multiple"), o.hiddenFileInput.className = "dz-hidden-input", null !== o.options.acceptedFiles && o.hiddenFileInput.setAttribute("accept", o.options.acceptedFiles), null !== o.options.capture && o.hiddenFileInput.setAttribute("capture", o.options.capture), o.hiddenFileInput.style.visibility = "hidden", o.hiddenFileInput.style.position = "absolute", o.hiddenFileInput.style.top = "0", o.hiddenFileInput.style.left = "0", o.hiddenFileInput.style.height = "0", o.hiddenFileInput.style.width = "0", b.getElement(o.options.hiddenInputContainer, "hiddenInputContainer").appendChild(o.hiddenFileInput), o.hiddenFileInput.addEventListener("change", function() {
                            var e = o.hiddenFileInput.files;
                            if (e.length) {
                                var t, n = _createForOfIteratorHelper(e);
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var i = t.value;
                                        o.addFile(i)
                                    }
                                } catch (e) {
                                    n.e(e)
                                } finally {
                                    n.f()
                                }
                            }
                            return o.emit("addedfiles", e), r()
                        })
                    }()
                }
                this.URL = null !== window.URL ? window.URL : window.webkitURL;
                var e, t = _createForOfIteratorHelper(this.events);
                try {
                    for (t.s(); !(e = t.n()).done;) {
                        var n = e.value;
                        this.on(n, this.options[n])
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
                this.on("uploadprogress", function() {
                    return o.updateTotalUploadProgress()
                }), this.on("removedfile", function() {
                    return o.updateTotalUploadProgress()
                }), this.on("canceled", function(e) {
                    return o.emit("complete", e)
                }), this.on("complete", function(e) {
                    if (0 === o.getAddedFiles().length && 0 === o.getUploadingFiles().length && 0 === o.getQueuedFiles().length) return setTimeout(function() {
                        return o.emit("queuecomplete")
                    }, 0)
                });

                function i(e) {
                    return function(e) {
                        if (e.dataTransfer.types)
                            for (var t = 0; t < e.dataTransfer.types.length; t++)
                                if ("Files" === e.dataTransfer.types[t]) return !0;
                        return !1
                    }(e) && (e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                }
                return this.listeners = [{
                    element: this.element,
                    events: {
                        dragstart: function(e) {
                            return o.emit("dragstart", e)
                        },
                        dragenter: function(e) {
                            return i(e), o.emit("dragenter", e)
                        },
                        dragover: function(e) {
                            var t;
                            try {
                                t = e.dataTransfer.effectAllowed
                            } catch (e) {}
                            return e.dataTransfer.dropEffect = "move" === t || "linkMove" === t ? "move" : "copy", i(e), o.emit("dragover", e)
                        },
                        dragleave: function(e) {
                            return o.emit("dragleave", e)
                        },
                        drop: function(e) {
                            return i(e), o.drop(e)
                        },
                        dragend: function(e) {
                            return o.emit("dragend", e)
                        }
                    }
                }], this.clickableElements.forEach(function(t) {
                    return o.listeners.push({
                        element: t,
                        events: {
                            click: function(e) {
                                return t === o.element && e.target !== o.element && !b.elementInside(e.target, o.element.querySelector(".dz-message")) || o.hiddenFileInput.click(), !0
                            }
                        }
                    })
                }), this.enable(), this.options.init.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return this.disable(), this.removeAllFiles(!0), null != this.hiddenFileInput && this.hiddenFileInput.parentNode && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, b.instances.splice(b.instances.indexOf(this), 1)
            }
        }, {
            key: "updateTotalUploadProgress",
            value: function() {
                var e, t = 0,
                    n = 0;
                if (this.getActiveFiles().length) {
                    var i, r = _createForOfIteratorHelper(this.getActiveFiles());
                    try {
                        for (r.s(); !(i = r.n()).done;) {
                            var o = i.value;
                            t += o.upload.bytesSent, n += o.upload.total
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    e = 100 * t / n
                } else e = 100;
                return this.emit("totaluploadprogress", e, n, t)
            }
        }, {
            key: "_getParamName",
            value: function(e) {
                return "function" == typeof this.options.paramName ? this.options.paramName(e) : "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(e, "]") : "")
            }
        }, {
            key: "_renameFile",
            value: function(e) {
                return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e)
            }
        }, {
            key: "getFallbackForm",
            value: function() {
                var e, t;
                if (e = this.getExistingFallback()) return e;
                var n = '<div class="dz-fallback">';
                this.options.dictFallbackText && (n += "<p>".concat(this.options.dictFallbackText, "</p>")), n += '<input type="file" name="'.concat(this._getParamName(0), '" ').concat(this.options.uploadMultiple ? 'multiple="multiple"' : void 0, ' /><input type="submit" value="Upload!"></div>');
                var i = b.createElement(n);
                return "FORM" !== this.element.tagName ? (t = b.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>'))).appendChild(i) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != t ? t : i
            }
        }, {
            key: "getExistingFallback",
            value: function() {
                for (var e = function(e) {
                        var t, n = _createForOfIteratorHelper(e);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i = t.value;
                                if (/(^| )fallback($| )/.test(i.className)) return i
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }, t = 0, n = ["div", "form"]; t < n.length; t++) {
                    var i, r = n[t];
                    if (i = e(this.element.getElementsByTagName(r))) return i
                }
            }
        }, {
            key: "setupEventListeners",
            value: function() {
                return this.listeners.map(function(i) {
                    return function() {
                        var e = [];
                        for (var t in i.events) {
                            var n = i.events[t];
                            e.push(i.element.addEventListener(t, n, !1))
                        }
                        return e
                    }()
                })
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                return this.listeners.map(function(i) {
                    return function() {
                        var e = [];
                        for (var t in i.events) {
                            var n = i.events[t];
                            e.push(i.element.removeEventListener(t, n, !1))
                        }
                        return e
                    }()
                })
            }
        }, {
            key: "disable",
            value: function() {
                var t = this;
                return this.clickableElements.forEach(function(e) {
                    return e.classList.remove("dz-clickable")
                }), this.removeEventListeners(), this.disabled = !0, this.files.map(function(e) {
                    return t.cancelUpload(e)
                })
            }
        }, {
            key: "enable",
            value: function() {
                return delete this.disabled, this.clickableElements.forEach(function(e) {
                    return e.classList.add("dz-clickable")
                }), this.setupEventListeners()
            }
        }, {
            key: "filesize",
            value: function(e) {
                var t = 0,
                    n = "b";
                if (0 < e) {
                    for (var i = ["tb", "gb", "mb", "kb", "b"], r = 0; r < i.length; r++) {
                        var o = i[r];
                        if (Math.pow(this.options.filesizeBase, 4 - r) / 10 <= e) {
                            t = e / Math.pow(this.options.filesizeBase, 4 - r), n = o;
                            break
                        }
                    }
                    t = Math.round(10 * t) / 10
                }
                return "<strong>".concat(t, "</strong> ").concat(this.options.dictFileSizeUnits[n])
            }
        }, {
            key: "_updateMaxFilesReachedClass",
            value: function() {
                return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
            }
        }, {
            key: "drop",
            value: function(e) {
                if (e.dataTransfer) {
                    this.emit("drop", e);
                    for (var t = [], n = 0; n < e.dataTransfer.files.length; n++) t[n] = e.dataTransfer.files[n];
                    if (t.length) {
                        var i = e.dataTransfer.items;
                        i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(t)
                    }
                    this.emit("addedfiles", t)
                }
            }
        }, {
            key: "paste",
            value: function(e) {
                if (null != __guard__(null != e ? e.clipboardData : void 0, function(e) {
                        return e.items
                    })) {
                    this.emit("paste", e);
                    var t = e.clipboardData.items;
                    return t.length ? this._addFilesFromItems(t) : void 0
                }
            }
        }, {
            key: "handleFiles",
            value: function(e) {
                var t, n = _createForOfIteratorHelper(e);
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var i = t.value;
                        this.addFile(i)
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
            }
        }, {
            key: "_addFilesFromItems",
            value: function(o) {
                var a = this;
                return function() {
                    var e, t = [],
                        n = _createForOfIteratorHelper(o);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i, r = e.value;
                            null != r.webkitGetAsEntry && (i = r.webkitGetAsEntry()) ? i.isFile ? t.push(a.addFile(r.getAsFile())) : i.isDirectory ? t.push(a._addFilesFromDirectory(i, i.name)) : t.push(void 0) : null != r.getAsFile && (null == r.kind || "file" === r.kind) ? t.push(a.addFile(r.getAsFile())) : t.push(void 0)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return t
                }()
            }
        }, {
            key: "_addFilesFromDirectory",
            value: function(e, o) {
                function t(t) {
                    return __guardMethod__(console, "log", function(e) {
                        return e.log(t)
                    })
                }
                var a = this,
                    n = e.createReader();
                return function r() {
                    return n.readEntries(function(e) {
                        if (0 < e.length) {
                            var t, n = _createForOfIteratorHelper(e);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var i = t.value;
                                    i.isFile ? i.file(function(e) {
                                        if (!a.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = "".concat(o, "/").concat(e.name), a.addFile(e)
                                    }) : i.isDirectory && a._addFilesFromDirectory(i, "".concat(o, "/").concat(i.name))
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                            r()
                        }
                        return null
                    }, t)
                }()
            }
        }, {
            key: "accept",
            value: function(e, t) {
                this.options.maxFilesize && e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : b.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType)
            }
        }, {
            key: "addFile",
            value: function(t) {
                var n = this;
                t.upload = {
                    uuid: b.uuidv4(),
                    progress: 0,
                    total: t.size,
                    bytesSent: 0,
                    filename: this._renameFile(t)
                }, this.files.push(t), t.status = b.ADDED, this.emit("addedfile", t), this._enqueueThumbnail(t), this.accept(t, function(e) {
                    e ? (t.accepted = !1, n._errorProcessing([t], e)) : (t.accepted = !0, n.options.autoQueue && n.enqueueFile(t)), n._updateMaxFilesReachedClass()
                })
            }
        }, {
            key: "enqueueFiles",
            value: function(e) {
                var t, n = _createForOfIteratorHelper(e);
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var i = t.value;
                        this.enqueueFile(i)
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return null
            }
        }, {
            key: "enqueueFile",
            value: function(e) {
                var t = this;
                if (e.status !== b.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                if (e.status = b.QUEUED, this.options.autoProcessQueue) return setTimeout(function() {
                    return t.processQueue()
                }, 0)
            }
        }, {
            key: "_enqueueThumbnail",
            value: function(e) {
                var t = this;
                if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout(function() {
                    return t._processThumbnailQueue()
                }, 0)
            }
        }, {
            key: "_processThumbnailQueue",
            value: function() {
                var t = this;
                if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
                    this._processingThumbnail = !0;
                    var n = this._thumbnailQueue.shift();
                    return this.createThumbnail(n, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function(e) {
                        return t.emit("thumbnail", n, e), t._processingThumbnail = !1, t._processThumbnailQueue()
                    })
                }
            }
        }, {
            key: "removeFile",
            value: function(e) {
                if (e.status === b.UPLOADING && this.cancelUpload(e), this.files = without(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset")
            }
        }, {
            key: "removeAllFiles",
            value: function(e) {
                null == e && (e = !1);
                var t, n = _createForOfIteratorHelper(this.files.slice());
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var i = t.value;
                        i.status === b.UPLOADING && !e || this.removeFile(i)
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return null
            }
        }, {
            key: "resizeImage",
            value: function(r, e, t, n, o) {
                var a = this;
                return this.createThumbnail(r, e, t, n, !0, function(e, t) {
                    if (null == t) return o(r);
                    var n = a.options.resizeMimeType;
                    null == n && (n = r.type);
                    var i = t.toDataURL(n, a.options.resizeQuality);
                    return "image/jpeg" !== n && "image/jpg" !== n || (i = ExifRestore.restore(r.dataURL, i)), o(b.dataURItoBlob(i))
                })
            }
        }, {
            key: "createThumbnail",
            value: function(e, t, n, i, r, o) {
                var a = this,
                    l = new FileReader;
                l.onload = function() {
                    e.dataURL = l.result, "image/svg+xml" !== e.type ? a.createThumbnailFromUrl(e, t, n, i, r, o) : null != o && o(l.result)
                }, l.readAsDataURL(e)
            }
        }, {
            key: "displayExistingFile",
            value: function(t, e, n, i, r) {
                var o = this,
                    a = !(4 < arguments.length && void 0 !== r) || r;
                if (this.emit("addedfile", t), this.emit("complete", t), a) {
                    t.dataURL = e, this.createThumbnailFromUrl(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.resizeMethod, this.options.fixOrientation, function(e) {
                        o.emit("thumbnail", t, e), n && n()
                    }, i)
                } else this.emit("thumbnail", t, e), n && n()
            }
        }, {
            key: "createThumbnailFromUrl",
            value: function(o, a, l, s, t, u, e) {
                var c = this,
                    d = document.createElement("img");
                return e && (d.crossOrigin = e), t = "from-image" != getComputedStyle(document.body).imageOrientation && t, d.onload = function() {
                    var e = function(e) {
                        return e(1)
                    };
                    return "undefined" != typeof EXIF && null !== EXIF && t && (e = function(e) {
                        return EXIF.getData(d, function() {
                            return e(EXIF.getTag(this, "Orientation"))
                        })
                    }), e(function(e) {
                        o.width = d.width, o.height = d.height;
                        var t = c.options.resize.call(c, o, a, l, s),
                            n = document.createElement("canvas"),
                            i = n.getContext("2d");
                        switch (n.width = t.trgWidth, n.height = t.trgHeight, 4 < e && (n.width = t.trgHeight, n.height = t.trgWidth), e) {
                            case 2:
                                i.translate(n.width, 0), i.scale(-1, 1);
                                break;
                            case 3:
                                i.translate(n.width, n.height), i.rotate(Math.PI);
                                break;
                            case 4:
                                i.translate(0, n.height), i.scale(1, -1);
                                break;
                            case 5:
                                i.rotate(.5 * Math.PI), i.scale(1, -1);
                                break;
                            case 6:
                                i.rotate(.5 * Math.PI), i.translate(0, -n.width);
                                break;
                            case 7:
                                i.rotate(.5 * Math.PI), i.translate(n.height, -n.width), i.scale(-1, 1);
                                break;
                            case 8:
                                i.rotate(-.5 * Math.PI), i.translate(-n.height, 0)
                        }
                        drawImageIOSFix(i, d, null != t.srcX ? t.srcX : 0, null != t.srcY ? t.srcY : 0, t.srcWidth, t.srcHeight, null != t.trgX ? t.trgX : 0, null != t.trgY ? t.trgY : 0, t.trgWidth, t.trgHeight);
                        var r = n.toDataURL("image/png");
                        if (null != u) return u(r, n)
                    })
                }, null != u && (d.onerror = u), d.src = o.dataURL
            }
        }, {
            key: "processQueue",
            value: function() {
                var e = this.options.parallelUploads,
                    t = this.getUploadingFiles().length,
                    n = t;
                if (!(e <= t)) {
                    var i = this.getQueuedFiles();
                    if (0 < i.length) {
                        if (this.options.uploadMultiple) return this.processFiles(i.slice(0, e - t));
                        for (; n < e;) {
                            if (!i.length) return;
                            this.processFile(i.shift()), n++
                        }
                    }
                }
            }
        }, {
            key: "processFile",
            value: function(e) {
                return this.processFiles([e])
            }
        }, {
            key: "processFiles",
            value: function(e) {
                var t, n = _createForOfIteratorHelper(e);
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var i = t.value;
                        i.processing = !0, i.status = b.UPLOADING, this.emit("processing", i)
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
            }
        }, {
            key: "_getFilesWithXhr",
            value: function(t) {
                return this.files.filter(function(e) {
                    return e.xhr === t
                }).map(function(e) {
                    return e
                })
            }
        }, {
            key: "cancelUpload",
            value: function(e) {
                if (e.status === b.UPLOADING) {
                    var t, n = this._getFilesWithXhr(e.xhr),
                        i = _createForOfIteratorHelper(n);
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            t.value.status = b.CANCELED
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    void 0 !== e.xhr && e.xhr.abort();
                    var r, o = _createForOfIteratorHelper(n);
                    try {
                        for (o.s(); !(r = o.n()).done;) {
                            var a = r.value;
                            this.emit("canceled", a)
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    this.options.uploadMultiple && this.emit("canceledmultiple", n)
                } else e.status !== b.ADDED && e.status !== b.QUEUED || (e.status = b.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
                if (this.options.autoProcessQueue) return this.processQueue()
            }
        }, {
            key: "resolveOption",
            value: function(e) {
                if ("function" != typeof e) return e;
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return e.apply(this, n)
            }
        }, {
            key: "uploadFile",
            value: function(e) {
                return this.uploadFiles([e])
            }
        }, {
            key: "uploadFiles",
            value: function(s) {
                var u = this;
                this._transformFiles(s, function(e) {
                    if (u.options.chunking) {
                        var t = e[0];
                        s[0].upload.chunked = u.options.chunking && (u.options.forceChunking || t.size > u.options.chunkSize), s[0].upload.totalChunkCount = Math.ceil(t.size / u.options.chunkSize)
                    }
                    if (s[0].upload.chunked) {
                        var r = s[0],
                            o = e[0];
                        r.upload.chunks = [];
                        var i = function() {
                            for (var e = 0; void 0 !== r.upload.chunks[e];) e++;
                            if (!(e >= r.upload.totalChunkCount)) {
                                0;
                                var t = e * u.options.chunkSize,
                                    n = Math.min(t + u.options.chunkSize, o.size),
                                    i = {
                                        name: u._getParamName(0),
                                        data: o.webkitSlice ? o.webkitSlice(t, n) : o.slice(t, n),
                                        filename: r.upload.filename,
                                        chunkIndex: e
                                    };
                                r.upload.chunks[e] = {
                                    file: r,
                                    index: e,
                                    dataBlock: i,
                                    status: b.UPLOADING,
                                    progress: 0,
                                    retries: 0
                                }, u._uploadData(s, [i])
                            }
                        };
                        if (r.upload.finishedChunkUpload = function(e) {
                                var t = !0;
                                e.status = b.SUCCESS, e.dataBlock = null, e.xhr = null;
                                for (var n = 0; n < r.upload.totalChunkCount; n++) {
                                    if (void 0 === r.upload.chunks[n]) return i();
                                    r.upload.chunks[n].status !== b.SUCCESS && (t = !1)
                                }
                                t && u.options.chunksUploaded(r, function() {
                                    u._finished(s, "", null)
                                })
                            }, u.options.parallelChunkUploads)
                            for (var n = 0; n < r.upload.totalChunkCount; n++) i();
                        else i()
                    } else {
                        for (var a = [], l = 0; l < s.length; l++) a[l] = {
                            name: u._getParamName(l),
                            data: e[l],
                            filename: s[l].upload.filename
                        };
                        u._uploadData(s, a)
                    }
                })
            }
        }, {
            key: "_getChunk",
            value: function(e, t) {
                for (var n = 0; n < e.upload.totalChunkCount; n++)
                    if (void 0 !== e.upload.chunks[n] && e.upload.chunks[n].xhr === t) return e.upload.chunks[n]
            }
        }, {
            key: "_uploadData",
            value: function(t, e) {
                var n, i = this,
                    r = new XMLHttpRequest,
                    o = _createForOfIteratorHelper(t);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        n.value.xhr = r
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                t[0].upload.chunked && (t[0].upload.chunks[e[0].chunkIndex].xhr = r);
                var a = this.resolveOption(this.options.method, t),
                    l = this.resolveOption(this.options.url, t);
                r.open(a, l, !0), r.timeout = this.resolveOption(this.options.timeout, t), r.withCredentials = !!this.options.withCredentials, r.onload = function(e) {
                    i._finishedUploading(t, r, e)
                }, r.ontimeout = function() {
                    i._handleUploadError(t, r, "Request timedout after ".concat(i.options.timeout / 1e3, " seconds"))
                }, r.onerror = function() {
                    i._handleUploadError(t, r)
                }, (null != r.upload ? r.upload : r).onprogress = function(e) {
                    return i._updateFilesUploadProgress(t, r, e)
                };
                var s = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                };
                for (var u in this.options.headers && b.extend(s, this.options.headers), s) {
                    var c = s[u];
                    c && r.setRequestHeader(u, c)
                }
                var d = new FormData;
                if (this.options.params) {
                    var p = this.options.params;
                    for (var h in "function" == typeof p && (p = p.call(this, t, r, t[0].upload.chunked ? this._getChunk(t[0], r) : null)), p) {
                        var f = p[h];
                        if (Array.isArray(f))
                            for (var m = 0; m < f.length; m++) d.append(h, f[m]);
                        else d.append(h, f)
                    }
                }
                var v, g = _createForOfIteratorHelper(t);
                try {
                    for (g.s(); !(v = g.n()).done;) {
                        var y = v.value;
                        this.emit("sending", y, r, d)
                    }
                } catch (e) {
                    g.e(e)
                } finally {
                    g.f()
                }
                this.options.uploadMultiple && this.emit("sendingmultiple", t, r, d), this._addFormElementData(d);
                for (var F = 0; F < e.length; F++) {
                    var k = e[F];
                    d.append(k.name, k.data, k.filename)
                }
                this.submitRequest(r, d, t)
            }
        }, {
            key: "_transformFiles",
            value: function(n, i) {
                for (var e = this, r = [], o = 0, t = function(t) {
                        e.options.transformFile.call(e, n[t], function(e) {
                            r[t] = e, ++o === n.length && i(r)
                        })
                    }, a = 0; a < n.length; a++) t(a)
            }
        }, {
            key: "_addFormElementData",
            value: function(e) {
                if ("FORM" === this.element.tagName) {
                    var t, n = _createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button"));
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var i = t.value,
                                r = i.getAttribute("name"),
                                o = i.getAttribute("type");
                            if (o = o && o.toLowerCase(), null != r)
                                if ("SELECT" === i.tagName && i.hasAttribute("multiple")) {
                                    var a, l = _createForOfIteratorHelper(i.options);
                                    try {
                                        for (l.s(); !(a = l.n()).done;) {
                                            var s = a.value;
                                            s.selected && e.append(r, s.value)
                                        }
                                    } catch (e) {
                                        l.e(e)
                                    } finally {
                                        l.f()
                                    }
                                } else(!o || "checkbox" !== o && "radio" !== o || i.checked) && e.append(r, i.value)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                }
            }
        }, {
            key: "_updateFilesUploadProgress",
            value: function(e, t, n) {
                var i;
                if (void 0 !== n) {
                    if (i = 100 * n.loaded / n.total, e[0].upload.chunked) {
                        var r = e[0],
                            o = this._getChunk(r, t);
                        o.progress = i, o.total = n.total, o.bytesSent = n.loaded;
                        r.upload.progress = 0, r.upload.total = 0;
                        for (var a = r.upload.bytesSent = 0; a < r.upload.totalChunkCount; a++) void 0 !== r.upload.chunks[a] && void 0 !== r.upload.chunks[a].progress && (r.upload.progress += r.upload.chunks[a].progress, r.upload.total += r.upload.chunks[a].total, r.upload.bytesSent += r.upload.chunks[a].bytesSent);
                        r.upload.progress = r.upload.progress / r.upload.totalChunkCount
                    } else {
                        var l, s = _createForOfIteratorHelper(e);
                        try {
                            for (s.s(); !(l = s.n()).done;) {
                                var u = l.value;
                                u.upload.progress = i, u.upload.total = n.total, u.upload.bytesSent = n.loaded
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                    }
                    var c, d = _createForOfIteratorHelper(e);
                    try {
                        for (d.s(); !(c = d.n()).done;) {
                            var p = c.value;
                            this.emit("uploadprogress", p, p.upload.progress, p.upload.bytesSent)
                        }
                    } catch (e) {
                        d.e(e)
                    } finally {
                        d.f()
                    }
                } else {
                    var h = !0;
                    i = 100;
                    var f, m = _createForOfIteratorHelper(e);
                    try {
                        for (m.s(); !(f = m.n()).done;) {
                            var v = f.value;
                            100 === v.upload.progress && v.upload.bytesSent === v.upload.total || (h = !1), v.upload.progress = i, v.upload.bytesSent = v.upload.total
                        }
                    } catch (e) {
                        m.e(e)
                    } finally {
                        m.f()
                    }
                    if (h) return;
                    var g, y = _createForOfIteratorHelper(e);
                    try {
                        for (y.s(); !(g = y.n()).done;) {
                            var F = g.value;
                            this.emit("uploadprogress", F, i, F.upload.bytesSent)
                        }
                    } catch (e) {
                        y.e(e)
                    } finally {
                        y.f()
                    }
                }
            }
        }, {
            key: "_finishedUploading",
            value: function(e, t, n) {
                var i;
                if (e[0].status !== b.CANCELED && 4 === t.readyState) {
                    if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (i = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))) try {
                        i = JSON.parse(i)
                    } catch (e) {
                        n = e, i = "Invalid JSON response from server."
                    }
                    this._updateFilesUploadProgress(e), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t)) : this._finished(e, i, n) : this._handleUploadError(e, t, i)
                }
            }
        }, {
            key: "_handleUploadError",
            value: function(e, t, n) {
                if (e[0].status !== b.CANCELED) {
                    if (e[0].upload.chunked && this.options.retryChunks) {
                        var i = this._getChunk(e[0], t);
                        if (i.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [i.dataBlock]);
                        console.warn("Retried this chunk too often. Giving up.")
                    }
                    this._errorProcessing(e, n || this.options.dictResponseError.replace("{{statusCode}}", t.status), t)
                }
            }
        }, {
            key: "submitRequest",
            value: function(e, t) {
                e.send(t)
            }
        }, {
            key: "_finished",
            value: function(e, t, n) {
                var i, r = _createForOfIteratorHelper(e);
                try {
                    for (r.s(); !(i = r.n()).done;) {
                        var o = i.value;
                        o.status = b.SUCCESS, this.emit("success", o, t, n), this.emit("complete", o)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
            }
        }, {
            key: "_errorProcessing",
            value: function(e, t, n) {
                var i, r = _createForOfIteratorHelper(e);
                try {
                    for (r.s(); !(i = r.n()).done;) {
                        var o = i.value;
                        o.status = b.ERROR, this.emit("error", o, t, n), this.emit("complete", o)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
            }
        }], [{
            key: "uuidv4",
            value: function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }
        }]), b
    }();
Dropzone.initClass(), Dropzone.version = "5.7.2", Dropzone.options = {}, Dropzone.optionsForElement = function(e) {
    return e.getAttribute("id") ? Dropzone.options[camelize(e.getAttribute("id"))] : void 0
}, Dropzone.instances = [], Dropzone.forElement = function(e) {
    if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    return e.dropzone
}, Dropzone.autoDiscover = !0, Dropzone.discover = function() {
    var o;
    if (document.querySelectorAll) o = document.querySelectorAll(".dropzone");
    else {
        o = [];
        var e = function(r) {
            return function() {
                var e, t = [],
                    n = _createForOfIteratorHelper(r);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var i = e.value;
                        /(^| )dropzone($| )/.test(i.className) ? t.push(o.push(i)) : t.push(void 0)
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return t
            }()
        };
        e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))
    }
    return function() {
        var e, t = [],
            n = _createForOfIteratorHelper(o);
        try {
            for (n.s(); !(e = n.n()).done;) {
                var i = e.value;
                !1 !== Dropzone.optionsForElement(i) ? t.push(new Dropzone(i)) : t.push(void 0)
            }
        } catch (e) {
            n.e(e)
        } finally {
            n.f()
        }
        return t
    }()
}, Dropzone.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], Dropzone.isBrowserSupported = function() {
    var e = !0;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
        if ("classList" in document.createElement("a")) {
            var t, n = _createForOfIteratorHelper(Dropzone.blacklistedBrowsers);
            try {
                for (n.s(); !(t = n.n()).done;) {
                    t.value.test(navigator.userAgent) && (e = !1)
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
        } else e = !1;
    else e = !1;
    return e
}, Dropzone.dataURItoBlob = function(e) {
    for (var t = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(t.length), r = new Uint8Array(i), o = 0, a = t.length, l = 0 <= a; l ? o <= a : a <= o; l ? o++ : o--) r[o] = t.charCodeAt(o);
    return new Blob([i], {
        type: n
    })
};
var without = function(e, t) {
        return e.filter(function(e) {
            return e !== t
        }).map(function(e) {
            return e
        })
    },
    camelize = function(e) {
        return e.replace(/[\-_](\w)/g, function(e) {
            return e.charAt(1).toUpperCase()
        })
    };
Dropzone.createElement = function(e) {
    var t = document.createElement("div");
    return t.innerHTML = e, t.childNodes[0]
}, Dropzone.elementInside = function(e, t) {
    if (e === t) return !0;
    for (; e = e.parentNode;)
        if (e === t) return !0;
    return !1
}, Dropzone.getElement = function(e, t) {
    var n;
    if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e), null == n) throw new Error("Invalid `".concat(t, "` option provided. Please provide a CSS selector or a plain HTML element."));
    return n
}, Dropzone.getElements = function(e, t) {
    var n, i;
    if (e instanceof Array) {
        i = [];
        try {
            var r, o = _createForOfIteratorHelper(e);
            try {
                for (o.s(); !(r = o.n()).done;) n = r.value, i.push(this.getElement(n, t))
            } catch (e) {
                o.e(e)
            } finally {
                o.f()
            }
        } catch (e) {
            i = null
        }
    } else if ("string" == typeof e) {
        i = [];
        var a, l = _createForOfIteratorHelper(document.querySelectorAll(e));
        try {
            for (l.s(); !(a = l.n()).done;) n = a.value, i.push(n)
        } catch (e) {
            l.e(e)
        } finally {
            l.f()
        }
    } else null != e.nodeType && (i = [e]);
    if (null == i || !i.length) throw new Error("Invalid `".concat(t, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
    return i
}, Dropzone.confirm = function(e, t, n) {
    return window.confirm(e) ? t() : null != n ? n() : void 0
}, Dropzone.isValidFile = function(e, t) {
    if (!t) return !0;
    t = t.split(",");
    var n, i = e.type,
        r = i.replace(/\/.*$/, ""),
        o = _createForOfIteratorHelper(t);
    try {
        for (o.s(); !(n = o.n()).done;) {
            var a = n.value;
            if ("." === (a = a.trim()).charAt(0)) {
                if (-1 !== e.name.toLowerCase().indexOf(a.toLowerCase(), e.name.length - a.length)) return !0
            } else if (/\/\*$/.test(a)) {
                if (r === a.replace(/\/.*$/, "")) return !0
            } else if (i === a) return !0
        }
    } catch (e) {
        o.e(e)
    } finally {
        o.f()
    }
    return !1
}, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(e) {
    return this.each(function() {
        return new Dropzone(this, e)
    })
}), "undefined" != typeof module && null !== module ? module.exports = Dropzone : window.Dropzone = Dropzone, Dropzone.ADDED = "added", Dropzone.QUEUED = "queued", Dropzone.ACCEPTED = Dropzone.QUEUED, Dropzone.UPLOADING = "uploading", Dropzone.PROCESSING = Dropzone.UPLOADING, Dropzone.CANCELED = "canceled", Dropzone.ERROR = "error", Dropzone.SUCCESS = "success";
var detectVerticalSquash = function(e) {
        e.naturalWidth;
        var t = e.naturalHeight,
            n = document.createElement("canvas");
        n.width = 1, n.height = t;
        var i = n.getContext("2d");
        i.drawImage(e, 0, 0);
        for (var r = i.getImageData(1, 0, 1, t).data, o = 0, a = t, l = t; o < l;) {
            0 === r[4 * (l - 1) + 3] ? a = l : o = l, l = a + o >> 1
        }
        var s = l / t;
        return 0 == s ? 1 : s
    },
    drawImageIOSFix = function(e, t, n, i, r, o, a, l, s, u) {
        var c = detectVerticalSquash(t);
        return e.drawImage(t, n, i, r, o, a, l, s, u / c)
    },
    ExifRestore = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "initClass",
            value: function() {
                this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }, {
            key: "encode64",
            value: function(e) {
                for (var t = "", n = void 0, i = void 0, r = "", o = void 0, a = void 0, l = void 0, s = "", u = 0; o = (n = e[u++]) >> 2, a = (3 & n) << 4 | (i = e[u++]) >> 4, l = (15 & i) << 2 | (r = e[u++]) >> 6, s = 63 & r, isNaN(i) ? l = s = 64 : isNaN(r) && (s = 64), t = t + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(l) + this.KEY_STR.charAt(s), n = i = r = "", o = a = l = s = "", u < e.length;);
                return t
            }
        }, {
            key: "restore",
            value: function(e, t) {
                if (!e.match("data:image/jpeg;base64,")) return t;
                var n = this.decode64(e.replace("data:image/jpeg;base64,", "")),
                    i = this.slice2Segments(n),
                    r = this.exifManipulation(t, i);
                return "data:image/jpeg;base64,".concat(this.encode64(r))
            }
        }, {
            key: "exifManipulation",
            value: function(e, t) {
                var n = this.getExifArray(t),
                    i = this.insertExif(e, n);
                return new Uint8Array(i)
            }
        }, {
            key: "getExifArray",
            value: function(e) {
                for (var t = void 0, n = 0; n < e.length;) {
                    if (255 === (t = e[n])[0] & 225 === t[1]) return t;
                    n++
                }
                return []
            }
        }, {
            key: "insertExif",
            value: function(e, t) {
                var n = e.replace("data:image/jpeg;base64,", ""),
                    i = this.decode64(n),
                    r = i.indexOf(255, 3),
                    o = i.slice(0, r),
                    a = i.slice(r),
                    l = o;
                return l = (l = l.concat(t)).concat(a)
            }
        }, {
            key: "slice2Segments",
            value: function(e) {
                for (var t = 0, n = [];;) {
                    if (255 === e[t] & 218 === e[t + 1]) break;
                    if (255 === e[t] & 216 === e[t + 1]) t += 2;
                    else {
                        var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
                            r = e.slice(t, i);
                        n.push(r), t = i
                    }
                    if (t > e.length) break
                }
                return n
            }
        }, {
            key: "decode64",
            value: function(e) {
                var t = void 0,
                    n = void 0,
                    i = "",
                    r = void 0,
                    o = void 0,
                    a = "",
                    l = 0,
                    s = [];
                for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(l++)) << 2 | (r = this.KEY_STR.indexOf(e.charAt(l++))) >> 4, n = (15 & r) << 4 | (o = this.KEY_STR.indexOf(e.charAt(l++))) >> 2, i = (3 & o) << 6 | (a = this.KEY_STR.indexOf(e.charAt(l++))), s.push(t), 64 !== o && s.push(n), 64 !== a && s.push(i), t = n = i = "", r = o = a = "", l < e.length;);
                return s
            }
        }]), e
    }();
ExifRestore.initClass();
var contentLoaded = function(t, n) {
    function i(e) {
        if ("readystatechange" !== e.type || "complete" === o.readyState) return ("load" === e.type ? t : o)[s](u + e.type, i, !1), !r && (r = !0) ? n.call(t, e.type || e) : void 0
    }
    var r = !1,
        e = !0,
        o = t.document,
        a = o.documentElement,
        l = o.addEventListener ? "addEventListener" : "attachEvent",
        s = o.addEventListener ? "removeEventListener" : "detachEvent",
        u = o.addEventListener ? "" : "on";
    if ("complete" !== o.readyState) {
        if (o.createEventObject && a.doScroll) {
            try {
                e = !t.frameElement
            } catch (e) {}
            e && ! function t() {
                try {
                    a.doScroll("left")
                } catch (e) {
                    return void setTimeout(t, 50)
                }
                return i("poll")
            }()
        }
        return o[l](u + "DOMContentLoaded", i, !1), o[l](u + "readystatechange", i, !1), t[l](u + "load", i, !1)
    }
};

function __guard__(e, t) {
    return null != e ? t(e) : void 0
}

function __guardMethod__(e, t, n) {
    return null != e && "function" == typeof e[t] ? n(e, t) : void 0
}
Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) return Dropzone.discover()
}, contentLoaded(window, Dropzone._autoDiscoverFunction);;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.NProgress = factory();
    }
})(this, function() {
    var NProgress = {};
    NProgress.version = '0.2.0';
    var Settings = NProgress.settings = {
        minimum: 0.08,
        easing: 'linear',
        positionUsing: '',
        speed: 200,
        trickle: true,
        trickleSpeed: 200,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: 'body',
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options) {
        var key, value;
        for (key in options) {
            value = options[key];
            if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
        }
        return this;
    };
    NProgress.status = null;
    NProgress.set = function(n) {
        var started = NProgress.isStarted();
        n = clamp(n, Settings.minimum, 1);
        NProgress.status = (n === 1 ? null : n);
        var progress = NProgress.render(!started),
            bar = progress.querySelector(Settings.barSelector),
            speed = Settings.speed,
            ease = Settings.easing;
        progress.offsetWidth;
        queue(function(next) {
            if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();
            css(bar, barPositionCSS(n, speed, ease));
            if (n === 1) {
                css(progress, {
                    transition: 'none',
                    opacity: 1
                });
                progress.offsetWidth;
                setTimeout(function() {
                    css(progress, {
                        transition: 'all ' + speed + 'ms linear',
                        opacity: 0
                    });
                    setTimeout(function() {
                        NProgress.remove();
                        next();
                    }, speed);
                }, speed);
            } else {
                setTimeout(next, speed);
            }
        });
        return this;
    };
    NProgress.isStarted = function() {
        return typeof NProgress.status === 'number';
    };
    NProgress.start = function() {
        if (!NProgress.status) NProgress.set(0);
        var work = function() {
            setTimeout(function() {
                if (!NProgress.status) return;
                NProgress.trickle();
                work();
            }, Settings.trickleSpeed);
        };
        if (Settings.trickle) work();
        return this;
    };
    NProgress.done = function(force) {
        if (!force && !NProgress.status) return this;
        return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress.inc = function(amount) {
        var n = NProgress.status;
        if (!n) {
            return NProgress.start();
        } else if (n > 1) {
            return;
        } else {
            if (typeof amount !== 'number') {
                if (n >= 0 && n < 0.2) {
                    amount = 0.1;
                } else if (n >= 0.2 && n < 0.5) {
                    amount = 0.04;
                } else if (n >= 0.5 && n < 0.8) {
                    amount = 0.02;
                } else if (n >= 0.8 && n < 0.99) {
                    amount = 0.005;
                } else {
                    amount = 0;
                }
            }
            n = clamp(n + amount, 0, 0.994);
            return NProgress.set(n);
        }
    };
    NProgress.trickle = function() {
        return NProgress.inc();
    };
    (function() {
        var initial = 0,
            current = 0;
        NProgress.promise = function($promise) {
            if (!$promise || $promise.state() === "resolved") {
                return this;
            }
            if (current === 0) {
                NProgress.start();
            }
            initial++;
            current++;
            $promise.always(function() {
                current--;
                if (current === 0) {
                    initial = 0;
                    NProgress.done();
                } else {
                    NProgress.set((initial - current) / initial);
                }
            });
            return this;
        };
    })();
    NProgress.render = function(fromStart) {
        if (NProgress.isRendered()) return document.getElementById('nprogress');
        addClass(document.documentElement, 'nprogress-busy');
        var progress = document.createElement('div');
        progress.id = 'nprogress';
        progress.innerHTML = Settings.template;
        var bar = progress.querySelector(Settings.barSelector),
            perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
            parent = document.querySelector(Settings.parent),
            spinner;
        css(bar, {
            transition: 'all 0 linear',
            transform: 'translate3d(' + perc + '%,0,0)'
        });
        if (!Settings.showSpinner) {
            spinner = progress.querySelector(Settings.spinnerSelector);
            spinner && removeElement(spinner);
        }
        if (parent != document.body) {
            addClass(parent, 'nprogress-custom-parent');
        }
        parent.appendChild(progress);
        return progress;
    };
    NProgress.remove = function() {
        removeClass(document.documentElement, 'nprogress-busy');
        removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
        var progress = document.getElementById('nprogress');
        progress && removeElement(progress);
    };
    NProgress.isRendered = function() {
        return !!document.getElementById('nprogress');
    };
    NProgress.getPositioningCSS = function() {
        var bodyStyle = document.body.style;
        var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' : ('MozTransform' in bodyStyle) ? 'Moz' : ('msTransform' in bodyStyle) ? 'ms' : ('OTransform' in bodyStyle) ? 'O' : '';
        if (vendorPrefix + 'Perspective' in bodyStyle) {
            return 'translate3d';
        } else if (vendorPrefix + 'Transform' in bodyStyle) {
            return 'translate';
        } else {
            return 'margin';
        }
    };

    function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n;
    }

    function toBarPerc(n) {
        return (-1 + n) * 100;
    }

    function barPositionCSS(n, speed, ease) {
        var barCSS;
        if (Settings.positionUsing === 'translate3d') {
            barCSS = {
                transform: 'translate3d(' + toBarPerc(n) + '%,0,0)'
            };
        } else if (Settings.positionUsing === 'translate') {
            barCSS = {
                transform: 'translate(' + toBarPerc(n) + '%,0)'
            };
        } else {
            barCSS = {
                'margin-left': toBarPerc(n) + '%'
            };
        }
        barCSS.transition = 'all ' + speed + 'ms ' + ease;
        return barCSS;
    }
    var queue = (function() {
        var pending = [];

        function next() {
            var fn = pending.shift();
            if (fn) {
                fn(next);
            }
        }
        return function(fn) {
            pending.push(fn);
            if (pending.length == 1) next();
        };
    })();
    var css = (function() {
        var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
            cssProps = {};

        function camelCase(string) {
            return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
                return letter.toUpperCase();
            });
        }

        function getVendorProp(name) {
            var style = document.body.style;
            if (name in style) return name;
            var i = cssPrefixes.length,
                capName = name.charAt(0).toUpperCase() + name.slice(1),
                vendorName;
            while (i--) {
                vendorName = cssPrefixes[i] + capName;
                if (vendorName in style) return vendorName;
            }
            return name;
        }

        function getStyleProp(name) {
            name = camelCase(name);
            return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }

        function applyCss(element, prop, value) {
            prop = getStyleProp(prop);
            element.style[prop] = value;
        }
        return function(element, properties) {
            var args = arguments,
                prop, value;
            if (args.length == 2) {
                for (prop in properties) {
                    value = properties[prop];
                    if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
                }
            } else {
                applyCss(element, args[1], args[2]);
            }
        }
    })();

    function hasClass(element, name) {
        var list = typeof element == 'string' ? element : classList(element);
        return list.indexOf(' ' + name + ' ') >= 0;
    }

    function addClass(element, name) {
        var oldList = classList(element),
            newList = oldList + name;
        if (hasClass(oldList, name)) return;
        element.className = newList.substring(1);
    }

    function removeClass(element, name) {
        var oldList = classList(element),
            newList;
        if (!hasClass(element, name)) return;
        newList = oldList.replace(' ' + name + ' ', ' ');
        element.className = newList.substring(1, newList.length - 1);
    }

    function classList(element) {
        return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
    }

    function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
});
var Uploadcare = function() {
    var that = {}
    var widget;
    var currentID = null;
    topWindow.UPLOADCARE_PUBLIC_KEY = '0be3e9369a235992a7da';
    topWindow.UPLOADCARE_PREVIEW_STEP = true;
    topWindow.UPLOADCARE_CLEARABLE = true;
    topWindow.UPLOADCARE_LOCALE = 'en';
    topWindow.UPLOADCARE_LOCALE_TRANSLATIONS = {
        errors: {
            fileType: translations.uploadCare.errors,
            fileMaximumSize: translations.uploadCare.fileSizeErrorTitle
        },
        dialog: {
            tabs: {
                preview: {
                    error: {
                        fileType: {
                            title: translations.uploadCare.fileTypeTitle,
                            text: translations.uploadCare.fileTypeText,
                            back: translations.fileTypeErrorBack,
                        },
                        fileMaximumSize: {
                            title: translations.uploadCare.fileSizeErrorTitle,
                            text: translations.uploadCare.fileSizeErrorText,
                            back: translations.fileTypeErrorBack,
                        },
                    },
                },
            },
        },
        buttons: {
            cancel: translations.Cancel,
            remove: translations.remove,
            choose: {
                files: {
                    one: translations.uploadCare.chooseAfile,
                    other: translations.uploadCare.chooseFiles
                },
                images: {
                    one: translations.uploadCare.chooseAnImage,
                    other: translations.uploadCare.chooseImages
                }
            }
        }
    };
    topWindow.UPLOADCARE_TABS = 'file facebook gdrive gphotos dropbox instagram flickr onedrive camera';
    that.init = function(settings) {
        $(settings.btnSelector).off('click.upload_care').on('click.upload_care', function(e) {
            event.preventDefault();
            event.stopPropagation();
            e.stopImmediatePropagation();
            that.show($(this), $(this).data('id'));
        });
    };
    that.show = function($controller, pageUnqiueID) {
        that.total_files_size = 0;
        var config = {
            id: $controller.data('id'),
            type: $controller.data('type') ? $controller.data('type') : null
        };
        currentID = config.id;
        topWindow.$('[role=uploadcare-uploader]').remove();
        if (config.type) {
            if (config.id == "galleryDropzone") {
                var uploadFile = {
                    kind: {
                        acceptedFiles: $controller.data('accepted-files')
                    }
                };
            } else {
                var uploadFile = topWindow.multipleUploadFile[currentID];
            }
            topWindow.$('body').after('<span data-id="' + config.id + '" data-multiple="true" data-multiple-min="1" role="uploadcare-uploader"></span>');
        } else {
            var uploadFile = topWindow.uploadFiles[currentID];
            topWindow.$('body').after('<span data-id="' + config.id + '" role="uploadcare-uploader">');
        }
        $(document).one('uploadcare_init.' + pageUnqiueID, function(event) {
            topWindow.UPLOADCARE_LOCALE = topWindow.uploadcare.locales.indexOf(topWindow.t_language) != -1 ? topWindow.t_language : topWindow.UPLOADCARE_LOCALE;
            topWindow.UPLOADCARE_INPUT_ACCEPT_TYPES = uploadFile.kind.acceptedFiles;
            topWindow.UPLOADCARE_LOCALE_TRANSLATIONS.dialog.tabs.preview.error.fileType.text = translations.uploadCare.fileTypeText.replace('{{formats}}', uploadFile.kind.acceptedFiles);
            topWindow.UPLOADCARE_LOCALE_TRANSLATIONS.dialog.tabs.preview.error.fileMaximumSize.text = translations.uploadCare.fileSizeErrorText.replace('{{user_package}}', '"' + getPackageNameById(uploadFile.packageNUM) + '"');
            widget = topWindow.uploadcare.Widget('[data-id="' + currentID + '"][role=uploadcare-uploader]');
            widget.validators.push(fileTypeValidation(uploadFile.kind.acceptedFiles));
            widget.validators.push(fileSizeValidation(uploadFile.mb));
            widget.openDialog();
            widget.onUploadComplete(function(info) {
                $(document).trigger('uploadcare_upload_complete.' + pageUnqiueID, [info]);
            });
            widget.onChange(function(file) {
                if (file.progress) {
                    if (bytedToMB(that.total_files_size) >= 5) {
                        uploadFile.progressbar.start(0, translations.uploadCare.fileProcessingMsg);
                        file.progress(function(uploadInfo) {
                            let progress = (uploadInfo.progress * 100).toFixed(0);
                            uploadFile.progressbar.update(progress);
                            if (uploadInfo.state == 'ready') {
                                uploadFile.progressbar.finish(null, true);
                                uploadFile.progressbar.reset();
                            }
                        });
                    }
                }
            });
        });
        if (!topWindow.uploadcare) {
            topWindow.$.getScript(topWindow.$GLOBALS["cdn-system-files"] + '/files/vendor/uploadcare/js/uploadcare.full.min.js?v=' + topWindow.$GLOBALS["v-cache"], function() {
                $(document).trigger('uploadcare_init.' + pageUnqiueID);
            });
        } else {
            $(document).trigger('uploadcare_init.' + pageUnqiueID);
        }
        $(document).one('uploadcare_upload_complete.' + pageUnqiueID, function(event, info) {
            var type = config.type;
            if ($.QueryString.w) {
                var websiteID = $.QueryString.w;
            } else {
                var websiteID = topWindow.websiteID;
            }
            if ($('#' + pageUnqiueID).data('hire-expert') && $('#' + pageUnqiueID).data('hire-expert') == true) {
                info.tool = 'hire-expert-files';
                info.rid = $('#' + pageUnqiueID).data('request-id');
            }
            if ($('#' + pageUnqiueID).data('support-tickets') && $('#' + pageUnqiueID).data('support-tickets') == true) {
                info.tool = 'support-tickets-files';
                info.rid = $('#' + pageUnqiueID).data('request-id');
            }
            if (type === 'multiple') {
                that.multipleImageUploader(info);
            } else if (type === 'gallery') {
                that.galleryImageUploader(info, pageUnqiueID);
            } else {
                that.singleImageUploader(websiteID, info);
            }
        });
    };
    that.multipleImageUploader = function(info) {
        var uploadFile = topWindow.multipleUploadFile[currentID];
        var totalImageCount = info.count;
        for (let index = 0; index < totalImageCount; index++) {
            $(document).queue('imageUploads', startImageUpload(info, index));
        }
        $(document).queue('imageUploads', function() {
            uploadProgressBar(null, true).finish(function() {
                uploadFile.multiUploadMethods.syncPreview();
                if (topWindow.multipleUploadFile['more-images']) {
                    topWindow.multipleUploadFile['more-images'].multiUploadMethods.syncPreview();
                }
            })
        });
        $(document).dequeue('imageUploads');

        function startImageUpload(info, imgIndex) {
            uploadProgressBar(100);
            return function(next) {
                if (info.hasOwnProperty('tool') && info.tool == 'hire-expert-files') {
                    hireAnExpert_processImageUpload(info, imgIndex, next);
                } else if ($.QueryString.hasOwnProperty('rid') || info.hasOwnProperty('tool') && info.tool == 'support-tickets-files') {
                    if (!info.hasOwnProperty('rid')) {
                        info.rid = $.QueryString.rid;
                    }
                    supportTickets_processImageUpload(info, imgIndex, next);
                } else {
                    processImageUpload(info, imgIndex, next);
                }
            }
        }

        function hireAnExpert_processImageUpload(info, imgIndex, next) {
            var imageUrl = info.cdnUrl + "nth/" + imgIndex + "/" + encodeURIComponent(imgIndex);
            $.ajax({
                type: "POST",
                url: "/manager/hireExpert/uploadFileUploadcare.php",
                data: {
                    url: imageUrl,
                    rid: info.rid,
                },
                success: function(s3Obj) {
                    s3Obj = tryParseJSON(s3Obj);
                    if (!s3Obj) {
                        uploadFile.progressbar.finish(function() {
                            bootbox.alert({
                                message: translations.sorryGotError
                            });
                        });
                        return;
                    }
                    if (isVideo(s3Obj.n)) {
                        s3Obj.mediaType = 'video';
                    } else {
                        s3Obj.mediaType = '';
                    }
                    site123_inputImages.push(s3Obj);
                    next();
                }
            });
        }

        function supportTickets_processImageUpload(info, imgIndex, next) {
            var imageUrl = info.cdnUrl + "nth/" + imgIndex + "/" + encodeURIComponent(imgIndex);
            $.ajax({
                type: "POST",
                url: "/manager/support/uploadFileUploadcare.php",
                data: {
                    url: imageUrl,
                    rid: info.rid,
                },
                success: function(s3Obj) {
                    s3Obj = tryParseJSON(s3Obj);
                    if (!s3Obj) {
                        uploadFile.progressbar.finish(function() {
                            bootbox.alert({
                                message: translations.sorryGotError
                            });
                        });
                        return;
                    }
                    if (isVideo(s3Obj.n)) {
                        s3Obj.mediaType = 'video';
                    } else {
                        s3Obj.mediaType = '';
                    }
                    site123_inputImages.push(s3Obj);
                    next();
                }
            });
        }

        function processImageUpload(info, imgIndex, next) {
            var websiteID = $.QueryString.w;
            if (!$.isNumeric(websiteID)) {
                websiteID = $('#websiteID').val();
            }
            var imageUrl = info.cdnUrl + "nth/" + imgIndex + "/" + encodeURIComponent(imgIndex);
            $.ajax({
                type: "POST",
                url: "/versions/" + versionNUM + "/wizard/uploadFileUploadcare.php",
                data: {
                    url: imageUrl,
                    w: websiteID
                },
                success: function(s3Obj) {
                    s3Obj = tryParseJSON(s3Obj);
                    if (!s3Obj) {
                        uploadFile.progressbar.finish(function() {
                            bootbox.alert({
                                message: translations.sorryGotError
                            });
                        });
                        return;
                    }
                    if (isVideo(s3Obj.n)) {
                        s3Obj.mediaType = 'video';
                    } else {
                        s3Obj.mediaType = '';
                    }
                    site123_inputImages.push(s3Obj);
                    next();
                }
            });
        }

        function uploadProgressBar(progress, done) {
            var progressBar = uploadFile.progressbar;
            if (done) {
                return {
                    finish: progressBar.finish
                }
            }
            progress = progress * 0.6;
            progress = Math.ceil(progress);
            progressBar.update(progress);
            if (progress >= 60) {
                progressBar.start(500);
            }
        }
    };
    that.singleImageUploader = function(websiteID, info) {
        var uploadFile = topWindow.uploadFiles[currentID];
        var estimated_interval = 100;
        var file_size_mb = bytedToMB(info.size);
        if (file_size_mb > 50 && file_size_mb <= 100) {
            estimated_interval = 150;
        } else if (file_size_mb > 100 && file_size_mb <= 200) {
            estimated_interval = 200;
        } else if (file_size_mb > 200 && file_size_mb <= 300) {
            estimated_interval = 400;
        } else if (file_size_mb > 300 && file_size_mb <= 400) {
            estimated_interval = 600;
        } else if (file_size_mb > 400) {
            estimated_interval = 800;
        }
        uploadFile.progressbar.start(estimated_interval);
        uploadFile.methods.addFrameClass();
        var ajax = $.ajax({
            type: "POST",
            url: "/versions/" + versionNUM + "/wizard/uploadFileUploadcare.php",
            data: {
                w: websiteID,
                uuid: info.uuid,
                fileName: info.name,
                url: info.cdnUrl + '' + encodeURIComponent(info.name)
            },
            success: function(s3Obj) {
                s3Obj = tryParseJSON(s3Obj);
                if (!s3Obj) {
                    uploadFile.progressbar.finish(function() {
                        bootbox.alert({
                            message: translations.sorryGotError
                        });
                    });
                    uploadFile.methods.removeFrameClass();
                    return;
                }
                uploadFile.progressbar.finish(function() {
                    UpdateImagePreview(currentID, {
                        normal: s3Obj.n,
                        tiny: s3Obj.t
                    });
                    uploadFile.input.val(s3Obj.n).trigger('change', s3Obj);
                    if (typeof AutoSaveWizard == 'function') {
                        AutoSaveWizard(true, true);
                    }
                });
                uploadFile.methods.removeFrameClass();
            }
        });
        uploadFile.btns.cancel.off('click').click(function() {
            uploadFile.progressbar.abort(function() {
                ajax.abort();
            });
        });
    };
    that.galleryImageUploader = function(fileInfo, pageUnqiueID) {
        $(document).trigger('upload_care_gallery_image_uploader', [fileInfo, pageUnqiueID]);
    };

    function fileTypeValidation(types) {
        types = types.replace(/[,\.]/g, '');
        types = types.split(' ');
        return function(fileInfo) {
            if (fileInfo.mimeType) {
                var extension = fileInfo.name.split('.').pop();
                if (types.indexOf(extension) == -1) {
                    throw new Error('fileType');
                }
            }
        }
    }

    function fileSizeValidation(mb) {
        return function(fileInfo) {
            that.total_files_size += fileInfo.size;
            if (fileInfo.size !== null && parseFloat(fileInfo.size / 1024 / 1000) > parseFloat(mb)) {
                throw new Error("fileMaximumSize");
            }
        }
    }

    function isVideo(path) {
        var extension = path.split("?")[0].split('.').pop();
        if ('.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv'.indexOf(extension) != -1) return true;
        return false;
    }

    function getPackageNameById(packageNUM) {
        if (packageNUM == 1) {
            return translations.uploadCare.packageFree;
        } else if (packageNUM == 2) {
            return translations.uploadCare.packageBasic;
        } else if (packageNUM == 3) {
            return translations.uploadCare.packageAdvanced;
        } else if (packageNUM == 4) {
            return translations.uploadCare.packageProfessional;
        } else if (packageNUM == 5) {
            return translations.uploadCare.packageGold;
        } else if (packageNUM == 6) {
            return translations.uploadCare.packagePlatinum;
        }
    }

    function bytedToMB(bytes) {
        return (bytes / (1024 * 1024)).toFixed(2);
    }
    return that;
}();
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function($) {
            factory($, window, document);
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("jquery"), window, document);
    } else {
        factory(jQuery, window, document);
    }
})(function($, window, document, undefined) {
    "use strict";
    var pluginName = "intlTelInput",
        id = 1, // give each instance it's own id for namespaced event handling
        defaults = {
            allowDropdown: true,
            autoHideDialCode: true,
            autoPlaceholder: true,
            customPlaceholder: null,
            dropdownContainer: "",
            excludeCountries: [],
            formatOnInit: true,
            geoIpLookup: null,
            initialCountry: "",
            nationalMode: true,
            numberType: "MOBILE",
            onlyCountries: [],
            preferredCountries: ["us", "gb"],
            separateDialCode: false,
            utilsScript: ""
        },
        keys = {
            UP: 38,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            PLUS: 43,
            A: 65,
            Z: 90,
            SPACE: 32,
            TAB: 9
        };
    $(window).load(function() {
        $.fn[pluginName].windowLoaded = true;
    });

    function Plugin(element, options) {
        this.telInput = $(element);
        this.options = $.extend({}, defaults, options);
        this.ns = "." + pluginName + id++;
        this.isGoodBrowser = Boolean(element.setSelectionRange);
        this.hadInitialPlaceholder = Boolean($(element).attr("placeholder"));
    }
    Plugin.prototype = {
        _init: function() {
            if (this.options.nationalMode) {
                this.options.autoHideDialCode = false;
            }
            if (this.options.separateDialCode) {
                this.options.autoHideDialCode = this.options.nationalMode = false;
                this.options.allowDropdown = true;
            }
            this.isMobile = /Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (this.isMobile) {
                $("body").addClass("iti-mobile");
                if (!this.options.dropdownContainer) {
                    this.options.dropdownContainer = "body";
                }
            }
            this.autoCountryDeferred = new $.Deferred();
            this.utilsScriptDeferred = new $.Deferred();
            this._processCountryData();
            this._generateMarkup();
            this._setInitialState();
            this._initListeners();
            this._initRequests();
            return [this.autoCountryDeferred, this.utilsScriptDeferred];
        },
        _processCountryData: function() {
            this._processAllCountries();
            this._processCountryCodes();
            this._processPreferredCountries();
        },
        _addCountryCode: function(iso2, dialCode, priority) {
            if (!(dialCode in this.countryCodes)) {
                this.countryCodes[dialCode] = [];
            }
            var index = priority || 0;
            this.countryCodes[dialCode][index] = iso2;
        },
        _filterCountries: function(countryArray, processFunc) {
            var i;
            for (i = 0; i < countryArray.length; i++) {
                countryArray[i] = countryArray[i].toLowerCase();
            }
            this.countries = [];
            for (i = 0; i < allCountries.length; i++) {
                if (processFunc($.inArray(allCountries[i].iso2, countryArray))) {
                    this.countries.push(allCountries[i]);
                }
            }
        },
        _processAllCountries: function() {
            if (this.options.onlyCountries.length) {
                this._filterCountries(this.options.onlyCountries, function(inArray) {
                    return inArray != -1;
                });
            } else if (this.options.excludeCountries.length) {
                this._filterCountries(this.options.excludeCountries, function(inArray) {
                    return inArray == -1;
                });
            } else {
                this.countries = allCountries;
            }
        },
        _processCountryCodes: function() {
            this.countryCodes = {};
            for (var i = 0; i < this.countries.length; i++) {
                var c = this.countries[i];
                this._addCountryCode(c.iso2, c.dialCode, c.priority);
                if (c.areaCodes) {
                    for (var j = 0; j < c.areaCodes.length; j++) {
                        this._addCountryCode(c.iso2, c.dialCode + c.areaCodes[j]);
                    }
                }
            }
        },
        _processPreferredCountries: function() {
            this.preferredCountries = [];
            for (var i = 0; i < this.options.preferredCountries.length; i++) {
                var countryCode = this.options.preferredCountries[i].toLowerCase(),
                    countryData = this._getCountryData(countryCode, false, true);
                if (countryData) {
                    this.preferredCountries.push(countryData);
                }
            }
        },
        _generateMarkup: function() {
            this.telInput.attr("autocomplete", "off");
            var parentClass = "intl-tel-input";
            if (this.options.allowDropdown) {
                parentClass += " allow-dropdown";
            }
            if (this.options.separateDialCode) {
                parentClass += " separate-dial-code";
            }
            this.telInput.wrap($("<div>", {
                "class": parentClass
            }));
            this.flagsContainer = $("<div>", {
                "class": "flag-container"
            }).insertBefore(this.telInput);
            var selectedFlag = $("<div>", {
                "class": "selected-flag"
            });
            selectedFlag.appendTo(this.flagsContainer);
            this.selectedFlagInner = $("<div>", {
                "class": "iti-flag"
            }).appendTo(selectedFlag);
            if (this.options.separateDialCode) {
                this.selectedDialCode = $("<div>", {
                    "class": "selected-dial-code"
                }).appendTo(selectedFlag);
            }
            if (this.options.allowDropdown) {
                selectedFlag.attr("tabindex", "0");
                $("<div>", {
                    "class": "iti-arrow"
                }).appendTo(selectedFlag);
                this.countryList = $("<ul>", {
                    "class": "country-list hide"
                });
                if (this.preferredCountries.length) {
                    this._appendListItems(this.preferredCountries, "preferred");
                    $("<li>", {
                        "class": "divider"
                    }).appendTo(this.countryList);
                }
                this._appendListItems(this.countries, "");
                this.countryListItems = this.countryList.children(".country");
                if (this.options.dropdownContainer) {
                    this.dropdown = $("<div>", {
                        "class": "intl-tel-input iti-container"
                    }).append(this.countryList);
                } else {
                    this.countryList.appendTo(this.flagsContainer);
                }
            } else {
                this.countryListItems = $();
            }
        },
        _appendListItems: function(countries, className) {
            var tmp = "";
            for (var i = 0; i < countries.length; i++) {
                var c = countries[i];
                tmp += "<li class='country " + className + "' data-dial-code='" + c.dialCode + "' data-country-code='" + c.iso2 + "'>";
                tmp += "<div class='flag-box'><div class='iti-flag " + c.iso2 + "'></div></div>";
                tmp += "<span class='country-name'>" + c.name + "</span>";
                tmp += "<span class='dial-code'>+" + c.dialCode + "</span>";
                tmp += "</li>";
            }
            this.countryList.append(tmp);
        },
        _setInitialState: function() {
            var val = this.telInput.val();
            if (this._getDialCode(val)) {
                this._updateFlagFromNumber(val, true);
            } else if (this.options.initialCountry !== "auto") {
                if (this.options.initialCountry) {
                    this._setFlag(this.options.initialCountry, true);
                } else {
                    this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                    if (!val) {
                        this._setFlag(this.defaultCountry, true);
                    }
                }
                if (!val && !this.options.nationalMode && !this.options.autoHideDialCode && !this.options.separateDialCode) {
                    this.telInput.val("+" + this.selectedCountryData.dialCode);
                }
            }
            if (val) {
                this._updateValFromNumber(val, this.options.formatOnInit);
            }
        },
        _initListeners: function() {
            this._initKeyListeners();
            if (this.options.autoHideDialCode) {
                this._initFocusListeners();
            }
            if (this.options.allowDropdown) {
                this._initDropdownListeners();
            }
        },
        _initDropdownListeners: function() {
            var that = this;
            var label = this.telInput.closest("label");
            if (label.length) {
                label.on("click" + this.ns, function(e) {
                    if (that.countryList.hasClass("hide")) {
                        that.telInput.focus();
                    } else {
                        e.preventDefault();
                    }
                });
            }
            var selectedFlag = this.selectedFlagInner.parent();
            selectedFlag.on("click" + this.ns, function(e) {
                if (that.countryList.hasClass("hide") && !that.telInput.prop("disabled") && !that.telInput.prop("readonly")) {
                    that._showDropdown();
                }
            });
            this.flagsContainer.on("keydown" + that.ns, function(e) {
                var isDropdownHidden = that.countryList.hasClass("hide");
                if (isDropdownHidden && (e.which == keys.UP || e.which == keys.DOWN || e.which == keys.SPACE || e.which == keys.ENTER)) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._showDropdown();
                }
                if (e.which == keys.TAB) {
                    that._closeDropdown();
                }
            });
        },
        _initRequests: function() {
            var that = this;
            if (this.options.utilsScript) {
                if ($.fn[pluginName].windowLoaded) {
                    $.fn[pluginName].loadUtils(this.options.utilsScript, this.utilsScriptDeferred);
                } else {
                    $(window).load(function() {
                        $.fn[pluginName].loadUtils(that.options.utilsScript, that.utilsScriptDeferred);
                    });
                }
            } else {
                this.utilsScriptDeferred.resolve();
            }
            if (this.options.initialCountry === "auto") {
                this._loadAutoCountry();
            } else {
                this.autoCountryDeferred.resolve();
            }
        },
        _loadAutoCountry: function() {
            var that = this;
            var cookieAutoCountry = window.Cookies ? Cookies.get("itiAutoCountry") : "";
            if (cookieAutoCountry) {
                $.fn[pluginName].autoCountry = cookieAutoCountry;
            }
            if ($.fn[pluginName].autoCountry) {
                this.handleAutoCountry();
            } else if (!$.fn[pluginName].startedLoadingAutoCountry) {
                $.fn[pluginName].startedLoadingAutoCountry = true;
                if (typeof this.options.geoIpLookup === "function") {
                    this.options.geoIpLookup(function(countryCode) {
                        $.fn[pluginName].autoCountry = countryCode.toLowerCase();
                        if (window.Cookies) {
                            Cookies.set("itiAutoCountry", $.fn[pluginName].autoCountry, {
                                path: "/"
                            });
                        }
                        setTimeout(function() {
                            $(".intl-tel-input input").intlTelInput("handleAutoCountry");
                        });
                    });
                }
            }
        },
        _initKeyListeners: function() {
            var that = this;
            this.telInput.on("keyup" + this.ns, function() {
                that._updateFlagFromNumber(that.telInput.val());
            });
            this.telInput.on("cut" + this.ns + " paste" + this.ns + " keyup" + this.ns, function() {
                setTimeout(function() {
                    that._updateFlagFromNumber(that.telInput.val());
                });
            });
        },
        _cap: function(number) {
            var max = this.telInput.attr("maxlength");
            return max && number.length > max ? number.substr(0, max) : number;
        },
        _initFocusListeners: function() {
            var that = this;
            this.telInput.on("mousedown" + this.ns, function(e) {
                if (!that.telInput.is(":focus") && !that.telInput.val()) {
                    e.preventDefault();
                    that.telInput.focus();
                }
            });
            this.telInput.on("focus" + this.ns, function(e) {
                if (!that.telInput.val() && !that.telInput.prop("readonly") && that.selectedCountryData.dialCode) {
                    that.telInput.val("+" + that.selectedCountryData.dialCode);
                    that.telInput.one("keypress.plus" + that.ns, function(e) {
                        if (e.which == keys.PLUS) {
                            that.telInput.val("");
                        }
                    });
                    setTimeout(function() {
                        var input = that.telInput[0];
                        if (that.isGoodBrowser) {
                            var len = that.telInput.val().length;
                            input.setSelectionRange(len, len);
                        }
                    });
                }
            });
            var form = this.telInput.prop("form");
            if (form) {
                $(form).on("submit" + this.ns, function() {
                    that._removeEmptyDialCode();
                });
            }
            this.telInput.on("blur" + this.ns, function() {
                that._removeEmptyDialCode();
            });
        },
        _removeEmptyDialCode: function() {
            var value = this.telInput.val(),
                startsPlus = value.charAt(0) == "+";
            if (startsPlus) {
                var numeric = this._getNumeric(value);
                if (!numeric || this.selectedCountryData.dialCode == numeric) {
                    this.telInput.val("");
                }
            }
            this.telInput.off("keypress.plus" + this.ns);
        },
        _getNumeric: function(s) {
            return s.replace(/\D/g, "");
        },
        _showDropdown: function() {
            this._setDropdownPosition();
            var activeListItem = this.countryList.children(".active");
            if (activeListItem.length) {
                this._highlightListItem(activeListItem);
                this._scrollTo(activeListItem);
            }
            this._bindDropdownListeners();
            this.selectedFlagInner.children(".iti-arrow").addClass("up");
        },
        _setDropdownPosition: function() {
            var that = this;
            if (this.options.dropdownContainer) {
                this.dropdown.appendTo(this.options.dropdownContainer);
            }
            this.dropdownHeight = this.countryList.removeClass("hide").outerHeight();
            if (!this.isMobile) {
                var pos = this.telInput.offset(),
                    inputTop = pos.top,
                    windowTop = $(window).scrollTop(), // dropdownFitsBelow = (dropdownBottom < windowBottom)
                    dropdownFitsBelow = inputTop + this.telInput.outerHeight() + this.dropdownHeight < windowTop + $(window).height(),
                    dropdownFitsAbove = inputTop - this.dropdownHeight > windowTop;
                this.countryList.toggleClass("dropup", !dropdownFitsBelow && dropdownFitsAbove);
                if (this.options.dropdownContainer) {
                    var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.innerHeight();
                    this.dropdown.css({
                        top: inputTop + extraTop,
                        left: pos.left
                    });
                    $(window).on("scroll" + this.ns, function() {
                        that._closeDropdown();
                    });
                }
            }
        },
        _bindDropdownListeners: function() {
            var that = this;
            this.countryList.on("mouseover" + this.ns, ".country", function(e) {
                that._highlightListItem($(this));
            });
            this.countryList.on("click" + this.ns, ".country", function(e) {
                that._selectListItem($(this));
            });
            var isOpening = true;
            $("html").on("click" + this.ns, function(e) {
                if (!isOpening) {
                    that._closeDropdown();
                }
                isOpening = false;
            });
            var query = "",
                queryTimer = null;
            $(document).on("keydown" + this.ns, function(e) {
                e.preventDefault();
                if (e.which == keys.UP || e.which == keys.DOWN) {
                    that._handleUpDownKey(e.which);
                } else if (e.which == keys.ENTER) {
                    that._handleEnterKey();
                } else if (e.which == keys.ESC) {
                    that._closeDropdown();
                } else if (e.which >= keys.A && e.which <= keys.Z || e.which == keys.SPACE) {
                    if (queryTimer) {
                        clearTimeout(queryTimer);
                    }
                    query += String.fromCharCode(e.which);
                    that._searchForCountry(query);
                    queryTimer = setTimeout(function() {
                        query = "";
                    }, 1e3);
                }
            });
        },
        _handleUpDownKey: function(key) {
            var current = this.countryList.children(".highlight").first();
            var next = key == keys.UP ? current.prev() : current.next();
            if (next.length) {
                if (next.hasClass("divider")) {
                    next = key == keys.UP ? next.prev() : next.next();
                }
                this._highlightListItem(next);
                this._scrollTo(next);
            }
        },
        _handleEnterKey: function() {
            var currentCountry = this.countryList.children(".highlight").first();
            if (currentCountry.length) {
                this._selectListItem(currentCountry);
            }
        },
        _searchForCountry: function(query) {
            for (var i = 0; i < this.countries.length; i++) {
                if (this._startsWith(this.countries[i].name, query)) {
                    var listItem = this.countryList.children("[data-country-code=" + this.countries[i].iso2 + "]").not(".preferred");
                    this._highlightListItem(listItem);
                    this._scrollTo(listItem, true);
                    break;
                }
            }
        },
        _startsWith: function(a, b) {
            return a.substr(0, b.length).toUpperCase() == b;
        },
        _updateValFromNumber: function(number, doFormat, format) {
            if (doFormat && window.intlTelInputUtils && this.selectedCountryData) {
                if (!$.isNumeric(format)) {
                    format = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) != "+") ? intlTelInputUtils.numberFormat.NATIONAL : intlTelInputUtils.numberFormat.INTERNATIONAL;
                }
                number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
            }
            number = this._beforeSetNumber(number);
            this.telInput.val(number);
        },
        _updateFlagFromNumber: function(number, isInit) {
            if (number && this.options.nationalMode && this.selectedCountryData && this.selectedCountryData.dialCode == "1" && number.charAt(0) != "+") {
                if (number.charAt(0) != "1") {
                    number = "1" + number;
                }
                number = "+" + number;
            }
            var dialCode = this._getDialCode(number),
                countryCode = null;
            if (dialCode) {
                var countryCodes = this.countryCodes[this._getNumeric(dialCode)],
                    alreadySelected = this.selectedCountryData && $.inArray(this.selectedCountryData.iso2, countryCodes) != -1;
                if (!alreadySelected || this._isUnknownNanp(number, dialCode)) {
                    for (var j = 0; j < countryCodes.length; j++) {
                        if (countryCodes[j]) {
                            countryCode = countryCodes[j];
                            break;
                        }
                    }
                }
            } else if (number.charAt(0) == "+" && this._getNumeric(number).length) {
                countryCode = "";
            } else if (!number || number == "+") {
                countryCode = this.defaultCountry;
            }
            if (countryCode !== null) {
                this._setFlag(countryCode, isInit);
            }
        },
        _isUnknownNanp: function(number, dialCode) {
            return dialCode == "+1" && this._getNumeric(number).length >= 4;
        },
        _highlightListItem: function(listItem) {
            this.countryListItems.removeClass("highlight");
            listItem.addClass("highlight");
        },
        _getCountryData: function(countryCode, ignoreOnlyCountriesOption, allowFail) {
            var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
            for (var i = 0; i < countryList.length; i++) {
                if (countryList[i].iso2 == countryCode) {
                    return countryList[i];
                }
            }
            if (allowFail) {
                return null;
            } else {
                throw new Error("No country data for '" + countryCode + "'");
            }
        },
        _setFlag: function(countryCode, isInit) {
            var prevCountry = this.selectedCountryData && this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
            if (this.selectedCountryData.iso2) {
                this.defaultCountry = this.selectedCountryData.iso2;
            }
            this.selectedFlagInner.attr("class", "iti-flag " + countryCode);
            var title = countryCode ? this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode : "Unknown";
            this.selectedFlagInner.parent().attr("title", title);
            if (this.options.separateDialCode) {
                var dialCode = this.selectedCountryData.dialCode ? "+" + this.selectedCountryData.dialCode : "",
                    parent = this.telInput.parent();
                if (prevCountry.dialCode) {
                    parent.removeClass("iti-sdc-" + (prevCountry.dialCode.length + 1));
                }
                if (dialCode) {
                    parent.addClass("iti-sdc-" + dialCode.length);
                }
                this.selectedDialCode.text(dialCode);
            }
            this._updatePlaceholder();
            this.countryListItems.removeClass("active");
            if (countryCode) {
                this.countryListItems.find(".iti-flag." + countryCode).first().closest(".country").addClass("active");
            }
            if (!isInit && prevCountry.iso2 !== countryCode) {
                this.telInput.trigger("countrychange", this.selectedCountryData);
            }
        },
        _updatePlaceholder: function() {
            if (window.intlTelInputUtils && !this.hadInitialPlaceholder && this.options.autoPlaceholder && this.selectedCountryData) {
                var numberType = intlTelInputUtils.numberType[this.options.numberType],
                    placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                placeholder = this._beforeSetNumber(placeholder);
                if (typeof this.options.customPlaceholder === "function") {
                    placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                }
                this.telInput.attr("placeholder", placeholder);
            }
        },
        _selectListItem: function(listItem) {
            this._setFlag(listItem.attr("data-country-code"));
            this._closeDropdown();
            this._updateDialCode(listItem.attr("data-dial-code"), true);
            this.telInput.focus();
            if (this.isGoodBrowser) {
                var len = this.telInput.val().length;
                this.telInput[0].setSelectionRange(len, len);
            }
        },
        _closeDropdown: function() {
            this.countryList.addClass("hide");
            this.selectedFlagInner.children(".iti-arrow").removeClass("up");
            $(document).off(this.ns);
            $("html").off(this.ns);
            this.countryList.off(this.ns);
            if (this.options.dropdownContainer) {
                if (!this.isMobile) {
                    $(window).off("scroll" + this.ns);
                }
                this.dropdown.detach();
            }
        },
        _scrollTo: function(element, middle) {
            var container = this.countryList,
                containerHeight = container.height(),
                containerTop = container.offset().top,
                containerBottom = containerTop + containerHeight,
                elementHeight = element.outerHeight(),
                elementTop = element.offset().top,
                elementBottom = elementTop + elementHeight,
                newScrollTop = elementTop - containerTop + container.scrollTop(),
                middleOffset = containerHeight / 2 - elementHeight / 2;
            if (elementTop < containerTop) {
                if (middle) {
                    newScrollTop -= middleOffset;
                }
                container.scrollTop(newScrollTop);
            } else if (elementBottom > containerBottom) {
                if (middle) {
                    newScrollTop += middleOffset;
                }
                var heightDifference = containerHeight - elementHeight;
                container.scrollTop(newScrollTop - heightDifference);
            }
        },
        _updateDialCode: function(newDialCode, hasSelectedListItem) {
            var inputVal = this.telInput.val(),
                newNumber;
            newDialCode = "+" + newDialCode;
            if (inputVal.charAt(0) == "+") {
                var prevDialCode = this._getDialCode(inputVal);
                if (prevDialCode) {
                    newNumber = inputVal.replace(prevDialCode, newDialCode);
                } else {
                    newNumber = newDialCode;
                }
            } else if (this.options.nationalMode || this.options.separateDialCode) {
                return;
            } else {
                if (inputVal) {
                    newNumber = newDialCode + inputVal;
                } else if (hasSelectedListItem || !this.options.autoHideDialCode) {
                    newNumber = newDialCode;
                } else {
                    return;
                }
            }
            this.telInput.val(newNumber);
        },
        _getDialCode: function(number) {
            var dialCode = "";
            if (number.charAt(0) == "+") {
                var numericChars = "";
                for (var i = 0; i < number.length; i++) {
                    var c = number.charAt(i);
                    if ($.isNumeric(c)) {
                        numericChars += c;
                        if (this.countryCodes[numericChars]) {
                            dialCode = number.substr(0, i + 1);
                        }
                        if (numericChars.length == 4) {
                            break;
                        }
                    }
                }
            }
            return dialCode;
        },
        _getFullNumber: function() {
            var prefix = this.options.separateDialCode ? "+" + this.selectedCountryData.dialCode : "";
            return prefix + this.telInput.val();
        },
        _beforeSetNumber: function(number) {
            if (this.options.separateDialCode) {
                var dialCode = this._getDialCode(number);
                if (dialCode) {
                    if (this.selectedCountryData.areaCodes !== null) {
                        dialCode = "+" + this.selectedCountryData.dialCode;
                    }
                    var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                    number = number.substr(start);
                }
            }
            return this._cap(number);
        },
        handleAutoCountry: function() {
            if (this.options.initialCountry === "auto") {
                this.defaultCountry = $.fn[pluginName].autoCountry;
                if (!this.telInput.val()) {
                    this.setCountry(this.defaultCountry);
                }
                this.autoCountryDeferred.resolve();
            }
        },
        destroy: function() {
            if (this.allowDropdown) {
                this._closeDropdown();
                this.selectedFlagInner.parent().off(this.ns);
                this.telInput.closest("label").off(this.ns);
            }
            if (this.options.autoHideDialCode) {
                var form = this.telInput.prop("form");
                if (form) {
                    $(form).off(this.ns);
                }
            }
            this.telInput.off(this.ns);
            var container = this.telInput.parent();
            container.before(this.telInput).remove();
        },
        getExtension: function() {
            if (window.intlTelInputUtils) {
                return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
            }
            return "";
        },
        getNumber: function(format) {
            if (window.intlTelInputUtils) {
                return intlTelInputUtils.formatNumber(this._getFullNumber(), this.selectedCountryData.iso2, format);
            }
            return "";
        },
        getNumberType: function() {
            if (window.intlTelInputUtils) {
                return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
            }
            return -99;
        },
        getSelectedCountryData: function() {
            return this.selectedCountryData || {};
        },
        getValidationError: function() {
            if (window.intlTelInputUtils) {
                return intlTelInputUtils.getValidationError(this._getFullNumber(), this.selectedCountryData.iso2);
            }
            return -99;
        },
        isValidNumber: function() {
            var val = $.trim(this._getFullNumber()),
                countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
            return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
        },
        setCountry: function(countryCode) {
            countryCode = countryCode.toLowerCase();
            if (!this.selectedFlagInner.hasClass(countryCode)) {
                this._setFlag(countryCode);
                this._updateDialCode(this.selectedCountryData.dialCode, false);
            }
        },
        setNumber: function(number, format) {
            this._updateFlagFromNumber(number);
            this._updateValFromNumber(number, $.isNumeric(format), format);
        },
        handleUtils: function() {
            if (window.intlTelInputUtils) {
                if (this.telInput.val()) {
                    this._updateValFromNumber(this.telInput.val(), this.options.formatOnInit);
                }
                this._updatePlaceholder();
            }
            this.utilsScriptDeferred.resolve();
        }
    };
    $.fn[pluginName] = function(options) {
        var args = arguments;
        if (options === undefined || typeof options === "object") {
            var deferreds = [];
            this.each(function() {
                if (!$.data(this, "plugin_" + pluginName)) {
                    var instance = new Plugin(this, options);
                    var instanceDeferreds = instance._init();
                    deferreds.push(instanceDeferreds[0]);
                    deferreds.push(instanceDeferreds[1]);
                    $.data(this, "plugin_" + pluginName, instance);
                }
            });
            return $.when.apply(null, deferreds);
        } else if (typeof options === "string" && options[0] !== "_") {
            var returns;
            this.each(function() {
                var instance = $.data(this, "plugin_" + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === "function") {
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                if (options === "destroy") {
                    $.data(this, "plugin_" + pluginName, null);
                }
            });
            return returns !== undefined ? returns : this;
        }
    };
    $.fn[pluginName].getCountryData = function() {
        return allCountries;
    };
    $.fn[pluginName].loadUtils = function(path, utilsScriptDeferred) {
        if (!$.fn[pluginName].loadedUtilsScript) {
            $.fn[pluginName].loadedUtilsScript = true;
            $.ajax({
                url: path,
                complete: function() {
                    $(".intl-tel-input input").intlTelInput("handleUtils");
                },
                dataType: "script",
                cache: true
            });
        } else if (utilsScriptDeferred) {
            utilsScriptDeferred.resolve();
        }
    };
    $.fn[pluginName].version = "8.5.2";
    var allCountries = [
        ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
        ["Albania (Shqipëri)", "al", "355"],
        ["Algeria (‫الجزائر‬‎)", "dz", "213"],
        ["American Samoa", "as", "1684"],
        ["Andorra", "ad", "376"],
        ["Angola", "ao", "244"],
        ["Anguilla", "ai", "1264"],
        ["Antigua and Barbuda", "ag", "1268"],
        ["Argentina", "ar", "54"],
        ["Armenia (Հայաստան)", "am", "374"],
        ["Aruba", "aw", "297"],
        ["Australia", "au", "61", 0],
        ["Austria (Österreich)", "at", "43"],
        ["Azerbaijan (Azərbaycan)", "az", "994"],
        ["Bahamas", "bs", "1242"],
        ["Bahrain (‫البحرين‬‎)", "bh", "973"],
        ["Bangladesh (বাংলাদেশ)", "bd", "880"],
        ["Barbados", "bb", "1246"],
        ["Belarus (Беларусь)", "by", "375"],
        ["Belgium (België)", "be", "32"],
        ["Belize", "bz", "501"],
        ["Benin (Bénin)", "bj", "229"],
        ["Bermuda", "bm", "1441"],
        ["Bhutan (འབྲུག)", "bt", "975"],
        ["Bolivia", "bo", "591"],
        ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
        ["Botswana", "bw", "267"],
        ["Brazil (Brasil)", "br", "55"],
        ["British Indian Ocean Territory", "io", "246"],
        ["British Virgin Islands", "vg", "1284"],
        ["Brunei", "bn", "673"],
        ["Bulgaria (България)", "bg", "359"],
        ["Burkina Faso", "bf", "226"],
        ["Burundi (Uburundi)", "bi", "257"],
        ["Cambodia (កម្ពុជា)", "kh", "855"],
        ["Cameroon (Cameroun)", "cm", "237"],
        ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
        ["Cape Verde (Kabu Verdi)", "cv", "238"],
        ["Caribbean Netherlands", "bq", "599", 1],
        ["Cayman Islands", "ky", "1345"],
        ["Central African Republic (République centrafricaine)", "cf", "236"],
        ["Chad (Tchad)", "td", "235"],
        ["Chile", "cl", "56"],
        ["China (中国)", "cn", "86"],
        ["Christmas Island", "cx", "61", 2],
        ["Cocos (Keeling) Islands", "cc", "61", 1],
        ["Colombia", "co", "57"],
        ["Comoros (‫جزر القمر‬‎)", "km", "269"],
        ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
        ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
        ["Cook Islands", "ck", "682"],
        ["Costa Rica", "cr", "506"],
        ["Côte d’Ivoire", "ci", "225"],
        ["Croatia (Hrvatska)", "hr", "385"],
        ["Cuba", "cu", "53"],
        ["Curaçao", "cw", "599", 0],
        ["Cyprus (Κύπρος)", "cy", "357"],
        ["Czech Republic (Česká republika)", "cz", "420"],
        ["Denmark (Danmark)", "dk", "45"],
        ["Djibouti", "dj", "253"],
        ["Dominica", "dm", "1767"],
        ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
        ["Ecuador", "ec", "593"],
        ["Egypt (‫مصر‬‎)", "eg", "20"],
        ["El Salvador", "sv", "503"],
        ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
        ["Eritrea", "er", "291"],
        ["Estonia (Eesti)", "ee", "372"],
        ["Ethiopia", "et", "251"],
        ["Falkland Islands (Islas Malvinas)", "fk", "500"],
        ["Faroe Islands (Føroyar)", "fo", "298"],
        ["Fiji", "fj", "679"],
        ["Finland (Suomi)", "fi", "358", 0],
        ["France", "fr", "33"],
        ["French Guiana (Guyane française)", "gf", "594"],
        ["French Polynesia (Polynésie française)", "pf", "689"],
        ["Gabon", "ga", "241"],
        ["Gambia", "gm", "220"],
        ["Georgia (საქართველო)", "ge", "995"],
        ["Germany (Deutschland)", "de", "49"],
        ["Ghana (Gaana)", "gh", "233"],
        ["Gibraltar", "gi", "350"],
        ["Greece (Ελλάδα)", "gr", "30"],
        ["Greenland (Kalaallit Nunaat)", "gl", "299"],
        ["Grenada", "gd", "1473"],
        ["Guadeloupe", "gp", "590", 0],
        ["Guam", "gu", "1671"],
        ["Guatemala", "gt", "502"],
        ["Guernsey", "gg", "44", 1],
        ["Guinea (Guinée)", "gn", "224"],
        ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
        ["Guyana", "gy", "592"],
        ["Haiti", "ht", "509"],
        ["Honduras", "hn", "504"],
        ["Hong Kong (香港)", "hk", "852"],
        ["Hungary (Magyarország)", "hu", "36"],
        ["Iceland (Ísland)", "is", "354"],
        ["India (भारत)", "in", "91"],
        ["Indonesia", "id", "62"],
        ["Iran (‫ایران‬‎)", "ir", "98"],
        ["Iraq (‫العراق‬‎)", "iq", "964"],
        ["Ireland", "ie", "353"],
        ["Isle of Man", "im", "44", 2],
        ["Israel (‫ישראל‬‎)", "il", "972"],
        ["Italy (Italia)", "it", "39", 0],
        ["Jamaica", "jm", "1876"],
        ["Japan (日本)", "jp", "81"],
        ["Jersey", "je", "44", 3],
        ["Jordan (‫الأردن‬‎)", "jo", "962"],
        ["Kazakhstan (Казахстан)", "kz", "7", 1],
        ["Kenya", "ke", "254"],
        ["Kiribati", "ki", "686"],
        ["Kuwait (‫الكويت‬‎)", "kw", "965"],
        ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
        ["Laos (ລາວ)", "la", "856"],
        ["Latvia (Latvija)", "lv", "371"],
        ["Lebanon (‫لبنان‬‎)", "lb", "961"],
        ["Lesotho", "ls", "266"],
        ["Liberia", "lr", "231"],
        ["Libya (‫ليبيا‬‎)", "ly", "218"],
        ["Liechtenstein", "li", "423"],
        ["Lithuania (Lietuva)", "lt", "370"],
        ["Luxembourg", "lu", "352"],
        ["Macau (澳門)", "mo", "853"],
        ["Macedonia (FYROM) (Македонија)", "mk", "389"],
        ["Madagascar (Madagasikara)", "mg", "261"],
        ["Malawi", "mw", "265"],
        ["Malaysia", "my", "60"],
        ["Maldives", "mv", "960"],
        ["Mali", "ml", "223"],
        ["Malta", "mt", "356"],
        ["Marshall Islands", "mh", "692"],
        ["Martinique", "mq", "596"],
        ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
        ["Mauritius (Moris)", "mu", "230"],
        ["Mayotte", "yt", "262", 1],
        ["Mexico (México)", "mx", "52"],
        ["Micronesia", "fm", "691"],
        ["Moldova (Republica Moldova)", "md", "373"],
        ["Monaco", "mc", "377"],
        ["Mongolia (Монгол)", "mn", "976"],
        ["Montenegro (Crna Gora)", "me", "382"],
        ["Montserrat", "ms", "1664"],
        ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
        ["Mozambique (Moçambique)", "mz", "258"],
        ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
        ["Namibia (Namibië)", "na", "264"],
        ["Nauru", "nr", "674"],
        ["Nepal (नेपाल)", "np", "977"],
        ["Netherlands (Nederland)", "nl", "31"],
        ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
        ["New Zealand", "nz", "64"],
        ["Nicaragua", "ni", "505"],
        ["Niger (Nijar)", "ne", "227"],
        ["Nigeria", "ng", "234"],
        ["Niue", "nu", "683"],
        ["Norfolk Island", "nf", "672"],
        ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
        ["Northern Mariana Islands", "mp", "1670"],
        ["Norway (Norge)", "no", "47", 0],
        ["Oman (‫عُمان‬‎)", "om", "968"],
        ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
        ["Palau", "pw", "680"],
        ["Palestine (‫فلسطين‬‎)", "ps", "970"],
        ["Panama (Panamá)", "pa", "507"],
        ["Papua New Guinea", "pg", "675"],
        ["Paraguay", "py", "595"],
        ["Peru (Perú)", "pe", "51"],
        ["Philippines", "ph", "63"],
        ["Poland (Polska)", "pl", "48"],
        ["Portugal", "pt", "351"],
        ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
        ["Qatar (‫قطر‬‎)", "qa", "974"],
        ["Réunion (La Réunion)", "re", "262", 0],
        ["Romania (România)", "ro", "40"],
        ["Russia (Россия)", "ru", "7", 0],
        ["Rwanda", "rw", "250"],
        ["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1],
        ["Saint Helena", "sh", "290"],
        ["Saint Kitts and Nevis", "kn", "1869"],
        ["Saint Lucia", "lc", "1758"],
        ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
        ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
        ["Saint Vincent and the Grenadines", "vc", "1784"],
        ["Samoa", "ws", "685"],
        ["San Marino", "sm", "378"],
        ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
        ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
        ["Senegal (Sénégal)", "sn", "221"],
        ["Serbia (Србија)", "rs", "381"],
        ["Seychelles", "sc", "248"],
        ["Sierra Leone", "sl", "232"],
        ["Singapore", "sg", "65"],
        ["Sint Maarten", "sx", "1721"],
        ["Slovakia (Slovensko)", "sk", "421"],
        ["Slovenia (Slovenija)", "si", "386"],
        ["Solomon Islands", "sb", "677"],
        ["Somalia (Soomaaliya)", "so", "252"],
        ["South Africa", "za", "27"],
        ["South Korea (대한민국)", "kr", "82"],
        ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
        ["Spain (España)", "es", "34"],
        ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
        ["Sudan (‫السودان‬‎)", "sd", "249"],
        ["Suriname", "sr", "597"],
        ["Svalbard and Jan Mayen", "sj", "47", 1],
        ["Swaziland", "sz", "268"],
        ["Sweden (Sverige)", "se", "46"],
        ["Switzerland (Schweiz)", "ch", "41"],
        ["Syria (‫سوريا‬‎)", "sy", "963"],
        ["Taiwan (台灣)", "tw", "886"],
        ["Tajikistan", "tj", "992"],
        ["Tanzania", "tz", "255"],
        ["Thailand (ไทย)", "th", "66"],
        ["Timor-Leste", "tl", "670"],
        ["Togo", "tg", "228"],
        ["Tokelau", "tk", "690"],
        ["Tonga", "to", "676"],
        ["Trinidad and Tobago", "tt", "1868"],
        ["Tunisia (‫تونس‬‎)", "tn", "216"],
        ["Turkey (Türkiye)", "tr", "90"],
        ["Turkmenistan", "tm", "993"],
        ["Turks and Caicos Islands", "tc", "1649"],
        ["Tuvalu", "tv", "688"],
        ["U.S. Virgin Islands", "vi", "1340"],
        ["Uganda", "ug", "256"],
        ["Ukraine (Україна)", "ua", "380"],
        ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
        ["United Kingdom", "gb", "44", 0],
        ["United States", "us", "1", 0],
        ["Uruguay", "uy", "598"],
        ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
        ["Vanuatu", "vu", "678"],
        ["Vatican City (Città del Vaticano)", "va", "39", 1],
        ["Venezuela", "ve", "58"],
        ["Vietnam (Việt Nam)", "vn", "84"],
        ["Wallis and Futuna", "wf", "681"],
        ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
        ["Yemen (‫اليمن‬‎)", "ye", "967"],
        ["Zambia", "zm", "260"],
        ["Zimbabwe", "zw", "263"],
        ["Åland Islands", "ax", "358", 1]
    ];
    for (var i = 0; i < allCountries.length; i++) {
        var c = allCountries[i];
        allCountries[i] = {
            name: c[0],
            iso2: c[1],
            dialCode: c[2],
            priority: c[3] || 0,
            areaCodes: c[4] || null
        };
    }
});

function MagicButton(settings) {
    var _ = {
        active: false,
        $container: settings.$container,
        translations: settings.translations,
        isRtl: settings.isRtl,
        doneTypingInterval: settings.doneTypingInterval,
        $GLOBALS: settings.$GLOBALS,
        user_country_code: settings.user_country_code,
        type: settings.type,
        availableNetworks: settings.availableNetworks,
        messageOptions: {},
        $json: settings.$json,
        hasGreeter: settings.hasGreeter,
        user_name_email: settings.user_name_email,
        disabledOptions: settings.disabledOptions ? settings.disabledOptions : [],
        onInitCallback: settings.onInitCallback,
        onDisabledOptionClick: settings.onDisabledOptionClick
    };
    _.init = function() {
        if (_.$container.length === 0) return;
        setMessageOptions();
        var data = new Data(tryParseJSON(_.$json.val()));
        $.each(data.items, function(key, messageOption) {
            if (!_.messageOptions[key]) return;
            _.messageOptions[key] = new OptionData({
                active: true,
                value: messageOption.value,
                order: messageOption.order,
                dialCode: messageOption.dialCode,
                countryData: messageOption.countryData
            });
        });
        _.$html = $(generateHTML(data));
        _.$switch = _.$html.find('.status-controller');
        _.$stylesContoller = _.$html.find('.m-b-s-c');
        _.$edit = _.$html.find('.edit');
        _.$editContainer = _.$html.find('.edit-container');
        _.$activeOptionsContainer = _.$html.find('.active-options-container');
        _.$noActiveOptionsMessage = _.$html.find('.no-active-options-message');
        _.$optionsContainer = _.$html.find('.options-container');
        _.$container.append(_.$html);
        _.popup.init({
            translations: _.translations.popup[_.type],
            type: _.type,
            $element: _.$optionsContainer,
            $controller: _.$edit,
            showCallBack: function() {
                _.$container = _.popup.$el.find('.m-b-c');
                _.intlTelInput.removeDialCodesFromInputs();
            }
        });
        addControllers();
        resetActiveStatus();
        if (_.hasGreeter) {
            _.Greeter.init({
                $container: _.$optionsContainer.find('.style-widget-box-container .widget-main'),
                data: data.greeter,
                title: _.translations.greeterTitle,
                toolTip: _.translations.greeterToolTipTitle,
                placeholder: _.translations.greeterPlaceholder,
                doneTypingInterval: _.doneTypingInterval,
                saveCallback: function() {
                    _.save();
                }
            });
        }
        if (_.type == 'contact') {
            _.MobileFullWidth.init({
                $container: _.$optionsContainer.find('.style-widget-box-container .widget-main'),
                status: data.mobileFullWidth,
                title: _.translations.mobileFullWidthTitle,
                toolTip: _.translations.mobileFullWidthToolTipTitle,
                saveCallback: function() {
                    _.save();
                }
            });
        }
        _.rebuildInputs();
        if (_.onInitCallback) _.onInitCallback.call(this, _);
    };
    _.rebuildInputs = function() {
        var optionsByOrder = [];
        $.each(_.messageOptions, function(key, messageOption) {
            if (!messageOption.active) return;
            var html = '';
            html += '<div class="option-details form-group ' + key + '">';
            html += '<div class="icon-box">';
            html += '<span class="sortable-icon option-icon ' + key + '">' + getOptionIcon(key) + '</span>';
            html += '</div>';
            if (messageOption.hasInput) {
                html += '<div class="input-box">';
                html += '<input ' + getExtraPluginsAttributes(key, messageOption) + ' id="input' + key + '_' + _.type + '" type="text" data-option="' + key + '" class="form-control" placeholder="' + escapeHtml(_.translations.options[key].placeholder) + '" value="{{value}}"/>';
                html += '</div>';
            } else {
                html += '';
            }
            html += '<div class="delete-box">';
            html += '<a data-rel="tooltip" title="' + escapeHtml(_.translations.toolTipDeleteOption) + '" data-delay=\'{"show":"1000", "hide":"0"}\' class="remove-option btn btn-link" data-option="' + key + '">';
            html += '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-option="trash" class="svg-inline--fa fa-trash fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">';
            html += '<path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>';
            html += '</svg>';
            html += '</a>';
            html += '</div>';
            html += '</div>';
            html = html.replace('{{value}}', escapeHtml(_.messageOptions[key].value));
            optionsByOrder[messageOption.order] = html;
        });
        var optionsByOrder = optionsByOrder.filter(function(el) {
            return el != null;
        });
        var html = '';
        for (var i = 0; i < optionsByOrder.length; i++) {
            html += optionsByOrder[i];
        }
        var $html = $(html);
        if ($html.length == '0') {
            _.$noActiveOptionsMessage.addClass('active');
        } else {
            _.$noActiveOptionsMessage.removeClass('active');
        }
        _.$activeOptionsContainer.html($html);
        $html.find('.input-box input').on('input blur', function(event) {
            var $this = $(this);
            clearTimeout(_.finishedTyping);
            if (event.type == 'blur') {
                if (_.messageOptions[$this.data('option')].value === $this.val()) return;
                _.messageOptions[$this.data('option')].value = _.intlTelInput.removeDialCode($this.data('option'));
                _.save();
            } else {
                _.finishedTyping = setTimeout(function() {
                    if (_.messageOptions[$this.data('option')].value === $this.val()) return;
                    _.messageOptions[$this.data('option')].value = _.intlTelInput.removeDialCode($this.data('option'));
                    _.save();
                }, _.doneTypingInterval);
            }
        });
        $html.find('.remove-option').on('click', function(event) {
            event.preventDefault();
            var $this = $(this);
            var $parent = $this.closest('.option-details');
            if (!$this.data('option')) return;
            $parent.fadeOut(function() {
                _.messageOptions[$this.data('option')].active = false;
                var removedOptionID = $parent.get(0).id;
                $this.tooltip('destroy');
                $parent.remove();
                resetActiveItemsOrder();
                resetActiveStatus();
                _.rebuildInputs();
                _.save();
            });
        });
        emailCollectorHandler($html);
        inputRestrictor.reset();
        InitializeToolTips();
        _.intlTelInput.init();
        showHideGreeter();
        showHideStyle();
        showMobileFullWidth();
    };
    _.save = function() {
        var settings = new Data({
            active: _.$switch.is(':checked'),
            style: _.$stylesContoller.find('.m-b-quick-color-input').val(),
            items: {},
            greeter: {
                active: _.Greeter.active,
                value: _.Greeter.value
            },
            mobileFullWidth: _.MobileFullWidth.status
        });
        $.each(_.messageOptions, function(key, messageOption) {
            if (!messageOption.active) return;
            if (messageOption.value.length === 0 && messageOption.hasInput) return;
            settings.items[key] = new OptionData({
                value: _.type === 'contact' ? messageOption.value : '1',
                order: messageOption.order,
                dialCode: _.intlTelInput.getDialCode(key, messageOption.value),
                countryData: messageOption.countryData
            });
        });
        _.$json.val(JSON.stringify(settings));
        _.$json.trigger('change');
    };
    _.disableOptions = function(options) {
        var activeOptions = getActiveOptions();
        options = options.filter(function(value, index) {
            return activeOptions.indexOf(value) == -1
        });
        _.disabledOptions = options;
    };
    _.getDisabledOptionsIDS = function() {
        var options = [];
        for (var i = 0; i < _.disabledOptions.length; i++) {
            options.push('#icon' + _.disabledOptions[i]);
        }
        return options;
    };

    function resetActiveItemsOrder() {
        var $options = _.$activeOptionsContainer.children();
        $.each(_.messageOptions, function(key, messageOption) {
            if (!messageOption.active) return;
            _.messageOptions[key].order = $options.index($options.filter('.' + key));
        });
    }

    function getHigestOrder() {
        var order = 0;
        $.each(_.messageOptions, function(index, messageOption) {
            if (order < messageOption.order) {
                order = messageOption.order;
            }
        });
        return order;
    }

    function getExtraPluginsAttributes(optionName, optionObject) {
        var attributes = '';
        if (['whatsApp', 'phone', 'skype', 'telegram'].indexOf(optionName) != -1) {
            optionObject.countryData = optionObject.countryData ? optionObject.countryData : '';
            attributes += 'data-intl-tel-input-dail-code="' + escapeHtml(optionObject.dialCode) + '" data-intl-tel-input-country-data="' + escapeHtml(optionObject.countryData) + '"';
        }
        if (['whatsApp', 'phone'].indexOf(optionName) != -1) {
            attributes += 'data-input-restrictor-type="phone"';
        }
        if (['contactUs'].indexOf(optionName) != -1) {
            attributes += 'data-email-collector="true"';
        }
        return attributes;
    }

    function getOptionIcon(messageOption) {
        switch (messageOption) {
            case 'faceBookMessanger':
                return '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/facebook-messenger-icon.png?v=' + _.$GLOBALS['v-cache'] + '">';
                break;
            case 'whatsApp':
                return '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/whatsApp-icon.png?v=' + _.$GLOBALS['v-cache'] + '">';
                break;
            case 'phone':
                return '<i class="fa fa-phone"></i>';
                break;
            case 'contactUs':
                return '<i class=" fa fa-envelope"></i>';
                break;
            case 'skype':
                return '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/skype-icon.png?v=' + _.$GLOBALS['v-cache'] + '">';
                break;
            case 'telegram':
                return '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/telegram-icon.png?v=' + _.$GLOBALS['v-cache'] + '">';
                break;
            case 'faceBook':
                return '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/facebook-icon.png?v=' + _.$GLOBALS['v-cache'] + '">';
                break;
            case 'twitter':
                return '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/twitter-icon.png?v=' + _.$GLOBALS['v-cache'] + '">';
                break;
            case 'pinterest':
                return '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/pinterest-icon.png?v=' + _.$GLOBALS['v-cache'] + '">';
                break;
            case 'gmail':
                return '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/gmail-icon.png?v=' + _.$GLOBALS['v-cache'] + '">';
                break;
            case 'linkedIn':
                return '<i class="fa-brands fa-linkedin"></i>';
                break;
            case 'tumblr':
                return '<img src="' + _.$GLOBALS['cdn-system-files'] + '/files/icons/socialNetworksBrands/tumblr-icon.png?v=' + _.$GLOBALS['v-cache'] + '">';
                break;
            case 'emailApp':
                return '<i class="fa fa-envelope"></i>';
                break;
        }
        return '';
    }

    function emailCollectorHandler($html) {
        var maxAmount = 5;
        $html.find('input[data-email-collector="true"]').each(function() {
            var $emailCollector = $(this);
            var messageOption = $emailCollector.data('option');
            $emailCollector.tag({
                placeholder: $emailCollector.attr('placeholder')
            });
            var $emailInput = $emailCollector.closest('.tags').find('input').last();
            $emailCollector.on('added', function(e, value) {
                var emailObj = $emailCollector.data('tag');
                if (!emailValidator(value)) {
                    emailObj.remove(emailObj.inValues(value));
                    var $error = $('<div>' + translations.emailCollectorValidEmail + '</div>').css({
                        width: '100%',
                        marginTop: '10px',
                        color: 'red'
                    });
                    $emailInput.parent()
                        .css({
                            position: 'relative'
                        })
                        .append($error);
                    setTimeout(function() {
                        $error.remove();
                    }, 3000);
                    return;
                }
                disableEnableInput(emailObj.values.length, $emailInput);
                _.messageOptions[messageOption].value = $emailCollector.val();
                _.save();
            });
            $emailCollector.on('removed', function(e, value) {
                if (!emailValidator(value)) return;
                var emailObj = $emailCollector.data('tag');
                disableEnableInput(emailObj.values.length, $emailInput);
                _.messageOptions[messageOption].value = $emailCollector.val();
                _.save();
            });
            disableEnableInput($emailCollector.val().split(',').length, $emailInput);

            function disableEnableInput(emailsAmount, $input) {
                if (emailsAmount >= maxAmount) {
                    $input.attr('disabled', 'true');
                    $input.attr('placeholder', _.translations.emailCollectorRestriction);
                } else if (emailsAmount < maxAmount) {
                    $input.removeAttr('disabled');
                    $input.attr('placeholder', _.translations.emailCollectorPlaceHolder);
                }
            }
        });
    }

    function generateHTML(data) {
        var listOrder = getListOrder();
        var buttonStyles = getButtonStyles();
        var html = '';
        html += '<div class="row">';
        html += '<div class="col-xs-9">';
        html += '<div class="form-group">';
        html += '<span>' + escapeHtml(_.translations.toolTipTitle[_.type]) + '</span>&nbsp;';
        html += '<a href="#" data-rel="tooltip" title="' + escapeHtml(_.translations.toolTipExplanation[_.type]) + '">';
        html += '<i class="fa fa-question-circle"></i>';
        html += '</a>';
        html += '</div>';
        html += '</div>';
        html += '<div class="col-xs-3 pull-right">';
        html += '<label class="pull-right">';
        if (_.type === 'contact') {
            html += '<input id="showMagicButton" name="showMagicButton" class="ace ace-switch status-controller" type="checkbox" data-update-preview-area=".magic-button-container" ' + (data.active ? 'checked' : '') + '>';
            html += '<span class="lbl"></span>';
        } else if (_.type === 'share') {
            html += '<input id="showShareMagicButton" name="showShareMagicButton" class="ace ace-switch status-controller" type="checkbox" data-update-preview-area=".magic-button-container" ' + (data.active ? 'checked' : '') + '>';
            html += '<span class="lbl"></span>';
        }
        html += '</label>';
        html += '</div>';
        html += '<div class="col-xs-12 edit-container" style="display: ' + (data.active ? 'block' : 'none') + ';">';
        html += '<div class="form-group">';
        html += '<a class="edit btn btn-sm btn-primary">' + escapeHtml(_.translations.edit) + '</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="options-parent">';
        html += '<div class="options-container">';
        html += '<div class="widget-box static activate buttons-box">';
        html += '<div class="widget-body">';
        html += '<div class="widget-main">';
        html += '<div class="form-group options-select">';
        html += '<button type="button" id="showOptions_' + _.type + '" class="btn btn-primary" data-toggle="dropdown">';
        html += escapeHtml(_.translations.chooseOptions) + ' <span class="ace-icon fa fa-caret-down icon-on-right">';
        html += '</button>';
        html += '<ul class="dropdown-menu">';
        $.each(_.messageOptions, function(key, option) {
            html += '<li style="order: ' + listOrder.indexOf(key) + ';">';
            if (key == 'faceBookMessanger') {
                html += '<a href="#" data-option="' + key + '" id="icon' + key + '">';
                html += '<span class="img-container">' + getOptionIcon(key) + '</span>';
                html += ' <span class="option-title">' + escapeHtml(_.translations.options[key].title) + '</span>';
                html += '</a>';
            } else {
                html += '<a href="#" data-option="' + key + '" id="icon' + key + '">';
                html += getOptionIcon(key);
                html += ' <span class="option-title">' + escapeHtml(_.translations.options[key].title) + '</span>';
                html += '</a>';
            }
            html += '<a class="add-option btn btn-link" data-option="' + key + '">';
            html += '<i class="fa fa-plus"></i>';
            html += '</a>';
            html += '<a class="remove-option btn btn-link" data-option="' + key + '">';
            html += '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-option="trash" class="svg-inline--fa fa-trash fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">';
            html += '<path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>';
            html += '</svg>';
            html += '</a>';
            html += '</li>';
        });
        html += '</ul>';
        html += '</div>';
        html += '<div class="no-active-options-message alert alert-warning" role="alert">' + escapeHtml(_.translations.noActiveOptionsMessage) + '</div>';
        html += '<div class="display-input active-options-container"></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="widget-box static activate style-widget-box-container active">';
        html += '<div class="widget-body">';
        html += '<div class="widget-main">';
        html += '<div class="style-container">';
        html += '<span>' + escapeHtml(_.translations.btnStyleTitle) + '</span>&nbsp;';
        html += '<a href="#" data-rel="tooltip" title="' + escapeHtml(_.translations.btnStyleToolTipTitle) + '">';
        html += '<i class="fa fa-question-circle"></i>';
        html += '</a>';
        html += '<div class="m-b-s-c">';
        html += '<input type="hidden" class="m-b-quick-color-input" value="' + data.style + '">';
        html += '<div class="m-b-quick-colors">';
        for (var i = 0; i < buttonStyles.length; i++) {
            html += '<div class="m-b-quick-color ' + buttonStyles[i].class + '" data-value="' + buttonStyles[i].value + '" data-rel="tooltip" data-trigger="hover" title="' + escapeHtml(buttonStyles[i].title) + '" data-delay=\'{"show":"1000", "hide":"0"}\'></div>';
        }
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html;

        function getListOrder() {
            if (_.type == 'contact') {
                return ['contactUs', 'phone', 'whatsApp', 'faceBookMessanger', 'skype', 'telegram', 'faceBook', 'twitter', 'pinterest', 'gmail', 'linkedIn', 'tumblr', 'emailApp'];
            } else {
                return ['faceBook', 'whatsApp', 'linkedIn', 'telegram', 'skype', 'twitter', 'pinterest', 'gmail', 'tumblr', 'emailApp'];
            }
        }
    }

    function addControllers() {
        _.$switch.on('change', function() {
            if ($(this).is(':checked')) {
                if (getActiveOptions().length == 0) {
                    if (_.type == 'contact') {
                        _.messageOptions.contactUs = new OptionData({
                            active: true,
                            order: 0,
                            value: user_name_email
                        });
                    } else if (_.type == 'share') {
                        _.messageOptions.faceBook = new OptionData({
                            active: true,
                            order: 0,
                            value: ''
                        });
                    }
                    _.rebuildInputs();
                }
                _.$editContainer.show();
            } else {
                _.$editContainer.hide();
            }
            _.save();
        });
        _.$container.find('.options-select').on('click', 'a', function(event) {
            event.preventDefault();
            var $this = $(this);
            if (!_.messageOptions[$this.data('option')]) return false;
            if (_.messageOptions[$this.data('option')].active) return false;
            if (_.disabledOptions.indexOf($this.data('option')) != -1 && !_.messageOptions[$this.data('option')].active) {
                if (_.onDisabledOptionClick) _.onDisabledOptionClick.call(this, $this);
                return false;
            }
            if (!_.messageOptions[$this.data('option')].active) {
                _.messageOptions[$this.data('option')].active = true;
            } else {
                _.messageOptions[$this.data('option')].active = false;
            }
            _.messageOptions[$this.data('option')].order = getHigestOrder() + 1;
            resetActiveStatus();
            _.rebuildInputs();
            _.save();
        });
        _.$activeOptionsContainer.sortable({
            revert: false,
            forceHelperSize: true,
            tolerance: 'pointer',
            handle: '.sortable-icon', // drag handler
            appendTo: _.$activeOptionsContainer, // sortable container
            scroll: false,
            update: function(event, ui) {
                resetActiveItemsOrder();
                _.save();
            }
        });
        initializingQuickColorPicker(_.$stylesContoller);
    }

    function initializingQuickColorPicker($el) {
        var $input = $el.find('.m-b-quick-color-input');
        var $colors = $el.find('.m-b-quick-colors .m-b-quick-color');
        var $activeIcon = $('<i class="ace-icon fa fa-check-circle"></i>');
        $colors.each(function(index, color) {
            var $color = $(color);
            if ($color.data('value') == $input.val()) {
                $color.append($activeIcon);
            }
            $color.off('click').on('click', function() {
                var $this = $(this);
                $input.val($this.data('value'));
                $colors.html('');
                $this.append($activeIcon);
                _.save();
            });
        });
    }

    function resetActiveStatus() {
        var $optionsSelect = _.$container.find('.options-select');
        $.each(_.messageOptions, function(key, messageOption) {
            var $option = $optionsSelect.find('a[data-option="' + key + '"]');
            if (_.messageOptions[key].active) {
                $option.addClass('active');
                $option.attr('title', escapeHtml(_.translations.toolTipActiveOption));
            } else {
                $option.removeClass('active');
                $option.removeAttr('title');
            }
        });
    }

    function Data(data) {
        function Def() {
            return {
                active: false,
                style: 'mainColor',
                items: {},
                greeter: {
                    active: false,
                    value: ''
                },
                mobileFullWidth: false
            };
        }
        var def = new Def();
        if (data) {
            data = objectAssign(new Def(), data); // (objectAssign overwrite objects)
        } else {
            data = def;
        }
        return data;
    }

    function OptionData(data) {
        function Def() {
            return {
                order: '',
                icon: '',
                active: '',
                value: '',
                dialCode: '',
                countryData: _.user_country_code.toLowerCase(),
                hasInput: _.type === 'contact'
            };
        }
        var def = new Def();
        if (data) {
            data = objectAssign(new Def(), data); // (objectAssign overwrite objects)
        } else {
            data = def;
        }
        return data;
    }

    function isPhoneNumber(phoneNumber) {
        return /^[0-9-+*() ]+$/i.test(phoneNumber);
    }

    function setMessageOptions() {
        var supportedNetworks = {
            faceBookMessanger: new OptionData({
                order: 0,
                active: false,
                value: ''
            }),
            whatsApp: new OptionData({
                order: 1,
                active: false,
                value: ''
            }),
            phone: new OptionData({
                order: 2,
                active: false,
                value: ''
            }),
            contactUs: new OptionData({
                order: 3,
                active: false,
                value: 'example@example.com',
                hasMultiEmail: true
            }),
            skype: new OptionData({
                order: 4,
                active: false,
                value: ''
            }),
            telegram: new OptionData({
                order: 5,
                active: false,
                value: ''
            }),
            faceBook: new OptionData({
                order: 6,
                active: false,
                value: ''
            }),
            twitter: new OptionData({
                order: 7,
                active: false,
                value: ''
            }),
            pinterest: new OptionData({
                order: 8,
                active: false,
                value: ''
            }),
            gmail: new OptionData({
                order: 9,
                active: false,
                value: ''
            }),
            linkedIn: new OptionData({
                order: 10,
                active: false,
                value: ''
            }),
            tumblr: new OptionData({
                order: 11,
                active: false,
                value: ''
            }),
            emailApp: new OptionData({
                order: 12,
                active: false,
                value: ''
            }),
        };
        for (var i = 0; i < _.availableNetworks.length; i++) {
            if (supportedNetworks[_.availableNetworks[i]]) {
                _.messageOptions[_.availableNetworks[i]] = supportedNetworks[_.availableNetworks[i]];
            }
        }
    }

    function showHideGreeter() {
        if (!_.hasGreeter) return;
        if (getActiveOptions().length > 0) {
            _.Greeter.show();
        } else {
            _.Greeter.hide();
        }
    }

    function showHideStyle() {
        var activeOptions = getActiveOptions();
        if (_.type === 'share' && activeOptions.length > 0) {
            _.$stylesContoller.closest('.style-container').show();
            _.$stylesContoller.closest('.style-widget-box-container').addClass('active');
        } else if (_.type === 'contact' && activeOptions.length > 1) {
            _.$stylesContoller.closest('.style-container').show();
        } else {
            if (_.type === 'share') {
                _.$stylesContoller.closest('.style-widget-box-container').removeClass('active');
            }
            _.$stylesContoller.closest('.style-container').hide();
        }
    }

    function showMobileFullWidth() {
        var activeOptions = getActiveOptions();
        if (activeOptions.length > 0 && activeOptions.length <= 4) {
            _.MobileFullWidth.show();
        } else {
            _.MobileFullWidth.hide();
        }
    }

    function getActiveOptions() {
        var activeOptions = [];
        $.each(_.messageOptions, function(key, option) {
            if (option.active) activeOptions.push(key);
        });
        return activeOptions;
    }

    function getButtonStyles() {
        return [{
            value: 'mainColor',
            title: _.translations.styles.mainColor,
            class: 'background-primary-color'
        }, {
            value: 'black',
            title: _.translations.styles.black,
            class: 'bg-primary-black'
        }, {
            value: 'white',
            title: _.translations.styles.white,
            class: 'bg-primary-white'
        }, {
            value: 'grey',
            title: _.translations.styles.grey,
            class: 'bg-primary-gray'
        }];
    }
    _.intlTelInput = {
        supportedTypes: ['whatsApp', 'skype', 'telegram', 'phone'],
        init: function() {
            var that = this;
            _.$container.find('.option-details').each(function(index, value) {
                that.addInctance($(this));
            });
        },
        addInctance: function($phone) {
            var that = this;
            var html = '';
            var $phoneInput = $phone.find('input[data-option]');
            var phoneType = $phoneInput.data('option');
            var countryData = $phoneInput.data('intl-tel-input-country-data');
            if (this.supportedTypes.indexOf(phoneType) != -1) {
                $phoneInput.intlTelInput({
                    autoHideDialCode: true,
                    autoPlaceholder: true,
                    initialCountry: countryData ? countryData : null,
                    nationalMode: true,
                    formatOnInit: false,
                    numberType: "MOBILE",
                    utilsScript: "/files/frameworks/intl-tel-input-8.5.2/build/js/utils.js"
                });
                $phoneInput.on("countrychange", function(e, countryData) {
                    countryData.iso2 = countryData ? .iso2 ? countryData.iso2 : '';
                    countryData.dialCode = countryData ? .dialCode ? countryData.dialCode : '';
                    _.messageOptions[phoneType].countryData = countryData.iso2;
                    _.messageOptions[phoneType].dialCode = '+' + countryData.dialCode;
                    $phoneInput.data('intl-tel-input-country-data', countryData.iso2);
                    $phoneInput.data('intl-tel-input-dail-code', '+' + countryData.dialCode);
                    _.save();
                });
                $phoneInput.removeAttr("autocomplete");
                $phoneInput.on('input.intlTelInput', function() {
                    that.disableEnableFlags($(this));
                });
                $phoneInput.data('intl-tel-input-dail-code', '+' + $phone.find('.country-list .active').data('dial-code'));
                $phoneInput.data('intl-tel-input-country-data', countryData);
                that.disableEnableFlags($phoneInput);
                $phoneInput.data('mb-intl-tel-input', true);
            }
        },
        removeDialCode(phoneType) {
            var $phoneInput = _.$container.find('input[data-option="' + phoneType + '"]');
            if (!isPhoneNumber($phoneInput.val())) return $phoneInput.val();
            var currentCountryData = $phoneInput.intlTelInput('getSelectedCountryData');
            if ($phoneInput.val().indexOf('+' + currentCountryData.dialCode) != -1) {
                return $phoneInput.val().replace('+' + currentCountryData.dialCode, '');
            }
            return $phoneInput.val();
        },
        removeDialCodesFromInputs() {
            $.each(this.supportedTypes, (index, phoneType) => {
                var $phoneInput = _.$container.find('input[data-option="' + phoneType + '"]');
                $phoneInput.val(this.removeDialCode(phoneType));
            });
        },
        getDialCode: function(phoneType, value) {
            if (!isPhoneNumber(value)) return '';
            var $phoneInput = _.$container.find('input[data-option="' + phoneType + '"]');
            if ($phoneInput.data('mb-intl-tel-input')) return $phoneInput.data('intl-tel-input-dail-code');
            return '';
        },
        disableEnableFlags: function($phoneInput) {
            if ($phoneInput.val().length === 0) return;
            if (!isPhoneNumber($phoneInput.val())) {
                $phoneInput.closest('.intl-tel-input').find('.flag-container').addClass('disabled');
            } else {
                $phoneInput.closest('.intl-tel-input').find('.flag-container').removeClass('disabled');
            }
        }
    };
    _.Greeter = {
        active: false,
        value: '',
        init: function(settings) {
            if (!settings) return;
            this.isDisabled = false;
            this.$container = settings.$container;
            this.active = settings.data.active;
            this.value = settings.data.value;
            this.title = settings.title;
            this.toolTip = settings.toolTip;
            this.placeholder = settings.placeholder;
            this.doneTypingInterval = settings.doneTypingInterval;
            this.saveCallback = settings.saveCallback;
            this.$html = $(this.generateHtml());
            this.$statusController = this.$html.find('.greeter-status');
            this.$container.append(this.$html);
            this.addControllerEvents();
        },
        addControllerEvents: function() {
            var _ = this;
            _.$statusController.on('change.Greeter', function() {
                if (_.isDisabled) $(this).prop('checked', false);
                _.active = $(this).is(':checked');
                if (_.active) {
                    _.$html.find('.g-m-v').stop().fadeIn(function() {
                        _.triggerSave();
                    });
                } else {
                    _.$html.find('.g-m-v').stop().fadeOut(function() {
                        _.triggerSave();
                    });
                }
            });
            _.$html.find('.g-m-v textarea').on('input blur', function(event) {
                var $this = $(this);
                clearTimeout(_.finishedTyping);
                if (event.type == 'blur') {
                    if (_.value != $this.val()) {
                        _.value = $this.val();
                        _.saveCallback.call(this);
                    }
                } else {
                    _.finishedTyping = setTimeout(function() {
                        _.value = $this.val();
                        _.saveCallback.call(this);
                    }, _.doneTypingInterval);
                }
            });
            _.$html.find('.g-m-v .g-m-v_content').html($('.g-m-v textarea').val().length);
            _.$html.find('.g-m-v textarea').off('keyup').on('keyup', function() {
                _.$html.find('.g-m-v .g-m-v_content').html($('.g-m-v textarea').val().length);
            });
        },
        show: function() {
            this.$html.show();
        },
        hide: function() {
            this.$html.hide();
        },
        generateHtml: function() {
            var html = '';
            this.toolTip = this.toolTip.replace('{{pageLoadDelayInSeconds}}', '5');
            this.toolTip = this.toolTip.replace('{{cookieTimeInHours}}', '24');
            html += '<div class="g-m-c">';
            html += '<div class="g-m-title">';
            html += '<div class="g-m-title-c">';
            html += '<label>';
            html += '<input type="checkbox" class="ace input-lg greeter-status" ' + (this.active ? 'checked' : '') + '>';
            html += '<span class="lbl fullColor">' + escapeHtml(this.title) + '</span>&nbsp;';
            html += '</label>';
            html += '<a href="#" data-rel="tooltip" title="' + escapeHtml(this.toolTip) + '">';
            html += '<i class="fa fa-question-circle"></i>';
            html += '</a>';
            html += '</div>';
            html += '<div class="pro-label-container"></div>';
            html += '</div>';
            html += '<div class="g-m-v" style="display: ' + (this.active ? 'block' : 'none') + ';">';
            html += '<textarea class="form-control" maxlength="300" placeholder="' + escapeHtml(this.placeholder) + '">' + escapeHtml(this.value) + '</textarea>';
            html += '<label for="g-m-v_content">' + escapeHtml(_.translations.greeterCounter).replace('{{contactBtnCharCounter}}', '<span class="g-m-v_content">0</span>') + '</label>';
            html += '</div>';
            html += '</div>';
            return html;
        },
        disable: function() {
            this.isDisabled = true;
            this.$html.find('.greeter-status').trigger('change.Greeter');
        },
        triggerSave: function() {
            if (this.isDisabled) return;
            this.saveCallback.call(this);
        }
    };
    _.MobileFullWidth = {
        initialized: false,
        init: function(settings) {
            this.$container = settings.$container;
            this.status = settings.status;
            this.title = settings.title;
            this.toolTip = settings.toolTip;
            this.saveCallback = settings.saveCallback;
            this.$el = $(this.generateHtml());
            this.addControllerEvents();
            this.$container.append(this.$el);
            this.initialized = true;
        },
        show: function() {
            if (!this.initialized) return;
            this.$el.show();
        },
        hide: function() {
            if (!this.initialized) return;
            this.$el.hide();
        },
        addControllerEvents: function() {
            var _ = this;
            _.$controller = _.$el.find('.m-f-w');
            _.$controller.on('change', function() {
                _.status = $(this).is(':checked');
                if (_.saveCallback) _.saveCallback.call(this);
            });
        },
        generateHtml: function() {
            var html = '';
            html += '<div class="m-f-w-container">';
            html += '<label>';
            html += '<input type="checkbox" class="ace input-lg m-f-w" ' + (this.status ? 'checked' : '') + '>';
            html += '<span class="lbl fullColor">' + escapeHtml(this.title) + '</span>&nbsp;';
            html += '</label>';
            html += '<a href="#" data-rel="tooltip" title="' + escapeHtml(this.toolTip) + '">';
            html += '<i class="fa fa-question-circle"></i>';
            html += '</a>';
            html += '</div>';
            return html;
        }
    };
    _.popup = {
        translations: {},
        type: null,
        $controller: null,
        showCallBack: null,
        hideCallBack: null,
        $element: null,
        init: function(settings) {
            var _ = this;
            _.translations = settings.translations;
            _.type = settings.type;
            _.$controller = settings.$controller;
            _.$element = settings.$element;
            _.showCallBack = settings.showCallBack;
            _.hiddenCallBack = settings.hiddenCallBack;
            _.$controller.on('click', function(event) {
                event.preventDefault();
                _.show();
            });
        },
        show: function() {
            var _ = this;
            var $originalParent = _.$element.parent();
            _.$el = $(_.generateHTML());
            _.$el.find('.m-b-c').append(_.$element);
            _.$el.find('.modal-title').text(_.translations.title);
            _.$el.on('show.bs.modal.' + _.type, function() {
                if (_.showCallBack) _.showCallBack.call(this);
            });
            _.$el.on('hidden.bs.modal.' + _.type, function() {
                $originalParent.append(_.$element);
                if (_.hiddenCallBack) _.hiddenCallBack.call(this);
                _.$el.remove();
            });
            _.$el.modal('show');
        },
        hide: function() {
            this.popup.modal('hide');
        },
        generateHTML: function() {
            var html = '';
            html += '<div class="modal s123-modal fade" id="magicButtonWindow" role="dialog" aria-labelledby="magicButtonWindow">';
            html += '<div class="modal-dialog" role="document">';
            html += '<div class="modal-content">';
            html += '<div class="modal-header">';
            html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
            html += '<button type="button" class="expand hidden" aria-label="Expand"><span aria-hidden="true"><i class="fa fa-expand"></i></span></button>';
            html += '<button type="button" class="compress hidden" aria-label="Compress" style="display:none;"><span aria-hidden="true"><i class="fa fa-compress"></i></span></button>';
            html += '<h4 class="modal-title">&nbsp;</h4>';
            html += '</div>';
            html += '<div class="modal-body">';
            html += '<div>';
            html += '<div>';
            html += '<div>';
            html += '<div class="m-b-c" data-type="' + _.type + '"></div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            return html;
        }
    };
    _.init();
    return _;
};
var FavoriteImages = function() {
    var _ = {
        initialized: false,
        items: {},
        returnFavoritesArray: true
    };
    _.init = function(settings) {
        if (_.initialized) return;
        _.websiteID = settings.websiteID;
        _.$filterController = settings.$filterController;
        _.onFilterChange = settings.onFilterChange;
        _.onAddSuccess = settings.onAddSuccess;
        _.mediaKind = settings.mediaKind;
        _.$filterController.off('click.FavoriteImages').on('click.FavoriteImages', function(event) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).attr('title', escapeHtml(translations.FavoriteImages.onlyFavoritsTooltip));
                $(this).attr('data-original-title', escapeHtml(translations.FavoriteImages.onlyFavoritsTooltip));
            } else {
                $(this).addClass('active');
                $(this).attr('title', escapeHtml(translations.FavoriteImages.hideAllTooltip));
                $(this).attr('data-original-title', escapeHtml(translations.FavoriteImages.hideAllTooltip));
            }
            if (_.onFilterChange) _.onFilterChange.call(this, $(this));
        });
        _.initialized = true;
    };
    _.resetFilter = function($filter) {
        $filter.removeClass('active');
        $filter.attr('title', escapeHtml(translations.FavoriteImages.onlyFavoritsTooltip));
        $filter.attr('data-original-title', escapeHtml(translations.FavoriteImages.onlyFavoritsTooltip));
        $filter.data('query', '');
    };
    _.addIcons = function($items) {
        $items.each(function(index, item) {
            var $item = $(this);
            var $icon = $(generateHtml($item));
            $icon.find('.favorite-btn').off('click.FavoriteImages').on('click.FavoriteImages', function(event) {
                event.stopPropagation();
                if ($item.hasClass('is-favorite')) {
                    _.remove($item);
                } else {
                    _.add($item);
                }
            });
            $item.append($icon);
            $item.addClass('favorite-added');
        });
    };
    _.add = function($item) {
        $item.append(generateLoadingBox());
        $.ajax({
            type: "POST",
            url: "/files/vendor/FavoriteImages/addToFavorite.php",
            data: {
                w: _.websiteID,
                id: $item.data('settings').id,
                imageWidth: $item.data('settings').imageWidth,
                imageHeight: $item.data('settings').imageHeight,
                mediaKind: $item.data('settings').mediaKind,
                photographerName: $item.data('settings').photographerName,
                photographerURL: $item.data('settings').photographerURL,
                previewURL: $item.data('settings').previewURL,
                provider: $item.data('settings').provider,
                webformatURL: $item.data('settings').webformatURL,
                previewImage: $item.data('settings').previewImage
            },
            success: function(data) {
                data = tryParseJSON(data);
                $item.find('.favorite-loading').remove();
                if (!data) return;
                if (data.success) {
                    $item.addClass('is-favorite');
                }
                _.items[$item.data('settings').id] = {
                    uniqueID: $item.data('settings').id
                };
                if (_.onAddSuccess) _.onAddSuccess.call(this, $item, data.newSettings);
            }
        });
    };
    _.remove = function($item) {
        $item.append(generateLoadingBox());
        $.ajax({
            type: "POST",
            url: "/files/vendor/FavoriteImages/removeFromFavorite.php",
            data: {
                w: _.websiteID,
                uniqueID: $item.data('id'),
            },
            success: function(data) {
                data = tryParseJSON(data);
                $item.find('.favorite-loading').remove();
                if (!data) return;
                if (data.success) {
                    $item.removeClass('is-favorite');
                    delete _.items[$item.data('settings').id];
                }
            }
        });
    };
    _.getActiveClass = function(uniqueID) {
        return _.items[uniqueID] ? ' is-favorite ' : '';
    };
    _.getSettingsObject = function(allSettings) {
        return new Item(tryParseJSON(allSettings));
    };
    _.isReturnFavoritesArray = function() {
        if (_.returnFavoritesArray) {
            _.returnFavoritesArray = false;
            return true;
        }
        return false;
    };

    function Item(data) {
        var def = {
            id: '',
            imageWidth: '',
            imageHeight: '',
            mediaKind: '',
            photographerName: '',
            photographerURL: '',
            previewURL: '',
            provider: '',
            webformatURL: '',
            previewImage: '',
        };
        data = objectAssign(def, data);
        return data;
    }

    function generateHtml($item) {
        var html = '';
        html += '<div class="favorite-container">';
        html += '<a class="favorite-btn ' + ($item.hasClass('is-favorite') ? 'active' : '') + '">';
        html += '<i class="fa fa-light fa-star"></i>';
        html += '</a>';
        html += '</div>';
        return html;
    }

    function generateLoadingBox() {
        var html = '';
        html += '<div class="favorite-loading">';
        html += '<i class="ace-icon fa fa-spinner fa-spin white fa-4x"></i>';
        html += '</div>';
        return html;
    }
    return _;
}();

function UploadMultipleFilesInitialize() {
    $('.multiple-images-upload').each(function() {
        var $that = $(this);
        $that.id = $that.attr('id');
        $that.websiteID = $that.data('websiteId');
        $that.text = $that.data('text');
        $that.tooltip = $that.data('tooltip');
        $that.mb = $that.data('mb') ? $that.data('mb') : 50;
        $that.fileKind = {
            kind: $that.data('file-kind') ? $that.data('file-kind') : 1
        };
        $that.firstImageBig = $that.data('first-image-big') ? true : false;
        $that.callBackUpdateFunction = $that.data('call-back-update-function') ? $that.data('call-back-update-function') : false;
        $that.acceptedImages = '.jpeg, .jpg, .png, .gif, .bmp, .svg, .webp, .heic, .tiff, .avif';
        $that.acceptedVideos = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv';
        $that.minlibraryWidth = $that.data('min-library-width');
        $that.imagesType = $that.data('images-type');
        $that.disableExternal = $that.data('disable-external') ? $that.data('disable-external') : false;
        $that.noDropDown = $that.disableExternal ? true : false;
        $that.library = $that.data('library') ? $that.data('library') : false;
        $that.videoLibrary = $that.data('video-library') ? $that.data('video-library') : false;
        $that.externalVideo = $that.data('external-video') ? $that.data('external-video') : false;
        $that.imageFocusPoint = $that.data('image-focus-point') ? true : false;
        $that.required = $that.data('required') ? $that.data('required') : false;
        $that.requiredMesssage = $that.data('msg-required') ? $that.data('msg-required') : '';
        $that.maxAmount = $that.data('max-amount') ? $that.data('max-amount') : '';
        $that.maxAmountErrorMSG = $that.data('max-amount-error-msg') ? $that.data('max-amount-error-msg') : '';
        $that.hireExpert = $that.data('hire-expert') ? $that.data('hire-expert') : '';
        $that.supportTickets = $that.data('support-tickets') ? $that.data('support-tickets') : '';
        $that.moduleID = $that.data('module-id') ? $that.data('module-id') : '';
        $that.cropTool = true;
        $that.filter = true;
        switch ($that.fileKind.kind) {
            case 1:
                $that.mb = 50;
                $that.fileKind.acceptedFiles = $that.acceptedImages;
                break;
            case 2:
                $that.mb = 100;
                $that.fileKind.acceptedFiles = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv';
                $that.fileKind.previewStatic = 'fa-video-camera';
                break;
            case 3:
                $that.mb = 100;
                $that.fileKind.acceptedFiles = '.jpeg, .jpg, .png, .gif, .bmp, .svg, .webp, .mp4, .m4v, .mov, .avi, .wmv, .webm, .flv, .heic, .tiff, .avif';
                break;
            case 4:
                $that.mb = 100;
                $that.fileKind.acceptedFiles = '.jpeg, .jpg, .png, .gif, .bmp, .svg, .webp, .heic, .tiff, .avif';
                $that.fileKind.acceptedFiles += ', .wav, .flac, .m4a , .mp3';
                $that.fileKind.acceptedFiles += ', .avi, .flv, .wmv, .mov, .mp4, .m4v, .webm';
                $that.fileKind.acceptedFiles += ', .doc, .docx, .xls, .xlsx, .ppt, .pptx, .odt, .odp, .pdf, .epub';
                $that.fileKind.acceptedFiles += ', .zip';
                break;
        }
        if ($('html[dir=rtl]').length > 0) {
            var margin = 'margin-right';
        } else {
            var margin = 'margin-left';
        }
        var html = '<div id="' + $that.id + '__multipleImagesUploadContainer" class="form-group fileUploadBox">';
        if ($that.text.length > 0) {
            html += '<div id="' + $that.id + '_tooltip" class="tooltip-container">';
            html += '<label for="' + $that.id + '">' + $that.text + '</label>';
            if ($that.tooltip) {
                html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip-desk" title="' + $that.tooltip + '"><i class="fal fa-solid fa-question-circle"></i></a>';
            } else {
                var title = translations.fileSizeLimit.replace('{{mb}}', $that.mb);
                if ($that.fileKind.acceptedFiles) {
                    title += ' ' + translations.fileTypesLimit.replace('{{acceptedFiles}}', $that.fileKind.acceptedFiles);
                }
                html += '&nbsp;<a data-rel="tooltip" title="' + title + '" href="#" onclick="return false;">';
                html += '<i class="fal fa-solid fa-question-circle"></i>';
                html += '</a>';
            }
            html += '</div>';
        }
        html += '<div class="input-group">';
        html += '<input type="hidden" class="form-control file-upload-input-field" name="' + $that.id + '" id="' + $that.id + '" value="' + $that.val() + '" ' + ($that.required ? 'required data-rule-multiple-images-upload="true" data-msg-multiple-images-upload="' + $that.requiredMesssage + '"' : '') + ($that.hireExpert == true ? 'data-hire-expert="true" data-request-id="' + $that.data('request-id') + '"' : '') + ($that.supportTickets == true ? 'support-tickets-files="true" data-request-id="' + $that.data('request-id') + '"' : '') + '>';
        html += '<div class="input-group-btn btn-group-sm">';
        var title = translations.fileSizeLimit.replace('{{mb}}', $that.mb) + ' ' + translations.fileTypesLimit.replace('{{acceptedFiles}}', $that.fileKind.acceptedFiles);
        if ($that.noDropDown) {
            html += '<span class="btn btn-default fake-button" aria-label="Upload" id="' + $that.id + '_fakeButton"><i class="fal fa-upload"></i> ' + translations.upload + '</span>';
            html += '<button type="button" class="btn btn-default" aria-label="Upload" id="' + $that.id + '_uploadFile" data-rel="tooltip-desk" title="' + title + '"><i data-d-z-id="' + $that.id + '" class="fal fa-upload"></i> ' + translations.upload + '</button>';
        } else {
            html += '<button id="' + $that.id + '_uploadFileoptions" type="button" class="btn btn-default"><span>' + ($that.fileKind.kind == 4 ? translations.uploadCare.chooseFiles : translations.chooseImage) + '</span> <i class="fal fa-chevron-down"></i></button>';
            html += '<ul id="' + $that.id + '_uploadFileContainer" class="dropdown-menu" style="' + margin + ':-1px;">';
            html += '<li id="' + $that.id + '_uploadFileBox">';
            html += '<a data-on-drag-handler="true" aria-label="Upload" id="' + $that.id + '_uploadFile" data-rel="tooltip-desk" style="display: block; cursor: pointer;"><span data-d-z-id="' + $that.id + '"><i class="fal fa-upload"></i> ' + translations.uploadFromComputer + '</span></a>';
            html += '</li>';
            if ($that.library) {
                html += '<li id="' + $that.id + '_library">';
                html += '<a onclick="OpenUploadFilesModal(\'' + $that.id + '\',\'#imageLibrary\',false,\'' + $that.minlibraryWidth + '\',\'\');" style="cursor: pointer;"><i class="fal fa-image"></i> ' + translations.imagesLibrary + '</a>';
                html += '</li>';
            }
            if ($that.videoLibrary) {
                html += '<li id="' + $that.id + '_videoLibrary">';
                html += '<a style="cursor: pointer;" onclick="OpenUploadFilesModal(\'' + $that.id + '\',\'#videoLibrary\',false,\'' + $that.minlibraryWidth + '\',\'\');"><i class="fal fa-video-camera"></i> ' + translations.videoLibrary + '</a>';
                html += '</li>';
            }
            if ($that.externalVideo) {
                html += '<li id="' + $that.id + '_youtube">';
                html += '<a style="cursor: pointer;" onclick="ExternalVideoUploader.openPopup(\'' + $that.id + '\',\'' + $that.websiteID + '\');"><i class="fa-brands fa-youtube"></i> ' + translations.externalVideoUplaoder.title + '</a>';
                html += '</li>';
            }
            if (!$that.disableExternal) {
                html += '<li id="' + $that.id + '_social">';
                html += '<a aria-label="Upload" class="uploadcare" data-id="' + $that.id + '" data-type="multiple" id="' + $that.id + '_uploadFileFromSocial" style="cursor: pointer;"><i class="fal fa-cloud-upload"></i> ' + translations.uploadCare.externalSources + '</a>';
                html += '</li>';
            }
            html += '</ul>';
        }
        html += '<div id="' + $that.id + '_progressBar" class="progress pos-rel" data-percent="0%"><div class="progress-bar" style="width:0%;"></div><div id="' + $that.id + '_cancelBtn" class="progress-cancel" title="' + translations.Cancel + '"><i class="fal fa-ban"></i></div></div>';
        html += '</div>';
        html += '</div>';
        html += '<ul id="' + $that.id + '_previewContainer" data-first-image-big="' + $that.firstImageBig + '" class="ace-thumbnails clearfix multiple-images-preview-container fancy-scrollbar"></ul>';
        html += '</div>';
        $that.replaceWith(html);
        var mi = {
            id: $that.id,
            UploadContaner: $('#' + $that.id + '__multipleImagesUploadContainer'),
            input: $('#' + $that.id),
            images: getImages(),
            previewContainer: $('#' + $that.id + '_previewContainer'),
            progressbar: new UploadFilesProgressbar('#' + $that.id + '_progressBar'),
            imagesType: $that.imagesType,
            btns: {
                showOptions: $('#' + $that.id + '_uploadFileoptions'),
                upload: $('#' + $that.id + '_uploadFile'),
                preview: $('#' + $that.id + '_preview'),
                cancel: $('#' + $that.id + '_cancelBtn')
            },
            uploadcare: Uploadcare.init({
                btnSelector: '.uploadcare'
            }),
            optionsContainer: $('#' + $that.id + '_uploadFileContainer'),
            kind: $that.fileKind,
            required: $that.required,
            multiUploadMethods: {
                getImages: getImages,
                syncPreview: syncPreview,
                addImage: addImage
            },
            methods: {
                addFrameClass: function() {},
                removeFrameClass: function() {}
            }
        };
        window.site123_inputImages = mi.images;
        if (!topWindow.multipleUploadFile) topWindow.multipleUploadFile = new Array();
        topWindow.multipleUploadFile[$that.id] = mi;
        (function() {
            var displayTimeOut = 2;
            var $optionsContainer = topWindow.multipleUploadFile[$that.id].optionsContainer;
            var $showOptions = topWindow.multipleUploadFile[$that.id].btns.showOptions;
            var mouseOverbtn = false;
            var mouseOverDiv = false;
            $showOptions.on('click', function() {
                $showOptions.addClass('ignore-mouse-move-event');
                if ($optionsContainer.is(':visible')) {
                    $optionsContainer.hide();
                    $showOptions.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
                } else {
                    $optionsContainer.show();
                    $showOptions.find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
                }
            });
            $optionsContainer.on('click', function() {
                $optionsContainer.hide();
                $showOptions.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            });
            $showOptions.mouseover(function() {
                    mouseOverbtn = true;
                    clearTimeout(displayTimeOut);
                })
                .mouseleave(function() {
                    mouseOverbtn = false;
                    closeOptionContainer();
                });
            $optionsContainer.mouseover(function() {
                    mouseOverDiv = true;
                    clearTimeout(displayTimeOut);
                    showOptionContainer();
                })
                .mouseleave(function() {
                    mouseOverDiv = false;
                    closeOptionContainer();
                });

            function closeOptionContainer() {
                if (mouseOverbtn || mouseOverDiv) return;
                clearTimeout(displayTimeOut);
                displayTimeOut = setTimeout(function() {
                    $optionsContainer.hide();
                    $showOptions.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
                }, 200);
            }

            function showOptionContainer() {
                clearTimeout(displayTimeOut);
                $optionsContainer.show();
                $showOptions.find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
        })();
        mi.btns.upload.click(function() {
            $(this).tooltip('hide');
        });
        syncPreview();
        addSortableAbility();
        addFileUploadAbility();

        function syncPreview() {
            mi.previewContainer.empty();
            $.each(mi.images, function(index, image) {
                var $li = $(generateImageBoxHtml(image)).appendTo(mi.previewContainer);
                $li.find('.image-delete-btn').click(function() {
                    deleteImage(this);
                });
                $li.find('.image-focus-point').click(function() {
                    var $item = $(this).closest('li');
                    var mediaPath = $item.find('.edit-image-btn').attr('href');
                    imageFocusPoint_OpenModal($that.websiteID, mediaPath, UploadFile_GetFileType(mediaPath), $item.data('focus-point'), false, 1, function(focusPoint) {
                        $item.data('focus-point', focusPoint);
                        var id = $item.get(0).id;
                        $item.find('.edit-image-btn img').css({
                            objectPosition: focusPoint.x + '% ' + focusPoint.y + '%'
                        });
                        for (var i = 0; i < mi.images.length; i++) {
                            if (mi.images[i].id == id) {
                                mi.images[i].focusPoint = JSON.stringify(focusPoint);
                                break;
                            }
                        }
                        save();
                    });
                });
                $li.find('.edit-image-doka-btn').click(function() {
                    var _this = $(this);
                    var $item = _this.closest('li');
                    var id = $item.get(0).id;
                    var imgObj = {
                        url: _this.data('image-url'),
                        callback: function(s3Obj) {
                            let thumb = s3Obj.n.replace("100_", "800_");
                            $item.find('.edit-image-btn img').attr('src', setImagesCDN(thumb));
                            for (var i = 0; i < mi.images.length; i++) {
                                if (mi.images[i].id == id) {
                                    mi.images[i].edit = true;
                                    mi.images[i].orginal = mi.images[i].n;
                                    mi.images[i].n = s3Obj.n;
                                    mi.images[i].t = s3Obj.t;
                                    mi.images[i].h = s3Obj.h;
                                    mi.images[i].w = s3Obj.w;
                                    mi.images[i].s = s3Obj.s;
                                    break;
                                }
                            }
                            save();
                        }
                    };
                    topWindow.DokaImagesEditor.init('', $that.websiteID, imgObj);
                });
            });
            ColorboxInitial('.multiple-images-preview-container [data-rel="colorbox"]');
            if ($that.firstImageBig) {
                replaceFirstImageSize();
            }
            var fn = window[$that.callBackUpdateFunction];
            if (typeof fn === 'function') fn();
            save();
            if (mi.required) {
                const formValidator = mi.input.closest('form').data('validator');
                if (formValidator) {
                    formValidator.element("#" + mi.id);
                }
            }

            function generateImageBoxHtml(image) {
                var extension = image.n.split("?")[0].split('.').pop();
                image.id = uniqid('image');
                var html = '';
                var url = image.n;
                var customData = '';
                var focusPointTitle = translations.imageFocusPoint;
                var focusPoint = image.focusPoint ? image.focusPoint : '';
                var type = 'image';
                if (isVideo(image.n)) {
                    customData = 'data-colorbox-iframe="true" ';
                    customData += 'data-colorbox-width="100%" ';
                    customData += 'data-colorbox-height="100%"';
                    var thumbnail = image.n.replace('.' + extension, '-thumbnail.jpg');
                    image.t = thumbnail;
                    focusPointTitle = translations.videoFocusPoint;
                    type = 'video';
                } else if (isExtrenalVideo(image.n)) {
                    customData = 'data-colorbox-iframe="true" ';
                    customData += 'data-colorbox-width="100%" ';
                    customData += 'data-colorbox-height="100%"';
                    image.n = image.videoUrl;
                    image.t = image.tumbImage;
                    url = image.url;
                    type = 'external_video';
                }
                if (image.edit && image.orginal) {
                    url = image.orginal;
                    url = url.replace("normal_", "800_");
                }
                html += '<li id="' + image.id + '" data-focus-point="' + escapeHtml(focusPoint) + '">';
                html += '<a href="' + url + '" data-rel="colorbox" ' + customData + ' class="edit-image-btn">';
                html += '<img width="100" height="100" src="' + setImagesCDN(image.t) + '" style="object-position:' + imageFocusPoint_GetBgPositionFromString(focusPoint) + ';"/>';
                if (isVideo(image.n) || isExtrenalVideo(image.n)) {
                    html += '<div class="image-video-icon">';
                    html += '<i class="ace-icon fal fa-play-circle"></i>';
                    html += '</div>';
                }
                html += '</a>';
                html += '<div class="tools tools-bottom in">';
                html += '<a href="javascript:void(0);" class="image-delete-btn" title="' + translations.remove + '">';
                html += '<i class="ace-icon fal fa-times red"></i>';
                html += '</a>';
                if ($that.imageFocusPoint && !isExtrenalVideo(image.n)) {
                    html += '<a href="javascript:void(0);" class="image-focus-point" data-rel="tooltip-desk" title="' + focusPointTitle + '">';
                    html += '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-laptop" class="svg-inline--fal fa-phone-laptop fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z"></path></svg>';
                    html += '</a>';
                }
                if (type == 'image' && $that.moduleID != '') {
                    html += `
<a href="javascript:void(0);" class="edit-image-doka-btn" data-rel="tooltip-desk" title="${translations.edit}" data-image-id="${image.id}" data-image-url="${url}" data-type="${type}">
<i class="ace-icon fal fa-edit"></i>
</a>
`;
                }
                html += '</div>';
                html += '</li>';
                return html;
            }
        }

        function orderImages() {
            var images = mi.images;
            mi.images = [];
            mi.previewContainer.find('li').each(function(index, li) {
                var $li = $(li);
                var id = $li.get(0).id;
                var index = $li.parent().children().index($li);
                for (var i = 0; i < images.length; i++) {
                    if (images[i].id == id) {
                        mi.images[index] = images[i];
                        break;
                    }
                }
            });
            var fn = window[$that.callBackUpdateFunction];
            if (typeof fn === 'function') fn();
            save();
        }

        function save() {
            var str = JSON.stringify(mi.images);
            str = encodeURIComponent(str);
            mi.input.val(str).trigger('change');
        }

        function isVideo(path) {
            var extension = path.split("?")[0].split('.').pop();
            if ($that.acceptedVideos.indexOf(extension) >= 0) return true;
            return false;
        }

        function getImages() {
            if ($('#' + $that.id).val().length === 0) return new Array();
            var images = decodeURIComponent($('#' + $that.id).val());
            images = JSON.parse(images);
            return images;
        }

        function deleteImage(button) {
            var index = $(button).closest('li').index();
            mi.images.splice(index, 1);
            syncPreview();
        }

        function replaceFirstImageSize() {
            var $images = mi.previewContainer.children().find('img');
            if ($images.length == 0) return;
            $.each($images, function(index, image) {
                if ($(image).attr('src').indexOf('100_') > -1) {
                    $(image).attr('src', $(image).attr('src').replace('100_', '400_'));
                }
            });
            $images.first().attr('src', $images.first().attr('src').replace('100_', '400_'));
        }

        function addSortableAbility() {
            mi.previewContainer.sortable({
                opacity: 0.8,
                revert: true,
                forceHelperSize: true,
                placeholder: 'multiple-images-placeholder',
                cancel: '.multiple-images-preview-container .tools a',
                forcePlaceholderSize: true,
                tolerance: 'pointer',
                helper: 'clone',
                update: function(event, ui) {
                    if ($that.firstImageBig) {
                        replaceFirstImageSize();
                    }
                    orderImages();
                }
            });
            mi.previewContainer.disableSelection();
            mi.previewContainer.css({
                overflow: 'auto'
            });
        }

        function addFileUploadAbility() {
            var url = "/versions/" + versionNUM + "/wizard/uploadFile.php";
            var params = {
                w: $that.websiteID
            };
            if ($that.hireExpert == true) {
                url = '/manager/hireExpert/uploadFile.php';
                params = {
                    rid: $that.data('request-id')
                };
            }
            if ($that.supportTickets == true) {
                url = '/manager/support/uploadFile.php';
                params = {
                    rid: $that.data('request-id')
                };
            }
            mi.btns.upload.dropzone({
                clickable: '#' + $that.id + '_uploadFile, [data-d-z-id="' + $that.id + '"]',
                url: url,
                maxFilesize: $that.mb,
                parallelUploads: 4,
                createImageThumbnails: false,
                maxThumbnailFilesize: 1.5,
                params: params,
                acceptedFiles: $that.fileKind.acceptedFiles,
                previewsContainer: false,
                dictInvalidFileType: translations.fileTypesErrorMsg.replace('{{acceptedFiles}}', $that.fileKind.acceptedFiles),
                dictResponseError: translations.badRequest,
                timeout: null,
                init: function() {
                    var dropzone = this;
                    mi.btns.cancel.click(function() {
                        dropzone.removeAllFiles(true);
                        mi.input.trigger('s123.uploadMultiFile.cancelUpload');
                    });
                },
                addedfile: function(file, xhr, formData) {
                    mi.progressbar.reset();
                    mi.progressbar.show();
                    mi.progressbar.autoIncrease = false;
                    if (topWindow.WizardUndoRedoHandler) topWindow.WizardUndoRedoHandler.buttonsDisable();
                    mi.input.trigger('s123.uploadMultiFile.addedfile');
                },
                totaluploadprogress: function(progress, totalBytes, totalBytesSent) {
                    if (mi.progressbar.autoIncrease) return;
                    progress = progress * 0.6;
                    progress = Math.ceil(progress);
                    mi.progressbar.update(progress);
                    if (progress >= 60) {
                        mi.progressbar.autoIncrease = true;
                        mi.progressbar.start(500);
                    }
                },
                success: function(file, response) {
                    var s3Obj;
                    var error = false;
                    try {
                        s3Obj = jQuery.parseJSON(response);
                        if (isVideo(s3Obj.n)) {
                            s3Obj.mediaType = 'video';
                        } else {
                            s3Obj.mediaType = '';
                        }
                    } catch (e) {
                        error = true;
                    }
                    if (error) {
                        bootbox.dialog({
                            title: translations.uploadFailed,
                            message: translations.uploadFailedInvalidImage,
                            buttons: {
                                danger: {
                                    label: translations.ok,
                                    className: "btn-danger btn-sm",
                                }
                            }
                        });
                        trackJsEvent(true, translations.uploadFailedInvalidImage);
                        return;
                    } else {
                        mi.images.push(s3Obj);
                    }
                    this.removeFile(file);
                },
                queuecomplete: function() {
                    mi.progressbar.finish(function() {
                        syncPreview();
                        if (topWindow.WizardUndoRedoHandler) topWindow.WizardUndoRedoHandler.buttonsEnable();
                        mi.input.trigger('s123.uploadMultiFile.queuecomplete');
                    });
                },
                error: function(file, errorMessage, xhr) {
                    mixPanelEvent(false, "Multiple Images - Upload file error");
                    mi.progressbar.finish(function() {
                        if ($('.modal.dp-error-msg').length == 0) {
                            var $bootbox = bootbox.dialog({
                                title: translations.uploadFailed,
                                message: errorMessage,
                                className: 'dp-error-msg',
                                backdrop: false,
                                buttons: {
                                    danger: {
                                        label: translations.ok,
                                        className: "btn-danger btn-sm",
                                    }
                                }
                            });
                            var $backdrop = $('<div class="backdropManaul dp-error-msg"></div>');
                            $('body').append($backdrop);
                            $bootbox.one('hide.bs.modal', function(event) {
                                $backdrop.remove();
                            });
                        }
                        trackJsEvent(true, errorMessage);
                        mi.input.trigger('s123.uploadMultiFile.error');
                    });
                },
                accept: function(file, done) {
                    if ($.isNumeric($that.maxAmount) && getImages().length >= $that.maxAmount) {
                        done($that.maxAmountErrorMSG);
                    } else {
                        done();
                    }
                }
            });
        }

        function addImage(s3Obj) {
            if (isVideo(s3Obj.n) || isExtrenalVideo(s3Obj.n)) {
                s3Obj.mediaType = 'video';
            } else {
                s3Obj.mediaType = '';
            }
            var images = getImages();
            images.push(s3Obj);
            mi.images = images;
            syncPreview();
        }
        if ($that.firstImageBig) {
            replaceFirstImageSize();
        }
        (function() {
            var $originalParent = mi.btns.upload.parent();
            $('#' + mi.id + '__multipleImagesUploadContainer').on('dragover drop', function(event) {
                event.preventDefault();
                if (mi.btns.upload.hasClass('multi-upload-drop-file-handler')) return;
                if (mi.progressbar.$pb.is(':visible')) return;
                if (mi.btns.upload.data('on-drag-handler')) {
                    mi.btns.upload.addClass('btn btn-default custom-design');
                }
                mi.btns.upload.addClass('multi-upload-drop-file-handler').appendTo(this);
                $('#' + mi.id + '_fakeButton').css('display', 'inline-block');
                mi.btns.upload.on('dragleave.dfh drop.dfh', function(event) {
                    reset();
                    mi.btns.upload.off('dragleave.dfh drop.dfh');
                });
                $(document).off('mousedown.' + mi.id).on('mousedown.' + mi.id, function(event) {
                    reset();
                    $(document).off('mousedown.' + mi.id);
                    mi.btns.upload.off('dragleave.dfh drop.dfh');
                });
            });

            function reset() {
                if (mi.btns.upload.data('on-drag-handler')) {
                    mi.btns.upload.removeClass('btn btn-default custom-design');
                }
                mi.btns.upload.removeClass('multi-upload-drop-file-handler').appendTo($originalParent);
                $('#' + mi.id + '_fakeButton').hide();
            }
        })();
    });
}

function UploadSingleFilesInitialize($customParent) {
    UploadSingleFileHandler.init($customParent);
}
var UploadSingleFileHandler = function() {
    var _ = {};
    _.init = function($customParent) {
        _.isCustomParent = $customParent ? true : false;
        if (!_.isCustomParent) {
            $('.input-file-upload').each(function() {
                _.renderUploadFile($(this));
            });
        } else {
            $customParent.find('.input-file-upload').each(function() {
                _.renderUploadFile($(this));
            });
        }
    };
    _.renderUploadFile = function($this) {
        var id = $this.attr('id');
        var websiteID = $this.data('websiteId');
        var value = $this.data('value');
        var text = $this.data('text');
        var scrollPreview = $this.data('scrollPreview');
        var tooltip = $this.data('tooltip');
        var required = $this.data('required');
        var hideRemoveBtn = $this.data('hide-remove-btn');
        var library = $this.data('library');
        var icons = $this.data('icons');
        var iconsFilter = $this.data('icons-filter') ? $this.data('icons-filter') : 'auto';
        var logoMaker = $this.data('logo-maker');
        var illustrations = $this.data('illustrations');
        var uploads = $this.data('uploads');
        var premium = $this.data('premium');
        var mb = $this.data('mb'); // we overwrite this settings on some files types
        var fileKind = {
            kind: $this.data('fileKind')
        };
        var minWidth = $this.data('minWidth');
        var minHeight = $this.data('minHeight');
        var minlibraryWidth = $this.data('min-library-width');
        var pathType = $this.data('path-type');
        var filter = false;
        var filter_icon = $this.data('filter');
        var cropTool = false;
        var cropTool_icon = $this.data('crop');
        var groupEditTools = $this.data('group-edit-tools') ? $this.data('group-edit-tools') : false;
        var logofix = $this.data('logofix');
        var imagesType = $this.data('images-type');
        var placeHolder = $this.data('place-holder');
        var imageFocusPoint = $this.data('image-focus-point') ? true : false;
        var imageFocusPointVersion = $this.data('image-focus-point-version') ? $this.data('image-focus-point-version') : 1;
        var imageFocusPointPreview = $this.data('image-focus-point-preview') ? $this.data('image-focus-point-preview') : false;
        var noDropDown = $this.data('no-drop-down');
        var resizeType = $this.data('resize-type');
        var disableExternal = $this.data('disable-external') ? $this.data('disable-external') : false;
        var dropDownOrder = $this.data('drop-down-order') ? $this.data('drop-down-order').split(',') : [];
        var externalVideo = $this.data('external-video') ? $this.data('external-video') : false;
        var style = $this.data('style') ? $this.data('style') : 'default';
        var removeBG = $this.data('remove-bg') ? $this.data('remove-bg') : false;
        var removeBGType = $this.data('remove-bg-type') ? $this.data('remove-bg-type') : 1;
        var openModalPlace = $this.data('open-modal-place') ? 'topWindow' : '';
        var updatePreviewArea = $this.data('update-preview-area') ? $this.data('update-preview-area') : '';
        var notFormInput = $this.data('not-form-input') ? $this.data('not-form-input') : false;
        var customClass = $this.data('custom-class') ? $this.data('custom-class') : '';
        var customAttr = $this.data('custom-attr') ? $this.data('custom-attr') : '';
        var libraryOrientation = $this.data('library-orientation') ? $this.data('library-orientation') : '';
        var takePhoto = $this.data('take-photo') ? $this.data('take-photo') : false;
        var takeVideo = $this.data('take-video') ? $this.data('take-video') : false;
        var magicButton = $this.data('magic-button') ? true : false;
        var isImgObj = $this.data('img-obj') ? true : false;
        var fileURL = $this.data('value');
        var packageNUM = $this.data('package-num');
        var libraryMode = $this.data('library-mode') ? $this.data('library-mode') : '';
        var bigFilesUploadActive = $this.data('big-files-upload-active');
        var input_unique_id = $this.data('input-unique-id');
        var isPreviewImageOpenEditor = $this.data('preview-image-open-editor') ? true : false;
        var freeProviderOnlyBOO = $this.data('free-provider-only') ? true : false;
        if (isImgObj && typeof value == 'object') {
            fileURL = value.n;
        }
        if (libraryOrientation == 'horizontal') minlibraryWidth = 1200;
        switch (fileKind.kind) {
            case 1:
            case 1.1:
                mb = 50;
                if (fileKind.kind == 1) fileKind.acceptedFiles = '.jpeg, .jpg, .png, .gif, .bmp, .svg, .webp, .heic, .tiff, .avif';
                else if (fileKind.kind == 1.1) fileKind.acceptedFiles = '.ico, .png';
                fileKind.previewStatic = false;
                if (cropTool_icon != 'disable') {
                    cropTool = true;
                }
                if (filter_icon != 'disable') {
                    filter = true;
                }
                break;
            case 2:
                mb = bigFilesUploadActive ? GetBigFilesUploadLimitByPackage(packageNUM) : 100;
                fileKind.acceptedFiles = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv';
                fileKind.previewStatic = true;
                fileKind.previewStaticIcon = 'fa-video-camera';
                break;
            case 3:
                mb = 100;
                fileKind.acceptedFiles = '.mp3, .wav, .ogg, .flac, .m4a';
                fileKind.previewStatic = true;
                fileKind.previewStaticIcon = 'fa-music';
                disableExternal = true;
                break;
            case 4:
                fileKind.acceptedFiles = '.csv';
                fileKind.previewStatic = true;
                fileKind.previewStaticIcon = 'fa-file';
                disableExternal = true;
                break;
            case 5:
                if (cropTool_icon != 'disable') {
                    cropTool = true;
                }
                if (filter_icon != 'disable') {
                    filter = true;
                }
                fileKind.acceptedFiles = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv, .jpeg, .jpg, .png, .gif, .bmp, .svg, .webp, .heic, .tiff, .avif';
                mb = 100;
                fileKind.previewStatic = UploadFile_GetFileType(fileURL) === 'video';
                fileKind.previewStaticIcon = 'fa-video-camera';
                break;
            case 9:
                mb = bigFilesUploadActive ? GetBigFilesUploadLimitByPackage(packageNUM) : 100;
                fileKind.acceptedFiles = '.jpeg, .jpg, .png, .gif, .bmp, .svg, .webp, .heic, .tiff, .avif';
                fileKind.acceptedFiles += ', .wav, .flac, .m4a , .mp3';
                fileKind.acceptedFiles += ', .avi, .flv, .wmv, .mov, .mp4, .m4v, .webm';
                fileKind.acceptedFiles += ', .doc, .docx, .xls, .xlsx, .ppt, .pptx, .odt, .odp, .pdf, .epub';
                fileKind.acceptedFiles += ', .zip';
                fileKind.previewStatic = true;
                fileKind.previewStaticIcon = 'fa-file';
                break;
            case 10:
                fileKind.acceptedFiles = '.woff, .woff2';
                fileKind.previewStatic = true;
                fileKind.previewStaticIcon = 'glyphicon-file';
                break;
            default:
                fileKind.acceptedFiles = false;
                fileKind.previewStatic = true;
                fileKind.previewStaticIcon = 'fa-file';
        }
        var x = '';
        var margin = '';
        $('html[dir=rtl]').length > 0 ? margin = 'margin-right' : margin = 'margin-left';
        if (premium == 'yes') {
            x += '<div id="' + id + '_uploadFileContaner" class="form-group premiumFeature">';
            x += '<div class="premiumFeatureDesign premiumFeatureMessage transform-centering" data-rel="tooltip-desk" title="' + translations.businessPackageOnly + '">';
            x += '<a class="btn btn-danger btn-sm lockMessage fal fa-lock" data-rel="tooltip-desk"></a>';
            x += '</div>';
        } else {
            x += '<div id="' + id + '_uploadFileContaner" class="form-group fileUploadBox ' + style + '">';
        }
        if (text) {
            x += '<label for="' + id + '">' + text;
            if (tooltip) {
                x += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title="' + tooltip + '"><i class="fal fa-solid fa-question-circle"></i></a>';
            } else {
                var title = translations.fileSizeLimit.replace('{{mb}}', mb);
                if (fileKind.acceptedFiles) {
                    title += ' ' + translations.fileTypesLimit.replace('{{acceptedFiles}}', fileKind.acceptedFiles);
                }
                x += ' <a data-rel="tooltip" title="' + title + '" href="#" onclick="return false;"><i class="fal fa-solid fa-question-circle"></i></a>';
            }
            x += '</label>';
        }
        x += '<div class="input-group" style="display: block">';
        if (!noDropDown) {
            x += '<input type="hidden" class="form-control file-upload-input-field ' + customClass + '" ' + (notFormInput ? '' : 'name="' + id + '"') + ' id="' + id + '" value="' + value + '"' + (required ? ' required data-msg-required="' + translations.fieldRequired + '"' : '') + ' ' + (updatePreviewArea.length > 0 ? 'data-update-preview-area="' + updatePreviewArea + '"' : '') + (customAttr.length > 0 ? customAttr : '') + '>';
            x += '<div class="main-wrapper">';
            if (style == 'image-center') {
                x += '<a id="' + id + '_previewStatic" href="#" class="btn btn-primary" style="display:none;"><i class="fa ' + fileKind.previewStaticIcon + '" aria-hidden="true"></i></a>';
                x += '<a id="' + id + '_preview" href="#" class="btn btn-default" style="display:none;padding:0;border:0;' + margin + ':5px"><img src="' + getPreviewImage(fileURL, 'normal') + '" style="width:36px;height:36px;object-fit:cover;object-position:center;"></a>';
                x += '<a id="' + id + '_previewIcon" class="btn btn-default disabled" style="margin:0;display:none;' + margin + ':5px"" onclick="OpenUploadFilesModal(\'' + id + '\',\'#imageIcons\',false,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i></i></a>';
            }
            x += '<div class="input-group-btn btn-group-sm file-options-container" style="display:flex;">';
            x += '<button id="' + id + '_uploadFileoptions" type="button" class="btn btn-default"><span>' + translations.chooseImage + '</span> <li class="fal fa-chevron-down"></li></button>';
            if (style == 'default') {
                if (fileKind.kind == 9 || fileKind.kind == 4) {
                    x += '<a id="' + id + '_previewStatic" href="' + fileURL + '" target="_blank" class="btn btn-primary" style="display:none;"><i data-rel="tooltip-desk" title="' + translations.Preview + '" class="fa ' + fileKind.previewStaticIcon + '" aria-hidden="true"></i></a>';
                } else {
                    x += '<a id="' + id + '_previewStatic" href="' + fileURL + '" data-rel="colorbox-t-w" data-colorbox-iframe="true" data-colorbox-width="70%" data-colorbox-height="70%" class="btn btn-primary" style="display:none;" data-rel-tooltip="tooltip-desk" title="' + translations.Preview + '"><i class="fa ' + fileKind.previewStaticIcon + '" aria-hidden="true"></i></a>';
                }
                value = getIconFullPath(fileURL);
                if (isPreviewImageOpenEditor && (filter || cropTool) && !(value.indexOf('.svg') != -1)) {
                    x += '<a id="' + id + '_preview" href="' + fileURL.replace("normal_", "800_") + '" class="btn btn-default" style="display:none;padding:0;border:0;margin-inline:1px;' + margin + ':5px" data-headers-modules="true"><img data-rel="tooltip-desk" title="' + translations.Preview + '" src="' + getPreviewImage(fileURL, 'normal') + '" style="width:36px;height:36px;object-fit:cover;object-position:center;"></a>';
                } else {
                    x += '<a id="' + id + '_preview" href="' + fileURL.replace("normal_", "800_") + '" data-rel="colorbox-t-w" class="btn btn-default" style="display:none;padding:0;border:0;margin-inline:1px;' + margin + ':5px"><img data-rel="tooltip-desk" title="' + translations.Preview + '" src="' + getPreviewImage(fileURL, 'normal') + '" style="width:36px;height:36px;object-fit:cover;object-position:center;"></a>';
                }
                x += '<a id="' + id + '_previewIcon" class="btn btn-default disabled" style="margin:0;display:none;' + margin + ':5px"" onclick="OpenUploadFilesModal(\'' + id + '\',\'#imageIcons\',false,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i></i></a>';
            }
            if ((filter || cropTool) && !groupEditTools) {
                x += '<a id="' + id + '_imageEditor" class="btn btn-default" onclick="topWindow.DokaImagesEditor.init(\'' + id + '\',\'' + websiteID + '\');" data-filter=' + filter + ' data-crop=' + cropTool + ' data-rel="tooltip-desk" title="' + translations.imageEditor + '" style="display:none;"><i class="fal fa-crop" aria-hidden="true"></i></a>';
            }
            if (imageFocusPoint == true && !groupEditTools) {
                var focusPointTitle = UploadFile_GetFileType(fileURL) === 'video' ? translations.videoFocusPoint : translations.imageFocusPoint;
                x += '<a id="' + id + '_imageFocusPoint" href="#" class="btn btn-default" data-rel="tooltip-desk" title="' + focusPointTitle + '" style="display:none;"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-laptop" class="svg-inline--fa fa-phone-laptop fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z"></path></svg></a>';
            }
            if (magicButton == true && !groupEditTools) {
                x += '<a id="' + id + '_magicBtn" class="btn btn-default" href="#" onclick="" data-rel="tooltip-desk" title="' + translations.imageMagicBtn + '" style="display:none;"><i class="fal fa-user" aria-hidden="true"></i></a>';
            }
            if (groupEditTools == true) {
                var focusPointTitle = UploadFile_GetFileType(fileURL) === 'video' ? translations.videoFocusPoint : translations.imageFocusPoint;
                var uniqid = uniqid();
                x += '<div id="' + id + '_groupEditTools" class="dropdown group-edit-tools" style="display:none;">';
                x += '<button class="btn btn-default dropdown-toggle" type="button" id="editOptionDropdownMenu_' + uniqid + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="border-radius: 0px;border-width:2px;"><li class="fal fa-chevron-down"></li></span>';
                x += '</button>';
                x += '<ul class="dropdown-menu dropdown-menu-' + intrface_align_reverse + '" aria-labelledby="editOptionDropdownMenu_' + uniqid + '" style="margin-top:0px;">';
                x += '<li><a id="' + id + '_imageEditor" onclick="topWindow.DokaImagesEditor.init(\'' + id + '\',\'' + websiteID + '\');" data-filter=' + filter + ' data-crop=' + cropTool + ' style="display:none;cursor:pointer;"><i class="fal fa-image" aria-hidden="true"></i>&nbsp;<span>' + translations.imageEditor + '</span></a></li>';
                x += '<li><a id="' + id + '_imageFocusPoint" href="#" style="display:none;"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-laptop" class="svg-inline--fa fa-phone-laptop fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z"></path></svg>&nbsp;<span>' + focusPointTitle + '</span></a></li>';
                x += '</ul>';
                x += '</div>';
            }
            if (!required && !hideRemoveBtn) {
                x += '<button id="' + id + '_removeBtn" type="button" class="btn btn-danger" style="display:none;" data-rel="tooltip-desk" aria-label="Remove" title="' + translations.remove + '" onclick="RemoveFileFromUpload(\'' + id + '\');"><i class="fal fa-times" aria-hidden="true" title="' + translations.remove + '"></i></button>';
            }
            x += '<ul id="' + id + '_uploadFileContainer" class="dropdown-menu ' + (dropDownOrder.length > 0 ? 'drop-down-order' : '') + '" style="' + margin + ':-1px;">';
            if (uploads != false) {
                x += '<li id="' + id + '_uploadFileBox" style="' + getOptionOrder('upload') + '">';
                x += '<a aria-label="Upload" id="' + id + '_uploadFile" data-id="' + id + '" data-rel="tooltip-desk" style="display:block"><i class="fal fa-upload" data-d-z-id="' + id + '"></i> ' + translations.uploadFromComputer + '</a>';
                x += '</li>';
            }
            if (library != 'no') {
                x += '<li style="' + getOptionOrder('library') + '">';
                if (library == 'imageLive') {
                    x += '<a id="' + id + '_library" style="display:block" onclick="OpenUploadFilesModal(\'' + id + '\',\'#imageLibrary\',true,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i class="fal fa-image"></i> ' + (imagesType === 'pattern' ? translations.patterns : translations.library) + '</a>';
                }
                if (library == 'imageHomepageLive') {
                    x += '<a id="' + id + '_library" class="image-homepage-live" data-search="all" data-id="' + id + '" style="display:block"><i class="fal fa-image"></i> ' + (imagesType === 'pattern' ? translations.patterns : translations.library) + '</a>';
                }
                if (library == 'image') {
                    x += '<a id="' + id + '_library" style="display:block" onclick="OpenUploadFilesModal(\'' + id + '\',\'#imageLibrary\',false,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i class="fal fa-image"></i> ' + translations.imagesLibrary + '</a>';
                }
                if (library == 'videoLive') {
                    x += '<a id="' + id + '_library" style="display:block" onclick="OpenUploadFilesModal(\'' + id + '\',\'#videoLibrary\',true,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i class="fal fa-video-camera"></i> ' + translations.library + '</a>';
                }
                if (library == 'video') {
                    x += '<a id="' + id + '_library" style="display:block" onclick="OpenUploadFilesModal(\'' + id + '\',\'#videoLibrary\',false,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i class="fal fa-video-camera"></i> ' + translations.videoLibrary + '</a>';
                }
                x += '</li>';
                if (!disableExternal) {
                    x += '<li style="' + getOptionOrder('external') + '">';
                    x += '<a class="uploadcare" id="' + id + '_social" data-id="' + id + '"><i class="fal fa-cloud-upload"></i> ' + translations.uploadCare.externalSources + '</a>';
                    x += '</li>';
                }
                if (library == 'imageHomepageLive & videoLive') {
                    x += '<li style="' + getOptionOrder('imageHomepageLive') + '">';
                    x += '<a id="' + id + '_library" class="image-homepage-live" data-search="all" data-id="' + id + '" style="display:block"><i class="fal fa-image"></i> ' + (imagesType === 'pattern' ? translations.patterns : translations.imagesLibrary) + '</a>';
                    x += '</li>';
                    x += '<li style="' + getOptionOrder('videoLive') + '">';
                    x += '<a id="' + id + '_video_library" style="display:block" onclick="OpenUploadFilesModal(\'' + id + '\',\'#videoLibrary\',true,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i class="fal fa-video-camera"></i> ' + translations.videoLibrary + '</a>';
                    x += '</li>';
                }
                if (library == 'image & video') {
                    x += '<li style="' + getOptionOrder('image') + '">';
                    x += '<a id="' + id + '_library" style="display:block" onclick="OpenUploadFilesModal(\'' + id + '\',\'#imageLibrary\',false,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i class="fal fa-image"></i> ' + translations.imagesLibrary + '</a>';
                    x += '</li>';
                    x += '<li style="' + getOptionOrder('video') + '">';
                    x += '<a id="' + id + '_video_library" style="display:block" onclick="OpenUploadFilesModal(\'' + id + '\',\'#videoLibrary\',false,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i class="fal fa-video-camera"></i> ' + translations.videoLibrary + '</a>';
                    x += '</li>';
                }
                if (library == 'imageLive & videoLive') {
                    x += '<li style="' + getOptionOrder('library') + '">';
                    x += '<a id="' + id + '_library" style="display:block" onclick="OpenUploadFilesModal(\'' + id + '\',\'#imageLibrary\',true,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i class="fal fa-image"></i> ' + (imagesType === 'pattern' ? translations.patterns : translations.imagesLibrary) + '</a>';
                    x += '</li>';
                    x += '<li style="' + getOptionOrder('videoLive') + '">';
                    x += '<a id="' + id + '_library" style="display:block" onclick="OpenUploadFilesModal(\'' + id + '\',\'#videoLibrary\',true,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i class="fal fa-video-camera"></i> ' + translations.videoLibrary + '</a>';
                    x += '</li>';
                }
                if (icons) {
                    x += '<li style="' + getOptionOrder('icons') + '">';
                    x += '<a id="' + id + '_icons" style="display:block" onclick="topWindow.s123IconsPopup.show(\'' + id + '\',\'' + 'icon_library' + '\',\'' + iconsFilter + '\');"><i class="fal fa-list"></i> ' + translations.icons + '</a>';
                    x += '</li>';
                }
                if (externalVideo) {
                    x += '<li style="' + getOptionOrder('icons') + '">';
                    x += '<a id="' + id + '_youtube" style="cursor: pointer;" onclick="ExternalVideoUploader.openPopup(\'' + id + '\',\'' + websiteID + '\');"><i class="fa-brands fa-youtube"></i> ' + translations.externalVideoUplaoder.title + '</a>';
                    x += '</li>';
                }
                if (illustrations) {
                    x += '<li style="' + getOptionOrder('illustrations') + '">';
                    x += '<a id="' + id + '_illustrations" style="display:block;cursor:pointer;" onclick="topWindow.s123IconsPopup.show(\'' + id + '\',\'' + 'illustrations_library' + '\',\'' + iconsFilter + '\');"><i class="fal fa-list"></i> ' + translations.illustrations + '</a>';
                    x += '</li>';
                }
                if (takePhoto || takeVideo) {
                    x += '<li style="' + getOptionOrder('takePhoto') + '">';
                    x += '<a id="' + id + '_take_photo" style="display:block" onclick="window.OpenTakePhotoAndVideoModal(\'' + id + '\',\'' + takePhoto + '\',\'' + takeVideo + '\');"><i class="fal fa-camera"></i> ' + translations.takePhoto + '</a>';
                    x += '</li>';
                }
            } else {
                if (!disableExternal) {
                    x += '<li style="' + getOptionOrder('external') + '">';
                    x += '<a class="uploadcare" id="' + id + '_social" data-id="' + id + '"><i class="fal fa-cloud-upload"></i> ' + translations.uploadCare.externalSources + '</a>';
                    x += '</li>';
                }
                if (icons) {
                    x += '<li style="' + getOptionOrder('icons') + '">';
                    x += '<a id="' + id + '_icons" style="display:block;" onclick="topWindow.s123IconsPopup.show(\'' + id + '\',\'' + 'icon_library' + '\',\'' + iconsFilter + '\');"><i class="fal fa-list"></i> ' + translations.icons + '</a>';
                    x += '</li>';
                }
                if (logoMaker) {
                    x += '<li style="' + getOptionOrder('logoMaker') + '">';
                    x += '<a id="' + id + '_iconMaker" style="display:block" onclick="topWindow.Wizard.websiteLogoMakerTool.show(\'' + id + '\',\'' + 'icon_library' + '\');"><i class="fal fa-list"></i> ' + translations.logoMaker + '</a>';
                    x += '</li>';
                }
            }
            x += '</ul>';
            if (style == 'image-center') {
                x += '<div id="' + id + '_progressBar" class="progress pos-rel" data-percent="0%"><div class="progress-bar" style="width:0%;"></div><div id="' + id + '_cancelBtn" class="progress-cancel" title="Cancel Upload"><i class="fal fa-ban"></i></div></div>';
            }
            x += '</div>';
        } else {
            if (icons) {
                x += '<input type="hidden" class="form-control file-upload-input-field ' + customClass + '" ' + (notFormInput ? '' : 'name="' + id + '"') + ' id="' + id + '" value="' + value + '"' + (required ? ' required data-msg-required="' + translations.fieldRequired + '"' : '') + '' + (updatePreviewArea.length > 0 ? 'data-update-preview-area="' + updatePreviewArea + '"' : '') + (customAttr.length > 0 ? customAttr : '') + '>';
                x += '<div>';
                x += '<div style="display:flex; width: 100%;" class="input-group-btn">';
                x += '<a aria-label="Upload" id="' + id + '_icons" data-rel="tooltip-desk" style="display:block; margin: 0;" class="btn btn-default btn-sm c-i-input" onclick="topWindow.s123IconsPopup.show(\'' + id + '\',\'' + 'icon_library' + '\',\'' + iconsFilter + '\');"><i class="fal fa-list"></i> ' + translations.icons + '</a>';
                x += '<a id="' + id + '_previewIcon" class="btn btn-default disabled" style="display:none;border:0;' + margin + ':5px"" onclick="OpenUploadFilesModal(\'' + id + '\',\'#imageIcons\',false,\'' + minlibraryWidth + '\',\'' + libraryMode + '\');"><i></i></a>';
                x += '<a id="' + id + '_preview" href="' + fileURL.replace("normal_", "800_") + '" data-rel="colorbox-t-w" class="btn btn-default" style="display:none;padding:0;border:0;' + margin + ':5px"><img data-rel="tooltip-desk" title="' + translations.Preview + '" src="' + getPreviewImage(fileURL, 'normal') + '" style="width:33px;height:33px;object-fit:cover;object-position:center;"></a>';
                x += '<button id="' + id + '_removeBtn" type="button" class="btn btn-danger btn-sm" style="display:none; margin: 0;" data-rel="tooltip-desk" aria-label="Remove" title="' + translations.remove + '" onclick="RemoveFileFromUpload(\'' + id + '\');"><i class="fal fa-times" aria-hidden="true" title="' + translations.remove + '"></i></button>';
                x += '</div>';
            } else {
                x += '<input type="hidden" class="form-control file-upload-input-field" id="' + id + '" name="' + id + '" value="' + value + '"' + (required ? ' required data-msg-required="' + translations.fieldRequired + '"' : '') + '>';
                x += '<div>';
                x += '<div style="display:flex;">';
                x += '<a aria-label="Upload" id="' + id + '_uploadFile" data-rel="tooltip-desk" style="display:block;" class="btn btn-default btn-xs"><i data-d-z-id="' + id + '" class="fal fa-upload"></i> ' + translations.uploadFromComputer + '</a>';
                x += '<a id="' + id + '_preview" href="' + fileURL.replace("normal_", "800_") + '" data-rel="colorbox-t-w" class="btn btn-default" style="display:none;padding:0;border:0;margin-inline:1px;' + margin + ':5px"><img data-rel="tooltip-desk" title="' + translations.Preview + '" src="' + getPreviewImage(fileURL, 'normal') + '" style="width:33px;height:33px;object-fit:cover;object-position:center;"></a>';
                x += '<button id="' + id + '_removeBtn" type="button" class="btn btn-danger btn-xs" style="display:none;" data-rel="tooltip-desk" aria-label="Remove" title="' + translations.remove + '" onclick="RemoveFileFromUpload(\'' + id + '\');"><i class="fal fa-times" aria-hidden="true" title="' + translations.remove + '"></i></button>';
                x += '</div>';
            }
        }
        if (style == 'default') {
            x += '<div id="' + id + '_progressBar" class="progress pos-rel" data-percent="0%"><div class="progress-bar" style="width:0%;"></div><div id="' + id + '_cancelBtn" class="progress-cancel" title="Cancel Upload"><i class="fal fa-ban"></i></div></div>';
        }
        x += '</div>';
        x += '</div>';
        x += '</div>';
        var $x = $(x);
        $this.replaceWith($x);
        var uploadFile = {
            id: id,
            kind: fileKind,
            mb: mb,
            packageNUM: packageNUM,
            input: $x.find('#' + id),
            progressbar: new UploadFilesProgressbar('#' + id + '_progressBar'),
            imagesType: imagesType,
            resizeType: resizeType,
            removeBG: removeBG,
            removeBGType: removeBGType,
            systemKindNUM: topWindow.systemKindNUM,
            hideRemoveBtn: hideRemoveBtn,
            $originalEl: $this,
            libraryOrientation: libraryOrientation,
            isImgObj: isImgObj,
            input_unique_id: input_unique_id,
            freeProviderOnlyBOO: freeProviderOnlyBOO,
            btns: {
                upload: $x.find('#' + id + '_uploadFile'),
                library: $x.find('#' + id + '_library'),
                social: $x.find('#' + id + '_social'),
                video: $x.find('#' + id + '_video_library'),
                takePhoto: $x.find('#' + id + '_take_photo'),
                imageEditor: $x.find('#' + id + '_imageEditor'),
                imageFocusPoint: $x.find('#' + id + '_imageFocusPoint'),
                magicBtn: $x.find('#' + id + '_magicBtn'),
                logofix: logofix,
                icons: $x.find('#' + id + '_icons'),
                preview: $x.find('#' + id + '_preview'),
                previewIcon: $x.find('#' + id + '_previewIcon'),
                previewStatic: $x.find('#' + id + '_previewStatic'),
                remove: $x.find('#' + id + '_removeBtn'),
                cancel: $x.find('#' + id + '_cancelBtn'),
                showOptions: $x.find('#' + id + '_uploadFileoptions'),
                groupEditTools: $x.find('#' + id + '_groupEditTools')
            },
            uploadcare: Uploadcare.init({
                btnSelector: '.uploadcare'
            }),
            el: $x,
            optionsContainer: $x.find('#' + id + '_uploadFileContainer'),
            settings: {
                obj: $('#' + id + '_settings'), // here we are not using `$x.find` because it is not rendered by this tool
                set: function(name, setting, reloadPreview) {
                    var s = uploadFile.settings.get();
                    s[name] = setting;
                    uploadFile.settings.obj.html(JSON.stringify(s)).trigger('input');
                    if (isWizardPage() && uploadFile.settings.obj.attr('name')) {
                        if (reloadPreview) {
                            AutoSaveWizard(true, true);
                        } else {
                            window.reloadPreviewCSS = ReloadPreviewCSS;
                            AutoSaveWizard(false, true);
                        }
                    }
                },
                get: function() {
                    var s = tryParseJSON(uploadFile.settings.obj.val());
                    if (!s) s = {};
                    return s;
                },
                reset: function() {
                    if (takeVideo && uploadFile.input.data('inf-loop') == 'true') {
                        uploadFile.settings.obj.html(JSON.stringify({
                            'videoInfLoop': 'on'
                        }));
                    } else {
                        if (uploadFile.settings.obj.length === 0) return;
                        uploadFile.settings.obj.html(JSON.stringify({}));
                    }
                }
            },
            style: {
                type: style,
                getPreviewImage: getPreviewImage
            },
            $iframe: $(window.frameElement),
            methods: {
                rebuild: function() {
                    var id = uploadFile.id;
                    uploadFile.input.detach();
                    uploadFile.$originalEl.data('value', uploadFile.input.val());
                    uploadFile.el.replaceWith(uploadFile.$originalEl);
                    _.renderUploadFile(uploadFile.$originalEl);
                    topWindow.uploadFiles[id].input.replaceWith(uploadFile.input);
                    topWindow.uploadFiles[id].input = uploadFile.input;
                    ColorboxInitialTopWindow('#' + id + '_preview[data-rel="colorbox-t-w"], #' + id + '_previewStatic[data-rel="colorbox-t-w"]');
                },
                addFrameClass: function() {
                    topWindow.uploadFiles[id].$iframe.addClass('upload-file-processing');
                },
                removeFrameClass: function() {
                    topWindow.uploadFiles[id].$iframe.removeClass('upload-file-processing');
                }
            }
        };
        uploadFile.btns.groupEditTools.on('click.fix_drop_down_position', function(event) {
            var $groupEditTools = $(this);
            var $parent = $groupEditTools.closest('.file-options-container');
            var $dropwDown = $groupEditTools.find('.dropdown-menu');
            var minWidth = $groupEditTools.outerWidth(true);
            $groupEditTools.siblings(':visible').each(function(index, sibling) {
                var $sibling = $(sibling);
                if ($parent.children().index($sibling) >= $parent.children().index($groupEditTools)) return false;
                minWidth += $sibling.outerWidth(true);
            });
            $dropwDown.css({
                minWidth: (minWidth + parseInt($dropwDown.css('border-width'))) + 'px'
            });
        });
        if (!topWindow.uploadFiles) topWindow.uploadFiles = new Array();
        topWindow.uploadFiles[id] = uploadFile;
        var displayTimeOut = 2;
        var $optionsContainer = topWindow.uploadFiles[id].optionsContainer;
        var $showOptions = topWindow.uploadFiles[id].btns.showOptions;
        if (topWindow.uploadFiles[id].kind.kind == 1.1) {
            $showOptions.find('span').html(translations.chooseIcon);
        } else if (topWindow.uploadFiles[id].kind.kind == 9 || topWindow.uploadFiles[id].kind.kind == 4) {
            $showOptions.find('span').html(translations.chooseFile);
        } else if (topWindow.uploadFiles[id].kind.kind == 3) {
            $showOptions.find('span').html(translations.chooseAudio);
        } else if (topWindow.uploadFiles[id].kind.kind == 2) {
            $showOptions.find('span').html(translations.chooseVideo);
        }
        if (placeHolder != '') {
            $showOptions.find('span').html(placeHolder);
        }
        var mouseOverbtn = false;
        var mouseOverDiv = false;

        function closeOptionContainer() {
            if (mouseOverbtn || mouseOverDiv) return;
            clearTimeout(displayTimeOut);
            displayTimeOut = setTimeout(function() {
                $optionsContainer.removeClass('opened');
                $showOptions.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }, 200);
        }

        function showOptionContainer() {
            clearTimeout(displayTimeOut);
            $optionsContainer.addClass('opened');
            $showOptions.find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
        $showOptions.on('click', function() {
            $showOptions.addClass('ignore-mouse-move-event');
            if ($optionsContainer.is(':visible')) {
                $optionsContainer.removeClass('opened');
                $showOptions.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else {
                $optionsContainer.addClass('opened');
                $showOptions.find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
        });
        $optionsContainer.on('click', function() {
            $optionsContainer.removeClass('opened');
            $showOptions.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        });
        $showOptions.mouseover(function() {
                mouseOverbtn = true;
                clearTimeout(displayTimeOut);
            })
            .mouseleave(function() {
                mouseOverbtn = false;
                closeOptionContainer();
            });
        $optionsContainer.mouseover(function() {
                mouseOverDiv = true;
                clearTimeout(displayTimeOut);
                showOptionContainer();
            })
            .mouseleave(function() {
                mouseOverDiv = false;
                closeOptionContainer();
            });
        topWindow.uploadFiles[id].btns.imageFocusPoint.on('click', function(event) {
            event.preventDefault();
            var mediaPath = topWindow.uploadFiles[id].input.val();
            var reloadPreview = false;
            if (topWindow.systemKindNUM == 2 && id == 'mainImage') {
                mediaPath = getImageWRV1('normal', mediaPath, true);
            }
            if (openModalPlace == 'topWindow') {
                topWindow.imageFocusPoint_OpenModal(websiteID, mediaPath, UploadFile_GetFileType(mediaPath), topWindow.uploadFiles[id].settings.get().focusPoint, imageFocusPointPreview, imageFocusPointVersion, function(focusPoint) {
                    topWindow.uploadFiles[id].settings.set('focusPoint', focusPoint, reloadPreview);
                });
            } else {
                if (isWizardPage()) {
                    reloadPreview = id.indexOf(Wizard.homePageChangingImages.namesapace) != -1 && $('#parallax_homepage_image').is(':checked');
                }
                topWindow.imageFocusPoint_OpenModal(websiteID, mediaPath, UploadFile_GetFileType(mediaPath), topWindow.uploadFiles[id].settings.get().focusPoint, imageFocusPointPreview, imageFocusPointVersion, function(focusPoint) {
                    topWindow.uploadFiles[id].settings.set('focusPoint', focusPoint, reloadPreview);
                });
            }
        });
        topWindow.uploadFiles[id].btns.magicBtn.on('click', function(event) {
            event.preventDefault();
            var mediaPath = topWindow.uploadFiles[id].input.val();
            var reloadPreview = false;
            topWindow.imageMagicBtn_OpenModal(websiteID, mediaPath, UploadFile_GetFileType(mediaPath), topWindow.uploadFiles[id].id);
        });
        if (id.indexOf('home') >= 0 || id.indexOf('logo') >= 0) $optionsContainer.css(margin, '-2px');
        $optionsContainer.css({
            'margin-top': '-1px',
            'position': 'absolute'
        });
        $showOptions.css({
            'border-radius': '0px'
        });
        if (id.indexOf('topAction_buttonText') >= 0 || id.indexOf('home_buttonText') >= 0 || id.indexOf('cE_PageIcon') >= 0) {
            topWindow.uploadFiles[id].btns.icons.css({
                'width': '100px',
                'border-radius': '0px'
            });
            topWindow.uploadFiles[id].btns.previewIcon.css({
                'border-radius': '0px'
            });
            topWindow.uploadFiles[id].btns.remove.css({
                'border-radius': '0px'
            });
            topWindow.uploadFiles[id].btns.previewIcon.find('i').css({
                'margin': '0'
            })
        }
        $('#' + id + '_uploadFileContaner').mousedown(function() {
            if (typeof scrollToPointInPreview == 'function' && scrollPreview != '') {
                window.scrollPreview = scrollPreview;
                scrollToPointInPreview();
            }
        });
        topWindow.uploadFiles[id].input.on('change', function() {
            topWindow.uploadFiles[id].settings.reset();
            topWindow.uploadFiles[id].input.valid();
        });
        if (fileURL != '') {
            value = getIconFullPath(fileURL);
            if (value.indexOf('site123-image-icon') != -1) {
                UpdateImagePreview(id, {
                    icon: value
                });
            } else {
                if (value.indexOf('.svg') != -1) {
                    UpdateImagePreview(id, {
                        normal: value,
                        tiny: value
                    });
                } else {
                    UpdateImagePreview(id, {
                        normal: value,
                        tiny: getPreviewImage(value, 'normal'),
                        patterns: uploadFile.settings.get().type == 'patterns'
                    });
                }
            }
        }
        (function() {
            $('#' + id + '_uploadFileContaner').on('dragover drop', function(event) {
                event.preventDefault();
                if (uploadFile.btns.upload.hasClass('drop-file-handler')) return;
                if (uploadFile.progressbar.$pb.is(':visible')) return;
                uploadFile.btns.upload.addClass('drop-file-handler').appendTo(this);
                uploadFile.btns.upload.on('dragleave.dfh drop.dfh', function(event) {
                    reset();
                    uploadFile.btns.upload.off('dragleave.dfh drop.dfh');
                });
                $(document).off('mousedown.' + id).on('mousedown.' + id, function(event) {
                    reset();
                    $(document).off('mousedown.' + id);
                    uploadFile.btns.upload.off('dragleave.dfh drop.dfh');
                });
            });

            function reset() {
                uploadFile.btns.upload.removeClass('drop-file-handler').appendTo($('#' + id + '_uploadFileBox'));
            }
        })();
        if (bigFilesUploadActive) {
            uploadcare: Uploadcare.init({
                btnSelector: '#' + id + '_uploadFile'
            });
        }
        else {
            UploadSingleFile(id, websiteID, pathType, mb, fileKind, minWidth, minHeight);
        }
        if (isPreviewImageOpenEditor && (filter || cropTool) && !(value.indexOf('.svg') != -1)) {
            $('a[data-headers-modules="true"]').off('click').on('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).closest('.fileUploadBox').find('[id$="_groupEditTools"] [id$="_imageEditor"]').trigger('click');
            });
        }

        function getOptionOrder(optionName) {
            var index = dropDownOrder.indexOf(optionName);
            return index != -1 ? 'order:' + index + ';' : '';
        }

        function getPreviewImage(value, currentSize) {
            if (UploadFile_GetFileType(value) === 'video') {
                var ext = value.split('.').pop();
                value = value.replace('.' + ext, '-thumbnail.jpg');
            }
            if (value.indexOf('site123-image-icon') != -1) return '';
            if (style == 'image-center') return getImageWRV1(400, value.replace(currentSize + '_', 'normal_'));
            return getImageWRV1(100, value);
        }

        function uniqid(prefix, more_entropy) {
            if (typeof prefix === 'undefined') {
                prefix = '';
            }
            var retId;
            var formatSeed = function(seed, reqWidth) {
                seed = parseInt(seed, 10)
                    .toString(16); // to hex str
                if (reqWidth < seed.length) { // so long we split
                    return seed.slice(seed.length - reqWidth);
                }
                if (reqWidth > seed.length) { // so short we pad
                    return Array(1 + (reqWidth - seed.length))
                        .join('0') + seed;
                }
                return seed;
            };
            if (!window.php_js) {
                window.php_js = {};
            }
            if (!window.php_js.uniqidSeed) { // init seed with big random int
                window.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
            }
            window.php_js.uniqidSeed++;
            retId = prefix; // start with prefix, add current milliseconds hex string
            retId += formatSeed(parseInt(new Date()
                .getTime() / 1000, 10), 8);
            retId += formatSeed(window.php_js.uniqidSeed, 5); // add seed hex string
            if (more_entropy) {
                retId += (Math.random() * 10)
                    .toFixed(8)
                    .toString();
            }
            return retId;
        }

        function GetBigFilesUploadLimitByPackage(packageNUM) {
            switch (OpenPremiumFeatures(packageNUM)) {
                case 2:
                    return 500; // 500MB
                    break;
                case 3:
                    return 1024; // 1GB
                    break;
                case 4:
                    return 2048; // 2GB
                    break;
                case 5:
                    return 3072; // 3GB
                    break;
                case 6:
                    return 5120; // 5GB
                    break;
                default:
                    return 100; // 100MB
            }
        }
    };
    return _;
}();

function ColorPickerInitialize(container, isInPreviewIframe) {
    var context = container ? $(container) : $('.colorPalette');
    context.each(function() {
        var $this = $(this);
        var id = $this.attr('id');
        var value = $this.data('value');
        var text = $this.data('text');
        var hideText = $this.data('hide-text');
        var tooltip = $this.data('tooltip');
        var required = $this.data('required');
        var customClass = $this.data('custom-class') ? $this.data('custom-class') : '';
        var allowEmpty = $this.data('allow-empty') ? $this.data('allow-empty') : false;
        var useOriginalInput = $this.data('use-original') ? $this.data('use-original') : false;
        var notFormInput = $this.data('not-form-input') ? $this.data('not-form-input') : false;
        var customEditorInput = $this.data('custom-editor-input') ? $this.data('custom-editor-input') : false;
        var controlElement = $this.data('control-element') ? $this.data('control-element') : false;
        var validator = 'data-rule-color-pattern="true"' + (required ? ' required data-msg-required="' + translations.fieldRequired + '"' : '');
        var html = '';
        html += '<div class="row color-palette" data-rel="' + id + '">';
        html += '<div class="col-xs-12">';
        html += '<div class="form-group">';
        if (!hideText) {
            html += '<label for="' + id + '">' + text + '</label>';
            if (tooltip) {
                html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title="' + tooltip + '"><i class="fa fa-question-circle"></i></a>';
            }
            html += '<br>';
        }
        html += '<input type="text" class="form-control ' + customClass + ' spectrumField" ' + (notFormInput ? '' : 'name="' + id + '"') + ' id="' + id + '" value="' + value + '" spellcheck="false" style="direction:ltr;width:90px;" ' + validator + '>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        var $html = $(html);
        if (useOriginalInput) {
            $html.find('input#' + id).replaceWith($('input#' + id));
        }
        $this.replaceWith($html);
        var palette = [
            ['#333333', '#ffffff', '#f05f40', '#0088cc', '#169fe6'],
            ['#7cb600', '#fa5b0f', '#495d7f', '#ffb400', '#fcab55'],
            ['#bfa980', '#6957af', '#c62020', '#c71c77', '#74aea1'],
            ['#784e3d', '#911938', '#707070', '#404040', '#37b6bd'],
            ['#b3c211', '#3b6e40']
        ];
        if (customEditorInput == 'cardpageColor' || customEditorInput == 'resumeColor') {
            palette.forEach((element, index) => {
                palette[index] = element.filter(color => color != '#ffffff');
            });
        }
        if (id === 'global_main_color') palette[0].splice(1, 1);
        var $input = isInPreviewIframe ? $('#websitePreviewIframe').contents().find('#' + id) : $('#' + id);
        var $controlElement = controlElement ? $(controlElement) : false;
        var settings = {
            color: value,
            showPalette: true, // Show the Palette
            showPaletteOnly: false, // Don't show only the Palette
            togglePaletteOnly: false, // Don't show the "less" & "more" buttons
            hideAfterPaletteSelect: true,
            allowEmpty: allowEmpty,
            showInput: true,
            clickoutFiresChange: true,
            showSelectionPalette: true,
            maxSelectionSize: 5,
            localStorageKey: 'site123.basic',
            preferredFormat: 'hex',
            togglePaletteMoreText: translations.spectrumMore,
            togglePaletteLessText: translations.spectrumLess,
            chooseText: translations.spectrumChoose,
            cancelText: translations.spectrumCancel,
            palette: palette,
            change: function(color) {
                if ($input.get(0).id === 'global_main_color') {
                    if ($input.val() === '#ffffff') {
                        $input.spectrum('set', '#4a90e2');
                        bootbox.alert({
                            message: translations.mainColorWhiteAlert
                        });
                    }
                }
                $(document).trigger('color_palette_change', [$input.get(0).id]);
            },
            show: function(color) {
                $(document)
                    .off('mousedown.site123.spectrum')
                    .one('mousedown.site123.spectrum', function(e) {
                        if (!$(e.target).closest(".sp-container").length && !$(e.target).closest("#global_main_color").length) {
                            $input.spectrum('hide');
                        }
                    });
                if (isWizardPage() && Wizard.Preview.ready) {
                    $(Wizard.Preview.window.document)
                        .off('mousedown.site123.spectrum')
                        .one('mousedown.site123.spectrum', function(event) {
                            if (!$(event.target).closest('.sp-container').length) {
                                $input.spectrum('hide');
                            }
                        });
                }
            }
        };
        if (controlElement == '#restMainColorsBtn' && $controlElement) {
            $controlElement.on('click', function() {
                let copyMainColorValue = $('#global_main_color_copy').val();
                $('#modules_color_section_main').val(copyMainColorValue).trigger('change');
                $('#modules_color_second_section_main').val(copyMainColorValue).trigger('change');
                $('#inside_modules_color_section_box_main').val(copyMainColorValue).trigger('change');
            });
        }
        if (controlElement == '#restMainButtonColorsBtn' && $controlElement) {
            $controlElement.on('click', function() {
                let $global_main_color_btn_text_color = $('#global_main_color_btn_text_color').val();
                $('#modules_color_section_btn_text').val($global_main_color_btn_text_color).trigger('change');
                $('#modules_color_second_section_btn_text').val($global_main_color_btn_text_color).trigger('change');
                $('#inside_modules_color_section_btn_text').val($global_main_color_btn_text_color).trigger('change');
            });
        }
        if (isInPreviewIframe) {
            settings.appendTo = $('#websitePreviewIframe').contents().find('body');
        }
        $input.spectrum(settings);
        $input.on("dragstop.spectrum", function(e, color) {
            $input.spectrum("set", color).trigger('change');
        });
        $input.on('change', function(event, flag) {
            var $input = $(this);
            var newColor = $input.val();
            var id = $input.get(0).id;
            if (isWizardPage() && $input.attr('name')) {
                if (id == 'global_main_color_copy') {
                    if ($('#menu_color').val() == $('#global_main_color').val()) {
                        $('#menu_color').val(newColor).trigger('change');
                    }
                    if ($('#menu_thin_border').val() == $('#global_main_color').val()) {
                        $('#menu_thin_border').val(newColor).trigger('change');
                    }
                    $('#global_main_color').val(newColor);
                    Wizard.render.init('global_main_color');
                    if (isWizardPage() && Wizard.Preview.ready) {
                        Wizard.Preview.window.document.documentElement.style.setProperty('--footer_text_hover', newColor);
                        Wizard.Preview.window.document.documentElement.style.setProperty('--footer_links_color', newColor);
                    }
                }
                if (id != 'global_main_color' || (id == 'global_main_color' && $('.site-editor-b,.new-colors-tab').length == 0)) {
                    Wizard.render.init(id);
                    AutoSaveWizard(false, true);
                } else if (id == 'global_main_color') {
                    $('#global_main_color_copy').val(newColor);
                    Wizard.render.init('global_main_color_copy');
                }
            }
            $(document).trigger('color_picker_change', [id, newColor, flag == 'UndoRedoChange']);
        });
        InitializeToolTips();
        if (controlElement == '#restMainColorsBtn' && $controlElement) {
            $input.parent().append($controlElement);
        }
        if (controlElement == '#restMainButtonColorsBtn' && $controlElement) {
            $input.parent().append($controlElement);
        }
    });
    $('.gradientsPalette').each(function() {
        var $this = $(this);
        var id = $this.attr('id');
        var value = $this.data('value');
        var text = $this.data('text');
        var hideText = $this.data('hide-text');
        var tooltip = $this.data('tooltip');
        var customClass = $this.data('custom-class');
        if (!customClass) customClass = '';
        var html = '';
        html += '<div data-id="' + id + '" class="row g-p">';
        html += '<div class="col-xs-12">';
        html += '<div class="form-group">';
        if (!hideText) {
            html += '<label for="' + id + '">' + text + '</label>';
            if (tooltip) {
                html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title="' + tooltip + '"><i class="fa fa-question-circle"></i></a>';
            }
            html += '<br>';
        }
        html += '<div class="sp-replacer sp-light sp-active gradients-palette-btn">';
        html += '<div class="sp-preview">';
        html += '<div class="sp-preview-inner sp-clear-display" style="background: ' + value + '"></div>';
        html += '</div>';
        html += '<div class="sp-dd">&#9660;</div>';
        html += '</div>';
        html += '<div class="gradients-palette-container ' + customClass + '">';
        html += '<div class="gradients-palette-tool"></div>';
        html += '<div class="gradients-palette-buttons">';
        html += '<a class="gradients-palette-btn-cancel" href="#">' + translations.Cancel + '</a>';
        html += '<button type="button" class="gradients-palette-btn-choose">' + translations.spectrumChoose + '</button>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        var $html = $(html);
        var $gradientsPaletteContainer = $html.find('.gradients-palette-container');
        $this.replaceWith($html);
        var gpickr = new GPickr({
            el: '.gradients-palette-container .gradients-palette-tool',
        });
        if (id == 'homepageGradientsColors') {
            var $settings = $('#homepageGradientsSettings');
        } else {
            var $settings = $('#promoGradientsSettings');
        }
        gpickr.on('init', function() {
            $(document).trigger('gradients_palette_change', JSON.parse($settings.val()));
        });
        $html.find('.gradients-palette-btn').off('click').on('click', function() {
            if ($gradientsPaletteContainer.is(':visible')) {
                $gradientsPaletteContainer.hide();
                $(document).off('click.gradients_palette_popup');
            } else {
                $gradientsPaletteContainer.show();
                $(document).off('click.gradients_palette_popup').on('click.gradients_palette_popup', function(event) {
                    if ($(event.target).closest('.gradients-palette-container').length == 0 && $(event.target).closest('.gradients-palette-btn').length == 0) {
                        $(document).off('click.gradients_palette_popup');
                        $gradientsPaletteContainer.hide();
                    }
                });
            }
        });
        $html.find('.gradients-palette-btn-cancel').off('click').on('click', function() {
            $gradientsPaletteContainer.hide();
        });
        $html.find('.gradients-palette-btn-choose').off('click').on('click', function() {
            var gradient = gpickr.getGradient();
            var settings = {
                linearAngle: gpickr.getLinearAngle(),
                stops: gpickr.getStops()
            }
            $settings.val(JSON.stringify(settings)).trigger('change');
            $html.find('.sp-preview-inner').css('background', gradient);
            if (id == 'homepageGradientsColors') {
                $('#' + Wizard.homePageChangingImages.fistInputID).val('').trigger('change');
                $('#homepageGradientsColors').val(gradient).trigger('change.reset_bg_color');
                $('#homepage_style').val('3').trigger('change.set_homepage_style');
                window.reloadPreviewCSS = ReloadPreviewCSS;
                AutoSaveWizard(false, true);
            } else if (id == 'back_gradients') {
                $('#back_color').val('').trigger('change');
                $('#back_color').spectrum("set", $('#back_color').val()).trigger('change');
                $('#homepageGradientsColors').val(gradient).trigger('change');
                $html.find('.sp-preview-inner').css('background', gradient);
            }
            $gradientsPaletteContainer.hide();
        });
        $(document).on('gradients_palette_change', function(event, obj) {
            var gradientsStops = gpickr.getStops();
            $.each(gradientsStops, function(index, stop) {
                gpickr.removeStop(stop.location);
            });
            $.each(obj.stops, function(index, stop) {
                gpickr.addStop(stop.color, stop.location);
            });
            gpickr.setLinearAngle(parseInt(obj.linearAngle));
        });
        InitializeToolTips();
    });
    $('.sliderInput').each(function() {
        SliderInputInitialize($(this));
    });
    $('.numberInput').each(function() {
        var $this = $(this);
        var id = $this.attr('id');
        var value = $this.data('value');
        var text = $this.data('text');
        var tooltip = $this.data('tooltip');
        var customClass = $this.data('custom-class');
        var scrollPreview = $this.data('scroll-preview');
        var label = $this.data('label');
        if (!customClass) customClass = 'inputChangeReload';
        if (!scrollPreview) scrollPreview = '';
        var html = '';
        if (label) html += '<label for="' + id + '">' + text + '</label>';
        if (tooltip && tooltip.length > 0) {
            html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title="' + tooltip + '"><i class="fa fa-question-circle"></i></a>';
        }
        html += '<input type="number" placeholder="' + text + '" class="form-control ' + customClass + '" name="' + id + '" id="' + id + '" value="' + value + '" data-scroll-preview="' + scrollPreview + '">';
        $this.replaceWith(html);
    });
    $(document).trigger('ColorPickerInitialize');
}

function SliderInputInitialize($input) {
    var id = $input.attr('id');
    var value = $input.data('value');
    var text = $input.data('text');
    var tooltip = $input.data('tooltip');
    var customClass = $input.data('custom-class');
    var maxVal = $input.data('max');
    var minVal = $input.data('min');
    var numberKind = $input.data('number-kind');
    var design = $input.data('design') ? $input.data('design') : 'oneLine';
    var notFormInput = $input.data('not-form-input') ? $input.data('not-form-input') : false;
    var customHtml = $input.data('custom-html') ? $input.data('custom-html') : false;
    if (!customClass) customClass = 'inputChangeLive';
    var html = '';
    html += '<div class="form-group s123-slider" data-design="' + design + '">';
    if (design == 'oneLine') {
        html += '<div class="row" style="display:flex;align-items:center;">';
        html += '<div class="col-xs-4 slider-title" style="display: flex;">';
        html += '<label for="' + id + '" style="font-size: 11px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">' + text + '</label>';
        if (tooltip && tooltip.length > 0) {
            html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title data-original-title="' + tooltip + '"><i class="fa fa-question-circle"></i></a>';
        }
        if (customHtml) {
            html += customHtml;
        }
        html += '</div>';
        html += '<div class="col-xs-6 slider-tool">';
        html += '<span id="' + id + '_slider" class="ui-sliders ui-slider-simple"></span>';
        html += '</div>';
        html += '<div class="col-xs-2 slider-value">';
        html += '<div id="' + id + '_view" class="label label-info">';
        html += '<input type="text" value="' + value + '" class="slider-input-value">';
        html += '</div>';
        html += '<input type="text" class="form-control hidden ' + customClass + '" id="' + id + '" ' + (notFormInput ? '' : 'name="' + id + '"') + ' value="' + value + '" placeholder="Place Holder Test" data-scroll-preview="#page-top">';
        html += '</div>';
        html += '</div>';
    }
    if (design == 'twoLines') {
        html += '<div class="row">';
        html += '<div class="col-xs-12 slider-title" style="display: flex;">';
        html += '<label for="' + id + '" style="font-size: 15px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">' + text + '</label>';
        if (tooltip && tooltip.length > 0) {
            html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title data-original-title="' + tooltip + '"><i class="fa fa-question-circle"></i></a>';
        }
        if (customHtml) {
            html += customHtml;
        }
        html += '</div>';
        html += '</div>';
        html += '<div class="row" style="display:flex;align-items:center;">';
        html += '<div class="col-xs-9 slider-tool">';
        html += '<span id="' + id + '_slider" class="ui-sliders ui-slider-simple"></span>';
        html += '</div>';
        html += '<div class="col-xs-3 slider-value">';
        html += '<div id="' + id + '_view" class="label label-info">';
        html += '<input type="text" value="' + value + '" class="slider-input-value">';
        html += '</div>';
        html += '<input type="text" class="form-control hidden ' + customClass + '" id="' + id + '" ' + (notFormInput ? '' : 'name="' + id + '"') + ' value="' + value + '" placeholder="Place Holder Test" data-scroll-preview="#page-top">';
        html += '</div>';
        html += '</div>';
    }
    html += '</div>';
    var $html = $(html);
    $input.replaceWith($html);
    $html.find('#' + id).on('change', function() {
        var $input = $(this);
        var id = $input.attr('id');
        var val = $input.val();
        if (val == '') {
            val = 0;
        }
        $html.find('#' + id + '_slider').slider('value', val);
        $html.find('#' + id + '_view .slider-input-value').val(val);
    });
    $html.find('#' + id + '_view .slider-input-value').on('input', function(event, updateImidiatelly) {
        var $this = $(this);
        switch (numberKind) {
            case 1:
                if (minVal < 0) {
                    $this.val($this.val().replace(/(?!^-)[^0-9]/g, ""));
                } else {
                    $this.val($this.val().replace(/[^0-9]/g, ""));
                }
                break;
            default:
                $this.val($this.val().replace(/[^0-9.]/g, ""));
                break;
        }
        clearTimeout(this.finishedTyping);
        if (updateImidiatelly) {
            handleSliderValueUpdate();
        } else {
            this.finishedTyping = setTimeout(function() {
                handleSliderValueUpdate();
            }, 500);
        }

        function handleSliderValueUpdate() {
            if (!$.isNumeric($this.val())) return;
            if ($.isNumeric($this.val()) && parseFloat($this.val()) > maxVal) $this.val(maxVal);
            if ($.isNumeric($this.val()) && parseFloat($this.val()) < minVal) $this.val(minVal);
            $html.find('#' + id).val($this.val()).trigger('change');
            if (isWizardPage()) {
                AutoSaveWizard(false, true);
            }
        }
    }).on('blur', function() {
        if (!$.isNumeric($(this).val())) $(this).val($html.find('#' + id).val());
    });
    var $input = $html.find('#' + id + '_slider');
    switch (numberKind) {
        case 1:
            var step = 1;
            break;
        case 2:
            var step = 0.1;
            break;
        case 3:
            var step = 0.01;
            break;
        case 4:
            var step = 0.5;
            break;
        case 5:
            var step = 100;
            break;
        case 6:
            var step = 0.05;
            break;
    }
    if (!topWindow.sliderInputs) {
        topWindow.sliderInputs = {};
    }
    topWindow.sliderInputs[id] = {
        id: id,
        $html: $html,
        $input: $input,
        slider: {
            value: value,
            range: "min",
            animate: true,
            max: maxVal,
            min: minVal,
            step: step,
            change: function(event, ui) {},
            start: function(event, ui) {
                $html.find('#' + id).trigger('sliderInput.start');
            },
            stop: function(event, ui) {
                $html.find('#' + id).val(ui.value).trigger('sliderInput.stop');
                if (isWizardPage() && $html.find('#' + id).attr('name')) {
                    AutoSaveWizard(false, true);
                }
            },
            slide: function(event, ui) {
                $html.find('#' + id + '_view .slider-input-value').val(ui.value);
                $html.find('#' + id + '').val(ui.value).trigger('input');
            }
        },
        destroy: function() {
            this.$input.slider('destroy');
            this.$html.remove();
            delete topWindow.sliderInputs[this.id];
        }
    };
    $input.css({
            width: '100%',
            'float': 'left',
            margin: '0px'
        })
        .slider(topWindow.sliderInputs[id].slider);
}

function ModulesItemsHandler(settings) {
    var mih = this;
    this.websiteID = settings.websiteID;
    this.moduleID = settings.moduleID;
    this.moduleTypeNUM = settings.moduleTypeNUM;
    this.itemSelector = settings.itemSelector;
    this.noItemsMessage = settings.noItemsSelector ? $(settings.noItemsSelector) : '';
    this.$sortable = settings.sortable ? $(settings.sortable.selector) : '';
    this.buttons = settings.buttons;
    this.enableMultiSelect = typeof settings.enableMultiSelect != 'undefined' ? settings.enableMultiSelect : true;
    if (this.noItemsMessage.length > 0) {
        if ($(this.itemSelector).length == 0) {
            this.noItemsMessage.show();
            $(this.itemSelector).closest('table').hide();
        }
    }
    if (settings.itemsClick) {
        var $items = $(this.itemSelector).find(settings.itemsClick.selector);
        $items.css({
            cursor: 'pointer'
        });
        $items.off('click').click(function(event) {
            settings.itemsClick.callback.call(this, event);
        });
    }
    if (this.$sortable.length > 0) {
        if (window.location.search.indexOf('q=') !== -1) {
            $('.mis-btn-drag').hide();
        } else {
            this.$sortable.sortable({
                opacity: 0.8,
                revert: true,
                delay: 100,
                forceHelperSize: true,
                placeholder: 'draggable-placeholder',
                forcePlaceholderSize: true,
                tolerance: 'pointer',
                handle: '.mis-btn-drag',
                cancel: '',
                helper: function(event, item) {
                    return '<div style="display:none;">&nbsp;</div>';
                },
                update: function(event, ui) {
                    AjaxQueueManager.add({
                        url: '/versions/' + versionNUM + '/wizard/modules/updatePlace.php',
                        data: {
                            w: mih.websiteID,
                            moduleID: mih.moduleID,
                            moduleTypeNUM: mih.moduleTypeNUM,
                            id: ui.item.data('id'),
                            prevId: ui.item.prev().data('id')
                        },
                        done: function(data) {
                            gritter_update();
                            AjaxQueueManager.start('callback');
                        }
                    });
                    if (AjaxQueueManager.ready) AjaxQueueManager.start('init');
                }
            });
        }
    }
    if (!this.buttons) return;
    if (this.buttons.delete && !this.buttons.moreOptions) {
        buttons_delete_init();
    }
    if (this.buttons.moreOptions) {
        buttons_visible_status_init();
        $('.s123-more-option-btn').off('click').click(function(event) {
            var $itemMoreOptionBtn = $(this);
            var $itemMoreOptionMenu = $itemMoreOptionBtn.parent().find($('.item-more-option-menu')).clone();
            $itemMoreOptionBtn.popover({
                container: 'body',
                content: $itemMoreOptionMenu,
                html: true,
                trigger: 'manual',
                template: '<div class="popover mih-dropdown-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
                placement: intrface_align
            });
            $itemMoreOptionBtn.on('shown.bs.popover', function() {
                more_options_buttons_init($itemMoreOptionBtn, $itemMoreOptionMenu);
                $(document).on('mousedown.mih.popover', function(event) {
                    if ($(event.target).closest('.popover.mih-dropdown-popover').length === 0) {
                        destroyPopover();
                    }
                });
                $(window).one('blur.mih.popover', function(event) {
                    destroyPopover();
                });
                $itemMoreOptionBtn.scrollParent().one('scroll.mih.popover', function(event) {
                    destroyPopover();
                });
            });

            function destroyPopover() {
                if ($('.popover.confirmation.in').length !== 0) return;
                $itemMoreOptionBtn.popover('destroy');
                $(document).off('mousedown.mih.popover');
                $(window).off('blur.mih.popover');
                $(window).off('scroll.mih.popover');
            }
            $itemMoreOptionBtn.popover('show');
        });

        function more_options_buttons_init($itemMoreOptionBtn, $itemMoreOptionMenu) {
            buttons_edit_init($itemMoreOptionBtn, $itemMoreOptionMenu);
            buttons_duplicate_init($itemMoreOptionBtn, $itemMoreOptionMenu);
            buttons_visible_init($itemMoreOptionBtn, $itemMoreOptionMenu);
            buttons_delete_init($itemMoreOptionBtn, $itemMoreOptionMenu);

            function buttons_edit_init($itemMoreOptionBtn, $itemMoreOptionMenu) {
                if (!mih.buttons.moreOptions.buttons.edit) return;
                $itemMoreOptionMenu.find(mih.buttons.moreOptions.buttons.edit.selector).on('click', function(event) {
                    settings.itemsClick.callback.call($itemMoreOptionBtn, event);
                });
            }

            function buttons_duplicate_init($itemMoreOptionBtn, $itemMoreOptionMenu) {
                if (!mih.buttons.moreOptions.buttons.duplicate) return;
                $itemMoreOptionMenu.find(mih.buttons.moreOptions.buttons.duplicate.selector).on('click', function() {
                    $itemMoreOptionBtn.popover('destroy');
                    if (mih.buttons.moreOptions.buttons.duplicate.callback) {
                        mih.buttons.moreOptions.buttons.duplicate.callback.call(this, $(this));
                    } else {
                        DuplicateModuleItem({
                            websiteID: mih.websiteID,
                            uniqueID: $(this).data('unique-id'),
                            moduleID: mih.moduleID
                        });
                    }
                });
            }

            function buttons_visible_init($itemMoreOptionBtn, $itemMoreOptionMenu) {
                if (!mih.buttons.moreOptions.buttons.visible) return;
                var buttonSelector = mih.buttons.moreOptions.buttons.visible.selector;
                $itemMoreOptionMenu.find(buttonSelector).on('click', function(event) {
                    $itemMoreOptionBtn.popover('destroy');
                    var $item = $itemMoreOptionBtn.closest(settings.itemSelector);
                    var hidden = $item.data('hidden') == 1 ? 0 : 1;
                    $.ajax({
                        type: "POST",
                        url: "/versions/" + versionNUM + "/wizard/modules/itemsVisibilityAjax.php",
                        data: {
                            w: mih.websiteID,
                            id: $item.data('id'),
                            moduleID: mih.moduleID,
                            moduleTypeNUM: mih.moduleTypeNUM,
                            hidden: hidden
                        },
                        success: function(data) {
                            data = tryParseJSON(data);
                            if (data.success) {
                                $item.data('hidden', hidden);
                                $item.attr('data-hidden', hidden);
                                if (hidden == 0) {
                                    $item.find('.visibility-text').html('');
                                    $item.find(buttonSelector).empty();
                                    $item.find(buttonSelector).append(translations.invisible);
                                } else {
                                    $item.find('.visibility-text').html(translations.invisible);
                                    $item.find(buttonSelector).empty();
                                    $item.find(buttonSelector).append(translations.visible);
                                }
                                if (mih.buttons.moreOptions.buttons.visible.callback) mih.buttons.moreOptions.buttons.visible.callback.call(this, $item);
                            }
                        }
                    });
                });
            }
        }

        function buttons_visible_status_init() {
            if (!mih.buttons.moreOptions.buttons.visible) return;
            var buttonSelector = mih.buttons.moreOptions.buttons.visible.selector;
            $.each($(mih.itemSelector), function(index, item) {
                var $item = $(this);
                if ($item.find('.message-status').length > 0) return;
                if ($item.data('hidden') == 1) {
                    $item.find('td.edit-item-btn').append('<span class="s123-items-title-label visibility-text label label-warning message-status">' + translations.invisible + '</span>');
                    $item.find(buttonSelector).empty();
                    $item.find(buttonSelector).append(translations.visible);
                } else {
                    $item.find('td.edit-item-btn').append('<span class="s123-items-title-label visibility-text label label-warning message-status"></span>');
                    $item.find(buttonSelector).empty();
                    $item.find(buttonSelector).append(translations.invisible);
                }
            });
        }
    }

    function buttons_delete_init($itemMoreOptionBtn, $itemMoreOptionMenu) {
        if (!mih.buttons.delete) return;
        var $delete_btn = $itemMoreOptionMenu ? $itemMoreOptionMenu.find(mih.buttons.delete.selector) : $(mih.buttons.delete.selector);
        if (ace.vars['touch']) {
            $delete_btn.click(function(event) {
                var $this = $(this);
                if ($delete_btn.data('disabled')) {
                    return;
                } else {
                    $delete_btn.data('disabled', true);
                }
                if ($itemMoreOptionBtn) $itemMoreOptionBtn.popover('destroy');
                bootbox.confirm({
                    message: '<h4>' + translations.areYouSure + '</h4>',
                    className: 'mih-buttons-delete-bootbox',
                    buttons: {
                        confirm: {
                            label: translations.yes,
                            className: 'btn-danger'
                        },
                        cancel: {
                            label: translations.no,
                            className: 'btn-default'
                        }
                    },
                    callback: function(confirmed) {
                        if (confirmed) {
                            deleteItem($this);
                        }
                        $delete_btn.data('disabled', false);
                    }
                });
            });
        } else {
            $delete_btn.confirmation({
                placement: intrface_align,
                title: translations.areYouSure,
                btnOkLabel: '<i class="icon-ok-sign icon-white"></i> ' + translations.yes,
                btnCancelLabel: '<i class="icon-remove-sign"></i> ' + translations.no,
                popout: true,
                singleton: true,
                container: 'body',
                btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
                btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
                onConfirm: function() {
                    deleteItem($(this));
                }
            });
            $delete_btn.on('hide.bs.confirmation', function(event) {
                $('.backdropManaul').remove();
            });
            $delete_btn.one('shown.bs.confirmation', function() {
                $('.popover.confirmation.in').off('click').click(function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                });
            });
        }

        function deleteItem($clicked_delete_btn) {
            if ($itemMoreOptionBtn) {
                var $btn = $itemMoreOptionBtn;
                $itemMoreOptionBtn.popover('destroy');
            } else {
                var $btn = $clicked_delete_btn;
            }
            var $item = $btn.closest(mih.itemSelector);
            if (!$item || $.isNumeric($item.data('id')) === 0) return false;
            var deleteURL = $item.data('custom-delete-url') ? $item.data('custom-delete-url') : '/versions/2/wizard/modules/delete.php';
            $.post(deleteURL, {
                w: mih.websiteID,
                id: $item.data('id'),
                moduleID: mih.moduleID,
                moduleTypeNUM: mih.moduleTypeNUM,
                ajax: 'true'
            }).done(function(data) {
                if (data !== 'success') return;
                if ($(mih.itemSelector).length == 2 && mih.noItemsMessage.length > 0) {
                    $(mih.itemSelector).closest('table').fadeOut(0, function() {
                        $item.remove();
                        mih.noItemsMessage.fadeIn(250);
                        ModulesItemsMultiSelect.refresh();
                    });
                } else {
                    $item.fadeOut(250, function() {
                        $item.remove();
                        ModulesItemsMultiSelect.refresh();
                    });
                }
                if (mih.buttons.delete.callback) mih.buttons.delete.callback.call($item, data);
            });
        }
    }
    if (this.enableMultiSelect) {
        ModulesItemsMultiSelect.init({
            websiteID: mih.websiteID,
            moduleID: mih.moduleID,
            moduleTypeNUM: mih.moduleTypeNUM,
            versionNUM: '2',
            table: {
                selector: '.modules-items-table'
            },
            noItemsMessage: mih.noItemsMessage
        });
    }
}
var ModulesItemsMultiSelect = function() {
    var MS = {};
    MS.init = function(settings) {
        if (!settings.table || !settings.websiteID || !settings.moduleID || !settings.moduleTypeNUM) return;
        MS.settings = settings;
        MS.websiteID = settings.websiteID;
        MS.moduleID = settings.moduleID;
        MS.moduleTypeNUM = settings.moduleTypeNUM;
        MS.versionNUM = settings.versionNUM;
        MS.noItemsMessage = settings.noItemsMessage;
        MS.table = {};
        MS.$table = $(settings.table.selector);
        MS.table.$parent = $(settings.table.selector).parent();
        MS.table.$theadTr = $(settings.table.selector + ' thead tr');
        MS.table.$tbodyTr = $(settings.table.selector + ' tbody tr');
        var checkBoxHTML = MS.generateCheckBoxHTML();
        MS.table.$theadTr
            .filter('tr:not(:has(.module-items-check-box))')
            .prepend('<th class="module-items-check-box">' + checkBoxHTML + '</th>');
        MS.table.$tbodyTr
            .filter('tr:not(:has(.module-items-check-box))')
            .each(function(index, tr) {
                $(tr).prepend('<td class="module-items-check-box">' + checkBoxHTML + '</td>');
            });
        MS.addManageButtons();
        MS.checkBoxesOnChange();
    };
    MS.addManageButtons = function() {
        MS.table.$parent.append(MS.generateManageButtonsHTML());
        MS.selectMultiItemsClick();
        MS.unselectSelectMultiItemsClick();
        MS.deleteSelectedItem();
    }
    MS.deleteSelectedItem = function() {
        MS.table.$parent.find('#deleteSeletectItems').confirmation({
            placement: 'auto',
            title: translations.areYouSure,
            btnOkLabel: '<i class="icon-ok-sign icon-white"></i> ' + translations.yes,
            btnCancelLabel: '<i class="icon-remove-sign"></i> ' + translations.no,
            popout: true,
            singleton: true,
            container: 'body',
            btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
            btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
            onConfirm: function() {
                var $tr = MS.table.$tbodyTr.filter('.active');
                var items = Array();
                $tr.each(function(index, tr) {
                    var $this = $(tr);
                    items.push($this.data('id'));
                });
                items = items.join(',');
                if (items.length > 0) {
                    MS.deleteItems(items);
                }
            }
        });
    };
    MS.selectMultiItemsClick = function() {
        MS.table.$parent.find('#selectMultiItems').click(function() {
            MS.table.$tbodyTr.filter(':not(.active):visible').find('.checkboxInput').each(function() {
                var $this = $(this);
                $this.prop('checked', true);
                $this.closest('tr').addClass('active');
            });
            MS.table.$parent.find('#selectMultiItems').hide();
            MS.table.$parent.find('#unselectMultiItems').show();
            MS.updateCounter();
        });
    };
    MS.deleteItems = function(items) {
        var request = $.post('/versions/' + MS.versionNUM + '/wizard/modules/delete.php', {
            w: MS.websiteID,
            ids: items,
            moduleID: MS.moduleID,
            moduleTypeNUM: MS.moduleTypeNUM,
            ajax: 'true'
        }).done(function(data) {
            if (data !== 'success') return;
            items = items.split(',');
            $(items).each(function(index, itemID) {
                var $item = MS.table.$tbodyTr.filter('[data-id=' + itemID + ']');
                $item.fadeOut(250, function() {
                    $item.remove();
                    if (index === ($(items).length - 1)) {
                        MS.showOrHideNoItemsMessage();
                    }
                });
            });
        });
    }
    MS.showOrHideNoItemsMessage = function() {
        MS.table.$tbodyTr = MS.$table.find('tbody tr');
        MS.table.$parent.find('#moduleItemsMultiSelectButtons').slideUp(600);
        if (MS.table.$tbodyTr.length == 0 && MS.noItemsMessage.length > 0) {
            MS.$table.fadeOut(0, function() {
                MS.noItemsMessage.fadeIn(250);
            });
        }
    };
    MS.unselectSelectMultiItemsClick = function() {
        MS.table.$parent.find('#unselectMultiItems').click(function() {
            MS.table.$tbodyTr.filter('.active:visible').find('.checkboxInput').each(function() {
                var $this = $(this);
                $this.prop('checked', false);
                $this.closest('tr').removeClass('active');
            });
            MS.table.$theadTr.find('.checkboxInput').prop('checked', false);
            MS.table.$parent.find('#unselectMultiItems').hide();
            MS.table.$parent.find('#selectMultiItems').show();
            MS.hideShowButtons();
            MS.updateCounter();
        });
        $('#categoriesList').on('click', 'li', function(event) {
            MS.table.$parent.find('#unselectMultiItems').trigger('click');
        });
    };
    MS.checkBoxesOnChange = function() {
        var $checkBoxInput = MS.table.$tbodyTr.find('.checkBoxInput');
        var $selectAllcheckBoxInput = MS.table.$theadTr.find('.checkboxInput');
        $selectAllcheckBoxInput.on('change', function() {
            if ($(this).is(':checked')) {
                MS.table.$parent.find('#selectMultiItems').trigger('click');
                MS.hideShowButtons();
            } else {
                MS.table.$parent.find('#unselectMultiItems').trigger('click');
            }
        });
        $checkBoxInput.on('change', function() {
            var $tr = $(this).closest('tr');
            if ($tr.hasClass('active')) {
                $tr.removeClass('active');
            } else {
                $tr.addClass('active');
            }
            if (MS.table.$tbodyTr.filter('.active').length == 0) {
                $selectAllcheckBoxInput.prop('checked', false);
            }
            MS.hideShowButtons();
            MS.updateCounter();
            if (MS.table.$tbodyTr.find('.checkboxInput:visible:not(:checked)').length === 0) {
                MS.table.$parent.find('#selectMultiItems').hide();
                MS.table.$parent.find('#unselectMultiItems').show();
            } else {
                MS.table.$parent.find('#selectMultiItems').show();
                MS.table.$parent.find('#unselectMultiItems').hide();
            }
        });
    }
    MS.updateCounter = function() {
        var activeLen = MS.table.$tbodyTr.filter('.active').length;
        MS.table.$parent.find('#moduleItemsMultiSelectButtons .count').html('(' + activeLen + ')');
    };
    MS.hideShowButtons = function() {
        var $moduleItemsMultiSelectButtons = MS.table.$parent.find('#moduleItemsMultiSelectButtons');
        var activeLen = MS.table.$tbodyTr.filter('.active').length;
        if (activeLen == 0) {
            $moduleItemsMultiSelectButtons.slideUp(600, function() {
                MS.$table.css({
                    marginBottom: 0
                });
            });
        } else {
            MS.$table.css({
                marginBottom: $moduleItemsMultiSelectButtons.outerHeight()
            });
            $moduleItemsMultiSelectButtons.slideDown(600);
        }
    };
    MS.generateCheckBoxHTML = function() {
        var html = '';
        html += '<div class="checkBoxInput pull-left" style="padding:3px 10px;">';
        html += '<label>';
        html += '<input type="checkbox" class="ace input-lg checkboxInput" data-item-id="5138487">';
        html += '<span class="lbl fullColor bigger-120"></span>';
        html += '</label>';
        html += '</div>';
        return html;
    }
    MS.generateManageButtonsHTML = function() {
        var html = '';
        html += '<div id="moduleItemsMultiSelectButtons">';
        html += '<div>';
        html += '<button id="deleteSeletectItems" class="btn btn-danger"><i class="ace-icon fal fa-regular fa-trash"></i> <span>' + translations.deleteSelectedItems + '</span> <span class="count"></span></button>';
        html += '&nbsp;&nbsp;&nbsp;';
        html += '<button id="selectMultiItems" class="btn btn-primary"><i class="fa-solid fa-check-double"></i> <span>' + translations.selectAllItems + '</span></button>';
        html += '<button id="unselectMultiItems" class="btn btn-primary" style="display:none;"><i class="fa-regular fa-rectangle-xmark"></i> <span>' + translations.unselectAllItems + '</span></button>';
        html += '</div>';
        html += '</div>';
        return html;
    };
    MS.refresh = function() {
        MS.table.$theadTr = $(MS.settings.table.selector + ' thead tr');
        MS.table.$tbodyTr = $(MS.settings.table.selector + ' tbody tr');
        MS.updateCounter();
        MS.hideShowButtons();
    };
    return MS;
}();

function ModulesActivitiesItemsHandler(settings) {
    var maih = this;
    this.websiteID = settings.websiteID;
    this.moduleID = settings.moduleID;
    this.moduleTypeNUM = settings.moduleTypeNUM;
    this.itemSelector = settings.itemSelector;
    this.noItemsMessage = settings.noItemsSelector ? $(settings.noItemsSelector) : '';
    this.$sortable = settings.sortable ? $(settings.sortable.selector) : '';
    this.buttons = settings.buttons;
    if (this.noItemsMessage.length > 0) {
        if ($(this.itemSelector).length == 0) {
            this.noItemsMessage.show();
            $(this.itemSelector).closest('table').hide();
        }
    }
    if (this.$sortable.length > 0) {
        this.$sortable.sortable({
            opacity: 0.8,
            revert: true,
            delay: 100,
            forceHelperSize: true,
            placeholder: 'draggable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            handle: '.mis-btn-drag',
            cancel: '',
            helper: function(event, item) {
                return '<div style="display:none;">&nbsp;</div>';
            },
            update: function(event, ui) {
                var request = $.post('/versions/' + versionNUM + '/wizard/modules/updatePlace.php', {
                    w: maih.websiteID,
                    moduleID: maih.moduleID,
                    moduleTypeNUM: maih.moduleTypeNUM,
                    id: ui.item.data('id'),
                    prevId: ui.item.prev().data('id')
                });
            }
        });
    }
    if (!this.buttons) return;
    if (this.buttons.delete) {
        $(this.buttons.delete.selector).confirmation({
            placement: intrface_align,
            title: translations.areYouSure,
            btnOkLabel: '<i class="icon-ok-sign icon-white"></i> ' + translations.yes,
            btnCancelLabel: '<i class="icon-remove-sign"></i> ' + translations.no,
            popout: true,
            singleton: true,
            container: 'body',
            btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
            btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
            onConfirm: function() {
                var $btn = $(this);
                var $item = $btn.closest(maih.itemSelector);
                if (!$item || $.isNumeric($item.data('id')) === 0) return false;
                var deleteURL = $item.data('custom-delete-url') ? $item.data('custom-delete-url') : '/versions/2/wizard/modules/delete.php';
                $.post(deleteURL, {
                    w: maih.websiteID,
                    id: $item.data('id'),
                    moduleID: maih.moduleID,
                    moduleTypeNUM: maih.moduleTypeNUM,
                    ajax: 'true'
                }).done(function(data) {
                    if (data !== 'success') return;
                    if ($(maih.itemSelector).length == 2 && maih.noItemsMessage.length > 0) {
                        $(maih.itemSelector).closest('table').fadeOut(0, function() {
                            $item.remove();
                            maih.noItemsMessage.fadeIn(250);
                        });
                    } else {
                        $item.fadeOut(250, function() {
                            $item.remove();
                            ModulesItemsMultiSelect.refresh();
                        });
                    }
                });
            }
        });
    }
    if (this.buttons.moreOptions) {
        var $itemMoreOpitonBtn = $(this.buttons.moreOptions.selector);
        var $dropDownMenu = $itemMoreOpitonBtn.closest('.btn-group').find('ul');
        $dropDownMenu.addClass('dropdown-menu-' + intrface_align_reverse);
        if (this.buttons.moreOptions.buttons.duplicate) {
            $(this.buttons.moreOptions.buttons.duplicate.selector).on('click', function() {
                var item = {
                    websiteID: maih.websiteID,
                    uniqueID: $(this).data('unique-id'),
                    moduleID: maih.moduleID
                }
                DuplicateModuleItem(item);
            });
        }
        if (this.buttons.moreOptions.buttons.visible) {
            var buttonSelector = this.buttons.moreOptions.buttons.visible.selector;
            $.each($(this.itemSelector), function(index, item) {
                var $item = $(this);
                if ($item.data('hidden') == 1) {
                    $item.find('td.edit-item-btn').append('<span class="visibility-text label label-warning message-status">' + translations.invisible + '</span>');
                    $item.find(buttonSelector).empty();
                    $item.find(buttonSelector).append('<i class="fa fa-eye" aria-hidden="true"></i>&nbsp;');
                    $item.find(buttonSelector).append(translations.visible);
                } else {
                    $item.find('td.edit-item-btn').append('<span class="visibility-text label label-warning message-status"></span>');
                    $item.find(buttonSelector).empty();
                    $item.find(buttonSelector).append('<i class="fa fa-eye-slash" aria-hidden="true"></i>&nbsp;');
                    $item.find(buttonSelector).append(translations.invisible);
                }
            });
            $(this.buttons.moreOptions.buttons.visible.selector).on('click', function(event) {
                var $this = $(this);
                var $item = $this.closest('tr');
                var hidden = $item.data('hidden') == 1 ? 0 : 1;
                $.ajax({
                    type: "POST",
                    url: "/versions/" + versionNUM + "/wizard/modules/itemsVisibilityAjax.php",
                    data: {
                        w: maih.websiteID,
                        id: $item.data('id'),
                        moduleID: maih.moduleID,
                        moduleTypeNUM: maih.moduleTypeNUM,
                        hidden: hidden
                    },
                    success: function(data) {
                        data = tryParseJSON(data);
                        if (data.success) {
                            $item.data('hidden', hidden);
                            if (hidden == 0) {
                                $item.find('.visibility-text').html('');
                                $item.find(buttonSelector).empty();
                                $item.find(buttonSelector).append('<i class="fa fa-eye-slash" aria-hidden="true"></i>&nbsp;');
                                $item.find(buttonSelector).append(translations.invisible);
                            } else {
                                $item.find('.visibility-text').html(translations.invisible);
                                $item.find(buttonSelector).empty();
                                $item.find(buttonSelector).append('<i class="fa fa-eye" aria-hidden="true"></i>&nbsp;');
                                $item.find(buttonSelector).append(translations.visible);
                            }
                        }
                    }
                });
            });
        }
    }
    if (ace.vars['touch']) {
        $('.orders-table').each(function() {
            var $ordersTable = $(this);
            if ($ordersTable.find('.show-order-info').length > 0) {
                $ordersTable.on('click', 'tbody td:not([data-item-click="disabled"])', function(event) {
                    var $this = $(this);
                    var $tr = $this.closest('tr');
                    OpenOrderInfo(maih.websiteID, maih.moduleTypeNUM, $tr.data("orderid"));
                });
            } else if ($ordersTable.find('.show-message-info').length > 0) {
                $ordersTable.on('click', 'tbody td:not([data-item-click="disabled"])', function(event) {
                    var $this = $(this);
                    var $tr = $this.closest('tr');
                    OpenMessageInfo(maih.websiteID, maih.moduleTypeNUM, $tr.data("id"));
                });
            }
        });
    }
    ModulesActivitiesItemsMultiSelect.init({
        websiteID: maih.websiteID,
        moduleID: maih.moduleID,
        moduleTypeNUM: maih.moduleTypeNUM,
        versionNUM: '2',
        table: {
            selector: function(event, modal) {
                if ($('html[data-device="mobile"]').length !== 0 && $('.messages-header-page').length === 0) {
                    return '.widget-mobile-cards-container';
                } else {
                    return '.modules-items-table';
                }
            }()
        },
        noItemsMessage: maih.noItemsMessage,
        buttons: maih.buttons
    });
}
var ModulesActivitiesItemsMultiSelect = function() {
    var MS = {};
    MS.init = function(settings) {
        if (!settings.table || !settings.websiteID || !settings.moduleID || !settings.moduleTypeNUM) return;
        MS.settings = settings;
        MS.websiteID = settings.websiteID;
        MS.moduleID = settings.moduleID;
        MS.moduleTypeNUM = settings.moduleTypeNUM;
        MS.versionNUM = settings.versionNUM;
        MS.noItemsMessage = settings.noItemsMessage;
        MS.table = {};
        MS.$table = $(settings.table.selector);
        MS.is_widget_mobile_cards = MS.$table.hasClass('widget-mobile-cards-container');
        MS.table.$parent = $(settings.table.selector).parent();
        if (MS.is_widget_mobile_cards) {
            MS.table.$theadTr = $('.not-exist-at-mobile'); // we set this class to prevent JS errors (it not used)
            MS.table.$tbodyTr = $(settings.table.selector + ' > div');
        } else {
            MS.table.$theadTr = $(settings.table.selector + ' thead tr');
            MS.table.$tbodyTr = $(settings.table.selector + ' tbody tr');
        }
        var checkBoxHTML = MS.generateCheckBoxHTML();
        if (MS.table.$theadTr) {
            MS.table.$theadTr.prepend('<th class="module-items-check-box">' + checkBoxHTML + '</th>');
        }
        MS.table.$tbodyTr.each(function(index, tr) {
            if (MS.is_widget_mobile_cards) {
                $(tr).find('.widget-header.show-order-info').append('<div class="module-items-check-box" data-item-click="disabled">' + checkBoxHTML + '</div>');
            } else {
                $(tr).prepend('<td class="module-items-check-box" data-item-click="disabled">' + checkBoxHTML + '</td>');
            }
        });
        MS.addManageButtons();
        MS.checkBoxesOnChange();
    };
    MS.addManageButtons = function() {
        MS.table.$parent.append(MS.generateManageButtonsHTML());
        MS.selectMultiItemsClick();
        MS.unselectSelectMultiItemsClick();
        if (MS.settings.buttons.delete) MS.deleteSelectedItem();
        if (MS.moduleTypeNUM == 37 || MS.moduleTypeNUM == 2 || MS.moduleTypeNUM == 96 || MS.moduleTypeNUM == 15 || MS.moduleTypeNUM == 10 || MS.moduleTypeNUM == 17 || MS.moduleTypeNUM == 52 || MS.moduleTypeNUM == 112 || MS.moduleTypeNUM == 7 || MS.moduleTypeNUM == 40 || MS.moduleTypeNUM == 94 || MS.moduleTypeNUM == 142) {
            MS.statusMultiChange();
            MS.statusChangeAjax();
        }
        MS.approveSelectedItems();
        MS.rejectSelectedItems();
    }
    MS.statusMultiChange = function() {
        $('#statusMultichange').change(function() {
            var status = $(this).val();
            var type = $(this).data('type');
            var keyValue = {
                comments: 'id',
                messages: 'id'
            };
            var key = keyValue[type] || 'orderid';
            (function() {
                var $tr = MS.table.$tbodyTr.filter('.active');
                var items = Array();
                $tr.each(function(index, tr) {
                    var $this = $(tr);
                    items.push($this.data(key));
                });

                function getUrl(type, id, status) {
                    var url = '';
                    switch (type) {
                        case 'messages':
                            url = '/versions/' + MS.versionNUM + '/wizard/messages/changeStatus.php?moduleTypeNUM=' + MS.moduleTypeNUM + '&status=' + status + '&m=' + id + '&w=' + MS.websiteID
                            break;
                        case 'comments':
                            url = '/versions/' + MS.versionNUM + '/wizard/comments/confirm.php?moduleTypeNUM=' + MS.moduleTypeNUM + '&blockBOO=' + status + '&m=' + id + '&w=' + MS.websiteID + '&p=' + $('tr[data-' + key + '="' + id + '"]').data('page-url') + '&moduleID=' + $('tr[data-' + key + '="' + id + '"]').closest('tr').data('module-id');
                            break;
                        default:
                            url = '/versions/' + MS.versionNUM + '/wizard/orders/manage/changeStatus.php?moduleTypeNUM=' + MS.moduleTypeNUM + '&status=' + status + '&orderID=' + id + '&w=' + MS.websiteID
                            break;
                    }
                    return url;
                };
                if (items.length > 0) {
                    $.each(items, function(i, id) {
                        $.ajax({
                            type: 'GET',
                            url: getUrl(type, id, status),
                            cache: false,
                            async: false,
                            success: function() {
                                $('tr[data-' + key + '="' + id + '"] .statuses').load(window.location + ' tr[data-' + key + '="' + id + '"] .statuses .btn-group', function() {
                                    $('tr[data-' + key + '="' + id + '"] .statuses ul li a').click(function(e) {
                                        var id = $(this).parents('.trline').data(key);
                                        var status = $(this).data('status');
                                        MS.voidStatusChange(id, status, type, $(this));
                                        e.preventDefault();
                                    });
                                });
                            }
                        });
                    });
                    $.gritter.add({
                        title: translations.saveUpdateSuccessful,
                        class_name: 'gritter-success',
                        time: 1000
                    });
                }
            })();
        });
    };
    MS.deleteSelectedItem = function() {
        var restore = this.settings.buttons.delete.restore;
        var type = this.settings.buttons.delete.type;
        if (restore) {
            MS.table.$parent.find('#deleteSeletectItems').off('confirmation').click(function() {
                var $tr = MS.table.$tbodyTr.filter('.active');
                var items = Array();
                $tr.each(function(index, tr) {
                    var $this = $(tr);
                    items.push({
                        id: $this.data('id'),
                        moduleID: $this.data('module-id'),
                        uniquePageID: $this.data('unique-page-id')
                    });
                });
                if (items.length > 0) {
                    MS.deleteItems(items, restore, type);
                }
            });
        }
        if (!restore) {
            if ($.inArray(parseInt(MS.moduleTypeNUM), [7, 40, 94]) !== -1) {
                var delete_seletect_items_alert_text = translations.deleteSelectedItemsAlert;
            } else {
                var delete_seletect_items_alert_text = translations.archiveSelectedItemsAlert;
            }
            MS.table.$parent.find('#deleteSeletectItems').confirmation({
                placement: 'auto',
                title: delete_seletect_items_alert_text,
                btnOkLabel: '<i class="icon-ok-sign icon-white"></i> ' + translations.yes,
                btnCancelLabel: '<i class="icon-remove-sign"></i> ' + translations.no,
                popout: true,
                singleton: true,
                container: 'body',
                btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
                btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
                onConfirm: function() {
                    var $tr = MS.table.$tbodyTr.filter('.active');
                    var items = Array();
                    $tr.each(function(index, tr) {
                        var $this = $(tr);
                        items.push({
                            id: $this.data('id'),
                            moduleID: $this.data('module-id'),
                            uniquePageID: $this.data('unique-page-id')
                        });
                    });
                    if (items.length > 0) {
                        MS.deleteItems(items, restore, type);
                    }
                }
            });
        }
    };
    MS.selectMultiItemsClick = function() {
        MS.table.$parent.find('#selectMultiItems').click(function() {
            MS.table.$tbodyTr.filter(':not(.active):visible').find('.checkboxInput').each(function() {
                var $this = $(this);
                $this.prop('checked', true);
                if (MS.is_widget_mobile_cards) {
                    $this.closest('.widget-mobile-card').addClass('active');
                } else {
                    $this.closest('tr').addClass('active');
                }
            });
            MS.table.$parent.find('#selectMultiItems').hide();
            MS.table.$parent.find('#unselectMultiItems').show();
            MS.updateCounter();
        });
    };
    MS.deleteItemsCallback = function(items) {
        if (items) {
            $.each(items.split(','), function(key, val) {
                var $item = $('[data-id="' + val + '"]');
                $item.fadeOut(250, function() {
                    $item.remove();
                    MS.refresh();
                });
            });
        }
    };
    MS.deleteItems = function(items, restore, type) {
        if (!restore) restore = false;
        if (!type) type = false;
        var ids = Array();
        $.each(items, function(index, item) {
            ids.push(item.id);
        });
        ids = ids.join(',');
        if (type == 'comments' && (MS.moduleTypeNUM == 17 || MS.moduleTypeNUM == 52 || MS.moduleTypeNUM == 112)) {
            (function() {
                $.ajax({
                    type: 'GET',
                    url: '/versions/' + MS.versionNUM + '/wizard/comments/delete.php',
                    data: {
                        m: JSON.stringify(items),
                        w: MS.websiteID,
                        moduleTypeNUM: MS.moduleTypeNUM
                    },
                    cache: false,
                    async: false,
                    success: function() {
                        $.gritter.add({
                            title: translations.saveUpdateSuccessful,
                            class_name: 'gritter-success',
                            time: 1000
                        });
                    }
                });
                MS.deleteItemsCallback(ids);
            })();
            return;
        }
        if (MS.moduleTypeNUM == 37 || MS.moduleTypeNUM == 2 || MS.moduleTypeNUM == 96 || MS.moduleTypeNUM == 15 || MS.moduleTypeNUM == 10 || MS.moduleTypeNUM == 112 || MS.moduleTypeNUM == 142 || MS.moduleTypeNUM == 52) {
            (function() {
                $.ajax({
                    type: 'GET',
                    url: '/versions/' + MS.versionNUM + '/wizard/orders/manage/delete.php',
                    data: {
                        m: ids,
                        w: MS.websiteID,
                        moduleTypeNUM: MS.moduleTypeNUM,
                        restore: restore
                    },
                    cache: false,
                    async: false,
                    success: function() {
                        $.gritter.add({
                            title: translations.saveUpdateSuccessful,
                            class_name: 'gritter-success',
                            time: 1000
                        });
                    }
                });
                MS.deleteItemsCallback(ids);
            })();
            return;
        }
        if (type == 'messages' && (MS.moduleTypeNUM == 7 || MS.moduleTypeNUM == 40 || MS.moduleTypeNUM == 94)) {
            (function() {
                $.ajax({
                    type: 'GET',
                    url: '/versions/' + MS.versionNUM + '/wizard/messages/delete.php',
                    data: {
                        m: ids,
                        w: MS.websiteID,
                        moduleTypeNUM: MS.moduleTypeNUM
                    },
                    cache: false,
                    async: false,
                    success: function() {
                        $.gritter.add({
                            title: translations.saveUpdateSuccessful,
                            class_name: 'gritter-success',
                            time: 1000
                        });
                    }
                });
                MS.deleteItemsCallback(ids);
            })();
            return;
        }
        var request = $.post('/versions/' + MS.versionNUM + '/wizard/modules/delete.php', {
            w: MS.websiteID,
            ids: items,
            moduleID: MS.moduleID,
            moduleTypeNUM: MS.moduleTypeNUM,
            ajax: 'true'
        }).done(function(data) {
            if (data !== 'success') return;
            items = items.split(',');
            $(items).each(function(index, itemID) {
                var $item = MS.table.$tbodyTr.filter('[data-id="' + itemID + '"]');
                $item.fadeOut(250, function() {
                    $item.remove();
                    if (index === ($(items).length - 1)) {
                        MS.showOrHideNoItemsMessage();
                    }
                });
            });
        });
    }
    MS.showOrHideNoItemsMessage = function() {
        if (MS.is_widget_mobile_cards) {
            MS.table.$tbodyTr = MS.$table.find('.widget-mobile-card');
        } else {
            MS.table.$tbodyTr = MS.$table.find('tbody tr');
        }
        MS.table.$parent.find('#moduleItemsMultiSelectButtons').slideUp(600);
        if (MS.table.$tbodyTr.length == 0 && MS.noItemsMessage.length > 0) {
            MS.$table.fadeOut(0, function() {
                MS.noItemsMessage.fadeIn(250);
            });
        }
    };
    MS.unselectSelectMultiItemsClick = function() {
        MS.table.$parent.find('#unselectMultiItems').click(function() {
            MS.table.$tbodyTr.filter('.active:visible').find('.checkboxInput').each(function() {
                var $this = $(this);
                $this.prop('checked', false);
                if (MS.is_widget_mobile_cards) {
                    $this.closest('.widget-mobile-card').removeClass('active');
                } else {
                    $this.closest('tr').removeClass('active');
                }
            });
            MS.table.$theadTr.find('.checkboxInput').prop('checked', false);
            MS.table.$parent.find('#unselectMultiItems').hide();
            MS.table.$parent.find('#selectMultiItems').show();
            MS.hideShowButtons();
            MS.updateCounter();
        });
    };
    MS.voidStatusChange = function(id, status, type, $button) {
        var key = (type === 'comments' || type === 'messages' ? 'id' : 'orderid');
        switch (type) {
            case 'messages':
                var params = {
                    type: 'GET',
                    url: '/versions/2/wizard/messages/changeStatus.php',
                    data: {
                        m: id,
                        status: status,
                        w: MS.websiteID,
                        moduleTypeNUM: MS.moduleTypeNUM
                    },
                    cache: false,
                    async: false
                };
                break;
            case 'comments':
                var params = {
                    type: 'GET',
                    url: '/versions/2/wizard/comments/confirm.php',
                    data: {
                        m: id,
                        blockBOO: status,
                        w: MS.websiteID,
                        moduleTypeNUM: MS.moduleTypeNUM,
                        moduleID: $button.closest('tr').data('module-id'),
                        p: $button.closest('tr').data('page-url')
                    },
                    cache: false,
                    async: false
                };
                break;
            default:
                var params = {
                    type: 'GET',
                    url: '/versions/2/wizard/orders/manage/changeStatus.php',
                    data: {
                        orderID: id,
                        status: status,
                        w: MS.websiteID,
                        moduleTypeNUM: MS.moduleTypeNUM
                    },
                    cache: false,
                    async: false
                };
                break;
        }
        var $order_row = $('tr[data-' + key + '="' + id + '"]');
        if ($order_row.data('status') == status) return;
        $order_row.data('status', status);
        (function() {
            $.ajax(params).done(function() {
                $.gritter.add({
                    title: translations.saveUpdateSuccessful,
                    class_name: 'gritter-success',
                    time: 1000
                });
                $order_row.find('.statuses').load(window.location + '&getStatuses=1 tr[data-' + key + '="' + id + '"] .statuses .btn-group', function() {
                    $order_row.find('.statuses ul li a').click(function(event) {
                        var id = $(this).parents('.trline').data(key);
                        var status = $(this).data('status');
                        event.preventDefault();
                        if ($(this).data('confirmation')) {
                            var labelOk = $(this).data('ok');
                            var labelCancel = $(this).data('cancel');
                            var labelMessage = $(this).data('message');
                            bootbox.confirm({
                                message: labelMessage,
                                buttons: {
                                    confirm: {
                                        label: labelOk,
                                        className: 'btn-primary btn-sm'
                                    },
                                    cancel: {
                                        label: labelCancel,
                                        className: 'btn-sm'
                                    }
                                },
                                callback: function(result) {
                                    if (result) {
                                        MS.voidStatusChange(id, status, type, $(this));
                                    }
                                }
                            });
                            return;
                        }
                        MS.voidStatusChange(id, status, type, $(this));
                    });
                });
            });
        })();
    }
    MS.statusChangeAjax = function() {
        $('.statuses ul li a').click(function(e) {
            var type = $(this).parents('tbody').data('type') || 'orders';
            var key = (type === 'comments' || type === 'messages' ? 'id' : 'orderid');
            var id = $(this).parents('.trline').data(key);
            var status = $(this).data('status');
            event.preventDefault();
            if ($(this).data('confirmation')) {
                var labelOk = $(this).data('ok');
                var labelCancel = $(this).data('cancel');
                var labelMessage = $(this).data('message');
                bootbox.confirm({
                    message: labelMessage,
                    buttons: {
                        confirm: {
                            label: labelOk,
                            className: 'btn-primary btn-sm'
                        },
                        cancel: {
                            label: labelCancel,
                            className: 'btn-sm'
                        }
                    },
                    callback: function(result) {
                        if (!result) return;
                        MS.voidStatusChange(id, status, type, $(this));
                    }
                });
            } else {
                MS.voidStatusChange(id, status, type, $(this));
            }
        });
        $('.fulfillment-statuses-container li a').click(function(event) {
            var $button = $(this);
            var type = 'orders';
            var id = $button.closest('[data-orderid]').data('orderid');
            var fulfillment_status = $button.data('fulfillment-status');
            event.preventDefault();
            if ($button.data('confirmation')) {
                var labelOk = $button.data('ok');
                var labelCancel = $button.data('cancel');
                var labelMessage = $button.data('message');
                bootbox.confirm({
                    message: labelMessage,
                    buttons: {
                        confirm: {
                            label: labelOk,
                            className: 'btn-primary btn-sm'
                        },
                        cancel: {
                            label: labelCancel,
                            className: 'btn-sm'
                        }
                    },
                    callback: function(result) {
                        if (!result) return;
                        MS.fulfillmentStatusUpdate(id, fulfillment_status, type, $button);
                    }
                });
            } else {
                MS.fulfillmentStatusUpdate(id, fulfillment_status, type, $button);
            }
        });
    };
    MS.fulfillmentStatusUpdate = function(id, fulfillment_status, type, $button) {
        let $button_dropdown = $button.closest('[data-orderid]').find('td:not(.o-t-manage-buttons) button.dropdown-toggle');
        let ajax_type = 'GET';
        let ajax_url = '/versions/2/wizard/orders/manage/updateFulfillmentStatus.php';
        let ajax_params = {
            w: MS.websiteID,
            moduleTypeNUM: MS.moduleTypeNUM,
            orderID: id,
            fulfillment_status: fulfillment_status
        };
        if (parseFloat(fulfillment_status) === 3) {
            ajax_type = 'POST';
            ajax_url = '/versions/2/wizard/orders/manage/cancelRefundOrder.php';
            ajax_params.websiteID = MS.websiteID;
            ajax_params.action_type = 'cancel';
            ajax_params.update_inventory = 1;
            ajax_params.send_email_confirmation = 0;
        }
        $.ajax({
            type: ajax_type,
            url: ajax_url,
            data: ajax_params
        }).done(function() {
            $.gritter.add({
                title: translations.saveUpdateSuccessful,
                class_name: 'gritter-success',
                time: 1000
            });
            $button_dropdown.removeClass('btn-primary')
                .removeClass('btn-warning')
                .removeClass('btn-success')
                .removeClass('btn-danger')
                .addClass($button.data('btn-class'))
                .find('.status-name').text($button.text());
        });
    }
    MS.checkBoxesOnChange = function() {
        var $checkBoxInput = MS.table.$tbodyTr.find('.checkBoxInput');
        var $selectAllcheckBoxInput = MS.table.$theadTr.find('.checkboxInput');
        $selectAllcheckBoxInput.on('change', function() {
            if ($(this).is(':checked')) {
                MS.table.$parent.find('#selectMultiItems').trigger('click');
                MS.hideShowButtons();
            } else {
                MS.table.$parent.find('#unselectMultiItems').trigger('click');
            }
        });
        $checkBoxInput.on('click', function(event) {
            event.stopPropagation();
        });
        $checkBoxInput.on('change', function() {
            if (MS.is_widget_mobile_cards) {
                var $tr = $(this).closest('.widget-mobile-card');
            } else {
                var $tr = $(this).closest('tr');
            }
            if ($tr.hasClass('active')) {
                $tr.removeClass('active');
            } else {
                $tr.addClass('active');
            }
            if (MS.table.$tbodyTr.filter('.active').length == 0) {
                $selectAllcheckBoxInput.prop('checked', false);
            }
            MS.hideShowButtons();
            MS.updateCounter();
            if (MS.table.$tbodyTr.find('.checkboxInput:visible:not(:checked)').length === 0) {
                MS.table.$parent.find('#selectMultiItems').hide();
                MS.table.$parent.find('#unselectMultiItems').show();
            } else {
                MS.table.$parent.find('#selectMultiItems').show();
                MS.table.$parent.find('#unselectMultiItems').hide();
            }
        });
    }
    MS.updateCounter = function() {
        var activeLen = MS.table.$tbodyTr.filter('.active').length;
        MS.table.$parent.find('#moduleItemsMultiSelectButtons .count').html('(' + activeLen + ')');
    };
    MS.hideShowButtons = function() {
        var $moduleItemsMultiSelectButtons = MS.table.$parent.find('#moduleItemsMultiSelectButtons');
        var activeLen = MS.table.$tbodyTr.filter('.active').length;
        if (activeLen == 0) {
            $moduleItemsMultiSelectButtons.slideUp(600);
        } else {
            $moduleItemsMultiSelectButtons.slideDown(600);
        }
    };
    MS.approveSelectedItems = function() {
        MS.table.$parent.find('#approveSelectedItems').click(function() {
            MS.table.$parent.find('#statusMultichange').val(0).change();
        });
    };
    MS.rejectSelectedItems = function() {
        MS.table.$parent.find('#rejectSelectedItems').click(function() {
            MS.table.$parent.find('#statusMultichange').val(1).change();
        });
    };
    MS.generateCheckBoxHTML = function() {
        var html = '';
        html += '<div class="checkBoxInput pull-left" style="padding:3px 10px;">';
        html += '<label>';
        html += '<input type="checkbox" class="ace input-lg checkboxInput" data-item-id="5138487">';
        html += '<span class="lbl fullColor bigger-120"></span>';
        html += '</label>';
        html += '</div>';
        return html;
    }
    MS.generateManageButtonsHTML = function() {
        var html = '';
        html += '<div id="moduleItemsMultiSelectButtons">';
        html += '<div>';
        if ($.inArray(parseInt(MS.moduleTypeNUM), [112, 142, 2, 96, 10, 15, 52]) !== -1) {
            this.settings.buttons.statusSelector = false;
        }
        if (this.settings.buttons.statusSelector) {
            var type = this.settings.buttons.statusSelector.type || 'orders';
            var hidden = this.settings.buttons.statusSelector.hidden || false;
            html += '<select data-type="' + type + '" id="statusMultichange" class="status-multichange' + (hidden ? ' hidden' : '') + '">';
            html += '<option selected disabled>' + translations.activitiesItemHandler.setStatus + '</option>';
            if (this.settings.buttons.statusSelector.statuses) {
                $.each(this.settings.buttons.statusSelector.statuses, function(key, value) {
                    html += '<option value="' + key + '">' + value + '</option>';
                });
            } else {
                html += '<option value="1">' + translations.activitiesItemHandler.new + '</option>' + '<option value="2">' + translations.activitiesItemHandler.paid + '</option>' + '<option value="3">' + translations.activitiesItemHandler.inProgress + '</option>' + '<option value="4">' + translations.activitiesItemHandler.cancelled + '</option>' + '<option value="5">' + translations.activitiesItemHandler.completed + '</option>' + '<option value="6">' + translations.activitiesItemHandler.shipped + '</option>';
            }
            html += '</select>&nbsp;&nbsp;&nbsp;';
        }
        if (this.settings.buttons.approveSelected) {
            html += '<button id="approveSelectedItems" class="btn btn-success"><i class="ace-icon fa fa-check"></i> <span>Approve Selected</span> <span class="count"></span></button>';
            html += '&nbsp;&nbsp;&nbsp;';
        }
        if (this.settings.buttons.rejectSelected) {
            html += '<button id="rejectSelectedItems" class="btn btn-primary"><i class="ace-icon fa fa-times"></i> <span>Reject Selected</span> <span class="count"></span></button>';
            html += '&nbsp;&nbsp;&nbsp;';
        }
        if (this.settings.buttons.delete) {
            if ($.inArray(parseInt(MS.moduleTypeNUM), [7, 40, 94]) !== -1) {
                var delete_seletect_items_text = translations.deleteSelectedItems;
                var delete_seletect_items_btn_cls = 'btn-danger';
            } else {
                var delete_seletect_items_text = translations.archiveSelectedItems;
                var delete_seletect_items_btn_cls = 'btn-default';
            }
            html += '<button id="deleteSeletectItems" class="btn ' + delete_seletect_items_btn_cls + '"><i class="fa-light fa-box-archive"></i> <span class="hidden-xs">' + (this.settings.buttons.delete.restore ? translations.unarchiveSelectedItems : delete_seletect_items_text) + '</span> <span class="count"></span></button>';
            html += '&nbsp;&nbsp;&nbsp;';
        }
        html += '<button id="selectMultiItems" class="btn btn-primary"><i class="fa-solid fa-check-double"></i> <span class="hidden-xs">' + translations.selectAllItems + '</span></button>';
        html += '<button id="unselectMultiItems" class="btn btn-primary" style="display:none;"><i class="fa-regular fa-rectangle-xmark"></i> <span class="hidden-xs">' + translations.unselectAllItems + '</span></button>';
        html += '</div>';
        html += '</div>';
        return html;
    };
    MS.refresh = function() {
        if (MS.is_widget_mobile_cards) {
            MS.table.$tbodyTr = $(MS.settings.table.selector + ' > div');
        } else {
            MS.table.$theadTr = $(MS.settings.table.selector + ' thead tr');
            MS.table.$tbodyTr = $(MS.settings.table.selector + ' tbody tr');
        }
        MS.updateCounter();
        MS.hideShowButtons();
    };
    return MS;
}();
var EditItemsToolbar = function() {
    var event_namespace = 'eit_form_saved';
    var T = {
        manual_validation_error: false,
        html: '<div class="SubmitButtonsArea form-actions">' +
            '<div class="eit-buttons-box">' +
            '<div class="eit-buttons-dropdown">' +
            '<button type="button" class="btn btn-success eit-btn eit-save-close-btn">' + translations.eit_Save + '</button>' +
            '<button type="button" class="btn btn-success dropdown-toggle saveToggleDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="caret" style="margin-top: 0;"></span>' +
            '<span class="sr-only">Toggle Dropdown</span>' +
            '</button>' +
            '<ul class="dropdown-menu">' +
            '<li>' +
            '<button type="button" class="eit-btn eit-save-btn">' + '<i class="fa-solid fa-floppy-disk"></i>' + translations.eit_SaveStay + '</button>' +
            '</li>' +
            '<li>' +
            '<a class="eit-btn eit-view-btn" target="_blank" title="' + translations.eit_View + '">' +
            '<i class="fa fa-eye"></i>' + translations.eit_View +
            '</a>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<a class="eit-btn eit-cancel-btn" href="#">' + translations.eit_Cancel + '</a>' +
            '</div>' +
            '<div class="eit-loading">' +
            '<i class="ace-icon fa fa-spinner fa-spin blue fa-3x"></i>' +
            '</div>' +
            '</div>'
    };
    T.init = function(settings) {
        T.$html = $(T.html);
        T.$form = $('form').length === 1 ? $('form') : $(settings.form);
        T.disableButtons = settings && settings.disableButtons ? settings.disableButtons : [];
        T.btns = {
            $save: T.$html.find('.eit-save-btn'),
            $save_close: T.$html.find('.eit-save-close-btn'),
            $cancel: T.$html.find('.eit-cancel-btn'),
            $view: T.$html.find('.eit-view-btn'),
            $separator: T.$html.find('.eit-separator'),
            $saveToggleDropdown: T.$html.find('.saveToggleDropdown'),
        }
        T.$buttons_box = T.$html.find('.eit-buttons-box');
        T.$loading = T.$html.find('.eit-loading');
        T.form_submit_handler();
        T.btns.$save.click(function() {
            T.$form.data('save-type', 'save');
            T.$form.submit();
        });
        T.btns.$save_close.click(function() {
            T.$form.data('save-type', 'save_close');
            T.$form.submit();
        });
        if (T.$form.data('cancel-url')) {
            T.btns.$cancel.attr('href', T.$form.data('cancel-url'));
        } else {
            T.btns.$cancel.hide();
        }
        T.view_button_init();
        T.btns.$view.on('click', function() {
            window.open(T.$form.data('view-url'), '_blank');
        });
        T.btns.$saveToggleDropdown.dropdown();
        T.$form.append(T.$html);
        if (T.disableButtons.indexOf('save') != -1) {
            T.btns.$save.hide();
        }
        if (T.disableButtons.indexOf('view') != -1) {
            T.btns.$view.closest('li').hide();
            T.btns.$view.closest('.dropdown-menu').addClass('without-view-btn');
        }
    };
    T.view_button_init = function() {
        if (T.$form.data('view-url')) {
            if (topWindow.$('html').data('device') === 'mobile') {
                window.s123_mobilePreview = true;
            }
            T.btns.$view.show();
            T.btns.$separator.show();
        } else {
            T.btns.$view.hide();
            T.btns.$separator.hide();
        }
    };
    T.form_submit_handler = function() {
        T.$form.submit(function(event) {
            event.preventDefault();
            if (!T.$form.valid()) {
                $(document).trigger('page_save.invalid');
                return;
            }
            if (T.manual_validation_error) return;
            T.$buttons_box.addClass('saving-loading');
            if (T.disableButtons.indexOf('save') == -1) {
                T.$loading.find('i').css({
                    left: (T.btns.$save.position().left + (T.btns.$save.outerWidth() / 2) - 21)
                });
            } else {
                T.$loading.find('i').css({
                    left: (T.btns.$save_close.position().left + (T.btns.$save_close.outerWidth() / 2) - 21)
                });
            }
            T.$loading.show();
            if ($('#newCategory').is(':visible') && !T.$form.data('submit')) return;
            var request = $.post(T.$form.attr('action'), T.$form.serialize() + '&json=1').done(function(response) {
                response = tryParseJSON(response);
                T.$buttons_box.removeClass('saving-loading');
                T.$loading.hide();
                if (response.status === 'success') {
                    gritter_update();
                    if (T.$form.data('save-type') === 'save_close') {
                        if (topWindow.$('#moduleWindow').data('close-on-save')) {
                            topWindow.$('#moduleWindow').modal('hide');
                        } else {
                            window.location.href = T.$form.data('cancel-url');
                        }
                        return;
                    }
                    T.$form.find('input[name="id"]').val(response.id);
                    T.$form.data('view-url', response.url);
                    T.$form.trigger(event_namespace, response);
                    T.view_button_init();
                    $(document).trigger('page_save.success');
                }
            });
        });
    };
    return T;
}();
var UnsavedChangesDetector = new function() {
    var UCD = this;
    var event_namespace = 'unsaved_changes_detector';
    var $container;
    var $form;
    var $inputs;
    var ready;
    UCD.init = function(settings) {
        if (!settings) settings = {};
        $container = settings.container ? $(settings.container) : $('html');
        $form = settings.form ? $(settings.form) : $('form').first();
        if ($container.length === 0) throw 'Missing Settings - `container` not found!';
        if ($form.length === 0) throw 'Missing Settings - `form` not found!';
        $inputs = $container.find(":input");
        $form.submit(function(event) {
            UCD.refresh();
        });
        UCD.start();
        ready = true;
    };
    UCD.start = function() {
        UCD.stop();
        $inputs.on('input.' + event_namespace, function(event) {
            UCD.unsaved_changes(true).stop();
        });
        $inputs.on('change.' + event_namespace, function(event) {
            UCD.unsaved_changes(true).stop();
        });
        $(document).on('change.' + event_namespace + '', ':input', function(event) {
            UCD.unsaved_changes(true).stop();
        });
    };
    UCD.stop = function() {
        $inputs.off('.' + event_namespace);
        $(document).off('.' + event_namespace);
    };
    UCD.unsaved_changes = function(status) {
        if (!ready) return;
        $container.attr('data-unsaved-changes', status);
        return UCD;
    };
    UCD.refresh = function() {
        UCD.unsaved_changes(false);
        UCD.start();
        return UCD;
    };
};
var S123AdvancedSEO = function() {
    var that = {};
    that.init = function(settings) {
        if (!settings.type || (settings.type != 'module' && settings.type != 'item')) return;
        that.websiteID = settings.websiteID;
        that.$container = settings.$container;
        that.$form = settings.$form;
        that.json = settings.json;
        that.page = settings.page;
        that.type = settings.type;
        that.isDescriptionCharLimit = true;
        that.urlPlaceholder = translations.advancedSEO.url.placeholder;
        that.isUsingCustomURL = settings.isUsingCustomURL ? settings.isUsingCustomURL : false;
        that.isPreviewOnSide = settings.isPreviewOnSide ? settings.isPreviewOnSide : false;
        that.pageUrlExample = 'page-url-example';
        that.isUsingModal = settings.isUsingModal ? settings.isUsingModal : false;
        that.seo = {
            title: '',
            description: '',
            url: '',
            keywords: '',
            image: '',
            noindex: false,
            isActive: false
        }
        that.json = tryParseJSON(that.json);
        if (typeof that.json === 'object') {
            $.each(that.seo, function(input) {
                if (input == 'url' || !that.json[input]) return true;
                that.seo[input] = that.json[input];
            });
        }
        if (that.page.url.length > 0) {
            that.urlPlaceholder = that.page.url;
            that.pageUrlExample = that.page.url;
            if (that.isUsingCustomURL) {
                that.seo.url = that.page.url;
            }
        }
        if (!that.seo.isActive && settings.type == 'module' && that.page.meta_des) {
            that.seo.description = that.page.meta_des;
        }
        if (that.type == 'module' && that.seo.description.length > 320) {
            that.isDescriptionCharLimit = false;
        }
        that.$html = that.generateHTML();
        if (that.isPreviewOnSide) that.setPreviewOnSide();
        that.$title = that.$html.find('input[data-name="seoTitle"]');
        that.$description = that.$html.find('textarea[data-name="seoDescription"]');
        that.$url = that.$html.find('input[data-name="seoURL"]');
        that.$keywords = that.$html.find('input[data-name="seoKeywords"]');
        that.$image = that.$html.find('#seoImage');
        that.$titleCharLimit = that.$html.find('#seoTitleCharLimit');
        that.$descriptionCharLimit = that.$html.find('#seoDescriptionCharLimit');
        that.$facebookBtn = that.$html.find('.seo-f-btn');
        that.$googleBtn = that.$html.find('.seo-g-btn');
        that.$facebookPreview = that.$html.find('.seo-f-preview');
        that.$googlePreview = that.$html.find('.seo-g-preview');
        that.$seoDomain = that.$html.find('.seo-domain');
        that.$facebookPreviewDomain = that.$html.find('.seo-f-url.advanced-seo-domain');
        that.$customURL = that.$html.find('input[data-name="seoCustomURL"]');
        that.$noindex = that.$html.find('input[data-name="seoNoindex"]');
        that.eventsHandler();
        if (that.isUsingModal) that.setInModal();
        that.$container.append(that.$html);
        UploadSingleFilesInitialize('');
        ColorboxInitial('.fileUploadBox [data-rel="colorbox"]');
        BuildInterfaceAccorion();
        that.$html.find('[data-rel=tooltip]').tooltip({
            container: 'body',
            placement: 'auto'
        });
        that.$html.find('input:not([data-name="seoCustomURL"]), textarea').on('input.s123_advanced_seo change.s123_advanced_seo', function() {
            that.$image = that.$html.find('#seoImage');
            that.update(false);
        });
        that.$form.on('eit_form_saved', function(event, response) {
            that.$customURL.val(decodeURIComponent(response.pageURL));
            if (that.$customURL.val().length > 0 && that.$url.val().length > 0) {
                that.$url.val(that.$customURL.val()).trigger('change.s123_advanced_seo');
            }
        });
        that.pageTitleHandler();
        that.$container.removeClass('hidden');
    };
    that.eventsHandler = function() {
        that.update(true);
        that.$form.submit(function() {
            that.$html.find('#advancedSEOurl').val(that.seo.url);
            if (!that.seo.isActive) {
                that.seo.isActive = that.type == 'module' ? true : that.isActive();
            }
            delete that.seo.url;
            that.$html.find('#advancedSEO').html(JSON.stringify(that.seo));
        });
        that.$facebookBtn.click(function() {
            that.$googlePreview.fadeOut(240, function() {
                that.$facebookPreview.fadeIn(240);
                that.$facebookBtn.addClass('active');
                that.$googleBtn.removeClass('active');
            });
        });
        that.$googleBtn.click(function() {
            that.$facebookPreview.fadeOut(240, function() {
                that.$googlePreview.fadeIn(240);
                that.$googleBtn.addClass('active');
                that.$facebookBtn.removeClass('active');
            });
        });
    };
    that.checkPageURL = function(pageURL) {
        $.ajax({
            url: '/versions/2/wizard/modules/checkPageUrlAjax.php',
            type: 'POST',
            data: {
                w: that.websiteID,
                moduleTypeNUM: that.page.moduleTypeNUM,
                moduleID: that.page.moduleID,
                pageURL: pageURL
            },
            dataType: 'json',
            success: function(response) {
                if (response.status == 'success') return;
                SystemModals.sm_render({
                    id: 'pageURLAlreadyExist',
                    disposable: false,
                    $parent: $('body'),
                    sizeClasses: 'size-s2',
                    headerSettings: {
                        id: 'pageURLAlreadyExistWindowTitle',
                        title: translations.advancedSEO.pageUrlExitsModelTitle
                    },
                    bodySettings: { // body settings
                        content: `
<div style="padding:10px;">
${response.message}
</div>
`
                    },
                    footerSettings: { // footer settings
                        isActive: true,
                        buttons: [{
                            class: 'btn btn-primary',
                            dataAttr: 'data-dismiss="modal"',
                            text: translations.ok
                        }]
                    },
                });
                $('#pageURLAlreadyExist').modal('show');
                that.$url.val('');
            }
        });
    }
    that.update = function(isUpdateInputs) {
        if (isUpdateInputs) {
            that.$title.val(that.seo.title);
            that.$description.html(that.seo.description);
            that.$url.val(that.seo.url);
            that.$url.attr('placeholder', that.urlPlaceholder);
            that.$keywords.val(that.seo.keywords);
            that.seo.image = getImageWRV1(800, that.seo.image);
            if (that.seo.image && that.seo.image.length > 0) {
                that.$image.data('value', that.escapeHtml(that.seo.image));
            }
            that.$seoDomain.html(decodeURIComponent(that.page.domain));
            if (!that.seo.isActive || that.seo.image.length === 0) {
                that.$html.find('.seo-f-image').css('background-image', 'url(' + that.page.image + ')');
            } else {
                that.$html.find('.seo-f-image').css('background-image', 'url(' + that.seo.image + ')');
            }
            if (that.seo.noindex == true) {
                that.$noindex.prop('checked', true);
            }
        } else {
            that.seo.title = that.$title.val();
            that.seo.description = that.$description.val();
            that.seo.url = that.$url.val();
            if (that.$url.length > 0) {
                let checkURL = that.$url.val().length > 0 ? that.$url.val() : '';
                if (that.urlPlaceholder != checkURL) {
                    that.checkPageURL(checkURL);
                }
            }
            that.seo.keywords = that.$keywords.val();
            that.seo.image = getImageWRV1(800, that.$image.val());
            if (that.seo.image.length > 0) {
                that.$html.find('.seo-f-image').css('background-image', 'url(' + that.seo.image + ')');
            } else {
                that.$html.find('.seo-f-image').css('background-image', 'url(' + that.page.image + ')');
            }
            that.seo.noindex = that.$noindex.is(":checked");
        }
        that.$titleCharLimit.html(70 - that.seo.title.length);
        if (that.isDescriptionCharLimit) {
            that.$descriptionCharLimit.html(320 - that.seo.description.length);
        }
        if (isUpdateInputs && !that.seo.isActive) {
            that.$html.find('.advanced-seo-title').html(translations.advancedSEO.metaTitleTagExample);
            that.$html.find('.advanced-seo-description').html(translations.advancedSEO.metaDescriptionTagExample);
            that.$html.find('.advanced-seo-url').html(that.seo.url.length > 0 ? that.seo.url : that.pageUrlExample);
        } else {
            if (that.seo.title.length > 0) {
                that.$html.find('.advanced-seo-title').html(that.seo.title);
            } else {
                that.$html.find('.advanced-seo-title').html(translations.advancedSEO.metaTitleTagExample);
            }
            if (that.seo.description.length > 0) {
                that.$html.find('.advanced-seo-description').html(that.seo.description);
            } else {
                that.$html.find('.advanced-seo-description').html(translations.advancedSEO.metaDescriptionTagExample);
            }
            that.$html.find('.advanced-seo-url').html(that.seo.url);
        }
        that.$html.find('.advanced-seo-domain').html(decodeURIComponent(that.page.domain));
        if (that.$facebookPreviewDomain.text().indexOf('/') > -1) {
            that.$facebookPreviewDomain.text(that.$facebookPreviewDomain.text().substr(0, that.$facebookPreviewDomain.text().indexOf('/')));
        }
        if (that.$facebookPreviewDomain.text().substring(0, 4) == 'www.') {
            that.$facebookPreviewDomain.text(that.$facebookPreviewDomain.text().substring(4));
        }
    }
    that.generateHTML = function() {
        var html = '<div class="in-box-widget">';
        html += '<div id="advancedSEOBOX" class="widget-box' + (that.type == 'module' ? " static" : "") + '">';
        if (that.type == 'item') {
            html += '<div class="widget-header custom-pro-limits">';
            html += '<h5 class="widget-title">';
            html += translations.advancedSEO.customSEOTitle;
            html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" data-html="true" title="' + translations.advancedSEO.customSEOTooltip + '">';
            html += '<i class="fa fa-question-circle"></i>';
            html += '</a>';
            html += '</h5>';
            html += '<div class="widget-toolbar">';
            html += '<a><i class="ace-icon fa fa-chevron-down"></i></a>';
            html += '</div>';
            html += '</div>';
        }
        html += '<div class="widget-body">';
        html += '<div class="widget-main">';
        html += '<div class="advanced-seo-container closed-to-premium">';
        html += '<div class="s123-advanced-seo row">';
        html += '<div class="col-xs-12">';
        html += '<div class="form-group">';
        html += '<label for="seoTitle">';
        html += translations.advancedSEO.title.title;
        html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" data-html="true" title="' + translations.advancedSEO.title.tooltip + '">';
        html += '<i class="fa fa-question-circle"></i>';
        html += '</a>';
        html += '</label>';
        html += '<div class="form-group seo-title-input">';
        html += '<input type="text" class="form-control" data-name="seoTitle" value="" placeholder="' + translations.advancedSEO.title.placeholder + '" maxlength="70">';
        html += '<span id="seoTitleCharLimit"></span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="col-xs-12">';
        html += '<div class="form-group">';
        html += '<label for="seoDescription">';
        html += translations.advancedSEO.description.title;
        html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" data-html="true" title="' + translations.advancedSEO.description.tooltip + '">';
        html += '<i class="fa fa-question-circle"></i>';
        html += '</a>';
        html += '</label>';
        html += '<div class="form-group seo-description-input">';
        html += '<textarea class="form-control" data-name="seoDescription" placeholder="' + translations.advancedSEO.description.placeholder + '"' + (that.isDescriptionCharLimit ? ' maxlength="320" ' : ' ') + 'rows="4"></textarea>';
        if (that.isDescriptionCharLimit) {
            html += '<div class="description-char-limit">'
            html += '<span>' + translations.advancedSEO.remaining + '</span><span id="seoDescriptionCharLimit"></span>';
            html += '</div>';
        }
        html += '</div>';
        html += '</div>';
        html += '</div>';
        if (that.type == 'item') {
            html += '<div class="col-xs-12">';
            html += '<div class="form-group">';
            html += '<label for="seoURL">';
            html += translations.advancedSEO.url.title;
            html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" data-html="true" title="' + translations.advancedSEO.url.tooltip + '">';
            html += '<i class="fa fa-question-circle"></i>';
            html += '</a>';
            html += '</label>';
            html += '<div class="input-group" style="direction: ltr;">';
            html += '<span class="seo-domain input-group-addon"></span>';
            html += '<input type="text" class="form-control" data-name="seoURL" value="" placeholder="' + that.urlPlaceholder + '">';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }
        html += '<div class="col-xs-12">';
        html += '<div class="form-group">';
        html += '<label for="seoKeywords">';
        html += translations.advancedSEO.keywords.title;
        html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" data-html="true" title="' + translations.advancedSEO.keywords.tooltip + '">';
        html += '<i class="fa fa-question-circle"></i>';
        html += '</a>';
        html += '</label>';
        html += '<input type="text" class="form-control" data-name="seoKeywords" value="" placeholder="' + translations.advancedSEO.keywords.placeholder + '">';
        html += '</div>';
        html += '</div>';
        html += '<div class="col-xs-12">';
        html += '<div class="input-file-upload" id="seoImage" data-website-id="' + that.websiteID + '" data-mb="30" data-file-kind="1" data-value="" data-text="' + translations.advancedSEO.image.title + '" data-library="image" data-min-height="200" data-min-width="200"></div>';
        html += '</div>';
        html += '<div class="col-xs-12 seo-no-index-box">';
        html += '<div class="form-group">';
        html += '<label class="inline">';
        html += '<input id="seoNoindex" class="ace ace-switch" type="checkbox" data-name="seoNoindex">';
        html += '<span class="lbl middle"></span>';
        html += translations.advancedSEO.noindex.title;
        html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" data-html="true" title="' + (that.type == 'item' ? translations.advancedSEO.noindex.tooltipForItem : translations.advancedSEO.noindex.tooltipForModule) + '">';
        html += '<i class="fa fa-question-circle"></i>';
        html += '</a>';
        html += '</label>';
        html += '</div>';
        html += '<div class="seo-preview-container col-xs-12">';
        html += '<div class="seo-preview-buttons">';
        html += '<div class="btn-group" style="display:flex;">';
        html += '<a href="#" onclick="return false;" class="seo-g-btn active"><li class="fa-brands fa-google"></li>&nbsp;&nbsp;Google</a>';
        html += '<a href="#" onclick="return false;" class="seo-f-btn"><li class="fa-brands fa-facebook"></li>&nbsp;&nbsp;Facebook</a>';
        html += '</div>';
        html += '</div>';
        html += '<div class="seo-preview-tabs">';
        html += '<div class="seo-g-preview">';
        html += '<div class="seo-g-container">';
        html += '<div class="seo-g-title">';
        html += '<span class="advanced-seo-title"></span>';
        html += '</div>';
        html += '<div class="seo-g-url">';
        html += '<span>https://</span><span class="advanced-seo-domain"></span><span class="advanced-seo-url"></span>';
        html += '<span class="caret"></span>';
        html += '</div>';
        html += '<div class="seo-g-description">';
        html += '<span class="advanced-seo-description"></span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="seo-f-preview">';
        html += '<div class="seo-f-container">';
        html += '<div class="seo-f-image advanced-seo-image"></div>';
        html += '<div class="seo-f-content">';
        html += '<span class="seo-f-url advanced-seo-domain"></span>';
        html += '<div class="seo-f-text">';
        html += '<div style="margin-top:5px">';
        html += '<div class="seo-f-title advanced-seo-title"></div>';
        html += '</div>';
        html += '<span class="seo-f-description advanced-seo-description"></span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '<textarea id="advancedSEO" name="advancedSEO" class="form-control hidden"></textarea>';
        if (that.type == 'item') {
            html += '<input type="hidden" id="advancedSEOurl" name="advancedSEOurl" value="">';
            html += '<input type="hidden" data-name="seoCustomURL" value="">';
        }
        html += '</div>';
        html += '</div>'
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return $(html);
    }
    that.setInModal = function() {
        var html = '<div class="modal s123-modal system-modal fade" id="advancedSEOModal" tabindex="-1" role="dialog" aria-labelledby="advancedSEOModal">';
        html += '<div class="modal-dialog modal-lg modal-xlg" role="document">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        html += '<h4 class="modal-title">' + translations.advancedSEO.customSEOTitle + '</h4>';
        html += '</div>';
        html += '<div class="modal-body">';
        html += '<div class="container">';
        html += '<div id="advancedSEOInputs" class="col-xs-6"></div>';
        html += '<div id="advancedSEOPreview" class="col-xs-6"></div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="seo-modal-footer">';
        html += '<a class="btn btn-success" data-toggle="modal" data-target="#advancedSEOModal" href="#" onclick="return false;">' + translations.update + '</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        var $html = $(html);
        that.$html.find('#advancedSEOBOX').addClass('activate').addClass('static');
        if ($(window).outerWidth(true) > 768) {
            that.$html.find('.seo-preview-container').detach().appendTo($html.find('#advancedSEOPreview'));
            that.$html.find('.s123-advanced-seo').detach().appendTo($html.find('#advancedSEOInputs'));
        } else {
            that.$html.find('.s123-advanced-seo').detach().appendTo($html.find('.modal-body .container'));
        }
        $html.appendTo(that.$html.find('.advanced-seo-container'));
        that.$html.find('#advancedSEOBOX .widget-header').attr('id', 'openModalSEO');
        that.$html.find('#advancedSEOBOX .widget-main').css('padding', '0');
        that.$html.find('#advancedSEOBOX .widget-header').on('click', function(e) {
            that.$html.find('#advancedSEOModal').modal('toggle');
        });
    }
    that.setPreviewOnSide = function() {
        var html = '<div class="row">';
        html += '<div id="advancedSEOInputs" class="col-xs-6">';
        html += '</div>';
        html += '<div id="advancedSEOPreview" class="col-xs-6">';
        html += '<div class="in-box-widget">';
        html += '<div class="widget-box static">';
        html += '<div class="widget-body">';
        html += '<div class="widget-main">';
        html += '<div class="advanced-seo-container closed-to-premium">';
        html += '<div class="s123-advanced-seo row">';
        html += '</div>';
        html += '</div>'
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        var $html = $(html);
        that.$html.find('.seo-preview-container').appendTo($html.find('#advancedSEOPreview .s123-advanced-seo'));
        $html.find('#advancedSEOInputs').append(that.$html);
        that.$html = $html;
    }
    that.isActive = function() {
        var isActive = false;
        $.each(that.seo, function(input, value) {
            if (input == 'url') return true;
            if (value.length > 0) isActive = true;
        });
        return isActive;
    }
    that.pageTitleHandler = function() {
        if (!that.page.$title) return;
        if (!that.seo.isActive) return;
        that.page.$title.on('change.s123_advanced_seo', function() {
            bootbox.alert(translations.advancedSEO.pageTitleHandlerMsg);
        });
    }
    that.escapeHtml = function(text) {
        if (!text) return text;
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.toString().replace(/[&<>"']/g, function(m) {
            return map[m];
        });
    }
    that.getFieldValue = function(name) {
        if (!that.seo[name]) return '';
        return that.seo[name];
    }
    return that;
}();
var Promote = new function() {
    var pro = this;
    this.init = function(settings) {
        pro.$container = settings.$container;
        pro.rules = settings.rules;
        pro.websiteID = settings.websiteID;
        if (findBootstrapEnvironment() === 'xs') return;
        pro.getPromote();
    };
    this.getPromote = function() {
        $.ajax({
            type: 'POST',
            url: '/files/vendor/site123/promote/getPromoteAJAX.php',
            data: {
                w: pro.websiteID,
                r: JSON.stringify(pro.rules)
            },
            success: function(data) {
                data = tryParseJSON(data);
                if (!data) return;
                pro.generatePromote(data.promote);
                $('.s123-panel-promote').tooltip();
            }
        });
    };
    this.generatePromote = function(promote) {
        var html = pro.generateBoxHTML(promote);
        var $promote = $(html);
        if (promote.title) {
            $promote.find('.p-b-title').html(promote.title);
        }
        if (promote.text) {
            $promote.find('.p-b-text').html(promote.text);
        }
        if (promote.button) {
            $promote.find('.p-b-button a').html(promote.button.text);
            if (promote.button.url) {
                $promote.find('.p-b-button a').attr('href', promote.button.url);
            }
            if (promote.button.modal) {
                $promote.find('.p-b-button a')
                    .attr('data-toggle', 'modal')
                    .attr('data-target', '#' + promote.button.modal);
            }
        }
        if (promote.tooltip) {
            $promote.attr('data-original-title', promote.tooltip)
        }
        if (promote.containerLink) {
            var $link = $('<a style="text-decoration: none;color:black;"></a>');
            $link.attr('href', promote.containerLink);
            $promote = $link.append($promote);
        }
        if (promote.onClick) {
            $promote.css('cursor', 'pointer')
            $promote.on('click', function() {
                if (promote.onClick == 'inviteFriends') inviteFriends();
            });
        }
        pro.$container.append($promote);
    }
    this.generateBoxHTML = function(promote) {
        var html = '';
        html += '<div class="s123-panel-promote ' + promote.class + '" data-rel="tooltip">';
        if (promote.title) {
            html += '<div class="p-b-title"></div>';
        }
        if (promote.text) {
            html += '<div class="p-b-text"></div>';
        }
        if (promote.button) {
            html += '<div class="p-b-button text-center">';
            html += '<a class="btn btn-primary"></a>';
            html += '</div>';
        }
        html += '</div>';
        return html;
    };

    function tryParseJSON(str) {
        try {
            var Obj = JSON.parse(str);
            if (Obj && typeof Obj === "object") {
                return Obj;
            }
        } catch (e) {}
        return false;
    }
};
var upgradeFeaturesManager = new function() {
    var that = this;
    that.proFeatures = {};
    that.init = function(settings) {
        if (!settings) return;
        that.websiteID = settings.websiteID;
        that.packageNUM = settings.packageNUM;
        that.website_uniqueID = settings.website_uniqueID;
        renderNewUpgradeModal();
    };
    that.show = function(featureData) {
        const featureID = featureData.featureID;
        const limitedToPackageNUM = featureData.limitedToPackageNUM ? featureData.limitedToPackageNUM : 1;
        const modal = SystemModals.sm_get('upgradePackage');
        modal.$html.data('upgrade-reason', featureID);
        getProFeatures((data) => {
            modal.updateHTML('body', generateFeatureContentHtml(data));
            updateUpgradeButtonReason(featureID, modal, limitedToPackageNUM);
            modal.show();
        }, featureID, limitedToPackageNUM);
    };

    function updateUpgradeReason(featureID, isUpdateUpgradeReason) {
        if (!featureID || featureID.length === 0) return;
        updateUpgradeButtonReason(featureID);
        if (isUpdateUpgradeReason) {
            $.ajax({
                type: "POST",
                url: "/manager/upgrade/updateUpgradeReason.php",
                data: 'w=' + that.websiteID + '&ur=' + featureID,
                success: function(data) {}
            });
        }
    }

    function updateUpgradeButtonReason(featureID, modal, limitedToPackageNUM) {
        if (!featureID || featureID.length === 0) return;
        var href = modal.$html.find('.upgrade-btn').attr('href');
        if (href.indexOf('ur=') != -1) {
            href = replaceQueryParam('ur', featureID, href);
        } else {
            href += '&ur=' + featureID;
        }
        if (href.indexOf('minPackage=') != -1) {
            href = replaceQueryParam('minPackage', limitedToPackageNUM, href);
        } else {
            href += `&minPackage=${limitedToPackageNUM}`;
        }
        modal.$html.find('.upgrade-btn').attr('href', href);
    }

    function generateFeatureContentHtml(data) {
        let texts = data.text;
        texts = texts.replaceAll('{{', '');
        texts = texts.replace(/(}})[^}]*$/, '');
        texts = texts.split('}}');
        let title = texts[0].split(':')[1];
        let otherTexts = texts[1].split('##bullet_list##');
        let subtitle = otherTexts[0].split(':')[1];
        let bullets = otherTexts[1] ? otherTexts[1].split('***') : [];
        var html = '';
        html += '<div class="w-u-h-c">';
        html += '<div class="content">';
        html += '<div class="content-top">';
        html += '<div class="title-container">';
        html += '<h3 class="title">' + title + '</h3>';
        html += '<p class="sub-title">' + subtitle + '</p>';
        html += '</div>';
        html += '</div>';
        html += '<div class="content-middle">';
        if (bullets.length > 0) {
            html += '<ul class="list-unstyled" style="grid-template-columns: repeat(' + Math.ceil(bullets.length / 3) + ',1fr);">';
            $.each(bullets, function(index, value) {
                html += '<li><i class="ace-icon fa fa-check blue"></i> ' + value + '</li>';
            });
            html += '</ul>';
        }
        if (data.mediaType == 'image' && data.media != '') {
            html += '<img src="' + data.media + '"/>';
        } else if (data.mediaType == 'video' && data.media != '') {
            html += '<video controls="" poster=""><source src="' + data.media + '" type="video/mp4"></video>';
        }
        html += '</div>';
        html += '</div>';
        html += '</div>';
        const $html = $(html);
        ProFeature_addLabel({
            'websiteID': that.websiteID,
            'packageNUM': that.packageNUM,
            'limitedToPackageNUM': '1',
            'toolType': data.featureType,
            '$element': $html.find('.title-container .title'),
            'upgradeReason': data.featureType,
            'text': `${data.packageName} +`
        });
        return $html;
    }

    function renderNewUpgradeModal() {
        let upgrade_url = `/manager/upgrade/index.php?wu=${that.website_uniqueID}&ur=`;
        if (parseInt(OpenPremiumFeatures(that.packageNUM)) > 1) {
            upgrade_url += '&upgrade=1';
        }
        SystemModals.sm_render({
            id: 'upgradePackage',
            disposable: false,
            $parent: $('body'),
            sizeClasses: 'size-l1',
            headerSettings: {
                id: 'upgradePackageTitle',
                title: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crown" class="svg-inline--fa fa-crown fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style="color: #fee188"><path fill="currentColor" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path></svg> ${translations.upgradeFeaturesManager.title}`
            },
            bodySettings: { // body settings
                content: '&nbsp;'
            },
            footerSettings: { // footer settings
                isActive: true,
                buttons: [{
                    class: 'btn btn-lg btn-success upgrade-btn',
                    dataAttr: 'target="_blank"',
                    href: upgrade_url,
                    text: translations.upgradeFeaturesManager.upgradeBtn
                }, {
                    class: 'btn btn-link',
                    dataAttr: 'data-dismiss="modal"',
                    text: translations.upgradeFeaturesManager.maybeLater
                }]
            },
            showCallback: function(event, modal) {
                var button = $(event.relatedTarget);
                var moduleID = button.data('moduleid');
                var moduleTypeNUM = button.data('moduletypenum');
                var modalSize = button.data('modal-size');
                if (modalSize) modal.setWidth(modalSize);
            },
            shownCallback: () => {
                $('body.modal-open .main-container').addClass('modal-backdrop-blur');
            },
            hideCallback: () => {
                $('body.modal-open .main-container').removeClass('modal-backdrop-blur');
            }
        });
    }

    function getProFeatures(callback, upgradeReason, limitedToPackageNUM) {
        $.ajax({
            type: "POST",
            url: "/versions/2/wizard/upgradeFeaturesManager/upgradeFeatureAjax.php",
            data: {
                w: that.websiteID,
                websiteID: that.websiteID,
                featureID: upgradeReason
            },
            success: (result) => {
                result = JSON.parse(result);
                const disable = result.data ? result.data.disable : true;
                if (result.success && !disable) {
                    callback(result.data);
                } else {
                    let upgrade_url = `/manager/upgrade/index.php?wu=${that.website_uniqueID}&ur=${encodeURIComponent(upgradeReason)}&minPackage=${limitedToPackageNUM}`;
                    if (parseInt(OpenPremiumFeatures(that.packageNUM)) > 1) {
                        upgrade_url += '&upgrade=1';
                    }
                    window.open(upgrade_url, '_blank');
                    return false;
                }
            }
        });
    }
    return that;
}();
var SuggestText = function() {
    var _ = {
        $bootbox: '',
        websiteID: '',
        translations: '',
        $tool: '',
        field: '',
        lang: '',
        hideQuotes: false,
        openModal: '',
        headerContentType: '1',
        inlineModulesList: ['faq_inline', 'services_inline', 'testimonials_inline', 'team_inline', 'menu_inline'],
        ModulesPreviewManageBtns: [11, 3, 5, 4, 9, 17, 52],
        stopTextGenerationFlag: true,
        intervalId: '',
        onBoardingFlag: false,
        fallBackAttempts: 1,
        fallBackAttemptsLimit: 5, // try 5 times
    };
    _.init = function(settings) {
        _.translations = settings.translations;
        _.websiteID = settings.websiteID;
        _.refresh();
        $(document).on('SuggestText.refresh', function() {
            _.refresh();
        });
    };
    _.IsRTL = function($language) {
        $language = topWindow.$('html').attr('dir') == 'rtl' ? 'he' : $language;
        if ($language === 'he_IL' || $language === 'he' || $language === 'ar_SA' || $language === 'ar' || $language === 'fa') {
            return true;
        } else {
            return false;
        }
    }
    _.getData = function(action, search, filter) {
        var deferreds = {
            system: $.Deferred(),
            quotes: $.Deferred(),
        };
        _.getSuggestTexts(search, filter, deferreds);
        if (!_.hideQuotes) {
            _.getQuotes(search, filter, deferreds, 50);
        } else {
            deferreds.quotes.resolve();
        }
        $.when(deferreds.system, deferreds.quotes).done(function(system, quotes) {
            if (action == 'open') {
                _.showModal(_.createContent(system, quotes));
            } else {
                const data = _.addSuggestText(system, quotes);
                _.$bootbox.find('.suggest-text-no-result').hide();
                if (!data) _.$bootbox.find('.suggest-text-no-result').show();
                _.$bootbox.find('.suggest-texts-tool').html('');
                _.$bootbox.find('.suggest-texts-tool').append(data);
                _.$bootbox.find('.suggest-apply-btn').on('click', function() {
                    _.setText(_.$bootbox, $(this));
                });
            }
        });
    }

    function getTextAIFieldsDesign() {
        if (_.inlineModulesList.includes(_.field) || _.field == 'headers') {
            return 'ai-text-input-grid';
        } else {
            return 'ai-text-input-wrap';
        }
    }

    function stopTextGeneration($html) {
        if (_.onBoardingFlag) return;
        $html.find('.suggest-ai-texts').css('height', '').html('');
        $html.find('.ai-generate-wrap').removeClass('hidden');
        $html.find('.ai-generate-require-msg').addClass('hidden');
        $html.find('.suggest-ai-loading').hide();
        _.stopTextGenerationFlag = false;
        if (_.ajaxObj && _.ajaxObj.readyState != 4) {
            _.ajaxObj.abort();
        }
    }

    function isAllInputsEmpty($html) {
        let allInputsEmpty = true;
        $html.find('.ai-input').each(function() {
            if ($(this).val()) {
                allInputsEmpty = false;
            }
        });
        return allInputsEmpty;
    }

    function getOpenAI() {
        let html = '<div class="suggest-ai-tool">';
        html += '<div class="suggest-ai-text widget-box static activate">';
        html += '<div class="widget-body">';
        html += '<div class="widget-main">';
        html += `<div class="${getTextAIFieldsDesign()}">`;
        html += getOpenAIFields();
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += `
<div class="suggest-ai-loading card-clean">
<div class="suggest-ai-loading-body card-clean-body grid-justify-center">
<div class="progress" style="width:70%;position:relative;border-radius:16px;height:25px;">
<div id="progressBar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
<span style="position:absolute;top:calc(100% - 20px);${_.IsRTL(_.lang) ? 'right:50%;left:auto;' : 'left:50%;'}" id="progressText"></span>
</div>
</div>
<div style="padding: 0 40px;text-align:center;opacity:0.8;">
${_.translations.ai.loadingMsg}
</div>
</div>
</div>
`;
        html += '<div class="suggest-ai-texts full fancy-scrollbar"></div>';
        html += `
<div class="ai-text-input-grid-center ai-text-generate-btn-container ai-generate-wrap hidden">
<button class="btn btn-primary ai-text-generate-btn ai-input-btn" aria-label="generate">
${_.translations.ai.generate}
</button>
<div class="ai-generate-require-msg hidden"><br>${_.translations.ai.required}</div>
</div>`;
        html += '</div>';
        const $html = $(html);
        _.stopTextGenerationFlag = isAllInputsEmpty($html);
        $html.find('[data-rel=tooltip]').tooltip({
            container: $html,
            placement: 'auto'
        });
        $html.find('.ai-text-generate-btn').on('click', () => {
            if (_.stopTextGenerationFlag) return;
            if (_.intervalId) clearInterval(_.intervalId); // Stop the progress bar
            $html.find('#progressBar').css('width', '0').attr('aria-valuenow', 0); // Set to 0
            $html.find('#progressText').text('0%');
            $html.find('.suggest-ai-texts').html('');
            $html.find('.suggest-ai-loading').show();
            $html.find('.ai-generate-wrap').addClass('hidden');
            _.getOpenAITexts($html, 0, 'generate');
        });
        $html.find('.ai-input').on('input', function() {
            let value = $(this).val();
            if (value) {
                stopTextGeneration($html);
            } else {
                if (isAllInputsEmpty($html)) {
                    $html.find('.ai-generate-require-msg').removeClass('hidden');
                    _.stopTextGenerationFlag = true;
                }
            }
        })
        $html.find('.ai-content-type-input').on('change', (event) => {
            if (_.onBoardingFlag) return;
            if (_.intervalId) clearInterval(_.intervalId); // Stop the progress bar
            $html.find('#progressBar').css('width', '0').attr('aria-valuenow', 0); // Set to 0
            $html.find('#progressText').text('0%');
            stopTextGeneration($html);
            $html.find('.ai-generate-wrap').addClass('hidden');
            _.headerContentType = event.target.value;
            if (_.headerContentType == '4') {
                $html.find('.ai-text-input:not(".ai-text-content-input")').hide();
                $html.find('.ai-text-custom-input').show();
                $html.find('.suggest-ai-texts').html('');
                $html.find('.suggest-ai-loading').show();
                _.getOpenAITexts($html, 0, 'generate');
            } else {
                $html.find('.ai-text-input:not(".ai-text-content-input")').show();
                $html.find('.ai-text-custom-input').hide();
                $html.find('.suggest-ai-texts').html('');
                $html.find('.suggest-ai-loading').show();
                _.getOpenAITexts($html, 0, 'generate');
            }
        });
        initializeCategoryInput($html);
        _.showModal($html);
        if (!_.stopTextGenerationFlag) {
            _.getOpenAITexts($html, 0, 'openModal');
        } else {
            $html.find('.suggest-ai-loading').hide();
            $html.find('.ai-generate-wrap').removeClass('hidden');
            $html.find('.ai-generate-require-msg').removeClass('hidden');
        }
    }

    function onBoarding($html, callback, action) {
        _.onBoardingFlag = true;
        $html.find('.widget-main').append('<button class="btn btn-primary" id="onBoardingBtn">' + _.translations.ai.onboarding.save + '</button>');
        $html.find('.widget-main').prepend('<p class="text-120" id="onBoardingText">' + _.translations.ai.onboarding.title + '</button>');
        $html.find('.suggest-ai-loading').hide();
        $html.find('.suggest-ai-texts').hide();
        $html.find('.ai-text-content-input').hide();
        $html.find('#onBoardingBtn').on('click', function() {
            let inputsValues = getFieldsValue($html.find('.ai-input'));
            if (!inputsValues.about || !inputsValues.category) {
                $html.find('.ai-about-input').addClass('error');
                $html.find('.ai-category-input').addClass('error');
                if (!$html.find('.onboardingErrorMsg').length) {
                    $html.find('.ai-text-input-grid').after('<span class="onboardingErrorMsg" style="color:red;display:block">' + _.translations.ai.onboarding.error + '</span>');
                }
                $html.find('.ai-input').on('focus', function() {
                    $html.find('.ai-about-input').removeClass('error');
                    $html.find('.ai-category-input').removeClass('error');
                    $html.find('.onboardingErrorMsg').remove();
                });
                return;
            }
            updateWebsiteData(inputsValues);
            $html.find('#onBoardingBtn').hide();
            $html.find('#onBoardingText').hide();
            $html.find('.suggest-ai-loading').show();
            $html.find('.suggest-ai-texts').show();
            $html.find('.ai-text-input-grid-center').addClass('hidden');
            $html.find('.ai-text-content-input').show();
            _.onBoardingFlag = false;
            callback(action);
        });
    }

    function initializeCategoryInput($html) {
        let $input = $html.find('.ai-category-input');
        let categoriesInput = new AutocompleteInput({
            $input: $input,
            html: true,
            intrface_align_reverse: topWindow.intrface_align_reverse,
            pageLoadAjax: function(callback) {
                loadBusinessTypes({}, callback);
            },
            autoCompleteSource: function(callback) {
                loadBusinessTypes({
                    q: $input.val(),
                    language: _.lang
                }, callback);
            }
        });
        $input.addClass('autocomplete-input');

        function loadBusinessTypes(data, callback) {
            let newStructure = [];
            if (!data.q) {
                callback.call(this, newStructure);
                return;
            }
            $.ajax({
                url: '/manager/login/getBusinessTypeAjax.php',
                type: "POST",
                data: data,
                success: function(data) {
                    var data = tryParseJSON(data);
                    $.each(data, function(index, value) {
                        newStructure.push({
                            label: value.categoryHTML,
                            value: value.categoryTXT
                        });
                    });
                    callback.call(this, newStructure);
                }
            });
        }
    }

    function getFieldsValue(inputs) {
        let inputValueArry = {
            'name': '',
            'category': '',
            'position': '',
            'productCategory': '',
            'contentType': '',
            'custom': '',
            'about': '',
            'focus': '',
            'hiddenData': '',
            'description': '',
        }
        $(inputs).each(function(i, obj) {
            inputValueArry[obj.getAttribute('data-input')] = obj.value;
        });
        return inputValueArry;
    }

    function updateWebsiteData(inputValueArry) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/updateWebsiteData.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                inputsValues: inputValueArry,
            },
        });
    }

    function getWebsiteData($html, callback) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/getWebsiteData.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
            },
            success: (data) => {
                data = tryParseJSON(data);
                if (data) {
                    if (data.description) $html.find('.ai-about-input').val(data.description);
                    if (data.businessType) {
                        $html.find('.ai-category-input').val(data.businessType);
                    }
                }
                if (callback) callback.call(this);
            }
        });
    }

    function getOpenAIFields() {
        let name = topWindow.$('#name').val();
        let position = '';
        let productCategory = '';
        let description = '';
        let extraDescription = '';
        let characterLimit = 50;
        let searchBtnPosition = 'category';
        let nameInputTexts = {
            'label': _.translations.ai.business,
            'tooltip': _.translations.ai.businessTT,
            'placeholder': _.translations.ai.business,
        }
        if (['services', 'scheduleBooking', 'course', 'event', 'menu', 'blog', 'article', 'services_extra'].includes(_.field)) {
            name = name != $('input[name="title"]').val() ? $('input[name="title"]').val() : name;
            if (['blog', 'article'].includes(_.field)) {
                name = name != $('textarea[name="title"]').val() ? $('textarea[name="title"]').val() : name;
            }
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            if (_.field === 'services_extra') {
                extraDescription = $('textarea[name="description"]').val() ? $('textarea[name="description"]').val() : '';
            }
            nameInputTexts = {
                'label': _.translations.ai[_.field.replace("_extra", "")],
                'tooltip': _.translations.ai[`${_.field.replace("_extra", "")}TT`],
                'placeholder': _.translations.ai[_.field.replace("_extra", "")],
            }
        } else if (['team', 'team_extra'].includes(_.field)) {
            name = name != $('input[name="name"]').val() ? $('input[name="name"]').val() : name;
            position = name != $('input[name="job_position"]').val() ? $('input[name="job_position"]').val() : name;
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'position';
            if (_.field === 'team_extra') {
                extraDescription = $('textarea[name="description"]').val() ? $('textarea[name="description"]').val() : '';
            }
            nameInputTexts = {
                'label': _.translations.ai.member,
                'tooltip': _.translations.ai.memberTT,
                'placeholder': _.translations.ai.member,
            }
        } else if (['ecommerce', 'ecommerce_extra'].includes(_.field)) {
            name = name != $('input[name="title"]').val() ? $('input[name="title"]').val() : name;
            let productCategoryFirstOption = $('#collections').val() ? $('#collections option[value="' + $('#collections').val()[0] + '"]').attr('data-title') : '';
            productCategory = productCategory != productCategoryFirstOption ? productCategoryFirstOption : productCategory;
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'productCategory';
            if (_.field === 'ecommerce_extra') {
                extraDescription = $('textarea[name="description"]').val() ? $('textarea[name="description"]').val() : '';
            }
            nameInputTexts = {
                'label': _.translations.ai.product,
                'tooltip': _.translations.ai.productTT,
                'placeholder': _.translations.ai.product,
            }
        } else if (_.field === 'chart') {
            name = name != $('input[name="chart_title"]').val() ? $('input[name="chart_title"]').val() : name;
            var chartType = $('#chart_type') ? $('#chart_type').val() : '';
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            nameInputTexts = {
                'label': _.translations.ai.chart,
                'tooltip': _.translations.ai.chartTT,
                'placeholder': _.translations.ai.chart,
            }
        } else if (_.field === 'restaurant') {
            var address = $('#address') ? $('#address').val() : '';
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            nameInputTexts = {
                'label': _.translations.ai.chart,
                'tooltip': _.translations.ai.chartTT,
                'placeholder': _.translations.ai.chart,
            }
        } else if (_.field === 'imageCompare') {
            name = name != $('input[name="comparison_title"]').val() ? $('input[name="comparison_title"]').val() : name;
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            nameInputTexts = {
                'label': _.translations.ai.imageCompare,
                'tooltip': _.translations.ai.imageCompareTT,
                'placeholder': _.translations.ai.imageCompare,
            }
        } else if (_.field === 'faq') {
            name = name != $('input[name="question"]').val() ? $('input[name="question"]').val() : name;
            characterLimit = $('input[name="question"]').attr('data-rule-maxlength') ? $('input[name="question"]').attr('data-rule-maxlength') : characterLimit;
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            nameInputTexts = {
                'label': _.translations.ai.faq,
                'tooltip': _.translations.ai.faqTT,
                'placeholder': _.translations.ai.faq,
            }
        } else if (_.field === 'testimonials') {
            name = name != $('input[name="name"]').val() ? $('input[name="name"]').val() : name;
            description = $('input[name="title"]').val() ? $('input[name="title"]').val() : '';
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'description';
            nameInputTexts = {
                'label': _.translations.ai.testimonial,
                'tooltip': _.translations.ai.testimonialTT,
                'placeholder': _.translations.ai.testimonial,
            }
        }
        const SearchBtn = `
<div class="ai-text-input-flex">
<button class="btn btn-primary ai-text-generate-btn ai-input-btn hidden" aria-label="generate">
<i class="fal fa-search"></i>
</button>
</div>
`;
        let nameInput = `
<div class="form-group ai-text-input">
<label>${nameInputTexts.label}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${nameInputTexts.tooltip}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="${characterLimit}" class="ai-input ai-name-input form-control" placeholder="${nameInputTexts.placeholder}" value="${name}" data-input="name">
${searchBtnPosition == 'name' ? SearchBtn : ''}
</div>
</div>
`;
        let categoryInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.category}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.categoryTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-category-input form-control" placeholder="${_.translations.ai.categoryPH}" data-input="category">
${searchBtnPosition == 'category' ? SearchBtn : ''}
</div>
</div>
`;
        let productCategoryInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.category}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.categoryTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-product-category-input form-control" placeholder="${_.translations.ai.categoryPH}" value="${productCategory}" data-input="productCategory">
${searchBtnPosition == 'productCategory' ? SearchBtn : ''}
</div>
</div>
`;
        let positionInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.position}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.positionTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-position-input form-control" placeholder="${_.translations.ai.positionPH}" value="${position}" data-input="position">
${searchBtnPosition == 'position' ? SearchBtn : ''}
</div>
</div>
`;
        let contentTypeInput = `
<div class="form-group ai-text-input ai-text-content-input">
<label>${_.translations.ai.contentType}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.contentTypeTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<select class="ai-input ai-content-type-input form-control" data-input="contentType">
<option value="1" ${_.headerContentType == '1' ? 'selected' : ''}>${_.translations.ai.titleOption}</option>
<option value="2" ${_.headerContentType == '2' ? 'selected' : ''}>${_.translations.ai.shortAboutOption}</option>
<option value="3" ${_.headerContentType == '3' ? 'selected' : ''}>${_.translations.ai.longAboutOption}</option>
<option value="4" ${_.headerContentType == '4' ? 'selected' : ''}>${_.translations.ai.customOption}</option>
</select>
</div>
</div>
`;
        let customInput = `
<div class="form-group ai-text-input ai-text-custom-input" style="display:none">
<label>${_.translations.ai.custom}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.customTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="200" class="ai-input ai-custom-input form-control" placeholder="${_.translations.ai.customPH}" data-input="custom">
${searchBtnPosition == 'category' ? SearchBtn : ''}
</div>
</div>
`;
        let aboutInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.about}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.aboutTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="150" class="ai-input ai-about-input form-control" placeholder="${_.translations.ai.aboutPH}" data-input="about">
${searchBtnPosition == 'about' ? SearchBtn : ''}
</div>
</div>
`;
        let focusInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.focus}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.focusTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-focus-input form-control" placeholder="${_.translations.ai.focusPH}" data-input="focus">
${searchBtnPosition == 'focus' ? SearchBtn : ''}
</div>
</div>
`;
        let descriptionInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.description}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.descriptionTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-description-input form-control" placeholder="${_.translations.ai.descriptionPH}" value="${description}" data-input="description">
${searchBtnPosition == 'description' ? SearchBtn : ''}
</div>
</div>
`;
        if (['services', 'scheduleBooking', 'course', 'event', 'menu', 'blog', 'article', 'imageCompare', 'faq', 'services_extra'].includes(_.field)) {
            return `
${nameInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${extraDescription}">
`;
        } else if (['team', 'team_extra'].includes(_.field)) {
            return `
${nameInput}
${positionInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${extraDescription}">
`;
        } else if (['ecommerce', 'ecommerce_extra'].includes(_.field)) {
            return `
${nameInput}
${productCategoryInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${extraDescription}">
`;
        } else if (_.field === 'headers') {
            return `
${nameInput}
${categoryInput}
${aboutInput}
${contentTypeInput}
${customInput}
`;
        } else if (_.inlineModulesList.includes(_.field)) {
            return `
${nameInput}
${categoryInput}
${aboutInput}
${focusInput}
`;
        } else if (_.field === 'chart') {
            return `
${nameInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${chartType}">
`;
        } else if (_.field === 'restaurant') {
            return `
${nameInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${address}">
`;
        } else if (_.field === 'testimonials') {
            return `
${nameInput}
${descriptionInput}
`;
        }
        return `
${nameInput}
${categoryInput}
`;
    }

    function getOpenAiMoreText(field, inputsValues, moreText, id, $html) {
        $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html('<i class="suggest-ai-in-text-loading ace-icon fa fa-spinner fa-spin"></i>');
        return $.ajax({
            type: "POST",
            url: "/manager/suggestText/openAI.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                inputsValues: inputsValues,
                tool: field,
                moreText: moreText,
            },
            success: (data) => {
                data = tryParseJSON(data);
                $html.find('.suggest-text[data-id="' + id + '"] .suggest-ai-in-text-loading').remove();
                if (!data.response || !data.response.choices) {
                    $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html(_.translations.ai.noResults);
                } else {
                    if (field === 'services_inline_answer') {
                        $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html(`
<div class="ai-short">${data.response.choices[0].short}</div>
<div class="ai-content">${data.response.choices[0].content}</div>
<div class="ai-image hidden">${data.response.choices[0].image_keyword}</div>
`);
                    } else if (field === 'testimonials_inline_answer') {
                        $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html(`
<div class="ai-content">${data.response.choices[0].testimonial}</div>
<div class="ai-image hidden">${data.response.choices[0].image_keyword}</div>
`);
                    } else {
                        $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html(data.response.choices[0].text);
                    }
                    $html.find('.suggest-text[data-id="' + id + '"] .suggest-generate-more-btn').remove();
                    $html.find('.suggest-text[data-id="' + id + '"] .suggest-apply-ai').show();
                    $html.find('.suggest-text[data-id="' + id + '"]').off('click.textAi');
                    $html.find('.suggest-text[data-id="' + id + '"]').on('click.textAiMore', function() {
                        _.setText($html, $(this));
                        $html.find('.suggest-text[data-id="' + id + '"] .suggest-apply-ai').html(`<i class="ace-icon fa fa-check"></i>${_.translations.ai.applied}`);
                        $html.find('.suggest-text[data-id="' + id + '"] .suggest-apply-ai').removeClass('btn-primary').addClass('btn-success');
                        $html.find('.suggest-text[data-id="' + id + '"]').addClass('ai-text-disable');
                    });
                }
            }
        });
    }

    function generateImageAndApplyText($html, $this) {
        const imageKeyword = $html.find(`.suggest-text[data-id="${$this.data('id')}"] .ai-image`).text();
        let $image = $html.find(`.suggest-text[data-id="${$this.data('id')}"] .ai-image`);
        $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .suggest-apply-ai').html('<i class="suggest-ai-in-text-loading ace-icon fa fa-spinner fa-spin"></i>');
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/getImage.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                imageKeyword: imageKeyword,
                tool: _.field,
            },
            success: (data) => {
                data = tryParseJSON(data);
                if (!data.image) {
                    $image.removeClass('hidden');
                    $image.html(_.translations.ai.noResults);
                } else {
                    $image.addClass('hidden');
                    $image.html(data.image);
                    $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .suggest-apply-ai').html(`<i class="ace-icon fa fa-check"></i>${_.translations.ai.applied}`);
                    $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .suggest-apply-ai').removeClass('btn-primary').addClass('btn-success');
                    $html.find('.suggest-text[data-id="' + $this.data('id') + '"]').addClass('ai-text-disable');
                    _.setText($html, $this);
                }
            }
        });
    }
    _.getOpenAITexts = function($html, startIndex, action) {
        _.fallBackAttempts = 1;
        $html.find('.ai-text-content-input').addClass('ai-text-disable');
        let inputsValues = null;
        if (action == 'generate' || action == 'generateMore' || action == 'generate_one') {
            inputsValues = getFieldsValue($html.find('.ai-input'));
            updateWebsiteData(inputsValues);
            renderTexts(action);
        } else if (action == 'openModal') {
            getWebsiteData($html, function() {
                inputsValues = getFieldsValue($html.find('.ai-input'));
                if (inputsValues.category == '' && inputsValues.about == '') {
                    if (_.field == 'headers' || _.inlineModulesList.includes(_.field)) {
                        onBoarding($html, renderTexts, action);
                    } else {
                        renderTexts(action);
                    }
                } else {
                    renderTexts(action);
                }
            });
        }

        function renderTexts(action) {
            _.progress = action == 'generate_one' ? _.progress : 0;
            var maxTime = 50000; // 50 seconds
            var step = 1000; // 1 second
            var increment = 100 * step / maxTime;
            var inputsValues = getFieldsValue($html.find('.ai-input'));
            _.intervalId = setInterval(() => {
                _.progress += increment;
                if (_.progress > 100) {
                    _.progress = 100;
                }
                $html.find('#progressBar').css('width', _.progress + '%').attr('aria-valuenow', _.progress);
                $html.find('#progressText').text(Math.floor(_.progress) + '%');
                if (_.progress >= 100) {
                    clearInterval(_.intervalId);
                }
            }, step);
            _.ajaxObj = $.ajax({
                type: "POST",
                url: "/manager/suggestText/openAI.php",
                timeout: 40000, // Timeout in milliseconds, e.g., 30000 for 30 seconds
                data: {
                    websiteID: topWindow.websiteID,
                    w: topWindow.websiteID,
                    inputsValues: inputsValues,
                    tool: _.field,
                    action: action,
                    lang: _.lang,
                },
                success: (data) => {
                    data = tryParseJSON(data);
                    $html.find('.suggest-ai-loading').hide();
                    if (data.useLimit) {
                        if ($html.find('.suggest-ai-texts .text-ai-use-limit-msg').length === 0) {
                            $html.find('.suggest-ai-texts').append(`
<div class="text-ai-use-limit-msg">
<p>${data.useLimit.message}</p>
${data.useLimit.btn}
</div>
`);
                        }
                        return;
                    } else if (data.invalidJson && data.generate) {
                        if ($html.find('.suggest-ai-texts .suggest-text').length == 0) {
                            $html.find('.suggest-ai-loading').show();
                        }
                        if (_.fallBackAttempts < _.fallBackAttemptsLimit) {
                            renderTexts('generate_one');
                            _.fallBackAttempts++;
                            return;
                        } else if (_.fallBackAttempts >= _.fallBackAttemptsLimit) {
                            $html.find('.suggest-ai-texts .ai-error-message').remove();
                            $html.find('.suggest-ai-loading').hide();
                            $html.find('.suggest-ai-loading-more').hide();
                            if ($html.find('.ai-text-more-btn').length > 0) {
                                $html.find('.loading-more-text').css('pointer-events', 'auto').show();
                                $('<p class="ai-error-message text-center">' + _.translations.ai.noResults + '</p>').insertBefore($html.find('.ai-text-more-btn'));
                            } else {
                                $html.find('.suggest-ai-texts').append('<p class="ai-error-message text-center">' + _.translations.ai.noResults + '</p>');
                                $html.find('.ai-generate-wrap').removeClass('hidden');
                            }
                            return;
                        }
                    } else if (!data.response || !data.response.choices) {
                        $html.find('.suggest-ai-texts').append('<p class="ai-error-message">' + _.translations.ai.noResults + '</p>');
                        $html.find('.ai-generate-wrap').removeClass('hidden');
                        return;
                    }
                    clearInterval(_.intervalId);
                    $html.find('#progressBar').css('width', '100%').attr('aria-valuenow', 100);
                    $html.find('#progressText').text('100%');
                    $html.find('.suggest-ai-texts').append(_.addAiText(data.response.choices, startIndex));
                    $html.find('.suggest-text').on('click.textAi', function() {
                        if (_.inlineModulesList.includes(_.field)) {
                            generateImageAndApplyText($html, $(this));
                        } else {
                            _.setText($html, $(this));
                        }
                    });
                    $html.find('.suggest-ai-texts').find('.ai-text-more-btn').remove();
                    $html.find('.suggest-ai-texts').append(`<button class="btn btn-link ai-text-more-btn"><span class="loading-more-text">${_.translations.ai.showMore}</span><i class="suggest-ai-loading-more ace-icon fa fa-spinner fa-spin"></i></button>`);
                    $html.find('.suggest-ai-loading-more').hide();
                    $html.find('.ai-text-more-btn').on('click', function() {
                        $html.find('.suggest-ai-loading-more').show();
                        $html.find('.loading-more-text').hide();
                        $(this).css('pointer-events', 'none');
                        $html.find('.suggest-ai-texts .ai-error-message').remove();
                        _.getOpenAITexts($html, $html.find('.suggest-ai-texts .suggest-text').length, 'generateMore');
                    });
                    var winObject = topWindow;
                    if (winObject.$('.suggest-ai-text').length == '0') return;
                    winObject.$('.suggest-ai-texts').css('height', winObject.$('.suggest-ai-text').outerHeight() + 250);
                    $html.find('.ai-text-content-input').removeClass('ai-text-disable');
                },
                error: function(xhr, status, error) {
                    if (status === "timeout") {
                        if (action == 'generateMore') {
                            $html.find('.suggest-ai-loading-more').hide();
                            $html.find('.loading-more-text').show();
                            $(this).css('pointer-events', 'auto');
                        } else {
                            $html.find('.suggest-ai-loading').hide();
                            $html.find('.suggest-ai-texts').append('<p>' + _.translations.ai.noResults + '</p>');
                            $html.find('.ai-generate-wrap').removeClass('hidden');
                        }
                        return;
                    }
                }
            });
            if (action != 'generate_one') {
                setTimeout(() => {
                    clearInterval(_.intervalId);
                    $html.find('#progressBar').css('width', '100%').attr('aria-valuenow', 100);
                    $html.find('#progressText').text('100%');
                }, maxTime);
            }
        }
    }
    _.getSuggestTexts = function(search, filter, deferreds) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/suggestTextAjax.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                tool: _.$tool,
                field: _.field,
                search: search,
                filter: filter,
                language: _.lang
            },
            success: (data) => {
                if (deferreds) {
                    deferreds.system.resolve(tryParseJSON(data));
                } else {
                    return tryParseJSON(data);
                }
            }
        });
    }
    _.getQuotes = function(search, filter, deferreds, size) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/quotes.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                size: size,
                search: search,
                filter: filter
            },
            success: (data) => {
                if (deferreds) {
                    deferreds.quotes.resolve(tryParseJSON(data));
                } else {
                    return tryParseJSON(data);
                }
            }
        });
    }
    _.getAIText = function($html) {
        let name = $html.find('.ai-name-input').val();
        let about = $html.find('.ai-about-input').val();
        let rytrLanguageID = $html.find('.ai-language-select').find(':selected').data('id');
        if (name.trim().length === 0 || about.trim().length === 0) {
            $html.find('.suggest-ai-loading').hide();
            return;
        }
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/aiText.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                name: name,
                about: about,
                rytrLanguageID: rytrLanguageID
            },
            success: (data) => {
                data = tryParseJSON(data);
                $html.find('.suggest-ai-loading').hide();
                if (!data) $html.find('.suggest-ai-texts').append('<p>' + _.translations.ai.noResults + '</p>');
                $html.find('.suggest-ai-texts').append(_.addAiText(data, 0));
                $html.find('.suggest-text').on('click', function() {
                    _.setText($html, $(this));
                });
            }
        });
    }
    _.createContent = function(data, quotes) {
        let html = '';
        html += '<div class="suggest-texts-container">';
        html += '<div class="suggest-text-search-container">';
        html += '<input type="text" maxlength="50" class="suggest-texts-search form-control" placeholder="' + _.translations.searchPlaceHolder + '">';
        html += '<i class="fal fa-search suggest-text-search-icon"></i>';
        html += '<i class="fal fa-home suggest-text-reset-search" style="display: none;"></i>';
        html += '</div>';
        html += '<select class="form-control suggest-text-filter">';
        html += '<option value="">' + _.translations.categoryAll + '</option>';
        html += !_.hideQuotes ? '<option value="quotes">' + _.translations.quotes + '</option>' : '';
        data['category'].forEach(function(ele, index) {
            html += '<option value="' + ele[0] + '">' + ele[1] + '</option>';
        })
        html += '<option value="ai_option">' + _.translations.aiText + '</option>';
        html += '</select>';
        html += '<div class="suggest-text-no-result" style="display: none;">';
        html += _.translations.noResults;
        html += '</div>';
        html += '</div>';
        html += '<div class="suggest-texts-tool fancy-scrollbar">';
        html += _.addSuggestText(data, quotes);
        html += '</div>';
        html += '<div class="suggest-ai-tool" style="display:none">';
        html += _.getAIHtml();
        html += '<div class="suggest-ai-loading text-center" style="display:none;"><i class="ace-icon fa fa-spinner fa-spin fa-4x"></i></div>';
        html += '<div class="suggest-ai-texts fancy-scrollbar">';
        html += '</div>';
        html += '</div>';
        let $html = $(html);
        $html.find('.suggest-text').on('click', function() {
            _.setText($html, $(this));
        });
        $html.find('[data-rel=tooltip]').tooltip({
            container: 'body',
            placement: 'auto'
        });
        $html.find('.suggest-texts-search').on('keydown', function(event) {
            var $this = $(this);
            var eventKey = event.which;
            clearTimeout(this.searchLibraryInputFinished);
            if (eventKey == 13) {
                _.searchText($html, $this.val());
            } else {
                this.searchLibraryInputFinished = setTimeout(function() {
                    _.searchText($html, $this.val());
                }, 1000);
            }
        });
        $html.find('.suggest-text-filter').on('change', function() {
            _.filterText($html, $(this).val());
        });
        $html.find('.ai-text-generate-btn').on('click', () => {
            $html.find('.suggest-ai-texts').html('');
            $html.find('.suggest-ai-loading').show();
            _.getAIText($html);
        });
        _.getAILanguages($html);
        return $html;
    }
    _.setText = function($html, $this) {
        if (_.$suggestTextfield ? .data('suggest-sibling')) {
            $('.suggestTextfield[data-suggest-sibling="1"]').val($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text1').text());
            $('.suggestTextfield[data-suggest-sibling="2"]').val($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text2').text());
        } else if (_.$suggestTextfield ? .data('suggest-froala') && ['faq', 'restaurant', 'ecommerce_extra', 'services_extra', 'team_extra'].includes(_.field)) {
            _.$suggestTextfield.data('froala.editor').html.set($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text').html());
            _.$suggestTextfield.data('froala.editor').events.trigger('contentChanged');
        } else if (_.$suggestTextfield ? .data('suggest-froala')) {
            _.$suggestTextfield.data('froala.editor').html.set($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text .slogan').html());
            _.$suggestTextfield.data('froala.editor').events.trigger('contentChanged');
        } else if (_.field == 'headers') {
            _.callback({
                'mainText': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .title').html(),
                'subText': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .slogan').html()
            });
        } else if (_.inlineModulesList.includes(_.field)) {
            let callbackData = {};
            if (_.field === 'faq_inline') {
                callbackData = {
                    'mainText': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1').html(),
                    'subText': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text2 .ai-answer').html(),
                };
            } else if (_.field === 'services_inline') {
                callbackData = {
                    'title': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1').html(),
                    'short': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-short').html(),
                    'image': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-image').html(),
                }
            } else if (_.field === 'testimonials_inline') {
                callbackData = {
                    'title': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .title').html(),
                    'name': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .name').html(),
                    'content': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-content').html(),
                    'image': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-image').html(),
                }
            } else if (_.field === 'team_inline') {
                callbackData = {
                    'name': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .name').html(),
                    'position': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .position').html(),
                    'info': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-content').html(),
                    'image': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-image').html(),
                }
            } else if (_.field === 'menu_inline') {
                callbackData = {
                    'title': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .title').html(),
                    'price': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .price').html(),
                    'description': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-content').html(),
                    'image': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-image').html(),
                }
            }
            _.callback(callbackData);
        } else {
            _.$suggestTextfield.val($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text').text());
            _.$suggestTextfield.trigger('change');
        }
        if (!_.inlineModulesList.includes(_.field)) {
            _.$bootbox.modal('hide');
        }
    }
    _.addSuggestText = function(data, quotes) {
        let html = '';
        if (data['list']) {
            for (const [key, text] of Object.entries(data['list'])) {
                html += '<div class="suggest-text" data-id="' + key + '" data-category="' + text['category'] + '" style="direction: ' + (_.IsRTL(_.lang) ? 'rtl' : 'ltr') + ';">';
                html += '<div class="text">' + text['text'] + '</div>';
                html += '<div class="btn btn-primary suggest-apply-btn" data-id="' + key + '">' + _.translations.apply + '</div>';
                html += '</div>';
            }
        } else if (data['textPairsList']) {
            for (const [key, text] of Object.entries(data['textPairsList'])) {
                html += '<div class="suggest-text" data-id="' + key + '" data-category="' + text['category'] + '" style="direction: ' + (_.IsRTL(_.lang) ? 'rtl' : 'ltr') + ';">';
                html += '<div class="suggest-text-pairs">';
                html += '<div class="text1">' + text['text1'] + '</div>';
                html += '<div class="text2">' + text['text2'] + '</div>';
                html += '</div>';
                html += '<div class="btn btn-primary suggest-apply-btn" data-id="' + key + '">' + _.translations.apply + '</div>';
                html += '</div>';
            }
        }
        if (!_.hideQuotes) {
            for (const [key, text] of Object.entries(quotes)) {
                html += '<div class="suggest-text" data-id="' + key + '_quote" data-category="quotes" style="direction: ' + (_.IsRTL(_.lang) ? 'rtl' : 'ltr') + ';">';
                html += '<div class="text">&quot;' + text['text'] + (text['author'] ? '&quot; - ' + text['author'] : '&quot;') + '</div>';
                html += '<div class="btn btn-primary suggest-apply-btn" data-id="' + key + '_quote">' + _.translations.apply + '</div>';
                html += '</div>';
            }
        }
        return html;
    }
    _.addAiText = function(texts, startIndex) {
        let html = '';
        let designDirection = _.IsRTL(_.lang) ? 'rtl' : 'ltr';
        let applyButtonVisible = true;
        for (const [key, text] of Object.entries(texts)) {
            let itemKey = parseInt(key) + parseInt(startIndex);
            html += '<div class="suggest-text" data-id="' + itemKey + '_ai" data-category="ai" style="direction: ' + designDirection + ';">';
            if (_.field == 'headers' && (_.headerContentType == '1' || _.headerContentType == '4')) {
                html += '<div class="suggest-text-pairs">';
                html += '<div class="text"><span class="title">' + text['title'] + '</span></div>';
                html += '<div class="text"><span class="slogan">' + text['slogan'] + '</span></div>';
                html += '</div>';
            } else if (_.field == 'headers' && _.headerContentType == '2') {
                html += '<div class="suggest-text-pairs">';
                html += '<div class="text"><span class="title">' + _.translations.ai.about + '</span></div>';
                html += '<div class="text"><span class="slogan">' + Object.values(text)[0] + '</span></div>';
                html += '</div>';
            } else if (_.field == 'about' || (_.field == "headers" && _.headerContentType == '3')) {
                html += '<div class="suggest-text-pairs">';
                html += '<div class="text"><span class="title">' + _.translations.ai.about + '</span></div>';
                html += '<div class="text"><span class="slogan">' + Object.values(text)[0] + '</span></div>';
                html += '</div>';
            } else if (_.inlineModulesList.includes(_.field)) {
                applyButtonVisible = true;
                html += '<div class="suggest-text-pairs">';
                if (_.field === 'services_inline') {
                    html += `
<div class="text">
<span class="ai-text1">${text['title']}</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-short">${text['short']}</div>
<div class="ai-image hidden">${text['image_keyword']}</div>
</span>
</div>
`;
                } else if (_.field === 'testimonials_inline') {
                    html += `
<div class="text">
<span class="ai-text1">
<div class="result-wrap">
<div class="name">${text['name']}</div>
<div class="title">${text['title']}</div>
</div>
</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-content">${text['testimonial']}</div>
<div class="ai-image hidden">${text['image_keyword']}</div>
</span>
</div>
`;
                } else if (_.field === 'faq_inline') {
                    html += `
<div class="text">
<span class="ai-text1">${text['question']}</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-answer">${text['answer']}</div>
<div class="ai-image hidden"></div>
</span>
</div>
`;
                } else if (_.field === 'team_inline') {
                    html += `
<div class="text">
<span class="ai-text1">
<div class="result-wrap">
<div class="name">${text['name']}</div>
<div class="position">${text['position']}</div>
</div>
</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-content">${text['info']}</div>
<div class="ai-image hidden">${text['image_keyword']}</div>
</span>
</div>
`;
                } else if (_.field === 'menu_inline') {
                    html += `
<div class="text">
<span class="ai-text1">
<div class="result-wrap">
<div class="title">${text['title']}</div>
<div class="price">${text['price']}</div>
</div>
</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-content">${text['description']}</div>
<div class="ai-image hidden">${text['image_keyword']}</div>
</span>
</div>
`;
                }
                html += '</div>';
            } else {
                html += '<div class="text">' + text['text'] + '</div>';
            }
            if (false && _.inlineModulesList.includes(_.field)) {
                html += `<div class="btn btn-primary suggest-apply-ai suggest-generate-more-btn" data-id="${key}_ai">Generate</div>`;
            }
            html += `<div class="btn btn-primary suggest-apply-ai suggest-apply-btn" data-id="${key}_ai" ${applyButtonVisible ? '' : 'style="display:none;"'}>${_.translations.apply}</div>`;
            html += '</div>';
        }
        return html;
    }
    _.shuffle = function(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        $('.suggest-texts-tool').html(array);
    }
    _.filterText = function($html, keyword) {
        if (keyword == 'ai_option') {
            _.$bootbox.find('.suggest-texts-tool').hide();
            _.$bootbox.find('.suggest-ai-tool').show();
            $html.find('.suggest-texts-search').prop("disabled", true);
        } else {
            _.$bootbox.find('.suggest-texts-tool').show();
            _.$bootbox.find('.suggest-ai-tool').hide();
            $html.find('.suggest-texts-search').prop("disabled", false);
        }
        let $list = $html.find('.suggest-text');
        let search = $html.find('.suggest-texts-search').val();
        if (search) _.searchText($html, search);
        $list.each(function(index, ele) {
            const categoriesList = $(ele).data('category').split(',');
            const elementText = $(ele).find('.text').text().toLowerCase();
            if (categoriesList.includes(keyword) && search != '' && elementText.indexOf(search.toLowerCase()) > -1) {
                $(ele).css('display', '');
            } else if ((categoriesList.includes(keyword) || keyword == '') && search == '') {
                $(ele).css('display', '');
            } else if (keyword == '' && elementText.indexOf(search.toLowerCase()) > -1) {
                $(ele).css('display', '');
            } else {
                $(ele).css('display', 'none');
            }
        });
    }
    _.getAILanguages = function($html) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/rytrLanguagesAjax.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
            },
            success: (data) => {
                data = tryParseJSON(data);
                for (const [key, value] of Object.entries(data)) {
                    $html.find('.ai-language-select').append(`<option data-id="${value._id}">${value.slug}</option>`);
                }
            }
        });
    }
    _.getAIHtml = function() {
        let html = '';
        html += '<div class="suggest-ai-text widget-box static activate">';
        html += '<div class="widget-body">';
        html += '<div class="widget-main">';
        html += '<div class="ai-text-input-wrap">';
        html += '<div class="form-group ai-text-input">';
        html += '<label>' + _.translations.ai.nameInputLabel;
        html += ' <a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="' + _.translations.ai.nameInputTT + '"><i class="fa fa-question-circle"></i></a>';
        html += '</label>';
        html += '<input type="text" maxlength="50" class="ai-name-input form-control" placeholder="' + _.translations.ai.nameInputPH + '">';
        html += '</div>';
        html += '<div class="form-group ai-text-input">';
        html += '<label>' + _.translations.ai.aboutInputLabel;
        html += ' <a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="' + _.translations.ai.aboutInputTT + '"><i class="fa fa-question-circle"></i></a>';
        html += '</label>';
        html += '<input type="text" maxlength="50" class="ai-about-input form-control" placeholder="' + _.translations.ai.aboutInputPH + '">';
        html += '</div>';
        html += '</div>';
        html += '<div class="ai-text-input-grid">';
        html += '<button class="btn btn-primary ai-text-generate-btn ai-input-btn" aria-label="generate">' + _.translations.ai.generate + '</button>';
        html += '<select class="form-control ai-language-select">';
        html += '</select>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html;
    }
    _.searchText = function($html, text) {
        let noResult = 0;
        text = text.toLowerCase();
        let filter = $html.find('.suggest-text-filter').val();
        _.getData('search', text, filter);
    }
    _.showModal = function(content) {
        if (topWindow.SystemModals.sm_get('suggestTextModal')) topWindow.SystemModals.sm_remove('suggestTextModal');
        topWindow.SystemModals.sm_render({
            id: 'suggestTextModal',
            disposable: true,
            $parent: topWindow.$('body'),
            sizeClasses: 'size-s1 suggestTextModal',
            headerSettings: {
                id: 'suggestTextModalTitle',
                title: _.translations.title
            },
            bodySettings: { // body settings
                content: ''
            },
            footerSettings: { // footer settings
                isActive: false,
                buttons: []
            },
            shownCallback: (event, modal) => {
                modal.$html.find('.modal-body').append(content);
            },
            showCallback: () => {
                topWindow.$('#suggestTextModal').css('z-index', '9999');
            },
            hideCallback: function(event, modal) {
                if (_.ajaxObj && _.ajaxObj.readyState != 4) {
                    _.ajaxObj.abort();
                }
            },
        });
        topWindow.SystemModals.sm_updateProp('suggestTextModal', 'backdrop', true);
        topWindow.SystemModals.sm_get('suggestTextModal').show();
        _.$bootbox = topWindow.SystemModals.sm_get('suggestTextModal').$html;
    }
    _.createBtn = function($this) {
        let html = '<a class="suggestTextBtn btn btn-link" data-speech="on" data-speech-text="suggest text"><i class="fa-sharp fa-solid fa-wand-magic-sparkles"></i>TextAI</a>';
        let $html = $(html);
        $html.on('click', function() {
            _.lang = $this.data('suggest-lang');
            _.$tool = $this.data('suggest-tool');
            _.$suggestTextfield = $this.find('.suggestTextfield');
            _.field = _.$suggestTextfield.data('suggest-field');
            _.hideQuotes = $this.data('hide-quotes');
            if (_.$tool == 'openAI') {
                getOpenAI();
            } else {
                _.getData('open', '', '');
            }
        });
        return $html;
    }
    _.createInlineBtn = function(settings) {
        _.$tool = settings.tool;
        _.$suggestTextfield = settings.suggestTextfield;
        _.field = settings.field;
        _.translations = settings.translations;
        _.lang = settings.lang;
        _.callback = settings.callback;
        _.textLength = settings.textLength;
        if (_.textLength >= 100 && _.textLength <= 250) {
            _.headerContentType = '2';
        } else if (_.textLength > 250) {
            _.headerContentType = '3';
        } else {
            _.headerContentType = '1';
        }
        _.openModal = 'topWindow';
        getOpenAI();
    }
    _.getFieldNameByModuleTypeNum = function(moduleTypeNUM) {
        switch (parseInt(moduleTypeNUM)) {
            case 11:
                return 'faq_inline';
                break;
            case 3:
                return 'services_inline';
                break;
            case 5:
                return 'testimonials_inline';
                break;
            case 4:
                return 'team_inline';
                break;
            case 9:
                return 'menu_inline';
                break;
        }
    }
    _.getAddItemData = function(resultObj, itemsCategory, moduleID, moduleTypeNUM) {
        let data = {
            websiteID: topWindow.websiteID,
            w: topWindow.websiteID,
            id: 0,
            moduleTypeNUM: moduleTypeNUM,
            moduleID: moduleID,
            richEditor: 1,
            ajax: 1,
            category: itemsCategory,
        }
        switch (_.getFieldNameByModuleTypeNum(moduleTypeNUM)) {
            case 'faq_inline':
                data['question'] = resultObj.mainText;
                data['answer'] = resultObj.subText;
                break;
            case 'services_inline':
                data['title'] = resultObj.title;
                data['description'] = resultObj.short;
                data['longDescriptionActive'] = 'off';
                data['pageType'] = 1;
                data['image'] = resultObj.image;
                break;
            case 'testimonials_inline':
                data['name'] = resultObj.name;
                data['title'] = resultObj.title;
                data['description'] = resultObj.content;
                data['image'] = resultObj.image;
                break;
            case 'team_inline':
                data['name'] = resultObj.name;
                data['job_position'] = resultObj.position;
                data['more_info'] = resultObj.info;
                data['image'] = resultObj.image;
                break;
            case 'menu_inline':
                data['title'] = resultObj.title;
                data['description'] = resultObj.description;
                data['price'] = resultObj.price;
                data['image'] = resultObj.image;
                break;
        }
        return data;
    }
    _.refresh = function(settings) {
        $('.suggestText').each(function(index, ele) {
            var $this = $(this);
            if ($this.find('.suggestTextBtn').length != 0) return;
            if ($this.data('suggest-custom')) {
                $($this.data('suggest-custom')).append(_.createBtn($this));
                $($this.data('suggest-custom')).css('display', 'flex');
                $($this.data('suggest-custom')).css('place-content', 'space-between');
                $('.suggestTextBtn').css('padding-inline', '12px');
            } else {
                $this.append(_.createBtn($this));
            }
        });
    };
    return _;
}();

function AutocompleteInput(settings) {
    var that = this;
    var $input = settings.$input;
    var intrface_align = settings.intrface_align;
    var maxHeight = settings.maxHeight;
    var fontSize = settings.fontSize;
    var html = settings.html ? settings.html : false;
    if ($('#jqAutocompleteCss').length === 0) $('head').append(`
<style id="jqAutocompleteCss">
.ui-autocomplete {overflow-y: auto;overflow-x: hidden;z-index: 9999;border-radius: 5px;padding-top: 0.1em;padding-bottom: 0.1em;box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important;border: 0;border-top: 1px solid #aaaaaa33;}
.ui-autocomplete .ui-menu-item {padding-top: 0.6em;padding-bottom: 0.6em;}
.ui-autocomplete .ui-menu-item.ui-state-focus {color: var(--primaryTextColor);background: var(--primary_color);}
</style>
`);
    $input.focus(function() {
        that.openList = true;
        that.init();
    });
    that.init = function() {
        if (!that.data) {
            that.loadData(that.init);
            return;
        }
        if (!$input.autocomplete('instance')) {
            $input.autocomplete({
                html: html,
                source: function(request, response) {
                    if ($input.val().length > 0 && !that.openList) {
                        settings.autoCompleteSource.call(this, function(data) {
                            response(data);
                        });
                    } else {
                        response(that.data);
                    }
                },
                minLength: 0,
                position: intrface_align == 'right' ? {
                    my: "right top",
                    at: "right bottom"
                } : {
                    my: "left top",
                    at: "left bottom"
                },
                change: function(event, ui) {
                    $input.trigger('change', [ui.item]);
                },
                select: function(event, ui) {
                    $input.trigger('change', [ui.item]);
                },
                close: function(event, ui) {
                    $input.autocomplete('widget').css('transform', '');
                    $(document).trigger('LinksAutocomplete.close');
                },
                open: function(event, ui) {
                    $input.autocomplete('widget').outerWidth($input.outerWidth());
                    if ($.isNumeric(maxHeight)) {
                        $input.autocomplete('widget').css('max-height', maxHeight + 'px');
                    }
                    if ($.isNumeric(fontSize)) {
                        $input.autocomplete('widget').css('font-size', fontSize + 'px');
                    }
                    $input.autocomplete('widget').css('transform', 'translateY(4px)');
                    $(document).trigger('LinksAutocomplete.open');
                }
            });
        }
        if (that.openList) {
            $input.autocomplete('search', '');
            that.openList = false;
        }
        $input.attr('data-a-c-initialized', true);
    };
    that.loadData = function(callback) {
        settings.pageLoadAjax.call(this, function(pages) {
            that.data = pages;
            if (callback) callback();
        });
    };
    that.reloadData = function() {
        that.data = null;
    };
}
(function($) {
    var proto = $.ui.autocomplete.prototype,
        initSource = proto._initSource;

    function filter(array, term) {
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
        return $.grep(array, function(value) {
            return matcher.test($("<div>").html(value.label || value.value || value).text());
        });
    }
    $.extend(proto, {
        _initSource: function() {
            if (this.options.html && $.isArray(this.options.source)) {
                this.source = function(request, response) {
                    response(filter(this.options.source, request.term));
                };
            } else {
                initSource.call(this);
            }
        },
        _renderItem: function(ul, item) {
            return $("<li></li>")
                .data("item.autocomplete", item)
                .append($("<a></a>")[this.options.html ? "html" : "text"](item.label))
                .appendTo(ul);
        }
    });
})(jQuery);
//Run when the page load (before images and other resource)
var intrface_align;
var intrface_align_reverse;
jQuery(function($) {
    MobileInterfaceForceHandler();
    if ($('html[dir=rtl]').length > 0) {
        intrface_align = 'right';
        intrface_align_reverse = 'left';
    } else {
        intrface_align = 'left';
        intrface_align_reverse = 'right';
    }
    if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        $('html').attr('data-ios-device', /(iPad|iPhone|iPod)/g.exec(navigator.userAgent)[0]);
    }
    if (ace.vars['touch']) {
        (function() {
            var $moduleCategoriesListContainer = $('.module-categories-list-container');
            if ($moduleCategoriesListContainer.length === 0) return;
            $moduleCategoriesListContainer.css({
                position: 'static',
                paddingBottom: '20px'
            });
            $moduleCategoriesListContainer.hide().removeClass('hidden-xs');
            var $categoriesMenuBtn = $('<div class="col-xs-12" class="categories-menu-btn-box"><h3 class="widget-title bigger blue lighter"><i class="ace-icon fal fa-folder"></i>&nbsp;<span>' + translations.itemsCategories + '</span></h3></div>').css({
                paddingBottom: '5px'
            });
            $categoriesMenuBtn.click(function(event) {
                var $this = $(this);
                if ($this.data('isOpen')) {
                    $moduleCategoriesListContainer.slideUp(200);
                    $this.find('i.fa').removeClass('fa-folder-open').addClass('fa-folder');
                    $this.data('isOpen', false);
                } else {
                    $moduleCategoriesListContainer.slideDown(200);
                    $this.find('i.fa').removeClass('fa-folder').addClass('fa-folder-open');
                    $this.data('isOpen', true);
                }
            });
            if ($moduleCategoriesListContainer.data('new-flow')) {
                $moduleCategoriesListContainer.find('#categoriesList > li').click(function() {
                    $moduleCategoriesListContainer.hide(500);
                });
            }
            $moduleCategoriesListContainer.closest('.row').prepend($categoriesMenuBtn);
        })();
    }
    CurrencySymbolToolTip();
    MeasurementsUnitToolTip();
    BuildInputFields();
    BuildInterfaceAccorion();
    jQuery.validator.addMethod('color-pattern', function(value, element) {
        return this.optional(element) || /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i.test(value);
    }, translations.pleaseEnterValidColor);
    jQuery.validator.addMethod('no-spaces-only', function(value, element) {
        value = value.replace(/&nbsp;/g, '');
        return this.optional(element) || $.trim(value).length != 0;
    }, translations.pleaseEnterValidText);
    jQuery.validator.addMethod('phone-pattern', function(value, element) {
        return this.optional(element) || /^[0-9-+*() ]+$/i.test(value);
    }, translations.pleaseEnterValidPhone);
    jQuery.validator.addMethod('youtube-vimeo-pattern', function(value, element) {
        if ((value.slice(0, 7) !== 'http://' && value.slice(0, 8) !== 'https://') || /[<>]/.test(value)) {
            return this.optional(element) || false;
        } else if (value.indexOf('youtube') !== -1 || value.indexOf('youtu.be') !== -1) {
            return this.optional(element) || /^.*(youtu.be\/|v\/|u\/\w\/|embed\/(?!videoseries)|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/i.test(value);
        } else if (value.indexOf('vimeo') !== -1) {
            return this.optional(element) || /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/i.test(value);
        } else {
            return this.optional(element) || false;
        }
    }, translations.pleaseEnterValidVideoYV);
    jQuery.validator.addMethod('youtube-pattern', function(value, element) {
        if ((value.slice(0, 7) !== 'http://' && value.slice(0, 8) !== 'https://') || /[<>]/.test(value)) {
            return this.optional(element) || false;
        } else if (value.indexOf('youtube') !== -1 || value.indexOf('youtu.be') !== -1) {
            return this.optional(element) || /^.*(youtu.be\/|v\/|u\/\w\/|embed\/(?!videoseries)|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/i.test(value);
        } else {
            return this.optional(element) || false;
        }
    }, translations.pleaseEnterValidVideoYV_Youtube);
    jQuery.validator.addMethod('vimeo-pattern', function(value, element) {
        if ((value.slice(0, 7) !== 'http://' && value.slice(0, 8) !== 'https://') || /[<>]/.test(value)) {
            return this.optional(element) || false;
        } else if (value.indexOf('vimeo') !== -1) {
            return this.optional(element) || /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/i.test(value);
        } else {
            return this.optional(element) || false;
        }
    }, translations.pleaseEnterValidVideoYV_Vimeo);
    jQuery.validator.addMethod('url-abs-rel', function(value, element) {
        return this.optional(element) || (value.slice(0, 4) === 'http' || value.slice(0, 3) === 'ftp' || value.slice(0, 1) === '/');
    }, translations.pleaseEnterValidUrl);
    jQuery.validator.addMethod('not-url', function(value, element) {
        return this.optional(element) || !(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(value));
    }, translations.urlsNotSupportedMsg);
    jQuery.validator.addMethod('money-pattern', function(value, element) {
        return this.optional(element) || /^\d+(\.\d{1,2})?$/i.test(value);
    }, translations.pleaseEnterValidMoney);
    jQuery.validator.addMethod('url-https', function(value, element) {
        return this.optional(element) || (value.slice(0, 8) === 'https://');
    }, translations.pleaseEnterValidUrlWithHttps);
    jQuery.validator.addMethod('ads-by-google', function(value, element) {
        return this.optional(element) || (value.toLowerCase().indexOf('.googlesyndication.com') != -1 && value.toLowerCase().indexOf('width') == -1 && value.toLowerCase().indexOf('height') == -1);
    }, translations.pleaseEnterValidResponsiveAdSence);
    jQuery.validator.addMethod('responsive-ads-by-google', function(value, element) {
        return this.optional(element) || (value.toLowerCase().indexOf('.googlesyndication.com') != -1 && value.toLowerCase().indexOf('data-full-width-responsive="true"') != -1);
    }, translations.pleaseEnterValidResponsiveAdSence);
    jQuery.validator.addMethod('min-value-selector', function(value, element) {
        var $compare_input = $($(element).data('min-value-selector'));
        if ($compare_input.length === 0 || !$compare_input.is(":visible") || !$.isNumeric($compare_input.val())) return true;
        return this.optional(element) || (parseFloat($compare_input.val()) < parseFloat(value));
    });
    jQuery.validator.addMethod('min-equal-value-selector', function(value, element) {
        var $compare_input = $($(element).data('min-equal-value-selector'));
        if ($compare_input.length === 0 || !$compare_input.is(":visible") || !$.isNumeric($compare_input.val())) return true;
        return this.optional(element) || (parseFloat($compare_input.val()) <= parseFloat(value));
    });
    jQuery.validator.addMethod('equal-value-selector', function(value, element) {
        var $siblings = $($(element).data('equal-value-selector')).filter(function(index, input) {
            return $(input).val().toLowerCase() == value.toLowerCase() && input.id != element.id;
        });
        return this.optional(element) || $siblings.length == 0;
    });
    jQuery.validator.addMethod('html-pattern', function(value, element) {
        return this.optional(element) || !validateHTML(value);
    }, translations.pleaseEnterValidHtml);
    jQuery.validator.addMethod('multiple-images-upload', function(value, element) {
        return this.optional(element) || getUploadFileObjectByID(element.id).images.length > 0;
    });
    jQuery.validator.addMethod('email', function(value, element) {
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return this.optional(element) || emailPattern.test(value);
    }, translations.emailCollectorValidEmail);
    $('#addModuleItemForm:not([data-custom-validation="true"])').validate(jQueryValidationGetGlobalOptions());
    $("#addModuleItemForm [required]").closest('.form-group').find('label').after('<span style="color:red">&nbsp;*</span>');
    if ($('#addModuleItemForm:not([data-u-c-d="off"])').length !== 0) {
        $(window).load(function() {
            UnsavedChangesDetector.init({
                form: '#addModuleItemForm'
            });
        });
    }
    initilizeModuleItemConfirmDelete();
    initilizeLinksAutocomplete();
    $(document).on('dragover drop', function(event) {
        event.preventDefault();
    });
    InternalModalHandler();
    SettingsBox.init();
    windowInnerSizeHandler();
    inputRestrictor.init();
    $('.global-page-header-search-btn').click(function() {
        var $search = $('.global-page-header-search');
        if ($search.is(':visible')) {
            $search.fadeOut(250);
        } else {
            $search.fadeIn(250);
        }
    });
    textareaAutoIncreaseHeight.init();
    s123DropDown.init();
    SuggestText.init({
        websiteID: $('#websiteID').val(),
        'translations': translations.suggestTextTool
    });
    $('#upgradePackage').on('show.bs.modal', function(event) {
        var $modal = $(this);
        var upgrade = '';
        if ($modal.data('upgrade-reason')) {
            var upgrade_reason = $modal.data('upgrade-reason');
            $modal.data('upgrade-reason', ''); // some upgrade button's do not have reason so we reset
        } else {
            var upgrade_reason = '';
        }
        if (packageNUM > 1) {
            upgrade = '&upgrade=1';
        }
        $('body').addClass('blurBackground');
        mixPanelEvent(false, "User click upgrade button in wizard");
        if (!$modal.data('force-open')) {
            event.preventDefault();
            event.stopImmediatePropagation();
            $('body').removeClass('blurBackground');
            window.open('/manager/upgrade/index.php?wu=' + website_uniqueID + upgrade + '&ur=' + encodeURIComponent(upgrade_reason), "_blank");
            return false;
        }
    });
    $('#upgradePackage').on('hide.bs.modal', function(event) {
        $('body').removeClass('blurBackground');
    });
    InputsMaxLengthHandler.init();
});

function jQueryValidationGetGlobalOptions() {
    return {
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: true,
        ignore: ':hidden:not(.file-upload-input-field,[data-editor="froala"]),.fileUploadBox:hidden .file-upload-input-field,.form-tool-builder .form-control,.form-tool-builder input,[contenteditable="true"]:not([name])',
        highlight: function(e) {
            $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
        },
        invalidHandler: function(form, validator) {
            if (!validator.numberOfInvalids()) return;
            $('html, body').animate({
                scrollTop: $(validator.errorList[0].element).offset().top
            }, 500);
            $(document).trigger('jQueryValidationGetGlobalOptions.invalid');
        },
        success: function(e) {
            $(e).closest('.form-group').removeClass('has-error');
            $(e).remove();
            $(document).trigger('jQueryValidationGetGlobalOptions.success');
        },
        errorPlacement: function(error, element) {
            if (element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
                var controls = element.closest('div[class*="col-"]');
                if (controls.find(':checkbox,:radio').length > 1) controls.append(error);
                else error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
            } else if (element.is('.select2')) {
                error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
            } else if (element.is('.chosen-select')) {
                error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
            } else {
                error.appendTo(element.closest('.form-group'));
            }
        },
        submitHandler: function(form) {
            $(form).find('button:submit').prop('disabled', true);
            return true;
        }
    };
}

function initilizeLinksAutocomplete() {
    $('[data-rel="links-autocomplete"]:not([data-a-c-initialized="true"])').each(function() {
        let $input = $(this);
        var id = $input.attr('id') ? $input.attr('id') : uniqid('aci-');
        let links = new AutocompleteInput({
            $input: $input,
            intrface_align_reverse: intrface_align_reverse,
            maxHeight: 100,
            fontSize: 13,
            pageLoadAjax: function(callback) {
                $.ajax({
                    url: '/versions/' + versionNUM + '/wizard/include/pagesList.php',
                    type: "POST",
                    dataType: "json",
                    data: {
                        w: $input.data('website-id'),
                        iwi: 1,
                    },
                    success: function(pages) {
                        if (callback) callback.call(this, pages);
                    }
                });
            },
            autoCompleteSource: function(callback) {
                $.ajax({
                    type: 'POST',
                    url: '/versions/' + versionNUM + '/wizard/include/searchPage.php',
                    data: {
                        w: $input.data('website-id'),
                        q: $input.val(),
                    },
                    success: function(data) {
                        var data = tryParseJSON(data);
                        if (!data) return;
                        if (data.length > 0) {
                            if (callback) callback.call(this, data);
                        }
                    }
                });
            }
        });
        if (!topWindow.autocompleteInputs) {
            topWindow.autocompleteInputs = {};
        }
        topWindow.autocompleteInputs[id] = links;
    });
    $(topWindow.document).on('s123.wizardPageAdded.aci s123.pageName.changed.aci', function() {
        $.each(topWindow.autocompleteInputs, function(id, autocomplete) {
            autocomplete.reloadData();
        });
    });
}

function windowInnerSizeHandler() {
    document.documentElement.style.setProperty('--window-height', window.innerHeight + 'px');
    document.documentElement.style.setProperty('--window-width', window.innerWidth + 'px');
    $(window).on('resize.get_window_inner_size', function() {
        clearTimeout(window.finishedTyping);
        window.InnerSizeHandler = setTimeout(function() {
            document.documentElement.style.setProperty('--window-height', window.innerHeight + 'px');
            document.documentElement.style.setProperty('--window-width', window.innerWidth + 'px');
        }, 500);
    });
}

function UploadSingleFile(id, websiteID, pathType, maxFilesize, fileKind, minWidth, minHeight) {
    var uploadFile = topWindow.uploadFiles[id];
    uploadFile.btns.upload.click(function() {
        $(this).tooltip('hide');
    });
    uploadFile.btns.upload.dropzone({
        clickable: '#' + id + '_uploadFile, [data-d-z-id="' + id + '"]',
        url: "/versions/" + versionNUM + "/wizard/uploadFile.php",
        maxFilesize: maxFilesize,
        parallelUploads: 4,
        createImageThumbnails: true,
        maxThumbnailFilesize: 1.5,
        maxFiles: 1,
        params: {
            w: websiteID,
            pathType: pathType,
            fieldID: id,
            logofix: uploadFile.btns.logofix,
            resizeType: uploadFile.resizeType,
            removeBG: uploadFile.removeBG,
            removeBGType: uploadFile.removeBGType,
            systemKindNUM: uploadFile.systemKindNUM
        },
        dictFileTooBig: translations.dropbox.dictFileTooBig,
        acceptedFiles: fileKind.acceptedFiles,
        previewsContainer: false,
        dictInvalidFileType: translations.fileTypesErrorMsg.replace('{{acceptedFiles}}', fileKind.acceptedFiles),
        dictResponseError: translations.badRequest,
        timeout: null,
        init: function() {
            this.on("thumbnail", function(file) {
                const imageValidation = {
                    isInValid: minWidth != '' && (minWidth > file.width || minHeight > file.height),
                    title: translations.imageIsTooSmall,
                    message: `
<p>${translations.sorryTheFileSize.replace('{{minWidth}}', minWidth).replace('{{minHeight}}', minHeight)}</p>
<div style="margin-bottom:10px;text-align: center;">
<button type="button" id="f-s-upload-btn" class="btn btn-sm btn-default" style="margin-bottom:10px;">
<i class="ace-icon fal fa-upload"></i> ${translations.sorryTheFileSizeUploadBtn}
</button>
&nbsp;&nbsp;&nbsp;${uploadFile.btns.library.length !== 0 ? `<button type="button" id="f-s-library-btn" class="btn btn-sm btn-primary" style="margin-bottom:10px;"><i class="ace-icon fal fa-folder-o"></i> ${translations.sorryTheFileSizeLibraryBtn}</button>` : ''}
</div>
`
                };
                if (uploadFile.resizeType == 'pwaIcon') {
                    imageValidation.isInValid = file.width != file.height;
                    imageValidation.title = translations.uploadFilePWA.title;
                    imageValidation.message = `
<p>${translations.uploadFilePWA.message.replace('{{minWidth}}',minWidth).replace('{{minHeight}}',minHeight)}</p>
<div style="margin-bottom:10px;text-align: center;">
<button type="button" id="f-s-upload-btn" class="btn btn-sm btn-default" style="margin-bottom:10px;">
<i class="ace-icon fal fa-upload"></i> ${translations.uploadFilePWA.uplaodAnother}
</button>
</div>
`;
                }
                if (imageValidation.isInValid) {
                    this.removeFile(file);
                    uploadFile.progressbar.finish(function() {
                        var fsBootbox = bootbox.dialog({
                            title: imageValidation.title,
                            message: imageValidation.message
                        });
                        trackJsEvent(true, translations.sorryTheFileSize);
                        $('#f-s-upload-btn').click(function(event) {
                            fsBootbox.modal('hide');
                            uploadFile.btns.upload.get(0).click();
                        });
                        if (uploadFile.btns.library.length !== 0) {
                            $('#f-s-library-btn').click(function(event) {
                                fsBootbox.modal('hide');
                                uploadFile.btns.library.trigger('click');
                            });
                        }
                    });
                }
            });
            this.on("processing", function(file) {
                var dropzone = this;
                if (isWizardPage()) {
                    topWindow.WizardUndoRedoHandler.buttonsDisable();
                }
                uploadFile.btns.cancel.off('click').click(function() {
                    dropzone.removeFile(file);
                    uploadFile.input.trigger('s123.uploadFile.cancelUpload');
                    if (isWizardPage()) {
                        topWindow.WizardUndoRedoHandler.buttonsEnable();
                    }
                    uploadFile.methods.removeFrameClass();
                });
            });
        },
        sending: function(file, xhr, formData) {
            uploadFile.progressbar.reset();
            uploadFile.progressbar.show();
            uploadFile.methods.addFrameClass();
        },
        uploadprogress: function(file, progress) {
            progress = progress * 0.6;
            progress = Math.ceil(progress);
            uploadFile.progressbar.update(progress);
            uploadFile.input.trigger('s123.uploadFile.uploadProgress');
            if (progress >= 60) {
                uploadFile.progressbar.start(500);
            }
        },
        success: function(file, response) {
            var s3Obj;
            var error = false;
            try {
                s3Obj = jQuery.parseJSON(response);
            } catch (e) {
                error = true;
            }
            uploadFile.methods.removeFrameClass();
            this.removeFile(file);
            UploadFile_ShowNoBGImageSelector(id, s3Obj, function(isNoBGSelected) {
                if (isNoBGSelected) {
                    s3Obj.n = s3Obj.n_noBG;
                    s3Obj.t = s3Obj.t_noBG;
                    delete s3Obj.n_noBG;
                    delete s3Obj.t_noBG;
                }
                uploadFileCompeleteHandler(s3Obj);
            });

            function uploadFileCompeleteHandler(s3Obj) {
                uploadFile.progressbar.finish(function() {
                    if (error) {
                        bootbox.dialog({
                            title: translations.uploadFailed,
                            message: translations.uploadFailedInvalidImage,
                            buttons: {
                                danger: {
                                    label: translations.ok,
                                    className: "btn-danger btn-sm",
                                }
                            }
                        });
                        return;
                    }
                    UpdateImagePreview(id, {
                        normal: s3Obj.n,
                        tiny: s3Obj.t
                    });
                    if (uploadFile.isImgObj) {
                        var imgObj = {
                            w: s3Obj.w,
                            h: s3Obj.h,
                            r: (s3Obj.w / s3Obj.h).toFixed(2),
                            n: s3Obj.n
                        };
                        uploadFile.input.val(JSON.stringify(imgObj)).trigger('change', s3Obj);
                    } else {
                        uploadFile.input.val(s3Obj.n).trigger('change', s3Obj);
                    }
                    if (typeof UploadFileFinishUpload_callback !== 'undefined' && $.isFunction(UploadFileFinishUpload_callback)) {
                        UploadFileFinishUpload_callback(id);
                    }
                    RemoveFlickrImageFromLicenseField(id, 'delete', '', '', '', '');
                    if (isWizardPage() && uploadFile.input.attr('name')) {
                        AutoSaveWizard(true, true);
                        $(document).trigger('s123.website_upload_file_change', [id, s3Obj.n]);
                        $(document).trigger('user_action_update_flag', [{
                            name: 'flag_HomepageUploadImage',
                            triggerName: false
                        }]);
                    }
                    $(document).trigger('upload_file_change.success', [id, s3Obj, 'UploadSingleFile']);
                });
            }
        },
        error: function(file, errorMessage, xhr) {
            uploadFile.methods.removeFrameClass();
            uploadFile.progressbar.finish(function() {
                if (file && file.status != 'canceled') {
                    bootbox.dialog({
                        title: translations.uploadFailed,
                        message: errorMessage,
                        buttons: {
                            danger: {
                                label: translations.ok,
                                className: "btn-danger btn-sm",
                            }
                        }
                    });
                }
            });
        }
    });
}

function UploadFile_ShowNoBGImageSelector(id, s3Obj, callback) {
    var uploadFile = getUploadFileObjectByID(id);
    if (!s3Obj) {
        uploadFile.progressbar.finish();
        if (callback) callback.call(this, false);
        return;
    }
    if (uploadFile.removeBG && s3Obj.n_noBG) {
        s3Obj.isSupportNoBG = true;
        uploadFile.progressbar.update(99);
        var $html = $(`
<div id="imageAI">
<div class="image-ai-container">
<div class="image-ai-list">
<!-- No Background Image -->
<div class="image-ai-prv-container active" data-img-type="n_noBG">
<div class="image-ai-priview-title">${translations.imageAI.withoutBackground}</div>
<div class="image-ai-priview-image" style="background-image: url('${s3Obj.n_noBG}')"></div>
</div>
<!-- Normal Image -->
<div class="image-ai-prv-container" data-img-type="n">
<div class="image-ai-priview-title">${translations.imageAI.originalImage}</div>
<div class="image-ai-priview-image" style="background-image: url('${s3Obj.n}')"></div>
</div>
</div>
</div>
</div>
`);
        var $bootbox = bootbox.dialog({
                title: translations.image,
                message: $html,
                backdrop: true,
                closeButton: true,
                onEscape: true,
                show: false,
                className: 's123-modal image-versions-selector modal-close-weight-100',
                buttons: {
                    cancel: {
                        label: translations.Cancel,
                        className: 'btn-default'
                    },
                    save: {
                        label: translations.Save,
                        className: 'btn-primary',
                        callback: function() {
                            $html.data('user-selected-version', true);
                        }
                    }
                }
            })
            .on('show.bs.modal', function() {
                $html.on('click', '.image-ai-prv-container', function(event) {
                    event.preventDefault();
                    var $this = $(this);
                    $this.siblings().removeClass('active');
                    $this.addClass('active');
                });
            })
            .on('hide.bs.modal', function() {
                uploadFile.progressbar.finish();
                if ($html.data('user-selected-version')) {
                    if (callback) callback.call(this, $bootbox.find('.image-ai-prv-container.active').data('img-type') == 'n_noBG');
                } else {
                    if (callback) callback.call(this, false);
                }
            })
            .modal('show');
    } else {
        uploadFile.progressbar.finish();
        if (callback) callback.call(this, false);
    }
}

function UploadFilesProgressbar(id) {
    var that = this;
    this.$pb = $(id);
    this.reset = function() {
        that.update(0);
    };
    this.abort = function(callback) {
        if (callback) callback();
        that.stop();
        that.hide();
    };
    this.show = function() {
        that.disablePageActions(true);
        that.$pb.fadeIn('slow');
    };
    this.hide = function() {
        that.$pb.fadeOut('slow', function() {
            that.reset();
        });
        that.disablePageActions(false);
    };
    this.stop = function() {
        if (that.refreshProgressbar) {
            clearInterval(that.refreshProgressbar);
        }
    };
    this.update = function(percent) {
        that.$pb.attr('data-percent', percent + '%').children('.progress-bar').width(percent + '%');
    };
    this.start = function(interval, message) {
        if (typeof homepageReadyReset == 'function') {
            if (this.$pb.get(0).id === 'home_start_image_progressBar' ||
                this.$pb.get(0).id === 'home_slider_image_1_progressBar' ||
                this.$pb.get(0).id === 'home_video_background_progressBar' ||
                this.$pb.get(0).id === 'image_progressBar' ||
                this.$pb.get(0).id === 'image-slide-show-1_progressBar' ||
                this.$pb.get(0).id === 'video_progressBar') {
                homepageReadyReset();
            }
        }
        that.show();
        if (message) that.showMessage(message);
        if (interval !== 0) {
            this.refreshProgressbar = setInterval(function() {
                that.percent = parseInt(that.$pb.attr('data-percent'));
                if (that.percent >= 99) {
                    that.stop();
                    return;
                }
                if (that.percent < 100) {
                    that.percent += 1;
                    that.update(that.percent);
                }
            }, interval);
        }
    };
    this.finish = function(callback, no_timeout) {
        if (callback) callback();
        that.stop();
        that.update(100);
        if (no_timeout) {
            that.hide();
        } else {
            setTimeout(function() {
                that.hide();
            }, 500);
        }
        if (that.$message) {
            that.$message.fadeOut('slow', function() {
                that.$message.remove();
            });
        }
    };
    this.disablePageActions = function(disable) {
        var $submitButtonsArea = $('.SubmitButtonsArea');
        var $moduleWindow = SystemModals.sm_get('moduleWindow') ? SystemModals.sm_get('moduleWindow').$html : topWindow.$('#moduleWindow');
        if (disable) {
            $submitButtonsArea.addClass('disableSaveButtons');
            $moduleWindow.find('.modal-header').addClass('disableSaveButtons');
        } else {
            $submitButtonsArea.removeClass('disableSaveButtons');
            $moduleWindow.find('.modal-header').removeClass('disableSaveButtons');
        }
    };
    this.showMessage = function(message) {
        var $uploadFileContaner = $(id.split('_')[0] + '_uploadFileContaner');
        that.$message = $('<div class="alert alert-warning" style="margin-bottom:20px;text-align:center;display:none;">' + message + '</div>');
        $uploadFileContaner.after(that.$message);
        that.$message.fadeIn('slow');
    };
};

function BuildInputFields() {
    UploadMultipleFilesInitialize();
    UploadSingleFilesInitialize('');
    ColorPickerInitialize();
    $('.date-picker').datepicker({
        autoclose: true,
        todayHighlight: true,
        showClose: true
    }).change(function() {
        $(this).valid(); // triggers the validation test
    }).next().on(ace.click_event, function() {
        $(this).prev().focus();
    });
    moment.defineLocale(topWindow.t_language, {
        weekdays: [translations.calendarHandler.days.sunday, translations.calendarHandler.days.monday, translations.calendarHandler.days.tuesday, translations.calendarHandler.days.wednesday, translations.calendarHandler.days.thursday, translations.calendarHandler.days.friday, translations.calendarHandler.days.saturday],
        weekdaysShort: [translations.calendarHandler.daysShort.sun, translations.calendarHandler.daysShort.mon, translations.calendarHandler.daysShort.tue, translations.calendarHandler.daysShort.wed, translations.calendarHandler.daysShort.thu, translations.calendarHandler.daysShort.fri, translations.calendarHandler.daysShort.sat, ],
        weekdaysMin: [translations.calendarHandler.daysMin.su, translations.calendarHandler.daysMin.mo, translations.calendarHandler.daysMin.tu, translations.calendarHandler.daysMin.we, translations.calendarHandler.daysMin.th, translations.calendarHandler.daysMin.fr, translations.calendarHandler.daysMin.sa, ],
        months: [translations.calendarHandler.months.january, translations.calendarHandler.months.february, translations.calendarHandler.months.march, translations.calendarHandler.months.april, translations.calendarHandler.months.may, translations.calendarHandler.months.june, translations.calendarHandler.months.july, translations.calendarHandler.months.august, translations.calendarHandler.months.september, translations.calendarHandler.months.october, translations.calendarHandler.months.november, translations.calendarHandler.months.december],
        monthsShort: [translations.calendarHandler.monthsShort.jan, translations.calendarHandler.monthsShort.feb, translations.calendarHandler.monthsShort.mar, translations.calendarHandler.monthsShort.apr, translations.calendarHandler.monthsShort.may, translations.calendarHandler.monthsShort.jun, translations.calendarHandler.monthsShort.jul, translations.calendarHandler.monthsShort.aug, translations.calendarHandler.monthsShort.sep, translations.calendarHandler.monthsShort.oct, translations.calendarHandler.monthsShort.nov, translations.calendarHandler.monthsShort.dec],
        today: translations.calendarHandler.today,
        clear: translations.calendarHandler.clear,
        titleFormat: 'MM yyyy',
    });
    $('#date-timepicker1').datetimepicker({
        showClose: true,
        showTodayButton: true,
        sideBySide: ace.vars['touch'] ? false : true,
        toolbarPlacement: 'bottom',
        locale: moment.locale(topWindow.t_language),
        icons: {
            time: 'fal fa-clock-o',
            date: 'fal fa-calendar',
            up: 'fal fa-chevron-up',
            down: 'fal fa-chevron-down',
            previous: 'fal fa-chevron-left',
            next: 'fal fa-chevron-right',
            today: 'fa-clock-o ',
            clear: 'fal fa-regular fa-trash-can',
            close: 'fal fa-times',
            todayText: translations.BSDatepicker_today,
            closeText: translations.BSDatepicker_close
        }
    }).on('dp.change', function(event) {
        $(this).trigger('input');
    }).next().on(ace.click_event, function() {
        $(this).prev().focus();
    });
    $('[data-rel="datetimepicker"]').each(function() {
        var $this = $(this);
        var options = {
            showClose: true,
            showTodayButton: true,
            sideBySide: ace.vars['touch'] ? false : true,
            toolbarPlacement: 'bottom',
            widgetPositioning: {
                horizontal: $this.data('widget-positioning-h') ? $this.data('widget-positioning-h') : 'auto',
                vertical: 'auto'
            },
            s123PositionFix: $this.data('s123-position-fix') ? $this.data('s123-position-fix') : false,
            widgetParent: $this.data('widget-parent') ? $this.data('widget-parent') : null,
            icons: {
                time: 'fal fa-clock-o',
                date: 'fal fa-calendar',
                up: 'fal fa-chevron-up',
                down: 'fal fa-chevron-down',
                previous: 'fal fa-chevron-left',
                next: 'fal fa-chevron-right',
                today: 'fa-clock-o',
                clear: 'fal fa-regular fa-trash-can',
                close: 'fal fa-times',
                todayText: translations.BSDatepicker_today,
                closeText: translations.BSDatepicker_close
            }
        }
        if ($this.data('format')) {
            options.format = $this.data('format');
        }
        $this.datetimepicker(options)
            .on('dp.change', function(event) {
                $(this).trigger('input');
            }).next().on(ace.click_event, function() {
                $(this).prev().focus();
            });
    });
    InitializeToolTips();
    ColorboxInitial('[data-rel="colorbox"]');
    $('[data-rel="slider"]').each(function() {
        var $this = $(this);
        var $id = $($this.data('id'));
        var $valueDisplay = $($this.data('value-display'));
        var value = ($this.text().length !== 0) ? parseInt($this.text(), 10) : 0;
        var min = $this.data('min');
        var max = $this.data('max');
        $this.empty().slider({
            value: value,
            range: "min",
            animate: true,
            min: min,
            max: max,
            slide: function(event, ui) {
                $id.val(ui.value).trigger('input');
                $valueDisplay.html(ui.value);
            }
        });
    });
    if (!ace.vars['touch']) {
        $('.chosen-select').each(function() {
            var $select_box = $(this);
            if ($('html[dir=rtl]').length !== 0) $select_box.addClass('chosen-rtl');
            $select_box.chosen({
                no_results_text: translations.jqueryChosenInputNoResults + '&nbsp;',
            });
            if ($select_box.data('icons')) {
                $select_box.off('chosen:showing_dropdown').on('chosen:showing_dropdown', function(evt, params) {
                    var $chosen_container = $(evt.target).next('.chosen-container');
                    $chosen_container.find('.chosen-results li').each(function() {
                        var li = $(this);
                        if (!li.has('img').length) {
                            var index = li.attr('data-option-array-index');
                            var option = $(evt.target).find('option').eq(index);
                            var imgUrl = option.data('icon');
                            var style = "height: 16px; width: 16px;" + ($('html[dir=rtl]').length !== 0 ? 'margin-left: 10px;' : 'margin-right: 10px;');
                            if (imgUrl) {
                                li.prepend('<img src="' + imgUrl + '" style="' + style + '"/>');
                            } else {
                                li.prepend('<span style="display:inline-block;' + style + '"/></span>');
                            }
                        }
                    });
                });
            }
        });
        $('.chosen-container.chosen-container-single').width('100%');
        $('.chosen-container input').attr('placeholder', translations.search);
    }
    $(document).trigger('SuggestText.refresh');
}

function BuildInterfaceAccorion() {
    $('.in-box-widget .widget-box:not(.static)').each(function() {
        var $thisBox = $(this);
        var $allNunStatic = $('.in-box-widget .widget-box:not(.static)');
        $thisBox.find('.widget-header').off('click').on('click', function() {
            var $this = $(this);
            var id = $this.parent('div[id]').attr('id');
            if (!$this.hasClass('custom-pro-limits') && showUpgradeIfWidgetIsLimitedToPro(id)) return;
            if ($this.hasClass('custom-checkbox') && $this.closest('.in-box-widget').find('.widget-body:visible').length == 0) {
                var checkbox = $this.data('custom-checkbox');
                var $checkbox = $this.find(checkbox);
                if ($checkbox.length > 0) {
                    if (!$checkbox.is(':checked')) {
                        return;
                    }
                }
            }
            if ($this.data('disable-accordion-ability') === '1') return;
            $thisBox.trigger('s123-interface-accordion-header-click');
            if ($('#' + id).find('.widget-body').is(":visible")) {
                $allNunStatic.find('.widget-body:visible').slideUp(400, function() {
                    $thisBox.trigger('s123-interface-accordion-close');
                });
                $allNunStatic.find('.widget-header .widget-toolbar i').removeClass('fa-chevron-up');
                $allNunStatic.find('.widget-header .widget-toolbar i').addClass('fa-chevron-down');
            } else {
                $allNunStatic.find('.widget-body:visible').slideUp(400);
                $allNunStatic.find('.widget-header .widget-toolbar i').removeClass('fa-chevron-up');
                $allNunStatic.find('.widget-header .widget-toolbar i').addClass('fa-chevron-down');
                $('#' + id).find('.widget-body').slideDown(400, function() {
                    $thisBox.trigger('s123-interface-accordion-open');
                });
                $('#' + id).find('.widget-header .widget-toolbar i').removeClass('fa-chevron-down');
                $('#' + id).find('.widget-header .widget-toolbar i').addClass('fa-chevron-up');
            }
        });
        $('.widget-box.activate .widget-body').css('display', 'block');
        $('.widget-box.activate').find('.widget-header .widget-toolbar i').removeClass('fa-chevron-down');
        $('.widget-box.activate').find('.widget-header .widget-toolbar i').addClass('fa-chevron-up');
    });

    function showUpgradeIfWidgetIsLimitedToPro(id) {
        switch (id) {
            case 'advancedSEOBOX':
                if (ProFeature_isLimit({
                        'websiteID': topWindow.websiteID,
                        'packageNUM': topWindow.packageNUM,
                        'toolType': 'advancedSEO',
                    })) {
                    topWindow.$('#upgradePackage').data('upgrade-reason', 'advancedSEOTools').modal('show');
                    return true;
                }
                break;
        }
        return false;
    }
}

function ColorboxInitial(selector) {
    $(selector).each(function() {
        var $this = $(this);
        $this.colorbox({
            iframe: function() {
                return $(this).data('colorbox-iframe') ? true : false;
            },
            width: function() {
                return $(this).data('colorbox-width') ? $(this).data('colorbox-width') : false;
            },
            height: function() {
                return $(this).data('colorbox-height') ? $(this).data('colorbox-height') : false;
            },
            rel: 'colorbox',
            reposition: true,
            scalePhotos: true,
            scrolling: false,
            photo: true, // Fix browser crash on big images (e.g. 8MB)
            previous: false,
            next: false,
            close: '&times;',
            trapFocus: false,
            current: false,
            maxWidth: '50%',
            maxHeight: '50%',
            slideshow: false,
            onComplete: function() {
                $('#colorbox').find('.cboxPhoto').off('click');
            }
        });
    });
    ColorboxInitialTopWindow('[data-rel="colorbox-t-w"]');
}

function ColorboxInitialTopWindow(selector) {
    $(selector).each(function() {
        var $this = $(this);
        $this.off('click.colorBox').on('click.colorBox', function(event) {
            event.preventDefault();
            event.stopPropagation();
            topWindow.$.colorbox({
                iframe: function() {
                    return $this.data('colorbox-iframe') ? true : false;
                },
                width: function() {
                    return $this.data('colorbox-width') ? $this.data('colorbox-width') : false;
                },
                height: function() {
                    return $this.data('colorbox-height') ? $this.data('colorbox-height') : false;
                },
                href: $this.attr('href'),
                rel: 'colorbox',
                reposition: true,
                scalePhotos: true,
                scrolling: false,
                photo: true, // Fix browser crash on big images (e.g. 8MB)
                previous: false,
                next: false,
                close: '&times;',
                trapFocus: false,
                current: false,
                maxWidth: '50%',
                maxHeight: '50%',
                slideshow: false,
                onComplete: function() {
                    $('#colorbox').find('.cboxPhoto').off('click');
                }
            });
        });
    });
}

function OpenUploadFilesModal(uploadFileInputId, modalId, imageLive, minlibraryWidth, libraryMode) {
    var modal = topWindow.$(modalId);
    if (modalId == '#videoLibrary') {
        modal = SystemModals.sm_get('videoLibrary').$html;
        var eventID = SystemModals.sm_eventReg('videoLibrary', 'show', function(event) {
            var liveUpdate = modal.data('liveUpdate');
            if (modal.find('.modal-body').html().trim() == '') {
                modal.find('.modal-body').html('<iframe id="videoLibraryModal" class="libraryIframe" src="/versions/' + topWindow.versionNUM + '/wizard/imagesLibrary/pixabay_videoV_beta_V4.php?w=' + topWindow.websiteID + '&liveUpdate=' + liveUpdate + '&orientation=horizontal&min_width=1200&min_height=500" style="width:100%;height:500px;margin:0;padding:0;border:none;"></iframe>');
            }
            SystemModals.sm_eventRemove('videoLibrary', 'show', eventID);
        });
    }
    modal.data('uploadFileInputId', uploadFileInputId);
    mixPanelEvent(false, "Open library");
    modal.data('minlibraryWidth', minlibraryWidth);
    modal.data('froalaEditor', false);
    if (imageLive == true) {
        modal.data('liveUpdate', '1');
        modal.addClass('imageLibraryLive');
        modal.modal({
            keyboard: false,
            show: false
        });
        if (libraryMode == 'offCanvas') {
            modal.addClass('off-canvas-mode');
            modal.one('hidden.bs.modal', function(event) {
                modal.removeClass('off-canvas-mode');
            });
            modal.modal('show');
            modal.find('.modal-footer').hide();
            setTimeout(function() {
                modal.find('.libraryIframe').css('height', '100%');
            }, 200);
        } else {
            modal.modal('show');
            modal.find('.modal-header .close').hide();
            modal.find('.modal-header').hide();
            modal.find('.modal-footer').hide();
            setTimeout(function() {
                modal.find('.libraryIframe').css('height', '100vh');
                topWindow.$('.modal-backdrop').addClass('modal-backdrop-without-opacity');
            }, 200);
        }
    } else {
        modal.data('liveUpdate', '0');
        modal.removeClass('imageLibraryLive');
        modal.modal({
            keyboard: true,
            show: false
        });
        modal.modal('show');
        modal.find('.modal-header .close').show();
        modal.find('.modal-header').show();
        modal.find('.modal-footer').show();
        setTimeout(function() {
            if (modal.hasClass('off-canvas-mode')) {
                modal.find('.libraryIframe').css('height', '100%');
            } else {
                modal.find('.libraryIframe').height(500);
            }
            topWindow.$('.modal-backdrop').removeClass('modal-backdrop-without-opacity');
        }, 200);
    }
}

function OpenFroalaEditorLibrary() {
    var modal = topWindow.$('#imageLibrary');
    mixPanelEvent(false, "Open library");
    modal.data('uploadFileInputId', null);
    modal.data('froalaEditor', true);
    modal.data('liveUpdate', '0');
    modal.removeClass('imageLibraryLive');
    modal.modal({
        keyboard: true
    });
    modal.modal('show');
    modal.find('.modal-header .close').show();
    modal.find('.modal-header').show();
    modal.find('.modal-footer').show();
    setTimeout(function() {
        if (modal.hasClass('off-canvas-mode')) {
            modal.find('.libraryIframe').css('height', '100%');
        } else {
            modal.find('.libraryIframe').height(500);
        }
        topWindow.$('.modal-backdrop').removeClass('modal-backdrop-without-opacity');
    }, 200);
}

function DuplicateModuleItem(item) {
    $('body').append('<div style="width: 100%; height: 100%; position: fixed; left: 0; top: 0; right: 0; bottom: 0; display: flex; align-content: center; align-items: center; justify-content: center;"><i class="ace-icon fal fa-spinner fa-solid fa-spin blue fa-4x"></i></div>');
    $('.container.theme-showcase').css({
        opacity: '0.6',
        pointerEvents: 'none'
    });
    $.ajax({
        type: "POST",
        url: "/versions/" + versionNUM + "/wizard/modules/duplicateModuleItemAjax.php",
        data: 'w=' + item.websiteID + '&uniqueID=' + item.uniqueID + '&moduleID=' + item.moduleID + '',
        success: function(data) {
            if (data == 'success') location.reload();
        }
    });
}
if (!topWindow.DokaImagesEditor) {
    topWindow.DokaImagesEditor = function() {
        var _ = {};
        _.init = function(uploadFileInputId, websiteID, imgObj = null) {
            _.setResources();
            if (!_.resources.loaded) {
                topWindow.$('head').append('<link rel="stylesheet" href="' + _.resources.css + '">');
                topWindow.$('head').append(generateCustomCSS());
                topWindow.$.getScript(_.resources.js, function() {
                    _.resources.loaded = true;
                    _.open(uploadFileInputId, websiteID, imgObj);
                });
            } else {
                _.open(uploadFileInputId, websiteID, imgObj);
            }
        };
        _.open = function(uploadFileInputId, websiteID, imgObj) {
            if (uploadFileInputId == '') {
                var uploadFile = '';
                var value = imgObj.url;
                var callback = imgObj.callback;
            } else {
                var uploadFile = topWindow.uploadFiles[uploadFileInputId];
                var $imageEditorBtn = topWindow.uploadFiles[uploadFileInputId].btns.imageEditor;
                var value = topWindow.uploadFiles[uploadFileInputId].input.val();
                if (topWindow.uploadFiles[uploadFileInputId].isImgObj) {
                    var imgObj = tryParseJSON(value);
                    if (imgObj != false) {
                        value = imgObj.n;
                    }
                }
            }
            var src = _.getSourceSrc(value);
            var {
                createDefaultImageReader,
                createDefaultImageWriter,
                locale_en_gb,
                setPlugins,
                plugin_crop,
                cropSelectPresetOptions,
                plugin_crop_locale_en_gb,
                plugin_filter,
                plugin_filter_defaults,
                plugin_filter_locale_en_gb,
                plugin_finetune,
                plugin_finetune_defaults,
                plugin_finetune_locale_en_gb,
                plugin_decorate,
                markup_editor_defaults,
                plugin_decorate_locale_en_gb,
                markup_editor_locale_en_gb,
            } = topWindow.$.fn.pintura;
            setPlugins(plugin_filter, plugin_crop, plugin_finetune, plugin_decorate);
            var locale = Object.assign({}, locale_en_gb, plugin_crop_locale_en_gb, plugin_finetune_locale_en_gb, plugin_filter_locale_en_gb, plugin_decorate_locale_en_gb, markup_editor_locale_en_gb);
            Object.assign(locale, translations.PinturaEditor);
            const imageWriter = createDefaultImageWriter({
                store: (state, options, onprogress) =>
                    new Promise((resolve, reject) => {
                        const {
                            dest
                        } = state;
                        const formData = new FormData();
                        formData.append('file', dest, dest.name);
                        formData.append('w', websiteID);
                        formData.append('sourceFileURL', src);
                        const request = new XMLHttpRequest();
                        request.open('POST', '/versions/' + versionNUM + '/wizard/uploadFileFromEditor.php');
                        request.onerror = () => reject('Pintura Images Editor - `imageWriter` `XMLHttpRequest` `onerror`');
                        request.ontimeout = () => reject('Pintura Images Editor - `imageWriter` `XMLHttpRequest` `ontimeout`');
                        request.onload = () => {
                            if (request.status >= 200 && request.status < 300) {
                                var s3Obj = tryParseJSON(request.responseText);
                                if (!s3Obj) reject('Something went wrong. Please try again.');
                                if (uploadFile == '') {
                                    if (callback) callback.call(this, s3Obj);
                                } else {
                                    UpdateImagePreview(uploadFile.id, {
                                        normal: s3Obj.n,
                                        tiny: s3Obj.t
                                    });
                                    if (uploadFile.isImgObj) {
                                        var imgObj = {
                                            w: s3Obj.w,
                                            h: s3Obj.h,
                                            r: (s3Obj.w / s3Obj.h).toFixed(2),
                                            n: s3Obj.n
                                        };
                                        uploadFile.input.val(JSON.stringify(imgObj)).trigger('change', s3Obj);
                                    } else {
                                        uploadFile.input.val(s3Obj.n).trigger('change', s3Obj);
                                    }
                                    if (typeof AutoSaveWizard == 'function') {
                                        AutoSaveWizard(true, true);
                                    }
                                }
                                state.store = request;
                                resolve(state);
                            } else {
                                reject('Pintura Images Editor - `request.status` ' + request.status);
                            }
                        };
                        request.send(formData);
                    }),
            });
            const pintura = topWindow.topWindow.$.fn.pintura.openEditor({
                src: '/versions/2/wizard/imageFilter/proxyImage.php?image_path=' + encodeURIComponent(getImageWRV1(2000, src)),
                utils: ['filter', 'crop', 'finetune', 'decorate'],
                locale: locale,
                imageReader: createDefaultImageReader(),
                imageWriter: imageWriter,
                cropSelectPresetOptions: [
                    ['Crop', [
                        [undefined, translations.pinturaEditor.cropSelectOptCustom],
                        [1, translations.pinturaEditor.cropSelectOptSquare],
                        [4 / 3, translations.pinturaEditor.cropSelectOptLandscape],
                        [3 / 4, translations.pinturaEditor.cropSelectOptPortrait],
                    ], ],
                    ['Size', [
                        [
                            [180, 180], translations.pinturaEditor.cropSelectOptProfilePicture
                        ],
                        [
                            [1200, 600], translations.pinturaEditor.cropSelectOptHeaderImage
                        ],
                        [
                            [800, 400], translations.pinturaEditor.cropSelectOptTimelinePhoto
                        ],
                    ], ],
                ],
                filterFunctions: plugin_filter_defaults.filterFunctions,
                filterOptions: plugin_filter_defaults.filterOptions,
                finetuneControlConfiguration: plugin_finetune_defaults.finetuneControlConfiguration,
                finetuneOptions: plugin_finetune_defaults.finetuneOptions,
                markupEditorToolbar: markup_editor_defaults.markupEditorToolbar,
                markupEditorToolStyles: markup_editor_defaults.markupEditorToolStyles,
                markupEditorShapeStyleControls: markup_editor_defaults.markupEditorShapeStyleControls,
            });
            pintura.on('show', (res) => {
                var $pinturaModalBackdropManaul = topWindow.$('<div class="pinturaModalBackdropManaul"></div>').appendTo('body');
                $pinturaModalBackdropManaul.click(function(event) {
                    pintura.close();
                });
            });
            pintura.on('hide', (res) => {
                topWindow.$('.pinturaModalBackdropManaul').remove();
            });
            pintura.on('close', (res) => {
                topWindow.$('.pinturaModalBackdropManaul').remove();
            });
        };
        _.setResources = function() {
            if (typeof _.resources === 'object') return;
            _.resources = {
                css: topWindow.$GLOBALS["cdn-interface-files"] + '/admin/InterfaceStatisFiles/allOther/doka_editor/pintura-8.51.0/presets/jquery/jquery-pintura/pintura.css?v=' + topWindow.$GLOBALS["v-cache"],
                js: topWindow.$GLOBALS["cdn-interface-files"] + '/admin/InterfaceStatisFiles/allOther/doka_editor/pintura-8.51.0/presets/jquery/jquery-pintura/pintura.js?v=' + topWindow.$GLOBALS["v-cache"],
                loaded: false
            }
        };
        _.getSourceSrc = function(src) {
            if (src.indexOf('_nobg_') !== -1) {
                return src;
            } else {
                return src.indexOf('_filter_') !== -1 ? src.replace(/_filter_[^.]*/ig, '') : src;
            }
        };
        _.printPinturaResults = function(state) {
            var $previewResults = topWindow.$('<div style="position: absolute; left: 20%; top: 20%; width: 60%; height: 60%; z-index: 99999999999; background-color: #fff ;display: flex; align-items: center; align-content: center; justify-content: center; border: 2px solid black;"><img src="' + URL.createObjectURL(state.blob) + '"></div>').appendTo('body');
            return true;
        };

        function generateCustomCSS() {
            var html = '';
            html += '<style class="doka-custom-css">';
            html += '.DokaModal { width: 90% !important; height: 90% !important; top: 5% !important; left: 5% !important; }';
            html += '.dokaModalBackdropManaul { position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 9998; background-color: #000; opacity: 0.8; }';
            html += '</style>';
            return html;
        }
        return _;
    }();
}

function imageFocusPoint_OpenModal(websiteID, mediaPath, type, focusPoint, hasPreview, version, callback) {
    let heighestHeightNUM = $(window).outerHeight(true) - 115;
    if (heighestHeightNUM > 620) heighestHeightNUM = 620;
    let page = 'imageFocusPoint.php';
    if (version == 2) {
        page = 'imageFocusPointV2.php';
    }
    bootbox.dialog({
            className: 's123-modal i-f-p',
            title: translations.imageFocusPoint,
            size: 'large',
            backdrop: false,
            show: false,
            message: `<iframe id="imageFocusPointModal" src="/versions/${versionNUM}/wizard/imageFilter/${page}?w=${websiteID}&url=${encodeURIComponent(mediaPath)}&type=${type}&hasPreview=${hasPreview}&focusPoint=${encodeURIComponent(JSON.stringify(focusPoint))}" style="width:100%; height: ${heighestHeightNUM}px; margin:0; padding:0; border:none;"></iframe>`
        }).on("hide.bs.modal", function() {
            if (callback && $(this).data('f-p')) callback.call(this, $(this).data('f-p'));
        }).on("hidden.bs.modal", function() {
            $('.i-f-p-backdrop').remove();
        }).on('show.bs.modal', function(event) {
            const $backdrop = $('<div class="modal-backdrop fade in i-f-p-backdrop"></div>');
            if ($('.s123-modal.in:not(.i-f-p)').length > 0) {
                let lastModalZIndex = parseInt($('.s123-modal.in:not(.i-f-p)').last().css('z-index'));
                $(this).css('z-index', lastModalZIndex + 1);
                $backdrop.css('z-index', lastModalZIndex);
            }
            $('body').append($backdrop);
        })
        .modal('show');
}

function imageMagicBtn_OpenModal(websiteID, mediaPath, type, fieldID) {
    var isHorizontal = false;
    var $bootbox = bootbox.dialog({
        className: 's123-modal i-m-b',
        title: translations.imageMagicBtn,
        size: 'large',
        backdrop: true,
        message: '<div id="imageAI"></div>',
        buttons: {
            ok: {
                label: translations.save,
                className: 'image-ai-save-btn btn-success',
            },
            cancel: {
                label: translations.close,
                className: 'image-ai-close-btn btn-success hidden',
            },
        },
    });
    $bootbox.find('.modal-footer').css('text-align', 'center');
    var img = new Image();
    img.onload = function() {
        isHorizontal = this.width > this.height;
        var imageAI = new ImageAI({
            $el: $bootbox.find('#imageAI'),
            fieldID: fieldID,
            $saveBtn: $bootbox.find('.image-ai-save-btn'),
            $closeBtn: $bootbox.find('.image-ai-close-btn'),
            callback: function() {
                $bootbox.modal('hide');
            },
            websiteID: websiteID,
            isHorizontal: isHorizontal,
            imageURL: mediaPath,
            isDetectFaces: true,
        });
    }
    img.src = mediaPath;
}

function imageFocusPoint_GetBgPositionFromString(focusPoint) {
    focusPoint = tryParseJSON(focusPoint);
    if (!focusPoint) return 'center center';
    return focusPoint.x + '% ' + focusPoint.y + '%';
}

function RemoveFileFromUpload(id) {
    topWindow.uploadFiles[id].btns.preview.hide();
    topWindow.uploadFiles[id].btns.preview.find('img').removeAttr('src');
    topWindow.uploadFiles[id].input.val('').trigger('change');
    topWindow.uploadFiles[id].btns.previewIcon.hide();
    topWindow.uploadFiles[id].btns.previewStatic.hide();
    topWindow.uploadFiles[id].btns.remove.hide();
    topWindow.uploadFiles[id].btns.groupEditTools.hide();
    topWindow.uploadFiles[id].btns.imageEditor.hide();
    topWindow.uploadFiles[id].btns.imageFocusPoint.hide();
    topWindow.uploadFiles[id].btns.magicBtn.hide();
    if (isWizardPage() && $('#' + id).attr('name')) {
        AutoSaveWizard(true, true);
        $(document).trigger('s123.website_upload_file_change', [id, '']);
    }
    $(document).trigger('upload_file_change.success', [id, null]);
    if (topWindow.uploadFiles[id].style.type == 'image-center') {
        topWindow.uploadFiles[id].el.removeClass('has-image');
    }
}

function UploadFlickrImage(websiteID, image_id, url, image_name, image_owner_name, image_owner_username) {
    var modal = topWindow.$('#imageLibrary');
    var uploadFileInputId = modal.data('uploadFileInputId');
    var uploadFile = topWindow.uploadFiles[uploadFileInputId];
    uploadFile.progressbar.start(100);
    $.ajax({
        type: "POST",
        url: "/versions/" + versionNUM + "/wizard/uploadFileFromURL.php",
        data: {
            w: websiteID,
            url: url
        },
        success: function(data) {
            data = jQuery.parseJSON(data);
            uploadFile.progressbar.finish(function() {
                UpdateImagePreview(uploadFileInputId, {
                    normal: data.n,
                    tiny: data.t
                });
                uploadFile.input.val(data.n).trigger('change');
                if (isWizardPage()) {
                    AutoSaveWizard(true, true);
                }
            });
        }
    });
    RemoveFlickrImageFromLicenseField(uploadFileInputId, 'add', image_id, image_name, image_owner_name, image_owner_username);
}

function UploadLocalLibraryImage(websiteID, image, url, uploadFileInputId, reloadPreview) {
    var modal = topWindow.$('#imageLibrary');
    var uploadFile = getUploadFileObjectByID(uploadFileInputId);
    if (url.indexOf('/ready_uploads/') != -1) {
        if ($.isNumeric(image.imageWidth) && $.isNumeric(image.imageHeight)) {
            save(uploadFile, uploadFileInputId, {
                n: url,
                t: getImageWRV1(100, url),
                w: image.imageWidth,
                h: image.imageHeight
            });
        } else {
            getImageSizeFromUrl(url, (width, height) => {
                save(uploadFile, uploadFileInputId, {
                    n: url,
                    t: getImageWRV1(100, url),
                    w: width,
                    h: height
                });
            });
        }
    } else {
        uploadFile.progressbar.start(100);
        uploadFile.methods.addFrameClass();
        var ajax = $.ajax({
            type: "POST",
            url: "/versions/" + versionNUM + "/wizard/uploadFileFromURL.php",
            data: {
                w: websiteID,
                url: url,
                input_unique_id: uploadFile.input_unique_id,
                libraryImageDetails: JSON.stringify(image)
            },
            success: function(s3Obj) {
                s3Obj = jQuery.parseJSON(s3Obj);
                uploadFile.progressbar.finish(function() {
                    save(uploadFile, uploadFileInputId, s3Obj);
                });
                uploadFile.methods.removeFrameClass();
            }
        });
        uploadFile.btns.cancel.off('click').click(function() {
            uploadFile.progressbar.abort(function() {
                ajax.abort();
            });
            uploadFile.methods.removeFrameClass();
        });
        RemoveFlickrImageFromLicenseField(uploadFileInputId, 'delete', '', '', '', '');
    }

    function save(uploadFile, uploadFileInputId, imageObj) {
        if (uploadFile.multiUploadMethods) {
            uploadFile.multiUploadMethods.addImage(imageObj);
        } else {
            UpdateImagePreview(uploadFileInputId, {
                normal: imageObj.n,
                tiny: imageObj.t
            });
            if (uploadFile.isImgObj) {
                var imgObj = {
                    w: imageObj.w,
                    h: imageObj.h,
                    r: (imageObj.w / imageObj.h).toFixed(2),
                    n: imageObj.n
                };
                uploadFile.input.val(JSON.stringify(imgObj)).trigger('change', imageObj);
            } else {
                uploadFile.input.val(imageObj.n).trigger('change', imageObj);
            }
        }
        if ($('#' + uploadFileInputId).length > 0 && $('#' + uploadFileInputId).attr('name')) {
            $(document).trigger('saveWizard', [reloadPreview, true, {
                id: uploadFileInputId,
                type: 'imageLibrary'
            }]);
        }
        $(document).trigger('imageLibrary.save');
    }
}

function UploadPixabayLibraryVideo(websiteID, video_obj, url, reloadPreview, toolName = '') {
    if (toolName == 'takeVideo') {
        var uploadFileInputId = video_obj.id;
    } else {
        var modal = topWindow.SystemModals.sm_get('videoLibrary').$html;
        var uploadFileInputId = modal.data('uploadFileInputId');
    }
    var uploadFile = getUploadFileObjectByID(uploadFileInputId);
    if (url.indexOf('/uploads/' + websiteID) != -1) {
        save(uploadFile, uploadFileInputId, {
            n: url,
            t: getImageWRV1(100, url)
        });
    } else {
        uploadFile.progressbar.start(100);
        uploadFile.methods.addFrameClass();
        var ajax = $.ajax({
            type: "POST",
            url: "/versions/" + versionNUM + "/wizard/uploadFileFromURL.php",
            data: {
                w: websiteID,
                url: url,
                input_unique_id: uploadFile.input_unique_id,
                libraryImageDetails: JSON.stringify(video_obj)
            },
            success: function(data) {
                data = jQuery.parseJSON(data);
                uploadFile.progressbar.finish(function() {
                    save(uploadFile, uploadFileInputId, data);
                });
                uploadFile.methods.removeFrameClass();
            }
        });
        uploadFile.btns.cancel.off('click').click(function() {
            uploadFile.progressbar.abort(function() {
                ajax.abort();
            });
            uploadFile.methods.removeFrameClass();
        });
        RemoveFlickrImageFromLicenseField(uploadFileInputId, 'delete', '', '', '', '');
    }

    function save(uploadFile, uploadFileInputId, imageObj) {
        if (uploadFile.multiUploadMethods) {
            uploadFile.multiUploadMethods.addImage(imageObj);
        } else {
            UpdateImagePreview(uploadFileInputId, {
                normal: imageObj.n,
                tiny: imageObj.t
            });
            uploadFile.input.val(imageObj.n).trigger('change', imageObj);
        }
        if ($('#' + uploadFileInputId).length > 0 && $('#' + uploadFileInputId).attr('name')) {
            $(document).trigger('saveWizard', [reloadPreview, true, {
                id: uploadFileInputId,
                type: 'videoLibrary',
                data: imageObj
            }]);
        }
        $(document).trigger('videoLibrary.save');
    }
}

function RemoveFlickrImageFromLicenseField(uploadFileInputId, action, image_id, image_name, image_owner_name, image_owner_username) {
    var $flickrLicenses = $('#flickrLicenses');
    if ($flickrLicenses.length == 0) return;
    if ($flickrLicenses.val() != '') {
        var obj = $.parseJSON($flickrLicenses.val());
        var objClone = clone(obj);
        var uploadFile = getUploadFileObjectByID(uploadFileInputId);
        $.each(obj, function(index, value) {
            if (value.field == uploadFile.id) {
                objClone.splice(index, 1);
            }
        });
        if (action == 'add') {
            objClone.push({
                "field": topWindow.uploadFiles[uploadFileInputId].id,
                "image_id": encodeURIComponent(image_id),
                "image_name": encodeURIComponent(image_name),
                "image_owner_name": encodeURIComponent(image_owner_name),
                "image_owner_username": encodeURIComponent(image_owner_username)
            });
            $flickrLicenses.val(JSON.stringify(objClone));
        }
    } else {
        if (action == 'add') {
            $flickrLicenses.val('[{"field":"' + topWindow.uploadFiles[uploadFileInputId].id + '","image_id":"' + encodeURIComponent(image_id) + '","image_name":"' + encodeURIComponent(image_name) + '","image_owner_name":"' + encodeURIComponent(image_owner_name) + '","image_owner_username":"' + encodeURIComponent(image_owner_username) + '"}]');
        }
    }
}

function UploadIconImage(icon) {
    var modal = topWindow.$('#imageIcons');
    var uploadFileInputId = modal.data('uploadFileInputId');
    topWindow.uploadFiles[uploadFileInputId].input.val('site123-image-icon ' + icon).trigger('change');
    modal.modal('hide');
    UpdateImagePreview(uploadFileInputId, {
        icon: icon
    });
    if (isWizardPage()) {
        AutoSaveWizard(true, true);
    }
}

function UploadFile_GetFileType(fileUrl) {
    var vidExt = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv';
    var imgExt = '.jpeg, .jpg, .png, .gif, .bmp, .svg, .webp, .heic, .tiff, .avif';
    if (fileUrl.indexOf('unsplash') != -1) return 'image';
    var baseUrl = fileUrl.split('?')[0];
    var fileExt = baseUrl.split('.').pop().toLowerCase();
    if (fileExt.length > 0 && vidExt.indexOf(fileExt) != -1) return 'video';
    if (fileExt.length > 0 && imgExt.indexOf(fileExt) != -1) return 'image';
    return false;
}

function UpdateImagePreview(id, preview) {
    var uploadFile = topWindow.uploadFiles[id];
    var file_extension = preview.normal ? preview.normal.split('.').pop() : '';
    if (uploadFile.kind.kind == 5) {
        uploadFile.kind.previewStatic = UploadFile_GetFileType(preview.normal) === 'video';
    }
    if (uploadFile.kind.previewStatic) {
        uploadFile.btns.previewStatic.attr('href', preview.normal);
        uploadFile.btns.previewStatic.show();
        uploadFile.btns.preview.hide();
        topWindow.uploadFiles[id].btns.groupEditTools.hide();
        topWindow.uploadFiles[id].btns.imageEditor.hide();
        topWindow.uploadFiles[id].btns.imageFocusPoint.hide();
        topWindow.uploadFiles[id].btns.magicBtn.hide();
    } else {
        if (preview.icon) {
            uploadFile.btns.previewIcon.find('i').attr('class', 'ace-icon fa ' + preview.icon);
            uploadFile.btns.previewIcon.show();
            uploadFile.btns.preview.hide();
        } else {
            if (file_extension !== 'svg') {
                preview.tiny = uploadFile.style.getPreviewImage(preview.tiny, '100');
            }
            if (preview.normal.length > 0 && preview.tiny.length > 0) {
                if (file_extension === 'gif') {
                    uploadFile.btns.preview.attr('href', preview.normal);
                    uploadFile.btns.preview.find('img').attr('src', preview.normal);
                } else if (uploadFile.resizeType === 'pwaIcon') {
                    uploadFile.btns.preview.attr('href', preview.normal);
                    uploadFile.btns.preview.find('img').attr('src', preview.tiny);
                } else if (file_extension === 'svg') {
                    uploadFile.btns.preview.find('img').attr('src', preview.tiny);
                    uploadFile.btns.preview.attr('href', preview.normal);
                    uploadFile.btns.preview.attr('data-type', 'svg');
                    uploadFile.btns.preview.find('img').css({
                        'mask': 'url(\'' + preview.normal + '\')',
                        '-webkit-mask': 'url(\'' + preview.normal + '\')'
                    });
                } else {
                    uploadFile.btns.preview.find('img').attr('src', preview.tiny);
                    uploadFile.btns.preview.attr('href', getImageWRV1(800, preview.normal));
                    uploadFile.btns.preview.attr('data-type', '');
                    uploadFile.btns.preview.find('img').css({
                        'mask': '',
                        '-webkit-mask': ''
                    });
                    if (preview.normal.indexOf('filter_nobg') != -1) {
                        uploadFile.btns.preview.find('img').css({
                            'objectFit': 'contain'
                        });
                    } else {
                        uploadFile.btns.preview.find('img').css({
                            'objectFit': 'cover'
                        });
                    }
                }
                uploadFile.btns.preview.show();
                uploadFile.btns.previewIcon.hide();
                uploadFile.btns.previewStatic.hide();
            } else {
                topWindow.uploadFiles[id].btns.preview.hide();
                topWindow.uploadFiles[id].btns.previewIcon.hide();
                topWindow.uploadFiles[id].btns.previewStatic.hide();
                topWindow.uploadFiles[id].btns.remove.hide();
                topWindow.uploadFiles[id].btns.groupEditTools.hide();
                topWindow.uploadFiles[id].btns.imageEditor.hide();
                topWindow.uploadFiles[id].btns.imageFocusPoint.hide();
                topWindow.uploadFiles[id].btns.magicBtn.hide();
                return;
            }
        }
    }
    if (!uploadFile.hideRemoveBtn) {
        uploadFile.btns.remove.show();
    }
    if (preview.icon) {
        uploadFile.btns.groupEditTools.hide();
        uploadFile.btns.imageEditor.hide();
        uploadFile.btns.imageFocusPoint.hide();
        uploadFile.btns.magicBtn.hide();
    } else if (preview.patterns) {
        uploadFile.btns.groupEditTools.hide();
        uploadFile.btns.imageEditor.hide();
        uploadFile.btns.imageFocusPoint.hide();
        uploadFile.btns.magicBtn.hide();
    } else {
        if (file_extension === 'gif' || file_extension === 'svg') {
            uploadFile.btns.groupEditTools.hide();
            uploadFile.btns.imageEditor.hide();
            uploadFile.btns.magicBtn.hide();
        } else {
            if (!uploadFile.kind.previewStatic) {
                uploadFile.btns.groupEditTools.show();
                uploadFile.btns.imageEditor.show();
                uploadFile.btns.magicBtn.show();
            }
        }
        if (!uploadFile.kind.previewStatic || UploadFile_GetFileType(preview.normal) === 'video') {
            uploadFile.btns.imageFocusPoint.show();
        }
    }
    if (uploadFile.style.type == 'image-center') {
        limitWidth();
        $(document).off('show.bs.modal.UpdateImagePreview.' + id).on('show.bs.modal.UpdateImagePreview.' + id, function(event) {
            if ($(event.target).find('.fileUploadBox').length == 0) return;
            limitWidth();
        });
        $(document).off('page.shown.UpdateImagePreview.' + id).on('page.shown.UpdateImagePreview.' + id, function() {
            limitWidth();
        });
        uploadFile.el.addClass('has-image');

        function limitWidth() {
            setTimeout(function() {
                uploadFile.el.find('.main-wrapper').css({
                    maxWidth: uploadFile.el.find('.file-options-container').width()
                });
            }, 200);
        }
    }
}

function getIconFullPath(icon) {
    if (icon.indexOf('site123-svg-icons') == -1 && icon.indexOf('system-svg-icons') == -1) return icon;
    var brandFlolder = getBrandFolder(icon);
    icon = icon.replace('site123-image-icon', '');
    icon = icon.replace('site123-svg-icons', ''); // existing customers, we now use `system-svg-icons`
    icon = icon.replace('system-svg-icons', '');
    icon = icon.replace('brand-1', '');
    icon = topWindow.$GLOBALS['cdn-images-files'] + '/ready_uploads/svg/' + brandFlolder + icon.trim() + '.svg';
    return icon;

    function getBrandFolder(url) {
        var brandFlolder = '';
        if (url.indexOf('brand-1') != -1) {
            brandFlolder = 'brand-1/';
        }
        return brandFlolder;
    }
}

function escapeHtml(text) {
    if (!text) return text;
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };
    return text.toString().replace(/[&<>"']/g, function(m) {
        return map[m];
    });
}

function InternalModalHandler() {
    $('#internalModal').on('show.bs.modal', function(event) {
        var $modal = $(this);
        $modal.find('.modal-title').html(escapeHtml($modal.data('title')));
        var heighestHeightNUM = $(window).outerHeight(true) - 170;
        if ($.isNumeric($modal.data('modal-height-limit'))) {
            if (heighestHeightNUM > $modal.data('modal-height-limit')) {
                heighestHeightNUM = $modal.data('modal-height-limit');
            }
        }
        if ($modal.data('move-parent-modal-background')) {
            var $parentModal = $('#' + $modal.data('move-parent-modal-background'));
            if ($parentModal) {
                $modal.data('z-index', $parentModal.css('z-index'));
                $parentModal.css('z-index', 1040);
            }
        }
        if ($modal.data('modal-size') && $modal.data('modal-size') == 'small') {
            $modal.find('.modal-dialog').removeClass('modal-xlg');
        }
        $modal.find('.modal-body').html('<iframe id="internalModalIframe" src="' + $modal.data('url') + '" style="width: 100%;height: ' + heighestHeightNUM + 'px;margin: 0;padding: 0;border: none;"></iframe>');
    });
    $('#internalModal').on('hide.bs.modal', function(event) {
        var $modal = $(this);
        $modal.data('title', '');
        $modal.data('url', '');
        $modal.find('.modal-body').empty();
        if ($modal.data('move-parent-modal-background')) {
            var $parentModal = $('#' + $modal.data('move-parent-modal-background'));
            if ($parentModal) {
                $parentModal.css('z-index', $modal.data('z-index'));
            }
        }
        if ($modal.data('modal-size') && $modal.data('modal-size') == 'small') {
            $modal.find('.modal-dialog').addClass('modal-xlg');
        }
    });
}

function urldecode(str) {
    return decodeURIComponent((str + '').replace(/\+/g, '%20'));
}

function fontsGlobalChange() {
    var all_fonts = $('#all_fonts').val();
    $('#font_menu,#font_modules_header,#global_font').val(all_fonts)
        .trigger('change.demo_element_update')
        .trigger('change.font_changed');
}

function emailValidator(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
var SettingsBox = new function() {
    var that = this;
    that.init = function() {
        that.$buttons = $('.btnSettings');
        that.$box = $('.buttonSettingBox');
        that.$cover = $('<div class="s-b-cover"></div>');
        $('#wizardBox > .tabbable').append(that.$cover);
        $('#addModuleItemForm.tabbable').append(that.$cover);
        $('.logoToolWizard').append(that.$cover);
        that.$box.each(function(index, box) {
            var $this = $(this);
            var $close = $('<div class="s-b-c"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
            $close.find('.close').off('click.SettingsBox').on('click.SettingsBox', function() {
                if ($this.attr('id') == 'home_nameBOX_sizes') {
                    $this.find('#logo_size_slider').closest('.form-group').show();
                    $this.find('#logo_icon_text_spacing_slider').closest('.form-group').show();
                    window.reloadPreviewCSS = ReloadPreviewCSS;
                    UpdatePreviewAreaByAjax(['#websiteHeader', ], false, false, '');
                }
                that.hide();
            });
            addElementsToSettingBox($this.find('[data-clone-el="true"]'));
            $this.prepend($close);
        });
        $(document).off('settings_box_close').on('settings_box_close', function() {
            that.hide();
        });
    };
    that.hide = function() {
        var $activeSb = that.$box.filter('.s-b-active');
        that.$buttons.each(function() {
            $(this)
                .data('sb-status', 'close')
                .removeClass('btn-info')
                .css({
                    position: 'static'
                });
        });
        $('.settings-boxes-backdrop').remove();
        that.$box.fadeOut(100, function() {
            that.$box.hide();
            that.$box.removeClass('s-b-active');
        });
        $activeSb.trigger('settings_box_handler.hide', [$activeSb]);
        if ($activeSb.attr('id') == 'home_siteSloganBOX_sizes' || $activeSb.attr('id') == 'home_siteSlogan_2_BOX_sizes' || $activeSb.attr('id') == 'home_SecondSiteSloganBOX_sizes') {
            $(document).trigger('homepage_text_settings_box.hide');
        }
        that.$cover.hide();
        resetFullSizeAbilty();
        $(document).off('mousedown.button-setting-box-mouse-click');
    };

    function addElementsToSettingBox($containers) {
        $.each($containers, function(index, container) {
            var $container = $(this);
            var $originalEl = $($container.data('original-el-id'));
            var $clone = $originalEl.clone();
            if ($originalEl.attr('id') === 'homepage_goal_type') {
                $clone.children().first().remove();
            }
            $clone.off('change.SettingsBox').on('change', function() {
                $originalEl.val($(this).val()).trigger('change');
            });
            $originalEl.off('change.update_s_b_clone').on('change.update_s_b_clone', function() {
                $clone.val($(this).val());
            });
            $container.append($clone);
        });
    }

    function resetFullSizeAbilty() {
        that.$box.removeClass('s-b-full-size');
        that.$box.closest('.s-b-container').removeClass('s-b-full-size');
        that.$box.closest('.tab-content').removeClass('s-b-full-size');
    }
    return that;
}();

function SettingsBoxHandler($btn, $settingBox) {
    if ($btn.data('sb-status') === 'open') {
        SettingsBox.hide();
        return;
    }
    SettingsBox.hide();
    if ($settingBox.attr('id') == 'home_nameBOX_sizes') {
        var logo = topWindow.uploadFiles.siteLogo.input.val();
        if (logo.indexOf('site123-image-icon') != -1 || logo.indexOf('.svg') != -1) {
            $settingBox.find('#logo_size_slider').closest('.form-group').show();
            $settingBox.find('#logo_icon_text_spacing_slider').closest('.form-group').show();
        } else {
            $settingBox.find('#logo_size_slider').closest('.form-group').hide();
            $settingBox.find('#logo_icon_text_spacing_slider').closest('.form-group').hide();
        }
    }
    $(document).on('mousedown.button-setting-box-mouse-click', function(event) {
        var $target = $(event.target);
        if ($target.closest('.modal.s123-modal').length !== 0) return;
        if ($target.closest('ul.ui-autocomplete').length !== 0) return;
        if ($target.closest('.sp-container').length !== 0) return;
        if ($target.closest('.buttonSettingBox').length === 0) {
            SettingsBox.hide();
        }
        if ($target.closest('.btnSettings').length !== 0) {
            $btn.data('sb-status', 'open');
        }
    });
    if ($btn.data('s-b-o-s')) {
        $settingBox.css({
            top: $btn.closest('.form-group').find($btn.data('s-b-o-s')).outerHeight(),
            width: $btn.closest('.form-group').find($btn.data('s-b-o-s')).outerWidth()
        });
    } else if ($btn.data('full-size')) {
        $settingBox.addClass('s-b-full-size');
        $settingBox.closest('.s-b-container').addClass('s-b-full-size');
        $settingBox.closest('.tab-content').addClass('s-b-full-size');
    } else {
        $settingBox.css({
            top: $btn.closest('.form-group').outerHeight(),
            width: $btn.closest('.form-group').outerWidth()
        });
    }
    if (!$btn.data('skip-design-fix')) {
        $btn
            .addClass('btn-info')
            .css({
                position: 'relative'
            });
    }
    $settingBox.fadeIn(100, function() {
        $settingBox.trigger('settingBoxOpen');
        $settingBox.addClass('s-b-active');
    });
    $btn.tooltip('hide');
    SettingsBox.$cover.css({
        zIndex: $('#previewBox').css('z-index') - 1
    });
    SettingsBox.$cover.fadeIn(100);
    $settingBox.trigger('settings_box_handler.show', [$btn, $settingBox]);
}

function SortSelectOptions($select) {
    var options = $select.find('option');
    var selected = $select.val();
    options.sort(function(a, b) {
        if (a.text > b.text) return 1;
        if (a.text < b.text) return -1;
        return 0
    })
    $select.empty().append(options);
    $select.val(selected);
}

function CurrencySymbolToolTip() {
    $('.currency-symbol').attr('data-rel', 'tooltip');
    $('.currency-symbol').attr('data-title', translations.CurrencySymbolToolTip);
}

function MeasurementsUnitToolTip() {
    $('.weight-unit, .length-unit').attr('data-rel', 'tooltip');
    $('.weight-unit').attr('data-title', translations.WeightUnitToolTip);
    $('.length-unit').attr('data-title', translations.LengthUnitToolTip);
}

function SetExternalVideoThumbnail($thumbnail, url, deferred, $thumbnail_width, $thumbnail_height) {
    if (url.indexOf("youtube.com") > -1) {
        if (url.indexOf("v=") > -1) {
            if (url.indexOf("&") > -1) {
                $thumbnail.videoId = String(url).substring(url.indexOf("v=") + 2, url.indexOf("&"));
            } else {
                $thumbnail.videoId = String(url).substring(url.indexOf("v=") + 2, url.length);
            }
        }
        var thumbnail_url = 'https://img.youtube.com/vi/' + $thumbnail.videoId + '/hqdefault.jpg';
        getImageSizeFromUrl(thumbnail_url, function(width, height) {
            $thumbnail_width.val(width);
            $thumbnail_height.val(height);
            $thumbnail.val(thumbnail_url);
            if (deferred) deferred.resolve();
        });
    } else if (url.indexOf("vimeo.com") > -1) {
        $.ajax({
            type: 'GET',
            url: 'https://vimeo.com/api/oembed.json?url=' + encodeURIComponent(url),
            dataType: 'json',
            success: function(data) {
                getImageSizeFromUrl(data.thumbnail_url, function(width, height) {
                    $thumbnail_width.val(width);
                    $thumbnail_height.val(height);
                    $thumbnail.val(data.thumbnail_url);
                    if (deferred) deferred.resolve();
                });
            }
        });
    }
}

function getImageSizeFromUrl(src, callback) {
    var img = new Image();
    img.onload = function() {
        if (callback) callback.call(this, this.width, this.height);
    }
    img.src = src;
}

function getFileName(path) {
    if (!path) return path;
    return path.replace(/^.*(\\|\/|\:)/, '');
}

function isBsModalOpen(modalId) {
    return ($(modalId).data('bs.modal') || {
        isShown: false
    }).isShown
}

function gritter_update(title, class_name) {
    if (!window.gritter_unique_id) {
        window.gritter_unique_id = $.gritter.add({
            title: title ? title : translations.saveUpdateSuccessful,
            class_name: class_name ? class_name : 'gritter-success',
            time: 1000
        });
    } else {
        $.gritter.remove(window.gritter_unique_id, {
            fade: false, // optional
            speed: 'fast' // optional
        });
        window.gritter_unique_id = false;
        gritter_update(title, class_name);
    }
}
jQuery.QueryString = (function(paramsArray) {
    let params = {};
    for (let i = 0; i < paramsArray.length; ++i) {
        let param = paramsArray[i]
            .split('=', 2);
        if (param.length !== 2)
            continue;
        params[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
    }
    return params;
})(window.location.search.substr(1).split('&'));

function replaceUrlParam(url, paramName, paramValue) {
    if (paramValue == null) {
        paramValue = '';
    }
    var pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
    if (url.search(pattern) >= 0) {
        return url.replace(pattern, '$1' + paramValue + '$2');
    }
    url = url.replace(/[?#]$/, '');
    return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
}
var topWindow = function() {
    var win = window;
    var top = win;
    while (win.parent != win) {
        try {
            win.parent.document;
            top = win.parent;
        } catch (e) {}
        win = win.parent;
    }
    return top;
}();

function isChromium() {
    var isChromium = window.chrome,
        winNav = window.navigator,
        vendorName = winNav.vendor,
        isOpera = winNav.userAgent.indexOf("OPR") > -1,
        isIEedge = winNav.userAgent.indexOf("Edge") > -1,
        isIOSChrome = winNav.userAgent.match("CriOS");
    if (isIOSChrome) {
        return true;
    } else if (isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && isOpera === false && isIEedge === false) {
        return true;
    } else {
        return false;
    }
}

function ConvertUtcToLocalTime(utcDate) {
    var utcDateObj = moment.utc(utcDate);
    var localDate = moment(utcDateObj).local();
    return localDate.format("YYYY-MM-DD HH:mm:ss");
}

function tryParseJSON(str, faildCallback) {
    try {
        var Obj = JSON.parse(str);
        if (Obj && typeof Obj === "object") {
            return Obj;
        }
    } catch (e) {}
    if (faildCallback) faildCallback.call(this);
    return false;
}

function OpenPremiumFeatures(packageNUM) {
    if (topWindow.openPremiumFeatures && $.isNumeric(topWindow.openPremiumFeatures)) return topWindow.openPremiumFeatures;
    return packageNUM;
}

function isRtlLanguage(char) {
    var ltrChars = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
        rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
        rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');
    return rtlDirCheck.test(char);
}

function InitializeToolTips() {
    if (!ace.vars['touch']) {
        $('[data-rel=tooltip]').tooltip({
            container: 'body',
            placement: 'auto'
        });
        $('[data-rel=tooltip-desk]').tooltip({
            container: 'body',
            placement: 'auto'
        });
        $('[data-rel-tooltip=tooltip-desk]').tooltip({
            container: 'body',
            placement: 'auto'
        });
        $('[data-rel=tooltip-preview-scale-devices]').tooltip({
            container: 'body',
            placement: 'auto',
            template: '<div class="tooltip preview-scale-devices-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            delay: {
                show: 1000,
                hide: 0
            }
        });
    } else {
        $('[data-rel=tooltip]').tooltip({
            container: 'body',
            placement: 'auto'
        });
    }
}

function autocomplete_initialize($input, items, settings) {
    $input
        .autocomplete({
            source: items,
            minLength: 0,
            autoFocus: true,
            select: function(event, ui) {
                if (settings.callback) settings.callback.call(this, event, ui);
            }
        })
        .click(function(event) {
            $(this).autocomplete('search', '');
        });
    if (settings.showNewItems) {
        $input.on('autocompletesearch', function(event, ui) {
            var new_item_id = 'new_item';
            var new_item_index;
            var item_exist;
            $.each(items, function(index, value) {
                if (value.id === new_item_id) {
                    new_item_index = index;
                    return true;
                }
                if (value.label.toLowerCase() === $input.val().toLowerCase()) {
                    item_exist = true;
                }
            });
            if (item_exist || $input.val().length === 0) {
                if ($.isNumeric(new_item_index)) {
                    items.splice(new_item_index, 1);
                    $input.autocomplete("option", items);
                }
                return;
            }
            if ($.isNumeric(new_item_index)) {
                items[new_item_index].label = translations.autocompleteAddNewValue.replace('{{value}}', $input.val());
                items[new_item_index].value = $input.val();
            } else {
                items.push({
                    id: new_item_id,
                    label: translations.autocompleteAddNewValue.replace('{{value}}', $input.val()),
                    value: $input.val()
                });
            }
            $input.autocomplete("option", items);
        });
    }
    $input.data("ui-autocomplete")._renderItem = function(ul, item) {
        if (item.label.toLowerCase() === this.term.toLowerCase()) {
            return $('<li class="ui-state-focus">' + item.label + '</li>')
                .data('item.autocomplete', item)
                .appendTo(ul);
        } else {
            return $('<li>' + item.label + '</li>')
                .data('item.autocomplete', item)
                .appendTo(ul);
        }
    };
    $input.onEnterKey(function(event) {
        $input.autocomplete('close');
        return true;
    });
}
var AjaxQueueManager = new function() {
    var requests = [];
    this.ready = true;
    this.add = function(request) {
        requests.push(request);
    };
    this.start = function(x) {
        if (requests.length === 0) {
            this.ready = true;
            return;
        }
        this.ready = false;
        var request = requests.shift();
        $.post(request.url, request.data).done(request.done);
    };
};

function ProFeature_limit(settings) {
    if (ProFeature_isLimit(settings)) {
        const upgradeReason = settings.upgradeReason ? settings.upgradeReason : settings.featureID;
        const limitedToPackageNUM = settings.limitedToPackageNUM ? settings.limitedToPackageNUM : 1;
        topWindow.upgradeFeaturesManager.show({
            featureID: upgradeReason,
            limitedToPackageNUM: limitedToPackageNUM
        });
        if (settings.callback) settings.callback.call(this, true);
    } else {
        if (settings.callback) settings.callback.call(this, false);
    }
}

function ProFeature_addLabel(settings) {
    if (ProFeature_isLimit(settings)) {
        var $html = $('<span class="label pro-feature-label" style="text-transform: uppercase;">' + (settings.text ? settings.text : translations.premium) + '</span>');
        if (settings.clickable) {
            $html.click(function() {
                const upgradeReason = settings.upgradeReason ? settings.upgradeReason : settings.featureID;
                const limitedToPackageNUM = settings.limitedToPackageNUM ? settings.limitedToPackageNUM : 1;
                topWindow.upgradeFeaturesManager.show({
                    featureID: upgradeReason,
                    limitedToPackageNUM: limitedToPackageNUM
                });
            });
        }
        settings.$element.append($html);
    }
}

function ProFeature_addBlockDiv(settings) {
    if (ProFeature_isLimit(settings)) {
        var html = '<div class="premiumFeatureDesign premiumFeatureMessageItem transform-centering" data-rel="tooltip" title="' + translations.proFeaturelimited + '"><a class="btn btn-danger btn-sm lockMessage fal fa-lock"></a></div>';
        var $html = $(html);
        $html.tooltip({
            container: 'body',
            placement: 'auto'
        });
        $html.click(function() {
            const limitedToPackageNUM = settings.limitedToPackageNUM ? settings.limitedToPackageNUM : 1;
            topWindow.upgradeFeaturesManager.show({
                featureID: settings.featureID,
                limitedToPackageNUM: limitedToPackageNUM
            });
        });
        settings.$element.addClass('premiumFeature').append($html);
        settings.$element.find('input, select').attr('disabled', 'disabled');
    }
}

function ProFeature_isLimit(settings) {
    var limitedToPackageNUM = settings.limitedToPackageNUM ? settings.limitedToPackageNUM : '1';
    var limitProFeatures = {
        'websiteID': {
            '2': 1801842,
            '96': 1801842,
            '112': 1808579,
            '123': 1801842,
            '52': 1808579,
            '17': 1808579,
            'websitePassword': 1808579,
            'customLabels': 1,
            'membersOnly': 1,
            'statistics': 1,
            'confirmedMembersOnly': 1,
            'wishList': 1,
            'faq': 1,
            'advancedSEO': 1,
            'statistics': 1,
            'review': 1,
            'setUniqueDomain': 1,
            'redirectDomains': 1,
            'mailboxes': 1,
            'externalLink': 1,
            'languages': 642600,
            'abandonedCart': 1,
            'emailReminder': 1,
            'multiCurrency': 1,
            'paymentGateways': 1,
            'contactMagicBtnGreeter': 1,
            'relatedItemsTool': 1,
            'customDesignBtn': 1,
            'blogDate': 1,
            'menuActionButtons': 1,
            'footerLimit': 1,
            'footerLimit_mailing': 1,
            'footerLimit_termsAndService': 1,
            'footerLimit_privacyAndPolicy': 1,
            'footerLimit_cookie': 1,
            'formAutoReplyMessage': 1,
            'formConversionCode': 5142205,
            'formAfterSubmitActions': 5142205,
            'siteFavicon': 1,
            'eCommerceAddItem': 1,
            'languageManager': 1,
            'footerLayoutLimit': 1,
            'designCustomTab': 1,
            'advancedFormSettings': 1,
            'customForm': 6656890,
            'customThankMsg': 1,
            'gallery_moduleSettings': 1,
            'gallery_editorImage': 1,
            'category': 999999999999,
            'uniquePage': 999999999999,
            's123PopupsLimit': 1,
            'backInStock': 1,
            'externalCalendar': 1,
            'automaticCoupon': 1,
            'contributorsAccess': 1,
            'donateGoal': 1,
            'portfolioAccess': 1,
            'subscriptionSignup': 1,
            'subscriptionPayed': 1,
            'clientZoneModuleOptions': 1,
            'coupons': 1,
            'advancedMobileDesign': 1,
            'eCommerceSalesChannel': 1,
            'statistics_more_then_one_year': 1,
            'customerProductReview': 1,
            'headerModulesSearchBox': 1,
            'footerLimit_accessibility': 1,
            'booking_generatePDF': 1,
            'automaticInternalLink': 1,
        },
        'userID': {
            'showHeaderSearch': 1537397
        }
    };
    if (isCardPage()) {
        limitProFeatures.websiteID.cp_languages = 1;
        limitProFeatures.websiteID.cp_contactConvCode = 1;
        limitProFeatures.websiteID.cp_teamMembers = 1;
        limitProFeatures.websiteID.cp_subCardsDomainActive = 1;
        limitProFeatures.websiteID.cp_publishDownloadQR = 1;
        limitProFeatures.websiteID.cp_buttons = 1;
        limitProFeatures.websiteID.cp_layouts = 1;
        limitProFeatures.websiteID.cp_floatingBanner = 1;
        limitProFeatures.websiteID.cp_videoConference = 1;
    }
    var local = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (local == 'http://app.local.site123.com') {
        $.each(limitProFeatures, function(limitType) {
            $.each(limitProFeatures[limitType], function(toolType) {
                limitProFeatures[limitType][toolType] = 1;
            });
        });
    }
    if (OpenPremiumFeatures(settings.packageNUM) > limitedToPackageNUM) return false;
    if (settings.userID && limitProFeatures.userID[settings.toolType] < settings.userID) return true;
    if (settings.websiteID && limitProFeatures.websiteID[settings.toolType] < settings.websiteID) return true;
    return false;
}

function isWizardPage() {
    return typeof AutoSaveWizard == 'function';
}
var newModuleNotification = new function() {
    var nmn = this;
    nmn.init = function(settings) {
        nmn.websiteID = settings.websiteID;
        nmn.moduleTypeNUM = settings.moduleTypeNUM;
        nmn.title = settings.title;
        nmn.message = settings.message;
        nmn.buttons = settings.buttons;
        nmn.nexUpdate = settings.nexUpdate;
        nmn.showMessage = $.cookie(nmn.websiteID + '_' + nmn.moduleTypeNUM + '_newModuleNotification');
        if ($.cookie(nmn.websiteID + '_' + nmn.moduleTypeNUM + '_newModuleNotification')) return;
        newModuleNotification.showNotification();
    };
    nmn.showNotification = function() {
        var buttons = {};
        $.each(nmn.buttons, function(key, button) {
            buttons[key] = {
                label: button.label,
                className: button.className,
                callback: function() {
                    if (button.callback) {
                        button.callback.call(this);
                    }
                }
            };
        });
        bootbox.dialog({
            title: nmn.title,
            message: nmn.message,
            className: 's123-modal new-module-notification',
            size: 'modal-sm',
            closeButton: true,
            backdrop: true,
            onEscape: function(event) {},
            buttons: buttons
        }).on('hide.bs.modal', function() {
            $.cookie(nmn.websiteID + '_' + nmn.moduleTypeNUM + '_newModuleNotification', '1', {
                expires: nmn.nexUpdate,
                path: '/'
            });
        });
    };
}();
var s1232HalfModal = function() {
    var that = {};
    that.init = function(settings) {
        if (!settings) return;
        that.$background = $('#main-container');
        that.$el = $(generateHtml());
        that.$content = that.$el.find('.modal-content');
        $('body').append(that.$el);
        that.onShow = settings.onShow;
        that.onShown = settings.onShown;
        that.onHide = settings.onHide;
        that.onHidden = settings.onHidden;
        that.className = settings.className;
        addCallBackFunctions();
        if (settings.show) that.show();
    };
    that.show = function() {
        that.$el.modal('show');
    };
    that.hide = function() {
        that.$el.modal('hide');
    };

    function addCallBackFunctions() {
        var callBackObj = {
            leftSide: that.$content.find('.leftSide'),
            rightSide: that.$content.find('.rightSide')
        };
        that.$el
            .on('show.bs.modal', function() {
                that.$background.css({
                    filter: 'blur(3px)'
                });
                if (that.onShow) that.onShow.call(this, callBackObj);
            })
            .on('shown.bs.modal', function() {
                if (that.onShown) that.onShown.call(this, callBackObj);
            })
            .on('hide.bs.modal', function() {
                that.$background.css({
                    filter: ''
                });
                if (that.onHide) that.onHide.call(this, callBackObj);
            })
            .on('hidden.bs.modal', function() {
                if (that.onHidden) that.onHidden.call(this, callBackObj);
            });
    }

    function generateHtml() {
        var html = '';
        html += '<div class="modal s123-modal-sides fade ' + that.className + '" id="s1232HalfModal" tabindex="-1" role="dialog" aria-labelledby="s1232HalfModal">';
        html += '<div class="modal-dialog modal-lg" role="document">';
        html += '<div class="modal-content">';
        html += '<div class="successScreen">';
        html += '<div class="leftSide"></div>';
        html += '<div class="rightSide"></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html;
    }
    return that;
}();

function AddFilterInitialize(objects) {
    var $form = objects.$form;
    var $filterInput = objects.$filterInput;
    var $filterContainers = objects.$filterContainers;
    var $categoriesList = objects.$categoriesList;
    var $noResults = objects.$noResults;
    var afterFilterCallback = objects.afterFilterCallback ? objects.afterFilterCallback : false;
    var addUserLog = objects.addUserLog;
    if ($categoriesList.is("select")) {
        $categoriesList.change(function() {
            filterByCategory($(this).val());
            $filterInput.val('');
        });
        $categoriesList.trigger('change');
    } else {
        $categoriesList.find('> li').click(function() {
            var $this = $(this);
            $filterInput.val('');
            filterByCategory($this.data('filter'));
            $categoriesList.find('li').removeClass('active');
            $this.addClass('active');
        });
        $categoriesList.find('> li').first().click();
    }
    $form.submit(function(e) {
        e.preventDefault();
    });
    var filterInputFinished;
    $filterInput.on('input', function() {
        if (!$form.valid()) return;
        $categoriesList.find('> li').removeClass('active');
        clearTimeout(filterInputFinished);
        filterInputFinished = setTimeout(function() {
            filter($filterContainers, $filterInput.val());
            if (addUserLog) {
                $.ajax({
                    type: "POST",
                    url: "/files/vendor/site123/loginUserLog/loginUserLogAjax.php",
                    data: {
                        websiteID: topWindow.websiteID,
                        w: topWindow.websiteID,
                        search: $filterInput.val(),
                        actionID: objects.actionID
                    },
                });
            }
        }, 500);
    });

    function filterByCategory(filter) {
        $noResults.hide();
        scrollTop();
        $filterContainers.hide();
        $filterContainers.filter('.' + filter).show();
        if ($filterContainers.filter('.' + filter).length === 0) {
            $noResults.show();
        }
        if (afterFilterCallback) afterFilterCallback();
    };

    function filter($containers, text) {
        $noResults.hide();
        scrollTop();
        if (text.length === 0) {
            $categoriesList.is("select") ? $categoriesList.val($categoriesList.find('option').first().val()).trigger('change') : $categoriesList.find('> li').first().click();
            return;
        }
        text = text.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
        text = text.replace(/[.]/gi, '\\.');
        $containers.hide();
        var rex = new RegExp(text, 'i');
        $containers.filter(function() {
            return rex.test($(this).text());
        }).show().find('.add-page-module-image > img').attr('src', function() { //Make sure to show images with lazy load
            return $(this).data('image');
        });
        if ($containers.filter(':visible').length === 0) {
            $noResults.show();
        }
        if (afterFilterCallback) afterFilterCallback();
    };

    function scrollTop() {
        if ($filterContainers.length === 0) return;
        $filterContainers.scrollParent().scrollTop(0);
    };
}

function replaceQueryParam(param, newval, search) {
    var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
    var query = search.replace(regex, "$1").replace(/&$/, '');
    return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : '');
}

function isElementVisiblityInViewPort($el, offset_top) {
    var position = $el.get(0).getBoundingClientRect();
    if (offset_top) {
        var position_top = position.top - offset_top;
    } else {
        var position_top = position.top;
    }
    if (position_top < 0 && position.bottom >= 0) {
        return false;
    }
    if (position_top < window.innerHeight && position.bottom >= window.innerHeight) {
        return false;
    }
    if (position.left < 0 && position.right >= 0) {
        return false;
    }
    if (position.left < window.innerWidth && position.right >= window.innerWidth) {
        return false;
    }
    return true;
}

function initilizeModuleItemConfirmDelete() {
    $('[data-module-item-confirm=delete]').confirmation({
        placement: intrface_align,
        title: translations.areYouSure,
        btnOkLabel: '<i class="icon-ok-sign icon-white"></i> ' + translations.yes + '',
        btnCancelLabel: '<i class="icon-remove-sign"></i> ' + translations.no + '',
        popout: true,
        singleton: true,
        container: 'body',
        btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
        btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
        onConfirm: function() {
            return true;
        }
    });
}

function OpenOrderInfo($websiteID, moduleTypeNUM, orderID) {
    if (moduleTypeNUM == '96') {
        var src = '/versions/' + versionNUM + '/wizard/orders/manage/scheduleBooking/showOrderInfo.php?id=' + orderID + '&w=' + $websiteID + '"';
    } else if (moduleTypeNUM == '97') {
        var src = '/versions/' + versionNUM + '/wizard/orders/manage/foodDelivery/showOrderInfo.php?id=' + orderID + '&w=' + $websiteID + '"';
    } else if (moduleTypeNUM == '2') {
        var src = '/versions/' + versionNUM + '/wizard/orders/manage/events/showOrderInfo.php?id=' + orderID + '&w=' + $websiteID + '"';
    } else if (moduleTypeNUM == '142') {
        var src = '/versions/' + versionNUM + '/wizard/orders/manage/onlineCourses/showOrderInfo.php?id=' + orderID + '&w=' + $websiteID + '"';
    } else if (moduleTypeNUM == '52') {
        var src = '/versions/' + versionNUM + '/wizard/orders/manage/blog/showOrderInfo.php?id=' + orderID + '&w=' + $websiteID + '"';
    } else if (moduleTypeNUM == '112') {
        var src = '/versions/' + versionNUM + '/wizard/orders/manage/store/showOrderInfo.php?id=' + orderID + '&w=' + $websiteID + '"';
    } else {
        var src = '/versions/' + versionNUM + '/wizard/orders/manage/showOrderInfo.php?id=' + orderID + '&w=' + $websiteID + '"';
    }
    var modal = SystemModals.sm_get('showOrderInfoModal');
    modal.updateHTML('title', escapeHtml(translations.showOrderInfoModal.orderCode + ' #' + orderID));
    modal.updateHTML('body', '<iframe name="orderInfo" style="border:0;" src="' + src + '" width="100%"></iframe>');
    modal.show();
}

function s123InfiniteScroll(settings) {
    var that = {};
    that.isMobile = settings.isMobile;
    that.$container = settings.$container;
    that.ajax = settings.ajax;
    that.inProgress = false;
    that.pageNum = settings.pageNum ? settings.pageNum : 1;
    that.firstRequestSettings = settings.firstRequestSettings;
    that.loader = settings.loader;
    that.disableAutoFetch = settings.disableAutoFetch;
    that.beforeFirstLoad = settings.beforeFirstLoad;
    that.disableFetchOnLoad = settings.disableFetchOnLoad;
    that.init = function() {
        that.firstRequestHandler.set(that.firstRequestSettings);
        that.$paginationContainer = $(generateHtml());
        that.$loading = that.$paginationContainer.find('.loading-icon');
        that.$mobileBtn = that.$paginationContainer.find('#loadMore');
        that.$container.append(that.$paginationContainer);
        that.addLoadNextPageAbility();
        if (that.disableFetchOnLoad) return;
        if (that.beforeFirstLoad) {
            showLoadingAnimation();
            that.beforeFirstLoad.call(this, function() {
                hideLoadingAnimation();
                that.getPage();
            }, that);
        } else {
            that.getPage();
        }
    };
    that.addLoadNextPageAbility = function() {
        if (that.isMobile) {
            that.$mobileBtn.on('click.wizard_infinite_scroll', function() {
                that.getPage();
            });
        } else {
            that.$container.on('scroll.wizard_infinite_scroll', function() {
                var $this = $(this);
                var st = $this.scrollTop();
                if (st > ((that.$container[0].scrollHeight - that.$container[0].offsetHeight) * 0.80)) {
                    that.getPage();
                }
            });
        }
    };
    that.destroy = function() {
        that.$loading.hide();
        that.$container.off('scroll.wizard_infinite_scroll');
        that.$mobileBtn.hide();
        that.$paginationContainer.remove();
        if (that.request) that.request.abort();
    };
    that.getPage = function() {
        if (that.inProgress) return;
        that.inProgress = true;
        showLoadingAnimation();
        that.ajax.data.page = that.pageNum;
        that.request = $.ajax({
            type: that.ajax.type,
            url: that.ajax.url,
            data: that.ajax.data,
            success: function(data) {
                data = tryParseJSON(data);
                if (!data) return;
                that.pageNum++;
                if ($.isNumeric(data.nextPageNum) && that.pageNum != data.nextPageNum) {
                    that.pageNum = data.nextPageNum;
                }
                that.inProgress = false;
                hideLoadingAnimation();
                if (!data.hasNextPage) {
                    that.destroy();
                } else {
                    if (that.firstRequestSettings.pagesAmount > 1) {
                        that.getPage();
                        that.firstRequestSettings.pagesAmount--;
                    } else if (that.$container.is(':visible') && !that.disableAutoFetch) {
                        that.firstRequestHandler.reset();
                        setTimeout(function() {
                            if (!(that.$container.get(0).scrollHeight > that.$container.height())) {
                                that.getPage();
                            }
                        }, 200);
                    }
                }
                $.each(data.items, function(index, item) {
                    if (that.ajax.buildItemCallback) that.ajax.buildItemCallback.call(this, index, item, that.$container);
                });
                that.$container.append(that.$paginationContainer);
                if (that.ajax.success) that.ajax.success.call(this, data, that);
                that.request = null;
            }
        });
    };
    that.firstRequestHandler = {
        set: function(firstRequestSettings) {
            if (firstRequestSettings) {
                that.firstRequestSettings = firstRequestSettings;
                that.firstRequestSettings.originaLimit = that.ajax.data.limit;
                that.ajax.data.limit = that.firstRequestSettings.limit;
            } else {
                that.firstRequestSettings = {
                    pagesAmount: 1,
                    originaLimit: that.ajax.data.limit,
                    limit: that.ajax.data.limit
                };
            }
        },
        reset: function() {
            that.ajax.data.limit = that.firstRequestSettings.originaLimit;
        }
    };

    function generateHtml() {
        var html = '';
        html += '<div class="wizard-pagination text-center" style="width: 100%; padding: 10px;">';
        html += '<div class="loading-icon" style="display:none; width: 100%;">';
        html += '<i class="ace-icon fal fa-spinner fa-solid fa-spin fa-2x"></i>';
        html += '</div>';
        if (that.isMobile) {
            html += '<div style="width: 100%;">';
            html += '<a id="loadMore" class="btn btn-primary">' + translations.loadmore + '</a>';
            html += '</div>';
        }
        html += '</div>';
        return html;
    }

    function showLoadingAnimation() {
        if (that.loader) {
            for (var i = 0; i < that.ajax.data.limit; i++) {
                var $template = $(that.loader.template);
                $template.addClass('w-i-s-fake');
                that.loader.$container.append($template);
            }
        } else {
            that.$loading.show();
        }
        that.$mobileBtn.hide();
    }

    function hideLoadingAnimation() {
        if (that.loader) {
            that.loader.$container.find('.w-i-s-fake').remove();
        } else {
            that.$loading.hide();
        }
        that.$mobileBtn.show();
    }
    that.init();
    return that;
}

function IsRTL($language) {
    if ($language === 'he_IL' || $language === 'he' || $language === 'ar_SA' || $language === 'ar' || $language === 'fa') {
        return true;
    } else {
        return false;
    }
}
var inputRestrictor = function() {
    var _ = {};
    _.init = function() {
        $('input[data-input-restrictor-type], textarea[data-input-restrictor-type]').each(function(index, el) {
            $(this).on('input.inputRestrictor', function(event) {
                addInputListnerEvent($(this));
            });
        });
    };
    _.reset = function() {
        $('input[data-input-restrictor-type], textarea[data-input-restrictor-type]').off('input.inputRestrictor');
        _.init();
    };

    function addInputListnerEvent($el) {
        var restrictorType = $el.data('input-restrictor-type');
        switch (restrictorType) {
            case 'phone':
                $el.val($el.val().replace(/[^0-9-+*() ]+/g, ''));
                break;
            case 'number':
                $el.val($el.val().replace(/[^0-9]+/g, ''));
                break;
        }
    }
    return _;
}();

function objectAssign(target, sources) {
    if (Object.assign) {
        sources = Object.assign(target, sources);
    } else {
        for (var prop in target)
            if (!sources.hasOwnProperty(prop)) sources[prop] = target[prop];
    }
    return sources;
}

function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];
    var $el = $('<div>');
    $el.appendTo($('body'));
    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];
        $el.addClass('hidden-' + env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    }
}

function getUploadFileObjectByID(id) {
    var uploadFile = null;
    if (!id) return uploadFile;
    if (topWindow.uploadFiles[id]) {
        uploadFile = topWindow.uploadFiles[id];
    } else {
        uploadFile = topWindow.multipleUploadFile[id];
    }
    return uploadFile;
}

function isExtrenalVideo(videoPath) {
    if (videoPath.indexOf('youtube') != -1) return true;
    if (videoPath.indexOf('vimeo') != -1) return true;
    return false;
}
var ExternalVideoUploader = {
    openPopup: function(uploadFileInputId, websiteID) {
        var _ = this;
        var $html = _.getHtml();
        var $form = $html.find('form');
        _.$popup = bootbox.dialog({
            className: 's123-modal system-modal external-video-uploader',
            title: translations.externalVideoUplaoder.popupTitle,
            size: 'large',
            backdrop: true,
            show: false,
            message: $html,
            onEscape: function(event) {},
            buttons: {
                success: {
                    label: translations.externalVideoUplaoder.save,
                    className: 'btn-success',
                    callback: function() {
                        if ($form.valid()) {
                            _.upload(websiteID, uploadFileInputId, $form.find('#video_path').val());
                            return true;
                        }
                        return false;
                    }
                }
            }
        }).on('show.bs.modal', function(event) {
            InitializeToolTips();
        });
        _.$popup.modal('show');
    },
    upload: function(websiteID, uploadFileInputId, url) {
        var uploadFile = getUploadFileObjectByID(uploadFileInputId);
        uploadFile.input.trigger('s123.uploadFile.uploadProgress');
        uploadFile.progressbar.start(100);
        var ajax = $.ajax({
            type: "POST",
            url: "/versions/2/wizard/getProvidersVideoUrl.php",
            data: {
                w: websiteID,
                videoUrl: encodeURI(url),
                type: 'uploadFile'
            },
            success: function(data) {
                data = jQuery.parseJSON(data);
                uploadFile.progressbar.finish(function() {
                    save(uploadFile, data);
                });
            }
        });
        uploadFile.btns.cancel.off('click').click(function() {
            uploadFile.progressbar.abort(function() {
                ajax.abort();
            });
        });

        function save(uploadFile, imageObj) {
            if (uploadFile.multiUploadMethods) {
                uploadFile.multiUploadMethods.addImage(imageObj);
            } else {
                UpdateImagePreview(uploadFile.input.get(0).id, {
                    normal: imageObj.n,
                    tiny: imageObj.t
                });
                uploadFile.input.val(imageObj.n).trigger('change', imageObj);
            }
            if (isWizardPage()) {
                AutoSaveWizard(true, true);
            }
        }
    },
    getHtml: function() {
        var html = '';
        html += '<div>';
        html += '<form>';
        html += '<div class="form-group">';
        html += '<label for="video_path">' + escapeHtml(translations.externalVideoUplaoder.title) + '</label>';
        html += '<span style="color:red">&nbsp;*&nbsp;</span>';
        html += '<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title="' + escapeHtml(translations.externalVideoUplaoder.tooltip) + '">';
        html += '<i class="fal fa-question-circle"></i>';
        html += '</a>';
        html += '<input type="text" class="form-control" id="video_path" placeholder="' + escapeHtml(translations.externalVideoUplaoder.placeholder) + '" required="true" data-msg-required="' + escapeHtml(translations.externalVideoUplaoder.fieldRequired) + '" youtube-vimeo-pattern="true">';
        html += '</div>';
        html += '</form>';
        html += '</div>';
        var $html = $(html);
        $html.find('form').validate({
            errorElement: 'div',
            errorClass: 'help-block',
            focusInvalid: true,
            ignore: ':hidden:not(.file-upload-input-field,[data-editor="froala"]),.fileUploadBox:hidden .file-upload-input-field,.form-tool-builder .form-control,.form-tool-builder input,[contenteditable="true"]:not([name])',
            highlight: function(e) {
                $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
            },
            success: function(e) {
                $(e).closest('.form-group').removeClass('has-error');
                $(e).remove();
            },
            errorPlacement: function(error, element) {
                if (element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
                    var controls = element.closest('div[class*="col-"]');
                    if (controls.find(':checkbox,:radio').length > 1) controls.append(error);
                    else error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
                } else if (element.is('.select2')) {
                    error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
                } else if (element.is('.chosen-select')) {
                    error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
                } else {
                    error.appendTo(element.closest('.form-group'));
                }
            }
        });
        return $html;
    }
};
var textareaAutoIncreaseHeight = function() {
    var that = {
        minContentHeight: 100, // default minimum height based on the content
        maxContentHeight: 200 // default maximum height based on the content
    };
    that.init = function() {
        that.elements = $('.textarea-auto-increase-height');
        if (that.elements.length === 0) return;
        that.events.off();
        that.elements.each(function() {
            var $this = $(this);
            if ($this.data('type') == 'input') {
                $this.attr('rows', 1);
                $(document).one('page.shown.' + $this.get(0).id, () => that.update($this.get(0)));
            } else {
                $this.css({
                    maxHeight: that.maxContentHeight
                });
            }
            autosize($this.get(0));
            that.events.init($this, $this.data('type'));
        });
    };
    that.events = {
        init: function($element, type) {
            $('#homepageTab #EditWebsiteText #homepageCollapse88').on('show.bs.collapse', function(event) {
                var $homepageCollapse88 = $('#homepageCollapse88');
                var $homepageTitlesContainer = $homepageCollapse88.find('> .homepage-titles-container');
                var $wizardTabContent = $('#wizardBox .tab-content');
                $homepageTitlesContainer.appendTo($wizardTabContent);
                $element.css({
                    maxHeight: that.minContentHeight
                });
                that.update($element.get(0));
                $homepageTitlesContainer.appendTo($homepageCollapse88);
            });
            if (type == 'input') {
                $element.on('keyup', function(event) {
                    $(this).val($(this).val().replace(/[\r\n\v]+/g, ''));
                });
                s123EnterKeyPreventer($element);
            } else {
                $element.on('focus.textarea_auto_increase_height', function(event) {
                    $element.css({
                        maxHeight: that.maxContentHeight
                    });
                    that.update($element.get(0));
                }).on('blur.textarea_auto_increase_height', function(event) {
                    $element.css({
                        maxHeight: that.minContentHeight
                    });
                    that.update($element.get(0));
                });
            }
        },
        off: function(element) {
            that.elements.off('.textarea_auto_increase_height');
        }
    };
    that.update = function(element) {
        autosize.update(element);
    };
    return that;
}();

function uniqid(prefix, more_entropy) {
    if (typeof prefix === 'undefined') {
        prefix = '';
    }
    var retId;
    var formatSeed = function(seed, reqWidth) {
        seed = parseInt(seed, 10)
            .toString(16); // to hex str
        if (reqWidth < seed.length) { // so long we split
            return seed.slice(seed.length - reqWidth);
        }
        if (reqWidth > seed.length) { // so short we pad
            return Array(1 + (reqWidth - seed.length))
                .join('0') + seed;
        }
        return seed;
    };
    if (!window.php_js) {
        window.php_js = {};
    }
    if (!window.php_js.uniqidSeed) { // init seed with big random int
        window.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
    }
    window.php_js.uniqidSeed++;
    retId = prefix; // start with prefix, add current milliseconds hex string
    retId += formatSeed(parseInt(new Date()
        .getTime() / 1000, 10), 8);
    retId += formatSeed(window.php_js.uniqidSeed, 5); // add seed hex string
    if (more_entropy) {
        retId += (Math.random() * 10)
            .toFixed(8)
            .toString();
    }
    return retId;
}

function s123EnterKeyPreventer($element) {
    $element.on('keydown', function(event) {
        if (event.which == 13) return false;
    });
}

function themeShowcase_show() {
    $('.theme-showcase').show();
    $(document).trigger('page.shown');
}

function getScrollbarWidth() {
    if ($(document).height() > $(window).height()) {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
        document.body.appendChild(outer);
        var widthNoScroll = outer.offsetWidth;
        outer.style.overflow = "scroll";
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);
        var widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    } else {
        return 0;
    }
}

function S123CustomCodeEditor(settings) {
    var _ = {
        myModeSpec: {
            name: "htmlmixed",
            tags: {
                style: [
                    ["type", /^text\/(x-)?scss$/, "text/x-scss"],
                    [null, null, "css"]
                ],
                custom: [
                    [null, null, "customMode"]
                ]
            }
        },
        $form: settings.$form,
        $el: settings.$el,
        lineNumbers: settings.lineNumbers,
        lineWrapping: settings.lineWrapping,
        foldGutter: settings.foldGutter,
        direction: settings.direction
    };
    _.init = function() {
        _.editor = CodeMirror.fromTextArea(_.$el.get(0), {
            lineNumbers: _.lineNumbers,
            mode: _.myModeSpec,
            lineWrapping: _.lineWrapping,
            foldGutter: _.foldGutter,
            direction: _.direction
        });
        _.editor.on('change', function(instance, changes) {
            _.$form.valid();
            instance.save();
        });
        maxLengthHandler(parseInt(_.$el.attr('maxlength')));
        $(document).one('page.shown.s123CustomCodeEditor', function() {
            _.editor.refresh();
        });
        _.$el.css({
            display: 'block',
            height: '0px',
            padding: '0px',
            visibility: 'hidden'
        });
    };
    _.addContent = function(value) {
        _.editor.doc.setValue(_.editor.doc.getValue() + value);
        _.editor.focus();
        _.editor.execCommand('goDocEnd');
        _.editor.save();
    };
    _.getContent = function() {
        return _.editor.doc.getValue();
    };
    _.isEmpty = function() {
        return _.getContent().length == 0;
    };

    function maxLengthHandler(maxlength) {
        _.editor.setOption('maxLength', (maxlength + 1));
        _.editor.on('beforeChange', function(instance, change) {
            var maxLength = instance.getOption('maxLength');
            if (maxLength && change.update) {
                var str = change.text.join('\n');
                var delta = str.length - (instance.indexFromPos(change.to) - instance.indexFromPos(change.from));
                if (delta <= 0) {
                    return true;
                }
                delta = instance.getValue().length + delta - maxLength;
                if (delta > 0) {
                    str = str.substr(0, str.length - delta);
                    change.update(change.from, change.to, str.split("\n"));
                }
            }
            return true;
        });
    };
    _.init();
    return _;
};

function InlineIllustrations(settings) {
    var _ = {};
    _.init = function() {
        _.$container = settings.container;
        _.$itemsContainer = _.$container.find('.illustrations-items');
        _.$active_illustration = $('.active_illustration');
        _.$packsContainer = $('.illustrations-packs-container');
        _.uploadInput = settings.uploadInput;
        _.uploadFile = getUploadFileObjectByID(_.uploadInput);
        _.imageID = '';
        _.illustationsReload = false;
        _.printMediaPack();
        if (settings.tool == 'promo') {
            _.printIllustration('');
        } else {
            loadIllustrationOnTabOpen();
        }
        _.uploadFile.input.off('change.InlineIllustrations').on('change.InlineIllustrations', function(event, s3Obj) {
            if (!isSupportingActiveIcon()) return;
            if (s3Obj && s3Obj != 'UndoRedoChange') {
                _.$active_illustration.val('');
            }
            addRemoveActiveItem(_.$active_illustration.val());
        });
    };
    _.destroy = function() {
        _.imageID = '';
        _.uploadFile.input.off('change.InlineIllustrations');
        _.uploadFile = null;
        _.illustationsReload = false;
        _.$packsContainer.empty();
        _.$itemsContainer.empty();
        _.$container.parent().find('.media-packs-back').remove();
        if (_.s123InfiniteScroll) _.s123InfiniteScroll.destroy();
    };
    _.printIllustration = function(search) {
        if (_.illustationsReload) return;
        _.$itemsContainer.empty();
        if (_.s123InfiniteScroll) {
            _.s123InfiniteScroll.destroy();
        }
        _.s123InfiniteScroll = new s123InfiniteScroll({
            isMobile: false, // we don't want to add "load more button" but we have other tools that do need that feature
            $container: _.$container,
            ajax: {
                type: 'POST',
                url: '/files/vendor/s123IconsPopup/getIcons.php',
                data: {
                    w: settings.websiteID,
                    q: search,
                    limit: 12,
                    type: 'allMedia',
                },
                success: function(data) {
                    addItems(data.items);
                    _.imageID = _.$container.find('.illustrations-items .active').data('id');

                    function addItems(items) {
                        $.each(items, function(index, item) {
                            var $html = $(generateItemHTML(item));
                            if (isSupportingActiveIcon()) addRemoveActiveItem(_.$active_illustration.val());
                            $html.on('click', function() {
                                var $this = $(this);
                                var illustrationImgUrl = $this.data('illustration-src');
                                if (_.imageID == $this.data('id')) return;
                                if (isSupportingActiveIcon()) {
                                    _.$active_illustration.val($this.data('id'));
                                    addRemoveActiveItem(_.$active_illustration.val());
                                }
                                UpdateImagePreview(_.uploadInput, {
                                    normal: illustrationImgUrl,
                                    tiny: illustrationImgUrl
                                });
                                if (settings.tool != 'promo') {
                                    window.reloadPreviewCSS = ReloadPreviewCSS;
                                }
                                _.imageID = $this.data('id');
                                _.uploadFile.input.val(illustrationImgUrl).trigger('change');
                            });
                            $html.find('.illustrations-credits').on('click', function(event) {
                                event.preventDefault();
                                event.stopPropagation();
                                var $thisCredit = $(this);
                                var popoverContent = '';
                                popoverContent += '<div class="form-group" style="margin-bottom:5px">';
                                popoverContent += '<div class="popover-custom-title">';
                                popoverContent += '<a class="popover-close">';
                                popoverContent += '<i class="fal fa-times" aria-hidden="true"></i>';
                                popoverContent += '</a>';
                                popoverContent += '</div>';
                                popoverContent += '<div><b>' + translations.homepageRI.creditsPhotographerName + '</b> ' + $thisCredit.data('name') + '</div>';
                                popoverContent += '<div><b>' + translations.homepageRI.creditsProvider + '</b> ' + $thisCredit.data('provider');
                                popoverContent += '<div>';
                                popoverContent += '<a target="_blank" href="' + $thisCredit.find('a').data('href') + '">' + translations.homepageRI.creditsSeeMoreDetails + '</a>';
                                popoverContent += '</div>';
                                popoverContent += '</div>';
                                var $popoverContent = $(popoverContent);
                                $popoverContent.find('.popover-close').on('click.close_credits', function() {
                                    destroyPopover();
                                });
                                $thisCredit.popover({
                                        container: 'body',
                                        content: $popoverContent,
                                        html: true,
                                        trigger: 'manual',
                                        template: '<div class="popover r-i-popover-credits" role="tooltip" style="margin:0 10px;"><div class="arrow"></div><div class="popover-content"></div></div>',
                                        placement: 'auto'
                                    }).on('shown.bs.popover', function() {
                                        $(document).on('mousedown.credits_destroy_popover', function(event) {
                                            if ($(event.target).closest('.popover.r-i-popover-credits').length === 0) {
                                                destroyPopover();
                                            }
                                        });
                                        $(window).one('blur.credits_destroy_popover', function(event) {
                                            destroyPopover();
                                        });
                                        _.$container.one('scroll.credits_destroy_popover', function(event) {
                                            destroyPopover();
                                        });
                                    })
                                    .popover('show');

                                function destroyPopover() {
                                    $thisCredit.removeClass('active');
                                    $thisCredit.popover('destroy');
                                    $(document).off('mousedown.credits_destroy_popover');
                                    $(window).off('blur.credits_destroy_popover');
                                    $(window).off('scroll.credits_destroy_popover');
                                }
                            });
                            _.$itemsContainer.append($html);
                        });

                        function generateItemHTML(item) {
                            var html = '';
                            var ext = item.icon_link.split('.').pop();
                            var image_src = item.icon_link;
                            var preview_image = ext === 'mp4' ? item.icon_link.replace('.' + ext, '-thumbnail.jpg') : item.icon_link;
                            preview_image = getImageWRV1('400', preview_image);
                            var type = ext === 'mp4' ? 'video' : 'image';
                            if (type == 'image') {
                                preview_image = getImageWRV1(400, preview_image);
                                image_src = getImageWRV1(2000, image_src);
                            }
                            html = '<div data-id="' + item.uniqueID + '" class="illustration-item-box" data-illustration-src="' + image_src + '" data-media-type="' + type + '">';
                            html += '<img src="' + preview_image + '">';
                            html += '<i class="ace-icon fal fa-check-circle"></i>';
                            html += generatePhotoCredits(item.media_info, item.provider);
                            html += '</div>';
                            return html;
                        }

                        function generatePhotoCredits(info, provider) {
                            var html = '';
                            if (info) {
                                var credit = tryParseJSON(info);
                                if (!credit['photoInfo']) return '';
                                credit = credit['photoInfo'];
                                html += '<div class="illustrations-credits" data-name="' + credit['photographer'] + '" data-provider="' + provider + '">';
                                html += '<a data-href="' + credit['profileLink'] + '">';
                                if ($('html').data('device') !== 'mobile') {
                                    html += credit['photographer'];
                                } else {
                                    html += '<i class="fal fa-info-circle" aria-hidden="true"></i>';
                                }
                                html += '</a>';
                                html += '</div>';
                            }
                            return html;
                        }
                    }
                    _.illustationsReload = true;
                }
            }
        });
    };
    _.printMediaPack = function() {
        var backToCategoriesHtml = '<div class="media-packs-back btn btn-link" data-pack-id="" data-scroll-position="">';
        backToCategoriesHtml += '<span class="pack-title">< ' + translations.illustrationInlineTool.backBtn + '</span>';
        backToCategoriesHtml += '</div>';
        var html = '';
        html += '<div class="illustrations-packs">';
        html += '<div class="media-packs" data-pack-id="Man">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_60318fb69fdec.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeMan + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Woman">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_60318086008d2.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeWoman + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Food">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_60317648781d8.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeFood + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Cars">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603174a3f09fe.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeCars + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Sport">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603174e3ed49f.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeSport + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Animals">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_6031ffaed33c6.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeAnimals + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Accessories">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dbb99bc173.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeAccessories + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Interior Design">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dbcfe44ad6.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeInteriorDesign + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Photographer">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dbdbfba3ac.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypePhotographer + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Handyman">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dbe6526479.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeHandyman + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Music">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dbf867fd90.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeMusic + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Toys">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dbfe784483.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeToys + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Gadgets">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dc06fec76a.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeGadgets + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Medical">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dc0aa1936a.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeMedical + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Nature">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dc2c3a6f95.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeNature + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Art">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dc4b634904.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeArt + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Jewelry">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603dd11a47f09.png') + '">';
        html += '<span class="pack-title">' + translations.illustrationInlineTool.packTypeJewelry + '</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Adventure">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_60472b30709ca.svg') + '">';
        html += '<span class="pack-title">Adventure</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Modern">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_60472d456220b.svg') + '">';
        html += '<span class="pack-title">Modern</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Minimalistic">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_60472d6643e41.svg') + '">';
        html += '<span class="pack-title">Minimalistic</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Canny">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603200a25ce19.svg') + '">';
        html += '<span class="pack-title">Canny</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Humpy">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603200b9f2e93.svg') + '">';
        html += '<span class="pack-title">Humpy</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Nankin">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_603200ca686c4.svg') + '">';
        html += '<span class="pack-title">Nankin</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Wake Up">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d33a44168d.svg') + '">';
        html += '<span class="pack-title">Wake Up</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Vesta">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d339c6418c.svg') + '">';
        html += '<span class="pack-title">Vesta</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Vacation">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d339547b0d.svg') + '">';
        html += '<span class="pack-title">Vacation</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Sunshine">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d3386cadfe.png') + '">';
        html += '<span class="pack-title">Sunshine</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Unruly">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d33884095a.svg') + '">';
        html += '<span class="pack-title">Unruly</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Thursday">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d338147769.svg') + '">';
        html += '<span class="pack-title">Thursday</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Teamwork">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d337a1a06e.svg') + '">';
        html += '<span class="pack-title">Teamwork</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Teammates">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d3371230b2.svg') + '">';
        html += '<span class="pack-title">Teammates</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Stubborn">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d33630d814.svg') + '">';
        html += '<span class="pack-title">Stubborn</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Struct">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d335c3e48d.svg') + '">';
        html += '<span class="pack-title">Struct</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="RAW">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d33532fa8b.svg') + '">';
        html += '<span class="pack-title">RAW</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Palms">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d334e4ad0b.svg') + '">';
        html += '<span class="pack-title">Palms</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="OSLO">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d334714287.svg') + '">';
        html += '<span class="pack-title">OSLO</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Oh My Startup">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d333e9ddcf.svg') + '">';
        html += '<span class="pack-title">Oh My Startup</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Nuts">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d33382294d.svg') + '">';
        html += '<span class="pack-title">Nuts</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="No Gravity">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d332d0295d.svg') + '">';
        html += '<span class="pack-title">No Gravity</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="No Comments">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d33265736d.svg') + '">';
        html += '<span class="pack-title">No Comments</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Midnight">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d331fb14e2.svg') + '">';
        html += '<span class="pack-title">Midnight</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Meetup">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d331830156.svg') + '">';
        html += '<span class="pack-title">Meetup</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Knick-knacks">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d330e50355.svg') + '">';
        html += '<span class="pack-title">Knick-knacks</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Interfaces">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d3306ed17f.svg') + '">';
        html += '<span class="pack-title">Interfaces</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Guacamole">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32f626570.svg') + '">';
        html += '<span class="pack-title">Guacamole</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Funny Bunny">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32ec0438a.svg') + '">';
        html += '<span class="pack-title">Funny Bunny</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Friday">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32e3bcd41.svg') + '">';
        html += '<span class="pack-title">Friday</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Eco Life">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32dc90f32.svg') + '">';
        html += '<span class="pack-title">Eco Life</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Easy">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32d5ed3ec.svg') + '">';
        html += '<span class="pack-title">Easy</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="E-commerce">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32cdb4b26.svg') + '">';
        html += '<span class="pack-title">E-commerce</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Denmark">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32c4aa7f6.svg') + '">';
        html += '<span class="pack-title">Denmark</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Control">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32c2d7a8e.svg') + '">';
        html += '<span class="pack-title">Control</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Castle">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32b192f56.svg') + '">';
        html += '<span class="pack-title">Castle</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Candy Shop">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d32a93fd40.svg') + '">';
        html += '<span class="pack-title">Candy Shop</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Call the Doctor">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d329d0da00.svg') + '">';
        html += '<span class="pack-title">Call the Doctor</span>';
        html += '</div>';
        html += '<div class="media-packs" data-pack-id="Bubble">';
        html += '<img src="' + getImageWRV1(400, $GLOBALS['cdn-interface-files'] + '/ready_uploads/svg/normal_604d328ee4e12.svg') + '">';
        html += '<span class="pack-title">Bubble</span>';
        html += '</div>';
        html += '</div>';
        _.$container.parent().prepend($(backToCategoriesHtml));
        _.$packsContainer.append($(html));
        _.$container.parent().find('.media-packs-back').on('click', function() {
            _.illustationsReload = false;
            _.printIllustration($(this).data('pack-id'));
            _.$packsContainer.find('.illustrations-packs').show();
            $('.inline-illustration-images').scrollTop($(this).data('scroll-position'));
            $(this).hide();
        });
        _.$packsContainer.find('.media-packs').on('click', function() {
            _.$container.parent().find('.media-packs-back').data('scroll-position', $('.inline-illustration-images').scrollTop());
            _.illustationsReload = false;
            _.printIllustration($(this).data('pack-id'));
            _.$packsContainer.find('.illustrations-packs').hide();
            _.$container.parent().find('.media-packs-back').show();
        });
        _.$container.parent().find('.media-packs-back').hide();
    };

    function loadIllustrationOnTabOpen() {
        $(document).on('wizard_mobile_hendlar.accordion.show.inlineIllustrations', function(event, tabID) {
            if (tabID == 'homepageImageOptionsTab' && $('#homepage_goal_type_image').is(":visible")) {
                $('#illustrationStylesBox').show();
                _.printIllustration('');
            } else {
                $('#illustrationStylesBox').hide();
            }
        });
        $(document).on('animation_manager.show.inlineIllustrations', function(event, tabID) {
            if (tabID == '#homepageImageOptionsTab' && $('#homepage_goal_type_image').is(":visible")) {
                $('#illustrationStylesBox').show();
                _.printIllustration('');
            } else {
                $('#illustrationStylesBox').hide();
            }
        });
    }

    function addRemoveActiveItem(id) {
        _.$itemsContainer.find('.illustration-item-box').removeClass('active');
        _.$itemsContainer.find('.illustration-item-box[data-id="' + id + '"]').addClass('active');
    }

    function isSupportingActiveIcon() {
        if (_.uploadFile.input.hasClass('promo-widget')) return false;
        return true;
    }
    _.init();
    return _;
}
$.fn.popover.Constructor.prototype.reposition = function() {
    var $tip = this.tip();
    var autoPlace = true;
    var placement = typeof this.options.placement === 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
    var pos = this.getPosition();
    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;
    if (autoPlace) {
        var orgPlacement = placement;
        var viewportDim = this.getPosition(this.$viewport);
        placement = placement === 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement === 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement === 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement === 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement
        $tip.removeClass(orgPlacement).addClass(placement);
    }
    var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
    this.applyPlacement(calculatedOffset, placement);
}
var s123DropDown = function() {
    var _ = {};
    _.init = function(settings) {
        $('[data-rel="s123DropDown"]').each(function(index, el) {
            var $this = $(this);
            var $controller = $this.find('[data-s123-drop-down-role="controller"]');
            if ($this.data('s123-drop-down-toggle') == 'click') {
                $this.find('a').off('click.s123DropDown').on('click.s123DropDown', function(event) {
                    event.preventDefault();
                    if ($this.hasClass('show-drop-down')) {
                        $this.removeClass('show-drop-down');
                    } else {
                        $this.addClass('show-drop-down');
                    }
                });
            } else {
                $this.find('[data-s123-drop-down-role="controller"]').off('mouseenter.s123DropDown').on('mouseenter.s123DropDown', function(event) {
                    $this.removeClass('close-drop-down');
                });
                $this.find('[data-s123-drop-down-role="dropdown"] a').off('click.s123DropDown').on('click.s123DropDown', function(event) {
                    var $link = $(this);
                    if ($link.attr('href') == '#' || !$link.attr('href')) {
                        event.preventDefault();
                    }
                    $this.addClass('close-drop-down');
                    closeMobileMenuDropdown();
                });
            }
        });
    };
    return _;
}();

function S123EmailCollector(settings) {
    var _ = {
        $el: settings.$el,
        addCallback: settings.addCallback,
        removeCallback: settings.removeCallback,
        maxEmailsAmount: settings.maxEmailsAmount ? settings.maxEmailsAmount : 5
    };
    _.init = function() {
        _.$el.tag({
            placeholder: _.$el.attr('placeholder')
        });
        _.$dummy = _.$el.next();
        _.$dummy.addClass('form-control');
        if (getEmails().length >= _.maxEmailsAmount) {
            disable();
        }
        _.$el.on('added', function(e, value) {
            var emailObj = _.$el.data('tag');
            if (!emailValidator(value)) {
                emailObj.remove(emailObj.inValues(value));
                var $error = $('<div class="form-control">' + translations.emailCollectorValidEmail + '</div>').css({
                    width: '100%',
                    position: 'absolute',
                    bottom: '0',
                    zIndex: '100',
                    left: '0',
                    color: 'red',
                    border: 'none',
                });
                _.$el.parent().css({
                        position: 'relative'
                    })
                    .append($error);
                setTimeout(function() {
                    $error.remove();
                }, 1000);
            } else {
                if (getEmails().length > _.maxEmailsAmount) {
                    emailObj.remove(emailObj.inValues(value));
                } else {
                    if (getEmails().length == _.maxEmailsAmount) disable();
                    if (_.addCallback) _.addCallback.call(this, emailObj);
                }
            }
        });
        _.$el.on('removed', function(e, value) {
            var emailObj = _.$el.data('tag');
            if (getEmails().length < _.maxEmailsAmount) enable();
            if (_.removeCallback) _.removeCallback.call(this, emailObj);
        });
    };

    function getEmails() {
        return _.$el.val().split(',');
    }

    function disable() {
        _.$dummy.attr('disabled', 'true');
        _.$dummy.attr('placeholder', translations.emailCollectorRestriction);
    }

    function enable() {
        _.$dummy.removeAttr('disabled');
        _.$dummy.attr('placeholder', _.$el.attr('placeholder'));
    }
    _.init();
    return _;
};
var wizardSupportButton = function() {
    var ws = {};
    ws.init = function() {
        ws.$supportButton = $('#wizardSupportButton');
        var supportBtnSpacePlace = $('html[dir=rtl]').length > 0 ? 'left' : 'right';
        ws.$supportButton.css(supportBtnSpacePlace, $('.helpBOX').width() + 40);
        ws.$html = buildPopoverHtml();
        ws.$supportButton.on('click', function() {
            ws.$supportButton.popover({
                container: 'body',
                html: true,
                content: ws.$html,
                trigger: 'manual',
                template: '<div class="popover supportBtn" role="tooltip" style="max-width: 100%;"><div class="arrow"></div><div class="popover-content"></div></div>',
                placement: 'top'
            });
            ws.$supportButton.on('shown.bs.popover', function() {
                ws.$supportButton.closest('body').find('.popover.supportBtn [data-rel=tooltip]').tooltip({
                    container: 'body',
                    placement: 'auto'
                });
                $(document).on('mousedown.wizardSupportButton', function(event) {
                    if ($(event.target).closest('.popover.supportBtn').length === 0) {
                        destroyPopover();
                    }
                });
                $(window).one('blur.wizardSupportButton', function(event) {
                    destroyPopover();
                });
                ws.$supportButton.closest('body').on('mousedown.preview.wizardSupportButton', function(event) {
                    var $target = $(event.target);
                    if ($target.closest('.popover.supportBtn').length === 0) {
                        destroyPopover();
                        ws.$supportButton.closest('body').off('mousedown.preview.wizardSupportButton');
                    }
                });
            });
            ws.$supportButton.popover('show');
        });
    }

    function destroyPopover() {
        ws.$supportButton.popover('destroy');
        $(document).off('mousedown.wizardSupportButton');
        $(window).off('blur.wizardSupportButton');
        $(window).off('scroll.wizardSupportButton');
    }

    function buildPopoverHtml() {
        var html = '';
        html += '<div class="supportButtonPopoverContainer">';
        html += '<a class="supportCenterBtn btn btn-primary" href="https://support.site123.com/' + topWindow.t_language + '/" target="_blank">Support Center<div></div></a>';
        html += '<a class="wizardTutorialVideoBtn btn btn-primary">Tutorial Video<div></div></a>';
        html += '</div>';
        var $html = $(html);
        $html.find('.wizardTutorialVideoBtn').on('click', function() {
            ws.buildTutorialVideoModalContent('oldVideo');
            let modal = SystemModals.sm_get('congratulationModal');
            modal.show();
            SystemModals.sm_eventReg('congratulationModal', 'hidden', function(event) {
                modal.updateHTML('body', '');
            });
            destroyPopover();
        });
        return $html;
    }
    ws.buildTutorialVideoModalContent = function(videoType) {
        var html = '';
        var video = 'https://iframe.mediadelivery.net/embed/6277/c598f3c8-fc59-4dbc-9607-600efd36fb23'
        if (videoType == 'newVideo') {
            video = 'https://iframe.mediadelivery.net/embed/6277/f215d681-a59c-40f3-a15d-f7def6c90027'
        }
        html += '<div class="widget-main" style="padding:12px;">';
        html += 'Now let\'s get your website ready to publish. It\'s time to add your content. Don\'t forget! We\'re here to assist you 24/7.';
        html += '<div style="text-align: center;margin-top: 20px;max-width:750px;margin: 20px auto;">';
        html += '<div style="position: relative; padding-top: 56.25%;"><iframe src="' + video + '" loading="lazy" style="border: none; position: absolute; left: 0;top: 0; height: 100%; width: 100%;" allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe></div>';
        html += '</div>';
        html += '</div>';
        SystemModals.sm_get('congratulationModal').updateHTML('body', html);
    }
    return ws;
}();
class ImageAI {
    constructor(settings) {
        this.ajaxRequests = {};
        this.tools = {};
        this.isAbortRequest = false;
        this.timeout = 10000;
        this.$el = settings.$el;
        this.fieldID = settings.fieldID;
        this.$saveBtn = settings.$saveBtn;
        this.$closeBtn = settings.$closeBtn;
        this.callback = settings.callback;
        this.websiteID = settings.websiteID;
        this.isHorizontal = settings.isHorizontal;
        this.imageURL = settings.imageURL ? settings.imageURL : '';
        this.imageB64 = settings.imageB64 ? settings.imageB64 : '';
        this.isDetectFaces = settings.isDetectFaces ? settings.isDetectFaces : false;
        this.isDisaplyOriginalImage = settings.isDisaplyOriginalImage ? settings.isDisaplyOriginalImage : false;
        $.each(this.getAIList(), (name, title) => {
            this.tools[name] = {
                title: title,
                url: '',
                $el: ''
            };
        });
        var $html = $(this.getTemplateHTML());
        if (this.isHorizontal) {
            $html.find('.image-ai-list').addClass('image-ai-horizontal');
        }
        if (!this.isDisaplyOriginalImage) {
            delete this.tools.image;
        }
        $.each(this.tools, (toolName, tool) => {
            this.tools[toolName].$el = $(this.getImageHTML(toolName, tool.title));
            if (this.isHorizontal) {
                this.tools[toolName].$el.addClass('image-ai-horizontal');
            }
            $html.find('.image-ai-list').append(this.tools[toolName].$el);
        });
        this.$saveBtn.off('click').on('click', () => {
            var toolName = $html.find('.image-ai-prv-container.active').data('img-type');
            if (toolName == 'image') {
                window.top.UploadLocalLibraryImage(this.websiteID, {}, this.tools[toolName].url, this.fieldID, true);
            } else {
                UploadLocalLibraryImage(this.websiteID, {}, this.tools[toolName].url, this.fieldID, true);
            }
            if (this.callback) this.callback.call();
        });
        if (this.isDisaplyOriginalImage) {
            this.updateImage(this.imageB64, 'image');
            $html.find('.image-ai-loading-container').hide();
            $html.find('.image-ai-list').css('display', 'flex');
        }
        if (this.imageB64.length == 0 && this.imageURL.length == 0) return;
        if (this.imageB64.length > 0) {
            this.uploadImage();
        } else {
            if (this.isDetectFaces) {
                this.detectFaces();
            } else {
                this.generateImages();
            }
        }
        this.$el.html('').append($html);
    };
    getAIList() {
        return {
            image: translations.imageAI.originalImage,
            rmvBG: translations.imageAI.withoutBackground,
            cartoonSelfie0: translations.imageAI.cartoonImage.replace('{{number}}', ''),
            cartoonSelfie1: translations.imageAI.cartoonImage.replace('{{number}}', '#1'),
            cartoonSelfie2: translations.imageAI.cartoonImage.replace('{{number}}', '#2'),
            cartoonSelfie3: translations.imageAI.cartoonImage.replace('{{number}}', '#3'),
            cartoonSelfie4: translations.imageAI.cartoonImage.replace('{{number}}', '#4'),
            sketch: translations.imageAI.sketchImage.replace('{{number}}', '#1'),
            sketch2: translations.imageAI.sketchImage.replace('{{number}}', '#2'),
            retouch: translations.imageAI.retouchImage,
            enhance: translations.imageAI.enhanceImage,
            cartoon: translations.imageAI.cartoonImage.replace('{{number}}', ''),
        };
    }
    uploadImage() {
        if (this.isAbortRequest) return;
        this.ajaxRequests.uploadFileFromURL = $.ajax({
            type: 'POST',
            url: '/versions/' + versionNUM + '/wizard/uploadFileFromURL.php',
            data: {
                w: this.websiteID,
                url: this.imageB64,
                pathType: 0,
            },
            success: (response) => {
                response = tryParseJSON(response);
                this.imageURL = response.n + '?v=' + $GLOBALS['v-cache-long'];
                if (this.isDetectFaces) {
                    this.detectFaces();
                } else {
                    this.generateImages();
                }
            }
        });
    };
    generateImages() {
        this.removeBackground();
        this.blurBackground();
        this.$el.find('.image-ai-loading-container').hide();
        this.$el.find('.image-ai-list').css('display', 'flex')
    };
    updateImage(imageURL, toolName) {
        if (!this.tools[toolName]) return;
        this.tools[toolName].$el.find('.image-ai-loading').remove();
        if (imageURL.length > 0) {
            this.tools[toolName].url = imageURL;
            this.tools[toolName].$el.find('.image-ai-priview-image').css('background-image', 'url(' + imageURL + ')');
            this.tools[toolName].$el.off('click').on('click', (e) => {
                this.$el.find('.image-ai-prv-container').removeClass('active');
                $(e.target).closest('.image-ai-prv-container').addClass('active');
            });
            if (this.$el.find('.image-ai-prv-container.active').length == 0) {
                this.tools[toolName].$el.addClass('active');
            }
        } else {
            this.tools[toolName].$el.hide();
        }
    };
    getImageHTML(toolName, title) {
        var html = '';
        html += '<div class="image-ai-prv-container" data-img-type="' + toolName + '">';
        html += '<div class="image-ai-priview-title">' + title + '</div>';
        html += '<div class="image-ai-priview-image" data-img-type="' + toolName + '">';
        html += '<i class="image-ai-loading ace-icon fal fa-spinner fa-solid fa-spin blue fa-4x"></i>';
        html += '</div>';
        html += '</div>';
        return html;
    };
    getTemplateHTML() {
        var html = '';
        html += '<div class="image-ai-container">';
        html += '<div class="image-ai-loading-container text-center">';
        html += '<span class="image-ai-err-msg hidden">' + translations.imageWithoutFaces + '</span>';
        html += '<div class="image-ai-loading"><i class="ace-icon fal fa-spinner fa-solid fa-spin blue fa-4x"></i></div>';
        html += '</div>';
        html += '<div class="image-ai-list"></div>';
        html += '</div>';
        return html;
    };
    removeBackground() {
        if (!this.tools.rmvBG) return;
        if (this.isAbortRequest) return;
        this.ajaxRequests.rmvBG = $.ajax({
            type: 'POST',
            url: '/files/vendor/image-ai-tools/removeBgAJAX.php',
            data: {
                w: this.websiteID,
                imgURL: this.imageURL,
            },
            success: (response) => {
                var image = '';
                response = tryParseJSON(response);
                if (response && response.data.result_b64) {
                    image = 'data:image/png;base64,' + response.data.result_b64;
                    this.vanceaiUploadImage(image, 'sketch');
                    this.cartoonSelfie(image, 0);
                    this.cartoonSelfie(image, 1);
                    this.cartoonSelfie(image, 2);
                    this.cartoonSelfie(image, 3);
                    this.cartoonSelfie(image, 4);
                    this.colorCorrection(image);
                } else {
                    this.updateImage(image, 'cartoonSelfie0');
                    this.updateImage(image, 'cartoonSelfie1');
                    this.updateImage(image, 'cartoonSelfie2');
                    this.updateImage(image, 'cartoonSelfie3');
                    this.updateImage(image, 'cartoonSelfie4');
                    this.updateImage(image, 'colorCorrection');
                }
                this.updateImage(image, 'rmvBG');
            },
            timeout: this.timeout,
            error: () => {
                this.updateImage('', 'rmvBG');
            }
        });
    };
    detectFaces() {
        if (this.isAbortRequest) return;
        this.ajaxRequests.detectFaces = $.ajax({
            type: 'POST',
            url: '/files/vendor/image-ai-tools/facesDetection.php',
            data: {
                w: this.websiteID,
                imgURL: this.imageURL,
            },
            success: (response) => {
                response = tryParseJSON(response);
                if (response && response.isDetectFace) {
                    this.generateImages();
                } else {
                    this.$saveBtn.addClass('hidden');
                    this.$closeBtn.removeClass('hidden');
                    this.$el.find('.image-ai-loading').hide();
                    this.$el.find('.image-ai-err-msg').hide().removeClass('hidden').show(250);
                }
            }
        });
    };
    blurBackground() {
        if (!this.tools.blurBG) return;
        if (this.isAbortRequest) return;
        this.ajaxRequests.blurBG = $.ajax({
            type: 'POST',
            url: '/files/vendor/image-ai-tools/getBlurBG.php',
            data: {
                w: this.websiteID,
                imgURL: this.imageURL,
            },
            success: (response) => {
                var image = '';
                response = tryParseJSON(response);
                if (response && response.code == 0 && response.data.imageBase64) {
                    image = 'data:image/png;base64,' + response.data.imageBase64;
                }
                this.updateImage(image, 'blurBG');
            },
            timeout: this.timeout,
            error: () => {
                this.updateImage('', 'blurBG');
            }
        });
    };
    vanceaiUploadImage(imageB64, toolName) {
        if (this.isAbortRequest) return;
        this.ajaxRequests.vanceaiUpload = $.ajax({
            type: 'POST',
            url: '/files/vendor/image-ai-tools/vAiUploadImage.php',
            data: {
                w: this.websiteID,
                imgB64: imageB64,
            },
            success: (response) => {
                response = tryParseJSON(response);
                if (response.code == '200') {
                    this.vanceaiTransformImage(response.data.uid, 'sketch');
                    this.vanceaiTransformImage(response.data.uid, 'enhance');
                    this.vanceaiTransformImage(response.data.uid, 'retouch');
                    this.vanceaiTransformImage(response.data.uid, 'cartoon');
                    this.vanceaiTransformImage(response.data.uid, 'sketch2');
                } else {
                    this.updateImage('', toolName);
                }
            }
        });
    };
    vanceaiDownloadImage(transID, toolName) {
        if (this.isAbortRequest) return;
        this.ajaxRequests.vanceaiDownload = $.ajax({
            type: 'POST',
            url: '/files/vendor/image-ai-tools/vAiDownloadImage.php',
            data: {
                w: this.websiteID,
                trans_id: transID,
            },
            success: (response) => {
                var image = '';
                response = tryParseJSON(response);
                if (response.status == 'success') {
                    image = response.result_b64;
                }
                this.updateImage(image, toolName);
            }
        });
    };
    vanceaiTransformImage(uid, type) {
        if (!this.tools[type]) return;
        if (this.isAbortRequest) return;
        this.ajaxRequests.sketch = $.ajax({
            type: 'POST',
            url: '/files/vendor/image-ai-tools/vAiTransform.php',
            data: {
                w: this.websiteID,
                uid: uid,
                type: type
            },
            success: (response) => {
                response = tryParseJSON(response);
                if (response.code == '200' && response.data.status == 'finish') {
                    this.vanceaiDownloadImage(response.data.trans_id, type);
                } else {
                    this.updateImage('', type);
                }
            },
            timeout: this.timeout,
            error: () => {
                this.updateImage('', type);
            }
        });
    };
    cartoonSelfie(imageB64, type) {
        if (!this.tools['cartoonSelfie' + type]) return;
        if (this.isAbortRequest) return;
        this.ajaxRequests.cartoonSelfie = $.ajax({
            type: 'POST',
            url: '/files/vendor/image-ai-tools/getCartoonSelfie.php',
            data: {
                w: this.websiteID,
                imgB64: imageB64,
                type: type
            },
            success: (response) => {
                var image = '';
                response = tryParseJSON(response);
                if (response && response.code == 0 && response.data.imageBase64) {
                    image = 'data:image/png;base64,' + response.data.imageBase64;
                }
                this.updateImage(image, 'cartoonSelfie' + type);
            },
            timeout: this.timeout,
            error: () => {
                this.updateImage('', 'cartoonSelfie' + type);
            }
        });
    };
    colorCorrection(imageB64) {
        if (!this.tools.colorCorrection) return;
        if (this.isAbortRequest) return;
        this.ajaxRequests.colorCorrection = $.ajax({
            type: 'POST',
            url: '/files/vendor/image-ai-tools/getColorCorrectionPhoto.php',
            data: {
                w: this.websiteID,
                imgB64: imageB64,
            },
            success: (response) => {
                var image = '';
                response = tryParseJSON(response);
                if (response && response.data.imageBase64) {
                    image = 'data:image/png;base64,' + response.data.imageBase64;
                }
                this.updateImage(image, 'colorCorrection');
            },
            timeout: this.timeout,
            error: () => {
                this.updateImage('', 'colorCorrection');
            }
        });
    };
    abortRequests() {
        this.isAbortRequest = true;
        $.each(this.ajaxRequests, function(index, request) {
            request.abort();
            request = null;
        });
        this.ajaxRequests = {};
        this.$el.html('');
    }
}

function isCardPage() {
    return typeof systemKindNUM != 'undefined' ? (systemKindNUM == '2' || systemKindNUM == '4') : false;
}

function validateHTML(htmlString) {
    return htmlString.indexOf('<') == -1 || htmlString.indexOf('>') == -1;
}

function MobileInterfaceForceHandler() {
    if (!$('html').data('device')) return;
    if ($('html').data('device') === 'mobile') return;
    if ($('html').data('device') === 'tablet') return;
    if ($.cookie('m_i_force_mobile')) return;
    if (window.screen.availWidth < 800) {
        $.cookie('m_i_force_mobile', '1', {
            expires: (5 / 1440),
            path: '/'
        });
        location.reload();
    }
}
var InputsMaxLengthHandler = function() {
    var _ = {};
    _.init = function() {
        $(window).load(function() {
            _.limited_elements = $('input[data-rule-maxlength],input[maxlength],textarea[data-rule-maxlength],textarea[maxlength]');
            _.limited_elements.each(function() {
                let $limited_element = $(this);
                if ($limited_element.data('input-max-length-handler') !== 'disabled') {
                    _.limitElementLengthHandler($limited_element);
                }
            });
        });
    }
    _.limitElementLengthHandler = function($limited_element) {
        let $form_group = $limited_element.closest('.form-group');
        let $label = $form_group.find('label[for="' + $limited_element.get(0).id + '"]');
        let max_length = $limited_element.attr('data-rule-maxlength') ? $limited_element.attr('data-rule-maxlength') : $limited_element.attr('maxlength');
        let $limit_tag = $('<span class="i-m-l-limit-tag">' + (max_length - $limited_element.val().length) + '</span>');
        if ($label.length === 0) return;
        if ($limited_element.next().is('.suggestTextBtn')) {
            let $suggestTextBtn = $limited_element.next();
            $suggestTextBtn.wrap('<div class="i-m-l-suggest-text-box"></div>');
            let $suggest_text_box = $suggestTextBtn.parent();
            $suggest_text_box.css({
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                right: ($('html[dir=rtl]').length !== 0 ? 'auto' : '0'),
                left: ($('html[dir=rtl]').length !== 0 ? '0' : 'auto')
            });
            $limit_tag.css({
                minWidth: '50px',
                textAlign: ($('html[dir=rtl]').length !== 0 ? 'left' : 'right')
            });
            $suggest_text_box.append($limit_tag);
        } else {
            $limit_tag.css({
                float: ($('html[dir=rtl]').length !== 0 ? 'left' : 'right'),
                opacity: 0.85
            });
            $label.after($limit_tag);
        }
        $limited_element.on('input', function(event) {
            let current_length = $limited_element.val().length;
            if (current_length > max_length) {
                $limited_element.val($limited_element.val().substring(0, max_length));
            }
            $limit_tag.html(max_length - $limited_element.val().length);
        });
        if ($limited_element.is('textarea')) {
            $limited_element.css({
                resize: 'vertical'
            });
        }
    }
    return _;
}();
const S123CopyToClipboard = function() {
    var _ = {};
    _.copy = (copyText) => {
        if (window.isSecureContext && navigator.clipboard) {
            secureCopy(copyText);
        } else {
            unsecuredCopy(copyText);
        }
    }
    async function secureCopy(copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        try {
            await navigator.clipboard.writeText(copyText.value)
                .then(() => {
                    $.gritter.add({
                        title: 'Link copied to clipboard',
                        class_name: 'gritter-success',
                        time: 6000
                    });
                })
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    function unsecuredCopy(copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        try {
            document.execCommand('copy');
            $.gritter.add({
                title: 'Link copied to clipboard',
                class_name: 'gritter-success',
                time: 6000
            });
        } catch (err) {
            console.error('Unable to copy to clipboard', err);
        }
    }
    return _;
}();
var UniquePageHandler = function() {
    var _ = {
        websiteID: '',
        versionNUM: '',
        translations: '',
        redirectLinkType: 0,
        uniqueLink: '',
    }
    _.init = function(settings) {
        _.websiteID = settings.websiteID;
        _.versionNUM = settings.versionNUM;
        _.redirectLinkType = settings.redirectLinkType;
        _.uniqueLink = settings.uniqueLink;
        $('.unique-page-option[data-page-type="' + $('#pageType').val() + '"]').show();
        if ($('#pageType').val() == '1') {
            $('#suggestedTextInlineBtnDivider').show();
        } else {
            $('#suggestedTextInlineBtnDivider').hide();
        }
        $('#pageType').on('change', function() {
            $('.unique-page-option').hide();
            $('#suggestedTextInlineBtnDivider').hide();
            $('.unique-page-option[data-page-type="' + $(this).val() + '"]').show();
            if ($('#pageType').val() == '1') {
                $('#suggestedTextInlineBtnDivider').show();
            } else {
                $('#suggestedTextInlineBtnDivider').hide();
            }
        });
        $('#unique-page-link').append(getHTML());
        $('#unique-page-link').find('#uniqueLink').on('input', function() {
            var $this = $(this);
            if ($this.val().length === 0 && $this.closest('.form-group').hasClass('has-error')) {
                $this.closest('.form-group').removeClass('has-error');
            }
        });
        initilizeLinksAutocomplete();
    }

    function getHTML() {
        return `
${getSelect()}
${getRedirctInput()}
`
    }

    function getSelect() {
        return `<div class="form-group">
<label for="redirectLinkType">${translations.uniquePage.linkType}</label>
<select class="form-control" id="redirectLinkType" name="redirectLinkType">
<option value="0" ${ _.redirectLinkType == 0 ? 'selected' : ''}>${translations.uniquePage.redirect}</option>
<option value="1" ${ _.redirectLinkType == 1 ? 'selected' : ''}>${translations.uniquePage.redirectNewWindow}</option>
</select>
</div>`;
    }

    function getRedirctInput() {
        return `<div class="form-group">
<label for="uniqueLink">${translations.uniquePage.link}</label>
<span style="color:red"> *</span>
<input type="text" class="form-control" id="uniqueLink" name="uniqueLink" value="${_.uniqueLink}" placeholder="link" data-rel="links-autocomplete" data-website-id="${_.websiteID}" data-version-num="${_.versionNUM}" data-rule-url-abs-rel="true" data-msg-url-abs-rel="Please enter a valid URL. e.g. http://example.com" required>
</div>`
    }
    return _;
}();

function Bootbox_AddValidatorsOnPrompt($bootbox, label_text, maxlength) {
    $bootbox.on('show.bs.modal', function() {
        let $bootbox_form = $bootbox.find('.bootbox-form');
        let $bootbox_input = $bootbox_form.find('.bootbox-input');
        $bootbox_form.append('<div class="form-group"><label for="bootbox_input">' + label_text + '</label></div>');
        $bootbox_input.attr({
            'id': 'bootbox_input',
            'required': '',
            'msg-required': translations.fieldRequired
        });
        $bootbox_input.appendTo($bootbox_form.find('.form-group'));
        $bootbox_form.validate(jQueryValidationGetGlobalOptions());
        $bootbox_input.on('input', function(event) {
            $bootbox_form.validate().element("#bootbox_input");
        });
        if (maxlength) {
            $bootbox_input.attr({
                'maxlength': maxlength
            });
            InputsMaxLengthHandler.limitElementLengthHandler($bootbox.find('.bootbox-input'));
        }
    });
}

function GetDateRangePickerLocalization() {
    return {
        customRangeLabel: translations.datepicker.customRange,
        direction: $('html[dir=rtl]').length !== 0 ? 'rtl' : 'ltr',
        applyLabel: translations.datepicker.apply,
        cancelLabel: translations.datepicker.cancel,
        daysOfWeek: [translations.datepicker.days.su, translations.datepicker.days.mo, translations.datepicker.days.tu, translations.datepicker.days.we, translations.datepicker.days.th, translations.datepicker.days.fr, translations.datepicker.days.sa],
        monthNames: [translations.datepicker.months.january, translations.datepicker.months.february, translations.datepicker.months.march, translations.datepicker.months.april, translations.datepicker.months.may, translations.datepicker.months.june, translations.datepicker.months.july, translations.datepicker.months.august, translations.datepicker.months.september, translations.datepicker.months.october, translations.datepicker.months.november, translations.datepicker.months.december]
    }
}

function closeMobileMenuDropdown() {
    if ($('.s123-mobile-settings.s123-custom-settings').parent('.s123-collapse-settings.open').length == 0) return;
    $('.s123-mobile-settings.s123-custom-settings').parent('.s123-collapse-settings.open').find('.content').slideToggle();
    $('.s123-mobile-settings.s123-custom-settings').parent('.s123-collapse-settings').removeClass('open');
}

function showPrice(currency, price) {
    if (!$.isNumeric(price)) return html;
    if (currency.symbolFirst) {
        var html = '<span data-rel="multiCurrency" dir="ltr"><span data-type="symbol">' + currency.symbol + '</span><span data-type="price">' + price + '</span></span>';
    } else {
        var html = '<span data-rel="multiCurrency" dir="ltr"><span data-type="price">' + price + '</span><span data-type="symbol">' + currency.symbol + '</span></span>';
    }
    return html;
}

function Pusher_SetEvent(channelNameTXT, eventNameTXT, callbackFUN) {
    if (!Pusher) return;
    if ($GLOBALS && $GLOBALS['is_local_server']) channelNameTXT += '_local';
    Pusher.logToConsole = false;
    const pusher = new Pusher('b62a19437cb1487cf87e', {
        cluster: 'mt1'
    });
    const channel = pusher.subscribe(channelNameTXT);
    channel.bind(eventNameTXT, function(data) {
        callbackFUN.call(this, data);
    });
}
class CustomersMessages {
    constructor(settings) {
        this.el = settings.el;
        this.isMessageSent = false;
        this.websiteID = settings.websiteID;
        this.isLimited = settings.isLimited;
        this.orderID = settings.orderID ? settings.orderID : null;
        this.callback = settings.callback ? settings.callback : null;
        this.userEmail = settings.userEmail ? settings.userEmail : null;
        this.moduleTypeNUM = settings.moduleTypeNUM ? settings.moduleTypeNUM : null;
        this.isGroupBtn = settings.moduleTypeNUM ? settings.moduleTypeNUM : false;
        this.isUpdateMsgStatus = settings.isUpdateMsgStatus ? settings.isUpdateMsgStatus : false;
        this.isOpenSendMsgInCenter = settings.isOpenSendMsgInCenter ? settings.isOpenSendMsgInCenter : false;
        this.isReloadAfterSendNewMsg = settings.isReloadAfterSendNewMsg ? settings.isReloadAfterSendNewMsg : false;
        this.initSendMessage();
        this.initViewMessage();
        this.initViewProfile();
    };
    initSendMessage() {
        if (!this.el.$send) return;
        var that = this;
        var $parent = $('body');
        var sizeClasses = 'sideOffcanvas sideOffcanvasRight sideOffcanvasWider';
        if (that.isOpenSendMsgInCenter) {
            $parent = $(window.parent.document).find('body');
            sizeClasses = 'customOffcanvasHeight';
        }
        SystemModals.sm_render({
            id: 'customerSendNewMessageModal',
            disposable: false,
            $parent: $parent,
            sizeClasses: sizeClasses,
            headerSettings: {
                id: 'customerSendNewMessageModalTitle',
                title: '&nbsp;'
            },
            bodySettings: {
                content: '&nbsp;'
            },
            footerSettings: {
                isActive: true,
                buttons: [{
                    class: 'btn ' + (that.isLimited ? 'btn-warning' : 'btn-primary') + ' customer-send-message',
                    text: translations.customersMessages.send.toUpperCase()
                }]
            },
            showCallback: function(event, modal) {
                if (!topWindow.Wizard && !that.isOpenSendMsgInCenter) {
                    topWindow.$('#allFloatingButtons').fadeOut();
                    topWindow.$('.helpBOX_container').fadeOut();
                    topWindow.$('#intercom-container').fadeOut();
                }
            },
            hideCallback: function(event, modal) {
                if (!topWindow.Wizard && !that.isOpenSendMsgInCenter) {
                    topWindow.$('#allFloatingButtons').fadeIn();
                    topWindow.$('.helpBOX_container').fadeIn();
                    topWindow.$('#intercom-container').fadeIn();
                }
                if (that.isMessageSent) {
                    var email = modal.$html.find('#email').length > 0 ? modal.$html.find('#email').val() : '';
                    var orderID = modal.$html.find('#orderID').length > 0 ? modal.$html.find('#orderID').val() : '';
                    var messageID = modal.$html.find('#messageID').length > 0 ? modal.$html.find('#messageID').val() : '';
                    if (that.isOpenSendMsgInCenter) {
                        SystemModals.sm_get('showCustomerProfileInfoModal').hide();
                    }
                    that.openShowMessageInfo(email, messageID, orderID);
                }
            },
            shownCallback: function(event, modal) {
                modal.$html.find('.customer-send-message').prop('disabled', false);
                $('.modal-backdrop').on('click', function() {
                    SystemModals.sm_get('customerSendNewMessageModal').hide();
                });
                var $form = modal.$html.find('#sendNewMsgForm');
                $form.validate(that.jQueryValidationOptions());
                modal.$html.find('.customer-send-message').off('click').on('click', function() {
                    var $this = $(this);
                    if (that.isLimited) {
                        topWindow.upgradeFeaturesManager.show({
                            featureID: 'messages_tickets_system'
                        });
                    } else {
                        if (!$form.valid()) return;
                        $this.prop('disabled', true);
                        var orderID = '';
                        if (modal.$html.find('#addNewMessage').length > 0) {
                            orderID = modal.$html.find('#orderID').val();
                        }
                        $.ajax({
                            type: 'POST',
                            url: '/versions/' + versionNUM + '/wizard/messages/sendNewMessage.php',
                            data: {
                                w: that.websiteID,
                                moduleTypeNUM: that.moduleTypeNUM,
                                email: modal.$html.find('#email').val(),
                                subject: modal.$html.find('#subject').val(),
                                message: modal.$html.find('#addNewMessage').val(),
                                orderID: orderID,
                            },
                            success: function(response) {
                                response = JSON.parse(response);
                                if (response.status == 'success') {
                                    that.isMessageSent = true;
                                    modal.$html.find('#sendNewMsgForm').append('<input type="hidden" id="messageID" value="' + response.unique_id + '" />');
                                    modal.hide();
                                } else {
                                    $this.prop('disabled', false);
                                }
                            }
                        });
                    }
                });
                modal.$html.find('#email').autocomplete({
                    source: function(request, response) {
                        $.ajax({
                            type: 'POST',
                            url: '/versions/' + versionNUM + '/wizard/messages/getCustomersEmail.php',
                            data: {
                                websiteID: that.websiteID,
                                email: request.term
                            },
                            success: function(data) {
                                data = JSON.parse(data);
                                if (data.status == 'success') {
                                    response($.map(data.emails, function(item) {
                                        var fullName = '';
                                        if (item.first_name && item.first_name.length > 0) {
                                            fullName += item.first_name;
                                        }
                                        if (item.last_name && item.last_name.length > 0) {
                                            fullName += ' ' + item.last_name;
                                        }
                                        if (fullName.length > 0) {
                                            fullName = ' (' + fullName + ')';
                                        }
                                        return {
                                            label: item.email + fullName,
                                            value: item.email,
                                        }
                                    }));
                                }
                            }
                        });
                    },
                    minLength: 1,
                    appendTo: modal.$html.find('#email').closest('.form-group'),
                    select: function(event, ui) {
                        modal.$html.find('#email').val(ui.item.value);
                    }
                });
                if (that.isOpenSendMsgInCenter) {
                    window.parent.s123EditorInit();
                } else {
                    s123EditorInit();
                }
            }
        });
        that.el.$send.off('click').on('click', function() {
            if (that.isLimited) {
                topWindow.upgradeFeaturesManager.show({
                    featureID: 'messages_tickets_system'
                });
            } else {
                var $this = $(this);
                var email = '';
                var orderID = '';
                if ($this.data('email') && $this.data('email').length > 0) {
                    email = $this.data('email');
                }
                if ($this.data('order-id') && $this.data('order-id').length > 0) {
                    orderID = $this.data('order-id');
                }
                that.displaySendMessage(email, orderID);
            }
        });
    }
    displaySendMessage(email, orderID) {
        var subject = '';
        if (orderID.length > 0) {
            subject = translations.customersMessages.orderSubject.replace('{{order_id}}', orderID);
        }
        var modal = SystemModals.sm_get('customerSendNewMessageModal');
        var html = '<div style="padding: 20px 20px 0;">';
        html += '<div class="well hide-print">';
        html += '<form id="sendNewMsgForm">';
        html += '<div class="form-group">';
        html += '<label for="email">' + translations.customersMessages.email + '</label>'
        html += '<input type="text" class="form-control" id="email" name="email" value="' + email + '" required data-msg-required="' + translations.fieldRequired + '" style="direction:ltr" placeholder="example@example.com" data-rule-email="true" data-msg-email="' + translations.emailCollectorValidEmail + '"' + (email.length > 0 ? 'disabled="disabled"' : '') + '>';
        html += '</div>';
        html += '<div class="form-group">';
        html += '<label for="subject">' + translations.customersMessages.subject + '</label>'
        html += '<input type="text" class="form-control" id="subject" name="subject" value="' + subject + '" placeholder="' + translations.customersMessages.subjectPlaceholder + '" required data-msg-required="' + translations.fieldRequired + '" data-rule-no-spaces-only="true" data-msg-no-spaces-only="' + translations.customersMessages.notJustSpaces + '" maxlength="150">';
        html += '</div>';
        html += '<div class="form-group">';
        html += '<label for="addNewMessage">' + translations.customersMessages.message + '</label>'
        html += '<textarea class="form-control" name="addNewMessage" id="addNewMessage" placeholder="' + translations.customersMessages.messagePlaceholder + '" data-editor="froala" data-froala-height="350" data-froala-buttons="messages" required data-msg-required="' + translations.fieldRequired + '" data-rule-no-spaces-only="true" data-msg-no-spaces-only="' + translations.customersMessages.notJustSpaces + '" data-max-chars-length="1000"></textarea>';
        html += '</div>';
        if (orderID.length > 0) {
            html += '<input type="hidden" id="orderID" value="' + orderID + '">';
        }
        html += '</form>';
        html += '</div>';
        html += '</div>';
        modal.updateHTML('title', translations.customersMessages.sendNewMessage);
        modal.updateHTML('body', html);
        modal.show();
    }
    initViewMessage() {
        if (!this.el.$view) return;
        var that = this;
        SystemModals.sm_render({
            id: 'customersShowMessageInfoModal',
            disposable: false,
            $parent: $('body'),
            sizeClasses: 'sideOffcanvas sideOffcanvasRight sideOffcanvasWider',
            headerSettings: {
                id: 'customersShowMessageInfoModalTitle',
                title: '&nbsp;'
            },
            bodySettings: {
                content: '&nbsp;'
            },
            footerSettings: {
                isActive: true,
                buttons: [{
                    class: 'btn customers-show-message-info-print-btn',
                    text: translations.print
                }]
            },
            showCallback: function(event, modal) {
                if (!topWindow.Wizard) {
                    topWindow.$('#allFloatingButtons').fadeOut();
                    topWindow.$('.helpBOX_container').fadeOut();
                    topWindow.$('#intercom-container').fadeOut();
                }
            },
            hideCallback: function(event, modal) {
                if (!topWindow.Wizard) {
                    topWindow.$('#allFloatingButtons').fadeIn();
                    topWindow.$('.helpBOX_container').fadeIn();
                    topWindow.$('#intercom-container').fadeIn();
                }
                if (that.isMessageSent) {
                    that.isMessageSent = false;
                    if (that.isReloadAfterSendNewMsg && that.callback) {
                        that.callback.call(this);
                    }
                }
            },
            shownCallback: function(event, modal) {
                $('.modal-backdrop').on('click', function() {
                    SystemModals.sm_get('customersShowMessageInfoModal').hide();
                });
                var $form = modal.$html.find('#replyMsgForm');
                $form.validate(that.jQueryValidationOptions());
                var $modal = SystemModals.sm_get('customersShowMessageInfoModal').$html;
                var email = that.userEmail;
                $modal.find('.add-new-message').off('click').on('click', function() {
                    var $this = $(this);
                    if (that.isLimited) {
                        topWindow.upgradeFeaturesManager.show({
                            featureID: 'messages_tickets_system'
                        });
                    } else {
                        var $this = $(this);
                        var message = $modal.find('#addNewMessage').val();
                        var attachments = $('#add-files').val();
                        if (!$modal.find('form').valid()) return;
                        $this.addClass('disabled');
                        $.ajax({
                            type: 'POST',
                            url: '/versions/' + versionNUM + '/wizard/messages/addNewMessage.php',
                            data: {
                                w: that.websiteID,
                                moduleTypeNUM: that.moduleTypeNUM,
                                id: $this.data('message-id'),
                                message: message,
                                orderID: $this.data('order-id'),
                                attachments: attachments,
                            },
                            success: function(response) {
                                response = JSON.parse(response);
                                if (response.status == 'success') {
                                    var html = '';
                                    html += '<label for="addNewMessage">' + translations.customersMessages.replyMessage + '</label>'
                                    html += '<textarea class="form-control" name="addNewMessage" id="addNewMessage" placeholder="' + translations.customersMessages.replyMessage + '" data-editor="froala" data-froala-height="150" data-froala-buttons="messages" required data-msg-required="' + translations.fieldRequired + '" data-rule-no-spaces-only="true" data-msg-no-spaces-only="' + translations.customersMessages.notJustSpaces + '" data-max-chars-length="1000"></textarea>';
                                    $modal.find('#addNewMessage').closest('.form-group').html('').append(html);
                                    s123EditorInit();
                                    $.each(topWindow.multipleUploadFile['add-files'].images, function(index) {
                                        topWindow.multipleUploadFile['add-files'].images.splice(0, 1);
                                    });
                                    topWindow.multipleUploadFile['add-files'].multiUploadMethods.syncPreview();
                                    var now = response.time;
                                    var html = '<div class="chat-msg client1-msg">';
                                    html += '<b>' + translations.customersMessages.admin + ' (' + email + '):</b>';
                                    html += '<span class="msg-date-time">';
                                    html += now;
                                    html += '</span>';
                                    html += '<div style="padding: 10px 10px 0;overflow-wrap: break-word;">' + message + '</div>';
                                    if (attachments.length > 0) {
                                        attachments = decodeURIComponent(attachments);
                                        attachments = tryParseJSON(attachments);
                                        if (attachments.length > 0) {
                                            html += '<div class="attachments-container" style="padding-top: 10px;">';
                                            html += '<div class="attachments-title"><b>' + translations.customersMessages.attachments + ':</b></div>';
                                            $.each(attachments, function(index, attachment) {
                                                html += '&emsp;<a href="' + attachment.n + '" target="_blank" style="color: #fff; text-decoration: underline;">' + translations.customersMessages.attachmentNumber.replace('{{attachment number}}', index + 1) + '</a>';
                                            });
                                            html += '</div>';
                                        }
                                    }
                                    html += '</div>';
                                    $modal.find('.messages-container').prepend($(html));
                                    if (that.isUpdateMsgStatus) {
                                        var $tr = $('table tr[data-id="' + $this.data('message-id') + '"]');
                                        var $button = $tr.find('td.statuses .btn-group button[type="button"]');
                                        var $dateTime = $tr.find('td.td-message-date-time .message-date-time');
                                        if ($button.length > 0) {
                                            $button.attr('class', 'btn btn-sm dropdown-toggle btn-success').html(translations.customersMessages.messageSent);
                                        }
                                        if ($dateTime.length > 0) {
                                            $dateTime.html(now);
                                        }
                                    }
                                }
                                $this.removeClass('disabled');
                            }
                        });
                    }
                });
                $modal.find('.customers-show-message-info-print-btn').off('click').on('click', function() {
                    window.print();
                    return false;
                });
                if (that.isMessageSent) {
                    $.gritter.add({
                        title: translations.customersMessages.updateSuccessful,
                        class_name: 'gritter-success',
                        time: 6000,
                    });
                }
                $modal.find('[data-rel=tooltip]').tooltip({
                    container: 'body',
                    placement: 'auto'
                });
                $modal.find('.add-files-btn').off('click').on('click', function() {
                    $('.add-files-container').show(250);
                    $(this).attr('disabled', 'disabled');
                });
                s123EditorInit();
                UploadMultipleFilesInitialize();
                $modal.find('#add-files').on('change', function() {
                    var attachments = $(this).val();
                    attachments = decodeURIComponent(attachments);
                    attachments = tryParseJSON(attachments);
                    $.each(attachments, function(index, attachment) {
                        if (attachment.hasOwnProperty('e')) {
                            if ($.inArray(attachment.e, ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'odt', 'odp', 'pdf', 'epub', 'zip']) != -1) {
                                var fileName = attachment.t.split('/').pop();
                                $modal.find('img[src$="' + fileName + '"]').attr('src', '/manager/expert/noImage.png');
                            }
                        }
                    });
                });
            }
        });
        that.el.$view.off('click').on('click', function() {
            var $this = $(this);
            var messageID = $this.data('message-id') ? $this.data('message-id') : '';
            var orderID = $this.data('order-id') ? $this.data('order-id') : '';
            var email = $this.data('email') ? $this.data('email') : '';
            that.openShowMessageInfo(email, messageID, orderID);
        });
    }
    openShowMessageInfo(email, messageID, orderID) {
        var that = this;
        $.ajax({
            type: "POST",
            url: "/versions/" + versionNUM + "/wizard/messages/getMessageDataAjax.php",
            data: {
                websiteID: that.websiteID,
                moduleTypeNUM: that.moduleTypeNUM,
                id: messageID,
                orderID: orderID
            },
            success: function(messageData) {
                messageData = JSON.parse(messageData);
                if (messageData.hasOwnProperty('message') || messageData.hasOwnProperty('conversations')) {
                    that.displayShowMessages(messageData, messageData.uniqueID, orderID);
                } else {
                    that.displaySendMessage(email, orderID);
                }
            }
        });
    }
    displayShowMessages(messageData, messageID, orderID) {
        var that = this;
        var modal = SystemModals.sm_get('customersShowMessageInfoModal');
        var html = '<div style="padding: 20px 20px 0;">';
        html += '<div class="well hide-print">';
        html += '<form id="replyMsgForm">';
        if (typeof(messageData.email) != 'string') {
            html += '<div class="form-group" style="opacity: 0.4;pointer-events: none;">';
            html += '<label for="addNewMessage">' + translations.customersMessages.replyMessage + '</label>'
            html += '<textarea class="form-control" placeholder="' + translations.customersMessages.replyMessage + '" data-editor="froala" data-froala-height="150" data-froala-buttons="messages" rows="4" disabled="disabled" data-max-chars-length="1000"></textarea>';
            html += '</div>';
            html += '<button type="button" class="btn ' + (that.isLimited ? 'btn-warning' : 'btn-primary') + ' btn-xs add-new-message-disabled" data-rel="tooltip" data-trigger="hover" title="' + translations.customersMessages.disabledTooltip + '">' + translations.customersMessages.sendMessage + '</button>';
            html += '<button type="button" class="btn btn-primary btn-link add-new-message-disabled"">' + translations.customersMessages.addFiles + '</button>';
        } else {
            html += '<div class="form-group">';
            html += '<label for="addNewMessage">' + translations.customersMessages.replyMessage + '</label>'
            html += '<textarea class="form-control" name="addNewMessage" id="addNewMessage" placeholder="' + translations.customersMessages.replyMessage + '" data-editor="froala" data-froala-height="150" data-froala-buttons="messages" required data-msg-required="' + translations.fieldRequired + '" data-rule-no-spaces-only="true" data-msg-no-spaces-only="' + translations.customersMessages.notJustSpaces + '" data-max-chars-length="1000"' + (typeof(messageData.email) != 'string' ? ' disabled="disabled"' : '') + '></textarea>';
            html += '</div>';
            html += '<div class="form-group add-files-container">';
            html += '<input type="hidden" value="" id="add-files" class="multiple-images-upload" data-mb="10" data-file-kind="4" data-text="' + escapeHtml(translations.customersMessages.addFiles) + '" data-website-id="' + that.websiteID + '">';
            html += '</div>';
            html += '<button type="button" class="btn ' + (that.isLimited ? 'btn-warning' : 'btn-primary') + ' btn-xs add-new-message" data-message-id="' + messageID + '" data-order-id="' + orderID + '"' + (typeof(messageData.email) != 'string' ? ' disabled="disabled"' : '') + '>' + translations.customersMessages.sendMessage + '</button>';
            html += '<button type="button" class="btn btn-primary btn-link add-files-btn">' + translations.customersMessages.addFiles + '</button>';
            if (orderID.length > 0) {
                html += '<input type="hidden" id="orderID" value="' + orderID + '">';
            }
        }
        html += '</form>';
        html += '</div>';
        html += '</div>';
        html += '<div class="widget-box widget-chat-conversation" style="margin: 20px 20px 0;">';
        html += '<div class="widget-body">';
        html += '<div class="widget-main">';
        html += '<div class="print-content messages-container">';
        if (messageData.hasOwnProperty('conversations')) {
            $.each(messageData.conversations, function(key, conversation) {
                html += '<div class="chat-msg ' + (conversation.isAdmin == '1' ? 'client1-msg' : 'client2-msg') + '">';
                if (conversation.isAdmin == '1') {
                    html += '<b>' + translations.customersMessages.admin + ' (' + conversation.email + '):</b>';
                } else {
                    html += '<b>' + translations.customersMessages.customer + ' (' + conversation.email + '):</b>';
                }
                html += '<span class="msg-date-time">';
                html += conversation.timestamp;
                html += '</span>';
                conversation.message = tryParseJSON(conversation.message);
                html += '<div style="padding: 10px 10px 0;overflow-wrap: break-word;">' + conversation.message.message + '</div>';
                if (conversation.message.hasOwnProperty('attachments')) {
                    if (conversation.message.attachments.length > 0) {
                        html += '<div class="attachments-container" style="padding-top: 10px;">';
                        html += '<div class="attachments-title"><b>' + translations.customersMessages.attachments + ':</b></div>';
                        $.each(conversation.message.attachments, function(index, attachment) {
                            html += '&emsp;<a href="' + attachment + '" target="_blank" style="' + (conversation.isAdmin == '1' ? 'color: #fff' : 'color: #000') + '; text-decoration: underline;">' + translations.customersMessages.attachmentNumber.replace('{{attachment number}}', index + 1) + '</a>';
                        });
                        html += '</div>';
                    }
                }
                html += '</div>';
            });
        }
        if (messageData.hasOwnProperty('message')) {
            html += '<div class="chat-msg ' + (messageData.isAdmin ? 'client1-msg' : 'client2-msg') + '">';
            if (messageData.isAdmin) {
                html += '<b>' + translations.customersMessages.admin + ':</b>';
                if (messageData.adminEmail.length > 0) {
                    html += '<span> (' + messageData.adminEmail + ')</span>';
                }
            } else {
                html += '<b>' + translations.customersMessages.customer + ':</b>';
            }
            html += '<span class="msg-date-time">';
            html += messageData.time;
            html += '</span>';
            html += '<div style="padding: 10px 10px 0;overflow-wrap: break-word;">' + messageData.message + '</div>';
            html += '</div>';
        }
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        var $html = $(html);
        modal.updateHTML('title', translations.customersMessages.message + ' ' + messageID);
        modal.updateHTML('body', $html);
        modal.show();
    }
    initViewProfile() {
        if (!this.el.$profile) return;
        var that = this;
        SystemModals.sm_render({
            id: 'showCustomerProfileInfoModal',
            disposable: false,
            $parent: $('body'),
            sizeClasses: 'sideOffcanvas sideOffcanvasRight sideOffcanvasWider',
            headerSettings: {
                id: 'showCustomerProfileInfoModalTitle',
                title: '&nbsp;'
            },
            bodySettings: {
                content: '&nbsp;'
            },
            footerSettings: {
                isActive: true,
                buttons: [{
                    class: 'btn btn-primary show-customer-profile-close',
                    text: translations.close
                }]
            },
            showCallback: function(event, modal) {
                if (!topWindow.Wizard) {
                    topWindow.$('#allFloatingButtons').fadeOut();
                    topWindow.$('.helpBOX_container').fadeOut();
                    topWindow.$('#intercom-container').fadeOut();
                }
            },
            hideCallback: function(event, modal) {
                if (!topWindow.Wizard) {
                    topWindow.$('#allFloatingButtons').fadeIn();
                    topWindow.$('.helpBOX_container').fadeIn();
                    topWindow.$('#intercom-container').fadeIn();
                }
                that.isOpenSendMsgInCenter = false;
                that.initSendMessage();
            },
            shownCallback: function(event, modal) {
                $('.modal-backdrop').on('click', function() {
                    SystemModals.sm_get('showCustomerProfileInfoModal').hide();
                });
            }
        });
        $('.show-customer-profile-close').off('click').on('click', function() {
            SystemModals.sm_get('showCustomerProfileInfoModal').hide();
        });
        that.el.$profile.off('click').on('click', function(event) {
            var $this = $(this);
            var src = $this.data('href');
            var modal = SystemModals.sm_get('showCustomerProfileInfoModal');
            modal.updateHTML('title', translations.customersMessages.profile);
            modal.updateHTML('body', '<iframe name="orderInfo" style="border:0;" src="' + src + '" width="100%"></iframe>');
            modal.show();
        });
    }
    jQueryValidationOptions() {
        return {
            errorElement: 'div',
            errorClass: 'help-block',
            focusInvalid: true,
            ignore: ':hidden:not(.file-upload-input-field,[data-editor="froala"]),.fileUploadBox:hidden .file-upload-input-field,.form-tool-builder .form-control,.form-tool-builder input,[contenteditable="true"]:not([name])',
            highlight: function(e) {
                $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
            },
            invalidHandler: function(form, validator) {
                if (!validator.numberOfInvalids()) return;
                $(document).trigger('jQueryValidationGetGlobalOptions.invalid');
            },
            success: function(e) {
                $(e).closest('.form-group').removeClass('has-error');
                $(e).remove();
                $(document).trigger('jQueryValidationGetGlobalOptions.success');
            },
            errorPlacement: function(error, element) {
                if (element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
                    var controls = element.closest('div[class*="col-"]');
                    if (controls.find(':checkbox,:radio').length > 1) controls.append(error);
                    else error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
                } else if (element.is('.select2')) {
                    error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
                } else if (element.is('.chosen-select')) {
                    error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
                } else {
                    error.appendTo(element.closest('.form-group'));
                }
            },
            submitHandler: function(form) {
                $(form).find('button:submit').prop('disabled', true);
                return true;
            }
        };
    }
}
var TextMarkDown = {
    formatText: function(text) {
        text = text.replace(/\r\n|\r|\n/g, "<br/>");
        text = text.replace(/!([\s\S]*?)!/g, '<span class="mainWebsiteColor">$1</span>');
        text = text.replace(/\*\*([\s\S]*?)\*\*/g, '<span style="font-weight:bold;">$1</span>');
        text = text.replace(/\*([\s\S]*?)\*/g, '<span style="font-style:italic;">$1</span>');
        text = text.replace(/~~([\s\S]*?)~~/g, '<span style="text-decoration:line-through;">$1</span>');
        text = text.replace(/__([\s\S]*?)__/g, '<span style="text-decoration:overline;">$1</span>');
        text = text.replace(/_([\s\S]*?)_/g, '<span style="text-decoration:underline;">$1</span>');
        text = text.replace(/\#\#([\s\S]*?)\#\#/g, '<span class="homepageRandomText" data-text="$1"></span>');
        text = text.replace(/\#([\s\S]*?)\#/g, '<span class="homepageRandomTextStop" data-text="$1"></span>');
        return text;
    },
    unFormatedText: function(text) {
        text = text.replace(/<br\s?\/?>/g, "\n");
        text = text.replace(/<span class="mainWebsiteColor">([\s\S]*?)<\/span>/g, '!$1!');
        text = text.replace(/<span style="font-weight:bold;">([\s\S]*?)<\/span>/g, '**$1**');
        text = text.replace(/<span style="font-style:italic;">([\s\S]*?)<\/span>/g, '*$1*');
        text = text.replace(/<span style="text-decoration:line-through;">([\s\S]*?)<\/span>/g, '~~$1~~');
        text = text.replace(/<span style="text-decoration:overline;">([\s\S]*?)<\/span>/g, '__$1__');
        text = text.replace(/<span style="text-decoration:underline;">([\s\S]*?)<\/span>/g, '_$1_');
        text = text.replace(/<span class="homepageRandomText ([\s\S]*?)" data-text="([\s\S]*?)">([\s\S]*?)<\/span>/g, '##$3##');
        text = text.replace(/<span class="homepageRandomTextStop ([\s\S]*?)" data-text="([\s\S]*?)">([\s\S]*?)<\/span>/g, '#$3#');
        return text;
    },
    isTextFormated: function(text) {
        if (text.match(/!([\s\S]*?)!/g)) return true;
        if (text.match(/\*\*([\s\S]*?)\*\*/g)) return true;
        if (text.match(/\*([\s\S]*?)\*/g)) return true;
        if (text.match(/~~([\s\S]*?)~~/g)) return true;
        if (text.match(/__([\s\S]*?)__/g)) return true;
        if (text.match(/_([\s\S]*?)_/g)) return true;
        if (text.match(/\#\#([\s\S]*?)\#\#/g)) return true;
        if (text.match(/\#([\s\S]*?)\#/g)) return true;
        return false;
    },
}
var QRCode;
(function() {
    function QR8bitByte(data) {
        this.mode = QRMode.MODE_8BIT_BYTE;
        this.data = data;
        this.parsedData = [];
        for (var i = 0, l = this.data.length; i < l; i++) {
            var byteArray = [];
            var code = this.data.charCodeAt(i);
            if (code > 0x10000) {
                byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
                byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
                byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
                byteArray[3] = 0x80 | (code & 0x3F);
            } else if (code > 0x800) {
                byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
                byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
                byteArray[2] = 0x80 | (code & 0x3F);
            } else if (code > 0x80) {
                byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
                byteArray[1] = 0x80 | (code & 0x3F);
            } else {
                byteArray[0] = code;
            }
            this.parsedData.push(byteArray);
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData);
        if (this.parsedData.length != this.data.length) {
            this.parsedData.unshift(191);
            this.parsedData.unshift(187);
            this.parsedData.unshift(239);
        }
    }
    QR8bitByte.prototype = {
        getLength: function(buffer) {
            return this.parsedData.length;
        },
        write: function(buffer) {
            for (var i = 0, l = this.parsedData.length; i < l; i++) {
                buffer.put(this.parsedData[i], 8);
            }
        }
    };

    function QRCodeModel(typeNumber, errorCorrectLevel) {
        this.typeNumber = typeNumber;
        this.errorCorrectLevel = errorCorrectLevel;
        this.modules = null;
        this.moduleCount = 0;
        this.dataCache = null;
        this.dataList = [];
    }
    QRCodeModel.prototype = {
        addData: function(data) {
            var newData = new QR8bitByte(data);
            this.dataList.push(newData);
            this.dataCache = null;
        },
        isDark: function(row, col) {
            if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
                throw new Error(row + "," + col);
            }
            return this.modules[row][col];
        },
        getModuleCount: function() {
            return this.moduleCount;
        },
        make: function() {
            this.makeImpl(false, this.getBestMaskPattern());
        },
        makeImpl: function(test, maskPattern) {
            this.moduleCount = this.typeNumber * 4 + 17;
            this.modules = new Array(this.moduleCount);
            for (var row = 0; row < this.moduleCount; row++) {
                this.modules[row] = new Array(this.moduleCount);
                for (var col = 0; col < this.moduleCount; col++) {
                    this.modules[row][col] = null;
                }
            }
            this.setupPositionProbePattern(0, 0);
            this.setupPositionProbePattern(this.moduleCount - 7, 0);
            this.setupPositionProbePattern(0, this.moduleCount - 7);
            this.setupPositionAdjustPattern();
            this.setupTimingPattern();
            this.setupTypeInfo(test, maskPattern);
            if (this.typeNumber >= 7) {
                this.setupTypeNumber(test);
            }
            if (this.dataCache == null) {
                this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
            }
            this.mapData(this.dataCache, maskPattern);
        },
        setupPositionProbePattern: function(row, col) {
            for (var r = -1; r <= 7; r++) {
                if (row + r <= -1 || this.moduleCount <= row + r) continue;
                for (var c = -1; c <= 7; c++) {
                    if (col + c <= -1 || this.moduleCount <= col + c) continue;
                    if ((0 <= r && r <= 6 && (c == 0 || c == 6)) || (0 <= c && c <= 6 && (r == 0 || r == 6)) || (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
                        this.modules[row + r][col + c] = true;
                    } else {
                        this.modules[row + r][col + c] = false;
                    }
                }
            }
        },
        getBestMaskPattern: function() {
            var minLostPoint = 0;
            var pattern = 0;
            for (var i = 0; i < 8; i++) {
                this.makeImpl(true, i);
                var lostPoint = QRUtil.getLostPoint(this);
                if (i == 0 || minLostPoint > lostPoint) {
                    minLostPoint = lostPoint;
                    pattern = i;
                }
            }
            return pattern;
        },
        createMovieClip: function(target_mc, instance_name, depth) {
            var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
            var cs = 1;
            this.make();
            for (var row = 0; row < this.modules.length; row++) {
                var y = row * cs;
                for (var col = 0; col < this.modules[row].length; col++) {
                    var x = col * cs;
                    var dark = this.modules[row][col];
                    if (dark) {
                        qr_mc.beginFill(0, 100);
                        qr_mc.moveTo(x, y);
                        qr_mc.lineTo(x + cs, y);
                        qr_mc.lineTo(x + cs, y + cs);
                        qr_mc.lineTo(x, y + cs);
                        qr_mc.endFill();
                    }
                }
            }
            return qr_mc;
        },
        setupTimingPattern: function() {
            for (var r = 8; r < this.moduleCount - 8; r++) {
                if (this.modules[r][6] != null) {
                    continue;
                }
                this.modules[r][6] = (r % 2 == 0);
            }
            for (var c = 8; c < this.moduleCount - 8; c++) {
                if (this.modules[6][c] != null) {
                    continue;
                }
                this.modules[6][c] = (c % 2 == 0);
            }
        },
        setupPositionAdjustPattern: function() {
            var pos = QRUtil.getPatternPosition(this.typeNumber);
            for (var i = 0; i < pos.length; i++) {
                for (var j = 0; j < pos.length; j++) {
                    var row = pos[i];
                    var col = pos[j];
                    if (this.modules[row][col] != null) {
                        continue;
                    }
                    for (var r = -2; r <= 2; r++) {
                        for (var c = -2; c <= 2; c++) {
                            if (r == -2 || r == 2 || c == -2 || c == 2 || (r == 0 && c == 0)) {
                                this.modules[row + r][col + c] = true;
                            } else {
                                this.modules[row + r][col + c] = false;
                            }
                        }
                    }
                }
            }
        },
        setupTypeNumber: function(test) {
            var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
            for (var i = 0; i < 18; i++) {
                var mod = (!test && ((bits >> i) & 1) == 1);
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
            }
            for (var i = 0; i < 18; i++) {
                var mod = (!test && ((bits >> i) & 1) == 1);
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
            }
        },
        setupTypeInfo: function(test, maskPattern) {
            var data = (this.errorCorrectLevel << 3) | maskPattern;
            var bits = QRUtil.getBCHTypeInfo(data);
            for (var i = 0; i < 15; i++) {
                var mod = (!test && ((bits >> i) & 1) == 1);
                if (i < 6) {
                    this.modules[i][8] = mod;
                } else if (i < 8) {
                    this.modules[i + 1][8] = mod;
                } else {
                    this.modules[this.moduleCount - 15 + i][8] = mod;
                }
            }
            for (var i = 0; i < 15; i++) {
                var mod = (!test && ((bits >> i) & 1) == 1);
                if (i < 8) {
                    this.modules[8][this.moduleCount - i - 1] = mod;
                } else if (i < 9) {
                    this.modules[8][15 - i - 1 + 1] = mod;
                } else {
                    this.modules[8][15 - i - 1] = mod;
                }
            }
            this.modules[this.moduleCount - 8][8] = (!test);
        },
        mapData: function(data, maskPattern) {
            var inc = -1;
            var row = this.moduleCount - 1;
            var bitIndex = 7;
            var byteIndex = 0;
            for (var col = this.moduleCount - 1; col > 0; col -= 2) {
                if (col == 6) col--;
                while (true) {
                    for (var c = 0; c < 2; c++) {
                        if (this.modules[row][col - c] == null) {
                            var dark = false;
                            if (byteIndex < data.length) {
                                dark = (((data[byteIndex] >>> bitIndex) & 1) == 1);
                            }
                            var mask = QRUtil.getMask(maskPattern, row, col - c);
                            if (mask) {
                                dark = !dark;
                            }
                            this.modules[row][col - c] = dark;
                            bitIndex--;
                            if (bitIndex == -1) {
                                byteIndex++;
                                bitIndex = 7;
                            }
                        }
                    }
                    row += inc;
                    if (row < 0 || this.moduleCount <= row) {
                        row -= inc;
                        inc = -inc;
                        break;
                    }
                }
            }
        }
    };
    QRCodeModel.PAD0 = 0xEC;
    QRCodeModel.PAD1 = 0x11;
    QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
        var buffer = new QRBitBuffer();
        for (var i = 0; i < dataList.length; i++) {
            var data = dataList[i];
            buffer.put(data.mode, 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
            data.write(buffer);
        }
        var totalDataCount = 0;
        for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
        }
        if (buffer.getLengthInBits() > totalDataCount * 8) {
            throw new Error("code length overflow. (" +
                buffer.getLengthInBits() +
                ">" +
                totalDataCount * 8 +
                ")");
        }
        if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
            buffer.put(0, 4);
        }
        while (buffer.getLengthInBits() % 8 != 0) {
            buffer.putBit(false);
        }
        while (true) {
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                break;
            }
            buffer.put(QRCodeModel.PAD0, 8);
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                break;
            }
            buffer.put(QRCodeModel.PAD1, 8);
        }
        return QRCodeModel.createBytes(buffer, rsBlocks);
    };
    QRCodeModel.createBytes = function(buffer, rsBlocks) {
        var offset = 0;
        var maxDcCount = 0;
        var maxEcCount = 0;
        var dcdata = new Array(rsBlocks.length);
        var ecdata = new Array(rsBlocks.length);
        for (var r = 0; r < rsBlocks.length; r++) {
            var dcCount = rsBlocks[r].dataCount;
            var ecCount = rsBlocks[r].totalCount - dcCount;
            maxDcCount = Math.max(maxDcCount, dcCount);
            maxEcCount = Math.max(maxEcCount, ecCount);
            dcdata[r] = new Array(dcCount);
            for (var i = 0; i < dcdata[r].length; i++) {
                dcdata[r][i] = 0xff & buffer.buffer[i + offset];
            }
            offset += dcCount;
            var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
            var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
            var modPoly = rawPoly.mod(rsPoly);
            ecdata[r] = new Array(rsPoly.getLength() - 1);
            for (var i = 0; i < ecdata[r].length; i++) {
                var modIndex = i + modPoly.getLength() - ecdata[r].length;
                ecdata[r][i] = (modIndex >= 0) ? modPoly.get(modIndex) : 0;
            }
        }
        var totalCodeCount = 0;
        for (var i = 0; i < rsBlocks.length; i++) {
            totalCodeCount += rsBlocks[i].totalCount;
        }
        var data = new Array(totalCodeCount);
        var index = 0;
        for (var i = 0; i < maxDcCount; i++) {
            for (var r = 0; r < rsBlocks.length; r++) {
                if (i < dcdata[r].length) {
                    data[index++] = dcdata[r][i];
                }
            }
        }
        for (var i = 0; i < maxEcCount; i++) {
            for (var r = 0; r < rsBlocks.length; r++) {
                if (i < ecdata[r].length) {
                    data[index++] = ecdata[r][i];
                }
            }
        }
        return data;
    };
    var QRMode = {
        MODE_NUMBER: 1 << 0,
        MODE_ALPHA_NUM: 1 << 1,
        MODE_8BIT_BYTE: 1 << 2,
        MODE_KANJI: 1 << 3
    };
    var QRErrorCorrectLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    };
    var QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    var QRUtil = {
        PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ],
        G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
        G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
        G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
        getBCHTypeInfo: function(data) {
            var d = data << 10;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
                d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15)));
            }
            return ((data << 10) | d) ^ QRUtil.G15_MASK;
        },
        getBCHTypeNumber: function(data) {
            var d = data << 12;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
                d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18)));
            }
            return (data << 12) | d;
        },
        getBCHDigit: function(data) {
            var digit = 0;
            while (data != 0) {
                digit++;
                data >>>= 1;
            }
            return digit;
        },
        getPatternPosition: function(typeNumber) {
            return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        },
        getMask: function(maskPattern, i, j) {
            switch (maskPattern) {
                case QRMaskPattern.PATTERN000:
                    return (i + j) % 2 == 0;
                case QRMaskPattern.PATTERN001:
                    return i % 2 == 0;
                case QRMaskPattern.PATTERN010:
                    return j % 3 == 0;
                case QRMaskPattern.PATTERN011:
                    return (i + j) % 3 == 0;
                case QRMaskPattern.PATTERN100:
                    return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
                case QRMaskPattern.PATTERN101:
                    return (i * j) % 2 + (i * j) % 3 == 0;
                case QRMaskPattern.PATTERN110:
                    return ((i * j) % 2 + (i * j) % 3) % 2 == 0;
                case QRMaskPattern.PATTERN111:
                    return ((i * j) % 3 + (i + j) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + maskPattern);
            }
        },
        getErrorCorrectPolynomial: function(errorCorrectLength) {
            var a = new QRPolynomial([1], 0);
            for (var i = 0; i < errorCorrectLength; i++) {
                a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
            }
            return a;
        },
        getLengthInBits: function(mode, type) {
            if (1 <= type && type < 10) {
                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 10;
                    case QRMode.MODE_ALPHA_NUM:
                        return 9;
                    case QRMode.MODE_8BIT_BYTE:
                        return 8;
                    case QRMode.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + mode);
                }
            } else if (type < 27) {
                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 12;
                    case QRMode.MODE_ALPHA_NUM:
                        return 11;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + mode);
                }
            } else if (type < 41) {
                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 14;
                    case QRMode.MODE_ALPHA_NUM:
                        return 13;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + mode);
                }
            } else {
                throw new Error("type:" + type);
            }
        },
        getLostPoint: function(qrCode) {
            var moduleCount = qrCode.getModuleCount();
            var lostPoint = 0;
            for (var row = 0; row < moduleCount; row++) {
                for (var col = 0; col < moduleCount; col++) {
                    var sameCount = 0;
                    var dark = qrCode.isDark(row, col);
                    for (var r = -1; r <= 1; r++) {
                        if (row + r < 0 || moduleCount <= row + r) {
                            continue;
                        }
                        for (var c = -1; c <= 1; c++) {
                            if (col + c < 0 || moduleCount <= col + c) {
                                continue;
                            }
                            if (r == 0 && c == 0) {
                                continue;
                            }
                            if (dark == qrCode.isDark(row + r, col + c)) {
                                sameCount++;
                            }
                        }
                    }
                    if (sameCount > 5) {
                        lostPoint += (3 + sameCount - 5);
                    }
                }
            }
            for (var row = 0; row < moduleCount - 1; row++) {
                for (var col = 0; col < moduleCount - 1; col++) {
                    var count = 0;
                    if (qrCode.isDark(row, col)) count++;
                    if (qrCode.isDark(row + 1, col)) count++;
                    if (qrCode.isDark(row, col + 1)) count++;
                    if (qrCode.isDark(row + 1, col + 1)) count++;
                    if (count == 0 || count == 4) {
                        lostPoint += 3;
                    }
                }
            }
            for (var row = 0; row < moduleCount; row++) {
                for (var col = 0; col < moduleCount - 6; col++) {
                    if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
                        lostPoint += 40;
                    }
                }
            }
            for (var col = 0; col < moduleCount; col++) {
                for (var row = 0; row < moduleCount - 6; row++) {
                    if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
                        lostPoint += 40;
                    }
                }
            }
            var darkCount = 0;
            for (var col = 0; col < moduleCount; col++) {
                for (var row = 0; row < moduleCount; row++) {
                    if (qrCode.isDark(row, col)) {
                        darkCount++;
                    }
                }
            }
            var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            lostPoint += ratio * 10;
            return lostPoint;
        }
    };
    var QRMath = {
        glog: function(n) {
            if (n < 1) {
                throw new Error("glog(" + n + ")");
            }
            return QRMath.LOG_TABLE[n];
        },
        gexp: function(n) {
            while (n < 0) {
                n += 255;
            }
            while (n >= 256) {
                n -= 255;
            }
            return QRMath.EXP_TABLE[n];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    };
    for (var i = 0; i < 8; i++) {
        QRMath.EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i++) {
        QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i++) {
        QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
    }

    function QRPolynomial(num, shift) {
        if (num.length == undefined) {
            throw new Error(num.length + "/" + shift);
        }
        var offset = 0;
        while (offset < num.length && num[offset] == 0) {
            offset++;
        }
        this.num = new Array(num.length - offset + shift);
        for (var i = 0; i < num.length - offset; i++) {
            this.num[i] = num[i + offset];
        }
    }
    QRPolynomial.prototype = {
        get: function(index) {
            return this.num[index];
        },
        getLength: function() {
            return this.num.length;
        },
        multiply: function(e) {
            var num = new Array(this.getLength() + e.getLength() - 1);
            for (var i = 0; i < this.getLength(); i++) {
                for (var j = 0; j < e.getLength(); j++) {
                    num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
                }
            }
            return new QRPolynomial(num, 0);
        },
        mod: function(e) {
            if (this.getLength() - e.getLength() < 0) {
                return this;
            }
            var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
            var num = new Array(this.getLength());
            for (var i = 0; i < this.getLength(); i++) {
                num[i] = this.get(i);
            }
            for (var i = 0; i < e.getLength(); i++) {
                num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
            }
            return new QRPolynomial(num, 0).mod(e);
        }
    };

    function QRRSBlock(totalCount, dataCount) {
        this.totalCount = totalCount;
        this.dataCount = dataCount;
    }
    QRRSBlock.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ];
    QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
        var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
        if (rsBlock == undefined) {
            throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
        }
        var length = rsBlock.length / 3;
        var list = [];
        for (var i = 0; i < length; i++) {
            var count = rsBlock[i * 3 + 0];
            var totalCount = rsBlock[i * 3 + 1];
            var dataCount = rsBlock[i * 3 + 2];
            for (var j = 0; j < count; j++) {
                list.push(new QRRSBlock(totalCount, dataCount));
            }
        }
        return list;
    };
    QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
        switch (errorCorrectLevel) {
            case QRErrorCorrectLevel.L:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
            case QRErrorCorrectLevel.M:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
            case QRErrorCorrectLevel.Q:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
            case QRErrorCorrectLevel.H:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
            default:
                return undefined;
        }
    };

    function QRBitBuffer() {
        this.buffer = [];
        this.length = 0;
    }
    QRBitBuffer.prototype = {
        get: function(index) {
            var bufIndex = Math.floor(index / 8);
            return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) == 1;
        },
        put: function(num, length) {
            for (var i = 0; i < length; i++) {
                this.putBit(((num >>> (length - i - 1)) & 1) == 1);
            }
        },
        getLengthInBits: function() {
            return this.length;
        },
        putBit: function(bit) {
            var bufIndex = Math.floor(this.length / 8);
            if (this.buffer.length <= bufIndex) {
                this.buffer.push(0);
            }
            if (bit) {
                this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
            }
            this.length++;
        }
    };
    var QRCodeLimitLength = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273]
    ];

    function _isSupportCanvas() {
        return typeof CanvasRenderingContext2D != "undefined";
    }

    function _getAndroid() {
        var android = false;
        var sAgent = navigator.userAgent;
        if (/android/i.test(sAgent)) { // android
            android = true;
            var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);
            if (aMat && aMat[1]) {
                android = parseFloat(aMat[1]);
            }
        }
        return android;
    }
    var svgDrawer = (function() {
        var Drawing = function(el, htOption) {
            this._el = el;
            this._htOption = htOption;
        };
        Drawing.prototype.draw = function(oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
            var nCount = oQRCode.getModuleCount();
            var nWidth = Math.floor(_htOption.width / nCount);
            var nHeight = Math.floor(_htOption.height / nCount);
            this.clear();

            function makeSVG(tag, attrs) {
                var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
                for (var k in attrs)
                    if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
                return el;
            }
            var svg = makeSVG("svg", {
                'viewBox': '0 0 ' + String(nCount) + " " + String(nCount),
                'width': '100%',
                'height': '100%',
                'fill': _htOption.colorLight
            });
            svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            _el.appendChild(svg);
            svg.appendChild(makeSVG("rect", {
                "fill": _htOption.colorLight,
                "width": "100%",
                "height": "100%"
            }));
            svg.appendChild(makeSVG("rect", {
                "fill": _htOption.colorDark,
                "width": "1",
                "height": "1",
                "id": "template"
            }));
            for (var row = 0; row < nCount; row++) {
                for (var col = 0; col < nCount; col++) {
                    if (oQRCode.isDark(row, col)) {
                        var child = makeSVG("use", {
                            "x": String(col),
                            "y": String(row)
                        });
                        child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template")
                        svg.appendChild(child);
                    }
                }
            }
        };
        Drawing.prototype.clear = function() {
            while (this._el.hasChildNodes())
                this._el.removeChild(this._el.lastChild);
        };
        return Drawing;
    })();
    var useSVG = document.documentElement.tagName.toLowerCase() === "svg";
    var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function() {
        var Drawing = function(el, htOption) {
            this._el = el;
            this._htOption = htOption;
        };
        Drawing.prototype.draw = function(oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
            var nCount = oQRCode.getModuleCount();
            var nWidth = Math.floor(_htOption.width / nCount);
            var nHeight = Math.floor(_htOption.height / nCount);
            var aHTML = ['<table style="border:0;border-collapse:collapse;">'];
            for (var row = 0; row < nCount; row++) {
                aHTML.push('<tr>');
                for (var col = 0; col < nCount; col++) {
                    aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
                }
                aHTML.push('</tr>');
            }
            aHTML.push('</table>');
            _el.innerHTML = aHTML.join('');
            var elTable = _el.childNodes[0];
            var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
            var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;
            if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
                elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
            }
        };
        Drawing.prototype.clear = function() {
            this._el.innerHTML = '';
        };
        return Drawing;
    })() : (function() { // Drawing in Canvas
        function _onMakeImage() {
            this._elImage.src = this._elCanvas.toDataURL("image/png");
            this._elImage.style.display = "block";
            this._elCanvas.style.display = "none";
            $(document).trigger('build_qrcode');
        }
        if (typeof this !== 'undefined' && this._android && this._android <= 2.1) {
            var factor = 1 / window.devicePixelRatio;
            var drawImage = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function(image, sx, sy, sw, sh, dx, dy, dw, dh) {
                if (("nodeName" in image) && /img/i.test(image.nodeName)) {
                    for (var i = arguments.length - 1; i >= 1; i--) {
                        arguments[i] = arguments[i] * factor;
                    }
                } else if (typeof dw == "undefined") {
                    arguments[1] *= factor;
                    arguments[2] *= factor;
                    arguments[3] *= factor;
                    arguments[4] *= factor;
                }
                drawImage.apply(this, arguments);
            };
        }

        function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function() {
                    self._bSupportDataURI = false;
                    if (self._fFail) {
                        self._fFail.call(self);
                    }
                };
                var fOnSuccess = function() {
                    self._bSupportDataURI = true;
                    if (self._fSuccess) {
                        self._fSuccess.call(self);
                    }
                };
                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                return;
            } else if (self._bSupportDataURI === true && self._fSuccess) {
                self._fSuccess.call(self);
            } else if (self._bSupportDataURI === false && self._fFail) {
                self._fFail.call(self);
            }
        };
        var Drawing = function(el, htOption) {
            this._bIsPainted = false;
            this._android = _getAndroid();
            this._htOption = htOption;
            this._elCanvas = document.createElement("canvas");
            this._elCanvas.width = htOption.width;
            this._elCanvas.height = htOption.height;
            el.appendChild(this._elCanvas);
            this._el = el;
            this._oContext = this._elCanvas.getContext("2d");
            this._bIsPainted = false;
            this._elImage = document.createElement("img");
            this._elImage.alt = "Scan me!";
            this._elImage.style.display = "none";
            this._el.appendChild(this._elImage);
            this._bSupportDataURI = null;
        };
        Drawing.prototype.draw = function(oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;
            var nCount = oQRCode.getModuleCount();
            var nWidth = _htOption.width / nCount;
            var nHeight = _htOption.height / nCount;
            var nRoundedWidth = Math.round(nWidth);
            var nRoundedHeight = Math.round(nHeight);
            _elImage.style.display = "none";
            this.clear();
            for (var row = 0; row < nCount; row++) {
                for (var col = 0; col < nCount; col++) {
                    var bIsDark = oQRCode.isDark(row, col);
                    var nLeft = col * nWidth;
                    var nTop = row * nHeight;
                    _oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
                    _oContext.lineWidth = 1;
                    _oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
                    _oContext.fillRect(nLeft, nTop, nWidth, nHeight);
                    _oContext.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight);
                    _oContext.strokeRect(Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight);
                }
            }
            this._bIsPainted = true;
        };
        Drawing.prototype.makeImage = function() {
            if (this._bIsPainted) {
                _safeSetDataURI.call(this, _onMakeImage);
            }
        };
        Drawing.prototype.isPainted = function() {
            return this._bIsPainted;
        };
        Drawing.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
            this._bIsPainted = false;
        };
        Drawing.prototype.round = function(nNumber) {
            if (!nNumber) {
                return nNumber;
            }
            return Math.floor(nNumber * 1000) / 1000;
        };
        return Drawing;
    })();

    function _getTypeNumber(sText, nCorrectLevel) {
        var nType = 1;
        var length = _getUTF8Length(sText);
        for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
            var nLimit = 0;
            switch (nCorrectLevel) {
                case QRErrorCorrectLevel.L:
                    nLimit = QRCodeLimitLength[i][0];
                    break;
                case QRErrorCorrectLevel.M:
                    nLimit = QRCodeLimitLength[i][1];
                    break;
                case QRErrorCorrectLevel.Q:
                    nLimit = QRCodeLimitLength[i][2];
                    break;
                case QRErrorCorrectLevel.H:
                    nLimit = QRCodeLimitLength[i][3];
                    break;
            }
            if (length <= nLimit) {
                break;
            } else {
                nType++;
            }
        }
        if (nType > QRCodeLimitLength.length) {
            throw new Error("Too long data");
        }
        return nType;
    }

    function _getUTF8Length(sText) {
        var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
        return replacedText.length + (replacedText.length != sText ? 3 : 0);
    }
    QRCode = function(el, vOption) {
        this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRErrorCorrectLevel.H
        };
        if (typeof vOption === 'string') {
            vOption = {
                text: vOption
            };
        }
        if (vOption) {
            for (var i in vOption) {
                this._htOption[i] = vOption[i];
            }
        }
        if (typeof el == "string") {
            el = document.getElementById(el);
        }
        if (this._htOption.useSVG) {
            Drawing = svgDrawer;
        }
        this._android = _getAndroid();
        this._el = el;
        this._oQRCode = null;
        this._oDrawing = new Drawing(this._el, this._htOption);
        if (this._htOption.text) {
            this.makeCode(this._htOption.text);
        }
    };
    QRCode.prototype.makeCode = function(sText) {
        this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
        this._oQRCode.addData(sText);
        this._oQRCode.make();
        this._el.title = sText;
        this._oDrawing.draw(this._oQRCode);
        this.makeImage();
    };
    QRCode.prototype.makeImage = function() {
        if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
            this._oDrawing.makeImage();
        }
    };
    QRCode.prototype.clear = function() {
        this._oDrawing.clear();
    };
    QRCode.CorrectLevel = QRErrorCorrectLevel;
})();