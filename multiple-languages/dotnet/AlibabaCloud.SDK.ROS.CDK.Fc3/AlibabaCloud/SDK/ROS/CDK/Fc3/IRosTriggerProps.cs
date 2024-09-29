using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Properties for defining a `RosTrigger`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.RosTriggerProps")]
    public interface IRosTriggerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: The name of the function.
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FunctionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerConfig: Trigger config.
        /// </remarks>
        [JsiiProperty(name: "triggerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object TriggerConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerName: Name of the trigger.
        /// </remarks>
        [JsiiProperty(name: "triggerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TriggerName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerType: Type of the trigger.
        /// </remarks>
        [JsiiProperty(name: "triggerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TriggerType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the trigger.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: invocationRole: Invocation role.
        /// </remarks>
        [JsiiProperty(name: "invocationRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InvocationRole
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: Qualifier of the trigger.
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Qualifier
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceArn: Source ARN of the trigger.
        /// </remarks>
        [JsiiProperty(name: "sourceArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTrigger`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.RosTriggerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.IRosTriggerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: functionName: The name of the function.
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: triggerConfig: Trigger config.
            /// </remarks>
            [JsiiProperty(name: "triggerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object TriggerConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: triggerName: Name of the trigger.
            /// </remarks>
            [JsiiProperty(name: "triggerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TriggerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: triggerType: Type of the trigger.
            /// </remarks>
            [JsiiProperty(name: "triggerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TriggerType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the trigger.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: invocationRole: Invocation role.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "invocationRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InvocationRole
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: Qualifier of the trigger.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Qualifier
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceArn: Source ARN of the trigger.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceArn
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
