using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `Plugin`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-plugin
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPluginProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.PluginProps")]
    public interface IPluginProps
    {
        /// <summary>Property pluginData: The definition statement of the plug-in.</summary>
        /// <remarks>
        /// Plug-in definition statements in the JSON and YAML formats are supported.
        /// </remarks>
        [JsiiProperty(name: "pluginData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginData
        {
            get;
        }

        /// <summary>Property pluginName: The name of the plug-in that you want to create.</summary>
        /// <remarks>
        /// It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
        /// </remarks>
        [JsiiProperty(name: "pluginName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginName
        {
            get;
        }

        /// <summary>Property pluginType: The type of the plug-in.</summary>
        /// <remarks>
        /// Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
        /// </remarks>
        [JsiiProperty(name: "pluginType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginType
        {
            get;
        }

        /// <summary>Property description: The description of the plug-in, which cannot exceed 200 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosPlugin.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Apigateway.RosPlugin.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Plugin`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-plugin
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPluginProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.PluginProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IPluginProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property pluginData: The definition statement of the plug-in.</summary>
            /// <remarks>
            /// Plug-in definition statements in the JSON and YAML formats are supported.
            /// </remarks>
            [JsiiProperty(name: "pluginData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pluginName: The name of the plug-in that you want to create.</summary>
            /// <remarks>
            /// It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
            /// </remarks>
            [JsiiProperty(name: "pluginName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pluginType: The type of the plug-in.</summary>
            /// <remarks>
            /// Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
            /// </remarks>
            [JsiiProperty(name: "pluginType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the plug-in, which cannot exceed 200 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosPlugin.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Apigateway.RosPlugin.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apigateway.RosPlugin.ITagsProperty[]?>();
            }
        }
    }
}
