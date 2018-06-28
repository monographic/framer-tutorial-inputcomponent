require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"InputComponent":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.InputComponent = (function(superClass) {
  extend(InputComponent, superClass);

  function InputComponent(options) {
    this.options = options != null ? options : {};
    this.isFocus = false;
    InputComponent.__super__.constructor.call(this, _.defaults(this.options, {
      width: 360,
      height: 76,
      backgroundColor: "#fff",
      inputLabel: "Label"
    }));
    this.label = new TextLayer({
      parent: this,
      text: this.options.inputLabel,
      fontSize: 16,
      lineHeight: 1.25,
      y: 18
    });
    this.label.states = {
      basic: {
        fontSize: 16,
        y: 18
      },
      active: {
        fontSize: 12,
        y: 0
      }
    };
    this.line = new Layer({
      parent: this,
      width: this.width,
      height: 2,
      y: 54,
      backgroundColor: "#808080",
      opacity: 0.5
    });
    this.line.states = {
      basic: {
        backgroundColor: "#808080",
        opacity: 0.5
      },
      hover: {
        backgroundColor: "#000000",
        opacity: 1
      },
      active: {
        backgroundColor: "#000000",
        opacity: 1
      },
      error: {
        backgroundColor: "#bf3048"
      }
    };
    this.inputField = document.createElement("input");
    this.inputField.style["width"] = this.width + 'px';
    this.inputField.style["height"] = "56px";
    this.inputField.style["color"] = "#000000";
    this.inputField.style["font-size"] = "16px";
    this.inputField.style["background-color"] = "rgba(0,0,0,0)";
    this.inputField.style["outline"] = "none";
    this.inputField.value = "";
    this._element.appendChild(this.inputField);
    this.onMouseOver(function() {
      return this.line.animate("hover");
    });
    this.onMouseOut(function() {
      if (!this.isFocus) {
        return this.line.animate("basic");
      }
    });
    this.inputField.onfocus = (function(_this) {
      return function() {
        _this.isFocus = true;
        _this.line.animate("active");
        return _this.label.animate("active");
      };
    })(this);
    this.inputField.onblur = (function(_this) {
      return function() {
        _this.isFocus = false;
        _this.line.animate("basic");
        if (_this.inputField.value === "") {
          return _this.label.animate("basic");
        }
      };
    })(this);
  }

  return InputComponent;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3BhdmVsY2hlbHl1c2tpbi9Ecm9wYm94IChQZXJzb25hbCkvTW5ncnBoYyAyLjAvRnJhbWVyIFR1dG9yaWFscy8wMiBJbnB1dENvbXBvbmVudC9GcmFtZXItVHV0b3JpYWwtSW5wdXRDb21wb25lbnQuZnJhbWVyL21vZHVsZXMvSW5wdXRDb21wb25lbnQuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBleHBvcnRzLklucHV0Q29tcG9uZW50IGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuXHRcdCMgREVGQVVMVFNcblx0XHRcblx0XHRAaXNGb2N1cyA9IGZhbHNlXG5cdFx0XG5cdFx0c3VwZXIgXy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdHdpZHRoOiAzNjBcblx0XHRcdGhlaWdodDogNzZcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcblx0XHRcdGlucHV0TGFiZWw6IFwiTGFiZWxcIlxuXG5cdFx0IyBMQVlFUlNcblx0XHRcblx0XHQjIExhYmVsXG5cdFx0QGxhYmVsID0gbmV3IFRleHRMYXllclxuXHRcdFx0cGFyZW50OiBAXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5pbnB1dExhYmVsXG5cdFx0XHRmb250U2l6ZTogMTZcblx0XHRcdGxpbmVIZWlnaHQ6IDEuMjVcblx0XHRcdHk6IDE4XG5cdFx0QGxhYmVsLnN0YXRlcyA9XG5cdFx0XHRiYXNpYzpcblx0XHRcdFx0Zm9udFNpemU6IDE2XG5cdFx0XHRcdHk6IDE4XG5cdFx0XHRhY3RpdmU6XG5cdFx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0XHR5OiAwXG5cdFx0XHRcdFxuXHRcdCMgTGluZVxuXHRcdEBsaW5lID0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdHdpZHRoOiBALndpZHRoXG5cdFx0XHRoZWlnaHQ6IDJcblx0XHRcdHk6IDU0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzgwODA4MFwiXG5cdFx0XHRvcGFjaXR5OiAwLjVcblx0XHRAbGluZS5zdGF0ZXMgPVxuXHRcdFx0YmFzaWM6XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjODA4MDgwXCJcblx0XHRcdFx0b3BhY2l0eTogMC41XG5cdFx0XHRob3Zlcjpcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIlxuXHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRhY3RpdmU6XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCJcblx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0ZXJyb3I6XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjYmYzMDQ4XCJcblx0XHRcdFx0XG5cdFx0IyBUZXh0IGlucHV0XG5cdFx0QGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcblx0XHRAaW5wdXRGaWVsZC5zdHlsZVtcIndpZHRoXCJdID0gQC53aWR0aCArICdweCdcblx0XHRAaW5wdXRGaWVsZC5zdHlsZVtcImhlaWdodFwiXSA9IFwiNTZweFwiXG5cdFx0QGlucHV0RmllbGQuc3R5bGVbXCJjb2xvclwiXSA9IFwiIzAwMDAwMFwiXG5cdFx0QGlucHV0RmllbGQuc3R5bGVbXCJmb250LXNpemVcIl0gPSBcIjE2cHhcIlxuXHRcdEBpbnB1dEZpZWxkLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwicmdiYSgwLDAsMCwwKVwiXG5cdFx0QGlucHV0RmllbGQuc3R5bGVbXCJvdXRsaW5lXCJdID0gXCJub25lXCJcblx0XHRAaW5wdXRGaWVsZC52YWx1ZSA9IFwiXCJcblx0XHRALl9lbGVtZW50LmFwcGVuZENoaWxkKEBpbnB1dEZpZWxkKVxuXHRcdFxuXHRcdCMgRVZFTlRTXG5cdFx0QC5vbk1vdXNlT3ZlciAoKSAtPlxuXHRcdFx0QGxpbmUuYW5pbWF0ZShcImhvdmVyXCIpXG5cdFx0QC5vbk1vdXNlT3V0ICgpIC0+XG5cdFx0XHRpZiAhQGlzRm9jdXNcblx0XHRcdFx0QGxpbmUuYW5pbWF0ZShcImJhc2ljXCIpXG5cdFx0XG5cdFx0QGlucHV0RmllbGQub25mb2N1cyA9ID0+XG5cdFx0XHRAaXNGb2N1cyA9IHRydWVcblx0XHRcdEBsaW5lLmFuaW1hdGUoXCJhY3RpdmVcIilcblx0XHRcdEBsYWJlbC5hbmltYXRlKFwiYWN0aXZlXCIpXG5cdFx0QGlucHV0RmllbGQub25ibHVyID0gPT5cblx0XHRcdEBpc0ZvY3VzID0gZmFsc2Vcblx0XHRcdEBsaW5lLmFuaW1hdGUoXCJiYXNpY1wiKVxuXHRcdFx0aWYgQGlucHV0RmllbGQudmFsdWUgPT0gXCJcIlxuXHRcdFx0XHRAbGFiZWwuYW5pbWF0ZShcImJhc2ljXCIpIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUE7QURBQSxJQUFBOzs7QUFBTSxPQUFPLENB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
