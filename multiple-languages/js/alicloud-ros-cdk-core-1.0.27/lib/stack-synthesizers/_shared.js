"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertBound = exports.contentHash = exports.addStackArtifactToAssembly = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const construct_compat_1 = require("../construct-compat");
const stack_1 = require("../stack");
const crypto = require("crypto");
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
 * Hash a string
 */
function contentHash(content) {
    return crypto.createHash('sha256').update(content).digest('hex');
}
exports.contentHash = contentHash;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3NoYXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIl9zaGFyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThEO0FBQzlELDBEQUk2QjtBQUM3QixvQ0FBaUM7QUFDakMsaUNBQWlDO0FBRWpDOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLDBCQUEwQixDQUN4QyxPQUEwQixFQUMxQixLQUFZLEVBQ1osVUFBc0QsRUFDdEQsMkJBQXFDO0lBRXJDLG1FQUFtRTtJQUNuRSxrREFBa0Q7SUFDbEQsaUZBQWlGO0lBQ2pGLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FDcEIsUUFBUSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsRUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FDeEIsQ0FBQztLQUNIO0lBRUQsTUFBTSxJQUFJLEdBQUc7UUFDWCxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzlDLEdBQUcsMkJBQTJCO0tBQy9CLENBQUM7SUFDRixNQUFNLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6QywyRUFBMkU7SUFDM0UsNEVBQTRFO0lBQzVFLHNFQUFzRTtJQUN0RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSxVQUFVO0lBQ1YsTUFBTSxpQkFBaUIsR0FDckIsS0FBSyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUU3RSxNQUFNLFVBQVUsR0FBc0M7UUFDcEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1FBQ2hDLElB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cG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWFcIjtcbmltcG9ydCB7XG4gIENvbnN0cnVjdE5vZGUsXG4gIElDb25zdHJ1Y3QsXG4gIElTeW50aGVzaXNTZXNzaW9uLFxufSBmcm9tIFwiLi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi4vc3RhY2tcIjtcbmltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG4vKipcbiAqIFNoYXJlZCBsb2dpYyBvZiB3cml0aW5nIHN0YWNrIGFydGlmYWN0IHRvIHRoZSBDbG91ZCBBc3NlbWJseVxuICpcbiAqIFRoaXMgbG9naWMgaXMgc2hhcmVkIGJldHdlZW4gU3RhY2tTeW50aGVzZXMuXG4gKlxuICogSXQgY291bGQgaGF2ZSBiZWVuIGEgcHJvdGVjdGVkIG1ldGhvZCBvbiBhIGJhc2UgY2xhc3MsIGJ1dCBpdFxuICogdXNlcyBgUGFydGlhbDxjeGFwaS5BbGl5dW5Sb3NTdGFja1Byb3BlcnRpZXM+YCBpbiB0aGVcbiAqIHBhcmFtZXRlcnMgKHdoaWNoIGlzIGNvbnZlbmllbnQgc28gSSBjYW4gcmVtYWluIHR5cGVzYWZlIHdpdGhvdXRcbiAqIGNvcHkvcGFzdGluZyksIGFuZCBqc2lpIHdpbGwgY2hva2Ugb24gdGhpcyB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkU3RhY2tBcnRpZmFjdFRvQXNzZW1ibHkoXG4gIHNlc3Npb246IElTeW50aGVzaXNTZXNzaW9uLFxuICBzdGFjazogU3RhY2ssXG4gIHN0YWNrUHJvcHM6IFBhcnRpYWw8Y3hzY2hlbWEuQWxpeXVuUm9zU3RhY2tQcm9wZXJ0aWVzPixcbiAgYWRkaXRpb25hbFN0YWNrRGVwZW5kZW5jaWVzOiBzdHJpbmdbXVxuKSB7XG4gIC8vIG5lc3RlZCBzdGFjayB0YWdzIGFyZSBhcHBsaWVkIGF0IHRoZSBBTElZVU46OlJPUzo6U3RhY2sgcmVzb3VyY2VcbiAgLy8gbGV2ZWwgYW5kIGFyZSBub3QgbmVlZGVkIGluIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAgLy8gVE9ETzogbW92ZSB0aGVzZSB0byB0aGUgY2xvdWQgYXNzZW1ibHkgYXJ0aWZhY3QgcHJvcGVydGllcyBpbnN0ZWFkIG9mIG1ldGFkYXRhXG4gIGlmIChzdGFjay50YWdzLmhhc1RhZ3MoKSkge1xuICAgIHN0YWNrLm5vZGUuYWRkTWV0YWRhdGEoXG4gICAgICBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLlNUQUNLX1RBR1MsXG4gICAgICBzdGFjay50YWdzLnJlbmRlclRhZ3MoKVxuICAgICk7XG4gIH1cblxuICBjb25zdCBkZXBzID0gW1xuICAgIC4uLnN0YWNrLmRlcGVuZGVuY2llcy5tYXAoKHMpID0+IHMuYXJ0aWZhY3RJZCksXG4gICAgLi4uYWRkaXRpb25hbFN0YWNrRGVwZW5kZW5jaWVzLFxuICBdO1xuICBjb25zdCBtZXRhID0gY29sbGVjdFN0YWNrTWV0YWRhdGEoc3RhY2spO1xuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHNpbmNlIG9yaWdpbmFsbHkgYXJ0aWZhY3QgSUQgd2FzIGFsd2F5cyBlcXVhbCB0b1xuICAvLyBzdGFjayBuYW1lIHRoZSBzdGFja05hbWUgYXR0cmlidXRlIGlzIG9wdGlvbmFsIGFuZCBpZiBpdCBpcyBub3Qgc3BlY2lmaWVkXG4gIC8vIHRoZSBDTEkgd2lsbCB1c2UgdGhlIGFydGlmYWN0IElEIGFzIHRoZSBzdGFjayBuYW1lLiB3ZSAqY291bGQgaGF2ZSpcbiAgLy8gYWx3YXlzIHB1dCB0aGUgc3RhY2sgbmFtZSBoZXJlIGJ1dCB3YW50ZWQgdG8gbWluaW1pemUgdGhlIHJpc2sgYXJvdW5kXG4gIC8vIGNoYW5nZXMgdG8gdGhlIGFzc2VtYmx5IG1hbmlmZXN0LiBzbyB0aGlzIG1lYW5zIHRoYXQgYXMgbG9uZyBhcyBzdGFja1xuICAvLyBuYW1lIGFuZCBhcnRpZmFjdCBJRCBhcmUgdGhlIHNhbWUsIHRoZSBjbG91ZCBhc3NlbWJseSBtYW5pZmVzdCB3aWxsIG5vdFxuICAvLyBjaGFuZ2UuXG4gIGNvbnN0IHN0YWNrTmFtZVByb3BlcnR5ID1cbiAgICBzdGFjay5zdGFja05hbWUgPT09IHN0YWNrLmFydGlmYWN0SWQgPyB7fSA6IHsgc3RhY2tOYW1lOiBzdGFjay5zdGFja05hbWUgfTtcblxuICBjb25zdCBwcm9wZXJ0aWVzOiBjeHNjaGVtYS5BbGl5dW5Sb3NTdGFja1Byb3BlcnRpZXMgPSB7XG4gICAgdGVtcGxhdGVGaWxlOiBzdGFjay50ZW1wbGF0ZUZpbGUsXG4gICAgdGFnczogbm9uRW1wdHlEaWN0KHN0YWNrLnRhZ3MudGFnVmFsdWVzKCkpLFxuICAgIC4uLnN0YWNrUHJvcHMsXG4gICAgLi4uc3RhY2tOYW1lUHJvcGVydHksXG4gIH07XG5cbiAgLy8gYWRkIGFuIGFydGlmYWN0IHRoYXQgcmVwcmVzZW50cyB0aGlzIHN0YWNrXG4gIHNlc3Npb24uYXNzZW1ibHkuYWRkQXJ0aWZhY3Qoc3RhY2suYXJ0aWZhY3RJZCwge1xuICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0VHlwZS5BTElZVU5fUk9TX1NUQUNLLFxuICAgIHByb3BlcnRpZXMsXG4gICAgZGVwZW5kZW5jaWVzOiBkZXBzLmxlbmd0aCA+IDAgPyBkZXBzIDogdW5kZWZpbmVkLFxuICAgIG1ldGFkYXRhOiBPYmplY3Qua2V5cyhtZXRhKS5sZW5ndGggPiAwID8gbWV0YSA6IHVuZGVmaW5lZCxcbiAgfSk7XG59XG5cbi8qKlxuICogQ29sbGVjdCB0aGUgbWV0YWRhdGEgZnJvbSBhIHN0YWNrXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RTdGFja01ldGFkYXRhKHN0YWNrOiBTdGFjaykge1xuICBjb25zdCBvdXRwdXQ6IHsgW2lkOiBzdHJpbmddOiBjeHNjaGVtYS5NZXRhZGF0YUVudHJ5W10gfSA9IHt9O1xuXG4gIHZpc2l0KHN0YWNrKTtcblxuICByZXR1cm4gb3V0cHV0O1xuXG4gIGZ1bmN0aW9uIHZpc2l0KG5vZGU6IElDb25zdHJ1Y3QpIHtcbiAgICAvLyBicmVhayBvZmYgaWYgd2UgcmVhY2hlZCBhIG5vZGUgdGhhdCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIHN0YWNrXG4gICAgY29uc3QgcGFyZW50ID0gZmluZFBhcmVudFN0YWNrKG5vZGUpO1xuICAgIGlmIChwYXJlbnQgIT09IHN0YWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZS5tZXRhZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBNYWtlIHRoZSBwYXRoIGFic29sdXRlXG4gICAgICBvdXRwdXRbQ29uc3RydWN0Tm9kZS5QQVRIX1NFUCArIG5vZGUubm9kZS5wYXRoXSA9IG5vZGUubm9kZS5tZXRhZGF0YS5tYXAoXG4gICAgICAgIChtZCkgPT4gc3RhY2sucmVzb2x2ZShtZCkgYXMgY3hzY2hlbWEuTWV0YWRhdGFFbnRyeVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUubm9kZS5jaGlsZHJlbikge1xuICAgICAgdmlzaXQoY2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRQYXJlbnRTdGFjayhub2RlOiBJQ29uc3RydWN0KTogU3RhY2sgfCB1bmRlZmluZWQge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU3RhY2sgJiYgbm9kZS5uZXN0ZWRTdGFja1BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUubm9kZS5zY29wZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmluZFBhcmVudFN0YWNrKG5vZGUubm9kZS5zY29wZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIYXNoIGEgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50SGFzaChjb250ZW50OiBzdHJpbmcpIHtcbiAgcmV0dXJuIGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUoY29udGVudCkuZGlnZXN0KCdoZXgnKTtcbn1cblxuLyoqXG4gKiBUaHJvdyBhbiBlcnJvciBtZXNzYWdlIGFib3V0IGJpbmRpbmcoKSBpZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgZm9yIHguXG4gKlxuICogVGhpcyByZXBsYWNlcyB0aGUgISBhc3NlcnRpb25zIHdlIHdvdWxkIG5lZWQgZXZlcnl3aGVyZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRCb3VuZDxBPih4OiBBIHwgdW5kZWZpbmVkKTogYXNzZXJ0cyB4IGlzIE5vbk51bGxhYmxlPEE+IHtcbiAgaWYgKHggPT09IG51bGwgJiYgeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgY2FsbCBiaW5kU3RhY2soKSBmaXJzdFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub25FbXB0eURpY3Q8QT4oeHM6IFJlY29yZDxzdHJpbmcsIEE+KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh4cykubGVuZ3RoID4gMCA/IHhzIDogdW5kZWZpbmVkO1xufVxuIl19