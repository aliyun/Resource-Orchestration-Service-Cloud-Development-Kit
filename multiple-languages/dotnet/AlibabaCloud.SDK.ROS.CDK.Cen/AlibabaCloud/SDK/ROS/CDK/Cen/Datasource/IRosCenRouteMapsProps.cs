using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CEN::CenRouteMaps`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCenRouteMapsProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.RosCenRouteMapsProps")]
    public interface IRosCenRouteMapsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenRegionId: The ID of the region where the routing policy is applied.
        /// </remarks>
        [JsiiProperty(name: "cenRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: routeMapId: The ID of the routing policy.
        /// </remarks>
        [JsiiProperty(name: "routeMapId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteMapId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteTableId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transmitDirection: The direction in which the routing policy is applied.
        /// </remarks>
        [JsiiProperty(name: "transmitDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransmitDirection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CEN::CenRouteMaps`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCenRouteMapsProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.RosCenRouteMapsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.IRosCenRouteMapsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenRegionId: The ID of the region where the routing policy is applied.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cenRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: routeMapId: The ID of the routing policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeMapId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteMapId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteTableId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transmitDirection: The direction in which the routing policy is applied.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transmitDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransmitDirection
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
