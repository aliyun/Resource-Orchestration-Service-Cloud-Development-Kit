using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `ClientFileProtect`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClientFileProtectProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ClientFileProtectProps")]
    public interface IClientFileProtectProps
    {
        /// <summary>Property fileOps: The operations that you want to perform on the files.</summary>
        [JsiiProperty(name: "fileOps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object FileOps
        {
            get;
        }

        /// <summary>Property filePaths: The paths to the monitored files.</summary>
        /// <remarks>
        /// Wildcard characters are supported.
        /// </remarks>
        [JsiiProperty(name: "filePaths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object FilePaths
        {
            get;
        }

        /// <summary>Property procPaths: The paths to the monitored processes.</summary>
        [JsiiProperty(name: "procPaths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ProcPaths
        {
            get;
        }

        /// <summary>Property ruleAction: The handling method of the rule.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>pass: allow</description>
        /// <description>alert.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ruleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleAction
        {
            get;
        }

        /// <summary>Property ruleName: The name of the rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <summary>Property alertLevel: The severity of alerts.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>0: does not generate alerts</description>
        /// <description>1: sends notifications</description>
        /// <description>2: suspicious</description>
        /// <description>3: high-risk.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "alertLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlertLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property platform: The type of the operating system.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>windows</strong>: Windows</description>
        /// <description><strong>linux</strong>: Linux.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "platform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Platform
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: Rule status.</summary>
        /// <remarks>
        /// 1: Enabled
        /// 0: Not enabled
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property switchId: The switch ID of the rule.</summary>
        [JsiiProperty(name: "switchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ClientFileProtect`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClientFileProtectProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ClientFileProtectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IClientFileProtectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property fileOps: The operations that you want to perform on the files.</summary>
            [JsiiProperty(name: "fileOps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object FileOps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property filePaths: The paths to the monitored files.</summary>
            /// <remarks>
            /// Wildcard characters are supported.
            /// </remarks>
            [JsiiProperty(name: "filePaths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object FilePaths
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property procPaths: The paths to the monitored processes.</summary>
            [JsiiProperty(name: "procPaths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ProcPaths
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleAction: The handling method of the rule.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>pass: allow</description>
            /// <description>alert.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "ruleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleName: The name of the rule.</summary>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property alertLevel: The severity of alerts.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>0: does not generate alerts</description>
            /// <description>1: sends notifications</description>
            /// <description>2: suspicious</description>
            /// <description>3: high-risk.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alertLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlertLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property platform: The type of the operating system.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>windows</strong>: Windows</description>
            /// <description><strong>linux</strong>: Linux.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "platform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Platform
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: Rule status.</summary>
            /// <remarks>
            /// 1: Enabled
            /// 0: Not enabled
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property switchId: The switch ID of the rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "switchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
