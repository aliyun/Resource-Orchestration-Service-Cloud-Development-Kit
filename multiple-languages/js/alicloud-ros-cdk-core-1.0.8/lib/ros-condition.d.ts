import { Construct } from "./construct-compat";
import { IResolvable, IResolveContext } from "./resolvable";
import { RosElement } from "./ros-element";
export interface RosConditionProps {
    /**
     * The expression that the condition will evaluate.
     *
     * @default - None.
     */
    readonly expression?: IRosConditionExpression;
}
/**
 * Represents a RosTemplate condition, for resources which must be conditionally created and
 * the determination must be made at deploy time.
 */
export declare class RosCondition extends RosElement implements IRosConditionExpression, IResolvable {
    /**
     * The condition statement.
     */
    expression?: IRosConditionExpression;
    /**
     * Build a new condition. The condition must be constructed with a condition token,
     * that the condition is based on.
     */
    constructor(scope: Construct, id: string, props?: RosConditionProps);
    /**
     * @internal
     */
    _toRosTemplate(): object;
    /**
     * Synthesizes the condition.
     */
    resolve(_context: IResolveContext): any;
}
/**
 * Represents a RosTemplate element that can be used within a Condition.
 *
 * You can use intrinsic functions, such as ``Fn.conditionIf``,
 * ``Fn.conditionEquals``, and ``Fn.conditionNot``, to conditionally create
 * stack resources. These conditions are evaluated based on input parameters
 * that you declare when you create or update a stack. After you define all your
 * conditions, you can associate them with resources or resource properties in
 * the Resources and Outputs sections of a template.
 *
 */
export interface IRosConditionExpression extends IResolvable {
}
//# sourceMappingURL=ros-condition.d.ts.map