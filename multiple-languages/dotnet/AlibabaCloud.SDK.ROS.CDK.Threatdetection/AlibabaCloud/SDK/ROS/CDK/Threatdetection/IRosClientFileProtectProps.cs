using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosClientFileProtect`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosClientFileProtectProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosClientFileProtectProps")]
    public interface IRosClientFileProtectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fileOps: The operations that you want to perform on the files.
        /// </remarks>
        [JsiiProperty(name: "fileOps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object FileOps
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: filePaths: The paths to the monitored files. Wildcard characters are supported.
        /// </remarks>
        [JsiiProperty(name: "filePaths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object FilePaths
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: procPaths: The paths to the monitored processes.
        /// </remarks>
        [JsiiProperty(name: "procPaths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ProcPaths
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleAction: The handling method of the rule. Valid values:
        /// *   pass: allow
        /// *   alert.
        /// </remarks>
        [JsiiProperty(name: "ruleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleAction
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the rule.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: alertLevel: The severity of alerts. Valid values:
        /// *   0: does not generate alerts
        /// *   1: sends notifications
        /// *   2: suspicious
        /// *   3: high-risk.
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

        /// <remarks>
        /// <strong>Property</strong>: platform: The type of the operating system. Valid values:
        /// *   **windows**: Windows
        /// *   **linux**: Linux.
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

        /// <remarks>
        /// <strong>Property</strong>: status: Rule status.
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

        /// <remarks>
        /// <strong>Property</strong>: switchId: The switch ID of the rule.
        /// </remarks>
        [JsiiProperty(name: "switchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosClientFileProtect`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosClientFileProtectProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosClientFileProtectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosClientFileProtectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fileOps: The operations that you want to perform on the files.
            /// </remarks>
            [JsiiProperty(name: "fileOps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object FileOps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: filePaths: The paths to the monitored files. Wildcard characters are supported.
            /// </remarks>
            [JsiiProperty(name: "filePaths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object FilePaths
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: procPaths: The paths to the monitored processes.
            /// </remarks>
            [JsiiProperty(name: "procPaths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ProcPaths
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleAction: The handling method of the rule. Valid values:
            /// *   pass: allow
            /// *   alert.
            /// </remarks>
            [JsiiProperty(name: "ruleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: The name of the rule.
            /// </remarks>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: alertLevel: The severity of alerts. Valid values:
            /// *   0: does not generate alerts
            /// *   1: sends notifications
            /// *   2: suspicious
            /// *   3: high-risk.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alertLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlertLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: platform: The type of the operating system. Valid values:
            /// *   **windows**: Windows
            /// *   **linux**: Linux.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "platform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Platform
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: status: Rule status.
            /// 1: Enabled
            /// 0: Not enabled
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: switchId: The switch ID of the rule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "switchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
