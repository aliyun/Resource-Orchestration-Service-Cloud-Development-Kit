using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `DBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterProps")]
    public interface IDBClusterProps
    {
        /// <summary>Property dbNodeClass: The node specifications of the cluster.</summary>
        /// <remarks>
        /// For more information, see Specifications and pricing.
        /// </remarks>
        [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbNodeClass
        {
            get;
        }

        /// <summary>Property dbType: Database type, value: MySQL PostgreSQL Oracle.</summary>
        [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbType
        {
            get;
        }

        /// <summary>Property dbVersion: The version of the database.</summary>
        /// <remarks>
        /// Valid values:
        /// MySQL: 5.6, 5.7 or 8.0
        /// PostgreSQL: 11, 14, 15
        /// Oracle: 11, 14
        /// </remarks>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbVersion
        {
            get;
        }

        /// <summary>Property payType: The billing method of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property allowShutDown: Whether to turn on No activity pause.</summary>
        /// <remarks>
        /// The default is false.
        /// </remarks>
        [JsiiProperty(name: "allowShutDown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowShutDown
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property architecture: The architecture of CPU.</summary>
        /// <remarks>
        /// Valid values:
        /// X86
        /// ARM
        /// </remarks>
        [JsiiProperty(name: "architecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Architecture
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewPeriod: Set the cluster auto renewal time.</summary>
        /// <remarks>
        /// Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        /// </remarks>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.</summary>
        /// <remarks>
        /// LATEST: Permanently keep the last backup (automatic backup before deletion).
        /// NONE: The backup set is not retained when the cluster is deleted.
        /// When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
        /// Note: This parameter takes effect only when the value of DBType is MySQL.
        /// </remarks>
        [JsiiProperty(name: "backupRetentionPolicyOnClusterDeletion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupRetentionPolicyOnClusterDeletion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cloneDataPoint: The time point of data to be cloned.</summary>
        /// <remarks>
        /// Valid values:
        /// LATEST: clones data of the latest time point.
        /// <BackupID xmlns="http://www.w3.org/1999/xhtml"></BackupID>: clones historical backup data. Specify the ID of the specific backup set.
        /// <Timestamp xmlns="http://www.w3.org/1999/xhtml"></Timestamp>: clones data of a historical time point. Specify the specific time in
        /// the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
        /// Default value: LATEST.
        /// Note
        /// This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
        /// If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
        /// </remarks>
        [JsiiProperty(name: "cloneDataPoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CloneDataPoint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterNetworkType: The network type of the cluster.</summary>
        /// <remarks>
        /// Currently, only VPC is supported. Default value: VPC.
        /// </remarks>
        [JsiiProperty(name: "clusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property coldStorageOption: The option of cold storage.</summary>
        [JsiiProperty(name: "coldStorageOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.ColdStorageOptionProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ColdStorageOption
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property creationCategory: Cluster series.</summary>
        /// <remarks>
        /// The value could be Normal (standard version), Basic, ArchiveNormal, NormalMultimaster and SENormal.
        /// </remarks>
        [JsiiProperty(name: "creationCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreationCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Normal: creates an ApsaraDB for POLARDB cluster.
        /// CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
        /// CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
        /// for POLARDB cluster.
        /// MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
        /// CreateGdnStandby: Create a secondary cluster.
        /// RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster.
        /// UpgradeFromPolarDB: Upgrade migration from PolarDB.
        /// Default value: Normal.
        /// Note:
        /// When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
        /// When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
        /// </remarks>
        [JsiiProperty(name: "creationOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreationOption
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
        /// <remarks>
        /// The description must comply with the following rules:
        /// It must start with a Chinese character or an English letter.
        /// It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
        /// It cannot start with http:// or https://.
        /// It must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.</summary>
        [JsiiProperty(name: "dbClusterParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbMinorVersion: The minor version of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// 8.0.2
        /// 8.0.1
        /// This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
        /// </remarks>
        [JsiiProperty(name: "dbMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbMinorVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbNodeNum: The number of Standard Edition nodes.</summary>
        /// <remarks>
        /// Default value: 1. Valid values:
        /// 1: only one primary node.
        /// 2: one read-only node and one primary node.
        /// </remarks>
        [JsiiProperty(name: "dbNodeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbNodeNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.</summary>
        /// <remarks>
        /// This is default value.
        /// Other pickable value range is from -12:00 to +13:00, for example, 00:00.
        /// Note: This parameter takes effect only when DBType is MySQL.
        /// </remarks>
        [JsiiProperty(name: "defaultTimeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultTimeZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.</summary>
        /// <remarks>
        /// Default is false.
        /// </remarks>
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gdnId: The ID of the Global Database Network (GDN).</summary>
        /// <remarks>
        /// Note: This parameter is required when the CreationOption is CreateGdnStandby.
        /// </remarks>
        [JsiiProperty(name: "gdnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GdnId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature.</summary>
        /// <remarks>
        /// Default value: ON. Valid values:
        /// ON: enables the hot standby storage cluster feature.
        /// OFF: disables the hot standby storage cluster feature
        /// STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
        /// The default value for Standard Edition clusters is STANDBY.
        /// </remarks>
        [JsiiProperty(name: "hotStandbyCluster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HotStandbyCluster
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL.</summary>
        [JsiiProperty(name: "loosePolarLogBin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoosePolarLogBin
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows: ON: The cluster starts the X-Engine enginen OFF: The cluster shuts down the X-Engine engine This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.</summary>
        [JsiiProperty(name: "looseXEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LooseXEngine
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.</summary>
        /// <remarks>
        /// This parameter takes effect only when the parameter LooseXEngine is ON.
        /// </remarks>
        [JsiiProperty(name: "looseXEngineUseMemoryPct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LooseXEngineUseMemoryPct
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.</summary>
        /// <remarks>
        /// Note: This parameter takes effect only when the value of DBType is MySQL.
        /// </remarks>
        [JsiiProperty(name: "lowerCaseTableNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LowerCaseTableNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.</summary>
        /// <remarks>
        /// Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        /// </remarks>
        [JsiiProperty(name: "maintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaintainTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parameterGroupId: The ID of the parameter template.</summary>
        /// <remarks>
        /// You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
        /// </remarks>
        [JsiiProperty(name: "parameterGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParameterGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
        /// <remarks>
        /// Valid values:
        /// Month
        /// Year
        /// Default value: Month.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property provisionedIops: ESSD AutoPL preconfigured read and write IOPS for cloud disk.</summary>
        /// <remarks>
        /// Possible values: 0-min {50,000, 1000* capacity - baseline performance}.
        /// Baseline performance =min{1,800+50* capacity, 50000}.
        /// </remarks>
        [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProvisionedIops
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyClass: The specifications of the Standard Edition PolarProxy.</summary>
        /// <remarks>
        /// Valid values:
        /// polar.maxscale.g2.medium.c: 2 cores
        /// polar.maxscale.g2.large.c: 4 cores
        /// polar.maxscale.g2.xlarge.c: 8 cores
        /// polar.maxscale.g2.2xlarge.c: 16 cores
        /// polar.maxscale.g2.3xlarge.c: 24 cores
        /// polar.maxscale.g2.4xlarge.c: 32 cores
        /// polar.maxscale.g2.8xlarge.c: 64 cores
        /// </remarks>
        [JsiiProperty(name: "proxyClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyType: The type of PolarProxy.</summary>
        /// <remarks>
        /// Default value: OFF. Valid values:
        /// OFF: disables PolarProxy.
        /// EXCLUSIVE: Dedicated Enterprise Edition
        /// GENERAL: Standard Enterprise Edition
        /// </remarks>
        [JsiiProperty(name: "proxyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.</summary>
        /// <remarks>
        /// Normal: manually renews the cluster.
        /// NotRenewal: does not renew the cluster.
        /// Default value: Normal.
        /// Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
        /// but only sends an SMS message three days before the cluster expires to remind you
        /// that the cluster is not renewed.
        /// </remarks>
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RenewalStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restartMasterNode: Whether to restart the master node.</summary>
        [JsiiProperty(name: "restartMasterNode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestartMasterNode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scaleMax: Maximum limit of single-node scaling.</summary>
        [JsiiProperty(name: "scaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScaleMax
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scaleMin: Minimum limit of single-node scaling.</summary>
        [JsiiProperty(name: "scaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScaleMin
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.</summary>
        [JsiiProperty(name: "scaleRoNumMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScaleRoNumMax
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.</summary>
        [JsiiProperty(name: "scaleRoNumMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScaleRoNumMin
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupIds: The ID of the security group.</summary>
        /// <remarks>
        /// You can add up to three security groups to a cluster.
        /// </remarks>
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpList: The whitelist of the Apsara PolarDB cluster.</summary>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverlessType: Serverless type.</summary>
        [JsiiProperty(name: "serverlessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerlessType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.</summary>
        /// <remarks>
        /// Note
        /// This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
        /// This parameter is required if the CreationOption parameter is not set to Normal.
        /// </remarks>
        [JsiiProperty(name: "sourceResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceResourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property standbyAz: The zone where the hot standby storage cluster is stored.</summary>
        /// <remarks>
        /// This is valid for Standard Edition clusters of Multi-zone Edition.
        /// This parameter takes effect only when the multi-zone data consistency feature is enabled.
        /// </remarks>
        [JsiiProperty(name: "standbyAz", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StandbyAz
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters.</summary>
        /// <remarks>
        /// The value range is as follows:
        /// Enable: Enable automatic storage scale.
        /// Disable: Disable automatic storage scale.
        /// </remarks>
        [JsiiProperty(name: "storageAutoScale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageAutoScale
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storagePayType: The storage pay type.</summary>
        [JsiiProperty(name: "storagePayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StoragePayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageSpace: The storage space that uses the subscription billing method.</summary>
        /// <remarks>
        /// Unit: GB.
        /// Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
        /// </remarks>
        [JsiiProperty(name: "storageSpace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageSpace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageType: The storage type.</summary>
        /// <remarks>
        /// Valid values for Enterprise Edition:
        /// PSL5
        /// PSL4
        /// Valid values for Standard Edition:
        /// ESSDPL0
        /// ESSDPL1
        /// ESSDPL2
        /// ESSDPL3
        /// ESSDAUTOPL
        /// This parameter is invalid for serverless clusters.
        /// </remarks>
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.</summary>
        /// <remarks>
        /// The maximum value is 32000.
        /// </remarks>
        [JsiiProperty(name: "storageUpperBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageUpperBound
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature.</summary>
        /// <remarks>
        /// Valid values:
        /// ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
        /// OFF: disables the multi-zone data consistency feature.
        /// </remarks>
        [JsiiProperty(name: "strictConsistency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StrictConsistency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).</summary>
        /// <remarks>
        /// Valid values:
        /// true: enable TDE
        /// false: disable TDE (default)
        /// Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        /// </remarks>
        [JsiiProperty(name: "tdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TdeStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VPC to connect to.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch to connect to.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The zone ID of the cluster.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query available zones.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbNodeClass: The node specifications of the cluster.</summary>
            /// <remarks>
            /// For more information, see Specifications and pricing.
            /// </remarks>
            [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbNodeClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbType: Database type, value: MySQL PostgreSQL Oracle.</summary>
            [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbVersion: The version of the database.</summary>
            /// <remarks>
            /// Valid values:
            /// MySQL: 5.6, 5.7 or 8.0
            /// PostgreSQL: 11, 14, 15
            /// Oracle: 11, 14
            /// </remarks>
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property payType: The billing method of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Postpaid: pay-as-you-go
            /// Prepaid: subscription
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allowShutDown: Whether to turn on No activity pause.</summary>
            /// <remarks>
            /// The default is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowShutDown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowShutDown
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property architecture: The architecture of CPU.</summary>
            /// <remarks>
            /// Valid values:
            /// X86
            /// ARM
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "architecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Architecture
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriod: Set the cluster auto renewal time.</summary>
            /// <remarks>
            /// Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.</summary>
            /// <remarks>
            /// LATEST: Permanently keep the last backup (automatic backup before deletion).
            /// NONE: The backup set is not retained when the cluster is deleted.
            /// When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
            /// Note: This parameter takes effect only when the value of DBType is MySQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupRetentionPolicyOnClusterDeletion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupRetentionPolicyOnClusterDeletion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cloneDataPoint: The time point of data to be cloned.</summary>
            /// <remarks>
            /// Valid values:
            /// LATEST: clones data of the latest time point.
            /// <BackupID xmlns="http://www.w3.org/1999/xhtml"></BackupID>: clones historical backup data. Specify the ID of the specific backup set.
            /// <Timestamp xmlns="http://www.w3.org/1999/xhtml"></Timestamp>: clones data of a historical time point. Specify the specific time in
            /// the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
            /// Default value: LATEST.
            /// Note
            /// This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
            /// If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloneDataPoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CloneDataPoint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterNetworkType: The network type of the cluster.</summary>
            /// <remarks>
            /// Currently, only VPC is supported. Default value: VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterNetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property coldStorageOption: The option of cold storage.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "coldStorageOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.ColdStorageOptionProperty\"}]}}", isOptional: true)]
            public object? ColdStorageOption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property creationCategory: Cluster series.</summary>
            /// <remarks>
            /// The value could be Normal (standard version), Basic, ArchiveNormal, NormalMultimaster and SENormal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "creationCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreationCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Normal: creates an ApsaraDB for POLARDB cluster.
            /// CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
            /// CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
            /// for POLARDB cluster.
            /// MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
            /// CreateGdnStandby: Create a secondary cluster.
            /// RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster.
            /// UpgradeFromPolarDB: Upgrade migration from PolarDB.
            /// Default value: Normal.
            /// Note:
            /// When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
            /// When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "creationOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreationOption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
            /// <remarks>
            /// The description must comply with the following rules:
            /// It must start with a Chinese character or an English letter.
            /// It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
            /// It cannot start with http:// or https://.
            /// It must be 2 to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty\"}]}}", isOptional: true)]
            public object? DbClusterParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbMinorVersion: The minor version of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// 8.0.2
            /// 8.0.1
            /// This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbMinorVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbNodeNum: The number of Standard Edition nodes.</summary>
            /// <remarks>
            /// Default value: 1. Valid values:
            /// 1: only one primary node.
            /// 2: one read-only node and one primary node.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbNodeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbNodeNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.</summary>
            /// <remarks>
            /// This is default value.
            /// Other pickable value range is from -12:00 to +13:00, for example, 00:00.
            /// Note: This parameter takes effect only when DBType is MySQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultTimeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultTimeZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.</summary>
            /// <remarks>
            /// Default is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gdnId: The ID of the Global Database Network (GDN).</summary>
            /// <remarks>
            /// Note: This parameter is required when the CreationOption is CreateGdnStandby.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gdnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GdnId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature.</summary>
            /// <remarks>
            /// Default value: ON. Valid values:
            /// ON: enables the hot standby storage cluster feature.
            /// OFF: disables the hot standby storage cluster feature
            /// STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
            /// The default value for Standard Edition clusters is STANDBY.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hotStandbyCluster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HotStandbyCluster
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loosePolarLogBin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoosePolarLogBin
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows: ON: The cluster starts the X-Engine enginen OFF: The cluster shuts down the X-Engine engine This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "looseXEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LooseXEngine
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.</summary>
            /// <remarks>
            /// This parameter takes effect only when the parameter LooseXEngine is ON.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "looseXEngineUseMemoryPct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LooseXEngineUseMemoryPct
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.</summary>
            /// <remarks>
            /// Note: This parameter takes effect only when the value of DBType is MySQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lowerCaseTableNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LowerCaseTableNames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.</summary>
            /// <remarks>
            /// Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaintainTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parameterGroupId: The ID of the parameter template.</summary>
            /// <remarks>
            /// You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameterGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParameterGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
            /// <remarks>
            /// Valid values:
            /// Month
            /// Year
            /// Default value: Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property provisionedIops: ESSD AutoPL preconfigured read and write IOPS for cloud disk.</summary>
            /// <remarks>
            /// Possible values: 0-min {50,000, 1000* capacity - baseline performance}.
            /// Baseline performance =min{1,800+50* capacity, 50000}.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProvisionedIops
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxyClass: The specifications of the Standard Edition PolarProxy.</summary>
            /// <remarks>
            /// Valid values:
            /// polar.maxscale.g2.medium.c: 2 cores
            /// polar.maxscale.g2.large.c: 4 cores
            /// polar.maxscale.g2.xlarge.c: 8 cores
            /// polar.maxscale.g2.2xlarge.c: 16 cores
            /// polar.maxscale.g2.3xlarge.c: 24 cores
            /// polar.maxscale.g2.4xlarge.c: 32 cores
            /// polar.maxscale.g2.8xlarge.c: 64 cores
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxyType: The type of PolarProxy.</summary>
            /// <remarks>
            /// Default value: OFF. Valid values:
            /// OFF: disables PolarProxy.
            /// EXCLUSIVE: Dedicated Enterprise Edition
            /// GENERAL: Standard Enterprise Edition
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.</summary>
            /// <remarks>
            /// Normal: manually renews the cluster.
            /// NotRenewal: does not renew the cluster.
            /// Default value: Normal.
            /// Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
            /// but only sends an SMS message three days before the cluster expires to remind you
            /// that the cluster is not renewed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewalStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restartMasterNode: Whether to restart the master node.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "restartMasterNode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestartMasterNode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scaleMax: Maximum limit of single-node scaling.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScaleMax
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scaleMin: Minimum limit of single-node scaling.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScaleMin
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scaleRoNumMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScaleRoNumMax
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scaleRoNumMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScaleRoNumMin
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupIds: The ID of the security group.</summary>
            /// <remarks>
            /// You can add up to three security groups to a cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityIpList: The whitelist of the Apsara PolarDB cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serverlessType: Serverless type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serverlessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerlessType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.</summary>
            /// <remarks>
            /// Note
            /// This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
            /// This parameter is required if the CreationOption parameter is not set to Normal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceResourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property standbyAz: The zone where the hot standby storage cluster is stored.</summary>
            /// <remarks>
            /// This is valid for Standard Edition clusters of Multi-zone Edition.
            /// This parameter takes effect only when the multi-zone data consistency feature is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "standbyAz", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StandbyAz
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters.</summary>
            /// <remarks>
            /// The value range is as follows:
            /// Enable: Enable automatic storage scale.
            /// Disable: Disable automatic storage scale.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageAutoScale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageAutoScale
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storagePayType: The storage pay type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storagePayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StoragePayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageSpace: The storage space that uses the subscription billing method.</summary>
            /// <remarks>
            /// Unit: GB.
            /// Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSpace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSpace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageType: The storage type.</summary>
            /// <remarks>
            /// Valid values for Enterprise Edition:
            /// PSL5
            /// PSL4
            /// Valid values for Standard Edition:
            /// ESSDPL0
            /// ESSDPL1
            /// ESSDPL2
            /// ESSDPL3
            /// ESSDAUTOPL
            /// This parameter is invalid for serverless clusters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.</summary>
            /// <remarks>
            /// The maximum value is 32000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageUpperBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageUpperBound
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature.</summary>
            /// <remarks>
            /// Valid values:
            /// ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
            /// OFF: disables the multi-zone data consistency feature.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "strictConsistency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StrictConsistency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.ITagsProperty[]?>();
            }

            /// <summary>Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).</summary>
            /// <remarks>
            /// Valid values:
            /// true: enable TDE
            /// false: disable TDE (default)
            /// Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TdeStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC to connect to.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch to connect to.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The zone ID of the cluster.</summary>
            /// <remarks>
            /// You can call the DescribeRegions operation to query available zones.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
