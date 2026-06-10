using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Properties for defining a `RosReportTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosReportTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RosReportTemplateProps")]
    public interface IRosReportTemplateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: reportTemplateName: Report Template Name.
        /// </remarks>
        [JsiiProperty(name: "reportTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReportTemplateName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: reportFileFormats: Report Format. Currently only support `excel`.
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

        /// <remarks>
        /// <strong>Property</strong>: reportGranularity: Report Aggregation Granularity.
        /// </remarks>
        [JsiiProperty(name: "reportGranularity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReportGranularity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: reportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.
        /// </remarks>
        [JsiiProperty(name: "reportLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReportLanguage
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: reportScope: Report range, yes and logic between multiple sets of k-v pairs.
        /// </remarks>
        [JsiiProperty(name: "reportScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosReportTemplate.ReportScopeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReportScope
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: reportTemplateDescription: Report Template Description.
        /// </remarks>
        [JsiiProperty(name: "reportTemplateDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReportTemplateDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionFrequency: Report subscription frequency. If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
        /// The format is: Seconds, time, day, month, week. The following are examples of commonly used Cron expressions:
        /// - Execute at 0 o'clock every day: 0 0 0 * *?
        /// - Every Monday at 15: 30: 0 30 15? * MON
        /// - Execute at 2 o'clock on the 1st of each month: 0 0 2 1 *?
        /// Among them:
        /// - "*" Indicates any value
        /// - What-? Used for day and week fields, indicating that no specific value is specified
        /// - MON means Monday
        /// > The trigger time is UTC +8, and the settings of the cron expression can be converted according to the time zone.
        /// > It can only be triggered according to the cron expression time as much as possible. The cron expression limits the same template to trigger at most one notification per day.
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

        /// <summary>Properties for defining a `RosReportTemplate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosReportTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RosReportTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IRosReportTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: reportTemplateName: Report Template Name.
            /// </remarks>
            [JsiiProperty(name: "reportTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReportTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: reportFileFormats: Report Format. Currently only support `excel`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reportFileFormats", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReportFileFormats
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: reportGranularity: Report Aggregation Granularity.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reportGranularity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReportGranularity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: reportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reportLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReportLanguage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: reportScope: Report range, yes and logic between multiple sets of k-v pairs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reportScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosReportTemplate.ReportScopeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ReportScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: reportTemplateDescription: Report Template Description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reportTemplateDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReportTemplateDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionFrequency: Report subscription frequency. If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
            /// The format is: Seconds, time, day, month, week. The following are examples of commonly used Cron expressions:
            /// - Execute at 0 o'clock every day: 0 0 0 * *?
            /// - Every Monday at 15: 30: 0 30 15? * MON
            /// - Execute at 2 o'clock on the 1st of each month: 0 0 2 1 *?
            /// Among them:
            /// - "*" Indicates any value
            /// - What-? Used for day and week fields, indicating that no specific value is specified
            /// - MON means Monday
            /// > The trigger time is UTC +8, and the settings of the cron expression can be converted according to the time zone.
            /// > It can only be triggered according to the cron expression time as much as possible. The cron expression limits the same template to trigger at most one notification per day.
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
