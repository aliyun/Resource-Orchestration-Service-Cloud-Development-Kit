using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Plugin`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.PluginProps")]
    public class PluginProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IPluginProps
    {
        /// <summary>Property pluginData: The definition statement of the plug-in.</summary>
        /// <remarks>
        /// Plug-in definition statements in the JSON and YAML formats are supported.
        /// </remarks>
        [JsiiProperty(name: "pluginData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PluginData
        {
            get;
            set;
        }

        /// <summary>Property pluginName: The name of the plug-in that you want to create.</summary>
        /// <remarks>
        /// It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
        /// </remarks>
        [JsiiProperty(name: "pluginName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PluginName
        {
            get;
            set;
        }

        /// <summary>Property pluginType: The type of the plug-in.</summary>
        /// <remarks>
        /// Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
        /// </remarks>
        [JsiiProperty(name: "pluginType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PluginType
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the plug-in, which cannot exceed 200 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosPlugin.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Apigateway.RosPlugin.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
