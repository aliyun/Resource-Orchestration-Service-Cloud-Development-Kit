using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `IpsecServer`.</summary>
    [JsiiInterface(nativeType: typeof(IIpsecServer), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpsecServer")]
    public interface IIpsecServer : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute IpsecServerId: IPsec server ID.</summary>
        [JsiiProperty(name: "attrIpsecServerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpsecServerId
        {
            get;
        }

        /// <summary>Attribute IpsecServerName: IPsec server name.</summary>
        [JsiiProperty(name: "attrIpsecServerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpsecServerName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.IpsecServerProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IIpsecServerProps Props
        {
            get;
        }

        /// <summary>Represents a `IpsecServer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpsecServer), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpsecServer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpsecServer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute IpsecServerId: IPsec server ID.</summary>
            [JsiiProperty(name: "attrIpsecServerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpsecServerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpsecServerName: IPsec server name.</summary>
            [JsiiProperty(name: "attrIpsecServerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpsecServerName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.IpsecServerProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IIpsecServerProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IIpsecServerProps>()!;
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
