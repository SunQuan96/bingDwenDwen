// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = ".skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before, .skin *::after{box-sizing: border-box;}\n.bingDwenDwenContainer {\n    position: relative;\n    z-index: 2;\n    width: 400px;\n    height: 456px;\n    left: 150px;\n    top: 10px;\n    border: 10px solid black;\n    background: white;\n    border-radius: 360px 360px 240px 240px;\n\n}\n\n.ear {\n    width: 71px;\n    height: 99px;\n    background-color: black;\n    border-radius: 40px 49px 0 89px;\n    transform: rotate(49deg);   \n    top: 0px;\n    position: absolute;\n}\n.ears {\n    width: 71px;\n    height: 103px;\n    background-color: black;\n    left: 316px;\n    border-radius: 49px 40px 89px 0px;\n    transform: rotate(309deg);\n    top: 0px;\n    position: absolute;\n    \n}\n\n.leftHand {\n    top: 250px;\n    left: -75px;\n    width: 72px;\n    height: 72px;\n    border-radius: 50%;\n    background-color: black;\n    position: absolute;\n}\n\n.leftHand::before {\n  content: '';\n  left: 5px;\n  top: -53px;\n  width: 0;\n  height: 0;\n  border: 35px solid;\n  border-color: transparent black black transparent;\n  position: absolute;\n}\n\n.rightHand {\n    top: 120px;\n    left: 323px;\n    width: 64px;\n    height: 126px;\n    transform: rotate(43deg);\n    transform-origin: bottom right;\n    position: absolute;\n    background-color: black;\n    border-radius: 40px 49px 10px 89px;\n}\n\n.rightHand::before {\n  content: '';\n  left: 30px;\n  top: 30px;\n  width: 14px;\n  height: 25px;\n  border-radius: 8px 8px 0 16px;\n  transform: rotate(19deg);\n  background-color: red;\n  position: absolute;\n}\n\n.rightHand::after {\n  content: '';\n  left: 23px;\n  top: 34px;\n  width: 14px;\n  height: 25px;\n  border-radius: 8px 8px 16px 0;\n  transform: rotate(-71deg);\n  background-color: red;\n  position: absolute;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(8deg);\n    }\n    66%{\n        transform: rotate(-8deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.rightHand:hover{\n    animation: wave 300ms infinite linear;\n}\n\n.feet {\n  width: 82px;\n  height: 75px;\n  background-color: black;\n  top: 435px;\n  left: 95px;\n  border-bottom: 25px solid black;\n  border-radius: 20px 50% 10px 30px;\n  position: absolute;\n}\n\n.feet::before {\n    content: '';\n    width: 82px;\n    height: 75px;\n    background-color:black;\n    left: 130px;\n    border-bottom: 25px solid black;\n    border-radius: 50% 20px 30px 10px;\n    position: absolute;\n  }\n\n\n.face {\n  width: 287px;\n  height: 230px;\n  border-top-left-radius: 50% 60%;\n  border-top-right-radius: 50% 60%;\n  border-bottom-left-radius: 41% 42%;\n  border-bottom-right-radius: 41% 42%;\n  border: 5px solid #006BB0;\n  box-shadow: \n    0 0 0 5px yellow,\n    0 0 0 10px black,\n    0 0 0 15px green,\n    0 0 0 20px red;\n  left: 52px;\n  top: 60px;\n  position: absolute;\n}\n\n\n.eyes {\n  width: 70px;\n  height: 100px;\n  background-color: black;\n  left: 100px;\n  top: 100px;\n  border-radius: 50%;\n  transform: rotate(35deg);\n  position: absolute;\n}\n\n.eyes::before {\n  content: '';\n  width: 70px;\n  height: 100px;\n  background-color: black;\n  left: 110px;\n  top: -75px;\n  border-radius: 50%;\n  transform: rotate(-70deg);\n  position: absolute;\n}\n\n/*\u6211\u7684\u9F3B\u5B50\u4F1A\u52A8\u54DF*/\n.nose {\n  width: 25px;\n  height: 17px;\n  background-color: black;\n  position: absolute;\n  top: 160px;\n  left: 189px;\n  border-radius: 5px 5px 50% 50%;\n}\n.nose:hover{\n    transform-origin: 50% 5%;\n    animation: wave 300ms infinite linear;\n}\n\n.mouth {\n  width: 50px;\n  height: 8px;\n  border: 3px solid black;\n  background-color: red;\n  position: absolute;\n  top: 190px;\n  left: 173px;\n  border-radius: 300px/75px;\n}\n\n\n.iris {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: black;\n  border: 5px solid white;\n  position: absolute;\n  left: 131px;\n  top: 131px;\n  box-shadow: 0 0 0 0 gray;\n}\n\n.iris::before {\n  content: '';\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: black;\n  border: 5px solid white;\n  position: absolute;\n  left: 110px;\n  top: -5px;\n  box-shadow: 0 0 0 -5px cyan;\n}\n\n.highlight {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: white;\n  left: 138px;\n  top: 139px;\n  position: absolute;\n  box-shadow: 120px 0 0 0 white;\n}\n\n/*\u70B9\u51FB\u7231\u5FC3\uFF5E\uFF5E\u5411\u60A8\u62DB\u624B*/\n";
var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 80;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 10;
    player.play();
  }
};
player.init();
},{}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60247" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=test.e98b79dd.js.map