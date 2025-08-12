// Generated from the AliCloud ROS Resource Specification

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
    if(properties.consumerGroupId && (Array.isArray(properties.consumerGroupId) || (typeof properties.consumerGroupId) === 'string')) {
        errors.collect(ros.propertyValidator('consumerGroupId', ros.validateLength)({
            data: properties.consumerGroupId.length,
            min: 1,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('consumerGroupId', ros.validateString)(properties.consumerGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('consumeRetryPolicy', ros.requiredValidator)(properties.consumeRetryPolicy));
    errors.collect(ros.propertyValidator('consumeRetryPolicy', RosConsumerGroup_ConsumeRetryPolicyPropertyValidator)(properties.consumeRetryPolicy));
    errors.collect(ros.propertyValidator('deliveryOrderType', ros.requiredValidator)(properties.deliveryOrderType));
    if(properties.deliveryOrderType && (typeof properties.deliveryOrderType) !== 'object') {
        errors.collect(ros.propertyValidator('deliveryOrderType', ros.validateAllowedValues)({
          data: properties.deliveryOrderType,
          allowedValues: ["Orderly","Concurrently"],
        }));
    }
    errors.collect(ros.propertyValidator('deliveryOrderType', ros.validateString)(properties.deliveryOrderType));
    if(properties.remark && (Array.isArray(properties.remark) || (typeof properties.remark) === 'string')) {
        errors.collect(ros.propertyValidator('remark', ros.validateLength)({
            data: properties.remark.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosConsumerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::ConsumerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::ConsumerGroup` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'ConsumeRetryPolicy': rosConsumerGroupConsumeRetryPolicyPropertyToRosTemplate(properties.consumeRetryPolicy),
      'ConsumerGroupId': ros.stringToRosTemplate(properties.consumerGroupId),
      'DeliveryOrderType': ros.stringToRosTemplate(properties.deliveryOrderType),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Remark': ros.stringToRosTemplate(properties.remark),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ5::ConsumerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
 */
export class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ5::ConsumerGroup";

    /**
     * @Attribute ConsumerGroupId: The ID of the consumer group.
     */
    public readonly attrConsumerGroupId: ros.IResolvable;

    /**
     * @Attribute DeliveryOrderType: Delivery sequence of consumer group.
     */
    public readonly attrDeliveryOrderType: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
     */
    public consumeRetryPolicy: RosConsumerGroup.ConsumeRetryPolicyProperty | ros.IResolvable;

    /**
     * @Property consumerGroupId: The ID of the consumer group to be created. Used to identify consumer groups, globally unique.
     * The value description is as follows:
     * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
     * Length limit: 1-60 characters.
     */
    public consumerGroupId: string | ros.IResolvable;

    /**
     * @Property deliveryOrderType: Delivery sequence of the consumer group to be created.
     */
    public deliveryOrderType: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property remark: The remark of the consumer group to be created.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumerGroupId = this.getAtt('ConsumerGroupId');
        this.attrDeliveryOrderType = this.getAtt('DeliveryOrderType');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.consumeRetryPolicy = props.consumeRetryPolicy;
        this.consumerGroupId = props.consumerGroupId;
        this.deliveryOrderType = props.deliveryOrderType;
        this.instanceId = props.instanceId;
        this.remark = props.remark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            consumeRetryPolicy: this.consumeRetryPolicy,
            consumerGroupId: this.consumerGroupId,
            deliveryOrderType: this.deliveryOrderType,
            instanceId: this.instanceId,
            remark: this.remark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosConsumerGroup {
    /**
     * @stability external
     */
    export interface ConsumeRetryPolicyProperty {
        /**
         * @Property deadLetterTargetTopic: The dead letter topic of the consumer group.
         */
        readonly deadLetterTargetTopic?: string | ros.IResolvable;
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
 * Determine whether the given properties match those of a `ConsumeRetryPolicyProperty`
 *
 * @param properties - the TypeScript properties of a `ConsumeRetryPolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroup_ConsumeRetryPolicyPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.deadLetterTargetTopic && (Array.isArray(properties.deadLetterTargetTopic) || (typeof properties.deadLetterTargetTopic) === 'string')) {
        errors.collect(ros.propertyValidator('deadLetterTargetTopic', ros.validateLength)({
            data: properties.deadLetterTargetTopic.length,
            min: 1,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('deadLetterTargetTopic', ros.validateString)(properties.deadLetterTargetTopic));
    errors.collect(ros.propertyValidator('retryPolicy', ros.requiredValidator)(properties.retryPolicy));
    if(properties.retryPolicy && (typeof properties.retryPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('retryPolicy', ros.validateAllowedValues)({
          data: properties.retryPolicy,
          allowedValues: ["DefaultRetryPolicy","FixedRetryPolicy"],
        }));
    }
    errors.collect(ros.propertyValidator('retryPolicy', ros.validateString)(properties.retryPolicy));
    if(properties.maxRetryTimes && (typeof properties.maxRetryTimes) !== 'object') {
        errors.collect(ros.propertyValidator('maxRetryTimes', ros.validateRange)({
            data: properties.maxRetryTimes,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('maxRetryTimes', ros.validateNumber)(properties.maxRetryTimes));
    return errors.wrap('supplied properties not correct for "ConsumeRetryPolicyProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::ConsumerGroup.ConsumeRetryPolicy` resource
 *
 * @param properties - the TypeScript properties of a `ConsumeRetryPolicyProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::ConsumerGroup.ConsumeRetryPolicy` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupConsumeRetryPolicyPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumerGroup_ConsumeRetryPolicyPropertyValidator(properties).assertSuccess();
    return {
      'DeadLetterTargetTopic': ros.stringToRosTemplate(properties.deadLetterTargetTopic),
      'RetryPolicy': ros.stringToRosTemplate(properties.retryPolicy),
      'MaxRetryTimes': ros.numberToRosTemplate(properties.maxRetryTimes),
    };
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
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('productInfo', ros.requiredValidator)(properties.productInfo));
    errors.collect(ros.propertyValidator('productInfo', RosInstance_ProductInfoPropertyValidator)(properties.productInfo));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('internetInfo', ros.requiredValidator)(properties.internetInfo));
    errors.collect(ros.propertyValidator('internetInfo', RosInstance_InternetInfoPropertyValidator)(properties.internetInfo));
    errors.collect(ros.propertyValidator('subSeriesCode', ros.requiredValidator)(properties.subSeriesCode));
    if(properties.subSeriesCode && (typeof properties.subSeriesCode) !== 'object') {
        errors.collect(ros.propertyValidator('subSeriesCode', ros.validateAllowedValues)({
          data: properties.subSeriesCode,
          allowedValues: ["single_node","cluster_ha","serverless"],
        }));
    }
    errors.collect(ros.propertyValidator('subSeriesCode', ros.validateString)(properties.subSeriesCode));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    if(properties.instanceName && (Array.isArray(properties.instanceName) || (typeof properties.instanceName) === 'string')) {
        errors.collect(ros.propertyValidator('instanceName', ros.validateLength)({
            data: properties.instanceName.length,
            min: 3,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('seriesCode', ros.requiredValidator)(properties.seriesCode));
    if(properties.seriesCode && (typeof properties.seriesCode) !== 'object') {
        errors.collect(ros.propertyValidator('seriesCode', ros.validateAllowedValues)({
          data: properties.seriesCode,
          allowedValues: ["standard","professional","ultimate"],
        }));
    }
    errors.collect(ros.propertyValidator('seriesCode', ros.validateString)(properties.seriesCode));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('vpcInfo', ros.requiredValidator)(properties.vpcInfo));
    errors.collect(ros.propertyValidator('vpcInfo', RosInstance_VpcInfoPropertyValidator)(properties.vpcInfo));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'InternetInfo': rosInstanceInternetInfoPropertyToRosTemplate(properties.internetInfo),
      'ProductInfo': rosInstanceProductInfoPropertyToRosTemplate(properties.productInfo),
      'SeriesCode': ros.stringToRosTemplate(properties.seriesCode),
      'SubSeriesCode': ros.stringToRosTemplate(properties.subSeriesCode),
      'VpcInfo': rosInstanceVpcInfoPropertyToRosTemplate(properties.vpcInfo),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'Remark': ros.stringToRosTemplate(properties.remark),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ5::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ5::Instance";

    /**
     * @Attribute InstanceId: Instance ID created.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: Instance name.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InternetEndpoint: Internet endpoint.
     */
    public readonly attrInternetEndpoint: ros.IResolvable;

    /**
     * @Attribute VpcEndpoint: VPC endpoint.
     */
    public readonly attrVpcEndpoint: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property internetInfo: Public network configuration information.
     */
    public internetInfo: RosInstance.InternetInfoProperty | ros.IResolvable;

    /**
     * @Property productInfo: Instance specification information.
     */
    public productInfo: RosInstance.ProductInfoProperty | ros.IResolvable;

    /**
     * @Property seriesCode: The primary series code of the instance.
     */
    public seriesCode: string | ros.IResolvable;

    /**
     * @Property subSeriesCode: The sub series code of the instance.
     */
    public subSeriesCode: string | ros.IResolvable;

    /**
     * @Property vpcInfo: Private network configuration information.
     */
    public vpcInfo: RosInstance.VpcInfoProperty | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to auto-renew. This parameter takes effect only when the PaymentType=Subscription.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: Automatic renewal period. This parameter is valid only when automatic renewal is enabled. Unit: Month.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property instanceName: The name of the instance to be created.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: The sub series code of the instance.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 6, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The period unit for the duration of the instance.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property remark: The remark of instance.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInternetEndpoint = this.getAtt('InternetEndpoint');
        this.attrVpcEndpoint = this.getAtt('VpcEndpoint');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.internetInfo = props.internetInfo;
        this.productInfo = props.productInfo;
        this.seriesCode = props.seriesCode;
        this.subSeriesCode = props.subSeriesCode;
        this.vpcInfo = props.vpcInfo;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.instanceName = props.instanceName;
        this.paymentType = props.paymentType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.remark = props.remark;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            internetInfo: this.internetInfo,
            productInfo: this.productInfo,
            seriesCode: this.seriesCode,
            subSeriesCode: this.subSeriesCode,
            vpcInfo: this.vpcInfo,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            instanceName: this.instanceName,
            paymentType: this.paymentType,
            period: this.period,
            periodUnit: this.periodUnit,
            remark: this.remark,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface InternetInfoProperty {
        /**
         * @Property flowOutType: The billing method of Internet usage. Valid values: payByBandwidth: pay-by-bandwidth. If Internet access is enabled for an instance, specify this value for the parameter. payByTraffic: pay-by-traffic. If Internet access is enabled for an instance, specify this value for the parameter. uninvolved: No billing method is involved. If Internet access is disabled for an instance, specify this value for the parameter.
         */
        readonly flowOutType?: string | ros.IResolvable;
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
/**
 * Determine whether the given properties match those of a `InternetInfoProperty`
 *
 * @param properties - the TypeScript properties of a `InternetInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_InternetInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowOutType', ros.validateString)(properties.flowOutType));
    errors.collect(ros.propertyValidator('ipWhitelist', ros.listValidator(ros.validateString))(properties.ipWhitelist));
    errors.collect(ros.propertyValidator('internetSpec', ros.requiredValidator)(properties.internetSpec));
    if(properties.internetSpec && (typeof properties.internetSpec) !== 'object') {
        errors.collect(ros.propertyValidator('internetSpec', ros.validateAllowedValues)({
          data: properties.internetSpec,
          allowedValues: ["enable","disable"],
        }));
    }
    errors.collect(ros.propertyValidator('internetSpec', ros.validateString)(properties.internetSpec));
    if(properties.flowOutBandwidth && (typeof properties.flowOutBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('flowOutBandwidth', ros.validateRange)({
            data: properties.flowOutBandwidth,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('flowOutBandwidth', ros.validateNumber)(properties.flowOutBandwidth));
    return errors.wrap('supplied properties not correct for "InternetInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Instance.InternetInfo` resource
 *
 * @param properties - the TypeScript properties of a `InternetInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Instance.InternetInfo` resource.
 */
// @ts-ignore TS6133
function rosInstanceInternetInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_InternetInfoPropertyValidator(properties).assertSuccess();
    return {
      'FlowOutType': ros.stringToRosTemplate(properties.flowOutType),
      'IpWhitelist': ros.listMapper(ros.stringToRosTemplate)(properties.ipWhitelist),
      'InternetSpec': ros.stringToRosTemplate(properties.internetSpec),
      'FlowOutBandwidth': ros.numberToRosTemplate(properties.flowOutBandwidth),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface ProductInfoProperty {
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
/**
 * Determine whether the given properties match those of a `ProductInfoProperty`
 *
 * @param properties - the TypeScript properties of a `ProductInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_ProductInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.sendReceiveRatio && (typeof properties.sendReceiveRatio) !== 'object') {
        errors.collect(ros.propertyValidator('sendReceiveRatio', ros.validateRange)({
            data: properties.sendReceiveRatio,
            min: 0,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('sendReceiveRatio', ros.validateNumber)(properties.sendReceiveRatio));
    errors.collect(ros.propertyValidator('messageRetentionTime', ros.validateNumber)(properties.messageRetentionTime));
    errors.collect(ros.propertyValidator('autoScaling', ros.validateBoolean)(properties.autoScaling));
    errors.collect(ros.propertyValidator('msgProcessSpec', ros.requiredValidator)(properties.msgProcessSpec));
    errors.collect(ros.propertyValidator('msgProcessSpec', ros.validateString)(properties.msgProcessSpec));
    return errors.wrap('supplied properties not correct for "ProductInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Instance.ProductInfo` resource
 *
 * @param properties - the TypeScript properties of a `ProductInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Instance.ProductInfo` resource.
 */
// @ts-ignore TS6133
function rosInstanceProductInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_ProductInfoPropertyValidator(properties).assertSuccess();
    return {
      'SendReceiveRatio': ros.numberToRosTemplate(properties.sendReceiveRatio),
      'MessageRetentionTime': ros.numberToRosTemplate(properties.messageRetentionTime),
      'AutoScaling': ros.booleanToRosTemplate(properties.autoScaling),
      'MsgProcessSpec': ros.stringToRosTemplate(properties.msgProcessSpec),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface VpcInfoProperty {
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
 * Determine whether the given properties match those of a `VpcInfoProperty`
 *
 * @param properties - the TypeScript properties of a `VpcInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_VpcInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    return errors.wrap('supplied properties not correct for "VpcInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Instance.VpcInfo` resource
 *
 * @param properties - the TypeScript properties of a `VpcInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Instance.VpcInfo` resource.
 */
// @ts-ignore TS6133
function rosInstanceVpcInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_VpcInfoPropertyValidator(properties).assertSuccess();
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
    };
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
    errors.collect(ros.propertyValidator('messageType', ros.requiredValidator)(properties.messageType));
    if(properties.messageType && (typeof properties.messageType) !== 'object') {
        errors.collect(ros.propertyValidator('messageType', ros.validateAllowedValues)({
          data: properties.messageType,
          allowedValues: ["NORMAL","FIFO","DELAY","TRANSACTION"],
        }));
    }
    errors.collect(ros.propertyValidator('messageType', ros.validateString)(properties.messageType));
    if(properties.remark && (Array.isArray(properties.remark) || (typeof properties.remark) === 'string')) {
        errors.collect(ros.propertyValidator('remark', ros.validateLength)({
            data: properties.remark.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    if(properties.topicName && (Array.isArray(properties.topicName) || (typeof properties.topicName) === 'string')) {
        errors.collect(ros.propertyValidator('topicName', ros.validateLength)({
            data: properties.topicName.length,
            min: 1,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    return errors.wrap('supplied properties not correct for "RosTopicProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Topic` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ5::Topic` resource.
 */
// @ts-ignore TS6133
function rosTopicPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTopicPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'MessageType': ros.stringToRosTemplate(properties.messageType),
      'TopicName': ros.stringToRosTemplate(properties.topicName),
      'Remark': ros.stringToRosTemplate(properties.remark),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ5::Topic`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
 */
export class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ5::Topic";

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute MessageType: The type of the message.
     */
    public readonly attrMessageType: ros.IResolvable;

    /**
     * @Attribute TopicName: The name of the topic.
     */
    public readonly attrTopicName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property messageType: The message type of the topic to be created. Valid values:
     * NORMAL
     * FIFO
     * DELAY
     * TRANSACTION
     */
    public messageType: string | ros.IResolvable;

    /**
     * @Property topicName: The name of the topic to be created is used to identify the topic and is globally unique.
     * Valid values:
     * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
     * Length limit: 1-60 characters.
     */
    public topicName: string | ros.IResolvable;

    /**
     * @Property remark: The remark of the topic to be created.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrMessageType = this.getAtt('MessageType');
        this.attrTopicName = this.getAtt('TopicName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.messageType = props.messageType;
        this.topicName = props.topicName;
        this.remark = props.remark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            messageType: this.messageType,
            topicName: this.topicName,
            remark: this.remark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
