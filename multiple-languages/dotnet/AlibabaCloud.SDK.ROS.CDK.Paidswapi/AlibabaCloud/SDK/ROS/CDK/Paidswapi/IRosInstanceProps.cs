using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paidswapi
{
    /// <summary>Properties for defining a `RosInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidswapi-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-paidswapi.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ecsSpec: The ECS specification of the instance.
        /// </remarks>
        [JsiiProperty(name: "ecsSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EcsSpec
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageUrl: The mirror address.
        /// </remarks>
        [JsiiProperty(name: "imageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageUrl
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The instance name. Format requirements:
        /// - Can only contain letters, numbers and underscores (_).
        /// - It cannot exceed 27 characters.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessibility: Whether the workspace is visible to others. Valid values:
        /// - **PUBLIC**: Visible to all users of the workspace.
        /// - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
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

        /// <remarks>
        /// <strong>Property</strong>: datasets: A collection of datasets.
        /// </remarks>
        [JsiiProperty(name: "datasets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.DatasetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Datasets
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: environmentVariables: Environment variable.
        /// </remarks>
        [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvironmentVariables
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: labels: User-defined labels.
        /// </remarks>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: saveImage: Whether to close the instance after saving the environment.
        /// </remarks>
        [JsiiProperty(name: "saveImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SaveImage
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: userVpc: User vpc configuration.
        /// </remarks>
        [JsiiProperty(name: "userVpc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.UserVpcProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserVpc
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: workspaceId: The Id of the workspace.
        /// </remarks>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkspaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidswapi-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-paidswapi.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paidswapi.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ecsSpec: The ECS specification of the instance.
            /// </remarks>
            [JsiiProperty(name: "ecsSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EcsSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: imageUrl: The mirror address.
            /// </remarks>
            [JsiiProperty(name: "imageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The instance name. Format requirements:
            /// - Can only contain letters, numbers and underscores (_).
            /// - It cannot exceed 27 characters.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessibility: Whether the workspace is visible to others. Valid values:
            /// - **PUBLIC**: Visible to all users of the workspace.
            /// - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Accessibility
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: datasets: A collection of datasets.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "datasets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.DatasetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Datasets
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: environmentVariables: Environment variable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? EnvironmentVariables
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: labels: User-defined labels.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: saveImage: Whether to close the instance after saving the environment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "saveImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SaveImage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userVpc: User vpc configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userVpc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidswapi.RosInstance.UserVpcProperty\"}]}}", isOptional: true)]
            public object? UserVpc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceId: The Id of the workspace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkspaceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
