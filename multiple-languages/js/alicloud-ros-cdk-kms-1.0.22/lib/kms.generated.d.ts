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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Alias`.
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
 * Properties for defining a `RosKey`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
 */
export interface RosKeyProps {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Key`, which is used to create a customer master key (CMK).
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
