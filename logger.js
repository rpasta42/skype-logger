// ==UserScript==
// @name         SkypeLogger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://code.jquery.com/jquery-latest.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @match        https://web.skype.com/en*
// @include      https://web.skype.com/en
// ==/UserScript==


function run() {
    var swxContainer = $('swx-chat-log'); //$('swx-chat-log .conversation .history .messageHistory');

    var messages = swxContainer.find('swx-message');
    /*$(messages).each(function(msg_div) {
        //var msg = $(msg_div);
        console.log($(msg_div).find('.bubble > .timestamp > p').attr('title'));

        //alert($(x));

    });*/
    messages.find('.bubble > .timestamp > p').each(function() {
        var msg_timestamp = $(this).attr('title');
        var msg_date_label = $(this).attr('id');

    });
    messages.find('swx-name > span > span > h4').each(function() {
        var name = $(this).html();
        console.log(name);
    });

    messages.find('.content > p').each(function() {
        console.log($(this).html());
    });
}


(function() {
    'use strict';

    $(function() {
        setTimeout(function() {
            run();
        }, 5000);
    });
    // Your code here...
})();
