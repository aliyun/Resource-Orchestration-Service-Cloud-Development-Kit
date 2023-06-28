import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './rocketmq5.generated';
export { RosConsumerGroup as ConsumerGroupProperty };
/**
 * Properties for defining a `ALIYUN::ROCKETMQ5::ConsumerGroup`
 */
export interface ConsumerGroupProps {
    /**
     * Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
     */
    readonly consumeRetryPolicy: RosConsumerGroup.ConsumeRetryPolicyProperty | ros.IResolvable;
    /**
     * Property consumerGroupId: The ID of the consumer group to be created. Used to identify consumer groups, globally unique.
     * The value description is as follows:
     * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
     * Length limit: 1-60 characters.
     */
    readonly consumerGroupId: string | ros.IResolvable;
    /**
     * Property deliveryOrderType: Delivery sequence of the consumer group to be created.
     */
    readonly deliveryOrderType: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property remark: The remark of the consumer group to be created.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ5::ConsumerGroup`
 */
export declare class ConsumerGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ConsumerGroupId: The ID of the consumer group.
     */
    readonly attrConsumerGroupId: ros.IResolvable;
    /**
     * Attribute DeliveryOrderType: Delivery sequence of consumer group.
     */
    readonly attrDeliveryOrderType: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ROCKETMQ5::ConsumerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint?: boolean);
}
