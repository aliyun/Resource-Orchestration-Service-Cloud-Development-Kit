using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Represents a `ReportTemplate`.</summary>
    [JsiiInterface(nativeType: typeof(IReportTemplate), fullyQualifiedName: "@alicloud/ros-cdk-config.IReportTemplate")]
    public interface IReportTemplate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ReportFileFormats: Report Format.</summary>
        /// <remarks>
        /// Currently only support <c>excel</c>.
        /// </remarks>
        [JsiiProperty(name: "attrReportFileFormats", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReportFileFormats
        {
            get;
        }

        /// <summary>Attribute ReportGranularity: Report Aggregation Granularity.</summary>
        [JsiiProperty(name: "attrReportGranularity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReportGranularity
        {
            get;
        }

        /// <summary>Attribute ReportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.</summary>
        [JsiiProperty(name: "attrReportLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReportLanguage
        {
            get;
        }

        /// <summary>Attribute ReportScope: Report range, yes and logic between multiple sets of k-v pairs.</summary>
        [JsiiProperty(name: "attrReportScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReportScope
        {
            get;
        }

        /// <summary>Attribute ReportTemplateDescription: Report Template Description.</summary>
        [JsiiProperty(name: "attrReportTemplateDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReportTemplateDescription
        {
            get;
        }

        /// <summary>Attribute ReportTemplateId: Report template Id.</summary>
        [JsiiProperty(name: "attrReportTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReportTemplateId
        {
            get;
        }

        /// <summary>Attribute ReportTemplateName: Report Template Name.</summary>
        [JsiiProperty(name: "attrReportTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReportTemplateName
        {
            get;
        }

        /// <summary>Attribute SubscriptionFrequency: Report subscription frequency.</summary>
        /// <remarks>
        /// If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
        /// </remarks>
        [JsiiProperty(name: "attrSubscriptionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSubscriptionFrequency
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-config.ReportTemplateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Config.IReportTemplateProps Props
        {
            get;
        }

        /// <summary>Represents a `ReportTemplate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IReportTemplate), fullyQualifiedName: "@alicloud/ros-cdk-config.IReportTemplate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IReportTemplate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ReportFileFormats: Report Format.</summary>
            /// <remarks>
            /// Currently only support <c>excel</c>.
            /// </remarks>
            [JsiiProperty(name: "attrReportFileFormats", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReportFileFormats
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReportGranularity: Report Aggregation Granularity.</summary>
            [JsiiProperty(name: "attrReportGranularity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReportGranularity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.</summary>
            [JsiiProperty(name: "attrReportLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReportLanguage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReportScope: Report range, yes and logic between multiple sets of k-v pairs.</summary>
            [JsiiProperty(name: "attrReportScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReportScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReportTemplateDescription: Report Template Description.</summary>
            [JsiiProperty(name: "attrReportTemplateDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReportTemplateDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReportTemplateId: Report template Id.</summary>
            [JsiiProperty(name: "attrReportTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReportTemplateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReportTemplateName: Report Template Name.</summary>
            [JsiiProperty(name: "attrReportTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReportTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SubscriptionFrequency: Report subscription frequency.</summary>
            /// <remarks>
            /// If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
            /// </remarks>
            [JsiiProperty(name: "attrSubscriptionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSubscriptionFrequency
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-config.ReportTemplateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Config.IReportTemplateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Config.IReportTemplateProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
