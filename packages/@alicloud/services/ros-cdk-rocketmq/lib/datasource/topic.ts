import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './rocketmq.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ::Topic`, which is used to query the information about a topic.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topic
 */
export class Topic extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the topic was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the instance to which the topic belongs.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute MessageType: The message type of the topic.
     */
    public readonly attrMessageType: ros.IResolvable;

    /**
     * Attribute Remark: The remarks on the topic.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * Attribute TopicName: The name of the topic.
     */
    public readonly attrTopicName: ros.IResolvable;

    /**
     * Attribute UpdateTime: The time when the topic was last updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

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
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrCreateTime = rosTopic.attrCreateTime;
        this.attrInstanceId = rosTopic.attrInstanceId;
        this.attrMessageType = rosTopic.attrMessageType;
        this.attrRemark = rosTopic.attrRemark;
        this.attrTopicName = rosTopic.attrTopicName;
        this.attrUpdateTime = rosTopic.attrUpdateTime;
    }
}
