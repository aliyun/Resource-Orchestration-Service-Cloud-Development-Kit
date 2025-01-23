using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `VpnPbrRouteEntry`.</summary>
    [JsiiInterface(nativeType: typeof(IVpnPbrRouteEntry), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IVpnPbrRouteEntry")]
    public interface IVpnPbrRouteEntry : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute NextHop: The next hop of the destination route entry.</summary>
        [JsiiProperty(name: "attrNextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNextHop
        {
            get;
        }

        /// <summary>Attribute RouteDest: The destination CIDR block of the destination route.</summary>
        [JsiiProperty(name: "attrRouteDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteDest
        {
            get;
        }

        /// <summary>Attribute RouteSource: The destination CIDR block of the policy-based route.</summary>
        [JsiiProperty(name: "attrRouteSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteSource
        {
            get;
        }

        /// <summary>Attribute VpnGatewayId: The ID of the VPN Gateway.</summary>
        [JsiiProperty(name: "attrVpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpnGatewayId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.VpnPbrRouteEntryProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnPbrRouteEntryProps Props
        {
            get;
        }

        /// <summary>Represents a `VpnPbrRouteEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpnPbrRouteEntry), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IVpnPbrRouteEntry")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnPbrRouteEntry
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute NextHop: The next hop of the destination route entry.</summary>
            [JsiiProperty(name: "attrNextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNextHop
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteDest: The destination CIDR block of the destination route.</summary>
            [JsiiProperty(name: "attrRouteDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteDest
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteSource: The destination CIDR block of the policy-based route.</summary>
            [JsiiProperty(name: "attrRouteSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteSource
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpnGatewayId: The ID of the VPN Gateway.</summary>
            [JsiiProperty(name: "attrVpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpnGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.VpnPbrRouteEntryProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnPbrRouteEntryProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnPbrRouteEntryProps>()!;
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
