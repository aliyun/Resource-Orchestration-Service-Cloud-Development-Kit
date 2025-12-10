import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './kafka.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTopic as TopicProperty };

/**
 * Properties for defining a `Topic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
 */
export interface TopicProps {

    /**
     * Property instanceId: Resource id.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property topic: Topic Name.
     */
    readonly topic: string | ros.IResolvable;

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
     * Attribute CompactTopic: Can log merge.
     */
    readonly attrCompactTopic: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Resource id.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute LocalTopic: Whether to store locally.
     */
    readonly attrLocalTopic: ros.IResolvable | string;

    /**
     * Attribute PartitionNum: Number of partitions.
     */
    readonly attrPartitionNum: ros.IResolvable | string;

    /**
     * Attribute Remark: Remarks.
     */
    readonly attrRemark: ros.IResolvable | string;

    /**
     * Attribute StatusName: Meaning of status value.
     */
    readonly attrStatusName: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Topic: Topic Name.
     */
    readonly attrTopic: ros.IResolvable | string;

    /**
     * Attribute TopicStatus: The Topic status.
     */
    readonly attrTopicStatus: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KAFKA::Topic`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
 */
export class Topic extends ros.Resource implements ITopic {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CompactTopic: Can log merge.
     */
    public readonly attrCompactTopic: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Resource id.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute LocalTopic: Whether to store locally.
     */
    public readonly attrLocalTopic: ros.IResolvable | string;

    /**
     * Attribute PartitionNum: Number of partitions.
     */
    public readonly attrPartitionNum: ros.IResolvable | string;

    /**
     * Attribute Remark: Remarks.
     */
    public readonly attrRemark: ros.IResolvable | string;

    /**
     * Attribute StatusName: Meaning of status value.
     */
    public readonly attrStatusName: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Topic: Topic Name.
     */
    public readonly attrTopic: ros.IResolvable | string;

    /**
     * Attribute TopicStatus: The Topic status.
     */
    public readonly attrTopicStatus: ros.IResolvable | string;

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
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrCompactTopic = rosTopic.attrCompactTopic;
        this.attrCreateTime = rosTopic.attrCreateTime;
        this.attrInstanceId = rosTopic.attrInstanceId;
        this.attrLocalTopic = rosTopic.attrLocalTopic;
        this.attrPartitionNum = rosTopic.attrPartitionNum;
        this.attrRemark = rosTopic.attrRemark;
        this.attrStatusName = rosTopic.attrStatusName;
        this.attrTags = rosTopic.attrTags;
        this.attrTopic = rosTopic.attrTopic;
        this.attrTopicStatus = rosTopic.attrTopicStatus;
    }
}
