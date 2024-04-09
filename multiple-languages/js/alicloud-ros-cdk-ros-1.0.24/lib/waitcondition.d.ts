import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitCondition } from './ros.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::WaitCondition`, which is used to wait for signals. You can use ALIYUN::ROS::WaitCondition together with ALIYUN::ROS::WaitConditionHandle to manage the execution process of a stack. When you create an Elastic Compute Service (ECS) instance, a signal is sent during the execution of the user data.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitCondition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-waitcondition
 */
export declare class WaitCondition extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WaitConditionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    readonly attrData: ros.IResolvable;
    /**
     * Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrErrorData: ros.IResolvable;
    /**
     * Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrJoinedErrorData: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitConditionProps, enableResourcePropertyConstraint?: boolean);
}
