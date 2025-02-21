import * as ros from '@alicloud/ros-cdk-core';
import { RosAssert } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAssert as AssertProperty };

/**
 * Properties for defining a `Assert`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-assert
 */
export interface AssertProps {

    /**
     * Property values: A list of values to assert. The items in the list are compared in order. The range of length is one to three. 
     * - Three values are supported only if the operation is Equal or NotEqual.
     * - One value is supported only if the operation is Not.
     */
    readonly values: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property abortCreation: Whether to abort creation when the assert fails. Default is True.
     */
    readonly abortCreation?: boolean | ros.IResolvable;

    /**
     * Property errorMessage: The error message to be returned when the assert fails.
     */
    readonly errorMessage?: string | ros.IResolvable;

    /**
     * Property operation: The type of assertion to make. The supported operations are:
     * Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, Contain, NotContain, And, Or, Not.
     * Default is Equal.
     */
    readonly operation?: string | ros.IResolvable;
}

/**
 * Represents a `Assert`.
 */
export interface IAssert extends ros.IResource {
    readonly props: AssertProps;

    /**
     * Attribute FailureCause: The reason the assertion failed
     */
    readonly attrFailureCause: ros.IResolvable | string;

    /**
     * Attribute Result: The result of the assert.
     */
    readonly attrResult: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::Assert`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAssert`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-assert
 */
export class Assert extends ros.Resource implements IAssert {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AssertProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FailureCause: The reason the assertion failed
     */
    public readonly attrFailureCause: ros.IResolvable | string;

    /**
     * Attribute Result: The result of the assert.
     */
    public readonly attrResult: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AssertProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAssert = new RosAssert(this, id,  {
            values: props.values,
            operation: props.operation === undefined || props.operation === null ? 'Equal' : props.operation,
            errorMessage: props.errorMessage,
            abortCreation: props.abortCreation === undefined || props.abortCreation === null ? true : props.abortCreation,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAssert;
        this.attrFailureCause = rosAssert.attrFailureCause;
        this.attrResult = rosAssert.attrResult;
    }
}
