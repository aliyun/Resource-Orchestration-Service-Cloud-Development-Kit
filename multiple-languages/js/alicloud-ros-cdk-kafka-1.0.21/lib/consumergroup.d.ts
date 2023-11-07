import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './kafka.generated';
export { RosConsumerGroup as ConsumerGroupProperty };
/**
 * Properties for defining a `ALIYUN::KAFKA::ConsumerGroup`
 */
export interface ConsumerGroupProps {
    /**
     * Property consumerId: Group name. Value:
     * Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
     * The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
     * Once the group name is created, it cannot be modified.
     */
    readonly consumerId: string | ros.IResolvable;
    /**
     * Property instanceId: Kafka instance id.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property remark: Remark description.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosConsumerGroup.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::KAFKA::ConsumerGroup`
 */
export declare class ConsumerGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ConsumerId: Consumer group ID
     */
    readonly attrConsumerId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::KAFKA::ConsumerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint?: boolean);
}
