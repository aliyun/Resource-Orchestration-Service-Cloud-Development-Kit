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
        [JsiiProperty(name: "slsLogStore", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SlsLogStore
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsProject: Project name of SLS
        /// </remarks>
        [JsiiProperty(name: "slsProject", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SlsProject
        {
            get;
            set;
        }
    }
}
