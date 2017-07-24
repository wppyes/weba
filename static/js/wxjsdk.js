﻿!function () { var w = null; var settings = { appIdstr: "", timestampstr: "", nonceStrstr: "", signaturestr: "", wx_share_title: "", wx_share_desc: "", wx_share_link: "", wx_share_img: "", wx_share_timeline: "", readyfunction: function () { } }; function Jsdk(wx) { w = wx } Jsdk.prototype.Init = function (options) { for (var i in options) { if (options.hasOwnProperty(i)) { settings[i] = options[i] } } w.config({ debug: false, appId: settings.appIdstr, timestamp: settings.timestampstr, nonceStr: settings.nonceStrstr, signature: settings.signaturestr, jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'translateVoice', 'startRecord', 'stopRecord', 'onRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard'] }); w.ready(function () { w.hideMenuItems({ menuList: ['menuItem:copyUrl', 'menuItem:openWithQQBrowser', 'menuItem:share:qq', 'menuItem:share:QZone', 'menuItem:openWithSafari', 'menuItem:share:email', 'menuItem:originPage', 'menuItem:setFont'] }); w.onMenuShareAppMessage({ title: settings.wx_share_title, desc: settings.wx_share_desc, link: settings.wx_share_link, imgUrl: settings.wx_share_img, type: 'link', trigger: function () { if (!settings.wx_share_link) { alert("分享链接为空"); return } }, success: function () { }, cancel: function () { }, fail: function () { } }); w.onMenuShareTimeline({ title: settings.wx_share_timeline == "" ? settings.wx_share_desc : settings.wx_share_timeline, link: settings.wx_share_link, imgUrl: settings.wx_share_img, trigger: function () { if (!settings.wx_share_link) { alert("分享链接为空"); return } }, success: function (res) { }, cancel: function (res) { }, fail: function (res) { } }); settings.readyfunction() }) }; Jsdk.prototype.ShareMessage = function (options) { for (var i in options) { if (options.hasOwnProperty(i)) { settings[i] = options[i] } } w.onMenuShareAppMessage({ title: settings.wx_share_title, desc: settings.wx_share_desc, link: settings.wx_share_link, imgUrl: settings.wx_share_img, type: 'link', trigger: function () { if (!settings.wx_share_link) { alert("分享链接为空"); return } }, success: function () { }, cancel: function () { }, fail: function () { } }); w.onMenuShareTimeline({ title: settings.wx_share_timeline == "" ? settings.wx_share_desc : settings.wx_share_timeline, link: settings.wx_share_link, imgUrl: settings.wx_share_img, trigger: function () { if (!settings.wx_share_link) { alert("分享链接为空"); return } }, success: function (res) { }, cancel: function (res) { }, fail: function (res) { } }) }; Jsdk.prototype.UploadImage = function (options) { options = options || {}; w.chooseImage({ count: 1, sizeType: ['compressed'], sourceType: ['album', 'camera'], success: function (res) { var localIds = res.localIds; w.uploadImage({ localId: localIds[0], isShowProgressTips: 1, success: function (res2) { var serverId = res2.serverId; options.success && options.success(serverId) }, fail: function () { options.fail && options.fail() } }) } }) }; "function" == typeof define && define.amd ? define(function () { return Jsdk }) : this.wxJsdk = Jsdk }()

