using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource
{
    /// <summary>Represents a `BackupPlans`.</summary>
    [JsiiInterface(nativeType: typeof(IBackupPlans), fullyQualifiedName: "@alicloud/ros-cdk-dbs.datasource.IBackupPlans")]
    public interface IBackupPlans : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BackupPlanIds: The list of backup plan IDs.</summary>
        [JsiiProperty(name: "attrBackupPlanIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupPlanIds
        {
            get;
        }

        /// <summary>Attribute BackupPlans: The list of backup plans.</summary>
        [JsiiProperty(name: "attrBackupPlans", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupPlans
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dbs.datasource.BackupPlansProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlansProps Props
        {
            get;
        }

        /// <summary>Represents a `BackupPlans`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBackupPlans), fullyQualifiedName: "@alicloud/ros-cdk-dbs.datasource.IBackupPlans")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlans
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BackupPlanIds: The list of backup plan IDs.</summary>
            [JsiiProperty(name: "attrBackupPlanIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupPlanIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupPlans: The list of backup plans.</summary>
            [JsiiProperty(name: "attrBackupPlans", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupPlans
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dbs.datasource.BackupPlansProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlansProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dbs.Datasource.IBackupPlansProps>()!;
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
