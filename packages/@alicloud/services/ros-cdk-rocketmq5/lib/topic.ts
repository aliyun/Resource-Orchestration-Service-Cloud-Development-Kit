import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './rocketmq5.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTopic as TopicProperty };

/**
 * Properties for defining a `ALIYUN::ROCKETMQ5::Topic`
 */
export interface TopicProps {

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property messageType: The message type of the topic to be created. Valid values:
     * NORMAL
     * FIFO
     * DELAY
     * TRANSACTION
     */
    readonly messageType: string | ros.IResolvable;

    /**
     * Property topicName: The name of the topic to be created is used to identify the topic and is globally unique.
     * Valid values:
     * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
     * Length limit: 1-60 characters.
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * Property remark: The remark of the topic to be created.
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ5::Topic`
 */
export class Topic extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute MessageType: The type of the message.
     */
    public readonly attrMessageType: ros.IResolvable;

    /**
     * Attribute TopicName: The name of the topic.
     */
    public readonly attrTopicName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ROCKETMQ5::Topic`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTopic = new RosTopic(this, id,  {
            instanceId: props.instanceId,
            messageType: props.messageType,
            remark: props.remark,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrInstanceId = rosTopic.attrInstanceId;
        this.attrMessageType = rosTopic.attrMessageType;
        this.attrTopicName = rosTopic.attrTopicName;
    }
}
