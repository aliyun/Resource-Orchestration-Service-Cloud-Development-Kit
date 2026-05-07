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
            const tokens = (0, resolve_1.findTokens)(consumer, () => consumer._toRosTemplate());
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
    const exportName = prefix + (0, uniqueid_1.makeUniqueId)(components);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQXVEO0FBQ3ZELG1CQUFtQjtBQUNuQix1REFBdUQ7QUFDdkQsZ0RBQTRDO0FBQzVDLDhDQUEwQztBQUMxQyxvREFBa0U7QUFDbEUsMERBQTREO0FBRzVELG9DQUFpQztBQUNqQyxvQ0FBaUM7QUFDakMsbURBQStDO0FBQy9DLDJDQUF3QztBQUN4Qyx1Q0FBdUM7QUFDdkMseUNBQTBDO0FBRTFDOzs7R0FHRztBQUNILFNBQWdCLGlCQUFpQixDQUFDLEtBQWlCO0lBQ2pELE1BQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXZDLEtBQUssTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUU7UUFDckMsTUFBTSxRQUFRLEdBQUcsYUFBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyQyxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDL0M7S0FDRjtBQUNILENBQUM7QUFaRCw4Q0FZQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsUUFBZSxFQUFFLFNBQXVCO0lBQzVELE1BQU0sUUFBUSxHQUFHLGFBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTVDLGlGQUFpRjtJQUNqRixJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDekIsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCwwQ0FBMEM7SUFDMUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUM3QyxNQUFNLElBQUksS0FBSyxDQUNiLHVHQUF1RyxDQUN4RyxDQUFDO0tBQ0g7SUFFRCx5RUFBeUU7SUFDekUsOERBQThEO0lBQzlELHlFQUF5RTtJQUV6RSwwRUFBMEU7SUFDMUUsbUVBQW1FO0lBQ25FLG9DQUFvQztJQUNwQyxJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1FBQzlELE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0UsT0FBTywwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0tBQ3hFO0lBRUQseUVBQXlFO0lBQ3pFLDZCQUE2QjtJQUM3Qix5RUFBeUU7SUFFekUsZ0VBQWdFO0lBQ2hFLHlEQUF5RDtJQUN6RCxxQ0FBcUM7SUFFckMsa0VBQWtFO0lBQ2xFLCtEQUErRDtJQUMvRCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLG1FQUFtRTtJQUNuRSx3REFBd0Q7SUFDeEQsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQ25CLE1BQU0sV0FBVyxHQUFHLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRSxPQUFPLFlBQVksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDNUM7SUFFRCx5RUFBeUU7SUFDekUsZ0JBQWdCO0lBQ2hCLHlFQUF5RTtJQUV6RSwwREFBMEQ7SUFDMUQsMkNBQTJDO0lBRTNDLDJFQUEyRTtJQUMzRSx5RUFBeUU7SUFDekUscUJBQXFCO0lBQ3JCLFFBQVEsQ0FBQyxhQUFhLENBQ3BCLFFBQVEsRUFDUixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQ2xGLENBQUM7SUFFRixPQUFPLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsaUJBQWlCLENBQUMsSUFBZ0I7SUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQStDLENBQUM7SUFDeEUsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQzFDLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsd0JBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdEMsU0FBUztTQUNWO1FBRUQsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLElBQUEsb0JBQVUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFckUsMkVBQTJFO1lBQzNFLHlEQUF5RDtZQUN6RCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDMUIsMkRBQTJEO2dCQUMzRCxJQUFJLENBQUMsNEJBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3ZDLFNBQVM7aUJBQ1Y7Z0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDVixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1Ysd0VBQXdFO1lBQ3hFLHlFQUF5RTtZQUN6RSwwRUFBMEU7WUFDMUUscUVBQXFFO1lBQ3JFLCtCQUErQjtZQUMvQixFQUFFO1lBQ0Ysc0VBQXNFO1lBQ3RFLHFFQUFxRTtZQUNyRSxvREFBb0Q7WUFDcEQsSUFBSyxDQUFTLENBQUMsSUFBSSxLQUFLLG1CQUFtQixFQUFFO2dCQUMzQyxTQUFTO2FBQ1Y7WUFFRCxNQUFNLENBQUMsQ0FBQztTQUNUO0tBQ0Y7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsbUdBQW1HO0FBQ25HLGdCQUFnQjtBQUNoQixtR0FBbUc7QUFFbkc7OztHQUdHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBQyxTQUFvQjtJQUM3QyxNQUFNLGNBQWMsR0FBRyxhQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVsRCxpREFBaUQ7SUFDakQsa0VBQWtFO0lBQ2xFLDJEQUEyRDtJQUMzRCx3REFBd0Q7SUFDeEQsTUFBTSxZQUFZLEdBQUcscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFM0QsOENBQThDO0lBQzlDLE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsTUFBTSxFQUFFLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsTUFBTSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXhELElBQUksYUFBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUNiLDhDQUE4QyxJQUFJLENBQUMsU0FBUyxDQUMxRCxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUNuQyxFQUFFLENBQ0osQ0FBQztLQUNIO0lBRUQsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFjLENBQUM7SUFDL0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLElBQUksc0JBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFO1lBQzlCLEtBQUssRUFBRSxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxVQUFVO1NBQ1gsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxpR0FBaUc7SUFDakcsNkJBQTZCO0lBQzdCLE9BQU8sSUFBSSxxQkFBUyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxLQUFZO0lBQ3pDLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUM5QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQWMsQ0FBQztJQUNyRSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7UUFDOUIsWUFBWSxHQUFHLElBQUksNEJBQVMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDbEQ7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxZQUF1QixFQUFFLEVBQVU7SUFDN0QsTUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxNQUFNLFVBQVUsR0FBRztRQUNqQixHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFELEVBQUU7S0FDSCxDQUFDO0lBQ0YsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RCxNQUFNLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBQSx1QkFBWSxFQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxtR0FBbUc7QUFDbkcsZ0JBQWdCO0FBQ2hCLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxTQUFTLDBCQUEwQixDQUNqQyxNQUFhLEVBQ2IsU0FBdUIsRUFDdkIsS0FBa0I7SUFFbEIsNEhBQTRIO0lBQzVILE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQzVCLGdCQUFnQixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUMxRSxDQUFDO0lBQ0YsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFpQixDQUFDO0lBQzlELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixLQUFLLEdBQUcsSUFBSSw0QkFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUU7WUFDeEMsSUFBSSxFQUFFLGdDQUFnQixDQUFDLE1BQU07U0FDOUIsQ0FBQyxDQUFDO1FBRUgsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUNiLG9FQUFvRSxDQUNyRSxDQUFDO1NBQ0g7UUFFQSxNQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3RFO0lBRUQsT0FBTyxLQUFLLENBQUMsS0FBcUIsQ0FBQztBQUNyQyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyx1QkFBdUIsQ0FDOUIsUUFBZSxFQUNmLFNBQW9CO0lBRXBCLE1BQU0sUUFBUSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQWMsQ0FBQztJQUMvRCxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsTUFBTSxHQUFHLElBQUksc0JBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO1lBQ3pDLEtBQUssRUFBRSxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUNqQyxDQUFDLENBQUM7S0FDSjtJQUVELElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7UUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsT0FBTyxRQUFRLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUN4QyxXQUFXLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FDZCxDQUFDO0FBQ3BCLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLFFBQVEsQ0FBQyxNQUFhLEVBQUUsTUFBYTtJQUM1QyxtQ0FBbUM7SUFDbkMsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEtBQUssTUFBTSxFQUFFO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCx1RUFBdUU7SUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtRQUM3QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQseUNBQXlDO0lBQ3pDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ1JPU1MgUkVGRVJFTkNFU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHsgUm9zRWxlbWVudCB9IGZyb20gXCIuLi9yb3MtZWxlbWVudFwiO1xuaW1wb3J0IHsgUm9zT3V0cHV0IH0gZnJvbSBcIi4uL3Jvcy1vdXRwdXRcIjtcbmltcG9ydCB7IFJvc1BhcmFtZXRlciwgUm9zUGFyYW1ldGVyVHlwZSB9IGZyb20gXCIuLi9yb3MtcGFyYW1ldGVyXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QsIElDb25zdHJ1Y3QgfSBmcm9tIFwiLi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3JlZmVyZW5jZVwiO1xuaW1wb3J0IHsgSVJlc29sdmFibGUgfSBmcm9tIFwiLi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi4vc3RhY2tcIjtcbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4uL3Rva2VuXCI7XG5pbXBvcnQgeyBSb3NSZWZlcmVuY2UgfSBmcm9tIFwiLi9yb3MtcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBJbnRyaW5zaWMgfSBmcm9tIFwiLi9pbnRyaW5zaWNcIjtcbmltcG9ydCB7IGZpbmRUb2tlbnMgfSBmcm9tIFwiLi9yZXNvbHZlXCI7XG5pbXBvcnQgeyBtYWtlVW5pcXVlSWQgfSBmcm9tIFwiLi91bmlxdWVpZFwiO1xuXG4vKipcbiAqIFRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIEFwcCBsZXZlbCB0byByZXNvbHZlIGFsbCByZWZlcmVuY2VzIGRlZmluZWQuIEVhY2hcbiAqIHJlZmVyZW5jZSBpcyByZXNvbHZlZCBiYXNlZCBvbiBpdCdzIGNvbnN1bXB0aW9uIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVmZXJlbmNlcyhzY29wZTogSUNvbnN0cnVjdCk6IHZvaWQge1xuICBjb25zdCBlZGdlcyA9IGZpbmRBbGxSZWZlcmVuY2VzKHNjb3BlKTtcblxuICBmb3IgKGNvbnN0IHsgc291cmNlLCB2YWx1ZSB9IG9mIGVkZ2VzKSB7XG4gICAgY29uc3QgY29uc3VtZXIgPSBTdGFjay5vZihzb3VyY2UpO1xuXG4gICAgLy8gcmVzb2x2ZSB0aGUgdmFsdWUgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGNvbnN1bWVyXG4gICAgaWYgKCF2YWx1ZS5oYXNWYWx1ZUZvclN0YWNrKGNvbnN1bWVyKSkge1xuICAgICAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlVmFsdWUoY29uc3VtZXIsIHZhbHVlKTtcbiAgICAgIHZhbHVlLmFzc2lnblZhbHVlRm9yU3RhY2soY29uc3VtZXIsIHJlc29sdmVkKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgdmFsdWUgZm9yIGByZWZlcmVuY2VgIGluIHRoZSBjb250ZXh0IG9mIGBjb25zdW1lcmAuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVWYWx1ZShjb25zdW1lcjogU3RhY2ssIHJlZmVyZW5jZTogUm9zUmVmZXJlbmNlKTogSVJlc29sdmFibGUge1xuICBjb25zdCBwcm9kdWNlciA9IFN0YWNrLm9mKHJlZmVyZW5jZS50YXJnZXQpO1xuXG4gIC8vIHByb2R1Y2UgYW5kIGNvbnN1bWVyIHN0YWNrcyBhcmUgdGhlIHNhbWUsIHdlIGNhbiBqdXN0IHJldHVybiB0aGUgdmFsdWUgaXRzZWxmLlxuICBpZiAocHJvZHVjZXIgPT09IGNvbnN1bWVyKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIC8vIHVuc3VwcG9ydGVkOiBzdGFja3MgZnJvbSBkaWZmZXJlbnQgYXBwc1xuICBpZiAocHJvZHVjZXIubm9kZS5yb290ICE9PSBjb25zdW1lci5ub2RlLnJvb3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIkNhbm5vdCByZWZlcmVuY2UgYWNyb3NzIGFwcHMuIENvbnN1bWluZyBhbmQgcHJvZHVjaW5nIHN0YWNrcyBtdXN0IGJlIGRlZmluZWQgd2l0aGluIHRoZSBzYW1lIENESyBhcHAuXCJcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBjb25zdW1lciBpcyBuZXN0ZWQgaW4gdGhlIHByb2R1Y2VyIChkaXJlY3RseSBvciBpbmRpcmVjdGx5KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gaWYgdGhlIGNvbnN1bWVyIGlzIG5lc3RlZCB3aXRoaW4gdGhlIHByb2R1Y2VyIChkaXJlY3RseSBvciBpbmRpcmVjdGx5KSxcbiAgLy8gd2lyZSB0aHJvdWdoIGEgUk9TIHBhcmFtZXRlciBhbmQgdGhlbiByZXNvbHZlIHRoZSByZWZlcmVuY2Ugd2l0aFxuICAvLyB0aGUgcGFyZW50IHN0YWNrIGFzIHRoZSBjb25zdW1lci5cbiAgaWYgKGNvbnN1bWVyLm5lc3RlZFN0YWNrUGFyZW50ICYmIGlzTmVzdGVkKGNvbnN1bWVyLCBwcm9kdWNlcikpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJWYWx1ZSA9IHJlc29sdmVWYWx1ZShjb25zdW1lci5uZXN0ZWRTdGFja1BhcmVudCwgcmVmZXJlbmNlKTtcbiAgICByZXR1cm4gY3JlYXRlTmVzdGVkU3RhY2tQYXJhbWV0ZXIoY29uc3VtZXIsIHJlZmVyZW5jZSwgcGFyYW1ldGVyVmFsdWUpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBwcm9kdWNlciBpcyBhIG5lc3RlZCBzdGFja1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gaWYgdGhlIHByb2R1Y2VyIGlzIG5lc3RlZCwgYWx3YXlzIHB1Ymxpc2ggdGhlIHZhbHVlIHRocm91Z2ggYVxuICAvLyBST1Mgb3V0cHV0IGFuZCByZXNvbHZlIHJlY3Vyc2l2ZWx5IHdpdGggdGhlIEZuOjpHZXRBdHRcbiAgLy8gb2YgdGhlIG91dHB1dCBpbiB0aGUgcGFyZW50IHN0YWNrLlxuXG4gIC8vIG9uZSBtaWdodCBhc2ssIGlmIHRoZSBjb25zdW1lciBpcyBub3QgYSBwYXJlbnQgb2YgdGhlIHByb2R1Y2VyLFxuICAvLyB3aHkgbm90IGp1c3QgdXNlIGV4cG9ydC9pbXBvcnQ/IHRoZSByZWFzb24gaXMgdGhhdCB3ZSBjYW5ub3RcbiAgLy8gZ2VuZXJhdGUgYW4gXCJleHBvcnQgbmFtZVwiIGZyb20gYSBuZXN0ZWQgc3RhY2sgYmVjYXVzZSB0aGUgZXhwb3J0XG4gIC8vIG5hbWUgbXVzdCBjb250YWluIHRoZSBzdGFjayBuYW1lIHRvIGVuc3VyZSB1bmlxdWVuZXNzLCBhbmQgd2VcbiAgLy8gZG9uJ3Qga25vdyB0aGUgc3RhY2sgbmFtZSBvZiBhIG5lc3RlZCBzdGFjayBiZWZvcmUgd2UgZGVwbG95IGl0LlxuICAvLyB0aGVyZWZvcmUsIHdlIGNhbiBvbmx5IGV4cG9ydCBmcm9tIGEgdG9wLWxldmVsIHN0YWNrLlxuICBpZiAocHJvZHVjZXIubmVzdGVkKSB7XG4gICAgY29uc3Qgb3V0cHV0VmFsdWUgPSBjcmVhdGVOZXN0ZWRTdGFja091dHB1dChwcm9kdWNlciwgcmVmZXJlbmNlKTtcbiAgICByZXR1cm4gcmVzb2x2ZVZhbHVlKGNvbnN1bWVyLCBvdXRwdXRWYWx1ZSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGV4cG9ydC9pbXBvcnRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGV4cG9ydCB0aGUgdmFsdWUgdGhyb3VnaCBhIFJPUyBcImV4cG9ydCBuYW1lXCIgYW5kIHVzZSBhblxuICAvLyBGbjo6SW1wb3J0VmFsdWUgaW4gdGhlIGNvbnN1bXB0aW9uIHNpdGUuXG5cbiAgLy8gYWRkIGEgZGVwZW5kZW5jeSBiZXR3ZWVuIHRoZSBwcm9kdWNlciBhbmQgdGhlIGNvbnN1bWVyLiBkZXBlbmRlbmN5IGxvZ2ljXG4gIC8vIHdpbGwgdGFrZSBjYXJlIG9mIGFwcGx5aW5nIHRoZSBkZXBlbmRlbmN5IGF0IHRoZSByaWdodCBsZXZlbCAoZS5nLiB0aGVcbiAgLy8gdG9wLWxldmVsIHN0YWNrcykuXG4gIGNvbnN1bWVyLmFkZERlcGVuZGVuY3koXG4gICAgcHJvZHVjZXIsXG4gICAgYCR7Y29uc3VtZXIubm9kZS5wYXRofSAtPiAke3JlZmVyZW5jZS50YXJnZXQubm9kZS5wYXRofS4ke3JlZmVyZW5jZS5kaXNwbGF5TmFtZX1gXG4gICk7XG5cbiAgcmV0dXJuIGNyZWF0ZUltcG9ydFZhbHVlKHJlZmVyZW5jZSk7XG59XG5cbi8qKlxuICogRmluZHMgYWxsIHRoZSBST1MgcmVmZXJlbmNlcyBpbiBhIGNvbnN0cnVjdCB0cmVlLlxuICovXG5mdW5jdGlvbiBmaW5kQWxsUmVmZXJlbmNlcyhyb290OiBJQ29uc3RydWN0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTx7IHNvdXJjZTogUm9zRWxlbWVudDsgdmFsdWU6IFJvc1JlZmVyZW5jZSB9PigpO1xuICBmb3IgKGNvbnN0IGNvbnN1bWVyIG9mIHJvb3Qubm9kZS5maW5kQWxsKCkpIHtcbiAgICAvLyBpbmNsdWRlIG9ubHkgUm9zRWxlbWVudHMgKGkuZS4gcmVzb3VyY2VzKVxuICAgIGlmICghUm9zRWxlbWVudC5pc1Jvc0VsZW1lbnQoY29uc3VtZXIpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gZmluZFRva2Vucyhjb25zdW1lciwgKCkgPT4gY29uc3VtZXIuX3RvUm9zVGVtcGxhdGUoKSk7XG5cbiAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgdGhlIHRva2VucyAoZS5nLiBpbnRyaW5zaWMgZnVuY3Rpb25zLCBsYXppZXMsIGV0YykgdGhhdFxuICAgICAgLy8gd2VyZSBmb3VuZCBpbiB0aGUgUk9TIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UuXG4gICAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgICAgICAvLyBpbmNsdWRlIG9ubHkgUm9zUmVmZXJlbmNlcyAoaS5lLiBcIlJlZlwiIGFuZCBcIkZuOjpHZXRBdHRcIilcbiAgICAgICAgaWYgKCFSb3NSZWZlcmVuY2UuaXNSb3NSZWZlcmVuY2UodG9rZW4pKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgc291cmNlOiBjb25zdW1lcixcbiAgICAgICAgICB2YWx1ZTogdG9rZW4sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIE5vdGU6IGl0IG1pZ2h0IGJlIHRoYXQgdGhlIHByb3BlcnRpZXMgb2YgdGhlIFJPUyBvYmplY3QgYXJlbid0IHZhbGlkLlxuICAgICAgLy8gVGhpcyB3aWxsIHVzdWFsbHkgYmUgcHJldmVudGF0aXZlbHkgY2F1Z2h0IGluIGEgY29uc3RydWN0J3MgdmFsaWRhdGUoKVxuICAgICAgLy8gYW5kIHR1cm5lZCBpbnRvIGEgbmljZWx5IGRlc2NyaXB0aXZlIGVycm9yLCBidXQgd2UncmUgcnVubmluZyBwcmVwYXJlKClcbiAgICAgIC8vIGJlZm9yZSB2YWxpZGF0ZSgpLiBTd2FsbG93IGVycm9ycyB0aGF0IG9jY3VyIGJlY2F1c2UgdGhlIFJPUyBsYXllclxuICAgICAgLy8gZG9lc24ndCB2YWxpZGF0ZSBjb21wbGV0ZWx5LlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgZG9lcyBtYWtlIHRoZSBhc3N1bXB0aW9uIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IGJlIHJlY3RpZmllZCxcbiAgICAgIC8vIGJ1dCB0aGUgZXJyb3Igd2lsbCBiZSB0aHJvd24gbGF0ZXIgb24gYW55d2F5LiBJZiB0aGUgZXJyb3IgZG9lc24ndFxuICAgICAgLy8gZ2V0IHRocm93biBkb3duIHRoZSBsaW5lLCB3ZSBtYXkgbWlzcyByZWZlcmVuY2VzLlxuICAgICAgaWYgKChlIGFzIGFueSkudHlwZSA9PT0gXCJSb3NTeW50aGVzaXNFcnJvclwiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZXhwb3J0L2ltcG9ydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSW1wb3J0cyBhIHZhbHVlIGZyb20gYW5vdGhlciBzdGFjayBieSBjcmVhdGluZyBhbiBcIk91dHB1dFwiIHdpdGggYW4gXCJFeHBvcnROYW1lXCJcbiAqIGFuZCByZXR1cm5pbmcgYW4gXCJGbjo6SW1wb3J0VmFsdWVcIiB0b2tlbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW1wb3J0VmFsdWUocmVmZXJlbmNlOiBSZWZlcmVuY2UpOiBJbnRyaW5zaWMge1xuICBjb25zdCBleHBvcnRpbmdTdGFjayA9IFN0YWNrLm9mKHJlZmVyZW5jZS50YXJnZXQpO1xuXG4gIC8vIEVuc3VyZSBhIHNpbmdsZXRvbiBcIkV4cG9ydHNcIiBzY29waW5nIENvbnN0cnVjdFxuICAvLyBUaGlzIG1vc3RseSBleGlzdHMgdG8gdHJpZ2dlciBMb2dpY2FsSUQgbXVuZ2luZywgd2hpY2ggd291bGQgYmVcbiAgLy8gZGlzYWJsZWQgaWYgd2UgcGFyZW50ZWQgY29uc3RydWN0cyBkaXJlY3RseSB1bmRlciBTdGFjay5cbiAgLy8gQWxzbyBpdCBuaWNlbHkgcHJldmVudHMgbGlrZWx5IGNvbnN0cnVjdCBuYW1lIGNsYXNoZXNcbiAgY29uc3QgZXhwb3J0c1Njb3BlID0gZ2V0Q3JlYXRlRXhwb3J0c1Njb3BlKGV4cG9ydGluZ1N0YWNrKTtcblxuICAvLyBFbnN1cmUgYSBzaW5nbGV0b24gUm9zT3V0cHV0IGZvciB0aGlzIHZhbHVlXG4gIGNvbnN0IHJlc29sdmVkID0gZXhwb3J0aW5nU3RhY2sucmVzb2x2ZShyZWZlcmVuY2UpO1xuICBjb25zdCBpZCA9IFwiT3V0cHV0XCIgKyBKU09OLnN0cmluZ2lmeShyZXNvbHZlZCk7XG4gIGNvbnN0IGV4cG9ydE5hbWUgPSBnZW5lcmF0ZUV4cG9ydE5hbWUoZXhwb3J0c1Njb3BlLCBpZCk7XG5cbiAgaWYgKFRva2VuLmlzVW5yZXNvbHZlZChleHBvcnROYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGB1bnJlc29sdmVkIHRva2VuIGluIGdlbmVyYXRlZCBleHBvcnQgbmFtZTogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgZXhwb3J0aW5nU3RhY2sucmVzb2x2ZShleHBvcnROYW1lKVxuICAgICAgKX1gXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IG91dHB1dCA9IGV4cG9ydHNTY29wZS5ub2RlLnRyeUZpbmRDaGlsZChpZCkgYXMgUm9zT3V0cHV0O1xuICBpZiAoIW91dHB1dCkge1xuICAgIG5ldyBSb3NPdXRwdXQoZXhwb3J0c1Njb3BlLCBpZCwge1xuICAgICAgdmFsdWU6IFRva2VuLmFzU3RyaW5nKHJlZmVyZW5jZSksXG4gICAgICBleHBvcnROYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gV2Ugd2FudCB0byByZXR1cm4gYW4gYWN0dWFsIEZuSW1wb3J0VmFsdWUgVG9rZW4gaGVyZSwgYnV0IEZuLmltcG9ydFZhbHVlKCkgcmV0dXJucyBhICdzdHJpbmcnLFxuICAvLyBzbyBjb25zdHJ1Y3Qgb25lIGluLXBsYWNlLlxuICByZXR1cm4gbmV3IEludHJpbnNpYyh7IFwiRm46OkltcG9ydFZhbHVlXCI6IGV4cG9ydE5hbWUgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENyZWF0ZUV4cG9ydHNTY29wZShzdGFjazogU3RhY2spIHtcbiAgY29uc3QgZXhwb3J0c05hbWUgPSBcIkV4cG9ydHNcIjtcbiAgbGV0IHN0YWNrRXhwb3J0cyA9IHN0YWNrLm5vZGUudHJ5RmluZENoaWxkKGV4cG9ydHNOYW1lKSBhcyBDb25zdHJ1Y3Q7XG4gIGlmIChzdGFja0V4cG9ydHMgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YWNrRXhwb3J0cyA9IG5ldyBDb25zdHJ1Y3Qoc3RhY2ssIGV4cG9ydHNOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBzdGFja0V4cG9ydHM7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRXhwb3J0TmFtZShzdGFja0V4cG9ydHM6IENvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICBjb25zdCBzdGFjayA9IFN0YWNrLm9mKHN0YWNrRXhwb3J0cyk7XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXG4gICAgLi4uc3RhY2tFeHBvcnRzLm5vZGUuc2NvcGVzLnNsaWNlKDIpLm1hcCgoYykgPT4gYy5ub2RlLmlkKSxcbiAgICBpZCxcbiAgXTtcbiAgY29uc3QgcHJlZml4ID0gc3RhY2suc3RhY2tOYW1lID8gc3RhY2suc3RhY2tOYW1lICsgXCI6XCIgOiBcIlwiO1xuICBjb25zdCBleHBvcnROYW1lID0gcHJlZml4ICsgbWFrZVVuaXF1ZUlkKGNvbXBvbmVudHMpO1xuICByZXR1cm4gZXhwb3J0TmFtZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBuZXN0ZWQgc3RhY2tzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBBZGRzIGEgUk9TIHBhcmFtZXRlciB0byBhIG5lc3RlZCBzdGFjayBhbmQgYXNzaWducyBpdCB3aXRoIHRoZVxuICogdmFsdWUgb2YgdGhlIHJlZmVyZW5jZS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlTmVzdGVkU3RhY2tQYXJhbWV0ZXIoXG4gIG5lc3RlZDogU3RhY2ssXG4gIHJlZmVyZW5jZTogUm9zUmVmZXJlbmNlLFxuICB2YWx1ZTogSVJlc29sdmFibGVcbikge1xuICAvLyB3ZSBjYWxsIFwidGhpcy5yZXNvbHZlXCIgdG8gZW5zdXJlIHRoYXQgdG9rZW5zIGRvIG5vdCBjcmVlcCBpbiAoZm9yIGV4YW1wbGUsIGlmIHRoZSByZWZlcmVuY2UgZGlzcGxheSBuYW1lIGluY2x1ZGVzIHRva2VucylcbiAgY29uc3QgcGFyYW1JZCA9IG5lc3RlZC5yZXNvbHZlKFxuICAgIGByZWZlcmVuY2UtdG8tJHtyZWZlcmVuY2UudGFyZ2V0Lm5vZGUudW5pcXVlSWR9LiR7cmVmZXJlbmNlLmRpc3BsYXlOYW1lfWBcbiAgKTtcbiAgbGV0IHBhcmFtID0gbmVzdGVkLm5vZGUudHJ5RmluZENoaWxkKHBhcmFtSWQpIGFzIFJvc1BhcmFtZXRlcjtcbiAgaWYgKCFwYXJhbSkge1xuICAgIHBhcmFtID0gbmV3IFJvc1BhcmFtZXRlcihuZXN0ZWQsIHBhcmFtSWQsIHtcbiAgICAgIHR5cGU6IFJvc1BhcmFtZXRlclR5cGUuU1RSSU5HLFxuICAgIH0pO1xuXG4gICAgLy8gVWdseSBsaXR0bGUgaGFjayB1bnRpbCB3ZSBtb3ZlIE5lc3RlZFN0YWNrIHRvIHRoaXMgbW9kdWxlLlxuICAgIGlmICghKFwic2V0UGFyYW1ldGVyXCIgaW4gbmVzdGVkKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYXNzZXJ0aW9uIGZhaWxlZDogbmVzdGVkIHN0YWNrIHNob3VsZCBoYXZlIGEgXCJzZXRQYXJhbWV0ZXJcIiBtZXRob2QnXG4gICAgICApO1xuICAgIH1cblxuICAgIChuZXN0ZWQgYXMgYW55KS5zZXRQYXJhbWV0ZXIocGFyYW0ubG9naWNhbElkLCBUb2tlbi5hc1N0cmluZyh2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtLnZhbHVlIGFzIFJvc1JlZmVyZW5jZTtcbn1cblxuLyoqXG4gKiBBZGRzIGEgUk9TIG91dHB1dCB0byBhIG5lc3RlZCBzdGFjayBhbmQgcmV0dXJucyBhbiBcIkZuOjpHZXRBdHRcIlxuICogaW50cmluc2ljIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVmZXJlbmNlIHRoaXMgb3V0cHV0IGluIHRoZSBwYXJlbnQgc3RhY2suXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5lc3RlZFN0YWNrT3V0cHV0KFxuICBwcm9kdWNlcjogU3RhY2ssXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlXG4pOiBSb3NSZWZlcmVuY2Uge1xuICBjb25zdCBvdXRwdXRJZCA9IGAke3JlZmVyZW5jZS50YXJnZXQubm9kZS51bmlxdWVJZH0ke3JlZmVyZW5jZS5kaXNwbGF5TmFtZX1gO1xuICBsZXQgb3V0cHV0ID0gcHJvZHVjZXIubm9kZS50cnlGaW5kQ2hpbGQob3V0cHV0SWQpIGFzIFJvc091dHB1dDtcbiAgaWYgKCFvdXRwdXQpIHtcbiAgICBvdXRwdXQgPSBuZXcgUm9zT3V0cHV0KHByb2R1Y2VyLCBvdXRwdXRJZCwge1xuICAgICAgdmFsdWU6IFRva2VuLmFzU3RyaW5nKHJlZmVyZW5jZSksXG4gICAgfSk7XG4gIH1cblxuICBpZiAoIXByb2R1Y2VyLm5lc3RlZFN0YWNrUmVzb3VyY2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnRpb24gZmFpbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHByb2R1Y2VyLm5lc3RlZFN0YWNrUmVzb3VyY2UuZ2V0QXR0KFxuICAgIGBPdXRwdXRzLiR7b3V0cHV0LmxvZ2ljYWxJZH1gXG4gICkgYXMgUm9zUmVmZXJlbmNlO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHRydWUgaWYgdGhpcyBzdGFjayBpcyBhIGRpcmVjdCBvciBpbmRpcmVjdCBwYXJlbnQgb2YgdGhlIG5lc3RlZFxuICogc3RhY2sgYG5lc3RlZGAuXG4gKlxuICogSWYgYGNoaWxkYCBpcyBub3QgYSBuZXN0ZWQgc3RhY2ssIGFsd2F5cyByZXR1cm5zIGBmYWxzZWAgYmVjYXVzZSBpdCBjYW4ndFxuICogaGF2ZSBhIHBhcmVudCwgZGFoLlxuICovXG5mdW5jdGlvbiBpc05lc3RlZChuZXN0ZWQ6IFN0YWNrLCBwYXJlbnQ6IFN0YWNrKTogYm9vbGVhbiB7XG4gIC8vIGlmIHRoZSBwYXJlbnQgaXMgYSBkaXJlY3QgcGFyZW50XG4gIGlmIChuZXN0ZWQubmVzdGVkU3RhY2tQYXJlbnQgPT09IHBhcmVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gd2UgcmVhY2hlZCBhIHRvcC1sZXZlbCAobm9uLW5lc3RlZCkgc3RhY2sgd2l0aG91dCBmaW5kaW5nIHRoZSBwYXJlbnRcbiAgaWYgKCFuZXN0ZWQubmVzdGVkU3RhY2tQYXJlbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyByZWN1cnNlIHdpdGggdGhlIGNoaWxkJ3MgZGlyZWN0IHBhcmVudFxuICByZXR1cm4gaXNOZXN0ZWQobmVzdGVkLm5lc3RlZFN0YWNrUGFyZW50LCBwYXJlbnQpO1xufVxuIl19