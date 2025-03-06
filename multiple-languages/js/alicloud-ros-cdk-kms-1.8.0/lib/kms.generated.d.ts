import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
 */
export interface RosAliasProps {
    /**
     * @Property aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias\/ must be included.
     */
    readonly aliasName: string | ros.IResolvable;
    /**
     * @Property keyId: Globally unique identifier of the CMK.
     */
    readonly keyId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Alias`, which is used to create an alias for a Customer Master Key (CMK).
 * @Note This class does not contain additional functions, so it is recommended to use the `Alias` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
 */
export declare class RosAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Alias";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias\/ must be included.
     */
    aliasName: string | ros.IResolvable;
    /**
     * @Property keyId: Globally unique identifier of the CMK.
     */
    keyId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAliasProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
 */
export interface RosInstanceProps {
    /**
     * @Property productVersion: KMS Instance commodity type (software\/software-small\/hardware\/hardware-small).
     */
    readonly productVersion: string | ros.IResolvable;
    /**
     * @Property connection:
     */
    readonly connection?: RosInstance.ConnectionProperty | ros.IResolvable;
    /**
     * @Property instanceChargeType: Billing method of the KMS instance, default to Subscription.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property keyNum: Maximum number of stored keys. It is required when the InstanceCharge is Subscription.
     */
    readonly keyNum?: number | ros.IResolvable;
    /**
     * @Property log: Whether to enable log.
     */
    readonly log?: boolean | ros.IResolvable;
    /**
     * @Property logStorage: Log storage.
     */
    readonly logStorage?: number | ros.IResolvable;
    /**
     * @Property period: The subscription duration of the KMS instance.
     * If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
     * If PeriodUnit is Year, the valid range is 1, 2, 3
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
     * @Property renewPeriod: Automatic renewal period, in months.
     */
    readonly renewPeriod?: number | ros.IResolvable;
    /**
     * @Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
     */
    readonly renewStatus?: string | ros.IResolvable;
    /**
     * @Property secretNum: Maximum number of secrets. It is required when the InstanceCharge is Subscription.
     */
    readonly secretNum?: number | ros.IResolvable;
    /**
     * @Property spec: The computation performance level of the KMS instance.
     */
    readonly spec?: number | ros.IResolvable;
    /**
     * @Property vpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
     */
    readonly vpcNum?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Instance`, which is used to create a Key Management Service (KMS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Instance";
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property productVersion: KMS Instance commodity type (software\/software-small\/hardware\/hardware-small).
     */
    productVersion: string | ros.IResolvable;
    /**
     * @Property connection:
     */
    connection: RosInstance.ConnectionProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Billing method of the KMS instance, default to Subscription.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property keyNum: Maximum number of stored keys. It is required when the InstanceCharge is Subscription.
     */
    keyNum: number | ros.IResolvable | undefined;
    /**
     * @Property log: Whether to enable log.
     */
    log: boolean | ros.IResolvable | undefined;
    /**
     * @Property logStorage: Log storage.
     */
    logStorage: number | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription duration of the KMS instance.
     * If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
     * If PeriodUnit is Year, the valid range is 1, 2, 3
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property renewPeriod: Automatic renewal period, in months.
     */
    renewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
     */
    renewStatus: string | ros.IResolvable | undefined;
    /**
     * @Property secretNum: Maximum number of secrets. It is required when the InstanceCharge is Subscription.
     */
    secretNum: number | ros.IResolvable | undefined;
    /**
     * @Property spec: The computation performance level of the KMS instance.
     */
    spec: number | ros.IResolvable | undefined;
    /**
     * @Property vpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
     */
    vpcNum: number | ros.IResolvable | undefined;
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
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface ConnectionProperty {
        /**
         * @Property vpcId: Set the private network VPC ID for the KMS instance.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: Set up a switch under dual availability zones, and the switch has at least 1 available IP.
         */
        readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property zoneIds: Set up two Availability Zones for the KMS instance. Improve service availability and disaster recovery capabilities through dual availability zone load balancing.
         */
        readonly zoneIds: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosKey`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
 */
export interface RosKeyProps {
    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the key. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property dkmsInstanceId: The ID of the dedicated KMS instance.
     */
    readonly dkmsInstanceId?: string | ros.IResolvable;
    /**
     * @Property enable: Specifies whether the key is enabled. Defaults to true.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * @Property enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true\/false (default)
     */
    readonly enableAutomaticRotation?: boolean | ros.IResolvable;
    /**
     * @Property keySpec: Key type. Valid value: Aliyun_AES_256\/Aliyun_SM4\/RSA_2048\/EC_P256\/EC_P256K\/EC_SM2
     */
    readonly keySpec?: string | ros.IResolvable;
    /**
     * @Property keyUsage: The usage of the CMK. Valid values:
     * ENCRYPT\/DECRYPT: encrypts or decrypts data.
     * SIGN\/VERIFY: generates or verifies a digital signature.
     * If the CMK supports signature verification, the default value is SIGN\/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT\/DECRYPT.
     */
    readonly keyUsage?: string | ros.IResolvable;
    /**
     * @Property pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
     */
    readonly pendingWindowInDays?: number | ros.IResolvable;
    /**
     * @Property policy: The policy of key.
     */
    readonly policy?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
     * If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
     * If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
     */
    readonly protectionLevel?: string | ros.IResolvable;
    /**
     * @Property rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
     */
    readonly rotationInterval?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Key`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Key` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
 */
export declare class RosKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Key";
    /**
     * @Attribute KeyId: The globally unique identifier for the CMK.
     */
    readonly attrKeyId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the key. Default is false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property dkmsInstanceId: The ID of the dedicated KMS instance.
     */
    dkmsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property enable: Specifies whether the key is enabled. Defaults to true.
     */
    enable: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true\/false (default)
     */
    enableAutomaticRotation: boolean | ros.IResolvable | undefined;
    /**
     * @Property keySpec: Key type. Valid value: Aliyun_AES_256\/Aliyun_SM4\/RSA_2048\/EC_P256\/EC_P256K\/EC_SM2
     */
    keySpec: string | ros.IResolvable | undefined;
    /**
     * @Property keyUsage: The usage of the CMK. Valid values:
     * ENCRYPT\/DECRYPT: encrypts or decrypts data.
     * SIGN\/VERIFY: generates or verifies a digital signature.
     * If the CMK supports signature verification, the default value is SIGN\/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT\/DECRYPT.
     */
    keyUsage: string | ros.IResolvable | undefined;
    /**
     * @Property pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
     */
    pendingWindowInDays: number | ros.IResolvable | undefined;
    /**
     * @Property policy: The policy of key.
     */
    policy: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
     * If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
     * If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
     */
    protectionLevel: string | ros.IResolvable | undefined;
    /**
     * @Property rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
     */
    rotationInterval: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
 */
export interface RosNetworkRuleProps {
    /**
     * @Property networkRuleName: The name of the access control rule.
     */
    readonly networkRuleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the network rule.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property sourcePrivateIp: VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses.
     */
    readonly sourcePrivateIp?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::NetworkRule`, which is used to create a network access rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
 */
export declare class RosNetworkRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::NetworkRule";
    /**
     * @Attribute Description: Description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute SourcePrivateIp: VPC network whitelist.
     */
    readonly attrSourcePrivateIp: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkRuleName: The name of the access control rule.
     */
    networkRuleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the network rule.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property sourcePrivateIp: VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses.
     */
    sourcePrivateIp: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
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
 * Properties for defining a `RosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
 */
export interface RosPolicyProps {
    /**
     * @Property accessControlRules: Network Rules info.
     */
    readonly accessControlRules: RosPolicy.AccessControlRulesProperty | ros.IResolvable;
    /**
     * @Property kmsInstanceId: The scope of the permission policy. You need to specify the KMS instance that you want to access.
     */
    readonly kmsInstanceId: string | ros.IResolvable;
    /**
     * @Property permissions: The operations that can be performed. Valid values:
     * RbacPermission\/Template\/CryptoServiceKeyUser: allows you to perform cryptographic operations.
     * RbacPermission\/Template\/CryptoServiceSecretUser: allows you to perform secret-related operations.
     */
    readonly permissions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property policyName: The name of the permission policy.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * @Property resources: The key and secret that are allowed to access. Supports a maximum of 30 key and secret.
     * Key: Enter a key in the key\/${KeyId} format. To allow access to all keys of a KMS instance, enter key\/*.
     * Secret: Enter a secret in the secret\/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret\/*.
     */
    readonly resources: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the permission policy.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Policy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
 */
export declare class RosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Policy";
    /**
     * @Attribute AccessControlRules: Network Rules info.
     */
    readonly attrAccessControlRules: ros.IResolvable;
    /**
     * @Attribute Description: Description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute KmsInstanceId: The scope of the permission policy. You need to specify the KMS instance that you want to access.
     */
    readonly attrKmsInstanceId: ros.IResolvable;
    /**
     * @Attribute Permissions: RbacPermission Template, support RbacPermission/Template/CryptoServiceKeyUser and RbacPermission/Template/CryptoServiceSecretUser.
     */
    readonly attrPermissions: ros.IResolvable;
    /**
     * @Attribute PolicyName: The name of the permission policy.
     */
    readonly attrPolicyName: ros.IResolvable;
    /**
     * @Attribute Resources: Resources that allowed access by this policy.
     */
    readonly attrResources: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessControlRules: Network Rules info.
     */
    accessControlRules: RosPolicy.AccessControlRulesProperty | ros.IResolvable;
    /**
     * @Property kmsInstanceId: The scope of the permission policy. You need to specify the KMS instance that you want to access.
     */
    kmsInstanceId: string | ros.IResolvable;
    /**
     * @Property permissions: The operations that can be performed. Valid values:
     * RbacPermission\/Template\/CryptoServiceKeyUser: allows you to perform cryptographic operations.
     * RbacPermission\/Template\/CryptoServiceSecretUser: allows you to perform secret-related operations.
     */
    permissions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property policyName: The name of the permission policy.
     */
    policyName: string | ros.IResolvable;
    /**
     * @Property resources: The key and secret that are allowed to access. Supports a maximum of 30 key and secret.
     * Key: Enter a key in the key\/${KeyId} format. To allow access to all keys of a KMS instance, enter key\/*.
     * Secret: Enter a secret in the secret\/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret\/*.
     */
    resources: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the permission policy.
     */
    description: string | ros.IResolvable | undefined;
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
export declare namespace RosPolicy {
    /**
     * @stability external
     */
    interface AccessControlRulesProperty {
        /**
         * @Property networkRules: NetworkRule list, Supports a maximum of 40 network control rules.
         */
        readonly networkRules: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSecret`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
 */
export interface RosSecretProps {
    /**
     * @Property secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
     * value and stores it in the initial version.
     */
    readonly secretData: string | ros.IResolvable;
    /**
     * @Property secretName: The name of the secret.
     */
    readonly secretName: string | ros.IResolvable;
    /**
     * @Property versionId: The version number of the initial version. Version numbers are unique in each secret
     * object.
     */
    readonly versionId: string | ros.IResolvable;
    /**
     * @Property description: The description of the secret.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property dkmsInstanceId: The ID of the dedicated KMS instance.
     */
    readonly dkmsInstanceId?: string | ros.IResolvable;
    /**
     * @Property enableAutomaticRotation: Specifies whether to enable automatic rotation. Valid values:
     * true: specifies to enable automatic rotation.
     * false: specifies to disable automatic rotation. This is the default value.
     */
    readonly enableAutomaticRotation?: boolean | ros.IResolvable;
    /**
     * @Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
     * If you do not specify this parameter, Secrets Manager automatically creates an encryption
     * key to encrypt the secret.
     * Note The KMS CMK must be a symmetric key.
     */
    readonly encryptionKeyId?: string | ros.IResolvable;
    /**
     * @Property extendedConfig: The extended configuration of the secret. This parameter specifies the properties of the secret of the specific type.
     */
    readonly extendedConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
     * true
     * false (default value)
     */
    readonly forceDeleteWithoutRecovery?: boolean | ros.IResolvable;
    /**
     * @Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
     */
    readonly recoveryWindowInDays?: number | ros.IResolvable;
    /**
     * @Property rotationInterval: The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
     * The value is in the integer[unit] format.
     * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
     */
    readonly rotationInterval?: string | ros.IResolvable;
    /**
     * @Property secretDataType: The type of the secret value. Valid values:
     * text (default value)
     * binary
     */
    readonly secretDataType?: string | ros.IResolvable;
    /**
     * @Property secretType: The type of the secret. Valid values:
     * Generic: specifies a generic secret.
     * Rds: specifies a managed ApsaraDB RDS secret.
     * RAMCredentials: specifies a managed RAM secret.
     * ECS: specifies a managed ECS secret.
     */
    readonly secretType?: string | ros.IResolvable;
    /**
     * @Property versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
     */
    readonly versionStages?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Secret`, which is used to create a secret and store the initial version of the secret.
 * @Note This class does not contain additional functions, so it is recommended to use the `Secret` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
 */
export declare class RosSecret extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Secret";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute SecretName: The name of the secret.
     */
    readonly attrSecretName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
     * value and stores it in the initial version.
     */
    secretData: string | ros.IResolvable;
    /**
     * @Property secretName: The name of the secret.
     */
    secretName: string | ros.IResolvable;
    /**
     * @Property versionId: The version number of the initial version. Version numbers are unique in each secret
     * object.
     */
    versionId: string | ros.IResolvable;
    /**
     * @Property description: The description of the secret.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property dkmsInstanceId: The ID of the dedicated KMS instance.
     */
    dkmsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property enableAutomaticRotation: Specifies whether to enable automatic rotation. Valid values:
     * true: specifies to enable automatic rotation.
     * false: specifies to disable automatic rotation. This is the default value.
     */
    enableAutomaticRotation: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
     * If you do not specify this parameter, Secrets Manager automatically creates an encryption
     * key to encrypt the secret.
     * Note The KMS CMK must be a symmetric key.
     */
    encryptionKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property extendedConfig: The extended configuration of the secret. This parameter specifies the properties of the secret of the specific type.
     */
    extendedConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
     * true
     * false (default value)
     */
    forceDeleteWithoutRecovery: boolean | ros.IResolvable | undefined;
    /**
     * @Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
     */
    recoveryWindowInDays: number | ros.IResolvable | undefined;
    /**
     * @Property rotationInterval: The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
     * The value is in the integer[unit] format.
     * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
     */
    rotationInterval: string | ros.IResolvable | undefined;
    /**
     * @Property secretDataType: The type of the secret value. Valid values:
     * text (default value)
     * binary
     */
    secretDataType: string | ros.IResolvable | undefined;
    /**
     * @Property secretType: The type of the secret. Valid values:
     * Generic: specifies a generic secret.
     * Rds: specifies a managed ApsaraDB RDS secret.
     * RAMCredentials: specifies a managed RAM secret.
     * ECS: specifies a managed ECS secret.
     */
    secretType: string | ros.IResolvable | undefined;
    /**
     * @Property versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
     */
    versionStages: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
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
