"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockKeyValue = void 0;
var MockKeyValue = /** @class */ (function () {
    function MockKeyValue(key, value, namespace) {
        this.key = key;
        this.value = value;
        this.namespace = namespace;
    }
    MockKeyValue.prototype.getKey = function () {
        return this.key;
    };
    MockKeyValue.prototype.getValue = function () {
        return this.value;
    };
    MockKeyValue.prototype.getNamespace = function () {
        return this.namespace;
    };
    return MockKeyValue;
}());
exports.MockKeyValue = MockKeyValue;
//# sourceMappingURL=mockKeyValue.js.map