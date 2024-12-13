using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `RosRoute`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosRouteProps")]
    public interface IRosRouteProps
    {
        /// <remarks>
        /// <strong>Property</strong>: backend: Backend service configuration for routing.
        /// </remarks>
        [JsiiProperty(name: "backend", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.BackendProperty\"}]}}")]
        object Backend
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: environmentInfo: The information if the environment.
        /// </remarks>
        [JsiiProperty(name: "environmentInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.EnvironmentInfoProperty\"}]}}")]
        object EnvironmentInfo
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: httpApiId: The ID of the API.
        /// </remarks>
        [JsiiProperty(name: "httpApiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HttpApiId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: match: The match rule of route resource.
        /// </remarks>
        [JsiiProperty(name: "match", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.MatchProperty\"}]}}")]
        object Match
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeName: The name of the route.
        /// </remarks>
        [JsiiProperty(name: "routeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of route.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: domainIds: The list of domain name IDs.
        /// </remarks>
        [JsiiProperty(name: "domainIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: domainInfos: Domain items.
        /// </remarks>
        [JsiiProperty(name: "domainInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.DomainInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainInfos
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRoute`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosRouteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IRosRouteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: backend: Backend service configuration for routing.
            /// </remarks>
            [JsiiProperty(name: "backend", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.BackendProperty\"}]}}")]
            public object Backend
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: environmentInfo: The information if the environment.
            /// </remarks>
            [JsiiProperty(name: "environmentInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.EnvironmentInfoProperty\"}]}}")]
            public object EnvironmentInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpApiId: The ID of the API.
            /// </remarks>
            [JsiiProperty(name: "httpApiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HttpApiId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: match: The match rule of route resource.
            /// </remarks>
            [JsiiProperty(name: "match", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.MatchProperty\"}]}}")]
            public object Match
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routeName: The name of the route.
            /// </remarks>
            [JsiiProperty(name: "routeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of route.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: domainIds: The list of domain name IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DomainIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: domainInfos: Domain items.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.DomainInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DomainInfos
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
