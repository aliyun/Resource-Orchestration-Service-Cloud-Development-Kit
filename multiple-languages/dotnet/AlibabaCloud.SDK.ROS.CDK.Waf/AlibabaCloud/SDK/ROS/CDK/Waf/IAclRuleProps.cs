using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `ALIYUN::WAF::AclRule`.</summary>
    [JsiiInterface(nativeType: typeof(IAclRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.AclRuleProps")]
    public interface IAclRuleProps
    {
        /// <summary>Property domain: Domain name.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
        string Domain
        {
            get;
        }

        /// <summary>Property instanceId: WAF instance ID.</summary>
        /// <remarks>
        /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property rules: Detailed information of precise access control rules, expressed in JSON format strings.</summary>
        [JsiiProperty(name: "rules", typeJson: "{\"primitive\":\"string\"}")]
        string Rules
        {
            get;
        }

        /// <summary>Property region: Examples of areas where the WAF.</summary>
        /// <remarks>
        /// Value:
        /// cn: China mainland (default)
        /// cn-hongkong: China HongKong and other overseas
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Region
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleId: Precise access control rule ID.</summary>
        [JsiiProperty(name: "ruleId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? RuleId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::WAF::AclRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAclRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.AclRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IAclRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domain: Domain name.</summary>
            [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
            public string Domain
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceId: WAF instance ID.</summary>
            /// <remarks>
            /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property rules: Detailed information of precise access control rules, expressed in JSON format strings.</summary>
            [JsiiProperty(name: "rules", typeJson: "{\"primitive\":\"string\"}")]
            public string Rules
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property region: Examples of areas where the WAF.</summary>
            /// <remarks>
            /// Value:
            /// cn: China mainland (default)
            /// cn-hongkong: China HongKong and other overseas
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ruleId: Precise access control rule ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ruleId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? RuleId
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
