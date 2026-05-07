// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAuditPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
 */
export interface RosAuditPolicyProps {

    /**
     * @Property auditStatus: Audit state, Valid values: `enable`, `disabled`.
     */
    readonly auditStatus: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: Database Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
     */
    readonly storagePeriod?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAuditPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosAuditPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosAuditPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.storagePeriod && (typeof properties.storagePeriod) !== 'object') {
        errors.collect(ros.propertyValidator('storagePeriod', ros.validateRange)({
            data: properties.storagePeriod,
            min: 1,
            max: 365,
          }));
    }
    errors.collect(ros.propertyValidator('storagePeriod', ros.validateNumber)(properties.storagePeriod));
    errors.collect(ros.propertyValidator('auditStatus', ros.requiredValidator)(properties.auditStatus));
    if(properties.auditStatus && (typeof properties.auditStatus) !== 'object') {
        errors.collect(ros.propertyValidator('auditStatus', ros.validateAllowedValues)({
          data: properties.auditStatus,
          allowedValues: ["enable","disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('auditStatus', ros.validateString)(properties.auditStatus));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    return errors.wrap('supplied properties not correct for "RosAuditPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::AuditPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosAuditPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::AuditPolicy` resource.
 */
// @ts-ignore TS6133
function rosAuditPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAuditPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'AuditStatus': ros.stringToRosTemplate(properties.auditStatus),
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'StoragePeriod': ros.numberToRosTemplate(properties.storagePeriod),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::AuditPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AuditPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
 */
export class RosAuditPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::AuditPolicy";

    /**
     * @Attribute AuditStatus: Audit state, Valid values: `enable`, `disabled`.
     */
    public readonly attrAuditStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property auditStatus: Audit state, Valid values: `enable`, `disabled`.
     */
    public auditStatus: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: Database Instance Id.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
     */
    public storagePeriod: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAuditPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAuditPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuditStatus = this.getAtt('AuditStatus');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.auditStatus = props.auditStatus;
        this.dbInstanceId = props.dbInstanceId;
        this.storagePeriod = props.storagePeriod;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            auditStatus: this.auditStatus,
            dbInstanceId: this.dbInstanceId,
            storagePeriod: this.storagePeriod,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAuditPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGlobalSecurityIPGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
 */
export interface RosGlobalSecurityIPGroupProps {

    /**
     * @Property globalIgName: The name of the IP whitelist template.
     */
    readonly globalIgName: string | ros.IResolvable;

    /**
     * @Property globalSecurityIpList: The IP address in the whitelist template.
     */
    readonly globalSecurityIpList: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGlobalSecurityIPGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGlobalSecurityIPGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGlobalSecurityIPGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('globalIgName', ros.requiredValidator)(properties.globalIgName));
    errors.collect(ros.propertyValidator('globalIgName', ros.validateString)(properties.globalIgName));
    errors.collect(ros.propertyValidator('globalSecurityIpList', ros.requiredValidator)(properties.globalSecurityIpList));
    if(properties.globalSecurityIpList && (Array.isArray(properties.globalSecurityIpList) || (typeof properties.globalSecurityIpList) === 'string')) {
        errors.collect(ros.propertyValidator('globalSecurityIpList', ros.validateLength)({
            data: properties.globalSecurityIpList.length,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('globalSecurityIpList', ros.listValidator(ros.validateAny))(properties.globalSecurityIpList));
    return errors.wrap('supplied properties not correct for "RosGlobalSecurityIPGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::GlobalSecurityIPGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosGlobalSecurityIPGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::GlobalSecurityIPGroup` resource.
 */
// @ts-ignore TS6133
function rosGlobalSecurityIPGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGlobalSecurityIPGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'GlobalIgName': ros.stringToRosTemplate(properties.globalIgName),
      'GlobalSecurityIpList': ros.listMapper(ros.objectToRosTemplate)(properties.globalSecurityIpList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::GlobalSecurityIPGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GlobalSecurityIPGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
 */
export class RosGlobalSecurityIPGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::GlobalSecurityIPGroup";

    /**
     * @Attribute GlobalIgName: The name of the IP whitelist template.
     */
    public readonly attrGlobalIgName: ros.IResolvable;

    /**
     * @Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.
     */
    public readonly attrGlobalSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute GlobalSecurityIpList: The IP address in the whitelist template.
     */
    public readonly attrGlobalSecurityIpList: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property globalIgName: The name of the IP whitelist template.
     */
    public globalIgName: string | ros.IResolvable;

    /**
     * @Property globalSecurityIpList: The IP address in the whitelist template.
     */
    public globalSecurityIpList: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGlobalSecurityIPGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGlobalSecurityIPGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGlobalIgName = this.getAtt('GlobalIgName');
        this.attrGlobalSecurityGroupId = this.getAtt('GlobalSecurityGroupId');
        this.attrGlobalSecurityIpList = this.getAtt('GlobalSecurityIpList');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.globalIgName = props.globalIgName;
        this.globalSecurityIpList = props.globalSecurityIpList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            globalIgName: this.globalIgName,
            globalSecurityIpList: this.globalSecurityIpList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGlobalSecurityIPGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
 */
export interface RosInstanceProps {

    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    readonly dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    readonly dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * @Property auditPolicyOptions: Audit policy options.
     */
    readonly auditPolicyOptions?: RosInstance.AuditPolicyOptionsProperty | ros.IResolvable;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property backupId: Specific backup set Id.
     */
    readonly backupId?: string | ros.IResolvable;

    /**
     * @Property backupPolicyOptions: Backup policy options.
     */
    readonly backupPolicyOptions?: RosInstance.BackupPolicyOptionsProperty | ros.IResolvable;

    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    readonly businessInfo?: string | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property clusterId: The dedicated cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;

    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string | ros.IResolvable;

    /**
     * @Property databaseNames: The name of the database.
     */
    readonly databaseNames?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property dbInstanceReleaseProtection: Enables instance release protection. Values:
     * - true: Enabled.
     * - false: Not enabled.
     */
    readonly dbInstanceReleaseProtection?: boolean | ros.IResolvable;

    /**
     * @Property encrypted: Whether to enable cloud disk encryption.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * @Property encryptionKey: Custom key ID.
     */
    readonly encryptionKey?: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database instance version.
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    readonly hiddenZoneId?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property privateConnections: Connection configs of private connection.
     */
    readonly privateConnections?: RosInstance.PrivateConnectionsProperty | ros.IResolvable;

    /**
     * @Property provisionedIops: Provisioned IOPS. The value range is 0 to 50000.
     */
    readonly provisionedIops?: number | ros.IResolvable;

    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonly readonlyReplicas?: number | ros.IResolvable;

    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    readonly replicationFactor?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string | ros.IResolvable;

    /**
     * @Property restoreType: Backup recovery instance.
     * - 0: Restore instance to specified backup set
     * - 1: Restore instance to specified point in time
     * - 2: Restore released instance to specified backup set
     * - 3: Restore instance to specified backup set
     */
    readonly restoreType?: number | ros.IResolvable;

    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the ECS security group.
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group. 
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    readonly securityIpArray?: string | ros.IResolvable;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string | ros.IResolvable;

    /**
     * @Property srcRegion: The source instance region.
     * 
     * >- When the backup recovery type is 2 or 3, this parameter is required.
     */
    readonly srcRegion?: string | ros.IResolvable;

    /**
     * @Property sslOptions: SSL options.
     */
    readonly sslOptions?: RosInstance.SSLOptionsProperty | ros.IResolvable;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string | ros.IResolvable;

    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    readonly storageType?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('businessInfo', ros.validateString)(properties.businessInfo));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('hiddenZoneId', ros.validateString)(properties.hiddenZoneId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('securityIpArray', ros.validateString)(properties.securityIpArray));
    errors.collect(ros.propertyValidator('backupId', ros.validateString)(properties.backupId));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    errors.collect(ros.propertyValidator('sslOptions', RosInstance_SSLOptionsPropertyValidator)(properties.sslOptions));
    if(properties.storageEngine && (typeof properties.storageEngine) !== 'object') {
        errors.collect(ros.propertyValidator('storageEngine', ros.validateAllowedValues)({
          data: properties.storageEngine,
          allowedValues: ["WiredTiger","RocksDB","TerarkDB"],
        }));
    }
    errors.collect(ros.propertyValidator('storageEngine', ros.validateString)(properties.storageEngine));
    errors.collect(ros.propertyValidator('auditPolicyOptions', RosInstance_AuditPolicyOptionsPropertyValidator)(properties.auditPolicyOptions));
    errors.collect(ros.propertyValidator('restoreTime', ros.validateString)(properties.restoreTime));
    errors.collect(ros.propertyValidator('privateConnections', RosInstance_PrivateConnectionsPropertyValidator)(properties.privateConnections));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.requiredValidator)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.validateNumber)(properties.dbInstanceStorage));
    if(properties.restoreType && (typeof properties.restoreType) !== 'object') {
        errors.collect(ros.propertyValidator('restoreType', ros.validateAllowedValues)({
          data: properties.restoreType,
          allowedValues: [0,1,2,3],
        }));
    }
    errors.collect(ros.propertyValidator('restoreType', ros.validateNumber)(properties.restoreType));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('couponNo', ros.validateString)(properties.couponNo));
    errors.collect(ros.propertyValidator('dbInstanceReleaseProtection', ros.validateBoolean)(properties.dbInstanceReleaseProtection));
    errors.collect(ros.propertyValidator('tdeStatus', ros.validateBoolean)(properties.tdeStatus));
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.replicationFactor && (typeof properties.replicationFactor) !== 'object') {
        errors.collect(ros.propertyValidator('replicationFactor', ros.validateAllowedValues)({
          data: properties.replicationFactor,
          allowedValues: [3,5,7],
        }));
    }
    errors.collect(ros.propertyValidator('replicationFactor', ros.validateNumber)(properties.replicationFactor));
    if(properties.readonlyReplicas && (typeof properties.readonlyReplicas) !== 'object') {
        errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateAllowedValues)({
          data: properties.readonlyReplicas,
          allowedValues: [1,2,3,4,5],
        }));
    }
    errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateNumber)(properties.readonlyReplicas));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('vpcPasswordFree', ros.validateBoolean)(properties.vpcPasswordFree));
    errors.collect(ros.propertyValidator('provisionedIops', ros.validateNumber)(properties.provisionedIops));
    errors.collect(ros.propertyValidator('secondaryZoneId', ros.validateString)(properties.secondaryZoneId));
    errors.collect(ros.propertyValidator('backupPolicyOptions', RosInstance_BackupPolicyOptionsPropertyValidator)(properties.backupPolicyOptions));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('srcRegion', ros.validateString)(properties.srcRegion));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('databaseNames', ros.validateString)(properties.databaseNames));
    errors.collect(ros.propertyValidator('srcDbInstanceId', ros.validateString)(properties.srcDbInstanceId));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceClass': ros.stringToRosTemplate(properties.dbInstanceClass),
      'DBInstanceStorage': ros.numberToRosTemplate(properties.dbInstanceStorage),
      'AccountPassword': ros.stringToRosTemplate(properties.accountPassword),
      'AuditPolicyOptions': rosInstanceAuditPolicyOptionsPropertyToRosTemplate(properties.auditPolicyOptions),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'BackupId': ros.stringToRosTemplate(properties.backupId),
      'BackupPolicyOptions': rosInstanceBackupPolicyOptionsPropertyToRosTemplate(properties.backupPolicyOptions),
      'BusinessInfo': ros.stringToRosTemplate(properties.businessInfo),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'CouponNo': ros.stringToRosTemplate(properties.couponNo),
      'DatabaseNames': ros.stringToRosTemplate(properties.databaseNames),
      'DBInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'DBInstanceReleaseProtection': ros.booleanToRosTemplate(properties.dbInstanceReleaseProtection),
      'Encrypted': ros.booleanToRosTemplate(properties.encrypted),
      'EncryptionKey': ros.stringToRosTemplate(properties.encryptionKey),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'HiddenZoneId': ros.stringToRosTemplate(properties.hiddenZoneId),
      'Period': ros.numberToRosTemplate(properties.period),
      'PrivateConnections': rosInstancePrivateConnectionsPropertyToRosTemplate(properties.privateConnections),
      'ProvisionedIops': ros.numberToRosTemplate(properties.provisionedIops),
      'ReadonlyReplicas': ros.numberToRosTemplate(properties.readonlyReplicas),
      'ReplicationFactor': ros.numberToRosTemplate(properties.replicationFactor),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RestoreTime': ros.stringToRosTemplate(properties.restoreTime),
      'RestoreType': ros.numberToRosTemplate(properties.restoreType),
      'SecondaryZoneId': ros.stringToRosTemplate(properties.secondaryZoneId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'SecurityIPArray': ros.stringToRosTemplate(properties.securityIpArray),
      'SrcDBInstanceId': ros.stringToRosTemplate(properties.srcDbInstanceId),
      'SrcRegion': ros.stringToRosTemplate(properties.srcRegion),
      'SSLOptions': rosInstanceSSLOptionsPropertyToRosTemplate(properties.sslOptions),
      'StorageEngine': ros.stringToRosTemplate(properties.storageEngine),
      'StorageType': ros.stringToRosTemplate(properties.storageType),
      'Tags': ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
      'TDEStatus': ros.booleanToRosTemplate(properties.tdeStatus),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VpcPasswordFree': ros.booleanToRosTemplate(properties.vpcPasswordFree),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::Instance";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    public readonly attrConnectionUri: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: ros.IResolvable;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute ReplicaSetName: Name of replica set
     */
    public readonly attrReplicaSetName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    public dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    public dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    public accountPassword: string | ros.IResolvable | undefined;

    /**
     * @Property auditPolicyOptions: Audit policy options.
     */
    public auditPolicyOptions: RosInstance.AuditPolicyOptionsProperty | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property backupId: Specific backup set Id.
     */
    public backupId: string | ros.IResolvable | undefined;

    /**
     * @Property backupPolicyOptions: Backup policy options.
     */
    public backupPolicyOptions: RosInstance.BackupPolicyOptionsProperty | ros.IResolvable | undefined;

    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    public businessInfo: string | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property clusterId: The dedicated cluster ID.
     */
    public clusterId: string | ros.IResolvable | undefined;

    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    public couponNo: string | ros.IResolvable | undefined;

    /**
     * @Property databaseNames: The name of the database.
     */
    public databaseNames: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceReleaseProtection: Enables instance release protection. Values:
     * - true: Enabled.
     * - false: Not enabled.
     */
    public dbInstanceReleaseProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property encrypted: Whether to enable cloud disk encryption.
     */
    public encrypted: boolean | ros.IResolvable | undefined;

    /**
     * @Property encryptionKey: Custom key ID.
     */
    public encryptionKey: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: Database instance version.
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    public hiddenZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property privateConnections: Connection configs of private connection.
     */
    public privateConnections: RosInstance.PrivateConnectionsProperty | ros.IResolvable | undefined;

    /**
     * @Property provisionedIops: Provisioned IOPS. The value range is 0 to 50000.
     */
    public provisionedIops: number | ros.IResolvable | undefined;

    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    public readonlyReplicas: number | ros.IResolvable | undefined;

    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    public replicationFactor: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    public restoreTime: string | ros.IResolvable | undefined;

    /**
     * @Property restoreType: Backup recovery instance.
     * - 0: Restore instance to specified backup set
     * - 1: Restore instance to specified point in time
     * - 2: Restore released instance to specified backup set
     * - 3: Restore instance to specified backup set
     */
    public restoreType: number | ros.IResolvable | undefined;

    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    public secondaryZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the ECS security group.
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group. 
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    public securityIpArray: string | ros.IResolvable | undefined;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    public srcDbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property srcRegion: The source instance region.
     * 
     * >- When the backup recovery type is 2 or 3, this parameter is required.
     */
    public srcRegion: string | ros.IResolvable | undefined;

    /**
     * @Property sslOptions: SSL options.
     */
    public sslOptions: RosInstance.SSLOptionsProperty | ros.IResolvable | undefined;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    public storageEngine: string | ros.IResolvable | undefined;

    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    public storageType: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    public tdeStatus: boolean | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    public vpcPasswordFree: boolean | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrConnectionUri = this.getAtt('ConnectionURI');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDbInstanceStatus = this.getAtt('DBInstanceStatus');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrReplicaSetName = this.getAtt('ReplicaSetName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.accountPassword = props.accountPassword;
        this.auditPolicyOptions = props.auditPolicyOptions;
        this.autoRenew = props.autoRenew;
        this.backupId = props.backupId;
        this.backupPolicyOptions = props.backupPolicyOptions;
        this.businessInfo = props.businessInfo;
        this.chargeType = props.chargeType;
        this.clusterId = props.clusterId;
        this.couponNo = props.couponNo;
        this.databaseNames = props.databaseNames;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceReleaseProtection = props.dbInstanceReleaseProtection;
        this.encrypted = props.encrypted;
        this.encryptionKey = props.encryptionKey;
        this.engineVersion = props.engineVersion;
        this.hiddenZoneId = props.hiddenZoneId;
        this.period = props.period;
        this.privateConnections = props.privateConnections;
        this.provisionedIops = props.provisionedIops;
        this.readonlyReplicas = props.readonlyReplicas;
        this.replicationFactor = props.replicationFactor;
        this.resourceGroupId = props.resourceGroupId;
        this.restoreTime = props.restoreTime;
        this.restoreType = props.restoreType;
        this.secondaryZoneId = props.secondaryZoneId;
        this.securityGroupId = props.securityGroupId;
        this.securityIpArray = props.securityIpArray;
        this.srcDbInstanceId = props.srcDbInstanceId;
        this.srcRegion = props.srcRegion;
        this.sslOptions = props.sslOptions;
        this.storageEngine = props.storageEngine;
        this.storageType = props.storageType;
        this.tags = props.tags;
        this.tdeStatus = props.tdeStatus;
        this.vpcId = props.vpcId;
        this.vpcPasswordFree = props.vpcPasswordFree;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceStorage: this.dbInstanceStorage,
            accountPassword: this.accountPassword,
            auditPolicyOptions: this.auditPolicyOptions,
            autoRenew: this.autoRenew,
            backupId: this.backupId,
            backupPolicyOptions: this.backupPolicyOptions,
            businessInfo: this.businessInfo,
            chargeType: this.chargeType,
            clusterId: this.clusterId,
            couponNo: this.couponNo,
            databaseNames: this.databaseNames,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceReleaseProtection: this.dbInstanceReleaseProtection,
            encrypted: this.encrypted,
            encryptionKey: this.encryptionKey,
            engineVersion: this.engineVersion,
            hiddenZoneId: this.hiddenZoneId,
            period: this.period,
            privateConnections: this.privateConnections,
            provisionedIops: this.provisionedIops,
            readonlyReplicas: this.readonlyReplicas,
            replicationFactor: this.replicationFactor,
            resourceGroupId: this.resourceGroupId,
            restoreTime: this.restoreTime,
            restoreType: this.restoreType,
            secondaryZoneId: this.secondaryZoneId,
            securityGroupId: this.securityGroupId,
            securityIpArray: this.securityIpArray,
            srcDbInstanceId: this.srcDbInstanceId,
            srcRegion: this.srcRegion,
            sslOptions: this.sslOptions,
            storageEngine: this.storageEngine,
            storageType: this.storageType,
            tags: this.tags,
            tdeStatus: this.tdeStatus,
            vpcId: this.vpcId,
            vpcPasswordFree: this.vpcPasswordFree,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
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
    export interface AuditPolicyOptionsProperty {
        /**
         * @Property storagePeriod: The retention period of audit logs. Unit: days. Valid values: 1 to 365. Default is 30 days.
         */
        readonly storagePeriod?: number | ros.IResolvable;
        /**
         * @Property auditStatus: Audit log status, values:
     * - enable: Audit logging is enabled.
     * - disabled: Audit logging is disabled.
         */
        readonly auditStatus: string | ros.IResolvable;
        /**
         * @Property serviceType: Audit log version type.
     * - Trial: Free trial version.
     * - Standard: Full version.
         */
        readonly serviceType?: string | ros.IResolvable;
        /**
         * @Property auditLogSwitchSource: The request source for the audit log is set to Console.
         */
        readonly auditLogSwitchSource?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AuditPolicyOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `AuditPolicyOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_AuditPolicyOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.storagePeriod && (typeof properties.storagePeriod) !== 'object') {
        errors.collect(ros.propertyValidator('storagePeriod', ros.validateRange)({
            data: properties.storagePeriod,
            min: 1,
            max: 365,
          }));
    }
    errors.collect(ros.propertyValidator('storagePeriod', ros.validateNumber)(properties.storagePeriod));
    errors.collect(ros.propertyValidator('auditStatus', ros.requiredValidator)(properties.auditStatus));
    if(properties.auditStatus && (typeof properties.auditStatus) !== 'object') {
        errors.collect(ros.propertyValidator('auditStatus', ros.validateAllowedValues)({
          data: properties.auditStatus,
          allowedValues: ["enable","disabled","Enable","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('auditStatus', ros.validateString)(properties.auditStatus));
    if(properties.serviceType && (typeof properties.serviceType) !== 'object') {
        errors.collect(ros.propertyValidator('serviceType', ros.validateAllowedValues)({
          data: properties.serviceType,
          allowedValues: ["Trial","Standard"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceType', ros.validateString)(properties.serviceType));
    if(properties.auditLogSwitchSource && (typeof properties.auditLogSwitchSource) !== 'object') {
        errors.collect(ros.propertyValidator('auditLogSwitchSource', ros.validateAllowedValues)({
          data: properties.auditLogSwitchSource,
          allowedValues: ["Console"],
        }));
    }
    errors.collect(ros.propertyValidator('auditLogSwitchSource', ros.validateString)(properties.auditLogSwitchSource));
    return errors.wrap('supplied properties not correct for "AuditPolicyOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.AuditPolicyOptions` resource
 *
 * @param properties - the TypeScript properties of a `AuditPolicyOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.AuditPolicyOptions` resource.
 */
// @ts-ignore TS6133
function rosInstanceAuditPolicyOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_AuditPolicyOptionsPropertyValidator(properties).assertSuccess();
    return {
      'StoragePeriod': ros.numberToRosTemplate(properties.storagePeriod),
      'AuditStatus': ros.stringToRosTemplate(properties.auditStatus),
      'ServiceType': ros.stringToRosTemplate(properties.serviceType),
      'AuditLogSwitchSource': ros.stringToRosTemplate(properties.auditLogSwitchSource),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface BackupPolicyOptionsProperty {
        /**
         * @Property highFrequencyBackupRetention: High-frequency backup retention period, unit: days.
         */
        readonly highFrequencyBackupRetention?: number | ros.IResolvable;
        /**
         * @Property preferredBackupTime: Preferred backup time.
         */
        readonly preferredBackupTime?: string | ros.IResolvable;
        /**
         * @Property backupRetentionPolicyOnClusterDeletion: Backup Retention Policy. Values:
     * - 0: Immediately delete all backup sets of the instance upon release.
     * - 1: Automatically back up the instance upon release, and retain the backup set long-term.
     * - 2: Automatically back up the instance upon release, and retain all backup sets of the cluster long-term.
         */
        readonly backupRetentionPolicyOnClusterDeletion?: number | ros.IResolvable;
        /**
         * @Property crossBackupPeriod: Off-site backup cycle, values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.When passing multiple values, please use commas (,).
         */
        readonly crossBackupPeriod?: string | ros.IResolvable;
        /**
         * @Property preferredBackupPeriod: Backup cycle, values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. When passing multiple values, please use commas (,).
         */
        readonly preferredBackupPeriod?: string | ros.IResolvable;
        /**
         * @Property crossLogRetentionType: Cross-region backup log retention type:
     * - delay: retain for a period of time
     * - never: does not expire
         */
        readonly crossLogRetentionType?: string | ros.IResolvable;
        /**
         * @Property logBackupRetentionPeriod: Retention period of log backup data. Unit: days.
         */
        readonly logBackupRetentionPeriod?: number | ros.IResolvable;
        /**
         * @Property crossRetentionValue: Off-site backup retention value.
         */
        readonly crossRetentionValue?: number | ros.IResolvable;
        /**
         * @Property crossBackupType: Off-site backup operation policy:
     * - update: Modify the off-site backup policy
     * - delete: Delete the off-site backup policy
         */
        readonly crossBackupType?: string | ros.IResolvable;
        /**
         * @Property srcRegion: Source region of off-site backup.
         */
        readonly srcRegion?: string | ros.IResolvable;
        /**
         * @Property crossRetentionType: Off-site backup retention type:
     * - delay: retain for a period of time
     * - never: does not expire
         */
        readonly crossRetentionType?: string | ros.IResolvable;
        /**
         * @Property crossLogRetentionValue: Cross-region backup log retention value.
         */
        readonly crossLogRetentionValue?: number | ros.IResolvable;
        /**
         * @Property enableCrossLogBackup: Enable cross-region backup log. Values:
     * - 1: Enabled (Requires 1 for sharded clusters; requires 1 for replica sets to support point-in-time recovery)
     * - 0: Disabled
         */
        readonly enableCrossLogBackup?: number | ros.IResolvable;
        /**
         * @Property preserveOneEachHour: Whether to preserve one backup per hour.
         */
        readonly preserveOneEachHour?: boolean | ros.IResolvable;
        /**
         * @Property snapshotBackupType: Snapshot backup type, values:
     * - Flash: Second-level backup.
     * - Standard: Regular backup (default).
         */
        readonly snapshotBackupType?: string | ros.IResolvable;
        /**
         * @Property enableBackupLog: Whether to enable log backup: 1: Enabled; 0: Not enabled.
         */
        readonly enableBackupLog?: number | ros.IResolvable;
        /**
         * @Property backupRetentionPeriod: Retention period of backup data. Unit: days.
         */
        readonly backupRetentionPeriod?: number | ros.IResolvable;
        /**
         * @Property instanceType: Instance type:
     * - replica: replica set
     * - sharding: sharded cluster
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property destRegion: Destination region of off-site backup.
         */
        readonly destRegion?: string | ros.IResolvable;
        /**
         * @Property backupInterval: High-frequency backup frequency, with the following values:
     * - -1: High-frequency backup not enabled.
     * - 30: Every 30 minutes.
     * - 60: Every 1 hour.
     * - 120: Every 2 hours.
     * - 180: Every 3 hours.
     * - 240: Every 4 hours.
     * - 360: Every 6 hours.
     * - 480: Every 8 hours.
     * - 720: Every 12 hours.
         */
        readonly backupInterval?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BackupPolicyOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `BackupPolicyOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_BackupPolicyOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('highFrequencyBackupRetention', ros.validateNumber)(properties.highFrequencyBackupRetention));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    if(properties.backupRetentionPolicyOnClusterDeletion && (typeof properties.backupRetentionPolicyOnClusterDeletion) !== 'object') {
        errors.collect(ros.propertyValidator('backupRetentionPolicyOnClusterDeletion', ros.validateAllowedValues)({
          data: properties.backupRetentionPolicyOnClusterDeletion,
          allowedValues: [0,1,2],
        }));
    }
    errors.collect(ros.propertyValidator('backupRetentionPolicyOnClusterDeletion', ros.validateNumber)(properties.backupRetentionPolicyOnClusterDeletion));
    errors.collect(ros.propertyValidator('crossBackupPeriod', ros.validateString)(properties.crossBackupPeriod));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.validateString)(properties.preferredBackupPeriod));
    if(properties.crossLogRetentionType && (typeof properties.crossLogRetentionType) !== 'object') {
        errors.collect(ros.propertyValidator('crossLogRetentionType', ros.validateAllowedValues)({
          data: properties.crossLogRetentionType,
          allowedValues: ["delay","never"],
        }));
    }
    errors.collect(ros.propertyValidator('crossLogRetentionType', ros.validateString)(properties.crossLogRetentionType));
    if(properties.logBackupRetentionPeriod && (typeof properties.logBackupRetentionPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('logBackupRetentionPeriod', ros.validateRange)({
            data: properties.logBackupRetentionPeriod,
            min: 7,
            max: 730,
          }));
    }
    errors.collect(ros.propertyValidator('logBackupRetentionPeriod', ros.validateNumber)(properties.logBackupRetentionPeriod));
    if(properties.crossRetentionValue && (typeof properties.crossRetentionValue) !== 'object') {
        errors.collect(ros.propertyValidator('crossRetentionValue', ros.validateRange)({
            data: properties.crossRetentionValue,
            min: 3,
            max: 1825,
          }));
    }
    errors.collect(ros.propertyValidator('crossRetentionValue', ros.validateNumber)(properties.crossRetentionValue));
    if(properties.crossBackupType && (typeof properties.crossBackupType) !== 'object') {
        errors.collect(ros.propertyValidator('crossBackupType', ros.validateAllowedValues)({
          data: properties.crossBackupType,
          allowedValues: ["update","delete"],
        }));
    }
    errors.collect(ros.propertyValidator('crossBackupType', ros.validateString)(properties.crossBackupType));
    errors.collect(ros.propertyValidator('srcRegion', ros.validateString)(properties.srcRegion));
    if(properties.crossRetentionType && (typeof properties.crossRetentionType) !== 'object') {
        errors.collect(ros.propertyValidator('crossRetentionType', ros.validateAllowedValues)({
          data: properties.crossRetentionType,
          allowedValues: ["delay","never"],
        }));
    }
    errors.collect(ros.propertyValidator('crossRetentionType', ros.validateString)(properties.crossRetentionType));
    if(properties.crossLogRetentionValue && (typeof properties.crossLogRetentionValue) !== 'object') {
        errors.collect(ros.propertyValidator('crossLogRetentionValue', ros.validateRange)({
            data: properties.crossLogRetentionValue,
            min: 3,
            max: 1825,
          }));
    }
    errors.collect(ros.propertyValidator('crossLogRetentionValue', ros.validateNumber)(properties.crossLogRetentionValue));
    if(properties.enableCrossLogBackup && (typeof properties.enableCrossLogBackup) !== 'object') {
        errors.collect(ros.propertyValidator('enableCrossLogBackup', ros.validateAllowedValues)({
          data: properties.enableCrossLogBackup,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('enableCrossLogBackup', ros.validateNumber)(properties.enableCrossLogBackup));
    errors.collect(ros.propertyValidator('preserveOneEachHour', ros.validateBoolean)(properties.preserveOneEachHour));
    if(properties.snapshotBackupType && (typeof properties.snapshotBackupType) !== 'object') {
        errors.collect(ros.propertyValidator('snapshotBackupType', ros.validateAllowedValues)({
          data: properties.snapshotBackupType,
          allowedValues: ["Flash","Standard"],
        }));
    }
    errors.collect(ros.propertyValidator('snapshotBackupType', ros.validateString)(properties.snapshotBackupType));
    if(properties.enableBackupLog && (typeof properties.enableBackupLog) !== 'object') {
        errors.collect(ros.propertyValidator('enableBackupLog', ros.validateAllowedValues)({
          data: properties.enableBackupLog,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('enableBackupLog', ros.validateNumber)(properties.enableBackupLog));
    errors.collect(ros.propertyValidator('backupRetentionPeriod', ros.validateNumber)(properties.backupRetentionPeriod));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["replica","sharding"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('destRegion', ros.validateString)(properties.destRegion));
    if(properties.backupInterval && (typeof properties.backupInterval) !== 'object') {
        errors.collect(ros.propertyValidator('backupInterval', ros.validateAllowedValues)({
          data: properties.backupInterval,
          allowedValues: [-1,30,60,120,180,240,360,480,720],
        }));
    }
    errors.collect(ros.propertyValidator('backupInterval', ros.validateNumber)(properties.backupInterval));
    return errors.wrap('supplied properties not correct for "BackupPolicyOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.BackupPolicyOptions` resource
 *
 * @param properties - the TypeScript properties of a `BackupPolicyOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.BackupPolicyOptions` resource.
 */
// @ts-ignore TS6133
function rosInstanceBackupPolicyOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_BackupPolicyOptionsPropertyValidator(properties).assertSuccess();
    return {
      'HighFrequencyBackupRetention': ros.numberToRosTemplate(properties.highFrequencyBackupRetention),
      'PreferredBackupTime': ros.stringToRosTemplate(properties.preferredBackupTime),
      'BackupRetentionPolicyOnClusterDeletion': ros.numberToRosTemplate(properties.backupRetentionPolicyOnClusterDeletion),
      'CrossBackupPeriod': ros.stringToRosTemplate(properties.crossBackupPeriod),
      'PreferredBackupPeriod': ros.stringToRosTemplate(properties.preferredBackupPeriod),
      'CrossLogRetentionType': ros.stringToRosTemplate(properties.crossLogRetentionType),
      'LogBackupRetentionPeriod': ros.numberToRosTemplate(properties.logBackupRetentionPeriod),
      'CrossRetentionValue': ros.numberToRosTemplate(properties.crossRetentionValue),
      'CrossBackupType': ros.stringToRosTemplate(properties.crossBackupType),
      'SrcRegion': ros.stringToRosTemplate(properties.srcRegion),
      'CrossRetentionType': ros.stringToRosTemplate(properties.crossRetentionType),
      'CrossLogRetentionValue': ros.numberToRosTemplate(properties.crossLogRetentionValue),
      'EnableCrossLogBackup': ros.numberToRosTemplate(properties.enableCrossLogBackup),
      'PreserveOneEachHour': ros.booleanToRosTemplate(properties.preserveOneEachHour),
      'SnapshotBackupType': ros.stringToRosTemplate(properties.snapshotBackupType),
      'EnableBackupLog': ros.numberToRosTemplate(properties.enableBackupLog),
      'BackupRetentionPeriod': ros.numberToRosTemplate(properties.backupRetentionPeriod),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'DestRegion': ros.stringToRosTemplate(properties.destRegion),
      'BackupInterval': ros.numberToRosTemplate(properties.backupInterval),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface PrivateConnectionsProperty {
        /**
         * @Property replicaConnections: Replica private connections
         */
        readonly replicaConnections: Array<RosInstance.ReplicaConnectionsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PrivateConnectionsProperty`
 *
 * @param properties - the TypeScript properties of a `PrivateConnectionsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_PrivateConnectionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replicaConnections', ros.requiredValidator)(properties.replicaConnections));
    if(properties.replicaConnections && (Array.isArray(properties.replicaConnections) || (typeof properties.replicaConnections) === 'string')) {
        errors.collect(ros.propertyValidator('replicaConnections', ros.validateLength)({
            data: properties.replicaConnections.length,
            min: 1,
            max: 6,
          }));
    }
    errors.collect(ros.propertyValidator('replicaConnections', ros.listValidator(RosInstance_ReplicaConnectionsPropertyValidator))(properties.replicaConnections));
    return errors.wrap('supplied properties not correct for "PrivateConnectionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.PrivateConnections` resource
 *
 * @param properties - the TypeScript properties of a `PrivateConnectionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.PrivateConnections` resource.
 */
// @ts-ignore TS6133
function rosInstancePrivateConnectionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_PrivateConnectionsPropertyValidator(properties).assertSuccess();
    return {
      'ReplicaConnections': ros.listMapper(rosInstanceReplicaConnectionsPropertyToRosTemplate)(properties.replicaConnections),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface ReplicaConnectionsProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for MongoDB instance. Valid values: 1000 to 65535.
         */
        readonly connectionPort?: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the connection string. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ReplicaConnectionsProperty`
 *
 * @param properties - the TypeScript properties of a `ReplicaConnectionsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_ReplicaConnectionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.connectionPort && (typeof properties.connectionPort) !== 'object') {
        errors.collect(ros.propertyValidator('connectionPort', ros.validateRange)({
            data: properties.connectionPort,
            min: 1000,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('connectionPort', ros.validateNumber)(properties.connectionPort));
    errors.collect(ros.propertyValidator('connectionString', ros.requiredValidator)(properties.connectionString));
    if(properties.connectionString && (typeof properties.connectionString) !== 'object') {
        errors.collect(ros.propertyValidator('connectionString', ros.validateAllowedPattern)({
          data: properties.connectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    return errors.wrap('supplied properties not correct for "ReplicaConnectionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.ReplicaConnections` resource
 *
 * @param properties - the TypeScript properties of a `ReplicaConnectionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.ReplicaConnections` resource.
 */
// @ts-ignore TS6133
function rosInstanceReplicaConnectionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_ReplicaConnectionsPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPort': ros.numberToRosTemplate(properties.connectionPort),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface SSLOptionsProperty {
        /**
         * @Property forceEncryption: Whether to force SSL encryption on the connection: 1: Force SSL encryption; 0: Do not force SSL encryption.
         */
        readonly forceEncryption?: number | ros.IResolvable;
        /**
         * @Property switchMode: The timeframe for modifying the MongoDB instance's SSL configuration. Valid values:
     * - 0: Modify immediately. 
     * - 1: Modify within the manageable timeframe.
         */
        readonly switchMode?: number | ros.IResolvable;
        /**
         * @Property sslAction: SSL action.
         */
        readonly sslAction: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SSLOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `SSLOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_SSLOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.forceEncryption && (typeof properties.forceEncryption) !== 'object') {
        errors.collect(ros.propertyValidator('forceEncryption', ros.validateAllowedValues)({
          data: properties.forceEncryption,
          allowedValues: [1,0],
        }));
    }
    errors.collect(ros.propertyValidator('forceEncryption', ros.validateNumber)(properties.forceEncryption));
    if(properties.switchMode && (typeof properties.switchMode) !== 'object') {
        errors.collect(ros.propertyValidator('switchMode', ros.validateAllowedValues)({
          data: properties.switchMode,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('switchMode', ros.validateNumber)(properties.switchMode));
    errors.collect(ros.propertyValidator('sslAction', ros.requiredValidator)(properties.sslAction));
    if(properties.sslAction && (typeof properties.sslAction) !== 'object') {
        errors.collect(ros.propertyValidator('sslAction', ros.validateAllowedValues)({
          data: properties.sslAction,
          allowedValues: ["Open","Close","Update"],
        }));
    }
    errors.collect(ros.propertyValidator('sslAction', ros.validateString)(properties.sslAction));
    return errors.wrap('supplied properties not correct for "SSLOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.SSLOptions` resource
 *
 * @param properties - the TypeScript properties of a `SSLOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.SSLOptions` resource.
 */
// @ts-ignore TS6133
function rosInstanceSSLOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_SSLOptionsPropertyValidator(properties).assertSuccess();
    return {
      'ForceEncryption': ros.numberToRosTemplate(properties.forceEncryption),
      'SwitchMode': ros.numberToRosTemplate(properties.switchMode),
      'SSLAction': ros.stringToRosTemplate(properties.sslAction),
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.Tags` resource.
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

/**
 * Properties for defining a `RosPrivateSrvNetworkAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
 */
export interface RosPrivateSrvNetworkAddressProps {

    /**
     * @Property dbInstanceId: The instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrivateSrvNetworkAddressProps`
 *
 * @param properties - the TypeScript properties of a `RosPrivateSrvNetworkAddressProps`
 *
 * @returns the result of the validation.
 */
function RosPrivateSrvNetworkAddressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    return errors.wrap('supplied properties not correct for "RosPrivateSrvNetworkAddressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::PrivateSrvNetworkAddress` resource
 *
 * @param properties - the TypeScript properties of a `RosPrivateSrvNetworkAddressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::PrivateSrvNetworkAddress` resource.
 */
// @ts-ignore TS6133
function rosPrivateSrvNetworkAddressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrivateSrvNetworkAddressPropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::PrivateSrvNetworkAddress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrivateSrvNetworkAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
 */
export class RosPrivateSrvNetworkAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::PrivateSrvNetworkAddress";

    /**
     * @Attribute PrivateSrvConnectionStringUri: Private network SRV highly available connection address.
     */
    public readonly attrPrivateSrvConnectionStringUri: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The instance ID.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrivateSrvNetworkAddressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrivateSrvNetworkAddress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPrivateSrvConnectionStringUri = this.getAtt('PrivateSrvConnectionStringUri');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrivateSrvNetworkAddressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosShardingInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
 */
export interface RosShardingInstanceProps {

    /**
     * @Property configServer:
     */
    readonly configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property mongos:
     */
    readonly mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property replicaSet:
     */
    readonly replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database instance version.
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    readonly hiddenZoneId?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    readonly protocolType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string | ros.IResolvable;

    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;

    /**
     * @Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    readonly securityIpArray?: string | ros.IResolvable;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string | ros.IResolvable;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string | ros.IResolvable;

    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    readonly storageType?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosShardingInstance.TagsProperty[];

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosShardingInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosShardingInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosShardingInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tdeStatus', ros.validateBoolean)(properties.tdeStatus));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('hiddenZoneId', ros.validateString)(properties.hiddenZoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('securityIpArray', ros.validateString)(properties.securityIpArray));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('mongos', ros.requiredValidator)(properties.mongos));
    if(properties.mongos && (Array.isArray(properties.mongos) || (typeof properties.mongos) === 'string')) {
        errors.collect(ros.propertyValidator('mongos', ros.validateLength)({
            data: properties.mongos.length,
            min: 2,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('mongos', ros.listValidator(RosShardingInstance_MongosPropertyValidator))(properties.mongos));
    if(properties.storageEngine && (typeof properties.storageEngine) !== 'object') {
        errors.collect(ros.propertyValidator('storageEngine', ros.validateAllowedValues)({
          data: properties.storageEngine,
          allowedValues: ["WiredTiger","RocksDB","TerarkDB"],
        }));
    }
    errors.collect(ros.propertyValidator('storageEngine', ros.validateString)(properties.storageEngine));
    errors.collect(ros.propertyValidator('secondaryZoneId', ros.validateString)(properties.secondaryZoneId));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('restoreTime', ros.validateString)(properties.restoreTime));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if(properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
          data: properties.protocolType,
          allowedValues: ["mongodb","dynamodb"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    errors.collect(ros.propertyValidator('configServer', ros.requiredValidator)(properties.configServer));
    if(properties.configServer && (Array.isArray(properties.configServer) || (typeof properties.configServer) === 'string')) {
        errors.collect(ros.propertyValidator('configServer', ros.validateLength)({
            data: properties.configServer.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('configServer', ros.listValidator(RosShardingInstance_ConfigServerPropertyValidator))(properties.configServer));
    errors.collect(ros.propertyValidator('srcDbInstanceId', ros.validateString)(properties.srcDbInstanceId));
    errors.collect(ros.propertyValidator('replicaSet', ros.requiredValidator)(properties.replicaSet));
    if(properties.replicaSet && (Array.isArray(properties.replicaSet) || (typeof properties.replicaSet) === 'string')) {
        errors.collect(ros.propertyValidator('replicaSet', ros.validateLength)({
            data: properties.replicaSet.length,
            min: 2,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('replicaSet', ros.listValidator(RosShardingInstance_ReplicaSetPropertyValidator))(properties.replicaSet));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosShardingInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosShardingInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosShardingInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance` resource.
 */
// @ts-ignore TS6133
function rosShardingInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosShardingInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'ConfigServer': ros.listMapper(rosShardingInstanceConfigServerPropertyToRosTemplate)(properties.configServer),
      'Mongos': ros.listMapper(rosShardingInstanceMongosPropertyToRosTemplate)(properties.mongos),
      'ReplicaSet': ros.listMapper(rosShardingInstanceReplicaSetPropertyToRosTemplate)(properties.replicaSet),
      'AccountPassword': ros.stringToRosTemplate(properties.accountPassword),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'DBInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'HiddenZoneId': ros.stringToRosTemplate(properties.hiddenZoneId),
      'Period': ros.numberToRosTemplate(properties.period),
      'ProtocolType': ros.stringToRosTemplate(properties.protocolType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RestoreTime': ros.stringToRosTemplate(properties.restoreTime),
      'SecondaryZoneId': ros.stringToRosTemplate(properties.secondaryZoneId),
      'SecurityIPArray': ros.stringToRosTemplate(properties.securityIpArray),
      'SrcDBInstanceId': ros.stringToRosTemplate(properties.srcDbInstanceId),
      'StorageEngine': ros.stringToRosTemplate(properties.storageEngine),
      'StorageType': ros.stringToRosTemplate(properties.storageType),
      'Tags': ros.listMapper(rosShardingInstanceTagsPropertyToRosTemplate)(properties.tags),
      'TDEStatus': ros.booleanToRosTemplate(properties.tdeStatus),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::ShardingInstance`, which is used to create or clone an ApsaraDB for MongoDB sharded cluster instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ShardingInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
 */
export class RosShardingInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ShardingInstance";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: ros.IResolvable;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configServer:
     */
    public configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property mongos:
     */
    public mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property replicaSet:
     */
    public replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    public accountPassword: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: Database instance version.
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    public hiddenZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    public protocolType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    public restoreTime: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    public secondaryZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    public securityIpArray: string | ros.IResolvable | undefined;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    public srcDbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    public storageEngine: string | ros.IResolvable | undefined;

    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    public storageType: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosShardingInstance.TagsProperty[] | undefined;

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    public tdeStatus: boolean | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosShardingInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosShardingInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDbInstanceStatus = this.getAtt('DBInstanceStatus');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configServer = props.configServer;
        this.mongos = props.mongos;
        this.replicaSet = props.replicaSet;
        this.accountPassword = props.accountPassword;
        this.autoRenew = props.autoRenew;
        this.chargeType = props.chargeType;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.engineVersion = props.engineVersion;
        this.hiddenZoneId = props.hiddenZoneId;
        this.period = props.period;
        this.protocolType = props.protocolType;
        this.resourceGroupId = props.resourceGroupId;
        this.restoreTime = props.restoreTime;
        this.secondaryZoneId = props.secondaryZoneId;
        this.securityIpArray = props.securityIpArray;
        this.srcDbInstanceId = props.srcDbInstanceId;
        this.storageEngine = props.storageEngine;
        this.storageType = props.storageType;
        this.tags = props.tags;
        this.tdeStatus = props.tdeStatus;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configServer: this.configServer,
            mongos: this.mongos,
            replicaSet: this.replicaSet,
            accountPassword: this.accountPassword,
            autoRenew: this.autoRenew,
            chargeType: this.chargeType,
            dbInstanceDescription: this.dbInstanceDescription,
            engineVersion: this.engineVersion,
            hiddenZoneId: this.hiddenZoneId,
            period: this.period,
            protocolType: this.protocolType,
            resourceGroupId: this.resourceGroupId,
            restoreTime: this.restoreTime,
            secondaryZoneId: this.secondaryZoneId,
            securityIpArray: this.securityIpArray,
            srcDbInstanceId: this.srcDbInstanceId,
            storageEngine: this.storageEngine,
            storageType: this.storageType,
            tags: this.tags,
            tdeStatus: this.tdeStatus,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosShardingInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosShardingInstance {
    /**
     * @stability external
     */
    export interface ConfigServerProperty {
        /**
         * @Property storage: The storage space of config server. Valid value: 20. Unit: GB.
         */
        readonly storage: number | ros.IResolvable;
        /**
         * @Property class: The specification of config server.
         */
        readonly class: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigServerProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigServerProperty`
 *
 * @returns the result of the validation.
 */
function RosShardingInstance_ConfigServerPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storage', ros.requiredValidator)(properties.storage));
    errors.collect(ros.propertyValidator('storage', ros.validateNumber)(properties.storage));
    errors.collect(ros.propertyValidator('class', ros.requiredValidator)(properties.class));
    errors.collect(ros.propertyValidator('class', ros.validateString)(properties.class));
    return errors.wrap('supplied properties not correct for "ConfigServerProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.ConfigServer` resource
 *
 * @param properties - the TypeScript properties of a `ConfigServerProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.ConfigServer` resource.
 */
// @ts-ignore TS6133
function rosShardingInstanceConfigServerPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosShardingInstance_ConfigServerPropertyValidator(properties).assertSuccess();
    return {
      'Storage': ros.numberToRosTemplate(properties.storage),
      'Class': ros.stringToRosTemplate(properties.class),
    };
}

export namespace RosShardingInstance {
    /**
     * @stability external
     */
    export interface MongosProperty {
        /**
         * @Property class: The specification of mongo.
         */
        readonly class: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MongosProperty`
 *
 * @param properties - the TypeScript properties of a `MongosProperty`
 *
 * @returns the result of the validation.
 */
function RosShardingInstance_MongosPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('class', ros.requiredValidator)(properties.class));
    errors.collect(ros.propertyValidator('class', ros.validateString)(properties.class));
    return errors.wrap('supplied properties not correct for "MongosProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.Mongos` resource
 *
 * @param properties - the TypeScript properties of a `MongosProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.Mongos` resource.
 */
// @ts-ignore TS6133
function rosShardingInstanceMongosPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosShardingInstance_MongosPropertyValidator(properties).assertSuccess();
    return {
      'Class': ros.stringToRosTemplate(properties.class),
    };
}

export namespace RosShardingInstance {
    /**
     * @stability external
     */
    export interface ReplicaSetProperty {
        /**
         * @Property storage: The storage space of shard.
     * Valid values: 10 to 2000. Unit: GB.
     * You can only specify this value in 10 GB increments.
         */
        readonly storage: number | ros.IResolvable;
        /**
         * @Property readonlyReplicas: The number of read-only nodes in shard node.
         */
        readonly readonlyReplicas?: number | ros.IResolvable;
        /**
         * @Property class: The specification of shard.
         */
        readonly class: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ReplicaSetProperty`
 *
 * @param properties - the TypeScript properties of a `ReplicaSetProperty`
 *
 * @returns the result of the validation.
 */
function RosShardingInstance_ReplicaSetPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storage', ros.requiredValidator)(properties.storage));
    errors.collect(ros.propertyValidator('storage', ros.validateNumber)(properties.storage));
    if(properties.readonlyReplicas && (typeof properties.readonlyReplicas) !== 'object') {
        errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateRange)({
            data: properties.readonlyReplicas,
            min: 0,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateNumber)(properties.readonlyReplicas));
    errors.collect(ros.propertyValidator('class', ros.requiredValidator)(properties.class));
    errors.collect(ros.propertyValidator('class', ros.validateString)(properties.class));
    return errors.wrap('supplied properties not correct for "ReplicaSetProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.ReplicaSet` resource
 *
 * @param properties - the TypeScript properties of a `ReplicaSetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.ReplicaSet` resource.
 */
// @ts-ignore TS6133
function rosShardingInstanceReplicaSetPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosShardingInstance_ReplicaSetPropertyValidator(properties).assertSuccess();
    return {
      'Storage': ros.numberToRosTemplate(properties.storage),
      'ReadonlyReplicas': ros.numberToRosTemplate(properties.readonlyReplicas),
      'Class': ros.stringToRosTemplate(properties.class),
    };
}

export namespace RosShardingInstance {
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
function RosShardingInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosShardingInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosShardingInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosShardingNetworkPrivateAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
 */
export interface RosShardingNetworkPrivateAddressProps {

    /**
     * @Property dbInstanceId: The ID of the Shard cluster instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
     * > You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
     */
    readonly nodeId: string | ros.IResolvable;

    /**
     * @Property accountName: Account name.
     * >- starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.
     * - Only when you apply for the Shard\/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
     * - The permissions of this account are fixed to read-only.
     */
    readonly accountName?: string | ros.IResolvable;

    /**
     * @Property accountPassword: Account password.
     * - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
     * - The password length is 8-32 bits.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs.
     * > You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosShardingNetworkPrivateAddressProps`
 *
 * @param properties - the TypeScript properties of a `RosShardingNetworkPrivateAddressProps`
 *
 * @returns the result of the validation.
 */
function RosShardingNetworkPrivateAddressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('nodeId', ros.requiredValidator)(properties.nodeId));
    errors.collect(ros.propertyValidator('nodeId', ros.validateString)(properties.nodeId));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosShardingNetworkPrivateAddressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingNetworkPrivateAddress` resource
 *
 * @param properties - the TypeScript properties of a `RosShardingNetworkPrivateAddressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingNetworkPrivateAddress` resource.
 */
// @ts-ignore TS6133
function rosShardingNetworkPrivateAddressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosShardingNetworkPrivateAddressPropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'NodeId': ros.stringToRosTemplate(properties.nodeId),
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'AccountPassword': ros.stringToRosTemplate(properties.accountPassword),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::ShardingNetworkPrivateAddress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ShardingNetworkPrivateAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
 */
export class RosShardingNetworkPrivateAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ShardingNetworkPrivateAddress";

    /**
     * @Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.
     */
    public readonly attrCompatibleConnections: ros.IResolvable;

    /**
     * @Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
     */
    public readonly attrNetworkAddresses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the Shard cluster instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
     * > You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
     */
    public nodeId: string | ros.IResolvable;

    /**
     * @Property accountName: Account name.
     * >- starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.
     * - Only when you apply for the Shard\/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
     * - The permissions of this account are fixed to read-only.
     */
    public accountName: string | ros.IResolvable | undefined;

    /**
     * @Property accountPassword: Account password.
     * - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
     * - The password length is 8-32 bits.
     */
    public accountPassword: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs.
     * > You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosShardingNetworkPrivateAddressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosShardingNetworkPrivateAddress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCompatibleConnections = this.getAtt('CompatibleConnections');
        this.attrNetworkAddresses = this.getAtt('NetworkAddresses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.nodeId = props.nodeId;
        this.accountName = props.accountName;
        this.accountPassword = props.accountPassword;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            nodeId: this.nodeId,
            accountName: this.accountName,
            accountPassword: this.accountPassword,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosShardingNetworkPrivateAddressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosShardingNetworkPublicAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
 */
export interface RosShardingNetworkPublicAddressProps {

    /**
     * @Property dbInstanceId: The ID of the instance.
     * > you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
     * > This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
     */
    readonly nodeId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosShardingNetworkPublicAddressProps`
 *
 * @param properties - the TypeScript properties of a `RosShardingNetworkPublicAddressProps`
 *
 * @returns the result of the validation.
 */
function RosShardingNetworkPublicAddressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('nodeId', ros.validateString)(properties.nodeId));
    return errors.wrap('supplied properties not correct for "RosShardingNetworkPublicAddressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingNetworkPublicAddress` resource
 *
 * @param properties - the TypeScript properties of a `RosShardingNetworkPublicAddressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingNetworkPublicAddress` resource.
 */
// @ts-ignore TS6133
function rosShardingNetworkPublicAddressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosShardingNetworkPublicAddressPropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'NodeId': ros.stringToRosTemplate(properties.nodeId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::ShardingNetworkPublicAddress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ShardingNetworkPublicAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
 */
export class RosShardingNetworkPublicAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ShardingNetworkPublicAddress";

    /**
     * @Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
     */
    public readonly attrNetworkAddresses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the instance.
     * > you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
     * > This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
     */
    public nodeId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosShardingNetworkPublicAddressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosShardingNetworkPublicAddress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkAddresses = this.getAtt('NetworkAddresses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.nodeId = props.nodeId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            nodeId: this.nodeId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosShardingNetworkPublicAddressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
