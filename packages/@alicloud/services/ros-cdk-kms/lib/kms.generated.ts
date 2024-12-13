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
      'AliasName': ros.stringToRosTemplate(properties.aliasName),
      'KeyId': ros.stringToRosTemplate(properties.keyId),
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
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.vpcNum && (typeof properties.vpcNum) !== 'object') {
        errors.collect(ros.propertyValidator('vpcNum', ros.validateRange)({
            data: properties.vpcNum,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('vpcNum', ros.validateNumber)(properties.vpcNum));
    errors.collect(ros.propertyValidator('log', ros.validateBoolean)(properties.log));
    if(properties.keyNum && (typeof properties.keyNum) !== 'object') {
        errors.collect(ros.propertyValidator('keyNum', ros.validateRange)({
            data: properties.keyNum,
            min: 100,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('keyNum', ros.validateNumber)(properties.keyNum));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('connection', RosInstance_ConnectionPropertyValidator)(properties.connection));
    if(properties.renewPeriod && (typeof properties.renewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('renewPeriod', ros.validateRange)({
            data: properties.renewPeriod,
            min: 1,
            max: 36,
          }));
    }
    errors.collect(ros.propertyValidator('renewPeriod', ros.validateNumber)(properties.renewPeriod));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.secretNum && (typeof properties.secretNum) !== 'object') {
        errors.collect(ros.propertyValidator('secretNum', ros.validateRange)({
            data: properties.secretNum,
            min: 0,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('secretNum', ros.validateNumber)(properties.secretNum));
    errors.collect(ros.propertyValidator('productVersion', ros.requiredValidator)(properties.productVersion));
    if(properties.productVersion && (typeof properties.productVersion) !== 'object') {
        errors.collect(ros.propertyValidator('productVersion', ros.validateAllowedValues)({
          data: properties.productVersion,
          allowedValues: ["software","software-small","hardware","hardware-small"],
        }));
    }
    errors.collect(ros.propertyValidator('productVersion', ros.validateString)(properties.productVersion));
    if(properties.logStorage && (typeof properties.logStorage) !== 'object') {
        errors.collect(ros.propertyValidator('logStorage', ros.validateRange)({
            data: properties.logStorage,
            min: 1000,
            max: 500000,
          }));
    }
    errors.collect(ros.propertyValidator('logStorage', ros.validateNumber)(properties.logStorage));
    if(properties.renewStatus && (typeof properties.renewStatus) !== 'object') {
        errors.collect(ros.propertyValidator('renewStatus', ros.validateAllowedValues)({
          data: properties.renewStatus,
          allowedValues: ["AutoRenewal","ManualRenewal"],
        }));
    }
    errors.collect(ros.propertyValidator('renewStatus', ros.validateString)(properties.renewStatus));
    if(properties.spec && (typeof properties.spec) !== 'object') {
        errors.collect(ros.propertyValidator('spec', ros.validateAllowedValues)({
          data: properties.spec,
          allowedValues: [200,1000,2000,4000],
        }));
    }
    errors.collect(ros.propertyValidator('spec', ros.validateNumber)(properties.spec));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KMS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KMS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'ProductVersion': ros.stringToRosTemplate(properties.productVersion),
      'Connection': rosInstanceConnectionPropertyToRosTemplate(properties.connection),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'KeyNum': ros.numberToRosTemplate(properties.keyNum),
      'Log': ros.booleanToRosTemplate(properties.log),
      'LogStorage': ros.numberToRosTemplate(properties.logStorage),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'RenewPeriod': ros.numberToRosTemplate(properties.renewPeriod),
      'RenewStatus': ros.stringToRosTemplate(properties.renewStatus),
      'SecretNum': ros.numberToRosTemplate(properties.secretNum),
      'Spec': ros.numberToRosTemplate(properties.spec),
      'VpcNum': ros.numberToRosTemplate(properties.vpcNum),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Instance`, which is used to create a Key Management Service (KMS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Instance";

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property productVersion: KMS Instance commodity type (software\/software-small\/hardware\/hardware-small).
     */
    public productVersion: string | ros.IResolvable;

    /**
     * @Property connection:
     */
    public connection: RosInstance.ConnectionProperty | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Billing method of the KMS instance, default to Subscription.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property keyNum: Maximum number of stored keys. It is required when the InstanceCharge is Subscription.
     */
    public keyNum: number | ros.IResolvable | undefined;

    /**
     * @Property log: Whether to enable log.
     */
    public log: boolean | ros.IResolvable | undefined;

    /**
     * @Property logStorage: Log storage.
     */
    public logStorage: number | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription duration of the KMS instance.
     * If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
     * If PeriodUnit is Year, the valid range is 1, 2, 3
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property renewPeriod: Automatic renewal period, in months.
     */
    public renewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
     */
    public renewStatus: string | ros.IResolvable | undefined;

    /**
     * @Property secretNum: Maximum number of secrets. It is required when the InstanceCharge is Subscription.
     */
    public secretNum: number | ros.IResolvable | undefined;

    /**
     * @Property spec: The computation performance level of the KMS instance.
     */
    public spec: number | ros.IResolvable | undefined;

    /**
     * @Property vpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
     */
    public vpcNum: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.productVersion = props.productVersion;
        this.connection = props.connection;
        this.instanceChargeType = props.instanceChargeType;
        this.keyNum = props.keyNum;
        this.log = props.log;
        this.logStorage = props.logStorage;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.renewPeriod = props.renewPeriod;
        this.renewStatus = props.renewStatus;
        this.secretNum = props.secretNum;
        this.spec = props.spec;
        this.vpcNum = props.vpcNum;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            productVersion: this.productVersion,
            connection: this.connection,
            instanceChargeType: this.instanceChargeType,
            keyNum: this.keyNum,
            log: this.log,
            logStorage: this.logStorage,
            period: this.period,
            periodUnit: this.periodUnit,
            renewPeriod: this.renewPeriod,
            renewStatus: this.renewStatus,
            secretNum: this.secretNum,
            spec: this.spec,
            vpcNum: this.vpcNum,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface ConnectionProperty {
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
 * Determine whether the given properties match those of a `ConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `ConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_ConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('zoneIds', ros.requiredValidator)(properties.zoneIds));
    if(properties.zoneIds && (Array.isArray(properties.zoneIds) || (typeof properties.zoneIds) === 'string')) {
        errors.collect(ros.propertyValidator('zoneIds', ros.validateLength)({
            data: properties.zoneIds.length,
            min: 2,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    return errors.wrap('supplied properties not correct for "ConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KMS::Instance.Connection` resource
 *
 * @param properties - the TypeScript properties of a `ConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KMS::Instance.Connection` resource.
 */
// @ts-ignore TS6133
function rosInstanceConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_ConnectionPropertyValidator(properties).assertSuccess();
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'ZoneIds': ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
    };
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
    readonly policy?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('policy', ros.hashValidator(ros.validateAny))(properties.policy));
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
            max: 366,
          }));
    }
    errors.collect(ros.propertyValidator('pendingWindowInDays', ros.validateNumber)(properties.pendingWindowInDays));
    errors.collect(ros.propertyValidator('keySpec', ros.validateString)(properties.keySpec));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('keyUsage', ros.validateString)(properties.keyUsage));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
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
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'Description': ros.stringToRosTemplate(properties.description),
      'DKMSInstanceId': ros.stringToRosTemplate(properties.dkmsInstanceId),
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'EnableAutomaticRotation': ros.booleanToRosTemplate(properties.enableAutomaticRotation),
      'KeySpec': ros.stringToRosTemplate(properties.keySpec),
      'KeyUsage': ros.stringToRosTemplate(properties.keyUsage),
      'PendingWindowInDays': ros.numberToRosTemplate(properties.pendingWindowInDays),
      'Policy': ros.hashMapper(ros.objectToRosTemplate)(properties.policy),
      'ProtectionLevel': ros.stringToRosTemplate(properties.protectionLevel),
      'RotationInterval': ros.stringToRosTemplate(properties.rotationInterval),
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
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the key. Default is false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

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
     * @Property policy: The policy of key.
     */
    public policy: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

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
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.dkmsInstanceId = props.dkmsInstanceId;
        this.enable = props.enable;
        this.enableAutomaticRotation = props.enableAutomaticRotation;
        this.keySpec = props.keySpec;
        this.keyUsage = props.keyUsage;
        this.pendingWindowInDays = props.pendingWindowInDays;
        this.policy = props.policy;
        this.protectionLevel = props.protectionLevel;
        this.rotationInterval = props.rotationInterval;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deletionProtection: this.deletionProtection,
            description: this.description,
            dkmsInstanceId: this.dkmsInstanceId,
            enable: this.enable,
            enableAutomaticRotation: this.enableAutomaticRotation,
            keySpec: this.keySpec,
            keyUsage: this.keyUsage,
            pendingWindowInDays: this.pendingWindowInDays,
            policy: this.policy,
            protectionLevel: this.protectionLevel,
            rotationInterval: this.rotationInterval,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
     * @Property description: The description of the network rule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property sourcePrivateIp: VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses.
     */
    readonly sourcePrivateIp?: Array<string | ros.IResolvable> | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.sourcePrivateIp && (Array.isArray(properties.sourcePrivateIp) || (typeof properties.sourcePrivateIp) === 'string')) {
        errors.collect(ros.propertyValidator('sourcePrivateIp', ros.validateLength)({
            data: properties.sourcePrivateIp.length,
            min: 1,
            max: 800,
          }));
    }
    errors.collect(ros.propertyValidator('sourcePrivateIp', ros.listValidator(ros.validateString))(properties.sourcePrivateIp));
    errors.collect(ros.propertyValidator('networkRuleName', ros.requiredValidator)(properties.networkRuleName));
    errors.collect(ros.propertyValidator('networkRuleName', ros.validateString)(properties.networkRuleName));
    return errors.wrap('supplied properties not correct for "RosNetworkRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KMS::NetworkRule` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KMS::NetworkRule` resource.
 */
// @ts-ignore TS6133
function rosNetworkRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkRulePropsValidator(properties).assertSuccess();
    }
    return {
      'NetworkRuleName': ros.stringToRosTemplate(properties.networkRuleName),
      'Description': ros.stringToRosTemplate(properties.description),
      'SourcePrivateIp': ros.listMapper(ros.stringToRosTemplate)(properties.sourcePrivateIp),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::NetworkRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
 */
export class RosNetworkRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::NetworkRule";

    /**
     * @Attribute Description: Description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute SourcePrivateIp: VPC network whitelist.
     */
    public readonly attrSourcePrivateIp: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkRuleName: The name of the access control rule.
     */
    public networkRuleName: string | ros.IResolvable;

    /**
     * @Property description: The description of the network rule.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property sourcePrivateIp: VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses.
     */
    public sourcePrivateIp: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

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
        this.description = props.description;
        this.sourcePrivateIp = props.sourcePrivateIp;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkRuleName: this.networkRuleName,
            description: this.description,
            sourcePrivateIp: this.sourcePrivateIp,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('accessControlRules', ros.requiredValidator)(properties.accessControlRules));
    errors.collect(ros.propertyValidator('accessControlRules', RosPolicy_AccessControlRulesPropertyValidator)(properties.accessControlRules));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('permissions', ros.requiredValidator)(properties.permissions));
    if(properties.permissions && (Array.isArray(properties.permissions) || (typeof properties.permissions) === 'string')) {
        errors.collect(ros.propertyValidator('permissions', ros.validateLength)({
            data: properties.permissions.length,
            min: 1,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('permissions', ros.listValidator(ros.validateString))(properties.permissions));
    errors.collect(ros.propertyValidator('kmsInstanceId', ros.requiredValidator)(properties.kmsInstanceId));
    errors.collect(ros.propertyValidator('kmsInstanceId', ros.validateString)(properties.kmsInstanceId));
    errors.collect(ros.propertyValidator('resources', ros.requiredValidator)(properties.resources));
    if(properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: 1,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(ros.validateString))(properties.resources));
    return errors.wrap('supplied properties not correct for "RosPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KMS::Policy` resource
 *
 * @param properties - the TypeScript properties of a `RosPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KMS::Policy` resource.
 */
// @ts-ignore TS6133
function rosPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'AccessControlRules': rosPolicyAccessControlRulesPropertyToRosTemplate(properties.accessControlRules),
      'KmsInstanceId': ros.stringToRosTemplate(properties.kmsInstanceId),
      'Permissions': ros.listMapper(ros.stringToRosTemplate)(properties.permissions),
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'Resources': ros.listMapper(ros.stringToRosTemplate)(properties.resources),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Policy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
 */
export class RosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KMS::Policy";

    /**
     * @Attribute AccessControlRules: Network Rules info.
     */
    public readonly attrAccessControlRules: ros.IResolvable;

    /**
     * @Attribute Description: Description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute KmsInstanceId: The scope of the permission policy. You need to specify the KMS instance that you want to access.
     */
    public readonly attrKmsInstanceId: ros.IResolvable;

    /**
     * @Attribute Permissions: RbacPermission Template, support RbacPermission/Template/CryptoServiceKeyUser and RbacPermission/Template/CryptoServiceSecretUser.
     */
    public readonly attrPermissions: ros.IResolvable;

    /**
     * @Attribute PolicyName: The name of the permission policy.
     */
    public readonly attrPolicyName: ros.IResolvable;

    /**
     * @Attribute Resources: Resources that allowed access by this policy.
     */
    public readonly attrResources: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessControlRules: Network Rules info.
     */
    public accessControlRules: RosPolicy.AccessControlRulesProperty | ros.IResolvable;

    /**
     * @Property kmsInstanceId: The scope of the permission policy. You need to specify the KMS instance that you want to access.
     */
    public kmsInstanceId: string | ros.IResolvable;

    /**
     * @Property permissions: The operations that can be performed. Valid values:
     * RbacPermission\/Template\/CryptoServiceKeyUser: allows you to perform cryptographic operations.
     * RbacPermission\/Template\/CryptoServiceSecretUser: allows you to perform secret-related operations.
     */
    public permissions: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property policyName: The name of the permission policy.
     */
    public policyName: string | ros.IResolvable;

    /**
     * @Property resources: The key and secret that are allowed to access. Supports a maximum of 30 key and secret.
     * Key: Enter a key in the key\/${KeyId} format. To allow access to all keys of a KMS instance, enter key\/*. 
     * Secret: Enter a secret in the secret\/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret\/*.
     */
    public resources: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the permission policy.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessControlRules = this.getAtt('AccessControlRules');
        this.attrDescription = this.getAtt('Description');
        this.attrKmsInstanceId = this.getAtt('KmsInstanceId');
        this.attrPermissions = this.getAtt('Permissions');
        this.attrPolicyName = this.getAtt('PolicyName');
        this.attrResources = this.getAtt('Resources');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessControlRules = props.accessControlRules;
        this.kmsInstanceId = props.kmsInstanceId;
        this.permissions = props.permissions;
        this.policyName = props.policyName;
        this.resources = props.resources;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessControlRules: this.accessControlRules,
            kmsInstanceId: this.kmsInstanceId,
            permissions: this.permissions,
            policyName: this.policyName,
            resources: this.resources,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface AccessControlRulesProperty {
        /**
         * @Property networkRules: NetworkRule list, Supports a maximum of 40 network control rules.
         */
        readonly networkRules: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AccessControlRulesProperty`
 *
 * @param properties - the TypeScript properties of a `AccessControlRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_AccessControlRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkRules', ros.requiredValidator)(properties.networkRules));
    if(properties.networkRules && (Array.isArray(properties.networkRules) || (typeof properties.networkRules) === 'string')) {
        errors.collect(ros.propertyValidator('networkRules', ros.validateLength)({
            data: properties.networkRules.length,
            min: 1,
            max: 40,
          }));
    }
    errors.collect(ros.propertyValidator('networkRules', ros.listValidator(ros.validateString))(properties.networkRules));
    return errors.wrap('supplied properties not correct for "AccessControlRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KMS::Policy.AccessControlRules` resource
 *
 * @param properties - the TypeScript properties of a `AccessControlRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KMS::Policy.AccessControlRules` resource.
 */
// @ts-ignore TS6133
function rosPolicyAccessControlRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_AccessControlRulesPropertyValidator(properties).assertSuccess();
    return {
      'NetworkRules': ros.listMapper(ros.stringToRosTemplate)(properties.networkRules),
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
      'SecretData': ros.stringToRosTemplate(properties.secretData),
      'SecretName': ros.stringToRosTemplate(properties.secretName),
      'VersionId': ros.stringToRosTemplate(properties.versionId),
      'Description': ros.stringToRosTemplate(properties.description),
      'DKMSInstanceId': ros.stringToRosTemplate(properties.dkmsInstanceId),
      'EnableAutomaticRotation': ros.booleanToRosTemplate(properties.enableAutomaticRotation),
      'EncryptionKeyId': ros.stringToRosTemplate(properties.encryptionKeyId),
      'ExtendedConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.extendedConfig),
      'ForceDeleteWithoutRecovery': ros.booleanToRosTemplate(properties.forceDeleteWithoutRecovery),
      'RecoveryWindowInDays': ros.numberToRosTemplate(properties.recoveryWindowInDays),
      'RotationInterval': ros.stringToRosTemplate(properties.rotationInterval),
      'SecretDataType': ros.stringToRosTemplate(properties.secretDataType),
      'SecretType': ros.stringToRosTemplate(properties.secretType),
      'VersionStages': ros.listMapper(ros.stringToRosTemplate)(properties.versionStages),
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
