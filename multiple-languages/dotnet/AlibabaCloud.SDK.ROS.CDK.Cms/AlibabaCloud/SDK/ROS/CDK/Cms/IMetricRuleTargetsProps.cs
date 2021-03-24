using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::MetricRuleTargets`.</summary>
    [JsiiInterface(nativeType: typeof(IMetricRuleTargetsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MetricRuleTargetsProps")]
    public interface IMetricRuleTargetsProps
    {
        /// <summary>Property ruleId: The ID of the alert rule.</summary>
        [JsiiProperty(name: "ruleId", typeJson: "{\"primitive\":\"string\"}")]
        string RuleId
        {
            get;
        }

        /// <summary>Property targets: undefined.</summary>
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Targets
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::MetricRuleTargets`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMetricRuleTargetsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MetricRuleTargetsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IMetricRuleTargetsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ruleId: The ID of the alert rule.</summary>
            [JsiiProperty(name: "ruleId", typeJson: "{\"primitive\":\"string\"}")]
            public string RuleId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property targets: undefined.</summary>
            [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Targets
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
