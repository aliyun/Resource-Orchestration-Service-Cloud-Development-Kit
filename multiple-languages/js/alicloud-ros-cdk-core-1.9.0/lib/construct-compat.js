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
    /**
     * Return whether the given object is a Construct
     */
    static isConstruct(x) {
        return typeof x === "object" && x !== null && CONSTRUCT_SYMBOL in x;
    }
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
})(ConstructOrder || (exports.ConstructOrder = ConstructOrder = {}));
/**
 * Represents the construct node in the scope tree.
 */
class ConstructNode {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0LWNvbXBhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnN0cnVjdC1jb21wYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7OztBQUVILDhEQUE4RDtBQUM5RCxpREFBaUQ7QUFDakQseUNBQXlDO0FBRXpDLG1DQUFnQztBQUVoQyxNQUFNLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUNoRixNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQWlDOUQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFNBQVUsU0FBUSxVQUFVLENBQUMsU0FBUztJQUNqRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBTTtRQUM5QixPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLGdCQUFnQixJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBT0QsWUFBWSxLQUFnQixFQUFFLEVBQVU7UUFDdEMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixXQUFXLEVBQUU7Z0JBQ1gsVUFBVSxFQUFFLENBQ1YsQ0FBdUIsRUFDdkIsQ0FBd0IsRUFDeEIsQ0FBUyxFQUNULEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFjLEVBQUUsQ0FBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVc7YUFDdkU7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLGFBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM3RDtRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0QsSUFBSSxD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O1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUE0QixDQUFDO0lBQ3ZELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGNBQWMsQ0FBQyxTQUFpQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7O0FBMVRILHNDQTJUQztBQTFUQzs7R0FFRztBQUNvQixzQkFBUSxHQUFHLEdBQUcsQ0FBQztBQXVWeEMsU0FBUyxNQUFNLENBQUMsRUFBTztJQUNyQixPQUFPO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29uc3RydWN0cyBjb21wYXRpYmlsaXR5IGxheWVyLlxuICpcbiAqIFRoaXMgZmlsZSwgaW4gaXRzIGVudGlyZXR5LCBpcyBleHBlY3RlZCB0byBiZSByZW1vdmVkIGluIHYyLjAuXG4gKi9cblxuaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWFzc2VtYmx5LXNjaGVtYVwiO1xuaW1wb3J0ICogYXMgY3hhcGkgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWN4YXBpXCI7XG5pbXBvcnQgKiBhcyBjb25zdHJ1Y3RzIGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBJRGVwZW5kYWJsZSB9IGZyb20gXCIuL2RlcGVuZGVuY3lcIjtcbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4vdG9rZW5cIjtcblxuY29uc3QgT1JJR0lOQUxfQ09OU1RSVUNUX05PREVfU1lNQk9MID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5Db25zdHJ1Y3ROb2RlXCIpO1xuY29uc3QgQ09OU1RSVUNUX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJyb3MtY2RrLWNvcmUuQ29uc3RydWN0XCIpO1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29uc3RydWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDb25zdHJ1Y3QgZXh0ZW5kcyBjb25zdHJ1Y3RzLklDb25zdHJ1Y3QsIElEZXBlbmRhYmxlIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3QgdHJlZSBub2RlIGZvciB0aGlzIGNvbnN0cnVjdC5cbiAgICovXG4gIHJlYWRvbmx5IG5vZGU6IENvbnN0cnVjdE5vZGU7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBzZXNzaW9uIG9mIHN5bnRoZXNpcy4gUGFzc2VkIGludG8gYENvbnN0cnVjdC5zeW50aGVzaXplKClgIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN5bnRoZXNpc1Nlc3Npb24ge1xuICAvKipcbiAgICogVGhlIG91dHB1dCBkaXJlY3RvcnkgZm9yIHRoaXMgc3ludGhlc2lzIHNlc3Npb24uXG4gICAqL1xuICBvdXRkaXI6IHN0cmluZztcblxuICAvKipcbiAgICogQ2xvdWQgYXNzZW1ibHkgYnVpbGRlci5cbiAgICovXG4gIGFzc2VtYmx5OiBjeGFwaS5DbG91ZEFzc2VtYmx5QnVpbGRlcjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc3RhY2sgc2hvdWxkIGJlIHZhbGlkYXRlZCBhZnRlciBzeW50aGVzaXMgdG8gY2hlY2sgZm9yIGVycm9yIG1ldGFkYXRhXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gZmFsc2VcbiAgICovXG4gIHZhbGlkYXRlT25TeW50aD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgYnVpbGRpbmcgYmxvY2sgb2YgdGhlIGNvbnN0cnVjdCBncmFwaC5cbiAqXG4gKiBBbGwgY29uc3RydWN0cyBiZXNpZGVzIHRoZSByb290IGNvbnN0cnVjdCBtdXN0IGJlIGNyZWF0ZWQgd2l0aGluIHRoZSBzY29wZSBvZlxuICogYW5vdGhlciBjb25zdHJ1Y3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25zdHJ1Y3QgZXh0ZW5kcyBjb25zdHJ1Y3RzLkNvbnN0cnVjdCBpbXBsZW1lbnRzIElDb25zdHJ1Y3Qge1xuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhIENvbnN0cnVjdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc0NvbnN0cnVjdCh4OiBhbnkpOiB4IGlzIENvbnN0cnVjdCB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIHggIT09IG51bGwgJiYgQ09OU1RSVUNUX1NZTUJPTCBpbiB4O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3QgdHJlZSBub2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnN0cnVjdC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBub2RlOiBDb25zdHJ1Y3ROb2RlO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIG5vZGVGYWN0b3J5OiB7XG4gICAgICAgIGNyZWF0ZU5vZGU6IChcbiAgICAgICAgICBoOiBjb25zdHJ1Y3RzLkNvbnN0cnVjdCxcbiAgICAgICAgICBzOiBjb25zdHJ1Y3RzLklDb25zdHJ1Y3QsXG4gICAgICAgICAgaTogc3RyaW5nXG4gICAgICAgICkgPT4gbmV3IENvbnN0cnVjdE5vZGUoaCBhcyBDb25zdHJ1Y3QsIHMgYXMgSUNvbnN0cnVjdCwgaSkuX2FjdHVhbE5vZGUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKFRva2VuLmlzVW5yZXNvbHZlZChpZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVzZSB0b2tlbnMgaW4gY29uc3RydWN0IElEOiAke2lkfWApO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBDT05TVFJVQ1RfU1lNQk9MLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHRoaXMubm9kZSA9IENvbnN0cnVjdE5vZGUuX3Vud3JhcChjb25zdHJ1Y3RzLk5vZGUub2YodGhpcykpO1xuXG4gICAgY29uc3QgZGlzYWJsZVRyYWNlID1cbiAgICAgIHRoaXMubm9kZS50cnlHZXRDb250ZXh0KGN4YXBpLkRJU0FCTEVfTUVUQURBVEFfU1RBQ0tfVFJBQ0UpIHx8XG4gICAgICB0aGlzLm5vZGUudHJ5R2V0Q29udGV4dChcbiAgICAgICAgY29uc3RydWN0cy5Db25zdHJ1Y3RNZXRhZGF0YS5ESVNBQkxFX1NUQUNLX1RSQUNFX0lOX01FVEFEQVRBXG4gICAgICApIHx8XG4gICAgICBwcm9jZXNzLmVudi5DREtfRElTQUJMRV9TVEFDS19UUkFDRTtcblxuICAgIGlmIChkaXNhYmxlVHJhY2UpIHtcbiAgICAgIHRoaXMubm9kZS5zZXRDb250ZXh0KGN4YXBpLkRJU0FCTEVfTUVUQURBVEFfU1RBQ0tfVFJBQ0UsIHRydWUpO1xuICAgICAgdGhpcy5ub2RlLnNldENvbnRleHQoXG4gICAgICAgIGNvbnN0cnVjdHMuQ29uc3RydWN0TWV0YWRhdGEuRElTQUJMRV9TVEFDS19UUkFDRV9JTl9NRVRBREFUQSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIHByb2Nlc3MuZW52LkNES19ESVNBQkxFX1NUQUNLX1RSQUNFID0gXCIxXCI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBjdXJyZW50IGNvbnN0cnVjdC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIGltcGxlbWVudGVkIGJ5IGRlcml2ZWQgY29uc3RydWN0cyBpbiBvcmRlciB0byBwZXJmb3JtXG4gICAqIHZhbGlkYXRpb24gbG9naWMuIEl0IGlzIGNhbGxlZCBvbiBhbGwgY29uc3RydWN0cyBiZWZvcmUgc3ludGhlc2lzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzLCBvciBhbiBlbXB0eSBhcnJheSBpZiB0aGUgY29uc3RydWN0IGlzIHZhbGlkLlxuICAgKi9cbiAgcHJvdGVjdGVkIG9uVmFsaWRhdGUoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBmaW5hbCBtb2RpZmljYXRpb25zIGJlZm9yZSBzeW50aGVzaXNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIGltcGxlbWVudGVkIGJ5IGRlcml2ZWQgY29uc3RydWN0cyBpbiBvcmRlciB0byBwZXJmb3JtXG4gICAqIGZpbmFsIGNoYW5nZXMgYmVmb3JlIHN5bnRoZXNpcy4gcHJlcGFyZSgpIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNoaWxkXG4gICAqIGNvbnN0cnVjdHMgaGF2ZSBiZWVuIHByZXBhcmVkLlxuICAgKlxuICAgKiBUaGlzIGlzIGFuIGFkdmFuY2VkIGZyYW1ld29yayBmZWF0dXJlLiBPbmx5IHVzZSB0aGlzIGlmIHlvdVxuICAgKiB1bmRlcnN0YW5kIHRoZSBpbXBsaWNhdGlvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgb25QcmVwYXJlKCk6IHZvaWQge1xuICAgIHRoaXMucHJlcGFyZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGlzIGNvbnN0cnVjdCB0byBlbWl0IGFydGlmYWN0cyBpbnRvIHRoZSBjbG91ZCBhc3NlbWJseSBkdXJpbmcgc3ludGhlc2lzLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c3VhbGx5IGltcGxlbWVudGVkIGJ5IGZyYW1ld29yay1sZXZlbCBjb25zdHJ1Y3RzIHN1Y2ggYXMgYFN0YWNrYCBhbmQgYEFzc2V0YFxuICAgKiBhcyB0aGV5IHBhcnRpY2lwYXRlIGluIHN5bnRoZXNpemluZyB0aGUgY2xvdWQgYXNzZW1ibHkuXG4gICAqXG4gICAqIEBwYXJhbSBzZXNzaW9uIFRoZSBzeW50aGVzaXMgc2Vzc2lvbi5cbiAgICovXG4gIHByb3RlY3RlZCBvblN5bnRoZXNpemUoc2Vzc2lvbjogY29uc3RydWN0cy5JU3ludGhlc2lzU2Vzc2lvbik6IHZvaWQge1xuICAgIHRoaXMuc3ludGhlc2l6ZSh7XG4gICAgICBvdXRkaXI6IHNlc3Npb24ub3V0ZGlyLFxuICAgICAgYXNzZW1ibHk6IHNlc3Npb24uYXNzZW1ibHkhLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBjdXJyZW50IGNvbnN0cnVjdC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIGltcGxlbWVudGVkIGJ5IGRlcml2ZWQgY29uc3RydWN0cyBpbiBvcmRlciB0byBwZXJmb3JtXG4gICAqIHZhbGlkYXRpb24gbG9naWMuIEl0IGlzIGNhbGxlZCBvbiBhbGwgY29uc3RydWN0cyBiZWZvcmUgc3ludGhlc2lzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzLCBvciBhbiBlbXB0eSBhcnJheSBpZiB0aGUgY29uc3RydWN0IGlzIHZhbGlkLlxuICAgKi9cbiAgcHJvdGVjdGVkIHZhbGlkYXRlKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBmaW5hbCBtb2RpZmljYXRpb25zIGJlZm9yZSBzeW50aGVzaXNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIGltcGxlbWVudGVkIGJ5IGRlcml2ZWQgY29uc3RydWN0cyBpbiBvcmRlciB0byBwZXJmb3JtXG4gICAqIGZpbmFsIGNoYW5nZXMgYmVmb3JlIHN5bnRoZXNpcy4gcHJlcGFyZSgpIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNoaWxkXG4gICAqIGNvbnN0cnVjdHMgaGF2ZSBiZWVuIHByZXBhcmVkLlxuICAgKlxuICAgKiBUaGlzIGlzIGFuIGFkdmFuY2VkIGZyYW1ld29yayBmZWF0dXJlLiBPbmx5IHVzZSB0aGlzIGlmIHlvdVxuICAgKiB1bmRlcnN0YW5kIHRoZSBpbXBsaWNhdGlvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgcHJlcGFyZSgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHRoaXMgY29uc3RydWN0IHRvIGVtaXQgYXJ0aWZhY3RzIGludG8gdGhlIGNsb3VkIGFzc2VtYmx5IGR1cmluZyBzeW50aGVzaXMuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzdWFsbHkgaW1wbGVtZW50ZWQgYnkgZnJhbWV3b3JrLWxldmVsIGNvbnN0cnVjdHMgc3VjaCBhcyBgU3RhY2tgIGFuZCBgQXNzZXRgXG4gICAqIGFzIHRoZXkgcGFydGljaXBhdGUgaW4gc3ludGhlc2l6aW5nIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAgICpcbiAgICogQHBhcmFtIHNlc3Npb24gVGhlIHN5bnRoZXNpcyBzZXNzaW9uLlxuICAgKi9cbiAgcHVibGljIHN5bnRoZXNpemUoc2Vzc2lvbjogSVN5bnRoZXNpc1Nlc3Npb24pOiB2b2lkIHtcbiAgICBpZ25vcmUoc2Vzc2lvbik7XG4gIH1cbn1cblxuLyoqXG4gKiBJbiB3aGF0IG9yZGVyIHRvIHJldHVybiBjb25zdHJ1Y3RzXG4gKi9cbmV4cG9ydCBlbnVtIENvbnN0cnVjdE9yZGVyIHtcbiAgLyoqXG4gICAqIERlcHRoLWZpcnN0LCBwcmUtb3JkZXJcbiAgICovXG4gIFBSRU9SREVSLFxuXG4gIC8qKlxuICAgKiBEZXB0aC1maXJzdCwgcG9zdC1vcmRlciAobGVhZiBub2RlcyBmaXJzdClcbiAgICovXG4gIFBPU1RPUkRFUixcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBzeW50aGVzaXMuXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIGBhcHAuc3ludGgoKWAgb3IgYHN0YWdlLnN5bnRoKClgIGluc3RlYWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTeW50aGVzaXNPcHRpb25zIGV4dGVuZHMgY3hhcGkuQXNzZW1ibHlCdWlsZE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIG91dHB1dCBkaXJlY3RvcnkgaW50byB3aGljaCB0byBzeW50aGVzaXplIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAgICogQGRlZmF1bHQgLSBjcmVhdGVzIGEgdGVtcG9yYXJ5IGRpcmVjdG9yeVxuICAgKi9cbiAgcmVhZG9ubHkgb3V0ZGlyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHN5bnRoZXNpcyBzaG91bGQgc2tpcCB0aGUgdmFsaWRhdGlvbiBwaGFzZS5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHJlYWRvbmx5IHNraXBWYWxpZGF0aW9uPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjb25zdHJ1Y3Qgbm9kZSBpbiB0aGUgc2NvcGUgdHJlZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnN0cnVjdE5vZGUge1xuICAvKipcbiAgICogU2VwYXJhdG9yIHVzZWQgdG8gZGVsaW1pdCBjb25zdHJ1Y3QgcGF0aCBjb21wb25lbnRzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBQQVRIX1NFUCA9IFwiL1wiO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3cmFwcGluZyBgcm9zLWNkay1jb3JlLkNvbnN0cnVjdE5vZGVgIGluc3RhbmNlIGZyb20gYSBgY29uc3RydWN0cy5Db25zdHJ1Y3ROb2RlYC5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIF91bndyYXAoYzogY29uc3RydWN0cy5Ob2RlKTogQ29uc3RydWN0Tm9kZSB7XG4gICAgY29uc3QgeCA9IChjIGFzIGFueSlbT1JJR0lOQUxfQ09OU1RSVUNUX05PREVfU1lNQk9MXTtcbiAgICBpZiAoIXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgQ29uc3RydWN0Tm9kZSB0eXBlXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB4O1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpemVzIGEgQ2xvdWRBc3NlbWJseSBmcm9tIGEgY29uc3RydWN0IHRyZWUuXG4gICAqIEBwYXJhbSBub2RlIFRoZSByb290IG9mIHRoZSBjb25zdHJ1Y3QgdHJlZS5cbiAgICogQHBhcmFtIG9wdGlvbnMgU3ludGhlc2lzIG9wdGlvbnMuXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgYXBwLnN5bnRoKClgIG9yIGBzdGFnZS5zeW50aCgpYCBpbnN0ZWFkXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN5bnRoKFxuICAgIG5vZGU6IENvbnN0cnVjdE5vZGUsXG4gICAgb3B0aW9uczogU3ludGhlc2lzT3B0aW9ucyA9IHt9XG4gICk6IGN4YXBpLkNsb3VkQXNzZW1ibHkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG4gICAgY29uc3QgYTogdHlwZW9mIGltcG9ydChcIi4vcHJpdmF0ZS9zeW50aGVzaXNcIikgPSByZXF1aXJlKFwiLi9wcml2YXRlL3N5bnRoZXNpc1wiKTtcbiAgICByZXR1cm4gYS5zeW50aGVzaXplKG5vZGUucm9vdCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBcInByZXBhcmVcIiBvbiBhbGwgY29uc3RydWN0cyAoZGVwdGgtZmlyc3QsIHBvc3Qtb3JkZXIpIGluIHRoZSB0cmVlIHVuZGVyIGBub2RlYC5cbiAgICogQHBhcmFtIG5vZGUgVGhlIHJvb3Qgbm9kZVxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGFwcC5zeW50aCgpYCBpbnN0ZWFkXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHByZXBhcmUobm9kZTogQ29uc3RydWN0Tm9kZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG4gICAgLy8gY29uc3QgcDogdHlwZW9mIGltcG9ydCgnLi9wcml2YXRlL3ByZXBhcmUtYXBwJykgPSByZXF1aXJlKCcuL3ByaXZhdGUvcHJlcGFyZS1hcHAnKTtcbiAgICBjb25zdCBwOiB0eXBlb2YgaW1wb3J0KFwiLi9wcml2YXRlL3ByZXBhcmUtYXBwXCIpID0gcmVxdWlyZShcIi4vcHJpdmF0ZS9wcmVwYXJlLWFwcFwiKTtcbiAgICBwLnByZXBhcmVBcHAobm9kZS5yb290KTsgLy8gcmVzb2x2ZSBjcm9zcyByZWZzIGFuZCBuZXN0ZWQgc3RhY2sgYXNzZXRzLlxuICAgIHJldHVybiBub2RlLl9hY3R1YWxOb2RlLnByZXBhcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIFwidmFsaWRhdGVcIiBvbiBhbGwgY29uc3RydWN0cyBpbiB0aGUgdHJlZSAoZGVwdGgtZmlyc3QsIHByZS1vcmRlcikgYW5kIHJldHVybnNcbiAgICogdGhlIGxpc3Qgb2YgYWxsIGVycm9ycy4gQW4gZW1wdHkgbGlzdCBpbmRpY2F0ZXMgdGhhdCB0aGVyZSBhcmUgbm8gZXJyb3JzLlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZSBUaGUgcm9vdCBub2RlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHZhbGlkYXRlKG5vZGU6IENvbnN0cnVjdE5vZGUpOiBWYWxpZGF0aW9uRXJyb3JbXSB7XG4gICAgcmV0dXJuIG5vZGUuX2FjdHVhbE5vZGVcbiAgICAgIC52YWxpZGF0ZSgpXG4gICAgICAubWFwKChlKSA9PiAoeyBzb3VyY2U6IGUuc291cmNlIGFzIENvbnN0cnVjdCwgbWVzc2FnZTogZS5tZXNzYWdlIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBfYWN0dWFsTm9kZTogY29uc3RydWN0cy5Ob2RlO1xuXG4gIGNvbnN0cnVjdG9yKGhvc3Q6IENvbnN0cnVjdCwgc2NvcGU6IElDb25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3R1YWxOb2RlID0gbmV3IGNvbnN0cnVjdHMuTm9kZShob3N0LCBzY29wZSwgaWQpO1xuXG4gICAgLy8gc3RvcmUgYSBiYWNrIHJlZmVyZW5jZSBvbiBfYWN0dWFsTm9kZSBzbyB3ZSBjYW4gb3VyIENvbnN0cnVjdE5vZGUgZnJvbSBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLl9hY3R1YWxOb2RlLCBPUklHSU5BTF9DT05TVFJVQ1RfTk9ERV9TWU1CT0wsIHtcbiAgICAgIHZhbHVlOiB0aGlzLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjb3BlIGluIHdoaWNoIHRoaXMgY29uc3RydWN0IGlzIGRlZmluZWQuXG4gICAqXG4gICAqIFRoZSB2YWx1ZSBpcyBgdW5kZWZpbmVkYCBhdCB0aGUgcm9vdCBvZiB0aGUgY29uc3RydWN0IHNjb3BlIHRyZWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNjb3BlKCk6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLnNjb3BlIGFzIElDb25zdHJ1Y3Q7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoaXMgY29uc3RydWN0IHdpdGhpbiB0aGUgY3VycmVudCBzY29wZS5cbiAgICpcbiAgICogVGhpcyBpcyBhIGEgc2NvcGUtdW5pcXVlIGlkLiBUbyBvYnRhaW4gYW4gYXBwLXVuaXF1ZSBpZCBmb3IgdGhpcyBjb25zdHJ1Y3QsIHVzZSBgdW5pcXVlSWRgLlxuICAgKi9cbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZnVsbCwgYWJzb2x1dGUgcGF0aCBvZiB0aGlzIGNvbnN0cnVjdCBpbiB0aGUgdHJlZS5cbiAgICpcbiAgICogQ29tcG9uZW50cyBhcmUgc2VwYXJhdGVkIGJ5ICcvJy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLnBhdGg7XG4gIH1cblxuICAvKipcbiAgICogQSB0cmVlLWdsb2JhbCB1bmlxdWUgYWxwaGFudW1lcmljIGlkZW50aWZpZXIgZm9yIHRoaXMgY29uc3RydWN0LlxuICAgKiBJbmNsdWRlcyBhbGwgY29tcG9uZW50cyBvZiB0aGUgdHJlZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgdW5pcXVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS51bmlxdWVJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBkaXJlY3QgY2hpbGQgYnkgaWQsIG9yIHVuZGVmaW5lZFxuICAgKlxuICAgKiBAcGFyYW0gaWQgSWRlbnRpZmllciBvZiBkaXJlY3QgY2hpbGRcbiAgICogQHJldHVybnMgdGhlIGNoaWxkIGlmIGZvdW5kLCBvciB1bmRlZmluZWRcbiAgICovXG4gIHB1YmxpYyB0cnlGaW5kQ2hpbGQoaWQ6IHN0cmluZyk6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLnRyeUZpbmRDaGlsZChpZCkgYXMgSUNvbnN0cnVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBkaXJlY3QgY2hpbGQgYnkgaWRcbiAgICpcbiAgICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBjaGlsZCBpcyBub3QgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBpZCBJZGVudGlmaWVyIG9mIGRpcmVjdCBjaGlsZFxuICAgKiBAcmV0dXJucyBDaGlsZCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICovXG4gIHB1YmxpYyBmaW5kQ2hpbGQoaWQ6IHN0cmluZyk6IElDb25zdHJ1Y3Qge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLmZpbmRDaGlsZChpZCkgYXMgSUNvbnN0cnVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjaGlsZCBjb25zdHJ1Y3QgdGhhdCBoYXMgdGhlIGlkIGBEZWZhdWx0YCBvciBgUmVzb3VyY2VcImAuXG4gICAqIFRoaXMgaXMgdXN1YWxseSB0aGUgY29uc3RydWN0IHRoYXQgcHJvdmlkZXMgdGhlIGJ1bGsgb2YgdGhlIHVuZGVybHlpbmcgZnVuY3Rpb25hbGl0eS5cbiAgICogVXNlZnVsIGZvciBtb2RpZmljYXRpb25zIG9mIHRoZSB1bmRlcmx5aW5nIGNvbnN0cnVjdCB0aGF0IGFyZSBub3QgYXZhaWxhYmxlIGF0IHRoZSBoaWdoZXIgbGV2ZWxzLlxuICAgKlxuICAgKiBAdGhyb3dzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgY2hpbGRcbiAgICogQHJldHVybnMgYSBjb25zdHJ1Y3Qgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vIGRlZmF1bHQgY2hpbGRcbiAgICovXG4gIHB1YmxpYyBnZXQgZGVmYXVsdENoaWxkKCk6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLmRlZmF1bHRDaGlsZCBhcyBJQ29uc3RydWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0Q2hpbGQgcHJvcGVydHkuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiB0aGUgY2FzZXMgd2hlcmUgdGhlIGNvcnJlY3RcbiAgICogZGVmYXVsdCBjaGlsZCBpcyBub3QgbmFtZWQgJ1Jlc291cmNlJyBvciAnRGVmYXVsdCcgYXMgaXRcbiAgICogc2hvdWxkIGJlLlxuICAgKlxuICAgKiBJZiB5b3Ugc2V0IHRoaXMgdG8gdW5kZWZpbmVkLCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiBmaW5kaW5nXG4gICAqIHRoZSBjaGlsZCBuYW1lZCAnUmVzb3VyY2UnIG9yICdEZWZhdWx0JyB3aWxsIGJlIHVzZWQuXG4gICAqL1xuICBwdWJsaWMgc2V0IGRlZmF1bHRDaGlsZCh2YWx1ZTogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FjdHVhbE5vZGUuZGVmYXVsdENoaWxkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQWxsIGRpcmVjdCBjaGlsZHJlbiBvZiB0aGlzIGNvbnN0cnVjdC5cbiAgICovXG4gIHB1YmxpYyBnZXQgY2hpbGRyZW4oKTogSUNvbnN0cnVjdFtdIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5jaGlsZHJlbiBhcyBJQ29uc3RydWN0W107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoaXMgY29uc3RydWN0IGFuZCBhbGwgb2YgaXRzIGNoaWxkcmVuIGluIHRoZSBnaXZlbiBvcmRlclxuICAgKi9cbiAgcHVibGljIGZpbmRBbGwoXG4gICAgb3JkZXI6IENvbnN0cnVjdE9yZGVyID0gQ29uc3RydWN0T3JkZXIuUFJFT1JERVJcbiAgKTogSUNvbnN0cnVjdFtdIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS5maW5kQWxsKG9yZGVyKSBhcyBJQ29uc3RydWN0W107XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBzZXQgY29udGV4dHVhbCB2YWx1ZXMuXG4gICAqIENvbnRleHQgbXVzdCBiZSBzZXQgYmVmb3JlIGFueSBjaGlsZHJlbiBhcmUgYWRkZWQsIHNpbmNlIGNoaWxkcmVuIG1heSBjb25zdWx0IGNvbnRleHQgaW5mbyBkdXJpbmcgY29uc3RydWN0aW9uLlxuICAgKiBJZiB0aGUga2V5IGFscmVhZHkgZXhpc3RzLCBpdCB3aWxsIGJlIG92ZXJyaWRkZW4uXG4gICAqIEBwYXJhbSBrZXkgVGhlIGNvbnRleHQga2V5XG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgY29udGV4dCB2YWx1ZVxuICAgKi9cbiAgcHVibGljIHNldENvbnRleHQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoVG9rZW4uaXNVbnJlc29sdmVkKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29udGV4dCBrZXk6IGNvbnRleHQga2V5cyBjYW4ndCBpbmNsdWRlIHRva2Vuc1wiKTtcbiAgICB9XG4gICAgdGhpcy5fYWN0dWFsTm9kZS5zZXRDb250ZXh0KGtleSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhIHZhbHVlIGZyb20gdHJlZSBjb250ZXh0LlxuICAgKlxuICAgKiBDb250ZXh0IGlzIHVzdWFsbHkgaW5pdGlhbGl6ZWQgYXQgdGhlIHJvb3QsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBhbnkgcG9pbnQgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgVGhlIGNvbnRleHQga2V5XG4gICAqIEByZXR1cm5zIFRoZSBjb250ZXh0IHZhbHVlIG9yIGB1bmRlZmluZWRgIGlmIHRoZXJlIGlzIG5vIGNvbnRleHQgdmFsdWUgZm9yIHRoaWUga2V5LlxuICAgKi9cbiAgcHVibGljIHRyeUdldENvbnRleHQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb250ZXh0IGtleTogY29udGV4dCBrZXlzIGNhbid0IGluY2x1ZGUgdG9rZW5zXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsTm9kZS50cnlHZXRDb250ZXh0KGtleSk7XG4gIH1cblxuICAvKipcbiAgICogQW4gaW1tdXRhYmxlIGFycmF5IG9mIG1ldGFkYXRhIG9iamVjdHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29uc3RydWN0LlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkLCBmb3IgZXhhbXBsZSwgdG8gaW1wbGVtZW50IHN1cHBvcnQgZm9yIGRlcHJlY2F0aW9uIG5vdGljZXMsIHNvdXJjZSBtYXBwaW5nLCBldGMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG1ldGFkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLm1ldGFkYXRhIGFzIGN4YXBpLk1ldGFkYXRhRW50cnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWV0YWRhdGEgZW50cnkgdG8gdGhpcyBjb25zdHJ1Y3QuXG4gICAqIEVudHJpZXMgYXJlIGFyYml0cmFyeSB2YWx1ZXMgYW5kIHdpbGwgYWxzbyBpbmNsdWRlIGEgc3RhY2sgdHJhY2UgdG8gYWxsb3cgdHJhY2luZyBiYWNrIHRvXG4gICAqIHRoZSBjb2RlIGxvY2F0aW9uIGZvciB3aGVuIHRoZSBlbnRyeSB3YXMgYWRkZWQuIEl0IGNhbiBiZSB1c2VkLCBmb3IgZXhhbXBsZSwgdG8gaW5jbHVkZSBzb3VyY2VcbiAgICogbWFwcGluZyBpbiB0ZW1wbGF0ZXMgdG8gaW1wcm92ZSBkaWFnbm9zdGljcy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgYSBzdHJpbmcgZGVub3RpbmcgdGhlIHR5cGUgb2YgbWV0YWRhdGFcbiAgICogQHBhcmFtIGRhdGEgdGhlIHZhbHVlIG9mIHRoZSBtZXRhZGF0YSAoY2FuIGJlIGEgVG9rZW4pLiBJZiBudWxsL3VuZGVmaW5lZCwgbWV0YWRhdGEgd2lsbCBub3QgYmUgYWRkZWQuXG4gICAqIEBwYXJhbSBmcm9tRnVuY3Rpb24gYSBmdW5jdGlvbiB1bmRlciB3aGljaCB0byByZXN0cmljdCB0aGUgbWV0YWRhdGEgZW50cnkncyBzdGFjayB0cmFjZSAoZGVmYXVsdHMgdG8gdGhpcy5hZGRNZXRhZGF0YSlcbiAgICovXG4gIHB1YmxpYyBhZGRNZXRhZGF0YSh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSwgZnJvbUZ1bmN0aW9uPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fYWN0dWFsTm9kZS5hZGRNZXRhZGF0YSh0eXBlLCBkYXRhLCBmcm9tRnVuY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB7IFwiaW5mb1wiOiA8bWVzc2FnZT4gfSBtZXRhZGF0YSBlbnRyeSB0byB0aGlzIGNvbnN0cnVjdC5cbiAgICogVGhlIHRvb2xraXQgd2lsbCBkaXNwbGF5IHRoZSBpbmZvIG1lc3NhZ2Ugd2hlbiBhcHBzIGFyZSBzeW50aGVzaXplZC5cbiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGluZm8gbWVzc2FnZS5cbiAgICovXG4gIHB1YmxpYyBhZGRJbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2FjdHVhbE5vZGUuYWRkTWV0YWRhdGEoXG4gICAgICBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLklORk8sXG4gICAgICBtZXNzYWdlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgeyBcIndhcm5pbmdcIjogPG1lc3NhZ2U+IH0gbWV0YWRhdGEgZW50cnkgdG8gdGhpcyBjb25zdHJ1Y3QuXG4gICAqIFRoZSB0b29sa2l0IHdpbGwgZGlzcGxheSB0aGUgd2FybmluZyB3aGVuIGFuIGFwcCBpcyBzeW50aGVzaXplZCwgb3IgZmFpbFxuICAgKiBpZiBydW4gaW4gLS1zdHJpY3QgbW9kZS5cbiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAgICovXG4gIHB1YmxpYyBhZGRXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2FjdHVhbE5vZGUuYWRkTWV0YWRhdGEoXG4gICAgICBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLldBUk4sXG4gICAgICBtZXNzYWdlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIHsgXCJlcnJvclwiOiA8bWVzc2FnZT4gfSBtZXRhZGF0YSBlbnRyeSB0byB0aGlzIGNvbnN0cnVjdC5cbiAgICogVGhlIHRvb2xraXQgd2lsbCBmYWlsIHN5bnRoZXNpcyB3aGVuIGVycm9ycyBhcmUgcmVwb3J0ZWQuXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICAgKi9cbiAgcHVibGljIGFkZEVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuX2FjdHVhbE5vZGUuYWRkTWV0YWRhdGEoXG4gICAgICBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLkVSUk9SLFxuICAgICAgbWVzc2FnZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWxsIHBhcmVudCBzY29wZXMgb2YgdGhpcyBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIEByZXR1cm5zIGEgbGlzdCBvZiBwYXJlbnQgc2NvcGVzLiBUaGUgbGFzdCBlbGVtZW50IGluIHRoZSBsaXN0IHdpbGwgYWx3YXlzXG4gICAqIGJlIHRoZSBjdXJyZW50IGNvbnN0cnVjdCBhbmQgdGhlIGZpcnN0IGVsZW1lbnQgd2lsbCBiZSB0aGUgcm9vdCBvZiB0aGVcbiAgICogdHJlZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2NvcGVzKCk6IElDb25zdHJ1Y3RbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdHVhbE5vZGUuc2NvcGVzIGFzIElDb25zdHJ1Y3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBUaGUgcm9vdCBvZiB0aGUgY29uc3RydWN0IHRyZWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHJvb3QoKTogSUNvbnN0cnVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdHVhbE5vZGUucm9vdCBhcyBJQ29uc3RydWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGNvbnN0cnVjdCBvciB0aGUgc2NvcGVzIGluIHdoaWNoIGl0IGlzIGRlZmluZWQgYXJlXG4gICAqIGxvY2tlZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgbG9ja2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLmxvY2tlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gb3JkZXJpbmcgZGVwZW5kZW5jeSBvbiBhbm90aGVyIENvbnN0cnVjdC5cbiAgICpcbiAgICogQWxsIGNvbnN0cnVjdHMgaW4gdGhlIGRlcGVuZGVuY3kncyBzY29wZSB3aWxsIGJlIGRlcGxveWVkIGJlZm9yZSBhbnlcbiAgICogY29uc3RydWN0IGluIHRoaXMgY29uc3RydWN0J3Mgc2NvcGUuXG4gICAqL1xuICBwdWJsaWMgYWRkRGVwZW5kZW5jeSguLi5kZXBlbmRlbmNpZXM6IElEZXBlbmRhYmxlW10pIHtcbiAgICB0aGlzLl9hY3R1YWxOb2RlLmFkZERlcGVuZGVuY3koLi4uZGVwZW5kZW5jaWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYWxsIGRlcGVuZGVuY2llcyByZWdpc3RlcmVkIG9uIHRoaXMgbm9kZSBvciBhbnkgb2YgaXRzIGNoaWxkcmVuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlcGVuZGVuY2llcygpOiBEZXBlbmRlbmN5W10ge1xuICAgIHJldHVybiB0aGlzLl9hY3R1YWxOb2RlLmRlcGVuZGVuY2llcyBhcyBEZXBlbmRlbmN5W107XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjaGlsZCB3aXRoIHRoZSBnaXZlbiBuYW1lLCBpZiBwcmVzZW50LlxuICAgKlxuICAgKiBAcmV0dXJucyBXaGV0aGVyIGEgY2hpbGQgd2l0aCB0aGUgZ2l2ZW4gbmFtZSB3YXMgZGVsZXRlZC5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHRyeVJlbW92ZUNoaWxkKGNoaWxkTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdHVhbE5vZGUudHJ5UmVtb3ZlQ2hpbGQoY2hpbGROYW1lKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGVycm9yIHJldHVybmVkIGR1cmluZyB0aGUgdmFsaWRhdGlvbiBwaGFzZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uRXJyb3Ige1xuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdCB3aGljaCBlbWl0dGVkIHRoZSBlcnJvci5cbiAgICovXG4gIHJlYWRvbmx5IHNvdXJjZTogQ29uc3RydWN0O1xuXG4gIC8qKlxuICAgKiBUaGUgZXJyb3IgbWVzc2FnZS5cbiAgICovXG4gIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIHNpbmdsZSBkZXBlbmRlbmN5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVwZW5kZW5jeSB7XG4gIC8qKlxuICAgKiBTb3VyY2UgdGhlIGRlcGVuZGVuY3lcbiAgICovXG4gIHJlYWRvbmx5IHNvdXJjZTogSUNvbnN0cnVjdDtcblxuICAvKipcbiAgICogVGFyZ2V0IG9mIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWFkb25seSB0YXJnZXQ6IElDb25zdHJ1Y3Q7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZShfeDogYW55KSB7XG4gIHJldHVybjtcbn1cbiJdfQ==