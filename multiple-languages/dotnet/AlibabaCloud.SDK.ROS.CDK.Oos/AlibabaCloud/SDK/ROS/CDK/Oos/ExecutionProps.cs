using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OOS::Execution`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-oos.ExecutionProps")]
    public class ExecutionProps : AlibabaCloud.SDK.ROS.CDK.Oos.IExecutionProps
    {
        /// <summary>Property templateName: Template name.</summary>
        /// <remarks>
        /// Content is limited to letters, numbers, underlined, underline, the length of 200 characters, and can not begin to ALIYUN, ACS, ALIBABA.
        /// </remarks>
        [JsiiProperty(name: "templateName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TemplateName
        {
            get;
            set;
        }

        /// <summary>Property mode: Execution mode.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "mode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Mode
        {
            get;
            set;
        }

        /// <summary>Property parameters: Parameters for the execution of template.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Parameters
        {
            get;
            set;
        }

        /// <summary>Property parentExecutionId: Parent execution ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "parentExecutionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ParentExecutionId
        {
            get;
            set;
        }

        /// <summary>Property resourceOptions: Resource options user by ROS.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oos.RosExecution.ResourceOptionsProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? ResourceOptions
        {
            get;
            set;
        }

        /// <summary>Property safetyCheck: Security check mode.</summary>
        /// <remarks>
        /// Allowed values:
        /// 
        /// <list type="bullet">
        /// <description>Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.</description>
        /// <description>ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "safetyCheck", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SafetyCheck
        {
            get;
            set;
        }

        /// <summary>Property tags: Tag value and the key mapping, the label of the key number can be up to 20.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property templateVersion: Version number of template.</summary>
        /// <remarks>
        /// Default to the latest version.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TemplateVersion
        {
            get;
            set;
        }
    }
}
