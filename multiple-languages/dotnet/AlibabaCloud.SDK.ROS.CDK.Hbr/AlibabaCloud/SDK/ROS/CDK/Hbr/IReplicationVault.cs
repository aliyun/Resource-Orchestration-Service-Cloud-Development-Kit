using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Represents a `ReplicationVault`.</summary>
    [JsiiInterface(nativeType: typeof(IReplicationVault), fullyQualifiedName: "@alicloud/ros-cdk-hbr.IReplicationVault")]
    public interface IReplicationVault : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute VaultId: The ID of the vault.</summary>
        [JsiiProperty(name: "attrVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVaultId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.ReplicationVaultProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Hbr.IReplicationVaultProps Props
        {
            get;
        }

        /// <summary>Represents a `ReplicationVault`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IReplicationVault), fullyQualifiedName: "@alicloud/ros-cdk-hbr.IReplicationVault")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IReplicationVault
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute VaultId: The ID of the vault.</summary>
            [JsiiProperty(name: "attrVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVaultId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.ReplicationVaultProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Hbr.IReplicationVaultProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.IReplicationVaultProps>()!;
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
