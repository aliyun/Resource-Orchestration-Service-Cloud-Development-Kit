// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosPremiumInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
 */
export interface RosPremiumInstanceProps {

    /**
     * @Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    readonly burstBandwidthMode?: string | ros.IResolvable;

    /**
     * @Property domainCount: The number of domain names that you want to protect.
     * The value of DomainCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     */
    readonly domainCount?: number | ros.IResolvable;

    /**
     * @Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    readonly functionVersion?: string | ros.IResolvable;

    /**
     * @Property normalBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * The value of NormalBandwidth varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
     * If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
     */
    readonly normalBandwidth?: number | ros.IResolvable;

    /**
     * @Property normalQps: The clean QPS provided by the instance.
     * The value of NormalQps varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     */
    readonly normalQps?: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property portCount: The number of ports that you want to protect.
     * The value of PortCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     */
    readonly portCount?: number | ros.IResolvable;

    /**
     * @Property productPlan: The mitigation plan of the instance. Valid values:
     * 0: the Insurance mitigation plan
     * 1: the Unlimited mitigation plan
     * 2: the Chinese Mainland Acceleration (CMA) mitigation plan
     * 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
     */
    readonly productPlan?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPremiumInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosPremiumInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosPremiumInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.normalQps && (typeof properties.normalQps) !== 'object') {
        errors.collect(ros.propertyValidator('normalQps', ros.validateRange)({
            data: properties.normalQps,
            min: 500,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('normalQps', ros.validateNumber)(properties.normalQps));
    if(properties.normalBandwidth && (typeof properties.normalBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('normalBandwidth', ros.validateRange)({
            data: properties.normalBandwidth,
            min: 10,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('normalBandwidth', ros.validateNumber)(properties.normalBandwidth));
    if(properties.functionVersion && (typeof properties.functionVersion) !== 'object') {
        errors.collect(ros.propertyValidator('functionVersion', ros.validateAllowedValues)({
          data: properties.functionVersion,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('functionVersion', ros.validateString)(properties.functionVersion));
    if(properties.productPlan && (typeof properties.productPlan) !== 'object') {
        errors.collect(ros.propertyValidator('productPlan', ros.validateAllowedValues)({
          data: properties.productPlan,
          allowedValues: ["0","1","2","3"],
        }));
    }
    errors.collect(ros.propertyValidator('productPlan', ros.validateString)(properties.productPlan));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,12,24],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.portCount && (typeof properties.portCount) !== 'object') {
        errors.collect(ros.propertyValidator('portCount', ros.validateRange)({
            data: properties.portCount,
            min: 5,
            max: 400,
          }));
    }
    errors.collect(ros.propertyValidator('portCount', ros.validateNumber)(properties.portCount));
    if(properties.burstBandwidthMode && (typeof properties.burstBandwidthMode) !== 'object') {
        errors.collect(ros.propertyValidator('burstBandwidthMode', ros.validateAllowedValues)({
          data: properties.burstBandwidthMode,
          allowedValues: ["0","1","2"],
        }));
    }
    errors.collect(ros.propertyValidator('burstBandwidthMode', ros.validateString)(properties.burstBandwidthMode));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year","month","year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    if(properties.domainCount && (typeof properties.domainCount) !== 'object') {
        errors.collect(ros.propertyValidator('domainCount', ros.validateRange)({
            data: properties.domainCount,
            min: 10,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('domainCount', ros.validateNumber)(properties.domainCount));
    return errors.wrap('supplied properties not correct for "RosPremiumInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::PremiumInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosPremiumInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::PremiumInstance` resource.
 */
// @ts-ignore TS6133
function rosPremiumInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPremiumInstancePropsValidator(properties).assertSuccess();
    }
    return {
      BurstBandwidthMode: ros.stringToRosTemplate(properties.burstBandwidthMode),
      DomainCount: ros.numberToRosTemplate(properties.domainCount),
      FunctionVersion: ros.stringToRosTemplate(properties.functionVersion),
      NormalBandwidth: ros.numberToRosTemplate(properties.normalBandwidth),
      NormalQps: ros.numberToRosTemplate(properties.normalQps),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PortCount: ros.numberToRosTemplate(properties.portCount),
      ProductPlan: ros.stringToRosTemplate(properties.productPlan),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::PremiumInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PremiumInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
 */
export class RosPremiumInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::PremiumInstance";

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    public burstBandwidthMode: string | ros.IResolvable | undefined;

    /**
     * @Property domainCount: The number of domain names that you want to protect.
     * The value of DomainCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     */
    public domainCount: number | ros.IResolvable | undefined;

    /**
     * @Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    public functionVersion: string | ros.IResolvable | undefined;

    /**
     * @Property normalBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * The value of NormalBandwidth varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
     * If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
     */
    public normalBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property normalQps: The clean QPS provided by the instance.
     * The value of NormalQps varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     */
    public normalQps: number | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property portCount: The number of ports that you want to protect.
     * The value of PortCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     */
    public portCount: number | ros.IResolvable | undefined;

    /**
     * @Property productPlan: The mitigation plan of the instance. Valid values:
     * 0: the Insurance mitigation plan
     * 1: the Unlimited mitigation plan
     * 2: the Chinese Mainland Acceleration (CMA) mitigation plan
     * 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
     */
    public productPlan: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPremiumInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPremiumInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.burstBandwidthMode = props.burstBandwidthMode;
        this.domainCount = props.domainCount;
        this.functionVersion = props.functionVersion;
        this.normalBandwidth = props.normalBandwidth;
        this.normalQps = props.normalQps;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.portCount = props.portCount;
        this.productPlan = props.productPlan;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            burstBandwidthMode: this.burstBandwidthMode,
            domainCount: this.domainCount,
            functionVersion: this.functionVersion,
            normalBandwidth: this.normalBandwidth,
            normalQps: this.normalQps,
            period: this.period,
            periodUnit: this.periodUnit,
            portCount: this.portCount,
            productPlan: this.productPlan,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPremiumInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosProInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
 */
export interface RosProInstanceProps {

    /**
     * @Property addressType: The IP version of the IP address. Valid values: Ipv4、Ipv6
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * @Property bandwidth: The burstable protection bandwidth. Unit: Gbit\/s.
     * The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property baseBandwidth: The basic protection bandwidth. Unit: Gbit\/s.
     * Valid values: 30, 60, 100, 300, 400, 500, and 600.
     */
    readonly baseBandwidth?: number | ros.IResolvable;

    /**
     * @Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    readonly burstBandwidthMode?: string | ros.IResolvable;

    /**
     * @Property domainCount: The number of domain names that you want to protect.
     * Valid values: 50 to 2000. The value must be a multiple of 10.
     */
    readonly domainCount?: number | ros.IResolvable;

    /**
     * @Property edition: The mitigation plan of the instance. Set the value to coop, which indicates the Profession mitigation plan.
     */
    readonly edition?: string | ros.IResolvable;

    /**
     * @Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    readonly functionVersion?: string | ros.IResolvable;

    /**
     * @Property normalQps: The clean queries per second (QPS) provided by the instance.
     * Valid values: 3000 to 100000. The value must be a multiple of 100.
     */
    readonly normalQps?: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property portCount: The number of ports that you want to protect.
     * Valid values: 50 to 400. The value must be a multiple of 5.
     */
    readonly portCount?: number | ros.IResolvable;

    /**
     * @Property serviceBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * Valid values: 100 to 5000. The value must be a multiple of 50.
     */
    readonly serviceBandwidth?: number | ros.IResolvable;

    /**
     * @Property servicePartner: The type of the protection line. Set the value to coop-line-001, which indicates the default protection line.
     */
    readonly servicePartner?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosProInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosProInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.normalQps && (typeof properties.normalQps) !== 'object') {
        errors.collect(ros.propertyValidator('normalQps', ros.validateRange)({
            data: properties.normalQps,
            min: 3000,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('normalQps', ros.validateNumber)(properties.normalQps));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,12,24],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.portCount && (typeof properties.portCount) !== 'object') {
        errors.collect(ros.propertyValidator('portCount', ros.validateRange)({
            data: properties.portCount,
            min: 50,
            max: 400,
          }));
    }
    errors.collect(ros.propertyValidator('portCount', ros.validateNumber)(properties.portCount));
    errors.collect(ros.propertyValidator('edition', ros.validateString)(properties.edition));
    if(properties.burstBandwidthMode && (typeof properties.burstBandwidthMode) !== 'object') {
        errors.collect(ros.propertyValidator('burstBandwidthMode', ros.validateAllowedValues)({
          data: properties.burstBandwidthMode,
          allowedValues: ["0","1","2"],
        }));
    }
    errors.collect(ros.propertyValidator('burstBandwidthMode', ros.validateString)(properties.burstBandwidthMode));
    if(properties.serviceBandwidth && (typeof properties.serviceBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('serviceBandwidth', ros.validateRange)({
            data: properties.serviceBandwidth,
            min: 100,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('serviceBandwidth', ros.validateNumber)(properties.serviceBandwidth));
    errors.collect(ros.propertyValidator('servicePartner', ros.validateString)(properties.servicePartner));
    if(properties.baseBandwidth && (typeof properties.baseBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('baseBandwidth', ros.validateAllowedValues)({
          data: properties.baseBandwidth,
          allowedValues: [30,60,100,300,400,500,600],
        }));
    }
    errors.collect(ros.propertyValidator('baseBandwidth', ros.validateNumber)(properties.baseBandwidth));
    if(properties.functionVersion && (typeof properties.functionVersion) !== 'object') {
        errors.collect(ros.propertyValidator('functionVersion', ros.validateAllowedValues)({
          data: properties.functionVersion,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('functionVersion', ros.validateString)(properties.functionVersion));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.addressType && (typeof properties.addressType) !== 'object') {
        errors.collect(ros.propertyValidator('addressType', ros.validateAllowedValues)({
          data: properties.addressType,
          allowedValues: ["Ipv4","Ipv6"],
        }));
    }
    errors.collect(ros.propertyValidator('addressType', ros.validateString)(properties.addressType));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year","month","year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    if(properties.domainCount && (typeof properties.domainCount) !== 'object') {
        errors.collect(ros.propertyValidator('domainCount', ros.validateRange)({
            data: properties.domainCount,
            min: 50,
            max: 2000,
          }));
    }
    errors.collect(ros.propertyValidator('domainCount', ros.validateNumber)(properties.domainCount));
    return errors.wrap('supplied properties not correct for "RosProInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::ProInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosProInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::ProInstance` resource.
 */
// @ts-ignore TS6133
function rosProInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProInstancePropsValidator(properties).assertSuccess();
    }
    return {
      AddressType: ros.stringToRosTemplate(properties.addressType),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      BaseBandwidth: ros.numberToRosTemplate(properties.baseBandwidth),
      BurstBandwidthMode: ros.stringToRosTemplate(properties.burstBandwidthMode),
      DomainCount: ros.numberToRosTemplate(properties.domainCount),
      Edition: ros.stringToRosTemplate(properties.edition),
      FunctionVersion: ros.stringToRosTemplate(properties.functionVersion),
      NormalQps: ros.numberToRosTemplate(properties.normalQps),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PortCount: ros.numberToRosTemplate(properties.portCount),
      ServiceBandwidth: ros.numberToRosTemplate(properties.serviceBandwidth),
      ServicePartner: ros.stringToRosTemplate(properties.servicePartner),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::ProInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
 */
export class RosProInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::ProInstance";

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressType: The IP version of the IP address. Valid values: Ipv4、Ipv6
     */
    public addressType: string | ros.IResolvable | undefined;

    /**
     * @Property bandwidth: The burstable protection bandwidth. Unit: Gbit\/s.
     * The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property baseBandwidth: The basic protection bandwidth. Unit: Gbit\/s.
     * Valid values: 30, 60, 100, 300, 400, 500, and 600.
     */
    public baseBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    public burstBandwidthMode: string | ros.IResolvable | undefined;

    /**
     * @Property domainCount: The number of domain names that you want to protect.
     * Valid values: 50 to 2000. The value must be a multiple of 10.
     */
    public domainCount: number | ros.IResolvable | undefined;

    /**
     * @Property edition: The mitigation plan of the instance. Set the value to coop, which indicates the Profession mitigation plan.
     */
    public edition: string | ros.IResolvable | undefined;

    /**
     * @Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    public functionVersion: string | ros.IResolvable | undefined;

    /**
     * @Property normalQps: The clean queries per second (QPS) provided by the instance.
     * Valid values: 3000 to 100000. The value must be a multiple of 100.
     */
    public normalQps: number | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property portCount: The number of ports that you want to protect.
     * Valid values: 50 to 400. The value must be a multiple of 5.
     */
    public portCount: number | ros.IResolvable | undefined;

    /**
     * @Property serviceBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * Valid values: 100 to 5000. The value must be a multiple of 50.
     */
    public serviceBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property servicePartner: The type of the protection line. Set the value to coop-line-001, which indicates the default protection line.
     */
    public servicePartner: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressType = props.addressType;
        this.bandwidth = props.bandwidth;
        this.baseBandwidth = props.baseBandwidth;
        this.burstBandwidthMode = props.burstBandwidthMode;
        this.domainCount = props.domainCount;
        this.edition = props.edition;
        this.functionVersion = props.functionVersion;
        this.normalQps = props.normalQps;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.portCount = props.portCount;
        this.serviceBandwidth = props.serviceBandwidth;
        this.servicePartner = props.servicePartner;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressType: this.addressType,
            bandwidth: this.bandwidth,
            baseBandwidth: this.baseBandwidth,
            burstBandwidthMode: this.burstBandwidthMode,
            domainCount: this.domainCount,
            edition: this.edition,
            functionVersion: this.functionVersion,
            normalQps: this.normalQps,
            period: this.period,
            periodUnit: this.periodUnit,
            portCount: this.portCount,
            serviceBandwidth: this.serviceBandwidth,
            servicePartner: this.servicePartner,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
