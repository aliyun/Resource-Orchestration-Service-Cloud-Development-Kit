// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceId: The ID of the KMS instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Instance`, which is used to query the information about a Key Management Service (KMS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Instance";

    /**
     * @Attribute CreateTime: The time when the KMS instance is created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the KMS instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: The name of the KMS instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute KeyNum: The number of keys that can be created for the KMS instance.
     */
    public readonly attrKeyNum: ros.IResolvable;

    /**
     * @Attribute SecretNum: The number of secrets that can be created for the KMS instance.
     */
    public readonly attrSecretNum: ros.IResolvable;

    /**
     * @Attribute Spec: The computation performance level of the KMS instance.
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * @Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute VpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance.
     */
    public readonly attrVpcNum: ros.IResolvable;

    /**
     * @Attribute VswitchIds: The VSwitch in the VPC.
     */
    public readonly attrVswitchIds: ros.IResolvable;

    /**
     * @Attribute ZoneIds: The zone with which the KMS instance is associated.
     */
    public readonly attrZoneIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the KMS instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrKeyNum = this.getAtt('KeyNum');
        this.attrSecretNum = this.getAtt('SecretNum');
        this.attrSpec = this.getAtt('Spec');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVpcNum = this.getAtt('VpcNum');
        this.attrVswitchIds = this.getAtt('VswitchIds');
        this.attrZoneIds = this.getAtt('ZoneIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
 */
export interface RosInstancesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Instances";

    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNetworkRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrule
 */
export interface RosNetworkRuleProps {

    /**
     * @Property networkRuleName: The name of the access control rule.
     */
    readonly networkRuleName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkRuleProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkRuleName', ros.requiredValidator)(properties.networkRuleName));
    errors.collect(ros.propertyValidator('networkRuleName', ros.validateString)(properties.networkRuleName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosNetworkRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::NetworkRule` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::NetworkRule` resource.
 */
// @ts-ignore TS6133
function rosNetworkRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkRulePropsValidator(properties).assertSuccess();
    }
    return {
      'NetworkRuleName': ros.stringToRosTemplate(properties.networkRuleName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::NetworkRule`, which is used to query the information about a network access rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrule
 */
export class RosNetworkRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::NetworkRule";

    /**
     * @Attribute Description: The access control rule description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute SourcePrivateIp: The private IP address or private CIDR block.
     */
    public readonly attrSourcePrivateIp: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkRuleName: The name of the access control rule.
     */
    public networkRuleName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrSourcePrivateIp = this.getAtt('SourcePrivateIp');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkRuleName = props.networkRuleName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkRuleName: this.networkRuleName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNetworkRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrules
 */
export interface RosNetworkRulesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkRulesProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkRulesProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkRulesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosNetworkRulesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::NetworkRules` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkRulesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::NetworkRules` resource.
 */
// @ts-ignore TS6133
function rosNetworkRulesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkRulesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::NetworkRules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrules
 */
export class RosNetworkRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::NetworkRules";

    /**
     * @Attribute NetworkRuleNames: The list of network rule names.
     */
    public readonly attrNetworkRuleNames: ros.IResolvable;

    /**
     * @Attribute NetworkRules: The list of network rules.
     */
    public readonly attrNetworkRules: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkRulesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkRules.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkRuleNames = this.getAtt('NetworkRuleNames');
        this.attrNetworkRules = this.getAtt('NetworkRules');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkRulesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPolicies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policies
 */
export interface RosPoliciesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPoliciesProps`
 *
 * @param properties - the TypeScript properties of a `RosPoliciesProps`
 *
 * @returns the result of the validation.
 */
function RosPoliciesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPoliciesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Policies` resource
 *
 * @param properties - the TypeScript properties of a `RosPoliciesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Policies` resource.
 */
// @ts-ignore TS6133
function rosPoliciesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPoliciesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Policies`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policies` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policies
 */
export class RosPolicies extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Policies";

    /**
     * @Attribute Policies: The list of policies.
     */
    public readonly attrPolicies: ros.IResolvable;

    /**
     * @Attribute PolicyNames: The list of policy names.
     */
    public readonly attrPolicyNames: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPoliciesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPolicies.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPolicies = this.getAtt('Policies');
        this.attrPolicyNames = this.getAtt('PolicyNames');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPoliciesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policy
 */
export interface RosPolicyProps {

    /**
     * @Property policyName: The name of the permission policy.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Policy` resource
 *
 * @param properties - the TypeScript properties of a `RosPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Policy` resource.
 */
// @ts-ignore TS6133
function rosPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Policy`, which is used to query the information about a permission policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policy
 */
export class RosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Policy";

    /**
     * @Attribute Description: The policy description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute KmsInstanceId: KMS instance accessed by this policy.
     */
    public readonly attrKmsInstanceId: ros.IResolvable;

    /**
     * @Attribute NetworkRules: The network access rule that is associated with the permission policy.
     */
    public readonly attrNetworkRules: ros.IResolvable;

    /**
     * @Attribute Permissions: A list of operations that can be performed.
     */
    public readonly attrPermissions: ros.IResolvable;

    /**
     * @Attribute PolicyName: The name of the permission policy.
     */
    public readonly attrPolicyName: ros.IResolvable;

    /**
     * @Attribute Resources: A list of keys and secrets that are allowed to access.
     */
    public readonly attrResources: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: The name of the permission policy.
     */
    public policyName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrKmsInstanceId = this.getAtt('KmsInstanceId');
        this.attrNetworkRules = this.getAtt('NetworkRules');
        this.attrPermissions = this.getAtt('Permissions');
        this.attrPolicyName = this.getAtt('PolicyName');
        this.attrResources = this.getAtt('Resources');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecret`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secret
 */
export interface RosSecretProps {

    /**
     * @Property secretName: The name of the secret.
     */
    readonly secretName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecretProps`
 *
 * @param properties - the TypeScript properties of a `RosSecretProps`
 *
 * @returns the result of the validation.
 */
function RosSecretPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('secretName', ros.requiredValidator)(properties.secretName));
    errors.collect(ros.propertyValidator('secretName', ros.validateString)(properties.secretName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSecretProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Secret` resource
 *
 * @param properties - the TypeScript properties of a `RosSecretProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Secret` resource.
 */
// @ts-ignore TS6133
function rosSecretPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecretPropsValidator(properties).assertSuccess();
    }
    return {
      'SecretName': ros.stringToRosTemplate(properties.secretName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Secret`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Secret` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secret
 */
export class RosSecret extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Secret";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.
     */
    public readonly attrAutomaticRotation: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the secret was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DKMSInstanceId: The ID of the dedicated KMS instance.
     */
    public readonly attrDkmsInstanceId: ros.IResolvable;

    /**
     * @Attribute Description: The description of the secret.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.
     */
    public readonly attrEncryptionKeyId: ros.IResolvable;

    /**
     * @Attribute ExtendedConfig: The extended configuration of the secret.
     */
    public readonly attrExtendedConfig: ros.IResolvable;

    /**
     * @Attribute LastRotationDate: The time when the last rotation was performed.
     */
    public readonly attrLastRotationDate: ros.IResolvable;

    /**
     * @Attribute NextRotationDate: The time when the next rotation will be performed.
     */
    public readonly attrNextRotationDate: ros.IResolvable;

    /**
     * @Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.
     */
    public readonly attrPlannedDeleteTime: ros.IResolvable;

    /**
     * @Attribute RotationInterval: The interval for automatic rotation. The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
     */
    public readonly attrRotationInterval: ros.IResolvable;

    /**
     * @Attribute SecretName: The name of the secret.
     */
    public readonly attrSecretName: ros.IResolvable;

    /**
     * @Attribute SecretType: The type of the secret.
     */
    public readonly attrSecretType: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the secret was updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property secretName: The name of the secret.
     */
    public secretName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecret.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrAutomaticRotation = this.getAtt('AutomaticRotation');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDkmsInstanceId = this.getAtt('DKMSInstanceId');
        this.attrDescription = this.getAtt('Description');
        this.attrEncryptionKeyId = this.getAtt('EncryptionKeyId');
        this.attrExtendedConfig = this.getAtt('ExtendedConfig');
        this.attrLastRotationDate = this.getAtt('LastRotationDate');
        this.attrNextRotationDate = this.getAtt('NextRotationDate');
        this.attrPlannedDeleteTime = this.getAtt('PlannedDeleteTime');
        this.attrRotationInterval = this.getAtt('RotationInterval');
        this.attrSecretName = this.getAtt('SecretName');
        this.attrSecretType = this.getAtt('SecretType');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.secretName = props.secretName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            secretName: this.secretName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecretPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecrets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
 */
export interface RosSecretsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecretsProps`
 *
 * @param properties - the TypeScript properties of a `RosSecretsProps`
 *
 * @returns the result of the validation.
 */
function RosSecretsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSecretsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Secrets` resource
 *
 * @param properties - the TypeScript properties of a `RosSecretsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Secrets` resource.
 */
// @ts-ignore TS6133
function rosSecretsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecretsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Secrets`, which is used to query all secrets that are created within the current account in the current region.
 * @Note This class does not contain additional functions, so it is recommended to use the `Secrets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
 */
export class RosSecrets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Secrets";

    /**
     * @Attribute SecretNames: The list of secret names.
     */
    public readonly attrSecretNames: ros.IResolvable;

    /**
     * @Attribute Secrets: The list of secrets.
     */
    public readonly attrSecrets: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecrets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecretNames = this.getAtt('SecretNames');
        this.attrSecrets = this.getAtt('Secrets');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecretsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
