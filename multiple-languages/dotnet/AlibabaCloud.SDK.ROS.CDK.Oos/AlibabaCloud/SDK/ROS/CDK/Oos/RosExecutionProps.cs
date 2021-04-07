using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OOS::Execution`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-oos.RosExecutionProps")]
    public class RosExecutionProps : AlibabaCloud.SDK.ROS.CDK.Oos.IRosExecutionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters, and can not begin to ALIYUN, ACS, ALIBABA.
        /// </remarks>
        [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object TemplateName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mode: Execution mode.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Mode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: parameters: Parameters for the execution of template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? Parameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: parentExecutionId: Parent execution ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parentExecutionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ParentExecutionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceOptions: Resource options user by ROS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oos.RosExecution.ResourceOptionsProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? ResourceOptions
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: safetyCheck: Security check mode. Allowed values:
        /// - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
        /// - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "safetyCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SafetyCheck
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateVersion: Version number of template. Default to the latest version.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TemplateVersion
        {
            get;
            set;
        }
    }
}
