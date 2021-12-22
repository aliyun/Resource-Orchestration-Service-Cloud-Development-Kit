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
        tags: nonEmptyDict(stack.tags.tagValues()),
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
function nonEmptyDict(xs) {
    return Object.keys(xs).length > 0 ? xs : undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3NoYXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIl9zaGFyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThEO0FBQzlELDBEQUk2QjtBQUM3QixvQ0FBaUM7QUFFakM7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBZ0IsMEJBQTBCLENBQ3RDLE9BQTBCLEVBQzFCLEtBQVksRUFDWixVQUFzRCxFQUN0RCwyQkFBcUM7SUFFdkMsbUVBQW1FO0lBQ25FLGtEQUFrRDtJQUNsRCxpRkFBaUY7SUFDakYsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUNsQixRQUFRLENBQUMseUJBQXlCLENBQUMsVUFBVSxFQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUMxQixDQUFDO0tBQ0g7SUFFRCxNQUFNLElBQUksR0FBRztRQUNYLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDOUMsR0FBRywyQkFBMkI7S0FDL0IsQ0FBQztJQUNGLE1BQU0sSUFBSSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpDLDJFQUEyRTtJQUMzRSw0RUFBNEU7SUFDNUUsc0VBQXNFO0lBQ3RFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLFVBQVU7SUFDVixNQUFNLGlCQUFpQixHQUNuQixLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRS9FLE1BQU0sVUFBVSxHQUFzQztRQUNwRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7UUFDaEMsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLEdBQUcsVUFBVTtRQUNiLEdBQUcsaUJBQWlCO0tBQ3JCLENBQUM7SUFFRiw2Q0FBNkM7SUFDN0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUM3QyxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0I7UUFDNUMsVUFBVTtRQUNWLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ2hELFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztLQUMxRCxDQUFDLENBQUM7QUFDTCxDQUFDO0FBOUNELGdFQThDQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBQyxLQUFZO0lBQ3hDLE1BQU0sTUFBTSxHQUErQyxFQUFFLENBQUM7SUFFOUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWIsT0FBTyxNQUFNLENBQUM7SUFFZCxTQUFTLEtBQUssQ0FBQyxJQUFnQjtRQUM3QixtRUFBbUU7UUFDbkUsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakMseUJBQXlCO1lBQ3pCLE1BQU0sQ0FBQyxnQ0FBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDcEUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUEyQixDQUN0RCxDQUFDO1NBQ0g7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELFNBQVMsZUFBZSxDQUFDLElBQWdCO1FBQ3ZDLElBQUksSUFBSSxZQUFZLGFBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxFQUFFO1lBQ2pFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLFdBQVcsQ0FBSSxDQUFnQjtJQUM3QyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7S0FDcEQ7QUFDSCxDQUFDO0FBSkQsa0NBSUM7QUFFRCxTQUFTLFlBQVksQ0FBSSxFQUFxQjtJQUM1QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWFcIjtcbmltcG9ydCB7XG4gIENvbnN0cnVjdE5vZGUsXG4gIElDb25zdHJ1Y3QsXG4gIElTeW50aGVzaXNTZXNzaW9uLFxufSBmcm9tIFwiLi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi4vc3RhY2tcIjtcblxuLyoqXG4gKiBTaGFyZWQgbG9naWMgb2Ygd3JpdGluZyBzdGFjayBhcnRpZmFjdCB0byB0aGUgQ2xvdWQgQXNzZW1ibHlcbiAqXG4gKiBUaGlzIGxvZ2ljIGlzIHNoYXJlZCBiZXR3ZWVuIFN0YWNrU3ludGhlc2VzLlxuICpcbiAqIEl0IGNvdWxkIGhhdmUgYmVlbiBhIHByb3RlY3RlZCBtZXRob2Qgb24gYSBiYXNlIGNsYXNzLCBidXQgaXRcbiAqIHVzZXMgYFBhcnRpYWw8Y3hhcGkuQWxpeXVuUm9zU3RhY2tQcm9wZXJ0aWVzPmAgaW4gdGhlXG4gKiBwYXJhbWV0ZXJzICh3aGljaCBpcyBjb252ZW5pZW50IHNvIEkgY2FuIHJlbWFpbiB0eXBlc2FmZSB3aXRob3V0XG4gKiBjb3B5L3Bhc3RpbmcpLCBhbmQganNpaSB3aWxsIGNob2tlIG9uIHRoaXMgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFN0YWNrQXJ0aWZhY3RUb0Fzc2VtYmx5KFxuICAgIHNlc3Npb246IElTeW50aGVzaXNTZXNzaW9uLFxuICAgIHN0YWNrOiBTdGFjayxcbiAgICBzdGFja1Byb3BzOiBQYXJ0aWFsPGN4c2NoZW1hLkFsaXl1blJvc1N0YWNrUHJvcGVydGllcz4sXG4gICAgYWRkaXRpb25hbFN0YWNrRGVwZW5kZW5jaWVzOiBzdHJpbmdbXVxuKSB7XG4gIC8vIG5lc3RlZCBzdGFjayB0YWdzIGFyZSBhcHBsaWVkIGF0IHRoZSBBTElZVU46OlJPUzo6U3RhY2sgcmVzb3VyY2VcbiAgLy8gbGV2ZWwgYW5kIGFyZSBub3QgbmVlZGVkIGluIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAgLy8gVE9ETzogbW92ZSB0aGVzZSB0byB0aGUgY2xvdWQgYXNzZW1ibHkgYXJ0aWZhY3QgcHJvcGVydGllcyBpbnN0ZWFkIG9mIG1ldGFkYXRhXG4gIGlmIChzdGFjay50YWdzLmhhc1RhZ3MoKSkge1xuICAgIHN0YWNrLm5vZGUuYWRkTWV0YWRhdGEoXG4gICAgICAgIGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyxcbiAgICAgICAgc3RhY2sudGFncy5yZW5kZXJUYWdzKClcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZGVwcyA9IFtcbiAgICAuLi5zdGFjay5kZXBlbmRlbmNpZXMubWFwKChzKSA9PiBzLmFydGlmYWN0SWQpLFxuICAgIC4uLmFkZGl0aW9uYWxTdGFja0RlcGVuZGVuY2llcyxcbiAgXTtcbiAgY29uc3QgbWV0YSA9IGNvbGxlY3RTdGFja01ldGFkYXRhKHN0YWNrKTtcblxuICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBzaW5jZSBvcmlnaW5hbGx5IGFydGlmYWN0IElEIHdhcyBhbHdheXMgZXF1YWwgdG9cbiAgLy8gc3RhY2sgbmFtZSB0aGUgc3RhY2tOYW1lIGF0dHJpYnV0ZSBpcyBvcHRpb25hbCBhbmQgaWYgaXQgaXMgbm90IHNwZWNpZmllZFxuICAvLyB0aGUgQ0xJIHdpbGwgdXNlIHRoZSBhcnRpZmFjdCBJRCBhcyB0aGUgc3RhY2sgbmFtZS4gd2UgKmNvdWxkIGhhdmUqXG4gIC8vIGFsd2F5cyBwdXQgdGhlIHN0YWNrIG5hbWUgaGVyZSBidXQgd2FudGVkIHRvIG1pbmltaXplIHRoZSByaXNrIGFyb3VuZFxuICAvLyBjaGFuZ2VzIHRvIHRoZSBhc3NlbWJseSBtYW5pZmVzdC4gc28gdGhpcyBtZWFucyB0aGF0IGFzIGxvbmcgYXMgc3RhY2tcbiAgLy8gbmFtZSBhbmQgYXJ0aWZhY3QgSUQgYXJlIHRoZSBzYW1lLCB0aGUgY2xvdWQgYXNzZW1ibHkgbWFuaWZlc3Qgd2lsbCBub3RcbiAgLy8gY2hhbmdlLlxuICBjb25zdCBzdGFja05hbWVQcm9wZXJ0eSA9XG4gICAgICBzdGFjay5zdGFja05hbWUgPT09IHN0YWNrLmFydGlmYWN0SWQgPyB7fSA6IHsgc3RhY2tOYW1lOiBzdGFjay5zdGFja05hbWUgfTtcblxuICBjb25zdCBwcm9wZXJ0aWVzOiBjeHNjaGVtYS5BbGl5dW5Sb3NTdGFja1Byb3BlcnRpZXMgPSB7XG4gICAgdGVtcGxhdGVGaWxlOiBzdGFjay50ZW1wbGF0ZUZpbGUsXG4gICAgdGFnczogbm9uRW1wdHlEaWN0KHN0YWNrLnRhZ3MudGFnVmFsdWVzKCkpLFxuICAgIC4uLnN0YWNrUHJvcHMsXG4gICAgLi4uc3RhY2tOYW1lUHJvcGVydHksXG4gIH07XG5cbiAgLy8gYWRkIGFuIGFydGlmYWN0IHRoYXQgcmVwcmVzZW50cyB0aGlzIHN0YWNrXG4gIHNlc3Npb24uYXNzZW1ibHkuYWRkQXJ0aWZhY3Qoc3RhY2suYXJ0aWZhY3RJZCwge1xuICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0VHlwZS5BTElZVU5fUk9TX1NUQUNLLFxuICAgIHByb3BlcnRpZXMsXG4gICAgZGVwZW5kZW5jaWVzOiBkZXBzLmxlbmd0aCA+IDAgPyBkZXBzIDogdW5kZWZpbmVkLFxuICAgIG1ldGFkYXRhOiBPYmplY3Qua2V5cyhtZXRhKS5sZW5ndGggPiAwID8gbWV0YSA6IHVuZGVmaW5lZCxcbiAgfSk7XG59XG5cbi8qKlxuICogQ29sbGVjdCB0aGUgbWV0YWRhdGEgZnJvbSBhIHN0YWNrXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RTdGFja01ldGFkYXRhKHN0YWNrOiBTdGFjaykge1xuICBjb25zdCBvdXRwdXQ6IHsgW2lkOiBzdHJpbmddOiBjeHNjaGVtYS5NZXRhZGF0YUVudHJ5W10gfSA9IHt9O1xuXG4gIHZpc2l0KHN0YWNrKTtcblxuICByZXR1cm4gb3V0cHV0O1xuXG4gIGZ1bmN0aW9uIHZpc2l0KG5vZGU6IElDb25zdHJ1Y3QpIHtcbiAgICAvLyBicmVhayBvZmYgaWYgd2UgcmVhY2hlZCBhIG5vZGUgdGhhdCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIHN0YWNrXG4gICAgY29uc3QgcGFyZW50ID0gZmluZFBhcmVudFN0YWNrKG5vZGUpO1xuICAgIGlmIChwYXJlbnQgIT09IHN0YWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZS5tZXRhZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBNYWtlIHRoZSBwYXRoIGFic29sdXRlXG4gICAgICBvdXRwdXRbQ29uc3RydWN0Tm9kZS5QQVRIX1NFUCArIG5vZGUubm9kZS5wYXRoXSA9IG5vZGUubm9kZS5tZXRhZGF0YS5tYXAoXG4gICAgICAgICAgKG1kKSA9PiBzdGFjay5yZXNvbHZlKG1kKSBhcyBjeHNjaGVtYS5NZXRhZGF0YUVudHJ5XG4gICAgICApO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5ub2RlLmNoaWxkcmVuKSB7XG4gICAgICB2aXNpdChjaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZFBhcmVudFN0YWNrKG5vZGU6IElDb25zdHJ1Y3QpOiBTdGFjayB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBTdGFjayAmJiBub2RlLm5lc3RlZFN0YWNrUGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGlmICghbm9kZS5ub2RlLnNjb3BlKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5kUGFyZW50U3RhY2sobm9kZS5ub2RlLnNjb3BlKTtcbiAgfVxufVxuXG4vKipcbiAqIFRocm93IGFuIGVycm9yIG1lc3NhZ2UgYWJvdXQgYmluZGluZygpIGlmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSBmb3IgeC5cbiAqXG4gKiBUaGlzIHJlcGxhY2VzIHRoZSAhIGFzc2VydGlvbnMgd2Ugd291bGQgbmVlZCBldmVyeXdoZXJlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEJvdW5kPEE+KHg6IEEgfCB1bmRlZmluZWQpOiBhc3NlcnRzIHggaXMgTm9uTnVsbGFibGU8QT4ge1xuICBpZiAoeCA9PT0gbnVsbCAmJiB4ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBjYWxsIGJpbmRTdGFjaygpIGZpcnN0XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vbkVtcHR5RGljdDxBPih4czogUmVjb3JkPHN0cmluZywgQT4pIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHhzKS5sZW5ndGggPiAwID8geHMgOiB1bmRlZmluZWQ7XG59XG4iXX0=