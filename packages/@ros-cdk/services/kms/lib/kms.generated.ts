// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::KMS::Alias`
 */
export interface RosAliasProps {

    /**
     * @Property aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
     */
    readonly aliasName: string;

    /**
     * @Property keyId: Globally unique identifier of the CMK.
     */
    readonly keyId: string;
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
 * A ROS template type:  `ALIYUN::KMS::Alias`
 */
export class RosAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Alias";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
     */
    public aliasName: string;

    /**
     * @Property keyId: Globally unique identifier of the CMK.
     */
    public keyId: string;

    /**
     * Create a new `ALIYUN::KMS::Alias`.
     *
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
 * Properties for defining a `ALIYUN::KMS::Key`
 */
export interface RosKeyProps {

    /**
     * @Property description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
     */
    readonly description?: string;

    /**
     * @Property enable: Specifies whether the key is enabled. Defaults to true.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * @Property enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
     */
    readonly enableAutomaticRotation?: boolean | ros.IResolvable;

    /**
     * @Property keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
     */
    readonly keySpec?: string;

    /**
     * @Property keyUsage: The intended use of the CMK. Default value: ENCRYPT/DECRYPT.
     */
    readonly keyUsage?: string;

    /**
     * @Property pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
     */
    readonly pendingWindowInDays?: number;

    /**
     * @Property protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
     * If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
     * If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
     */
    readonly protectionLevel?: string;

    /**
     * @Property rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
     */
    readonly rotationInterval?: string;
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
    errors.collect(ros.propertyValidator('enableAutomaticRotation', ros.validateBoolean)(properties.enableAutomaticRotation));
    if(properties.pendingWindowInDays && (typeof properties.pendingWindowInDays) !== 'object') {
        errors.collect(ros.propertyValidator('pendingWindowInDays', ros.validateRange)({
            data: properties.pendingWindowInDays,
            min: 7,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('pendingWindowInDays', ros.validateNumber)(properties.pendingWindowInDays));
    errors.collect(ros.propertyValidator('keySpec', ros.validateString)(properties.keySpec));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('keyUsage', ros.validateString)(properties.keyUsage));
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
 * A ROS template type:  `ALIYUN::KMS::Key`
 */
export class RosKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Key";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute KeyId: The globally unique identifier for the CMK.
     */
    public readonly attrKeyId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
     */
    public description: string | undefined;

    /**
     * @Property enable: Specifies whether the key is enabled. Defaults to true.
     */
    public enable: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
     */
    public enableAutomaticRotation: boolean | ros.IResolvable | undefined;

    /**
     * @Property keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
     */
    public keySpec: string | undefined;

    /**
     * @Property keyUsage: The intended use of the CMK. Default value: ENCRYPT/DECRYPT.
     */
    public keyUsage: string | undefined;

    /**
     * @Property pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
     */
    public pendingWindowInDays: number | undefined;

    /**
     * @Property protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
     * If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
     * If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
     */
    public protectionLevel: string | undefined;

    /**
     * @Property rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
     */
    public rotationInterval: string | undefined;

    /**
     * Create a new `ALIYUN::KMS::Key`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKey.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrKeyId = ros.Token.asString(this.getAtt('KeyId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
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
