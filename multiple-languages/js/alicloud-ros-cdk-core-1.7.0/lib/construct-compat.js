"use strict";
/**
 * Constructs compatibility layer.
 *
 * This file, in its entirety, is expected to be removed in v2.0.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructNode = exports.ConstructOrder = exports.Construct = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const cxapi = require("@alicloud/ros-cdk-cxapi");
const constructs = require("constructs");
const token_1 = require("./token");
const ORIGINAL_CONSTRUCT_NODE_SYMBOL = Symbol.for("ros-cdk-core.ConstructNode");
const CONSTRUCT_SYMBOL = Symbol.for("ros-cdk-core.Construct");
/**
 * Represents the building block of the construct graph.
 *
 * All constructs besides the root construct must be created within the scope of
 * another construct.
 */
class Construct extends constructs.Construct {
    constructor(scope, id) {
        super(scope, id, {
            nodeFactory: {
                createNode: (h, s, i) => new ConstructNode(h, s, i)._actualNode,
            },
        });
        if (token_1.Token.isUnresolved(id)) {
            throw new Error(`Cannot use tokens in construct ID: ${id}`);
        }
        Object.defineProperty(this, CONSTRUCT_SYMBOL, { value: true });
        this.node = ConstructNode._unwrap(constructs.Node.of(this));
        const disableTrace = this.node.tryGetContext(cxapi.DISABLE_METADATA_STACK_TRACE) ||
            this.node.tryGetContext(constructs.ConstructMetadata.DISABLE_STACK_TRACE_IN_METADATA) ||
            process.env.CDK_DISABLE_STACK_TRACE;
        if (disableTrace) {
            this.node.setContext(cxapi.DISABLE_METADATA_STACK_TRACE, true);
            this.node.setContext(constructs.ConstructMetadata.DISABLE_STACK_TRACE_IN_METADATA, true);
            process.env.CDK_DISABLE_STACK_TRACE = "1";
        }
    }
    /**
     * Return whether the given object is a Construct
     */
    static isConstruct(x) {
        return typeof x === "object" && x !== null && CONSTRUCT_SYMBOL in x;
    }
    /**
     * Validate the current construct.
     *
     * This method can be implemented by derived constructs in order to perform
     * validation logic. It is called on all constructs before synthesis.
     *
     * @returns An array of validation error messages, or an empty array if the construct is valid.
     */
    onValidate() {
        return this.validate();
    }
    /**
     * Perform final modifications before synthesis
     *
     * This method can be implemented by derived constructs in order to perform
     * final changes before synthesis. prepare() will be called after child
     * constructs have been prepared.
     *
     * This is an advanced framework feature. Only use this if you
     * understand the implications.
     */
    onPrepare() {
        this.prepare();
    }
    /**
     * Allows this construct to emit artifacts into the cloud assembly during synthesis.
     *
     * This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
     * as they participate in synthesizing the cloud assembly.
     *
     * @param session The synthesis session.
     */
    onSynthesize(session) {
        this.synthesize({
            outdir: session.outdir,
            assembly: session.assembly,
        });
    }
    /**
     * Validate the current construct.
     *
     * This method can be implemented by derived constructs in order to perform
     * validation logic. It is called on all constructs before synthesis.
     *
     * @returns An array of validation error messages, or an empty array if the construct is valid.
     */
    validate() {
        return [];
    }
    /**
     * Perform final modifications before synthesis
     *
     * This method can be implemented by derived constructs in order to perform
     * final changes before synthesis. prepare() will be called after child
     * constructs have been prepared.
     *
     * This is an advanced framework feature. Only use this if you
     * understand the implications.
     */
    prepare() {
        return;
    }
    /**
     * Allows this construct to emit artifacts into the cloud assembly during synthesis.
     *
     * This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
     * as they participate in synthesizing the cloud assembly.
     *
     * @param session The synthesis session.
     */
    synthesize(session) {
        ignore(session);
    }
}
exports.Construct = Construct;
/**
 * In what order to return constructs
 */
var ConstructOrder;
(function (ConstructOrder) {
    /**
     * Depth-first, pre-order
     */
    ConstructOrder[ConstructOrder["PREORDER"] = 0] = "PREORDER";
    /**
     * Depth-first, post-order (leaf nodes first)
     */
    ConstructOrder[ConstructOrder["POSTORDER"] = 1] = "POSTORDER";
})(ConstructOrder = exports.ConstructOrder || (exports.ConstructOrder = {}));
/**
 * Represents the construct node in the scope tree.
 */
class ConstructNode {
    constructor(host, scope, id) {
        this._actualNode = new constructs.Node(host, scope, id);
        // store a back reference on _actualNode so we can our ConstructNode from it
        Object.defineProperty(this._actualNode, ORIGINAL_CONSTRUCT_NODE_SYMBOL, {
            value: this,
            configurable: false,
            enumerable: false,
        });
    }
    /**
     * Returns the wrapping `ros-cdk-core.ConstructNode` instance from a `constructs.ConstructNode`.
     *
     * @internal
     */
    static _unwrap(c) {
        const x = c[ORIGINAL_CONSTRUCT_NODE_SYMBOL];
        if (!x) {
            throw new Error("invalid ConstructNode type");
        }
        return x;
    }
    /**
     * Synthesizes a CloudAssembly from a construct tree.
     * @param node The root of the construct tree.
     * @param options Synthesis options.
     * @deprecated Use `app.synth()` or `stage.synth()` instead
     */
    static synth(node, options = {}) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const a = require("./private/synthesis");
        return a.synthesize(node.root, options);
    }
    /**
     * Invokes "prepare" on all constructs (depth-first, post-order) in the tree under `node`.
     * @param node The root node
     * @deprecated Use `app.synth()` instead
     */
    static prepare(node) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        // const p: typeof import('./private/prepare-app') = require('./private/prepare-app');
        const p = require("./private/prepare-app");
        p.prepareApp(node.root); // resolve cross refs and nested stack assets.
        return node._actualNode.prepare();
    }
    /**
     * Invokes "validate" on all constructs in the tree (depth-first, pre-order) and returns
     * the list of all errors. An empty list indicates that there are no errors.
     *
     * @param node The root node
     */
    static validate(node) {
        return node._actualNode
            .validate()
            .map((e) => ({ source: e.source, message: e.message }));
    }
    /**
     * Returns the scope in which this construct is defined.
     *
     * The value is `undefined` at the root of the construct scope tree.
     */
    get scope() {
        return this._actualNode.scope;
    }
    /**
     * The id of this construct within the current scope.
     *
     * This is a a scope-unique id. To obtain an app-unique id for this construct, use `uniqueId`.
     */
    get id() {
        return this._actualNode.id;
    }
    /**
     * The full, absolute path of this construct in the tree.
     *
     * Components are separated by '/'.
     */
    get path() {
        return this._actualNode.path;
    }
    /**
     * A tree-global unique alphanumeric identifier for this construct.
     * Includes all components of the tree.
     */
    get uniqueId() {
        return this._actualNode.uniqueId;
    }
    /**
     * Return a direct child by id, or undefined
     *
     * @param id Identifier of direct child
     * @returns the child if found, or undefined
     */
    tryFindChild(id) {
        return this._actualNode.tryFindChild(id);
    }
    /**
     * Return a direct child by id
     *
     * Throws an error if the child is not found.
     *
     * @param id Identifier of direct child
     * @returns Child with the given id.
     */
    findChild(id) {
        return this._actualNode.findChild(id);
    }
    /**
     * Returns the child construct that has the id `Default` or `Resource"`.
     * This is usually the construct that provides the bulk of the underlying functionality.
     * Useful for modifications of the underlying construct that are not available at the higher levels.
     *
     * @throws if there is more than one child
     * @returns a construct or undefined if there is no default child
     */
    get defaultChild() {
        return this._actualNode.defaultChild;
    }
    /**
     * Override the defaultChild property.
     *
     * This should only be used in the cases where the correct
     * default child is not named 'Resource' or 'Default' as it
     * should be.
     *
     * If you set this to undefined, the default behavior of finding
     * the child named 'Resource' or 'Default' will be used.
     */
    set defaultChild(value) {
        this._actualNode.defaultChild = value;
    }
    /**
     * All direct children of this construct.
     */
    get children() {
        return this._actualNode.children;
    }
    /**
     * Return this construct and all of its children in the given order
     */
    findAll(order = ConstructOrder.PREORDER) {
        return this._actualNode.findAll(order);
    }
    /**
     * This can be used to set contextual values.
     * Context must be set before any children are added, since children may consult context info during construction.
     * If the key already exists, it will be overridden.
     * @param key The context key
     * @param value The context value
     */
    setContext(key, value) {
        if (token_1.Token.isUnresolved(key)) {
            throw new Error("Invalid context key: context keys can't include tokens");
        }
        this._actualNode.setContext(key, value);
    }
    /**
     * Retrieves a value from tree context.
     *
     * Context is usually initialized at the root, but can be overridden at any point in the tree.
     *
     * @param key The context key
     * @returns The context value or `undefined` if there is no context value for thie key.
     */
    tryGetContext(key) {
        if (token_1.Token.isUnresolved(key)) {
            throw new Error("Invalid context key: context keys can't include tokens");
        }
        return this._actualNode.tryGetContext(key);
    }
    /**
     * An immutable array of metadata objects associated with this construct.
     * This can be used, for example, to implement support for deprecation notices, source mapping, etc.
     */
    get metadata() {
        return this._actualNode.metadata;
    }
    /**
     * Adds a metadata entry to this construct.
     * Entries are arbitrary values and will also include a stack trace to allow tracing back to
     * the code location for when the entry was added. It can be used, for example, to include source
     * mapping in templates to improve diagnostics.
     *
     * @param type a string denoting the type of metadata
     * @param data the value of the metadata (can be a Token). If null/undefined, metadata will not be added.
     * @param fromFunction a function under which to restrict the metadata entry's stack trace (defaults to this.addMetadata)
     */
    addMetadata(type, data, fromFunction) {
        this._actualNode.addMetadata(type, data, fromFunction);
    }
    /**
     * Adds a { "info": <message> } metadata entry to this construct.
     * The toolkit will display the info message when apps are synthesized.
     * @param message The info message.
     */
    addInfo(message) {
        this._actualNode.addMetadata(cxschema.ArtifactMetadataEntryType.INFO, message);
    }
    /**
     * Adds a { "warning": <message> } metadata entry to this construct.
     * The toolkit will display the warning when an app is synthesized, or fail
     * if run in --strict mode.
     * @param message The warning message.
     */
    addWarning(message) {
        this._actualNode.addMetadata(cxschema.ArtifactMetadataEntryType.WARN, message);
    }
    /**
     * Adds an { "error": <message> } metadata entry to this construct.
     * The toolkit will fail synthesis when errors are reported.
     * @param message The error message.
     */
    addError(message) {
        this._actualNode.addMetadata(cxschema.ArtifactMetadataEntryType.ERROR, message);
    }
    /**
     * All parent scopes of this construct.
     *
     * @returns a list of parent scopes. The last element in the list will always
     * be the current construct and the first element will be the root of the
     * tree.
     */
    get scopes() {
        return this._actualNode.scopes;
    }
    /**
     * @returns The root of the construct tree.
     */
    get root() {
        return this._actualNode.root;
    }
    /**
     * Returns true if this construct or the scopes in which it is defined are
     * locked.
     */
    get locked() {
        return this._actualNode.locked;
    }
    /**
     * Add an ordering dependency on another Construct.
     *
     * All constructs in the dependency's scope will be deployed before any
     * construct in this construct's scope.
     */
    addDependency(...dependencies) {
        this._actualNode.addDependency(...dependencies);
    }
    /**
     * Return all dependencies registered on this node or any of its children
     */
    get dependencies() {
        return this._actualNode.dependencies;
    }
    /**
     * Remove the child with the given name, if present.
     *
     * @returns Whether a child with the given name was deleted.
     * @experimental
     */
    tryRemoveChild(childName) {
        return this._actualNode.tryRemoveChild(childName);
    }
}
exports.ConstructNode = ConstructNode;
/**
 * Separator used to delimit construct path components.
 */
ConstructNode.PATH_SEP = "/";
function ignore(_x) {
    return;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0LWNvbXBhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnN0cnVjdC1jb21wYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7OztBQUVILDhEQUE4RDtBQUM5RCxpREFBaUQ7QUFDakQseUNBQXlDO0FBRXpDLG1DQUFnQztBQUVoQyxNQUFNLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUNoRixNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQWlDOUQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFNBQVUsU0FBUSxVQUFVLENBQUMsU0FBUztJQWFqRCxZQUFZLEtBQWdCLEVBQUUsRUFBVTtRQUN0QyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLFdBQVcsRUFBRTtnQkFDWCxVQUFVLEVBQUUsQ0FDVixDQUF1QixFQUN2QixDQUF3QixFQUN4QixDQUFTLEVBQ1QsRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDLENBQWMsRUFBRSxDQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVzthQUN2RTtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksYUFBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU1RCxNQUFNLFlBQVksR0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFh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LENBQUMsR0FBRyxZQUEyQjtRQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBNEIsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxjQUFjLENBQUMsU0FBaUI7UUFDckMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDOztBQTFUSCxzQ0EyVEM7QUExVEM7O0dBRUc7QUFDb0Isc0JBQVEsR0FBRyxHQUFHLENBQUM7QUF1VnhDLFNBQVMsTUFBTSxDQUFDLEVBQU87SUFDckIsT0FBTztBQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnN0cnVjdHMgY29tcGF0aWJpbGl0eSBsYXllci5cbiAqXG4gKiBUaGlzIGZpbGUsIGluIGl0cyBlbnRpcmV0eSwgaXMgZXhwZWN0ZWQgdG8gYmUgcmVtb3ZlZCBpbiB2Mi4wLlxuICovXG5cbmltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWFcIjtcbmltcG9ydCAqIGFzIGN4YXBpIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1jeGFwaVwiO1xuaW1wb3J0ICogYXMgY29uc3RydWN0cyBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgSURlcGVuZGFibGUgfSBmcm9tIFwiLi9kZXBlbmRlbmN5XCI7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL3Rva2VuXCI7XG5cbmNvbnN0IE9SSUdJTkFMX0NPTlNUUlVDVF9OT0RFX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJyb3MtY2RrLWNvcmUuQ29uc3RydWN0Tm9kZVwiKTtcbmNvbnN0IENPTlNUUlVDVF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwicm9zLWNkay1jb3JlLkNvbnN0cnVjdFwiKTtcbi8qKlxuICogUmVwcmVzZW50cyBhIGNvbnN0cnVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ29uc3RydWN0IGV4dGVuZHMgY29uc3RydWN0cy5JQ29uc3RydWN0LCBJRGVwZW5kYWJsZSB7XG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0IHRyZWUgbm9kZSBmb3IgdGhpcyBjb25zdHJ1Y3QuXG4gICAqL1xuICByZWFkb25seSBub2RlOiBDb25zdHJ1Y3ROb2RlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgc2Vzc2lvbiBvZiBzeW50aGVzaXMuIFBhc3NlZCBpbnRvIGBDb25zdHJ1Y3Quc3ludGhlc2l6ZSgpYCBtZXRob2RzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTeW50aGVzaXNTZXNzaW9uIHtcbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgZGlyZWN0b3J5IGZvciB0aGlzIHN5bnRoZXNpcyBzZXNzaW9uLlxuICAgKi9cbiAgb3V0ZGlyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENsb3VkIGFzc2VtYmx5IGJ1aWxkZXIuXG4gICAqL1xuICBhc3NlbWJseTogY3hhcGkuQ2xvdWRBc3NlbWJseUJ1aWxkZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHN0YWNrIHNob3VsZCBiZSB2YWxpZGF0ZWQgYWZ0ZXIgc3ludGhlc2lzIHRvIGNoZWNrIGZvciBlcnJvciBtZXRhZGF0YVxuICAgKlxuICAgKiBAZGVmYXVsdCAtIGZhbHNlXG4gICAqL1xuICB2YWxpZGF0ZU9uU3ludGg/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGJ1aWxkaW5nIGJsb2NrIG9mIHRoZSBjb25zdHJ1Y3QgZ3JhcGguXG4gKlxuICogQWxsIGNvbnN0cnVjdHMgYmVzaWRlcyB0aGUgcm9vdCBjb25zdHJ1Y3QgbXVzdCBiZSBjcmVhdGVkIHdpdGhpbiB0aGUgc2NvcGUgb2ZcbiAqIGFub3RoZXIgY29uc3RydWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29uc3RydWN0IGV4dGVuZHMgY29uc3RydWN0cy5Db25zdHJ1Y3QgaW1wbGVtZW50cyBJQ29uc3RydWN0IHtcbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBDb25zdHJ1Y3RcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNDb25zdHJ1Y3QoeDogYW55KTogeCBpcyBDb25zdHJ1Y3Qge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiB4ICE9PSBudWxsICYmIENPTlNUUlVDVF9TWU1CT0wgaW4geDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0IHRyZWUgbm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb25zdHJ1Y3QuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbm9kZTogQ29uc3RydWN0Tm9kZTtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICBub2RlRmFjdG9yeToge1xuICAgICAgICBjcmVhdGVOb2RlOiAoXG4gICAgICAgICAgaDogY29uc3RydWN0cy5Db25zdHJ1Y3QsXG4gICAgICAgICAgczogY29uc3RydWN0cy5JQ29uc3RydWN0LFxuICAgICAgICAgIGk6IHN0cmluZ1xuICAgICAgICApID0+IG5ldyBDb25zdHJ1Y3ROb2RlKGggYXMgQ29uc3RydWN0LCBzIGFzIElDb25zdHJ1Y3QsIGkpLl9hY3R1YWxOb2RlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQoaWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1c2UgdG9rZW5zIGluIGNvbnN0cnVjdCBJRDogJHtpZH1gKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgQ09OU1RSVUNUX1NZTUJPTCwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB0aGlzLm5vZGUgPSBDb25zdHJ1Y3ROb2RlLl91bndyYXAoY29uc3RydWN0cy5Ob2RlLm9mKHRoaXMpKTtcblxuICAgIGNvbnN0IGRpc2FibGVUcmFjZSA9XG4gICAgICB0aGlzLm5vZGUudHJ5R2V0Q29udGV4dChjeGFwaS5ESVNBQkxFX01FVEFEQVRBX1NUQUNLX1RSQUNFKSB8fFxuICAgICAgdGhpcy5ub2RlLnRyeUdldENvbnRleHQoXG4gICAgICAgIGNvbnN0cnVjdHMuQ29uc3RydWN0TWV0YWRhdGEuRElTQUJMRV9TVEFDS19UUkFDRV9JTl9NRVRBREFUQVxuICAgICAgKSB8fFxuICAgICAgcHJvY2Vzcy5lbnYuQ0RLX0RJU0FCTEVfU1RBQ0tfVFJBQ0U7XG5cbiAgICBpZiAoZGlzYWJsZVRyYWNlKSB7XG4gICAgICB0aGlzLm5vZGUuc2V0Q29udGV4dChjeGFwaS5ESVNBQkxFX01FVEFEQVRBX1NUQUNLX1RSQUNFLCB0cnVlKTtcbiAgICAgIHRoaXMubm9kZS5zZXRDb250ZXh0KFxuICAgICAgICBjb25zdHJ1Y3RzLkNvbnN0cnVjdE1ldGFkYXRhLkRJU0FCTEVfU1RBQ0tfVFJBQ0VfSU5fTUVUQURBVEEsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgICBwcm9jZXNzLmVudi5DREtfRElTQUJMRV9TVEFDS19UUkFDRSA9IFwiMVwiO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGUgY3VycmVudCBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBpbXBsZW1lbnRlZCBieSBkZXJpdmVkIGNvbnN0cnVjdHMgaW4gb3JkZXIgdG8gcGVyZm9ybVxuICAgKiB2YWxpZGF0aW9uIGxvZ2ljLiBJdCBpcyBjYWxsZWQgb24gYWxsIGNvbnN0cnVjdHMgYmVmb3JlIHN5bnRoZXNpcy5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlcywgb3IgYW4gZW1wdHkgYXJyYXkgaWYgdGhlIGNvbnN0cnVjdCBpcyB2YWxpZC5cbiAgICovXG4gIHByb3RlY3RlZCBvblZhbGlkYXRlKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gZmluYWwgbW9kaWZpY2F0aW9ucyBiZWZvcmUgc3ludGhlc2lzXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBpbXBsZW1lbnRlZCBieSBkZXJpdmVkIGNvbnN0cnVjdHMgaW4gb3JkZXIgdG8gcGVyZm9ybVxuICAgKiBmaW5hbCBjaGFuZ2VzIGJlZm9yZSBzeW50aGVzaXMuIHByZXBhcmUoKSB3aWxsIGJlIGNhbGxlZCBhZnRlciBjaGlsZFxuICAgKiBjb25zdHJ1Y3RzIGhhdmUgYmVlbiBwcmVwYXJlZC5cbiAgICpcbiAgICogVGhpcyBpcyBhbiBhZHZhbmNlZCBmcmFtZXdvcmsgZmVhdHVyZS4gT25seSB1c2UgdGhpcyBpZiB5b3VcbiAgICogdW5kZXJzdGFuZCB0aGUgaW1wbGljYXRpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIG9uUHJlcGFyZSgpOiB2b2lkIHtcbiAgICB0aGlzLnByZXBhcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhpcyBjb25zdHJ1Y3QgdG8gZW1pdCBhcnRpZmFjdHMgaW50byB0aGUgY2xvdWQgYXNzZW1ibHkgZHVyaW5nIHN5bnRoZXNpcy5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgdXN1YWxseSBpbXBsZW1lbnRlZCBieSBmcmFtZXdvcmstbGV2ZWwgY29uc3RydWN0cyBzdWNoIGFzIGBTdGFja2AgYW5kIGBBc3NldGBcbiAgICogYXMgdGhleSBwYXJ0aWNpcGF0ZSBpbiBzeW50aGVzaXppbmcgdGhlIGNsb3VkIGFzc2VtYmx5LlxuICAgKlxuICAgKiBAcGFyYW0gc2Vzc2lvbiBUaGUgc3ludGhlc2lzIHNlc3Npb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgb25TeW50aGVzaXplKHNlc3Npb246IGNvbnN0cnVjdHMuSVN5bnRoZXNpc1Nlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnN5bnRoZXNpemUoe1xuICAgICAgb3V0ZGlyOiBzZXNzaW9uLm91dGRpcixcbiAgICAgIGFzc2VtYmx5OiBzZXNzaW9uLmFzc2VtYmx5ISxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGUgY3VycmVudCBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBpbXBsZW1lbnRlZCBieSBkZXJpdmVkIGNvbnN0cnVjdHMgaW4gb3JkZXIgdG8gcGVyZm9ybVxuICAgKiB2YWxpZGF0aW9uIGxvZ2ljLiBJdCBpcyBjYWxsZWQgb24gYWxsIGNvbnN0cnVjdHMgYmVmb3JlIHN5bnRoZXNpcy5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlcywgb3IgYW4gZW1wdHkgYXJyYXkgaWYgdGhlIGNvbnN0cnVjdCBpcyB2YWxpZC5cbiAgICovXG4gIHByb3RlY3RlZCB2YWxpZGF0ZSgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gZmluYWwgbW9kaWZpY2F0aW9ucyBiZWZvcmUgc3ludGhlc2lzXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBpbXBsZW1lbnRlZCBieSBkZXJpdmVkIGNvbnN0cnVjdHMgaW4gb3JkZXIgdG8gcGVyZm9ybVxuICAgKiBmaW5hbCBjaGFuZ2VzIGJlZm9yZSBzeW50aGVzaXMuIHByZXBhcmUoKSB3aWxsIGJlIGNhbGxlZCBhZnRlciBjaGlsZFxuICAgKiBjb25zdHJ1Y3RzIGhhdmUgYmVlbiBwcmVwYXJlZC5cbiAgICpcbiAgICogVGhpcyBpcyBhbiBhZHZhbmNlZCBmcmFtZXdvcmsgZmVhdHVyZS4gT25seSB1c2UgdGhpcyBpZiB5b3VcbiAgICogdW5kZXJzdGFuZCB0aGUgaW1wbGljYXRpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIHByZXBhcmUoKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGlzIGNvbnN0cnVjdCB0byBlbWl0IGFydGlmYWN0cyBpbnRvIHRoZSBjbG91ZCBhc3NlbWJseSBkdXJpbmcgc3ludGhlc2lzLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c3VhbGx5IGltcGxlbWVudGVkIGJ5IGZyYW1ld29yay1sZXZlbCBjb25zdHJ1Y3RzIHN1Y2ggYXMgYFN0YWNrYCBhbmQgYEFzc2V0YFxuICAgKiBhcyB0aGV5IHBhcnRpY2lwYXRlIGluIHN5bnRoZXNpemluZyB0aGUgY2xvdWQgYXNzZW1ibHkuXG4gICAqXG4gICAqIEBwYXJhbSBzZXNzaW9uIFRoZSBzeW50aGVzaXMgc2Vzc2lvbi5cbiAgICovXG4gIHB1YmxpYyBzeW50aGVzaXplKHNlc3Npb246IElTeW50aGVzaXNTZXNzaW9uKTogdm9pZCB7XG4gICAgaWdub3JlKHNlc3Npb24pO1xuICB9XG59XG5cbi8qKlxuICogSW4gd2hhdCBvcmRlciB0byByZXR1cm4gY29uc3RydWN0c1xuICovXG5leHBvcnQgZW51bSBDb25zdHJ1Y3RPcmRlciB7XG4gIC8qKlxuICAgKiBEZXB0aC1maXJzdCwgcHJlLW9yZGVyXG4gICAqL1xuICBQUkVPUkRFUixcblxuICAvKipcbiAgICogRGVwdGgtZmlyc3QsIHBvc3Qtb3JkZXIgKGxlYWYgbm9kZXMgZmlyc3QpXG4gICAqL1xuICBQT1NUT1JERVIsXG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3Igc3ludGhlc2lzLlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBgYXBwLnN5bnRoKClgIG9yIGBzdGFnZS5zeW50aCgpYCBpbnN0ZWFkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3ludGhlc2lzT3B0aW9ucyBleHRlbmRzIGN4YXBpLkFzc2VtYmx5QnVpbGRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgZGlyZWN0b3J5IGludG8gd2hpY2ggdG8gc3ludGhlc2l6ZSB0aGUgY2xvdWQgYXNzZW1ibHkuXG4gICAqIEBkZWZhdWx0IC0gY3JlYXRlcyBhIHRlbXBvcmFyeSBkaXJlY3RvcnlcbiAgICovXG4gIHJlYWRvbmx5IG91dGRpcj86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciBzeW50aGVzaXMgc2hvdWxkIHNraXAgdGhlIHZhbGlkYXRpb24gcGhhc2UuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSBza2lwVmFsaWRhdGlvbj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY29uc3RydWN0IG5vZGUgaW4gdGhlIHNjb3BlIHRyZWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25zdHJ1Y3ROb2RlIHtcbiAgLyoqXG4gICAqIFNlcGFyYXRvciB1c2VkIHRvIGRlbGltaXQgY29uc3RydWN0IHBhdGggY29tcG9uZW50cy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEFUSF9TRVAgPSBcIi9cIjtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd3JhcHBpbmcgYHJvcy1jZGstY29yZS5Db25zdHJ1Y3ROb2RlYCBpbnN0YW5jZSBmcm9tIGEgYGNvbnN0cnVjdHMuQ29uc3RydWN0Tm9kZWAuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBfdW53cmFwKGM6IGNvbnN0cnVjdHMuTm9kZSk6IENvbnN0cnVjdE5vZGUge1xuICAgIGNvbnN0IHggPSAoYyBhcyBhbnkpW09SSUdJTkFMX0NPTlNUUlVDVF9OT0RFX1NZTUJPTF07XG4gICAgaWYgKCF4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIENvbnN0cnVjdE5vZGUgdHlwZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50aGVzaXplcyBhIENsb3VkQXNzZW1ibHkgZnJvbSBhIGNvbnN0cnVjdCB0cmVlLlxuICAgKiBAcGFyYW0gbm9kZSBUaGUgcm9vdCBvZiB0aGUgY29uc3RydWN0IHRyZWUuXG4gICAqIEBwYXJhbSBvcHRpb25zIFN5bnRoZXNpcyBvcHRpb25zLlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGFwcC5zeW50aCgpYCBvciBgc3RhZ2Uuc3ludGgoKWAgaW5zdGVhZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzeW50aChcbiAgICBub2RlOiBDb25zdHJ1Y3ROb2RlLFxuICAgIG9wdGlvbnM6IFN5bnRoZXNpc09wdGlvbnMgPSB7fVxuICApOiBjeGFwaS5DbG91ZEFzc2VtYmx5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgIGNvbnN0IGE6IHR5cGVvZiBpbXBvcnQoXCIuL3ByaXZhdGUvc3ludGhlc2lzXCIpID0gcmVxdWlyZShcIi4vcHJpdmF0ZS9zeW50aGVzaXNcIik7XG4gICAgcmV0dXJuIGEuc3ludGhlc2l6ZShub2RlLnJvb3QsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgXCJwcmVwYXJlXCIgb24gYWxsIGNvbnN0cnVjdHMgKGRlcHRoLWZpcnN0LCBwb3N0LW9yZGVyKSBpbiB0aGUgdHJlZSB1bmRlciBgbm9kZWAuXG4gICAqIEBwYXJhbSBub2RlIFRoZSByb290IG5vZGVcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBhcHAuc3ludGgoKWAgaW5zdGVhZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBwcmVwYXJlKG5vZGU6IENvbnN0cnVjdE5vZGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgIC8vIGNvbnN0IHA6IHR5cGVvZiBpbXBvcnQoJy4vcHJpdmF0ZS9wcmVwYXJlLWFwcCcpID0gcmVxdWlyZSgnLi9wcml2YXRlL3ByZXBhcmUtYXBwJyk7XG4gICAgY29uc3QgcDogdHlwZW9mIGltcG9ydChcIi4vcHJpdmF0ZS9wcmVwYXJlLWFwcFwiKSA9IHJlcXVpcmUoXCIuL3ByaXZhdGUvcHJlcGFyZS1hcHBcIik7XG4gICAgcC5wcmVwYXJlQXBwKG5vZGUucm9vdCk7IC8vIHJlc29sdmUgY3Jvc3MgcmVmcyBhbmQgbmVzdGVkIHN0YWNrIGFzc2V0cy5cbiAgICByZXR1cm4gbm9kZS5fYWN0dWFsTm9kZS5wcmVwYXJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBcInZhbGlkYXRlXCIgb24gYWxsIGNvbnN0cnVjdHMgaW4gdGhlIHRyZWUgKGRlcHRoLWZpcnN0LCBwcmUtb3JkZXIpIGFuZCByZXR1cm5zXG4gICAqIHRoZSBsaXN0IG9mIGFsbCBlcnJvcnMuIEFuIGVtcHR5IGxpc3QgaW5kaWNhdGVzIHRoYXQgdGhlcmUgYXJlIG5vIGVycm9ycy5cbiAgICpcbiAgICogQHBhcmFtIG5vZGUgVGhlIHJvb3Qgbm9kZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB2YWxpZGF0ZShub2RlOiBDb25zdHJ1Y3ROb2RlKTogVmFsaWRhdGlvbkVycm9yW10ge1xuICAgIHJldHVybiBub2RlLl9hY3R1YWxOb2RlXG4gICAgICAudmFsaWRhdGUoKVxuICAgICAgLm1hcCgoZSkgPT4gKHsgc291cmNlOiBlLnNvdXJjZSBhcyBDb25zdHJ1Y3QsIG1lc3NhZ2U6IGUubWVzc2FnZSB9KSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgX2FjdHVhbE5vZGU6IGNvbnN0cnVjdHMuTm9kZTtcblxuICBjb25zdHJ1Y3Rvcihob3N0OiBDb25zdHJ1Y3QsIHNjb3BlOiBJQ29uc3RydWN0LCBpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWN0dWFsTm9kZSA9IG5ldyBjb25zdHJ1Y3RzLk5vZGUoaG9zdCwgc2NvcGUsIGlkKTtcblxuICAgIC8vIHN0b3JlIGEgYmFjayByZWZlcmVuY2Ugb24gX2FjdHVhbE5vZGUgc28gd2UgY2FuIG91ciBDb25zdHJ1Y3ROb2RlIGZyb20gaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5fYWN0dWFsTm9kZSwgT1JJR0lOQUxfQ09OU1RSVUNUX05PREVfU1lNQk9MLCB7XG4gICAgICB2YWx1ZTogdGhpcyxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzY29wZSBpbiB3aGljaCB0aGlzIGNvbnN0cnVjdCBpcyBkZWZpbmVkLlxuICAgKlxuICAgKiBUaGUgdmFsdWUgaXMgYHVuZGVmaW5lZGAgYXQgdGhlIHJvb3Qgb2YgdGhlIGNvbnN0cnVjdCBzY29wZSB0cmVlLlxuICAgKi9cbiAgcHVibGljIGdldCBzY29wZSgpOiBJQ29uc3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5zY29wZSBhcyBJQ29uc3RydWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGlzIGNvbnN0cnVjdCB3aXRoaW4gdGhlIGN1cnJlbnQgc2NvcGUuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBhIHNjb3BlLXVuaXF1ZSBpZC4gVG8gb2J0YWluIGFuIGFwcC11bmlxdWUgaWQgZm9yIHRoaXMgY29uc3RydWN0LCB1c2UgYHVuaXF1ZUlkYC5cbiAgICovXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdHVhbE5vZGUuaWQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZ1bGwsIGFic29sdXRlIHBhdGggb2YgdGhpcyBjb25zdHJ1Y3QgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIENvbXBvbmVudHMgYXJlIHNlcGFyYXRlZCBieSAnLycuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5wYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgdHJlZS1nbG9iYWwgdW5pcXVlIGFscGhhbnVtZXJpYyBpZGVudGlmaWVyIGZvciB0aGlzIGNvbnN0cnVjdC5cbiAgICogSW5jbHVkZXMgYWxsIGNvbXBvbmVudHMgb2YgdGhlIHRyZWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHVuaXF1ZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdHVhbE5vZGUudW5pcXVlSWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgZGlyZWN0IGNoaWxkIGJ5IGlkLCBvciB1bmRlZmluZWRcbiAgICpcbiAgICogQHBhcmFtIGlkIElkZW50aWZpZXIgb2YgZGlyZWN0IGNoaWxkXG4gICAqIEByZXR1cm5zIHRoZSBjaGlsZCBpZiBmb3VuZCwgb3IgdW5kZWZpbmVkXG4gICAqL1xuICBwdWJsaWMgdHJ5RmluZENoaWxkKGlkOiBzdHJpbmcpOiBJQ29uc3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS50cnlGaW5kQ2hpbGQoaWQpIGFzIElDb25zdHJ1Y3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgZGlyZWN0IGNoaWxkIGJ5IGlkXG4gICAqXG4gICAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgY2hpbGQgaXMgbm90IGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gaWQgSWRlbnRpZmllciBvZiBkaXJlY3QgY2hpbGRcbiAgICogQHJldHVybnMgQ2hpbGQgd2l0aCB0aGUgZ2l2ZW4gaWQuXG4gICAqL1xuICBwdWJsaWMgZmluZENoaWxkKGlkOiBzdHJpbmcpOiBJQ29uc3RydWN0IHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5maW5kQ2hpbGQoaWQpIGFzIElDb25zdHJ1Y3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2hpbGQgY29uc3RydWN0IHRoYXQgaGFzIHRoZSBpZCBgRGVmYXVsdGAgb3IgYFJlc291cmNlXCJgLlxuICAgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGNvbnN0cnVjdCB0aGF0IHByb3ZpZGVzIHRoZSBidWxrIG9mIHRoZSB1bmRlcmx5aW5nIGZ1bmN0aW9uYWxpdHkuXG4gICAqIFVzZWZ1bCBmb3IgbW9kaWZpY2F0aW9ucyBvZiB0aGUgdW5kZXJseWluZyBjb25zdHJ1Y3QgdGhhdCBhcmUgbm90IGF2YWlsYWJsZSBhdCB0aGUgaGlnaGVyIGxldmVscy5cbiAgICpcbiAgICogQHRocm93cyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGNoaWxkXG4gICAqIEByZXR1cm5zIGEgY29uc3RydWN0IG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBubyBkZWZhdWx0IGNoaWxkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRDaGlsZCgpOiBJQ29uc3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5kZWZhdWx0Q2hpbGQgYXMgSUNvbnN0cnVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdENoaWxkIHByb3BlcnR5LlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gdGhlIGNhc2VzIHdoZXJlIHRoZSBjb3JyZWN0XG4gICAqIGRlZmF1bHQgY2hpbGQgaXMgbm90IG5hbWVkICdSZXNvdXJjZScgb3IgJ0RlZmF1bHQnIGFzIGl0XG4gICAqIHNob3VsZCBiZS5cbiAgICpcbiAgICogSWYgeW91IHNldCB0aGlzIHRvIHVuZGVmaW5lZCwgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgZmluZGluZ1xuICAgKiB0aGUgY2hpbGQgbmFtZWQgJ1Jlc291cmNlJyBvciAnRGVmYXVsdCcgd2lsbCBiZSB1c2VkLlxuICAgKi9cbiAgcHVibGljIHNldCBkZWZhdWx0Q2hpbGQodmFsdWU6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hY3R1YWxOb2RlLmRlZmF1bHRDaGlsZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBkaXJlY3QgY2hpbGRyZW4gb2YgdGhpcyBjb25zdHJ1Y3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNoaWxkcmVuKCk6IElDb25zdHJ1Y3RbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdHVhbE5vZGUuY2hpbGRyZW4gYXMgSUNvbnN0cnVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGlzIGNvbnN0cnVjdCBhbmQgYWxsIG9mIGl0cyBjaGlsZHJlbiBpbiB0aGUgZ2l2ZW4gb3JkZXJcbiAgICovXG4gIHB1YmxpYyBmaW5kQWxsKFxuICAgIG9yZGVyOiBDb25zdHJ1Y3RPcmRlciA9IENvbnN0cnVjdE9yZGVyLlBSRU9SREVSXG4gICk6IElDb25zdHJ1Y3RbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdHVhbE5vZGUuZmluZEFsbChvcmRlcikgYXMgSUNvbnN0cnVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gc2V0IGNvbnRleHR1YWwgdmFsdWVzLlxuICAgKiBDb250ZXh0IG11c3QgYmUgc2V0IGJlZm9yZSBhbnkgY2hpbGRyZW4gYXJlIGFkZGVkLCBzaW5jZSBjaGlsZHJlbiBtYXkgY29uc3VsdCBjb250ZXh0IGluZm8gZHVyaW5nIGNvbnN0cnVjdGlvbi5cbiAgICogSWYgdGhlIGtleSBhbHJlYWR5IGV4aXN0cywgaXQgd2lsbCBiZSBvdmVycmlkZGVuLlxuICAgKiBAcGFyYW0ga2V5IFRoZSBjb250ZXh0IGtleVxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvbnRleHQgdmFsdWVcbiAgICovXG4gIHB1YmxpYyBzZXRDb250ZXh0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKFRva2VuLmlzVW5yZXNvbHZlZChrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbnRleHQga2V5OiBjb250ZXh0IGtleXMgY2FuJ3QgaW5jbHVkZSB0b2tlbnNcIik7XG4gICAgfVxuICAgIHRoaXMuX2FjdHVhbE5vZGUuc2V0Q29udGV4dChrZXksIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSB2YWx1ZSBmcm9tIHRyZWUgY29udGV4dC5cbiAgICpcbiAgICogQ29udGV4dCBpcyB1c3VhbGx5IGluaXRpYWxpemVkIGF0IHRoZSByb290LCBidXQgY2FuIGJlIG92ZXJyaWRkZW4gYXQgYW55IHBvaW50IGluIHRoZSB0cmVlLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IFRoZSBjb250ZXh0IGtleVxuICAgKiBAcmV0dXJucyBUaGUgY29udGV4dCB2YWx1ZSBvciBgdW5kZWZpbmVkYCBpZiB0aGVyZSBpcyBubyBjb250ZXh0IHZhbHVlIGZvciB0aGllIGtleS5cbiAgICovXG4gIHB1YmxpYyB0cnlHZXRDb250ZXh0KGtleTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoVG9rZW4uaXNVbnJlc29sdmVkKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29udGV4dCBrZXk6IGNvbnRleHQga2V5cyBjYW4ndCBpbmNsdWRlIHRva2Vuc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FjdHVhbE5vZGUudHJ5R2V0Q29udGV4dChrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGltbXV0YWJsZSBhcnJheSBvZiBtZXRhZGF0YSBvYmplY3RzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnN0cnVjdC5cbiAgICogVGhpcyBjYW4gYmUgdXNlZCwgZm9yIGV4YW1wbGUsIHRvIGltcGxlbWVudCBzdXBwb3J0IGZvciBkZXByZWNhdGlvbiBub3RpY2VzLCBzb3VyY2UgbWFwcGluZywgZXRjLlxuICAgKi9cbiAgcHVibGljIGdldCBtZXRhZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5tZXRhZGF0YSBhcyBjeGFwaS5NZXRhZGF0YUVudHJ5W107XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1ldGFkYXRhIGVudHJ5IHRvIHRoaXMgY29uc3RydWN0LlxuICAgKiBFbnRyaWVzIGFyZSBhcmJpdHJhcnkgdmFsdWVzIGFuZCB3aWxsIGFsc28gaW5jbHVkZSBhIHN0YWNrIHRyYWNlIHRvIGFsbG93IHRyYWNpbmcgYmFjayB0b1xuICAgKiB0aGUgY29kZSBsb2NhdGlvbiBmb3Igd2hlbiB0aGUgZW50cnkgd2FzIGFkZGVkLiBJdCBjYW4gYmUgdXNlZCwgZm9yIGV4YW1wbGUsIHRvIGluY2x1ZGUgc291cmNlXG4gICAqIG1hcHBpbmcgaW4gdGVtcGxhdGVzIHRvIGltcHJvdmUgZGlhZ25vc3RpY3MuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIGEgc3RyaW5nIGRlbm90aW5nIHRoZSB0eXBlIG9mIG1ldGFkYXRhXG4gICAqIEBwYXJhbSBkYXRhIHRoZSB2YWx1ZSBvZiB0aGUgbWV0YWRhdGEgKGNhbiBiZSBhIFRva2VuKS4gSWYgbnVsbC91bmRlZmluZWQsIG1ldGFkYXRhIHdpbGwgbm90IGJlIGFkZGVkLlxuICAgKiBAcGFyYW0gZnJvbUZ1bmN0aW9uIGEgZnVuY3Rpb24gdW5kZXIgd2hpY2ggdG8gcmVzdHJpY3QgdGhlIG1ldGFkYXRhIGVudHJ5J3Mgc3RhY2sgdHJhY2UgKGRlZmF1bHRzIHRvIHRoaXMuYWRkTWV0YWRhdGEpXG4gICAqL1xuICBwdWJsaWMgYWRkTWV0YWRhdGEodHlwZTogc3RyaW5nLCBkYXRhOiBhbnksIGZyb21GdW5jdGlvbj86IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX2FjdHVhbE5vZGUuYWRkTWV0YWRhdGEodHlwZSwgZGF0YSwgZnJvbUZ1bmN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgeyBcImluZm9cIjogPG1lc3NhZ2U+IH0gbWV0YWRhdGEgZW50cnkgdG8gdGhpcyBjb25zdHJ1Y3QuXG4gICAqIFRoZSB0b29sa2l0IHdpbGwgZGlzcGxheSB0aGUgaW5mbyBtZXNzYWdlIHdoZW4gYXBwcyBhcmUgc3ludGhlc2l6ZWQuXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBpbmZvIG1lc3NhZ2UuXG4gICAqL1xuICBwdWJsaWMgYWRkSW5mbyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9hY3R1YWxOb2RlLmFkZE1ldGFkYXRhKFxuICAgICAgY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5JTkZPLFxuICAgICAgbWVzc2FnZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHsgXCJ3YXJuaW5nXCI6IDxtZXNzYWdlPiB9IG1ldGFkYXRhIGVudHJ5IHRvIHRoaXMgY29uc3RydWN0LlxuICAgKiBUaGUgdG9vbGtpdCB3aWxsIGRpc3BsYXkgdGhlIHdhcm5pbmcgd2hlbiBhbiBhcHAgaXMgc3ludGhlc2l6ZWQsIG9yIGZhaWxcbiAgICogaWYgcnVuIGluIC0tc3RyaWN0IG1vZGUuXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gICAqL1xuICBwdWJsaWMgYWRkV2FybmluZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9hY3R1YWxOb2RlLmFkZE1ldGFkYXRhKFxuICAgICAgY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5XQVJOLFxuICAgICAgbWVzc2FnZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiB7IFwiZXJyb3JcIjogPG1lc3NhZ2U+IH0gbWV0YWRhdGEgZW50cnkgdG8gdGhpcyBjb25zdHJ1Y3QuXG4gICAqIFRoZSB0b29sa2l0IHdpbGwgZmFpbCBzeW50aGVzaXMgd2hlbiBlcnJvcnMgYXJlIHJlcG9ydGVkLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAgICovXG4gIHB1YmxpYyBhZGRFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3R1YWxOb2RlLmFkZE1ldGFkYXRhKFxuICAgICAgY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5FUlJPUixcbiAgICAgIG1lc3NhZ2VcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBwYXJlbnQgc2NvcGVzIG9mIHRoaXMgY29uc3RydWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBhIGxpc3Qgb2YgcGFyZW50IHNjb3Blcy4gVGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgbGlzdCB3aWxsIGFsd2F5c1xuICAgKiBiZSB0aGUgY3VycmVudCBjb25zdHJ1Y3QgYW5kIHRoZSBmaXJzdCBlbGVtZW50IHdpbGwgYmUgdGhlIHJvb3Qgb2YgdGhlXG4gICAqIHRyZWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNjb3BlcygpOiBJQ29uc3RydWN0W10ge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLnNjb3BlcyBhcyBJQ29uc3RydWN0W107XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgVGhlIHJvb3Qgb2YgdGhlIGNvbnN0cnVjdCB0cmVlLlxuICAgKi9cbiAgcHVibGljIGdldCByb290KCk6IElDb25zdHJ1Y3Qge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLnJvb3QgYXMgSUNvbnN0cnVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBjb25zdHJ1Y3Qgb3IgdGhlIHNjb3BlcyBpbiB3aGljaCBpdCBpcyBkZWZpbmVkIGFyZVxuICAgKiBsb2NrZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGxvY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5sb2NrZWQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIG9yZGVyaW5nIGRlcGVuZGVuY3kgb24gYW5vdGhlciBDb25zdHJ1Y3QuXG4gICAqXG4gICAqIEFsbCBjb25zdHJ1Y3RzIGluIHRoZSBkZXBlbmRlbmN5J3Mgc2NvcGUgd2lsbCBiZSBkZXBsb3llZCBiZWZvcmUgYW55XG4gICAqIGNvbnN0cnVjdCBpbiB0aGlzIGNvbnN0cnVjdCdzIHNjb3BlLlxuICAgKi9cbiAgcHVibGljIGFkZERlcGVuZGVuY3koLi4uZGVwZW5kZW5jaWVzOiBJRGVwZW5kYWJsZVtdKSB7XG4gICAgdGhpcy5fYWN0dWFsTm9kZS5hZGREZXBlbmRlbmN5KC4uLmRlcGVuZGVuY2llcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFsbCBkZXBlbmRlbmNpZXMgcmVnaXN0ZXJlZCBvbiB0aGlzIG5vZGUgb3IgYW55IG9mIGl0cyBjaGlsZHJlblxuICAgKi9cbiAgcHVibGljIGdldCBkZXBlbmRlbmNpZXMoKTogRGVwZW5kZW5jeVtdIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5kZXBlbmRlbmNpZXMgYXMgRGVwZW5kZW5jeVtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY2hpbGQgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgaWYgcHJlc2VudC5cbiAgICpcbiAgICogQHJldHVybnMgV2hldGhlciBhIGNoaWxkIHdpdGggdGhlIGdpdmVuIG5hbWUgd2FzIGRlbGV0ZWQuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyB0cnlSZW1vdmVDaGlsZChjaGlsZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLnRyeVJlbW92ZUNoaWxkKGNoaWxkTmFtZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlcnJvciByZXR1cm5lZCBkdXJpbmcgdGhlIHZhbGlkYXRpb24gcGhhc2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkVycm9yIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3Qgd2hpY2ggZW1pdHRlZCB0aGUgZXJyb3IuXG4gICAqL1xuICByZWFkb25seSBzb3VyY2U6IENvbnN0cnVjdDtcblxuICAvKipcbiAgICogVGhlIGVycm9yIG1lc3NhZ2UuXG4gICAqL1xuICByZWFkb25seSBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBzaW5nbGUgZGVwZW5kZW5jeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlcGVuZGVuY3kge1xuICAvKipcbiAgICogU291cmNlIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWFkb25seSBzb3VyY2U6IElDb25zdHJ1Y3Q7XG5cbiAgLyoqXG4gICAqIFRhcmdldCBvZiB0aGUgZGVwZW5kZW5jeVxuICAgKi9cbiAgcmVhZG9ubHkgdGFyZ2V0OiBJQ29uc3RydWN0O1xufVxuXG5mdW5jdGlvbiBpZ25vcmUoX3g6IGFueSkge1xuICByZXR1cm47XG59XG4iXX0=