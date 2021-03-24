using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::WAF::WafSwitch`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.RosWafSwitchProps")]
    public class RosWafSwitchProps : AlibabaCloud.SDK.ROS.CDK.Waf.IRosWafSwitchProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domain: Domain name.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Domain
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: WAF instance ID.
        /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceOn: Web attack protection switch, the value of:
        /// 0: closed.
        /// 1: indicate on.
        /// </remarks>
        [JsiiProperty(name: "serviceOn", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double ServiceOn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: region: Examples of areas where the WAF. Value:
        /// cn: China mainland (default)
        /// cn-hongkong: China HongKong and other overseas
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Region
        {
            get;
            set;
        }
    }
}
