import { Stack } from "../stack";
import { IConstruct, Construct } from "../construct-compat";
import { Reference } from "../reference";
import { RosElement } from "../ros-element";
import { IResolvable, IResolveContext } from "../resolvable";
/**
 * A Token that represents a ROS reference to another resource
 *
 * Additionally, the dependency between the stacks will be recorded, and the toolkit
 * will make sure to deploy producing stack before the consuming stack.
 *
 * This magic happens in the prepare() phase, where consuming stacks will call
 * `consumeFromStack` on these Tokens and if they happen to be exported by a different
 * Stack, we'll register the dependency.
 */
export declare class RosReference extends Reference {
    /**
     * Check whether this is actually a Reference
     */
    static isRosReference(x: IResolvable): x is RosReference;
    /**
     * Return the RosReference for the indicated target
     *
     * Will make sure that multiple invocations for the same target and intrinsic
     * return the same RosReference. Because RosReferences accumulate state in
     * the prepare() phase (for the purpose of cross-stack references), it's
     * important that the state isn't lost if it's lazily created, like so:
     *
     *     Lazy.stringValue({ produce: () => new RosReference(...) })
     */
    static for(target: RosElement, attribute: string): RosReference;
    /**
     * Return a RosReference that references a pseudo referencd
     */
    static forPseudo(pseudoName: string, scope: Construct): RosReference;
    /**
     * Static table where we keep singleton RosReference instances
     */
    private static referenceTable;
    /**
     * Get or create the table
     */
    private static singletonReference;
    /**
     * The Tokens that should be returned for each consuming stack (as decided by the producing Stack)
     */
    private readonly replacementTokens;
    private readonly targetStack;
    protected constructor(value: any, displayName: string, target: IConstruct);
    resolve(context: IResolveContext): any;
    hasValueForStack(stack: Stack): boolean;
    assignValueForStack(stack: Stack, value: IResolvable): void;
    /**
     * Implementation of toString() that will use the display name
     */
    toString(): string;
}
