import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DATAHUB::Project`
 */
export interface RosProjectProps {
    /**
     * @Property comment: The comment of project.
     */
    readonly comment: string;
    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string;
}
/**
 * A ROS template type:  `ALIYUN::DATAHUB::Project`
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DATAHUB::Project";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ProjectName: Project name
     */
    readonly attrProjectName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property comment: The comment of project.
     */
    comment: string;
    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    projectName: string;
    /**
     * Create a new `ALIYUN::DATAHUB::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::DATAHUB::Topic`
 */
export interface RosTopicProps {
    /**
     * @Property comment: The comment of topic.
     */
    readonly comment: string;
    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string;
    /**
     * @Property recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
     */
    readonly recordType: string;
    /**
     * @Property topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly topicName: string;
    /**
     * @Property lifecycle: Data storage life cycle.
     */
    readonly lifecycle?: number;
    /**
     * @Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
     */
    readonly recordSchema?: string;
    /**
     * @Property shardCount: Initial shard number.
     */
    readonly shardCount?: number;
}
/**
 * A ROS template type:  `ALIYUN::DATAHUB::Topic`
 */
export declare class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DATAHUB::Topic";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ProjectName: Project name
     */
    readonly attrProjectName: any;
    /**
     * @Attribute TopicName: Topic name
     */
    readonly attrTopicName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property comment: The comment of topic.
     */
    comment: string;
    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    projectName: string;
    /**
     * @Property recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
     */
    recordType: string;
    /**
     * @Property topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    topicName: string;
    /**
     * @Property lifecycle: Data storage life cycle.
     */
    lifecycle: number | undefined;
    /**
     * @Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
     */
    recordSchema: string | undefined;
    /**
     * @Property shardCount: Initial shard number.
     */
    shardCount: number | undefined;
    /**
     * Create a new `ALIYUN::DATAHUB::Topic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
