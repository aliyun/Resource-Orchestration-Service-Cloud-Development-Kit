using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::RouteEntries`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRouteEntriesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosRouteEntriesProps")]
    public interface IRosRouteEntriesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: routeTableId: The ID of the route table.
        /// </remarks>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
        /// </remarks>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationCidrBlock
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipVersion: The IP version. Valid values:
        /// IPv4: IPv4
        /// IPv6: IPv6
        /// </remarks>
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: nextHopId: The ID of the next hop.
        /// </remarks>
        [JsiiProperty(name: "nextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NextHopId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: nextHopType: The type of the next hop. Valid values:
        /// Instance (default): an Elastic Compute Service (ECS) instance
        /// HaVip: a high-availability virtual IP address (HAVIP)
        /// VpnGateway: a VPN gateway
        /// NatGateway: a NAT gateway
        /// NetworkInterface: a secondary elastic network interface (ENI)
        /// RouterInterface: a router interface
        /// IPv6Gateway: an IPv6 gateway
        /// Attachment: a transit router
        /// </remarks>
        [JsiiProperty(name: "nextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NextHopType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: routeEntryId: The ID of the route.
        /// </remarks>
        [JsiiProperty(name: "routeEntryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteEntryId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: routeEntryName: The name of the route.
        /// </remarks>
        [JsiiProperty(name: "routeEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteEntryName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: routeEntryType: The type of the route. Valid values:
        /// Custom: a custom route
        /// System: a system route
        /// BGP: a Border Gateway Protocol (BGP) route
        /// CEN: a Cloud Enterprise Network (CEN) route
        /// </remarks>
        [JsiiProperty(name: "routeEntryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteEntryType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::RouteEntries`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosRouteEntriesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosRouteEntriesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosRouteEntriesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: routeTableId: The ID of the route table.
            /// </remarks>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationCidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipVersion: The IP version. Valid values:
            /// IPv4: IPv4
            /// IPv6: IPv6
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nextHopId: The ID of the next hop.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NextHopId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nextHopType: The type of the next hop. Valid values:
            /// Instance (default): an Elastic Compute Service (ECS) instance
            /// HaVip: a high-availability virtual IP address (HAVIP)
            /// VpnGateway: a VPN gateway
            /// NatGateway: a NAT gateway
            /// NetworkInterface: a secondary elastic network interface (ENI)
            /// RouterInterface: a router interface
            /// IPv6Gateway: an IPv6 gateway
            /// Attachment: a transit router
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NextHopType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: routeEntryId: The ID of the route.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeEntryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteEntryId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: routeEntryName: The name of the route.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteEntryName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: routeEntryType: The type of the route. Valid values:
            /// Custom: a custom route
            /// System: a system route
            /// BGP: a Border Gateway Protocol (BGP) route
            /// CEN: a Cloud Enterprise Network (CEN) route
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeEntryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteEntryType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
