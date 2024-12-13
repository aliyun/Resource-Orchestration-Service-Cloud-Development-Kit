using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `PluginClass`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPluginClassProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.PluginClassProps")]
    public interface IPluginClassProps
    {
        /// <summary>Property description: The description of the plugin class.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property executePriority: The execute priority of the Plugin.</summary>
        [JsiiProperty(name: "executePriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExecutePriority
        {
            get;
        }

        /// <summary>Property executeStage: The Execution stage.</summary>
        [JsiiProperty(name: "executeStage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExecuteStage
        {
            get;
        }

        /// <summary>Property pluginClassName: The name of the plugin class.</summary>
        [JsiiProperty(name: "pluginClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginClassName
        {
            get;
        }

        /// <summary>Property version: The version of plugin class.</summary>
        [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Version
        {
            get;
        }

        /// <summary>Property versionDescription: The description of the version .</summary>
        [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VersionDescription
        {
            get;
        }

        /// <summary>Property wasmLanguage: the language of the wasm.</summary>
        [JsiiProperty(name: "wasmLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WasmLanguage
        {
            get;
        }

        /// <summary>Property wasmUrl: The url of the wasm.</summary>
        [JsiiProperty(name: "wasmUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WasmUrl
        {
            get;
        }

        /// <summary>Property alias: The alias of the plugin class.</summary>
        [JsiiProperty(name: "alias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Alias
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property supportedMinGatewayVersion: The supported minimum gateway version.</summary>
        [JsiiProperty(name: "supportedMinGatewayVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SupportedMinGatewayVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PluginClass`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPluginClassProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.PluginClassProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IPluginClassProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property description: The description of the plugin class.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property executePriority: The execute priority of the Plugin.</summary>
            [JsiiProperty(name: "executePriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExecutePriority
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property executeStage: The Execution stage.</summary>
            [JsiiProperty(name: "executeStage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExecuteStage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pluginClassName: The name of the plugin class.</summary>
            [JsiiProperty(name: "pluginClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginClassName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property version: The version of plugin class.</summary>
            [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Version
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property versionDescription: The description of the version .</summary>
            [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VersionDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property wasmLanguage: the language of the wasm.</summary>
            [JsiiProperty(name: "wasmLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WasmLanguage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property wasmUrl: The url of the wasm.</summary>
            [JsiiProperty(name: "wasmUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WasmUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property alias: The alias of the plugin class.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "alias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Alias
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property supportedMinGatewayVersion: The supported minimum gateway version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "supportedMinGatewayVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SupportedMinGatewayVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
