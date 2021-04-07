using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::MetricRuleTemplate`.</summary>
    [JsiiInterface(nativeType: typeof(IMetricRuleTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MetricRuleTemplateProps")]
    public interface IMetricRuleTemplateProps
    {
        /// <summary>Property name: The name of the alert template.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property alertTemplates: Valid values of N: 0 to 200.</summary>
        [JsiiProperty(name: "alertTemplates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlertTemplates
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the alert template.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restVersion: The version of the alert template.</summary>
        /// <remarks>
        /// Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
        /// to obtain information about the alert templates. The combination of version and ID
        /// uniquely identifies an alert template.
        /// </remarks>
        [JsiiProperty(name: "restVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateId: The ID of the alert template.</summary>
        [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::MetricRuleTemplate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMetricRuleTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MetricRuleTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IMetricRuleTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: The name of the alert template.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property alertTemplates: Valid values of N: 0 to 200.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "alertTemplates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AlertTemplates
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the alert template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restVersion: The version of the alert template.</summary>
            /// <remarks>
            /// Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
            /// to obtain information about the alert templates. The combination of version and ID
            /// uniquely identifies an alert template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateId: The ID of the alert template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
