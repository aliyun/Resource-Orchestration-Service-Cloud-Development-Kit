using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ARMS::RetcodeApp`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-arms.RosRetcodeAppProps")]
    public class RosRetcodeAppProps : AlibabaCloud.SDK.ROS.CDK.Arms.IRosRetcodeAppProps
    {
        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        /// </remarks>
        [JsiiProperty(name: "retcodeAppName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RetcodeAppName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        /// </remarks>
        [JsiiProperty(name: "retcodeAppType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RetcodeAppType
        {
            get;
            set;
        }
    }
}
