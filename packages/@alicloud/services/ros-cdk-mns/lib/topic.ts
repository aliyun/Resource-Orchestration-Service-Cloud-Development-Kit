import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTopic as TopicProperty };

/**
 * Properties for defining a `ALIYUN::MNS::Topic`
 */
export interface TopicProps {

    /**
     * @Property topicName: Topic name
     */
    readonly topicName: string;

    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    readonly loggingEnabled?: boolean | ros.IResolvable;

    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
     * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
     */
    readonly maximumMessageSize?: number;
}

/**
 * A ROS resource type:  `ALIYUN::MNS::Topic`
 */
export class Topic extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
     */
    public readonly attrArnWithSlash: any;

    /**
     * @Attribute TopicName: Topic name
     */
    public readonly attrTopicName: any;

    /**
     * @Attribute TopicUrl: URL of created topic
     */
    public readonly attrTopicUrl: any;

    /**
     * Create a new `ALIYUN::MNS::Topic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTopic = new RosTopic(this, id,  {
            maximumMessageSize: props.maximumMessageSize ? props.maximumMessageSize : 65536,
            loggingEnabled: props.loggingEnabled ? props.loggingEnabled : false,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrArnWithSlash = rosTopic.attrArnWithSlash;
        this.attrTopicName = rosTopic.attrTopicName;
        this.attrTopicUrl = rosTopic.attrTopicUrl;
    }
}
