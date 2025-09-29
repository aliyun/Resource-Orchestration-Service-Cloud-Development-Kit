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
        (0, refs_1.resolveReferences)(root);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZS1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmVwYXJlLWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEM7QUFDNUMsa0RBQThDO0FBRTlDLG9DQUFpQztBQUNqQyxvQ0FBaUM7QUFDakMsaUNBQTJDO0FBRTNDOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLFVBQVUsQ0FBQyxJQUFnQjtJQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQyxNQUFNLElBQUksS0FBSyxDQUNiLDhEQUE4RCxDQUMvRCxDQUFDO0tBQ0g7SUFFRCw2REFBNkQ7SUFDN0QsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUMvQyxNQUFNLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxNQUFNLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvRCxLQUFLLE1BQU0sTUFBTSxJQUFJLGtCQUFrQixFQUFFO1lBQ3ZDLEtBQUssTUFBTSxNQUFNLElBQUksa0JBQWtCLEVBQUU7Z0JBQ3ZDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0I7U0FDRjtLQUNGO0lBRUQsMkVBQTJFO0lBQzNFLDZEQUE2RDtJQUM3RCxNQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QyxPQUFPLElBQUksRUFBRTtRQUNYLElBQUEsd0JBQWlCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNO1NBQ1A7UUFFRCxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoQztBQUNILENBQUM7QUFqQ0QsZ0NBaUNDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLHNCQUFzQixDQUFDLFdBQWtCO0lBQ2hELG9GQUFvRjtJQUNwRixNQUFNLE1BQU0sR0FBMkIsV0FBa0IsQ0FBQztJQUMxRCxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNqQyxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxJQUFnQjtJQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBUyxDQUFDO0lBRWxDLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBaUIsRUFBa0IsRUFBRTtRQUN6RCxJQUFJLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsYUFBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxhQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQztJQUNsQyxDQUFDLENBQUM7SUFFRiwwRUFBMEU7SUFDMUUsNkRBQTZEO0lBQzdELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ25DLDJCQUFjLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUM3QyxFQUFFO1FBQ0QsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFnQjtJQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLDBCQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDL0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdE9yZGVyIH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IFJvc1Jlc291cmNlIH0gZnJvbSBcIi4uL3Jvcy1yZXNvdXJjZVwiO1xuaW1wb3J0IHsgSUNvbnN0cnVjdCB9IGZyb20gXCIuLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuLi9zdGFja1wiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi4vc3RhZ2VcIjtcbmltcG9ydCB7IHJlc29sdmVSZWZlcmVuY2VzIH0gZnJvbSBcIi4vcmVmc1wiO1xuXG4vKipcbiAqIFByZXBhcmVzIHRoZSBhcHAgZm9yIHN5bnRoZXNpcy4gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgdGhlIHJvb3QgYHByZXBhcmVgXG4gKiAobm9ybWFsbHkgdGhpcyB0aGUgQXBwLCBidXQgaWYgYSBTdGFjayBpcyBhIHJvb3QsIGl0IGlzIGNhbGxlZCBieSB0aGUgc3RhY2spLFxuICogd2hpY2ggbWVhbnMgaXQncyB0aGUgbGFzdCAncHJlcGFyZScgdGhhdCBleGVjdXRlcy5cbiAqXG4gKiBJdCB0YWtlcyBjYXJlIG9mIHJlaWZ5aW5nIGNyb3NzLXJlZmVyZW5jZXMgYmV0d2VlbiBzdGFja3MgKG9yIG5lc3RlZCBzdGFja3MpLFxuICogYW5kIG9mIGNyZWF0aW5nIGFzc2V0cyBmb3IgbmVzdGVkIHN0YWNrIHRlbXBsYXRlcy5cbiAqXG4gKiBAcGFyYW0gcm9vdCBUaGUgcm9vdCBvZiB0aGUgY29uc3RydWN0IHRyZWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlQXBwKHJvb3Q6IElDb25zdHJ1Y3QpIHtcbiAgaWYgKHJvb3Qubm9kZS5zY29wZSAmJiAhU3RhZ2UuaXNTdGFnZShyb290KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwicHJlcGFyZUFwcCBjYW4gb25seSBiZSBjYWxsZWQgb24gYSBzdGFnZSBvciBhIHJvb3QgY29uc3RydWN0XCJcbiAgICApO1xuICB9XG5cbiAgLy8gYXBwbHkgZGVwZW5kZW5jaWVzIGJldHdlZW4gcmVzb3VyY2VzIGluIGRlcGVuZGluZyBzdWJ0cmVlc1xuICBmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2Ygcm9vdC5ub2RlLmRlcGVuZGVuY2llcykge1xuICAgIGNvbnN0IHRhcmdldFJvc1Jlc291cmNlcyA9IGZpbmRSb3NSZXNvdXJjZXMoZGVwZW5kZW5jeS50YXJnZXQpO1xuICAgIGNvbnN0IHNvdXJjZVJvc1Jlc291cmNlcyA9IGZpbmRSb3NSZXNvdXJjZXMoZGVwZW5kZW5jeS5zb3VyY2UpO1xuXG4gICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0Um9zUmVzb3VyY2VzKSB7XG4gICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VSb3NSZXNvdXJjZXMpIHtcbiAgICAgICAgc291cmNlLmFkZERlcGVuZHNPbih0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGRlcHRoLWZpcnN0IChjaGlsZHJlbiBmaXJzdCkgcXVldWUgb2YgbmVzdGVkIHN0YWNrcy4gV2Ugd2lsbCBwb3AgYSBzdGFja1xuICAvLyBmcm9tIHRoZSBoZWFkIG9mIHRoaXMgcXVldWUgdG8gcHJlcGFyZSBpdHMgdGVtcGxhdGUgYXNzZXQuXG4gIGNvbnN0IHF1ZXVlID0gZmluZEFsbE5lc3RlZFN0YWNrcyhyb290KTtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHJlc29sdmVSZWZlcmVuY2VzKHJvb3QpO1xuXG4gICAgY29uc3QgbmVzdGVkID0gcXVldWUuc2hpZnQoKTtcbiAgICBpZiAoIW5lc3RlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmaW5lTmVzdGVkU3RhY2tBc3NldChuZXN0ZWQpO1xuICB9XG59XG5cbi8qKlxuICogUHJlcGFyZXMgdGhlIGFzc2V0cyBmb3IgbmVzdGVkIHN0YWNrcyBpbiB0aGlzIGFwcC5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBhc3NldHMgd2VyZSBhZGRlZCB0byB0aGUgcGFyZW50IG9mIGEgbmVzdGVkIHN0YWNrLCB3aGljaFxuICogaW1wbGllcyB0aGF0IGFub3RoZXIgcm91bmQgb2YgcmVmZXJlbmNlIHJlc29sdXRpb24gaXMgaW4gb3JkZXIuIElmIHRoaXNcbiAqIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCwgd2Uga25vdyB3ZSBhcmUgZG9uZS5cbiAqL1xuZnVuY3Rpb24gZGVmaW5lTmVzdGVkU3RhY2tBc3NldChuZXN0ZWRTdGFjazogU3RhY2spIHtcbiAgLy8gdGhpcyBpcyBuZWVkZWQgdGVtcG9yYXJpbHkgdW50aWwgd2UgbW92ZSBOZXN0ZWRTdGFjayB0byAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZScuXG4gIGNvbnN0IG5lc3RlZDogSU5lc3RlZFN0YWNrUHJpdmF0ZUFwaSA9IG5lc3RlZFN0YWNrIGFzIGFueTtcbiAgbmVzdGVkLl9wcmVwYXJlVGVtcGxhdGVBc3NldCgpO1xufVxuXG5mdW5jdGlvbiBmaW5kQWxsTmVzdGVkU3RhY2tzKHJvb3Q6IElDb25zdHJ1Y3QpIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFN0YWNrPigpO1xuXG4gIGNvbnN0IGluY2x1ZGVTdGFjayA9IChzdGFjazogSUNvbnN0cnVjdCk6IHN0YWNrIGlzIFN0YWNrID0+IHtcbiAgICBpZiAoIVN0YWNrLmlzU3RhY2soc3RhY2spKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghc3RhY2submVzdGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdGVzdDogaWYgd2UgYXJlIG5vdCB3aXRoaW4gYSBzdGFnZSwgdGhlbiBpbmNsdWRlIGl0LlxuICAgIGlmICghU3RhZ2Uub2Yoc3RhY2spKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RhZ2Uub2Yoc3RhY2spID09PSByb290O1xuICB9O1xuXG4gIC8vIGNyZWF0ZSBhIGxpc3Qgb2YgYWxsIG5lc3RlZCBzdGFja3MgaW4gZGVwdGgtZmlyc3QgcG9zdCBvcmRlciB0aGlzIG1lYW5zXG4gIC8vIHRoYXQgd2UgZmlyc3QgcHJlcGFyZSB0aGUgbGVhdmVzIGFuZCB0aGVuIHdvcmsgb3VyIHdheSB1cC5cbiAgZm9yIChjb25zdCBzdGFjayBvZiByb290Lm5vZGUuZmluZEFsbChcbiAgICBDb25zdHJ1Y3RPcmRlci5QT1NUT1JERVIgLyogPD09IGltcG9ydGFudCAqL1xuICApKSB7XG4gICAgaWYgKGluY2x1ZGVTdGFjayhzdGFjaykpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHN0YWNrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZpbmQgYWxsIHJlc291cmNlcyBpbiBhIHNldCBvZiBjb25zdHJ1Y3RzXG4gKi9cbmZ1bmN0aW9uIGZpbmRSb3NSZXNvdXJjZXMocm9vdDogSUNvbnN0cnVjdCk6IFJvc1Jlc291cmNlW10ge1xuICByZXR1cm4gcm9vdC5ub2RlLmZpbmRBbGwoKS5maWx0ZXIoUm9zUmVzb3VyY2UuaXNSb3NSZXNvdXJjZSk7XG59XG5cbmludGVyZmFjZSBJTmVzdGVkU3RhY2tQcml2YXRlQXBpIHtcbiAgX3ByZXBhcmVUZW1wbGF0ZUFzc2V0KCk6IGJvb2xlYW47XG59XG4iXX0=