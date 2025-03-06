import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTopic as TopicProperty };

/**
 * Properties for defining a `Topic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-topic
 */
export interface TopicProps {

    /**
     * Property topicName: Topic name
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    readonly loggingEnabled?: boolean | ros.IResolvable;

    /**
     * Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
     * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
     */
    readonly maximumMessageSize?: number | ros.IResolvable;
}

/**
 * Represents a `Topic`.
 */
export interface ITopic extends ros.IResource {
    readonly props: TopicProps;

    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
     */
    readonly attrArnWithSlash: ros.IResolvable | string;

    /**
     * Attribute TopicName: Topic name
     */
    readonly attrTopicName: ros.IResolvable | string;

    /**
     * Attribute TopicUrl: URL of created topic
     */
    readonly attrTopicUrl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MNS::Topic`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-topic
 */
export class Topic extends ros.Resource implements ITopic {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
     */
    public readonly attrArnWithSlash: ros.IResolvable | string;

    /**
     * Attribute TopicName: Topic name
     */
    public readonly attrTopicName: ros.IResolvable | string;

    /**
     * Attribute TopicUrl: URL of created topic
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
            maximumMessageSize: props.maximumMessageSize === undefined || props.maximumMessageSize === null ? 65536 : props.maximumMessageSize,
            loggingEnabled: props.loggingEnabled === undefined || props.loggingEnabled === null ? false : props.loggingEnabled,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrArnWithSlash = rosTopic.attrArnWithSlash;
        this.attrTopicName = rosTopic.attrTopicName;
        this.attrTopicUrl = rosTopic.attrTopicUrl;
    }
}
