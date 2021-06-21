using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::WAF::LogServiceEnable`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.LogServiceEnableProps")]
    public class LogServiceEnableProps : AlibabaCloud.SDK.ROS.CDK.Waf.ILogServiceEnableProps
    {
        /// <summary>Property domain: The domain name that is added to WAF.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Domain
        {
            get;
            set;
        }

        /// <summary>Property instanceId: The ID of the WAF instance.</summary>
        /// <remarks>
        /// You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceId
        {
            get;
            set;
        }
    }
}
