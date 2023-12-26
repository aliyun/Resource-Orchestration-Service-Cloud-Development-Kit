using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `Dashboard`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDashboardProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.DashboardProps")]
    public interface IDashboardProps
    {
        /// <summary>Property charts: Chart list.</summary>
        [JsiiProperty(name: "charts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
        object Charts
        {
            get;
        }

        /// <summary>Property dashboardName: Dashboard name.</summary>
        [JsiiProperty(name: "dashboardName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DashboardName
        {
            get;
        }

        /// <summary>Property projectName: Project name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property description: Dashboard description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property displayName: Dashboard display name.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisplayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Dashboard`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDashboardProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.DashboardProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IDashboardProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property charts: Chart list.</summary>
            [JsiiProperty(name: "charts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
            public object Charts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dashboardName: Dashboard name.</summary>
            [JsiiProperty(name: "dashboardName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DashboardName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectName: Project name: 1.</summary>
            /// <remarks>
            /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Dashboard description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property displayName: Dashboard display name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisplayName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
