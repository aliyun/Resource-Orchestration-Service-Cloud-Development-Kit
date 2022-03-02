"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareApp = void 0;
const constructs_1 = require("constructs");
const ros_resource_1 = require("../ros-resource");
const stack_1 = require("../stack");
const stage_1 = require("../stage");
const refs_1 = require("./refs");
/**
 * Prepares the app for synthesis. This function is called by the root `prepare`
 * (normally this the App, but if a Stack is a root, it is called by the stack),
 * which means it's the last 'prepare' that executes.
 *
 * It takes care of reifying cross-references between stacks (or nested stacks),
 * and of creating assets for nested stack templates.
 *
 * @param root The root of the construct tree.
 */
function prepareApp(root) {
    if (root.node.scope && !stage_1.Stage.isStage(root)) {
        throw new Error("prepareApp can only be called on a stage or a root construct");
    }
    // apply dependencies between resources in depending subtrees
    for (const dependency of root.node.dependencies) {
        const targetRosResources = findRosResources(dependency.target);
        const sourceRosResources = findRosResources(dependency.source);
        for (const target of targetRosResources) {
            for (const source of sourceRosResources) {
                source.addDependsOn(target);
            }
        }
    }
    // depth-first (children first) queue of nested stacks. We will pop a stack
    // from the head of this queue to prepare its template asset.
    const queue = findAllNestedStacks(root);
    while (true) {
        refs_1.resolveReferences(root);
        const nested = queue.shift();
        if (!nested) {
            break;
        }
        defineNestedStackAsset(nested);
    }
}
exports.prepareApp = prepareApp;
/**
 * Prepares the assets for nested stacks in this app.
 * @returns `true` if assets were added to the parent of a nested stack, which
 * implies that another round of reference resolution is in order. If this
 * function returns `false`, we know we are done.
 */
function defineNestedStackAsset(nestedStack) {
    // this is needed temporarily until we move NestedStack to '@alicloud/ros-cdk-core'.
    const nested = nestedStack;
    nested._prepareTemplateAsset();
}
function findAllNestedStacks(root) {
    const result = new Array();
    const includeStack = (stack) => {
        if (!stack_1.Stack.isStack(stack)) {
            return false;
        }
        if (!stack.nested) {
            return false;
        }
        // test: if we are not within a stage, then include it.
        if (!stage_1.Stage.of(stack)) {
            return true;
        }
        return stage_1.Stage.of(stack) === root;
    };
    // create a list of all nested stacks in depth-first post order this means
    // that we first prepare the leaves and then work our way up.
    for (const stack of root.node.findAll(constructs_1.ConstructOrder.POSTORDER /* <== important */)) {
        if (includeStack(stack)) {
            result.push(stack);
        }
    }
    return result;
}
/**
 * Find all resources in a set of constructs
 */
function findRosResources(root) {
    return root.node.findAll().filter(ros_resource_1.RosResource.isRosResource);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZS1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmVwYXJlLWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEM7QUFDNUMsa0RBQThDO0FBRTlDLG9DQUFpQztBQUNqQyxvQ0FBaUM7QUFDakMsaUNBQTJDO0FBRTNDOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLFVBQVUsQ0FBQyxJQUFnQjtJQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQyxNQUFNLElBQUksS0FBSyxDQUNiLDhEQUE4RCxDQUMvRCxDQUFDO0tBQ0g7SUFFRCw2REFBNkQ7SUFDN0QsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUMvQyxNQUFNLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxNQUFNLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvRCxLQUFLLE1BQU0sTUFBTSxJQUFJLGtCQUFrQixFQUFFO1lBQ3ZDLEtBQUssTUFBTSxNQUFNLElBQUksa0JBQWtCLEVBQUU7Z0JBQ3ZDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0I7U0FDRjtLQUNGO0lBRUQsMkVBQTJFO0lBQzNFLDZEQUE2RDtJQUM3RCxNQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QyxPQUFPLElBQUksRUFBRTtRQUNYLHdCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTTtTQUNQO1FBRUQsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEM7QUFDSCxDQUFDO0FBakNELGdDQWlDQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBQyxXQUFrQjtJQUNoRCxvRkFBb0Y7SUFDcEYsTUFBTSxNQUFNLEdBQTJCLFdBQWtCLENBQUM7SUFDMUQsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDakMsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsSUFBZ0I7SUFDM0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztJQUVsQyxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQWlCLEVBQWtCLEVBQUU7UUFDekQsSUFBSSxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLGFBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sYUFBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0lBRUYsMEVBQTBFO0lBQzFFLDZEQUE2RDtJQUM3RCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUNuQywyQkFBYyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDN0MsRUFBRTtRQUNELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsSUFBZ0I7SUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQywwQkFBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQy9ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RPcmRlciB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBSb3NSZXNvdXJjZSB9IGZyb20gXCIuLi9yb3MtcmVzb3VyY2VcIjtcbmltcG9ydCB7IElDb25zdHJ1Y3QgfSBmcm9tIFwiLi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi4vc3RhY2tcIjtcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4uL3N0YWdlXCI7XG5pbXBvcnQgeyByZXNvbHZlUmVmZXJlbmNlcyB9IGZyb20gXCIuL3JlZnNcIjtcblxuLyoqXG4gKiBQcmVwYXJlcyB0aGUgYXBwIGZvciBzeW50aGVzaXMuIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IHRoZSByb290IGBwcmVwYXJlYFxuICogKG5vcm1hbGx5IHRoaXMgdGhlIEFwcCwgYnV0IGlmIGEgU3RhY2sgaXMgYSByb290LCBpdCBpcyBjYWxsZWQgYnkgdGhlIHN0YWNrKSxcbiAqIHdoaWNoIG1lYW5zIGl0J3MgdGhlIGxhc3QgJ3ByZXBhcmUnIHRoYXQgZXhlY3V0ZXMuXG4gKlxuICogSXQgdGFrZXMgY2FyZSBvZiByZWlmeWluZyBjcm9zcy1yZWZlcmVuY2VzIGJldHdlZW4gc3RhY2tzIChvciBuZXN0ZWQgc3RhY2tzKSxcbiAqIGFuZCBvZiBjcmVhdGluZyBhc3NldHMgZm9yIG5lc3RlZCBzdGFjayB0ZW1wbGF0ZXMuXG4gKlxuICogQHBhcmFtIHJvb3QgVGhlIHJvb3Qgb2YgdGhlIGNvbnN0cnVjdCB0cmVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUFwcChyb290OiBJQ29uc3RydWN0KSB7XG4gIGlmIChyb290Lm5vZGUuc2NvcGUgJiYgIVN0YWdlLmlzU3RhZ2Uocm9vdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcInByZXBhcmVBcHAgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgc3RhZ2Ugb3IgYSByb290IGNvbnN0cnVjdFwiXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFwcGx5IGRlcGVuZGVuY2llcyBiZXR3ZWVuIHJlc291cmNlcyBpbiBkZXBlbmRpbmcgc3VidHJlZXNcbiAgZm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIHJvb3Qubm9kZS5kZXBlbmRlbmNpZXMpIHtcbiAgICBjb25zdCB0YXJnZXRSb3NSZXNvdXJjZXMgPSBmaW5kUm9zUmVzb3VyY2VzKGRlcGVuZGVuY3kudGFyZ2V0KTtcbiAgICBjb25zdCBzb3VyY2VSb3NSZXNvdXJjZXMgPSBmaW5kUm9zUmVzb3VyY2VzKGRlcGVuZGVuY3kuc291cmNlKTtcblxuICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldFJvc1Jlc291cmNlcykge1xuICAgICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlUm9zUmVzb3VyY2VzKSB7XG4gICAgICAgIHNvdXJjZS5hZGREZXBlbmRzT24odGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBkZXB0aC1maXJzdCAoY2hpbGRyZW4gZmlyc3QpIHF1ZXVlIG9mIG5lc3RlZCBzdGFja3MuIFdlIHdpbGwgcG9wIGEgc3RhY2tcbiAgLy8gZnJvbSB0aGUgaGVhZCBvZiB0aGlzIHF1ZXVlIHRvIHByZXBhcmUgaXRzIHRlbXBsYXRlIGFzc2V0LlxuICBjb25zdCBxdWV1ZSA9IGZpbmRBbGxOZXN0ZWRTdGFja3Mocm9vdCk7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICByZXNvbHZlUmVmZXJlbmNlcyhyb290KTtcblxuICAgIGNvbnN0IG5lc3RlZCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgaWYgKCFuZXN0ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmluZU5lc3RlZFN0YWNrQXNzZXQobmVzdGVkKTtcbiAgfVxufVxuXG4vKipcbiAqIFByZXBhcmVzIHRoZSBhc3NldHMgZm9yIG5lc3RlZCBzdGFja3MgaW4gdGhpcyBhcHAuXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgYXNzZXRzIHdlcmUgYWRkZWQgdG8gdGhlIHBhcmVudCBvZiBhIG5lc3RlZCBzdGFjaywgd2hpY2hcbiAqIGltcGxpZXMgdGhhdCBhbm90aGVyIHJvdW5kIG9mIHJlZmVyZW5jZSByZXNvbHV0aW9uIGlzIGluIG9yZGVyLiBJZiB0aGlzXG4gKiBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAsIHdlIGtub3cgd2UgYXJlIGRvbmUuXG4gKi9cbmZ1bmN0aW9uIGRlZmluZU5lc3RlZFN0YWNrQXNzZXQobmVzdGVkU3RhY2s6IFN0YWNrKSB7XG4gIC8vIHRoaXMgaXMgbmVlZGVkIHRlbXBvcmFyaWx5IHVudGlsIHdlIG1vdmUgTmVzdGVkU3RhY2sgdG8gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnLlxuICBjb25zdCBuZXN0ZWQ6IElOZXN0ZWRTdGFja1ByaXZhdGVBcGkgPSBuZXN0ZWRTdGFjayBhcyBhbnk7XG4gIG5lc3RlZC5fcHJlcGFyZVRlbXBsYXRlQXNzZXQoKTtcbn1cblxuZnVuY3Rpb24gZmluZEFsbE5lc3RlZFN0YWNrcyhyb290OiBJQ29uc3RydWN0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxTdGFjaz4oKTtcblxuICBjb25zdCBpbmNsdWRlU3RhY2sgPSAoc3RhY2s6IElDb25zdHJ1Y3QpOiBzdGFjayBpcyBTdGFjayA9PiB7XG4gICAgaWYgKCFTdGFjay5pc1N0YWNrKHN0YWNrKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXN0YWNrLm5lc3RlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHRlc3Q6IGlmIHdlIGFyZSBub3Qgd2l0aGluIGEgc3RhZ2UsIHRoZW4gaW5jbHVkZSBpdC5cbiAgICBpZiAoIVN0YWdlLm9mKHN0YWNrKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0YWdlLm9mKHN0YWNrKSA9PT0gcm9vdDtcbiAgfTtcblxuICAvLyBjcmVhdGUgYSBsaXN0IG9mIGFsbCBuZXN0ZWQgc3RhY2tzIGluIGRlcHRoLWZpcnN0IHBvc3Qgb3JkZXIgdGhpcyBtZWFuc1xuICAvLyB0aGF0IHdlIGZpcnN0IHByZXBhcmUgdGhlIGxlYXZlcyBhbmQgdGhlbiB3b3JrIG91ciB3YXkgdXAuXG4gIGZvciAoY29uc3Qgc3RhY2sgb2Ygcm9vdC5ub2RlLmZpbmRBbGwoXG4gICAgQ29uc3RydWN0T3JkZXIuUE9TVE9SREVSIC8qIDw9PSBpbXBvcnRhbnQgKi9cbiAgKSkge1xuICAgIGlmIChpbmNsdWRlU3RhY2soc3RhY2spKSB7XG4gICAgICByZXN1bHQucHVzaChzdGFjayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGaW5kIGFsbCByZXNvdXJjZXMgaW4gYSBzZXQgb2YgY29uc3RydWN0c1xuICovXG5mdW5jdGlvbiBmaW5kUm9zUmVzb3VyY2VzKHJvb3Q6IElDb25zdHJ1Y3QpOiBSb3NSZXNvdXJjZVtdIHtcbiAgcmV0dXJuIHJvb3Qubm9kZS5maW5kQWxsKCkuZmlsdGVyKFJvc1Jlc291cmNlLmlzUm9zUmVzb3VyY2UpO1xufVxuXG5pbnRlcmZhY2UgSU5lc3RlZFN0YWNrUHJpdmF0ZUFwaSB7XG4gIF9wcmVwYXJlVGVtcGxhdGVBc3NldCgpOiBib29sZWFuO1xufVxuIl19