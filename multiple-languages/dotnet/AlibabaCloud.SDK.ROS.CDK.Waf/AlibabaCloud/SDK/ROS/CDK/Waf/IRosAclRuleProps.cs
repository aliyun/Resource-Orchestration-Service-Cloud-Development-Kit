using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `RosAclRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAclRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosAclRuleProps")]
    public interface IRosAclRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domain: Domain name.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Domain
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: WAF instance ID.
        /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: rules: Detailed information of precise access control rules, expressed in JSON format strings.
        /// </remarks>
        [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Rules
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: region: Examples of areas where the WAF. Value:
        /// cn: China mainland (default)
        /// cn-hongkong: China HongKong and other overseas
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Region
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleId: Precise access control rule ID
        /// </remarks>
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAclRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAclRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosAclRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IRosAclRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domain: Domain name.
            /// </remarks>
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Domain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: WAF instance ID.
            /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: rules: Detailed information of precise access control rules, expressed in JSON format strings.
            /// </remarks>
            [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Rules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: region: Examples of areas where the WAF. Value:
            /// cn: China mainland (default)
            /// cn-hongkong: China HongKong and other overseas
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Region
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleId: Precise access control rule ID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
