// Generated from the AliCloud ROS Resource Specification

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
     * @Property configRules: List of rules in the compliance package.
     * Note: Either this parameter or TemplateContent must be set.
     */
    readonly configRules?: Array<RosAggregateCompliancePack.ConfigRulesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property defaultEnable: Whether the rule supports quick activation. Value:
     * true: This rule will be enabled when the compliance package is quickly enabled.
     * false (default): disable
     */
    readonly defaultEnable?: boolean | ros.IResolvable;

    /**
     * @Property excludeRegionIdsScope: The compliance package is invalid for the specified region ID.
     */
    readonly excludeRegionIdsScope?: string | ros.IResolvable;

    /**
     * @Property excludeResourceGroupIdsScope: The compliance package is invalid for the specified resource group ID.
     */
    readonly excludeResourceGroupIdsScope?: string | ros.IResolvable;

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
     * @Property resourceIdsScope: The compliance package only takes effect on the specified resource ID.
     */
    readonly resourceIdsScope?: string | ros.IResolvable;

    /**
     * @Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
     */
    readonly tagKeyScope?: string | ros.IResolvable;

    /**
     * @Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
     */
    readonly tagValueScope?: string | ros.IResolvable;

    /**
     * @Property templateContent: Template information used to generate compliance packages.
     * Note: Either this parameter or ConfigRules must be set.
     */
    readonly templateContent?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAggregateCompliancePackProps`
 *
 * @param properties - the TypeScript properties of a `RosAggregateCompliancePackProps`
 *
 * @returns the result of the validation.
 */
function RosAggregateCompliancePackPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagKeyScope', ros.validateString)(properties.tagKeyScope));
    errors.collect(ros.propertyValidator('tagValueScope', ros.validateString)(properties.tagValueScope));
    errors.collect(ros.propertyValidator('excludeResourceGroupIdsScope', ros.validateString)(properties.excludeResourceGroupIdsScope));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('excludeResourceIdsScope', ros.listValidator(ros.validateString))(properties.excludeResourceIdsScope));
    errors.collect(ros.propertyValidator('resourceIdsScope', ros.validateString)(properties.resourceIdsScope));
    errors.collect(ros.propertyValidator('templateContent', ros.validateString)(properties.templateContent));
    if(properties.configRules && (Array.isArray(properties.configRules) || (typeof properties.configRules) === 'string')) {
        errors.collect(ros.propertyValidator('configRules', ros.validateLength)({
            data: properties.configRules.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('configRules', ros.listValidator(RosAggregateCompliancePack_ConfigRulesPropertyValidator))(properties.configRules));
    errors.collect(ros.propertyValidator('defaultEnable', ros.validateBoolean)(properties.defaultEnable));
    errors.collect(ros.propertyValidator('compliancePackName', ros.requiredValidator)(properties.compliancePackName));
    errors.collect(ros.propertyValidator('compliancePackName', ros.validateString)(properties.compliancePackName));
    errors.collect(ros.propertyValidator('excludeRegionIdsScope', ros.validateString)(properties.excludeRegionIdsScope));
    errors.collect(ros.propertyValidator('regionIdsScope', ros.listValidator(ros.validateString))(properties.regionIdsScope));
    errors.collect(ros.propertyValidator('resourceGroupIdsScope', ros.listValidator(ros.validateString))(properties.resourceGroupIdsScope));
    errors.collect(ros.propertyValidator('compliancePackTemplateId', ros.validateString)(properties.compliancePackTemplateId));
    errors.collect(ros.propertyValidator('riskLevel', ros.requiredValidator)(properties.riskLevel));
    if(properties.riskLevel && (typeof properties.riskLevel) !== 'object') {
        errors.collect(ros.propertyValidator('riskLevel', ros.validateAllowedValues)({
          data: properties.riskLevel,
          allowedValues: [1,2,3],
        }));
    }
    errors.collect(ros.propertyValidator('riskLevel', ros.validateNumber)(properties.riskLevel));
    errors.collect(ros.propertyValidator('aggregatorId', ros.requiredValidator)(properties.aggregatorId));
    errors.collect(ros.propertyValidator('aggregatorId', ros.validateString)(properties.aggregatorId));
    return errors.wrap('supplied properties not correct for "RosAggregateCompliancePackProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::AggregateCompliancePack` resource
 *
 * @param properties - the TypeScript properties of a `RosAggregateCompliancePackProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::AggregateCompliancePack` resource.
 */
// @ts-ignore TS6133
function rosAggregateCompliancePackPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAggregateCompliancePackPropsValidator(properties).assertSuccess();
    }
    return {
      'AggregatorId': ros.stringToRosTemplate(properties.aggregatorId),
      'CompliancePackName': ros.stringToRosTemplate(properties.compliancePackName),
      'Description': ros.stringToRosTemplate(properties.description),
      'RiskLevel': ros.numberToRosTemplate(properties.riskLevel),
      'CompliancePackTemplateId': ros.stringToRosTemplate(properties.compliancePackTemplateId),
      'ConfigRules': ros.listMapper(rosAggregateCompliancePackConfigRulesPropertyToRosTemplate)(properties.configRules),
      'DefaultEnable': ros.booleanToRosTemplate(properties.defaultEnable),
      'ExcludeRegionIdsScope': ros.stringToRosTemplate(properties.excludeRegionIdsScope),
      'ExcludeResourceGroupIdsScope': ros.stringToRosTemplate(properties.excludeResourceGroupIdsScope),
      'ExcludeResourceIdsScope': ros.listMapper(ros.stringToRosTemplate)(properties.excludeResourceIdsScope),
      'RegionIdsScope': ros.listMapper(ros.stringToRosTemplate)(properties.regionIdsScope),
      'ResourceGroupIdsScope': ros.listMapper(ros.stringToRosTemplate)(properties.resourceGroupIdsScope),
      'ResourceIdsScope': ros.stringToRosTemplate(properties.resourceIdsScope),
      'TagKeyScope': ros.stringToRosTemplate(properties.tagKeyScope),
      'TagValueScope': ros.stringToRosTemplate(properties.tagValueScope),
      'TemplateContent': ros.stringToRosTemplate(properties.templateContent),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::AggregateCompliancePack`, which is used to create a compliance package for an account group.
 * @Note This class does not contain additional functions, so it is recommended to use the `AggregateCompliancePack` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
 */
export class RosAggregateCompliancePack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::AggregateCompliancePack";

    /**
     * @Attribute CompliancePackId: The ID of the compliance pack id.
     */
    public readonly attrCompliancePackId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aggregatorId: Aggregator id.
     */
    public aggregatorId: string | ros.IResolvable;

    /**
     * @Property compliancePackName: Compliance package name.
     */
    public compliancePackName: string | ros.IResolvable;

    /**
     * @Property description: The description of compliance pack.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property riskLevel: Compliance package risk level. Value:
     * 1: High risk.
     * 2: Medium risk.
     * 3: Low risk.
     */
    public riskLevel: number | ros.IResolvable;

    /**
     * @Property compliancePackTemplateId: Compliance package template ID.
     */
    public compliancePackTemplateId: string | ros.IResolvable | undefined;

    /**
     * @Property configRules: List of rules in the compliance package.
     * Note: Either this parameter or TemplateContent must be set.
     */
    public configRules: Array<RosAggregateCompliancePack.ConfigRulesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property defaultEnable: Whether the rule supports quick activation. Value:
     * true: This rule will be enabled when the compliance package is quickly enabled.
     * false (default): disable
     */
    public defaultEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property excludeRegionIdsScope: The compliance package is invalid for the specified region ID.
     */
    public excludeRegionIdsScope: string | ros.IResolvable | undefined;

    /**
     * @Property excludeResourceGroupIdsScope: The compliance package is invalid for the specified resource group ID.
     */
    public excludeResourceGroupIdsScope: string | ros.IResolvable | undefined;

    /**
     * @Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
     */
    public excludeResourceIdsScope: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
     */
    public regionIdsScope: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
     */
    public resourceGroupIdsScope: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceIdsScope: The compliance package only takes effect on the specified resource ID.
     */
    public resourceIdsScope: string | ros.IResolvable | undefined;

    /**
     * @Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
     */
    public tagKeyScope: string | ros.IResolvable | undefined;

    /**
     * @Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
     */
    public tagValueScope: string | ros.IResolvable | undefined;

    /**
     * @Property templateContent: Template information used to generate compliance packages.
     * Note: Either this parameter or ConfigRules must be set.
     */
    public templateContent: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAggregateCompliancePackProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAggregateCompliancePack.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCompliancePackId = this.getAtt('CompliancePackId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aggregatorId = props.aggregatorId;
        this.compliancePackName = props.compliancePackName;
        this.description = props.description;
        this.riskLevel = props.riskLevel;
        this.compliancePackTemplateId = props.compliancePackTemplateId;
        this.configRules = props.configRules;
        this.defaultEnable = props.defaultEnable;
        this.excludeRegionIdsScope = props.excludeRegionIdsScope;
        this.excludeResourceGroupIdsScope = props.excludeResourceGroupIdsScope;
        this.excludeResourceIdsScope = props.excludeResourceIdsScope;
        this.regionIdsScope = props.regionIdsScope;
        this.resourceGroupIdsScope = props.resourceGroupIdsScope;
        this.resourceIdsScope = props.resourceIdsScope;
        this.tagKeyScope = props.tagKeyScope;
        this.tagValueScope = props.tagValueScope;
        this.templateContent = props.templateContent;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aggregatorId: this.aggregatorId,
            compliancePackName: this.compliancePackName,
            description: this.description,
            riskLevel: this.riskLevel,
            compliancePackTemplateId: this.compliancePackTemplateId,
            configRules: this.configRules,
            defaultEnable: this.defaultEnable,
            excludeRegionIdsScope: this.excludeRegionIdsScope,
            excludeResourceGroupIdsScope: this.excludeResourceGroupIdsScope,
            excludeResourceIdsScope: this.excludeResourceIdsScope,
            regionIdsScope: this.regionIdsScope,
            resourceGroupIdsScope: this.resourceGroupIdsScope,
            resourceIdsScope: this.resourceIdsScope,
            tagKeyScope: this.tagKeyScope,
            tagValueScope: this.tagValueScope,
            templateContent: this.templateContent,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAggregateCompliancePackPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAggregateCompliancePack {
    /**
     * @stability external
     */
    export interface ConfigRuleParametersProperty {
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
/**
 * Determine whether the given properties match those of a `ConfigRuleParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigRuleParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosAggregateCompliancePack_ConfigRuleParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameterValue', ros.requiredValidator)(properties.parameterValue));
    errors.collect(ros.propertyValidator('parameterValue', ros.validateString)(properties.parameterValue));
    errors.collect(ros.propertyValidator('parameterName', ros.requiredValidator)(properties.parameterName));
    errors.collect(ros.propertyValidator('parameterName', ros.validateString)(properties.parameterName));
    return errors.wrap('supplied properties not correct for "ConfigRuleParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::AggregateCompliancePack.ConfigRuleParameters` resource
 *
 * @param properties - the TypeScript properties of a `ConfigRuleParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::AggregateCompliancePack.ConfigRuleParameters` resource.
 */
// @ts-ignore TS6133
function rosAggregateCompliancePackConfigRuleParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAggregateCompliancePack_ConfigRuleParametersPropertyValidator(properties).assertSuccess();
    return {
      'ParameterValue': ros.stringToRosTemplate(properties.parameterValue),
      'ParameterName': ros.stringToRosTemplate(properties.parameterName),
    };
}

export namespace RosAggregateCompliancePack {
    /**
     * @stability external
     */
    export interface ConfigRulesProperty {
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
 * Determine whether the given properties match those of a `ConfigRulesProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosAggregateCompliancePack_ConfigRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('configRuleId', ros.validateString)(properties.configRuleId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('configRuleName', ros.validateString)(properties.configRuleName));
    errors.collect(ros.propertyValidator('managedRuleIdentifier', ros.validateString)(properties.managedRuleIdentifier));
    errors.collect(ros.propertyValidator('riskLevel', ros.requiredValidator)(properties.riskLevel));
    if(properties.riskLevel && (typeof properties.riskLevel) !== 'object') {
        errors.collect(ros.propertyValidator('riskLevel', ros.validateAllowedValues)({
          data: properties.riskLevel,
          allowedValues: [1,2,3],
        }));
    }
    errors.collect(ros.propertyValidator('riskLevel', ros.validateNumber)(properties.riskLevel));
    errors.collect(ros.propertyValidator('configRuleParameters', ros.listValidator(RosAggregateCompliancePack_ConfigRuleParametersPropertyValidator))(properties.configRuleParameters));
    return errors.wrap('supplied properties not correct for "ConfigRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::AggregateCompliancePack.ConfigRules` resource
 *
 * @param properties - the TypeScript properties of a `ConfigRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::AggregateCompliancePack.ConfigRules` resource.
 */
// @ts-ignore TS6133
function rosAggregateCompliancePackConfigRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAggregateCompliancePack_ConfigRulesPropertyValidator(properties).assertSuccess();
    return {
      'ConfigRuleId': ros.stringToRosTemplate(properties.configRuleId),
      'Description': ros.stringToRosTemplate(properties.description),
      'ConfigRuleName': ros.stringToRosTemplate(properties.configRuleName),
      'ManagedRuleIdentifier': ros.stringToRosTemplate(properties.managedRuleIdentifier),
      'RiskLevel': ros.numberToRosTemplate(properties.riskLevel),
      'ConfigRuleParameters': ros.listMapper(rosAggregateCompliancePackConfigRuleParametersPropertyToRosTemplate)(properties.configRuleParameters),
    };
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
     * @Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.When the AggregatorType is FOLDER, this parameter can be empty,which means that all accounts in the resource folder will be added to the global account group.
     */
    readonly aggregatorAccounts?: Array<RosAggregator.AggregatorAccountsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aggregatorType: Account group type. Value:
     * RD: Global account group.
     * CUSTOM: Custom account group (default value).
     * FOLDER: Folder account group. Must set FolderId if the AggregatorType is FOLDER. Please refer to ListAccounts for accessing FolderId.
     */
    readonly aggregatorType?: string | ros.IResolvable;

    /**
     * @Property folderId: The folder ID.
     */
    readonly folderId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAggregatorProps`
 *
 * @param properties - the TypeScript properties of a `RosAggregatorProps`
 *
 * @returns the result of the validation.
 */
function RosAggregatorPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('aggregatorName', ros.requiredValidator)(properties.aggregatorName));
    errors.collect(ros.propertyValidator('aggregatorName', ros.validateString)(properties.aggregatorName));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('aggregatorAccounts', ros.listValidator(RosAggregator_AggregatorAccountsPropertyValidator))(properties.aggregatorAccounts));
    errors.collect(ros.propertyValidator('folderId', ros.validateString)(properties.folderId));
    if(properties.aggregatorType && (typeof properties.aggregatorType) !== 'object') {
        errors.collect(ros.propertyValidator('aggregatorType', ros.validateAllowedValues)({
          data: properties.aggregatorType,
          allowedValues: ["RD","CUSTOM","FOLDER"],
        }));
    }
    errors.collect(ros.propertyValidator('aggregatorType', ros.validateString)(properties.aggregatorType));
    return errors.wrap('supplied properties not correct for "RosAggregatorProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::Aggregator` resource
 *
 * @param properties - the TypeScript properties of a `RosAggregatorProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::Aggregator` resource.
 */
// @ts-ignore TS6133
function rosAggregatorPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAggregatorPropsValidator(properties).assertSuccess();
    }
    return {
      'AggregatorName': ros.stringToRosTemplate(properties.aggregatorName),
      'Description': ros.stringToRosTemplate(properties.description),
      'AggregatorAccounts': ros.listMapper(rosAggregatorAggregatorAccountsPropertyToRosTemplate)(properties.aggregatorAccounts),
      'AggregatorType': ros.stringToRosTemplate(properties.aggregatorType),
      'FolderId': ros.stringToRosTemplate(properties.folderId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::Aggregator`, which is used to create an account group.
 * @Note This class does not contain additional functions, so it is recommended to use the `Aggregator` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
 */
export class RosAggregator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::Aggregator";

    /**
     * @Attribute AggregatorId: The ID of the aggregator.
     */
    public readonly attrAggregatorId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aggregatorName: The name of aggregator.
     */
    public aggregatorName: string | ros.IResolvable;

    /**
     * @Property description: The description of aggregator.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.When the AggregatorType is FOLDER, this parameter can be empty,which means that all accounts in the resource folder will be added to the global account group.
     */
    public aggregatorAccounts: Array<RosAggregator.AggregatorAccountsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property aggregatorType: Account group type. Value:
     * RD: Global account group.
     * CUSTOM: Custom account group (default value).
     * FOLDER: Folder account group. Must set FolderId if the AggregatorType is FOLDER. Please refer to ListAccounts for accessing FolderId.
     */
    public aggregatorType: string | ros.IResolvable | undefined;

    /**
     * @Property folderId: The folder ID.
     */
    public folderId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAggregatorProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAggregator.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAggregatorId = this.getAtt('AggregatorId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aggregatorName = props.aggregatorName;
        this.description = props.description;
        this.aggregatorAccounts = props.aggregatorAccounts;
        this.aggregatorType = props.aggregatorType;
        this.folderId = props.folderId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aggregatorName: this.aggregatorName,
            description: this.description,
            aggregatorAccounts: this.aggregatorAccounts,
            aggregatorType: this.aggregatorType,
            folderId: this.folderId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAggregatorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAggregator {
    /**
     * @stability external
     */
    export interface AggregatorAccountsProperty {
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
 * Determine whether the given properties match those of a `AggregatorAccountsProperty`
 *
 * @param properties - the TypeScript properties of a `AggregatorAccountsProperty`
 *
 * @returns the result of the validation.
 */
function RosAggregator_AggregatorAccountsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountId', ros.requiredValidator)(properties.accountId));
    errors.collect(ros.propertyValidator('accountId', ros.validateNumber)(properties.accountId));
    if(properties.accountType && (typeof properties.accountType) !== 'object') {
        errors.collect(ros.propertyValidator('accountType', ros.validateAllowedValues)({
          data: properties.accountType,
          allowedValues: ["ResourceDirectory"],
        }));
    }
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "AggregatorAccountsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::Aggregator.AggregatorAccounts` resource
 *
 * @param properties - the TypeScript properties of a `AggregatorAccountsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::Aggregator.AggregatorAccounts` resource.
 */
// @ts-ignore TS6133
function rosAggregatorAggregatorAccountsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAggregator_AggregatorAccountsPropertyValidator(properties).assertSuccess();
    return {
      'AccountId': ros.numberToRosTemplate(properties.accountId),
      'AccountType': ros.stringToRosTemplate(properties.accountType),
      'AccountName': ros.stringToRosTemplate(properties.accountName),
    };
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
 * Determine whether the given properties match those of a `RosCompliancePackProps`
 *
 * @param properties - the TypeScript properties of a `RosCompliancePackProps`
 *
 * @returns the result of the validation.
 */
function RosCompliancePackPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('configRuleIds', ros.listValidator(RosCompliancePack_ConfigRuleIdsPropertyValidator))(properties.configRuleIds));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('compliancePackName', ros.requiredValidator)(properties.compliancePackName));
    errors.collect(ros.propertyValidator('compliancePackName', ros.validateString)(properties.compliancePackName));
    errors.collect(ros.propertyValidator('configRules', ros.requiredValidator)(properties.configRules));
    errors.collect(ros.propertyValidator('configRules', ros.validateString)(properties.configRules));
    errors.collect(ros.propertyValidator('compliancePackTemplateId', ros.validateString)(properties.compliancePackTemplateId));
    errors.collect(ros.propertyValidator('riskLevel', ros.requiredValidator)(properties.riskLevel));
    if(properties.riskLevel && (typeof properties.riskLevel) !== 'object') {
        errors.collect(ros.propertyValidator('riskLevel', ros.validateAllowedValues)({
          data: properties.riskLevel,
          allowedValues: [1,2,3],
        }));
    }
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
      'CompliancePackName': ros.stringToRosTemplate(properties.compliancePackName),
      'ConfigRules': ros.stringToRosTemplate(properties.configRules),
      'RiskLevel': ros.numberToRosTemplate(properties.riskLevel),
      'CompliancePackTemplateId': ros.stringToRosTemplate(properties.compliancePackTemplateId),
      'ConfigRuleIds': ros.listMapper(rosCompliancePackConfigRuleIdsPropertyToRosTemplate)(properties.configRuleIds),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::CompliancePack`, which is used to create a compliance package.
 * @Note This class does not contain additional functions, so it is recommended to use the `CompliancePack` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
 */
export class RosCompliancePack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::CompliancePack";

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
     * @Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3
     */
    public readonly attrRiskLevel: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property compliancePackName: Compliance Package Name
     */
    public compliancePackName: string | ros.IResolvable;

    /**
     * @Property configRules:
     */
    public configRules: string | ros.IResolvable;

    /**
     * @Property riskLevel: Ris Level, valid values: 1 | 2 | 3
     */
    public riskLevel: number | ros.IResolvable;

    /**
     * @Property compliancePackTemplateId: Compliance Package Template Id
     */
    public compliancePackTemplateId: string | ros.IResolvable | undefined;

    /**
     * @Property configRuleIds: Compliance Package rule ID list
     */
    public configRuleIds: Array<RosCompliancePack.ConfigRuleIdsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property description: Description
     */
    public description: string | ros.IResolvable | undefined;

    /**
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
        this.configRules = props.configRules;
        this.riskLevel = props.riskLevel;
        this.compliancePackTemplateId = props.compliancePackTemplateId;
        this.configRuleIds = props.configRuleIds;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            compliancePackName: this.compliancePackName,
            configRules: this.configRules,
            riskLevel: this.riskLevel,
            compliancePackTemplateId: this.compliancePackTemplateId,
            configRuleIds: this.configRuleIds,
            description: this.description,
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
    export interface ConfigRuleIdsProperty {
        /**
         * @Property configRuleId: Rule ID
         */
        readonly configRuleId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigRuleIdsProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigRuleIdsProperty`
 *
 * @returns the result of the validation.
 */
function RosCompliancePack_ConfigRuleIdsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('configRuleId', ros.validateString)(properties.configRuleId));
    return errors.wrap('supplied properties not correct for "ConfigRuleIdsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Config::CompliancePack.ConfigRuleIds` resource
 *
 * @param properties - the TypeScript properties of a `ConfigRuleIdsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Config::CompliancePack.ConfigRuleIds` resource.
 */
// @ts-ignore TS6133
function rosCompliancePackConfigRuleIdsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCompliancePack_ConfigRuleIdsPropertyValidator(properties).assertSuccess();
    return {
      'ConfigRuleId': ros.stringToRosTemplate(properties.configRuleId),
    };
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
      'DeliveryChannelAssumeRoleArn': ros.stringToRosTemplate(properties.deliveryChannelAssumeRoleArn),
      'DeliveryChannelTargetArn': ros.stringToRosTemplate(properties.deliveryChannelTargetArn),
      'DeliveryChannelType': ros.stringToRosTemplate(properties.deliveryChannelType),
      'DeliveryChannelCondition': ros.stringToRosTemplate(properties.deliveryChannelCondition),
      'DeliveryChannelName': ros.stringToRosTemplate(properties.deliveryChannelName),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::DeliveryChannel`, which is used to create or update a delivery channel.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeliveryChannel` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-deliverychannel
 */
export class RosDeliveryChannel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::DeliveryChannel";

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
     * acs:mns:{RegionId}:{Aliuid}:\/topics\/{topicName} if your delivery destination is a Message Service (MNS) topic.
     * acs:log:{RegionId}:{Aliuid}:project\/{projectName}\/logstore\/{logstoreName} if your delivery destination is a Log Service Logstore.
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
      'ConfigRuleTriggerTypes': ros.stringToRosTemplate(properties.configRuleTriggerTypes),
      'ResourceTypesScope': ros.listMapper(ros.stringToRosTemplate)(properties.resourceTypesScope),
      'RiskLevel': ros.numberToRosTemplate(properties.riskLevel),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'SourceIdentifier': ros.stringToRosTemplate(properties.sourceIdentifier),
      'SourceOwner': ros.stringToRosTemplate(properties.sourceOwner),
      'Description': ros.stringToRosTemplate(properties.description),
      'ExcludeResourceIdsScope': ros.stringToRosTemplate(properties.excludeResourceIdsScope),
      'InputParameters': ros.hashMapper(ros.objectToRosTemplate)(properties.inputParameters),
      'MaximumExecutionFrequency': ros.stringToRosTemplate(properties.maximumExecutionFrequency),
      'RegionIdsScope': ros.stringToRosTemplate(properties.regionIdsScope),
      'ResourceGroupIdsScope': ros.stringToRosTemplate(properties.resourceGroupIdsScope),
      'TagKeyLogicScope': ros.stringToRosTemplate(properties.tagKeyLogicScope),
      'TagKeyScope': ros.stringToRosTemplate(properties.tagKeyScope),
      'TagValueScope': ros.stringToRosTemplate(properties.tagValueScope),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Config::Rule`, which is used to create or modify a rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-rule
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Config::Rule";

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
