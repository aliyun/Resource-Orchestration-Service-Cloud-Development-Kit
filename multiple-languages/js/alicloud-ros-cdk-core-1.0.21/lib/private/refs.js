"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveReferences = void 0;
// ----------------------------------------------------
// CROSS REFERENCES
// ----------------------------------------------------
const ros_element_1 = require("../ros-element");
const ros_output_1 = require("../ros-output");
const ros_parameter_1 = require("../ros-parameter");
const construct_compat_1 = require("../construct-compat");
const stack_1 = require("../stack");
const token_1 = require("../token");
const ros_reference_1 = require("./ros-reference");
const intrinsic_1 = require("./intrinsic");
const resolve_1 = require("./resolve");
const uniqueid_1 = require("./uniqueid");
/**
 * This is called from the App level to resolve all references defined. Each
 * reference is resolved based on it's consumption context.
 */
function resolveReferences(scope) {
    const edges = findAllReferences(scope);
    for (const { source, value } of edges) {
        const consumer = stack_1.Stack.of(source);
        // resolve the value in the context of the consumer
        if (!value.hasValueForStack(consumer)) {
            const resolved = resolveValue(consumer, value);
            value.assignValueForStack(consumer, resolved);
        }
    }
}
exports.resolveReferences = resolveReferences;
/**
 * Resolves the value for `reference` in the context of `consumer`.
 */
function resolveValue(consumer, reference) {
    const producer = stack_1.Stack.of(reference.target);
    // produce and consumer stacks are the same, we can just return the value itself.
    if (producer === consumer) {
        return reference;
    }
    // unsupported: stacks from different apps
    if (producer.node.root !== consumer.node.root) {
        throw new Error("Cannot reference across apps. Consuming and producing stacks must be defined within the same CDK app.");
    }
    // ----------------------------------------------------------------------
    // consumer is nested in the producer (directly or indirectly)
    // ----------------------------------------------------------------------
    // if the consumer is nested within the producer (directly or indirectly),
    // wire through a ROS parameter and then resolve the reference with
    // the parent stack as the consumer.
    if (consumer.nestedStackParent && isNested(consumer, producer)) {
        const parameterValue = resolveValue(consumer.nestedStackParent, reference);
        return createNestedStackParameter(consumer, reference, parameterValue);
    }
    // ----------------------------------------------------------------------
    // producer is a nested stack
    // ----------------------------------------------------------------------
    // if the producer is nested, always publish the value through a
    // ROS output and resolve recursively with the Fn::GetAtt
    // of the output in the parent stack.
    // one might ask, if the consumer is not a parent of the producer,
    // why not just use export/import? the reason is that we cannot
    // generate an "export name" from a nested stack because the export
    // name must contain the stack name to ensure uniqueness, and we
    // don't know the stack name of a nested stack before we deploy it.
    // therefore, we can only export from a top-level stack.
    if (producer.nested) {
        const outputValue = createNestedStackOutput(producer, reference);
        return resolveValue(consumer, outputValue);
    }
    // ----------------------------------------------------------------------
    // export/import
    // ----------------------------------------------------------------------
    // export the value through a ROS "export name" and use an
    // Fn::ImportValue in the consumption site.
    // add a dependency between the producer and the consumer. dependency logic
    // will take care of applying the dependency at the right level (e.g. the
    // top-level stacks).
    consumer.addDependency(producer, `${consumer.node.path} -> ${reference.target.node.path}.${reference.displayName}`);
    return createImportValue(reference);
}
/**
 * Finds all the ROS references in a construct tree.
 */
function findAllReferences(root) {
    const result = new Array();
    for (const consumer of root.node.findAll()) {
        // include only RosElements (i.e. resources)
        if (!ros_element_1.RosElement.isRosElement(consumer)) {
            continue;
        }
        try {
            const tokens = resolve_1.findTokens(consumer, () => consumer._toRosTemplate());
            // iterate over all the tokens (e.g. intrinsic functions, lazies, etc) that
            // were found in the ROS representation of this resource.
            for (const token of tokens) {
                // include only RosReferences (i.e. "Ref" and "Fn::GetAtt")
                if (!ros_reference_1.RosReference.isRosReference(token)) {
                    continue;
                }
                result.push({
                    source: consumer,
                    value: token,
                });
            }
        }
        catch (e) {
            // Note: it might be that the properties of the ROS object aren't valid.
            // This will usually be preventatively caught in a construct's validate()
            // and turned into a nicely descriptive error, but we're running prepare()
            // before validate(). Swallow errors that occur because the ROS layer
            // doesn't validate completely.
            //
            // This does make the assumption that the error will not be rectified,
            // but the error will be thrown later on anyway. If the error doesn't
            // get thrown down the line, we may miss references.
            if (e.type === "RosSynthesisError") {
                continue;
            }
            throw e;
        }
    }
    return result;
}
// ------------------------------------------------------------------------------------------------
// export/import
// ------------------------------------------------------------------------------------------------
/**
 * Imports a value from another stack by creating an "Output" with an "ExportName"
 * and returning an "Fn::ImportValue" token.
 */
function createImportValue(reference) {
    const exportingStack = stack_1.Stack.of(reference.target);
    // Ensure a singleton "Exports" scoping Construct
    // This mostly exists to trigger LogicalID munging, which would be
    // disabled if we parented constructs directly under Stack.
    // Also it nicely prevents likely construct name clashes
    const exportsScope = getCreateExportsScope(exportingStack);
    // Ensure a singleton RosOutput for this value
    const resolved = exportingStack.resolve(reference);
    const id = "Output" + JSON.stringify(resolved);
    const exportName = generateExportName(exportsScope, id);
    if (token_1.Token.isUnresolved(exportName)) {
        throw new Error(`unresolved token in generated export name: ${JSON.stringify(exportingStack.resolve(exportName))}`);
    }
    const output = exportsScope.node.tryFindChild(id);
    if (!output) {
        new ros_output_1.RosOutput(exportsScope, id, {
            value: token_1.Token.asString(reference),
            exportName,
        });
    }
    // We want to return an actual FnImportValue Token here, but Fn.importValue() returns a 'string',
    // so construct one in-place.
    return new intrinsic_1.Intrinsic({ "Fn::ImportValue": exportName });
}
function getCreateExportsScope(stack) {
    const exportsName = "Exports";
    let stackExports = stack.node.tryFindChild(exportsName);
    if (stackExports === undefined) {
        stackExports = new construct_compat_1.Construct(stack, exportsName);
    }
    return stackExports;
}
function generateExportName(stackExports, id) {
    const stack = stack_1.Stack.of(stackExports);
    const components = [
        ...stackExports.node.scopes.slice(2).map((c) => c.node.id),
        id,
    ];
    const prefix = stack.stackName ? stack.stackName + ":" : "";
    const exportName = prefix + uniqueid_1.makeUniqueId(components);
    return exportName;
}
// ------------------------------------------------------------------------------------------------
// nested stacks
// ------------------------------------------------------------------------------------------------
/**
 * Adds a ROS parameter to a nested stack and assigns it with the
 * value of the reference.
 */
function createNestedStackParameter(nested, reference, value) {
    // we call "this.resolve" to ensure that tokens do not creep in (for example, if the reference display name includes tokens)
    const paramId = nested.resolve(`reference-to-${reference.target.node.uniqueId}.${reference.displayName}`);
    let param = nested.node.tryFindChild(paramId);
    if (!param) {
        param = new ros_parameter_1.RosParameter(nested, paramId, {
            type: ros_parameter_1.RosParameterType.STRING,
        });
        // Ugly little hack until we move NestedStack to this module.
        if (!("setParameter" in nested)) {
            throw new Error('assertion failed: nested stack should have a "setParameter" method');
        }
        nested.setParameter(param.logicalId, token_1.Token.asString(value));
    }
    return param.value;
}
/**
 * Adds a ROS output to a nested stack and returns an "Fn::GetAtt"
 * intrinsic that can be used to reference this output in the parent stack.
 */
function createNestedStackOutput(producer, reference) {
    const outputId = `${reference.target.node.uniqueId}${reference.displayName}`;
    let output = producer.node.tryFindChild(outputId);
    if (!output) {
        output = new ros_output_1.RosOutput(producer, outputId, {
            value: token_1.Token.asString(reference),
        });
    }
    if (!producer.nestedStackResource) {
        throw new Error("assertion failed");
    }
    return producer.nestedStackResource.getAtt(`Outputs.${output.logicalId}`);
}
/**
 * @returns true if this stack is a direct or indirect parent of the nested
 * stack `nested`.
 *
 * If `child` is not a nested stack, always returns `false` because it can't
 * have a parent, dah.
 */
function isNested(nested, parent) {
    // if the parent is a direct parent
    if (nested.nestedStackParent === parent) {
        return true;
    }
    // we reached a top-level (non-nested) stack without finding the parent
    if (!nested.nestedStackParent) {
        return false;
    }
    // recurse with the child's direct parent
    return isNested(nested.nestedStackParent, parent);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQXVEO0FBQ3ZELG1CQUFtQjtBQUNuQix1REFBdUQ7QUFDdkQsZ0RBQTRDO0FBQzVDLDhDQUEwQztBQUMxQyxvREFBa0U7QUFDbEUsMERBQTREO0FBRzVELG9DQUFpQztBQUNqQyxvQ0FBaUM7QUFDakMsbURBQStDO0FBQy9DLDJDQUF3QztBQUN4Qyx1Q0FBdUM7QUFDdkMseUNBQTBDO0FBRTFDOzs7R0FHRztBQUNILFNBQWdCLGlCQUFpQixDQUFDLEtBQWlCO0lBQ2pELE1BQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXZDLEtBQUssTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUU7UUFDckMsTUFBTSxRQUFRLEdBQUcsYUFBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyQyxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDL0M7S0FDRjtBQUNILENBQUM7QUFaRCw4Q0FZQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsUUFBZSxFQUFFLFNBQXVCO0lBQzVELE1BQU0sUUFBUSxHQUFHLGFBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTVDLGlGQUFpRjtJQUNqRixJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDekIsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCwwQ0FBMEM7SUFDMUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElB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QyxtQkFBbUIsQ0FBQyxNQUFNLENBQ3hDLFdBQVcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUNkLENBQUM7QUFDcEIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsUUFBUSxDQUFDLE1BQWEsRUFBRSxNQUFhO0lBQzVDLG1DQUFtQztJQUNuQyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxNQUFNLEVBQUU7UUFDdkMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELHVFQUF1RTtJQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1FBQzdCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCx5Q0FBeUM7SUFDekMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDUk9TUyBSRUZFUkVOQ0VTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgeyBSb3NFbGVtZW50IH0gZnJvbSBcIi4uL3Jvcy1lbGVtZW50XCI7XG5pbXBvcnQgeyBSb3NPdXRwdXQgfSBmcm9tIFwiLi4vcm9zLW91dHB1dFwiO1xuaW1wb3J0IHsgUm9zUGFyYW1ldGVyLCBSb3NQYXJhbWV0ZXJUeXBlIH0gZnJvbSBcIi4uL3Jvcy1wYXJhbWV0ZXJcIjtcbmltcG9ydCB7IENvbnN0cnVjdCwgSUNvbnN0cnVjdCB9IGZyb20gXCIuLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tIFwiLi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBJUmVzb2x2YWJsZSB9IGZyb20gXCIuLi9yZXNvbHZhYmxlXCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuLi9zdGFja1wiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi4vdG9rZW5cIjtcbmltcG9ydCB7IFJvc1JlZmVyZW5jZSB9IGZyb20gXCIuL3Jvcy1yZWZlcmVuY2VcIjtcbmltcG9ydCB7IEludHJpbnNpYyB9IGZyb20gXCIuL2ludHJpbnNpY1wiO1xuaW1wb3J0IHsgZmluZFRva2VucyB9IGZyb20gXCIuL3Jlc29sdmVcIjtcbmltcG9ydCB7IG1ha2VVbmlxdWVJZCB9IGZyb20gXCIuL3VuaXF1ZWlkXCI7XG5cbi8qKlxuICogVGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgQXBwIGxldmVsIHRvIHJlc29sdmUgYWxsIHJlZmVyZW5jZXMgZGVmaW5lZC4gRWFjaFxuICogcmVmZXJlbmNlIGlzIHJlc29sdmVkIGJhc2VkIG9uIGl0J3MgY29uc3VtcHRpb24gY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZWZlcmVuY2VzKHNjb3BlOiBJQ29uc3RydWN0KTogdm9pZCB7XG4gIGNvbnN0IGVkZ2VzID0gZmluZEFsbFJlZmVyZW5jZXMoc2NvcGUpO1xuXG4gIGZvciAoY29uc3QgeyBzb3VyY2UsIHZhbHVlIH0gb2YgZWRnZXMpIHtcbiAgICBjb25zdCBjb25zdW1lciA9IFN0YWNrLm9mKHNvdXJjZSk7XG5cbiAgICAvLyByZXNvbHZlIHRoZSB2YWx1ZSBpbiB0aGUgY29udGV4dCBvZiB0aGUgY29uc3VtZXJcbiAgICBpZiAoIXZhbHVlLmhhc1ZhbHVlRm9yU3RhY2soY29uc3VtZXIpKSB7XG4gICAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVWYWx1ZShjb25zdW1lciwgdmFsdWUpO1xuICAgICAgdmFsdWUuYXNzaWduVmFsdWVGb3JTdGFjayhjb25zdW1lciwgcmVzb2x2ZWQpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc29sdmVzIHRoZSB2YWx1ZSBmb3IgYHJlZmVyZW5jZWAgaW4gdGhlIGNvbnRleHQgb2YgYGNvbnN1bWVyYC5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKGNvbnN1bWVyOiBTdGFjaywgcmVmZXJlbmNlOiBSb3NSZWZlcmVuY2UpOiBJUmVzb2x2YWJsZSB7XG4gIGNvbnN0IHByb2R1Y2VyID0gU3RhY2sub2YocmVmZXJlbmNlLnRhcmdldCk7XG5cbiAgLy8gcHJvZHVjZSBhbmQgY29uc3VtZXIgc3RhY2tzIGFyZSB0aGUgc2FtZSwgd2UgY2FuIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZSBpdHNlbGYuXG4gIGlmIChwcm9kdWNlciA9PT0gY29uc3VtZXIpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgLy8gdW5zdXBwb3J0ZWQ6IHN0YWNrcyBmcm9tIGRpZmZlcmVudCBhcHBzXG4gIGlmIChwcm9kdWNlci5ub2RlLnJvb3QgIT09IGNvbnN1bWVyLm5vZGUucm9vdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiQ2Fubm90IHJlZmVyZW5jZSBhY3Jvc3MgYXBwcy4gQ29uc3VtaW5nIGFuZCBwcm9kdWNpbmcgc3RhY2tzIG11c3QgYmUgZGVmaW5lZCB3aXRoaW4gdGhlIHNhbWUgQ0RLIGFwcC5cIlxuICAgICk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGNvbnN1bWVyIGlzIG5lc3RlZCBpbiB0aGUgcHJvZHVjZXIgKGRpcmVjdGx5IG9yIGluZGlyZWN0bHkpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBpZiB0aGUgY29uc3VtZXIgaXMgbmVzdGVkIHdpdGhpbiB0aGUgcHJvZHVjZXIgKGRpcmVjdGx5IG9yIGluZGlyZWN0bHkpLFxuICAvLyB3aXJlIHRocm91Z2ggYSBST1MgcGFyYW1ldGVyIGFuZCB0aGVuIHJlc29sdmUgdGhlIHJlZmVyZW5jZSB3aXRoXG4gIC8vIHRoZSBwYXJlbnQgc3RhY2sgYXMgdGhlIGNvbnN1bWVyLlxuICBpZiAoY29uc3VtZXIubmVzdGVkU3RhY2tQYXJlbnQgJiYgaXNOZXN0ZWQoY29uc3VtZXIsIHByb2R1Y2VyKSkge1xuICAgIGNvbnN0IHBhcmFtZXRlclZhbHVlID0gcmVzb2x2ZVZhbHVlKGNvbnN1bWVyLm5lc3RlZFN0YWNrUGFyZW50LCByZWZlcmVuY2UpO1xuICAgIHJldHVybiBjcmVhdGVOZXN0ZWRTdGFja1BhcmFtZXRlcihjb25zdW1lciwgcmVmZXJlbmNlLCBwYXJhbWV0ZXJWYWx1ZSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHByb2R1Y2VyIGlzIGEgbmVzdGVkIHN0YWNrXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBpZiB0aGUgcHJvZHVjZXIgaXMgbmVzdGVkLCBhbHdheXMgcHVibGlzaCB0aGUgdmFsdWUgdGhyb3VnaCBhXG4gIC8vIFJPUyBvdXRwdXQgYW5kIHJlc29sdmUgcmVjdXJzaXZlbHkgd2l0aCB0aGUgRm46OkdldEF0dFxuICAvLyBvZiB0aGUgb3V0cHV0IGluIHRoZSBwYXJlbnQgc3RhY2suXG5cbiAgLy8gb25lIG1pZ2h0IGFzaywgaWYgdGhlIGNvbnN1bWVyIGlzIG5vdCBhIHBhcmVudCBvZiB0aGUgcHJvZHVjZXIsXG4gIC8vIHdoeSBub3QganVzdCB1c2UgZXhwb3J0L2ltcG9ydD8gdGhlIHJlYXNvbiBpcyB0aGF0IHdlIGNhbm5vdFxuICAvLyBnZW5lcmF0ZSBhbiBcImV4cG9ydCBuYW1lXCIgZnJvbSBhIG5lc3RlZCBzdGFjayBiZWNhdXNlIHRoZSBleHBvcnRcbiAgLy8gbmFtZSBtdXN0IGNvbnRhaW4gdGhlIHN0YWNrIG5hbWUgdG8gZW5zdXJlIHVuaXF1ZW5lc3MsIGFuZCB3ZVxuICAvLyBkb24ndCBrbm93IHRoZSBzdGFjayBuYW1lIG9mIGEgbmVzdGVkIHN0YWNrIGJlZm9yZSB3ZSBkZXBsb3kgaXQuXG4gIC8vIHRoZXJlZm9yZSwgd2UgY2FuIG9ubHkgZXhwb3J0IGZyb20gYSB0b3AtbGV2ZWwgc3RhY2suXG4gIGlmIChwcm9kdWNlci5uZXN0ZWQpIHtcbiAgICBjb25zdCBvdXRwdXRWYWx1ZSA9IGNyZWF0ZU5lc3RlZFN0YWNrT3V0cHV0KHByb2R1Y2VyLCByZWZlcmVuY2UpO1xuICAgIHJldHVybiByZXNvbHZlVmFsdWUoY29uc3VtZXIsIG91dHB1dFZhbHVlKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZXhwb3J0L2ltcG9ydFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gZXhwb3J0IHRoZSB2YWx1ZSB0aHJvdWdoIGEgUk9TIFwiZXhwb3J0IG5hbWVcIiBhbmQgdXNlIGFuXG4gIC8vIEZuOjpJbXBvcnRWYWx1ZSBpbiB0aGUgY29uc3VtcHRpb24gc2l0ZS5cblxuICAvLyBhZGQgYSBkZXBlbmRlbmN5IGJldHdlZW4gdGhlIHByb2R1Y2VyIGFuZCB0aGUgY29uc3VtZXIuIGRlcGVuZGVuY3kgbG9naWNcbiAgLy8gd2lsbCB0YWtlIGNhcmUgb2YgYXBwbHlpbmcgdGhlIGRlcGVuZGVuY3kgYXQgdGhlIHJpZ2h0IGxldmVsIChlLmcuIHRoZVxuICAvLyB0b3AtbGV2ZWwgc3RhY2tzKS5cbiAgY29uc3VtZXIuYWRkRGVwZW5kZW5jeShcbiAgICBwcm9kdWNlcixcbiAgICBgJHtjb25zdW1lci5ub2RlLnBhdGh9IC0+ICR7cmVmZXJlbmNlLnRhcmdldC5ub2RlLnBhdGh9LiR7cmVmZXJlbmNlLmRpc3BsYXlOYW1lfWBcbiAgKTtcblxuICByZXR1cm4gY3JlYXRlSW1wb3J0VmFsdWUocmVmZXJlbmNlKTtcbn1cblxuLyoqXG4gKiBGaW5kcyBhbGwgdGhlIFJPUyByZWZlcmVuY2VzIGluIGEgY29uc3RydWN0IHRyZWUuXG4gKi9cbmZ1bmN0aW9uIGZpbmRBbGxSZWZlcmVuY2VzKHJvb3Q6IElDb25zdHJ1Y3QpIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHsgc291cmNlOiBSb3NFbGVtZW50OyB2YWx1ZTogUm9zUmVmZXJlbmNlIH0+KCk7XG4gIGZvciAoY29uc3QgY29uc3VtZXIgb2Ygcm9vdC5ub2RlLmZpbmRBbGwoKSkge1xuICAgIC8vIGluY2x1ZGUgb25seSBSb3NFbGVtZW50cyAoaS5lLiByZXNvdXJjZXMpXG4gICAgaWYgKCFSb3NFbGVtZW50LmlzUm9zRWxlbWVudChjb25zdW1lcikpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSBmaW5kVG9rZW5zKGNvbnN1bWVyLCAoKSA9PiBjb25zdW1lci5fdG9Sb3NUZW1wbGF0ZSgpKTtcblxuICAgICAgLy8gaXRlcmF0ZSBvdmVyIGFsbCB0aGUgdG9rZW5zIChlLmcuIGludHJpbnNpYyBmdW5jdGlvbnMsIGxhemllcywgZXRjKSB0aGF0XG4gICAgICAvLyB3ZXJlIGZvdW5kIGluIHRoZSBST1MgcmVwcmVzZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZS5cbiAgICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICAgIC8vIGluY2x1ZGUgb25seSBSb3NSZWZlcmVuY2VzIChpLmUuIFwiUmVmXCIgYW5kIFwiRm46OkdldEF0dFwiKVxuICAgICAgICBpZiAoIVJvc1JlZmVyZW5jZS5pc1Jvc1JlZmVyZW5jZSh0b2tlbikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICBzb3VyY2U6IGNvbnN1bWVyLFxuICAgICAgICAgIHZhbHVlOiB0b2tlbixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gTm90ZTogaXQgbWlnaHQgYmUgdGhhdCB0aGUgcHJvcGVydGllcyBvZiB0aGUgUk9TIG9iamVjdCBhcmVuJ3QgdmFsaWQuXG4gICAgICAvLyBUaGlzIHdpbGwgdXN1YWxseSBiZSBwcmV2ZW50YXRpdmVseSBjYXVnaHQgaW4gYSBjb25zdHJ1Y3QncyB2YWxpZGF0ZSgpXG4gICAgICAvLyBhbmQgdHVybmVkIGludG8gYSBuaWNlbHkgZGVzY3JpcHRpdmUgZXJyb3IsIGJ1dCB3ZSdyZSBydW5uaW5nIHByZXBhcmUoKVxuICAgICAgLy8gYmVmb3JlIHZhbGlkYXRlKCkuIFN3YWxsb3cgZXJyb3JzIHRoYXQgb2NjdXIgYmVjYXVzZSB0aGUgUk9TIGxheWVyXG4gICAgICAvLyBkb2Vzbid0IHZhbGlkYXRlIGNvbXBsZXRlbHkuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBkb2VzIG1ha2UgdGhlIGFzc3VtcHRpb24gdGhhdCB0aGUgZXJyb3Igd2lsbCBub3QgYmUgcmVjdGlmaWVkLFxuICAgICAgLy8gYnV0IHRoZSBlcnJvciB3aWxsIGJlIHRocm93biBsYXRlciBvbiBhbnl3YXkuIElmIHRoZSBlcnJvciBkb2Vzbid0XG4gICAgICAvLyBnZXQgdGhyb3duIGRvd24gdGhlIGxpbmUsIHdlIG1heSBtaXNzIHJlZmVyZW5jZXMuXG4gICAgICBpZiAoZS50eXBlID09PSBcIlJvc1N5bnRoZXNpc0Vycm9yXCIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBleHBvcnQvaW1wb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBJbXBvcnRzIGEgdmFsdWUgZnJvbSBhbm90aGVyIHN0YWNrIGJ5IGNyZWF0aW5nIGFuIFwiT3V0cHV0XCIgd2l0aCBhbiBcIkV4cG9ydE5hbWVcIlxuICogYW5kIHJldHVybmluZyBhbiBcIkZuOjpJbXBvcnRWYWx1ZVwiIHRva2VuLlxuICovXG5mdW5jdGlvbiBjcmVhdGVJbXBvcnRWYWx1ZShyZWZlcmVuY2U6IFJlZmVyZW5jZSk6IEludHJpbnNpYyB7XG4gIGNvbnN0IGV4cG9ydGluZ1N0YWNrID0gU3RhY2sub2YocmVmZXJlbmNlLnRhcmdldCk7XG5cbiAgLy8gRW5zdXJlIGEgc2luZ2xldG9uIFwiRXhwb3J0c1wiIHNjb3BpbmcgQ29uc3RydWN0XG4gIC8vIFRoaXMgbW9zdGx5IGV4aXN0cyB0byB0cmlnZ2VyIExvZ2ljYWxJRCBtdW5naW5nLCB3aGljaCB3b3VsZCBiZVxuICAvLyBkaXNhYmxlZCBpZiB3ZSBwYXJlbnRlZCBjb25zdHJ1Y3RzIGRpcmVjdGx5IHVuZGVyIFN0YWNrLlxuICAvLyBBbHNvIGl0IG5pY2VseSBwcmV2ZW50cyBsaWtlbHkgY29uc3RydWN0IG5hbWUgY2xhc2hlc1xuICBjb25zdCBleHBvcnRzU2NvcGUgPSBnZXRDcmVhdGVFeHBvcnRzU2NvcGUoZXhwb3J0aW5nU3RhY2spO1xuXG4gIC8vIEVuc3VyZSBhIHNpbmdsZXRvbiBSb3NPdXRwdXQgZm9yIHRoaXMgdmFsdWVcbiAgY29uc3QgcmVzb2x2ZWQgPSBleHBvcnRpbmdTdGFjay5yZXNvbHZlKHJlZmVyZW5jZSk7XG4gIGNvbnN0IGlkID0gXCJPdXRwdXRcIiArIEpTT04uc3RyaW5naWZ5KHJlc29sdmVkKTtcbiAgY29uc3QgZXhwb3J0TmFtZSA9IGdlbmVyYXRlRXhwb3J0TmFtZShleHBvcnRzU2NvcGUsIGlkKTtcblxuICBpZiAoVG9rZW4uaXNVbnJlc29sdmVkKGV4cG9ydE5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYHVucmVzb2x2ZWQgdG9rZW4gaW4gZ2VuZXJhdGVkIGV4cG9ydCBuYW1lOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICBleHBvcnRpbmdTdGFjay5yZXNvbHZlKGV4cG9ydE5hbWUpXG4gICAgICApfWBcbiAgICApO1xuICB9XG5cbiAgY29uc3Qgb3V0cHV0ID0gZXhwb3J0c1Njb3BlLm5vZGUudHJ5RmluZENoaWxkKGlkKSBhcyBSb3NPdXRwdXQ7XG4gIGlmICghb3V0cHV0KSB7XG4gICAgbmV3IFJvc091dHB1dChleHBvcnRzU2NvcGUsIGlkLCB7XG4gICAgICB2YWx1ZTogVG9rZW4uYXNTdHJpbmcocmVmZXJlbmNlKSxcbiAgICAgIGV4cG9ydE5hbWUsXG4gICAgfSk7XG4gIH1cblxuICAvLyBXZSB3YW50IHRvIHJldHVybiBhbiBhY3R1YWwgRm5JbXBvcnRWYWx1ZSBUb2tlbiBoZXJlLCBidXQgRm4uaW1wb3J0VmFsdWUoKSByZXR1cm5zIGEgJ3N0cmluZycsXG4gIC8vIHNvIGNvbnN0cnVjdCBvbmUgaW4tcGxhY2UuXG4gIHJldHVybiBuZXcgSW50cmluc2ljKHsgXCJGbjo6SW1wb3J0VmFsdWVcIjogZXhwb3J0TmFtZSB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3JlYXRlRXhwb3J0c1Njb3BlKHN0YWNrOiBTdGFjaykge1xuICBjb25zdCBleHBvcnRzTmFtZSA9IFwiRXhwb3J0c1wiO1xuICBsZXQgc3RhY2tFeHBvcnRzID0gc3RhY2subm9kZS50cnlGaW5kQ2hpbGQoZXhwb3J0c05hbWUpIGFzIENvbnN0cnVjdDtcbiAgaWYgKHN0YWNrRXhwb3J0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhY2tFeHBvcnRzID0gbmV3IENvbnN0cnVjdChzdGFjaywgZXhwb3J0c05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YWNrRXhwb3J0cztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVFeHBvcnROYW1lKHN0YWNrRXhwb3J0czogQ29uc3RydWN0LCBpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHN0YWNrID0gU3RhY2sub2Yoc3RhY2tFeHBvcnRzKTtcbiAgY29uc3QgY29tcG9uZW50cyA9IFtcbiAgICAuLi5zdGFja0V4cG9ydHMubm9kZS5zY29wZXMuc2xpY2UoMikubWFwKChjKSA9PiBjLm5vZGUuaWQpLFxuICAgIGlkLFxuICBdO1xuICBjb25zdCBwcmVmaXggPSBzdGFjay5zdGFja05hbWUgPyBzdGFjay5zdGFja05hbWUgKyBcIjpcIiA6IFwiXCI7XG4gIGNvbnN0IGV4cG9ydE5hbWUgPSBwcmVmaXggKyBtYWtlVW5pcXVlSWQoY29tcG9uZW50cyk7XG4gIHJldHVybiBleHBvcnROYW1lO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5lc3RlZCBzdGFja3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEFkZHMgYSBST1MgcGFyYW1ldGVyIHRvIGEgbmVzdGVkIHN0YWNrIGFuZCBhc3NpZ25zIGl0IHdpdGggdGhlXG4gKiB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVOZXN0ZWRTdGFja1BhcmFtZXRlcihcbiAgbmVzdGVkOiBTdGFjayxcbiAgcmVmZXJlbmNlOiBSb3NSZWZlcmVuY2UsXG4gIHZhbHVlOiBJUmVzb2x2YWJsZVxuKSB7XG4gIC8vIHdlIGNhbGwgXCJ0aGlzLnJlc29sdmVcIiB0byBlbnN1cmUgdGhhdCB0b2tlbnMgZG8gbm90IGNyZWVwIGluIChmb3IgZXhhbXBsZSwgaWYgdGhlIHJlZmVyZW5jZSBkaXNwbGF5IG5hbWUgaW5jbHVkZXMgdG9rZW5zKVxuICBjb25zdCBwYXJhbUlkID0gbmVzdGVkLnJlc29sdmUoXG4gICAgYHJlZmVyZW5jZS10by0ke3JlZmVyZW5jZS50YXJnZXQubm9kZS51bmlxdWVJZH0uJHtyZWZlcmVuY2UuZGlzcGxheU5hbWV9YFxuICApO1xuICBsZXQgcGFyYW0gPSBuZXN0ZWQubm9kZS50cnlGaW5kQ2hpbGQocGFyYW1JZCkgYXMgUm9zUGFyYW1ldGVyO1xuICBpZiAoIXBhcmFtKSB7XG4gICAgcGFyYW0gPSBuZXcgUm9zUGFyYW1ldGVyKG5lc3RlZCwgcGFyYW1JZCwge1xuICAgICAgdHlwZTogUm9zUGFyYW1ldGVyVHlwZS5TVFJJTkcsXG4gICAgfSk7XG5cbiAgICAvLyBVZ2x5IGxpdHRsZSBoYWNrIHVudGlsIHdlIG1vdmUgTmVzdGVkU3RhY2sgdG8gdGhpcyBtb2R1bGUuXG4gICAgaWYgKCEoXCJzZXRQYXJhbWV0ZXJcIiBpbiBuZXN0ZWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdhc3NlcnRpb24gZmFpbGVkOiBuZXN0ZWQgc3RhY2sgc2hvdWxkIGhhdmUgYSBcInNldFBhcmFtZXRlclwiIG1ldGhvZCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgKG5lc3RlZCBhcyBhbnkpLnNldFBhcmFtZXRlcihwYXJhbS5sb2dpY2FsSWQsIFRva2VuLmFzU3RyaW5nKHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW0udmFsdWUgYXMgUm9zUmVmZXJlbmNlO1xufVxuXG4vKipcbiAqIEFkZHMgYSBST1Mgb3V0cHV0IHRvIGEgbmVzdGVkIHN0YWNrIGFuZCByZXR1cm5zIGFuIFwiRm46OkdldEF0dFwiXG4gKiBpbnRyaW5zaWMgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2UgdGhpcyBvdXRwdXQgaW4gdGhlIHBhcmVudCBzdGFjay5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlTmVzdGVkU3RhY2tPdXRwdXQoXG4gIHByb2R1Y2VyOiBTdGFjayxcbiAgcmVmZXJlbmNlOiBSZWZlcmVuY2Vcbik6IFJvc1JlZmVyZW5jZSB7XG4gIGNvbnN0IG91dHB1dElkID0gYCR7cmVmZXJlbmNlLnRhcmdldC5ub2RlLnVuaXF1ZUlkfSR7cmVmZXJlbmNlLmRpc3BsYXlOYW1lfWA7XG4gIGxldCBvdXRwdXQgPSBwcm9kdWNlci5ub2RlLnRyeUZpbmRDaGlsZChvdXRwdXRJZCkgYXMgUm9zT3V0cHV0O1xuICBpZiAoIW91dHB1dCkge1xuICAgIG91dHB1dCA9IG5ldyBSb3NPdXRwdXQocHJvZHVjZXIsIG91dHB1dElkLCB7XG4gICAgICB2YWx1ZTogVG9rZW4uYXNTdHJpbmcocmVmZXJlbmNlKSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghcHJvZHVjZXIubmVzdGVkU3RhY2tSZXNvdXJjZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImFzc2VydGlvbiBmYWlsZWRcIik7XG4gIH1cblxuICByZXR1cm4gcHJvZHVjZXIubmVzdGVkU3RhY2tSZXNvdXJjZS5nZXRBdHQoXG4gICAgYE91dHB1dHMuJHtvdXRwdXQubG9naWNhbElkfWBcbiAgKSBhcyBSb3NSZWZlcmVuY2U7XG59XG5cbi8qKlxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGlzIHN0YWNrIGlzIGEgZGlyZWN0IG9yIGluZGlyZWN0IHBhcmVudCBvZiB0aGUgbmVzdGVkXG4gKiBzdGFjayBgbmVzdGVkYC5cbiAqXG4gKiBJZiBgY2hpbGRgIGlzIG5vdCBhIG5lc3RlZCBzdGFjaywgYWx3YXlzIHJldHVybnMgYGZhbHNlYCBiZWNhdXNlIGl0IGNhbid0XG4gKiBoYXZlIGEgcGFyZW50LCBkYWguXG4gKi9cbmZ1bmN0aW9uIGlzTmVzdGVkKG5lc3RlZDogU3RhY2ssIHBhcmVudDogU3RhY2spOiBib29sZWFuIHtcbiAgLy8gaWYgdGhlIHBhcmVudCBpcyBhIGRpcmVjdCBwYXJlbnRcbiAgaWYgKG5lc3RlZC5uZXN0ZWRTdGFja1BhcmVudCA9PT0gcGFyZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB3ZSByZWFjaGVkIGEgdG9wLWxldmVsIChub24tbmVzdGVkKSBzdGFjayB3aXRob3V0IGZpbmRpbmcgdGhlIHBhcmVudFxuICBpZiAoIW5lc3RlZC5uZXN0ZWRTdGFja1BhcmVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIHJlY3Vyc2Ugd2l0aCB0aGUgY2hpbGQncyBkaXJlY3QgcGFyZW50XG4gIHJldHVybiBpc05lc3RlZChuZXN0ZWQubmVzdGVkU3RhY2tQYXJlbnQsIHBhcmVudCk7XG59XG4iXX0=