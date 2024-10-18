using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.RosRuleProps")]
    public class RosRuleProps : AlibabaCloud.SDK.ROS.CDK.Core.IRosRuleProps
    {
        /// <summary>Used to describe assertions.</summary>
        [JsiiProperty(name: "assertions", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosRuleAssertionProps\"}")]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosRuleAssertionProps Assertions
        {
            get;
            set;
        }

        /// <summary>Define the rule condition.</summary>
        /// <remarks>
        /// If the rule condition is not defined, the assertion is always valid.
        ///
        /// <strong>Default</strong>: - None
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ruleCondition", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IResolvable? RuleCondition
        {
            get;
            set;
        }
    }
}
