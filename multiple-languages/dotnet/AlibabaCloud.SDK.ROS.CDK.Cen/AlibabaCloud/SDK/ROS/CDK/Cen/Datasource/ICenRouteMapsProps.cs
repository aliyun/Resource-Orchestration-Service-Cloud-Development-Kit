using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Properties for defining a `CenRouteMaps`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICenRouteMapsProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.CenRouteMapsProps")]
    public interface ICenRouteMapsProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property cenRegionId: The ID of the region where the routing policy is applied.</summary>
        [JsiiProperty(name: "cenRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeMapId: The ID of the routing policy.</summary>
        [JsiiProperty(name: "routeMapId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteMapId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.</summary>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteTableId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transmitDirection: The direction in which the routing policy is applied.</summary>
        [JsiiProperty(name: "transmitDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransmitDirection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CenRouteMaps`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICenRouteMapsProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.CenRouteMapsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenRouteMapsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cenRegionId: The ID of the region where the routing policy is applied.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cenRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeMapId: The ID of the routing policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeMapId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteMapId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteTableId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transmitDirection: The direction in which the routing policy is applied.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transmitDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransmitDirection
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
