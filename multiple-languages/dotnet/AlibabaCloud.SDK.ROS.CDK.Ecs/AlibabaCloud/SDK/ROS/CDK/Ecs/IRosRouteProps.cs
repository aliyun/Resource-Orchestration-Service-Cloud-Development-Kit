using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosRoute`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosRouteProps")]
    public interface IRosRouteProps
    {
        /// <remarks>
        /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the custom route entry. IPv4 CIDR blocks, IPv6 CIDR
        /// blocks, and prefix lists are supported. You must specify one of the following
        /// parameters: `DestinationCidrBlock` and `DestinationPrefixListId`. The following
        /// requirements apply:
        /// - The destination CIDR block cannot be 100.64.0.0\/10 or a subset of
        /// 100.64.0.0\/10.
        /// - The destination CIDR block of a route entry cannot be the same as the
        /// destination CIDR block of another route entry in the same route table.
        /// </remarks>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationCidrBlock
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeTableId: RouteTableId of created route entry.
        /// </remarks>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nextHopId: The ID of the next hop.
        /// > ## If `NextHopType` is set to `Ecr`, you can obtain the `AssociationId` by
        /// calling the DescribeExpressConnectRouterAssociation operation and use the ID
        /// as the next hop ID.
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
        /// <strong>Property</strong>: nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
        /// </remarks>
        [JsiiProperty(name: "nextHopList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NextHopList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: nextHopType: The route entry next hop type. Valid values:
        /// Instance (default): Elastic Compute Service (ECS) instance.
        /// HaVip: High Availability Virtual IP (HAVIP).
        /// RouterInterface: Router interface.
        /// NetworkInterface: Elastic Network Interface (ENI).
        /// VpnGateway: VPN gateway.
        /// IPv6Gateway: IPv6 gateway.
        /// NatGateway: NAT gateway.
        /// Attachment: Transit router.
        /// VpcPeer: VPC peering connection.
        /// Ipv4Gateway: IPv4 gateway.
        /// GatewayEndpoint: Gateway endpoint.
        /// Ecr: Express Connect router.
        /// GatewayLoadBalancerEndpoint: Gateway Load Balancer endpoint.
        /// The default value is 'Instance'.
        /// If NextHopList is specified, this field will be ignored.
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

        /// <summary>Properties for defining a `RosRoute`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosRouteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosRouteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the custom route entry. IPv4 CIDR blocks, IPv6 CIDR
            /// blocks, and prefix lists are supported. You must specify one of the following
            /// parameters: `DestinationCidrBlock` and `DestinationPrefixListId`. The following
            /// requirements apply:
            /// - The destination CIDR block cannot be 100.64.0.0\/10 or a subset of
            /// 100.64.0.0\/10.
            /// - The destination CIDR block of a route entry cannot be the same as the
            /// destination CIDR block of another route entry in the same route table.
            /// </remarks>
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routeTableId: RouteTableId of created route entry.
            /// </remarks>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nextHopId: The ID of the next hop.
            /// > ## If `NextHopType` is set to `Ecr`, you can obtain the `AssociationId` by
            /// calling the DescribeExpressConnectRouterAssociation operation and use the ID
            /// as the next hop ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NextHopId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NextHopList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nextHopType: The route entry next hop type. Valid values:
            /// Instance (default): Elastic Compute Service (ECS) instance.
            /// HaVip: High Availability Virtual IP (HAVIP).
            /// RouterInterface: Router interface.
            /// NetworkInterface: Elastic Network Interface (ENI).
            /// VpnGateway: VPN gateway.
            /// IPv6Gateway: IPv6 gateway.
            /// NatGateway: NAT gateway.
            /// Attachment: Transit router.
            /// VpcPeer: VPC peering connection.
            /// Ipv4Gateway: IPv4 gateway.
            /// GatewayEndpoint: Gateway endpoint.
            /// Ecr: Express Connect router.
            /// GatewayLoadBalancerEndpoint: Gateway Load Balancer endpoint.
            /// The default value is 'Instance'.
            /// If NextHopList is specified, this field will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NextHopType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
