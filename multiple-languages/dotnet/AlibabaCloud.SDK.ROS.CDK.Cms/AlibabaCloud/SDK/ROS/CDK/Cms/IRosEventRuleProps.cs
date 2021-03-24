using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::EventRule`.</summary>
    [JsiiInterface(nativeType: typeof(IRosEventRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosEventRuleProps")]
    public interface IRosEventRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: eventPattern: Event pattern configuration.A maximum of 20 event patterns.
        /// </remarks>
        [JsiiProperty(name: "eventPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRule.EventPatternProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object EventPattern
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the alarm rule.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}")]
        string RuleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the alert rule.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: eventType: The type of the event alert. Valid values:
        /// SYSTEM
        /// CUSTOM
        /// </remarks>
        [JsiiProperty(name: "eventType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EventType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The ID of the application group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: state: The status of the alert rule. Valid values:
        /// ENABLED
        /// DISABLED
        /// </remarks>
        [JsiiProperty(name: "state", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? State
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::EventRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosEventRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosEventRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosEventRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: eventPattern: Event pattern configuration.A maximum of 20 event patterns.
            /// </remarks>
            [JsiiProperty(name: "eventPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRule.EventPatternProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object EventPattern
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: The name of the alarm rule.
            /// </remarks>
            [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}")]
            public string RuleName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the alert rule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: eventType: The type of the event alert. Valid values:
            /// SYSTEM
            /// CUSTOM
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eventType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EventType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The ID of the application group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: state: The status of the alert rule. Valid values:
            /// ENABLED
            /// DISABLED
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "state", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? State
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
