"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialRefKind = exports.isPrimitiveMapAttribute = exports.isComplexListAttribute = exports.isPrimitiveListAttribute = exports.isMapAttribute = exports.isListAttribute = exports.isPrimitiveAttribute = exports.isTaggableResource = void 0;
const property_1 = require("./property");
/**
 * Determine if the resource supports tags
 *
 * This function combined with isTagProperty determines if the `cdk.TagManager`
 * and `cdk.TaggableResource` can process these tags. If not, standard code
 * generation of properties will be used.
 */
function isTaggableResource(spec) {
    if (spec.Properties === undefined) {
        return false;
    }
    for (const key of Object.keys(spec.Properties)) {
        if (property_1.isTagPropertyName(key) && property_1.isTagProperty(spec.Properties[key])) {
            return true;
        }
    }
    return false;
}
exports.isTaggableResource = isTaggableResource;
function isPrimitiveAttribute(spec) {
    return !!spec.PrimitiveType;
}
exports.isPrimitiveAttribute = isPrimitiveAttribute;
function isListAttribute(spec) {
    return spec.Type === 'List';
}
exports.isListAttribute = isListAttribute;
function isMapAttribute(spec) {
    return spec.Type === 'Map';
}
exports.isMapAttribute = isMapAttribute;
function isPrimitiveListAttribute(spec) {
    return isListAttribute(spec) && !!spec.PrimitiveItemType;
}
exports.isPrimitiveListAttribute = isPrimitiveListAttribute;
function isComplexListAttribute(spec) {
    return isListAttribute(spec) && !!spec.ItemType;
}
exports.isComplexListAttribute = isComplexListAttribute;
function isPrimitiveMapAttribute(spec) {
    return isMapAttribute(spec) && !!spec.PrimitiveItemType;
}
exports.isPrimitiveMapAttribute = isPrimitiveMapAttribute;
/**
 * Type declaration for special values of the "Ref" attribute represents.
 *
 * The attribute can take on more values than these, but these are treated specially.
 */
var SpecialRefKind;
(function (SpecialRefKind) {
    /**
     * No '.ref' member is generated for this type, because it doesn't have a meaningful value.
     */
    SpecialRefKind["None"] = "None";
    /**
     * The generated class will inherit from the built-in 'Arn' type.
     */
    SpecialRefKind["Arn"] = "Arn";
})(SpecialRefKind = exports.SpecialRefKind || (exports.SpecialRefKind = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc291cmNlLXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUNBQXFGO0FBcUVyRjs7Ozs7O0dBTUc7QUFDSCxTQUFnQixrQkFBa0IsQ0FBQyxJQUFrQjtJQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQzlDLElBQUksNEJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksd0JBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBVkQsZ0RBVUM7QUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxJQUFlO0lBQ2xELE9BQU8sQ0FBQyxDQUFFLElBQTJCLENBQUMsYUFBYSxDQUFDO0FBQ3RELENBQUM7QUFGRCxvREFFQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxJQUFlO0lBQzdDLE9BQVEsSUFBc0IsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO0FBQ2pELENBQUM7QUFGRCwwQ0FFQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxJQUFlO0lBQzVDLE9BQVEsSUFBcUIsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO0FBQy9DLENBQUM7QUFGRCx3Q0FFQztBQUVELFNBQWdCLHdCQUF3QixDQUFDLElBQWU7SUFDdEQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFFLElBQStCLENBQUMsaUJBQWlCLENBQUM7QUFDdkYsQ0FBQztBQUZELDREQUVDO0FBRUQsU0FBZ0Isc0JBQXNCLENBQUMsSUFBZTtJQUNwRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUUsSUFBNkIsQ0FBQyxRQUFRLENBQUM7QUFDNUUsQ0FBQztBQUZELHdEQUVDO0FBRUQsU0FBZ0IsdUJBQXVCLENBQUMsSUFBZTtJQUNyRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUUsSUFBOEIsQ0FBQyxpQkFBaUIsQ0FBQztBQUNyRixDQUFDO0FBRkQsMERBRUM7QUFFRDs7OztHQUlHO0FBQ0gsSUFBWSxjQVVYO0FBVkQsV0FBWSxjQUFjO0lBQ3hCOztPQUVHO0lBQ0gsK0JBQWEsQ0FBQTtJQUViOztPQUVHO0lBQ0gsNkJBQVcsQ0FBQTtBQUNiLENBQUMsRUFWVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQVV6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50ZWQsIFByaW1pdGl2ZVR5cGUgfSBmcm9tICcuL2Jhc2UtdHlwZXMnO1xuaW1wb3J0IHsgaXNUYWdQcm9wZXJ0eSwgaXNUYWdQcm9wZXJ0eU5hbWUsIFByb3BlcnR5LCBUYWdQcm9wZXJ0eSB9IGZyb20gJy4vcHJvcGVydHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlVHlwZSBleHRlbmRzIERvY3VtZW50ZWQge1xuICAvKipcbiAgICogVGhlIEVuZ2xpc2ggZGVzY3JpcHRpb24gb2YgdGhlIHJlc291cmNlIHR5cGUsIGlmIGFueS5cbiAgICovXG4gIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogTWFwcGluZyBvZiBDREsncyBwcm9wZXJ0eSBuYW1lcyB0byBST1MncyBwcm9wZXJ0eSBuYW1lcy5cbiAgICovXG4gIFByb3BzVG9Sb3NOYW1lPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAgKiBUaGUgYXR0cmlidXRlcyBleHBvc2VkIGJ5IHRoZSByZXNvdXJjZSB0eXBlLCBpZiBhbnkuXG4gICAqL1xuICBBdHRyaWJ1dGVzPzogeyBbbmFtZTogc3RyaW5nXTogQXR0cmlidXRlIH07XG4gIC8qKlxuICAgKiBUaGUgcHJvcGVydGllcyBhY2NlcHRlZCBieSB0aGUgcmVzb3VyY2UgdHlwZSwgaWYgYW55LlxuICAgKi9cbiAgUHJvcGVydGllcz86IHsgW25hbWU6IHN0cmluZ106IFByb3BlcnR5IH07XG4gIC8qKlxuICAgKiBUaGUgYGBUcmFuc2Zvcm1gYCByZXF1aXJlZCBieSB0aGUgcmVzb3VyY2UgdHlwZSwgaWYgYW55LlxuICAgKi9cbiAgUmVxdWlyZWRUcmFuc2Zvcm0/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoYXQga2luZCBvZiB2YWx1ZSB0aGUgJ1JlZicgb3BlcmF0b3IgcmVmZXJzIHRvLCBpZiBhbnkuXG4gICAqL1xuICBSZWZLaW5kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ2dhYmxlUmVzb3VyY2UgZXh0ZW5kcyBSZXNvdXJjZVR5cGUge1xuICBQcm9wZXJ0aWVzOiB7XG4gICAgRmlsZVN5c3RlbVRhZ3M6IFRhZ1Byb3BlcnR5O1xuICAgIEhvc3RlZFpvbmVUYWdzOiBUYWdQcm9wZXJ0eTtcbiAgICBUYWdzOiBUYWdQcm9wZXJ0eTtcbiAgICBVc2VyUG9vbFRhZ3M6IFRhZ1Byb3BlcnR5O1xuICAgIFtuYW1lOiBzdHJpbmddOiBQcm9wZXJ0eTtcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgQXR0cmlidXRlID0gRGVzY3JpcHRpb24gfCBQcmltaXRpdmVBdHRyaWJ1dGUgfCBMaXN0QXR0cmlidXRlIHwgTWFwQXR0cmlidXRlO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0aW9uIHtcbiAgRGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmltaXRpdmVBdHRyaWJ1dGUge1xuICBQcmltaXRpdmVUeXBlOiBQcmltaXRpdmVUeXBlO1xufVxuXG5leHBvcnQgdHlwZSBMaXN0QXR0cmlidXRlID0gUHJpbWl0aXZlTGlzdEF0dHJpYnV0ZSB8IENvbXBsZXhMaXN0QXR0cmlidXRlO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByaW1pdGl2ZUxpc3RBdHRyaWJ1dGUge1xuICBUeXBlOiAnTGlzdCc7XG4gIFByaW1pdGl2ZUl0ZW1UeXBlOiBQcmltaXRpdmVUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXhMaXN0QXR0cmlidXRlIHtcbiAgVHlwZTogJ0xpc3QnO1xuICBJdGVtVHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBNYXBBdHRyaWJ1dGUgPSBQcmltaXRpdmVNYXBBdHRyaWJ1dGU7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbWl0aXZlTWFwQXR0cmlidXRlIHtcbiAgVHlwZTogJ01hcCc7XG4gIFByaW1pdGl2ZUl0ZW1UeXBlOiBQcmltaXRpdmVUeXBlO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgcmVzb3VyY2Ugc3VwcG9ydHMgdGFnc1xuICpcbiAqIFRoaXMgZnVuY3Rpb24gY29tYmluZWQgd2l0aCBpc1RhZ1Byb3BlcnR5IGRldGVybWluZXMgaWYgdGhlIGBjZGsuVGFnTWFuYWdlcmBcbiAqIGFuZCBgY2RrLlRhZ2dhYmxlUmVzb3VyY2VgIGNhbiBwcm9jZXNzIHRoZXNlIHRhZ3MuIElmIG5vdCwgc3RhbmRhcmQgY29kZVxuICogZ2VuZXJhdGlvbiBvZiBwcm9wZXJ0aWVzIHdpbGwgYmUgdXNlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnZ2FibGVSZXNvdXJjZShzcGVjOiBSZXNvdXJjZVR5cGUpOiBzcGVjIGlzIFRhZ2dhYmxlUmVzb3VyY2Uge1xuICBpZiAoc3BlYy5Qcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc3BlYy5Qcm9wZXJ0aWVzKSkge1xuICAgIGlmIChpc1RhZ1Byb3BlcnR5TmFtZShrZXkpICYmIGlzVGFnUHJvcGVydHkoc3BlYy5Qcm9wZXJ0aWVzW2tleV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmVBdHRyaWJ1dGUoc3BlYzogQXR0cmlidXRlKTogc3BlYyBpcyBQcmltaXRpdmVBdHRyaWJ1dGUge1xuICByZXR1cm4gISEoc3BlYyBhcyBQcmltaXRpdmVBdHRyaWJ1dGUpLlByaW1pdGl2ZVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xpc3RBdHRyaWJ1dGUoc3BlYzogQXR0cmlidXRlKTogc3BlYyBpcyBMaXN0QXR0cmlidXRlIHtcbiAgcmV0dXJuIChzcGVjIGFzIExpc3RBdHRyaWJ1dGUpLlR5cGUgPT09ICdMaXN0Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWFwQXR0cmlidXRlKHNwZWM6IEF0dHJpYnV0ZSk6IHNwZWMgaXMgTWFwQXR0cmlidXRlIHtcbiAgcmV0dXJuIChzcGVjIGFzIE1hcEF0dHJpYnV0ZSkuVHlwZSA9PT0gJ01hcCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZUxpc3RBdHRyaWJ1dGUoc3BlYzogQXR0cmlidXRlKTogc3BlYyBpcyBQcmltaXRpdmVMaXN0QXR0cmlidXRlIHtcbiAgcmV0dXJuIGlzTGlzdEF0dHJpYnV0ZShzcGVjKSAmJiAhIShzcGVjIGFzIFByaW1pdGl2ZUxpc3RBdHRyaWJ1dGUpLlByaW1pdGl2ZUl0ZW1UeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wbGV4TGlzdEF0dHJpYnV0ZShzcGVjOiBBdHRyaWJ1dGUpOiBzcGVjIGlzIENvbXBsZXhMaXN0QXR0cmlidXRlIHtcbiAgcmV0dXJuIGlzTGlzdEF0dHJpYnV0ZShzcGVjKSAmJiAhIShzcGVjIGFzIENvbXBsZXhMaXN0QXR0cmlidXRlKS5JdGVtVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlTWFwQXR0cmlidXRlKHNwZWM6IEF0dHJpYnV0ZSk6IHNwZWMgaXMgUHJpbWl0aXZlTWFwQXR0cmlidXRlIHtcbiAgcmV0dXJuIGlzTWFwQXR0cmlidXRlKHNwZWMpICYmICEhKHNwZWMgYXMgUHJpbWl0aXZlTWFwQXR0cmlidXRlKS5QcmltaXRpdmVJdGVtVHlwZTtcbn1cblxuLyoqXG4gKiBUeXBlIGRlY2xhcmF0aW9uIGZvciBzcGVjaWFsIHZhbHVlcyBvZiB0aGUgXCJSZWZcIiBhdHRyaWJ1dGUgcmVwcmVzZW50cy5cbiAqXG4gKiBUaGUgYXR0cmlidXRlIGNhbiB0YWtlIG9uIG1vcmUgdmFsdWVzIHRoYW4gdGhlc2UsIGJ1dCB0aGVzZSBhcmUgdHJlYXRlZCBzcGVjaWFsbHkuXG4gKi9cbmV4cG9ydCBlbnVtIFNwZWNpYWxSZWZLaW5kIHtcbiAgLyoqXG4gICAqIE5vICcucmVmJyBtZW1iZXIgaXMgZ2VuZXJhdGVkIGZvciB0aGlzIHR5cGUsIGJlY2F1c2UgaXQgZG9lc24ndCBoYXZlIGEgbWVhbmluZ2Z1bCB2YWx1ZS5cbiAgICovXG4gIE5vbmUgPSAnTm9uZScsXG5cbiAgLyoqXG4gICAqIFRoZSBnZW5lcmF0ZWQgY2xhc3Mgd2lsbCBpbmhlcml0IGZyb20gdGhlIGJ1aWx0LWluICdBcm4nIHR5cGUuXG4gICAqL1xuICBBcm4gPSAnQXJuJyxcbn1cbiJdfQ==