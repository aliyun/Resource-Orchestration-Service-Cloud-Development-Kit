using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `RosDbPlan`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDbPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosDbPlanProps")]
    public interface IRosDbPlanProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbPlanName: Display name of the backup plan.
        /// </remarks>
        [JsiiProperty(name: "dbPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbPlanName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostUuid: Uuid of the host of the database instance.
        /// </remarks>
        [JsiiProperty(name: "hostUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostUuid
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
        /// </remarks>
        [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
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

        /// <remarks>
        /// <strong>Property</strong>: cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
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

        /// <remarks>
        /// <strong>Property</strong>: fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
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

        /// <remarks>
        /// <strong>Property</strong>: incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
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

        /// <remarks>
        /// <strong>Property</strong>: instanceUuid: Uuid of database instance.
        /// </remarks>
        [JsiiProperty(name: "instanceUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceUuid
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: logPlan: Log backup plan schedule.More details see FullPlan.
        /// </remarks>
        [JsiiProperty(name: "logPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogPlan
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxRateLimit: Max rate limit for backup job,
        /// </remarks>
        [JsiiProperty(name: "maxRateLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxRateLimit
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxRetrySeconds: Max retry seconds on network failure.
        /// </remarks>
        [JsiiProperty(name: "maxRetrySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxRetrySeconds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
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

        /// <remarks>
        /// <strong>Property</strong>: source: Which database instance or database will be backup.
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbPlan.SourceProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Source
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDbPlan`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDbPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosDbPlanProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IRosDbPlanProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbPlanName: Display name of the backup plan.
            /// </remarks>
            [JsiiProperty(name: "dbPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbPlanName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostUuid: Uuid of the host of the database instance.
            /// </remarks>
            [JsiiProperty(name: "hostUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
            /// </remarks>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
            /// </remarks>
            [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "continuousPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContinuousPlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cumulativePlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CumulativePlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullPlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncPlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceUuid: Uuid of database instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceUuid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: logPlan: Log backup plan schedule.More details see FullPlan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogPlan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxRateLimit: Max rate limit for backup job,
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxRateLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRateLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxRetrySeconds: Max retry seconds on network failure.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxRetrySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRetrySeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: source: Which database instance or database will be backup.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbPlan.SourceProperty\"}]}}", isOptional: true)]
            public object? Source
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
