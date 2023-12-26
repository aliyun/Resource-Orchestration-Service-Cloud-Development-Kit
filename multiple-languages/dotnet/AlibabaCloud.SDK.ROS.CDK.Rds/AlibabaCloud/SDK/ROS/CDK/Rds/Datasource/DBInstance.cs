using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::DBInstance`ALIYUN::REDIS::Account is used to create an account that has the specified permissions on an ApsaraDB for Redis instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.DBInstance), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.DBInstance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-rds.datasource.DBInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DBInstance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
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
        [JsiiProperty(name: "attrAccountMaxQuantity", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAccountMaxQuantity
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute AdvancedFeatures: The advanced features that are enabled for the instance.</summary>
        /// <remarks>
        /// If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
        /// LinkedServer
        /// DistributeTransaction
        /// </remarks>
        [JsiiProperty(name: "attrAdvancedFeatures", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAdvancedFeatures
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Auto: automatic update.
        /// Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
        /// </remarks>
        [JsiiProperty(name: "attrAutoUpgradeMinorVersion", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAutoUpgradeMinorVersion
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute AvailabilityValue: The availability status of the instance in percentage.</summary>
        [JsiiProperty(name: "attrAvailabilityValue", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAvailabilityValue
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.</summary>
        [JsiiProperty(name: "attrBabelfishConfig", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrBabelfishConfig
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
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
        [JsiiProperty(name: "attrCategory", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCategory
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Collation: The character set collation of the instance.</summary>
        [JsiiProperty(name: "attrCollation", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCollation
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ConnectionMode: The connection mode of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Standard: standard mode
        /// Safe: database proxy mode
        /// </remarks>
        [JsiiProperty(name: "attrConnectionMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrConnectionMode
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ConnectionString: The internal endpoint of the instance.</summary>
        [JsiiProperty(name: "attrConnectionString", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrConnectionString
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ConsoleVersion: The type of the proxy that is used by the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: shared proxy
        /// 2: dedicated proxy
        /// </remarks>
        [JsiiProperty(name: "attrConsoleVersion", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrConsoleVersion
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute CreationTime: The creation time.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrCreationTime", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCreationTime
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute CurrentKernelVersion: The minor engine version of the instance.</summary>
        [JsiiProperty(name: "attrCurrentKernelVersion", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCurrentKernelVersion
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBClusterNodes: The information about the node in the cluster.</summary>
        [JsiiProperty(name: "attrDbClusterNodes", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbClusterNodes
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceClass: The instance type of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceClass", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceClass
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceClassType: The instance family to which the instance belongs.</summary>
        /// <remarks>
        /// Valid values:
        /// s: shared instance family
        /// x: general-purpose instance family
        /// d: dedicated instance family
        /// h: dedicated host instance family
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceClassType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceClassType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceCPU: The number of CPU cores.</summary>
        [JsiiProperty(name: "attrDbInstanceCpu", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceCpu
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceDescription: The description of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceDescription", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceDescription
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceDiskUsed: The disk usage of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceDiskUsed", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceDiskUsed
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceId: The instance ID.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceMemory: The memory capacity of the instance.</summary>
        /// <remarks>
        /// Unit: MB.
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceMemory", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceMemory
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceNetType: The type of the network over which the instance is connected.</summary>
        /// <remarks>
        /// Valid values:
        /// Internet: Internet
        /// Intranet: internal network
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceNetType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceNetType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceStatus: The status of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceStatus", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceStatus
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceStorage: The storage capacity of the instance.</summary>
        /// <remarks>
        /// Unit: GB.
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceStorage", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceStorage
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceStorageType: The storage type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// local_ssd and ephemeral_ssd: local SSD
        /// cloud_ssd: standard SSD
        /// cloud_essd: enhanced SSD (ESSD)
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceStorageType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceStorageType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBInstanceType: The type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Primary: primary instance
        /// Readonly: read-only instance
        /// Guard: disaster recovery instance
        /// Temp: temporary instance
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbInstanceType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.</summary>
        [JsiiProperty(name: "attrDbMaxQuantity", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDbMaxQuantity
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DedicatedHostGroupId: The ID of the dedicated cluster.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDedicatedHostGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DeletionProtection: Indicates whether the release protection feature is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// </remarks>
        [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDeletionProtection
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Engine: The database engine of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// MySQL
        /// PostgreSQL
        /// SQLServer
        /// MariaDB
        /// </remarks>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrEngine
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute EngineVersion: The database engine version.</summary>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrEngineVersion
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ExpireTime: The expiration time.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// Note: Pay-as-you-go instances never expire.
        /// </remarks>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrExpireTime
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Extra: The extended information of the instance.</summary>
        [JsiiProperty(name: "attrExtra", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrExtra
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs.</summary>
        /// <remarks>
        /// This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
        /// </remarks>
        [JsiiProperty(name: "attrGeneralGroupName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrGeneralGroupName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.</summary>
        [JsiiProperty(name: "attrGuardDbInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrGuardDbInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes.</summary>
        /// <remarks>
        /// The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
        /// </remarks>
        [JsiiProperty(name: "attrIncrementSourceDbInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrIncrementSourceDbInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute InstanceNetworkType: The network type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Classic
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "attrInstanceNetworkType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInstanceNetworkType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute InstructionSetArch: The architecture type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// x86
        /// arm
        /// </remarks>
        [JsiiProperty(name: "attrInstructionSetArch", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInstructionSetArch
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute IPType: The type of the IP address.</summary>
        /// <remarks>
        /// Only IPv4 addresses are supported.
        /// </remarks>
        [JsiiProperty(name: "attrIpType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrIpType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.</summary>
        [JsiiProperty(name: "attrLatestKernelVersion", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLatestKernelVersion
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
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
        [JsiiProperty(name: "attrLockMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLockMode
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute LockReason: The reason why the instance was locked.</summary>
        [JsiiProperty(name: "attrLockReason", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLockReason
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MaintainTime: The maintenance window of the instance.</summary>
        /// <remarks>
        /// The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
        /// </remarks>
        [JsiiProperty(name: "attrMaintainTime", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMaintainTime
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MasterInstanceId: The ID of the primary instance.</summary>
        /// <remarks>
        /// Note: If this parameter is not returned, the instance is the primary instance.
        /// </remarks>
        [JsiiProperty(name: "attrMasterInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMasterInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MasterZone: The zone ID of the primary instance.</summary>
        [JsiiProperty(name: "attrMasterZone", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMasterZone
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MaxConnections: The maximum number of concurrent connections.</summary>
        [JsiiProperty(name: "attrMaxConnections", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMaxConnections
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MaxIOMBPS: The maximum I/O throughput.</summary>
        /// <remarks>
        /// Unit: MB/s.
        /// </remarks>
        [JsiiProperty(name: "attrMaxIombps", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMaxIombps
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MaxIOPS: The maximum number of I/O requests per second.</summary>
        [JsiiProperty(name: "attrMaxIops", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMaxIops
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute PayType: The billing method of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "attrPayType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPayType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.</summary>
        [JsiiProperty(name: "attrPgBouncerEnabled", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPgBouncerEnabled
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Port: The port that is used to connect to the instance over an internal network.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPort
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ProxyType: The type of the proxy that is supported by the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: The instance does not support database proxies.
        /// 1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
        /// 2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
        /// </remarks>
        [JsiiProperty(name: "attrProxyType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrProxyType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.</summary>
        [JsiiProperty(name: "attrReadOnlyDbInstanceIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrReadOnlyDbInstanceIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances.</summary>
        /// <remarks>
        /// The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrReadonlyInstanceSqlDelayedTime", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrReadonlyInstanceSqlDelayedTime
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ResourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrResourceGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SecurityIPList: The IP addresses in the IP address whitelist.</summary>
        [JsiiProperty(name: "attrSecurityIpList", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSecurityIpList
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SecurityIPMode: The whitelist mode of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// normal: standard whitelist mode
        /// safety: enhanced whitelist mode
        /// </remarks>
        [JsiiProperty(name: "attrSecurityIpMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSecurityIpMode
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ServerlessConfig: The settings of the serverless instance.</summary>
        [JsiiProperty(name: "attrServerlessConfig", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrServerlessConfig
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SlaveZones: The information about the zone of the secondary instance.</summary>
        [JsiiProperty(name: "attrSlaveZones", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSlaveZones
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.</summary>
        /// <remarks>
        /// Enable
        /// Disabled
        /// </remarks>
        [JsiiProperty(name: "attrSuperPermissionMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSuperPermissionMode
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.</summary>
        [JsiiProperty(name: "attrTempDbInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTempDbInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute TimeZone: The time zone of the instance.</summary>
        [JsiiProperty(name: "attrTimeZone", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTimeZone
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Tips: The information about the exception that is detected on the instance.</summary>
        /// <remarks>
        /// This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
        /// </remarks>
        [JsiiProperty(name: "attrTips", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTips
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute TipsLevel: The severity level of the exception that is detected on the instance.</summary>
        /// <remarks>
        /// This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
        /// 1: The instance is normal.
        /// 2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
        /// </remarks>
        [JsiiProperty(name: "attrTipsLevel", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTipsLevel
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute VpcCloudInstanceId: The VPC ID.</summary>
        [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVpcCloudInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute VpcId: The virtual private cloud (VPC) ID of the instance.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVpcId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute VSwitchId: The vSwitch ID.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVSwitchId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ZoneId: The zone ID.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrZoneId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }
    }
}
