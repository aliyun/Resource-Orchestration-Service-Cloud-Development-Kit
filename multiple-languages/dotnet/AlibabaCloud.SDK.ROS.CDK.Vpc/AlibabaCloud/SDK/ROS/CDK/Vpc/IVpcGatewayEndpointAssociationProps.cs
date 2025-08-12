using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `VpcGatewayEndpointAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpointassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVpcGatewayEndpointAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpcGatewayEndpointAssociationProps")]
    public interface IVpcGatewayEndpointAssociationProps
    {
        /// <summary>Property endpointId: The gateway endpoint instance ID to associate the routing table.</summary>
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointId
        {
            get;
        }

        /// <summary>Property routeTableIds: The routing table ID to associate.The value range of N is 1~20, that is, a maximum of 20 routing tables can be bound at a time.</summary>
        [JsiiProperty(name: "routeTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object RouteTableIds
        {
            get;
        }

        /// <summary>Properties for defining a `VpcGatewayEndpointAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpointassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVpcGatewayEndpointAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpcGatewayEndpointAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpcGatewayEndpointAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endpointId: The gateway endpoint instance ID to associate the routing table.</summary>
            [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routeTableIds: The routing table ID to associate.The value range of N is 1~20, that is, a maximum of 20 routing tables can be bound at a time.</summary>
            [JsiiProperty(name: "routeTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object RouteTableIds
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
