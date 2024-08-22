import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './mns.generated';
export { RosTopic as TopicProperty };
/**
 * Properties for defining a `Topic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topic
 */
export interface TopicProps {
    /**
     * Property topicName: The name of the resource.
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Topic`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topic
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
     * Attribute LastModifyTime: The time when the topic was last modified.
     */
    readonly attrLastModifyTime: ros.IResolvable;
    /**
     * Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.
     */
    readonly attrLoggingEnabled: ros.IResolvable;
    /**
     * Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.
     */
    readonly attrMaxMessageSize: ros.IResolvable;
    /**
     * Attribute MessageCount: The number of messages in the topic.
     */
    readonly attrMessageCount: ros.IResolvable;
    /**
     * Attribute MessageRetentionPeriod: The retention period of the message in the topic.
     */
    readonly attrMessageRetentionPeriod: ros.IResolvable;
    /**
     * Attribute TopicInnerUrl: The internal URL of the topic.
     */
    readonly attrTopicInnerUrl: ros.IResolvable;
    /**
     * Attribute TopicName: The name of the MNS topic.
     */
    readonly attrTopicName: ros.IResolvable;
    /**
     * Attribute TopicUrl: The URL of the topic.
     */
    readonly attrTopicUrl: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
