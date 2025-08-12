using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosVpcGatewayEndpointAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpointassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpcGatewayEndpointAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpcGatewayEndpointAssociationProps")]
    public interface IRosVpcGatewayEndpointAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: endpointId: The gateway endpoint instance ID to associate the routing table.
        /// </remarks>
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeTableIds: The routing table ID to associate.The value range of N is 1~20, that is, a maximum of 20 routing tables can be bound at a time.
        /// </remarks>
        [JsiiProperty(name: "routeTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object RouteTableIds
        {
            get;
        }

        /// <summary>Properties for defining a `RosVpcGatewayEndpointAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpointassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcGatewayEndpointAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpcGatewayEndpointAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpcGatewayEndpointAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointId: The gateway endpoint instance ID to associate the routing table.
            /// </remarks>
            [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routeTableIds: The routing table ID to associate.The value range of N is 1~20, that is, a maximum of 20 routing tables can be bound at a time.
            /// </remarks>
            [JsiiProperty(name: "routeTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object RouteTableIds
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
