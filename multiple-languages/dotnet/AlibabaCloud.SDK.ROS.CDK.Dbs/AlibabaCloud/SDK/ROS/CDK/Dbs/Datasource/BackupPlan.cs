using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::DBS::BackupPlan`, which is used to query the information about a backup schedule.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackupPlan`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.BackupPlan), fullyQualifiedName: "@alicloud/ros-cdk-dbs.datasource.BackupPlan", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-dbs.datasource.BackupPlanProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class BackupPlan : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlan
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public BackupPlan(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlanProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlanProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BackupPlan(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BackupPlan(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute BackupGatewayId: The ID of the backup gateway.</summary>
        [JsiiProperty(name: "attrBackupGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupGatewayId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackupMethod: Backup method.</summary>
        [JsiiProperty(name: "attrBackupMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupMethod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackupObjects: The backup object.</summary>
        [JsiiProperty(name: "attrBackupObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupObjects
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackupPeriod: Full backup cycle.</summary>
        [JsiiProperty(name: "attrBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackupPlanId: The ID of the backup plan.</summary>
        [JsiiProperty(name: "attrBackupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupPlanId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackupPlanName: The name of the backup plan.</summary>
        [JsiiProperty(name: "attrBackupPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupPlanName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackupRetentionPeriod: The retention time of backup data.</summary>
        /// <remarks>
        /// Valid values: 0 to 1825. Default value: 730 days.
        /// </remarks>
        [JsiiProperty(name: "attrBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupRetentionPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackupStartTime: The start time of full Backup.</summary>
        [JsiiProperty(name: "attrBackupStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupStartTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackupStorageType: Built-in storage type:.</summary>
        [JsiiProperty(name: "attrBackupStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupStorageType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The creation time of the backup plans.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.</summary>
        [JsiiProperty(name: "attrCrossAliyunId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCrossAliyunId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.</summary>
        [JsiiProperty(name: "attrCrossRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCrossRoleName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DatabaseType: Database type.</summary>
        [JsiiProperty(name: "attrDatabaseType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDatabaseType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.</summary>
        [JsiiProperty(name: "attrDuplicationArchivePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDuplicationArchivePeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.</summary>
        /// <remarks>
        /// The default time is 180 days.
        /// </remarks>
        [JsiiProperty(name: "attrDuplicationInfrequentAccessPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDuplicationInfrequentAccessPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnableBackupLog: Whether to enable incremental log Backup.</summary>
        [JsiiProperty(name: "attrEnableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnableBackupLog
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceClass: Instance class.</summary>
        [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceClass
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OssBucketName: OSS Bucket name.</summary>
        [JsiiProperty(name: "attrOssBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOssBucketName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceEndpointDatabaseName: The name of the database.</summary>
        [JsiiProperty(name: "attrSourceEndpointDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceEndpointDatabaseName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceEndpointInstanceId: The ID of the database instance.</summary>
        [JsiiProperty(name: "attrSourceEndpointInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceEndpointInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceEndpointInstanceType: The location of the database.</summary>
        [JsiiProperty(name: "attrSourceEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceEndpointInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceEndpointRegion: The region of the database.</summary>
        [JsiiProperty(name: "attrSourceEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceEndpointRegion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceEndpointSid: Oracle SID name.</summary>
        [JsiiProperty(name: "attrSourceEndpointSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceEndpointSid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceEndpointUserName: Database account.</summary>
        [JsiiProperty(name: "attrSourceEndpointUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceEndpointUserName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dbs.datasource.BackupPlanProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlanProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlanProps>()!;
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
