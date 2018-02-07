import { Component } from 'preact';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var callAll = function () {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.forEach(function (fn) {
      return fn && fn.apply(undefined, args);
    });
  };
};

var Toggle = function (_Component) {
  inherits(Toggle, _Component);

  function Toggle() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Toggle);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      on: _this.getOn({ on: _this.props.defaultOn })
    }, _this.getTogglerProps = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _extends({
        'aria-expanded': Boolean(_this.getOn()),
        tabIndex: 0
      }, props, {
        onClick: callAll(props.onClick, _this.toggle)
      });
    }, _this.toggleKeys = ['Enter', ' '], _this.getInputTogglerProps = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _this.getTogglerProps(_extends({}, props, {
        onKeyUp: callAll(props.onKeyUp, function (event) {
          if (event.key === 'Enter') {
            // <input> already respond to Enter
            _this.toggle();
          }
        })
      }));
    }, _this.getElementTogglerProps = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _this.getTogglerProps(_extends({}, props, {
        onKeyUp: callAll(props.onKeyUp, function (event) {
          if (_this.toggleKeys.indexOf(event.key) > -1) {
            _this.toggle();
          }
        })
      }));
    }, _this.setOnState = function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.getOn();

      if (_this.isOnControlled()) {
        _this.props.onToggle(state, _this.getTogglerStateAndHelpers());
      } else {
        _this.setState({ on: state }, function () {
          _this.props.onToggle(_this.getOn(), _this.getTogglerStateAndHelpers());
        });
      }
    }, _this.setOn = _this.setOnState.bind(_this, true), _this.setOff = _this.setOnState.bind(_this, false), _this.toggle = _this.setOnState.bind(_this, undefined), _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Toggle, [{
    key: 'getOn',
    value: function getOn() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

      return this.isOnControlled() ? this.props.on : state.on;
    }
  }, {
    key: 'isOnControlled',
    value: function isOnControlled() {
      return this.props.on !== undefined;
    } // This matches <button> behavior

  }, {
    key: 'getTogglerStateAndHelpers',
    value: function getTogglerStateAndHelpers() {
      return {
        on: this.getOn(),
        getTogglerProps: this.getTogglerProps,
        getInputTogglerProps: this.getInputTogglerProps,
        getElementTogglerProps: this.getElementTogglerProps,
        setOn: this.setOn,
        setOff: this.setOff,
        toggle: this.toggle
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var renderProp = unwrapArray(this.props.children);
      return renderProp(this.getTogglerStateAndHelpers());
    }
  }]);
  return Toggle;
}(Component);

/**
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @return {*} the arg or it's first item
 */


Toggle.defaultProps = {
  defaultOn: false,
  onToggle: function onToggle() {}
};
function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
}

export default Toggle;