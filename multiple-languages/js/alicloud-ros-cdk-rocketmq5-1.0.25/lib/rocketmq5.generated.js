"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosTopic = exports.RosInstance = exports.RosConsumerGroup = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosConsumerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('consumerGroupId', ros.requiredValidator)(properties.consumerGroupId));
    if (properties.consumerGroupId && (Array.isArray(properties.consumerGroupId) || (typeof properties.consumerGroupId) === 'string')) {
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
    if (properties.deliveryOrderType && (typeof properties.deliveryOrderType) !== 'object') {
        errors.collect(ros.propertyValidator('deliveryOrderType', ros.validateAllowedValues)({
            data: properties.deliveryOrderType,
            allowedValues: ["Orderly", "Concurrently"],
        }));
    }
    errors.collect(ros.propertyValidator('deliveryOrderType', ros.validateString)(properties.deliveryOrderType));
    if (properties.remark && (Array.isArray(properties.remark) || (typeof properties.remark) === 'string')) {
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
function rosConsumerGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosConsumerGroupPropsValidator(properties).assertSuccess();
    }
    return {
        ConsumeRetryPolicy: rosConsumerGroupConsumeRetryPolicyPropertyToRosTemplate(properties.consumeRetryPolicy),
        ConsumerGroupId: ros.stringToRosTemplate(properties.consumerGroupId),
        DeliveryOrderType: ros.stringToRosTemplate(properties.deliveryOrderType),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        Remark: ros.stringToRosTemplate(properties.remark),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ5::ConsumerGroup`, which is used to create a consumer group in ApsaraMQ for RocketMQ 5.0.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
 */
class RosConsumerGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            consumeRetryPolicy: this.consumeRetryPolicy,
            consumerGroupId: this.consumerGroupId,
            deliveryOrderType: this.deliveryOrderType,
            instanceId: this.instanceId,
            remark: this.remark,
        };
    }
    renderProperties(props) {
        return rosConsumerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosConsumerGroup = RosConsumerGroup;
/**
 * The resource type name for this resource class.
 */
RosConsumerGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ5::ConsumerGroup";
/**
 * Determine whether the given properties match those of a `ConsumeRetryPolicyProperty`
 *
 * @param properties - the TypeScript properties of a `ConsumeRetryPolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroup_ConsumeRetryPolicyPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('retryPolicy', ros.requiredValidator)(properties.retryPolicy));
    if (properties.retryPolicy && (typeof properties.retryPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('retryPolicy', ros.validateAllowedValues)({
            data: properties.retryPolicy,
            allowedValues: ["DefaultRetryPolicy", "FixedRetryPolicy"],
        }));
    }
    errors.collect(ros.propertyValidator('retryPolicy', ros.validateString)(properties.retryPolicy));
    if (properties.maxRetryTimes && (typeof properties.maxRetryTimes) !== 'object') {
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
function rosConsumerGroupConsumeRetryPolicyPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosConsumerGroup_ConsumeRetryPolicyPropertyValidator(properties).assertSuccess();
    return {
        RetryPolicy: ros.stringToRosTemplate(properties.retryPolicy),
        MaxRetryTimes: ros.numberToRosTemplate(properties.maxRetryTimes),
    };
}
/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
            data: properties.autoRenewPeriod,
            allowedValues: [1, 2, 3, 6, 12],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('productInfo', ros.requiredValidator)(properties.productInfo));
    errors.collect(ros.propertyValidator('productInfo', RosInstance_ProductInfoPropertyValidator)(properties.productInfo));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 12, 24, 36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('internetInfo', ros.requiredValidator)(properties.internetInfo));
    errors.collect(ros.propertyValidator('internetInfo', RosInstance_InternetInfoPropertyValidator)(properties.internetInfo));
    errors.collect(ros.propertyValidator('subSeriesCode', ros.requiredValidator)(properties.subSeriesCode));
    if (properties.subSeriesCode && (typeof properties.subSeriesCode) !== 'object') {
        errors.collect(ros.propertyValidator('subSeriesCode', ros.validateAllowedValues)({
            data: properties.subSeriesCode,
            allowedValues: ["single_node", "cluster_ha", "serverless"],
        }));
    }
    errors.collect(ros.propertyValidator('subSeriesCode', ros.validateString)(properties.subSeriesCode));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    if (properties.instanceName && (Array.isArray(properties.instanceName) || (typeof properties.instanceName) === 'string')) {
        errors.collect(ros.propertyValidator('instanceName', ros.validateLength)({
            data: properties.instanceName.length,
            min: 3,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('seriesCode', ros.requiredValidator)(properties.seriesCode));
    if (properties.seriesCode && (typeof properties.seriesCode) !== 'object') {
        errors.collect(ros.propertyValidator('seriesCode', ros.validateAllowedValues)({
            data: properties.seriesCode,
            allowedValues: ["standard", "professional", "ultimate"],
        }));
    }
    errors.collect(ros.propertyValidator('seriesCode', ros.validateString)(properties.seriesCode));
    if (properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
            data: properties.paymentType,
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "Postpay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "Prepay", "PREPAY", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('vpcInfo', ros.requiredValidator)(properties.vpcInfo));
    errors.collect(ros.propertyValidator('vpcInfo', RosInstance_VpcInfoPropertyValidator)(properties.vpcInfo));
    if (properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
            data: properties.periodUnit,
            allowedValues: ["Month", "Year"],
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
function rosInstancePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
        InternetInfo: rosInstanceInternetInfoPropertyToRosTemplate(properties.internetInfo),
        ProductInfo: rosInstanceProductInfoPropertyToRosTemplate(properties.productInfo),
        SeriesCode: ros.stringToRosTemplate(properties.seriesCode),
        SubSeriesCode: ros.stringToRosTemplate(properties.subSeriesCode),
        VpcInfo: rosInstanceVpcInfoPropertyToRosTemplate(properties.vpcInfo),
        AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
        AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        PaymentType: ros.stringToRosTemplate(properties.paymentType),
        Period: ros.numberToRosTemplate(properties.period),
        PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
        Remark: ros.stringToRosTemplate(properties.remark),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ5::Instance`, which is used to create an ApsaraMQ for RocketMQ 5.0 instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance
 */
class RosInstance extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstance = RosInstance;
/**
 * The resource type name for this resource class.
 */
RosInstance.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ5::Instance";
/**
 * Determine whether the given properties match those of a `InternetInfoProperty`
 *
 * @param properties - the TypeScript properties of a `InternetInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_InternetInfoPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipWhitelist', ros.listValidator(ros.validateString))(properties.ipWhitelist));
    errors.collect(ros.propertyValidator('internetSpec', ros.requiredValidator)(properties.internetSpec));
    if (properties.internetSpec && (typeof properties.internetSpec) !== 'object') {
        errors.collect(ros.propertyValidator('internetSpec', ros.validateAllowedValues)({
            data: properties.internetSpec,
            allowedValues: ["enable", "disable"],
        }));
    }
    errors.collect(ros.propertyValidator('internetSpec', ros.validateString)(properties.internetSpec));
    if (properties.flowOutBandwidth && (typeof properties.flowOutBandwidth) !== 'object') {
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
function rosInstanceInternetInfoPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstance_InternetInfoPropertyValidator(properties).assertSuccess();
    return {
        IpWhitelist: ros.listMapper(ros.stringToRosTemplate)(properties.ipWhitelist),
        InternetSpec: ros.stringToRosTemplate(properties.internetSpec),
        FlowOutBandwidth: ros.numberToRosTemplate(properties.flowOutBandwidth),
    };
}
/**
 * Determine whether the given properties match those of a `ProductInfoProperty`
 *
 * @param properties - the TypeScript properties of a `ProductInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_ProductInfoPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.sendReceiveRatio && (typeof properties.sendReceiveRatio) !== 'object') {
        errors.collect(ros.propertyValidator('sendReceiveRatio', ros.validateRange)({
            data: properties.sendReceiveRatio,
            min: 0.2,
            max: 0.5,
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
function rosInstanceProductInfoPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstance_ProductInfoPropertyValidator(properties).assertSuccess();
    return {
        SendReceiveRatio: ros.numberToRosTemplate(properties.sendReceiveRatio),
        MessageRetentionTime: ros.numberToRosTemplate(properties.messageRetentionTime),
        AutoScaling: ros.booleanToRosTemplate(properties.autoScaling),
        MsgProcessSpec: ros.stringToRosTemplate(properties.msgProcessSpec),
    };
}
/**
 * Determine whether the given properties match those of a `VpcInfoProperty`
 *
 * @param properties - the TypeScript properties of a `VpcInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_VpcInfoPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if (properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
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
function rosInstanceVpcInfoPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstance_VpcInfoPropertyValidator(properties).assertSuccess();
    return {
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        VSwitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
    };
}
/**
 * Determine whether the given properties match those of a `RosTopicProps`
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the result of the validation.
 */
function RosTopicPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('messageType', ros.requiredValidator)(properties.messageType));
    if (properties.messageType && (typeof properties.messageType) !== 'object') {
        errors.collect(ros.propertyValidator('messageType', ros.validateAllowedValues)({
            data: properties.messageType,
            allowedValues: ["NORMAL", "FIFO", "DELAY", "TRANSACTION"],
        }));
    }
    errors.collect(ros.propertyValidator('messageType', ros.validateString)(properties.messageType));
    if (properties.remark && (Array.isArray(properties.remark) || (typeof properties.remark) === 'string')) {
        errors.collect(ros.propertyValidator('remark', ros.validateLength)({
            data: properties.remark.length,
            min: undefined,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    if (properties.topicName && (Array.isArray(properties.topicName) || (typeof properties.topicName) === 'string')) {
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
function rosTopicPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosTopicPropsValidator(properties).assertSuccess();
    }
    return {
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        MessageType: ros.stringToRosTemplate(properties.messageType),
        TopicName: ros.stringToRosTemplate(properties.topicName),
        Remark: ros.stringToRosTemplate(properties.remark),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ5::Topic`, which is used to create a topic for a Message Queue for Apache RocketMQ V5.0 instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
 */
class RosTopic extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            instanceId: this.instanceId,
            messageType: this.messageType,
            topicName: this.topicName,
            remark: this.remark,
        };
    }
    renderProperties(props) {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTopic = RosTopic;
/**
 * The resource type name for this resource class.
 */
RosTopic.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ5::Topic";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9ja2V0bXE1LmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvY2tldG1xNS5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXFDOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyw4QkFBOEIsQ0FBQyxVQUFlO0lBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVHLElBQUcsVUFBVSxDQUFDLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDOUgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hFLElBQUksRUFBRSxVQUFVLENBQUMsZUFBZSxDQUFDLE1BQU07WUFDdkMsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUNsSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxvREFBb0QsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDakosTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNoSCxJQUFHLFVBQVUsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ25GLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25GLElBQUksRUFBRSxVQUFVLENBQUMsaUJBQWlCO1lBQ2xDLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBQyxjQUFjLENBQUM7U0FDMUMsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzdHLElBQUcsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvRCxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQzlCLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkRBQTZELENBQUMsQ0FBQztBQUN0RixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsa0NBQWtDLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUNsRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM5RDtJQUNELE9BQU87UUFDTCxrQkFBa0IsRUFBRSx1REFBdUQsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7UUFDMUcsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ3BFLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDeEUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzFELE1BQU0sRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztLQUNuRCxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBb0RqRDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE0QixFQUFFLGdDQUF5QztRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxrQ0FBa0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7QUFuRkwsNENBb0ZDO0FBbkZHOztHQUVHO0FBQ29CLHVDQUFzQixHQUFHLGtDQUFrQyxDQUFDO0FBaUd2Rjs7Ozs7O0dBTUc7QUFDSCxTQUFTLG9EQUFvRCxDQUFDLFVBQWU7SUFDekUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN2RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDN0UsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXO1lBQzVCLGFBQWEsRUFBRSxDQUFDLG9CQUFvQixFQUFDLGtCQUFrQixDQUFDO1NBQ3pELENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLElBQUcsVUFBVSxDQUFDLGFBQWEsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUMzRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JFLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYTtZQUM5QixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxJQUFJO1NBQ1YsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLGtFQUFrRSxDQUFDLENBQUM7QUFDM0YsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHVEQUF1RCxDQUFDLFVBQWU7SUFDNUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELG9EQUFvRCxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pGLE9BQU87UUFDTCxXQUFXLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDNUQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ2pFLENBQUM7QUFDTixDQUFDO0FBNEVEOzs7Ozs7R0FNRztBQUNILFNBQVMseUJBQXlCLENBQUMsVUFBZTtJQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxJQUFHLFVBQVUsQ0FBQyxlQUFlLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDL0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDakYsSUFBSSxFQUFFLFVBQVUsQ0FBQyxlQUFlO1lBQ2hDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN6RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLHdDQUF3QyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUYsSUFBRyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzdELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN4RSxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDdkIsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7U0FDdEMsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzFILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RyxJQUFHLFVBQVUsQ0FBQyxhQUFhLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDM0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQy9FLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYTtZQUM5QixhQUFhLEVBQUUsQ0FBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLFlBQVksQ0FBQztTQUN6RCxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLElBQUcsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDckgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNO1lBQ3BDLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEVBQUU7U0FDUixDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEcsSUFBRyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3JFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM1RSxJQUFJLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDM0IsYUFBYSxFQUFFLENBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxVQUFVLENBQUM7U0FDdEQsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsSUFBRyxVQUFVLENBQUMsV0FBVyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM3RSxJQUFJLEVBQUUsVUFBVSxDQUFDLFdBQVc7WUFDNUIsYUFBYSxFQUFFLENBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxLQUFLLENBQUM7U0FDM0ssQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNHLElBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNyRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDNUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQzNCLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUM7U0FDaEMsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHdEQUF3RCxDQUFDLENBQUM7QUFDakYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDZCQUE2QixDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDekQ7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLDRDQUE0QyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDbkYsV0FBVyxFQUFFLDJDQUEyQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDaEYsVUFBVSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzFELGFBQWEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRSxPQUFPLEVBQUUsdUNBQXVDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNwRSxTQUFTLEVBQUUsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDekQsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ3BFLFlBQVksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUM5RCxXQUFXLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDNUQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2xELFVBQVUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUMxRCxNQUFNLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEQsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0tBQ3JFLENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBZ0c1Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLGdDQUF5QztRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDakQsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3hDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyw2QkFBNkIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7QUFoSkwsa0NBaUpDO0FBaEpHOztHQUVHO0FBQ29CLGtDQUFzQixHQUFHLDZCQUE2QixDQUFDO0FBbUtsRjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHlDQUF5QyxDQUFDLFVBQWU7SUFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLElBQUcsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN6RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDOUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxZQUFZO1lBQzdCLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBQyxTQUFTLENBQUM7U0FDcEMsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbkcsSUFBRyxVQUFVLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNqRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxnQkFBZ0I7WUFDakMsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsSUFBSTtTQUNWLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsNERBQTRELENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsNENBQTRDLENBQUMsVUFBZTtJQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQseUNBQXlDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEUsT0FBTztRQUNMLFdBQVcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDNUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzlELGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7S0FDdkUsQ0FBQztBQUNOLENBQUM7QUEwQkQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3Q0FBd0MsQ0FBQyxVQUFlO0lBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLElBQUcsVUFBVSxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDakYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hFLElBQUksRUFBRSxVQUFVLENBQUMsZ0JBQWdCO1lBQ2pDLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0csTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDbkgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNsRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMxRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDdkcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLDJEQUEyRCxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDJDQUEyQyxDQUFDLFVBQWU7SUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELHdDQUF3QyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3JFLE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ3RFLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDOUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzdELGNBQWMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztLQUNuRSxDQUFDO0FBQ04sQ0FBQztBQTBCRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLG9DQUFvQyxDQUFDLFVBQWU7SUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsSUFBRyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUMvRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ25FLElBQUksRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU07WUFDbEMsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN6RyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUNoRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsdUNBQXVDLENBQUMsVUFBZTtJQUM1RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsb0NBQW9DLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakUsT0FBTztRQUNMLEtBQUssRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNoRCxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzFFLFNBQVMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUN4RCxlQUFlLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7S0FDckUsQ0FBQztBQUNOLENBQUM7QUFvQ0Q7Ozs7OztHQU1HO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBQyxVQUFlO0lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9GLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVztZQUM1QixhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxhQUFhLENBQUM7U0FDdkQsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsSUFBRyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQy9ELElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDOUIsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRyxJQUFHLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQzVHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNqQyxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDBCQUEwQixDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDMUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEQ7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzFELFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDeEQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0tBQ25ELENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBbUR6Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFvQixFQUFFLGdDQUF5QztRQUN6RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLDBCQUEwQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNwRixDQUFDOztBQWhGTCw0QkFpRkM7QUFoRkc7O0dBRUc7QUFDb0IsK0JBQXNCLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0NvbnN1bWVyR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9ja2V0bXE1LWNvbnN1bWVyZ3JvdXBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDb25zdW1lckdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnN1bWVSZXRyeVBvbGljeTogVGhlIGNvbnN1bXB0aW9uIHJldHJ5IHBvbGljeSBvZiB0aGUgY29uc3VtZXIgZ3JvdXAgdG8gYmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb25zdW1lUmV0cnlQb2xpY3k6IFJvc0NvbnN1bWVyR3JvdXAuQ29uc3VtZVJldHJ5UG9saWN5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29uc3VtZXJHcm91cElkOiBUaGUgSUQgb2YgdGhlIGNvbnN1bWVyIGdyb3VwIHRvIGJlIGNyZWF0ZWQuIFVzZWQgdG8gaWRlbnRpZnkgY29uc3VtZXIgZ3JvdXBzLCBnbG9iYWxseSB1bmlxdWUuXG4gICAgICogVGhlIHZhbHVlIGRlc2NyaXB0aW9uIGlzIGFzIGZvbGxvd3M6XG4gICAgICogQ2hhcmFjdGVyIGxpbWl0YXRpb246IHN1cHBvcnRzIGxldHRlcnMgYX56IG9yIEEtWiwgbnVtYmVycyAwLTksIHVuZGVyc2NvcmUgKF8pLCBkYXNoICgtKSBhbmQgcGVyY2VudCBzaWduICglKS5cbiAgICAgKiBMZW5ndGggbGltaXQ6IDEtNjAgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb25zdW1lckdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxpdmVyeU9yZGVyVHlwZTogRGVsaXZlcnkgc2VxdWVuY2Ugb2YgdGhlIGNvbnN1bWVyIGdyb3VwIHRvIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsaXZlcnlPcmRlclR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmsgb2YgdGhlIGNvbnN1bWVyIGdyb3VwIHRvIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVtYXJrPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0NvbnN1bWVyR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ29uc3VtZXJHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NvbnN1bWVyR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnN1bWVyR3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb25zdW1lckdyb3VwSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNvbnN1bWVyR3JvdXBJZCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmNvbnN1bWVyR3JvdXBJZCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbnN1bWVyR3JvdXBJZCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnN1bWVyR3JvdXBJZCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jb25zdW1lckdyb3VwSWQubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA2MCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29uc3VtZXJHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnN1bWVyR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnN1bWVSZXRyeVBvbGljeScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb25zdW1lUmV0cnlQb2xpY3kpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnN1bWVSZXRyeVBvbGljeScsIFJvc0NvbnN1bWVyR3JvdXBfQ29uc3VtZVJldHJ5UG9saWN5UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29uc3VtZVJldHJ5UG9saWN5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxpdmVyeU9yZGVyVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZWxpdmVyeU9yZGVyVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVsaXZlcnlPcmRlclR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlbGl2ZXJ5T3JkZXJUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxpdmVyeU9yZGVyVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlbGl2ZXJ5T3JkZXJUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIk9yZGVybHlcIixcIkNvbmN1cnJlbnRseVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGl2ZXJ5T3JkZXJUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlbGl2ZXJ5T3JkZXJUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5yZW1hcmsgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yZW1hcmspIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yZW1hcmspID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1hcmsnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVtYXJrLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbWFyaycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZW1hcmspKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ29uc3VtZXJHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST0NLRVRNUTU6OkNvbnN1bWVyR3JvdXBgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NvbnN1bWVyR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9DS0VUTVE1OjpDb25zdW1lckdyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NvbnN1bWVyR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0NvbnN1bWVyR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDb25zdW1lUmV0cnlQb2xpY3k6IHJvc0NvbnN1bWVyR3JvdXBDb25zdW1lUmV0cnlQb2xpY3lQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb25zdW1lUmV0cnlQb2xpY3kpLFxuICAgICAgQ29uc3VtZXJHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnN1bWVyR3JvdXBJZCksXG4gICAgICBEZWxpdmVyeU9yZGVyVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxpdmVyeU9yZGVyVHlwZSksXG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgUmVtYXJrOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlbWFyayksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Uk9DS0VUTVE1OjpDb25zdW1lckdyb3VwYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBjb25zdW1lciBncm91cCBpbiBBcHNhcmFNUSBmb3IgUm9ja2V0TVEgNS4wLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBDb25zdW1lckdyb3VwYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yb2NrZXRtcTUtY29uc3VtZXJncm91cFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ29uc3VtZXJHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9DS0VUTVE1OjpDb25zdW1lckdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENvbnN1bWVyR3JvdXBJZDogVGhlIElEIG9mIHRoZSBjb25zdW1lciBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbnN1bWVyR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZWxpdmVyeU9yZGVyVHlwZTogRGVsaXZlcnkgc2VxdWVuY2Ugb2YgY29uc3VtZXIgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWxpdmVyeU9yZGVyVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29uc3VtZVJldHJ5UG9saWN5OiBUaGUgY29uc3VtcHRpb24gcmV0cnkgcG9saWN5IG9mIHRoZSBjb25zdW1lciBncm91cCB0byBiZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb25zdW1lUmV0cnlQb2xpY3k6IFJvc0NvbnN1bWVyR3JvdXAuQ29uc3VtZVJldHJ5UG9saWN5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29uc3VtZXJHcm91cElkOiBUaGUgSUQgb2YgdGhlIGNvbnN1bWVyIGdyb3VwIHRvIGJlIGNyZWF0ZWQuIFVzZWQgdG8gaWRlbnRpZnkgY29uc3VtZXIgZ3JvdXBzLCBnbG9iYWxseSB1bmlxdWUuXG4gICAgICogVGhlIHZhbHVlIGRlc2NyaXB0aW9uIGlzIGFzIGZvbGxvd3M6XG4gICAgICogQ2hhcmFjdGVyIGxpbWl0YXRpb246IHN1cHBvcnRzIGxldHRlcnMgYX56IG9yIEEtWiwgbnVtYmVycyAwLTksIHVuZGVyc2NvcmUgKF8pLCBkYXNoICgtKSBhbmQgcGVyY2VudCBzaWduICglKS5cbiAgICAgKiBMZW5ndGggbGltaXQ6IDEtNjAgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29uc3VtZXJHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsaXZlcnlPcmRlclR5cGU6IERlbGl2ZXJ5IHNlcXVlbmNlIG9mIHRoZSBjb25zdW1lciBncm91cCB0byBiZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxpdmVyeU9yZGVyVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmsgb2YgdGhlIGNvbnN1bWVyIGdyb3VwIHRvIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlbWFyazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NvbnN1bWVyR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0NvbnN1bWVyR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNvbnN1bWVyR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdDb25zdW1lckdyb3VwSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyRGVsaXZlcnlPcmRlclR5cGUgPSB0aGlzLmdldEF0dCgnRGVsaXZlcnlPcmRlclR5cGUnKTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNvbnN1bWVSZXRyeVBvbGljeSA9IHByb3BzLmNvbnN1bWVSZXRyeVBvbGljeTtcbiAgICAgICAgdGhpcy5jb25zdW1lckdyb3VwSWQgPSBwcm9wcy5jb25zdW1lckdyb3VwSWQ7XG4gICAgICAgIHRoaXMuZGVsaXZlcnlPcmRlclR5cGUgPSBwcm9wcy5kZWxpdmVyeU9yZGVyVHlwZTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5yZW1hcmsgPSBwcm9wcy5yZW1hcms7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29uc3VtZVJldHJ5UG9saWN5OiB0aGlzLmNvbnN1bWVSZXRyeVBvbGljeSxcbiAgICAgICAgICAgIGNvbnN1bWVyR3JvdXBJZDogdGhpcy5jb25zdW1lckdyb3VwSWQsXG4gICAgICAgICAgICBkZWxpdmVyeU9yZGVyVHlwZTogdGhpcy5kZWxpdmVyeU9yZGVyVHlwZSxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHRoaXMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIHJlbWFyazogdGhpcy5yZW1hcmssXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0NvbnN1bWVyR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDb25zdW1lckdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb25zdW1lUmV0cnlQb2xpY3lQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmV0cnlQb2xpY3k6IFJldHJ5IHBvbGljeSB0eXBlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmV0cnlQb2xpY3k6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhSZXRyeVRpbWVzOiBNYXhpbXVtIG51bWJlciBvZiByZXRyaWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4UmV0cnlUaW1lcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENvbnN1bWVSZXRyeVBvbGljeVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb25zdW1lUmV0cnlQb2xpY3lQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDb25zdW1lckdyb3VwX0NvbnN1bWVSZXRyeVBvbGljeVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmV0cnlQb2xpY3knLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmV0cnlQb2xpY3kpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJldHJ5UG9saWN5ICYmICh0eXBlb2YgcHJvcGVydGllcy5yZXRyeVBvbGljeSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmV0cnlQb2xpY3knLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZXRyeVBvbGljeSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJEZWZhdWx0UmV0cnlQb2xpY3lcIixcIkZpeGVkUmV0cnlQb2xpY3lcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXRyeVBvbGljeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXRyeVBvbGljeSkpO1xuICAgIGlmKHByb3BlcnRpZXMubWF4UmV0cnlUaW1lcyAmJiAodHlwZW9mIHByb3BlcnRpZXMubWF4UmV0cnlUaW1lcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4UmV0cnlUaW1lcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1heFJldHJ5VGltZXMsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFJldHJ5VGltZXMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4UmV0cnlUaW1lcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDb25zdW1lUmV0cnlQb2xpY3lQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9DS0VUTVE1OjpDb25zdW1lckdyb3VwLkNvbnN1bWVSZXRyeVBvbGljeWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uc3VtZVJldHJ5UG9saWN5UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPQ0tFVE1RNTo6Q29uc3VtZXJHcm91cC5Db25zdW1lUmV0cnlQb2xpY3lgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ29uc3VtZXJHcm91cENvbnN1bWVSZXRyeVBvbGljeVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDb25zdW1lckdyb3VwX0NvbnN1bWVSZXRyeVBvbGljeVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUmV0cnlQb2xpY3k6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmV0cnlQb2xpY3kpLFxuICAgICAgTWF4UmV0cnlUaW1lczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhSZXRyeVRpbWVzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0luc3RhbmNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJvY2tldG1xNS1pbnN0YW5jZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0luc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0SW5mbzogUHVibGljIG5ldHdvcmsgY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldEluZm86IFJvc0luc3RhbmNlLkludGVybmV0SW5mb1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2R1Y3RJbmZvOiBJbnN0YW5jZSBzcGVjaWZpY2F0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2R1Y3RJbmZvOiBSb3NJbnN0YW5jZS5Qcm9kdWN0SW5mb1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcmllc0NvZGU6IFRoZSBwcmltYXJ5IHNlcmllcyBjb2RlIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJpZXNDb2RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3ViU2VyaWVzQ29kZTogVGhlIHN1YiBzZXJpZXMgY29kZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3ViU2VyaWVzQ29kZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0luZm86IFByaXZhdGUgbmV0d29yayBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0luZm86IFJvc0luc3RhbmNlLlZwY0luZm9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUmVuZXc6IFdoZXRoZXIgdG8gYXV0by1yZW5ldy4gVGhpcyBwYXJhbWV0ZXIgdGFrZXMgZWZmZWN0IG9ubHkgd2hlbiB0aGUgUGF5bWVudFR5cGU9U3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b1JlbmV3UGVyaW9kOiBBdXRvbWF0aWMgcmVuZXdhbCBwZXJpb2QuIFRoaXMgcGFyYW1ldGVyIGlzIHZhbGlkIG9ubHkgd2hlbiBhdXRvbWF0aWMgcmVuZXdhbCBpcyBlbmFibGVkLiBVbml0OiBNb250aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXdQZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGF5bWVudFR5cGU6IFRoZSBzdWIgc2VyaWVzIGNvZGUgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheW1lbnRUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZDogVGhlIHN1YnNjcmlwdGlvbiBkdXJhdGlvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFdoZW4gUGVyaW9kIGlzIE1vbnRoLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gNiwgMTIsIDI0LCAzNi5cbiAgICAgKiAgV2hlbiBQZXJpb2QgaXMgWWVhciwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZFVuaXQ6IFRoZSBwZXJpb2QgdW5pdCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2RVbml0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbWFyazogVGhlIHJlbWFyayBvZiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1hcms/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJbnN0YW5jZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuYXV0b1JlbmV3UGVyaW9kICYmICh0eXBlb2YgcHJvcGVydGllcy5hdXRvUmVuZXdQZXJpb2QpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2F1dG9SZW5ld1BlcmlvZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmF1dG9SZW5ld1BlcmlvZCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbMSwyLDMsNiwxMl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRvUmVuZXdQZXJpb2QnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuYXV0b1JlbmV3UGVyaW9kKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9kdWN0SW5mbycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm9kdWN0SW5mbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvZHVjdEluZm8nLCBSb3NJbnN0YW5jZV9Qcm9kdWN0SW5mb1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByb2R1Y3RJbmZvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRvUmVuZXcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmF1dG9SZW5ldykpO1xuICAgIGlmKHByb3BlcnRpZXMucGVyaW9kICYmICh0eXBlb2YgcHJvcGVydGllcy5wZXJpb2QpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcmlvZCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbMSwyLDMsNCw1LDYsMTIsMjQsMzZdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlcmlvZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRJbmZvJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmludGVybmV0SW5mbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRJbmZvJywgUm9zSW5zdGFuY2VfSW50ZXJuZXRJbmZvUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW50ZXJuZXRJbmZvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWJTZXJpZXNDb2RlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN1YlNlcmllc0NvZGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN1YlNlcmllc0NvZGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN1YlNlcmllc0NvZGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1YlNlcmllc0NvZGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdWJTZXJpZXNDb2RlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcInNpbmdsZV9ub2RlXCIsXCJjbHVzdGVyX2hhXCIsXCJzZXJ2ZXJsZXNzXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3ViU2VyaWVzQ29kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdWJTZXJpZXNDb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1hcmsnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVtYXJrKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMyxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nlcmllc0NvZGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VyaWVzQ29kZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VyaWVzQ29kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2VyaWVzQ29kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VyaWVzQ29kZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcmllc0NvZGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wic3RhbmRhcmRcIixcInByb2Zlc3Npb25hbFwiLFwidWx0aW1hdGVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJpZXNDb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcmllc0NvZGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBheW1lbnRUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wYXltZW50VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF5bWVudFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wYXltZW50VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJQYXlBc1lvdUdvXCIsXCJQb3N0UGFpZFwiLFwiUGF5T25EZW1hbmRcIixcIlBvc3RwYWlkXCIsXCJQb3N0UGF5XCIsXCJQb3N0cGF5XCIsXCJQT1NUUEFZXCIsXCJQT1NUXCIsXCJTdWJzY3JpcHRpb25cIixcIlByZVBhaWRcIixcIlByZXBhaWRcIixcIlByZVBheVwiLFwiUHJlcGF5XCIsXCJQUkVQQVlcIixcIlBSRVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BheW1lbnRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBheW1lbnRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJbmZvJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0luZm8pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0luZm8nLCBSb3NJbnN0YW5jZV9WcGNJbmZvUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjSW5mbykpO1xuICAgIGlmKHByb3BlcnRpZXMucGVyaW9kVW5pdCAmJiAodHlwZW9mIHByb3BlcnRpZXMucGVyaW9kVW5pdCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kVW5pdCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcmlvZFVuaXQsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTW9udGhcIixcIlllYXJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RVbml0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBlcmlvZFVuaXQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSW5zdGFuY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9DS0VUTVE1OjpJbnN0YW5jZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9DS0VUTVE1OjpJbnN0YW5jZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJbnN0YW5jZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zSW5zdGFuY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBJbnRlcm5ldEluZm86IHJvc0luc3RhbmNlSW50ZXJuZXRJbmZvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRJbmZvKSxcbiAgICAgIFByb2R1Y3RJbmZvOiByb3NJbnN0YW5jZVByb2R1Y3RJbmZvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvZHVjdEluZm8pLFxuICAgICAgU2VyaWVzQ29kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJpZXNDb2RlKSxcbiAgICAgIFN1YlNlcmllc0NvZGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3ViU2VyaWVzQ29kZSksXG4gICAgICBWcGNJbmZvOiByb3NJbnN0YW5jZVZwY0luZm9Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJbmZvKSxcbiAgICAgIEF1dG9SZW5ldzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXV0b1JlbmV3KSxcbiAgICAgIEF1dG9SZW5ld1BlcmlvZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRvUmVuZXdQZXJpb2QpLFxuICAgICAgSW5zdGFuY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSksXG4gICAgICBQYXltZW50VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXltZW50VHlwZSksXG4gICAgICBQZXJpb2Q6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kKSxcbiAgICAgIFBlcmlvZFVuaXQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kVW5pdCksXG4gICAgICBSZW1hcms6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVtYXJrKSxcbiAgICAgIFJlc291cmNlR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJPQ0tFVE1RNTo6SW5zdGFuY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBBcHNhcmFNUSBmb3IgUm9ja2V0TVEgNS4wIGluc3RhbmNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBJbnN0YW5jZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9ja2V0bXE1LWluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NJbnN0YW5jZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9DS0VUTVE1OjpJbnN0YW5jZVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBJbnN0YW5jZSBJRCBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZU5hbWU6IEluc3RhbmNlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW50ZXJuZXRFbmRwb2ludDogSW50ZXJuZXQgZW5kcG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRlcm5ldEVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZwY0VuZHBvaW50OiBWUEMgZW5kcG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRJbmZvOiBQdWJsaWMgbmV0d29yayBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldEluZm86IFJvc0luc3RhbmNlLkludGVybmV0SW5mb1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2R1Y3RJbmZvOiBJbnN0YW5jZSBzcGVjaWZpY2F0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9kdWN0SW5mbzogUm9zSW5zdGFuY2UuUHJvZHVjdEluZm9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJpZXNDb2RlOiBUaGUgcHJpbWFyeSBzZXJpZXMgY29kZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHNlcmllc0NvZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdWJTZXJpZXNDb2RlOiBUaGUgc3ViIHNlcmllcyBjb2RlIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3ViU2VyaWVzQ29kZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0luZm86IFByaXZhdGUgbmV0d29yayBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNJbmZvOiBSb3NJbnN0YW5jZS5WcGNJbmZvUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b1JlbmV3OiBXaGV0aGVyIHRvIGF1dG8tcmVuZXcuIFRoaXMgcGFyYW1ldGVyIHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gdGhlIFBheW1lbnRUeXBlPVN1YnNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0b1JlbmV3OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9SZW5ld1BlcmlvZDogQXV0b21hdGljIHJlbmV3YWwgcGVyaW9kLiBUaGlzIHBhcmFtZXRlciBpcyB2YWxpZCBvbmx5IHdoZW4gYXV0b21hdGljIHJlbmV3YWwgaXMgZW5hYmxlZC4gVW5pdDogTW9udGguXG4gICAgICovXG4gICAgcHVibGljIGF1dG9SZW5ld1BlcmlvZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBheW1lbnRUeXBlOiBUaGUgc3ViIHNlcmllcyBjb2RlIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGF5bWVudFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBzdWJzY3JpcHRpb24gZHVyYXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBXaGVuIFBlcmlvZCBpcyBNb250aCwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDYsIDEyLCAyNCwgMzYuXG4gICAgICogIFdoZW4gUGVyaW9kIGlzIFllYXIsIGl0IGNvdWxkIGJlIGZyb20gMSB0byAzLlxuICAgICAqL1xuICAgIHB1YmxpYyBwZXJpb2Q6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2RVbml0OiBUaGUgcGVyaW9kIHVuaXQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHBlcmlvZFVuaXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmsgb2YgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlbWFyazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0luc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NJbnN0YW5jZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlTmFtZSA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZU5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRySW50ZXJuZXRFbmRwb2ludCA9IHRoaXMuZ2V0QXR0KCdJbnRlcm5ldEVuZHBvaW50Jyk7XG4gICAgICAgIHRoaXMuYXR0clZwY0VuZHBvaW50ID0gdGhpcy5nZXRBdHQoJ1ZwY0VuZHBvaW50Jyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmludGVybmV0SW5mbyA9IHByb3BzLmludGVybmV0SW5mbztcbiAgICAgICAgdGhpcy5wcm9kdWN0SW5mbyA9IHByb3BzLnByb2R1Y3RJbmZvO1xuICAgICAgICB0aGlzLnNlcmllc0NvZGUgPSBwcm9wcy5zZXJpZXNDb2RlO1xuICAgICAgICB0aGlzLnN1YlNlcmllc0NvZGUgPSBwcm9wcy5zdWJTZXJpZXNDb2RlO1xuICAgICAgICB0aGlzLnZwY0luZm8gPSBwcm9wcy52cGNJbmZvO1xuICAgICAgICB0aGlzLmF1dG9SZW5ldyA9IHByb3BzLmF1dG9SZW5ldztcbiAgICAgICAgdGhpcy5hdXRvUmVuZXdQZXJpb2QgPSBwcm9wcy5hdXRvUmVuZXdQZXJpb2Q7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VOYW1lID0gcHJvcHMuaW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLnBheW1lbnRUeXBlID0gcHJvcHMucGF5bWVudFR5cGU7XG4gICAgICAgIHRoaXMucGVyaW9kID0gcHJvcHMucGVyaW9kO1xuICAgICAgICB0aGlzLnBlcmlvZFVuaXQgPSBwcm9wcy5wZXJpb2RVbml0O1xuICAgICAgICB0aGlzLnJlbWFyayA9IHByb3BzLnJlbWFyaztcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW50ZXJuZXRJbmZvOiB0aGlzLmludGVybmV0SW5mbyxcbiAgICAgICAgICAgIHByb2R1Y3RJbmZvOiB0aGlzLnByb2R1Y3RJbmZvLFxuICAgICAgICAgICAgc2VyaWVzQ29kZTogdGhpcy5zZXJpZXNDb2RlLFxuICAgICAgICAgICAgc3ViU2VyaWVzQ29kZTogdGhpcy5zdWJTZXJpZXNDb2RlLFxuICAgICAgICAgICAgdnBjSW5mbzogdGhpcy52cGNJbmZvLFxuICAgICAgICAgICAgYXV0b1JlbmV3OiB0aGlzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIGF1dG9SZW5ld1BlcmlvZDogdGhpcy5hdXRvUmVuZXdQZXJpb2QsXG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHRoaXMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgcGF5bWVudFR5cGU6IHRoaXMucGF5bWVudFR5cGUsXG4gICAgICAgICAgICBwZXJpb2Q6IHRoaXMucGVyaW9kLFxuICAgICAgICAgICAgcGVyaW9kVW5pdDogdGhpcy5wZXJpb2RVbml0LFxuICAgICAgICAgICAgcmVtYXJrOiB0aGlzLnJlbWFyayxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0luc3RhbmNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSW5zdGFuY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEludGVybmV0SW5mb1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpcFdoaXRlbGlzdDogUHVibGljIG5ldHdvcmsgYWNjZXNzIHdoaXRlbGlzdCBhZGRyZXNzIHNlZ21lbnQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpcFdoaXRlbGlzdD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRTcGVjOiBXaGV0aGVyIHRvIGVuYWJsZSBwdWJsaWMgbmV0d29yayBhY2Nlc3MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbnRlcm5ldFNwZWM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmbG93T3V0QmFuZHdpZHRoOiBQdWJsaWMgbmV0d29yayBiYW5kd2lkdGggc3BlY2lmaWNhdGlvbi4gVW5pdDogTWJcXC9zLlxuICAgICAqIEl0IG5lZWRzIHRvIGJlIGZpbGxlZCBpbiBvbmx5IHdoZW4gdGhlIGJpbGxpbmcgdHlwZSBvZiB0aGUgcHVibGljIG5ldHdvcmsgaXMgYmlsbGVkIGJ5IGZpeGVkIGJhbmR3aWR0aC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZsb3dPdXRCYW5kd2lkdGg/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJbnRlcm5ldEluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW50ZXJuZXRJbmZvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSW5zdGFuY2VfSW50ZXJuZXRJbmZvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcFdoaXRlbGlzdCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuaXBXaGl0ZWxpc3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0U3BlYycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnRlcm5ldFNwZWMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0U3BlYyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50ZXJuZXRTcGVjKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldFNwZWMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldFNwZWMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiZW5hYmxlXCIsXCJkaXNhYmxlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRTcGVjJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmludGVybmV0U3BlYykpO1xuICAgIGlmKHByb3BlcnRpZXMuZmxvd091dEJhbmR3aWR0aCAmJiAodHlwZW9mIHByb3BlcnRpZXMuZmxvd091dEJhbmR3aWR0aCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmxvd091dEJhbmR3aWR0aCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZsb3dPdXRCYW5kd2lkdGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Zsb3dPdXRCYW5kd2lkdGgnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZmxvd091dEJhbmR3aWR0aCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbnRlcm5ldEluZm9Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9DS0VUTVE1OjpJbnN0YW5jZS5JbnRlcm5ldEluZm9gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEludGVybmV0SW5mb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST0NLRVRNUTU6Okluc3RhbmNlLkludGVybmV0SW5mb2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJbnN0YW5jZUludGVybmV0SW5mb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NJbnN0YW5jZV9JbnRlcm5ldEluZm9Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIElwV2hpdGVsaXN0OiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5pcFdoaXRlbGlzdCksXG4gICAgICBJbnRlcm5ldFNwZWM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRTcGVjKSxcbiAgICAgIEZsb3dPdXRCYW5kd2lkdGg6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmxvd091dEJhbmR3aWR0aCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NJbnN0YW5jZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEluZm9Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VuZFJlY2VpdmVSYXRpbzogVGhlIHJhdGlvIG9mIG1lc3NhZ2VzIHNlbnQgYW5kIHJlY2VpdmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VuZFJlY2VpdmVSYXRpbz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtZXNzYWdlUmV0ZW50aW9uVGltZTogVGhlIG1lc3NhZ2Ugc3RvcmFnZSB0aW1lLiBVbml0OiBIb3VyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWVzc2FnZVJldGVudGlvblRpbWU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYXV0b1NjYWxpbmc6IFdoZXRoZXIgdG8gZW5hYmxlIG91dC1vZi1zcGVjIGJ1cnN0IHJlc2lsaWVuY3kuXG4gICAgICogQWZ0ZXIgdGhlIGVsYXN0aWMgYnVyc3QgY2FwYWJpbGl0eSBpcyBlbmFibGVkLCB0aGUgbWVzc2FnZSBxdWV1ZSBSb2NrZXRNUSBhbGxvd3MgdGhlIGluc3RhbmNlIHRvIGV4Y2VlZCB0aGUgVFBTIGxpbWl0ZWQgYnkgdGhlIGJhc2ljIHNwZWNpZmljYXRpb24gd2l0aGluIGEgY2VydGFpbiByYW5nZSwgYW5kIHRoZSBwYXJ0IGV4Y2VlZGluZyB0aGUgYmFzaWMgc3BlY2lmaWNhdGlvbiByZXF1aXJlcyBhZGRpdGlvbmFsIGVsYXN0aWMgc3BlY2lmaWNhdGlvbiBmZWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYXV0b1NjYWxpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1zZ1Byb2Nlc3NTcGVjOiBNZXNzYWdlIHByb2Nlc3Npbmcgc3BlY2lmaWNhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1zZ1Byb2Nlc3NTcGVjOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQcm9kdWN0SW5mb1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcm9kdWN0SW5mb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0luc3RhbmNlX1Byb2R1Y3RJbmZvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5zZW5kUmVjZWl2ZVJhdGlvICYmICh0eXBlb2YgcHJvcGVydGllcy5zZW5kUmVjZWl2ZVJhdGlvKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZW5kUmVjZWl2ZVJhdGlvJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VuZFJlY2VpdmVSYXRpbyxcbiAgICAgICAgICAgIG1pbjogMC4yLFxuICAgICAgICAgICAgbWF4OiAwLjUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlbmRSZWNlaXZlUmF0aW8nLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuc2VuZFJlY2VpdmVSYXRpbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWVzc2FnZVJldGVudGlvblRpbWUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWVzc2FnZVJldGVudGlvblRpbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2F1dG9TY2FsaW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hdXRvU2NhbGluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbXNnUHJvY2Vzc1NwZWMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubXNnUHJvY2Vzc1NwZWMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21zZ1Byb2Nlc3NTcGVjJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1zZ1Byb2Nlc3NTcGVjKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlByb2R1Y3RJbmZvUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPQ0tFVE1RNTo6SW5zdGFuY2UuUHJvZHVjdEluZm9gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByb2R1Y3RJbmZvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPQ0tFVE1RNTo6SW5zdGFuY2UuUHJvZHVjdEluZm9gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSW5zdGFuY2VQcm9kdWN0SW5mb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NJbnN0YW5jZV9Qcm9kdWN0SW5mb1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgU2VuZFJlY2VpdmVSYXRpbzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZW5kUmVjZWl2ZVJhdGlvKSxcbiAgICAgIE1lc3NhZ2VSZXRlbnRpb25UaW1lOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1lc3NhZ2VSZXRlbnRpb25UaW1lKSxcbiAgICAgIEF1dG9TY2FsaW5nOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRvU2NhbGluZyksXG4gICAgICBNc2dQcm9jZXNzU3BlYzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tc2dQcm9jZXNzU3BlYyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NJbnN0YW5jZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVnBjSW5mb1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogSUQgb2YgdGhlIFZQQyBhc3NvY2lhdGVkIHdpdGggdGhlIGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZHM6IElEcyBvZiB0aGUgdlN3aXRjaHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBpbnN0YW5jZSB0byBiZSBjcmVhdGVkLlxuICAgICAqICoqTm90ZSoqOiBPbmx5IG9uZSBpcyByZXF1aXJlZCBmb3IgVlN3aXRjaElkcyBhbmQgVlN3aXRjaElkLiBXaGVuIGJvdGggYXJlIGZpbGxlZCBpbiwgVlN3aXRjaElkcyBvdmVyd3JpdGVzIFZTd2l0Y2hJZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZTd2l0Y2hJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZDogSUQgb2YgdGhlIHZTd2l0Y2ggYXNzb2NpYXRlZCB3aXRoIHRoZSBpbnN0YW5jZSB0byBiZSBjcmVhdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdlN3aXRjaElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwIGFzc29jaWF0ZWQgd2l0aCB0aGUgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC4gUmVxdWlyZWQgd2hlbiBjcmVhdGluZyBzZXJ2ZXJsZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVnBjSW5mb1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWcGNJbmZvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSW5zdGFuY2VfVnBjSW5mb1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgaWYocHJvcGVydGllcy52U3dpdGNoSWRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudlN3aXRjaElkcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoSWRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoSWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy52U3dpdGNoSWRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudlN3aXRjaElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZWN1cml0eUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VjdXJpdHlHcm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlZwY0luZm9Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9DS0VUTVE1OjpJbnN0YW5jZS5WcGNJbmZvYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWcGNJbmZvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPQ0tFVE1RNTo6SW5zdGFuY2UuVnBjSW5mb2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJbnN0YW5jZVZwY0luZm9Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSW5zdGFuY2VfVnBjSW5mb1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgICAgVlN3aXRjaElkczogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudlN3aXRjaElkcyksXG4gICAgICBWU3dpdGNoSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudlN3aXRjaElkKSxcbiAgICAgIFNlY3VyaXR5R3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVG9waWNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9ja2V0bXE1LXRvcGljXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVG9waWNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWVzc2FnZVR5cGU6IFRoZSBtZXNzYWdlIHR5cGUgb2YgdGhlIHRvcGljIHRvIGJlIGNyZWF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBOT1JNQUxcbiAgICAgKiBGSUZPXG4gICAgICogREVMQVlcbiAgICAgKiBUUkFOU0FDVElPTlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1lc3NhZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdG9waWNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgdG9waWMgdG8gYmUgY3JlYXRlZCBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSB0b3BpYyBhbmQgaXMgZ2xvYmFsbHkgdW5pcXVlLlxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDaGFyYWN0ZXIgbGltaXRhdGlvbjogc3VwcG9ydHMgbGV0dGVycyBhfnogb3IgQS1aLCBudW1iZXJzIDAtOSwgdW5kZXJzY29yZSAoXyksIGRhc2ggKC0pIGFuZCBwZXJjZW50IHNpZ24gKCUpLlxuICAgICAqIExlbmd0aCBsaW1pdDogMS02MCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRvcGljTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbWFyazogVGhlIHJlbWFyayBvZiB0aGUgdG9waWMgdG8gYmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1hcms/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVG9waWNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVG9waWNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUb3BpY1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lc3NhZ2VUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1lc3NhZ2VUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5tZXNzYWdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubWVzc2FnZVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lc3NhZ2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWVzc2FnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTk9STUFMXCIsXCJGSUZPXCIsXCJERUxBWVwiLFwiVFJBTlNBQ1RJT05cIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXNzYWdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tZXNzYWdlVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVtYXJrICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucmVtYXJrKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucmVtYXJrKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVtYXJrJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlbWFyay5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1hcmsnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVtYXJrKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpY05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudG9waWNOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy50b3BpY05hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50b3BpY05hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50b3BpY05hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpY05hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudG9waWNOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RvcGljTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50b3BpY05hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVG9waWNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9DS0VUTVE1OjpUb3BpY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVG9waWNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9DS0VUTVE1OjpUb3BpY2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NUb3BpY1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVG9waWNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgTWVzc2FnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWVzc2FnZVR5cGUpLFxuICAgICAgVG9waWNOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRvcGljTmFtZSksXG4gICAgICBSZW1hcms6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVtYXJrKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpST0NLRVRNUTU6OlRvcGljYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSB0b3BpYyBmb3IgYSBNZXNzYWdlIFF1ZXVlIGZvciBBcGFjaGUgUm9ja2V0TVEgVjUuMCBpbnN0YW5jZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVG9waWNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJvY2tldG1xNS10b3BpY1xuICovXG5leHBvcnQgY2xhc3MgUm9zVG9waWMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJPQ0tFVE1RNTo6VG9waWNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTWVzc2FnZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBtZXNzYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWVzc2FnZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVG9waWNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgdG9waWMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUb3BpY05hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZXNzYWdlVHlwZTogVGhlIG1lc3NhZ2UgdHlwZSBvZiB0aGUgdG9waWMgdG8gYmUgY3JlYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIE5PUk1BTFxuICAgICAqIEZJRk9cbiAgICAgKiBERUxBWVxuICAgICAqIFRSQU5TQUNUSU9OXG4gICAgICovXG4gICAgcHVibGljIG1lc3NhZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdG9waWNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgdG9waWMgdG8gYmUgY3JlYXRlZCBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSB0b3BpYyBhbmQgaXMgZ2xvYmFsbHkgdW5pcXVlLlxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDaGFyYWN0ZXIgbGltaXRhdGlvbjogc3VwcG9ydHMgbGV0dGVycyBhfnogb3IgQS1aLCBudW1iZXJzIDAtOSwgdW5kZXJzY29yZSAoXyksIGRhc2ggKC0pIGFuZCBwZXJjZW50IHNpZ24gKCUpLlxuICAgICAqIExlbmd0aCBsaW1pdDogMS02MCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyB0b3BpY05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmsgb2YgdGhlIHRvcGljIHRvIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlbWFyazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1RvcGljUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NUb3BpYy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0ck1lc3NhZ2VUeXBlID0gdGhpcy5nZXRBdHQoJ01lc3NhZ2VUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0clRvcGljTmFtZSA9IHRoaXMuZ2V0QXR0KCdUb3BpY05hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZCA9IHByb3BzLmluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMubWVzc2FnZVR5cGUgPSBwcm9wcy5tZXNzYWdlVHlwZTtcbiAgICAgICAgdGhpcy50b3BpY05hbWUgPSBwcm9wcy50b3BpY05hbWU7XG4gICAgICAgIHRoaXMucmVtYXJrID0gcHJvcHMucmVtYXJrO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHRoaXMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiB0aGlzLm1lc3NhZ2VUeXBlLFxuICAgICAgICAgICAgdG9waWNOYW1lOiB0aGlzLnRvcGljTmFtZSxcbiAgICAgICAgICAgIHJlbWFyazogdGhpcy5yZW1hcmssXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1RvcGljUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=