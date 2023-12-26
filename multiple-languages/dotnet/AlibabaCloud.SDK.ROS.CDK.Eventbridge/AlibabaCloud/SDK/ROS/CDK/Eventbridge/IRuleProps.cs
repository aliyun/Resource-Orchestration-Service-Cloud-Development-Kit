using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eventbridge
{
    /// <summary>Properties for defining a `Rule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.RuleProps")]
    public interface IRuleProps
    {
        /// <summary>Property eventBusName: The name of the event bus.</summary>
        [JsiiProperty(name: "eventBusName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EventBusName
        {
            get;
        }

        /// <summary>Property filterPattern: The event pattern, in the JSON format.</summary>
        [JsiiProperty(name: "filterPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object FilterPattern
        {
            get;
        }

        /// <summary>Property ruleName: The name of the event rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <summary>Property targets: The event target to which events are delivered.</summary>
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosRule.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Targets
        {
            get;
        }

        /// <summary>Property description: The description of the event rule.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of the event rule.</summary>
        /// <remarks>
        /// Valid values:
        /// ENABLE: The event rule is enabled. It is the default state of the event rule.
        /// DISABLE: The event rule is disabled.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Rule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.RuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eventbridge.IRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property eventBusName: The name of the event bus.</summary>
            [JsiiProperty(name: "eventBusName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EventBusName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property filterPattern: The event pattern, in the JSON format.</summary>
            [JsiiProperty(name: "filterPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object FilterPattern
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleName: The name of the event rule.</summary>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targets: The event target to which events are delivered.</summary>
            [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosRule.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Targets
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the event rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of the event rule.</summary>
            /// <remarks>
            /// Valid values:
            /// ENABLE: The event rule is enabled. It is the default state of the event rule.
            /// DISABLE: The event rule is disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
