import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Group`
 */
export interface RosGroupProps {
    /**
     * @Property groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
     * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
     * A group ID ranges from 7 to 64 bytes.
     * Once a group ID is created, it cannot be edited anymore.
     */
    readonly groupId: string;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;
    /**
     * @Property groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
     * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
     * http: represents the Group ID was created only for the HTTP protocol messaging.
     */
    readonly groupType?: string;
    /**
     * @Property remark: The remarks on the request.
     */
    readonly remark?: string;
}
/**
 * A ROS template type:  `ALIYUN::ROCKETMQ::Group`
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Group";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GroupId: Group ID
     */
    readonly attrGroupId: any;
    /**
     * @Attribute GroupType: Group Type
     */
    readonly attrGroupType: any;
    /**
     * @Attribute InstanceId: Instance ID
     */
    readonly attrInstanceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
     * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
     * A group ID ranges from 7 to 64 bytes.
     * Once a group ID is created, it cannot be edited anymore.
     */
    groupId: string;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string;
    /**
     * @Property groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
     * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
     * http: represents the Group ID was created only for the HTTP protocol messaging.
     */
    groupType: string | undefined;
    /**
     * @Property remark: The remarks on the request.
     */
    remark: string | undefined;
    /**
     * Create a new `ALIYUN::ROCKETMQ::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::ROCKETMQ::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
     */
    readonly instanceName: string;
    /**
     * @Property remark: The remark of instance.
     */
    readonly remark?: string;
}
/**
 * A ROS template type:  `ALIYUN::ROCKETMQ::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternalEndpoint: any;
    /**
     * @Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternetEndpoint: any;
    /**
     * @Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternetSecureEndpoint: any;
    /**
     * @Attribute InstanceId: Instance ID created
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute InstanceType: Instance Type
     */
    readonly attrInstanceType: any;
    /**
     * @Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrTcpEndpoint: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
     */
    instanceName: string;
    /**
     * @Property remark: The remark of instance.
     */
    remark: string | undefined;
    /**
     * Create a new `ALIYUN::ROCKETMQ::Instance`.
     *
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
 * Properties for defining a `ALIYUN::ROCKETMQ::Topic`
 */
export interface RosTopicProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;
    /**
     * @Property messageType: The type of the message. Valid values:
     * 0: normal message
     * 1: partitionally ordered message
     * 2: globally ordered message
     * 4: transactional message
     * 5: scheduled/delayed message
     */
    readonly messageType: number;
    /**
     * @Property topic: The name of the topic you want to create.
     * Note:
     * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
     * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
     * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
     */
    readonly topic: string;
    /**
     * @Property perm: Set the read-write mode for the topic Valid values.:
     * 6: Both read and write operations are supported.
     * 4: Write operation is prohibited.
     * 2: Read operation is prohibited.
     */
    readonly perm?: number;
    /**
     * @Property remark: The remarks on the request. This parameter can be left blank.
     */
    readonly remark?: string;
}
/**
 * A ROS template type:  `ALIYUN::ROCKETMQ::Topic`
 */
export declare class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Topic";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute MessageType: The type of the message.
     */
    readonly attrMessageType: any;
    /**
     * @Attribute Topic: The name of the topic.
     */
    readonly attrTopic: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string;
    /**
     * @Property messageType: The type of the message. Valid values:
     * 0: normal message
     * 1: partitionally ordered message
     * 2: globally ordered message
     * 4: transactional message
     * 5: scheduled/delayed message
     */
    messageType: number;
    /**
     * @Property topic: The name of the topic you want to create.
     * Note:
     * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
     * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
     * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
     */
    topic: string;
    /**
     * @Property perm: Set the read-write mode for the topic Valid values.:
     * 6: Both read and write operations are supported.
     * 4: Write operation is prohibited.
     * 2: Read operation is prohibited.
     */
    perm: number | undefined;
    /**
     * @Property remark: The remarks on the request. This parameter can be left blank.
     */
    remark: string | undefined;
    /**
     * Create a new `ALIYUN::ROCKETMQ::Topic`.
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
