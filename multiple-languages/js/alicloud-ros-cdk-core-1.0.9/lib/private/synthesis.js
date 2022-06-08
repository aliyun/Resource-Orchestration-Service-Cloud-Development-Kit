"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.synthesize = void 0;
const cxapi = require("@alicloud/ros-cdk-cxapi");
const prepare_app_1 = require("./prepare-app");
const stage_1 = require("../stage");
function synthesize(root, options = {}) {
    // we start by calling "synth" on all nested assemblies (which will take care of all their children)
    synthNestedAssemblies(root, options);
    invokeAspects(root);
    // This is mostly here for legacy purposes as the framework itself does not use prepare anymore.
    prepareTree(root);
    // resolve references
    prepare_app_1.prepareApp(root);
    // give all children an opportunity to validate now that we've finished prepare
    if (!options.skipValidation) {
        validateTree(root);
    }
    // in unit tests, we support creating free-standing stacks, so we create the
    // assembly builder here.
    const builder = stage_1.Stage.isStage(root)
        ? root._assemblyBuilder
        : new cxapi.CloudAssemblyBuilder(options.outdir);
    // next, we invoke "onSynthesize" on all of our children. this will allow
    // stacks to add themselves to the synthesized cloud assembly.
    synthesizeTree(root, builder);
    return builder.buildAssembly({
        runtimeInfo: options.runtimeInfo,
    });
}
exports.synthesize = synthesize;
/**
 * Find Assemblies inside the construct and call 'synth' on them
 *
 * (They will in turn recurse again)
 */
function synthNestedAssemblies(root, options) {
    for (const child of root.node.children) {
        if (stage_1.Stage.isStage(child)) {
            child.synth(options);
        }
        else {
            synthNestedAssemblies(child, options);
        }
    }
}
/**
 * Invoke aspects on the given construct tree.
 *
 * Aspects are not propagated across Assembly boundaries. The same Aspect will not be invoked
 * twice for the same construct.
 */
function invokeAspects(root) {
    recurse(root, []);
    function recurse(construct, inheritedAspects) {
        // hackery to be able to access some private members with strong types (yack!)
        const node = construct.node
            ._actualNode;
        const allAspectsHere = [...(inheritedAspects !== null && inheritedAspects !== void 0 ? inheritedAspects : []), ...node._aspects];
        for (const aspect of allAspectsHere) {
            if (node.invokedAspects.includes(aspect)) {
                continue;
            }
            aspect.visit(construct);
            node.invokedAspects.push(aspect);
        }
        for (const child of construct.node.children) {
            if (!stage_1.Stage.isStage(child)) {
                recurse(child, allAspectsHere);
            }
        }
    }
}
/**
 * Prepare all constructs in the given construct tree in post-order.
 *
 * Stop at Assembly boundaries.
 */
function prepareTree(root) {
    visit(root, "post", (construct) => construct.onPrepare());
}
/**
 * Synthesize children in post-order into the given builder
 *
 * Stop at Assembly boundaries.
 */
function synthesizeTree(root, builder) {
    visit(root, "post", (construct) => construct.onSynthesize({
        outdir: builder.outdir,
        assembly: builder,
    }));
}
/**
 * Validate all constructs in the given construct tree
 */
function validateTree(root) {
    const errors = new Array();
    visit(root, "pre", (construct) => {
        for (const message of construct.onValidate()) {
            errors.push({ message, source: construct });
        }
    });
    if (errors.length > 0) {
        const errorList = errors
            .map((e) => `[${e.source.node.path}] ${e.message}`)
            .join("\n  ");
        throw new Error(`Validation failed with the following errors:\n  ${errorList}`);
    }
}
/**
 * Visit the given construct tree in either pre or post order, stopping at Assemblies
 */
function visit(root, order, cb) {
    if (order === "pre") {
        cb(root);
    }
    for (const child of root.node.children) {
        if (stage_1.Stage.isStage(child)) {
            continue;
        }
        visit(child, order, cb);
    }
    if (order === "post") {
        cb(root);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ludGhlc2lzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3ludGhlc2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFpRDtBQUNqRCwrQ0FBMkM7QUFDM0Msb0NBQXdEO0FBU3hELFNBQWdCLFVBQVUsQ0FDeEIsSUFBZ0IsRUFDaEIsVUFBNEIsRUFBRTtJQUU5QixvR0FBb0c7SUFDcEcscUJBQXFCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXJDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixnR0FBZ0c7SUFDaEcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxCLHFCQUFxQjtJQUNyQix3QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpCLCtFQUErRTtJQUMvRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtRQUMzQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEI7SUFFRCw0RUFBNEU7SUFDNUUseUJBQXlCO0lBQ3pCLE1BQU0sT0FBTyxHQUFHLGFBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1FBQ3ZCLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbkQseUVBQXlFO0lBQ3pFLDhEQUE4RDtJQUM5RCxjQUFjLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTlCLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7S0FDakMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQWpDRCxnQ0FpQ0M7QUFFRDs7OztHQUlHO0FBQ0gsU0FBUyxxQkFBcUIsQ0FDNUIsSUFBZ0IsRUFDaEIsT0FBOEI7SUFFOUIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEs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LENBQ1osSUFBZ0IsRUFDaEIsS0FBcUIsRUFDckIsRUFBMkM7SUFFM0MsSUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFO1FBQ25CLEVBQUUsQ0FBQyxJQUFrQyxDQUFDLENBQUM7S0FDeEM7SUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ3RDLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixTQUFTO1NBQ1Y7UUFDRCxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN6QjtJQUVELElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtRQUNwQixFQUFFLENBQUMsSUFBa0MsQ0FBQyxDQUFDO0tBQ3hDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1jeGFwaVwiO1xuaW1wb3J0IHsgcHJlcGFyZUFwcCB9IGZyb20gXCIuL3ByZXBhcmUtYXBwXCI7XG5pbXBvcnQgeyBTdGFnZSwgU3RhZ2VTeW50aGVzaXNPcHRpb25zIH0gZnJvbSBcIi4uL3N0YWdlXCI7XG5pbXBvcnQgKiBhcyBjb25zdHJ1Y3RzIGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3QsXG4gIElDb25zdHJ1Y3QsXG4gIFN5bnRoZXNpc09wdGlvbnMsXG4gIFZhbGlkYXRpb25FcnJvcixcbn0gZnJvbSBcIi4uL2NvbnN0cnVjdC1jb21wYXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN5bnRoZXNpemUoXG4gIHJvb3Q6IElDb25zdHJ1Y3QsXG4gIG9wdGlvbnM6IFN5bnRoZXNpc09wdGlvbnMgPSB7fVxuKTogY3hhcGkuQ2xvdWRBc3NlbWJseSB7XG4gIC8vIHdlIHN0YXJ0IGJ5IGNhbGxpbmcgXCJzeW50aFwiIG9uIGFsbCBuZXN0ZWQgYXNzZW1ibGllcyAod2hpY2ggd2lsbCB0YWtlIGNhcmUgb2YgYWxsIHRoZWlyIGNoaWxkcmVuKVxuICBzeW50aE5lc3RlZEFzc2VtYmxpZXMocm9vdCwgb3B0aW9ucyk7XG5cbiAgaW52b2tlQXNwZWN0cyhyb290KTtcblxuICAvLyBUaGlzIGlzIG1vc3RseSBoZXJlIGZvciBsZWdhY3kgcHVycG9zZXMgYXMgdGhlIGZyYW1ld29yayBpdHNlbGYgZG9lcyBub3QgdXNlIHByZXBhcmUgYW55bW9yZS5cbiAgcHJlcGFyZVRyZWUocm9vdCk7XG5cbiAgLy8gcmVzb2x2ZSByZWZlcmVuY2VzXG4gIHByZXBhcmVBcHAocm9vdCk7XG5cbiAgLy8gZ2l2ZSBhbGwgY2hpbGRyZW4gYW4gb3Bwb3J0dW5pdHkgdG8gdmFsaWRhdGUgbm93IHRoYXQgd2UndmUgZmluaXNoZWQgcHJlcGFyZVxuICBpZiAoIW9wdGlvbnMuc2tpcFZhbGlkYXRpb24pIHtcbiAgICB2YWxpZGF0ZVRyZWUocm9vdCk7XG4gIH1cblxuICAvLyBpbiB1bml0IHRlc3RzLCB3ZSBzdXBwb3J0IGNyZWF0aW5nIGZyZWUtc3RhbmRpbmcgc3RhY2tzLCBzbyB3ZSBjcmVhdGUgdGhlXG4gIC8vIGFzc2VtYmx5IGJ1aWxkZXIgaGVyZS5cbiAgY29uc3QgYnVpbGRlciA9IFN0YWdlLmlzU3RhZ2Uocm9vdClcbiAgICA/IHJvb3QuX2Fzc2VtYmx5QnVpbGRlclxuICAgIDogbmV3IGN4YXBpLkNsb3VkQXNzZW1ibHlCdWlsZGVyKG9wdGlvbnMub3V0ZGlyKTtcblxuICAvLyBuZXh0LCB3ZSBpbnZva2UgXCJvblN5bnRoZXNpemVcIiBvbiBhbGwgb2Ygb3VyIGNoaWxkcmVuLiB0aGlzIHdpbGwgYWxsb3dcbiAgLy8gc3RhY2tzIHRvIGFkZCB0aGVtc2VsdmVzIHRvIHRoZSBzeW50aGVzaXplZCBjbG91ZCBhc3NlbWJseS5cbiAgc3ludGhlc2l6ZVRyZWUocm9vdCwgYnVpbGRlcik7XG5cbiAgcmV0dXJuIGJ1aWxkZXIuYnVpbGRBc3NlbWJseSh7XG4gICAgcnVudGltZUluZm86IG9wdGlvbnMucnVudGltZUluZm8sXG4gIH0pO1xufVxuXG4vKipcbiAqIEZpbmQgQXNzZW1ibGllcyBpbnNpZGUgdGhlIGNvbnN0cnVjdCBhbmQgY2FsbCAnc3ludGgnIG9uIHRoZW1cbiAqXG4gKiAoVGhleSB3aWxsIGluIHR1cm4gcmVjdXJzZSBhZ2FpbilcbiAqL1xuZnVuY3Rpb24gc3ludGhOZXN0ZWRBc3NlbWJsaWVzKFxuICByb290OiBJQ29uc3RydWN0LFxuICBvcHRpb25zOiBTdGFnZVN5bnRoZXNpc09wdGlvbnNcbikge1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIHJvb3Qubm9kZS5jaGlsZHJlbikge1xuICAgIGlmIChTdGFnZS5pc1N0YWdlKGNoaWxkKSkge1xuICAgICAgY2hpbGQuc3ludGgob3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bnRoTmVzdGVkQXNzZW1ibGllcyhjaGlsZCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSW52b2tlIGFzcGVjdHMgb24gdGhlIGdpdmVuIGNvbnN0cnVjdCB0cmVlLlxuICpcbiAqIEFzcGVjdHMgYXJlIG5vdCBwcm9wYWdhdGVkIGFjcm9zcyBBc3NlbWJseSBib3VuZGFyaWVzLiBUaGUgc2FtZSBBc3BlY3Qgd2lsbCBub3QgYmUgaW52b2tlZFxuICogdHdpY2UgZm9yIHRoZSBzYW1lIGNvbnN0cnVjdC5cbiAqL1xuZnVuY3Rpb24gaW52b2tlQXNwZWN0cyhyb290OiBJQ29uc3RydWN0KSB7XG4gIHJlY3Vyc2Uocm9vdCwgW10pO1xuXG4gIGZ1bmN0aW9uIHJlY3Vyc2UoXG4gICAgY29uc3RydWN0OiBJQ29uc3RydWN0LFxuICAgIGluaGVyaXRlZEFzcGVjdHM6IGNvbnN0cnVjdHMuSUFzcGVjdFtdXG4gICkge1xuICAgIC8vIGhhY2tlcnkgdG8gYmUgYWJsZSB0byBhY2Nlc3Mgc29tZSBwcml2YXRlIG1lbWJlcnMgd2l0aCBzdHJvbmcgdHlwZXMgKHlhY2shKVxuICAgIGNvbnN0IG5vZGU6IE5vZGVXaXRoQXNwZWN0UHJpdmF0ZXNIYW5naW5nT3V0ID0gY29uc3RydWN0Lm5vZGVcbiAgICAgIC5fYWN0dWFsTm9kZSBhcyBhbnk7XG5cbiAgICBjb25zdCBhbGxBc3BlY3RzSGVyZSA9IFsuLi4oaW5oZXJpdGVkQXNwZWN0cyA/PyBbXSksIC4uLm5vZGUuX2FzcGVjdHNdO1xuXG4gICAgZm9yIChjb25zdCBhc3BlY3Qgb2YgYWxsQXNwZWN0c0hlcmUpIHtcbiAgICAgIGlmIChub2RlLmludm9rZWRBc3BlY3RzLmluY2x1ZGVzKGFzcGVjdCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBhc3BlY3QudmlzaXQoY29uc3RydWN0KTtcbiAgICAgIG5vZGUuaW52b2tlZEFzcGVjdHMucHVzaChhc3BlY3QpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0Lm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGlmICghU3RhZ2UuaXNTdGFnZShjaGlsZCkpIHtcbiAgICAgICAgcmVjdXJzZShjaGlsZCwgYWxsQXNwZWN0c0hlcmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFByZXBhcmUgYWxsIGNvbnN0cnVjdHMgaW4gdGhlIGdpdmVuIGNvbnN0cnVjdCB0cmVlIGluIHBvc3Qtb3JkZXIuXG4gKlxuICogU3RvcCBhdCBBc3NlbWJseSBib3VuZGFyaWVzLlxuICovXG5mdW5jdGlvbiBwcmVwYXJlVHJlZShyb290OiBJQ29uc3RydWN0KSB7XG4gIHZpc2l0KHJvb3QsIFwicG9zdFwiLCAoY29uc3RydWN0KSA9PiBjb25zdHJ1Y3Qub25QcmVwYXJlKCkpO1xufVxuXG4vKipcbiAqIFN5bnRoZXNpemUgY2hpbGRyZW4gaW4gcG9zdC1vcmRlciBpbnRvIHRoZSBnaXZlbiBidWlsZGVyXG4gKlxuICogU3RvcCBhdCBBc3NlbWJseSBib3VuZGFyaWVzLlxuICovXG5mdW5jdGlvbiBzeW50aGVzaXplVHJlZShyb290OiBJQ29uc3RydWN0LCBidWlsZGVyOiBjeGFwaS5DbG91ZEFzc2VtYmx5QnVpbGRlcikge1xuICB2aXNpdChyb290LCBcInBvc3RcIiwgKGNvbnN0cnVjdCkgPT5cbiAgICBjb25zdHJ1Y3Qub25TeW50aGVzaXplKHtcbiAgICAgIG91dGRpcjogYnVpbGRlci5vdXRkaXIsXG4gICAgICBhc3NlbWJseTogYnVpbGRlcixcbiAgICB9KVxuICApO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIGFsbCBjb25zdHJ1Y3RzIGluIHRoZSBnaXZlbiBjb25zdHJ1Y3QgdHJlZVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZVRyZWUocm9vdDogSUNvbnN0cnVjdCkge1xuICBjb25zdCBlcnJvcnMgPSBuZXcgQXJyYXk8VmFsaWRhdGlvbkVycm9yPigpO1xuXG4gIHZpc2l0KHJvb3QsIFwicHJlXCIsIChjb25zdHJ1Y3QpID0+IHtcbiAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgY29uc3RydWN0Lm9uVmFsaWRhdGUoKSkge1xuICAgICAgZXJyb3JzLnB1c2goeyBtZXNzYWdlLCBzb3VyY2U6IChjb25zdHJ1Y3QgYXMgdW5rbm93bikgYXMgQ29uc3RydWN0IH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZXJyb3JMaXN0ID0gZXJyb3JzXG4gICAgICAubWFwKChlKSA9PiBgWyR7ZS5zb3VyY2Uubm9kZS5wYXRofV0gJHtlLm1lc3NhZ2V9YClcbiAgICAgIC5qb2luKFwiXFxuICBcIik7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFZhbGlkYXRpb24gZmFpbGVkIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcnM6XFxuICAke2Vycm9yTGlzdH1gXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIFZpc2l0IHRoZSBnaXZlbiBjb25zdHJ1Y3QgdHJlZSBpbiBlaXRoZXIgcHJlIG9yIHBvc3Qgb3JkZXIsIHN0b3BwaW5nIGF0IEFzc2VtYmxpZXNcbiAqL1xuZnVuY3Rpb24gdmlzaXQoXG4gIHJvb3Q6IElDb25zdHJ1Y3QsXG4gIG9yZGVyOiBcInByZVwiIHwgXCJwb3N0XCIsXG4gIGNiOiAoeDogSVByb3RlY3RlZENvbnN0cnVjdE1ldGhvZHMpID0+IHZvaWRcbikge1xuICBpZiAob3JkZXIgPT09IFwicHJlXCIpIHtcbiAgICBjYihyb290IGFzIElQcm90ZWN0ZWRDb25zdHJ1Y3RNZXRob2RzKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2hpbGQgb2Ygcm9vdC5ub2RlLmNoaWxkcmVuKSB7XG4gICAgaWYgKFN0YWdlLmlzU3RhZ2UoY2hpbGQpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmlzaXQoY2hpbGQsIG9yZGVyLCBjYik7XG4gIH1cblxuICBpZiAob3JkZXIgPT09IFwicG9zdFwiKSB7XG4gICAgY2Iocm9vdCBhcyBJUHJvdGVjdGVkQ29uc3RydWN0TWV0aG9kcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbnRlcmZhY2Ugd2hpY2ggcHJvdmlkZXMgYWNjZXNzIHRvIHNwZWNpYWwgbWV0aG9kcyBvZiBDb25zdHJ1Y3RcbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmludGVyZmFjZSBJUHJvdGVjdGVkQ29uc3RydWN0TWV0aG9kcyBleHRlbmRzIElDb25zdHJ1Y3Qge1xuICAvKipcbiAgICogTWV0aG9kIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbiBhIGNvbnN0cnVjdCBzaG91bGQgc3ludGhlc2l6ZSBpdHNlbGYgdG8gYW4gYXNzZW1ibHlcbiAgICovXG4gIG9uU3ludGhlc2l6ZShzZXNzaW9uOiBjb25zdHJ1Y3RzLklTeW50aGVzaXNTZXNzaW9uKTogdm9pZDtcblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgZ2V0cyBjYWxsZWQgdG8gdmFsaWRhdGUgYSBjb25zdHJ1Y3RcbiAgICovXG4gIG9uVmFsaWRhdGUoKTogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGdldHMgY2FsbGVkIHRvIHByZXBhcmUgYSBjb25zdHJ1Y3RcbiAgICovXG4gIG9uUHJlcGFyZSgpOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoZSBjb25zdHJ1Y3RzIE5vZGUgdHlwZSwgYnV0IHdpdGggc29tZSBhc3BlY3RzLXJlbGF0ZWQgZmllbGRzIHB1YmxpYy5cbiAqXG4gKiBIYWNrZXJ5IVxuICovXG50eXBlIE5vZGVXaXRoQXNwZWN0UHJpdmF0ZXNIYW5naW5nT3V0ID0gT21pdDxcbiAgY29uc3RydWN0cy5Ob2RlLFxuICBcImludm9rZWRBc3BlY3RzXCIgfCBcIl9hc3BlY3RzXCJcbj4gJiB7XG4gIHJlYWRvbmx5IGludm9rZWRBc3BlY3RzOiBjb25zdHJ1Y3RzLklBc3BlY3RbXTtcbiAgcmVhZG9ubHkgX2FzcGVjdHM6IGNvbnN0cnVjdHMuSUFzcGVjdFtdO1xufTtcbiJdfQ==