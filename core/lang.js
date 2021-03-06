/**
 * lang.js
 *
 * Provide a language API
 * Use the $.lang API
 *
 * NOTE: Reading from/writing to the lang data directly is not possbile anymore!
 * Use the register(), exists() and get() functions!
 */
(function() {
    var data = [],
        curLang = ($.inidb.exists('settings', 'lang') ? $.inidb.get('settings', 'lang') : 'english');

    /**
     * @function load
     */
    function load() {
        $.bot.loadScriptRecursive('./lang/english', true);
        if (curLang != 'english') {
            $.bot.loadScriptRecursive('./lang/' + curLang, true);
        }

        // Set "response_@chat" to true if it hasn't been set yet, so the bot isn't muted when using a fresh install
        if (!$.inidb.exists('settings', 'response_@chat')) {
            $.setIniDbBoolean('settings', 'response_@chat', true);
        }
    }

    /**
     * @function register
     * @export $.lang
     * @param {string} key
     * @param {string} string
     */
    function register(key, string) {
        if (key && string) {
            data[key] = string;
        }
    }

    /**
     * @function get
     * @export $.lang
     * @param {string} key
     * @returns {string}
     */
    function get(key) {
        var string = data[key.toLowerCase()],
            i;
        if (!string) {
            $.logError('./core/lang.js', 21, 'Language string missing for "' + key + '"');
            $.consoleLn('[lang.js] Missing string "' + key + '"');
            return 'Could not find string for "' + key + '"';
        }
        for (i = 1; i < arguments.length; i++) {
            while (string.indexOf("$" + i) >= 0) {
                string = string.replace("$" + i, arguments[i]);
            }
        }
        return string;
    }

    /**
     * @function exists
     * @export $.lang
     * @param {string} key
     * @returns {boolean}
     */
    function exists(key) {
        return (data[key]);
    }

    /**
     * @event command
     */
    $.bind('command', function(event) {
        var sender = event.getSender().toLowerCase(),
            command = event.getCommand(),
            args = event.getArgs(),
            action = args[0],
            inversedState;

        /**
         * @commandpath lang [language name] - Get or optionally set the current language (use folder name from "./lang" directory); - Administrator
         */
        if (command.equalsIgnoreCase('lang')) {
            if (!$.isAdmin(sender)) {
                //$.say($.whisperPrefix(sender) + $.adminMsg);
                return;
            }

            if (!action) {
                $.say($.whisperPrefix(sender) + get('lang.curlang', curLang));
            } else {
                action = action.toLowerCase();
                if (!$.fileExists('./scripts/lang/' + action + '/main.js')) {
                    $.say($.whisperPrefix(sender) + get('lang.lang.404'));
                } else {
                    $.inidb.set('settings', 'lang', action);
                    curLang = action;
                    load();
                    $.say($.whisperPrefix(sender) + get('lang.lang.changed', action));
                }
            }
        }

        /**
         * @commandpath mute - Toggle muting the bot in the chat - Administrator
         */
        if (command.equalsIgnoreCase('mute')) {
            inversedState = !$.getIniDbBoolean('settings', 'response_@chat');

            $.setIniDbBoolean('settings', 'response_@chat', inversedState);
            $.say($.whisperPrefix(sender) + (inversedState ? get('lang.response.enabled') : get('lang.response.disabled')));
        }

        /**
         * @commandpath toggleme - Toggle prepending chat output with "/me". - Administrator
         */
        if (command.equalsIgnoreCase('toggleme')) {
            inversedState = !$.getIniDbBoolean('settings', 'response_action');

            $.setIniDbBoolean('settings', 'response_action', inversedState);
            $.say($.whisperPrefix(sender) + (inversedState ? get('lang.response.action.enabled') : get('lang.response.action.disabled')));
        }
    });

    /**
     * @event initReady
     */
    $.bind('initReady', function() {
        if ($.bot.isModuleEnabled('./core/lang.js')) {
            $.registerChatCommand('./core/lang.js', 'lang', 1);
            $.registerChatCommand('./core/lang.js', 'mute', 1);
            $.registerChatCommand('./core/lang.js', 'toggleme', 1);
        }
    });

    /** Export functions to API */
    $.lang = {
        exists: exists,
        get: get,
        register: register,
    };

    // Run the load function to enable modules, loaded after lang.js, to access the language strings immediatly
    load();
})();