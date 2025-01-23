import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './rocketmq.generated';
export { RosTopic as TopicProperty };
/**
 * Properties for defining a `Topic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topic
 */
export interface TopicProps {
    /**
     * Property instanceId: The ID of the instance to which the topic belongs.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property topicName: The name of the topic.
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Topic`.
 */
export interface ITopic extends ros.IResource {
    readonly props: TopicProps;
    /**
     * Attribute CreateTime: The time when the topic was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the instance to which the topic belongs.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute MessageType: The message type of the topic.
     */
    readonly attrMessageType: ros.IResolvable | string;
    /**
     * Attribute Remark: The remarks on the topic.
     */
    readonly attrRemark: ros.IResolvable | string;
    /**
     * Attribute TopicName: The name of the topic.
     */
    readonly attrTopicName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the topic was last updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ::Topic`, which is used to query the information about a topic.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topic
 */
export declare class Topic extends ros.Resource implements ITopic {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the topic was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the instance to which the topic belongs.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute MessageType: The message type of the topic.
     */
    readonly attrMessageType: ros.IResolvable | string;
    /**
     * Attribute Remark: The remarks on the topic.
     */
    readonly attrRemark: ros.IResolvable | string;
    /**
     * Attribute TopicName: The name of the topic.
     */
    readonly attrTopicName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the topic was last updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
