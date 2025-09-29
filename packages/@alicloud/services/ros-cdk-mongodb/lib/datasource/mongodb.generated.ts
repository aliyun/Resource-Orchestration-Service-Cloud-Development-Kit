// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceId: The ID of the mongos
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
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MONGODB::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MONGODB::Instance";

    /**
     * @Attribute AccountDescription: The description of the account.
     */
    public readonly attrAccountDescription: ros.IResolvable;

    /**
     * @Attribute AccountName: The name of the account. Value: **root * *.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * @Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance. Valid values:
* true: Auto-renewal is enabled for the instance.
* false: Auto-renewal is disabled for the instance.
     */
    public readonly attrAutoRenew: ros.IResolvable;

    /**
     * @Attribute AutoRenewDuration: Auto Renew Duration.
     */
    public readonly attrAutoRenewDuration: ros.IResolvable;

    /**
     * @Attribute BackupInterval: The frequency at which high-frequency backup is created. Valid values:
* -1: High-frequency backup is disabled.
* 15: every 15 minutes.
* 30: every 30 minutes.
* 60: every hour.
* 120: every 2 hours.
* 180: every 3 hours.
* 240: every 4 hours.
* 360: every 6 hours.
* 480: every 8 hours.
* 720: every 12 hours.
     */
    public readonly attrBackupInterval: ros.IResolvable;

    /**
     * @Attribute BackupRetentionPeriod: The retention period of the backup data. Unit: day.
     */
    public readonly attrBackupRetentionPeriod: ros.IResolvable;

    /**
     * @Attribute CreateTime: The Database create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DBInstanceClass: The instance type of the instance.
     */
    public readonly attrDbInstanceClass: ros.IResolvable;

    /**
     * @Attribute DBInstanceDescription: The name of the instance.
     */
    public readonly attrDbInstanceDescription: ros.IResolvable;

    /**
     * @Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance. Valid values:
* true
* false
     */
    public readonly attrDbInstanceReleaseProtection: ros.IResolvable;

    /**
     * @Attribute DBInstanceType: The architecture of the instance. Valid values:
* replicate: replica set instance
* sharding: sharded cluster instance
     */
    public readonly attrDbInstanceType: ros.IResolvable;

    /**
     * @Attribute DbInstanceStorage: The storage capacity of the instance.
     */
    public readonly attrDbInstanceStorage: ros.IResolvable;

    /**
     * @Attribute EnableBackupLog: Indicates whether the log backup feature is enabled. Valid values:
* 0 (default): The log backup feature is disabled.
* 1: The log backup feature is enabled.
     */
    public readonly attrEnableBackupLog: ros.IResolvable;

    /**
     * @Attribute Engine: The database engine of the instance. Default value: mongodb.
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * @Attribute EngineVersion: The database engine version of the instance.
* 6.0
* 5.0
* 4.4
* 4.2
* 4.0
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * @Attribute ExpireTime: The time when the subscription instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * @Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
     */
    public readonly attrHiddenZoneId: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the mongos
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute KindCode: The kind code of the instance. Valid values:
* 0: physical machine
* 1: Elastic Compute Service (ECS) instance
* 2: Docker cluster
* 18: Kubernetes cluster
     */
    public readonly attrKindCode: ros.IResolvable;

    /**
     * @Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
     */
    public readonly attrLastDowngradeTime: ros.IResolvable;

    /**
     * @Attribute LockMode: The lock status of the instance. Valid values:
* Unlock: The instance is not locked.
* ManualLock: The instance is manually locked.
* LockByExpiration: The instance is automatically locked due to instance expiration.
* LockByRestoration: The instance is automatically locked before the instance is rolled back.
* LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
* Released: The instance is released.
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * @Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained. Valid values: 7 to 730.
     */
    public readonly attrLogBackupRetentionPeriod: ros.IResolvable;

    /**
     * @Attribute MaintainEndTime: The end time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    public readonly attrMaintainEndTime: ros.IResolvable;

    /**
     * @Attribute MaintainStartTime: The start time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    public readonly attrMaintainStartTime: ros.IResolvable;

    /**
     * @Attribute MongosList: The information of the mongos nodes.
     */
    public readonly attrMongosList: ros.IResolvable;

    /**
     * @Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
     */
    public readonly attrNetworkAddresses: ros.IResolvable;

    /**
     * @Attribute NetworkType: The network type of the instance. Valid values:
* Classic: classic network
* VPC: VPC
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * @Attribute Parameters: The settings of the parameters that have taken effect.
     */
    public readonly attrParameters: ros.IResolvable;

    /**
     * @Attribute PaymentType: The billing method of the Database. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute PreferredBackupPeriod: The day of a week on which to back up data. Valid values:
* Monday
* Tuesday
* Wednesday
* Thursday
* Friday
* Saturday
* Sunday
     */
    public readonly attrPreferredBackupPeriod: ros.IResolvable;

    /**
     * @Attribute PreferredBackupTime: The time range during which the backup was created. The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
     */
    public readonly attrPreferredBackupTime: ros.IResolvable;

    /**
     * @Attribute ProtocolType: The access protocol type of the instance. Valid values:
* mongodb
* dynamodb
     */
    public readonly attrProtocolType: ros.IResolvable;

    /**
     * @Attribute ReadonlyReplicas: The number of read-only nodes in the shard node. Valid values: 0 to 5. The value must be an integer.
     */
    public readonly attrReadonlyReplicas: ros.IResolvable;

    /**
     * @Attribute ReplicaSetsConnections: ReplicaSets Connections.
     */
    public readonly attrReplicaSetsConnections: ros.IResolvable;

    /**
     * @Attribute ReplicationFactor: The number of nodes in the instance.
     */
    public readonly attrReplicationFactor: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
     */
    public readonly attrSecondaryZoneId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: The ID of the ECS security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityIpList: The name of the IP whitelist.
     */
    public readonly attrSecurityIpList: ros.IResolvable;

    /**
     * @Attribute SecurityIps: The IP addresses in the default whitelist.
     */
    public readonly attrSecurityIps: ros.IResolvable;

    /**
     * @Attribute ShardList: The information of the shard nodes.
     */
    public readonly attrShardList: ros.IResolvable;

    /**
     * @Attribute SnapshotBackupType: The snapshot backup type. Valid values:
* Flash: single-digit second backup
* Standard (default): standard backup
     */
    public readonly attrSnapshotBackupType: ros.IResolvable;

    /**
     * @Attribute SslExpiredTime: The time when the SSL certificate expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
     */
    public readonly attrSslExpiredTime: ros.IResolvable;

    /**
     * @Attribute SslStatus: The status of the SSL feature. Valid values:
* Open: The SSL feature is enabled.
* Closed: The SSL feature is disabled.
     */
    public readonly attrSslStatus: ros.IResolvable;

    /**
     * @Attribute StorageEngine: The Storage Engine Of The Instance Type.
     */
    public readonly attrStorageEngine: ros.IResolvable;

    /**
     * @Attribute Tags: The details of the instance tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TdeStatus: The TDE status. Valid values:
* enabled
* disabled
     */
    public readonly attrTdeStatus: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The vSwitch ID of the instance.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled. Valid values:
* Open: Password-free access within the VPC is enabled.
* Close: Password-free access within the VPC is disabled, and you must use a password for access.
* NotSupport: Password-free access within the VPC is not supported.
     */
    public readonly attrVpcAuthMode: ros.IResolvable;

    /**
     * @Attribute VpcId: The VPC ID of the instance.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneId: The ID of the zone in which the instance resides.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the mongos
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountDescription = this.getAtt('AccountDescription');
        this.attrAccountName = this.getAtt('AccountName');
        this.attrAutoRenew = this.getAtt('AutoRenew');
        this.attrAutoRenewDuration = this.getAtt('AutoRenewDuration');
        this.attrBackupInterval = this.getAtt('BackupInterval');
        this.attrBackupRetentionPeriod = this.getAtt('BackupRetentionPeriod');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDbInstanceClass = this.getAtt('DBInstanceClass');
        this.attrDbInstanceDescription = this.getAtt('DBInstanceDescription');
        this.attrDbInstanceReleaseProtection = this.getAtt('DBInstanceReleaseProtection');
        this.attrDbInstanceType = this.getAtt('DBInstanceType');
        this.attrDbInstanceStorage = this.getAtt('DbInstanceStorage');
        this.attrEnableBackupLog = this.getAtt('EnableBackupLog');
        this.attrEngine = this.getAtt('Engine');
        this.attrEngineVersion = this.getAtt('EngineVersion');
        this.attrExpireTime = this.getAtt('ExpireTime');
        this.attrHiddenZoneId = this.getAtt('HiddenZoneId');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrKindCode = this.getAtt('KindCode');
        this.attrLastDowngradeTime = this.getAtt('LastDowngradeTime');
        this.attrLockMode = this.getAtt('LockMode');
        this.attrLogBackupRetentionPeriod = this.getAtt('LogBackupRetentionPeriod');
        this.attrMaintainEndTime = this.getAtt('MaintainEndTime');
        this.attrMaintainStartTime = this.getAtt('MaintainStartTime');
        this.attrMongosList = this.getAtt('MongosList');
        this.attrNetworkAddresses = this.getAtt('NetworkAddresses');
        this.attrNetworkType = this.getAtt('NetworkType');
        this.attrParameters = this.getAtt('Parameters');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPreferredBackupPeriod = this.getAtt('PreferredBackupPeriod');
        this.attrPreferredBackupTime = this.getAtt('PreferredBackupTime');
        this.attrProtocolType = this.getAtt('ProtocolType');
        this.attrReadonlyReplicas = this.getAtt('ReadonlyReplicas');
        this.attrReplicaSetsConnections = this.getAtt('ReplicaSetsConnections');
        this.attrReplicationFactor = this.getAtt('ReplicationFactor');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecondaryZoneId = this.getAtt('SecondaryZoneId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrSecurityIpList = this.getAtt('SecurityIpList');
        this.attrSecurityIps = this.getAtt('SecurityIps');
        this.attrShardList = this.getAtt('ShardList');
        this.attrSnapshotBackupType = this.getAtt('SnapshotBackupType');
        this.attrSslExpiredTime = this.getAtt('SslExpiredTime');
        this.attrSslStatus = this.getAtt('SslStatus');
        this.attrStorageEngine = this.getAtt('StorageEngine');
        this.attrTags = this.getAtt('Tags');
        this.attrTdeStatus = this.getAtt('TdeStatus');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcAuthMode = this.getAtt('VpcAuthMode');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstanceClasses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses
 */
export interface RosInstanceClassesProps {

    /**
     * @Property dbType: The database engine type of the instance.
     * normal: replica set instance
     * sharding: sharded cluster instance
     */
    readonly dbType?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceClassesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceClassesProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceClassesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstanceClassesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::InstanceClasses` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceClassesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::InstanceClasses` resource.
 */
// @ts-ignore TS6133
function rosInstanceClassesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceClassesPropsValidator(properties).assertSuccess();
    }
    return {
      'DbType': ros.stringToRosTemplate(properties.dbType),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MONGODB::InstanceClasses`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceClasses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses
 */
export class RosInstanceClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MONGODB::InstanceClasses";

    /**
     * @Attribute InstanceClassIds: The list of The instance class Ids.
     */
    public readonly attrInstanceClassIds: ros.IResolvable;

    /**
     * @Attribute InstanceClasses: The list of The instance classes.
     */
    public readonly attrInstanceClasses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbType: The database engine type of the instance.
     * normal: replica set instance
     * sharding: sharded cluster instance
     */
    public dbType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceClassesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceClasses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceClassIds = this.getAtt('InstanceClassIds');
        this.attrInstanceClasses = this.getAtt('InstanceClasses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbType = props.dbType;
        this.instanceChargeType = props.instanceChargeType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbType: this.dbType,
            instanceChargeType: this.instanceChargeType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceClassesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances
 */
export interface RosInstancesProps {

    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
     */
    readonly connectionDomain?: string | ros.IResolvable;

    /**
     * @Property dbInstanceClass: The instance type. For more information about valid values, see Instance types.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;

    /**
     * @Property dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
     */
    readonly dbInstanceStatus?: string | ros.IResolvable;

    /**
     * @Property dbInstanceType: The category of the instance. Default value: replicate. Valid values:
     * sharding: sharded cluster instance
     * replicate: replica set or standalone instance
     * Note
     * To query the list of sharded cluster instances, you must set the parameter to sharding.
     * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
     */
    readonly dbInstanceType?: string | ros.IResolvable;

    /**
     * @Property engineVersion: The database engine version of the instance. Valid values:
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     * 3.4
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property expired: Specifies whether the instance expires. Valid values:
     * true: The instance expires.
     * false: The instance does not expire.
     */
    readonly expired?: boolean | ros.IResolvable;

    /**
     * @Property networkType: The network type of the instance. Valid values:
     * Classic
     * Vpc
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
     */
    readonly replicationFactor?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of instance.
     */
    readonly tags?: RosInstances.TagsProperty[];

    /**
     * @Property vpcId: The VPC ID of the instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('replicationFactor', ros.validateString)(properties.replicationFactor));
    errors.collect(ros.propertyValidator('dbInstanceStatus', ros.validateString)(properties.dbInstanceStatus));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('dbInstanceType', ros.validateString)(properties.dbInstanceType));
    errors.collect(ros.propertyValidator('expired', ros.validateBoolean)(properties.expired));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('connectionDomain', ros.validateString)(properties.connectionDomain));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstances_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'ConnectionDomain': ros.stringToRosTemplate(properties.connectionDomain),
      'DBInstanceClass': ros.stringToRosTemplate(properties.dbInstanceClass),
      'DBInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'DBInstanceStatus': ros.stringToRosTemplate(properties.dbInstanceStatus),
      'DBInstanceType': ros.stringToRosTemplate(properties.dbInstanceType),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'Expired': ros.booleanToRosTemplate(properties.expired),
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ReplicationFactor': ros.stringToRosTemplate(properties.replicationFactor),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosInstancesTagsPropertyToRosTemplate)(properties.tags),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MONGODB::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MONGODB::Instances";

    /**
     * @Attribute InstanceIds: The list of The instance Ids.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of The instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
     */
    public connectionDomain: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceClass: The instance type. For more information about valid values, see Instance types.
     */
    public dbInstanceClass: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
     */
    public dbInstanceStatus: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceType: The category of the instance. Default value: replicate. Valid values:
     * sharding: sharded cluster instance
     * replicate: replica set or standalone instance
     * Note
     * To query the list of sharded cluster instances, you must set the parameter to sharding.
     * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
     */
    public dbInstanceType: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: The database engine version of the instance. Valid values:
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     * 3.4
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property expired: Specifies whether the instance expires. Valid values:
     * true: The instance expires.
     * false: The instance does not expire.
     */
    public expired: boolean | ros.IResolvable | undefined;

    /**
     * @Property networkType: The network type of the instance. Valid values:
     * Classic
     * Vpc
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
     */
    public replicationFactor: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of instance.
     */
    public tags: RosInstances.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The VPC ID of the instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.chargeType = props.chargeType;
        this.connectionDomain = props.connectionDomain;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceId = props.dbInstanceId;
        this.dbInstanceStatus = props.dbInstanceStatus;
        this.dbInstanceType = props.dbInstanceType;
        this.engineVersion = props.engineVersion;
        this.expired = props.expired;
        this.networkType = props.networkType;
        this.refreshOptions = props.refreshOptions;
        this.replicationFactor = props.replicationFactor;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            chargeType: this.chargeType,
            connectionDomain: this.connectionDomain,
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceId: this.dbInstanceId,
            dbInstanceStatus: this.dbInstanceStatus,
            dbInstanceType: this.dbInstanceType,
            engineVersion: this.engineVersion,
            expired: this.expired,
            networkType: this.networkType,
            refreshOptions: this.refreshOptions,
            replicationFactor: this.replicationFactor,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstances {
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
function RosInstances_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instances.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instances.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstancesTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstances_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
