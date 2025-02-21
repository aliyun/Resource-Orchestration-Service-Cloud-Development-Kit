import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitCondition } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWaitCondition as WaitConditionProperty };

/**
 * Properties for defining a `WaitCondition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-waitcondition
 */
export interface WaitConditionProps {

    /**
     * Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    readonly handle: string | ros.IResolvable;

    /**
     * Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    readonly timeout: number | ros.IResolvable;

    /**
     * Property count: The number of success signals that must be received before the stack creation process continues.
     */
    readonly count?: number | ros.IResolvable;

    /**
     * Property showProgressEvent: Whether to generate progress changed event. Default to Disabled.
     */
    readonly showProgressEvent?: string | ros.IResolvable;
}

/**
 * Represents a `WaitCondition`.
 */
export interface IWaitCondition extends ros.IResource {
    readonly props: WaitConditionProps;

    /**
     * Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    readonly attrData: ros.IResolvable | string;

    /**
     * Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrErrorData: ros.IResolvable | string;

    /**
     * Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrJoinedErrorData: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::WaitCondition`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitCondition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-waitcondition
 */
export class WaitCondition extends ros.Resource implements IWaitCondition {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: WaitConditionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    public readonly attrData: ros.IResolvable | string;

    /**
     * Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    public readonly attrErrorData: ros.IResolvable | string;

    /**
     * Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    public readonly attrJoinedErrorData: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitConditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWaitCondition = new RosWaitCondition(this, id,  {
            showProgressEvent: props.showProgressEvent,
            timeout: props.timeout,
            count: props.count === undefined || props.count === null ? 1 : props.count,
            handle: props.handle,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWaitCondition;
        this.attrData = rosWaitCondition.attrData;
        this.attrErrorData = rosWaitCondition.attrErrorData;
        this.attrJoinedErrorData = rosWaitCondition.attrJoinedErrorData;
    }
}
