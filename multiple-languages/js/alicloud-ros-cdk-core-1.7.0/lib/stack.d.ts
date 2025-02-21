import { Construct, IConstruct, ISynthesisSession } from "./construct-compat";
export interface RamRoles {
    /**
     * The RAM role ARN that grants FC function the required permissions.
     */
    readonly fcRole: IResolvable | string;
}
export interface StackProps {
    readonly version?: String;
    /**
     * A description of the stack.
     *
     * @default - No description.
     */
    readonly description?: string;
    /**
     * The ALIYUN environment (account/region) where this stack will be deployed.
     *
     * Set the `region`/`account` fields of `env` to either a concrete value to
     * select the indicated environment (recommended for production stacks), or to
     * the values of environment variables
     * `CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
     * depend on the ALIYUN credentials/configuration that the CDK CLI is executed
     * under (recommended for development stacks).
     *
     * If the `Stack` is instantiated inside a `Stage`, any undefined
     * `region`/`account` fields from `env` will default to the same field on the
     * encompassing `Stage`, if configured there.
     *
     * If either `region` or `account` are not set nor inherited from `Stage`, the
     * Stack will be considered "*environment-agnostic*"". Environment-agnostic
     * stacks can be deployed to any environment but may not be able to take
     * advantage of all features of the CDK.
     *
     * @example
     *
     * // Use a concrete account and region to deploy this stack to:
     * // `.account` and `.region` will simply return these values.
     * new Stack(app, 'Stack1', {
     *   env: {
     *     account: '123456789012',
     *     region: 'cn-hangzhou'
     *   },
     * });
     *
     * // Use the CLI's current credentials to determine the target environment:
     * // `.account` and `.region` will reflect the account+region the CLI
     * // is configured to use (based on the user CLI credentials)
     * new Stack(app, 'Stack2', {
     *   env: {
     *     account: process.env.CDK_DEFAULT_ACCOUNT,
     *     region: process.env.CDK_DEFAULT_REGION
     *   },
     * });
     *
     * // Define multiple stacks stage associated with an environment
     * const myStage = new Stage(app, 'MyStage', {
     *   env: {
     *     account: '123456789012',
     *     region: 'cn-hangzhou'
     *   }
     * });
     *
     * // both of these stacks will use the stage's account/region:
     * // `.account` and `.region` will resolve to the concrete values as above
     * new MyStack(myStage, 'Stack1');
     * new YourStack(myStage, 'Stack2');
     *
     * // Define an environment-agnostic stack:
     * // `.account` and `.region` will resolve to `{ "Ref": "ALIYUN::AccountId" }` and `{ "Ref": "ALIYUN::Region" }` respectively.
     * // which will only resolve to actual values by ROS during deployment.
     * new MyStack(app, 'Stack1');
     *
     * @default - The environment of the containing `Stage` if available,
     * otherwise create the stack will be environment-agnostic.
     *
     * @experimental
     */
    readonly env?: Environment;
    /**
     * Name to deploy the stack with
     *
     * @default - Derived from construct path.
     */
    readonly stackName?: string;
    /**
     * Stack tags that will be applied to all the taggable resources and the stack itself.
     *
     * @default {}
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Synthesis method to use while deploying this stack
     *
     * @default - `DefaultStackSynthesizer`
     */
    readonly synthesizer?: IStackSynthesizer;
    readonly metadata?: {
        [key: string]: any;
    };
    readonly enableResourcePropertyConstraint?: boolean;
}
/**
 * A root construct which represents a single ROS stack.
 */
export declare class Stack extends Construct implements ITaggable {
    /**
     * Return whether the given object is a Stack.
     *
     * We do attribute detection since we can't reliably use 'instanceof'.
     */
    static isStack(x: any): x is Stack;
    /**
     * Looks up the first stack scope in which `construct` is defined. Fails if there is no stack up the tree.
     * @param construct The construct to start the search from.
     */
    static of(construct: IConstruct): Stack;
    /**
     * Tags to be applied to the stack.
     */
    readonly tags: TagManager;
    /**
     * The ALIYUN region into which this stack will be deployed (e.g. `cn-beijing`).
     *
     * This value is resolved according to the following rules:
     *
     * 1. The value provided to `env.region` when the stack is defined. This can
     *    either be a concrete region or the `ALIYUN.REGION` token.
     * 2. `ALIYUN.REGION`, which is represents the ROS intrinsic reference
     *    `{ "Ref": "ALIYUN::Region" }` encoded as a string token.
     *
     * Preferably, you should use the return value as an opaque string and not
     * attempt to parse it to implement your logic. If you do, you must first
     * check that it is a concrete value an not an unresolved token. If this
     * value is an unresolved token (`Token.isUnresolved(stack.region)` returns
     * `true`), this implies that the user wishes that this stack will synthesize
     * into a **region-agnostic template**. In this case, your code should either
     * fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
     * implement some other region-agnostic behavior.
     */
    readonly region: string;
    /**
     * The ALIYUN account into which this stack will be deployed.
     *
     * This value is resolved according to the following rules:
     *
     * 1. The value provided to `env.account` when the stack is defined. This can
     *    either be a concrete account or the `ALIYUN.ACCOUNT_ID` token.
     * 2. `ALIYUN.ACCOUNT_ID`, which represents the ROS intrinsic reference
     *    `{ "Ref": "ALIYUN::AccountId" }` encoded as a string token.
     *
     * Preferably, you should use the return value as an opaque string and not
     * attempt to parse it to implement your logic. If you do, you must first
     * check that it is a concrete value an not an unresolved token. If this
     * value is an unresolved token (`Token.isUnresolved(stack.account)` returns
     * `true`), this implies that the user wishes that this stack will synthesize
     * into a **account-agnostic template**. In this case, your code should either
     * fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
     * implement some other region-agnostic behavior.
     */
    readonly account: string;
    roles?: RamRoles;
    /**
     * Options for ROS template (like version, description).
     */
    readonly templateOptions: ITemplateOptions;
    /**
     * If this is a nested stack, this represents its `ALIYUN::ROS::Stack`
     * resource. `undefined` for top-level (non-nested) stacks.
     *
     * @experimental
     */
    readonly nestedStackResource?: RosResource;
    /**
     * The name of the ROS template file emitted to the output
     * directory during synthesis.
     *
     * @example MyStack.template.json
     */
    readonly templateFile: string;
    /**
     * The ID of the cloud assembly artifact for this stack.
     */
    readonly artifactId: string;
    /**
     * Synthesis method for this stack
     *
     * @experimental
     */
    readonly synthesizer: IStackSynthesizer;
    /**
     * Logical ID generation strategy
     */
    private readonly _logicalIds;
    /**
     * Other stacks this stack depends on
     */
    private readonly _stackDependencies;
    private readonly _stackName;
    readonly enableResourcePropertyConstraint: boolean;
    private readonly maxResources;
    /**
     * Creates a new stack.
     *
     * @param scope Parent of this stack, usually a Program instance.
     * @param id The construct ID of this stack. If `stackName` is not explicitly
     * defined, this id (and any parent IDs) will be used to determine the
     * physical ID of the stack.
     * @param props Stack properties.
     */
    constructor(scope?: Construct, id?: string, props?: StackProps);
    /**
     * Resolve a tokenized value in the context of the current stack.
     */
    resolve(obj: any): any;
    /**
     * Determine the various stack environment attributes.
     *
     */
    private parseEnvironment;
    /**
     * Convert an object, potentially containing tokens, to a JSON string
     */
    toJsonString(obj: any, space?: number): string;
    /**
     * Rename a generated logical identities
     *
     * To modify the naming scheme strategy, extend the `Stack` class and
     * override the `allocateLogicalId` method.
     */
    renameLogicalId(oldId: string, newId: string): void;
    /**
     * Allocates a stack-unique logical identity for a
     * specific resource.
     *
     * This method is called when a `RosElement` is created and used to render the
     * initial logical identity of resources. Logical ID renames are applied at
     * this stage.
     *
     * This method uses the protected method `allocateLogicalId` to render the
     * logical ID for an element. To modify the naming scheme, extend the `Stack`
     * class and override this method.
     *
     * @param element The ROS element for which a logical identity is
     * needed.
     */
    getLogicalId(element: RosElement): string;
    /**
     * Add a dependency between this stack and another stack.
     *
     * This can be used to define dependencies between any two stacks within an
     * app, and also supports nested stacks.
     */
    addDependency(target: Stack, reason?: string): void;
    /**
     * Return the stacks this stack depends on
     */
    get dependencies(): Stack[];
    /**
     * The concrete ROS physical stack name.
     *
     * This is either the name defined explicitly in the `stackName` prop or
     * allocated based on the stack's location in the construct tree. Stacks that
     * are directly defined under the app use their construct `id` as their stack
     * name. Stacks that are defined deeper within the tree will use a hashed naming
     * scheme based on the construct path to ensure uniqueness.
     *
     */
    get stackName(): string;
    /**
     * The ID of the stack
     *
     */
    get stackId(): string;
    /**
     * Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.
     */
    get nested(): boolean;
    /**
     * If this is a nested stack, returns it's parent stack.
     */
    get nestedStackParent(): Stack | undefined;
    /**
     * Returns the parent of a nested stack.
     *
     * @deprecated use `nestedStackParent`
     */
    get parentStack(): Stack | undefined;
    /**
     * Called implicitly by the `addDependency` helper function in order to
     * realize a dependency between two top-level stacks at the assembly level.
     *
     * Use `stack.addDependency` to define the dependency between any two stacks,
     * and take into account nested stack relationships.
     *
     * @internal
     */
    _addAssemblyDependency(target: Stack, reason?: string): void;
    /**
     * Returns the naming scheme used to allocate logical IDs. By default, uses
     * the `HashedAddressingScheme` but this method can be overridden to customize
     * this behavior.
     *
     * In order to make sure logical IDs are unique and stable, we hash the resource
     * construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
     * a suffix to the path components joined without a separator (ROS
     * IDs only allow alphanumeric characters).
     *
     * The result will be:
     *
     *   <path.join('')><md5(path.join('/')>
     *     "human"      "hash"
     *
     * If the "human" part of the ID exceeds 240 characters, we simply trim it so
     * the total ID doesn't exceed 255 character limit.
     *
     * We only take 8 characters from the md5 hash (0.000005 chance of collision).
     *
     * Special cases:
     *
     * - If the path only contains a single component (i.e. it's a top-level
     *   resource), we won't add the hash to it. The hash is not needed for
     *   disamiguation and also, it allows for a more straightforward migration an
     *   existing ROS template to a CDK stack without logical ID changes
     *   (or renames).
     * - For aesthetic reasons, if the last components of the path are the same
     *   (i.e. `L1/L2/Pipeline/Pipeline`), they will be de-duplicated to make the
     *   resulting human portion of the ID more pleasing: `L1L2Pipeline<HASH>`
     *   instead of `L1L2PipelinePipeline<HASH>`
     * - If a component is named "Default" it will be omitted from the path. This
     *   allows refactoring higher level abstractions around constructs without affecting
     *   the IDs of already deployed resources.
     * - If a component is named "Resource" it will be omitted from the user-visible
     *   path, but included in the hash. This reduces visual noise in the human readable
     *   part of the identifier.
     *
     * @param rosElement The element for which the logical ID is allocated.
     */
    protected allocateLogicalId(rosElement: RosElement): string;
    /**
     * Validate stack name
     *
     * ROS stack names can include dashes in addition to the regular identifier
     * character classes, and we don't allow one of the magic markers.
     *
     * @internal
     */
    protected _validateId(name: string): void;
    synthesize(session: ISynthesisSession): void;
    /**
     * Returns the RosTemplate template for this stack by traversing
     * the tree and invoking _toRosTemplate() on all Entity objects.
     *
     * @internal
     */
    protected _toRosTemplate(): any;
    /**
     * Deprecated.
     *
     * @returns reference itself without any change
     * @deprecated cross reference handling has been moved to `App.prepare()`.
     */
    protected prepareCrossReference(_sourceStack: Stack, reference: Reference): IResolvable;
    /**
     * Check whether this stack has a (transitive) dependency on another stack
     *
     * Returns the list of reasons on the dependency path, or undefined
     * if there is no dependency.
     */
    private stackDependencyReasons;
    /**
     * Calculate the stack name based on the construct path
     *
     * The stack name is the name under which we'll deploy the stack,
     * and incorporates containing Stage names by default.
     *
     * Generally this looks a lot like how logical IDs are calculated.
     * The stack name is calculated based on the construct root path,
     * as follows:
     *
     * - Path is calculated with respect to containing App or Stage (if any)
     * - If the path is one component long just use that component, otherwise
     *   combine them with a hash.
     *
     * Since the hash is quite ugly and we'd like to avoid it if possible -- but
     * we can't anymore in the general case since it has been written into legacy
     * stacks. The introduction of Stages makes it possible to make this nicer however.
     * When a Stack is nested inside a Stage, we use the path components below the
     * Stage, and prefix the path components of the Stage before it.
     */
    private generateStackName;
    /**
     * The artifact ID for this stack
     *
     * Stack artifact ID is unique within the App's Cloud Assembly.
     */
    private generateStackArtifactId;
    /**
     * Generate an ID with respect to the given container construct.
     */
    private generateStackId;
    /**
     * Indicates whether the stack requires bundling or not
     */
    get bundlingRequired(): boolean;
    /**
     * Splits the provided ARN into its components.
     * Works both if 'arn' is a string like 'acs:ram::123456789012****:role/RoleName',
     * and a Token representing a dynamic ROS expression
     * (in which case the returned components will also be dynamic ROS expressions,
     * encoded as Tokens).
     *
     * @param arn the ARN to split into its components
     * @param arnFormat the expected format of 'arn' - depends on what format the service 'arn' represents uses
     */
    splitArn(arn: string | IResolvable, arnFormat: ArnFormat): ArnComponents;
}
/**
 * ROS template options for a stack.
 */
export interface ITemplateOptions {
    /**
     * Gets or sets the description of this stack.
     * If provided, it will be included in the ROS template's "Description" attribute.
     */
    description?: string;
    /**
     * Metadata associated with the ROS template.
     */
    metadata?: {
        [key: string]: any;
    };
}
/**
 * Return the construct root path of the given construct relative to the given ancestor
 *
 * If no ancestor is given or the ancestor is not found, return the entire root path.
 */
export declare function rootPathTo(construct: IConstruct, ancestor?: IConstruct): IConstruct[];
import { RosElement } from "./ros-element";
import { RosResource } from "./ros-resource";
import { Reference } from "./reference";
import { IResolvable } from "./resolvable";
import { IStackSynthesizer } from "./stack-synthesizers";
import { ITaggable, TagManager } from "./tag-manager";
import { Environment } from "./environment";
import { ArnFormat, ArnComponents } from "./arn";
