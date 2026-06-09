using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::HBR::DbPlan`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDbPlan`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Hbr.DbPlan), fullyQualifiedName: "@alicloud/ros-cdk-hbr.DbPlan", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-hbr.DbPlanProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DbPlan : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlan
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public DbPlan(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlanProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlanProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DbPlan(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DbPlan(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ContinuousPlan: Continuous backup plan schedule.</summary>
        /// <remarks>
        /// Use {   "type": "continuous" }.
        /// </remarks>
        [JsiiProperty(name: "attrContinuousPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrContinuousPlan
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ContinuousUuid: Uuid of continuous backup plan.</summary>
        [JsiiProperty(name: "attrContinuousUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrContinuousUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CumulativePlan: Cumulative plan schedule, only for mssql.</summary>
        /// <remarks>
        /// More details see FullPlan.
        /// </remarks>
        [JsiiProperty(name: "attrCumulativePlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCumulativePlan
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CumulativeUuid: Uuid of cumulative plan.</summary>
        [JsiiProperty(name: "attrCumulativeUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCumulativeUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DbPlanName: Display name of the backup plan.</summary>
        [JsiiProperty(name: "attrDbPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbPlanName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FullPlan: Full backup plan schedule.</summary>
        /// <remarks>
        /// daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        /// </remarks>
        [JsiiProperty(name: "attrFullPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFullPlan
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FullUuid: Uuid of full backup plan.</summary>
        [JsiiProperty(name: "attrFullUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFullUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostUuid: Uuid of the host of the database instance.</summary>
        [JsiiProperty(name: "attrHostUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IncPlan: Incremental backup plan schedule.</summary>
        /// <remarks>
        /// Only for mysql and oracle. More details see FullPlan.
        /// </remarks>
        [JsiiProperty(name: "attrIncPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIncPlan
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IncUuid: Uuid of the incremental bakcup plan.</summary>
        [JsiiProperty(name: "attrIncUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIncUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceUuid: Uuid of database instance.</summary>
        [JsiiProperty(name: "attrInstanceUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LogPlan: Log backup plan schedule.More details see FullPlan.</summary>
        [JsiiProperty(name: "attrLogPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLogPlan
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LogUuid: Uuid of the log backup plan.</summary>
        [JsiiProperty(name: "attrLogUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLogUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaxRateLimit: Max rate limit for backup job,.</summary>
        [JsiiProperty(name: "attrMaxRateLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaxRateLimit
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaxRetrySeconds: Max retry seconds on network failure.</summary>
        [JsiiProperty(name: "attrMaxRetrySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaxRetrySeconds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Options: Backup options in json format, different for each type of database.</summary>
        /// <remarks>
        /// For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        /// </remarks>
        [JsiiProperty(name: "attrOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOptions
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PlanId: Id of the backup plan.</summary>
        [JsiiProperty(name: "attrPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPlanId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.</summary>
        [JsiiProperty(name: "attrSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Target: Target vault to backup.</summary>
        [JsiiProperty(name: "attrTarget", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTarget
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.</summary>
        [JsiiProperty(name: "attrVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVaultId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.DbPlanProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlanProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.IDbPlanProps>()!;
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
