"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDependency = void 0;
const stack_1 = require("./stack");
const stage_1 = require("./stage");
const util_1 = require("./util");
/**
 * Adds a dependency between two resources or stacks, across stack and nested
 * stack boundaries.
 *
 * The algorithm consists of:
 * - Try to find the deepest common stack between the two elements
 * - If there isn't a common stack, it means the elements belong to two
 *   disjoined stack-trees and therefore we apply the dependency at the
 *   assembly/app level between the two topl-level stacks.
 * - If we did find a common stack, we apply the dependency as a template
 *   "DependsOn" between the resources that "represent" our source and target
 *   either directly or through the Stack resources that
 *   "lead" to them.
 *
 * @param source The source resource/stack (the depedent)
 * @param target The target resource/stack (the dependency)
 * @param reason Optional resource to associate with the dependency for
 * diagnostics
 */
function addDependency(source, target, reason) {
    if (source === target) {
        return;
    }
    const sourceStack = stack_1.Stack.of(source);
    const targetStack = stack_1.Stack.of(target);
    const sourceStage = stage_1.Stage.of(sourceStack);
    const targetStage = stage_1.Stage.of(targetStack);
    if (sourceStage !== targetStage) {
        throw new Error(`You cannot add a dependency from '${source.node.path}' (in ${describeStage(sourceStage)}) to '${target.node.path}' (in ${describeStage(targetStage)}): dependency cannot cross stage boundaries`);
    }
    // find the deepest common stack between the two elements
    const sourcePath = (0, util_1.pathToTopLevelStack)(sourceStack);
    const targetPath = (0, util_1.pathToTopLevelStack)(targetStack);
    const commonStack = (0, util_1.findLastCommonElement)(sourcePath, targetPath);
    // if there is no common stack, then define a assembly-level dependency
    // between the two top-level stacks
    if (!commonStack) {
        const topLevelSource = sourcePath[0]; // first path element is the top-level stack
        const topLevelTarget = targetPath[0];
        topLevelSource._addAssemblyDependency(topLevelTarget, reason);
        return;
    }
    // assertion: at this point if source and target are stacks, both are nested stacks.
    // since we have a common stack, it is impossible that both are top-level
    // stacks, so let's examine the two cases where one of them is top-level and
    // the other is nested.
    // case 1 - source is top-level and target is nested: this implies that
    // `target` is a direct or indirect nested stack of `source`, and an explicit
    // dependency is not required because nested stacks will always be deployed
    // before their parents.
    if (commonStack === source) {
        return;
    }
    // case 2 - source is nested and target is top-level: this implies that
    // `source` is a direct or indirect nested stack of `target`, and this is not
    // possible (nested stacks cannot depend on their parents).
    if (commonStack === target) {
        throw new Error(`Nested stack '${sourceStack.node.path}' cannot depend on a parent stack '${targetStack.node.path}': ${reason}`);
    }
    // we have a common stack from which we can reach both `source` and `target`
    // now we need to find two resources which are defined directly in this stack
    // and which can "lead us" to the source/target.
    const sourceResource = resourceInCommonStackFor(source);
    const targetResource = resourceInCommonStackFor(target);
    sourceResource._addResourceDependency(targetResource);
    function resourceInCommonStackFor(element) {
        const resource = stack_1.Stack.isStack(element)
            ? element.nestedStackResource
            : element;
        if (!resource) {
            throw new Error("assertion failure"); // see "assertion" above
        }
        const resourceStack = stack_1.Stack.of(resource);
        // we reached a resource defined in the common stack
        if (commonStack === resourceStack) {
            return resource;
        }
        return resourceInCommonStackFor(resourceStack);
    }
}
exports.addDependency = addDependency;
/**
 * Return a string representation of the given assembler, for use in error messages
 */
function describeStage(assembly) {
    if (!assembly) {
        return "an unrooted construct tree";
    }
    if (!assembly.parentStage) {
        return "the App";
    }
    return `Stage '${assembly.node.path}'`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQWdDO0FBQ2hDLG1DQUFnQztBQUNoQyxpQ0FHZ0I7QUFJaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILFNBQWdCLGFBQWEsQ0FDM0IsTUFBUyxFQUNULE1BQVMsRUFDVCxNQUFlO0lBRWYsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3JCLE9BQU87S0FDUjtJQUVELE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsTUFBTSxXQUFXLEdBQUcsYUFBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQyxNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsSUFBSSxXQUFXLEtBQUssV0FBVyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQ2IscUNBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUNkLFNBQVMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQ2QsU0FBUyxhQUFhLENBQ3BCLFdBQVcsQ0FDWiw2Q0FBNkMsQ0FDL0MsQ0FBQztLQUNIO0lBRUQseURBQXlEO0lBQ3pELE1BQU0sVUFBVSxHQUFHLElBQUEsMEJBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxNQUFNLFVBQVUsR0FBRyxJQUFBLDBCQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsTUFBTSxXQUFXLEdBQUcsSUFBQSw0QkFBcUIsRUFBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFbEUsdUVBQXVFO0lBQ3ZFLG1DQUFtQztJQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2hCLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDRDQUE0QztRQUNsRixNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxPQUFPO0tBQ1I7SUFFRCxvRkFBb0Y7SUFDcEYseUVBQXlFO0lBQ3pFLDRFQUE0RTtJQUM1RSx1QkFBdUI7SUFFdkIsdUVBQXVFO0lBQ3ZFLDZFQUE2RTtJQUM3RSwyRUFBMkU7SUFDM0Usd0JBQXdCO0lBQ3hCLElBQUksV0FBVyxLQUFLLE1BQU0sRUFBRTtRQUMxQixPQUFPO0tBQ1I7SUFFRCx1RUFBdUU7SUFDdkUsNkVBQTZFO0lBQzdFLDJEQUEyRDtJQUMzRCxJQUFJLFdBQVcsS0FBSyxNQUFNLEVBQUU7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FDYixpQkFBaUIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLHNDQUFzQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxNQUFNLEVBQUUsQ0FDaEgsQ0FBQztLQUNIO0lBRUQsNEVBQTRFO0lBQzVFLDZFQUE2RTtJQUM3RSxnREFBZ0Q7SUFDaEQsTUFBTSxjQUFjLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsTUFBTSxjQUFjLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsY0FBYyxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXRELFNBQVMsd0JBQXdCLENBQUMsT0FBNEI7UUFDNUQsTUFBTSxRQUFRLEdBQUcsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDckMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUI7WUFDN0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyx3QkFBd0I7U0FDL0Q7UUFFRCxNQUFNLGFBQWEsR0FBRyxhQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLG9EQUFvRDtRQUNwRCxJQUFJLFdBQVcsS0FBSyxhQUFhLEVBQUU7WUFDakMsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFFRCxPQUFPLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7QUFDSCxDQUFDO0FBdEZELHNDQXNGQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxhQUFhLENBQUMsUUFBMkI7SUFDaEQsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLE9BQU8sNEJBQTRCLENBQUM7S0FDckM7SUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUN6QixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE9BQU8sVUFBVSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3NSZXNvdXJjZSB9IGZyb20gXCIuL3Jvcy1yZXNvdXJjZVwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi9zdGFja1wiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZVwiO1xuaW1wb3J0IHtcbiAgZmluZExhc3RDb21tb25FbGVtZW50LFxuICBwYXRoVG9Ub3BMZXZlbFN0YWNrIGFzIHBhdGhUb1Jvb3QsXG59IGZyb20gXCIuL3V0aWxcIjtcblxudHlwZSBFbGVtZW50ID0gUm9zUmVzb3VyY2UgfCBTdGFjaztcblxuLyoqXG4gKiBBZGRzIGEgZGVwZW5kZW5jeSBiZXR3ZWVuIHR3byByZXNvdXJjZXMgb3Igc3RhY2tzLCBhY3Jvc3Mgc3RhY2sgYW5kIG5lc3RlZFxuICogc3RhY2sgYm91bmRhcmllcy5cbiAqXG4gKiBUaGUgYWxnb3JpdGhtIGNvbnNpc3RzIG9mOlxuICogLSBUcnkgdG8gZmluZCB0aGUgZGVlcGVzdCBjb21tb24gc3RhY2sgYmV0d2VlbiB0aGUgdHdvIGVsZW1lbnRzXG4gKiAtIElmIHRoZXJlIGlzbid0IGEgY29tbW9uIHN0YWNrLCBpdCBtZWFucyB0aGUgZWxlbWVudHMgYmVsb25nIHRvIHR3b1xuICogICBkaXNqb2luZWQgc3RhY2stdHJlZXMgYW5kIHRoZXJlZm9yZSB3ZSBhcHBseSB0aGUgZGVwZW5kZW5jeSBhdCB0aGVcbiAqICAgYXNzZW1ibHkvYXBwIGxldmVsIGJldHdlZW4gdGhlIHR3byB0b3BsLWxldmVsIHN0YWNrcy5cbiAqIC0gSWYgd2UgZGlkIGZpbmQgYSBjb21tb24gc3RhY2ssIHdlIGFwcGx5IHRoZSBkZXBlbmRlbmN5IGFzIGEgdGVtcGxhdGVcbiAqICAgXCJEZXBlbmRzT25cIiBiZXR3ZWVuIHRoZSByZXNvdXJjZXMgdGhhdCBcInJlcHJlc2VudFwiIG91ciBzb3VyY2UgYW5kIHRhcmdldFxuICogICBlaXRoZXIgZGlyZWN0bHkgb3IgdGhyb3VnaCB0aGUgU3RhY2sgcmVzb3VyY2VzIHRoYXRcbiAqICAgXCJsZWFkXCIgdG8gdGhlbS5cbiAqXG4gKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2UgcmVzb3VyY2Uvc3RhY2sgKHRoZSBkZXBlZGVudClcbiAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCByZXNvdXJjZS9zdGFjayAodGhlIGRlcGVuZGVuY3kpXG4gKiBAcGFyYW0gcmVhc29uIE9wdGlvbmFsIHJlc291cmNlIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBkZXBlbmRlbmN5IGZvclxuICogZGlhZ25vc3RpY3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlcGVuZGVuY3k8VCBleHRlbmRzIEVsZW1lbnQ+KFxuICBzb3VyY2U6IFQsXG4gIHRhcmdldDogVCxcbiAgcmVhc29uPzogc3RyaW5nXG4pIHtcbiAgaWYgKHNvdXJjZSA9PT0gdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc291cmNlU3RhY2sgPSBTdGFjay5vZihzb3VyY2UpO1xuICBjb25zdCB0YXJnZXRTdGFjayA9IFN0YWNrLm9mKHRhcmdldCk7XG5cbiAgY29uc3Qgc291cmNlU3RhZ2UgPSBTdGFnZS5vZihzb3VyY2VTdGFjayk7XG4gIGNvbnN0IHRhcmdldFN0YWdlID0gU3RhZ2Uub2YodGFyZ2V0U3RhY2spO1xuICBpZiAoc291cmNlU3RhZ2UgIT09IHRhcmdldFN0YWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFlvdSBjYW5ub3QgYWRkIGEgZGVwZW5kZW5jeSBmcm9tICcke1xuICAgICAgICBzb3VyY2Uubm9kZS5wYXRoXG4gICAgICB9JyAoaW4gJHtkZXNjcmliZVN0YWdlKHNvdXJjZVN0YWdlKX0pIHRvICcke1xuICAgICAgICB0YXJnZXQubm9kZS5wYXRoXG4gICAgICB9JyAoaW4gJHtkZXNjcmliZVN0YWdlKFxuICAgICAgICB0YXJnZXRTdGFnZVxuICAgICAgKX0pOiBkZXBlbmRlbmN5IGNhbm5vdCBjcm9zcyBzdGFnZSBib3VuZGFyaWVzYFxuICAgICk7XG4gIH1cblxuICAvLyBmaW5kIHRoZSBkZWVwZXN0IGNvbW1vbiBzdGFjayBiZXR3ZWVuIHRoZSB0d28gZWxlbWVudHNcbiAgY29uc3Qgc291cmNlUGF0aCA9IHBhdGhUb1Jvb3Qoc291cmNlU3RhY2spO1xuICBjb25zdCB0YXJnZXRQYXRoID0gcGF0aFRvUm9vdCh0YXJnZXRTdGFjayk7XG4gIGNvbnN0IGNvbW1vblN0YWNrID0gZmluZExhc3RDb21tb25FbGVtZW50KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpO1xuXG4gIC8vIGlmIHRoZXJlIGlzIG5vIGNvbW1vbiBzdGFjaywgdGhlbiBkZWZpbmUgYSBhc3NlbWJseS1sZXZlbCBkZXBlbmRlbmN5XG4gIC8vIGJldHdlZW4gdGhlIHR3byB0b3AtbGV2ZWwgc3RhY2tzXG4gIGlmICghY29tbW9uU3RhY2spIHtcbiAgICBjb25zdCB0b3BMZXZlbFNvdXJjZSA9IHNvdXJjZVBhdGhbMF07IC8vIGZpcnN0IHBhdGggZWxlbWVudCBpcyB0aGUgdG9wLWxldmVsIHN0YWNrXG4gICAgY29uc3QgdG9wTGV2ZWxUYXJnZXQgPSB0YXJnZXRQYXRoWzBdO1xuICAgIHRvcExldmVsU291cmNlLl9hZGRBc3NlbWJseURlcGVuZGVuY3kodG9wTGV2ZWxUYXJnZXQsIHJlYXNvbik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gYXNzZXJ0aW9uOiBhdCB0aGlzIHBvaW50IGlmIHNvdXJjZSBhbmQgdGFyZ2V0IGFyZSBzdGFja3MsIGJvdGggYXJlIG5lc3RlZCBzdGFja3MuXG4gIC8vIHNpbmNlIHdlIGhhdmUgYSBjb21tb24gc3RhY2ssIGl0IGlzIGltcG9zc2libGUgdGhhdCBib3RoIGFyZSB0b3AtbGV2ZWxcbiAgLy8gc3RhY2tzLCBzbyBsZXQncyBleGFtaW5lIHRoZSB0d28gY2FzZXMgd2hlcmUgb25lIG9mIHRoZW0gaXMgdG9wLWxldmVsIGFuZFxuICAvLyB0aGUgb3RoZXIgaXMgbmVzdGVkLlxuXG4gIC8vIGNhc2UgMSAtIHNvdXJjZSBpcyB0b3AtbGV2ZWwgYW5kIHRhcmdldCBpcyBuZXN0ZWQ6IHRoaXMgaW1wbGllcyB0aGF0XG4gIC8vIGB0YXJnZXRgIGlzIGEgZGlyZWN0IG9yIGluZGlyZWN0IG5lc3RlZCBzdGFjayBvZiBgc291cmNlYCwgYW5kIGFuIGV4cGxpY2l0XG4gIC8vIGRlcGVuZGVuY3kgaXMgbm90IHJlcXVpcmVkIGJlY2F1c2UgbmVzdGVkIHN0YWNrcyB3aWxsIGFsd2F5cyBiZSBkZXBsb3llZFxuICAvLyBiZWZvcmUgdGhlaXIgcGFyZW50cy5cbiAgaWYgKGNvbW1vblN0YWNrID09PSBzb3VyY2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBjYXNlIDIgLSBzb3VyY2UgaXMgbmVzdGVkIGFuZCB0YXJnZXQgaXMgdG9wLWxldmVsOiB0aGlzIGltcGxpZXMgdGhhdFxuICAvLyBgc291cmNlYCBpcyBhIGRpcmVjdCBvciBpbmRpcmVjdCBuZXN0ZWQgc3RhY2sgb2YgYHRhcmdldGAsIGFuZCB0aGlzIGlzIG5vdFxuICAvLyBwb3NzaWJsZSAobmVzdGVkIHN0YWNrcyBjYW5ub3QgZGVwZW5kIG9uIHRoZWlyIHBhcmVudHMpLlxuICBpZiAoY29tbW9uU3RhY2sgPT09IHRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBOZXN0ZWQgc3RhY2sgJyR7c291cmNlU3RhY2subm9kZS5wYXRofScgY2Fubm90IGRlcGVuZCBvbiBhIHBhcmVudCBzdGFjayAnJHt0YXJnZXRTdGFjay5ub2RlLnBhdGh9JzogJHtyZWFzb259YFxuICAgICk7XG4gIH1cblxuICAvLyB3ZSBoYXZlIGEgY29tbW9uIHN0YWNrIGZyb20gd2hpY2ggd2UgY2FuIHJlYWNoIGJvdGggYHNvdXJjZWAgYW5kIGB0YXJnZXRgXG4gIC8vIG5vdyB3ZSBuZWVkIHRvIGZpbmQgdHdvIHJlc291cmNlcyB3aGljaCBhcmUgZGVmaW5lZCBkaXJlY3RseSBpbiB0aGlzIHN0YWNrXG4gIC8vIGFuZCB3aGljaCBjYW4gXCJsZWFkIHVzXCIgdG8gdGhlIHNvdXJjZS90YXJnZXQuXG4gIGNvbnN0IHNvdXJjZVJlc291cmNlID0gcmVzb3VyY2VJbkNvbW1vblN0YWNrRm9yKHNvdXJjZSk7XG4gIGNvbnN0IHRhcmdldFJlc291cmNlID0gcmVzb3VyY2VJbkNvbW1vblN0YWNrRm9yKHRhcmdldCk7XG4gIHNvdXJjZVJlc291cmNlLl9hZGRSZXNvdXJjZURlcGVuZGVuY3kodGFyZ2V0UmVzb3VyY2UpO1xuXG4gIGZ1bmN0aW9uIHJlc291cmNlSW5Db21tb25TdGFja0ZvcihlbGVtZW50OiBSb3NSZXNvdXJjZSB8IFN0YWNrKTogUm9zUmVzb3VyY2Uge1xuICAgIGNvbnN0IHJlc291cmNlID0gU3RhY2suaXNTdGFjayhlbGVtZW50KVxuICAgICAgPyBlbGVtZW50Lm5lc3RlZFN0YWNrUmVzb3VyY2VcbiAgICAgIDogZWxlbWVudDtcbiAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnRpb24gZmFpbHVyZVwiKTsgLy8gc2VlIFwiYXNzZXJ0aW9uXCIgYWJvdmVcbiAgICB9XG5cbiAgICBjb25zdCByZXNvdXJjZVN0YWNrID0gU3RhY2sub2YocmVzb3VyY2UpO1xuXG4gICAgLy8gd2UgcmVhY2hlZCBhIHJlc291cmNlIGRlZmluZWQgaW4gdGhlIGNvbW1vbiBzdGFja1xuICAgIGlmIChjb21tb25TdGFjayA9PT0gcmVzb3VyY2VTdGFjaykge1xuICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvdXJjZUluQ29tbW9uU3RhY2tGb3IocmVzb3VyY2VTdGFjayk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGFzc2VtYmxlciwgZm9yIHVzZSBpbiBlcnJvciBtZXNzYWdlc1xuICovXG5mdW5jdGlvbiBkZXNjcmliZVN0YWdlKGFzc2VtYmx5OiBTdGFnZSB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGlmICghYXNzZW1ibHkpIHtcbiAgICByZXR1cm4gXCJhbiB1bnJvb3RlZCBjb25zdHJ1Y3QgdHJlZVwiO1xuICB9XG4gIGlmICghYXNzZW1ibHkucGFyZW50U3RhZ2UpIHtcbiAgICByZXR1cm4gXCJ0aGUgQXBwXCI7XG4gIH1cbiAgcmV0dXJuIGBTdGFnZSAnJHthc3NlbWJseS5ub2RlLnBhdGh9J2A7XG59XG4iXX0=