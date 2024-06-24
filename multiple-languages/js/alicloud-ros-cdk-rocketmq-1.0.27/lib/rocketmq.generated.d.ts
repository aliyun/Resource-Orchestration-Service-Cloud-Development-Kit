import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-group
 */
export interface RosGroupProps {
    /**
     * @Property groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
     * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
     * A group ID ranges from 7 to 64 bytes.
     * Once a group ID is created, it cannot be edited anymore.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
     * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
     * http: represents the Group ID was created only for the HTTP protocol messaging.
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * @Property remark: The remarks on the request.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ::Group`, which is used to create a Group ID on the ROCKETMQ client. The Group ID that you create is used to publish and subscribe to messages.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-group
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Group";
    /**
     * @Attribute GroupId: Group ID
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute GroupType: Group Type
     */
    readonly attrGroupType: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance ID
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
     * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
     * A group ID ranges from 7 to 64 bytes.
     * Once a group ID is created, it cannot be edited anymore.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
     * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
     * http: represents the Group ID was created only for the HTTP protocol messaging.
     */
    groupType: string | ros.IResolvable | undefined;
    /**
     * @Property remark: The remarks on the request.
     */
    remark: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether delete all topics and groups of the instance and then delete instance. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property remark: The remark of instance.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ::Instance`, which is used to create a Standard Edition instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Instance";
    /**
     * @Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternalEndpoint: ros.IResolvable;
    /**
     * @Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternetEndpoint: ros.IResolvable;
    /**
     * @Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrHttpInternetSecureEndpoint: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance ID created
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: Instance name
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceType: Instance Type
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    readonly attrTcpEndpoint: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether delete all topics and groups of the instance and then delete instance. Default is false
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property remark: The remark of instance.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
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
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-topic
 */
export interface RosTopicProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property messageType: The type of the message. Valid values:
     * 0: normal message
     * 1: partitionally ordered message
     * 2: globally ordered message
     * 4: transactional message
     * 5: scheduled\/delayed message
     */
    readonly messageType: number | ros.IResolvable;
    /**
     * @Property topic: The name of the topic you want to create.
     * Note:
     * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
     * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
     * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
     */
    readonly topic: string | ros.IResolvable;
    /**
     * @Property remark: The remarks on the request. This parameter can be left blank.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ::Topic`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-topic
 */
export declare class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Topic";
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute MessageType: The type of the message.
     */
    readonly attrMessageType: ros.IResolvable;
    /**
     * @Attribute Topic: The name of the topic.
     */
    readonly attrTopic: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property messageType: The type of the message. Valid values:
     * 0: normal message
     * 1: partitionally ordered message
     * 2: globally ordered message
     * 4: transactional message
     * 5: scheduled\/delayed message
     */
    messageType: number | ros.IResolvable;
    /**
     * @Property topic: The name of the topic you want to create.
     * Note:
     * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
     * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
     * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
     */
    topic: string | ros.IResolvable;
    /**
     * @Property remark: The remarks on the request. This parameter can be left blank.
     */
    remark: string | ros.IResolvable | undefined;
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
