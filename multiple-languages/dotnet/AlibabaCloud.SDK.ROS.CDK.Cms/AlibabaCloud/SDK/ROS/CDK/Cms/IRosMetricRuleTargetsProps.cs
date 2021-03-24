using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::MetricRuleTargets`.</summary>
    [JsiiInterface(nativeType: typeof(IRosMetricRuleTargetsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTargetsProps")]
    public interface IRosMetricRuleTargetsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ruleId: The ID of the alert rule.
        /// </remarks>
        [JsiiProperty(name: "ruleId", typeJson: "{\"primitive\":\"string\"}")]
        string RuleId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targets: undefined
        /// </remarks>
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Targets
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::MetricRuleTargets`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosMetricRuleTargetsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTargetsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMetricRuleTargetsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleId: The ID of the alert rule.
            /// </remarks>
            [JsiiProperty(name: "ruleId", typeJson: "{\"primitive\":\"string\"}")]
            public string RuleId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targets: undefined
            /// </remarks>
            [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Targets
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
