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
 * A ROS template type:  `ALIYUN::Config::CompliancePack`
 */
export declare class RosCompliancePack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::CompliancePack";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AccountId: Aliyun User Id
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * @Attribute CompliancePackId: Compliance Package ID
     */
    readonly attrCompliancePackId: ros.IResolvable;
    /**
     * @Attribute CompliancePackName: Compliance Package Name
     */
    readonly attrCompliancePackName: ros.IResolvable;
    /**
     * @Attribute CompliancePackTemplateId: Compliance Package Template Id
     */
    readonly attrCompliancePackTemplateId: ros.IResolvable;
    /**
     * @Attribute Description: Description
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute RiskLevel: Ris Level
     */
    readonly attrRiskLevel: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property compliancePackName: Compliance Package Name
     */
    compliancePackName: string | ros.IResolvable;
    /**
     * @Property description: Description
     */
    description: string | ros.IResolvable;
    /**
     * @Property riskLevel: Ris Level
     */
    riskLevel: number | ros.IResolvable;
    /**
     * @Property compliancePackTemplateId: Compliance Package Template Id
     */
    compliancePackTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property configRules: Config Rule List
     */
    configRules: Array<RosCompliancePack.ConfigRulesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::Config::CompliancePack`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCompliancePackProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCompliancePack {
    /**
     * @stability external
     */
    interface ConfigRuleParametersProperty {
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
export declare namespace RosCompliancePack {
    /**
     * @stability external
     */
    interface ConfigRulesProperty {
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
 * A ROS template type:  `ALIYUN::Config::DeliveryChannel`
 */
export declare class RosDeliveryChannel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::DeliveryChannel";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DeliveryChannelId: The ID of the delivery method.
     */
    readonly attrDeliveryChannelId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
     * This parameter is required when you create a delivery method.
     * Note If the delivery method assumes the service linked role for Cloud Config, you can specify
     * the ARN in the format of the provided example and replace the account ID with the
     * ID of your Alibaba Cloud account.
     */
    deliveryChannelAssumeRoleArn: string | ros.IResolvable;
    /**
     * @Property deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a
     * delivery method. The value must be in one of the following formats:
     * acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
     * acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
     * acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
     */
    deliveryChannelTargetArn: string | ros.IResolvable;
    /**
     * @Property deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery
     * method. Valid values:
     * OSS
     * MNS
     * SLS
     */
    deliveryChannelType: string | ros.IResolvable;
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
    deliveryChannelCondition: string | ros.IResolvable | undefined;
    /**
     * @Property deliveryChannelName: The name of the delivery method.
     */
    deliveryChannelName: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the delivery method.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::Config::DeliveryChannel`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeliveryChannelProps, enableResourcePropertyConstraint: boolean);
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
    readonly inputParameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
     * @Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    readonly tagKeyScope?: string | ros.IResolvable;
    /**
     * @Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    readonly tagValueScope?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::Config::Rule`
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::Rule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CompliancePackId: Compliance Package ID
     */
    readonly attrCompliancePackId: ros.IResolvable;
    /**
     * @Attribute ConfigRuleArn: config rule arn
     */
    readonly attrConfigRuleArn: ros.IResolvable;
    /**
     * @Attribute ConfigRuleId: The ID of the rule
     */
    readonly attrConfigRuleId: ros.IResolvable;
    /**
     * @Attribute ConfigRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    readonly attrConfigRuleTriggerTypes: ros.IResolvable;
    /**
     * @Attribute Description: The description of the rule
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EventSource: The event source of the rule.
     */
    readonly attrEventSource: ros.IResolvable;
    /**
     * @Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
     */
    readonly attrExcludeResourceIdsScope: ros.IResolvable;
    /**
     * @Attribute InputParameters: The settings of the input parameters for the rule
     */
    readonly attrInputParameters: ros.IResolvable;
    /**
     * @Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    readonly attrMaximumExecutionFrequency: ros.IResolvable;
    /**
     * @Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
     */
    readonly attrRegionIdsScope: ros.IResolvable;
    /**
     * @Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
     */
    readonly attrResourceGroupIdsScope: ros.IResolvable;
    /**
     * @Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule
     */
    readonly attrResourceTypesScope: ros.IResolvable;
    /**
     * @Attribute RiskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
     */
    readonly attrRiskLevel: ros.IResolvable;
    /**
     * @Attribute RuleName: The name of the rule.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * @Attribute SourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    readonly attrSourceIdentifier: ros.IResolvable;
    /**
     * @Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    readonly attrSourceOwner: ros.IResolvable;
    /**
     * @Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    readonly attrTagKeyScope: ros.IResolvable;
    /**
     * @Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    readonly attrTagValueScope: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property configRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    configRuleTriggerTypes: string | ros.IResolvable;
    /**
     * @Property resourceTypesScope: The types of the resources to be evaluated against the rule
     */
    resourceTypesScope: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property riskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
     */
    riskLevel: number | ros.IResolvable;
    /**
     * @Property ruleName: The name of the rule.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property sourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    sourceIdentifier: string | ros.IResolvable;
    /**
     * @Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    sourceOwner: string | ros.IResolvable;
    /**
     * @Property description: The description of the rule
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
     */
    excludeResourceIdsScope: string | ros.IResolvable | undefined;
    /**
     * @Property inputParameters: The settings of the input parameters for the rule
     */
    inputParameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    maximumExecutionFrequency: string | ros.IResolvable | undefined;
    /**
     * @Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
     */
    regionIdsScope: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
     */
    resourceGroupIdsScope: string | ros.IResolvable | undefined;
    /**
     * @Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    tagKeyScope: string | ros.IResolvable | undefined;
    /**
     * @Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    tagValueScope: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::Config::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
