import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitCondition } from './ros.generated';
export { RosWaitCondition as WaitConditionProperty };
/**
 * Properties for defining a `ALIYUN::ROS::WaitCondition`
 */
export interface WaitConditionProps {
    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    readonly handle: string;
    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    readonly timeout: number;
    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    readonly count?: number;
}
/**
 * A ROS resource type:  `ALIYUN::ROS::WaitCondition`
 */
export declare class WaitCondition extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    readonly attrData: any;
    /**
     * @Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrErrorData: any;
    /**
     * @Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrJoinedErrorData: any;
    /**
     * Create a new `ALIYUN::ROS::WaitCondition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitConditionProps, enableResourcePropertyConstraint?: boolean);
}
