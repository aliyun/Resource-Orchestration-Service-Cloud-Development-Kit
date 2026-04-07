import * as ros from '@alicloud/ros-cdk-core';
import { RosConstraint } from './servicecatalog.generated';
export { RosConstraint as ConstraintProperty };
/**
 * Properties for defining a `Constraint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
 */
export interface ConstraintProps {
    /**
     * Property config: The configuration of the constraint.
     */
    readonly config: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property constraintType: The type of the constraint.
     */
    readonly constraintType: string | ros.IResolvable;
    /**
     * Property portfolioId: The ID of the portfolio.
     */
    readonly portfolioId: string | ros.IResolvable;
    /**
     * Property productId: The ID of the product.
     */
    readonly productId: string | ros.IResolvable;
    /**
     * Property description: The description of the constraint.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `Constraint`.
 */
export interface IConstraint extends ros.IResource {
    readonly props: ConstraintProps;
    /**
     * Attribute ConstraintId: The ID of the constraint.
     */
    readonly attrConstraintId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ServiceCatalog::Constraint`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConstraint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
 */
export declare class Constraint extends ros.Resource implements IConstraint {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ConstraintProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConstraintId: The ID of the constraint.
     */
    readonly attrConstraintId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConstraintProps, enableResourcePropertyConstraint?: boolean);
}
