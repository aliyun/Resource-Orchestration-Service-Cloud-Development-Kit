import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MONGODB::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountDescription: The description of the account.
     */
    public readonly attrAccountDescription: ros.IResolvable;

    /**
     * Attribute AccountName: The name of the account. Value: **root * *.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance. Valid values:
* true: Auto-renewal is enabled for the instance.
* false: Auto-renewal is disabled for the instance.
     */
    public readonly attrAutoRenew: ros.IResolvable;

    /**
     * Attribute AutoRenewDuration: Auto Renew Duration.
     */
    public readonly attrAutoRenewDuration: ros.IResolvable;

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
    public readonly attrBackupInterval: ros.IResolvable;

    /**
     * Attribute BackupRetentionPeriod: The retention period of the backup data. Unit: day.
     */
    public readonly attrBackupRetentionPeriod: ros.IResolvable;

    /**
     * Attribute CreateTime: The Database create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DBInstanceClass: The instance type of the instance.
     */
    public readonly attrDbInstanceClass: ros.IResolvable;

    /**
     * Attribute DBInstanceDescription: The name of the instance.
     */
    public readonly attrDbInstanceDescription: ros.IResolvable;

    /**
     * Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance. Valid values:
* true
* false
     */
    public readonly attrDbInstanceReleaseProtection: ros.IResolvable;

    /**
     * Attribute DBInstanceType: The architecture of the instance. Valid values:
* replicate: replica set instance
* sharding: sharded cluster instance
     */
    public readonly attrDbInstanceType: ros.IResolvable;

    /**
     * Attribute DbInstanceStorage: The storage capacity of the instance.
     */
    public readonly attrDbInstanceStorage: ros.IResolvable;

    /**
     * Attribute EnableBackupLog: Indicates whether the log backup feature is enabled. Valid values:
* 0 (default): The log backup feature is disabled.
* 1: The log backup feature is enabled.
     */
    public readonly attrEnableBackupLog: ros.IResolvable;

    /**
     * Attribute Engine: The database engine of the instance. Default value: mongodb.
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * Attribute EngineVersion: The database engine version of the instance.
* 6.0
* 5.0
* 4.4
* 4.2
* 4.0
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * Attribute ExpireTime: The time when the subscription instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
     */
    public readonly attrHiddenZoneId: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the mongos
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute KindCode: The kind code of the instance. Valid values:
* 0: physical machine
* 1: Elastic Compute Service (ECS) instance
* 2: Docker cluster
* 18: Kubernetes cluster
     */
    public readonly attrKindCode: ros.IResolvable;

    /**
     * Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
     */
    public readonly attrLastDowngradeTime: ros.IResolvable;

    /**
     * Attribute LockMode: The lock status of the instance. Valid values:
* Unlock: The instance is not locked.
* ManualLock: The instance is manually locked.
* LockByExpiration: The instance is automatically locked due to instance expiration.
* LockByRestoration: The instance is automatically locked before the instance is rolled back.
* LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
* Released: The instance is released.
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained. Valid values: 7 to 730.
     */
    public readonly attrLogBackupRetentionPeriod: ros.IResolvable;

    /**
     * Attribute MaintainEndTime: The end time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    public readonly attrMaintainEndTime: ros.IResolvable;

    /**
     * Attribute MaintainStartTime: The start time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    public readonly attrMaintainStartTime: ros.IResolvable;

    /**
     * Attribute MongosList: The information of the mongos nodes.
     */
    public readonly attrMongosList: ros.IResolvable;

    /**
     * Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
     */
    public readonly attrNetworkAddresses: ros.IResolvable;

    /**
     * Attribute NetworkType: The network type of the instance. Valid values:
* Classic: classic network
* VPC: VPC
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * Attribute Parameters: The settings of the parameters that have taken effect.
     */
    public readonly attrParameters: ros.IResolvable;

    /**
     * Attribute PaymentType: The billing method of the Database. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    public readonly attrPaymentType: ros.IResolvable;

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
    public readonly attrPreferredBackupPeriod: ros.IResolvable;

    /**
     * Attribute PreferredBackupTime: The time range during which the backup was created. The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
     */
    public readonly attrPreferredBackupTime: ros.IResolvable;

    /**
     * Attribute ProtocolType: The access protocol type of the instance. Valid values:
* mongodb
* dynamodb
     */
    public readonly attrProtocolType: ros.IResolvable;

    /**
     * Attribute ReadonlyReplicas: The number of read-only nodes in the shard node. Valid values: 0 to 5. The value must be an integer.
     */
    public readonly attrReadonlyReplicas: ros.IResolvable;

    /**
     * Attribute ReplicaSetsConnections: ReplicaSets Connections.
     */
    public readonly attrReplicaSetsConnections: ros.IResolvable;

    /**
     * Attribute ReplicationFactor: The number of nodes in the instance.
     */
    public readonly attrReplicationFactor: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
     */
    public readonly attrSecondaryZoneId: ros.IResolvable;

    /**
     * Attribute SecurityGroupId: The ID of the ECS security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * Attribute SecurityIpList: The name of the IP whitelist.
     */
    public readonly attrSecurityIpList: ros.IResolvable;

    /**
     * Attribute SecurityIps: The IP addresses in the default whitelist.
     */
    public readonly attrSecurityIps: ros.IResolvable;

    /**
     * Attribute ShardList: The information of the shard nodes.
     */
    public readonly attrShardList: ros.IResolvable;

    /**
     * Attribute SnapshotBackupType: The snapshot backup type. Valid values:
* Flash: single-digit second backup
* Standard (default): standard backup
     */
    public readonly attrSnapshotBackupType: ros.IResolvable;

    /**
     * Attribute SslExpiredTime: The time when the SSL certificate expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
     */
    public readonly attrSslExpiredTime: ros.IResolvable;

    /**
     * Attribute SslStatus: The status of the SSL feature. Valid values:
* Open: The SSL feature is enabled.
* Closed: The SSL feature is disabled.
     */
    public readonly attrSslStatus: ros.IResolvable;

    /**
     * Attribute StorageEngine: The Storage Engine Of The Instance Type.
     */
    public readonly attrStorageEngine: ros.IResolvable;

    /**
     * Attribute Tags: The details of the instance tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute TdeStatus: The TDE status. Valid values:
* enabled
* disabled
     */
    public readonly attrTdeStatus: ros.IResolvable;

    /**
     * Attribute VSwitchId: The vSwitch ID of the instance.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled. Valid values:
* Open: Password-free access within the VPC is enabled.
* Close: Password-free access within the VPC is disabled, and you must use a password for access.
* NotSupport: Password-free access within the VPC is not supported.
     */
    public readonly attrVpcAuthMode: ros.IResolvable;

    /**
     * Attribute VpcId: The VPC ID of the instance.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute ZoneId: The ID of the zone in which the instance resides.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAccountDescription = rosInstance.attrAccountDescription;
        this.attrAccountName = rosInstance.attrAccountName;
        this.attrAutoRenew = rosInstance.attrAutoRenew;
        this.attrAutoRenewDuration = rosInstance.attrAutoRenewDuration;
        this.attrBackupInterval = rosInstance.attrBackupInterval;
        this.attrBackupRetentionPeriod = rosInstance.attrBackupRetentionPeriod;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrDbInstanceClass = rosInstance.attrDbInstanceClass;
        this.attrDbInstanceDescription = rosInstance.attrDbInstanceDescription;
        this.attrDbInstanceReleaseProtection = rosInstance.attrDbInstanceReleaseProtection;
        this.attrDbInstanceType = rosInstance.attrDbInstanceType;
        this.attrDbInstanceStorage = rosInstance.attrDbInstanceStorage;
        this.attrEnableBackupLog = rosInstance.attrEnableBackupLog;
        this.attrEngine = rosInstance.attrEngine;
        this.attrEngineVersion = rosInstance.attrEngineVersion;
        this.attrExpireTime = rosInstance.attrExpireTime;
        this.attrHiddenZoneId = rosInstance.attrHiddenZoneId;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrKindCode = rosInstance.attrKindCode;
        this.attrLastDowngradeTime = rosInstance.attrLastDowngradeTime;
        this.attrLockMode = rosInstance.attrLockMode;
        this.attrLogBackupRetentionPeriod = rosInstance.attrLogBackupRetentionPeriod;
        this.attrMaintainEndTime = rosInstance.attrMaintainEndTime;
        this.attrMaintainStartTime = rosInstance.attrMaintainStartTime;
        this.attrMongosList = rosInstance.attrMongosList;
        this.attrNetworkAddresses = rosInstance.attrNetworkAddresses;
        this.attrNetworkType = rosInstance.attrNetworkType;
        this.attrParameters = rosInstance.attrParameters;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrPreferredBackupPeriod = rosInstance.attrPreferredBackupPeriod;
        this.attrPreferredBackupTime = rosInstance.attrPreferredBackupTime;
        this.attrProtocolType = rosInstance.attrProtocolType;
        this.attrReadonlyReplicas = rosInstance.attrReadonlyReplicas;
        this.attrReplicaSetsConnections = rosInstance.attrReplicaSetsConnections;
        this.attrReplicationFactor = rosInstance.attrReplicationFactor;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrSecondaryZoneId = rosInstance.attrSecondaryZoneId;
        this.attrSecurityGroupId = rosInstance.attrSecurityGroupId;
        this.attrSecurityIpList = rosInstance.attrSecurityIpList;
        this.attrSecurityIps = rosInstance.attrSecurityIps;
        this.attrShardList = rosInstance.attrShardList;
        this.attrSnapshotBackupType = rosInstance.attrSnapshotBackupType;
        this.attrSslExpiredTime = rosInstance.attrSslExpiredTime;
        this.attrSslStatus = rosInstance.attrSslStatus;
        this.attrStorageEngine = rosInstance.attrStorageEngine;
        this.attrTags = rosInstance.attrTags;
        this.attrTdeStatus = rosInstance.attrTdeStatus;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrVpcAuthMode = rosInstance.attrVpcAuthMode;
        this.attrVpcId = rosInstance.attrVpcId;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
