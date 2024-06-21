using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `Environment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEnvironmentProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.EnvironmentProps")]
    public interface IEnvironmentProps
    {
        /// <summary>Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID.</summary>
        /// <remarks>
        /// For a Cloud environment, specify the region ID.
        /// </remarks>
        [JsiiProperty(name: "bindResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindResourceId
        {
            get;
        }

        /// <summary>Property environmentName: The name of the environment.</summary>
        [JsiiProperty(name: "environmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentName
        {
            get;
        }

        /// <summary>Property environmentSubType: The subtype of the environment.</summary>
        /// <remarks>
        /// Valid values:
        /// One: CS type environment
        /// ACK: CS type environment
        /// ECS: ECS type environment
        /// Cloud: cloud service
        /// </remarks>
        [JsiiProperty(name: "environmentSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentSubType
        {
            get;
        }

        /// <summary>Property environmentType: The type of the environment.</summary>
        /// <remarks>
        /// Valid values:
        /// CS: ACK
        /// ECS: ECS
        /// Cloud: cloud service
        /// </remarks>
        [JsiiProperty(name: "environmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentType
        {
            get;
        }

        /// <summary>Property feePackage: The payable resource plan.</summary>
        /// <remarks>
        /// Valid values:
        /// If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
        /// Otherwise, leave the parameter empty.
        /// </remarks>
        [JsiiProperty(name: "feePackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FeePackage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment.</summary>
        /// <remarks>
        /// When passing space, the default share grafana is used.
        /// </remarks>
        [JsiiProperty(name: "grafanaWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GrafanaWorkspaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property managedType: Specifies whether agents or exporters are managed.</summary>
        /// <remarks>
        /// Valid values:
        /// none: No. By default, no managed agents or exporters are provided for ACK clusters.
        /// agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
        /// agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
        /// </remarks>
        [JsiiProperty(name: "managedType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ManagedType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property prometheusInstanceId: The ID of the Prometheus instance.</summary>
        /// <remarks>
        /// If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
        /// </remarks>
        [JsiiProperty(name: "prometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrometheusInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of Environment.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-arms.RosEnvironment.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Arms.RosEnvironment.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Environment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEnvironmentProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.EnvironmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IEnvironmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID.</summary>
            /// <remarks>
            /// For a Cloud environment, specify the region ID.
            /// </remarks>
            [JsiiProperty(name: "bindResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindResourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property environmentName: The name of the environment.</summary>
            [JsiiProperty(name: "environmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property environmentSubType: The subtype of the environment.</summary>
            /// <remarks>
            /// Valid values:
            /// One: CS type environment
            /// ACK: CS type environment
            /// ECS: ECS type environment
            /// Cloud: cloud service
            /// </remarks>
            [JsiiProperty(name: "environmentSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentSubType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property environmentType: The type of the environment.</summary>
            /// <remarks>
            /// Valid values:
            /// CS: ACK
            /// ECS: ECS
            /// Cloud: cloud service
            /// </remarks>
            [JsiiProperty(name: "environmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property feePackage: The payable resource plan.</summary>
            /// <remarks>
            /// Valid values:
            /// If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
            /// Otherwise, leave the parameter empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "feePackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FeePackage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment.</summary>
            /// <remarks>
            /// When passing space, the default share grafana is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "grafanaWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GrafanaWorkspaceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property managedType: Specifies whether agents or exporters are managed.</summary>
            /// <remarks>
            /// Valid values:
            /// none: No. By default, no managed agents or exporters are provided for ACK clusters.
            /// agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
            /// agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "managedType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ManagedType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property prometheusInstanceId: The ID of the Prometheus instance.</summary>
            /// <remarks>
            /// If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "prometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrometheusInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of Environment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-arms.RosEnvironment.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Arms.RosEnvironment.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.RosEnvironment.ITagsProperty[]?>();
            }
        }
    }
}
