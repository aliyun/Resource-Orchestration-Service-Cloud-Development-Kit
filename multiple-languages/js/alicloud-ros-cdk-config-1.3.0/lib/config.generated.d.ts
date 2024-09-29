import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAggregateCompliancePack`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
 */
export interface RosAggregateCompliancePackProps {
    /**
     * @Property aggregatorId: Aggregator id.
     */
    readonly aggregatorId: string | ros.IResolvable;
    /**
     * @Property compliancePackName: Compliance package name.
     */
    readonly compliancePackName: string | ros.IResolvable;
    /**
     * @Property configRules: List of rules in the compliance package.
     */
    readonly configRules: Array<RosAggregateCompliancePack.ConfigRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of compliance pack.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property riskLevel: Compliance package risk level. Value:
     * 1: High risk.
     * 2: Medium risk.
     * 3: Low risk.
     */
    readonly riskLevel: number | ros.IResolvable;
    /**
     * @Property compliancePackTemplateId: Compliance package template ID.
     */
    readonly compliancePackTemplateId?: string | ros.IResolvable;
    /**
     * @Property defaultEnable: Whether the rule supports quick activation. Value:
     * true: This rule will be enabled when the compliance package is quickly enabled.
     * false (default): disable
     */
    readonly defaultEnable?: boolean | ros.IResolvable;
    /**
     * @Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
     */
    readonly excludeResourceIdsScope?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
     */
    readonly regionIdsScope?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
     */
    readonly resourceGroupIdsScope?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
     */
    readonly tagKeyScope?: string | ros.IResolvable;
    /**
     * @Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
     */
    readonly tagValueScope?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::AggregateCompliancePack`, which is used to create a compliance package for an account group.
 * @Note This class does not contain additional functions, so it is recommended to use the `AggregateCompliancePack` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
 */
export declare class RosAggregateCompliancePack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::AggregateCompliancePack";
    /**
     * @Attribute CompliancePackId: The ID of the compliance pack id.
     */
    readonly attrCompliancePackId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aggregatorId: Aggregator id.
     */
    aggregatorId: string | ros.IResolvable;
    /**
     * @Property compliancePackName: Compliance package name.
     */
    compliancePackName: string | ros.IResolvable;
    /**
     * @Property configRules: List of rules in the compliance package.
     */
    configRules: Array<RosAggregateCompliancePack.ConfigRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of compliance pack.
     */
    description: string | ros.IResolvable;
    /**
     * @Property riskLevel: Compliance package risk level. Value:
     * 1: High risk.
     * 2: Medium risk.
     * 3: Low risk.
     */
    riskLevel: number | ros.IResolvable;
    /**
     * @Property compliancePackTemplateId: Compliance package template ID.
     */
    compliancePackTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property defaultEnable: Whether the rule supports quick activation. Value:
     * true: This rule will be enabled when the compliance package is quickly enabled.
     * false (default): disable
     */
    defaultEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
     */
    excludeResourceIdsScope: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
     */
    regionIdsScope: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
     */
    resourceGroupIdsScope: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
     */
    tagKeyScope: string | ros.IResolvable | undefined;
    /**
     * @Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
     */
    tagValueScope: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAggregateCompliancePackProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAggregateCompliancePack {
    /**
     * @stability external
     */
    interface ConfigRuleParametersProperty {
        /**
         * @Property parameterValue: The value of parameter.
         */
        readonly parameterValue: string | ros.IResolvable;
        /**
         * @Property parameterName: The name of parameter.
         */
        readonly parameterName: string | ros.IResolvable;
    }
}
export declare namespace RosAggregateCompliancePack {
    /**
     * @stability external
     */
    interface ConfigRulesProperty {
        /**
         * @Property configRuleId: Rule ID. Configure auditing to add existing rules to the current compliance package.Choose one of ManagedRuleIdentifier and ConfigRuleId. When both parameters are set, ConfigRuleId is the correct one.
         */
        readonly configRuleId?: string | ros.IResolvable;
        /**
         * @Property description: The description of config rule.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property configRuleName: The name of config rule.
         */
        readonly configRuleName?: string | ros.IResolvable;
        /**
         * @Property managedRuleIdentifier: Managed rule ID. Configure auditing to automatically create a rule based on the managed rule ID and add the rule to the current compliance package.Choose one of ManagedRuleIdentifier and ConfigRuleId. When both parameters are set, ConfigRuleId is the correct one.
         */
        readonly managedRuleIdentifier?: string | ros.IResolvable;
        /**
         * @Property riskLevel: Rule risk level. Value:
     * 1: High risk.
     * 2: Medium risk.
     * 3: Low risk.
         */
        readonly riskLevel: number | ros.IResolvable;
        /**
         * @Property configRuleParameters: undefined
         */
        readonly configRuleParameters?: Array<RosAggregateCompliancePack.ConfigRuleParametersProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosAggregator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
 */
export interface RosAggregatorProps {
    /**
     * @Property aggregatorName: The name of aggregator.
     */
    readonly aggregatorName: string | ros.IResolvable;
    /**
     * @Property description: The description of aggregator.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.
     */
    readonly aggregatorAccounts?: Array<RosAggregator.AggregatorAccountsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property aggregatorType: Account group type. Value:
     * RD: Global account group.CUSTOM: Custom account group (default value).
     */
    readonly aggregatorType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::Aggregator`, which is used to create an account group.
 * @Note This class does not contain additional functions, so it is recommended to use the `Aggregator` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
 */
export declare class RosAggregator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::Aggregator";
    /**
     * @Attribute AggregatorId: The ID of the aggregator.
     */
    readonly attrAggregatorId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aggregatorName: The name of aggregator.
     */
    aggregatorName: string | ros.IResolvable;
    /**
     * @Property description: The description of aggregator.
     */
    description: string | ros.IResolvable;
    /**
     * @Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.
     */
    aggregatorAccounts: Array<RosAggregator.AggregatorAccountsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property aggregatorType: Account group type. Value:
     * RD: Global account group.CUSTOM: Custom account group (default value).
     */
    aggregatorType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAggregatorProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAggregator {
    /**
     * @stability external
     */
    interface AggregatorAccountsProperty {
        /**
         * @Property accountId: The account id.
         */
        readonly accountId: number | ros.IResolvable;
        /**
         * @Property accountType: The account type. Only support: ResourceDirectory
         */
        readonly accountType?: string | ros.IResolvable;
        /**
         * @Property accountName: The account name.
         */
        readonly accountName: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCompliancePack`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
 */
export interface RosCompliancePackProps {
    /**
     * @Property compliancePackName: Compliance Package Name
     */
    readonly compliancePackName: string | ros.IResolvable;
    /**
     * @Property configRules:
     */
    readonly configRules: string | ros.IResolvable;
    /**
     * @Property riskLevel: Ris Level, valid values: 1 | 2 | 3
     */
    readonly riskLevel: number | ros.IResolvable;
    /**
     * @Property compliancePackTemplateId: Compliance Package Template Id
     */
    readonly compliancePackTemplateId?: string | ros.IResolvable;
    /**
     * @Property configRuleIds: Compliance Package rule ID list
     */
    readonly configRuleIds?: Array<RosCompliancePack.ConfigRuleIdsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: Description
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::CompliancePack`, which is used to create a compliance package.
 * @Note This class does not contain additional functions, so it is recommended to use the `CompliancePack` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
 */
export declare class RosCompliancePack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::CompliancePack";
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
     * @Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3
     */
    readonly attrRiskLevel: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property compliancePackName: Compliance Package Name
     */
    compliancePackName: string | ros.IResolvable;
    /**
     * @Property configRules:
     */
    configRules: string | ros.IResolvable;
    /**
     * @Property riskLevel: Ris Level, valid values: 1 | 2 | 3
     */
    riskLevel: number | ros.IResolvable;
    /**
     * @Property compliancePackTemplateId: Compliance Package Template Id
     */
    compliancePackTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property configRuleIds: Compliance Package rule ID list
     */
    configRuleIds: Array<RosCompliancePack.ConfigRuleIdsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property description: Description
     */
    description: string | ros.IResolvable | undefined;
    /**
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
    interface ConfigRuleIdsProperty {
        /**
         * @Property configRuleId: Rule ID
         */
        readonly configRuleId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDeliveryChannel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-deliverychannel
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
     * acs:mns:{RegionId}:{Aliuid}:\/topics\/{topicName} if your delivery destination is a Message Service (MNS) topic.
     * acs:log:{RegionId}:{Aliuid}:project\/{projectName}\/logstore\/{logstoreName} if your delivery destination is a Log Service Logstore.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::DeliveryChannel`, which is used to create or update a delivery channel.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeliveryChannel` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-deliverychannel
 */
export declare class RosDeliveryChannel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::DeliveryChannel";
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
     * acs:mns:{RegionId}:{Aliuid}:\/topics\/{topicName} if your delivery destination is a Message Service (MNS) topic.
     * acs:log:{RegionId}:{Aliuid}:project\/{projectName}\/logstore\/{logstoreName} if your delivery destination is a Log Service Logstore.
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
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-rule
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::Rule`, which is used to create or modify a rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-rule
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::Rule";
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
     * @Property tagKeyLogicScope:
     */
    tagKeyLogicScope: string | ros.IResolvable | undefined;
    /**
     * @Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    tagKeyScope: string | ros.IResolvable | undefined;
    /**
     * @Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    tagValueScope: string | ros.IResolvable | undefined;
    /**
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
