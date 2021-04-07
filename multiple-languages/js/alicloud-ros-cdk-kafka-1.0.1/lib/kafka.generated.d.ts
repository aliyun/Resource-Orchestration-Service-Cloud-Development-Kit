import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::KAFKA::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
     *   4: Instance of the public type
     *   5: Instance of the VPC type
     */
    readonly deployType: number | ros.IResolvable;
    /**
     * @Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
     */
    readonly diskSize: number | ros.IResolvable;
    /**
     * @Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
     * 0: Ultra disk
     * 1: SSD
     */
    readonly diskType: string | ros.IResolvable;
    /**
     * @Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.
     * The default value of this parameter varies with different peak traffic values.
     * Additional fees are charged if the default values are exceeded.
     *  Different specifications have different default values, and extra fees are charged.
     * For more information, see Billing.
     */
    readonly topicQuota: number | ros.IResolvable;
    /**
     * @Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
     */
    readonly deployOption?: RosInstance.DeployOptionProperty | ros.IResolvable;
    /**
     * @Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
     * This parameter must be specified when the DeployType parameter is set to 4.
     */
    readonly eipMax?: number | ros.IResolvable;
    /**
     * @Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
     * For more information about the value range, see Billing.
     */
    readonly ioMax?: number | ros.IResolvable;
    /**
     * @Property ioMaxSpec: Flow specification (recommended)
     * The IoMax and IoMaxSpec must be optional.
     * When filling in at the same time, subject to IoMaxSpec.
     * It is recommended that you only fill in the flow specification
     *
     */
    readonly ioMaxSpec?: string | ros.IResolvable;
    /**
     * @Property payType: Pay by hour or month.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
     * professional: Professional Edition
     * normal: Normal version
     */
    readonly specType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::KAFKA::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KAFKA::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceId: Id of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Name: Name of the instance.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute OrderId: Id of the order.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
     *   4: Instance of the public type
     *   5: Instance of the VPC type
     */
    deployType: number | ros.IResolvable;
    /**
     * @Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
     */
    diskSize: number | ros.IResolvable;
    /**
     * @Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
     * 0: Ultra disk
     * 1: SSD
     */
    diskType: string | ros.IResolvable;
    /**
     * @Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.
     * The default value of this parameter varies with different peak traffic values.
     * Additional fees are charged if the default values are exceeded.
     *  Different specifications have different default values, and extra fees are charged.
     * For more information, see Billing.
     */
    topicQuota: number | ros.IResolvable;
    /**
     * @Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
     */
    deployOption: RosInstance.DeployOptionProperty | ros.IResolvable | undefined;
    /**
     * @Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
     * This parameter must be specified when the DeployType parameter is set to 4.
     */
    eipMax: number | ros.IResolvable | undefined;
    /**
     * @Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
     * For more information about the value range, see Billing.
     */
    ioMax: number | ros.IResolvable | undefined;
    /**
     * @Property ioMaxSpec: Flow specification (recommended)
     * The IoMax and IoMaxSpec must be optional.
     * When filling in at the same time, subject to IoMaxSpec.
     * It is recommended that you only fill in the flow specification
     *
     */
    ioMaxSpec: string | ros.IResolvable | undefined;
    /**
     * @Property payType: Pay by hour or month.
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
     * professional: Professional Edition
     * normal: Normal version
     */
    specType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::KAFKA::Instance`.
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
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface DeployOptionProperty {
        /**
         * @Property isEipInner: Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
     *   true: The instance supports EIP mode.
     *   false: The instance does not support EIP mode.
     * This parameter must be consistent with the instance type.
     * Set the parameter to true for instances of the Internet and VPC type or to false for instances of the VPC type.
         */
        readonly isEipInner?: boolean | ros.IResolvable;
        /**
         * @Property vpcId: The ID of the VPC on which you want to deploy the instance.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property zoneId: The ID of the zone where you want to deploy the instance.
     * The zone ID of the instance must be the same as that of the vSwitch.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property username: The new user name for the instance.
     * This parameter is supported only for instances of the Internet and VPC type.
     * Support characters (uppercase and lowercase), numbers, length 8-40
         */
        readonly username?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch associated with the VPC.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property securityGroup: The security group of the instance.
     * If you do not specify this parameter, Message Queue for Apache Kafka automatically
     * configures a security group for the instance. If you specify this parameter,
     * you must create the specified security group in advance.
     * For more information, see Create a security group.
         */
        readonly securityGroup?: string | ros.IResolvable;
        /**
         * @Property deployModule: The deployment mode of the instance. Valid values:
     *   vpc: virtual private cloud (VPC)
     *   eip: Internet and VPC
     * The deployment mode of the instance must be consistent with the instance type.
     * Set this value to vpc if your instance type is VPC.
     * Set this value to eip if your instance type is Internet and VPC.
         */
        readonly deployModule: string | ros.IResolvable;
        /**
         * @Property isSetUserAndPassword: Specifies whether to set a new user name and password for instance. Valid values:
     *   true: Set a new user name and password.
     *   false: Do not set a new user name and password.
     * This parameter is supported only for instances of the Internet and VPC type.
         */
        readonly isSetUserAndPassword?: boolean | ros.IResolvable;
        /**
         * @Property name: The new name of the instance.
         */
        readonly name?: string | ros.IResolvable;
        /**
         * @Property password: The new password for the instance.
     * This parameter is supported only for instances of the Internet and VPC type.
     * Support characters (uppercase and lowercase), numbers, length 8-40,
     * containing at least one lowercase letter, one uppercase letter, and one number
         */
        readonly password?: string | ros.IResolvable;
    }
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
 * Properties for defining a `ALIYUN::KAFKA::Topic`
 */
export interface RosTopicProps {
    /**
     * @Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * You can call the GetInstanceList operation to query instances.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property remark: The description of the topic. The value of this parameter must meet the following
     * requirements:
     * The value can only contain letters, digits, hyphens (-), and underscores (_).
     * The value must be 3 to 64 characters in length.
     */
    readonly remark: string | ros.IResolvable;
    /**
     * @Property topic: The name of the topic. The value of this parameter must meet the following requirements:
     * The name can only contain letters, digits, hyphens (-), and underscores (_).
     * The name must be 3 to 64 characters in length, and will be automatically truncated
     * if it contains more characters.
     * The name cannot be modified after being created.
     */
    readonly topic: string | ros.IResolvable;
    /**
     * @Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    readonly partitionNum?: number | ros.IResolvable;
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
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Topic: Topic name.
     */
    readonly attrTopic: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * You can call the GetInstanceList operation to query instances.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property remark: The description of the topic. The value of this parameter must meet the following
     * requirements:
     * The value can only contain letters, digits, hyphens (-), and underscores (_).
     * The value must be 3 to 64 characters in length.
     */
    remark: string | ros.IResolvable;
    /**
     * @Property topic: The name of the topic. The value of this parameter must meet the following requirements:
     * The name can only contain letters, digits, hyphens (-), and underscores (_).
     * The name must be 3 to 64 characters in length, and will be automatically truncated
     * if it contains more characters.
     * The name cannot be modified after being created.
     */
    topic: string | ros.IResolvable;
    /**
     * @Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    partitionNum: number | ros.IResolvable | undefined;
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
