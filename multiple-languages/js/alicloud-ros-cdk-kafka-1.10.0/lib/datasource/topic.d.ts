import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './kafka.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KAFKA::Topic`, which is used to query the information about a topic.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
 */
export declare class Topic extends ros.Resource implements ITopic {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
