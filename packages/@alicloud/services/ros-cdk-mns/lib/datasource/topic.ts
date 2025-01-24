import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `Topic`.
 */
export interface ITopic extends ros.IResource {
    readonly props: TopicProps;

    /**
     * Attribute CreateTime: The time when the topic was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute LastModifyTime: The time when the topic was last modified.
     */
    readonly attrLastModifyTime: ros.IResolvable | string;

    /**
     * Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.
     */
    readonly attrLoggingEnabled: ros.IResolvable | string;

    /**
     * Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.
     */
    readonly attrMaxMessageSize: ros.IResolvable | string;

    /**
     * Attribute MessageCount: The number of messages in the topic.
     */
    readonly attrMessageCount: ros.IResolvable | string;

    /**
     * Attribute MessageRetentionPeriod: The retention period of the message in the topic.
     */
    readonly attrMessageRetentionPeriod: ros.IResolvable | string;

    /**
     * Attribute TopicInnerUrl: The internal URL of the topic.
     */
    readonly attrTopicInnerUrl: ros.IResolvable | string;

    /**
     * Attribute TopicName: The name of the MNS topic.
     */
    readonly attrTopicName: ros.IResolvable | string;

    /**
     * Attribute TopicUrl: The URL of the topic.
     */
    readonly attrTopicUrl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Topic`, which is used to query the information about a topic.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topic
 */
export class Topic extends ros.Resource implements ITopic {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the topic was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute LastModifyTime: The time when the topic was last modified.
     */
    public readonly attrLastModifyTime: ros.IResolvable | string;

    /**
     * Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.
     */
    public readonly attrLoggingEnabled: ros.IResolvable | string;

    /**
     * Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.
     */
    public readonly attrMaxMessageSize: ros.IResolvable | string;

    /**
     * Attribute MessageCount: The number of messages in the topic.
     */
    public readonly attrMessageCount: ros.IResolvable | string;

    /**
     * Attribute MessageRetentionPeriod: The retention period of the message in the topic.
     */
    public readonly attrMessageRetentionPeriod: ros.IResolvable | string;

    /**
     * Attribute TopicInnerUrl: The internal URL of the topic.
     */
    public readonly attrTopicInnerUrl: ros.IResolvable | string;

    /**
     * Attribute TopicName: The name of the MNS topic.
     */
    public readonly attrTopicName: ros.IResolvable | string;

    /**
     * Attribute TopicUrl: The URL of the topic.
     */
    public readonly attrTopicUrl: ros.IResolvable | string;

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
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrCreateTime = rosTopic.attrCreateTime;
        this.attrLastModifyTime = rosTopic.attrLastModifyTime;
        this.attrLoggingEnabled = rosTopic.attrLoggingEnabled;
        this.attrMaxMessageSize = rosTopic.attrMaxMessageSize;
        this.attrMessageCount = rosTopic.attrMessageCount;
        this.attrMessageRetentionPeriod = rosTopic.attrMessageRetentionPeriod;
        this.attrTopicInnerUrl = rosTopic.attrTopicInnerUrl;
        this.attrTopicName = rosTopic.attrTopicName;
        this.attrTopicUrl = rosTopic.attrTopicUrl;
    }
}
