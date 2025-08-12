using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `MetricRuleTemplateDeployment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplatedeployment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMetricRuleTemplateDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MetricRuleTemplateDeploymentProps")]
    public interface IMetricRuleTemplateDeploymentProps
    {
        /// <summary>Property groupId: Apply group ID.</summary>
        /// <remarks>
        /// For how to get the application group ID, see DescribeMonitorGroups.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property templateIds: The ID list of the Alarm Template to be applied.</summary>
        /// <remarks>
        /// For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
        /// </remarks>
        [JsiiProperty(name: "templateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object TemplateIds
        {
            get;
        }

        /// <summary>Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.</summary>
        [JsiiProperty(name: "appendMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppendMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.</summary>
        [JsiiProperty(name: "applyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApplyMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.</summary>
        [JsiiProperty(name: "enableEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableEndTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.</summary>
        [JsiiProperty(name: "enableStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableStartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot.</summary>
        [JsiiProperty(name: "notifyLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotifyLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.</summary>
        [JsiiProperty(name: "silenceTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SilenceTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.</summary>
        [JsiiProperty(name: "webhook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Webhook
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MetricRuleTemplateDeployment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplatedeployment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMetricRuleTemplateDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MetricRuleTemplateDeploymentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IMetricRuleTemplateDeploymentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupId: Apply group ID.</summary>
            /// <remarks>
            /// For how to get the application group ID, see DescribeMonitorGroups.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property templateIds: The ID list of the Alarm Template to be applied.</summary>
            /// <remarks>
            /// For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
            /// </remarks>
            [JsiiProperty(name: "templateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object TemplateIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appendMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppendMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "applyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApplyMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableEndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableStartTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "notifyLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotifyLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "silenceTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SilenceTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "webhook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Webhook
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
