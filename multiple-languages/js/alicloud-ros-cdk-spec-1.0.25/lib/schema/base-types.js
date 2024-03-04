"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrimitiveType = exports.PrimitiveType = void 0;
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType["String"] = "String";
    PrimitiveType["Long"] = "Long";
    PrimitiveType["Integer"] = "Integer";
    PrimitiveType["Number"] = "Number";
    PrimitiveType["Double"] = "Double";
    PrimitiveType["Boolean"] = "Boolean";
    PrimitiveType["Timestamp"] = "Timestamp";
    PrimitiveType["Json"] = "Json";
    PrimitiveType["Any"] = "Any";
    PrimitiveType["AnyDict"] = "AnyDict";
})(PrimitiveType = exports.PrimitiveType || (exports.PrimitiveType = {}));
function isPrimitiveType(str) {
    switch (str) {
        case PrimitiveType.String:
        case PrimitiveType.Long:
        case PrimitiveType.Integer:
        case PrimitiveType.Double:
        case PrimitiveType.Boolean:
        case PrimitiveType.Timestamp:
        case PrimitiveType.Json:
        case PrimitiveType.Any:
        case PrimitiveType.Number:
        case PrimitiveType.AnyDict:
            return true;
        default:
            return false;
    }
}
exports.isPrimitiveType = isPrimitiveType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UtdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0EsSUFBWSxhQVdYO0FBWEQsV0FBWSxhQUFhO0lBQ3ZCLGtDQUFpQixDQUFBO0lBQ2pCLDhCQUFhLENBQUE7SUFDYixvQ0FBbUIsQ0FBQTtJQUNuQixrQ0FBaUIsQ0FBQTtJQUNqQixrQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBbUIsQ0FBQTtJQUNuQix3Q0FBdUIsQ0FBQTtJQUN2Qiw4QkFBYSxDQUFBO0lBQ2IsNEJBQVcsQ0FBQTtJQUNYLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFYVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQVd4QjtBQUVELFNBQWdCLGVBQWUsQ0FBQyxHQUFXO0lBQ3pDLFFBQVEsR0FBRyxFQUFFO1FBQ1gsS0FBSyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzFCLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQztRQUN4QixLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDM0IsS0FBSyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzFCLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQixLQUFLLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDN0IsS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEtBQUssYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUN2QixLQUFLLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDMUIsS0FBSyxhQUFhLENBQUMsT0FBTztZQUN4QixPQUFPLElBQUksQ0FBQztRQUNkO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBaEJELDBDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRlZCB7XG4gIC8qKiBBIGxpbmsgdG8gdGhlIFJPUyBVc2VyIEd1aWRlIHRoYXQgcHJvdmlkZXMgaW5mb3JtYXRpb25zIGFib3V0IHRoZSBlbnRpdHkuICovXG4gIERvY3VtZW50YXRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFByaW1pdGl2ZVR5cGUge1xuICBTdHJpbmcgPSAnU3RyaW5nJyxcbiAgTG9uZyA9ICdMb25nJyxcbiAgSW50ZWdlciA9ICdJbnRlZ2VyJyxcbiAgTnVtYmVyID0gJ051bWJlcicsXG4gIERvdWJsZSA9ICdEb3VibGUnLFxuICBCb29sZWFuID0gJ0Jvb2xlYW4nLFxuICBUaW1lc3RhbXAgPSAnVGltZXN0YW1wJyxcbiAgSnNvbiA9ICdKc29uJyxcbiAgQW55ID0gJ0FueScsXG4gIEFueURpY3QgPSAnQW55RGljdCcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZVR5cGUoc3RyOiBzdHJpbmcpOiBzdHIgaXMgUHJpbWl0aXZlVHlwZSB7XG4gIHN3aXRjaCAoc3RyKSB7XG4gICAgY2FzZSBQcmltaXRpdmVUeXBlLlN0cmluZzpcbiAgICBjYXNlIFByaW1pdGl2ZVR5cGUuTG9uZzpcbiAgICBjYXNlIFByaW1pdGl2ZVR5cGUuSW50ZWdlcjpcbiAgICBjYXNlIFByaW1pdGl2ZVR5cGUuRG91YmxlOlxuICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5Cb29sZWFuOlxuICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5UaW1lc3RhbXA6XG4gICAgY2FzZSBQcmltaXRpdmVUeXBlLkpzb246XG4gICAgY2FzZSBQcmltaXRpdmVUeXBlLkFueTpcbiAgICBjYXNlIFByaW1pdGl2ZVR5cGUuTnVtYmVyOlxuICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5BbnlEaWN0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19