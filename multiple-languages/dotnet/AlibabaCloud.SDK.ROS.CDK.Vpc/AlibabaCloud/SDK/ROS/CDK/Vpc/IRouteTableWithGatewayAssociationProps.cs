using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RouteTableWithGatewayAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetablewithgatewayassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRouteTableWithGatewayAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouteTableWithGatewayAssociationProps")]
    public interface IRouteTableWithGatewayAssociationProps
    {
        /// <summary>Property gatewayId: The ID of the IPv4 gateway that is to be associated.</summary>
        /// <remarks>
        /// The IPv4 gateway instance must be activated.
        /// </remarks>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayId
        {
            get;
        }

        /// <summary>Property gatewayType: Types of the associated gateway instance.</summary>
        [JsiiProperty(name: "gatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayType
        {
            get;
        }

        /// <summary>Property routeTableId: The ID of route table that gateway is to be bound.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteTableId
        {
            get;
        }

        /// <summary>Properties for defining a `RouteTableWithGatewayAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetablewithgatewayassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRouteTableWithGatewayAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouteTableWithGatewayAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRouteTableWithGatewayAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property gatewayId: The ID of the IPv4 gateway that is to be associated.</summary>
            /// <remarks>
            /// The IPv4 gateway instance must be activated.
            /// </remarks>
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property gatewayType: Types of the associated gateway instance.</summary>
            [JsiiProperty(name: "gatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routeTableId: The ID of route table that gateway is to be bound.</summary>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
