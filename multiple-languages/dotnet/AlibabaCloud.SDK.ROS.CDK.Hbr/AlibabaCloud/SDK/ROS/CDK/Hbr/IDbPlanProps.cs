using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `ALIYUN::HBR::DbPlan`.</summary>
    [JsiiInterface(nativeType: typeof(IDbPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.DbPlanProps")]
    public interface IDbPlanProps
    {
        /// <summary>Property dbPlanName: Display name of the backup plan.</summary>
        [JsiiProperty(name: "dbPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbPlanName
        {
            get;
        }

        /// <summary>Property hostUuid: Uuid of the host of the database instance.</summary>
        [JsiiProperty(name: "hostUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostUuid
        {
            get;
        }

        /// <summary>Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.</summary>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <summary>Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.</summary>
        [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultId
        {
            get;
        }

        /// <summary>Property continuousPlan: Continuous backup plan schedule.</summary>
        /// <remarks>
        /// Use {   "type": "continuous" }.
        /// </remarks>
        [JsiiProperty(name: "continuousPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContinuousPlan
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cumulativePlan: Cumulative plan schedule, only for mssql.</summary>
        /// <remarks>
        /// More details see FullPlan.
        /// </remarks>
        [JsiiProperty(name: "cumulativePlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CumulativePlan
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fullPlan: Full backup plan schedule.</summary>
        /// <remarks>
        /// daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        /// </remarks>
        [JsiiProperty(name: "fullPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FullPlan
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property incPlan: Incremental backup plan schedule.</summary>
        /// <remarks>
        /// Only for mysql and oracle. More details see FullPlan.
        /// </remarks>
        [JsiiProperty(name: "incPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IncPlan
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceUuid: Uuid of database instance.</summary>
        [JsiiProperty(name: "instanceUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceUuid
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logPlan: Log backup plan schedule.More details see FullPlan.</summary>
        [JsiiProperty(name: "logPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogPlan
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxRateLimit: Max rate limit for backup job,.</summary>
        [JsiiProperty(name: "maxRateLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxRateLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxRetrySeconds: Max retry seconds on network failure.</summary>
        [JsiiProperty(name: "maxRetrySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxRetrySeconds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property options: Backup options in json format, different for each type of database.</summary>
        /// <remarks>
        /// For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        /// </remarks>
        [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Options
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property source: Which database instance or database will be backup.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbPlan.SourceProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Source
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::HBR::DbPlan`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDbPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.DbPlanProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlanProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbPlanName: Display name of the backup plan.</summary>
            [JsiiProperty(name: "dbPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbPlanName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property hostUuid: Uuid of the host of the database instance.</summary>
            [JsiiProperty(name: "hostUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.</summary>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.</summary>
            [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property continuousPlan: Continuous backup plan schedule.</summary>
            /// <remarks>
            /// Use {   "type": "continuous" }.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "continuousPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContinuousPlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cumulativePlan: Cumulative plan schedule, only for mssql.</summary>
            /// <remarks>
            /// More details see FullPlan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cumulativePlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CumulativePlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fullPlan: Full backup plan schedule.</summary>
            /// <remarks>
            /// daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullPlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property incPlan: Incremental backup plan schedule.</summary>
            /// <remarks>
            /// Only for mysql and oracle. More details see FullPlan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncPlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceUuid: Uuid of database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceUuid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logPlan: Log backup plan schedule.More details see FullPlan.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogPlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxRateLimit: Max rate limit for backup job,.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxRateLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRateLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxRetrySeconds: Max retry seconds on network failure.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxRetrySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRetrySeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property options: Backup options in json format, different for each type of database.</summary>
            /// <remarks>
            /// For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property source: Which database instance or database will be backup.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbPlan.SourceProperty\"}]}}", isOptional: true)]
            public object? Source
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
