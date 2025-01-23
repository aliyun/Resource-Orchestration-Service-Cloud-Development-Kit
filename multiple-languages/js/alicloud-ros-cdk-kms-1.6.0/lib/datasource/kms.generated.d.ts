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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Instance`, which is used to query the information about a Key Management Service (KMS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Instance";
    /**
     * @Attribute CreateTime: The time when the KMS instance is created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the KMS instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: The name of the KMS instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute KeyNum: The number of keys that can be created for the KMS instance.
     */
    readonly attrKeyNum: ros.IResolvable;
    /**
     * @Attribute SecretNum: The number of secrets that can be created for the KMS instance.
     */
    readonly attrSecretNum: ros.IResolvable;
    /**
     * @Attribute Spec: The computation performance level of the KMS instance.
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * @Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance.
     */
    readonly attrVpcNum: ros.IResolvable;
    /**
     * @Attribute VswitchIds: The VSwitch in the VPC.
     */
    readonly attrVswitchIds: ros.IResolvable;
    /**
     * @Attribute ZoneIds: The zone with which the KMS instance is associated.
     */
    readonly attrZoneIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the KMS instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Instances`, which is used to query Key Management Service (KMS) instances that are created within the current account in the current region.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Instances";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::NetworkRule`, which is used to query the information about a network access rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrule
 */
export declare class RosNetworkRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::NetworkRule";
    /**
     * @Attribute Description: The access control rule description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute SourcePrivateIp: The private IP address or private CIDR block.
     */
    readonly attrSourcePrivateIp: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkRuleName: The name of the access control rule.
     */
    networkRuleName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkRuleProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::NetworkRules`, which is used to query the information about network access rules.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrules
 */
export declare class RosNetworkRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::NetworkRules";
    /**
     * @Attribute NetworkRuleNames: The list of network rule names.
     */
    readonly attrNetworkRuleNames: ros.IResolvable;
    /**
     * @Attribute NetworkRules: The list of network rules.
     */
    readonly attrNetworkRules: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkRulesProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Policies`, which is used to query permission policies.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policies` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policies
 */
export declare class RosPolicies extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Policies";
    /**
     * @Attribute Policies: The list of policies.
     */
    readonly attrPolicies: ros.IResolvable;
    /**
     * @Attribute PolicyNames: The list of policy names.
     */
    readonly attrPolicyNames: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPoliciesProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Policy`, which is used to query the information about a permission policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policy
 */
export declare class RosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Policy";
    /**
     * @Attribute Description: The policy description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute KmsInstanceId: KMS instance accessed by this policy.
     */
    readonly attrKmsInstanceId: ros.IResolvable;
    /**
     * @Attribute NetworkRules: The network access rule that is associated with the permission policy.
     */
    readonly attrNetworkRules: ros.IResolvable;
    /**
     * @Attribute Permissions: A list of operations that can be performed.
     */
    readonly attrPermissions: ros.IResolvable;
    /**
     * @Attribute PolicyName: The name of the permission policy.
     */
    readonly attrPolicyName: ros.IResolvable;
    /**
     * @Attribute Resources: A list of keys and secrets that are allowed to access.
     */
    readonly attrResources: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyName: The name of the permission policy.
     */
    policyName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Secret`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Secret` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secret
 */
export declare class RosSecret extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Secret";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.
     */
    readonly attrAutomaticRotation: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the secret was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DKMSInstanceId: The ID of the dedicated KMS instance.
     */
    readonly attrDkmsInstanceId: ros.IResolvable;
    /**
     * @Attribute Description: The description of the secret.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.
     */
    readonly attrEncryptionKeyId: ros.IResolvable;
    /**
     * @Attribute ExtendedConfig: The extended configuration of the secret.
     */
    readonly attrExtendedConfig: ros.IResolvable;
    /**
     * @Attribute LastRotationDate: The time when the last rotation was performed.
     */
    readonly attrLastRotationDate: ros.IResolvable;
    /**
     * @Attribute NextRotationDate: The time when the next rotation will be performed.
     */
    readonly attrNextRotationDate: ros.IResolvable;
    /**
     * @Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.
     */
    readonly attrPlannedDeleteTime: ros.IResolvable;
    /**
     * @Attribute RotationInterval: The interval for automatic rotation. The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
     */
    readonly attrRotationInterval: ros.IResolvable;
    /**
     * @Attribute SecretName: The name of the secret.
     */
    readonly attrSecretName: ros.IResolvable;
    /**
     * @Attribute SecretType: The type of the secret.
     */
    readonly attrSecretType: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the secret was updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property secretName: The name of the secret.
     */
    secretName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Secrets`, which is used to query all secrets that are created within the current account in the current region.
 * @Note This class does not contain additional functions, so it is recommended to use the `Secrets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
 */
export declare class RosSecrets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Secrets";
    /**
     * @Attribute SecretNames: The list of secret names.
     */
    readonly attrSecretNames: ros.IResolvable;
    /**
     * @Attribute Secrets: The list of secrets.
     */
    readonly attrSecrets: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
