"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockKeyModification = void 0;
var MockProtoTimestamp_1 = require("../MockProtoTimestamp");
var MockKeyModification = /** @class */ (function () {
    // tslint:disable-next-line:variable-name
    function MockKeyModification(isDelete, value, txId) {
        this.isDelete = isDelete;
        this.value = value;
        this.txId = txId;
        this.timestamp = new MockProtoTimestamp_1.MockProtoTimestamp();
    }
    MockKeyModification.prototype.getIsDelete = function () {
        return this.isDelete;
    };
    MockKeyModification.prototype.getValue = function () {
        return this.value;
    };
    MockKeyModification.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    MockKeyModification.prototype.getTxId = function () {
        return this.txId;
    };
    return MockKeyModification;
}());
exports.MockKeyModification = MockKeyModification;
//# sourceMappingURL=mockKeyModification.js.map