import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './mongodb.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance
 */
export interface InstanceProps {
    /**
     * Property instanceId: The ID of the mongos
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;
    /**
     * Attribute AccountDescription: The description of the account.
     */
    readonly attrAccountDescription: ros.IResolvable | string;
    /**
     * Attribute AccountName: The name of the account. Value: **root * *.
     */
    readonly attrAccountName: ros.IResolvable | string;
    /**
     * Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance. Valid values:
* true: Auto-renewal is enabled for the instance.
* false: Auto-renewal is disabled for the instance.
     */
    readonly attrAutoRenew: ros.IResolvable | string;
    /**
     * Attribute AutoRenewDuration: Auto Renew Duration.
     */
    readonly attrAutoRenewDuration: ros.IResolvable | string;
    /**
     * Attribute BackupInterval: The frequency at which high-frequency backup is created. Valid values:
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
    readonly attrBackupInterval: ros.IResolvable | string;
    /**
     * Attribute BackupRetentionPeriod: The retention period of the backup data. Unit: day.
     */
    readonly attrBackupRetentionPeriod: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The Database create time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DBInstanceClass: The instance type of the instance.
     */
    readonly attrDbInstanceClass: ros.IResolvable | string;
    /**
     * Attribute DBInstanceDescription: The name of the instance.
     */
    readonly attrDbInstanceDescription: ros.IResolvable | string;
    /**
     * Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance. Valid values:
* true
* false
     */
    readonly attrDbInstanceReleaseProtection: ros.IResolvable | string;
    /**
     * Attribute DBInstanceType: The architecture of the instance. Valid values:
* replicate: replica set instance
* sharding: sharded cluster instance
     */
    readonly attrDbInstanceType: ros.IResolvable | string;
    /**
     * Attribute DbInstanceStorage: The storage capacity of the instance.
     */
    readonly attrDbInstanceStorage: ros.IResolvable | string;
    /**
     * Attribute EnableBackupLog: Indicates whether the log backup feature is enabled. Valid values:
* 0 (default): The log backup feature is disabled.
* 1: The log backup feature is enabled.
     */
    readonly attrEnableBackupLog: ros.IResolvable | string;
    /**
     * Attribute Engine: The database engine of the instance. Default value: mongodb.
     */
    readonly attrEngine: ros.IResolvable | string;
    /**
     * Attribute EngineVersion: The database engine version of the instance.
* 6.0
* 5.0
* 4.4
* 4.2
* 4.0
     */
    readonly attrEngineVersion: ros.IResolvable | string;
    /**
     * Attribute ExpireTime: The time when the subscription instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
     */
    readonly attrExpireTime: ros.IResolvable | string;
    /**
     * Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
     */
    readonly attrHiddenZoneId: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the mongos
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute KindCode: The kind code of the instance. Valid values:
* 0: physical machine
* 1: Elastic Compute Service (ECS) instance
* 2: Docker cluster
* 18: Kubernetes cluster
     */
    readonly attrKindCode: ros.IResolvable | string;
    /**
     * Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
     */
    readonly attrLastDowngradeTime: ros.IResolvable | string;
    /**
     * Attribute LockMode: The lock status of the instance. Valid values:
* Unlock: The instance is not locked.
* ManualLock: The instance is manually locked.
* LockByExpiration: The instance is automatically locked due to instance expiration.
* LockByRestoration: The instance is automatically locked before the instance is rolled back.
* LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
* Released: The instance is released.
     */
    readonly attrLockMode: ros.IResolvable | string;
    /**
     * Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained. Valid values: 7 to 730.
     */
    readonly attrLogBackupRetentionPeriod: ros.IResolvable | string;
    /**
     * Attribute MaintainEndTime: The end time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    readonly attrMaintainEndTime: ros.IResolvable | string;
    /**
     * Attribute MaintainStartTime: The start time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    readonly attrMaintainStartTime: ros.IResolvable | string;
    /**
     * Attribute MongosList: The information of the mongos nodes.
     */
    readonly attrMongosList: ros.IResolvable | string;
    /**
     * Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
     */
    readonly attrNetworkAddresses: ros.IResolvable | string;
    /**
     * Attribute NetworkType: The network type of the instance. Valid values:
* Classic: classic network
* VPC: VPC
     */
    readonly attrNetworkType: ros.IResolvable | string;
    /**
     * Attribute Parameters: The settings of the parameters that have taken effect.
     */
    readonly attrParameters: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The billing method of the Database. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute PreferredBackupPeriod: The day of a week on which to back up data. Valid values:
* Monday
* Tuesday
* Wednesday
* Thursday
* Friday
* Saturday
* Sunday
     */
    readonly attrPreferredBackupPeriod: ros.IResolvable | string;
    /**
     * Attribute PreferredBackupTime: The time range during which the backup was created. The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
     */
    readonly attrPreferredBackupTime: ros.IResolvable | string;
    /**
     * Attribute ProtocolType: The access protocol type of the instance. Valid values:
* mongodb
* dynamodb
     */
    readonly attrProtocolType: ros.IResolvable | string;
    /**
     * Attribute ReadonlyReplicas: The number of read-only nodes in the shard node. Valid values: 0 to 5. The value must be an integer.
     */
    readonly attrReadonlyReplicas: ros.IResolvable | string;
    /**
     * Attribute ReplicaSetsConnections: ReplicaSets Connections.
     */
    readonly attrReplicaSetsConnections: ros.IResolvable | string;
    /**
     * Attribute ReplicationFactor: The number of nodes in the instance.
     */
    readonly attrReplicationFactor: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
     */
    readonly attrSecondaryZoneId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: The ID of the ECS security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityIpList: The name of the IP whitelist.
     */
    readonly attrSecurityIpList: ros.IResolvable | string;
    /**
     * Attribute SecurityIps: The IP addresses in the default whitelist.
     */
    readonly attrSecurityIps: ros.IResolvable | string;
    /**
     * Attribute ShardList: The information of the shard nodes.
     */
    readonly attrShardList: ros.IResolvable | string;
    /**
     * Attribute SnapshotBackupType: The snapshot backup type. Valid values:
* Flash: single-digit second backup
* Standard (default): standard backup
     */
    readonly attrSnapshotBackupType: ros.IResolvable | string;
    /**
     * Attribute SslExpiredTime: The time when the SSL certificate expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
     */
    readonly attrSslExpiredTime: ros.IResolvable | string;
    /**
     * Attribute SslStatus: The status of the SSL feature. Valid values:
* Open: The SSL feature is enabled.
* Closed: The SSL feature is disabled.
     */
    readonly attrSslStatus: ros.IResolvable | string;
    /**
     * Attribute StorageEngine: The Storage Engine Of The Instance Type.
     */
    readonly attrStorageEngine: ros.IResolvable | string;
    /**
     * Attribute Tags: The details of the instance tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TdeStatus: The TDE status. Valid values:
* enabled
* disabled
     */
    readonly attrTdeStatus: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The vSwitch ID of the instance.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled. Valid values:
* Open: Password-free access within the VPC is enabled.
* Close: Password-free access within the VPC is disabled, and you must use a password for access.
* NotSupport: Password-free access within the VPC is not supported.
     */
    readonly attrVpcAuthMode: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC ID of the instance.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The ID of the zone in which the instance resides.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MONGODB::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountDescription: The description of the account.
     */
    readonly attrAccountDescription: ros.IResolvable | string;
    /**
     * Attribute AccountName: The name of the account. Value: **root * *.
     */
    readonly attrAccountName: ros.IResolvable | string;
    /**
     * Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance. Valid values:
* true: Auto-renewal is enabled for the instance.
* false: Auto-renewal is disabled for the instance.
     */
    readonly attrAutoRenew: ros.IResolvable | string;
    /**
     * Attribute AutoRenewDuration: Auto Renew Duration.
     */
    readonly attrAutoRenewDuration: ros.IResolvable | string;
    /**
     * Attribute BackupInterval: The frequency at which high-frequency backup is created. Valid values:
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
    readonly attrBackupInterval: ros.IResolvable | string;
    /**
     * Attribute BackupRetentionPeriod: The retention period of the backup data. Unit: day.
     */
    readonly attrBackupRetentionPeriod: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The Database create time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DBInstanceClass: The instance type of the instance.
     */
    readonly attrDbInstanceClass: ros.IResolvable | string;
    /**
     * Attribute DBInstanceDescription: The name of the instance.
     */
    readonly attrDbInstanceDescription: ros.IResolvable | string;
    /**
     * Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance. Valid values:
* true
* false
     */
    readonly attrDbInstanceReleaseProtection: ros.IResolvable | string;
    /**
     * Attribute DBInstanceType: The architecture of the instance. Valid values:
* replicate: replica set instance
* sharding: sharded cluster instance
     */
    readonly attrDbInstanceType: ros.IResolvable | string;
    /**
     * Attribute DbInstanceStorage: The storage capacity of the instance.
     */
    readonly attrDbInstanceStorage: ros.IResolvable | string;
    /**
     * Attribute EnableBackupLog: Indicates whether the log backup feature is enabled. Valid values:
* 0 (default): The log backup feature is disabled.
* 1: The log backup feature is enabled.
     */
    readonly attrEnableBackupLog: ros.IResolvable | string;
    /**
     * Attribute Engine: The database engine of the instance. Default value: mongodb.
     */
    readonly attrEngine: ros.IResolvable | string;
    /**
     * Attribute EngineVersion: The database engine version of the instance.
* 6.0
* 5.0
* 4.4
* 4.2
* 4.0
     */
    readonly attrEngineVersion: ros.IResolvable | string;
    /**
     * Attribute ExpireTime: The time when the subscription instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
     */
    readonly attrExpireTime: ros.IResolvable | string;
    /**
     * Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
     */
    readonly attrHiddenZoneId: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the mongos
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute KindCode: The kind code of the instance. Valid values:
* 0: physical machine
* 1: Elastic Compute Service (ECS) instance
* 2: Docker cluster
* 18: Kubernetes cluster
     */
    readonly attrKindCode: ros.IResolvable | string;
    /**
     * Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
     */
    readonly attrLastDowngradeTime: ros.IResolvable | string;
    /**
     * Attribute LockMode: The lock status of the instance. Valid values:
* Unlock: The instance is not locked.
* ManualLock: The instance is manually locked.
* LockByExpiration: The instance is automatically locked due to instance expiration.
* LockByRestoration: The instance is automatically locked before the instance is rolled back.
* LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
* Released: The instance is released.
     */
    readonly attrLockMode: ros.IResolvable | string;
    /**
     * Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained. Valid values: 7 to 730.
     */
    readonly attrLogBackupRetentionPeriod: ros.IResolvable | string;
    /**
     * Attribute MaintainEndTime: The end time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    readonly attrMaintainEndTime: ros.IResolvable | string;
    /**
     * Attribute MaintainStartTime: The start time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    readonly attrMaintainStartTime: ros.IResolvable | string;
    /**
     * Attribute MongosList: The information of the mongos nodes.
     */
    readonly attrMongosList: ros.IResolvable | string;
    /**
     * Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
     */
    readonly attrNetworkAddresses: ros.IResolvable | string;
    /**
     * Attribute NetworkType: The network type of the instance. Valid values:
* Classic: classic network
* VPC: VPC
     */
    readonly attrNetworkType: ros.IResolvable | string;
    /**
     * Attribute Parameters: The settings of the parameters that have taken effect.
     */
    readonly attrParameters: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The billing method of the Database. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute PreferredBackupPeriod: The day of a week on which to back up data. Valid values:
* Monday
* Tuesday
* Wednesday
* Thursday
* Friday
* Saturday
* Sunday
     */
    readonly attrPreferredBackupPeriod: ros.IResolvable | string;
    /**
     * Attribute PreferredBackupTime: The time range during which the backup was created. The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
     */
    readonly attrPreferredBackupTime: ros.IResolvable | string;
    /**
     * Attribute ProtocolType: The access protocol type of the instance. Valid values:
* mongodb
* dynamodb
     */
    readonly attrProtocolType: ros.IResolvable | string;
    /**
     * Attribute ReadonlyReplicas: The number of read-only nodes in the shard node. Valid values: 0 to 5. The value must be an integer.
     */
    readonly attrReadonlyReplicas: ros.IResolvable | string;
    /**
     * Attribute ReplicaSetsConnections: ReplicaSets Connections.
     */
    readonly attrReplicaSetsConnections: ros.IResolvable | string;
    /**
     * Attribute ReplicationFactor: The number of nodes in the instance.
     */
    readonly attrReplicationFactor: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
     */
    readonly attrSecondaryZoneId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: The ID of the ECS security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityIpList: The name of the IP whitelist.
     */
    readonly attrSecurityIpList: ros.IResolvable | string;
    /**
     * Attribute SecurityIps: The IP addresses in the default whitelist.
     */
    readonly attrSecurityIps: ros.IResolvable | string;
    /**
     * Attribute ShardList: The information of the shard nodes.
     */
    readonly attrShardList: ros.IResolvable | string;
    /**
     * Attribute SnapshotBackupType: The snapshot backup type. Valid values:
* Flash: single-digit second backup
* Standard (default): standard backup
     */
    readonly attrSnapshotBackupType: ros.IResolvable | string;
    /**
     * Attribute SslExpiredTime: The time when the SSL certificate expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
     */
    readonly attrSslExpiredTime: ros.IResolvable | string;
    /**
     * Attribute SslStatus: The status of the SSL feature. Valid values:
* Open: The SSL feature is enabled.
* Closed: The SSL feature is disabled.
     */
    readonly attrSslStatus: ros.IResolvable | string;
    /**
     * Attribute StorageEngine: The Storage Engine Of The Instance Type.
     */
    readonly attrStorageEngine: ros.IResolvable | string;
    /**
     * Attribute Tags: The details of the instance tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TdeStatus: The TDE status. Valid values:
* enabled
* disabled
     */
    readonly attrTdeStatus: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The vSwitch ID of the instance.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled. Valid values:
* Open: Password-free access within the VPC is enabled.
* Close: Password-free access within the VPC is disabled, and you must use a password for access.
* NotSupport: Password-free access within the VPC is not supported.
     */
    readonly attrVpcAuthMode: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC ID of the instance.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The ID of the zone in which the instance resides.
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
