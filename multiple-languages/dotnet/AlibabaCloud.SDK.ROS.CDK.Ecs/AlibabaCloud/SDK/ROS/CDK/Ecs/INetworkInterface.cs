using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `NetworkInterface`.</summary>
    [JsiiInterface(nativeType: typeof(INetworkInterface), fullyQualifiedName: "@alicloud/ros-cdk-ecs.INetworkInterface")]
    public interface INetworkInterface : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArn
        {
            get;
        }

        /// <summary>Attribute MacAddress: The MAC address of your Network Interface.</summary>
        [JsiiProperty(name: "attrMacAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMacAddress
        {
            get;
        }

        /// <summary>Attribute NetworkInterfaceId: ID of your Network Interface.</summary>
        [JsiiProperty(name: "attrNetworkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkInterfaceId
        {
            get;
        }

        /// <summary>Attribute PrivateIpAddress: The primary private ip address of your Network Interface.</summary>
        [JsiiProperty(name: "attrPrivateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateIpAddress
        {
            get;
        }

        /// <summary>Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.</summary>
        [JsiiProperty(name: "attrSecondaryPrivateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecondaryPrivateIpAddresses
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.NetworkInterfaceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfaceProps Props
        {
            get;
        }

        /// <summary>Represents a `NetworkInterface`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INetworkInterface), fullyQualifiedName: "@alicloud/ros-cdk-ecs.INetworkInterface")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterface
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
            [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MacAddress: The MAC address of your Network Interface.</summary>
            [JsiiProperty(name: "attrMacAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMacAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkInterfaceId: ID of your Network Interface.</summary>
            [JsiiProperty(name: "attrNetworkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateIpAddress: The primary private ip address of your Network Interface.</summary>
            [JsiiProperty(name: "attrPrivateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.</summary>
            [JsiiProperty(name: "attrSecondaryPrivateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecondaryPrivateIpAddresses
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.NetworkInterfaceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfaceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfaceProps>()!;
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
