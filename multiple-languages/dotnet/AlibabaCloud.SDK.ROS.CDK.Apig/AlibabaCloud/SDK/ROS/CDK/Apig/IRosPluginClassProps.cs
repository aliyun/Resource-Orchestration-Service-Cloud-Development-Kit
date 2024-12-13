using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `RosPluginClass`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPluginClassProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosPluginClassProps")]
    public interface IRosPluginClassProps
    {
        /// <remarks>
        /// <strong>Property</strong>: description: The description of the plugin class.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: executePriority: The execute priority of the Plugin.
        /// </remarks>
        [JsiiProperty(name: "executePriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExecutePriority
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: executeStage: The Execution stage.
        /// </remarks>
        [JsiiProperty(name: "executeStage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExecuteStage
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pluginClassName: The name of the plugin class.
        /// </remarks>
        [JsiiProperty(name: "pluginClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginClassName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: version: The version of plugin class.
        /// </remarks>
        [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Version
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: versionDescription: The description of the version .
        /// </remarks>
        [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VersionDescription
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: wasmLanguage: the language of the wasm.
        /// </remarks>
        [JsiiProperty(name: "wasmLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WasmLanguage
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: wasmUrl: The url of the wasm.
        /// </remarks>
        [JsiiProperty(name: "wasmUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WasmUrl
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: alias: The alias of the plugin class.
        /// </remarks>
        [JsiiProperty(name: "alias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Alias
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: supportedMinGatewayVersion: The supported minimum gateway version.
        /// </remarks>
        [JsiiProperty(name: "supportedMinGatewayVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SupportedMinGatewayVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPluginClass`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPluginClassProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosPluginClassProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IRosPluginClassProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the plugin class.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: executePriority: The execute priority of the Plugin.
            /// </remarks>
            [JsiiProperty(name: "executePriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExecutePriority
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: executeStage: The Execution stage.
            /// </remarks>
            [JsiiProperty(name: "executeStage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExecuteStage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pluginClassName: The name of the plugin class.
            /// </remarks>
            [JsiiProperty(name: "pluginClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginClassName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: version: The version of plugin class.
            /// </remarks>
            [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Version
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: versionDescription: The description of the version .
            /// </remarks>
            [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VersionDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: wasmLanguage: the language of the wasm.
            /// </remarks>
            [JsiiProperty(name: "wasmLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WasmLanguage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: wasmUrl: The url of the wasm.
            /// </remarks>
            [JsiiProperty(name: "wasmUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WasmUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: alias: The alias of the plugin class.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Alias
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: supportedMinGatewayVersion: The supported minimum gateway version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "supportedMinGatewayVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SupportedMinGatewayVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
