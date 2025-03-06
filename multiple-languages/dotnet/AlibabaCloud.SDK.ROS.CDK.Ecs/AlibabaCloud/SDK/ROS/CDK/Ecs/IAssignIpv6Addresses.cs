using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `AssignIpv6Addresses`.</summary>
    [JsiiInterface(nativeType: typeof(IAssignIpv6Addresses), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IAssignIpv6Addresses")]
    public interface IAssignIpv6Addresses : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Ipv6Addresses: Assigned IPv6 addresses.</summary>
        [JsiiProperty(name: "attrIpv6Addresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv6Addresses
        {
            get;
        }

        /// <summary>Attribute Ipv6AddressIds: Assigned IPv6 address IDs.</summary>
        [JsiiProperty(name: "attrIpv6AddressIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv6AddressIds
        {
            get;
        }

        /// <summary>Attribute NetworkInterfaceId: Elastic network interface ID.</summary>
        [JsiiProperty(name: "attrNetworkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkInterfaceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.AssignIpv6AddressesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.IAssignIpv6AddressesProps Props
        {
            get;
        }

        /// <summary>Represents a `AssignIpv6Addresses`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAssignIpv6Addresses), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IAssignIpv6Addresses")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IAssignIpv6Addresses
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Ipv6Addresses: Assigned IPv6 addresses.</summary>
            [JsiiProperty(name: "attrIpv6Addresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv6Addresses
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv6AddressIds: Assigned IPv6 address IDs.</summary>
            [JsiiProperty(name: "attrIpv6AddressIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv6AddressIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkInterfaceId: Elastic network interface ID.</summary>
            [JsiiProperty(name: "attrNetworkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.AssignIpv6AddressesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.IAssignIpv6AddressesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IAssignIpv6AddressesProps>()!;
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
