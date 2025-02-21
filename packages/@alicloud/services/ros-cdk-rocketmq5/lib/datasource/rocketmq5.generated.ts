// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosConsumerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('consumerGroupId', ros.requiredValidator)(properties.consumerGroupId));
    errors.collect(ros.propertyValidator('consumerGroupId', ros.validateString)(properties.consumerGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosConsumerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::ConsumerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::ConsumerGroup` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'ConsumerGroupId': ros.stringToRosTemplate(properties.consumerGroupId),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::ConsumerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
 */
export class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::ConsumerGroup";

    /**
     * @Attribute ConsumeRetryPolicy: The consumption retry policy that you want to configure for the consumer group.
     */
    public readonly attrConsumeRetryPolicy: ros.IResolvable;

    /**
     * @Attribute ConsumerGroupId: The ID of the consumer group.
     */
    public readonly attrConsumerGroupId: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the consumer group was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DeliveryOrderType: The message delivery order of the consumer group.
     */
    public readonly attrDeliveryOrderType: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the RocketMQ instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Remark: The remarks on the consumer group.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * @Attribute Status: The state of the consumer group.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the consumer group was last updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property consumerGroupId: The ID of the consumer group.
     */
    public consumerGroupId: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance to which the consumer group belongs.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumeRetryPolicy = this.getAtt('ConsumeRetryPolicy');
        this.attrConsumerGroupId = this.getAtt('ConsumerGroupId');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDeliveryOrderType = this.getAtt('DeliveryOrderType');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrRemark = this.getAtt('Remark');
        this.attrStatus = this.getAtt('Status');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.consumerGroupId = props.consumerGroupId;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            consumerGroupId: this.consumerGroupId,
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosConsumerGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosConsumerGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::ConsumerGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::ConsumerGroups` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::ConsumerGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export class RosConsumerGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::ConsumerGroups";

    /**
     * @Attribute ConsumerGroupIds: The list of consumer group IDs.
     */
    public readonly attrConsumerGroupIds: ros.IResolvable;

    /**
     * @Attribute ConsumerGroups: The list of consumer groups.
     */
    public readonly attrConsumerGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumerGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumerGroupIds = this.getAtt('ConsumerGroupIds');
        this.attrConsumerGroups = this.getAtt('ConsumerGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::Instance";

    /**
     * @Attribute AccountInfo: The account information.
     */
    public readonly attrAccountInfo: ros.IResolvable;

    /**
     * @Attribute AclInfo: The information about access control.
     */
    public readonly attrAclInfo: ros.IResolvable;

    /**
     * @Attribute Bid: The business ID (BID) of the commodity.
     */
    public readonly attrBid: ros.IResolvable;

    /**
     * @Attribute CommodityCode: The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
     */
    public readonly attrCommodityCode: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the instance was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute ExpireTime: The time when the instance expires.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * @Attribute ExtConfig: The extended configurations. We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
     */
    public readonly attrExtConfig: ros.IResolvable;

    /**
     * @Attribute GroupCount: The number of groups.
     */
    public readonly attrGroupCount: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the RocketMQ instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: The name of the instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceQuotas: The instance quotas.
     */
    public readonly attrInstanceQuotas: ros.IResolvable;

    /**
     * @Attribute NetworkInfo: The network information.
     */
    public readonly attrNetworkInfo: ros.IResolvable;

    /**
     * @Attribute PaymentType: The billing method of the instance.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute ProductInfo: The extended configurations of the instance.
     */
    public readonly attrProductInfo: ros.IResolvable;

    /**
     * @Attribute ReleaseTime: The time when the instance was released.
     */
    public readonly attrReleaseTime: ros.IResolvable;

    /**
     * @Attribute Remark: The description of the instance.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SeriesCode: The primary edition of the instance.
     */
    public readonly attrSeriesCode: ros.IResolvable;

    /**
     * @Attribute ServiceCode: The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
     */
    public readonly attrServiceCode: ros.IResolvable;

    /**
     * @Attribute Software: The instance software information.
     */
    public readonly attrSoftware: ros.IResolvable;

    /**
     * @Attribute StartTime: The time when the instance was started.
     */
    public readonly attrStartTime: ros.IResolvable;

    /**
     * @Attribute Status: The status of the instance.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute SubSeriesCode: The sub-category edition of the instance.
     */
    public readonly attrSubSeriesCode: ros.IResolvable;

    /**
     * @Attribute Tags: The resource tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TopicCount: The number of topics.
     */
    public readonly attrTopicCount: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the instance was last modified.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute UserId: The ID of the user who owns the instance.
     */
    public readonly attrUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance that you want to query.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountInfo = this.getAtt('AccountInfo');
        this.attrAclInfo = this.getAtt('AclInfo');
        this.attrBid = this.getAtt('Bid');
        this.attrCommodityCode = this.getAtt('CommodityCode');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrExpireTime = this.getAtt('ExpireTime');
        this.attrExtConfig = this.getAtt('ExtConfig');
        this.attrGroupCount = this.getAtt('GroupCount');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceQuotas = this.getAtt('InstanceQuotas');
        this.attrNetworkInfo = this.getAtt('NetworkInfo');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrProductInfo = this.getAtt('ProductInfo');
        this.attrReleaseTime = this.getAtt('ReleaseTime');
        this.attrRemark = this.getAtt('Remark');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSeriesCode = this.getAtt('SeriesCode');
        this.attrServiceCode = this.getAtt('ServiceCode');
        this.attrSoftware = this.getAtt('Software');
        this.attrStartTime = this.getAtt('StartTime');
        this.attrStatus = this.getAtt('Status');
        this.attrSubSeriesCode = this.getAtt('SubSeriesCode');
        this.attrTags = this.getAtt('Tags');
        this.attrTopicCount = this.getAtt('TopicCount');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrUserId = this.getAtt('UserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosTopicProps`
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the result of the validation.
 */
function RosTopicPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    return errors.wrap('supplied properties not correct for "RosTopicProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::Topic` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::Topic` resource.
 */
// @ts-ignore TS6133
function rosTopicPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTopicPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'TopicName': ros.stringToRosTemplate(properties.topicName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::Topic`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-topic
 */
export class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::Topic";

    /**
     * @Attribute CreateTime: The time when the topic was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the RocketMQ instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute MessageType: The message type of the topic.
     */
    public readonly attrMessageType: ros.IResolvable;

    /**
     * @Attribute Remark: The remarks on the topic.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * @Attribute Status: The state of the topic.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute TopicName: The name of the topic.
     */
    public readonly attrTopicName: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the topic was last updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance to which the topic belongs.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property topicName: The name of the topic.
     */
    public topicName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrMessageType = this.getAtt('MessageType');
        this.attrRemark = this.getAtt('Remark');
        this.attrStatus = this.getAtt('Status');
        this.attrTopicName = this.getAtt('TopicName');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.topicName = props.topicName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            topicName: this.topicName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
