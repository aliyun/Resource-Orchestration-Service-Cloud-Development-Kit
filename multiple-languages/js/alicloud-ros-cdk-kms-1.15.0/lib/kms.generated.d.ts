import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
 */
export interface RosAliasProps {
    /**
     * @Property aliasName: The alias of the CMK.
     * The alias must be 1 to 255 characters in length and must contain the prefix
     * `alias\/`. The alias cannot be prefixed with the reserved word `alias\/acs`.
     */
    readonly aliasName: string | ros.IResolvable;
    /**
     * @Property keyId: Globally unique identifier of the CMK.
     */
    readonly keyId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Alias`Creates an alias for a customer master key (CMK) in Key Management Service (KMS).
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
     * @Property aliasName: The alias of the CMK.
     * The alias must be 1 to 255 characters in length and must contain the prefix
     * `alias\/`. The alias cannot be prefixed with the reserved word `alias\/acs`.
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
     * @Property period: The subscription duration. Unit: month. The value must be an integral multiple of
     * 12.
     * >  This parameter is required if you create a subscription instance.
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
     * @Property renewPeriod: The auto-renewal period. Unit: month.
     * >  This parameter is required if the RenewalStatus parameter is set to
     * AutoRenewal.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Instance`.
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
     * @Property period: The subscription duration. Unit: month. The value must be an integral multiple of
     * 12.
     * >  This parameter is required if you create a subscription instance.
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
     * @Property renewPeriod: The auto-renewal period. Unit: month.
     * >  This parameter is required if the RenewalStatus parameter is set to
     * AutoRenewal.
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
     * @Property dkmsInstanceId: The ID of the KMS instance.
     * > This parameter is required when you create a key for a KMS instance. This
     * parameter is not required when you create a default key (master key).
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
     * @Property protectionLevel: You do not need to specify this parameter. KMS automatically sets an appropriate
     * protection level for your key.
     * The protection level of the key. Valid values:
     * - SOFTWARE
     * - HSM
     * > * If you specify DKMSInstanceId, this parameter is ignored. If the instance is
     * a software key management instance, the protection level is SOFTWARE. If the
     * instance is a hardware key management instance, the protection level is HSM.
     * - If you do not specify DKMSInstanceId, leave this parameter empty. KMS sets the
     * protection level. If a managed HSM is available in the region, KMS sets this
     * parameter to HSM. Otherwise, KMS sets this parameter to SOFTWARE. For more
     * information, see [Managed HSM overview]().
     */
    readonly protectionLevel?: string | ros.IResolvable;
    /**
     * @Property rotationInterval: The automatic rotation period. The format is \`integer\[unit]\`. \`integer\`
     * indicates the length of the period. \`unit\` indicates the unit of time. Valid
     * units: d (day), h (hour), m (minute), and s (second). For example, both 7d and
     * 604800s represent a period of 7 days.
     * - If the key is a default key, the value is 365d.
     * - If the key is a software-protected key, the value can be from 7d to 365d.
     * - If the key is a hardware-protected key, automatic rotation is not supported.
     * > This parameter is required if you set EnableAutomaticRotation to true.
     */
    readonly rotationInterval?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to key. Max support 20 tags to add during create key. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosKey.TagsProperty[];
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
     * @Property dkmsInstanceId: The ID of the KMS instance.
     * > This parameter is required when you create a key for a KMS instance. This
     * parameter is not required when you create a default key (master key).
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
     * @Property protectionLevel: You do not need to specify this parameter. KMS automatically sets an appropriate
     * protection level for your key.
     * The protection level of the key. Valid values:
     * - SOFTWARE
     * - HSM
     * > * If you specify DKMSInstanceId, this parameter is ignored. If the instance is
     * a software key management instance, the protection level is SOFTWARE. If the
     * instance is a hardware key management instance, the protection level is HSM.
     * - If you do not specify DKMSInstanceId, leave this parameter empty. KMS sets the
     * protection level. If a managed HSM is available in the region, KMS sets this
     * parameter to HSM. Otherwise, KMS sets this parameter to SOFTWARE. For more
     * information, see [Managed HSM overview]().
     */
    protectionLevel: string | ros.IResolvable | undefined;
    /**
     * @Property rotationInterval: The automatic rotation period. The format is \`integer\[unit]\`. \`integer\`
     * indicates the length of the period. \`unit\` indicates the unit of time. Valid
     * units: d (day), h (hour), m (minute), and s (second). For example, both 7d and
     * 604800s represent a period of 7 days.
     * - If the key is a default key, the value is 365d.
     * - If the key is a software-protected key, the value can be from 7d to 365d.
     * - If the key is a hardware-protected key, automatic rotation is not supported.
     * > This parameter is required if you set EnableAutomaticRotation to true.
     */
    rotationInterval: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to key. Max support 20 tags to add during create key. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosKey.TagsProperty[] | undefined;
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
export declare namespace RosKey {
    /**
     * @stability external
     */
    interface TagsProperty {
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
 * Properties for defining a `RosNetworkRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
 */
export interface RosNetworkRuleProps {
    /**
     * @Property networkRuleName: The name of the access control rule.
     */
    readonly networkRuleName: string | ros.IResolvable;
    /**
     * @Property type: Network type. The value can be Private only, that is, only private IP addresses are supported.
     */
    readonly type: string | ros.IResolvable;
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
     * @Property type: Network type. The value can be Private only, that is, only private IP addresses are supported.
     */
    type: string | ros.IResolvable;
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
     * @Property secretData: The value of the secret. The value can be up to 30,720 bytes (30 KB) in length.
     * KMS encrypts the secret value with the specified key and stores the encrypted
     * value in the initial version.
     * - If SecretType is set to Generic, you can specify a custom secret value.
     * - If SecretType is set to Rds, the secret value must be in the following format:
     * `{"Accounts":[{"AccountName":"","AccountPassword":""}]}`. In the format,
     * `AccountName` specifies the username of the account for the RDS instance and
     * `AccountPassword` specifies the password of the account.
     * - If SecretType is set to Redis, set this parameter to `$Auto`.
     * - If SecretType is set to RAMCredentials, the secret value must be in the
     * following format: `{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}`. In
     * the format, `AccessKeyId` specifies the AccessKey ID and `AccessKeySecret`
     * specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
     * user.
     * - If SecretType is set to PolarDB, set this parameter to `$Auto`.
     * - If SecretType is set to ECS, the secret value must be in one of the following
     * formats:
     * - If SecretSubType in the ExtendedConfig parameter is set to Password:
     * `{"UserName":"","Password": ""}`. In the format, `UserName` specifies the
     * username used to log on to the ECS instance and `Password` specifies the password
     * used to log on to the ECS instance.
     * - If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
     * `{"UserName":"","PublicKey": "", "PrivateKey": ""}`. In the format, `PublicKey`
     * specifies the SSH-formatted public key used to log on to the ECS instance and
     * `PrivateKey` specifies the private key used to log on to the ECS instance.
     */
    readonly secretData: string | ros.IResolvable;
    /**
     * @Property secretName: The name of the secret. The name must be unique in the same region.
     * The name can be up to 192 characters in length and can contain letters, digits,
     * underscores (_), forward slashes (\/), plus signs (+), equal signs (=), periods
     * (.), hyphens (-), and at signs (@). The following limits apply to secret names
     * for different types of secrets:
     * - If SecretType is set to Generic, Rds, or Redis, the name cannot start with
     * `acs\/`.
     * - If SecretType is set to RAMCredentials, set this parameter to the fixed value
     * `$Auto`. In this case, KMS automatically generates a secret name that starts with
     * `acs\/ram\/user\/` and contains the display name of the RAM user.
     * - If SecretType is set to ECS, the name must start with `acs\/ecs\/`.
     */
    readonly secretName: string | ros.IResolvable;
    /**
     * @Property versionId: The version number of the initial version. The version number must be unique
     * within the secret.
     * The version number can be up to 64 characters in length.
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
     * - true: enables automatic rotation.
     * - false (default): disables automatic rotation.
     * > This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
     * RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
     * not supported. You can call the [PutSecretValue]() operation to manually rotate
     * the secret.
     */
    readonly enableAutomaticRotation?: boolean | ros.IResolvable;
    /**
     * @Property encryptionKeyId: The ID of the key used to encrypt the secret value.
     * > The key and the secret must be in the same KMS instance. The key must be a
     * symmetric key.
     */
    readonly encryptionKeyId?: string | ros.IResolvable;
    /**
     * @Property extendedConfig: The extended configuration of the secret. This parameter specifies the properties
     * of the secret of a specific type. The value can be up to 1,024 characters in
     * length.
     * - If SecretType is set to Generic, this parameter is ignored.
     * - If SecretType is set to Rds, you must specify the following parameters in
     * ExtendedConfig:
     * - SecretSubType (Required): The subtype of the secret. Valid values:
     * - SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
     * the secret is rotated, the password of the specified account is reset to a new
     * random password.
     * - DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
     * ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
     * rotated, the password of the account pointed to by ACSPrevious is reset to a new
     * random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
     * ACSPrevious point to.
     * - DBInstanceId (Required): The ID of the RDS instance to which the account
     * belongs.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
     * default value is `{}`.
     * - If SecretType is set to Redis, you must specify the following parameters in
     * ExtendedConfig:
     * - SecretSubType (Required): The subtype of the secret. Valid values:
     * - DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
     * ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
     * rotated, the password of the account pointed to by ACSPrevious is reset to a new
     * random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
     * ACSPrevious point to.
     * - AccountName (Required): The database username.
     * - CloneAccountName (Required): The database username, which is the value of
     * AccountName with the `_clone` suffix.
     * - AccountPrivilege (Required): The permissions to access the database.
     * - InstanceId (Required): The ID of the Redis instance.
     * - RegionId (Required): The ID of the region where the Redis instance resides.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
     * default value is `{}`.
     * - If SecretType is set to RAMCredentials, you must specify the following
     * parameters in ExtendedConfig:
     * - SecretSubType (Required): The subtype of the secret. The value is
     * RamUserAccessKey.
     * - UserName (Required): The name of the RAM user.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). The default value is `{}`.
     * - If SecretType is set to ECS, you must specify the following parameters in
     * ExtendedConfig:
     * - SecretSubType (Required): The subtype of the secret. Valid values:
     * - Password: an ECS password.
     * - SSHKey: an ECS SSH key pair.
     * - RegionId (Required): The ID of the region where the ECS instance resides.
     * - InstanceId (Required): The ID of the ECS instance.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). The default value is `{}`.
     * - If SecretType is set to PolarDB, you must specify the following parameters in
     * ExtendedConfig:
     * - SecretSubType (Required): The fixed value is DoubleUsers.
     * - RegionId (Required): The region.
     * - DBClusterId (Required): The ID of the PolarDB instance.
     * - DBType (Required): MySQL or PostgreSQL.
     * - AccountName (Required): The account name.
     * - CloneAccountName: The value is AccountName_clone.
     * - AccountType: Only Normal is supported.
     * - AccountPrivilege: This parameter is available only for MySQL.
     * - DBName: This parameter is available only for MySQL.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
     * default value is {}.
     * > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
     * configure this parameter.
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
     * @Property policy: The specific content of the credential policy in JSON format. Maximum length is 32768 bytes.
     * If this parameter is not specified, the default credential policy is used.
     * The policy content includes:
     * - Version: The version of the policy. Currently, only version 1 is supported.
     * - Statement: A list of statements, each containing:
     *   - Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _\/+=.@-.
     *   - Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.
     *   - Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.
     *   - Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.
     *   - Condition (optional): Conditions that limit when the policy is effective. Format: `"Condition": {"condition operator": {"condition key": "condition value"}}`. See documentation for details.
     * > After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
     */
    readonly policy?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
     */
    readonly recoveryWindowInDays?: number | ros.IResolvable;
    /**
     * @Property rotationInterval: The interval for automatic rotation. The value is in the range of 6 hours to
     * 8,760 hours (365 days).<br>
     * The value is in the `integer[unit]` format. `integer` indicates the interval.
     * `unit` indicates the unit of time.<br>
     * Valid values for unit: d (day), h (hour), m (minute), and s (second). For
     * example, both 7d and 604,800s indicate a rotation interval of 7 days.<br><br>
     * > You must specify this parameter if you set EnableAutomaticRotation to true. You
     * do not need to specify this parameter if you set EnableAutomaticRotation to
     * false.
     */
    readonly rotationInterval?: string | ros.IResolvable;
    /**
     * @Property secretDataType: The type of the secret value. Valid values:
     * - text (default): The secret value is a text string.
     * - binary: The secret value is a binary string.
     * > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
     * SecretDataType must be set to text.
     */
    readonly secretDataType?: string | ros.IResolvable;
    /**
     * @Property secretType: The type of the secret. Valid values:
     * - Generic (default): a generic secret.
     * - Rds: an RDS secret.
     * - Redis: a Redis secret.
     * - RAMCredentials: a RAM secret.
     * - ECS: an ECS secret.
     * - PolarDB: a PolarDB secret.
     */
    readonly secretType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to secret. Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSecret.TagsProperty[];
    /**
     * @Property versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
     */
    readonly versionStages?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Secret`.
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
     * @Property secretData: The value of the secret. The value can be up to 30,720 bytes (30 KB) in length.
     * KMS encrypts the secret value with the specified key and stores the encrypted
     * value in the initial version.
     * - If SecretType is set to Generic, you can specify a custom secret value.
     * - If SecretType is set to Rds, the secret value must be in the following format:
     * `{"Accounts":[{"AccountName":"","AccountPassword":""}]}`. In the format,
     * `AccountName` specifies the username of the account for the RDS instance and
     * `AccountPassword` specifies the password of the account.
     * - If SecretType is set to Redis, set this parameter to `$Auto`.
     * - If SecretType is set to RAMCredentials, the secret value must be in the
     * following format: `{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}`. In
     * the format, `AccessKeyId` specifies the AccessKey ID and `AccessKeySecret`
     * specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
     * user.
     * - If SecretType is set to PolarDB, set this parameter to `$Auto`.
     * - If SecretType is set to ECS, the secret value must be in one of the following
     * formats:
     * - If SecretSubType in the ExtendedConfig parameter is set to Password:
     * `{"UserName":"","Password": ""}`. In the format, `UserName` specifies the
     * username used to log on to the ECS instance and `Password` specifies the password
     * used to log on to the ECS instance.
     * - If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
     * `{"UserName":"","PublicKey": "", "PrivateKey": ""}`. In the format, `PublicKey`
     * specifies the SSH-formatted public key used to log on to the ECS instance and
     * `PrivateKey` specifies the private key used to log on to the ECS instance.
     */
    secretData: string | ros.IResolvable;
    /**
     * @Property secretName: The name of the secret. The name must be unique in the same region.
     * The name can be up to 192 characters in length and can contain letters, digits,
     * underscores (_), forward slashes (\/), plus signs (+), equal signs (=), periods
     * (.), hyphens (-), and at signs (@). The following limits apply to secret names
     * for different types of secrets:
     * - If SecretType is set to Generic, Rds, or Redis, the name cannot start with
     * `acs\/`.
     * - If SecretType is set to RAMCredentials, set this parameter to the fixed value
     * `$Auto`. In this case, KMS automatically generates a secret name that starts with
     * `acs\/ram\/user\/` and contains the display name of the RAM user.
     * - If SecretType is set to ECS, the name must start with `acs\/ecs\/`.
     */
    secretName: string | ros.IResolvable;
    /**
     * @Property versionId: The version number of the initial version. The version number must be unique
     * within the secret.
     * The version number can be up to 64 characters in length.
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
     * - true: enables automatic rotation.
     * - false (default): disables automatic rotation.
     * > This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
     * RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
     * not supported. You can call the [PutSecretValue]() operation to manually rotate
     * the secret.
     */
    enableAutomaticRotation: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptionKeyId: The ID of the key used to encrypt the secret value.
     * > The key and the secret must be in the same KMS instance. The key must be a
     * symmetric key.
     */
    encryptionKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property extendedConfig: The extended configuration of the secret. This parameter specifies the properties
     * of the secret of a specific type. The value can be up to 1,024 characters in
     * length.
     * - If SecretType is set to Generic, this parameter is ignored.
     * - If SecretType is set to Rds, you must specify the following parameters in
     * ExtendedConfig:
     * - SecretSubType (Required): The subtype of the secret. Valid values:
     * - SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
     * the secret is rotated, the password of the specified account is reset to a new
     * random password.
     * - DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
     * ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
     * rotated, the password of the account pointed to by ACSPrevious is reset to a new
     * random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
     * ACSPrevious point to.
     * - DBInstanceId (Required): The ID of the RDS instance to which the account
     * belongs.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
     * default value is `{}`.
     * - If SecretType is set to Redis, you must specify the following parameters in
     * ExtendedConfig:
     * - SecretSubType (Required): The subtype of the secret. Valid values:
     * - DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
     * ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
     * rotated, the password of the account pointed to by ACSPrevious is reset to a new
     * random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
     * ACSPrevious point to.
     * - AccountName (Required): The database username.
     * - CloneAccountName (Required): The database username, which is the value of
     * AccountName with the `_clone` suffix.
     * - AccountPrivilege (Required): The permissions to access the database.
     * - InstanceId (Required): The ID of the Redis instance.
     * - RegionId (Required): The ID of the region where the Redis instance resides.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
     * default value is `{}`.
     * - If SecretType is set to RAMCredentials, you must specify the following
     * parameters in ExtendedConfig:
     * - SecretSubType (Required): The subtype of the secret. The value is
     * RamUserAccessKey.
     * - UserName (Required): The name of the RAM user.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). The default value is `{}`.
     * - If SecretType is set to ECS, you must specify the following parameters in
     * ExtendedConfig:
     * - SecretSubType (Required): The subtype of the secret. Valid values:
     * - Password: an ECS password.
     * - SSHKey: an ECS SSH key pair.
     * - RegionId (Required): The ID of the region where the ECS instance resides.
     * - InstanceId (Required): The ID of the ECS instance.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). The default value is `{}`.
     * - If SecretType is set to PolarDB, you must specify the following parameters in
     * ExtendedConfig:
     * - SecretSubType (Required): The fixed value is DoubleUsers.
     * - RegionId (Required): The region.
     * - DBClusterId (Required): The ID of the PolarDB instance.
     * - DBType (Required): MySQL or PostgreSQL.
     * - AccountName (Required): The account name.
     * - CloneAccountName: The value is AccountName_clone.
     * - AccountType: Only Normal is supported.
     * - AccountPrivilege: This parameter is available only for MySQL.
     * - DBName: This parameter is available only for MySQL.
     * - CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
     * default value is {}.
     * > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
     * configure this parameter.
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
     * @Property policy: The specific content of the credential policy in JSON format. Maximum length is 32768 bytes.
     * If this parameter is not specified, the default credential policy is used.
     * The policy content includes:
     * - Version: The version of the policy. Currently, only version 1 is supported.
     * - Statement: A list of statements, each containing:
     *   - Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _\/+=.@-.
     *   - Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.
     *   - Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.
     *   - Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.
     *   - Condition (optional): Conditions that limit when the policy is effective. Format: `"Condition": {"condition operator": {"condition key": "condition value"}}`. See documentation for details.
     * > After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
     */
    policy: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
     */
    recoveryWindowInDays: number | ros.IResolvable | undefined;
    /**
     * @Property rotationInterval: The interval for automatic rotation. The value is in the range of 6 hours to
     * 8,760 hours (365 days).<br>
     * The value is in the `integer[unit]` format. `integer` indicates the interval.
     * `unit` indicates the unit of time.<br>
     * Valid values for unit: d (day), h (hour), m (minute), and s (second). For
     * example, both 7d and 604,800s indicate a rotation interval of 7 days.<br><br>
     * > You must specify this parameter if you set EnableAutomaticRotation to true. You
     * do not need to specify this parameter if you set EnableAutomaticRotation to
     * false.
     */
    rotationInterval: string | ros.IResolvable | undefined;
    /**
     * @Property secretDataType: The type of the secret value. Valid values:
     * - text (default): The secret value is a text string.
     * - binary: The secret value is a binary string.
     * > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
     * SecretDataType must be set to text.
     */
    secretDataType: string | ros.IResolvable | undefined;
    /**
     * @Property secretType: The type of the secret. Valid values:
     * - Generic (default): a generic secret.
     * - Rds: an RDS secret.
     * - Redis: a Redis secret.
     * - RAMCredentials: a RAM secret.
     * - ECS: an ECS secret.
     * - PolarDB: a PolarDB secret.
     */
    secretType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to secret. Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosSecret.TagsProperty[] | undefined;
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
export declare namespace RosSecret {
    /**
     * @stability external
     */
    interface TagsProperty {
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
