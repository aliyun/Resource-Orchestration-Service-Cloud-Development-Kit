using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Properties for defining a `ReportTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IReportTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-config.ReportTemplateProps")]
    public interface IReportTemplateProps
    {
        /// <summary>Property reportTemplateName: Report Template Name.</summary>
        [JsiiProperty(name: "reportTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReportTemplateName
        {
            get;
        }

        /// <summary>Property reportFileFormats: Report Format.</summary>
        /// <remarks>
        /// Currently only support <c>excel</c>.
        /// </remarks>
        [JsiiProperty(name: "reportFileFormats", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReportFileFormats
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property reportGranularity: Report Aggregation Granularity.</summary>
        [JsiiProperty(name: "reportGranularity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReportGranularity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property reportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.</summary>
        [JsiiProperty(name: "reportLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReportLanguage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property reportScope: Report range, yes and logic between multiple sets of k-v pairs.</summary>
        [JsiiProperty(name: "reportScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosReportTemplate.ReportScopeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReportScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property reportTemplateDescription: Report Template Description.</summary>
        [JsiiProperty(name: "reportTemplateDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReportTemplateDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property subscriptionFrequency: Report subscription frequency.</summary>
        /// <remarks>
        /// If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
        /// The format is: Seconds, time, day, month, week. The following are examples of commonly used Cron expressions:
        ///
        /// <list type="bullet">
        /// <description>Execute at 0 o'clock every day: 0 0 0 * *?</description>
        /// <description>Every Monday at 15: 30: 0 30 15? * MON</description>
        /// <description>Execute at 2 o'clock on the 1st of each month: 0 0 2 1 *?
        /// Among them:</description>
        /// <description>"*" Indicates any value</description>
        /// <description>What-? Used for day and week fields, indicating that no specific value is specified</description>
        /// <description>MON means Monday</description>
        /// </list>
        ///
        ///     The trigger time is UTC +8, and the settings of the cron expression can be converted according to the time zone.
        ///     It can only be triggered according to the cron expression time as much as possible. The cron expression limits the same template to trigger at most one notification per day.
        /// </remarks>
        [JsiiProperty(name: "subscriptionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SubscriptionFrequency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ReportTemplate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IReportTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-config.ReportTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IReportTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property reportTemplateName: Report Template Name.</summary>
            [JsiiProperty(name: "reportTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReportTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property reportFileFormats: Report Format.</summary>
            /// <remarks>
            /// Currently only support <c>excel</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reportFileFormats", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReportFileFormats
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property reportGranularity: Report Aggregation Granularity.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "reportGranularity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReportGranularity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property reportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "reportLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReportLanguage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property reportScope: Report range, yes and logic between multiple sets of k-v pairs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "reportScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosReportTemplate.ReportScopeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ReportScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property reportTemplateDescription: Report Template Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "reportTemplateDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReportTemplateDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property subscriptionFrequency: Report subscription frequency.</summary>
            /// <remarks>
            /// If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
            /// The format is: Seconds, time, day, month, week. The following are examples of commonly used Cron expressions:
            ///
            /// <list type="bullet">
            /// <description>Execute at 0 o'clock every day: 0 0 0 * *?</description>
            /// <description>Every Monday at 15: 30: 0 30 15? * MON</description>
            /// <description>Execute at 2 o'clock on the 1st of each month: 0 0 2 1 *?
            /// Among them:</description>
            /// <description>"*" Indicates any value</description>
            /// <description>What-? Used for day and week fields, indicating that no specific value is specified</description>
            /// <description>MON means Monday</description>
            /// </list>
            ///
            ///     The trigger time is UTC +8, and the settings of the cron expression can be converted according to the time zone.
            ///     It can only be triggered according to the cron expression time as much as possible. The cron expression limits the same template to trigger at most one notification per day.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "subscriptionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SubscriptionFrequency
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
