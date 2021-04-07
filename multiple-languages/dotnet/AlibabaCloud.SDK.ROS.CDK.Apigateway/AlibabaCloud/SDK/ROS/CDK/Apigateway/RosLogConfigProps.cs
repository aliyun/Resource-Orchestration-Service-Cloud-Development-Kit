using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::LogConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosLogConfigProps")]
    public class RosLogConfigProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosLogConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: slsLogStore: Logstore name of SLS
        /// </remarks>
        [JsiiProperty(name: "slsLogStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SlsLogStore
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsProject: Project name of SLS
        /// </remarks>
        [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SlsProject
        {
            get;
            set;
        }
    }
}
