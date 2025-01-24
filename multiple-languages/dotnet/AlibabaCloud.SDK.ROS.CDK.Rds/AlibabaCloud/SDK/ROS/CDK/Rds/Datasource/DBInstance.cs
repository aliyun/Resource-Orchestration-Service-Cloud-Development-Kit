using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::DBInstance`, which is used to query an ApsaraDB RDS instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.DBInstance), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.DBInstance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-rds.datasource.DBInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DBInstance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDBInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public DBInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDBInstanceProps? props = null, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDBInstanceProps? props = null, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBInstance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.</summary>
        [JsiiProperty(name: "attrAccountMaxQuantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAccountMaxQuantity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AdvancedFeatures: The advanced features that are enabled for the instance.</summary>
        /// <remarks>
        /// If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
        /// LinkedServer
        /// DistributeTransaction
        /// </remarks>
        [JsiiProperty(name: "attrAdvancedFeatures", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAdvancedFeatures
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Auto: automatic update.
        /// Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
        /// </remarks>
        [JsiiProperty(name: "attrAutoUpgradeMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoUpgradeMinorVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AvailabilityValue: The availability status of the instance in percentage.</summary>
        [JsiiProperty(name: "attrAvailabilityValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAvailabilityValue
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.</summary>
        [JsiiProperty(name: "attrBabelfishConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBabelfishConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Category: The RDS edition of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Basic: RDS Basic Edition
        /// HighAvailability: RDS High-availability Edition
        /// cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
        /// AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
        /// Finance: RDS Enterprise Edition
        /// Serverless_basic: RDS Basic Edition for serverless instances
        /// </remarks>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCategory
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Collation: The character set collation of the instance.</summary>
        [JsiiProperty(name: "attrCollation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCollation
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionMode: The connection mode of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Standard: standard mode
        /// Safe: database proxy mode
        /// </remarks>
        [JsiiProperty(name: "attrConnectionMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionString: The internal endpoint of the instance.</summary>
        [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConsoleVersion: The type of the proxy that is used by the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: shared proxy
        /// 2: dedicated proxy
        /// </remarks>
        [JsiiProperty(name: "attrConsoleVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConsoleVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreationTime: The creation time.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrCreationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreationTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CurrentKernelVersion: The minor engine version of the instance.</summary>
        [JsiiProperty(name: "attrCurrentKernelVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCurrentKernelVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBClusterNodes: The information about the node in the cluster.</summary>
        [JsiiProperty(name: "attrDbClusterNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbClusterNodes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceClass: The instance type of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceClass
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceClassType: The instance family to which the instance belongs.</summary>
        /// <remarks>
        /// Valid values:
        /// s: shared instance family
        /// x: general-purpose instance family
        /// d: dedicated instance family
        /// h: dedicated host instance family
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceClassType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceClassType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceCPU: The number of CPU cores.</summary>
        [JsiiProperty(name: "attrDbInstanceCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceCpu
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceDescription: The description of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceDiskUsed: The disk usage of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceDiskUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceDiskUsed
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceId: The instance ID.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceMemory: The memory capacity of the instance.</summary>
        /// <remarks>
        /// Unit: MB.
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceMemory
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceNetType: The type of the network over which the instance is connected.</summary>
        /// <remarks>
        /// Valid values:
        /// Internet: Internet
        /// Intranet: internal network
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceNetType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceStatus: The status of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceStorage: The storage capacity of the instance.</summary>
        /// <remarks>
        /// Unit: GB.
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceStorage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceStorageType: The storage type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// local_ssd and ephemeral_ssd: local SSD
        /// cloud_ssd: standard SSD
        /// cloud_essd: enhanced SSD (ESSD)
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceStorageType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceType: The type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Primary: primary instance
        /// Readonly: read-only instance
        /// Guard: disaster recovery instance
        /// Temp: temporary instance
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.</summary>
        [JsiiProperty(name: "attrDbMaxQuantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbMaxQuantity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DedicatedHostGroupId: The ID of the dedicated cluster.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDedicatedHostGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeletionProtection: Indicates whether the release protection feature is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// </remarks>
        [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDeletionProtection
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Engine: The database engine of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// MySQL
        /// PostgreSQL
        /// SQLServer
        /// MariaDB
        /// </remarks>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngine
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EngineVersion: The database engine version.</summary>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngineVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExpireTime: The expiration time.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// Note: Pay-as-you-go instances never expire.
        /// </remarks>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExpireTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Extra: The extended information of the instance.</summary>
        [JsiiProperty(name: "attrExtra", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExtra
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs.</summary>
        /// <remarks>
        /// This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
        /// </remarks>
        [JsiiProperty(name: "attrGeneralGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGeneralGroupName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.</summary>
        [JsiiProperty(name: "attrGuardDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGuardDbInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes.</summary>
        /// <remarks>
        /// The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
        /// </remarks>
        [JsiiProperty(name: "attrIncrementSourceDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIncrementSourceDbInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceNetworkType: The network type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Classic
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "attrInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceNetworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstructionSetArch: The architecture type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// x86
        /// arm
        /// </remarks>
        [JsiiProperty(name: "attrInstructionSetArch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstructionSetArch
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IPType: The type of the IP address.</summary>
        /// <remarks>
        /// Only IPv4 addresses are supported.
        /// </remarks>
        [JsiiProperty(name: "attrIpType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIpType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.</summary>
        [JsiiProperty(name: "attrLatestKernelVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLatestKernelVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LockMode: The lock mode of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Unlock: The instance is not locked.
        /// ManualLock: The instance is manually locked.
        /// LockByExpiration: The instance is automatically locked due to instance expiration.
        /// LockByRestoration: The instance is automatically locked due to instance restoration.
        /// LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
        /// LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
        /// </remarks>
        [JsiiProperty(name: "attrLockMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLockMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LockReason: The reason why the instance was locked.</summary>
        [JsiiProperty(name: "attrLockReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLockReason
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintainTime: The maintenance window of the instance.</summary>
        /// <remarks>
        /// The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
        /// </remarks>
        [JsiiProperty(name: "attrMaintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintainTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterInstanceId: The ID of the primary instance.</summary>
        /// <remarks>
        /// Note: If this parameter is not returned, the instance is the primary instance.
        /// </remarks>
        [JsiiProperty(name: "attrMasterInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMasterInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterZone: The zone ID of the primary instance.</summary>
        [JsiiProperty(name: "attrMasterZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMasterZone
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaxConnections: The maximum number of concurrent connections.</summary>
        [JsiiProperty(name: "attrMaxConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaxConnections
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaxIOMBPS: The maximum I/O throughput.</summary>
        /// <remarks>
        /// Unit: MB/s.
        /// </remarks>
        [JsiiProperty(name: "attrMaxIombps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaxIombps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaxIOPS: The maximum number of I/O requests per second.</summary>
        [JsiiProperty(name: "attrMaxIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaxIops
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PayType: The billing method of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "attrPayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPayType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.</summary>
        [JsiiProperty(name: "attrPgBouncerEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPgBouncerEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Port: The port that is used to connect to the instance over an internal network.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProxyType: The type of the proxy that is supported by the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: The instance does not support database proxies.
        /// 1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
        /// 2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
        /// </remarks>
        [JsiiProperty(name: "attrProxyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProxyType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.</summary>
        [JsiiProperty(name: "attrReadOnlyDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReadOnlyDbInstanceIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances.</summary>
        /// <remarks>
        /// The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrReadonlyInstanceSqlDelayedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReadonlyInstanceSqlDelayedTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityIPList: The IP addresses in the IP address whitelist.</summary>
        [JsiiProperty(name: "attrSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityIpList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityIPMode: The whitelist mode of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// normal: standard whitelist mode
        /// safety: enhanced whitelist mode
        /// </remarks>
        [JsiiProperty(name: "attrSecurityIpMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityIpMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServerlessConfig: The settings of the serverless instance.</summary>
        [JsiiProperty(name: "attrServerlessConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServerlessConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SlaveZones: The information about the zone of the secondary instance.</summary>
        [JsiiProperty(name: "attrSlaveZones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSlaveZones
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.</summary>
        /// <remarks>
        /// Enable
        /// Disabled
        /// </remarks>
        [JsiiProperty(name: "attrSuperPermissionMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSuperPermissionMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.</summary>
        [JsiiProperty(name: "attrTempDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTempDbInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TimeZone: The time zone of the instance.</summary>
        [JsiiProperty(name: "attrTimeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTimeZone
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tips: The information about the exception that is detected on the instance.</summary>
        /// <remarks>
        /// This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
        /// </remarks>
        [JsiiProperty(name: "attrTips", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTips
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TipsLevel: The severity level of the exception that is detected on the instance.</summary>
        /// <remarks>
        /// This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
        /// 1: The instance is normal.
        /// 2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
        /// </remarks>
        [JsiiProperty(name: "attrTipsLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTipsLevel
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcCloudInstanceId: The VPC ID.</summary>
        [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcCloudInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: The virtual private cloud (VPC) ID of the instance.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The vSwitch ID.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: The zone ID.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-rds.datasource.DBInstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDBInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDBInstanceProps>()!;
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
