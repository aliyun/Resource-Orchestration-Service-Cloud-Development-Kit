// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosOriginInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
 */
export interface RosOriginInstanceProps {

    /**
     * @Property edition: Edition of the instance. Valid values:
     *  - enterprise: Enterprise Edition.
     * - smb: Affordable and general edition for small and medium-sized enterprises.
     */
    readonly edition: string | ros.IResolvable;

    /**
     * @Property protectionMode: The mode of the protection. Valid values:
     * unlimited: The Unlimited protection mode is intended for internal use within enterprises.
     */
    readonly protectionMode: string | ros.IResolvable;

    /**
     * @Property chargeType: The charge type of the instance. Valid values:
     * PostPaid: Pay-as-you-go.
     * PrePaid: Subscription.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
     * When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit\/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit\/s.
     */
    readonly cleanBandwidth?: number | ros.IResolvable;

    /**
     * @Property enableLog: Whether to enable protection logs.
     */
    readonly enableLog?: boolean | ros.IResolvable;

    /**
     * @Property ipAddresses: The number of ip addresses.
     * When Edition is smb， IP Addresses ranges from 1 to 29.
     * When Edition is enterprise, The minimum number of IP Addresses is 30.
     */
    readonly ipAddresses?: number | ros.IResolvable;

    /**
     * @Property networkProtocol: The network protocol of the instance. Valid values:
     * v4: IPv4.
     * v6: IPv6.
     * v4_6: IPv4+IPv6.
     */
    readonly networkProtocol?: string | ros.IResolvable;

    /**
     * @Property period: The period of the instance.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The period unit of the instance. Valid values:
     * Month: Month.
     * Year: Year.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosOriginInstance.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosOriginInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosOriginInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosOriginInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ipAddresses && (typeof properties.ipAddresses) !== 'object') {
        errors.collect(ros.propertyValidator('ipAddresses', ros.validateRange)({
            data: properties.ipAddresses,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('ipAddresses', ros.validateNumber)(properties.ipAddresses));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 11,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('enableLog', ros.validateBoolean)(properties.enableLog));
    if(properties.networkProtocol && (typeof properties.networkProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('networkProtocol', ros.validateAllowedValues)({
          data: properties.networkProtocol,
          allowedValues: ["v4","v6","v4_6"],
        }));
    }
    errors.collect(ros.propertyValidator('networkProtocol', ros.validateString)(properties.networkProtocol));
    if(properties.cleanBandwidth && (typeof properties.cleanBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('cleanBandwidth', ros.validateRange)({
            data: properties.cleanBandwidth,
            min: 50,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('cleanBandwidth', ros.validateNumber)(properties.cleanBandwidth));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosOriginInstance_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('edition', ros.requiredValidator)(properties.edition));
    if(properties.edition && (typeof properties.edition) !== 'object') {
        errors.collect(ros.propertyValidator('edition', ros.validateAllowedValues)({
          data: properties.edition,
          allowedValues: ["enterprise","smb"],
        }));
    }
    errors.collect(ros.propertyValidator('edition', ros.validateString)(properties.edition));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year","month","year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('protectionMode', ros.requiredValidator)(properties.protectionMode));
    errors.collect(ros.propertyValidator('protectionMode', ros.validateString)(properties.protectionMode));
    return errors.wrap('supplied properties not correct for "RosOriginInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::OriginInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosOriginInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::OriginInstance` resource.
 */
// @ts-ignore TS6133
function rosOriginInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOriginInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'Edition': ros.stringToRosTemplate(properties.edition),
      'ProtectionMode': ros.stringToRosTemplate(properties.protectionMode),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'CleanBandwidth': ros.numberToRosTemplate(properties.cleanBandwidth),
      'EnableLog': ros.booleanToRosTemplate(properties.enableLog),
      'IpAddresses': ros.numberToRosTemplate(properties.ipAddresses),
      'NetworkProtocol': ros.stringToRosTemplate(properties.networkProtocol),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'Tags': ros.listMapper(rosOriginInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoS::OriginInstance`, which is used to create an Anti-DDoS Origin instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `OriginInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
 */
export class RosOriginInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoS::OriginInstance";

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property edition: Edition of the instance. Valid values:
     *  - enterprise: Enterprise Edition.
     * - smb: Affordable and general edition for small and medium-sized enterprises.
     */
    public edition: string | ros.IResolvable;

    /**
     * @Property protectionMode: The mode of the protection. Valid values:
     * unlimited: The Unlimited protection mode is intended for internal use within enterprises.
     */
    public protectionMode: string | ros.IResolvable;

    /**
     * @Property chargeType: The charge type of the instance. Valid values:
     * PostPaid: Pay-as-you-go.
     * PrePaid: Subscription.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
     * When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit\/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit\/s.
     */
    public cleanBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property enableLog: Whether to enable protection logs.
     */
    public enableLog: boolean | ros.IResolvable | undefined;

    /**
     * @Property ipAddresses: The number of ip addresses.
     * When Edition is smb， IP Addresses ranges from 1 to 29.
     * When Edition is enterprise, The minimum number of IP Addresses is 30.
     */
    public ipAddresses: number | ros.IResolvable | undefined;

    /**
     * @Property networkProtocol: The network protocol of the instance. Valid values:
     * v4: IPv4.
     * v6: IPv6.
     * v4_6: IPv4+IPv6.
     */
    public networkProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property period: The period of the instance.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The period unit of the instance. Valid values:
     * Month: Month.
     * Year: Year.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosOriginInstance.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOriginInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOriginInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.edition = props.edition;
        this.protectionMode = props.protectionMode;
        this.chargeType = props.chargeType;
        this.cleanBandwidth = props.cleanBandwidth;
        this.enableLog = props.enableLog;
        this.ipAddresses = props.ipAddresses;
        this.networkProtocol = props.networkProtocol;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            edition: this.edition,
            protectionMode: this.protectionMode,
            chargeType: this.chargeType,
            cleanBandwidth: this.cleanBandwidth,
            enableLog: this.enableLog,
            ipAddresses: this.ipAddresses,
            networkProtocol: this.networkProtocol,
            period: this.period,
            periodUnit: this.periodUnit,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOriginInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosOriginInstance {
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
function RosOriginInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::OriginInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::OriginInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosOriginInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosOriginInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
