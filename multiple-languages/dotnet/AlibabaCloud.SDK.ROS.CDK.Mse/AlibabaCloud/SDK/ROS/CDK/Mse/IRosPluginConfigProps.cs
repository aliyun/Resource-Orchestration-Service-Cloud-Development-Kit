using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `RosPluginConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPluginConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosPluginConfigProps")]
    public interface IRosPluginConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configLevel: The scope of the plugin application.
        /// - 0: Global
        /// - 1: Route
        /// - 2: Domain
        /// </remarks>
        [JsiiProperty(name: "configLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConfigLevel
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enable: Whether to enable the plugin.
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Enable
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: gatewayUniqueId: The unique ID of the gateway.
        /// </remarks>
        [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayUniqueId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pluginId: The ID of the gateway plugin.
        /// </remarks>
        [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
        /// </remarks>
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Config
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).
        /// </remarks>
        [JsiiProperty(name: "resourceIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceIdList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPluginConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPluginConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosPluginConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IRosPluginConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: configLevel: The scope of the plugin application.
            /// - 0: Global
            /// - 1: Route
            /// - 2: Domain
            /// </remarks>
            [JsiiProperty(name: "configLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConfigLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enable: Whether to enable the plugin.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Enable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayUniqueId: The unique ID of the gateway.
            /// </remarks>
            [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayUniqueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pluginId: The ID of the gateway plugin.
            /// </remarks>
            [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Config
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceIdList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
