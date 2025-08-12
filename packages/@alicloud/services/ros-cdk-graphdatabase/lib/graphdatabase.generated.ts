// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
 */
export interface RosAccountProps {

    /**
     * @Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: Account password.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountDescription: Account description.
     */
    readonly accountDescription?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountDescription', ros.validateString)(properties.accountDescription));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('accountPassword', ros.requiredValidator)(properties.accountPassword));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'AccountPassword': ros.stringToRosTemplate(properties.accountPassword),
      'DbInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'AccountDescription': ros.stringToRosTemplate(properties.accountDescription),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GraphDatabase::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GraphDatabase::Account";

    /**
     * @Attribute AccountDescription: Account description.
     */
    public readonly attrAccountDescription: ros.IResolvable;

    /**
     * @Attribute AccountName: Account name.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * @Attribute AccountType: Account Type.
     */
    public readonly attrAccountType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: Account name.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: Account password.
     */
    public accountPassword: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: Instance Id.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountDescription: Account description.
     */
    public accountDescription: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountDescription = this.getAtt('AccountDescription');
        this.attrAccountName = this.getAtt('AccountName');
        this.attrAccountType = this.getAtt('AccountType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPassword = props.accountPassword;
        this.dbInstanceId = props.dbInstanceId;
        this.accountDescription = props.accountDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPassword: this.accountPassword,
            dbInstanceId: this.dbInstanceId,
            accountDescription: this.accountDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDbInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
 */
export interface RosDbInstanceProps {

    /**
     * @Property dbInstanceCategory: The category of the db instance.
     */
    readonly dbInstanceCategory: string | ros.IResolvable;

    /**
     * @Property dbInstanceNetworkType: The network type of the db instance.
     */
    readonly dbInstanceNetworkType: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorageType: Instance storage type, Valid values:
     * - cloud_essd.
     */
    readonly dbInstanceStorageType: string | ros.IResolvable;

    /**
     * @Property dbNodeClass: The class of the db node. Valid values:
     * gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
     */
    readonly dbNodeClass: string | ros.IResolvable;

    /**
     * @Property dbNodeStorage: Instance storage space, which is measured in GB. The minimum storage space is 20 GB and the step size is 10GB.
     */
    readonly dbNodeStorage: number | ros.IResolvable;

    /**
     * @Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
     */
    readonly dbVersion: string | ros.IResolvable;

    /**
     * @Property backupSetId: Backup set id.
     */
    readonly backupSetId?: string | ros.IResolvable;

    /**
     * @Property createType: The creation method. Valid values:
     * - CreateDBInstance: Create instance
     * - CloneDBInstance: Clone instance
     * - CreateReadDBInstance: Create a read-only instance
     */
    readonly createType?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property dbInstanceIpArray: IP address whitelist for the instance group list.
     */
    readonly dbInstanceIpArray?: Array<RosDbInstance.DBInstanceIPArrayProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ecsSecurityGroupRelations: Security group information array.
     */
    readonly ecsSecurityGroupRelations?: Array<RosDbInstance.EcsSecurityGroupRelationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    readonly maintainTime?: string | ros.IResolvable;

    /**
     * @Property paymentType: The resource attribute field representing the paid type is desirable:
     * - PayAsYouGo: Postpaid.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property restoreType: Restore type.
     */
    readonly restoreType?: string | ros.IResolvable;

    /**
     * @Property sourceDbInstanceId: Source Instance Id.
     */
    readonly sourceDbInstanceId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of db instance.
     */
    readonly tags?: RosDbInstance.TagsProperty[];

    /**
     * @Property vpcId: The vpc id of the db instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vpc switch id of the resource.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: ZoneId.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDbInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDbInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDbInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dbInstanceNetworkType', ros.requiredValidator)(properties.dbInstanceNetworkType));
    if(properties.dbInstanceNetworkType && (typeof properties.dbInstanceNetworkType) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceNetworkType', ros.validateAllowedValues)({
          data: properties.dbInstanceNetworkType,
          allowedValues: ["VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceNetworkType', ros.validateString)(properties.dbInstanceNetworkType));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('ecsSecurityGroupRelations', ros.listValidator(RosDbInstance_EcsSecurityGroupRelationsPropertyValidator))(properties.ecsSecurityGroupRelations));
    errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.requiredValidator)(properties.dbInstanceStorageType));
    errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.validateString)(properties.dbInstanceStorageType));
    errors.collect(ros.propertyValidator('dbNodeStorage', ros.requiredValidator)(properties.dbNodeStorage));
    if(properties.dbNodeStorage && (typeof properties.dbNodeStorage) !== 'object') {
        errors.collect(ros.propertyValidator('dbNodeStorage', ros.validateRange)({
            data: properties.dbNodeStorage,
            min: 20,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dbNodeStorage', ros.validateNumber)(properties.dbNodeStorage));
    errors.collect(ros.propertyValidator('backupSetId', ros.validateString)(properties.backupSetId));
    errors.collect(ros.propertyValidator('dbInstanceCategory', ros.requiredValidator)(properties.dbInstanceCategory));
    if(properties.dbInstanceCategory && (typeof properties.dbInstanceCategory) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceCategory', ros.validateAllowedValues)({
          data: properties.dbInstanceCategory,
          allowedValues: ["ha"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceCategory', ros.validateString)(properties.dbInstanceCategory));
    errors.collect(ros.propertyValidator('sourceDbInstanceId', ros.validateString)(properties.sourceDbInstanceId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbInstanceIpArray', ros.listValidator(RosDbInstance_DBInstanceIPArrayPropertyValidator))(properties.dbInstanceIpArray));
    errors.collect(ros.propertyValidator('dbVersion', ros.requiredValidator)(properties.dbVersion));
    if(properties.dbVersion && (typeof properties.dbVersion) !== 'object') {
        errors.collect(ros.propertyValidator('dbVersion', ros.validateAllowedValues)({
          data: properties.dbVersion,
          allowedValues: ["1.0","1.0-OpenCypher"],
        }));
    }
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    if(properties.createType && (typeof properties.createType) !== 'object') {
        errors.collect(ros.propertyValidator('createType', ros.validateAllowedValues)({
          data: properties.createType,
          allowedValues: ["CreateDBInstance","CloneDBInstance","CreateReadDBInstance"],
        }));
    }
    errors.collect(ros.propertyValidator('createType', ros.validateString)(properties.createType));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.restoreType && (typeof properties.restoreType) !== 'object') {
        errors.collect(ros.propertyValidator('restoreType', ros.validateAllowedValues)({
          data: properties.restoreType,
          allowedValues: ["backup"],
        }));
    }
    errors.collect(ros.propertyValidator('restoreType', ros.validateString)(properties.restoreType));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.requiredValidator)(properties.dbNodeClass));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.validateString)(properties.dbNodeClass));
    errors.collect(ros.propertyValidator('maintainTime', ros.validateString)(properties.maintainTime));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDbInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDbInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::DbInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDbInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::DbInstance` resource.
 */
// @ts-ignore TS6133
function rosDbInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDbInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'DbInstanceCategory': ros.stringToRosTemplate(properties.dbInstanceCategory),
      'DbInstanceNetworkType': ros.stringToRosTemplate(properties.dbInstanceNetworkType),
      'DbInstanceStorageType': ros.stringToRosTemplate(properties.dbInstanceStorageType),
      'DbNodeClass': ros.stringToRosTemplate(properties.dbNodeClass),
      'DbNodeStorage': ros.numberToRosTemplate(properties.dbNodeStorage),
      'DbVersion': ros.stringToRosTemplate(properties.dbVersion),
      'BackupSetId': ros.stringToRosTemplate(properties.backupSetId),
      'CreateType': ros.stringToRosTemplate(properties.createType),
      'DbInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'DBInstanceIPArray': ros.listMapper(rosDbInstanceDBInstanceIPArrayPropertyToRosTemplate)(properties.dbInstanceIpArray),
      'EcsSecurityGroupRelations': ros.listMapper(rosDbInstanceEcsSecurityGroupRelationsPropertyToRosTemplate)(properties.ecsSecurityGroupRelations),
      'MaintainTime': ros.stringToRosTemplate(properties.maintainTime),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RestoreType': ros.stringToRosTemplate(properties.restoreType),
      'SourceDbInstanceId': ros.stringToRosTemplate(properties.sourceDbInstanceId),
      'Tags': ros.listMapper(rosDbInstanceTagsPropertyToRosTemplate)(properties.tags),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GraphDatabase::DbInstance`, which is used to create a Graph Database (GDB) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
 */
export class RosDbInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GraphDatabase::DbInstance";

    /**
     * @Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CurrentMinorVersion: The current kernel image version.
     */
    public readonly attrCurrentMinorVersion: ros.IResolvable;

    /**
     * @Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
     */
    public readonly attrDbInstanceIpArray: ros.IResolvable;

    /**
     * @Attribute DbInstanceCategory: The category of the db instance.
     */
    public readonly attrDbInstanceCategory: ros.IResolvable;

    /**
     * @Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
     */
    public readonly attrDbInstanceCpu: ros.IResolvable;

    /**
     * @Attribute DbInstanceDescription: According to the practical example or notes.
     */
    public readonly attrDbInstanceDescription: ros.IResolvable;

    /**
     * @Attribute DbInstanceId: The first ID of the resource.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DbInstanceMemory: Instance memory, which is measured in MB.
     */
    public readonly attrDbInstanceMemory: ros.IResolvable;

    /**
     * @Attribute DbInstanceNetworkType: The network type of the db instance.
     */
    public readonly attrDbInstanceNetworkType: ros.IResolvable;

    /**
     * @Attribute DbInstanceStorageType: Cloud Disk.
     */
    public readonly attrDbInstanceStorageType: ros.IResolvable;

    /**
     * @Attribute DbInstanceType: The type of the db instance.
     */
    public readonly attrDbInstanceType: ros.IResolvable;

    /**
     * @Attribute DbNodeClass: The class of the db node.
     */
    public readonly attrDbNodeClass: ros.IResolvable;

    /**
     * @Attribute DbNodeCount: The count of the db node.
     */
    public readonly attrDbNodeCount: ros.IResolvable;

    /**
     * @Attribute DbNodeStorage: Instance storage space, which is measured in GB.
     */
    public readonly attrDbNodeStorage: ros.IResolvable;

    /**
     * @Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
     */
    public readonly attrDbVersion: ros.IResolvable;

    /**
     * @Attribute EcsSecurityGroupRelations: Security group information array.
     */
    public readonly attrEcsSecurityGroupRelations: ros.IResolvable;

    /**
     * @Attribute ExpireTime: The instance after it expires time for subscription instance.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * @Attribute Expired: The expire status of the db instance.
     */
    public readonly attrExpired: ros.IResolvable;

    /**
     * @Attribute LatestMinorVersion: The latest kernel image version.
     */
    public readonly attrLatestMinorVersion: ros.IResolvable;

    /**
     * @Attribute LockMode: Instance lock state.
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * @Attribute LockReason: An instance is locked the reason.
     */
    public readonly attrLockReason: ros.IResolvable;

    /**
     * @Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    public readonly attrMaintainTime: ros.IResolvable;

    /**
     * @Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Port: Application Port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: The public connection string ID of the resource.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute PublicPort: The public port ID of the resource.
     */
    public readonly attrPublicPort: ros.IResolvable;

    /**
     * @Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
     */
    public readonly attrReadOnlyDbInstanceIds: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: Resource Group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: resource Tag group.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The vpc switch id of the resource.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The vpc id of the db instance.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneId: ZoneId.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceCategory: The category of the db instance.
     */
    public dbInstanceCategory: string | ros.IResolvable;

    /**
     * @Property dbInstanceNetworkType: The network type of the db instance.
     */
    public dbInstanceNetworkType: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorageType: Instance storage type, Valid values:
     * - cloud_essd.
     */
    public dbInstanceStorageType: string | ros.IResolvable;

    /**
     * @Property dbNodeClass: The class of the db node. Valid values:
     * gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
     */
    public dbNodeClass: string | ros.IResolvable;

    /**
     * @Property dbNodeStorage: Instance storage space, which is measured in GB. The minimum storage space is 20 GB and the step size is 10GB.
     */
    public dbNodeStorage: number | ros.IResolvable;

    /**
     * @Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
     */
    public dbVersion: string | ros.IResolvable;

    /**
     * @Property backupSetId: Backup set id.
     */
    public backupSetId: string | ros.IResolvable | undefined;

    /**
     * @Property createType: The creation method. Valid values:
     * - CreateDBInstance: Create instance
     * - CloneDBInstance: Clone instance
     * - CreateReadDBInstance: Create a read-only instance
     */
    public createType: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceIpArray: IP address whitelist for the instance group list.
     */
    public dbInstanceIpArray: Array<RosDbInstance.DBInstanceIPArrayProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ecsSecurityGroupRelations: Security group information array.
     */
    public ecsSecurityGroupRelations: Array<RosDbInstance.EcsSecurityGroupRelationsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    public maintainTime: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: The resource attribute field representing the paid type is desirable:
     * - PayAsYouGo: Postpaid.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property restoreType: Restore type.
     */
    public restoreType: string | ros.IResolvable | undefined;

    /**
     * @Property sourceDbInstanceId: Source Instance Id.
     */
    public sourceDbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of db instance.
     */
    public tags: RosDbInstance.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The vpc id of the db instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vpc switch id of the resource.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: ZoneId.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDbInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCurrentMinorVersion = this.getAtt('CurrentMinorVersion');
        this.attrDbInstanceIpArray = this.getAtt('DBInstanceIPArray');
        this.attrDbInstanceCategory = this.getAtt('DbInstanceCategory');
        this.attrDbInstanceCpu = this.getAtt('DbInstanceCpu');
        this.attrDbInstanceDescription = this.getAtt('DbInstanceDescription');
        this.attrDbInstanceId = this.getAtt('DbInstanceId');
        this.attrDbInstanceMemory = this.getAtt('DbInstanceMemory');
        this.attrDbInstanceNetworkType = this.getAtt('DbInstanceNetworkType');
        this.attrDbInstanceStorageType = this.getAtt('DbInstanceStorageType');
        this.attrDbInstanceType = this.getAtt('DbInstanceType');
        this.attrDbNodeClass = this.getAtt('DbNodeClass');
        this.attrDbNodeCount = this.getAtt('DbNodeCount');
        this.attrDbNodeStorage = this.getAtt('DbNodeStorage');
        this.attrDbVersion = this.getAtt('DbVersion');
        this.attrEcsSecurityGroupRelations = this.getAtt('EcsSecurityGroupRelations');
        this.attrExpireTime = this.getAtt('ExpireTime');
        this.attrExpired = this.getAtt('Expired');
        this.attrLatestMinorVersion = this.getAtt('LatestMinorVersion');
        this.attrLockMode = this.getAtt('LockMode');
        this.attrLockReason = this.getAtt('LockReason');
        this.attrMaintainTime = this.getAtt('MaintainTime');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPort = this.getAtt('Port');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrPublicPort = this.getAtt('PublicPort');
        this.attrReadOnlyDbInstanceIds = this.getAtt('ReadOnlyDbInstanceIds');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceCategory = props.dbInstanceCategory;
        this.dbInstanceNetworkType = props.dbInstanceNetworkType;
        this.dbInstanceStorageType = props.dbInstanceStorageType;
        this.dbNodeClass = props.dbNodeClass;
        this.dbNodeStorage = props.dbNodeStorage;
        this.dbVersion = props.dbVersion;
        this.backupSetId = props.backupSetId;
        this.createType = props.createType;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceIpArray = props.dbInstanceIpArray;
        this.ecsSecurityGroupRelations = props.ecsSecurityGroupRelations;
        this.maintainTime = props.maintainTime;
        this.paymentType = props.paymentType;
        this.resourceGroupId = props.resourceGroupId;
        this.restoreType = props.restoreType;
        this.sourceDbInstanceId = props.sourceDbInstanceId;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceCategory: this.dbInstanceCategory,
            dbInstanceNetworkType: this.dbInstanceNetworkType,
            dbInstanceStorageType: this.dbInstanceStorageType,
            dbNodeClass: this.dbNodeClass,
            dbNodeStorage: this.dbNodeStorage,
            dbVersion: this.dbVersion,
            backupSetId: this.backupSetId,
            createType: this.createType,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceIpArray: this.dbInstanceIpArray,
            ecsSecurityGroupRelations: this.ecsSecurityGroupRelations,
            maintainTime: this.maintainTime,
            paymentType: this.paymentType,
            resourceGroupId: this.resourceGroupId,
            restoreType: this.restoreType,
            sourceDbInstanceId: this.sourceDbInstanceId,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDbInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDbInstance {
    /**
     * @stability external
     */
    export interface DBInstanceIPArrayProperty {
        /**
         * @Property securityIps: IP address whitelist addresses in the IP address list, and a maximum of 1000 comma-separated format is as follows: 0.0.0.0\/0 and 10.23.12.24(IP) or 10.23.12.24\/24(CIDR mode, CIDR (Classless Inter-Domain Routing)\/24 represents the address prefixes in the length of the range [1,32]).
         */
        readonly securityIps: string | ros.IResolvable;
        /**
         * @Property dbInstanceIpArrayName: IP address whitelist group name.
         */
        readonly dbInstanceIpArrayName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DBInstanceIPArrayProperty`
 *
 * @param properties - the TypeScript properties of a `DBInstanceIPArrayProperty`
 *
 * @returns the result of the validation.
 */
function RosDbInstance_DBInstanceIPArrayPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('securityIps', ros.requiredValidator)(properties.securityIps));
    errors.collect(ros.propertyValidator('securityIps', ros.validateString)(properties.securityIps));
    errors.collect(ros.propertyValidator('dbInstanceIpArrayName', ros.validateString)(properties.dbInstanceIpArrayName));
    return errors.wrap('supplied properties not correct for "DBInstanceIPArrayProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::DbInstance.DBInstanceIPArray` resource
 *
 * @param properties - the TypeScript properties of a `DBInstanceIPArrayProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::DbInstance.DBInstanceIPArray` resource.
 */
// @ts-ignore TS6133
function rosDbInstanceDBInstanceIPArrayPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDbInstance_DBInstanceIPArrayPropertyValidator(properties).assertSuccess();
    return {
      'SecurityIps': ros.stringToRosTemplate(properties.securityIps),
      'DbInstanceIpArrayName': ros.stringToRosTemplate(properties.dbInstanceIpArrayName),
    };
}

export namespace RosDbInstance {
    /**
     * @stability external
     */
    export interface EcsSecurityGroupRelationsProperty {
        /**
         * @Property networkType: Network type.
         */
        readonly networkType?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: Security group Id.
         */
        readonly securityGroupId: string | ros.IResolvable;
        /**
         * @Property regionId: Region.
         */
        readonly regionId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EcsSecurityGroupRelationsProperty`
 *
 * @param properties - the TypeScript properties of a `EcsSecurityGroupRelationsProperty`
 *
 * @returns the result of the validation.
 */
function RosDbInstance_EcsSecurityGroupRelationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "EcsSecurityGroupRelationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::DbInstance.EcsSecurityGroupRelations` resource
 *
 * @param properties - the TypeScript properties of a `EcsSecurityGroupRelationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::DbInstance.EcsSecurityGroupRelations` resource.
 */
// @ts-ignore TS6133
function rosDbInstanceEcsSecurityGroupRelationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDbInstance_EcsSecurityGroupRelationsPropertyValidator(properties).assertSuccess();
    return {
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
    };
}

export namespace RosDbInstance {
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
function RosDbInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::DbInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GraphDatabase::DbInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosDbInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDbInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
