(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Subject'), require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Subject', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['ng2-signalr'] = global.ng['ng2-signalr'] || {}),global.rxjs_Subject,global.ng.core));
}(this, (function (exports,rxjs_Subject,_angular_core) { 'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BroadcastEventListener = (function (_super) {
    __extends(BroadcastEventListener, _super);
    function BroadcastEventListener(event) {
        var _this = _super.call(this) || this;
        _this.event = event;
        if (event == null || event === '') {
            throw new Error('Failed to create BroadcastEventListener. Argument \'event\' can not be empty');
        }
        return _this;
    }
    return BroadcastEventListener;
}(rxjs_Subject.Subject));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

var SignalRConnectionMock = (function () {
    function SignalRConnectionMock(_mockErrors$, _mockStatus$, _listeners) {
        this._mockErrors$ = _mockErrors$;
        this._mockStatus$ = _mockStatus$;
        this._listeners = _listeners;
    }
    Object.defineProperty(SignalRConnectionMock.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mockErrors$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRConnectionMock.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mockStatus$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRConnectionMock.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return 'xxxxxxxx-xxxx-xxxx-xxxxxxxxx';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SignalRConnectionMock.prototype.stop = /**
     * @return {?}
     */
    function () {
        //
    };
    /**
     * @return {?}
     */
    SignalRConnectionMock.prototype.start = /**
     * @return {?}
     */
    function () {
        return Promise.resolve(null); // TODO: implement
    };
    /**
     * @param {?} method
     * @param {...?} parameters
     * @return {?}
     */
    SignalRConnectionMock.prototype.invoke = /**
     * @param {?} method
     * @param {...?} parameters
     * @return {?}
     */
    function (method) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        return Promise.resolve(null);
    };
    /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    SignalRConnectionMock.prototype.listen = /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        this._listeners[listener.event] = listener;
    };
    /**
     * @template T
     * @param {?} event
     * @return {?}
     */
    SignalRConnectionMock.prototype.listenFor = /**
     * @template T
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ listener = new BroadcastEventListener(event);
        this.listen(listener);
        return listener;
    };
    return SignalRConnectionMock;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SignalRConnectionMockManager = (function () {
    function SignalRConnectionMockManager() {
        this._errors$ = new rxjs_Subject.Subject();
        this._status$ = new rxjs_Subject.Subject();
        this._listeners = {};
        this._object = new SignalRConnectionMock(this._errors$, this._status$, this._listeners);
    }
    Object.defineProperty(SignalRConnectionMockManager.prototype, "mock", {
        get: /**
         * @return {?}
         */
        function () {
            return this._object;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRConnectionMockManager.prototype, "errors$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._errors$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRConnectionMockManager.prototype, "status$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRConnectionMockManager.prototype, "listeners", {
        get: /**
         * @return {?}
         */
        function () {
            return this._listeners;
        },
        enumerable: true,
        configurable: true
    });
    return SignalRConnectionMockManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConnectionStatus = (function () {
    function ConnectionStatus(value) {
        if (value == null || value < 0) {
            throw new Error("Failed to create ConnectionStatus. Argument 'name' can not be null or empty.");
        }
        this._value = value;
    }
    Object.defineProperty(ConnectionStatus.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionStatus.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionStatus.names[Number.parseInt(this._value.toString())];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ConnectionStatus.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.name;
    };
    /**
     * @param {?} other
     * @return {?}
     */
    ConnectionStatus.prototype.equals = /**
     * @param {?} other
     * @return {?}
     */
    function (other) {
        if (other == null) {
            return false;
        }
        return this._value === other.value;
    };
    ConnectionStatus.names = ['connecting', 'connected', 'reconnecting', '', 'disconnected'];
    return ConnectionStatus;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConnectionStatuses = (function () {
    function ConnectionStatuses() {
    }
    Object.defineProperty(ConnectionStatuses, "connecting", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionStatuses.statuses[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionStatuses, "connected", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionStatuses.statuses[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionStatuses, "reconnecting", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionStatuses.statuses[2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionStatuses, "disconnected", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionStatuses.statuses[3];
        },
        enumerable: true,
        configurable: true
    });
    ConnectionStatuses.statuses = [
        new ConnectionStatus(0),
        new ConnectionStatus(1),
        new ConnectionStatus(2),
        new ConnectionStatus(4)
    ];
    return ConnectionStatuses;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SignalRConnection = (function () {
    function SignalRConnection(jConnection, jProxy, zone, configuration) {
        this._jProxy = jProxy;
        this._jConnection = jConnection;
        this._zone = zone;
        this._errors = this.wireUpErrorsAsObservable();
        this._status = this.wireUpStatusEventsAsObservable();
        this._configuration = configuration;
    }
    Object.defineProperty(SignalRConnection.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            return this._errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRConnection.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SignalRConnection.prototype.start = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ jTransports = this.convertTransports(this._configuration.transport);
        var /** @type {?} */ $promise = new Promise(function (resolve, reject) {
            _this._jConnection
                .start({
                jsonp: _this._configuration.jsonp,
                pingInterval: _this._configuration.pingInterval,
                transport: jTransports,
                withCredentials: _this._configuration.withCredentials,
            })
                .done(function () {
                console.log('Connection established, ID: ' + _this._jConnection.id);
                console.log('Connection established, Transport: ' + _this._jConnection.transport.name);
                resolve(_this);
            })
                .fail(function (error) {
                console.log('Could not connect');
                reject('Failed to connect. Error: ' + error.message); // ex: Error during negotiation request.
            });
        });
        return $promise;
    };
    /**
     * @return {?}
     */
    SignalRConnection.prototype.stop = /**
     * @return {?}
     */
    function () {
        this._jConnection.stop();
    };
    Object.defineProperty(SignalRConnection.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jConnection.id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} method
     * @param {...?} parameters
     * @return {?}
     */
    SignalRConnection.prototype.invoke = /**
     * @param {?} method
     * @param {...?} parameters
     * @return {?}
     */
    function (method) {
        var _this = this;
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        if (method == null) {
            throw new Error('SignalRConnection: Failed to invoke. Argument \'method\' can not be null');
        }
        this.log("SignalRConnection. Start invoking '" + method + "'...");
        var /** @type {?} */ $promise = new Promise(function (resolve, reject) {
            (_a = _this._jProxy).invoke.apply(_a, [method].concat(parameters)).done(function (result) {
                _this.log("'" + method + "' invoked succesfully. Resolving promise...");
                resolve(result);
                _this.log("Promise resolved.");
            })
                .fail(function (err) {
                console.log("Invoking '" + method + "' failed. Rejecting promise...");
                reject(err);
                console.log("Promise rejected.");
            });
            var _a;
        });
        return $promise;
    };
    /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    SignalRConnection.prototype.listen = /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        var _this = this;
        if (listener == null) {
            throw new Error('Failed to listen. Argument \'listener\' can not be null');
        }
        this.log("SignalRConnection: Starting to listen to server event with name " + listener.event);
        this._jProxy.on(listener.event, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.run(function () {
                var /** @type {?} */ casted = null;
                if (args.length > 0) {
                    casted = /** @type {?} */ (args[0]);
                }
                _this.log('SignalRConnection.proxy.on invoked. Calling listener next() ...');
                listener.next(casted);
                _this.log('listener next() called.');
            }, _this._configuration.executeEventsInZone);
        });
    };
    /**
     * @template T
     * @param {?} event
     * @return {?}
     */
    SignalRConnection.prototype.listenFor = /**
     * @template T
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event == null || event === '') {
            throw new Error('Failed to listen. Argument \'event\' can not be empty');
        }
        var /** @type {?} */ listener = new BroadcastEventListener(event);
        this.listen(listener);
        return listener;
    };
    /**
     * @param {?} transports
     * @return {?}
     */
    SignalRConnection.prototype.convertTransports = /**
     * @param {?} transports
     * @return {?}
     */
    function (transports) {
        if (transports instanceof Array) {
            return transports.map(function (t) { return t.name; });
        }
        return transports.name;
    };
    /**
     * @return {?}
     */
    SignalRConnection.prototype.wireUpErrorsAsObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ sError = new rxjs_Subject.Subject();
        this._jConnection.error(function (error) {
            _this.run(function () { return sError.next(error); }, _this._configuration.executeErrorsInZone);
        });
        return sError;
    };
    /**
     * @return {?}
     */
    SignalRConnection.prototype.wireUpStatusEventsAsObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ sStatus = new rxjs_Subject.Subject();
        // aggregate all signalr connection status handlers into 1 observable.
        // handler wire up, for signalr connection status callback.
        this._jConnection.stateChanged(function (change) {
            _this.run(function () { return sStatus.next(new ConnectionStatus(change.newState)); }, _this._configuration.executeStatusChangeInZone);
        });
        return sStatus.asObservable();
    };
    /**
     * @template T
     * @param {?} listener
     * @param {...?} args
     * @return {?}
     */
    SignalRConnection.prototype.onBroadcastEventReceived = /**
     * @template T
     * @param {?} listener
     * @param {...?} args
     * @return {?}
     */
    function (listener) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.log('SignalRConnection.proxy.on invoked. Calling listener next() ...');
        var /** @type {?} */ casted = null;
        if (args.length > 0) {
            casted = /** @type {?} */ (args[0]);
        }
        this.run(function () {
            listener.next(casted);
        }, this._configuration.executeEventsInZone);
        this.log('listener next() called.');
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    SignalRConnection.prototype.log = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._jConnection.logging === false) {
            return;
        }
        console.log(args.join(', '));
    };
    /**
     * @param {?} func
     * @param {?} inZone
     * @return {?}
     */
    SignalRConnection.prototype.run = /**
     * @param {?} func
     * @param {?} inZone
     * @return {?}
     */
    function (func, inZone) {
        if (inZone) {
            this._zone.run(function () { return func(); });
        }
        else {
            this._zone.runOutsideAngular(function () { return func(); });
        }
    };
    return SignalRConnection;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConnectionTransport = (function () {
    function ConnectionTransport(name) {
        if (name == null || name === "") {
            throw new Error("Failed to create ConnectionTransport. Argument 'name' can not be null or empty.");
        }
        this._name = name;
    }
    Object.defineProperty(ConnectionTransport.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ConnectionTransport.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this._name;
    };
    /**
     * @param {?} other
     * @return {?}
     */
    ConnectionTransport.prototype.equals = /**
     * @param {?} other
     * @return {?}
     */
    function (other) {
        if (other == null) {
            return false;
        }
        return this._name === other.name;
    };
    return ConnectionTransport;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConnectionTransports = (function () {
    function ConnectionTransports() {
    }
    Object.defineProperty(ConnectionTransports, "foreverFrame", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionTransports, "longPolling", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionTransports, "serverSentEvents", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionTransports, "webSockets", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[3];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionTransports, "auto", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[4];
        },
        enumerable: true,
        configurable: true
    });
    ConnectionTransports.transports = [
        new ConnectionTransport("foreverFrame"),
        new ConnectionTransport("longPolling"),
        new ConnectionTransport("serverSentEvents"),
        new ConnectionTransport("webSockets"),
        new ConnectionTransport("auto"),
    ];
    return ConnectionTransports;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SignalRConfiguration = (function () {
    function SignalRConfiguration() {
        this.hubName = null;
        this.logging = false;
        this.qs = null;
        this.url = null;
        this.jsonp = false;
        this.withCredentials = false;
        this.transport = ConnectionTransports.auto;
        this.executeEventsInZone = true;
        this.executeErrorsInZone = false;
        this.executeStatusChangeInZone = true;
        this.pingInterval = 300000;
    }
    return SignalRConfiguration;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SIGNALR_CONFIGURATION = new _angular_core.InjectionToken('SIGNALR_CONFIGURATION');
var SIGNALR_JCONNECTION_TOKEN = new _angular_core.InjectionToken('SIGNALR_JCONNECTION_TOKEN');
/**
 * @param {?} configuration
 * @param {?} zone
 * @return {?}
 */

/**
 * @return {?}
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SignalR = (function () {
    function SignalR(configuration, zone, jHubConnectionFn) {
        this._configuration = configuration;
        this._zone = zone;
        this._jHubConnectionFn = jHubConnectionFn;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    SignalR.prototype.createConnection = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var /** @type {?} */ status;
        var /** @type {?} */ configuration = this.merge(options ? options : {});
        this.logConfiguration(configuration);
        // create connection object
        var /** @type {?} */ jConnection = this._jHubConnectionFn(configuration.url);
        jConnection.logging = configuration.logging;
        jConnection.qs = configuration.qs;
        // create a proxy
        var /** @type {?} */ jProxy = jConnection.createHubProxy(configuration.hubName);
        // !!! important. We need to register at least one function otherwise server callbacks will not work.
        jProxy.on('noOp', function () {
            /* */ 
        });
        var /** @type {?} */ hubConnection = new SignalRConnection(jConnection, jProxy, this._zone, configuration);
        return hubConnection;
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    SignalR.prototype.connect = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this.createConnection(options).start();
    };
    /**
     * @param {?} configuration
     * @return {?}
     */
    SignalR.prototype.logConfiguration = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        try {
            var /** @type {?} */ serializedQs = JSON.stringify(configuration.qs);
            var /** @type {?} */ serializedTransport = JSON.stringify(configuration.transport);
            if (configuration.logging) {
                console.log("Creating connecting with...");
                console.log("configuration:[url: '" + configuration.url + "'] ...");
                console.log("configuration:[hubName: '" + configuration.hubName + "'] ...");
                console.log("configuration:[qs: '" + serializedQs + "'] ...");
                console.log("configuration:[transport: '" + serializedTransport + "'] ...");
            }
        }
        catch (/** @type {?} */ err) {
            /* */ 
        }
    };
    /**
     * @param {?} overrides
     * @return {?}
     */
    SignalR.prototype.merge = /**
     * @param {?} overrides
     * @return {?}
     */
    function (overrides) {
        var /** @type {?} */ merged = new SignalRConfiguration();
        merged.hubName = overrides.hubName || this._configuration.hubName;
        merged.url = overrides.url || this._configuration.url;
        merged.qs = overrides.qs || this._configuration.qs;
        merged.logging = this._configuration.logging;
        merged.jsonp = overrides.jsonp || this._configuration.jsonp;
        merged.withCredentials = overrides.withCredentials || this._configuration.withCredentials;
        merged.transport = overrides.transport || this._configuration.transport;
        merged.executeEventsInZone = overrides.executeEventsInZone || this._configuration.executeEventsInZone;
        merged.executeErrorsInZone = overrides.executeErrorsInZone || this._configuration.executeErrorsInZone;
        merged.executeStatusChangeInZone = overrides.executeStatusChangeInZone || this._configuration.executeStatusChangeInZone;
        merged.pingInterval = overrides.pingInterval || this._configuration.pingInterval;
        return merged;
    };
    SignalR.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    SignalR.ctorParameters = function () { return [
        { type: SignalRConfiguration, },
        { type: _angular_core.NgZone, },
        { type: Function, decorators: [{ type: _angular_core.Inject, args: [SIGNALR_JCONNECTION_TOKEN,] },] },
    ]; };
    return SignalR;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SIGNALR_CONFIGURATION$1 = new _angular_core.InjectionToken('SIGNALR_CONFIGURATION');
/**
 * @param {?} configuration
 * @param {?} zone
 * @return {?}
 */
function createSignalr$1(configuration, zone) {
    var /** @type {?} */ jConnectionFn = getJConnectionFn$1();
    return new SignalR(configuration, zone, jConnectionFn);
}
/**
 * @return {?}
 */
function getJConnectionFn$1() {
    var /** @type {?} */ jQuery = getJquery$1();
    var /** @type {?} */ hubConnectionFn = (/** @type {?} */ (window)).jQuery.hubConnection;
    if (hubConnectionFn == null) {
        throw new Error('Signalr failed to initialize. Script \'jquery.signalR.js\' is missing. Please make sure to include \'jquery.signalR.js\' script.');
    }
    return hubConnectionFn;
}
/**
 * @return {?}
 */
function getJquery$1() {
    var /** @type {?} */ jQuery = (/** @type {?} */ (window)).jQuery;
    if (jQuery == null) {
        throw new Error('Signalr failed to initialize. Script \'jquery.js\' is missing. Please make sure to include jquery script.');
    }
    return jQuery;
}
var ɵ0$1 = SignalR;
var SignalRModule$1 = (function () {
    function SignalRModule() {
    }
    /**
     * @param {?} getSignalRConfiguration
     * @return {?}
     */
    SignalRModule.forRoot = /**
     * @param {?} getSignalRConfiguration
     * @return {?}
     */
    function (getSignalRConfiguration) {
        return {
            ngModule: SignalRModule,
            providers: [
                {
                    provide: SIGNALR_CONFIGURATION$1,
                    useFactory: getSignalRConfiguration
                },
                {
                    deps: [SIGNALR_CONFIGURATION$1, _angular_core.NgZone],
                    provide: SignalR,
                    useFactory: (createSignalr$1)
                }
            ],
        };
    };
    /**
     * @return {?}
     */
    SignalRModule.forChild = /**
     * @return {?}
     */
    function () {
        throw new Error("forChild method not implemented");
    };
    SignalRModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [{
                            provide: SignalR,
                            useValue: ɵ0$1
                        }]
                },] },
    ];
    /** @nocollapse */
    SignalRModule.ctorParameters = function () { return []; };
    return SignalRModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Angular library starter.
 * Build a library compatible with Angular, AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/ng2-signalr
 */
/**
 * Entry point for all public APIs of the package.
 */

exports.SignalRConnectionMock = SignalRConnectionMock;
exports.SignalRConnectionMockManager = SignalRConnectionMockManager;
exports.ConnectionStatus = ConnectionStatus;
exports.ConnectionStatuses = ConnectionStatuses;
exports.BroadcastEventListener = BroadcastEventListener;
exports.SignalRConnection = SignalRConnection;
exports.ConnectionTransport = ConnectionTransport;
exports.ConnectionTransports = ConnectionTransports;
exports.SignalR = SignalR;
exports.SignalRConfiguration = SignalRConfiguration;
exports.SignalRModule = SignalRModule$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
