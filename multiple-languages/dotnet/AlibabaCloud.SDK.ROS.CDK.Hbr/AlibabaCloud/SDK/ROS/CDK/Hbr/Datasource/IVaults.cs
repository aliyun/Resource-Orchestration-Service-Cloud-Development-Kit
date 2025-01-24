using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource
{
    /// <summary>Represents a `Vaults`.</summary>
    [JsiiInterface(nativeType: typeof(IVaults), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.IVaults")]
    public interface IVaults : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute VaultIds: The list of vault IDs.</summary>
        [JsiiProperty(name: "attrVaultIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVaultIds
        {
            get;
        }

        /// <summary>Attribute Vaults: The list of vaults.</summary>
        [JsiiProperty(name: "attrVaults", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVaults
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.datasource.VaultsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaultsProps Props
        {
            get;
        }

        /// <summary>Represents a `Vaults`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVaults), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.IVaults")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaults
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute VaultIds: The list of vault IDs.</summary>
            [JsiiProperty(name: "attrVaultIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVaultIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Vaults: The list of vaults.</summary>
            [JsiiProperty(name: "attrVaults", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVaults
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.datasource.VaultsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaultsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaultsProps>()!;
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
