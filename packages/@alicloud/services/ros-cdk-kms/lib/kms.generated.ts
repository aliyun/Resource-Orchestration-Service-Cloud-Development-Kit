// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosAliasProps`
 *
 * @param properties - the TypeScript properties of a `RosAliasProps`
 *
 * @returns the result of the validation.
 */
function RosAliasPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('aliasName', ros.requiredValidator)(properties.aliasName));
    if(properties.aliasName && (Array.isArray(properties.aliasName) || (typeof properties.aliasName) === 'string')) {
        errors.collect(ros.propertyValidator('aliasName', ros.validateLength)({
            data: properties.aliasName.length,
            min: 1,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('aliasName', ros.validateString)(properties.aliasName));
    errors.collect(ros.propertyValidator('keyId', ros.requiredValidator)(properties.keyId));
    errors.collect(ros.propertyValidator('keyId', ros.validateString)(properties.keyId));
    return errors.wrap('supplied properties not correct for "RosAliasProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KMS::Alias` resource
 *
 * @param properties - the TypeScript properties of a `RosAliasProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KMS::Alias` resource.
 */
// @ts-ignore TS6133
function rosAliasPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAliasPropsValidator(properties).assertSuccess();
    }
    return {
      AliasName: ros.stringToRosTemplate(properties.aliasName),
      KeyId: ros.stringToRosTemplate(properties.keyId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Alias`, which is used to create an alias for a Customer Master Key (CMK).
 * @Note This class does not contain additional functions, so it is recommended to use the `Alias` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
 */
export class RosAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Alias";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias\/ must be included.
     */
    public aliasName: string | ros.IResolvable;

    /**
     * @Property keyId: Globally unique identifier of the CMK.
     */
    public keyId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAliasProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlias.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aliasName = props.aliasName;
        this.keyId = props.keyId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aliasName: this.aliasName,
            keyId: this.keyId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAliasPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosKeyProps`
 *
 * @param properties - the TypeScript properties of a `RosKeyProps`
 *
 * @returns the result of the validation.
 */
function RosKeyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('protectionLevel', ros.validateString)(properties.protectionLevel));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 0,
            max: 8192,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('rotationInterval', ros.validateString)(properties.rotationInterval));
    if(properties.pendingWindowInDays && (typeof properties.pendingWindowInDays) !== 'object') {
        errors.collect(ros.propertyValidator('pendingWindowInDays', ros.validateRange)({
            data: properties.pendingWindowInDays,
            min: 7,
            max: 366,
          }));
    }
    errors.collect(ros.propertyValidator('pendingWindowInDays', ros.validateNumber)(properties.pendingWindowInDays));
    errors.collect(ros.propertyValidator('enableAutomaticRotation', ros.validateBoolean)(properties.enableAutomaticRotation));
    errors.collect(ros.propertyValidator('keySpec', ros.validateString)(properties.keySpec));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('keyUsage', ros.validateString)(properties.keyUsage));
    errors.collect(ros.propertyValidator('dkmsInstanceId', ros.validateString)(properties.dkmsInstanceId));
    return errors.wrap('supplied properties not correct for "RosKeyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KMS::Key` resource
 *
 * @param properties - the TypeScript properties of a `RosKeyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KMS::Key` resource.
 */
// @ts-ignore TS6133
function rosKeyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKeyPropsValidator(properties).assertSuccess();
    }
    return {
      Description: ros.stringToRosTemplate(properties.description),
      DKMSInstanceId: ros.stringToRosTemplate(properties.dkmsInstanceId),
      Enable: ros.booleanToRosTemplate(properties.enable),
      EnableAutomaticRotation: ros.booleanToRosTemplate(properties.enableAutomaticRotation),
      KeySpec: ros.stringToRosTemplate(properties.keySpec),
      KeyUsage: ros.stringToRosTemplate(properties.keyUsage),
      PendingWindowInDays: ros.numberToRosTemplate(properties.pendingWindowInDays),
      ProtectionLevel: ros.stringToRosTemplate(properties.protectionLevel),
      RotationInterval: ros.stringToRosTemplate(properties.rotationInterval),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Key`, which is used to create a customer master key (CMK).
 * @Note This class does not contain additional functions, so it is recommended to use the `Key` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
 */
export class RosKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Key";

    /**
     * @Attribute KeyId: The globally unique identifier for the CMK.
     */
    public readonly attrKeyId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property dkmsInstanceId: The ID of the dedicated KMS instance.
     */
    public dkmsInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property enable: Specifies whether the key is enabled. Defaults to true.
     */
    public enable: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true\/false (default)
     */
    public enableAutomaticRotation: boolean | ros.IResolvable | undefined;

    /**
     * @Property keySpec: Key type. Valid value: Aliyun_AES_256\/Aliyun_SM4\/RSA_2048\/EC_P256\/EC_P256K\/EC_SM2
     */
    public keySpec: string | ros.IResolvable | undefined;

    /**
     * @Property keyUsage: The usage of the CMK. Valid values:
     * ENCRYPT\/DECRYPT: encrypts or decrypts data.
     * SIGN\/VERIFY: generates or verifies a digital signature.
     * If the CMK supports signature verification, the default value is SIGN\/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT\/DECRYPT.
     */
    public keyUsage: string | ros.IResolvable | undefined;

    /**
     * @Property pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
     */
    public pendingWindowInDays: number | ros.IResolvable | undefined;

    /**
     * @Property protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
     * If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
     * If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
     */
    public protectionLevel: string | ros.IResolvable | undefined;

    /**
     * @Property rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
     */
    public rotationInterval: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKey.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrKeyId = this.getAtt('KeyId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.dkmsInstanceId = props.dkmsInstanceId;
        this.enable = props.enable;
        this.enableAutomaticRotation = props.enableAutomaticRotation;
        this.keySpec = props.keySpec;
        this.keyUsage = props.keyUsage;
        this.pendingWindowInDays = props.pendingWindowInDays;
        this.protectionLevel = props.protectionLevel;
        this.rotationInterval = props.rotationInterval;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            dkmsInstanceId: this.dkmsInstanceId,
            enable: this.enable,
            enableAutomaticRotation: this.enableAutomaticRotation,
            keySpec: this.keySpec,
            keyUsage: this.keyUsage,
            pendingWindowInDays: this.pendingWindowInDays,
            protectionLevel: this.protectionLevel,
            rotationInterval: this.rotationInterval,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
    readonly extendedConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosSecretProps`
 *
 * @param properties - the TypeScript properties of a `RosSecretProps`
 *
 * @returns the result of the validation.
 */
function RosSecretPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('versionId', ros.requiredValidator)(properties.versionId));
    errors.collect(ros.propertyValidator('versionId', ros.validateString)(properties.versionId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('rotationInterval', ros.validateString)(properties.rotationInterval));
    errors.collect(ros.propertyValidator('secretType', ros.validateString)(properties.secretType));
    if(properties.secretDataType && (typeof properties.secretDataType) !== 'object') {
        errors.collect(ros.propertyValidator('secretDataType', ros.validateAllowedValues)({
          data: properties.secretDataType,
          allowedValues: ["text","binary"],
        }));
    }
    errors.collect(ros.propertyValidator('secretDataType', ros.validateString)(properties.secretDataType));
    errors.collect(ros.propertyValidator('dkmsInstanceId', ros.validateString)(properties.dkmsInstanceId));
    if(properties.versionStages && (Array.isArray(properties.versionStages) || (typeof properties.versionStages) === 'string')) {
        errors.collect(ros.propertyValidator('versionStages', ros.validateLength)({
            data: properties.versionStages.length,
            min: 1,
            max: 7,
          }));
    }
    errors.collect(ros.propertyValidator('versionStages', ros.listValidator(ros.validateString))(properties.versionStages));
    errors.collect(ros.propertyValidator('secretName', ros.requiredValidator)(properties.secretName));
    errors.collect(ros.propertyValidator('secretName', ros.validateString)(properties.secretName));
    errors.collect(ros.propertyValidator('enableAutomaticRotation', ros.validateBoolean)(properties.enableAutomaticRotation));
    errors.collect(ros.propertyValidator('extendedConfig', ros.hashValidator(ros.validateAny))(properties.extendedConfig));
    errors.collect(ros.propertyValidator('secretData', ros.requiredValidator)(properties.secretData));
    errors.collect(ros.propertyValidator('secretData', ros.validateString)(properties.secretData));
    errors.collect(ros.propertyValidator('encryptionKeyId', ros.validateString)(properties.encryptionKeyId));
    errors.collect(ros.propertyValidator('recoveryWindowInDays', ros.validateNumber)(properties.recoveryWindowInDays));
    errors.collect(ros.propertyValidator('forceDeleteWithoutRecovery', ros.validateBoolean)(properties.forceDeleteWithoutRecovery));
    return errors.wrap('supplied properties not correct for "RosSecretProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KMS::Secret` resource
 *
 * @param properties - the TypeScript properties of a `RosSecretProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KMS::Secret` resource.
 */
// @ts-ignore TS6133
function rosSecretPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecretPropsValidator(properties).assertSuccess();
    }
    return {
      SecretData: ros.stringToRosTemplate(properties.secretData),
      SecretName: ros.stringToRosTemplate(properties.secretName),
      VersionId: ros.stringToRosTemplate(properties.versionId),
      Description: ros.stringToRosTemplate(properties.description),
      DKMSInstanceId: ros.stringToRosTemplate(properties.dkmsInstanceId),
      EnableAutomaticRotation: ros.booleanToRosTemplate(properties.enableAutomaticRotation),
      EncryptionKeyId: ros.stringToRosTemplate(properties.encryptionKeyId),
      ExtendedConfig: ros.hashMapper(ros.objectToRosTemplate)(properties.extendedConfig),
      ForceDeleteWithoutRecovery: ros.booleanToRosTemplate(properties.forceDeleteWithoutRecovery),
      RecoveryWindowInDays: ros.numberToRosTemplate(properties.recoveryWindowInDays),
      RotationInterval: ros.stringToRosTemplate(properties.rotationInterval),
      SecretDataType: ros.stringToRosTemplate(properties.secretDataType),
      SecretType: ros.stringToRosTemplate(properties.secretType),
      VersionStages: ros.listMapper(ros.stringToRosTemplate)(properties.versionStages),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Secret`, which is used to create a secret and store the initial version of the secret.
 * @Note This class does not contain additional functions, so it is recommended to use the `Secret` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
 */
export class RosSecret extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Secret";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute SecretName: The name of the secret.
     */
    public readonly attrSecretName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
     * value and stores it in the initial version.
     */
    public secretData: string | ros.IResolvable;

    /**
     * @Property secretName: The name of the secret.
     */
    public secretName: string | ros.IResolvable;

    /**
     * @Property versionId: The version number of the initial version. Version numbers are unique in each secret
     * object.
     */
    public versionId: string | ros.IResolvable;

    /**
     * @Property description: The description of the secret.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property dkmsInstanceId: The ID of the dedicated KMS instance.
     */
    public dkmsInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property enableAutomaticRotation: Specifies whether to enable automatic rotation. Valid values:
     * true: specifies to enable automatic rotation.
     * false: specifies to disable automatic rotation. This is the default value.
     */
    public enableAutomaticRotation: boolean | ros.IResolvable | undefined;

    /**
     * @Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
     * If you do not specify this parameter, Secrets Manager automatically creates an encryption
     * key to encrypt the secret.
     * Note The KMS CMK must be a symmetric key.
     */
    public encryptionKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property extendedConfig: The extended configuration of the secret. This parameter specifies the properties of the secret of the specific type.
     */
    public extendedConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
     * true
     * false (default value)
     */
    public forceDeleteWithoutRecovery: boolean | ros.IResolvable | undefined;

    /**
     * @Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
     */
    public recoveryWindowInDays: number | ros.IResolvable | undefined;

    /**
     * @Property rotationInterval: The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
     * The value is in the integer[unit] format.
     * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
     */
    public rotationInterval: string | ros.IResolvable | undefined;

    /**
     * @Property secretDataType: The type of the secret value. Valid values:
     * text (default value)
     * binary
     */
    public secretDataType: string | ros.IResolvable | undefined;

    /**
     * @Property secretType: The type of the secret. Valid values:
     * Generic: specifies a generic secret.
     * Rds: specifies a managed ApsaraDB RDS secret.
     * RAMCredentials: specifies a managed RAM secret.
     * ECS: specifies a managed ECS secret.
     */
    public secretType: string | ros.IResolvable | undefined;

    /**
     * @Property versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
     */
    public versionStages: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecret.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrSecretName = this.getAtt('SecretName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.secretData = props.secretData;
        this.secretName = props.secretName;
        this.versionId = props.versionId;
        this.description = props.description;
        this.dkmsInstanceId = props.dkmsInstanceId;
        this.enableAutomaticRotation = props.enableAutomaticRotation;
        this.encryptionKeyId = props.encryptionKeyId;
        this.extendedConfig = props.extendedConfig;
        this.forceDeleteWithoutRecovery = props.forceDeleteWithoutRecovery;
        this.recoveryWindowInDays = props.recoveryWindowInDays;
        this.rotationInterval = props.rotationInterval;
        this.secretDataType = props.secretDataType;
        this.secretType = props.secretType;
        this.versionStages = props.versionStages;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            secretData: this.secretData,
            secretName: this.secretName,
            versionId: this.versionId,
            description: this.description,
            dkmsInstanceId: this.dkmsInstanceId,
            enableAutomaticRotation: this.enableAutomaticRotation,
            encryptionKeyId: this.encryptionKeyId,
            extendedConfig: this.extendedConfig,
            forceDeleteWithoutRecovery: this.forceDeleteWithoutRecovery,
            recoveryWindowInDays: this.recoveryWindowInDays,
            rotationInterval: this.rotationInterval,
            secretDataType: this.secretDataType,
            secretType: this.secretType,
            versionStages: this.versionStages,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecretPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
