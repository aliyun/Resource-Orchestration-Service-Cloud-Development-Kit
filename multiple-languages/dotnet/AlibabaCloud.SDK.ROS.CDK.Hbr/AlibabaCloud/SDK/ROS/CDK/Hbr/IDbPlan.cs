using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Represents a `DbPlan`.</summary>
    [JsiiInterface(nativeType: typeof(IDbPlan), fullyQualifiedName: "@alicloud/ros-cdk-hbr.IDbPlan")]
    public interface IDbPlan : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ContinuousPlan: Continuous backup plan schedule.</summary>
        /// <remarks>
        /// Use {   "type": "continuous" }.
        /// </remarks>
        [JsiiProperty(name: "attrContinuousPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrContinuousPlan
        {
            get;
        }

        /// <summary>Attribute ContinuousUuid: Uuid of continuous backup plan.</summary>
        [JsiiProperty(name: "attrContinuousUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrContinuousUuid
        {
            get;
        }

        /// <summary>Attribute CumulativePlan: Cumulative plan schedule, only for mssql.</summary>
        /// <remarks>
        /// More details see FullPlan.
        /// </remarks>
        [JsiiProperty(name: "attrCumulativePlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCumulativePlan
        {
            get;
        }

        /// <summary>Attribute CumulativeUuid: Uuid of cumulative plan.</summary>
        [JsiiProperty(name: "attrCumulativeUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCumulativeUuid
        {
            get;
        }

        /// <summary>Attribute DbPlanName: Display name of the backup plan.</summary>
        [JsiiProperty(name: "attrDbPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbPlanName
        {
            get;
        }

        /// <summary>Attribute FullPlan: Full backup plan schedule.</summary>
        /// <remarks>
        /// daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        /// </remarks>
        [JsiiProperty(name: "attrFullPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFullPlan
        {
            get;
        }

        /// <summary>Attribute FullUuid: Uuid of full backup plan.</summary>
        [JsiiProperty(name: "attrFullUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFullUuid
        {
            get;
        }

        /// <summary>Attribute HostUuid: Uuid of the host of the database instance.</summary>
        [JsiiProperty(name: "attrHostUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostUuid
        {
            get;
        }

        /// <summary>Attribute IncPlan: Incremental backup plan schedule.</summary>
        /// <remarks>
        /// Only for mysql and oracle. More details see FullPlan.
        /// </remarks>
        [JsiiProperty(name: "attrIncPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIncPlan
        {
            get;
        }

        /// <summary>Attribute IncUuid: Uuid of the incremental bakcup plan.</summary>
        [JsiiProperty(name: "attrIncUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIncUuid
        {
            get;
        }

        /// <summary>Attribute InstanceUuid: Uuid of database instance.</summary>
        [JsiiProperty(name: "attrInstanceUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceUuid
        {
            get;
        }

        /// <summary>Attribute LogPlan: Log backup plan schedule.More details see FullPlan.</summary>
        [JsiiProperty(name: "attrLogPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLogPlan
        {
            get;
        }

        /// <summary>Attribute LogUuid: Uuid of the log backup plan.</summary>
        [JsiiProperty(name: "attrLogUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLogUuid
        {
            get;
        }

        /// <summary>Attribute MaxRateLimit: Max rate limit for backup job,.</summary>
        [JsiiProperty(name: "attrMaxRateLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaxRateLimit
        {
            get;
        }

        /// <summary>Attribute MaxRetrySeconds: Max retry seconds on network failure.</summary>
        [JsiiProperty(name: "attrMaxRetrySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaxRetrySeconds
        {
            get;
        }

        /// <summary>Attribute Options: Backup options in json format, different for each type of database.</summary>
        /// <remarks>
        /// For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        /// </remarks>
        [JsiiProperty(name: "attrOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOptions
        {
            get;
        }

        /// <summary>Attribute PlanId: Id of the backup plan.</summary>
        [JsiiProperty(name: "attrPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPlanId
        {
            get;
        }

        /// <summary>Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.</summary>
        [JsiiProperty(name: "attrSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceType
        {
            get;
        }

        /// <summary>Attribute Target: Target vault to backup.</summary>
        [JsiiProperty(name: "attrTarget", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTarget
        {
            get;
        }

        /// <summary>Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.</summary>
        [JsiiProperty(name: "attrVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVaultId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.DbPlanProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlanProps Props
        {
            get;
        }

        /// <summary>Represents a `DbPlan`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDbPlan), fullyQualifiedName: "@alicloud/ros-cdk-hbr.IDbPlan")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlan
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ContinuousPlan: Continuous backup plan schedule.</summary>
            /// <remarks>
            /// Use {   "type": "continuous" }.
            /// </remarks>
            [JsiiProperty(name: "attrContinuousPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrContinuousPlan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ContinuousUuid: Uuid of continuous backup plan.</summary>
            [JsiiProperty(name: "attrContinuousUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrContinuousUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CumulativePlan: Cumulative plan schedule, only for mssql.</summary>
            /// <remarks>
            /// More details see FullPlan.
            /// </remarks>
            [JsiiProperty(name: "attrCumulativePlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCumulativePlan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CumulativeUuid: Uuid of cumulative plan.</summary>
            [JsiiProperty(name: "attrCumulativeUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCumulativeUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbPlanName: Display name of the backup plan.</summary>
            [JsiiProperty(name: "attrDbPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbPlanName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FullPlan: Full backup plan schedule.</summary>
            /// <remarks>
            /// daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
            /// </remarks>
            [JsiiProperty(name: "attrFullPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFullPlan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FullUuid: Uuid of full backup plan.</summary>
            [JsiiProperty(name: "attrFullUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFullUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostUuid: Uuid of the host of the database instance.</summary>
            [JsiiProperty(name: "attrHostUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IncPlan: Incremental backup plan schedule.</summary>
            /// <remarks>
            /// Only for mysql and oracle. More details see FullPlan.
            /// </remarks>
            [JsiiProperty(name: "attrIncPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIncPlan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IncUuid: Uuid of the incremental bakcup plan.</summary>
            [JsiiProperty(name: "attrIncUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIncUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceUuid: Uuid of database instance.</summary>
            [JsiiProperty(name: "attrInstanceUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LogPlan: Log backup plan schedule.More details see FullPlan.</summary>
            [JsiiProperty(name: "attrLogPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLogPlan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LogUuid: Uuid of the log backup plan.</summary>
            [JsiiProperty(name: "attrLogUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLogUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaxRateLimit: Max rate limit for backup job,.</summary>
            [JsiiProperty(name: "attrMaxRateLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaxRateLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaxRetrySeconds: Max retry seconds on network failure.</summary>
            [JsiiProperty(name: "attrMaxRetrySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaxRetrySeconds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Options: Backup options in json format, different for each type of database.</summary>
            /// <remarks>
            /// For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
            /// </remarks>
            [JsiiProperty(name: "attrOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOptions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PlanId: Id of the backup plan.</summary>
            [JsiiProperty(name: "attrPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPlanId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.</summary>
            [JsiiProperty(name: "attrSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Target: Target vault to backup.</summary>
            [JsiiProperty(name: "attrTarget", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTarget
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.</summary>
            [JsiiProperty(name: "attrVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVaultId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.DbPlanProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlanProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlanProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
