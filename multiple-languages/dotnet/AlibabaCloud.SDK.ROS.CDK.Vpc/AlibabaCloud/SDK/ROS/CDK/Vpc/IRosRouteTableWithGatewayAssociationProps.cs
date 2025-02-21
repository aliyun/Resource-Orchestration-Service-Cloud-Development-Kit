using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosRouteTableWithGatewayAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetablewithgatewayassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRouteTableWithGatewayAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosRouteTableWithGatewayAssociationProps")]
    public interface IRosRouteTableWithGatewayAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: gatewayId: The ID of the IPv4 gateway that is to be associated.
        /// The IPv4 gateway instance must be activated.
        /// </remarks>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: gatewayType: Types of the associated gateway instance.
        /// </remarks>
        [JsiiProperty(name: "gatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeTableId: The ID of route table that gateway is to be bound.
        /// </remarks>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteTableId
        {
            get;
        }

        /// <summary>Properties for defining a `RosRouteTableWithGatewayAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetablewithgatewayassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRouteTableWithGatewayAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosRouteTableWithGatewayAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosRouteTableWithGatewayAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayId: The ID of the IPv4 gateway that is to be associated.
            /// The IPv4 gateway instance must be activated.
            /// </remarks>
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayType: Types of the associated gateway instance.
            /// </remarks>
            [JsiiProperty(name: "gatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routeTableId: The ID of route table that gateway is to be bound.
            /// </remarks>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
