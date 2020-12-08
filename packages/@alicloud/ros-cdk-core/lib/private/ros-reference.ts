import { Stack } from "../stack";
import { IConstruct, Construct } from "../construct-compat";
import { Reference } from "../reference";
import { RosElement } from "../ros-element";
import { Token } from "../token";
import { IResolvable, IResolveContext } from "../resolvable";

const ROS_REFERENCE_SYMBOL = Symbol.for("ros-cdk-core.RosReference");

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
export class RosReference extends Reference {
  /**
   * Check whether this is actually a Reference
   */
  public static isRosReference(x: IResolvable): x is RosReference {
    return ROS_REFERENCE_SYMBOL in x;
  }

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
  public static for(target: RosElement, attribute: string) {
    return RosReference.singletonReference(target, attribute, () => {
      const rosIntrinsic =
        attribute === "Ref"
          ? { Ref: target.logicalId }
          : { "Fn::GetAtt": [target.logicalId, attribute] };
      return new RosReference(rosIntrinsic, attribute, target);
    });
  }

  /**
   * Return a RosReference that references a pseudo referencd
   */
  public static forPseudo(pseudoName: string, scope: Construct) {
    return RosReference.singletonReference(
      scope,
      `Pseudo:${pseudoName}`,
      () => {
        const rosIntrinsic = { Ref: pseudoName };
        return new RosReference(rosIntrinsic, pseudoName, scope);
      }
    );
  }

  /**
   * Static table where we keep singleton RosReference instances
   */
  private static referenceTable = new Map<
    Construct,
    Map<string, RosReference>
  >();

  /**
   * Get or create the table
   */
  private static singletonReference(
    target: Construct,
    attribKey: string,
    fresh: () => RosReference
  ) {
    let attribs = RosReference.referenceTable.get(target);
    if (!attribs) {
      attribs = new Map();
      RosReference.referenceTable.set(target, attribs);
    }
    let ref = attribs.get(attribKey);
    if (!ref) {
      ref = fresh();
      attribs.set(attribKey, ref);
    }
    return ref;
  }

  /**
   * The Tokens that should be returned for each consuming stack (as decided by the producing Stack)
   */
  private readonly replacementTokens: Map<Stack, IResolvable>;
  private readonly targetStack: Stack;

  protected constructor(value: any, displayName: string, target: IConstruct) {
    // prepend scope path to display name
    super(value, target, displayName);

    this.replacementTokens = new Map<Stack, IResolvable>();
    this.targetStack = Stack.of(target);

    Object.defineProperty(this, ROS_REFERENCE_SYMBOL, { value: true });
  }

  public resolve(context: IResolveContext): any {
    // If we have a special token for this consuming stack, resolve that. Otherwise resolve as if
    // we are in the same stack.
    const consumingStack = Stack.of(context.scope);
    const token = this.replacementTokens.get(consumingStack);

    // if (!token && this.isCrossStackReference(consumingStack) && !context.preparing) {
    // tslint:disable-next-line:max-line-length
    //   throw new Error(`Cross-stack reference (${context.scope.node.path} -> ${this.target.node.path}) has not been assigned a value--call prepare() first`);
    // }

    if (token) {
      return token.resolve(context);
    } else {
      return super.resolve(context);
    }
  }

  public hasValueForStack(stack: Stack) {
    if (stack === this.targetStack) {
      return true;
    }

    return this.replacementTokens.has(stack);
  }

  public assignValueForStack(stack: Stack, value: IResolvable) {
    if (stack === this.targetStack) {
      throw new Error("cannot assign a value for the same stack");
    }

    if (this.hasValueForStack(stack)) {
      throw new Error(
        "Cannot assign a reference value twice to the same stack. Use hasValueForStack to check first"
      );
    }

    this.replacementTokens.set(stack, value);
  }
  /**
   * Implementation of toString() that will use the display name
   */
  public toString(): string {
    return Token.asString(this, {
      displayHint: `${this.target.node.id}.${this.displayName}`,
    });
  }
}
