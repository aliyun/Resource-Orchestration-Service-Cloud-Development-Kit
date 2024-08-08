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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ::Topic`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topic
 */
export declare class Topic extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the topic was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the instance to which the topic belongs.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute MessageType: The message type of the topic.
     */
    readonly attrMessageType: ros.IResolvable;
    /**
     * Attribute Remark: The remarks on the topic.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * Attribute TopicName: The name of the topic.
     */
    readonly attrTopicName: ros.IResolvable;
    /**
     * Attribute UpdateTime: The time when the topic was last updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
