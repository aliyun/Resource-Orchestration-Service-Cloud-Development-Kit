import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './dts.generated';
export { RosConsumerGroup as ConsumerGroupProperty };
/**
 * Properties for defining a `ConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
 */
export interface ConsumerGroupProps {
    /**
     * Property consumerGroupName: Consumer group name.
     */
    readonly consumerGroupName: string | ros.IResolvable;
    /**
     * Property consumerGroupPassword: Password of consumer group.
     */
    readonly consumerGroupPassword: string | ros.IResolvable;
    /**
     * Property consumerGroupUserName: User name of consumer group.
     */
    readonly consumerGroupUserName: string | ros.IResolvable;
    /**
     * Property subscriptionInstanceId: Subscription instance ID.
     */
    readonly subscriptionInstanceId: string | ros.IResolvable;
}
/**
 * Represents a `ConsumerGroup`.
 */
export interface IConsumerGroup extends ros.IResource {
    readonly props: ConsumerGroupProps;
    /**
     * Attribute ConsumerGroupID: Consumer group ID
     */
    readonly attrConsumerGroupId: ros.IResolvable | string;
    /**
     * Attribute ConsumerGroupName: Consumer group name
     */
    readonly attrConsumerGroupName: ros.IResolvable | string;
    /**
     * Attribute SubscriptionInstanceId: Subscription instance ID
     */
    readonly attrSubscriptionInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DTS::ConsumerGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
 */
export declare class ConsumerGroup extends ros.Resource implements IConsumerGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ConsumerGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConsumerGroupID: Consumer group ID
     */
    readonly attrConsumerGroupId: ros.IResolvable | string;
    /**
     * Attribute ConsumerGroupName: Consumer group name
     */
    readonly attrConsumerGroupName: ros.IResolvable | string;
    /**
     * Attribute SubscriptionInstanceId: Subscription instance ID
     */
    readonly attrSubscriptionInstanceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint?: boolean);
}
