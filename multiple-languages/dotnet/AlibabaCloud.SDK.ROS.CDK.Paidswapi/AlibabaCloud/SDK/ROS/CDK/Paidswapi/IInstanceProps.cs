using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paidswapi
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidswapi-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-paidswapi.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property ecsSpec: The ECS specification of the instance.</summary>
        [JsiiProperty(name: "ecsSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EcsSpec
        {
            get;
        }

        /// <summary>Property imageUrl: The mirror address.</summary>
        [JsiiProperty(name: "imageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageUrl
        {
            get;
        }

        /// <summary>Property instanceName: The instance name.</summary>
        /// <remarks>
        /// Format requirements:
        ///
        /// <list type="bullet">
        /// <description>Can only contain letters, numbers and underscores (_).</description>
        /// <description>It cannot exceed 27 characters.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property accessibility: Whether the workspace is visible to others.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>PUBLIC</strong>: Visible to all users of the workspace.</description>
        /// <description><strong>PRIVATE</strong>: Only visible to yourself and the administrator of the workspace.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Accessibility
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property datasets: A collection of datasets.</summary>
        [JsiiProperty(name: "datasets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.DatasetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Datasets
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property environmentVariables: Environment variable.</summary>
        [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvironmentVariables
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property labels: User-defined labels.</summary>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property saveImage: Whether to close the instance after saving the environment.</summary>
        [JsiiProperty(name: "saveImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SaveImage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userVpc: User vpc configuration.</summary>
        [JsiiProperty(name: "userVpc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.UserVpcProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserVpc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workspaceId: The Id of the workspace.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkspaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidswapi-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-paidswapi.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paidswapi.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ecsSpec: The ECS specification of the instance.</summary>
            [JsiiProperty(name: "ecsSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EcsSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property imageUrl: The mirror address.</summary>
            [JsiiProperty(name: "imageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceName: The instance name.</summary>
            /// <remarks>
            /// Format requirements:
            ///
            /// <list type="bullet">
            /// <description>Can only contain letters, numbers and underscores (_).</description>
            /// <description>It cannot exceed 27 characters.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessibility: Whether the workspace is visible to others.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>PUBLIC</strong>: Visible to all users of the workspace.</description>
            /// <description><strong>PRIVATE</strong>: Only visible to yourself and the administrator of the workspace.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Accessibility
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property datasets: A collection of datasets.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "datasets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.DatasetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Datasets
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property environmentVariables: Environment variable.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? EnvironmentVariables
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property labels: User-defined labels.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property saveImage: Whether to close the instance after saving the environment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "saveImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SaveImage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userVpc: User vpc configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userVpc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.UserVpcProperty\"}]}}", isOptional: true)]
            public object? UserVpc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workspaceId: The Id of the workspace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkspaceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
