// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosPort`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
 */
export interface RosPortProps {

    /**
     * @Property frontendProtocol: The type of the protocol. Valid values: 
     * tcp
     * udp
     */
    readonly frontendProtocol: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property realServers: An array that consists of the IP addresses of origin servers.
     */
    readonly realServers: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property backendPort: The port of the origin server. Valid values: 0 to 65535.
     */
    readonly backendPort?: string | ros.IResolvable;

    /**
     * @Property frontendPort: The forwarding port. Valid values: 0 to 65535.
     */
    readonly frontendPort?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPortProps`
 *
 * @param properties - the TypeScript properties of a `RosPortProps`
 *
 * @returns the result of the validation.
 */
function RosPortPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backendPort', ros.validateString)(properties.backendPort));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('realServers', ros.requiredValidator)(properties.realServers));
    if(properties.realServers && (Array.isArray(properties.realServers) || (typeof properties.realServers) === 'string')) {
        errors.collect(ros.propertyValidator('realServers', ros.validateLength)({
            data: properties.realServers.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('realServers', ros.listValidator(ros.validateString))(properties.realServers));
    errors.collect(ros.propertyValidator('frontendPort', ros.validateString)(properties.frontendPort));
    errors.collect(ros.propertyValidator('frontendProtocol', ros.requiredValidator)(properties.frontendProtocol));
    if(properties.frontendProtocol && (typeof properties.frontendProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('frontendProtocol', ros.validateAllowedValues)({
          data: properties.frontendProtocol,
          allowedValues: ["tcp","udp"],
        }));
    }
    errors.collect(ros.propertyValidator('frontendProtocol', ros.validateString)(properties.frontendProtocol));
    return errors.wrap('supplied properties not correct for "RosPortProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::Port` resource
 *
 * @param properties - the TypeScript properties of a `RosPortProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::Port` resource.
 */
// @ts-ignore TS6133
function rosPortPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPortPropsValidator(properties).assertSuccess();
    }
    return {
      'FrontendProtocol': ros.stringToRosTemplate(properties.frontendProtocol),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RealServers': ros.listMapper(ros.stringToRosTemplate)(properties.realServers),
      'BackendPort': ros.stringToRosTemplate(properties.backendPort),
      'FrontendPort': ros.stringToRosTemplate(properties.frontendPort),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::Port`, which is used to create a port forwarding rule for an Anti-DDoS Proxy instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Port` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
 */
export class RosPort extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::Port";

    /**
     * @Attribute FrontendPort: The forwarding port.
     */
    public readonly attrFrontendPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property frontendProtocol: The type of the protocol. Valid values: 
     * tcp
     * udp
     */
    public frontendProtocol: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property realServers: An array that consists of the IP addresses of origin servers.
     */
    public realServers: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property backendPort: The port of the origin server. Valid values: 0 to 65535.
     */
    public backendPort: string | ros.IResolvable | undefined;

    /**
     * @Property frontendPort: The forwarding port. Valid values: 0 to 65535.
     */
    public frontendPort: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPortProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPort.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFrontendPort = this.getAtt('FrontendPort');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.frontendProtocol = props.frontendProtocol;
        this.instanceId = props.instanceId;
        this.realServers = props.realServers;
        this.backendPort = props.backendPort;
        this.frontendPort = props.frontendPort;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            frontendProtocol: this.frontendProtocol,
            instanceId: this.instanceId,
            realServers: this.realServers,
            backendPort: this.backendPort,
            frontendPort: this.frontendPort,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPortPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

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

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosPremiumInstance.TagsProperty[];
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
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosPremiumInstance_TagsPropertyValidator))(properties.tags));
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
      'BurstBandwidthMode': ros.stringToRosTemplate(properties.burstBandwidthMode),
      'DomainCount': ros.numberToRosTemplate(properties.domainCount),
      'FunctionVersion': ros.stringToRosTemplate(properties.functionVersion),
      'NormalBandwidth': ros.numberToRosTemplate(properties.normalBandwidth),
      'NormalQps': ros.numberToRosTemplate(properties.normalQps),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'PortCount': ros.numberToRosTemplate(properties.portCount),
      'ProductPlan': ros.stringToRosTemplate(properties.productPlan),
      'Tags': ros.listMapper(rosPremiumInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::PremiumInstance`, which is used to create an Anti-DDoS Proxy (Outside Chinese Mainland) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `PremiumInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
 */
export class RosPremiumInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::PremiumInstance";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosPremiumInstance.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPremiumInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPremiumInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
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
        this.tags = props.tags;
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
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPremiumInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPremiumInstance {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosPremiumInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::PremiumInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::PremiumInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosPremiumInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPremiumInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
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

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosProInstance.TagsProperty[];
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
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosProInstance_TagsPropertyValidator))(properties.tags));
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
      'AddressType': ros.stringToRosTemplate(properties.addressType),
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'BaseBandwidth': ros.numberToRosTemplate(properties.baseBandwidth),
      'BurstBandwidthMode': ros.stringToRosTemplate(properties.burstBandwidthMode),
      'DomainCount': ros.numberToRosTemplate(properties.domainCount),
      'Edition': ros.stringToRosTemplate(properties.edition),
      'FunctionVersion': ros.stringToRosTemplate(properties.functionVersion),
      'NormalQps': ros.numberToRosTemplate(properties.normalQps),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'PortCount': ros.numberToRosTemplate(properties.portCount),
      'ServiceBandwidth': ros.numberToRosTemplate(properties.serviceBandwidth),
      'ServicePartner': ros.stringToRosTemplate(properties.servicePartner),
      'Tags': ros.listMapper(rosProInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::ProInstance`, which is used to create an Anti-DDoS Proxy (Chinese Mainland) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
 */
export class RosProInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::ProInstance";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosProInstance.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
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
        this.tags = props.tags;
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
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosProInstance {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosProInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::ProInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::ProInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosProInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosSceneDefensePolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
 */
export interface RosSceneDefensePolicyProps {

    /**
     * @Property endTime: The end time of the policy. This value is a UNIX timestamp. Units: milliseconds.
     */
    readonly endTime: number | ros.IResolvable;

    /**
     * @Property name: The name of the policy.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property startTime: The start time of the policy. This value is a UNIX timestamp. Units: milliseconds.
     */
    readonly startTime: number | ros.IResolvable;

    /**
     * @Property template: The template of the policy. Valid values:
     * promotion: important activity
     * bypass: all traffic forwarded
     */
    readonly template: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSceneDefensePolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosSceneDefensePolicyProps`
 *
 * @returns the result of the validation.
 */
function RosSceneDefensePolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endTime', ros.requiredValidator)(properties.endTime));
    errors.collect(ros.propertyValidator('endTime', ros.validateNumber)(properties.endTime));
    errors.collect(ros.propertyValidator('startTime', ros.requiredValidator)(properties.startTime));
    errors.collect(ros.propertyValidator('startTime', ros.validateNumber)(properties.startTime));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('template', ros.requiredValidator)(properties.template));
    if(properties.template && (typeof properties.template) !== 'object') {
        errors.collect(ros.propertyValidator('template', ros.validateAllowedValues)({
          data: properties.template,
          allowedValues: ["promotion","bypass"],
        }));
    }
    errors.collect(ros.propertyValidator('template', ros.validateString)(properties.template));
    return errors.wrap('supplied properties not correct for "RosSceneDefensePolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::SceneDefensePolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosSceneDefensePolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::SceneDefensePolicy` resource.
 */
// @ts-ignore TS6133
function rosSceneDefensePolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSceneDefensePolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'EndTime': ros.numberToRosTemplate(properties.endTime),
      'Name': ros.stringToRosTemplate(properties.name),
      'StartTime': ros.numberToRosTemplate(properties.startTime),
      'Template': ros.stringToRosTemplate(properties.template),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::SceneDefensePolicy`, which is used to create a scenario-specific custom policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `SceneDefensePolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
 */
export class RosSceneDefensePolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::SceneDefensePolicy";

    /**
     * @Attribute Name: The name of the policy.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property endTime: The end time of the policy. This value is a UNIX timestamp. Units: milliseconds.
     */
    public endTime: number | ros.IResolvable;

    /**
     * @Property name: The name of the policy.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property startTime: The start time of the policy. This value is a UNIX timestamp. Units: milliseconds.
     */
    public startTime: number | ros.IResolvable;

    /**
     * @Property template: The template of the policy. Valid values:
     * promotion: important activity
     * bypass: all traffic forwarded
     */
    public template: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSceneDefensePolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSceneDefensePolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.endTime = props.endTime;
        this.name = props.name;
        this.startTime = props.startTime;
        this.template = props.template;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endTime: this.endTime,
            name: this.name,
            startTime: this.startTime,
            template: this.template,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSceneDefensePolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSchedulerRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-schedulerrule
 */
export interface RosSchedulerRuleProps {

    /**
     * @Property ruleName: The name of the rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property rules: The details of the scheduling rule. This parameter is a JSON string. The following list describes the fields in the value of the parameter: 
     * Type: the address type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type. Valid values: A: IP address. CNAME: domain name
     * Value: the address of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type.
     * Priority: the priority of the scheduling rule. This field is required and must be of the integer type. Valid values: 0 to 100. A larger value indicates a higher priority.
     * ValueType: the type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the integer type. Valid values: 1: the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance. 2: the IP address of the interaction resource in the tiered protection scenario. 3: the IP address that is used to accelerate access in the network acceleration scenario. 5: the domain name that is configured in Alibaba Cloud CDN (CDN) in the CDN interaction scenario. 6 the IP address of the interaction resource in the cloud service interaction scenario 
     * RegionId: the region where the interaction resource is deployed. This parameter must be specified when ValueType is set to 2. The value must be of the string type.
     */
    readonly rules: string | ros.IResolvable;

    /**
     * @Property ruleType: The type of the custom defense rule. Valid values: 
     * 2: tiered protection 
     * 3: network acceleration 
     * 5: CDN interaction 
     * 6: cloud service interaction
     * 8: secure acceleration
     */
    readonly ruleType: number | ros.IResolvable;

    /**
     * @Property param: The details of the CDN interaction rule. This parameter is a JSON string. The following list describes the fields in the value of the parameter: 
     * ParamType: the type of the scheduling rule. This field is required and must be of the string type. Set the value to cdn. This indicates that you want to modify a CDN interaction rule. 
     * ParamData: the values of parameters that you want to modify for the CDN interaction rule. This field is required and must be of the map type. ParamData contains the following parameters: Domain: the accelerated domain in CDN. This parameter is required and must be of the string type; Cname: the CNAME that is assigned to the accelerated domain. This parameter is required and must be of the string type; AccessQps: the queries per second (QPS) threshold that is used to switch service traffic to Anti-DDoS Pro or Anti-DDoS Premium. This parameter is required and must be of the integer type; UpstreamQps: the QPS threshold that is used to switch service traffic to CDN. This parameter is optional and must be of the integer type.
     */
    readonly param?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSchedulerRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosSchedulerRuleProps`
 *
 * @returns the result of the validation.
 */
function RosSchedulerRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('param', ros.validateString)(properties.param));
    errors.collect(ros.propertyValidator('ruleType', ros.requiredValidator)(properties.ruleType));
    if(properties.ruleType && (typeof properties.ruleType) !== 'object') {
        errors.collect(ros.propertyValidator('ruleType', ros.validateAllowedValues)({
          data: properties.ruleType,
          allowedValues: [2,3,5,6,8],
        }));
    }
    errors.collect(ros.propertyValidator('ruleType', ros.validateNumber)(properties.ruleType));
    errors.collect(ros.propertyValidator('rules', ros.requiredValidator)(properties.rules));
    errors.collect(ros.propertyValidator('rules', ros.validateString)(properties.rules));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosSchedulerRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::SchedulerRule` resource
 *
 * @param properties - the TypeScript properties of a `RosSchedulerRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::SchedulerRule` resource.
 */
// @ts-ignore TS6133
function rosSchedulerRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSchedulerRulePropsValidator(properties).assertSuccess();
    }
    return {
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Rules': ros.stringToRosTemplate(properties.rules),
      'RuleType': ros.numberToRosTemplate(properties.ruleType),
      'Param': ros.stringToRosTemplate(properties.param),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::SchedulerRule`, which is used to create a scheduling rule for Sec-Traffic Manager.
 * @Note This class does not contain additional functions, so it is recommended to use the `SchedulerRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-schedulerrule
 */
export class RosSchedulerRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::SchedulerRule";

    /**
     * @Attribute RuleName: The name of the rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ruleName: The name of the rule.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property rules: The details of the scheduling rule. This parameter is a JSON string. The following list describes the fields in the value of the parameter: 
     * Type: the address type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type. Valid values: A: IP address. CNAME: domain name
     * Value: the address of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type.
     * Priority: the priority of the scheduling rule. This field is required and must be of the integer type. Valid values: 0 to 100. A larger value indicates a higher priority.
     * ValueType: the type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the integer type. Valid values: 1: the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance. 2: the IP address of the interaction resource in the tiered protection scenario. 3: the IP address that is used to accelerate access in the network acceleration scenario. 5: the domain name that is configured in Alibaba Cloud CDN (CDN) in the CDN interaction scenario. 6 the IP address of the interaction resource in the cloud service interaction scenario 
     * RegionId: the region where the interaction resource is deployed. This parameter must be specified when ValueType is set to 2. The value must be of the string type.
     */
    public rules: string | ros.IResolvable;

    /**
     * @Property ruleType: The type of the custom defense rule. Valid values: 
     * 2: tiered protection 
     * 3: network acceleration 
     * 5: CDN interaction 
     * 6: cloud service interaction
     * 8: secure acceleration
     */
    public ruleType: number | ros.IResolvable;

    /**
     * @Property param: The details of the CDN interaction rule. This parameter is a JSON string. The following list describes the fields in the value of the parameter: 
     * ParamType: the type of the scheduling rule. This field is required and must be of the string type. Set the value to cdn. This indicates that you want to modify a CDN interaction rule. 
     * ParamData: the values of parameters that you want to modify for the CDN interaction rule. This field is required and must be of the map type. ParamData contains the following parameters: Domain: the accelerated domain in CDN. This parameter is required and must be of the string type; Cname: the CNAME that is assigned to the accelerated domain. This parameter is required and must be of the string type; AccessQps: the queries per second (QPS) threshold that is used to switch service traffic to Anti-DDoS Pro or Anti-DDoS Premium. This parameter is required and must be of the integer type; UpstreamQps: the QPS threshold that is used to switch service traffic to CDN. This parameter is optional and must be of the integer type.
     */
    public param: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSchedulerRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSchedulerRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRuleName = this.getAtt('RuleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ruleName = props.ruleName;
        this.rules = props.rules;
        this.ruleType = props.ruleType;
        this.param = props.param;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ruleName: this.ruleName,
            rules: this.rules,
            ruleType: this.ruleType,
            param: this.param,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSchedulerRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWebRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-webrule
 */
export interface RosWebRuleProps {

    /**
     * @Property domain: The domain name of the website that you want to add to the instance.
     */
    readonly domain: string | ros.IResolvable;

    /**
     * @Property rsType: The address type of the origin server. Valid values:
     * 0: IP address
     * 1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
     */
    readonly rsType: number | ros.IResolvable;

    /**
     * @Property rules: The details of the forwarding rule. The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields: 
     * ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
     * ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
     */
    readonly rules: string | ros.IResolvable;

    /**
     * @Property defenseId: The ID of the associated defense. This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
     */
    readonly defenseId?: string | ros.IResolvable;

    /**
     * @Property httpsExt: The advanced HTTPS settings. This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields: 
     * Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
     * Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
     * Http2: specifies whether to turn on Enable HTTP\/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP\/2 is turned off. The value 1 indicates that Enable HTTP\/2 is turned on. The default value is 0. After you turn on Enable HTTP\/2, the protocol type is HTTP\/2.
     */
    readonly httpsExt?: string | ros.IResolvable;

    /**
     * @Property instanceIds: An array consisting of the IDs of instances that you want to associate.
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWebRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosWebRuleProps`
 *
 * @returns the result of the validation.
 */
function RosWebRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('rsType', ros.requiredValidator)(properties.rsType));
    if(properties.rsType && (typeof properties.rsType) !== 'object') {
        errors.collect(ros.propertyValidator('rsType', ros.validateAllowedValues)({
          data: properties.rsType,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('rsType', ros.validateNumber)(properties.rsType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('defenseId', ros.validateString)(properties.defenseId));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    errors.collect(ros.propertyValidator('rules', ros.requiredValidator)(properties.rules));
    errors.collect(ros.propertyValidator('rules', ros.validateString)(properties.rules));
    errors.collect(ros.propertyValidator('httpsExt', ros.validateString)(properties.httpsExt));
    return errors.wrap('supplied properties not correct for "RosWebRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::WebRule` resource
 *
 * @param properties - the TypeScript properties of a `RosWebRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoSPro::WebRule` resource.
 */
// @ts-ignore TS6133
function rosWebRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWebRulePropsValidator(properties).assertSuccess();
    }
    return {
      'Domain': ros.stringToRosTemplate(properties.domain),
      'RsType': ros.numberToRosTemplate(properties.rsType),
      'Rules': ros.stringToRosTemplate(properties.rules),
      'DefenseId': ros.stringToRosTemplate(properties.defenseId),
      'HttpsExt': ros.stringToRosTemplate(properties.httpsExt),
      'InstanceIds': ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::WebRule`, which is used to create a forwarding rule for a website.
 * @Note This class does not contain additional functions, so it is recommended to use the `WebRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-webrule
 */
export class RosWebRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::WebRule";

    /**
     * @Attribute Domain: The domain name of the website that you want to add to the instance.
     */
    public readonly attrDomain: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: The domain name of the website that you want to add to the instance.
     */
    public domain: string | ros.IResolvable;

    /**
     * @Property rsType: The address type of the origin server. Valid values:
     * 0: IP address
     * 1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
     */
    public rsType: number | ros.IResolvable;

    /**
     * @Property rules: The details of the forwarding rule. The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields: 
     * ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
     * ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
     */
    public rules: string | ros.IResolvable;

    /**
     * @Property defenseId: The ID of the associated defense. This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
     */
    public defenseId: string | ros.IResolvable | undefined;

    /**
     * @Property httpsExt: The advanced HTTPS settings. This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields: 
     * Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
     * Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
     * Http2: specifies whether to turn on Enable HTTP\/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP\/2 is turned off. The value 1 indicates that Enable HTTP\/2 is turned on. The default value is 0. After you turn on Enable HTTP\/2, the protocol type is HTTP\/2.
     */
    public httpsExt: string | ros.IResolvable | undefined;

    /**
     * @Property instanceIds: An array consisting of the IDs of instances that you want to associate.
     */
    public instanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWebRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWebRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomain = this.getAtt('Domain');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domain = props.domain;
        this.rsType = props.rsType;
        this.rules = props.rules;
        this.defenseId = props.defenseId;
        this.httpsExt = props.httpsExt;
        this.instanceIds = props.instanceIds;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domain: this.domain,
            rsType: this.rsType,
            rules: this.rules,
            defenseId: this.defenseId,
            httpsExt: this.httpsExt,
            instanceIds: this.instanceIds,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWebRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
