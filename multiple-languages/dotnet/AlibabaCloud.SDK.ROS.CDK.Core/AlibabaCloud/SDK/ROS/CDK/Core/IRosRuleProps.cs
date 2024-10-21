using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRosRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosRuleProps")]
    public interface IRosRuleProps
    {
        /// <summary>Used to describe assertions.</summary>
        [JsiiProperty(name: "assertions", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosRuleAssertionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosRuleAssertionProps Assertions
        {
            get;
        }

        /// <summary>Define the rule condition.</summary>
        /// <remarks>
        /// If the rule condition is not defined, the assertion is always valid.
        ///
        /// <strong>Default</strong>: - None
        /// </remarks>
        [JsiiProperty(name: "ruleCondition", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IResolvable? RuleCondition
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IRosRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRosRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Used to describe assertions.</summary>
            [JsiiProperty(name: "assertions", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosRuleAssertionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosRuleAssertionProps Assertions
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosRuleAssertionProps>()!;
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
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable?>();
            }
        }
    }
}
