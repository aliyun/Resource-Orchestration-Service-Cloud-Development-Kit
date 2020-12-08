"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertBound = exports.addStackArtifactToAssembly = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const construct_compat_1 = require("../construct-compat");
const stack_1 = require("../stack");
/**
 * Shared logic of writing stack artifact to the Cloud Assembly
 *
 * This logic is shared between StackSyntheses.
 *
 * It could have been a protected method on a base class, but it
 * uses `Partial<cxapi.AliyunRosStackProperties>` in the
 * parameters (which is convenient so I can remain typesafe without
 * copy/pasting), and jsii will choke on this type.
 */
function addStackArtifactToAssembly(session, stack, stackProps, additionalStackDependencies) {
    // nested stack tags are applied at the ALIYUN::ROS::Stack resource
    // level and are not needed in the cloud assembly.
    // TODO: move these to the cloud assembly artifact properties instead of metadata
    if (stack.tags.hasTags()) {
        stack.node.addMetadata(cxschema.ArtifactMetadataEntryType.STACK_TAGS, stack.tags.renderTags());
    }
    const deps = [
        ...stack.dependencies.map((s) => s.artifactId),
        ...additionalStackDependencies,
    ];
    const meta = collectStackMetadata(stack);
    // backwards compatibility since originally artifact ID was always equal to
    // stack name the stackName attribute is optional and if it is not specified
    // the CLI will use the artifact ID as the stack name. we *could have*
    // always put the stack name here but wanted to minimize the risk around
    // changes to the assembly manifest. so this means that as long as stack
    // name and artifact ID are the same, the cloud assembly manifest will not
    // change.
    const stackNameProperty = stack.stackName === stack.artifactId ? {} : { stackName: stack.stackName };
    const properties = {
        templateFile: stack.templateFile,
        ...stackProps,
        ...stackNameProperty,
    };
    // add an artifact that represents this stack
    session.assembly.addArtifact(stack.artifactId, {
        type: cxschema.ArtifactType.ALIYUN_ROS_STACK,
        properties,
        dependencies: deps.length > 0 ? deps : undefined,
        metadata: Object.keys(meta).length > 0 ? meta : undefined,
    });
}
exports.addStackArtifactToAssembly = addStackArtifactToAssembly;
/**
 * Collect the metadata from a stack
 */
function collectStackMetadata(stack) {
    const output = {};
    visit(stack);
    return output;
    function visit(node) {
        // break off if we reached a node that is not a child of this stack
        const parent = findParentStack(node);
        if (parent !== stack) {
            return;
        }
        if (node.node.metadata.length > 0) {
            // Make the path absolute
            output[construct_compat_1.ConstructNode.PATH_SEP + node.node.path] = node.node.metadata.map((md) => stack.resolve(md));
        }
        for (const child of node.node.children) {
            visit(child);
        }
    }
    function findParentStack(node) {
        if (node instanceof stack_1.Stack && node.nestedStackParent === undefined) {
            return node;
        }
        if (!node.node.scope) {
            return undefined;
        }
        return findParentStack(node.node.scope);
    }
}
/**
 * Throw an error message about binding() if we don't have a value for x.
 *
 * This replaces the ! assertions we would need everywhere otherwise.
 */
function assertBound(x) {
    if (x === null && x === undefined) {
        throw new Error("You must call bindStack() first");
    }
}
exports.assertBound = assertBound;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3NoYXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIl9zaGFyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThEO0FBQzlELDBEQUk2QjtBQUM3QixvQ0FBaUM7QUFFakM7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBZ0IsMEJBQTBCLENBQ3hDLE9BQTBCLEVBQzFCLEtBQVksRUFDWixVQUFzRCxFQUN0RCwyQkFBcUM7SUFFckMsbUVBQW1FO0lBQ25FLGtEQUFrRDtJQUNsRCxpRkFBaUY7SUFDakYsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUNwQixRQUFRLENBQUMseUJBQXlCLENBQUMsVUFBVSxFQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUN4QixDQUFDO0tBQ0g7SUFFRCxNQUFNLElBQUksR0FBRztRQUNYLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDOUMsR0FBRywyQkFBMkI7S0FDL0IsQ0FBQztJQUNGLE1BQU0sSUFBSSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpDLDJFQUEyRTtJQUMzRSw0RUFBNEU7SUFDNUUsc0VBQXNFO0lBQ3RFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLFVBQVU7SUFDVixNQUFNLGlCQUFpQixHQUNyQixLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRTdFLE1BQU0sVUFBVSxHQUFzQztRQUNwRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7UUFDaEMsR0FBRyxVQUFVO1FBQ2IsR0FBRyxpQkFBaUI7S0FDckIsQ0FBQztJQUVGLDZDQUE2QztJQUM3QyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO1FBQzdDLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLGdCQUFnQjtRQUM1QyxVQUFVO1FBQ1YsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDaEQsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQzFELENBQUMsQ0FBQztBQUNMLENBQUM7QUE3Q0QsZ0VBNkNDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLG9CQUFvQixDQUFDLEtBQVk7SUFDeEMsTUFBTSxNQUFNLEdBQStDLEVBQUUsQ0FBQztJQUU5RCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFYixPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsS0FBSyxDQUFDLElBQWdCO1FBQzdCLG1FQUFtRTtRQUNuRSxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQyx5QkFBeUI7WUFDekIsTUFBTSxDQUFDLGdDQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUN0RSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQTJCLENBQ3BELENBQUM7U0FDSDtRQUVELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsU0FBUyxlQUFlLENBQUMsSUFBZ0I7UUFDdkMsSUFBSSxJQUFJLFlBQVksYUFBSyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFJLENBQWdCO0lBQzdDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztLQUNwRDtBQUNILENBQUM7QUFKRCxrQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWFcIjtcbmltcG9ydCB7XG4gIENvbnN0cnVjdE5vZGUsXG4gIElDb25zdHJ1Y3QsXG4gIElTeW50aGVzaXNTZXNzaW9uLFxufSBmcm9tIFwiLi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi4vc3RhY2tcIjtcblxuLyoqXG4gKiBTaGFyZWQgbG9naWMgb2Ygd3JpdGluZyBzdGFjayBhcnRpZmFjdCB0byB0aGUgQ2xvdWQgQXNzZW1ibHlcbiAqXG4gKiBUaGlzIGxvZ2ljIGlzIHNoYXJlZCBiZXR3ZWVuIFN0YWNrU3ludGhlc2VzLlxuICpcbiAqIEl0IGNvdWxkIGhhdmUgYmVlbiBhIHByb3RlY3RlZCBtZXRob2Qgb24gYSBiYXNlIGNsYXNzLCBidXQgaXRcbiAqIHVzZXMgYFBhcnRpYWw8Y3hhcGkuQWxpeXVuUm9zU3RhY2tQcm9wZXJ0aWVzPmAgaW4gdGhlXG4gKiBwYXJhbWV0ZXJzICh3aGljaCBpcyBjb252ZW5pZW50IHNvIEkgY2FuIHJlbWFpbiB0eXBlc2FmZSB3aXRob3V0XG4gKiBjb3B5L3Bhc3RpbmcpLCBhbmQganNpaSB3aWxsIGNob2tlIG9uIHRoaXMgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFN0YWNrQXJ0aWZhY3RUb0Fzc2VtYmx5KFxuICBzZXNzaW9uOiBJU3ludGhlc2lzU2Vzc2lvbixcbiAgc3RhY2s6IFN0YWNrLFxuICBzdGFja1Byb3BzOiBQYXJ0aWFsPGN4c2NoZW1hLkFsaXl1blJvc1N0YWNrUHJvcGVydGllcz4sXG4gIGFkZGl0aW9uYWxTdGFja0RlcGVuZGVuY2llczogc3RyaW5nW11cbikge1xuICAvLyBuZXN0ZWQgc3RhY2sgdGFncyBhcmUgYXBwbGllZCBhdCB0aGUgQUxJWVVOOjpST1M6OlN0YWNrIHJlc291cmNlXG4gIC8vIGxldmVsIGFuZCBhcmUgbm90IG5lZWRlZCBpbiB0aGUgY2xvdWQgYXNzZW1ibHkuXG4gIC8vIFRPRE86IG1vdmUgdGhlc2UgdG8gdGhlIGNsb3VkIGFzc2VtYmx5IGFydGlmYWN0IHByb3BlcnRpZXMgaW5zdGVhZCBvZiBtZXRhZGF0YVxuICBpZiAoc3RhY2sudGFncy5oYXNUYWdzKCkpIHtcbiAgICBzdGFjay5ub2RlLmFkZE1ldGFkYXRhKFxuICAgICAgY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5TVEFDS19UQUdTLFxuICAgICAgc3RhY2sudGFncy5yZW5kZXJUYWdzKClcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZGVwcyA9IFtcbiAgICAuLi5zdGFjay5kZXBlbmRlbmNpZXMubWFwKChzKSA9PiBzLmFydGlmYWN0SWQpLFxuICAgIC4uLmFkZGl0aW9uYWxTdGFja0RlcGVuZGVuY2llcyxcbiAgXTtcbiAgY29uc3QgbWV0YSA9IGNvbGxlY3RTdGFja01ldGFkYXRhKHN0YWNrKTtcblxuICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBzaW5jZSBvcmlnaW5hbGx5IGFydGlmYWN0IElEIHdhcyBhbHdheXMgZXF1YWwgdG9cbiAgLy8gc3RhY2sgbmFtZSB0aGUgc3RhY2tOYW1lIGF0dHJpYnV0ZSBpcyBvcHRpb25hbCBhbmQgaWYgaXQgaXMgbm90IHNwZWNpZmllZFxuICAvLyB0aGUgQ0xJIHdpbGwgdXNlIHRoZSBhcnRpZmFjdCBJRCBhcyB0aGUgc3RhY2sgbmFtZS4gd2UgKmNvdWxkIGhhdmUqXG4gIC8vIGFsd2F5cyBwdXQgdGhlIHN0YWNrIG5hbWUgaGVyZSBidXQgd2FudGVkIHRvIG1pbmltaXplIHRoZSByaXNrIGFyb3VuZFxuICAvLyBjaGFuZ2VzIHRvIHRoZSBhc3NlbWJseSBtYW5pZmVzdC4gc28gdGhpcyBtZWFucyB0aGF0IGFzIGxvbmcgYXMgc3RhY2tcbiAgLy8gbmFtZSBhbmQgYXJ0aWZhY3QgSUQgYXJlIHRoZSBzYW1lLCB0aGUgY2xvdWQgYXNzZW1ibHkgbWFuaWZlc3Qgd2lsbCBub3RcbiAgLy8gY2hhbmdlLlxuICBjb25zdCBzdGFja05hbWVQcm9wZXJ0eSA9XG4gICAgc3RhY2suc3RhY2tOYW1lID09PSBzdGFjay5hcnRpZmFjdElkID8ge30gOiB7IHN0YWNrTmFtZTogc3RhY2suc3RhY2tOYW1lIH07XG5cbiAgY29uc3QgcHJvcGVydGllczogY3hzY2hlbWEuQWxpeXVuUm9zU3RhY2tQcm9wZXJ0aWVzID0ge1xuICAgIHRlbXBsYXRlRmlsZTogc3RhY2sudGVtcGxhdGVGaWxlLFxuICAgIC4uLnN0YWNrUHJvcHMsXG4gICAgLi4uc3RhY2tOYW1lUHJvcGVydHksXG4gIH07XG5cbiAgLy8gYWRkIGFuIGFydGlmYWN0IHRoYXQgcmVwcmVzZW50cyB0aGlzIHN0YWNrXG4gIHNlc3Npb24uYXNzZW1ibHkuYWRkQXJ0aWZhY3Qoc3RhY2suYXJ0aWZhY3RJZCwge1xuICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0VHlwZS5BTElZVU5fUk9TX1NUQUNLLFxuICAgIHByb3BlcnRpZXMsXG4gICAgZGVwZW5kZW5jaWVzOiBkZXBzLmxlbmd0aCA+IDAgPyBkZXBzIDogdW5kZWZpbmVkLFxuICAgIG1ldGFkYXRhOiBPYmplY3Qua2V5cyhtZXRhKS5sZW5ndGggPiAwID8gbWV0YSA6IHVuZGVmaW5lZCxcbiAgfSk7XG59XG5cbi8qKlxuICogQ29sbGVjdCB0aGUgbWV0YWRhdGEgZnJvbSBhIHN0YWNrXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RTdGFja01ldGFkYXRhKHN0YWNrOiBTdGFjaykge1xuICBjb25zdCBvdXRwdXQ6IHsgW2lkOiBzdHJpbmddOiBjeHNjaGVtYS5NZXRhZGF0YUVudHJ5W10gfSA9IHt9O1xuXG4gIHZpc2l0KHN0YWNrKTtcblxuICByZXR1cm4gb3V0cHV0O1xuXG4gIGZ1bmN0aW9uIHZpc2l0KG5vZGU6IElDb25zdHJ1Y3QpIHtcbiAgICAvLyBicmVhayBvZmYgaWYgd2UgcmVhY2hlZCBhIG5vZGUgdGhhdCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIHN0YWNrXG4gICAgY29uc3QgcGFyZW50ID0gZmluZFBhcmVudFN0YWNrKG5vZGUpO1xuICAgIGlmIChwYXJlbnQgIT09IHN0YWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZS5tZXRhZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBNYWtlIHRoZSBwYXRoIGFic29sdXRlXG4gICAgICBvdXRwdXRbQ29uc3RydWN0Tm9kZS5QQVRIX1NFUCArIG5vZGUubm9kZS5wYXRoXSA9IG5vZGUubm9kZS5tZXRhZGF0YS5tYXAoXG4gICAgICAgIChtZCkgPT4gc3RhY2sucmVzb2x2ZShtZCkgYXMgY3hzY2hlbWEuTWV0YWRhdGFFbnRyeVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUubm9kZS5jaGlsZHJlbikge1xuICAgICAgdmlzaXQoY2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRQYXJlbnRTdGFjayhub2RlOiBJQ29uc3RydWN0KTogU3RhY2sgfCB1bmRlZmluZWQge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU3RhY2sgJiYgbm9kZS5uZXN0ZWRTdGFja1BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUubm9kZS5zY29wZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmluZFBhcmVudFN0YWNrKG5vZGUubm9kZS5zY29wZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaHJvdyBhbiBlcnJvciBtZXNzYWdlIGFib3V0IGJpbmRpbmcoKSBpZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgZm9yIHguXG4gKlxuICogVGhpcyByZXBsYWNlcyB0aGUgISBhc3NlcnRpb25zIHdlIHdvdWxkIG5lZWQgZXZlcnl3aGVyZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRCb3VuZDxBPih4OiBBIHwgdW5kZWZpbmVkKTogYXNzZXJ0cyB4IGlzIE5vbk51bGxhYmxlPEE+IHtcbiAgaWYgKHggPT09IG51bGwgJiYgeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgY2FsbCBiaW5kU3RhY2soKSBmaXJzdFwiKTtcbiAgfVxufVxuIl19