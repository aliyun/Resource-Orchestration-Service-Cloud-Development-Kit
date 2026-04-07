using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::MONGODB::Instance`, which is used to query the information about an ApsaraDB for MongoDB instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.Instance), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.datasource.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-mongodb.datasource.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstanceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AccountDescription: The description of the account.</summary>
        [JsiiProperty(name: "attrAccountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAccountDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AccountName: The name of the account.</summary>
        /// <remarks>
        /// Value: **root * *.
        /// </remarks>
        [JsiiProperty(name: "attrAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAccountName
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
        public virtual object AttrAutoRenew
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoRenewDuration: Auto Renew Duration.</summary>
        [JsiiProperty(name: "attrAutoRenewDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoRenewDuration
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
        public virtual object AttrBackupInterval
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackupRetentionPeriod: The retention period of the backup data.</summary>
        /// <remarks>
        /// Unit: day.
        /// </remarks>
        [JsiiProperty(name: "attrBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupRetentionPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The Database create time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceClass: The instance type of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceClass
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceDescription: The name of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceDescription
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
        public virtual object AttrDbInstanceReleaseProtection
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DbInstanceStorage: The storage capacity of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceStorage
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
        public virtual object AttrDbInstanceType
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
        public virtual object AttrEnableBackupLog
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Engine: The database engine of the instance.</summary>
        /// <remarks>
        /// Default value: mongodb.
        /// </remarks>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngine
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
        public virtual object AttrEngineVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExpireTime: The time when the subscription instance expires.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExpireTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.</summary>
        [JsiiProperty(name: "attrHiddenZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHiddenZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: The ID of the mongos.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceId
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
        public virtual object AttrKindCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.</summary>
        [JsiiProperty(name: "attrLastDowngradeTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLastDowngradeTime
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
        public virtual object AttrLockMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.</summary>
        /// <remarks>
        /// Valid values: 7 to 730.
        /// </remarks>
        [JsiiProperty(name: "attrLogBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLogBackupRetentionPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintainEndTime: The end time of the maintenance window.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrMaintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintainEndTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintainStartTime: The start time of the maintenance window.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrMaintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintainStartTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MongosList: The information of the mongos nodes.</summary>
        [JsiiProperty(name: "attrMongosList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMongosList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.</summary>
        [JsiiProperty(name: "attrNetworkAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetworkAddresses
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
        public virtual object AttrNetworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Parameters: The settings of the parameters that have taken effect.</summary>
        [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrParameters
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: The billing method of the Database.</summary>
        /// <remarks>
        /// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        /// </remarks>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
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
        public virtual object AttrPreferredBackupPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PreferredBackupTime: The time range during which the backup was created.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrPreferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPreferredBackupTime
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
        public virtual object AttrProtocolType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.</summary>
        /// <remarks>
        /// Valid values: 0 to 5. The value must be an integer.
        /// </remarks>
        [JsiiProperty(name: "attrReadonlyReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReadonlyReplicas
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReplicaSetsConnections: ReplicaSets Connections.</summary>
        [JsiiProperty(name: "attrReplicaSetsConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReplicaSetsConnections
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReplicationFactor: The number of nodes in the instance.</summary>
        [JsiiProperty(name: "attrReplicationFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReplicationFactor
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.</summary>
        [JsiiProperty(name: "attrSecondaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecondaryZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityGroupId: The ID of the ECS security group.</summary>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityIpList: The name of the IP whitelist.</summary>
        [JsiiProperty(name: "attrSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityIpList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityIps: The IP addresses in the default whitelist.</summary>
        [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ShardList: The information of the shard nodes.</summary>
        [JsiiProperty(name: "attrShardList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrShardList
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
        public virtual object AttrSnapshotBackupType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SslExpiredTime: The time when the SSL certificate expires.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
        /// </remarks>
        [JsiiProperty(name: "attrSslExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSslExpiredTime
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
        public virtual object AttrSslStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageEngine: The Storage Engine Of The Instance Type.</summary>
        [JsiiProperty(name: "attrStorageEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageEngine
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The details of the instance tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
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
        public virtual object AttrTdeStatus
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
        public virtual object AttrVpcAuthMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: The VPC ID of the instance.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The vSwitch ID of the instance.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: The ID of the zone in which the instance resides.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mongodb.datasource.InstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstanceProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
