using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `Source`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISourceProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.SourceProps")]
    public interface ISourceProps
    {
        /// <summary>Property gatewayId: The gateway ID.</summary>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GatewayId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property k8SSourceConfig: The K8s source configuration.</summary>
        [JsiiProperty(name: "k8SSourceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosSource.K8sSourceConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? K8SSourceConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nacosSourceConfig: The Nacos source configuration.</summary>
        [JsiiProperty(name: "nacosSourceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosSource.NacosSourceConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NacosSourceConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: The source type: - MSE_NACOS: MSE Nacos.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>K8S: Container service.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Source`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISourceProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.SourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.ISourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property gatewayId: The gateway ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property k8SSourceConfig: The K8s source configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "k8SSourceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosSource.K8sSourceConfigProperty\"}]}}", isOptional: true)]
            public object? K8SSourceConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nacosSourceConfig: The Nacos source configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "nacosSourceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosSource.NacosSourceConfigProperty\"}]}}", isOptional: true)]
            public object? NacosSourceConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The resource group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property type: The source type: - MSE_NACOS: MSE Nacos.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>K8S: Container service.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
