using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `EventRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEventRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.EventRuleProps")]
    public interface IEventRuleProps
    {
        /// <summary>Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.</summary>
        [JsiiProperty(name: "eventPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRule.EventPatternProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object EventPattern
        {
            get;
        }

        /// <summary>Property ruleName: The name of the alarm rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <summary>Property description: The description of the alert rule.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property eventType: The type of the event alert.</summary>
        /// <remarks>
        /// Valid values:
        /// SYSTEM
        /// CUSTOM
        /// </remarks>
        [JsiiProperty(name: "eventType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EventType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupId: The ID of the application group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property state: The status of the alert rule.</summary>
        /// <remarks>
        /// Valid values:
        /// ENABLED
        /// DISABLED
        /// </remarks>
        [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? State
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EventRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEventRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.EventRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IEventRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.</summary>
            [JsiiProperty(name: "eventPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRule.EventPatternProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object EventPattern
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleName: The name of the alarm rule.</summary>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the alert rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eventType: The type of the event alert.</summary>
            /// <remarks>
            /// Valid values:
            /// SYSTEM
            /// CUSTOM
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eventType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EventType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupId: The ID of the application group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property state: The status of the alert rule.</summary>
            /// <remarks>
            /// Valid values:
            /// ENABLED
            /// DISABLED
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? State
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
