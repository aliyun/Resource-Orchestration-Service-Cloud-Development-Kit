using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::PluginAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosPluginAttachmentProps")]
    public class RosPluginAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosPluginAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiId: The ID of the API to which you want to bind the plug-in.
        /// </remarks>
        [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ApiId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pluginId: The ID of the plugin that you want to bind.
        /// </remarks>
        [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PluginId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: The name of the runtime environment. Valid values:
        /// RELEASE: indicates the release environment.
        /// PRE: indicates the pre-release environment.
        /// TEST: indicates the test environment.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object StageName
        {
            get;
            set;
        }
    }
}
