// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::Config::CompliancePack`
 */
export interface RosCompliancePackProps {

    /**
     * @Property compliancePackName: Compliance Package Name
     */
    readonly compliancePackName: string | ros.IResolvable;

    /**
     * @Property description: Description
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property riskLevel: Ris Level
     */
    readonly riskLevel: number | ros.IResolvable;

    /**
     * @Property compliancePackTemplateId: Compliance Package Template Id
     */
    readonly compliancePackTemplateId?: string | ros.IResolvable;

    /**
     * @Property configRules: Config Rule List
     */
    readonly configRules?: Array<RosCompliancePack.ConfigRulesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCompliancePackProps`
 *
 * @param properties - the TypeScript properties of a `RosCompliancePackProps`
 *
 * @returns the result of the validation.
 */
function RosCompliancePackPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('compliancePackName', ros.requiredValidator)(properties.compliancePackName));
    errors.collect(ros.propertyValidator('compliancePackName', ros.validateString)(properties.compliancePackName));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('configRules', ros.listValidator(RosCompliancePack_ConfigRulesPropertyValidator))(properties.configRules));
    errors.collect(ros.propertyValidator('compliancePackTemplateId', ros.validateString)(properties.compliancePackTemplateId));
    errors.collect(ros.propertyValidator('riskLevel', ros.requiredValidator)(properties.riskLevel));
    errors.collect(ros.propertyValidator('riskLevel', ros.validateNumber)(properties.riskLevel));
    return errors.wrap('supplied properties not correct for "RosCompliancePackProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::CompliancePack` resource
 *
 * @param properties - the TypeScript properties of a `RosCompliancePackProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::CompliancePack` resource.
 */
// @ts-ignore TS6133
function rosCompliancePackPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCompliancePackPropsValidator(properties).assertSuccess();
    }
    return {
      CompliancePackName: ros.stringToRosTemplate(properties.compliancePackName),
      Description: ros.stringToRosTemplate(properties.description),
      RiskLevel: ros.numberToRosTemplate(properties.riskLevel),
      CompliancePackTemplateId: ros.stringToRosTemplate(properties.compliancePackTemplateId),
      ConfigRules: ros.listMapper(rosCompliancePackConfigRulesPropertyToRosTemplate)(properties.configRules),
    };
}

/**
 * A ROS template type:  `ALIYUN::Config::CompliancePack`
 */
export class RosCompliancePack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::CompliancePack";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccountId: Aliyun User Id
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * @Attribute CompliancePackId: Compliance Package ID
     */
    public readonly attrCompliancePackId: ros.IResolvable;

    /**
     * @Attribute CompliancePackName: Compliance Package Name
     */
    public readonly attrCompliancePackName: ros.IResolvable;

    /**
     * @Attribute CompliancePackTemplateId: Compliance Package Template Id
     */
    public readonly attrCompliancePackTemplateId: ros.IResolvable;

    /**
     * @Attribute Description: Description
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute RiskLevel: Ris Level
     */
    public readonly attrRiskLevel: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property compliancePackName: Compliance Package Name
     */
    public compliancePackName: string | ros.IResolvable;

    /**
     * @Property description: Description
     */
    public description: string | ros.IResolvable;

    /**
     * @Property riskLevel: Ris Level
     */
    public riskLevel: number | ros.IResolvable;

    /**
     * @Property compliancePackTemplateId: Compliance Package Template Id
     */
    public compliancePackTemplateId: string | ros.IResolvable | undefined;

    /**
     * @Property configRules: Config Rule List
     */
    public configRules: Array<RosCompliancePack.ConfigRulesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::Config::CompliancePack`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCompliancePackProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCompliancePack.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = this.getAtt('AccountId');
        this.attrCompliancePackId = this.getAtt('CompliancePackId');
        this.attrCompliancePackName = this.getAtt('CompliancePackName');
        this.attrCompliancePackTemplateId = this.getAtt('CompliancePackTemplateId');
        this.attrDescription = this.getAtt('Description');
        this.attrRiskLevel = this.getAtt('RiskLevel');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.compliancePackName = props.compliancePackName;
        this.description = props.description;
        this.riskLevel = props.riskLevel;
        this.compliancePackTemplateId = props.compliancePackTemplateId;
        this.configRules = props.configRules;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            compliancePackName: this.compliancePackName,
            description: this.description,
            riskLevel: this.riskLevel,
            compliancePackTemplateId: this.compliancePackTemplateId,
            configRules: this.configRules,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCompliancePackPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCompliancePack {
    /**
     * @stability external
     */
    export interface ConfigRuleParametersProperty {
        /**
         * @Property parameterValue: Parameter Value
         */
        readonly parameterValue?: string | ros.IResolvable;
        /**
         * @Property required: Required
         */
        readonly required?: boolean | ros.IResolvable;
        /**
         * @Property parameterName: Parameter Name
         */
        readonly parameterName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigRuleParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigRuleParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosCompliancePack_ConfigRuleParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameterValue', ros.validateString)(properties.parameterValue));
    errors.collect(ros.propertyValidator('required', ros.validateBoolean)(properties.required));
    errors.collect(ros.propertyValidator('parameterName', ros.validateString)(properties.parameterName));
    return errors.wrap('supplied properties not correct for "ConfigRuleParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::CompliancePack.ConfigRuleParameters` resource
 *
 * @param properties - the TypeScript properties of a `ConfigRuleParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::CompliancePack.ConfigRuleParameters` resource.
 */
// @ts-ignore TS6133
function rosCompliancePackConfigRuleParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCompliancePack_ConfigRuleParametersPropertyValidator(properties).assertSuccess();
    return {
      ParameterValue: ros.stringToRosTemplate(properties.parameterValue),
      Required: ros.booleanToRosTemplate(properties.required),
      ParameterName: ros.stringToRosTemplate(properties.parameterName),
    };
}

export namespace RosCompliancePack {
    /**
     * @stability external
     */
    export interface ConfigRulesProperty {
        /**
         * @Property configRuleId: Config Rule Id
         */
        readonly configRuleId?: string | ros.IResolvable;
        /**
         * @Property configRuleName: Config Rule Name
         */
        readonly configRuleName?: string | ros.IResolvable;
        /**
         * @Property managedRuleIdentifier: Managed Rule Identifier
         */
        readonly managedRuleIdentifier?: string | ros.IResolvable;
        /**
         * @Property configRuleParameters: Config Rule Parameter List
         */
        readonly configRuleParameters?: Array<RosCompliancePack.ConfigRuleParametersProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigRulesProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosCompliancePack_ConfigRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('configRuleId', ros.validateString)(properties.configRuleId));
    errors.collect(ros.propertyValidator('configRuleName', ros.validateString)(properties.configRuleName));
    errors.collect(ros.propertyValidator('managedRuleIdentifier', ros.validateString)(properties.managedRuleIdentifier));
    errors.collect(ros.propertyValidator('configRuleParameters', ros.listValidator(RosCompliancePack_ConfigRuleParametersPropertyValidator))(properties.configRuleParameters));
    return errors.wrap('supplied properties not correct for "ConfigRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::CompliancePack.ConfigRules` resource
 *
 * @param properties - the TypeScript properties of a `ConfigRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::CompliancePack.ConfigRules` resource.
 */
// @ts-ignore TS6133
function rosCompliancePackConfigRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCompliancePack_ConfigRulesPropertyValidator(properties).assertSuccess();
    return {
      ConfigRuleId: ros.stringToRosTemplate(properties.configRuleId),
      ConfigRuleName: ros.stringToRosTemplate(properties.configRuleName),
      ManagedRuleIdentifier: ros.stringToRosTemplate(properties.managedRuleIdentifier),
      ConfigRuleParameters: ros.listMapper(rosCompliancePackConfigRuleParametersPropertyToRosTemplate)(properties.configRuleParameters),
    };
}

/**
 * Properties for defining a `ALIYUN::Config::DeliveryChannel`
 */
export interface RosDeliveryChannelProps {

    /**
     * @Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
     * This parameter is required when you create a delivery method.
     * Note If the delivery method assumes the service linked role for Cloud Config, you can specify
     * the ARN in the format of the provided example and replace the account ID with the
     * ID of your Alibaba Cloud account.
     */
    readonly deliveryChannelAssumeRoleArn: string | ros.IResolvable;

    /**
     * @Property deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a
     * delivery method. The value must be in one of the following formats:
     * acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
     * acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
     * acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
     */
    readonly deliveryChannelTargetArn: string | ros.IResolvable;

    /**
     * @Property deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery
     * method. Valid values:
     * OSS
     * MNS
     * SLS
     */
    readonly deliveryChannelType: string | ros.IResolvable;

    /**
     * @Property deliveryChannelCondition: The rule attached to the delivery method. This parameter is applicable only to delivery
     * methods of the MNS type.
     * This parameter allows you to specify the lowest risk level for the events to subscribe
     * to and the resource types for which you want to subscribe to events.
     * To specify the lowest risk level for the events to subscribe to, use the following
     * format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.
     * The value field indicates the lowest risk level and can be set to 1, 2, or 3, which
     * indicates the high risk level, the medium risk level, and the low risk level, respectively.
     * To specify the resource types for which you want to subscribe to events, use the following
     * format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.
     * The values field indicates the resource types. Its value is a JSON array.
     * Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
     */
    readonly deliveryChannelCondition?: string | ros.IResolvable;

    /**
     * @Property deliveryChannelName: The name of the delivery method.
     */
    readonly deliveryChannelName?: string | ros.IResolvable;

    /**
     * @Property description: The description of the delivery method.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDeliveryChannelProps`
 *
 * @param properties - the TypeScript properties of a `RosDeliveryChannelProps`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannelPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('deliveryChannelName', ros.validateString)(properties.deliveryChannelName));
    errors.collect(ros.propertyValidator('deliveryChannelTargetArn', ros.requiredValidator)(properties.deliveryChannelTargetArn));
    errors.collect(ros.propertyValidator('deliveryChannelTargetArn', ros.validateString)(properties.deliveryChannelTargetArn));
    errors.collect(ros.propertyValidator('deliveryChannelAssumeRoleArn', ros.requiredValidator)(properties.deliveryChannelAssumeRoleArn));
    errors.collect(ros.propertyValidator('deliveryChannelAssumeRoleArn', ros.validateString)(properties.deliveryChannelAssumeRoleArn));
    errors.collect(ros.propertyValidator('deliveryChannelType', ros.requiredValidator)(properties.deliveryChannelType));
    if(properties.deliveryChannelType && (typeof properties.deliveryChannelType) !== 'object') {
        errors.collect(ros.propertyValidator('deliveryChannelType', ros.validateAllowedValues)({
          data: properties.deliveryChannelType,
          allowedValues: ["MNS","OSS","SLS"],
        }));
    }
    errors.collect(ros.propertyValidator('deliveryChannelType', ros.validateString)(properties.deliveryChannelType));
    errors.collect(ros.propertyValidator('deliveryChannelCondition', ros.validateString)(properties.deliveryChannelCondition));
    return errors.wrap('supplied properties not correct for "RosDeliveryChannelProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::DeliveryChannel` resource
 *
 * @param properties - the TypeScript properties of a `RosDeliveryChannelProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::DeliveryChannel` resource.
 */
// @ts-ignore TS6133
function rosDeliveryChannelPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeliveryChannelPropsValidator(properties).assertSuccess();
    }
    return {
      DeliveryChannelAssumeRoleArn: ros.stringToRosTemplate(properties.deliveryChannelAssumeRoleArn),
      DeliveryChannelTargetArn: ros.stringToRosTemplate(properties.deliveryChannelTargetArn),
      DeliveryChannelType: ros.stringToRosTemplate(properties.deliveryChannelType),
      DeliveryChannelCondition: ros.stringToRosTemplate(properties.deliveryChannelCondition),
      DeliveryChannelName: ros.stringToRosTemplate(properties.deliveryChannelName),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::Config::DeliveryChannel`
 */
export class RosDeliveryChannel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::DeliveryChannel";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DeliveryChannelId: The ID of the delivery method.
     */
    public readonly attrDeliveryChannelId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
     * This parameter is required when you create a delivery method.
     * Note If the delivery method assumes the service linked role for Cloud Config, you can specify
     * the ARN in the format of the provided example and replace the account ID with the
     * ID of your Alibaba Cloud account.
     */
    public deliveryChannelAssumeRoleArn: string | ros.IResolvable;

    /**
     * @Property deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a
     * delivery method. The value must be in one of the following formats:
     * acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
     * acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
     * acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
     */
    public deliveryChannelTargetArn: string | ros.IResolvable;

    /**
     * @Property deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery
     * method. Valid values:
     * OSS
     * MNS
     * SLS
     */
    public deliveryChannelType: string | ros.IResolvable;

    /**
     * @Property deliveryChannelCondition: The rule attached to the delivery method. This parameter is applicable only to delivery
     * methods of the MNS type.
     * This parameter allows you to specify the lowest risk level for the events to subscribe
     * to and the resource types for which you want to subscribe to events.
     * To specify the lowest risk level for the events to subscribe to, use the following
     * format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.
     * The value field indicates the lowest risk level and can be set to 1, 2, or 3, which
     * indicates the high risk level, the medium risk level, and the low risk level, respectively.
     * To specify the resource types for which you want to subscribe to events, use the following
     * format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.
     * The values field indicates the resource types. Its value is a JSON array.
     * Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
     */
    public deliveryChannelCondition: string | ros.IResolvable | undefined;

    /**
     * @Property deliveryChannelName: The name of the delivery method.
     */
    public deliveryChannelName: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the delivery method.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::Config::DeliveryChannel`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeliveryChannelProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeliveryChannel.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeliveryChannelId = this.getAtt('DeliveryChannelId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deliveryChannelAssumeRoleArn = props.deliveryChannelAssumeRoleArn;
        this.deliveryChannelTargetArn = props.deliveryChannelTargetArn;
        this.deliveryChannelType = props.deliveryChannelType;
        this.deliveryChannelCondition = props.deliveryChannelCondition;
        this.deliveryChannelName = props.deliveryChannelName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deliveryChannelAssumeRoleArn: this.deliveryChannelAssumeRoleArn,
            deliveryChannelTargetArn: this.deliveryChannelTargetArn,
            deliveryChannelType: this.deliveryChannelType,
            deliveryChannelCondition: this.deliveryChannelCondition,
            deliveryChannelName: this.deliveryChannelName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeliveryChannelPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::Config::Rule`
 */
export interface RosRuleProps {

    /**
     * @Property configRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    readonly configRuleTriggerTypes: string | ros.IResolvable;

    /**
     * @Property resourceTypesScope: The types of the resources to be evaluated against the rule
     */
    readonly resourceTypesScope: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property riskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
     */
    readonly riskLevel: number | ros.IResolvable;

    /**
     * @Property ruleName: The name of the rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property sourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    readonly sourceIdentifier: string | ros.IResolvable;

    /**
     * @Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    readonly sourceOwner: string | ros.IResolvable;

    /**
     * @Property description: The description of the rule
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
     */
    readonly excludeResourceIdsScope?: string | ros.IResolvable;

    /**
     * @Property inputParameters: The settings of the input parameters for the rule
     */
    readonly inputParameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    readonly maximumExecutionFrequency?: string | ros.IResolvable;

    /**
     * @Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
     */
    readonly regionIdsScope?: string | ros.IResolvable;

    /**
     * @Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
     */
    readonly resourceGroupIdsScope?: string | ros.IResolvable;

    /**
     * @Property tagKeyLogicScope:
     */
    readonly tagKeyLogicScope?: string | ros.IResolvable;

    /**
     * @Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    readonly tagKeyScope?: string | ros.IResolvable;

    /**
     * @Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    readonly tagValueScope?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagKeyScope', ros.validateString)(properties.tagKeyScope));
    errors.collect(ros.propertyValidator('tagValueScope', ros.validateString)(properties.tagValueScope));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('excludeResourceIdsScope', ros.validateString)(properties.excludeResourceIdsScope));
    errors.collect(ros.propertyValidator('tagKeyLogicScope', ros.validateString)(properties.tagKeyLogicScope));
    errors.collect(ros.propertyValidator('sourceOwner', ros.requiredValidator)(properties.sourceOwner));
    errors.collect(ros.propertyValidator('sourceOwner', ros.validateString)(properties.sourceOwner));
    errors.collect(ros.propertyValidator('sourceIdentifier', ros.requiredValidator)(properties.sourceIdentifier));
    errors.collect(ros.propertyValidator('sourceIdentifier', ros.validateString)(properties.sourceIdentifier));
    errors.collect(ros.propertyValidator('maximumExecutionFrequency', ros.validateString)(properties.maximumExecutionFrequency));
    errors.collect(ros.propertyValidator('regionIdsScope', ros.validateString)(properties.regionIdsScope));
    errors.collect(ros.propertyValidator('configRuleTriggerTypes', ros.requiredValidator)(properties.configRuleTriggerTypes));
    errors.collect(ros.propertyValidator('configRuleTriggerTypes', ros.validateString)(properties.configRuleTriggerTypes));
    errors.collect(ros.propertyValidator('resourceGroupIdsScope', ros.validateString)(properties.resourceGroupIdsScope));
    errors.collect(ros.propertyValidator('riskLevel', ros.requiredValidator)(properties.riskLevel));
    errors.collect(ros.propertyValidator('riskLevel', ros.validateNumber)(properties.riskLevel));
    errors.collect(ros.propertyValidator('resourceTypesScope', ros.requiredValidator)(properties.resourceTypesScope));
    errors.collect(ros.propertyValidator('resourceTypesScope', ros.listValidator(ros.validateString))(properties.resourceTypesScope));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    errors.collect(ros.propertyValidator('inputParameters', ros.hashValidator(ros.validateAny))(properties.inputParameters));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      ConfigRuleTriggerTypes: ros.stringToRosTemplate(properties.configRuleTriggerTypes),
      ResourceTypesScope: ros.listMapper(ros.stringToRosTemplate)(properties.resourceTypesScope),
      RiskLevel: ros.numberToRosTemplate(properties.riskLevel),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      SourceIdentifier: ros.stringToRosTemplate(properties.sourceIdentifier),
      SourceOwner: ros.stringToRosTemplate(properties.sourceOwner),
      Description: ros.stringToRosTemplate(properties.description),
      ExcludeResourceIdsScope: ros.stringToRosTemplate(properties.excludeResourceIdsScope),
      InputParameters: ros.hashMapper(ros.objectToRosTemplate)(properties.inputParameters),
      MaximumExecutionFrequency: ros.stringToRosTemplate(properties.maximumExecutionFrequency),
      RegionIdsScope: ros.stringToRosTemplate(properties.regionIdsScope),
      ResourceGroupIdsScope: ros.stringToRosTemplate(properties.resourceGroupIdsScope),
      TagKeyLogicScope: ros.stringToRosTemplate(properties.tagKeyLogicScope),
      TagKeyScope: ros.stringToRosTemplate(properties.tagKeyScope),
      TagValueScope: ros.stringToRosTemplate(properties.tagValueScope),
    };
}

/**
 * A ROS template type:  `ALIYUN::Config::Rule`
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::Rule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConfigRuleArn: config rule arn
     */
    public readonly attrConfigRuleArn: ros.IResolvable;

    /**
     * @Attribute ConfigRuleId: The ID of the rule
     */
    public readonly attrConfigRuleId: ros.IResolvable;

    /**
     * @Attribute ConfigRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    public readonly attrConfigRuleTriggerTypes: ros.IResolvable;

    /**
     * @Attribute Description: The description of the rule
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EventSource: The event source of the rule.
     */
    public readonly attrEventSource: ros.IResolvable;

    /**
     * @Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
     */
    public readonly attrExcludeResourceIdsScope: ros.IResolvable;

    /**
     * @Attribute InputParameters: The settings of the input parameters for the rule
     */
    public readonly attrInputParameters: ros.IResolvable;

    /**
     * @Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    public readonly attrMaximumExecutionFrequency: ros.IResolvable;

    /**
     * @Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
     */
    public readonly attrRegionIdsScope: ros.IResolvable;

    /**
     * @Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
     */
    public readonly attrResourceGroupIdsScope: ros.IResolvable;

    /**
     * @Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule
     */
    public readonly attrResourceTypesScope: ros.IResolvable;

    /**
     * @Attribute RiskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
     */
    public readonly attrRiskLevel: ros.IResolvable;

    /**
     * @Attribute RuleName: The name of the rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute SourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    public readonly attrSourceIdentifier: ros.IResolvable;

    /**
     * @Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    public readonly attrSourceOwner: ros.IResolvable;

    /**
     * @Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    public readonly attrTagKeyScope: ros.IResolvable;

    /**
     * @Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    public readonly attrTagValueScope: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    public configRuleTriggerTypes: string | ros.IResolvable;

    /**
     * @Property resourceTypesScope: The types of the resources to be evaluated against the rule
     */
    public resourceTypesScope: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property riskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
     */
    public riskLevel: number | ros.IResolvable;

    /**
     * @Property ruleName: The name of the rule.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property sourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    public sourceIdentifier: string | ros.IResolvable;

    /**
     * @Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    public sourceOwner: string | ros.IResolvable;

    /**
     * @Property description: The description of the rule
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
     */
    public excludeResourceIdsScope: string | ros.IResolvable | undefined;

    /**
     * @Property inputParameters: The settings of the input parameters for the rule
     */
    public inputParameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    public maximumExecutionFrequency: string | ros.IResolvable | undefined;

    /**
     * @Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
     */
    public regionIdsScope: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
     */
    public resourceGroupIdsScope: string | ros.IResolvable | undefined;

    /**
     * @Property tagKeyLogicScope:
     */
    public tagKeyLogicScope: string | ros.IResolvable | undefined;

    /**
     * @Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    public tagKeyScope: string | ros.IResolvable | undefined;

    /**
     * @Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    public tagValueScope: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::Config::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigRuleArn = this.getAtt('ConfigRuleArn');
        this.attrConfigRuleId = this.getAtt('ConfigRuleId');
        this.attrConfigRuleTriggerTypes = this.getAtt('ConfigRuleTriggerTypes');
        this.attrDescription = this.getAtt('Description');
        this.attrEventSource = this.getAtt('EventSource');
        this.attrExcludeResourceIdsScope = this.getAtt('ExcludeResourceIdsScope');
        this.attrInputParameters = this.getAtt('InputParameters');
        this.attrMaximumExecutionFrequency = this.getAtt('MaximumExecutionFrequency');
        this.attrRegionIdsScope = this.getAtt('RegionIdsScope');
        this.attrResourceGroupIdsScope = this.getAtt('ResourceGroupIdsScope');
        this.attrResourceTypesScope = this.getAtt('ResourceTypesScope');
        this.attrRiskLevel = this.getAtt('RiskLevel');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSourceIdentifier = this.getAtt('SourceIdentifier');
        this.attrSourceOwner = this.getAtt('SourceOwner');
        this.attrTagKeyScope = this.getAtt('TagKeyScope');
        this.attrTagValueScope = this.getAtt('TagValueScope');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configRuleTriggerTypes = props.configRuleTriggerTypes;
        this.resourceTypesScope = props.resourceTypesScope;
        this.riskLevel = props.riskLevel;
        this.ruleName = props.ruleName;
        this.sourceIdentifier = props.sourceIdentifier;
        this.sourceOwner = props.sourceOwner;
        this.description = props.description;
        this.excludeResourceIdsScope = props.excludeResourceIdsScope;
        this.inputParameters = props.inputParameters;
        this.maximumExecutionFrequency = props.maximumExecutionFrequency;
        this.regionIdsScope = props.regionIdsScope;
        this.resourceGroupIdsScope = props.resourceGroupIdsScope;
        this.tagKeyLogicScope = props.tagKeyLogicScope;
        this.tagKeyScope = props.tagKeyScope;
        this.tagValueScope = props.tagValueScope;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configRuleTriggerTypes: this.configRuleTriggerTypes,
            resourceTypesScope: this.resourceTypesScope,
            riskLevel: this.riskLevel,
            ruleName: this.ruleName,
            sourceIdentifier: this.sourceIdentifier,
            sourceOwner: this.sourceOwner,
            description: this.description,
            excludeResourceIdsScope: this.excludeResourceIdsScope,
            inputParameters: this.inputParameters,
            maximumExecutionFrequency: this.maximumExecutionFrequency,
            regionIdsScope: this.regionIdsScope,
            resourceGroupIdsScope: this.resourceGroupIdsScope,
            tagKeyLogicScope: this.tagKeyLogicScope,
            tagKeyScope: this.tagKeyScope,
            tagValueScope: this.tagValueScope,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
