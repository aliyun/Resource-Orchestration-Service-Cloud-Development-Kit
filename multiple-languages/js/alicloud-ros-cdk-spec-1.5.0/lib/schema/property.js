"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTagPropertyStringMap = exports.isTagPropertyJson = exports.isTagPropertyAutoScalingGroup = exports.isTagPropertyStandard = exports.isTagProperty = exports.isTagPropertyName = exports.isUnionProperty = exports.isComplexMapProperty = exports.isPrimitiveMapProperty = exports.isMapProperty = exports.isComplexListProperty = exports.isPrimitiveListProperty = exports.isListProperty = exports.isCollectionProperty = exports.isComplexProperty = exports.isPrimitiveProperty = exports.isScalarProperty = exports.isUpdateType = exports.UpdateType = void 0;
const base_types_1 = require("./base-types");
var UpdateType;
(function (UpdateType) {
    UpdateType["Conditional"] = "Conditional";
    UpdateType["Immutable"] = "Immutable";
    UpdateType["Mutable"] = "Mutable";
})(UpdateType = exports.UpdateType || (exports.UpdateType = {}));
function isUpdateType(str) {
    switch (str) {
        case UpdateType.Conditional:
        case UpdateType.Immutable:
        case UpdateType.Mutable:
            return true;
        default:
            return false;
    }
}
exports.isUpdateType = isUpdateType;
function isScalarProperty(prop) {
    return (isPrimitiveProperty(prop) ||
        isComplexProperty(prop) ||
        // A UnionProperty is only Scalar if it defines Types or PrimitiveTypes
        (isUnionProperty(prop) && !!(prop.Types || prop.PrimitiveTypes)));
}
exports.isScalarProperty = isScalarProperty;
function isPrimitiveProperty(prop) {
    return !!prop.PrimitiveType;
}
exports.isPrimitiveProperty = isPrimitiveProperty;
function isComplexProperty(prop) {
    const propType = prop.Type;
    return propType != null && propType !== 'Map' && propType !== 'List';
}
exports.isComplexProperty = isComplexProperty;
function isCollectionProperty(prop) {
    return (isListProperty(prop) ||
        isMapProperty(prop) ||
        // A UnionProperty is only Collection if it defines ItemTypes or PrimitiveItemTypes
        (isUnionProperty(prop) && !!(prop.ItemTypes || prop.PrimitiveItemTypes)));
}
exports.isCollectionProperty = isCollectionProperty;
function isListProperty(prop) {
    return prop.Type === 'List';
}
exports.isListProperty = isListProperty;
function isPrimitiveListProperty(prop) {
    return isListProperty(prop) && !!prop.PrimitiveItemType;
}
exports.isPrimitiveListProperty = isPrimitiveListProperty;
function isComplexListProperty(prop) {
    return isListProperty(prop) && !!prop.ItemType;
}
exports.isComplexListProperty = isComplexListProperty;
function isMapProperty(prop) {
    return prop.Type === 'Map';
}
exports.isMapProperty = isMapProperty;
function isPrimitiveMapProperty(prop) {
    return isMapProperty(prop) && !!prop.PrimitiveItemType;
}
exports.isPrimitiveMapProperty = isPrimitiveMapProperty;
function isComplexMapProperty(prop) {
    return isMapProperty(prop) && !!prop.ItemType;
}
exports.isComplexMapProperty = isComplexMapProperty;
function isUnionProperty(prop) {
    const castProp = prop;
    return !!(castProp.ItemTypes || castProp.PrimitiveTypes || castProp.Types);
}
exports.isUnionProperty = isUnionProperty;
const tagPropertyNames = {
    FileSystemTags: '',
    HostedZoneTags: '',
    Tags: '',
    UserPoolTags: '',
};
function isTagPropertyName(name) {
    if (undefined === name) {
        return false;
    }
    return tagPropertyNames.hasOwnProperty(name);
}
exports.isTagPropertyName = isTagPropertyName;
/**
 * This function validates that the property **can** be a Tag Property
 *
 * The property is only a Tag if the name of this property is Tags, which is
 * validated using `ResourceType.isTaggable(resource)`.
 */
function isTagProperty(prop) {
    return (isTagPropertyStandard(prop) ||
        isTagPropertyAutoScalingGroup(prop) ||
        isTagPropertyJson(prop) ||
        isTagPropertyStringMap(prop));
}
exports.isTagProperty = isTagProperty;
function isTagPropertyStandard(prop) {
    return (prop.ItemType === 'Tag' ||
        prop.ItemType === 'TagsEntry' ||
        prop.Type === 'Tags' ||
        prop.ItemType === 'TagRef' ||
        prop.ItemType === 'ElasticFileSystemTag' ||
        prop.ItemType === 'HostedZoneTag');
}
exports.isTagPropertyStandard = isTagPropertyStandard;
function isTagPropertyAutoScalingGroup(prop) {
    return prop.ItemType === 'TagProperty';
}
exports.isTagPropertyAutoScalingGroup = isTagPropertyAutoScalingGroup;
function isTagPropertyJson(prop) {
    return prop.PrimitiveType === base_types_1.PrimitiveType.Json;
}
exports.isTagPropertyJson = isTagPropertyJson;
function isTagPropertyStringMap(prop) {
    return prop.PrimitiveItemType === 'String';
}
exports.isTagPropertyStringMap = isTagPropertyStringMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBeUQ7QUF1SHpELElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNwQix5Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBdUIsQ0FBQTtJQUN2QixpQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFFRCxTQUFnQixZQUFZLENBQUMsR0FBVztJQUN0QyxRQUFRLEdBQUcsRUFBRTtRQUNYLEtBQUssVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1QixLQUFLLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDMUIsS0FBSyxVQUFVLENBQUMsT0FBTztZQUNyQixPQUFPLElBQUksQ0FBQztRQUNkO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBVEQsb0NBU0M7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFjO0lBQzdDLE9BQU8sQ0FDTCxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7UUFDekIsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLHVFQUF1RTtRQUN2RSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUNqRSxDQUFDO0FBQ0osQ0FBQztBQVBELDRDQU9DO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsSUFBYztJQUNoRCxPQUFPLENBQUMsQ0FBRSxJQUEwQixDQUFDLGFBQWEsQ0FBQztBQUNyRCxDQUFDO0FBRkQsa0RBRUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxJQUFjO0lBQzlDLE1BQU0sUUFBUSxHQUFJLElBQXdCLENBQUMsSUFBSSxDQUFDO0lBQ2hELE9BQU8sUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLEtBQUssS0FBSyxJ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QzNELENBQUM7QUFDSixDQUFDO0FBVEQsc0RBU0M7QUFFRCxTQUFnQiw2QkFBNkIsQ0FBQyxJQUFjO0lBQzFELE9BQVEsSUFBb0MsQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDO0FBQzFFLENBQUM7QUFGRCxzRUFFQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLElBQWM7SUFDOUMsT0FBUSxJQUF3QixDQUFDLGFBQWEsS0FBSywwQkFBYSxDQUFDLElBQUksQ0FBQztBQUN4RSxDQUFDO0FBRkQsOENBRUM7QUFFRCxTQUFnQixzQkFBc0IsQ0FBQyxJQUFjO0lBQ25ELE9BQVEsSUFBNkIsQ0FBQyxpQkFBaUIsS0FBSyxRQUFRLENBQUM7QUFDdkUsQ0FBQztBQUZELHdEQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnRlZCwgUHJpbWl0aXZlVHlwZSB9IGZyb20gJy4vYmFzZS10eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5ID0gU2NhbGFyUHJvcGVydHkgfCBDb2xsZWN0aW9uUHJvcGVydHk7XG5leHBvcnQgdHlwZSBTY2FsYXJQcm9wZXJ0eSA9IFByaW1pdGl2ZVByb3BlcnR5IHwgQ29tcGxleFByb3BlcnR5IHwgVW5pb25Qcm9wZXJ0eTtcbmV4cG9ydCB0eXBlIENvbGxlY3Rpb25Qcm9wZXJ0eSA9IExpc3RQcm9wZXJ0eSB8IE1hcFByb3BlcnR5IHwgVW5pb25Qcm9wZXJ0eTtcbmV4cG9ydCB0eXBlIExpc3RQcm9wZXJ0eSA9IFByaW1pdGl2ZUxpc3RQcm9wZXJ0eSB8IENvbXBsZXhMaXN0UHJvcGVydHk7XG5leHBvcnQgdHlwZSBNYXBQcm9wZXJ0eSA9IFByaW1pdGl2ZU1hcFByb3BlcnR5IHwgQ29tcGxleE1hcFByb3BlcnR5O1xuZXhwb3J0IHR5cGUgVGFnUHJvcGVydHkgPSBUYWdQcm9wZXJ0eVN0YW5kYXJkIHwgVGFnUHJvcGVydHlBdXRvU2NhbGluZ0dyb3VwIHwgVGFnUHJvcGVydHlKc29uIHwgVGFnUHJvcGVydHlTdHJpbmdNYXA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlCYXNlIGV4dGVuZHMgRG9jdW1lbnRlZCB7XG4gIENvbnN0cmFpbnRzPzogW09iamVjdF07XG4gIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBUeXBlPzogc3RyaW5nO1xuXG4gIERlZmF1bHQ/OiBhbnk7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWQuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBSZXF1aXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEdXJpbmcgYSBzdGFjayB1cGRhdGUsIHRoZSB1cGRhdGUgYmVoYXZpb3Igd2hlbiB5b3UgYWRkLCByZW1vdmUsIG9yIG1vZGlmeSB0aGUgcHJvcGVydHkuIFJPU1xuICAgKiByZXBsYWNlcyB0aGUgcmVzb3VyY2Ugd2hlbiB5b3UgY2hhbmdlIGDDjG1tdXRhYmxlYGBwcm9wZXJ0aWVzLiBST1MgZG9lc24ndCByZXBsYWNlIHRoZSByZXNvdXJjZVxuICAgKiB3aGVuIHlvdSBjaGFuZ2UgYGBNdXRhYmxlYGAgcHJvcGVydGllcy4gYGBDb25kaXRpb25hbGBgIHVwZGF0ZXMgY2FuIGJlIG11dGFibGUgb3IgaW1tdXRhYmxlLCBkZXBlbmRpbmcgb24sIGZvclxuICAgKiBleGFtcGxlLCB3aGljaCBvdGhlciBwcm9wZXJ0aWVzIHlvdSB1cGRhdGVkLlxuICAgKlxuICAgKiBAZGVmYXVsdCBVcGRhdGVUeXBlLk11dGFibGVcbiAgICovXG4gIFVwZGF0ZVR5cGU/OiBVcGRhdGVUeXBlO1xuXG4gIFByaW1pdGl2ZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmltaXRpdmVQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5QmFzZSB7XG4gIC8qKiBUaGUgdmFsaWQgcHJpbWl0aXZlIHR5cGUgZm9yIHRoZSBwcm9wZXJ0eS4gKi9cbiAgUHJpbWl0aXZlVHlwZTogUHJpbWl0aXZlVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV4UHJvcGVydHkgZXh0ZW5kcyBQcm9wZXJ0eUJhc2Uge1xuICAvKiogVGhlIHR5cGUgb2YgdmFsaWQgdmFsdWVzIGZvciB0aGlzIHByb3BlcnR5ICovXG4gIFR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0UHJvcGVydHlCYXNlIGV4dGVuZHMgUHJvcGVydHlCYXNlIHtcbiAgLyoqXG4gICAqIEEgbGlzdCBpcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZhbHVlcy5cbiAgICovXG4gIFR5cGU6ICdMaXN0JztcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIFJPUyBhbGxvd3MgZHVwbGljYXRlIHZhbHVlcy4gSWYgdGhlIHZhbHVlIGlzIGBgdHJ1ZWBgLCBST1NcbiAgICogaWdub3JlcyBkdXBsaWNhdGUgdmFsdWVzLiBpZiB0aGUgdmFsdWUgaXMgIGBgZmFsc2VgYCwgUk9TIHJldHVybnMgYW4gYXJyb3IgaWYgeW91IHN1Ym1pdCBkdXBsaWNhdGVcbiAgICogdmFsdWVzLlxuICAgKi9cbiAgRHVwbGljYXRlc0FsbG93ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaW1pdGl2ZUxpc3RQcm9wZXJ0eSBleHRlbmRzIExpc3RQcm9wZXJ0eUJhc2Uge1xuICAvKiogVGhlIHZhbGlkIHByaW1pdGl2ZSB0eXBlIGZvciB0aGUgcHJvcGVydHkuICovXG4gIFByaW1pdGl2ZUl0ZW1UeXBlOiBQcmltaXRpdmVUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXhMaXN0UHJvcGVydHkgZXh0ZW5kcyBMaXN0UHJvcGVydHlCYXNlIHtcbiAgLyoqIFZhbGlkIHZhbHVlcyBmb3IgdGhlIHByb3BlcnR5ICovXG4gIEl0ZW1UeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwUHJvcGVydHlCYXNlIGV4dGVuZHMgUHJvcGVydHlCYXNlIHtcbiAgLyoqIEEgbWFwIGlzIGEgc2V0IG9mIGtleS12YWx1ZSBwYWlycywgd2hlcmUgdGhlIGtleXMgYXJlIGFsd2F5cyBzdHJpbmdzLiAqL1xuICBUeXBlOiAnTWFwJztcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIFJPUyBhbGxvd3MgZHVwbGljYXRlIHZhbHVlcy4gSWYgdGhlIHZhbHVlIGlzIGBgdHJ1ZWBgLCBST1NcbiAgICogaWdub3JlcyBkdXBsaWNhdGUgdmFsdWVzLiBpZiB0aGUgdmFsdWUgaXMgIGBgZmFsc2VgYCwgUk9TIHJldHVybnMgYW4gYXJyb3IgaWYgeW91IHN1Ym1pdCBkdXBsaWNhdGVcbiAgICogdmFsdWVzLlxuICAgKi9cbiAgRHVwbGljYXRlc0FsbG93ZWQ/OiBmYWxzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmltaXRpdmVNYXBQcm9wZXJ0eSBleHRlbmRzIE1hcFByb3BlcnR5QmFzZSB7XG4gIC8qKiBUaGUgdmFsaWQgcHJpbWl0aXZlIHR5cGUgZm9yIHRoZSBwcm9wZXJ0eS4gKi9cbiAgUHJpbWl0aXZlSXRlbVR5cGU6IFByaW1pdGl2ZVR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGxleE1hcFByb3BlcnR5IGV4dGVuZHMgTWFwUHJvcGVydHlCYXNlIHtcbiAgLyoqIFZhbGlkIHZhbHVlcyBmb3IgdGhlIHByb3BlcnR5ICovXG4gIEl0ZW1UeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJvcGVydHlTdGFuZGFyZCBleHRlbmRzIFByb3BlcnR5QmFzZSB7XG4gIEl0ZW1UeXBlOiAnVGFnJyB8ICdUYWdzRW50cnknIHwgJ1RhZ1JlZicgfCAnRWxhc3RpY0ZpbGVTeXN0ZW1UYWcnIHwgJ0hvc3RlZFpvbmVUYWcnO1xuICBUeXBlOiAnVGFncyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJvcGVydHlBdXRvU2NhbGluZ0dyb3VwIGV4dGVuZHMgUHJvcGVydHlCYXNlIHtcbiAgSXRlbVR5cGU6ICdUYWdQcm9wZXJ0eSc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJvcGVydHlKc29uIGV4dGVuZHMgUHJvcGVydHlCYXNlIHtcbiAgUHJpbWl0aXZlVHlwZTogUHJpbWl0aXZlVHlwZS5Kc29uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ1Byb3BlcnR5U3RyaW5nTWFwIGV4dGVuZHMgUHJvcGVydHlCYXNlIHtcbiAgUHJpbWl0aXZlSXRlbVR5cGU6ICdTdHJpbmcnO1xufVxuXG4vKipcbiAqIEEgcHJvcGVydHkgdHlwZSB0aGF0IGNhbiBiZSBvbmUgb2Ygc2V2ZXJhbCB0eXBlcy4gQ3VycmVudGx5IHVzZWQgb25seSBpbiBTQU0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVW5pb25Qcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5QmFzZSB7XG4gIC8qKiBWYWxpZCBwcmltaXRpdmUgdHlwZXMgZm9yIHRoZSBwcm9wZXJ0eSAqL1xuICBQcmltaXRpdmVUeXBlcz86IFByaW1pdGl2ZVR5cGVbXTtcbiAgLyoqIFZhbGlkIGNvbXBsZXggdHlwZXMgZm9yIHRoZSBwcm9wZXJ0eSAqL1xuICBUeXBlcz86IHN0cmluZ1tdO1xuICAvKiogVmFsaWQgcHJpbWl0aXZlIGl0ZW0gdHlwZXMgZm9yIHRoaXMgcHJvcGVydHkgKi9cbiAgUHJpbWl0aXZlSXRlbVR5cGVzPzogUHJpbWl0aXZlVHlwZVtdO1xuICAvKiogVmFsaWQgbGlzdCBpdGVtIHR5cGVzIGZvciB0aGUgcHJvcGVydHkgKi9cbiAgSXRlbVR5cGVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBlbnVtIFVwZGF0ZVR5cGUge1xuICBDb25kaXRpb25hbCA9ICdDb25kaXRpb25hbCcsXG4gIEltbXV0YWJsZSA9ICdJbW11dGFibGUnLFxuICBNdXRhYmxlID0gJ011dGFibGUnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVcGRhdGVUeXBlKHN0cjogc3RyaW5nKTogc3RyIGlzIFVwZGF0ZVR5cGUge1xuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgVXBkYXRlVHlwZS5Db25kaXRpb25hbDpcbiAgICBjYXNlIFVwZGF0ZVR5cGUuSW1tdXRhYmxlOlxuICAgIGNhc2UgVXBkYXRlVHlwZS5NdXRhYmxlOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTY2FsYXJQcm9wZXJ0eShwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgU2NhbGFyUHJvcGVydHkge1xuICByZXR1cm4gKFxuICAgIGlzUHJpbWl0aXZlUHJvcGVydHkocHJvcCkgfHxcbiAgICBpc0NvbXBsZXhQcm9wZXJ0eShwcm9wKSB8fFxuICAgIC8vIEEgVW5pb25Qcm9wZXJ0eSBpcyBvbmx5IFNjYWxhciBpZiBpdCBkZWZpbmVzIFR5cGVzIG9yIFByaW1pdGl2ZVR5cGVzXG4gICAgKGlzVW5pb25Qcm9wZXJ0eShwcm9wKSAmJiAhIShwcm9wLlR5cGVzIHx8IHByb3AuUHJpbWl0aXZlVHlwZXMpKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmVQcm9wZXJ0eShwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgUHJpbWl0aXZlUHJvcGVydHkge1xuICByZXR1cm4gISEocHJvcCBhcyBQcmltaXRpdmVQcm9wZXJ0eSkuUHJpbWl0aXZlVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcGxleFByb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBDb21wbGV4UHJvcGVydHkge1xuICBjb25zdCBwcm9wVHlwZSA9IChwcm9wIGFzIENvbXBsZXhQcm9wZXJ0eSkuVHlwZTtcbiAgcmV0dXJuIHByb3BUeXBlICE9IG51bGwgJiYgcHJvcFR5cGUgIT09ICdNYXAnICYmIHByb3BUeXBlICE9PSAnTGlzdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbGxlY3Rpb25Qcm9wZXJ0eShwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgQ29sbGVjdGlvblByb3BlcnR5IHtcbiAgcmV0dXJuIChcbiAgICBpc0xpc3RQcm9wZXJ0eShwcm9wKSB8fFxuICAgIGlzTWFwUHJvcGVydHkocHJvcCkgfHxcbiAgICAvLyBBIFVuaW9uUHJvcGVydHkgaXMgb25seSBDb2xsZWN0aW9uIGlmIGl0IGRlZmluZXMgSXRlbVR5cGVzIG9yIFByaW1pdGl2ZUl0ZW1UeXBlc1xuICAgIChpc1VuaW9uUHJvcGVydHkocHJvcCkgJiYgISEocHJvcC5JdGVtVHlwZXMgfHwgcHJvcC5QcmltaXRpdmVJdGVtVHlwZXMpKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMaXN0UHJvcGVydHkocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIExpc3RQcm9wZXJ0eSB7XG4gIHJldHVybiAocHJvcCBhcyBMaXN0UHJvcGVydHkpLlR5cGUgPT09ICdMaXN0Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlTGlzdFByb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBQcmltaXRpdmVMaXN0UHJvcGVydHkge1xuICByZXR1cm4gaXNMaXN0UHJvcGVydHkocHJvcCkgJiYgISEocHJvcCBhcyBQcmltaXRpdmVMaXN0UHJvcGVydHkpLlByaW1pdGl2ZUl0ZW1UeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wbGV4TGlzdFByb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBDb21wbGV4TGlzdFByb3BlcnR5IHtcbiAgcmV0dXJuIGlzTGlzdFByb3BlcnR5KHByb3ApICYmICEhKHByb3AgYXMgQ29tcGxleExpc3RQcm9wZXJ0eSkuSXRlbVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01hcFByb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBNYXBQcm9wZXJ0eSB7XG4gIHJldHVybiAocHJvcCBhcyBNYXBQcm9wZXJ0eSkuVHlwZSA9PT0gJ01hcCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZU1hcFByb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBQcmltaXRpdmVNYXBQcm9wZXJ0eSB7XG4gIHJldHVybiBpc01hcFByb3BlcnR5KHByb3ApICYmICEhKHByb3AgYXMgUHJpbWl0aXZlTWFwUHJvcGVydHkpLlByaW1pdGl2ZUl0ZW1UeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wbGV4TWFwUHJvcGVydHkocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIENvbXBsZXhNYXBQcm9wZXJ0eSB7XG4gIHJldHVybiBpc01hcFByb3BlcnR5KHByb3ApICYmICEhKHByb3AgYXMgQ29tcGxleE1hcFByb3BlcnR5KS5JdGVtVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5pb25Qcm9wZXJ0eShwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgVW5pb25Qcm9wZXJ0eSB7XG4gIGNvbnN0IGNhc3RQcm9wID0gcHJvcCBhcyBVbmlvblByb3BlcnR5O1xuICByZXR1cm4gISEoY2FzdFByb3AuSXRlbVR5cGVzIHx8IGNhc3RQcm9wLlByaW1pdGl2ZVR5cGVzIHx8IGNhc3RQcm9wLlR5cGVzKTtcbn1cblxuY29uc3QgdGFnUHJvcGVydHlOYW1lcyA9IHtcbiAgRmlsZVN5c3RlbVRhZ3M6ICcnLFxuICBIb3N0ZWRab25lVGFnczogJycsXG4gIFRhZ3M6ICcnLFxuICBVc2VyUG9vbFRhZ3M6ICcnLFxufTtcblxuZXhwb3J0IHR5cGUgVGFnUHJvcGVydHlOYW1lID0ga2V5b2YgdHlwZW9mIHRhZ1Byb3BlcnR5TmFtZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RhZ1Byb3BlcnR5TmFtZShuYW1lPzogc3RyaW5nKTogbmFtZSBpcyBUYWdQcm9wZXJ0eU5hbWUge1xuICBpZiAodW5kZWZpbmVkID09PSBuYW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0YWdQcm9wZXJ0eU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHZhbGlkYXRlcyB0aGF0IHRoZSBwcm9wZXJ0eSAqKmNhbioqIGJlIGEgVGFnIFByb3BlcnR5XG4gKlxuICogVGhlIHByb3BlcnR5IGlzIG9ubHkgYSBUYWcgaWYgdGhlIG5hbWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyBUYWdzLCB3aGljaCBpc1xuICogdmFsaWRhdGVkIHVzaW5nIGBSZXNvdXJjZVR5cGUuaXNUYWdnYWJsZShyZXNvdXJjZSlgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUYWdQcm9wZXJ0eShwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgVGFnUHJvcGVydHkge1xuICByZXR1cm4gKFxuICAgIGlzVGFnUHJvcGVydHlTdGFuZGFyZChwcm9wKSB8fFxuICAgIGlzVGFnUHJvcGVydHlBdXRvU2NhbGluZ0dyb3VwKHByb3ApIHx8XG4gICAgaXNUYWdQcm9wZXJ0eUpzb24ocHJvcCkgfHxcbiAgICBpc1RhZ1Byb3BlcnR5U3RyaW5nTWFwKHByb3ApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RhZ1Byb3BlcnR5U3RhbmRhcmQocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIFRhZ1Byb3BlcnR5U3RhbmRhcmQge1xuICByZXR1cm4gKFxuICAgIChwcm9wIGFzIFRhZ1Byb3BlcnR5U3RhbmRhcmQpLkl0ZW1UeXBlID09PSAnVGFnJyB8fFxuICAgIChwcm9wIGFzIFRhZ1Byb3BlcnR5U3RhbmRhcmQpLkl0ZW1UeXBlID09PSAnVGFnc0VudHJ5JyB8fFxuICAgIChwcm9wIGFzIFRhZ1Byb3BlcnR5U3RhbmRhcmQpLlR5cGUgPT09ICdUYWdzJyB8fFxuICAgIChwcm9wIGFzIFRhZ1Byb3BlcnR5U3RhbmRhcmQpLkl0ZW1UeXBlID09PSAnVGFnUmVmJyB8fFxuICAgIChwcm9wIGFzIFRhZ1Byb3BlcnR5U3RhbmRhcmQpLkl0ZW1UeXBlID09PSAnRWxhc3RpY0ZpbGVTeXN0ZW1UYWcnIHx8XG4gICAgKHByb3AgYXMgVGFnUHJvcGVydHlTdGFuZGFyZCkuSXRlbVR5cGUgPT09ICdIb3N0ZWRab25lVGFnJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUYWdQcm9wZXJ0eUF1dG9TY2FsaW5nR3JvdXAocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIFRhZ1Byb3BlcnR5QXV0b1NjYWxpbmdHcm91cCB7XG4gIHJldHVybiAocHJvcCBhcyBUYWdQcm9wZXJ0eUF1dG9TY2FsaW5nR3JvdXApLkl0ZW1UeXBlID09PSAnVGFnUHJvcGVydHknO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUYWdQcm9wZXJ0eUpzb24ocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIFRhZ1Byb3BlcnR5SnNvbiB7XG4gIHJldHVybiAocHJvcCBhcyBUYWdQcm9wZXJ0eUpzb24pLlByaW1pdGl2ZVR5cGUgPT09IFByaW1pdGl2ZVR5cGUuSnNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnUHJvcGVydHlTdHJpbmdNYXAocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIFRhZ1Byb3BlcnR5U3RyaW5nTWFwIHtcbiAgcmV0dXJuIChwcm9wIGFzIFRhZ1Byb3BlcnR5U3RyaW5nTWFwKS5QcmltaXRpdmVJdGVtVHlwZSA9PT0gJ1N0cmluZyc7XG59XG4iXX0=