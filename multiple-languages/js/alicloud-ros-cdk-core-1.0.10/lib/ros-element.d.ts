import { Construct } from "./construct-compat";
/**
 * An element of a stack.
 */
export declare abstract class RosElement extends Construct {
    /**
     * Returns `true` if a construct is a stack element (i.e. part of the
     * synthesized template).
     *
     * Uses duck-typing instead of `instanceof` to allow stack elements from different
     * versions of this library to be included in the same stack.
     *
     * @returns The construct as a stack element or undefined if it is not a stack element.
     */
    static isRosElement(x: any): x is RosElement;
    /**
     * The logical ID for this stack element. The logical ID of the element
     * is calculated from the path of the resource node in the construct tree.
     *
     * To override this value, use `overrideLogicalId(newLogicalId)`.
     *
     * @returns the logical ID as a stringified token. This value will only get
     * resolved during synthesis.
     */
    readonly logicalId: string;
    /**
     * The stack in which this element is defined. RosElements must be defined within a stack scope (directly or indirectly).
     */
    readonly stack: Stack;
    /**
     * An explicit logical ID provided by `overrideLogicalId`.
     */
    private _logicalIdOverride?;
    /**
     * Creates an entity and binds it to a tree.
     * Note that the root of the tree must be a Stack object (not just any Root).
     *
     * @param scope The parent construct
     * @param props Construct properties
     */
    constructor(scope: Construct, id: string);
    /**
     * Overrides the auto-generated logical ID with a specific ID.
     * @param newLogicalId The new logical ID to use for this stack element.
     */
    overrideLogicalId(newLogicalId: string): void;
    /**
     * @returns the stack trace of the point where this Resource was created from, sourced
     *      from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
     *      node +internal+ entries filtered.
     */
    get creationStack(): string[];
    /**
     * Returns the template 'snippet' for this entity. The snippet will only be merged
     * at the root level to ensure there are no identity conflicts.
     *
     * For example, a Resource class will return something like:
     * {
     *   Resources: {
     *     [this.logicalId]: {
     *       Type: this.resourceType,
     *       Properties: this.props,
     *       Condition: this.condition
     *     }
     *   }
     * }
     *
     * @internal
     */
    abstract _toRosTemplate(): object;
    /**
     * Called during synthesize to render the logical ID of this element. If
     * `overrideLogicalId` was it will be used, otherwise, we will allocate the
     * logical ID through the stack.
     */
    private synthesizeLogicalId;
}
/**
 * Base class for referenceable template constructs which are not Resources
 *
 * These constructs are things like Conditions and Parameters, can be
 * referenced by taking the `.ref` attribute.
 *
 * Resource constructs do not inherit from RosRefElement because they have their
 * own, more specific types returned from the .ref attribute. Also, some
 * resources aren't referenceable at all (such as BucketPolicies or GatewayAttachments).
 */
export declare abstract class RosRefElement extends RosElement {
    /**
     * Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
     *
     * If, by any chance, the intrinsic reference of a resource is not a string, you could
     * coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
     */
    get ref(): string;
}
import { Stack } from "./stack";
