"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car() {
        this.description = '';
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
exports.Car = Car;
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super.call(this) || this;
        _this.description = "Tesla Model S";
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 50000;
    };
    return ModelS;
}(Car));
exports.ModelS = ModelS;
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super.call(this) || this;
        _this.description = "Tesla Model X";
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 90000;
    };
    return ModelX;
}(Car));
exports.ModelX = ModelX;
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
exports.CarOptions = CarOptions;
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', autopilot';
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 50;
    };
    return EnhancedAutoPilot;
}(CarOptions));
exports.EnhancedAutoPilot = EnhancedAutoPilot;
