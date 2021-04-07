import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DATAHUB::Project`
 */
export interface RosProjectProps {
    /**
     * @Property comment: The comment of project.
     */
    readonly comment: string | ros.IResolvable;
    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string | ros.IResolvable;
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
    readonly attrProjectName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property comment: The comment of project.
     */
    comment: string | ros.IResolvable;
    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    projectName: string | ros.IResolvable;
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
    readonly comment: string | ros.IResolvable;
    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
     */
    readonly recordType: string | ros.IResolvable;
    /**
     * @Property topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * @Property lifecycle: Data storage life cycle.
     */
    readonly lifecycle?: number | ros.IResolvable;
    /**
     * @Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
     */
    readonly recordSchema?: string | ros.IResolvable;
    /**
     * @Property shardCount: Initial shard number.
     */
    readonly shardCount?: number | ros.IResolvable;
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
    readonly attrProjectName: ros.IResolvable;
    /**
     * @Attribute TopicName: Topic name
     */
    readonly attrTopicName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property comment: The comment of topic.
     */
    comment: string | ros.IResolvable;
    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
     */
    recordType: string | ros.IResolvable;
    /**
     * @Property topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    topicName: string | ros.IResolvable;
    /**
     * @Property lifecycle: Data storage life cycle.
     */
    lifecycle: number | ros.IResolvable | undefined;
    /**
     * @Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
     */
    recordSchema: string | ros.IResolvable | undefined;
    /**
     * @Property shardCount: Initial shard number.
     */
    shardCount: number | ros.IResolvable | undefined;
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
