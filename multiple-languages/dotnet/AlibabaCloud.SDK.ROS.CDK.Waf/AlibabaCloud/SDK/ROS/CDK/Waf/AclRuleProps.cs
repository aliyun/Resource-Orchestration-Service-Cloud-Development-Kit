using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::WAF::AclRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.AclRuleProps")]
    public class AclRuleProps : AlibabaCloud.SDK.ROS.CDK.Waf.IAclRuleProps
    {
        /// <summary>Property domain: Domain name.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Domain
        {
            get;
            set;
        }

        /// <summary>Property instanceId: WAF instance ID.</summary>
        /// <remarks>
        /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceId
        {
            get;
            set;
        }

        /// <summary>Property rules: Detailed information of precise access control rules, expressed in JSON format strings.</summary>
        [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Rules
        {
            get;
            set;
        }

        /// <summary>Property region: Examples of areas where the WAF.</summary>
        /// <remarks>
        /// Value:
        /// cn: China mainland (default)
        /// cn-hongkong: China HongKong and other overseas
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Region
        {
            get;
            set;
        }

        /// <summary>Property ruleId: Precise access control rule ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RuleId
        {
            get;
            set;
        }
    }
}
