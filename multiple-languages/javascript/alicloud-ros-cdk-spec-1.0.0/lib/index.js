"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredSpecification = exports.namespaces = exports.resourceTypes = exports.propertySpecification = exports.resourceSpecification = exports.allTypes = exports.specification = exports.schema = void 0;
const crypto = require("crypto");
const schema = require("./schema");
exports.schema = schema;
/**
 * The complete ROS Resource specification, having any CDK patches and enhancements included in it.
 */
function specification() {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('../spec/specification.json');
}
exports.specification = specification;
function allTypes() {
    return require.resolve('../spec/types.json');
}
exports.allTypes = allTypes;
/**
 * Return the resource specification for the given typename
 *
 * Validates that the resource exists. If you don't want this validating behavior, read from
 * specification() directly.
 */
function resourceSpecification(typeName) {
    const ret = specification().ResourceTypes[typeName];
    if (!ret) {
        throw new Error(`No such resource type: ${typeName}`);
    }
    return ret;
}
exports.resourceSpecification = resourceSpecification;
/**
 * Return the property specification for the given resource's property
 */
function propertySpecification(typeName, propertyName) {
    const ret = resourceSpecification(typeName).Properties[propertyName];
    if (!ret) {
        throw new Error(`Resource ${typeName} has no property: ${propertyName}`);
    }
    return ret;
}
exports.propertySpecification = propertySpecification;
/**
 * The list of resource type names defined in the ``specification``.
 */
function resourceTypes() {
    return Object.keys(specification().ResourceTypes);
}
exports.resourceTypes = resourceTypes;
/**
 * The list of namespaces defined in the ``specification``, that is resource name prefixes down to the second ``::``.
 */
function namespaces() {
    return Array.from(new Set(resourceTypes().map((n) => n.split('::', 2).join('::'))));
}
exports.namespaces = namespaces;
/**
 * Obtain a filtered version of the ROS specification.
 *
 * @param filter the predicate to be used in order to filter which resource types from the ``Specification`` to extract.
 *         When passed as a ``string``, only the specified resource type will be extracted. When passed as a
 *         ``RegExp``, all matching resource types will be extracted. When passed as a ``function``, all resource
 *         types for which the function returned ``true`` will be extracted.
 *
 * @return a coherent sub-set of the ROS Resource specification, including all property types related
 *     to the selected resource types.
 */
function filteredSpecification(filter) {
    const spec = specification();
    const result = { ResourceTypes: {}, PropertyTypes: {}, Fingerprint: spec.Fingerprint };
    const predicate = makePredicate(filter);
    for (const type of resourceTypes()) {
        if (!predicate(type)) {
            continue;
        }
        result.ResourceTypes[type] = spec.ResourceTypes[type];
        const prefix = `${type}.`;
        for (const propType of Object.keys(spec.PropertyTypes).filter((n) => n.startsWith(prefix))) {
            result.PropertyTypes[propType] = spec.PropertyTypes[propType];
        }
    }
    result.Fingerprint = crypto.createHash('sha256').update(JSON.stringify(result)).digest('base64');
    return result;
}
exports.filteredSpecification = filteredSpecification;
/**
 * Creates a predicate function from a given filter.
 *
 * @param filter when provided as a ``string``, performs an exact match comparison.
 *         when provided as a ``RegExp``, performs uses ``str.match(RegExp)``.
 *         when provided as a ``function``, use the function as-is.
 *
 * @returns a predicate function.
 */
function makePredicate(filter) {
    if (typeof filter === 'string') {
        return (s) => s === filter;
    }
    else if (typeof filter === 'function') {
        return filter;
    }
    else {
        return (s) => s.match(filter) != null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBaUM7QUFDakMsbUNBQW1DO0FBQzFCLHdCQUFNO0FBRWY7O0dBRUc7QUFDSCxTQUFnQixhQUFhO0lBQzNCLGlFQUFpRTtJQUNqRSxPQUFPLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFIRCxzQ0FHQztBQUVELFNBQWdCLFFBQVE7SUFDdEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELDRCQUVDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixxQkFBcUIsQ0FBQyxRQUFnQjtJQUNwRCxNQUFNLEdBQUcsR0FBRyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDdkQ7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFORCxzREFNQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUMsUUFBZ0IsRUFBRSxZQUFvQjtJQUMxRSxNQUFNLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEUsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxRQUFRLHFCQUFxQixZQUFZLEVBQUUsQ0FBQyxDQUFDO0tBQzFFO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBTkQsc0RBTUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLGFBQWE7SUFDM0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCxzQ0FFQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVTtJQUN4QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQztBQUZELGdDQUVDO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILFNBQWdCLHFCQUFxQixDQUFDLE1BQWdDO0lBQ3BFLE1BQU0sSUFBSSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBRTdCLE1BQU0sTUFBTSxHQUF5QixFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdHLE1BQU0sU0FBUyxHQUFXLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxLQUFLLE1BQU0sSUFBSSxJQUFJLGFBQWEsRUFBRSxFQUFFO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEIsU0FBUztTQUNWO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELE1BQU0sTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDMUIsS0FBSyxNQUFNLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUMzRixNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEU7S0FDRjtJQUNELE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBakJELHNEQWlCQztBQUlEOzs7Ozs7OztHQVFHO0FBQ0gsU0FBUyxhQUFhLENBQUMsTUFBZ0M7SUFDckQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDOUIsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQztLQUM1QjtTQUFNLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO1FBQ3ZDLE9BQU8sTUFBZ0IsQ0FBQztLQUN6QjtTQUFNO1FBQ0wsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7S0FDdkM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgKiBhcyBzY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuZXhwb3J0IHsgc2NoZW1hIH07XG5cbi8qKlxuICogVGhlIGNvbXBsZXRlIFJPUyBSZXNvdXJjZSBzcGVjaWZpY2F0aW9uLCBoYXZpbmcgYW55IENESyBwYXRjaGVzIGFuZCBlbmhhbmNlbWVudHMgaW5jbHVkZWQgaW4gaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGVjaWZpY2F0aW9uKCk6IHNjaGVtYS5TcGVjaWZpY2F0aW9uIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgcmV0dXJuIHJlcXVpcmUoJy4uL3NwZWMvc3BlY2lmaWNhdGlvbi5qc29uJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxUeXBlcygpOiBzdHJpbmcge1xuICByZXR1cm4gcmVxdWlyZS5yZXNvbHZlKCcuLi9zcGVjL3R5cGVzLmpzb24nKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHJlc291cmNlIHNwZWNpZmljYXRpb24gZm9yIHRoZSBnaXZlbiB0eXBlbmFtZVxuICpcbiAqIFZhbGlkYXRlcyB0aGF0IHRoZSByZXNvdXJjZSBleGlzdHMuIElmIHlvdSBkb24ndCB3YW50IHRoaXMgdmFsaWRhdGluZyBiZWhhdmlvciwgcmVhZCBmcm9tXG4gKiBzcGVjaWZpY2F0aW9uKCkgZGlyZWN0bHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvdXJjZVNwZWNpZmljYXRpb24odHlwZU5hbWU6IHN0cmluZyk6IHNjaGVtYS5SZXNvdXJjZVR5cGUge1xuICBjb25zdCByZXQgPSBzcGVjaWZpY2F0aW9uKCkuUmVzb3VyY2VUeXBlc1t0eXBlTmFtZV07XG4gIGlmICghcmV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyBzdWNoIHJlc291cmNlIHR5cGU6ICR7dHlwZU5hbWV9YCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByb3BlcnR5IHNwZWNpZmljYXRpb24gZm9yIHRoZSBnaXZlbiByZXNvdXJjZSdzIHByb3BlcnR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVNwZWNpZmljYXRpb24odHlwZU5hbWU6IHN0cmluZywgcHJvcGVydHlOYW1lOiBzdHJpbmcpOiBzY2hlbWEuUHJvcGVydHkge1xuICBjb25zdCByZXQgPSByZXNvdXJjZVNwZWNpZmljYXRpb24odHlwZU5hbWUpLlByb3BlcnRpZXMhW3Byb3BlcnR5TmFtZV07XG4gIGlmICghcmV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSZXNvdXJjZSAke3R5cGVOYW1lfSBoYXMgbm8gcHJvcGVydHk6ICR7cHJvcGVydHlOYW1lfWApO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogVGhlIGxpc3Qgb2YgcmVzb3VyY2UgdHlwZSBuYW1lcyBkZWZpbmVkIGluIHRoZSBgYHNwZWNpZmljYXRpb25gYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc291cmNlVHlwZXMoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzcGVjaWZpY2F0aW9uKCkuUmVzb3VyY2VUeXBlcyk7XG59XG5cbi8qKlxuICogVGhlIGxpc3Qgb2YgbmFtZXNwYWNlcyBkZWZpbmVkIGluIHRoZSBgYHNwZWNpZmljYXRpb25gYCwgdGhhdCBpcyByZXNvdXJjZSBuYW1lIHByZWZpeGVzIGRvd24gdG8gdGhlIHNlY29uZCBgYDo6YGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2VzKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHJlc291cmNlVHlwZXMoKS5tYXAoKG4pID0+IG4uc3BsaXQoJzo6JywgMikuam9pbignOjonKSkpKTtcbn1cblxuLyoqXG4gKiBPYnRhaW4gYSBmaWx0ZXJlZCB2ZXJzaW9uIG9mIHRoZSBST1Mgc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBAcGFyYW0gZmlsdGVyIHRoZSBwcmVkaWNhdGUgdG8gYmUgdXNlZCBpbiBvcmRlciB0byBmaWx0ZXIgd2hpY2ggcmVzb3VyY2UgdHlwZXMgZnJvbSB0aGUgYGBTcGVjaWZpY2F0aW9uYGAgdG8gZXh0cmFjdC5cbiAqICAgICAgICAgV2hlbiBwYXNzZWQgYXMgYSBgYHN0cmluZ2BgLCBvbmx5IHRoZSBzcGVjaWZpZWQgcmVzb3VyY2UgdHlwZSB3aWxsIGJlIGV4dHJhY3RlZC4gV2hlbiBwYXNzZWQgYXMgYVxuICogICAgICAgICBgYFJlZ0V4cGBgLCBhbGwgbWF0Y2hpbmcgcmVzb3VyY2UgdHlwZXMgd2lsbCBiZSBleHRyYWN0ZWQuIFdoZW4gcGFzc2VkIGFzIGEgYGBmdW5jdGlvbmBgLCBhbGwgcmVzb3VyY2VcbiAqICAgICAgICAgdHlwZXMgZm9yIHdoaWNoIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBgYHRydWVgYCB3aWxsIGJlIGV4dHJhY3RlZC5cbiAqXG4gKiBAcmV0dXJuIGEgY29oZXJlbnQgc3ViLXNldCBvZiB0aGUgUk9TIFJlc291cmNlIHNwZWNpZmljYXRpb24sIGluY2x1ZGluZyBhbGwgcHJvcGVydHkgdHlwZXMgcmVsYXRlZFxuICogICAgIHRvIHRoZSBzZWxlY3RlZCByZXNvdXJjZSB0eXBlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcmVkU3BlY2lmaWNhdGlvbihmaWx0ZXI6IHN0cmluZyB8IFJlZ0V4cCB8IEZpbHRlcik6IHNjaGVtYS5TcGVjaWZpY2F0aW9uIHtcbiAgY29uc3Qgc3BlYyA9IHNwZWNpZmljYXRpb24oKTtcblxuICBjb25zdCByZXN1bHQ6IHNjaGVtYS5TcGVjaWZpY2F0aW9uID0geyBSZXNvdXJjZVR5cGVzOiB7fSwgUHJvcGVydHlUeXBlczoge30sIEZpbmdlcnByaW50OiBzcGVjLkZpbmdlcnByaW50IH07XG4gIGNvbnN0IHByZWRpY2F0ZTogRmlsdGVyID0gbWFrZVByZWRpY2F0ZShmaWx0ZXIpO1xuICBmb3IgKGNvbnN0IHR5cGUgb2YgcmVzb3VyY2VUeXBlcygpKSB7XG4gICAgaWYgKCFwcmVkaWNhdGUodHlwZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXN1bHQuUmVzb3VyY2VUeXBlc1t0eXBlXSA9IHNwZWMuUmVzb3VyY2VUeXBlc1t0eXBlXTtcbiAgICBjb25zdCBwcmVmaXggPSBgJHt0eXBlfS5gO1xuICAgIGZvciAoY29uc3QgcHJvcFR5cGUgb2YgT2JqZWN0LmtleXMoc3BlYy5Qcm9wZXJ0eVR5cGVzISkuZmlsdGVyKChuKSA9PiBuLnN0YXJ0c1dpdGgocHJlZml4KSkpIHtcbiAgICAgIHJlc3VsdC5Qcm9wZXJ0eVR5cGVzW3Byb3BUeXBlXSA9IHNwZWMuUHJvcGVydHlUeXBlcyFbcHJvcFR5cGVdO1xuICAgIH1cbiAgfVxuICByZXN1bHQuRmluZ2VycHJpbnQgPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpLmRpZ2VzdCgnYmFzZTY0Jyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB0eXBlIEZpbHRlciA9IChuYW1lOiBzdHJpbmcpID0+IGJvb2xlYW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIHByZWRpY2F0ZSBmdW5jdGlvbiBmcm9tIGEgZ2l2ZW4gZmlsdGVyLlxuICpcbiAqIEBwYXJhbSBmaWx0ZXIgd2hlbiBwcm92aWRlZCBhcyBhIGBgc3RyaW5nYGAsIHBlcmZvcm1zIGFuIGV4YWN0IG1hdGNoIGNvbXBhcmlzb24uXG4gKiAgICAgICAgIHdoZW4gcHJvdmlkZWQgYXMgYSBgYFJlZ0V4cGBgLCBwZXJmb3JtcyB1c2VzIGBgc3RyLm1hdGNoKFJlZ0V4cClgYC5cbiAqICAgICAgICAgd2hlbiBwcm92aWRlZCBhcyBhIGBgZnVuY3Rpb25gYCwgdXNlIHRoZSBmdW5jdGlvbiBhcy1pcy5cbiAqXG4gKiBAcmV0dXJucyBhIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWFrZVByZWRpY2F0ZShmaWx0ZXI6IHN0cmluZyB8IFJlZ0V4cCB8IEZpbHRlcik6IEZpbHRlciB7XG4gIGlmICh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiAocykgPT4gcyA9PT0gZmlsdGVyO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmlsdGVyIGFzIEZpbHRlcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKHMpID0+IHMubWF0Y2goZmlsdGVyKSAhPSBudWxsO1xuICB9XG59XG4iXX0=