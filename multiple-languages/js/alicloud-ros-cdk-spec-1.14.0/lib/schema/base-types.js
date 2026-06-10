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
})(PrimitiveType || (exports.PrimitiveType = PrimitiveType = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UtdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0EsSUFBWSxhQVdYO0FBWEQsV0FBWSxhQUFhO0lBQ3ZCLGtDQUFpQixDQUFBO0lBQ2pCLDhCQUFhLENBQUE7SUFDYixvQ0FBbUIsQ0FBQTtJQUNuQixrQ0FBaUIsQ0FBQTtJQUNqQixrQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBbUIsQ0FBQTtJQUNuQix3Q0FBdUIsQ0FBQTtJQUN2Qiw4QkFBYSxDQUFBO0lBQ2IsNEJBQVcsQ0FBQTtJQUNYLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFYVyxhQUFhLDZCQUFiLGFBQWEsUUFXeEI7QUFFRCxTQUFnQixlQUFlLENBQUMsR0FBVztJQUN6QyxRQUFRLEdBQUcsRUFBRTtRQUNYLEtBQUssYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUMxQixLQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDeEIsS0FBSyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNCLEtBQUssYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUMxQixLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDM0IsS0FBSyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQzdCLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQztRQUN4QixLQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDdkIsS0FBSyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzFCLEtBQUssYUFBYSxDQUFDLE9BQU87WUFDeEIsT0FBTyxJQUFJLENBQUM7UUFDZDtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQWhCRCwwQ0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIERvY3VtZW50ZWQge1xuICAvKiogQSBsaW5rIHRvIHRoZSBST1MgVXNlciBHdWlkZSB0aGF0IHByb3ZpZGVzIGluZm9ybWF0aW9ucyBhYm91dCB0aGUgZW50aXR5LiAqL1xuICBEb2N1bWVudGF0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBQcmltaXRpdmVUeXBlIHtcbiAgU3RyaW5nID0gJ1N0cmluZycsXG4gIExvbmcgPSAnTG9uZycsXG4gIEludGVnZXIgPSAnSW50ZWdlcicsXG4gIE51bWJlciA9ICdOdW1iZXInLFxuICBEb3VibGUgPSAnRG91YmxlJyxcbiAgQm9vbGVhbiA9ICdCb29sZWFuJyxcbiAgVGltZXN0YW1wID0gJ1RpbWVzdGFtcCcsXG4gIEpzb24gPSAnSnNvbicsXG4gIEFueSA9ICdBbnknLFxuICBBbnlEaWN0ID0gJ0FueURpY3QnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmVUeXBlKHN0cjogc3RyaW5nKTogc3RyIGlzIFByaW1pdGl2ZVR5cGUge1xuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5TdHJpbmc6XG4gICAgY2FzZSBQcmltaXRpdmVUeXBlLkxvbmc6XG4gICAgY2FzZSBQcmltaXRpdmVUeXBlLkludGVnZXI6XG4gICAgY2FzZSBQcmltaXRpdmVUeXBlLkRvdWJsZTpcbiAgICBjYXNlIFByaW1pdGl2ZVR5cGUuQm9vbGVhbjpcbiAgICBjYXNlIFByaW1pdGl2ZVR5cGUuVGltZXN0YW1wOlxuICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5Kc29uOlxuICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5Bbnk6XG4gICAgY2FzZSBQcmltaXRpdmVUeXBlLk51bWJlcjpcbiAgICBjYXNlIFByaW1pdGl2ZVR5cGUuQW55RGljdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==