import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './rocketmq5.generated';
export { RosTopic as TopicProperty };
/**
 * Properties for defining a `Topic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROCKETMQ5::Topic`, which is used to create a topic for a Message Queue for Apache RocketMQ V5.0 instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
 */
export declare class Topic extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute MessageType: The type of the message.
     */
    readonly attrMessageType: ros.IResolvable;
    /**
     * Attribute TopicName: The name of the topic.
     */
    readonly attrTopicName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
