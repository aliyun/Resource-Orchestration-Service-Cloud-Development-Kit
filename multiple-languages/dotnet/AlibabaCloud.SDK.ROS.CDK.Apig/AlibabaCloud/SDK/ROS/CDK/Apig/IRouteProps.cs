using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `Route`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RouteProps")]
    public interface IRouteProps
    {
        /// <summary>Property backend: Backend service configuration for routing.</summary>
        [JsiiProperty(name: "backend", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.BackendProperty\"}]}}")]
        object Backend
        {
            get;
        }

        /// <summary>Property environmentInfo: The information if the environment.</summary>
        [JsiiProperty(name: "environmentInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.EnvironmentInfoProperty\"}]}}")]
        object EnvironmentInfo
        {
            get;
        }

        /// <summary>Property httpApiId: The ID of the API.</summary>
        [JsiiProperty(name: "httpApiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HttpApiId
        {
            get;
        }

        /// <summary>Property match: The match rule of route resource.</summary>
        [JsiiProperty(name: "match", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.MatchProperty\"}]}}")]
        object Match
        {
            get;
        }

        /// <summary>Property routeName: The name of the route.</summary>
        [JsiiProperty(name: "routeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteName
        {
            get;
        }

        /// <summary>Property description: The description of route.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domainIds: The list of domain name IDs.</summary>
        [JsiiProperty(name: "domainIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domainInfos: Domain items.</summary>
        [JsiiProperty(name: "domainInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.DomainInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainInfos
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Route`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RouteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IRouteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backend: Backend service configuration for routing.</summary>
            [JsiiProperty(name: "backend", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.BackendProperty\"}]}}")]
            public object Backend
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property environmentInfo: The information if the environment.</summary>
            [JsiiProperty(name: "environmentInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.EnvironmentInfoProperty\"}]}}")]
            public object EnvironmentInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property httpApiId: The ID of the API.</summary>
            [JsiiProperty(name: "httpApiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HttpApiId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property match: The match rule of route resource.</summary>
            [JsiiProperty(name: "match", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.MatchProperty\"}]}}")]
            public object Match
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routeName: The name of the route.</summary>
            [JsiiProperty(name: "routeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of route.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainIds: The list of domain name IDs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "domainIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DomainIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainInfos: Domain items.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "domainInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosRoute.DomainInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DomainInfos
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
