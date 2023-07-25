using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::DBS::BackupPlans`.</summary>
    [JsiiInterface(nativeType: typeof(IBackupPlansProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.datasource.BackupPlansProps")]
    public interface IBackupPlansProps
    {
        /// <summary>Property backupPlanId: The ID of the backup schedule.</summary>
        [JsiiProperty(name: "backupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupPlanId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backupPlanName: The name of the backup schedule.</summary>
        [JsiiProperty(name: "backupPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupPlanName
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

        /// <summary>Properties for defining a `DATASOURCE::DBS::BackupPlans`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBackupPlansProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.datasource.BackupPlansProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlansProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backupPlanId: The ID of the backup schedule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupPlanId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backupPlanName: The name of the backup schedule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupPlanName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupPlanName
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
        }
    }
}
