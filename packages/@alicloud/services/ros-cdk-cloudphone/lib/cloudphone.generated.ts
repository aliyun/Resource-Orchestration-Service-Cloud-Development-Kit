// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::CloudPhone::InstanceGroup`
 */
export interface RosInstanceGroupProps {

    /**
     * @Property imageId: The image id
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: instance type
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: vswitch id
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property amount: Specifies the number of ECS instances to create.Value range: 1~100
     * Default：1
     */
    readonly amount?: number | ros.IResolvable;

    /**
     * @Property autoPay: Whether to pay automatically, the default is true
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether renew the fee automatically. 
     * When the parameter InstanceChargeType is PrePaid, it will take effect. 
     * Range of value:True: automatic renewal. 
     * False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property chargeType: Instance internet access charge type.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property description: Description of instance. 
     * The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property eipBandwidth: EIP bandwidth value, the value range is 1-200. 
     * Setting this parameter will automatically create an EIP instance 
     * corresponding to the bandwidth and bind the EIP instance to the 
     * cloud phone instance. When the instance is released, this EIP 
     * instance will be released and recycled together.
     */
    readonly eipBandwidth?: number | ros.IResolvable;

    /**
     * @Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must 
     * start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property keyPairName: Cloud phone instance key pair name. 
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     *
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property resolution: You can use the DescribeInstanceTypes interface to query the list of 
     * resolutions supported by the current specification and select an appropriate resolution.
     */
    readonly resolution?: string | ros.IResolvable;

    /**
     * @Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vncPassword: Cloud phone VNC password.
     * The password must be six characters long, and must contain only uppercase, 
     * lowercase English letters and Arabic numerals.
     */
    readonly vncPassword?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.amount && (typeof properties.amount) !== 'object') {
        errors.collect(ros.propertyValidator('amount', ros.validateRange)({
            data: properties.amount,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('eipBandwidth', ros.validateNumber)(properties.eipBandwidth));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.vncPassword && (typeof properties.vncPassword) !== 'object') {
        errors.collect(ros.propertyValidator('vncPassword', ros.validateAllowedPattern)({
          data: properties.vncPassword,
          reg: /[a-zA-Z0-9]{6}/
        }));
    }
    errors.collect(ros.propertyValidator('vncPassword', ros.validateString)(properties.vncPassword));
    if(properties.tag && (Array.isArray(properties.tag) || (typeof properties.tag) === 'string')) {
        errors.collect(ros.propertyValidator('tag', ros.validateLength)({
            data: properties.tag.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('resolution', ros.validateString)(properties.resolution));
    return errors.wrap('supplied properties not correct for "RosInstanceGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::InstanceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::InstanceGroup` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      Amount: ros.numberToRosTemplate(properties.amount),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      Description: ros.stringToRosTemplate(properties.description),
      EipBandwidth: ros.numberToRosTemplate(properties.eipBandwidth),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      Resolution: ros.stringToRosTemplate(properties.resolution),
      Tag: ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
      VncPassword: ros.stringToRosTemplate(properties.vncPassword),
    };
}

/**
 * A ROS template type:  `ALIYUN::CloudPhone::InstanceGroup`
 */
export class RosInstanceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::InstanceGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceIds: instance ids
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute OrderId: oder id
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute TradePrice: price
     */
    public readonly attrTradePrice: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: The image id
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: instance type
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: vswitch id
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property amount: Specifies the number of ECS instances to create.Value range: 1~100
     * Default：1
     */
    public amount: number | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Whether to pay automatically, the default is true
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically. 
     * When the parameter InstanceChargeType is PrePaid, it will take effect. 
     * Range of value:True: automatic renewal. 
     * False: no automatic renewal. Default value is False.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property chargeType: Instance internet access charge type.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property description: Description of instance. 
     * The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property eipBandwidth: EIP bandwidth value, the value range is 1-200. 
     * Setting this parameter will automatically create an EIP instance 
     * corresponding to the bandwidth and bind the EIP instance to the 
     * cloud phone instance. When the instance is released, this EIP 
     * instance will be released and recycled together.
     */
    public eipBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must 
     * start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: Cloud phone instance key pair name. 
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     *
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property resolution: You can use the DescribeInstanceTypes interface to query the list of 
     * resolutions supported by the current specification and select an appropriate resolution.
     */
    public resolution: string | ros.IResolvable | undefined;

    /**
     * @Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property vncPassword: Cloud phone VNC password.
     * The password must be six characters long, and must contain only uppercase, 
     * lowercase English letters and Arabic numerals.
     */
    public vncPassword: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CloudPhone::InstanceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrTradePrice = this.getAtt('TradePrice');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.instanceType = props.instanceType;
        this.securityGroupId = props.securityGroupId;
        this.vSwitchId = props.vSwitchId;
        this.amount = props.amount;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.chargeType = props.chargeType;
        this.description = props.description;
        this.eipBandwidth = props.eipBandwidth;
        this.instanceName = props.instanceName;
        this.keyPairName = props.keyPairName;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resolution = props.resolution;
        this.tag = props.tag;
        this.vncPassword = props.vncPassword;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            instanceType: this.instanceType,
            securityGroupId: this.securityGroupId,
            vSwitchId: this.vSwitchId,
            amount: this.amount,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            chargeType: this.chargeType,
            description: this.description,
            eipBandwidth: this.eipBandwidth,
            instanceName: this.instanceName,
            keyPairName: this.keyPairName,
            period: this.period,
            periodUnit: this.periodUnit,
            resolution: this.resolution,
            tag: this.tag,
            vncPassword: this.vncPassword,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstanceGroup {
    /**
     * @stability external
     */
    export interface TagProperty {
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
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroup_TagPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::InstanceGroup.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::InstanceGroup.Tag` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupTagPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceGroup_TagPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
