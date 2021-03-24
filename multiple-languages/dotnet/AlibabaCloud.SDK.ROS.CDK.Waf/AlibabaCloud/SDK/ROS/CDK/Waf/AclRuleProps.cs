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
        [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Domain
        {
            get;
            set;
        }

        /// <summary>Property instanceId: WAF instance ID.</summary>
        /// <remarks>
        /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <summary>Property rules: Detailed information of precise access control rules, expressed in JSON format strings.</summary>
        [JsiiProperty(name: "rules", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Rules
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
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Region
        {
            get;
            set;
        }

        /// <summary>Property ruleId: Precise access control rule ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ruleId", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? RuleId
        {
            get;
            set;
        }
    }
}
