using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::LogConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.LogConfigProps")]
    public class LogConfigProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.ILogConfigProps
    {
        /// <summary>Property slsLogStore: Logstore name of SLS.</summary>
        [JsiiProperty(name: "slsLogStore", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SlsLogStore
        {
            get;
            set;
        }

        /// <summary>Property slsProject: Project name of SLS.</summary>
        [JsiiProperty(name: "slsProject", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SlsProject
        {
            get;
            set;
        }
    }
}
