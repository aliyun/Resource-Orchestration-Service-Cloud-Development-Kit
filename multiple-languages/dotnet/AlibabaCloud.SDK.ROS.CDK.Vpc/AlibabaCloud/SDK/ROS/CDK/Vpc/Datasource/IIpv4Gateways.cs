using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `Ipv4Gateways`.</summary>
    [JsiiInterface(nativeType: typeof(IIpv4Gateways), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IIpv4Gateways")]
    public interface IIpv4Gateways : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.</summary>
        [JsiiProperty(name: "attrIpv4GatewayIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv4GatewayIds
        {
            get;
        }

        /// <summary>Attribute Ipv4Gateways: The list of ipv4 gateways.</summary>
        [JsiiProperty(name: "attrIpv4Gateways", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv4Gateways
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.Ipv4GatewaysProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4GatewaysProps Props
        {
            get;
        }

        /// <summary>Represents a `Ipv4Gateways`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpv4Gateways), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IIpv4Gateways")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4Gateways
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.</summary>
            [JsiiProperty(name: "attrIpv4GatewayIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv4GatewayIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv4Gateways: The list of ipv4 gateways.</summary>
            [JsiiProperty(name: "attrIpv4Gateways", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv4Gateways
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.Ipv4GatewaysProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4GatewaysProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4GatewaysProps>()!;
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
