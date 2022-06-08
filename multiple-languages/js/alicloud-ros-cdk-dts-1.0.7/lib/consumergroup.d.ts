import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './dts.generated';
export { RosConsumerGroup as ConsumerGroupProperty };
/**
 * Properties for defining a `ALIYUN::DTS::ConsumerGroup`
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
 * A ROS resource type:  `ALIYUN::DTS::ConsumerGroup`
 */
export declare class ConsumerGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ConsumerGroupID: Consumer group ID
     */
    readonly attrConsumerGroupId: ros.IResolvable;
    /**
     * Attribute ConsumerGroupName: Consumer group name
     */
    readonly attrConsumerGroupName: ros.IResolvable;
    /**
     * Attribute SubscriptionInstanceId: Subscription instance ID
     */
    readonly attrSubscriptionInstanceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DTS::ConsumerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=consumergroup.d.ts.map