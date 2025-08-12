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
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

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
        this.attrArn = this.getAtt('Arn');
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

/**
 * Properties for defining a `RosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
 */
export interface RosPolicyProps {

    /**
     * @Property policyName: The name of the policy.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * @Property type: The type of the policy. Values:
     * - default: Indicates the default protection strategy.
     * - l3: Indicates the IP protection strategy.
     * - l4: Indicates the port protection strategy.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property actionType: Operation type
     * ActionType = 10 Modify policy name
     * ActionType = 11 Modify whitelist and whitelist timeout
     * ActionType = 12 modify add white high anti-back source network segment switch
     * ActionType = 13 Modify the switch to discard ICMP
     * ActionType = 20 Add black and white list
     * ActionType = 21 Delete whitelist and whitelist
     * ActionType = 22 Clear White List
     * ActionType = 23 Clear the blacklist
     * ActionType = 30 Modify Smart Switch
     * ActionType = 31 Modify regional ban
     * ActionType = 32 Modify Source Speed Limit Black
     * ActionType = 34 Modifying Reflective Port Filtering
     * ActionType = 40,41,42 Create, delete, and modify Port rules
     * ActionType = 50,51,52 Create, delete, and modify fingerprint rules
     * ActionType = 60 switch L4 protection
     * ActionType = 61,62,63 Create, delete, and modify L4 rules.
     */
    readonly actionType?: string | ros.IResolvable;

    /**
     * @Property blackIpList: Blacklist list.
     */
    readonly blackIpList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property content: Configuration Content.
     */
    readonly content?: RosPolicy.ContentProperty | ros.IResolvable;

    /**
     * @Property whiteIpList: Whitelist IP list.
     */
    readonly whiteIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.whiteIpList && (Array.isArray(properties.whiteIpList) || (typeof properties.whiteIpList) === 'string')) {
        errors.collect(ros.propertyValidator('whiteIpList', ros.validateLength)({
            data: properties.whiteIpList.length,
            min: 0,
            max: 1999,
          }));
    }
    errors.collect(ros.propertyValidator('whiteIpList', ros.listValidator(ros.validateString))(properties.whiteIpList));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["default","l3","l4"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    if(properties.actionType && (typeof properties.actionType) !== 'object') {
        errors.collect(ros.propertyValidator('actionType', ros.validateAllowedValues)({
          data: properties.actionType,
          allowedValues: ["10","11","12","13","20","21","22","23","30","31","32","34","40","41","42","50","51","52","60","61","62","63"],
        }));
    }
    errors.collect(ros.propertyValidator('actionType', ros.validateString)(properties.actionType));
    errors.collect(ros.propertyValidator('content', RosPolicy_ContentPropertyValidator)(properties.content));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    if(properties.blackIpList && (Array.isArray(properties.blackIpList) || (typeof properties.blackIpList) === 'string')) {
        errors.collect(ros.propertyValidator('blackIpList', ros.validateLength)({
            data: properties.blackIpList.length,
            min: 0,
            max: 1999,
          }));
    }
    errors.collect(ros.propertyValidator('blackIpList', ros.listValidator(ros.validateString))(properties.blackIpList));
    return errors.wrap('supplied properties not correct for "RosPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy` resource
 *
 * @param properties - the TypeScript properties of a `RosPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy` resource.
 */
// @ts-ignore TS6133
function rosPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'Type': ros.stringToRosTemplate(properties.type),
      'ActionType': ros.stringToRosTemplate(properties.actionType),
      'BlackIpList': ros.listMapper(ros.stringToRosTemplate)(properties.blackIpList),
      'Content': rosPolicyContentPropertyToRosTemplate(properties.content),
      'WhiteIpList': ros.listMapper(ros.stringToRosTemplate)(properties.whiteIpList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoS::Policy`, which is used to create a mitigation policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
 */
export class RosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoS::Policy";

    /**
     * @Attribute Content: Configuration Content.
     */
    public readonly attrContent: ros.IResolvable;

    /**
     * @Attribute PolicyId: The ID of the policy.
     */
    public readonly attrPolicyId: ros.IResolvable;

    /**
     * @Attribute PolicyName: The name of the policy.
     */
    public readonly attrPolicyName: ros.IResolvable;

    /**
     * @Attribute Type: The type of the policy.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: The name of the policy.
     */
    public policyName: string | ros.IResolvable;

    /**
     * @Property type: The type of the policy. Values:
     * - default: Indicates the default protection strategy.
     * - l3: Indicates the IP protection strategy.
     * - l4: Indicates the port protection strategy.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property actionType: Operation type
     * ActionType = 10 Modify policy name
     * ActionType = 11 Modify whitelist and whitelist timeout
     * ActionType = 12 modify add white high anti-back source network segment switch
     * ActionType = 13 Modify the switch to discard ICMP
     * ActionType = 20 Add black and white list
     * ActionType = 21 Delete whitelist and whitelist
     * ActionType = 22 Clear White List
     * ActionType = 23 Clear the blacklist
     * ActionType = 30 Modify Smart Switch
     * ActionType = 31 Modify regional ban
     * ActionType = 32 Modify Source Speed Limit Black
     * ActionType = 34 Modifying Reflective Port Filtering
     * ActionType = 40,41,42 Create, delete, and modify Port rules
     * ActionType = 50,51,52 Create, delete, and modify fingerprint rules
     * ActionType = 60 switch L4 protection
     * ActionType = 61,62,63 Create, delete, and modify L4 rules.
     */
    public actionType: string | ros.IResolvable | undefined;

    /**
     * @Property blackIpList: Blacklist list.
     */
    public blackIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property content: Configuration Content.
     */
    public content: RosPolicy.ContentProperty | ros.IResolvable | undefined;

    /**
     * @Property whiteIpList: Whitelist IP list.
     */
    public whiteIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContent = this.getAtt('Content');
        this.attrPolicyId = this.getAtt('PolicyId');
        this.attrPolicyName = this.getAtt('PolicyName');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.type = props.type;
        this.actionType = props.actionType;
        this.blackIpList = props.blackIpList;
        this.content = props.content;
        this.whiteIpList = props.whiteIpList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            type: this.type,
            actionType: this.actionType,
            blackIpList: this.blackIpList,
            content: this.content,
            whiteIpList: this.whiteIpList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface ConditionListProperty {
        /**
         * @Property position: Position to start matching, starting from 0.
         */
        readonly position: number | ros.IResolvable;
        /**
         * @Property arg: Matching target character.
         */
        readonly arg: string | ros.IResolvable;
        /**
         * @Property depth: Depth of Matching.
         */
        readonly depth: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConditionListProperty`
 *
 * @param properties - the TypeScript properties of a `ConditionListProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_ConditionListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('position', ros.requiredValidator)(properties.position));
    errors.collect(ros.propertyValidator('position', ros.validateNumber)(properties.position));
    errors.collect(ros.propertyValidator('arg', ros.requiredValidator)(properties.arg));
    errors.collect(ros.propertyValidator('arg', ros.validateString)(properties.arg));
    errors.collect(ros.propertyValidator('depth', ros.requiredValidator)(properties.depth));
    errors.collect(ros.propertyValidator('depth', ros.validateNumber)(properties.depth));
    return errors.wrap('supplied properties not correct for "ConditionListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.ConditionList` resource
 *
 * @param properties - the TypeScript properties of a `ConditionListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.ConditionList` resource.
 */
// @ts-ignore TS6133
function rosPolicyConditionListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_ConditionListPropertyValidator(properties).assertSuccess();
    return {
      'Position': ros.numberToRosTemplate(properties.position),
      'Arg': ros.stringToRosTemplate(properties.arg),
      'Depth': ros.numberToRosTemplate(properties.depth),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface ContentProperty {
        /**
         * @Property whitenGfbrNets: Add white high protection back to source network segment switch.
         */
        readonly whitenGfbrNets?: boolean | ros.IResolvable;
        /**
         * @Property portRuleList: Port Rule List.
         */
        readonly portRuleList?: Array<RosPolicy.PortRuleListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property regionBlockCountryList: List of Regional Banned Countries.
         */
        readonly regionBlockCountryList?: Array<number | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property regionBlockProvinceList: List of Prohibited Provinces by Region.
         */
        readonly regionBlockProvinceList?: Array<number | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property fingerPrintRuleList: Fingerprint Rules.
         */
        readonly fingerPrintRuleList?: Array<RosPolicy.FingerPrintRuleListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sourceLimit: Do not fill in when the source speed limit is deleted.
         */
        readonly sourceLimit?: RosPolicy.SourceLimitProperty | ros.IResolvable;
        /**
         * @Property enableDefense: Whether to enable L4 protection.
         */
        readonly enableDefense?: boolean | ros.IResolvable;
        /**
         * @Property enableIntelligence: Whether the intelligent switch is on.
         */
        readonly enableIntelligence?: boolean | ros.IResolvable;
        /**
         * @Property sourceBlockList: Source pull Black.
         */
        readonly sourceBlockList?: Array<RosPolicy.SourceBlockListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property enableDropIcmp: Switch to discard ICMP.
         */
        readonly enableDropIcmp?: boolean | ros.IResolvable;
        /**
         * @Property intelligenceLevel: Smart mode. Valid values: weak, hard, and default.
         */
        readonly intelligenceLevel?: string | ros.IResolvable;
        /**
         * @Property reflectBlockUdpPortList: Reflective port filtering.
         */
        readonly reflectBlockUdpPortList?: Array<number | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property blackIpListExpireAt: Blacklist and whitelist timeout.
         */
        readonly blackIpListExpireAt?: number | ros.IResolvable;
        /**
         * @Property layer4RuleList: L4 protection rules.
         */
        readonly layer4RuleList?: Array<RosPolicy.Layer4RuleListProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ContentProperty`
 *
 * @param properties - the TypeScript properties of a `ContentProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_ContentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('whitenGfbrNets', ros.validateBoolean)(properties.whitenGfbrNets));
    if(properties.portRuleList && (Array.isArray(properties.portRuleList) || (typeof properties.portRuleList) === 'string')) {
        errors.collect(ros.propertyValidator('portRuleList', ros.validateLength)({
            data: properties.portRuleList.length,
            min: 0,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('portRuleList', ros.listValidator(RosPolicy_PortRuleListPropertyValidator))(properties.portRuleList));
    errors.collect(ros.propertyValidator('regionBlockCountryList', ros.listValidator(ros.validateNumber))(properties.regionBlockCountryList));
    errors.collect(ros.propertyValidator('regionBlockProvinceList', ros.listValidator(ros.validateNumber))(properties.regionBlockProvinceList));
    if(properties.fingerPrintRuleList && (Array.isArray(properties.fingerPrintRuleList) || (typeof properties.fingerPrintRuleList) === 'string')) {
        errors.collect(ros.propertyValidator('fingerPrintRuleList', ros.validateLength)({
            data: properties.fingerPrintRuleList.length,
            min: 0,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('fingerPrintRuleList', ros.listValidator(RosPolicy_FingerPrintRuleListPropertyValidator))(properties.fingerPrintRuleList));
    errors.collect(ros.propertyValidator('sourceLimit', RosPolicy_SourceLimitPropertyValidator)(properties.sourceLimit));
    errors.collect(ros.propertyValidator('enableDefense', ros.validateBoolean)(properties.enableDefense));
    errors.collect(ros.propertyValidator('enableIntelligence', ros.validateBoolean)(properties.enableIntelligence));
    errors.collect(ros.propertyValidator('sourceBlockList', ros.listValidator(RosPolicy_SourceBlockListPropertyValidator))(properties.sourceBlockList));
    errors.collect(ros.propertyValidator('enableDropIcmp', ros.validateBoolean)(properties.enableDropIcmp));
    if(properties.intelligenceLevel && (typeof properties.intelligenceLevel) !== 'object') {
        errors.collect(ros.propertyValidator('intelligenceLevel', ros.validateAllowedValues)({
          data: properties.intelligenceLevel,
          allowedValues: ["weak","hard","default"],
        }));
    }
    errors.collect(ros.propertyValidator('intelligenceLevel', ros.validateString)(properties.intelligenceLevel));
    if(properties.reflectBlockUdpPortList && (Array.isArray(properties.reflectBlockUdpPortList) || (typeof properties.reflectBlockUdpPortList) === 'string')) {
        errors.collect(ros.propertyValidator('reflectBlockUdpPortList', ros.validateLength)({
            data: properties.reflectBlockUdpPortList.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('reflectBlockUdpPortList', ros.listValidator(ros.validateNumber))(properties.reflectBlockUdpPortList));
    errors.collect(ros.propertyValidator('blackIpListExpireAt', ros.validateNumber)(properties.blackIpListExpireAt));
    if(properties.layer4RuleList && (Array.isArray(properties.layer4RuleList) || (typeof properties.layer4RuleList) === 'string')) {
        errors.collect(ros.propertyValidator('layer4RuleList', ros.validateLength)({
            data: properties.layer4RuleList.length,
            min: 0,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('layer4RuleList', ros.listValidator(RosPolicy_Layer4RuleListPropertyValidator))(properties.layer4RuleList));
    return errors.wrap('supplied properties not correct for "ContentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.Content` resource
 *
 * @param properties - the TypeScript properties of a `ContentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.Content` resource.
 */
// @ts-ignore TS6133
function rosPolicyContentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_ContentPropertyValidator(properties).assertSuccess();
    return {
      'WhitenGfbrNets': ros.booleanToRosTemplate(properties.whitenGfbrNets),
      'PortRuleList': ros.listMapper(rosPolicyPortRuleListPropertyToRosTemplate)(properties.portRuleList),
      'RegionBlockCountryList': ros.listMapper(ros.numberToRosTemplate)(properties.regionBlockCountryList),
      'RegionBlockProvinceList': ros.listMapper(ros.numberToRosTemplate)(properties.regionBlockProvinceList),
      'FingerPrintRuleList': ros.listMapper(rosPolicyFingerPrintRuleListPropertyToRosTemplate)(properties.fingerPrintRuleList),
      'SourceLimit': rosPolicySourceLimitPropertyToRosTemplate(properties.sourceLimit),
      'EnableDefense': ros.booleanToRosTemplate(properties.enableDefense),
      'EnableIntelligence': ros.booleanToRosTemplate(properties.enableIntelligence),
      'SourceBlockList': ros.listMapper(rosPolicySourceBlockListPropertyToRosTemplate)(properties.sourceBlockList),
      'EnableDropIcmp': ros.booleanToRosTemplate(properties.enableDropIcmp),
      'IntelligenceLevel': ros.stringToRosTemplate(properties.intelligenceLevel),
      'ReflectBlockUdpPortList': ros.listMapper(ros.numberToRosTemplate)(properties.reflectBlockUdpPortList),
      'BlackIpListExpireAt': ros.numberToRosTemplate(properties.blackIpListExpireAt),
      'Layer4RuleList': ros.listMapper(rosPolicyLayer4RuleListPropertyToRosTemplate)(properties.layer4RuleList),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface FingerPrintRuleListProperty {
        /**
         * @Property srcPortEnd: Source Port end 0-65535.
         */
        readonly srcPortEnd: number | ros.IResolvable;
        /**
         * @Property seqNo: Serial number 1-100 Affects the order issued by the bottom layer The larger the number, the lower it is.
         */
        readonly seqNo: number | ros.IResolvable;
        /**
         * @Property srcPortStart: Source port start 0-65535.
         */
        readonly srcPortStart: number | ros.IResolvable;
        /**
         * @Property fingerPrintRuleId: The UUID of the rule is required to be deleted and modified, and it is not required to be created.
         */
        readonly fingerPrintRuleId?: string | ros.IResolvable;
        /**
         * @Property rateValue: Speed limit value 1-100000.
         */
        readonly rateValue?: number | ros.IResolvable;
        /**
         * @Property payloadBytes: Load match, hexadecimal string; Similar to 'abcd'.
         */
        readonly payloadBytes?: string | ros.IResolvable;
        /**
         * @Property dstPortStart: Destination Port start 0-65535.
         */
        readonly dstPortStart: number | ros.IResolvable;
        /**
         * @Property matchAction: Actions. Currently, drop, accept, session_rate, and ip_rate are supported.
         */
        readonly matchAction: string | ros.IResolvable;
        /**
         * @Property offset: Offset.
         */
        readonly offset?: number | ros.IResolvable;
        /**
         * @Property maxPktLen: Maximum bag length.
         */
        readonly maxPktLen: number | ros.IResolvable;
        /**
         * @Property minPktLen: Minimum package length.
         */
        readonly minPktLen: number | ros.IResolvable;
        /**
         * @Property dstPortEnd: End of destination port 0-65535.
         */
        readonly dstPortEnd: number | ros.IResolvable;
        /**
         * @Property protocol: Protocol, tcp or udp.
         */
        readonly protocol: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FingerPrintRuleListProperty`
 *
 * @param properties - the TypeScript properties of a `FingerPrintRuleListProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_FingerPrintRuleListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('srcPortEnd', ros.requiredValidator)(properties.srcPortEnd));
    if(properties.srcPortEnd && (typeof properties.srcPortEnd) !== 'object') {
        errors.collect(ros.propertyValidator('srcPortEnd', ros.validateRange)({
            data: properties.srcPortEnd,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('srcPortEnd', ros.validateNumber)(properties.srcPortEnd));
    errors.collect(ros.propertyValidator('seqNo', ros.requiredValidator)(properties.seqNo));
    if(properties.seqNo && (typeof properties.seqNo) !== 'object') {
        errors.collect(ros.propertyValidator('seqNo', ros.validateRange)({
            data: properties.seqNo,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('seqNo', ros.validateNumber)(properties.seqNo));
    errors.collect(ros.propertyValidator('srcPortStart', ros.requiredValidator)(properties.srcPortStart));
    if(properties.srcPortStart && (typeof properties.srcPortStart) !== 'object') {
        errors.collect(ros.propertyValidator('srcPortStart', ros.validateRange)({
            data: properties.srcPortStart,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('srcPortStart', ros.validateNumber)(properties.srcPortStart));
    errors.collect(ros.propertyValidator('fingerPrintRuleId', ros.validateString)(properties.fingerPrintRuleId));
    if(properties.rateValue && (typeof properties.rateValue) !== 'object') {
        errors.collect(ros.propertyValidator('rateValue', ros.validateRange)({
            data: properties.rateValue,
            min: 1,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('rateValue', ros.validateNumber)(properties.rateValue));
    errors.collect(ros.propertyValidator('payloadBytes', ros.validateString)(properties.payloadBytes));
    errors.collect(ros.propertyValidator('dstPortStart', ros.requiredValidator)(properties.dstPortStart));
    if(properties.dstPortStart && (typeof properties.dstPortStart) !== 'object') {
        errors.collect(ros.propertyValidator('dstPortStart', ros.validateRange)({
            data: properties.dstPortStart,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('dstPortStart', ros.validateNumber)(properties.dstPortStart));
    errors.collect(ros.propertyValidator('matchAction', ros.requiredValidator)(properties.matchAction));
    if(properties.matchAction && (typeof properties.matchAction) !== 'object') {
        errors.collect(ros.propertyValidator('matchAction', ros.validateAllowedValues)({
          data: properties.matchAction,
          allowedValues: ["accept","drop","ip_rate","session_rate"],
        }));
    }
    errors.collect(ros.propertyValidator('matchAction', ros.validateString)(properties.matchAction));
    errors.collect(ros.propertyValidator('offset', ros.validateNumber)(properties.offset));
    errors.collect(ros.propertyValidator('maxPktLen', ros.requiredValidator)(properties.maxPktLen));
    errors.collect(ros.propertyValidator('maxPktLen', ros.validateNumber)(properties.maxPktLen));
    errors.collect(ros.propertyValidator('minPktLen', ros.requiredValidator)(properties.minPktLen));
    errors.collect(ros.propertyValidator('minPktLen', ros.validateNumber)(properties.minPktLen));
    errors.collect(ros.propertyValidator('dstPortEnd', ros.requiredValidator)(properties.dstPortEnd));
    if(properties.dstPortEnd && (typeof properties.dstPortEnd) !== 'object') {
        errors.collect(ros.propertyValidator('dstPortEnd', ros.validateRange)({
            data: properties.dstPortEnd,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('dstPortEnd', ros.validateNumber)(properties.dstPortEnd));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "FingerPrintRuleListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.FingerPrintRuleList` resource
 *
 * @param properties - the TypeScript properties of a `FingerPrintRuleListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.FingerPrintRuleList` resource.
 */
// @ts-ignore TS6133
function rosPolicyFingerPrintRuleListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_FingerPrintRuleListPropertyValidator(properties).assertSuccess();
    return {
      'SrcPortEnd': ros.numberToRosTemplate(properties.srcPortEnd),
      'SeqNo': ros.numberToRosTemplate(properties.seqNo),
      'SrcPortStart': ros.numberToRosTemplate(properties.srcPortStart),
      'FingerPrintRuleId': ros.stringToRosTemplate(properties.fingerPrintRuleId),
      'RateValue': ros.numberToRosTemplate(properties.rateValue),
      'PayloadBytes': ros.stringToRosTemplate(properties.payloadBytes),
      'DstPortStart': ros.numberToRosTemplate(properties.dstPortStart),
      'MatchAction': ros.stringToRosTemplate(properties.matchAction),
      'Offset': ros.numberToRosTemplate(properties.offset),
      'MaxPktLen': ros.numberToRosTemplate(properties.maxPktLen),
      'MinPktLen': ros.numberToRosTemplate(properties.minPktLen),
      'DstPortEnd': ros.numberToRosTemplate(properties.dstPortEnd),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface Layer4RuleListProperty {
        /**
         * @Property action: 1 for observation 2 for blocking.
         */
        readonly action: string | ros.IResolvable;
        /**
         * @Property conditionList: Matching Condition.
         */
        readonly conditionList: Array<RosPolicy.ConditionListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property priority: 1-100, priority, the lower the number, the higher the priority.
         */
        readonly priority: number | ros.IResolvable;
        /**
         * @Property method: Char indicates a string match hex match.
         */
        readonly method: string | ros.IResolvable;
        /**
         * @Property limited: <2048, length limit, 0 means no limit.
         */
        readonly limited: number | ros.IResolvable;
        /**
         * @Property name: Rule Name.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property match: 0 indicates that the condition is not met 1 indicates that the condition is met.
         */
        readonly match: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `Layer4RuleListProperty`
 *
 * @param properties - the TypeScript properties of a `Layer4RuleListProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_Layer4RuleListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('action', ros.requiredValidator)(properties.action));
    if(properties.action && (typeof properties.action) !== 'object') {
        errors.collect(ros.propertyValidator('action', ros.validateAllowedValues)({
          data: properties.action,
          allowedValues: ["1","2"],
        }));
    }
    errors.collect(ros.propertyValidator('action', ros.validateString)(properties.action));
    errors.collect(ros.propertyValidator('conditionList', ros.requiredValidator)(properties.conditionList));
    errors.collect(ros.propertyValidator('conditionList', ros.listValidator(RosPolicy_ConditionListPropertyValidator))(properties.conditionList));
    errors.collect(ros.propertyValidator('priority', ros.requiredValidator)(properties.priority));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('method', ros.requiredValidator)(properties.method));
    errors.collect(ros.propertyValidator('method', ros.validateString)(properties.method));
    errors.collect(ros.propertyValidator('limited', ros.requiredValidator)(properties.limited));
    if(properties.limited && (typeof properties.limited) !== 'object') {
        errors.collect(ros.propertyValidator('limited', ros.validateRange)({
            data: properties.limited,
            min: 0,
            max: 2048,
          }));
    }
    errors.collect(ros.propertyValidator('limited', ros.validateNumber)(properties.limited));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('match', ros.requiredValidator)(properties.match));
    errors.collect(ros.propertyValidator('match', ros.validateString)(properties.match));
    return errors.wrap('supplied properties not correct for "Layer4RuleListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.Layer4RuleList` resource
 *
 * @param properties - the TypeScript properties of a `Layer4RuleListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.Layer4RuleList` resource.
 */
// @ts-ignore TS6133
function rosPolicyLayer4RuleListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_Layer4RuleListPropertyValidator(properties).assertSuccess();
    return {
      'Action': ros.stringToRosTemplate(properties.action),
      'ConditionList': ros.listMapper(rosPolicyConditionListPropertyToRosTemplate)(properties.conditionList),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'Method': ros.stringToRosTemplate(properties.method),
      'Limited': ros.numberToRosTemplate(properties.limited),
      'Name': ros.stringToRosTemplate(properties.name),
      'Match': ros.stringToRosTemplate(properties.match),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface PortRuleListProperty {
        /**
         * @Property srcPortEnd: Source Port end 0-65535.
         */
        readonly srcPortEnd: number | ros.IResolvable;
        /**
         * @Property seqNo: Serial number 1-100 Affects the order issued by the bottom layer The larger the number, the lower it is.
         */
        readonly seqNo: number | ros.IResolvable;
        /**
         * @Property srcPortStart: Source port start 0-65535.
         */
        readonly srcPortStart: number | ros.IResolvable;
        /**
         * @Property portRuleId: Rule UUID is required to be deleted and modified, and is not required to be created.
         */
        readonly portRuleId?: string | ros.IResolvable;
        /**
         * @Property dstPortStart: Destination Port start 0-65535.
         */
        readonly dstPortStart: number | ros.IResolvable;
        /**
         * @Property dstPortEnd: End of destination port 0-65535.
         */
        readonly dstPortEnd: number | ros.IResolvable;
        /**
         * @Property protocol: Protocol, tcp or udp.
         */
        readonly protocol: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PortRuleListProperty`
 *
 * @param properties - the TypeScript properties of a `PortRuleListProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_PortRuleListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('srcPortEnd', ros.requiredValidator)(properties.srcPortEnd));
    if(properties.srcPortEnd && (typeof properties.srcPortEnd) !== 'object') {
        errors.collect(ros.propertyValidator('srcPortEnd', ros.validateRange)({
            data: properties.srcPortEnd,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('srcPortEnd', ros.validateNumber)(properties.srcPortEnd));
    errors.collect(ros.propertyValidator('seqNo', ros.requiredValidator)(properties.seqNo));
    if(properties.seqNo && (typeof properties.seqNo) !== 'object') {
        errors.collect(ros.propertyValidator('seqNo', ros.validateRange)({
            data: properties.seqNo,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('seqNo', ros.validateNumber)(properties.seqNo));
    errors.collect(ros.propertyValidator('srcPortStart', ros.requiredValidator)(properties.srcPortStart));
    if(properties.srcPortStart && (typeof properties.srcPortStart) !== 'object') {
        errors.collect(ros.propertyValidator('srcPortStart', ros.validateRange)({
            data: properties.srcPortStart,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('srcPortStart', ros.validateNumber)(properties.srcPortStart));
    errors.collect(ros.propertyValidator('portRuleId', ros.validateString)(properties.portRuleId));
    errors.collect(ros.propertyValidator('dstPortStart', ros.requiredValidator)(properties.dstPortStart));
    if(properties.dstPortStart && (typeof properties.dstPortStart) !== 'object') {
        errors.collect(ros.propertyValidator('dstPortStart', ros.validateRange)({
            data: properties.dstPortStart,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('dstPortStart', ros.validateNumber)(properties.dstPortStart));
    errors.collect(ros.propertyValidator('dstPortEnd', ros.requiredValidator)(properties.dstPortEnd));
    if(properties.dstPortEnd && (typeof properties.dstPortEnd) !== 'object') {
        errors.collect(ros.propertyValidator('dstPortEnd', ros.validateRange)({
            data: properties.dstPortEnd,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('dstPortEnd', ros.validateNumber)(properties.dstPortEnd));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["tcp","udp"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "PortRuleListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.PortRuleList` resource
 *
 * @param properties - the TypeScript properties of a `PortRuleListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.PortRuleList` resource.
 */
// @ts-ignore TS6133
function rosPolicyPortRuleListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_PortRuleListPropertyValidator(properties).assertSuccess();
    return {
      'SrcPortEnd': ros.numberToRosTemplate(properties.srcPortEnd),
      'SeqNo': ros.numberToRosTemplate(properties.seqNo),
      'SrcPortStart': ros.numberToRosTemplate(properties.srcPortStart),
      'PortRuleId': ros.stringToRosTemplate(properties.portRuleId),
      'DstPortStart': ros.numberToRosTemplate(properties.dstPortStart),
      'DstPortEnd': ros.numberToRosTemplate(properties.dstPortEnd),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface SourceBlockListProperty {
        /**
         * @Property type: The type of black is optional source PPS speed limit Black: 3 source BPS speed limit Black: 4 SYNPPS speed limit Black: 5 SYNBPS speed limit Black: 6.
         */
        readonly type: number | ros.IResolvable;
        /**
         * @Property exceedLimitTimes: The number of times the speed limit is exceeded in a statistical period ranges from 1 to 1200.
         */
        readonly exceedLimitTimes: number | ros.IResolvable;
        /**
         * @Property everySeconds: The time (unit second) for automatically releasing the black after triggering the speed limit is 60~2592000.
         */
        readonly everySeconds: number | ros.IResolvable;
        /**
         * @Property blockExpireSeconds: Statistical cycle range 60-1200.
         */
        readonly blockExpireSeconds: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceBlockListProperty`
 *
 * @param properties - the TypeScript properties of a `SourceBlockListProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_SourceBlockListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: [3,4,5,6],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateNumber)(properties.type));
    errors.collect(ros.propertyValidator('exceedLimitTimes', ros.requiredValidator)(properties.exceedLimitTimes));
    if(properties.exceedLimitTimes && (typeof properties.exceedLimitTimes) !== 'object') {
        errors.collect(ros.propertyValidator('exceedLimitTimes', ros.validateRange)({
            data: properties.exceedLimitTimes,
            min: 1,
            max: 1200,
          }));
    }
    errors.collect(ros.propertyValidator('exceedLimitTimes', ros.validateNumber)(properties.exceedLimitTimes));
    errors.collect(ros.propertyValidator('everySeconds', ros.requiredValidator)(properties.everySeconds));
    if(properties.everySeconds && (typeof properties.everySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('everySeconds', ros.validateRange)({
            data: properties.everySeconds,
            min: 60,
            max: 2592000,
          }));
    }
    errors.collect(ros.propertyValidator('everySeconds', ros.validateNumber)(properties.everySeconds));
    errors.collect(ros.propertyValidator('blockExpireSeconds', ros.requiredValidator)(properties.blockExpireSeconds));
    if(properties.blockExpireSeconds && (typeof properties.blockExpireSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('blockExpireSeconds', ros.validateRange)({
            data: properties.blockExpireSeconds,
            min: 60,
            max: 1200,
          }));
    }
    errors.collect(ros.propertyValidator('blockExpireSeconds', ros.validateNumber)(properties.blockExpireSeconds));
    return errors.wrap('supplied properties not correct for "SourceBlockListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.SourceBlockList` resource
 *
 * @param properties - the TypeScript properties of a `SourceBlockListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.SourceBlockList` resource.
 */
// @ts-ignore TS6133
function rosPolicySourceBlockListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_SourceBlockListPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.numberToRosTemplate(properties.type),
      'ExceedLimitTimes': ros.numberToRosTemplate(properties.exceedLimitTimes),
      'EverySeconds': ros.numberToRosTemplate(properties.everySeconds),
      'BlockExpireSeconds': ros.numberToRosTemplate(properties.blockExpireSeconds),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface SourceLimitProperty {
        /**
         * @Property pps: Pps range 32~500000.
         */
        readonly pps?: number | ros.IResolvable;
        /**
         * @Property synBps: SynBps range 1024~268435456.
         */
        readonly synBps?: number | ros.IResolvable;
        /**
         * @Property bps: bps range 1024~268435456.
         */
        readonly bps?: number | ros.IResolvable;
        /**
         * @Property synPps: SynPps range 1~100000.
         */
        readonly synPps?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceLimitProperty`
 *
 * @param properties - the TypeScript properties of a `SourceLimitProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_SourceLimitPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.pps && (typeof properties.pps) !== 'object') {
        errors.collect(ros.propertyValidator('pps', ros.validateRange)({
            data: properties.pps,
            min: 32,
            max: 500000,
          }));
    }
    errors.collect(ros.propertyValidator('pps', ros.validateNumber)(properties.pps));
    if(properties.synBps && (typeof properties.synBps) !== 'object') {
        errors.collect(ros.propertyValidator('synBps', ros.validateRange)({
            data: properties.synBps,
            min: 1024,
            max: 268435456,
          }));
    }
    errors.collect(ros.propertyValidator('synBps', ros.validateNumber)(properties.synBps));
    if(properties.bps && (typeof properties.bps) !== 'object') {
        errors.collect(ros.propertyValidator('bps', ros.validateRange)({
            data: properties.bps,
            min: 1024,
            max: 268435456,
          }));
    }
    errors.collect(ros.propertyValidator('bps', ros.validateNumber)(properties.bps));
    if(properties.synPps && (typeof properties.synPps) !== 'object') {
        errors.collect(ros.propertyValidator('synPps', ros.validateRange)({
            data: properties.synPps,
            min: 1,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('synPps', ros.validateNumber)(properties.synPps));
    return errors.wrap('supplied properties not correct for "SourceLimitProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.SourceLimit` resource
 *
 * @param properties - the TypeScript properties of a `SourceLimitProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DDoS::Policy.SourceLimit` resource.
 */
// @ts-ignore TS6133
function rosPolicySourceLimitPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_SourceLimitPropertyValidator(properties).assertSuccess();
    return {
      'Pps': ros.numberToRosTemplate(properties.pps),
      'SynBps': ros.numberToRosTemplate(properties.synBps),
      'Bps': ros.numberToRosTemplate(properties.bps),
      'SynPps': ros.numberToRosTemplate(properties.synPps),
    };
}
