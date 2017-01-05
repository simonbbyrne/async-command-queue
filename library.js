var Logger = (function (Logger) {
    var _config = {};

    return {
        setConfig: function (config) {
            this._config = config;
            console.log('setting config ', config);
        },
        capture: function (message) {
            console.log('capturing ', message);
        },
        dance: function (message) {
            console.log('dancing ', message);
        }
    }

})(Logger || {});

(function (window, Logger) {
    var _logger = Logger;

    var init = function () {
        var commandQueue = window.library.q || [];

        for (var i = 0; i < commandQueue.length; i++) {
            execute(commandQueue[i]);
        }

    };

    var execute = function (command) {
        var fn = command[0];
        var val = command[1];

        switch (fn) {
            case 'config':
                _logger.setConfig(val);
                break;
            case 'capture':
                _logger.capture(val);
                break;
            case 'dance':
                _logger.dance(val);
                break;
        }
    };

    console.log('Library loaded');
    init();
})(window, Logger);