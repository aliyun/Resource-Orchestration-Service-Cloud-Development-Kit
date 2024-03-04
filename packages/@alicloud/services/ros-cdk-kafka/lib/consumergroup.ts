import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './kafka.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConsumerGroup as ConsumerGroupProperty };

/**
 * Properties for defining a `ConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::KAFKA::ConsumerGroup`, which is used to create a consumer group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
 */
export class ConsumerGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ConsumerGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConsumerId: Consumer group ID
     */
    public readonly attrConsumerId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosConsumerGroup = new RosConsumerGroup(this, id,  {
            instanceId: props.instanceId,
            consumerId: props.consumerId,
            tags: props.tags,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConsumerGroup;
        this.attrConsumerId = rosConsumerGroup.attrConsumerId;
    }
}
