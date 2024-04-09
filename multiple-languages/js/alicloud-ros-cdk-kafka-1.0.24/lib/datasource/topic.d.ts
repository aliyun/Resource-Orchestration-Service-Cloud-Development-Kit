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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KAFKA::Topic`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
 */
export declare class Topic extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CompactTopic: Can log merge.
     */
    readonly attrCompactTopic: ros.IResolvable;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute InstanceId: Resource id.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute LocalTopic: Whether to store locally.
     */
    readonly attrLocalTopic: ros.IResolvable;
    /**
     * Attribute PartitionNum: Number of partitions.
     */
    readonly attrPartitionNum: ros.IResolvable;
    /**
     * Attribute Remark: Remarks.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * Attribute StatusName: Meaning of status value.
     */
    readonly attrStatusName: ros.IResolvable;
    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute Topic: Topic Name.
     */
    readonly attrTopic: ros.IResolvable;
    /**
     * Attribute TopicStatus: The Topic status.
     */
    readonly attrTopicStatus: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
