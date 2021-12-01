"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockProtoTimestamp = void 0;
var long_1 = __importDefault(require("long"));
var MockProtoTimestamp = /** @class */ (function () {
    function MockProtoTimestamp() {
        this.seconds = new long_1.default(Math.floor(Date.now() / 1000));
    }
    MockProtoTimestamp.prototype.getSeconds = function () {
        return this.seconds;
    };
    MockProtoTimestamp.prototype.toDate = function () {
        return new Date((this.seconds).toString());
    };
    return MockProtoTimestamp;
}());
exports.MockProtoTimestamp = MockProtoTimestamp;
//# sourceMappingURL=MockProtoTimestamp.js.map