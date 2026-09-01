using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `DBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.DBClusterProps")]
    public class DBClusterProps : AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterProps
    {
        private object _dbNodeClass;

        /// <summary>Property dbNodeClass: The node specification.</summary>
        /// <remarks>
        /// For more information, see the following topics:
        ///
        /// <list type="bullet">
        /// <description>PolarDB for MySQL: Compute node specifications</description>
        /// <description>PolarDB for PostgreSQL (compatible with Oracle): Compute node
        /// specifications</description>
        /// <description>PolarDB for PostgreSQL: Compute node specifications</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>To create a PolarDB for MySQL Cluster Edition serverless cluster, set this
        ///     parameter to polar.mysql.sl.small.</description>
        ///     <description>To create a PolarDB for MySQL Standard Edition serverless cluster, set this
        ///     parameter to polar.mysql.sl.small.c.</description>
        ///     <description>To create a PolarDB for PostgreSQL Cluster Edition serverless cluster, set
        ///     this parameter to polar.pg.sl.small.</description>
        ///     <description>To create a PolarDB for PostgreSQL Standard Edition serverless cluster, set
        ///     this parameter to polar.pg.sl.small.c.</description>
        ///     <description>To create a PolarDB for PostgreSQL (compatible with Oracle) serverless
        ///     cluster, set this parameter to polar.o.sl.small.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbNodeClass
        {
            get => _dbNodeClass;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbNodeClass = value;
            }
        }

        private object _dbType;

        /// <summary>Property dbType: Database type, value: MySQL PostgreSQL Oracle.</summary>
        [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbType
        {
            get => _dbType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbType = value;
            }
        }

        private object _dbVersion;

        /// <summary>Property dbVersion: The version of the database engine.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Valid values for MySQL:</description>
        /// <description>5.6</description>
        /// <description>5.7</description>
        /// <description>8.0</description>
        /// <description>Valid values for PostgreSQL:</description>
        /// <description>11</description>
        /// <description>14</description>
        /// <description>15</description>
        /// </list>
        ///
        ///     If you create a serverless cluster for PolarDB for PostgreSQL, you must set
        ///     this parameter to <c>14</c>.
        ///
        /// <list type="bullet">
        ///     <description>Valid values for Oracle:</description>
        ///     <description>11</description>
        ///     <description>14</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbVersion
        {
            get => _dbVersion;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbVersion = value;
            }
        }

        private object _payType;

        /// <summary>Property payType: The billing method of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PayType
        {
            get => _payType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _payType = value;
            }
        }

        private object? _allowShutDown;

        /// <summary>Property allowShutDown: Specifies whether to enable pause on inactivity.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: enables pause on inactivity.</description>
        /// <description>false (default): disables pause on inactivity.</description>
        /// </list>
        ///
        ///     This parameter is supported only for serverless clusters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allowShutDown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AllowShutDown
        {
            get => _allowShutDown;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _allowShutDown = value;
            }
        }

        private object? _architecture;

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
            get => _architecture;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _architecture = value;
            }
        }

        private object? _autoRenewPeriod;

        /// <summary>Property autoRenewPeriod: Set the cluster auto renewal time.</summary>
        /// <remarks>
        /// Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenewPeriod
        {
            get => _autoRenewPeriod;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _autoRenewPeriod = value;
            }
        }

        private object? _backupRetentionPolicyOnClusterDeletion;

        /// <summary>Property backupRetentionPolicyOnClusterDeletion: The backup retention policy to apply when the cluster is deleted.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ALL: retains all backup sets.</description>
        /// <description>LATEST: retains only the last backup set. An automatic backup is performed
        /// before the cluster is deleted.</description>
        /// <description>NONE: does not retain backup sets.
        /// Default value: NONE.</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>This parameter is valid only if DBType is set to MySQL.</description>
        ///     <description>Serverless clusters do not support this parameter.</description>
        ///     </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupRetentionPolicyOnClusterDeletion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BackupRetentionPolicyOnClusterDeletion
        {
            get => _backupRetentionPolicyOnClusterDeletion;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _backupRetentionPolicyOnClusterDeletion = value;
            }
        }

        private object? _cloneDataPoint;

        /// <summary>Property cloneDataPoint: The point in time for the clone.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>LATEST: The latest point in time.</description>
        /// <description>BackupID: The ID of a historical backup set.</description>
        /// <description>Timestamp: A specific point in time in the <c>YYYY-MM-DDThh:mm:ssZ</c> format. The
        /// time must be in UTC.
        /// Default value: LATEST.</description>
        /// </list>
        ///
        ///     If you set CreationOption to CloneFromRDS, you can set this parameter only to
        ///     LATEST.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cloneDataPoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CloneDataPoint
        {
            get => _cloneDataPoint;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _cloneDataPoint = value;
            }
        }

        private object? _clusterNetworkType;

        /// <summary>Property clusterNetworkType: The network type of the cluster.</summary>
        /// <remarks>
        /// Currently, only VPC is supported. Default value: VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClusterNetworkType
        {
            get => _clusterNetworkType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _clusterNetworkType = value;
            }
        }

        private object? _coldStorageOption;

        /// <summary>Property coldStorageOption: The option of cold storage.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "coldStorageOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.ColdStorageOptionProperty\"}]}}", isOptional: true)]
        public object? ColdStorageOption
        {
            get => _coldStorageOption;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.IColdStorageOptionProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.IColdStorageOptionProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _coldStorageOption = value;
            }
        }

        private object? _creationCategory;

        /// <summary>Property creationCategory: The edition of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Normal: Cluster Edition (default)</description>
        /// <description>Basic: Single-node Edition</description>
        /// <description>ArchiveNormal: X-Engine Edition</description>
        /// <description>NormalMultimaster: Multi-master Cluster Edition</description>
        /// <description>SENormal: Standard Edition</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>The Basic edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0;
        ///     PolarDB for PostgreSQL 14; and PolarDB for PostgreSQL (compatible with Oracle)
        ///     2.0.</description>
        ///     <description>The ArchiveNormal and NormalMultimaster editions are supported for PolarDB
        ///     for MySQL 8.0.</description>
        ///     <description>The SENormal edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0 and
        ///     PolarDB for PostgreSQL 14.</description>
        ///     </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "creationCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CreationCategory
        {
            get => _creationCategory;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _creationCategory = value;
            }
        }

        private object? _creationOption;

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
            get => _creationOption;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _creationOption = value;
            }
        }

        private object? _dbClusterDescription;

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
            get => _dbClusterDescription;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbClusterDescription = value;
            }
        }

        private object? _dbClusterParameters;

        /// <summary>Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbClusterParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty\"}]}}", isOptional: true)]
        public object? DbClusterParameters
        {
            get => _dbClusterParameters;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.IDBClusterParametersProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.IDBClusterParametersProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbClusterParameters = value;
            }
        }

        private object? _dbMinorVersion;

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
            get => _dbMinorVersion;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbMinorVersion = value;
            }
        }

        private object? _dbNodeNum;

        /// <summary>Property dbNodeNum: The number of nodes for a Standard Edition or Enterprise Edition cluster.</summary>
        /// <remarks>
        /// Valid
        /// values:
        ///
        /// <list type="bullet">
        /// <description>Standard Edition: 1 to 8. A cluster of this edition includes one read/write
        /// node and up to seven read-only nodes.</description>
        /// <description>Enterprise Edition: 1 to 16. A cluster of this edition includes one read/write
        /// node and up to 15 read-only nodes.</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>By default, an Enterprise Edition cluster has two nodes and a Standard
        ///     Edition cluster has one node.</description>
        ///     <description>This parameter is supported only for PolarDB for MySQL.</description>
        ///     <description>You cannot change the number of nodes in a Multi-master Cluster Edition
        ///     cluster.</description>
        ///     </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbNodeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbNodeNum
        {
            get => _dbNodeNum;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbNodeNum = value;
            }
        }

        private object? _defaultTimeZone;

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
            get => _defaultTimeZone;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _defaultTimeZone = value;
            }
        }

        private object? _deletionProtection;

        /// <summary>Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.</summary>
        /// <remarks>
        /// Default is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionProtection
        {
            get => _deletionProtection;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _deletionProtection = value;
            }
        }

        private object? _gdnId;

        /// <summary>Property gdnId: The ID of the Global Database Network (GDN).</summary>
        /// <remarks>
        /// Note: This parameter is required when the CreationOption is CreateGdnStandby.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "gdnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? GdnId
        {
            get => _gdnId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _gdnId = value;
            }
        }

        private object? _hotStandbyCluster;

        /// <summary>Property hotStandbyCluster: Specifies whether to enable the hot standby cluster feature.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ON (default): enables a hot standby storage cluster.</description>
        /// <description>OFF: disables the hot standby cluster feature.</description>
        /// <description>STANDBY: enables a hot standby cluster.</description>
        /// <description>EQUAL: enables hot standby for both storage and computing resources.</description>
        /// <description>3AZ: enables multi-AZ strong consistency.</description>
        /// </list>
        ///
        ///     The value STANDBY is valid only for PolarDB for PostgreSQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hotStandbyCluster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HotStandbyCluster
        {
            get => _hotStandbyCluster;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _hotStandbyCluster = value;
            }
        }

        private object? _loosePolarLogBin;

        /// <summary>Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "loosePolarLogBin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LoosePolarLogBin
        {
            get => _loosePolarLogBin;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _loosePolarLogBin = value;
            }
        }

        private object? _looseXEngine;

        /// <summary>Property looseXEngine: Specifies whether to enable the X-Engine storage engine.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ON: enables the X-Engine storage engine.</description>
        /// <description>OFF: disables the X-Engine storage engine.</description>
        /// </list>
        ///
        ///     This parameter is valid only if the CreationOption parameter is not set to
        ///     CreateGdnStandby, DBType is set to MySQL, and DBVersion is set to 8.0. To enable
        ///     the X-Engine storage engine, the node must have at least 8 GB of memory.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "looseXEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LooseXEngine
        {
            get => _looseXEngine;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _looseXEngine = value;
            }
        }

        private object? _looseXEngineUseMemoryPct;

        /// <summary>Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.</summary>
        /// <remarks>
        /// This parameter takes effect only when the parameter LooseXEngine is ON.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "looseXEngineUseMemoryPct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LooseXEngineUseMemoryPct
        {
            get => _looseXEngineUseMemoryPct;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _looseXEngineUseMemoryPct = value;
            }
        }

        private object? _lowerCaseTableNames;

        /// <summary>Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.</summary>
        /// <remarks>
        /// Note: This parameter takes effect only when the value of DBType is MySQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lowerCaseTableNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LowerCaseTableNames
        {
            get => _lowerCaseTableNames;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _lowerCaseTableNames = value;
            }
        }

        private object? _maintainTime;

        /// <summary>Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.</summary>
        /// <remarks>
        /// Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MaintainTime
        {
            get => _maintainTime;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _maintainTime = value;
            }
        }

        private object? _parameterGroupId;

        /// <summary>Property parameterGroupId: The ID of the parameter template.</summary>
        /// <remarks>
        /// You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parameterGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ParameterGroupId
        {
            get => _parameterGroupId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _parameterGroupId = value;
            }
        }

        private object? _period;

        /// <summary>Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get => _period;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _period = value;
            }
        }

        private object? _periodUnit;

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
            get => _periodUnit;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _periodUnit = value;
            }
        }

        private object? _provisionedIops;

        /// <summary>Property provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk.</summary>
        /// <remarks>
        /// Valid values: 0 to
        /// min{50,000, 1,000 × Capacity - Baseline IOPS}.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProvisionedIops
        {
            get => _provisionedIops;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _provisionedIops = value;
            }
        }

        private object? _proxyClass;

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
            get => _proxyClass;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _proxyClass = value;
            }
        }

        private object? _proxyType;

        /// <summary>Property proxyType: The type of the database proxy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>EXCLUSIVE: Enterprise Dedicated</description>
        /// <description>GENERAL: Enterprise General-purpose</description>
        /// </list>
        ///
        ///     The proxy type must be consistent with the type that corresponds to the node
        ///     specification of the cluster:
        ///
        /// <list type="bullet">
        ///     <description>If the node specification is general-purpose, the proxy type must be
        ///     Enterprise General-purpose.</description>
        ///     <description>If the node specification is dedicated, the proxy type must be Enterprise
        ///     Dedicated.</description>
        ///     </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProxyType
        {
            get => _proxyType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _proxyType = value;
            }
        }

        private object? _renewalStatus;

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
            get => _renewalStatus;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _renewalStatus = value;
            }
        }

        private object? _resourceGroupId;

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get => _resourceGroupId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceGroupId = value;
            }
        }

        private object? _restartMasterNode;

        /// <summary>Property restartMasterNode: Whether to restart the master node.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "restartMasterNode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RestartMasterNode
        {
            get => _restartMasterNode;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _restartMasterNode = value;
            }
        }

        private object? _scaleMax;

        /// <summary>Property scaleMax: The maximum number of PCUs for a single-node serverless cluster to scale up to.</summary>
        /// <remarks>
        /// Valid values: 1 to 32.
        ///
        ///     This parameter is supported only for serverless clusters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScaleMax
        {
            get => _scaleMax;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _scaleMax = value;
            }
        }

        private object? _scaleMin;

        /// <summary>Property scaleMin: The minimum number of PolarDB compute units (PCUs) for a single-node serverless cluster to scale down to.</summary>
        /// <remarks>
        /// Valid values: 1 to 31.
        ///
        ///     This parameter is supported only for serverless clusters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScaleMin
        {
            get => _scaleMin;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _scaleMin = value;
            }
        }

        private object? _scaleRoNumMax;

        /// <summary>Property scaleRoNumMax: The maximum number of read-only nodes that the serverless cluster scales up to.</summary>
        /// <remarks>
        /// Valid values: 0 to 15.
        ///
        ///     This parameter is supported only for serverless clusters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scaleRoNumMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScaleRoNumMax
        {
            get => _scaleRoNumMax;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _scaleRoNumMax = value;
            }
        }

        private object? _scaleRoNumMin;

        /// <summary>Property scaleRoNumMin: The minimum number of read-only nodes that the serverless cluster scales down to.</summary>
        /// <remarks>
        /// Valid values: 0 to 15.
        ///
        ///     This parameter is supported only for serverless clusters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scaleRoNumMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScaleRoNumMin
        {
            get => _scaleRoNumMin;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _scaleRoNumMin = value;
            }
        }

        private object? _securityGroupIds;

        /// <summary>Property securityGroupIds: The ID of the security group.</summary>
        /// <remarks>
        /// You can add up to three security groups to a cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? SecurityGroupIds
        {
            get => _securityGroupIds;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case string cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _securityGroupIds = value;
            }
        }

        private object? _securityIpList;

        /// <summary>Property securityIpList: The IP whitelist of the PolarDB cluster.</summary>
        /// <remarks>
        ///     You can specify multiple IP addresses in the IP whitelist. Separate the IP
        ///     addresses with commas (,).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityIpList
        {
            get => _securityIpList;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _securityIpList = value;
            }
        }

        private object? _serverlessType;

        /// <summary>Property serverlessType: Serverless type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "serverlessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ServerlessType
        {
            get => _serverlessType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _serverlessType = value;
            }
        }

        private object? _sourceResourceId;

        /// <summary>Property sourceResourceId: The ID of the source ApsaraDB RDS instance or source PolarDB cluster.</summary>
        /// <remarks>
        /// This
        /// parameter is required only if CreationOption is set to MigrationFromRDS,
        /// CloneFromRDS, CloneFromPolarDB, or RecoverFromRecyclebin.
        ///
        /// <list type="bullet">
        /// <description>If CreationOption is set to MigrationFromRDS or CloneFromRDS, specify the ID of
        /// the source ApsaraDB RDS instance. The source ApsaraDB RDS instance must be
        /// ApsaraDB RDS for MySQL 5.6, 5.7, or 8.0 High-availability Edition.</description>
        /// <description>If CreationOption is set to CloneFromPolarDB, specify the ID of the source
        /// PolarDB cluster. The new cluster must use the same database engine as the source
        /// cluster. For example, if the source cluster runs MySQL 8.0, you must set DBType
        /// to MySQL and DBVersion to 8.0 for the new cluster.</description>
        /// <description>If CreationOption is set to RecoverFromRecyclebin, specify the ID of the
        /// released source PolarDB cluster. The restored cluster must use the same database
        /// engine as the source cluster.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SourceResourceId
        {
            get => _sourceResourceId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _sourceResourceId = value;
            }
        }

        private object? _sslEnabled;

        /// <summary>Property sslEnabled: Modifies the SSL status.</summary>
        /// <remarks>
        /// Valid values:
        /// Disable: disables SSL encryption.
        /// Enable: enables SSL encryption.
        /// Update: updates the SSL certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sslEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SslEnabled
        {
            get => _sslEnabled;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _sslEnabled = value;
            }
        }

        private object? _standbyAz;

        /// <summary>Property standbyAz: The zone for the hot standby cluster.</summary>
        /// <remarks>
        ///     This parameter is valid only when the hot standby cluster feature or multi-AZ
        ///     strong consistency is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "standbyAz", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StandbyAz
        {
            get => _standbyAz;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _standbyAz = value;
            }
        }

        private object? _storageAutoScale;

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
            get => _storageAutoScale;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _storageAutoScale = value;
            }
        }

        private object? _storagePayType;

        /// <summary>Property storagePayType: The billing method for storage.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Postpaid: pay-by-capacity (a pay-as-you-go method).</description>
        /// <description>Prepaid: pay-by-space (a subscription method).</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storagePayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StoragePayType
        {
            get => _storagePayType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _storagePayType = value;
            }
        }

        private object? _storageSpace;

        /// <summary>Property storageSpace: The storage space for a pay-by-space (subscription) cluster.</summary>
        /// <remarks>
        /// Unit: GB.
        ///
        ///     <list type="bullet">
        ///     <description>Valid values for a PolarDB for MySQL Enterprise Edition cluster: 10 to 50000.</description>
        ///     <description>Valid values for a PolarDB for MySQL Standard Edition cluster: 20 to 64000.</description>
        ///     <description>If the storage type of a Standard Edition cluster is ESSD AutoPL, the storage
        ///     space must be a multiple of 10 between 40 and 64000.</description>
        ///     </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageSpace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StorageSpace
        {
            get => _storageSpace;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _storageSpace = value;
            }
        }

        private object? _storageType;

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
            get => _storageType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _storageType = value;
            }
        }

        private object? _storageUpperBound;

        /// <summary>Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.</summary>
        /// <remarks>
        /// The maximum value is 32000.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageUpperBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StorageUpperBound
        {
            get => _storageUpperBound;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _storageUpperBound = value;
            }
        }

        private object? _strictConsistency;

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
            get => _strictConsistency;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _strictConsistency = value;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        private object? _tdeStatus;

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
            get => _tdeStatus;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _tdeStatus = value;
            }
        }

        private object? _vpcId;

        /// <summary>Property vpcId: The ID of the VPC to connect to.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get => _vpcId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _vpcId = value;
            }
        }

        private object? _vSwitchId;

        /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
        /// <remarks>
        ///     If you specify the VPCId parameter, you must also specify this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get => _vSwitchId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _vSwitchId = value;
            }
        }

        private object? _zoneId;

        /// <summary>Property zoneId: The zone ID of the cluster.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query available zones.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneId
        {
            get => _zoneId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _zoneId = value;
            }
        }
    }
}
