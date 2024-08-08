using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RouteEntries`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRouteEntriesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RouteEntriesProps")]
    public interface IRouteEntriesProps
    {
        /// <summary>Property routeTableId: The ID of the route table.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteTableId
        {
            get;
        }

        /// <summary>Property destinationCidrBlock: The destination CIDR block of the route.</summary>
        /// <remarks>
        /// IPv4 and IPv6 CIDR blocks are supported.
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

        /// <summary>Property ipVersion: The IP version.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property nextHopId: The ID of the next hop.</summary>
        [JsiiProperty(name: "nextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NextHopId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nextHopType: The type of the next hop.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeEntryId: The ID of the route.</summary>
        [JsiiProperty(name: "routeEntryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteEntryId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeEntryName: The name of the route.</summary>
        [JsiiProperty(name: "routeEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteEntryName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeEntryType: The type of the route.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Properties for defining a `RouteEntries`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRouteEntriesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RouteEntriesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRouteEntriesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property routeTableId: The ID of the route table.</summary>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationCidrBlock: The destination CIDR block of the route.</summary>
            /// <remarks>
            /// IPv4 and IPv6 CIDR blocks are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationCidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipVersion: The IP version.</summary>
            /// <remarks>
            /// Valid values:
            /// IPv4: IPv4
            /// IPv6: IPv6
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nextHopId: The ID of the next hop.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NextHopId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nextHopType: The type of the next hop.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeEntryId: The ID of the route.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeEntryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteEntryId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeEntryName: The name of the route.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteEntryName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeEntryType: The type of the route.</summary>
            /// <remarks>
            /// Valid values:
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
