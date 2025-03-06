using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource
{
    /// <summary>Represents a `Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.datasource.IInstance")]
    public interface IInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccountDescription: The description of the account.</summary>
        [JsiiProperty(name: "attrAccountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccountDescription
        {
            get;
        }

        /// <summary>Attribute AccountName: The name of the account.</summary>
        /// <remarks>
        /// Value: **root * *.
        /// </remarks>
        [JsiiProperty(name: "attrAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccountName
        {
            get;
        }

        /// <summary>Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// true: Auto-renewal is enabled for the instance.
        /// false: Auto-renewal is disabled for the instance.
        /// </remarks>
        [JsiiProperty(name: "attrAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoRenew
        {
            get;
        }

        /// <summary>Attribute AutoRenewDuration: Auto Renew Duration.</summary>
        [JsiiProperty(name: "attrAutoRenewDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoRenewDuration
        {
            get;
        }

        /// <summary>Attribute BackupInterval: The frequency at which high-frequency backup is created.</summary>
        /// <remarks>
        /// Valid values:
        /// -1: High-frequency backup is disabled.
        /// 15: every 15 minutes.
        /// 30: every 30 minutes.
        /// 60: every hour.
        /// 120: every 2 hours.
        /// 180: every 3 hours.
        /// 240: every 4 hours.
        /// 360: every 6 hours.
        /// 480: every 8 hours.
        /// 720: every 12 hours.
        /// </remarks>
        [JsiiProperty(name: "attrBackupInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupInterval
        {
            get;
        }

        /// <summary>Attribute BackupRetentionPeriod: The retention period of the backup data.</summary>
        /// <remarks>
        /// Unit: day.
        /// </remarks>
        [JsiiProperty(name: "attrBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupRetentionPeriod
        {
            get;
        }

        /// <summary>Attribute CreateTime: The Database create time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DBInstanceClass: The instance type of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceClass
        {
            get;
        }

        /// <summary>Attribute DBInstanceDescription: The name of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceDescription
        {
            get;
        }

        /// <summary>Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceReleaseProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceReleaseProtection
        {
            get;
        }

        /// <summary>Attribute DbInstanceStorage: The storage capacity of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceStorage
        {
            get;
        }

        /// <summary>Attribute DBInstanceType: The architecture of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// replicate: replica set instance
        /// sharding: sharded cluster instance
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceType
        {
            get;
        }

        /// <summary>Attribute EnableBackupLog: Indicates whether the log backup feature is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// 0 (default): The log backup feature is disabled.
        /// 1: The log backup feature is enabled.
        /// </remarks>
        [JsiiProperty(name: "attrEnableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableBackupLog
        {
            get;
        }

        /// <summary>Attribute Engine: The database engine of the instance.</summary>
        /// <remarks>
        /// Default value: mongodb.
        /// </remarks>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngine
        {
            get;
        }

        /// <summary>Attribute EngineVersion: The database engine version of the instance.</summary>
        /// <remarks>
        /// 6.0
        /// 5.0
        /// 4.4
        /// 4.2
        /// 4.0
        /// </remarks>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngineVersion
        {
            get;
        }

        /// <summary>Attribute ExpireTime: The time when the subscription instance expires.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpireTime
        {
            get;
        }

        /// <summary>Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.</summary>
        [JsiiProperty(name: "attrHiddenZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHiddenZoneId
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the mongos.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute KindCode: The kind code of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: physical machine
        /// 1: Elastic Compute Service (ECS) instance
        /// 2: Docker cluster
        /// 18: Kubernetes cluster
        /// </remarks>
        [JsiiProperty(name: "attrKindCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKindCode
        {
            get;
        }

        /// <summary>Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.</summary>
        [JsiiProperty(name: "attrLastDowngradeTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastDowngradeTime
        {
            get;
        }

        /// <summary>Attribute LockMode: The lock status of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Unlock: The instance is not locked.
        /// ManualLock: The instance is manually locked.
        /// LockByExpiration: The instance is automatically locked due to instance expiration.
        /// LockByRestoration: The instance is automatically locked before the instance is rolled back.
        /// LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
        /// Released: The instance is released.
        /// </remarks>
        [JsiiProperty(name: "attrLockMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLockMode
        {
            get;
        }

        /// <summary>Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.</summary>
        /// <remarks>
        /// Valid values: 7 to 730.
        /// </remarks>
        [JsiiProperty(name: "attrLogBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLogBackupRetentionPeriod
        {
            get;
        }

        /// <summary>Attribute MaintainEndTime: The end time of the maintenance window.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrMaintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintainEndTime
        {
            get;
        }

        /// <summary>Attribute MaintainStartTime: The start time of the maintenance window.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrMaintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintainStartTime
        {
            get;
        }

        /// <summary>Attribute MongosList: The information of the mongos nodes.</summary>
        [JsiiProperty(name: "attrMongosList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMongosList
        {
            get;
        }

        /// <summary>Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.</summary>
        [JsiiProperty(name: "attrNetworkAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkAddresses
        {
            get;
        }

        /// <summary>Attribute NetworkType: The network type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Classic: classic network
        /// VPC: VPC
        /// </remarks>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkType
        {
            get;
        }

        /// <summary>Attribute Parameters: The settings of the parameters that have taken effect.</summary>
        [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameters
        {
            get;
        }

        /// <summary>Attribute PaymentType: The billing method of the Database.</summary>
        /// <remarks>
        /// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        /// </remarks>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute PreferredBackupPeriod: The day of a week on which to back up data.</summary>
        /// <remarks>
        /// Valid values:
        /// Monday
        /// Tuesday
        /// Wednesday
        /// Thursday
        /// Friday
        /// Saturday
        /// Sunday
        /// </remarks>
        [JsiiProperty(name: "attrPreferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPreferredBackupPeriod
        {
            get;
        }

        /// <summary>Attribute PreferredBackupTime: The time range during which the backup was created.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrPreferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPreferredBackupTime
        {
            get;
        }

        /// <summary>Attribute ProtocolType: The access protocol type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// mongodb
        /// dynamodb
        /// </remarks>
        [JsiiProperty(name: "attrProtocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProtocolType
        {
            get;
        }

        /// <summary>Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.</summary>
        /// <remarks>
        /// Valid values: 0 to 5. The value must be an integer.
        /// </remarks>
        [JsiiProperty(name: "attrReadonlyReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReadonlyReplicas
        {
            get;
        }

        /// <summary>Attribute ReplicaSetsConnections: ReplicaSets Connections.</summary>
        [JsiiProperty(name: "attrReplicaSetsConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicaSetsConnections
        {
            get;
        }

        /// <summary>Attribute ReplicationFactor: The number of nodes in the instance.</summary>
        [JsiiProperty(name: "attrReplicationFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicationFactor
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.</summary>
        [JsiiProperty(name: "attrSecondaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecondaryZoneId
        {
            get;
        }

        /// <summary>Attribute SecurityGroupId: The ID of the ECS security group.</summary>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupId
        {
            get;
        }

        /// <summary>Attribute SecurityIpList: The name of the IP whitelist.</summary>
        [JsiiProperty(name: "attrSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIpList
        {
            get;
        }

        /// <summary>Attribute SecurityIps: The IP addresses in the default whitelist.</summary>
        [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIps
        {
            get;
        }

        /// <summary>Attribute ShardList: The information of the shard nodes.</summary>
        [JsiiProperty(name: "attrShardList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrShardList
        {
            get;
        }

        /// <summary>Attribute SnapshotBackupType: The snapshot backup type.</summary>
        /// <remarks>
        /// Valid values:
        /// Flash: single-digit second backup
        /// Standard (default): standard backup
        /// </remarks>
        [JsiiProperty(name: "attrSnapshotBackupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSnapshotBackupType
        {
            get;
        }

        /// <summary>Attribute SslExpiredTime: The time when the SSL certificate expires.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
        /// </remarks>
        [JsiiProperty(name: "attrSslExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSslExpiredTime
        {
            get;
        }

        /// <summary>Attribute SslStatus: The status of the SSL feature.</summary>
        /// <remarks>
        /// Valid values:
        /// Open: The SSL feature is enabled.
        /// Closed: The SSL feature is disabled.
        /// </remarks>
        [JsiiProperty(name: "attrSslStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSslStatus
        {
            get;
        }

        /// <summary>Attribute StorageEngine: The Storage Engine Of The Instance Type.</summary>
        [JsiiProperty(name: "attrStorageEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageEngine
        {
            get;
        }

        /// <summary>Attribute Tags: The details of the instance tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute TdeStatus: The TDE status.</summary>
        /// <remarks>
        /// Valid values:
        /// enabled
        /// disabled
        /// </remarks>
        [JsiiProperty(name: "attrTdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTdeStatus
        {
            get;
        }

        /// <summary>Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// Open: Password-free access within the VPC is enabled.
        /// Close: Password-free access within the VPC is disabled, and you must use a password for access.
        /// NotSupport: Password-free access within the VPC is not supported.
        /// </remarks>
        [JsiiProperty(name: "attrVpcAuthMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcAuthMode
        {
            get;
        }

        /// <summary>Attribute VpcId: The VPC ID of the instance.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: The vSwitch ID of the instance.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        /// <summary>Attribute ZoneId: The ID of the zone in which the instance resides.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mongodb.datasource.InstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.datasource.IInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccountDescription: The description of the account.</summary>
            [JsiiProperty(name: "attrAccountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccountDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AccountName: The name of the account.</summary>
            /// <remarks>
            /// Value: **root * *.
            /// </remarks>
            [JsiiProperty(name: "attrAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// true: Auto-renewal is enabled for the instance.
            /// false: Auto-renewal is disabled for the instance.
            /// </remarks>
            [JsiiProperty(name: "attrAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoRenew
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoRenewDuration: Auto Renew Duration.</summary>
            [JsiiProperty(name: "attrAutoRenewDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoRenewDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupInterval: The frequency at which high-frequency backup is created.</summary>
            /// <remarks>
            /// Valid values:
            /// -1: High-frequency backup is disabled.
            /// 15: every 15 minutes.
            /// 30: every 30 minutes.
            /// 60: every hour.
            /// 120: every 2 hours.
            /// 180: every 3 hours.
            /// 240: every 4 hours.
            /// 360: every 6 hours.
            /// 480: every 8 hours.
            /// 720: every 12 hours.
            /// </remarks>
            [JsiiProperty(name: "attrBackupInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupInterval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupRetentionPeriod: The retention period of the backup data.</summary>
            /// <remarks>
            /// Unit: day.
            /// </remarks>
            [JsiiProperty(name: "attrBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupRetentionPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The Database create time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceClass: The instance type of the instance.</summary>
            [JsiiProperty(name: "attrDbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceDescription: The name of the instance.</summary>
            [JsiiProperty(name: "attrDbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false
            /// </remarks>
            [JsiiProperty(name: "attrDbInstanceReleaseProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceReleaseProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstanceStorage: The storage capacity of the instance.</summary>
            [JsiiProperty(name: "attrDbInstanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceType: The architecture of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// replicate: replica set instance
            /// sharding: sharded cluster instance
            /// </remarks>
            [JsiiProperty(name: "attrDbInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableBackupLog: Indicates whether the log backup feature is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// 0 (default): The log backup feature is disabled.
            /// 1: The log backup feature is enabled.
            /// </remarks>
            [JsiiProperty(name: "attrEnableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableBackupLog
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Engine: The database engine of the instance.</summary>
            /// <remarks>
            /// Default value: mongodb.
            /// </remarks>
            [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EngineVersion: The database engine version of the instance.</summary>
            /// <remarks>
            /// 6.0
            /// 5.0
            /// 4.4
            /// 4.2
            /// 4.0
            /// </remarks>
            [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpireTime: The time when the subscription instance expires.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpireTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.</summary>
            [JsiiProperty(name: "attrHiddenZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHiddenZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the mongos.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KindCode: The kind code of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: physical machine
            /// 1: Elastic Compute Service (ECS) instance
            /// 2: Docker cluster
            /// 18: Kubernetes cluster
            /// </remarks>
            [JsiiProperty(name: "attrKindCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKindCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.</summary>
            [JsiiProperty(name: "attrLastDowngradeTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastDowngradeTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LockMode: The lock status of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Unlock: The instance is not locked.
            /// ManualLock: The instance is manually locked.
            /// LockByExpiration: The instance is automatically locked due to instance expiration.
            /// LockByRestoration: The instance is automatically locked before the instance is rolled back.
            /// LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
            /// Released: The instance is released.
            /// </remarks>
            [JsiiProperty(name: "attrLockMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLockMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.</summary>
            /// <remarks>
            /// Valid values: 7 to 730.
            /// </remarks>
            [JsiiProperty(name: "attrLogBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLogBackupRetentionPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintainEndTime: The end time of the maintenance window.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrMaintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintainEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintainStartTime: The start time of the maintenance window.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrMaintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintainStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MongosList: The information of the mongos nodes.</summary>
            [JsiiProperty(name: "attrMongosList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMongosList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.</summary>
            [JsiiProperty(name: "attrNetworkAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkAddresses
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkType: The network type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Classic: classic network
            /// VPC: VPC
            /// </remarks>
            [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Parameters: The settings of the parameters that have taken effect.</summary>
            [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The billing method of the Database.</summary>
            /// <remarks>
            /// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
            /// </remarks>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PreferredBackupPeriod: The day of a week on which to back up data.</summary>
            /// <remarks>
            /// Valid values:
            /// Monday
            /// Tuesday
            /// Wednesday
            /// Thursday
            /// Friday
            /// Saturday
            /// Sunday
            /// </remarks>
            [JsiiProperty(name: "attrPreferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPreferredBackupPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PreferredBackupTime: The time range during which the backup was created.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrPreferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPreferredBackupTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProtocolType: The access protocol type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// mongodb
            /// dynamodb
            /// </remarks>
            [JsiiProperty(name: "attrProtocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.</summary>
            /// <remarks>
            /// Valid values: 0 to 5. The value must be an integer.
            /// </remarks>
            [JsiiProperty(name: "attrReadonlyReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReadonlyReplicas
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplicaSetsConnections: ReplicaSets Connections.</summary>
            [JsiiProperty(name: "attrReplicaSetsConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicaSetsConnections
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplicationFactor: The number of nodes in the instance.</summary>
            [JsiiProperty(name: "attrReplicationFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicationFactor
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.</summary>
            [JsiiProperty(name: "attrSecondaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecondaryZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupId: The ID of the ECS security group.</summary>
            [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIpList: The name of the IP whitelist.</summary>
            [JsiiProperty(name: "attrSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIps: The IP addresses in the default whitelist.</summary>
            [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ShardList: The information of the shard nodes.</summary>
            [JsiiProperty(name: "attrShardList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrShardList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SnapshotBackupType: The snapshot backup type.</summary>
            /// <remarks>
            /// Valid values:
            /// Flash: single-digit second backup
            /// Standard (default): standard backup
            /// </remarks>
            [JsiiProperty(name: "attrSnapshotBackupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSnapshotBackupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SslExpiredTime: The time when the SSL certificate expires.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
            /// </remarks>
            [JsiiProperty(name: "attrSslExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSslExpiredTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SslStatus: The status of the SSL feature.</summary>
            /// <remarks>
            /// Valid values:
            /// Open: The SSL feature is enabled.
            /// Closed: The SSL feature is disabled.
            /// </remarks>
            [JsiiProperty(name: "attrSslStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSslStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageEngine: The Storage Engine Of The Instance Type.</summary>
            [JsiiProperty(name: "attrStorageEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageEngine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The details of the instance tags.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TdeStatus: The TDE status.</summary>
            /// <remarks>
            /// Valid values:
            /// enabled
            /// disabled
            /// </remarks>
            [JsiiProperty(name: "attrTdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTdeStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// Open: Password-free access within the VPC is enabled.
            /// Close: Password-free access within the VPC is disabled, and you must use a password for access.
            /// NotSupport: Password-free access within the VPC is not supported.
            /// </remarks>
            [JsiiProperty(name: "attrVpcAuthMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcAuthMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The VPC ID of the instance.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: The vSwitch ID of the instance.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: The ID of the zone in which the instance resides.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mongodb.datasource.InstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstanceProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
