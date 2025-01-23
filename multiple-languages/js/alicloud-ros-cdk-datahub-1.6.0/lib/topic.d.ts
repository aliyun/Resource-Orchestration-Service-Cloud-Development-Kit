import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './datahub.generated';
export { RosTopic as TopicProperty };
/**
 * Properties for defining a `Topic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-topic
 */
export interface TopicProps {
    /**
     * Property comment: The comment of topic.
     */
    readonly comment: string | ros.IResolvable;
    /**
     * Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * Property recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
     */
    readonly recordType: string | ros.IResolvable;
    /**
     * Property topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * Property lifecycle: Data storage life cycle.
     */
    readonly lifecycle?: number | ros.IResolvable;
    /**
     * Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
     */
    readonly recordSchema?: string | ros.IResolvable;
    /**
     * Property shardCount: Initial shard number.
     */
    readonly shardCount?: number | ros.IResolvable;
}
/**
 * Represents a `Topic`.
 */
export interface ITopic extends ros.IResource {
    readonly props: TopicProps;
    /**
     * Attribute ProjectName: Project name
     */
    readonly attrProjectName: ros.IResolvable | string;
    /**
     * Attribute TopicName: Topic name
     */
    readonly attrTopicName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DATAHUB::Topic`, which is used to create a topic.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-topic
 */
export declare class Topic extends ros.Resource implements ITopic {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TopicProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ProjectName: Project name
     */
    readonly attrProjectName: ros.IResolvable | string;
    /**
     * Attribute TopicName: Topic name
     */
    readonly attrTopicName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
