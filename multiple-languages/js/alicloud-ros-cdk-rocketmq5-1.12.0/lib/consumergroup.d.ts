import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './rocketmq5.generated';
export { RosConsumerGroup as ConsumerGroupProperty };
/**
 * Properties for defining a `ConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
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
 * Represents a `ConsumerGroup`.
 */
export interface IConsumerGroup extends ros.IResource {
    readonly props: ConsumerGroupProps;
    /**
     * Attribute ConsumerGroupId: The ID of the consumer group.
     */
    readonly attrConsumerGroupId: ros.IResolvable | string;
    /**
     * Attribute DeliveryOrderType: Delivery sequence of consumer group.
     */
    readonly attrDeliveryOrderType: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROCKETMQ5::ConsumerGroup`, which is used to create a consumer group in ApsaraMQ for RocketMQ 5.0.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
 */
export declare class ConsumerGroup extends ros.Resource implements IConsumerGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ConsumerGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConsumerGroupId: The ID of the consumer group.
     */
    readonly attrConsumerGroupId: ros.IResolvable | string;
    /**
     * Attribute DeliveryOrderType: Delivery sequence of consumer group.
     */
    readonly attrDeliveryOrderType: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint?: boolean);
}
