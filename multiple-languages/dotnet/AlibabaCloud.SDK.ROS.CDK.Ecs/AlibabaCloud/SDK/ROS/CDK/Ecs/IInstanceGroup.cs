using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `InstanceGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceGroup), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IInstanceGroup")]
    public interface IInstanceGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute HostNames: Host names of created instances.</summary>
        [JsiiProperty(name: "attrHostNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostNames
        {
            get;
        }

        /// <summary>Attribute InnerIps: Inner IP address list of the specified instances.</summary>
        /// <remarks>
        /// Only for classical instances.
        /// </remarks>
        [JsiiProperty(name: "attrInnerIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInnerIps
        {
            get;
        }

        /// <summary>Attribute InstanceIds: The instance id list of created ecs instances.</summary>
        [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceIds
        {
            get;
        }

        /// <summary>Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances.</summary>
        /// <remarks>
        /// Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
        /// </remarks>
        [JsiiProperty(name: "attrIpv6Addresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv6Addresses
        {
            get;
        }

        /// <summary>Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances.</summary>
        /// <remarks>
        /// Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
        /// </remarks>
        [JsiiProperty(name: "attrIpv6AddressIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv6AddressIds
        {
            get;
        }

        /// <summary>Attribute OrderId: The order id list of created instance.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrderId
        {
            get;
        }

        /// <summary>Attribute PrivateIps: Private IP address list of created ecs instances.</summary>
        /// <remarks>
        /// Only for VPC instance.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateIps
        {
            get;
        }

        /// <summary>Attribute PublicIps: Public IP address list of created ecs instances.</summary>
        [JsiiProperty(name: "attrPublicIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicIps
        {
            get;
        }

        /// <summary>Attribute RelatedOrderIds: The related order id list of created ecs instances.</summary>
        [JsiiProperty(name: "attrRelatedOrderIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRelatedOrderIds
        {
            get;
        }

        /// <summary>Attribute ZoneIds: Zone id of created instances.</summary>
        [JsiiProperty(name: "attrZoneIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.InstanceGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `InstanceGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceGroup), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IInstanceGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute HostNames: Host names of created instances.</summary>
            [JsiiProperty(name: "attrHostNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InnerIps: Inner IP address list of the specified instances.</summary>
            /// <remarks>
            /// Only for classical instances.
            /// </remarks>
            [JsiiProperty(name: "attrInnerIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInnerIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceIds: The instance id list of created ecs instances.</summary>
            [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances.</summary>
            /// <remarks>
            /// Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
            /// </remarks>
            [JsiiProperty(name: "attrIpv6Addresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv6Addresses
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances.</summary>
            /// <remarks>
            /// Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
            /// </remarks>
            [JsiiProperty(name: "attrIpv6AddressIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv6AddressIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OrderId: The order id list of created instance.</summary>
            [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateIps: Private IP address list of created ecs instances.</summary>
            /// <remarks>
            /// Only for VPC instance.
            /// </remarks>
            [JsiiProperty(name: "attrPrivateIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicIps: Public IP address list of created ecs instances.</summary>
            [JsiiProperty(name: "attrPublicIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RelatedOrderIds: The related order id list of created ecs instances.</summary>
            [JsiiProperty(name: "attrRelatedOrderIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRelatedOrderIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneIds: Zone id of created instances.</summary>
            [JsiiProperty(name: "attrZoneIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.InstanceGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroupProps>()!;
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
