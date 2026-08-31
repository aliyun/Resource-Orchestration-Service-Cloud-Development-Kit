// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
 */
export interface RosInstanceProps {

    /**
     * @Property components: The component specifications of the instance.
     */
    readonly components: Array<RosInstance.ComponentsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property dbAdminPassword: The database administrator password. The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
     */
    readonly dbAdminPassword: string | ros.IResolvable;

    /**
     * @Property dbVersion: The database engine version.
     */
    readonly dbVersion: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the instance.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property paymentType: The billing method of the instance.
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * @Property vpcId: The VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The vSwitch configurations.
     */
    readonly vSwitchIds: Array<RosInstance.VSwitchIdsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: The primary zone ID of the instance.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property aiFunction: Whether the AI function is enabled.
     */
    readonly aiFunction?: boolean | ros.IResolvable;

    /**
     * @Property autoBackup: Whether automatic backup is enabled.
     */
    readonly autoBackup?: boolean | ros.IResolvable;

    /**
     * @Property autoPay: Whether the order is automatically paid.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether the subscription is automatically renewed.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property backupRestoreInfo: The backup restore information.
     */
    readonly backupRestoreInfo?: RosInstance.BackupRestoreInfoProperty | ros.IResolvable;

    /**
     * @Property configuration: The instance configuration in YAML format.
     */
    readonly configuration?: string | ros.IResolvable;

    /**
     * @Property encrypted: Whether OSS encryption is enabled.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * @Property ha: Whether high availability is enabled.
     */
    readonly ha?: boolean | ros.IResolvable;

    /**
     * @Property isMultiAzStorage: Whether multi-zone storage is enabled.
     */
    readonly isMultiAzStorage?: boolean | ros.IResolvable;

    /**
     * @Property kmsKeyId: The ID of the KMS key used for encryption.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * @Property loadReplicas: The number of load replicas.
     */
    readonly loadReplicas?: number | ros.IResolvable;

    /**
     * @Property multiZoneMode: The multi-zone deployment mode.
     */
    readonly multiZoneMode?: string | ros.IResolvable;

    /**
     * @Property paymentDuration: The subscription duration.
     */
    readonly paymentDuration?: number | ros.IResolvable;

    /**
     * @Property paymentDurationUnit: The unit of the subscription duration.
     */
    readonly paymentDurationUnit?: string | ros.IResolvable;

    /**
     * @Property promotionNo: The promotion number.
     */
    readonly promotionNo?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to Milvus instance. Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
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
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('configuration', ros.validateString)(properties.configuration));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('paymentDuration', ros.validateNumber)(properties.paymentDuration));
    errors.collect(ros.propertyValidator('loadReplicas', ros.validateNumber)(properties.loadReplicas));
    errors.collect(ros.propertyValidator('components', ros.requiredValidator)(properties.components));
    if(properties.components && (Array.isArray(properties.components) || (typeof properties.components) === 'string')) {
        errors.collect(ros.propertyValidator('components', ros.validateLength)({
            data: properties.components.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('components', ros.listValidator(RosInstance_ComponentsPropertyValidator))(properties.components));
    errors.collect(ros.propertyValidator('dbVersion', ros.requiredValidator)(properties.dbVersion));
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    errors.collect(ros.propertyValidator('paymentType', ros.requiredValidator)(properties.paymentType));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","Subscription"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('ha', ros.validateBoolean)(properties.ha));
    errors.collect(ros.propertyValidator('autoBackup', ros.validateBoolean)(properties.autoBackup));
    errors.collect(ros.propertyValidator('backupRestoreInfo', RosInstance_BackupRestoreInfoPropertyValidator)(properties.backupRestoreInfo));
    errors.collect(ros.propertyValidator('promotionNo', ros.validateString)(properties.promotionNo));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('aiFunction', ros.validateBoolean)(properties.aiFunction));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(RosInstance_VSwitchIdsPropertyValidator))(properties.vSwitchIds));
    if(properties.paymentDurationUnit && (typeof properties.paymentDurationUnit) !== 'object') {
        errors.collect(ros.propertyValidator('paymentDurationUnit', ros.validateAllowedValues)({
          data: properties.paymentDurationUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentDurationUnit', ros.validateString)(properties.paymentDurationUnit));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('dbAdminPassword', ros.requiredValidator)(properties.dbAdminPassword));
    if(properties.dbAdminPassword && (Array.isArray(properties.dbAdminPassword) || (typeof properties.dbAdminPassword) === 'string')) {
        errors.collect(ros.propertyValidator('dbAdminPassword', ros.validateLength)({
            data: properties.dbAdminPassword.length,
            min: 8,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('dbAdminPassword', ros.validateString)(properties.dbAdminPassword));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if(properties.instanceName && (Array.isArray(properties.instanceName) || (typeof properties.instanceName) === 'string')) {
        errors.collect(ros.propertyValidator('instanceName', ros.validateLength)({
            data: properties.instanceName.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('isMultiAzStorage', ros.validateBoolean)(properties.isMultiAzStorage));
    if(properties.multiZoneMode && (typeof properties.multiZoneMode) !== 'object') {
        errors.collect(ros.propertyValidator('multiZoneMode', ros.validateAllowedValues)({
          data: properties.multiZoneMode,
          allowedValues: ["Single","Two","Two_ha"],
        }));
    }
    errors.collect(ros.propertyValidator('multiZoneMode', ros.validateString)(properties.multiZoneMode));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'Components': ros.listMapper(rosInstanceComponentsPropertyToRosTemplate)(properties.components),
      'DbAdminPassword': ros.stringToRosTemplate(properties.dbAdminPassword),
      'DbVersion': ros.stringToRosTemplate(properties.dbVersion),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(rosInstanceVSwitchIdsPropertyToRosTemplate)(properties.vSwitchIds),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'AiFunction': ros.booleanToRosTemplate(properties.aiFunction),
      'AutoBackup': ros.booleanToRosTemplate(properties.autoBackup),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'BackupRestoreInfo': rosInstanceBackupRestoreInfoPropertyToRosTemplate(properties.backupRestoreInfo),
      'Configuration': ros.stringToRosTemplate(properties.configuration),
      'Encrypted': ros.booleanToRosTemplate(properties.encrypted),
      'Ha': ros.booleanToRosTemplate(properties.ha),
      'IsMultiAzStorage': ros.booleanToRosTemplate(properties.isMultiAzStorage),
      'KmsKeyId': ros.stringToRosTemplate(properties.kmsKeyId),
      'LoadReplicas': ros.numberToRosTemplate(properties.loadReplicas),
      'MultiZoneMode': ros.stringToRosTemplate(properties.multiZoneMode),
      'PaymentDuration': ros.numberToRosTemplate(properties.paymentDuration),
      'PaymentDurationUnit': ros.stringToRosTemplate(properties.paymentDurationUnit),
      'PromotionNo': ros.stringToRosTemplate(properties.promotionNo),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Milvus::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Milvus::Instance";

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property components: The component specifications of the instance.
     */
    public components: Array<RosInstance.ComponentsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property dbAdminPassword: The database administrator password. The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
     */
    public dbAdminPassword: string | ros.IResolvable;

    /**
     * @Property dbVersion: The database engine version.
     */
    public dbVersion: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the instance.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property paymentType: The billing method of the instance.
     */
    public paymentType: string | ros.IResolvable;

    /**
     * @Property vpcId: The VPC ID.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The vSwitch configurations.
     */
    public vSwitchIds: Array<RosInstance.VSwitchIdsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: The primary zone ID of the instance.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property aiFunction: Whether the AI function is enabled.
     */
    public aiFunction: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoBackup: Whether automatic backup is enabled.
     */
    public autoBackup: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Whether the order is automatically paid.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether the subscription is automatically renewed.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property backupRestoreInfo: The backup restore information.
     */
    public backupRestoreInfo: RosInstance.BackupRestoreInfoProperty | ros.IResolvable | undefined;

    /**
     * @Property configuration: The instance configuration in YAML format.
     */
    public configuration: string | ros.IResolvable | undefined;

    /**
     * @Property encrypted: Whether OSS encryption is enabled.
     */
    public encrypted: boolean | ros.IResolvable | undefined;

    /**
     * @Property ha: Whether high availability is enabled.
     */
    public ha: boolean | ros.IResolvable | undefined;

    /**
     * @Property isMultiAzStorage: Whether multi-zone storage is enabled.
     */
    public isMultiAzStorage: boolean | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: The ID of the KMS key used for encryption.
     */
    public kmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property loadReplicas: The number of load replicas.
     */
    public loadReplicas: number | ros.IResolvable | undefined;

    /**
     * @Property multiZoneMode: The multi-zone deployment mode.
     */
    public multiZoneMode: string | ros.IResolvable | undefined;

    /**
     * @Property paymentDuration: The subscription duration.
     */
    public paymentDuration: number | ros.IResolvable | undefined;

    /**
     * @Property paymentDurationUnit: The unit of the subscription duration.
     */
    public paymentDurationUnit: string | ros.IResolvable | undefined;

    /**
     * @Property promotionNo: The promotion number.
     */
    public promotionNo: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The resource group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to Milvus instance. Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.components = props.components;
        this.dbAdminPassword = props.dbAdminPassword;
        this.dbVersion = props.dbVersion;
        this.instanceName = props.instanceName;
        this.paymentType = props.paymentType;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.zoneId = props.zoneId;
        this.aiFunction = props.aiFunction;
        this.autoBackup = props.autoBackup;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.backupRestoreInfo = props.backupRestoreInfo;
        this.configuration = props.configuration;
        this.encrypted = props.encrypted;
        this.ha = props.ha;
        this.isMultiAzStorage = props.isMultiAzStorage;
        this.kmsKeyId = props.kmsKeyId;
        this.loadReplicas = props.loadReplicas;
        this.multiZoneMode = props.multiZoneMode;
        this.paymentDuration = props.paymentDuration;
        this.paymentDurationUnit = props.paymentDurationUnit;
        this.promotionNo = props.promotionNo;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            components: this.components,
            dbAdminPassword: this.dbAdminPassword,
            dbVersion: this.dbVersion,
            instanceName: this.instanceName,
            paymentType: this.paymentType,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            zoneId: this.zoneId,
            aiFunction: this.aiFunction,
            autoBackup: this.autoBackup,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            backupRestoreInfo: this.backupRestoreInfo,
            configuration: this.configuration,
            encrypted: this.encrypted,
            ha: this.ha,
            isMultiAzStorage: this.isMultiAzStorage,
            kmsKeyId: this.kmsKeyId,
            loadReplicas: this.loadReplicas,
            multiZoneMode: this.multiZoneMode,
            paymentDuration: this.paymentDuration,
            paymentDurationUnit: this.paymentDurationUnit,
            promotionNo: this.promotionNo,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
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
    export interface BackupRestoreInfoProperty {
        /**
         * @Property backupId: The backup ID.
         */
        readonly backupId?: string | ros.IResolvable;
        /**
         * @Property sourceClusterId: The source cluster ID.
         */
        readonly sourceClusterId?: string | ros.IResolvable;
        /**
         * @Property backupName: The backup name.
         */
        readonly backupName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BackupRestoreInfoProperty`
 *
 * @param properties - the TypeScript properties of a `BackupRestoreInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_BackupRestoreInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backupId', ros.validateString)(properties.backupId));
    errors.collect(ros.propertyValidator('sourceClusterId', ros.validateString)(properties.sourceClusterId));
    errors.collect(ros.propertyValidator('backupName', ros.validateString)(properties.backupName));
    return errors.wrap('supplied properties not correct for "BackupRestoreInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance.BackupRestoreInfo` resource
 *
 * @param properties - the TypeScript properties of a `BackupRestoreInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance.BackupRestoreInfo` resource.
 */
// @ts-ignore TS6133
function rosInstanceBackupRestoreInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_BackupRestoreInfoPropertyValidator(properties).assertSuccess();
    return {
      'BackupId': ros.stringToRosTemplate(properties.backupId),
      'SourceClusterId': ros.stringToRosTemplate(properties.sourceClusterId),
      'BackupName': ros.stringToRosTemplate(properties.backupName),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface ComponentsProperty {
        /**
         * @Property cuType: The compute unit type.
         */
        readonly cuType?: string | ros.IResolvable;
        /**
         * @Property type: The component type.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property cuNum: The number of compute units.
         */
        readonly cuNum: number | ros.IResolvable;
        /**
         * @Property diskSizeType: The disk size type.
         */
        readonly diskSizeType?: string | ros.IResolvable;
        /**
         * @Property replica: The number of component replicas.
         */
        readonly replica: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ComponentsProperty`
 *
 * @param properties - the TypeScript properties of a `ComponentsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_ComponentsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cuType', ros.validateString)(properties.cuType));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["proxy","streaming","mix_coordinator","data","query","standalone","standalone_pro","index"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('cuNum', ros.requiredValidator)(properties.cuNum));
    errors.collect(ros.propertyValidator('cuNum', ros.validateNumber)(properties.cuNum));
    if(properties.diskSizeType && (typeof properties.diskSizeType) !== 'object') {
        errors.collect(ros.propertyValidator('diskSizeType', ros.validateAllowedValues)({
          data: properties.diskSizeType,
          allowedValues: ["Large","Normal"],
        }));
    }
    errors.collect(ros.propertyValidator('diskSizeType', ros.validateString)(properties.diskSizeType));
    errors.collect(ros.propertyValidator('replica', ros.requiredValidator)(properties.replica));
    errors.collect(ros.propertyValidator('replica', ros.validateNumber)(properties.replica));
    return errors.wrap('supplied properties not correct for "ComponentsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance.Components` resource
 *
 * @param properties - the TypeScript properties of a `ComponentsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance.Components` resource.
 */
// @ts-ignore TS6133
function rosInstanceComponentsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_ComponentsPropertyValidator(properties).assertSuccess();
    return {
      'CuType': ros.stringToRosTemplate(properties.cuType),
      'Type': ros.stringToRosTemplate(properties.type),
      'CuNum': ros.numberToRosTemplate(properties.cuNum),
      'DiskSizeType': ros.stringToRosTemplate(properties.diskSizeType),
      'Replica': ros.numberToRosTemplate(properties.replica),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface VSwitchIdsProperty {
        /**
         * @Property zoneId: The zone ID of the vSwitch.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vswId: The vSwitch ID.
         */
        readonly vswId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VSwitchIdsProperty`
 *
 * @param properties - the TypeScript properties of a `VSwitchIdsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_VSwitchIdsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    if(properties.zoneId && (Array.isArray(properties.zoneId) || (typeof properties.zoneId) === 'string')) {
        errors.collect(ros.propertyValidator('zoneId', ros.validateLength)({
            data: properties.zoneId.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vswId', ros.requiredValidator)(properties.vswId));
    if(properties.vswId && (Array.isArray(properties.vswId) || (typeof properties.vswId) === 'string')) {
        errors.collect(ros.propertyValidator('vswId', ros.validateLength)({
            data: properties.vswId.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vswId', ros.validateString)(properties.vswId));
    return errors.wrap('supplied properties not correct for "VSwitchIdsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance.VSwitchIds` resource
 *
 * @param properties - the TypeScript properties of a `VSwitchIdsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Milvus::Instance.VSwitchIds` resource.
 */
// @ts-ignore TS6133
function rosInstanceVSwitchIdsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_VSwitchIdsPropertyValidator(properties).assertSuccess();
    return {
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'VswId': ros.stringToRosTemplate(properties.vswId),
    };
}
