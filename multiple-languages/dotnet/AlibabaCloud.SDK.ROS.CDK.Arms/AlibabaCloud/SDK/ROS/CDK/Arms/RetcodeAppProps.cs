using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ARMS::RetcodeApp`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-arms.RetcodeAppProps")]
    public class RetcodeAppProps : AlibabaCloud.SDK.ROS.CDK.Arms.IRetcodeAppProps
    {
        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RegionId
        {
            get;
            set;
        }

        /// <summary>Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.</summary>
        [JsiiProperty(name: "retcodeAppName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RetcodeAppName
        {
            get;
            set;
        }

        /// <summary>Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.</summary>
        /// <remarks>
        /// Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        /// </remarks>
        [JsiiProperty(name: "retcodeAppType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RetcodeAppType
        {
            get;
            set;
        }
    }
}
