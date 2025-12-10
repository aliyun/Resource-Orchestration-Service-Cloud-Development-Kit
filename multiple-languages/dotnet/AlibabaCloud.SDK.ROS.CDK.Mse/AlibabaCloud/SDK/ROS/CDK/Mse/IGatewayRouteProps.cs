using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `GatewayRoute`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGatewayRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.GatewayRouteProps")]
    public interface IGatewayRouteProps
    {
        /// <summary>Property domainIdList: The list of domain IDs in JSON format.</summary>
        [JsiiProperty(name: "domainIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object DomainIdList
        {
            get;
        }

        /// <summary>Property gatewayUniqueId: The unique ID of the gateway.</summary>
        [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayUniqueId
        {
            get;
        }

        /// <summary>Property name: The name of the route.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property description: The description of the route.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationType: The type of destination service.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Single: single service</description>
        /// <description>Multiple: multiple services</description>
        /// <description>VersionOriented: tag-based routing</description>
        /// <description>Mock: mock response</description>
        /// <description>Redirect: redirect</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "destinationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property directResponseJson: Configuration for mock response.</summary>
        [JsiiProperty(name: "directResponseJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.DirectResponseJSONProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DirectResponseJson
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domainId: The ID of the domain.</summary>
        [JsiiProperty(name: "domainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fallback: Whether to enable fallback service.</summary>
        [JsiiProperty(name: "fallback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Fallback
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fallbackServices: The list of fallback services.</summary>
        [JsiiProperty(name: "fallbackServices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.FallbackServicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FallbackServices
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gatewayId: The ID of the gateway.</summary>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GatewayId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policies: The JSON string of route policies.</summary>
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policies
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property predicates: Matching rules for the route.</summary>
        [JsiiProperty(name: "predicates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.PredicatesProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Predicates
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property redirectJson: Configuration for redirect.</summary>
        [JsiiProperty(name: "redirectJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.RedirectJSONProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RedirectJson
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeOrder: The order of the route.</summary>
        /// <remarks>
        /// Smaller values indicate higher priority.
        /// </remarks>
        [JsiiProperty(name: "routeOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteOrder
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeType: The type of the route.</summary>
        /// <remarks>
        /// Valid value: Op (control route).
        /// </remarks>
        [JsiiProperty(name: "routeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property services: The list of backend services.</summary>
        /// <remarks>
        /// Required when DestinationType is Single, Multiple, or VersionOriented.
        /// </remarks>
        [JsiiProperty(name: "services", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.ServicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Services
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `GatewayRoute`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGatewayRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.GatewayRouteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IGatewayRouteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainIdList: The list of domain IDs in JSON format.</summary>
            [JsiiProperty(name: "domainIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object DomainIdList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property gatewayUniqueId: The unique ID of the gateway.</summary>
            [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayUniqueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the route.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the route.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationType: The type of destination service.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Single: single service</description>
            /// <description>Multiple: multiple services</description>
            /// <description>VersionOriented: tag-based routing</description>
            /// <description>Mock: mock response</description>
            /// <description>Redirect: redirect</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property directResponseJson: Configuration for mock response.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "directResponseJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.DirectResponseJSONProperty\"}]}}", isOptional: true)]
            public object? DirectResponseJson
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainId: The ID of the domain.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "domainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fallback: Whether to enable fallback service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "fallback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Fallback
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fallbackServices: The list of fallback services.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "fallbackServices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.FallbackServicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? FallbackServices
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gatewayId: The ID of the gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policies: The JSON string of route policies.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Policies
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property predicates: Matching rules for the route.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "predicates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.PredicatesProperty\"}]}}", isOptional: true)]
            public object? Predicates
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property redirectJson: Configuration for redirect.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "redirectJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.RedirectJSONProperty\"}]}}", isOptional: true)]
            public object? RedirectJson
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeOrder: The order of the route.</summary>
            /// <remarks>
            /// Smaller values indicate higher priority.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteOrder
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeType: The type of the route.</summary>
            /// <remarks>
            /// Valid value: Op (control route).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property services: The list of backend services.</summary>
            /// <remarks>
            /// Required when DestinationType is Single, Multiple, or VersionOriented.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "services", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayRoute.ServicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Services
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
