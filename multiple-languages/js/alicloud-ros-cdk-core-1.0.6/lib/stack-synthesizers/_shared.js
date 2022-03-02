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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3NoYXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIl9zaGFyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThEO0FBQzlELDBEQUk2QjtBQUM3QixvQ0FBaUM7QUFFakM7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBZ0IsMEJBQTBCLENBQ3hDLE9BQTBCLEVBQzFCLEtBQVksRUFDWixVQUFzRCxFQUN0RCwyQkFBcUM7SUFFckMsbUVBQW1FO0lBQ25FLGtEQUFrRDtJQUNsRCxpRkFBaUY7SUFDakYsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUNwQixRQUFRLENBQUMseUJBQXlCLENBQUMsVUFBVSxFQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUN4QixDQUFDO0tBQ0g7SUFFRCxNQUFNLElBQUksR0FBRztRQUNYLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDOUMsR0FBRywyQkFBMkI7S0FDL0IsQ0FBQztJQUNGLE1BQU0sSUFBSSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpDLDJFQUEyRTtJQUMzRSw0RUFBNEU7SUFDNUUsc0VBQXNFO0lBQ3RFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLFVBQVU7SUFDVixNQUFNLGlCQUFpQixHQUNyQixLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRTdFLE1BQU0sVUFBVSxHQUFzQztRQUNwRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7UUFDaEMsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLEdBQUcsVUFBVTtRQUNiLEdBQUcsaUJBQWlCO0tBQ3JCLENBQUM7SUFFRiw2Q0FBNkM7SUFDN0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUM3QyxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0I7UUFDNUMsVUFBVTtRQUNWLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ2hELFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztLQUMxRCxDQUFDLENBQUM7QUFDTCxDQUFDO0FBOUNELGdFQThDQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBQyxLQUFZO0lBQ3hDLE1BQU0sTUFBTSxHQUErQyxFQUFFLENBQUM7SUFFOUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWIsT0FBTyxNQUFNLENBQUM7SUFFZCxTQUFTLEtBQUssQ0FBQyxJQUFnQjtRQUM3QixtRUFBbUU7UUFDbkUsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakMseUJBQXlCO1lBQ3pCLE1BQU0sQ0FBQyxnQ0FBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDdEUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUEyQixDQUNwRCxDQUFDO1NBQ0g7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELFNBQVMsZUFBZSxDQUFDLElBQWdCO1FBQ3ZDLElBQUksSUFBSSxZQUFZLGFBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxFQUFFO1lBQ2pFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLFdBQVcsQ0FBSSxDQUFnQjtJQUM3QyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7S0FDcEQ7QUFDSCxDQUFDO0FBSkQsa0NBSUM7QUFFRCxTQUFTLFlBQVksQ0FBSSxFQUFxQjtJQUM1QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWFcIjtcbmltcG9ydCB7XG4gIENvbnN0cnVjdE5vZGUsXG4gIElDb25zdHJ1Y3QsXG4gIElTeW50aGVzaXNTZXNzaW9uLFxufSBmcm9tIFwiLi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi4vc3RhY2tcIjtcblxuLyoqXG4gKiBTaGFyZWQgbG9naWMgb2Ygd3JpdGluZyBzdGFjayBhcnRpZmFjdCB0byB0aGUgQ2xvdWQgQXNzZW1ibHlcbiAqXG4gKiBUaGlzIGxvZ2ljIGlzIHNoYXJlZCBiZXR3ZWVuIFN0YWNrU3ludGhlc2VzLlxuICpcbiAqIEl0IGNvdWxkIGhhdmUgYmVlbiBhIHByb3RlY3RlZCBtZXRob2Qgb24gYSBiYXNlIGNsYXNzLCBidXQgaXRcbiAqIHVzZXMgYFBhcnRpYWw8Y3hhcGkuQWxpeXVuUm9zU3RhY2tQcm9wZXJ0aWVzPmAgaW4gdGhlXG4gKiBwYXJhbWV0ZXJzICh3aGljaCBpcyBjb252ZW5pZW50IHNvIEkgY2FuIHJlbWFpbiB0eXBlc2FmZSB3aXRob3V0XG4gKiBjb3B5L3Bhc3RpbmcpLCBhbmQganNpaSB3aWxsIGNob2tlIG9uIHRoaXMgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFN0YWNrQXJ0aWZhY3RUb0Fzc2VtYmx5KFxuICBzZXNzaW9uOiBJU3ludGhlc2lzU2Vzc2lvbixcbiAgc3RhY2s6IFN0YWNrLFxuICBzdGFja1Byb3BzOiBQYXJ0aWFsPGN4c2NoZW1hLkFsaXl1blJvc1N0YWNrUHJvcGVydGllcz4sXG4gIGFkZGl0aW9uYWxTdGFja0RlcGVuZGVuY2llczogc3RyaW5nW11cbikge1xuICAvLyBuZXN0ZWQgc3RhY2sgdGFncyBhcmUgYXBwbGllZCBhdCB0aGUgQUxJWVVOOjpST1M6OlN0YWNrIHJlc291cmNlXG4gIC8vIGxldmVsIGFuZCBhcmUgbm90IG5lZWRlZCBpbiB0aGUgY2xvdWQgYXNzZW1ibHkuXG4gIC8vIFRPRE86IG1vdmUgdGhlc2UgdG8gdGhlIGNsb3VkIGFzc2VtYmx5IGFydGlmYWN0IHByb3BlcnRpZXMgaW5zdGVhZCBvZiBtZXRhZGF0YVxuICBpZiAoc3RhY2sudGFncy5oYXNUYWdzKCkpIHtcbiAgICBzdGFjay5ub2RlLmFkZE1ldGFkYXRhKFxuICAgICAgY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5TVEFDS19UQUdTLFxuICAgICAgc3RhY2sudGFncy5yZW5kZXJUYWdzKClcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZGVwcyA9IFtcbiAgICAuLi5zdGFjay5kZXBlbmRlbmNpZXMubWFwKChzKSA9PiBzLmFydGlmYWN0SWQpLFxuICAgIC4uLmFkZGl0aW9uYWxTdGFja0RlcGVuZGVuY2llcyxcbiAgXTtcbiAgY29uc3QgbWV0YSA9IGNvbGxlY3RTdGFja01ldGFkYXRhKHN0YWNrKTtcblxuICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBzaW5jZSBvcmlnaW5hbGx5IGFydGlmYWN0IElEIHdhcyBhbHdheXMgZXF1YWwgdG9cbiAgLy8gc3RhY2sgbmFtZSB0aGUgc3RhY2tOYW1lIGF0dHJpYnV0ZSBpcyBvcHRpb25hbCBhbmQgaWYgaXQgaXMgbm90IHNwZWNpZmllZFxuICAvLyB0aGUgQ0xJIHdpbGwgdXNlIHRoZSBhcnRpZmFjdCBJRCBhcyB0aGUgc3RhY2sgbmFtZS4gd2UgKmNvdWxkIGhhdmUqXG4gIC8vIGFsd2F5cyBwdXQgdGhlIHN0YWNrIG5hbWUgaGVyZSBidXQgd2FudGVkIHRvIG1pbmltaXplIHRoZSByaXNrIGFyb3VuZFxuICAvLyBjaGFuZ2VzIHRvIHRoZSBhc3NlbWJseSBtYW5pZmVzdC4gc28gdGhpcyBtZWFucyB0aGF0IGFzIGxvbmcgYXMgc3RhY2tcbiAgLy8gbmFtZSBhbmQgYXJ0aWZhY3QgSUQgYXJlIHRoZSBzYW1lLCB0aGUgY2xvdWQgYXNzZW1ibHkgbWFuaWZlc3Qgd2lsbCBub3RcbiAgLy8gY2hhbmdlLlxuICBjb25zdCBzdGFja05hbWVQcm9wZXJ0eSA9XG4gICAgc3RhY2suc3RhY2tOYW1lID09PSBzdGFjay5hcnRpZmFjdElkID8ge30gOiB7IHN0YWNrTmFtZTogc3RhY2suc3RhY2tOYW1lIH07XG5cbiAgY29uc3QgcHJvcGVydGllczogY3hzY2hlbWEuQWxpeXVuUm9zU3RhY2tQcm9wZXJ0aWVzID0ge1xuICAgIHRlbXBsYXRlRmlsZTogc3RhY2sudGVtcGxhdGVGaWxlLFxuICAgIHRhZ3M6IG5vbkVtcHR5RGljdChzdGFjay50YWdzLnRhZ1ZhbHVlcygpKSxcbiAgICAuLi5zdGFja1Byb3BzLFxuICAgIC4uLnN0YWNrTmFtZVByb3BlcnR5LFxuICB9O1xuXG4gIC8vIGFkZCBhbiBhcnRpZmFjdCB0aGF0IHJlcHJlc2VudHMgdGhpcyBzdGFja1xuICBzZXNzaW9uLmFzc2VtYmx5LmFkZEFydGlmYWN0KHN0YWNrLmFydGlmYWN0SWQsIHtcbiAgICB0eXBlOiBjeHNjaGVtYS5BcnRpZmFjdFR5cGUuQUxJWVVOX1JPU19TVEFDSyxcbiAgICBwcm9wZXJ0aWVzLFxuICAgIGRlcGVuZGVuY2llczogZGVwcy5sZW5ndGggPiAwID8gZGVwcyA6IHVuZGVmaW5lZCxcbiAgICBtZXRhZGF0YTogT2JqZWN0LmtleXMobWV0YSkubGVuZ3RoID4gMCA/IG1ldGEgOiB1bmRlZmluZWQsXG4gIH0pO1xufVxuXG4vKipcbiAqIENvbGxlY3QgdGhlIG1ldGFkYXRhIGZyb20gYSBzdGFja1xuICovXG5mdW5jdGlvbiBjb2xsZWN0U3RhY2tNZXRhZGF0YShzdGFjazogU3RhY2spIHtcbiAgY29uc3Qgb3V0cHV0OiB7IFtpZDogc3RyaW5nXTogY3hzY2hlbWEuTWV0YWRhdGFFbnRyeVtdIH0gPSB7fTtcblxuICB2aXNpdChzdGFjayk7XG5cbiAgcmV0dXJuIG91dHB1dDtcblxuICBmdW5jdGlvbiB2aXNpdChub2RlOiBJQ29uc3RydWN0KSB7XG4gICAgLy8gYnJlYWsgb2ZmIGlmIHdlIHJlYWNoZWQgYSBub2RlIHRoYXQgaXMgbm90IGEgY2hpbGQgb2YgdGhpcyBzdGFja1xuICAgIGNvbnN0IHBhcmVudCA9IGZpbmRQYXJlbnRTdGFjayhub2RlKTtcbiAgICBpZiAocGFyZW50ICE9PSBzdGFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLm5vZGUubWV0YWRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgLy8gTWFrZSB0aGUgcGF0aCBhYnNvbHV0ZVxuICAgICAgb3V0cHV0W0NvbnN0cnVjdE5vZGUuUEFUSF9TRVAgKyBub2RlLm5vZGUucGF0aF0gPSBub2RlLm5vZGUubWV0YWRhdGEubWFwKFxuICAgICAgICAobWQpID0+IHN0YWNrLnJlc29sdmUobWQpIGFzIGN4c2NoZW1hLk1ldGFkYXRhRW50cnlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHZpc2l0KGNoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kUGFyZW50U3RhY2sobm9kZTogSUNvbnN0cnVjdCk6IFN0YWNrIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFN0YWNrICYmIG5vZGUubmVzdGVkU3RhY2tQYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgaWYgKCFub2RlLm5vZGUuc2NvcGUpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbmRQYXJlbnRTdGFjayhub2RlLm5vZGUuc2NvcGUpO1xuICB9XG59XG5cbi8qKlxuICogVGhyb3cgYW4gZXJyb3IgbWVzc2FnZSBhYm91dCBiaW5kaW5nKCkgaWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIGZvciB4LlxuICpcbiAqIFRoaXMgcmVwbGFjZXMgdGhlICEgYXNzZXJ0aW9ucyB3ZSB3b3VsZCBuZWVkIGV2ZXJ5d2hlcmUgb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Qm91bmQ8QT4oeDogQSB8IHVuZGVmaW5lZCk6IGFzc2VydHMgeCBpcyBOb25OdWxsYWJsZTxBPiB7XG4gIGlmICh4ID09PSBudWxsICYmIHggPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGNhbGwgYmluZFN0YWNrKCkgZmlyc3RcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9uRW1wdHlEaWN0PEE+KHhzOiBSZWNvcmQ8c3RyaW5nLCBBPikge1xuICByZXR1cm4gT2JqZWN0LmtleXMoeHMpLmxlbmd0aCA+IDAgPyB4cyA6IHVuZGVmaW5lZDtcbn1cbiJdfQ==