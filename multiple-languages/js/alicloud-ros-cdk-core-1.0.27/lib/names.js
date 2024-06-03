"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Names = void 0;
const encoding_1 = require("./private/encoding");
const unique_resource_name_1 = require("./private/unique-resource-name");
const uniqueid_1 = require("./private/uniqueid");
const stack_1 = require("./stack");
/**
 * Functions for devising unique names for constructs. For example, those can be
 * used to allocate unique physical names for resources.
 */
class Names {
    /**
     * Returns a ROS-compatible unique identifier for a construct based
     * on its path. The identifier includes a human readable portion rendered
     * from the path components and a hash suffix. uniqueId is not unique if multiple
     * copies of the stack are deployed. Prefer using uniqueResourceName().
     *
     * @param construct The construct
     * @returns a unique id based on the construct path
     */
    static uniqueId(construct) {
        const node = construct.node;
        const components = node.scopes.slice(1).map(c => c.node.id);
        return components.length > 0 ? uniqueid_1.makeUniqueId(components) : '';
    }
    /**
     * Returns a ROS-compatible unique identifier for a construct based
     * on its path. The identifier includes a human readable portion rendered
     * from the path components and a hash suffix.
     *
     * TODO (v2): replace with API to use `constructs.Node`.
     *
     * @param node The construct node
     * @returns a unique id based on the construct path
     */
    static nodeUniqueId(node) {
        const components = node.scopes.slice(1).map(c => c.node.id);
        return components.length > 0 ? uniqueid_1.makeUniqueId(components) : '';
    }
    /**
     * Returns a ROS-compatible unique identifier for a construct based
     * on its path. This function finds the stackName of the parent stack (non-nested)
     * to the construct, and the ids of the components in the construct path.
     *
     * The user can define allowed special characters, a separator between the elements,
     * and the maximum length of the resource name. The name includes a human readable portion rendered
     * from the path components, with or without user defined separators, and a hash suffix.
     * If the resource name is longer than the maximum length, it is trimmed in the middle.
     *
     * @param construct The construct
     * @param options Options for defining the unique resource name
     * @returns a unique resource name based on the construct path
     */
    static uniqueResourceName(construct, options) {
        const node = construct.node;
        const componentsPath = node.scopes.slice(node.scopes.indexOf(node.scopes.reverse()
            .find(component => (stack_1.Stack.isStack(component) && !encoding_1.unresolved(component.stackName))))).map(component => stack_1.Stack.isStack(component) && !encoding_1.unresolved(component.stackName) ? component.stackName : component.node.id);
        return unique_resource_name_1.makeUniqueResourceName(componentsPath, options);
    }
    constructor() { }
}
exports.Names = Names;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpREFBZ0Q7QUFDaEQseUVBQXdFO0FBQ3hFLGlEQUFrRDtBQUNsRCxtQ0FBZ0M7QUE2QmhDOzs7R0FHRztBQUNILE1BQWEsS0FBSztJQUNoQjs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBcUI7UUFDMUMsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUM1QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFtQjtRQUM1QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFxQixFQUFFLE9BQWtDO1FBQ3hGLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFNUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7YUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMscUJBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBRSxDQUNwRixDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVILE9BQU8sNkNBQXNCLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxnQkFBdUIsQ0FBQztDQUN6QjtBQXhERCxzQkF3REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnN0cnVjdE5vZGUsIElDb25zdHJ1Y3R9IGZyb20gXCIuL2NvbnN0cnVjdC1jb21wYXRcIjtcbmltcG9ydCB7IHVucmVzb2x2ZWQgfSBmcm9tICcuL3ByaXZhdGUvZW5jb2RpbmcnO1xuaW1wb3J0IHsgbWFrZVVuaXF1ZVJlc291cmNlTmFtZSB9IGZyb20gJy4vcHJpdmF0ZS91bmlxdWUtcmVzb3VyY2UtbmFtZSc7XG5pbXBvcnQgeyBtYWtlVW5pcXVlSWQgfSBmcm9tICcuL3ByaXZhdGUvdW5pcXVlaWQnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICcuL3N0YWNrJztcblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhIHVuaXF1ZSByZXNvdXJjZSBuYW1lLlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgVW5pcXVlUmVzb3VyY2VOYW1lT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgdW5pcXVlIHJlc291cmNlIG5hbWUuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gMjU2XG4gICAqL1xuICByZWFkb25seSBtYXhMZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzZXBhcmF0b3IgdXNlZCBiZXR3ZWVuIHRoZSBwYXRoIGNvbXBvbmVudHMuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm9uZVxuICAgKi9cbiAgcmVhZG9ubHkgc2VwYXJhdG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOb24tYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYWxsb3dlZCBpbiB0aGUgdW5pcXVlIHJlc291cmNlIG5hbWUuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm9uZVxuICAgKi9cbiAgcmVhZG9ubHkgYWxsb3dlZFNwZWNpYWxDaGFyYWN0ZXJzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9ucyBmb3IgZGV2aXNpbmcgdW5pcXVlIG5hbWVzIGZvciBjb25zdHJ1Y3RzLiBGb3IgZXhhbXBsZSwgdGhvc2UgY2FuIGJlXG4gKiB1c2VkIHRvIGFsbG9jYXRlIHVuaXF1ZSBwaHlzaWNhbCBuYW1lcyBmb3IgcmVzb3VyY2VzLlxuICovXG5leHBvcnQgY2xhc3MgTmFtZXMge1xuICAvKipcbiAgICogUmV0dXJucyBhIFJPUy1jb21wYXRpYmxlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBhIGNvbnN0cnVjdCBiYXNlZFxuICAgKiBvbiBpdHMgcGF0aC4gVGhlIGlkZW50aWZpZXIgaW5jbHVkZXMgYSBodW1hbiByZWFkYWJsZSBwb3J0aW9uIHJlbmRlcmVkXG4gICAqIGZyb20gdGhlIHBhdGggY29tcG9uZW50cyBhbmQgYSBoYXNoIHN1ZmZpeC4gdW5pcXVlSWQgaXMgbm90IHVuaXF1ZSBpZiBtdWx0aXBsZVxuICAgKiBjb3BpZXMgb2YgdGhlIHN0YWNrIGFyZSBkZXBsb3llZC4gUHJlZmVyIHVzaW5nIHVuaXF1ZVJlc291cmNlTmFtZSgpLlxuICAgKlxuICAgKiBAcGFyYW0gY29uc3RydWN0IFRoZSBjb25zdHJ1Y3RcbiAgICogQHJldHVybnMgYSB1bmlxdWUgaWQgYmFzZWQgb24gdGhlIGNvbnN0cnVjdCBwYXRoXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHVuaXF1ZUlkKGNvbnN0cnVjdDogSUNvbnN0cnVjdCk6IHN0cmluZyB7XG4gICAgY29uc3Qgbm9kZSA9IGNvbnN0cnVjdC5ub2RlO1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBub2RlLnNjb3Blcy5zbGljZSgxKS5tYXAoYyA9PiBjLm5vZGUuaWQpO1xuICAgIHJldHVybiBjb21wb25lbnRzLmxlbmd0aCA+IDAgPyBtYWtlVW5pcXVlSWQoY29tcG9uZW50cykgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgUk9TLWNvbXBhdGlibGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGEgY29uc3RydWN0IGJhc2VkXG4gICAqIG9uIGl0cyBwYXRoLiBUaGUgaWRlbnRpZmllciBpbmNsdWRlcyBhIGh1bWFuIHJlYWRhYmxlIHBvcnRpb24gcmVuZGVyZWRcbiAgICogZnJvbSB0aGUgcGF0aCBjb21wb25lbnRzIGFuZCBhIGhhc2ggc3VmZml4LlxuICAgKlxuICAgKiBUT0RPICh2Mik6IHJlcGxhY2Ugd2l0aCBBUEkgdG8gdXNlIGBjb25zdHJ1Y3RzLk5vZGVgLlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZSBUaGUgY29uc3RydWN0IG5vZGVcbiAgICogQHJldHVybnMgYSB1bmlxdWUgaWQgYmFzZWQgb24gdGhlIGNvbnN0cnVjdCBwYXRoXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG5vZGVVbmlxdWVJZChub2RlOiBDb25zdHJ1Y3ROb2RlKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gbm9kZS5zY29wZXMuc2xpY2UoMSkubWFwKGMgPT4gYy5ub2RlLmlkKTtcbiAgICByZXR1cm4gY29tcG9uZW50cy5sZW5ndGggPiAwID8gbWFrZVVuaXF1ZUlkKGNvbXBvbmVudHMpIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIFJPUy1jb21wYXRpYmxlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBhIGNvbnN0cnVjdCBiYXNlZFxuICAgKiBvbiBpdHMgcGF0aC4gVGhpcyBmdW5jdGlvbiBmaW5kcyB0aGUgc3RhY2tOYW1lIG9mIHRoZSBwYXJlbnQgc3RhY2sgKG5vbi1uZXN0ZWQpXG4gICAqIHRvIHRoZSBjb25zdHJ1Y3QsIGFuZCB0aGUgaWRzIG9mIHRoZSBjb21wb25lbnRzIGluIHRoZSBjb25zdHJ1Y3QgcGF0aC5cbiAgICpcbiAgICogVGhlIHVzZXIgY2FuIGRlZmluZSBhbGxvd2VkIHNwZWNpYWwgY2hhcmFjdGVycywgYSBzZXBhcmF0b3IgYmV0d2VlbiB0aGUgZWxlbWVudHMsXG4gICAqIGFuZCB0aGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIHJlc291cmNlIG5hbWUuIFRoZSBuYW1lIGluY2x1ZGVzIGEgaHVtYW4gcmVhZGFibGUgcG9ydGlvbiByZW5kZXJlZFxuICAgKiBmcm9tIHRoZSBwYXRoIGNvbXBvbmVudHMsIHdpdGggb3Igd2l0aG91dCB1c2VyIGRlZmluZWQgc2VwYXJhdG9ycywgYW5kIGEgaGFzaCBzdWZmaXguXG4gICAqIElmIHRoZSByZXNvdXJjZSBuYW1lIGlzIGxvbmdlciB0aGFuIHRoZSBtYXhpbXVtIGxlbmd0aCwgaXQgaXMgdHJpbW1lZCBpbiB0aGUgbWlkZGxlLlxuICAgKlxuICAgKiBAcGFyYW0gY29uc3RydWN0IFRoZSBjb25zdHJ1Y3RcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgZGVmaW5pbmcgdGhlIHVuaXF1ZSByZXNvdXJjZSBuYW1lXG4gICAqIEByZXR1cm5zIGEgdW5pcXVlIHJlc291cmNlIG5hbWUgYmFzZWQgb24gdGhlIGNvbnN0cnVjdCBwYXRoXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHVuaXF1ZVJlc291cmNlTmFtZShjb25zdHJ1Y3Q6IElDb25zdHJ1Y3QsIG9wdGlvbnM6IFVuaXF1ZVJlc291cmNlTmFtZU9wdGlvbnMpIHtcbiAgICBjb25zdCBub2RlID0gY29uc3RydWN0Lm5vZGU7XG5cbiAgICBjb25zdCBjb21wb25lbnRzUGF0aCA9IG5vZGUuc2NvcGVzLnNsaWNlKG5vZGUuc2NvcGVzLmluZGV4T2Yobm9kZS5zY29wZXMucmV2ZXJzZSgpXG4gICAgICAuZmluZChjb21wb25lbnQgPT4gKFN0YWNrLmlzU3RhY2soY29tcG9uZW50KSAmJiAhdW5yZXNvbHZlZChjb21wb25lbnQuc3RhY2tOYW1lKSkpISxcbiAgICApKS5tYXAoY29tcG9uZW50ID0+IFN0YWNrLmlzU3RhY2soY29tcG9uZW50KSAmJiAhdW5yZXNvbHZlZChjb21wb25lbnQuc3RhY2tOYW1lKSA/IGNvbXBvbmVudC5zdGFja05hbWUgOiBjb21wb25lbnQubm9kZS5pZCk7XG5cbiAgICByZXR1cm4gbWFrZVVuaXF1ZVJlc291cmNlTmFtZShjb21wb25lbnRzUGF0aCwgb3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==