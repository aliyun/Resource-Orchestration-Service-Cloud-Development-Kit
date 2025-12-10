import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
 */
export interface RosConsumerGroupProps {
    /**
     * @Property consumerGroupId: The ID of the consumer group.
     */
    readonly consumerGroupId: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance to which the consumer group belongs.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::ConsumerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
 */
export declare class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::ConsumerGroup";
    /**
     * @Attribute ConsumeRetryPolicy: The consumption retry policy that you want to configure for the consumer group.
     */
    readonly attrConsumeRetryPolicy: ros.IResolvable;
    /**
     * @Attribute ConsumerGroupId: The ID of the consumer group.
     */
    readonly attrConsumerGroupId: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the consumer group was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DeliveryOrderType: The message delivery order of the consumer group.
     */
    readonly attrDeliveryOrderType: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the RocketMQ instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Remark: The remarks on the consumer group.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * @Attribute Status: The state of the consumer group.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the consumer group was last updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property consumerGroupId: The ID of the consumer group.
     */
    consumerGroupId: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance to which the consumer group belongs.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosConsumerGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export interface RosConsumerGroupsProps {
    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::ConsumerGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export declare class RosConsumerGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::ConsumerGroups";
    /**
     * @Attribute ConsumerGroupIds: The list of consumer group IDs.
     */
    readonly attrConsumerGroupIds: ros.IResolvable;
    /**
     * @Attribute ConsumerGroups: The list of consumer groups.
     */
    readonly attrConsumerGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupsProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceId: The ID of the instance that you want to query.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::Instance";
    /**
     * @Attribute AccountInfo: The account information.
     */
    readonly attrAccountInfo: ros.IResolvable;
    /**
     * @Attribute AclInfo: The information about access control.
     */
    readonly attrAclInfo: ros.IResolvable;
    /**
     * @Attribute Bid: The business ID (BID) of the commodity.
     */
    readonly attrBid: ros.IResolvable;
    /**
     * @Attribute CommodityCode: The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the instance was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute ExpireTime: The time when the instance expires.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * @Attribute ExtConfig: The extended configurations. We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
     */
    readonly attrExtConfig: ros.IResolvable;
    /**
     * @Attribute GroupCount: The number of groups.
     */
    readonly attrGroupCount: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the RocketMQ instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: The name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceQuotas: The instance quotas.
     */
    readonly attrInstanceQuotas: ros.IResolvable;
    /**
     * @Attribute NetworkInfo: The network information.
     */
    readonly attrNetworkInfo: ros.IResolvable;
    /**
     * @Attribute PaymentType: The billing method of the instance.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute ProductInfo: The extended configurations of the instance.
     */
    readonly attrProductInfo: ros.IResolvable;
    /**
     * @Attribute ReleaseTime: The time when the instance was released.
     */
    readonly attrReleaseTime: ros.IResolvable;
    /**
     * @Attribute Remark: The description of the instance.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SeriesCode: The primary edition of the instance.
     */
    readonly attrSeriesCode: ros.IResolvable;
    /**
     * @Attribute ServiceCode: The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
     */
    readonly attrServiceCode: ros.IResolvable;
    /**
     * @Attribute Software: The instance software information.
     */
    readonly attrSoftware: ros.IResolvable;
    /**
     * @Attribute StartTime: The time when the instance was started.
     */
    readonly attrStartTime: ros.IResolvable;
    /**
     * @Attribute Status: The status of the instance.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute SubSeriesCode: The sub-category edition of the instance.
     */
    readonly attrSubSeriesCode: ros.IResolvable;
    /**
     * @Attribute Tags: The resource tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TopicCount: The number of topics.
     */
    readonly attrTopicCount: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the instance was last modified.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * @Attribute UserId: The ID of the user who owns the instance.
     */
    readonly attrUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance that you want to query.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-topic
 */
export interface RosTopicProps {
    /**
     * @Property instanceId: The ID of the instance to which the topic belongs.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property topicName: The name of the topic.
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::Topic`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-topic
 */
export declare class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::Topic";
    /**
     * @Attribute CreateTime: The time when the topic was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the RocketMQ instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute MessageType: The message type of the topic.
     */
    readonly attrMessageType: ros.IResolvable;
    /**
     * @Attribute Remark: The remarks on the topic.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * @Attribute Status: The state of the topic.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute TopicName: The name of the topic.
     */
    readonly attrTopicName: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the topic was last updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance to which the topic belongs.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property topicName: The name of the topic.
     */
    topicName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
