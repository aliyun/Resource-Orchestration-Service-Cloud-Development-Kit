using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Represents a `ShardingNetworkPrivateAddress`.</summary>
    [JsiiInterface(nativeType: typeof(IShardingNetworkPrivateAddress), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.IShardingNetworkPrivateAddress")]
    public interface IShardingNetworkPrivateAddress : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.</summary>
        [JsiiProperty(name: "attrCompatibleConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCompatibleConnections
        {
            get;
        }

        /// <summary>Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.</summary>
        [JsiiProperty(name: "attrNetworkAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkAddresses
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mongodb.ShardingNetworkPrivateAddressProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingNetworkPrivateAddressProps Props
        {
            get;
        }

        /// <summary>Represents a `ShardingNetworkPrivateAddress`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IShardingNetworkPrivateAddress), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.IShardingNetworkPrivateAddress")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingNetworkPrivateAddress
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.</summary>
            [JsiiProperty(name: "attrCompatibleConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCompatibleConnections
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.</summary>
            [JsiiProperty(name: "attrNetworkAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkAddresses
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mongodb.ShardingNetworkPrivateAddressProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingNetworkPrivateAddressProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingNetworkPrivateAddressProps>()!;
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
