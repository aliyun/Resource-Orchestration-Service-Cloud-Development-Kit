using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `PluginConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPluginConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.PluginConfigProps")]
    public interface IPluginConfigProps
    {
        /// <summary>Property configLevel: The scope of the plugin application.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>0: Global</description>
        /// <description>1: Route</description>
        /// <description>2: Domain</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "configLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConfigLevel
        {
            get;
        }

        /// <summary>Property enable: Whether to enable the plugin.</summary>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Enable
        {
            get;
        }

        /// <summary>Property gatewayUniqueId: The unique ID of the gateway.</summary>
        [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayUniqueId
        {
            get;
        }

        /// <summary>Property pluginId: The ID of the gateway plugin.</summary>
        [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginId
        {
            get;
        }

        /// <summary>Property config: The configuration of the plugin.</summary>
        /// <remarks>
        /// For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
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

        /// <summary>Property resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).</summary>
        [JsiiProperty(name: "resourceIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceIdList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PluginConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPluginConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.PluginConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IPluginConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property configLevel: The scope of the plugin application.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>0: Global</description>
            /// <description>1: Route</description>
            /// <description>2: Domain</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "configLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConfigLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enable: Whether to enable the plugin.</summary>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Enable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property gatewayUniqueId: The unique ID of the gateway.</summary>
            [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayUniqueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pluginId: The ID of the gateway plugin.</summary>
            [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property config: The configuration of the plugin.</summary>
            /// <remarks>
            /// For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Config
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceIdList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
