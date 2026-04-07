using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Represents a `EnterpriseDBClusterBackupPolicy`.</summary>
    [JsiiInterface(nativeType: typeof(IEnterpriseDBClusterBackupPolicy), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterBackupPolicy")]
    public interface IEnterpriseDBClusterBackupPolicy : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.</summary>
        [JsiiProperty(name: "attrBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupRetentionPeriod
        {
            get;
        }

        /// <summary>Attribute BackupState: Backup switch.</summary>
        [JsiiProperty(name: "attrBackupState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupState
        {
            get;
        }

        /// <summary>Attribute PreferredBackupPeriod: The backup cycle.</summary>
        [JsiiProperty(name: "attrPreferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPreferredBackupPeriod
        {
            get;
        }

        /// <summary>Attribute PreferredBackupTime: The backup time window within which the backup task is performed.</summary>
        [JsiiProperty(name: "attrPreferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPreferredBackupTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterBackupPolicyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterBackupPolicyProps Props
        {
            get;
        }

        /// <summary>Represents a `EnterpriseDBClusterBackupPolicy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnterpriseDBClusterBackupPolicy), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterBackupPolicy")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterBackupPolicy
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.</summary>
            [JsiiProperty(name: "attrBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupRetentionPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackupState: Backup switch.</summary>
            [JsiiProperty(name: "attrBackupState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupState
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PreferredBackupPeriod: The backup cycle.</summary>
            [JsiiProperty(name: "attrPreferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPreferredBackupPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PreferredBackupTime: The backup time window within which the backup task is performed.</summary>
            [JsiiProperty(name: "attrPreferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPreferredBackupTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterBackupPolicyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterBackupPolicyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterBackupPolicyProps>()!;
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
