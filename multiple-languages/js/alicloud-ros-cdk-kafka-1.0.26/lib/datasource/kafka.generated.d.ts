import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KAFKA::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KAFKA::Instance";
    /**
     * @Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
     */
    readonly attrAllConfig: ros.IResolvable;
    /**
     * @Attribute AllowedList: White list.
     */
    readonly attrAllowedList: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DeployType: Deployment method.
     */
    readonly attrDeployType: ros.IResolvable;
    /**
     * @Attribute DiskSize: Disk size.
     */
    readonly attrDiskSize: ros.IResolvable;
    /**
     * @Attribute DiskType: Disk type.
     */
    readonly attrDiskType: ros.IResolvable;
    /**
     * @Attribute DomainEndpoint: The domain name access point of the default access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrDomainEndpoint: ros.IResolvable;
    /**
     * @Attribute EipMax: Peak public network traffic.
     */
    readonly attrEipMax: ros.IResolvable;
    /**
     * @Attribute EndPoint: Access point.
     */
    readonly attrEndPoint: ros.IResolvable;
    /**
     * @Attribute ExpiredTime: Expiration time.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: Note name.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute IoMax: Peak flow.
     */
    readonly attrIoMax: ros.IResolvable;
    /**
     * @Attribute IoMaxSpec: Flow specifications (recommended).
     */
    readonly attrIoMaxSpec: ros.IResolvable;
    /**
     * @Attribute MsgRetain: Message save time.
     */
    readonly attrMsgRetain: ros.IResolvable;
    /**
     * @Attribute PaymentType: The paymen type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SaslDomainEndpoint: The domain name access point of the SASL access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrSaslDomainEndpoint: ros.IResolvable;
    /**
     * @Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue. The value is 0.10.2 or 2.2.0.
     */
    readonly attrServiceVersion: ros.IResolvable;
    /**
     * @Attribute SpecType: Instance type.
     */
    readonly attrSpecType: ros.IResolvable;
    /**
     * @Attribute SslDomainEndpoint: The domain name of the SSL access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrSslDomainEndpoint: ros.IResolvable;
    /**
     * @Attribute SslEndPoint: External access point.
     */
    readonly attrSslEndPoint: ros.IResolvable;
    /**
     * @Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TopicNumLimit: Maximum number of topic creation.
     */
    readonly attrTopicNumLimit: ros.IResolvable;
    /**
     * @Attribute VSwitchId: Switch id.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: VpcId.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: The ID of the zone in which the instance is deployed.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instances
 */
export interface RosInstancesProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KAFKA::Instances`, which is used to query the information about ApsaraMQ for Kafka instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KAFKA::Instances";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
 */
export interface RosTopicProps {
    /**
     * @Property instanceId: Resource id.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property topic: Topic Name.
     */
    readonly topic: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KAFKA::Topic`, which is used to query the information about a topic.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
 */
export declare class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KAFKA::Topic";
    /**
     * @Attribute CompactTopic: Can log merge.
     */
    readonly attrCompactTopic: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: Resource id.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute LocalTopic: Whether to store locally.
     */
    readonly attrLocalTopic: ros.IResolvable;
    /**
     * @Attribute PartitionNum: Number of partitions.
     */
    readonly attrPartitionNum: ros.IResolvable;
    /**
     * @Attribute Remark: Remarks.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * @Attribute StatusName: Meaning of status value.
     */
    readonly attrStatusName: ros.IResolvable;
    /**
     * @Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute Topic: Topic Name.
     */
    readonly attrTopic: ros.IResolvable;
    /**
     * @Attribute TopicStatus: The Topic status.
     */
    readonly attrTopicStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Resource id.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property topic: Topic Name.
     */
    topic: string | ros.IResolvable;
    /**
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
/**
 * Properties for defining a `RosTopics`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topics
 */
export interface RosTopicsProps {
    /**
     * @Property instanceId: Resource id.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property topic: Topic Name.
     */
    readonly topic: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KAFKA::Topics`, which is used to query the information about topics.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topics` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topics
 */
export declare class RosTopics extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KAFKA::Topics";
    /**
     * @Attribute Topics: The list of topics.
     */
    readonly attrTopics: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Resource id.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property topic: Topic Name.
     */
    topic: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
