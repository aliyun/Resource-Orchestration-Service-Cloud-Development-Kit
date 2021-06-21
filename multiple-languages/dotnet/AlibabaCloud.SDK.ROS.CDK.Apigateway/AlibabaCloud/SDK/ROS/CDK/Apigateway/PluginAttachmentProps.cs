using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::PluginAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.PluginAttachmentProps")]
    public class PluginAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IPluginAttachmentProps
    {
        /// <summary>Property apiId: The ID of the API to which you want to bind the plug-in.</summary>
        [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ApiId
        {
            get;
            set;
        }

        /// <summary>Property pluginId: The ID of the plugin that you want to bind.</summary>
        [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PluginId
        {
            get;
            set;
        }

        /// <summary>Property stageName: The name of the runtime environment.</summary>
        /// <remarks>
        /// Valid values:
        /// RELEASE: indicates the release environment.
        /// PRE: indicates the pre-release environment.
        /// TEST: indicates the test environment.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object StageName
        {
            get;
            set;
        }
    }
}
