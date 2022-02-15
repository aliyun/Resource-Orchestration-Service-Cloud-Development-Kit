using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::WAF::LogServiceEnable`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.RosLogServiceEnableProps")]
    public class RosLogServiceEnableProps : AlibabaCloud.SDK.ROS.CDK.Waf.IRosLogServiceEnableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domain: The domain name that is added to WAF.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Domain
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the WAF instance.
        /// You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceId
        {
            get;
            set;
        }
    }
}
