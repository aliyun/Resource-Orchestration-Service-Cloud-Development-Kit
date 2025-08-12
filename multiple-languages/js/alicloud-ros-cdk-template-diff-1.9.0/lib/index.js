"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepEqual = void 0;
__exportStar(require("./diff-template"), exports);
__exportStar(require("./format"), exports);
__exportStar(require("./format-table"), exports);
var util_1 = require("./diff/util");
Object.defineProperty(exports, "deepEqual", { enumerable: true, get: function () { return util_1.deepEqual; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFnQztBQUNoQywyQ0FBeUI7QUFDekIsaURBQStCO0FBQy9CLG9DQUF3QztBQUEvQixpR0FBQSxTQUFTLE9BQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2RpZmYtdGVtcGxhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtYXQtdGFibGUnO1xuZXhwb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi9kaWZmL3V0aWwnO1xuIl19