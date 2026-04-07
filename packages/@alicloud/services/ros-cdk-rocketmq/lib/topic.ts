import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './rocketmq.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTopic as TopicProperty };

/**
 * Properties for defining a `Topic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-topic
 */
export interface TopicProps {

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property messageType: The type of the message. Valid values:
     * 0: normal message
     * 1: partitionally ordered message
     * 2: globally ordered message
     * 4: transactional message
     * 5: scheduled\/delayed message
     */
    readonly messageType: number | ros.IResolvable;

    /**
     * Property topic: The name of the topic you want to create.
     * Note:
     * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
     * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
     * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
     */
    readonly topic: string | ros.IResolvable;

    /**
     * Property remark: The remarks on the request. This parameter can be left blank.
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * Represents a `Topic`.
 */
export interface ITopic extends ros.IResource {
    readonly props: TopicProps;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute MessageType: The type of the message.
     */
    readonly attrMessageType: ros.IResolvable | string;

    /**
     * Attribute Topic: The name of the topic.
     */
    readonly attrTopic: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROCKETMQ::Topic`, which is used to create a topic.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-topic
 */
export class Topic extends ros.Resource implements ITopic {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute MessageType: The type of the message.
     */
    public readonly attrMessageType: ros.IResolvable | string;

    /**
     * Attribute Topic: The name of the topic.
     */
    public readonly attrTopic: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTopic = new RosTopic(this, id,  {
            instanceId: props.instanceId,
            topic: props.topic,
            messageType: props.messageType,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrInstanceId = rosTopic.attrInstanceId;
        this.attrMessageType = rosTopic.attrMessageType;
        this.attrTopic = rosTopic.attrTopic;
    }
}
