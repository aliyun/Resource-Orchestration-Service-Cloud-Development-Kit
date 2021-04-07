using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::App`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.AppProps")]
    public class AppProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IAppProps
    {
        /// <summary>Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AppName
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the App, less than 180 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to app.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApp.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApp.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
