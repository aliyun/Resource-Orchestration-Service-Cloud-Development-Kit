using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `ALIYUN::OOS::Execution`.</summary>
    [JsiiInterface(nativeType: typeof(IExecutionProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ExecutionProps")]
    public interface IExecutionProps
    {
        /// <summary>Property templateName: Template name.</summary>
        /// <remarks>
        /// Content is limited to letters, numbers, underlined, underline, the length of 200 characters, and can not begin to ALIYUN, ACS, ALIBABA.
        /// </remarks>
        [JsiiProperty(name: "templateName", typeJson: "{\"primitive\":\"string\"}")]
        string TemplateName
        {
            get;
        }

        /// <summary>Property mode: Execution mode.</summary>
        [JsiiProperty(name: "mode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Mode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parameters: Parameters for the execution of template.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parentExecutionId: Parent execution ID.</summary>
        [JsiiProperty(name: "parentExecutionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ParentExecutionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceOptions: Resource options user by ROS.</summary>
        [JsiiProperty(name: "resourceOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oos.RosExecution.ResourceOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceOptions
        {
            get
            {
                return null;
            }
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
        [JsiiProperty(name: "safetyCheck", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SafetyCheck
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tag value and the key mapping, the label of the key number can be up to 20.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateVersion: Version number of template.</summary>
        /// <remarks>
        /// Default to the latest version.
        /// </remarks>
        [JsiiProperty(name: "templateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? TemplateVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::OOS::Execution`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IExecutionProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ExecutionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IExecutionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property templateName: Template name.</summary>
            /// <remarks>
            /// Content is limited to letters, numbers, underlined, underline, the length of 200 characters, and can not begin to ALIYUN, ACS, ALIBABA.
            /// </remarks>
            [JsiiProperty(name: "templateName", typeJson: "{\"primitive\":\"string\"}")]
            public string TemplateName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property mode: Execution mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Mode
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property parameters: Parameters for the execution of template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parentExecutionId: Parent execution ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parentExecutionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ParentExecutionId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceOptions: Resource options user by ROS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oos.RosExecution.ResourceOptionsProperty\"}]}}", isOptional: true)]
            public object? ResourceOptions
            {
                get => GetInstanceProperty<object?>();
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
            [JsiiProperty(name: "safetyCheck", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SafetyCheck
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tag value and the key mapping, the label of the key number can be up to 20.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property templateVersion: Version number of template.</summary>
            /// <remarks>
            /// Default to the latest version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? TemplateVersion
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
