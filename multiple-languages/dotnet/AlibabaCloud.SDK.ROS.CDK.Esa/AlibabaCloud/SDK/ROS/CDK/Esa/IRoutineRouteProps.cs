using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RoutineRoute`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-routineroute
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRoutineRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RoutineRouteProps")]
    public interface IRoutineRouteProps
    {
        /// <summary>Property routineName: The edge function Routine name.</summary>
        [JsiiProperty(name: "routineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RoutineName
        {
            get;
        }

        /// <summary>Property siteId: The website ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property bypass: Bypass mode.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description>on: Open</description>
        /// <description>off: off.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "bypass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bypass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fallback: The exception origin fetch switch.</summary>
        /// <remarks>
        /// After you turn on this switch, if a function exception occurs, such as CPU usage exceeding the upper limit, requests are sent back to the origin. Valid values:
        /// on
        /// off
        /// </remarks>
        [JsiiProperty(name: "fallback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Fallback
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeEnable: Routing switch.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description>on: Open</description>
        /// <description>off: off.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "routeEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeName: The name of the route.</summary>
        [JsiiProperty(name: "routeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rule: The content of the rule.</summary>
        [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Rule
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sequence: Rule execution order.</summary>
        [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sequence
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RoutineRoute`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-routineroute
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRoutineRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RoutineRouteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRoutineRouteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property routineName: The edge function Routine name.</summary>
            [JsiiProperty(name: "routineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RoutineName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The website ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bypass: Bypass mode.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description>on: Open</description>
            /// <description>off: off.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bypass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bypass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fallback: The exception origin fetch switch.</summary>
            /// <remarks>
            /// After you turn on this switch, if a function exception occurs, such as CPU usage exceeding the upper limit, requests are sent back to the origin. Valid values:
            /// on
            /// off
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fallback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Fallback
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeEnable: Routing switch.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description>on: Open</description>
            /// <description>off: off.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeName: The name of the route.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rule: The content of the rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rule
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sequence: Rule execution order.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sequence
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
