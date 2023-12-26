using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `NacosService`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INacosServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.NacosServiceProps")]
    public interface INacosServiceProps
    {
        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property serviceName: The name of the service.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Property ephemeral: Specifies whether the instance is a temporary node.</summary>
        /// <remarks>
        /// Valid values:
        /// true: yes
        /// false: no
        /// </remarks>
        [JsiiProperty(name: "ephemeral", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ephemeral
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupName: The name of the group.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property namespaceId: The ID of the namespace.</summary>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property protectThreshold: The protection threshold.</summary>
        [JsiiProperty(name: "protectThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtectThreshold
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `NacosService`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INacosServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.NacosServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.INacosServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceName: The name of the service.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ephemeral: Specifies whether the instance is a temporary node.</summary>
            /// <remarks>
            /// Valid values:
            /// true: yes
            /// false: no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ephemeral", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ephemeral
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupName: The name of the group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespaceId: The ID of the namespace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protectThreshold: The protection threshold.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "protectThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtectThreshold
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
