using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Represents a `NetworkAcl`.</summary>
    [JsiiInterface(nativeType: typeof(INetworkAcl), fullyQualifiedName: "@alicloud/ros-cdk-ens.INetworkAcl")]
    public interface INetworkAcl : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute NetworkAclId: The ID of the network ACL.</summary>
        [JsiiProperty(name: "attrNetworkAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkAclId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ens.NetworkAclProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ens.INetworkAclProps Props
        {
            get;
        }

        /// <summary>Represents a `NetworkAcl`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INetworkAcl), fullyQualifiedName: "@alicloud/ros-cdk-ens.INetworkAcl")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.INetworkAcl
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute NetworkAclId: The ID of the network ACL.</summary>
            [JsiiProperty(name: "attrNetworkAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkAclId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ens.NetworkAclProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ens.INetworkAclProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ens.INetworkAclProps>()!;
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
