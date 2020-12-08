import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::KAFKA::Topic`
 */
export interface RosTopicProps {
    /**
     * @Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * You can call the GetInstanceList operation to query instances.
     */
    readonly instanceId: string;
    /**
     * @Property remark: The description of the topic. The value of this parameter must meet the following
     * requirements:
     * The value can only contain letters, digits, hyphens (-), and underscores (_).
     * The value must be 3 to 64 characters in length.
     */
    readonly remark: string;
    /**
     * @Property topic: The name of the topic. The value of this parameter must meet the following requirements:
     * The name can only contain letters, digits, hyphens (-), and underscores (_).
     * The name must be 3 to 64 characters in length, and will be automatically truncated
     * if it contains more characters.
     * The name cannot be modified after being created.
     */
    readonly topic: string;
    /**
     * @Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    readonly partitionNum?: number;
}
/**
 * A ROS template type:  `ALIYUN::KAFKA::Topic`
 */
export declare class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KAFKA::Topic";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
You can call the GetInstanceList operation to query instances.
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute Topic: Topic name.
     */
    readonly attrTopic: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * You can call the GetInstanceList operation to query instances.
     */
    instanceId: string;
    /**
     * @Property remark: The description of the topic. The value of this parameter must meet the following
     * requirements:
     * The value can only contain letters, digits, hyphens (-), and underscores (_).
     * The value must be 3 to 64 characters in length.
     */
    remark: string;
    /**
     * @Property topic: The name of the topic. The value of this parameter must meet the following requirements:
     * The name can only contain letters, digits, hyphens (-), and underscores (_).
     * The name must be 3 to 64 characters in length, and will be automatically truncated
     * if it contains more characters.
     * The name cannot be modified after being created.
     */
    topic: string;
    /**
     * @Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    partitionNum: number | undefined;
    /**
     * Create a new `ALIYUN::KAFKA::Topic`.
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
