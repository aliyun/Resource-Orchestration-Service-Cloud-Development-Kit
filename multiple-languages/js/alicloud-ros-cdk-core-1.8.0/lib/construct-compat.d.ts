/**
 * Constructs compatibility layer.
 *
 * This file, in its entirety, is expected to be removed in v2.0.
 */
import * as cxapi from "@alicloud/ros-cdk-cxapi";
import * as constructs from "constructs";
import { IDependable } from "./dependency";
/**
 * Represents a construct.
 */
export interface IConstruct extends constructs.IConstruct, IDependable {
    /**
     * The construct tree node for this construct.
     */
    readonly node: ConstructNode;
}
/**
 * Represents a single session of synthesis. Passed into `Construct.synthesize()` methods.
 */
export interface ISynthesisSession {
    /**
     * The output directory for this synthesis session.
     */
    outdir: string;
    /**
     * Cloud assembly builder.
     */
    assembly: cxapi.CloudAssemblyBuilder;
    /**
     * Whether the stack should be validated after synthesis to check for error metadata
     *
     * @default - false
     */
    validateOnSynth?: boolean;
}
/**
 * Represents the building block of the construct graph.
 *
 * All constructs besides the root construct must be created within the scope of
 * another construct.
 */
export declare class Construct extends constructs.Construct implements IConstruct {
    /**
     * Return whether the given object is a Construct
     */
    static isConstruct(x: any): x is Construct;
    /**
     * The construct tree node associated with this construct.
     */
    readonly node: ConstructNode;
    constructor(scope: Construct, id: string);
    /**
     * Validate the current construct.
     *
     * This method can be implemented by derived constructs in order to perform
     * validation logic. It is called on all constructs before synthesis.
     *
     * @returns An array of validation error messages, or an empty array if the construct is valid.
     */
    protected onValidate(): string[];
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
    protected onPrepare(): void;
    /**
     * Allows this construct to emit artifacts into the cloud assembly during synthesis.
     *
     * This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
     * as they participate in synthesizing the cloud assembly.
     *
     * @param session The synthesis session.
     */
    protected onSynthesize(session: constructs.ISynthesisSession): void;
    /**
     * Validate the current construct.
     *
     * This method can be implemented by derived constructs in order to perform
     * validation logic. It is called on all constructs before synthesis.
     *
     * @returns An array of validation error messages, or an empty array if the construct is valid.
     */
    protected validate(): string[];
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
    protected prepare(): void;
    /**
     * Allows this construct to emit artifacts into the cloud assembly during synthesis.
     *
     * This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
     * as they participate in synthesizing the cloud assembly.
     *
     * @param session The synthesis session.
     */
    synthesize(session: ISynthesisSession): void;
}
/**
 * In what order to return constructs
 */
export declare enum ConstructOrder {
    /**
     * Depth-first, pre-order
     */
    PREORDER = 0,
    /**
     * Depth-first, post-order (leaf nodes first)
     */
    POSTORDER = 1
}
/**
 * Options for synthesis.
 *
 * @deprecated use `app.synth()` or `stage.synth()` instead
 */
export interface SynthesisOptions extends cxapi.AssemblyBuildOptions {
    /**
     * The output directory into which to synthesize the cloud assembly.
     * @default - creates a temporary directory
     */
    readonly outdir?: string;
    /**
     * Whether synthesis should skip the validation phase.
     * @default false
     */
    readonly skipValidation?: boolean;
}
/**
 * Represents the construct node in the scope tree.
 */
export declare class ConstructNode {
    /**
     * Separator used to delimit construct path components.
     */
    static readonly PATH_SEP = "/";
    /**
     * Returns the wrapping `ros-cdk-core.ConstructNode` instance from a `constructs.ConstructNode`.
     *
     * @internal
     */
    static _unwrap(c: constructs.Node): ConstructNode;
    /**
     * Synthesizes a CloudAssembly from a construct tree.
     * @param node The root of the construct tree.
     * @param options Synthesis options.
     * @deprecated Use `app.synth()` or `stage.synth()` instead
     */
    static synth(node: ConstructNode, options?: SynthesisOptions): cxapi.CloudAssembly;
    /**
     * Invokes "prepare" on all constructs (depth-first, post-order) in the tree under `node`.
     * @param node The root node
     * @deprecated Use `app.synth()` instead
     */
    static prepare(node: ConstructNode): void;
    /**
     * Invokes "validate" on all constructs in the tree (depth-first, pre-order) and returns
     * the list of all errors. An empty list indicates that there are no errors.
     *
     * @param node The root node
     */
    static validate(node: ConstructNode): ValidationError[];
    /**
     * @internal
     */
    readonly _actualNode: constructs.Node;
    constructor(host: Construct, scope: IConstruct, id: string);
    /**
     * Returns the scope in which this construct is defined.
     *
     * The value is `undefined` at the root of the construct scope tree.
     */
    get scope(): IConstruct | undefined;
    /**
     * The id of this construct within the current scope.
     *
     * This is a a scope-unique id. To obtain an app-unique id for this construct, use `uniqueId`.
     */
    get id(): string;
    /**
     * The full, absolute path of this construct in the tree.
     *
     * Components are separated by '/'.
     */
    get path(): string;
    /**
     * A tree-global unique alphanumeric identifier for this construct.
     * Includes all components of the tree.
     */
    get uniqueId(): string;
    /**
     * Return a direct child by id, or undefined
     *
     * @param id Identifier of direct child
     * @returns the child if found, or undefined
     */
    tryFindChild(id: string): IConstruct | undefined;
    /**
     * Return a direct child by id
     *
     * Throws an error if the child is not found.
     *
     * @param id Identifier of direct child
     * @returns Child with the given id.
     */
    findChild(id: string): IConstruct;
    /**
     * Returns the child construct that has the id `Default` or `Resource"`.
     * This is usually the construct that provides the bulk of the underlying functionality.
     * Useful for modifications of the underlying construct that are not available at the higher levels.
     *
     * @throws if there is more than one child
     * @returns a construct or undefined if there is no default child
     */
    get defaultChild(): IConstruct | undefined;
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
    set defaultChild(value: IConstruct | undefined);
    /**
     * All direct children of this construct.
     */
    get children(): IConstruct[];
    /**
     * Return this construct and all of its children in the given order
     */
    findAll(order?: ConstructOrder): IConstruct[];
    /**
     * This can be used to set contextual values.
     * Context must be set before any children are added, since children may consult context info during construction.
     * If the key already exists, it will be overridden.
     * @param key The context key
     * @param value The context value
     */
    setContext(key: string, value: any): void;
    /**
     * Retrieves a value from tree context.
     *
     * Context is usually initialized at the root, but can be overridden at any point in the tree.
     *
     * @param key The context key
     * @returns The context value or `undefined` if there is no context value for thie key.
     */
    tryGetContext(key: string): any;
    /**
     * An immutable array of metadata objects associated with this construct.
     * This can be used, for example, to implement support for deprecation notices, source mapping, etc.
     */
    get metadata(): cxapi.MetadataEntry[];
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
    addMetadata(type: string, data: any, fromFunction?: any): void;
    /**
     * Adds a { "info": <message> } metadata entry to this construct.
     * The toolkit will display the info message when apps are synthesized.
     * @param message The info message.
     */
    addInfo(message: string): void;
    /**
     * Adds a { "warning": <message> } metadata entry to this construct.
     * The toolkit will display the warning when an app is synthesized, or fail
     * if run in --strict mode.
     * @param message The warning message.
     */
    addWarning(message: string): void;
    /**
     * Adds an { "error": <message> } metadata entry to this construct.
     * The toolkit will fail synthesis when errors are reported.
     * @param message The error message.
     */
    addError(message: string): void;
    /**
     * All parent scopes of this construct.
     *
     * @returns a list of parent scopes. The last element in the list will always
     * be the current construct and the first element will be the root of the
     * tree.
     */
    get scopes(): IConstruct[];
    /**
     * @returns The root of the construct tree.
     */
    get root(): IConstruct;
    /**
     * Returns true if this construct or the scopes in which it is defined are
     * locked.
     */
    get locked(): boolean;
    /**
     * Add an ordering dependency on another Construct.
     *
     * All constructs in the dependency's scope will be deployed before any
     * construct in this construct's scope.
     */
    addDependency(...dependencies: IDependable[]): void;
    /**
     * Return all dependencies registered on this node or any of its children
     */
    get dependencies(): Dependency[];
    /**
     * Remove the child with the given name, if present.
     *
     * @returns Whether a child with the given name was deleted.
     * @experimental
     */
    tryRemoveChild(childName: string): boolean;
}
/**
 * An error returned during the validation phase.
 */
export interface ValidationError {
    /**
     * The construct which emitted the error.
     */
    readonly source: Construct;
    /**
     * The error message.
     */
    readonly message: string;
}
/**
 * A single dependency
 */
export interface Dependency {
    /**
     * Source the dependency
     */
    readonly source: IConstruct;
    /**
     * Target of the dependency
     */
    readonly target: IConstruct;
}
