using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource
{
    /// <summary>Represents a `BackupPlan`.</summary>
    [JsiiInterface(nativeType: typeof(IBackupPlan), fullyQualifiedName: "@alicloud/ros-cdk-dbs.datasource.IBackupPlan")]
    public interface IBackupPlan : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BackupGatewayId: The ID of the backup gateway.</summary>
        [JsiiProperty(name: "attrBackupGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupGatewayId
        {
            get;
        }

        /// <summary>Attribute BackupMethod: Backup method.</summary>
        [JsiiProperty(name: "attrBackupMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupMethod
        {
            get;
        }

        /// <summary>Attribute BackupObjects: The backup object.</summary>
        [JsiiProperty(name: "attrBackupObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupObjects
        {
            get;
        }

        /// <summary>Attribute BackupPeriod: Full backup cycle.</summary>
        [JsiiProperty(name: "attrBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupPeriod
        {
            get;
        }

        /// <summary>Attribute BackupPlanId: The ID of the backup plan.</summary>
        [JsiiProperty(name: "attrBackupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupPlanId
        {
            get;
        }

        /// <summary>Attribute BackupPlanName: The name of the backup plan.</summary>
        [JsiiProperty(name: "attrBackupPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupPlanName
        {
            get;
        }

        /// <summary>Attribute BackupRetentionPeriod: The retention time of backup data.</summary>
        /// <remarks>
        /// Valid values: 0 to 1825. Default value: 730 days.
        /// </remarks>
        [JsiiProperty(name: "attrBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupRetentionPeriod
        {
            get;
        }

        /// <summary>Attribute BackupStartTime: The start time of full Backup.</summary>
        [JsiiProperty(name: "attrBackupStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupStartTime
        {
            get;
        }

        /// <summary>Attribute BackupStorageType: Built-in storage type:.</summary>
        [JsiiProperty(name: "attrBackupStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupStorageType
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the backup plans.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.</summary>
        [JsiiProperty(name: "attrCrossAliyunId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCrossAliyunId
        {
            get;
        }

        /// <summary>Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.</summary>
        [JsiiProperty(name: "attrCrossRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCrossRoleName
        {
            get;
        }

        /// <summary>Attribute DatabaseType: Database type.</summary>
        [JsiiProperty(name: "attrDatabaseType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDatabaseType
        {
            get;
        }

        /// <summary>Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.</summary>
        [JsiiProperty(name: "attrDuplicationArchivePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDuplicationArchivePeriod
        {
            get;
        }

        /// <summary>Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.</summary>
        /// <remarks>
        /// The default time is 180 days.
        /// </remarks>
        [JsiiProperty(name: "attrDuplicationInfrequentAccessPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDuplicationInfrequentAccessPeriod
        {
            get;
        }

        /// <summary>Attribute EnableBackupLog: Whether to enable incremental log Backup.</summary>
        [JsiiProperty(name: "attrEnableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableBackupLog
        {
            get;
        }

        /// <summary>Attribute InstanceClass: Instance class.</summary>
        [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceClass
        {
            get;
        }

        /// <summary>Attribute OssBucketName: OSS Bucket name.</summary>
        [JsiiProperty(name: "attrOssBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOssBucketName
        {
            get;
        }

        /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SourceEndpointDatabaseName: The name of the database.</summary>
        [JsiiProperty(name: "attrSourceEndpointDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceEndpointDatabaseName
        {
            get;
        }

        /// <summary>Attribute SourceEndpointInstanceId: The ID of the database instance.</summary>
        [JsiiProperty(name: "attrSourceEndpointInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceEndpointInstanceId
        {
            get;
        }

        /// <summary>Attribute SourceEndpointInstanceType: The location of the database.</summary>
        [JsiiProperty(name: "attrSourceEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceEndpointInstanceType
        {
            get;
        }

        /// <summary>Attribute SourceEndpointRegion: The region of the database.</summary>
        [JsiiProperty(name: "attrSourceEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceEndpointRegion
        {
            get;
        }

        /// <summary>Attribute SourceEndpointSid: Oracle SID name.</summary>
        [JsiiProperty(name: "attrSourceEndpointSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceEndpointSid
        {
            get;
        }

        /// <summary>Attribute SourceEndpointUserName: Database account.</summary>
        [JsiiProperty(name: "attrSourceEndpointUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceEndpointUserName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dbs.datasource.BackupPlanProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlanProps Props
        {
            get;
        }

        /// <summary>Represents a `BackupPlan`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBackupPlan), fullyQualifiedName: "@alicloud/ros-cdk-dbs.datasource.IBackupPlan")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlan
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BackupGatewayId: The ID of the backup gateway.</summary>
            [JsiiProperty(name: "attrBackupGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupMethod: Backup method.</summary>
            [JsiiProperty(name: "attrBackupMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupMethod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupObjects: The backup object.</summary>
            [JsiiProperty(name: "attrBackupObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupObjects
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupPeriod: Full backup cycle.</summary>
            [JsiiProperty(name: "attrBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupPlanId: The ID of the backup plan.</summary>
            [JsiiProperty(name: "attrBackupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupPlanId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupPlanName: The name of the backup plan.</summary>
            [JsiiProperty(name: "attrBackupPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupPlanName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupRetentionPeriod: The retention time of backup data.</summary>
            /// <remarks>
            /// Valid values: 0 to 1825. Default value: 730 days.
            /// </remarks>
            [JsiiProperty(name: "attrBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupRetentionPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupStartTime: The start time of full Backup.</summary>
            [JsiiProperty(name: "attrBackupStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupStorageType: Built-in storage type:.</summary>
            [JsiiProperty(name: "attrBackupStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the backup plans.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.</summary>
            [JsiiProperty(name: "attrCrossAliyunId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCrossAliyunId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.</summary>
            [JsiiProperty(name: "attrCrossRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCrossRoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DatabaseType: Database type.</summary>
            [JsiiProperty(name: "attrDatabaseType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDatabaseType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.</summary>
            [JsiiProperty(name: "attrDuplicationArchivePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDuplicationArchivePeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.</summary>
            /// <remarks>
            /// The default time is 180 days.
            /// </remarks>
            [JsiiProperty(name: "attrDuplicationInfrequentAccessPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDuplicationInfrequentAccessPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableBackupLog: Whether to enable incremental log Backup.</summary>
            [JsiiProperty(name: "attrEnableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableBackupLog
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceClass: Instance class.</summary>
            [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OssBucketName: OSS Bucket name.</summary>
            [JsiiProperty(name: "attrOssBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOssBucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceEndpointDatabaseName: The name of the database.</summary>
            [JsiiProperty(name: "attrSourceEndpointDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceEndpointDatabaseName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceEndpointInstanceId: The ID of the database instance.</summary>
            [JsiiProperty(name: "attrSourceEndpointInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceEndpointInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceEndpointInstanceType: The location of the database.</summary>
            [JsiiProperty(name: "attrSourceEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceEndpointInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceEndpointRegion: The region of the database.</summary>
            [JsiiProperty(name: "attrSourceEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceEndpointRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceEndpointSid: Oracle SID name.</summary>
            [JsiiProperty(name: "attrSourceEndpointSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceEndpointSid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceEndpointUserName: Database account.</summary>
            [JsiiProperty(name: "attrSourceEndpointUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceEndpointUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dbs.datasource.BackupPlanProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlanProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlanProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
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
