import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
 */
export interface RosConsumerGroupProps {
    /**
     * @Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
     */
    readonly consumeRetryPolicy: RosConsumerGroup.ConsumeRetryPolicyProperty | ros.IResolvable;
    /**
     * @Property consumerGroupId: The ID of the consumer group to be created. Used to identify consumer groups, globally unique.
     * The value description is as follows:
     * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
     * Length limit: 1-60 characters.
     */
    readonly consumerGroupId: string | ros.IResolvable;
    /**
     * @Property deliveryOrderType: Delivery sequence of the consumer group to be created.
     */
    readonly deliveryOrderType: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property remark: The remark of the consumer group to be created.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ5::ConsumerGroup`, which is used to create a consumer group in ApsaraMQ for RocketMQ 5.0.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
 */
export declare class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ5::ConsumerGroup";
    /**
     * @Attribute ConsumerGroupId: The ID of the consumer group.
     */
    readonly attrConsumerGroupId: ros.IResolvable;
    /**
     * @Attribute DeliveryOrderType: Delivery sequence of consumer group.
     */
    readonly attrDeliveryOrderType: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
     */
    consumeRetryPolicy: RosConsumerGroup.ConsumeRetryPolicyProperty | ros.IResolvable;
    /**
     * @Property consumerGroupId: The ID of the consumer group to be created. Used to identify consumer groups, globally unique.
     * The value description is as follows:
     * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
     * Length limit: 1-60 characters.
     */
    consumerGroupId: string | ros.IResolvable;
    /**
     * @Property deliveryOrderType: Delivery sequence of the consumer group to be created.
     */
    deliveryOrderType: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property remark: The remark of the consumer group to be created.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosConsumerGroup {
    /**
     * @stability external
     */
    interface ConsumeRetryPolicyProperty {
        /**
         * @Property retryPolicy: Retry policy type.
         */
        readonly retryPolicy: string | ros.IResolvable;
        /**
         * @Property maxRetryTimes: Maximum number of retries.
         */
        readonly maxRetryTimes?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance
 */
export interface RosInstanceProps {
    /**
     * @Property internetInfo: Public network configuration information.
     */
    readonly internetInfo: RosInstance.InternetInfoProperty | ros.IResolvable;
    /**
     * @Property productInfo: Instance specification information.
     */
    readonly productInfo: RosInstance.ProductInfoProperty | ros.IResolvable;
    /**
     * @Property seriesCode: The primary series code of the instance.
     */
    readonly seriesCode: string | ros.IResolvable;
    /**
     * @Property subSeriesCode: The sub series code of the instance.
     */
    readonly subSeriesCode: string | ros.IResolvable;
    /**
     * @Property vpcInfo: Private network configuration information.
     */
    readonly vpcInfo: RosInstance.VpcInfoProperty | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to auto-renew. This parameter takes effect only when the PaymentType=Subscription.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: Automatic renewal period. This parameter is valid only when automatic renewal is enabled. Unit: Month.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property instanceName: The name of the instance to be created.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property paymentType: The sub series code of the instance.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 6, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The period unit for the duration of the instance.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property remark: The remark of instance.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ5::Instance`, which is used to create an ApsaraMQ for RocketMQ 5.0 instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ5::Instance";
    /**
     * @Attribute InstanceId: Instance ID created.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: Instance name.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InternetEndpoint: Internet endpoint.
     */
    readonly attrInternetEndpoint: ros.IResolvable;
    /**
     * @Attribute VpcEndpoint: VPC endpoint.
     */
    readonly attrVpcEndpoint: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property internetInfo: Public network configuration information.
     */
    internetInfo: RosInstance.InternetInfoProperty | ros.IResolvable;
    /**
     * @Property productInfo: Instance specification information.
     */
    productInfo: RosInstance.ProductInfoProperty | ros.IResolvable;
    /**
     * @Property seriesCode: The primary series code of the instance.
     */
    seriesCode: string | ros.IResolvable;
    /**
     * @Property subSeriesCode: The sub series code of the instance.
     */
    subSeriesCode: string | ros.IResolvable;
    /**
     * @Property vpcInfo: Private network configuration information.
     */
    vpcInfo: RosInstance.VpcInfoProperty | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to auto-renew. This parameter takes effect only when the PaymentType=Subscription.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: Automatic renewal period. This parameter is valid only when automatic renewal is enabled. Unit: Month.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The name of the instance to be created.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: The sub series code of the instance.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 6, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The period unit for the duration of the instance.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property remark: The remark of instance.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
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
    interface InternetInfoProperty {
        /**
         * @Property ipWhitelist: Public network access whitelist address segment.
         */
        readonly ipWhitelist?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property internetSpec: Whether to enable public network access.
         */
        readonly internetSpec: string | ros.IResolvable;
        /**
         * @Property flowOutBandwidth: Public network bandwidth specification. Unit: Mb\/s.
     * It needs to be filled in only when the billing type of the public network is billed by fixed bandwidth.
         */
        readonly flowOutBandwidth?: number | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface ProductInfoProperty {
        /**
         * @Property sendReceiveRatio: The ratio of messages sent and received.
         */
        readonly sendReceiveRatio?: number | ros.IResolvable;
        /**
         * @Property messageRetentionTime: The message storage time. Unit: Hour.
         */
        readonly messageRetentionTime?: number | ros.IResolvable;
        /**
         * @Property autoScaling: Whether to enable out-of-spec burst resiliency.
     * After the elastic burst capability is enabled, the message queue RocketMQ allows the instance to exceed the TPS limited by the basic specification within a certain range, and the part exceeding the basic specification requires additional elastic specification fees.
         */
        readonly autoScaling?: boolean | ros.IResolvable;
        /**
         * @Property msgProcessSpec: Message processing specification.
         */
        readonly msgProcessSpec: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface VpcInfoProperty {
        /**
         * @Property vpcId: ID of the VPC associated with the instance to be created.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: IDs of the vSwitchs associated with the instance to be created.
     * **Note**: Only one is required for VSwitchIds and VSwitchId. When both are filled in, VSwitchIds overwrites VSwitchId.
         */
        readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property vSwitchId: ID of the vSwitch associated with the instance to be created.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: ID of the security group associated with the instance to be created. Required when creating serverless.
         */
        readonly securityGroupId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
 */
export interface RosTopicProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property messageType: The message type of the topic to be created. Valid values:
     * NORMAL
     * FIFO
     * DELAY
     * TRANSACTION
     */
    readonly messageType: string | ros.IResolvable;
    /**
     * @Property topicName: The name of the topic to be created is used to identify the topic and is globally unique.
     * Valid values:
     * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
     * Length limit: 1-60 characters.
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * @Property remark: The remark of the topic to be created.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ5::Topic`, which is used to create a topic for a Message Queue for Apache RocketMQ V5.0 instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
 */
export declare class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ5::Topic";
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute MessageType: The type of the message.
     */
    readonly attrMessageType: ros.IResolvable;
    /**
     * @Attribute TopicName: The name of the topic.
     */
    readonly attrTopicName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property messageType: The message type of the topic to be created. Valid values:
     * NORMAL
     * FIFO
     * DELAY
     * TRANSACTION
     */
    messageType: string | ros.IResolvable;
    /**
     * @Property topicName: The name of the topic to be created is used to identify the topic and is globally unique.
     * Valid values:
     * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
     * Length limit: 1-60 characters.
     */
    topicName: string | ros.IResolvable;
    /**
     * @Property remark: The remark of the topic to be created.
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
