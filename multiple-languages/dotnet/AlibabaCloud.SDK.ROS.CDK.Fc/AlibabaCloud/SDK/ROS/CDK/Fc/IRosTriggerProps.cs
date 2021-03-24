using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::Trigger`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosTriggerProps")]
    public interface IRosTriggerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name.
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
        string FunctionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        /// </remarks>
        [JsiiProperty(name: "triggerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object TriggerConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerName: Trigger name.
        /// Example : "image_resize"
        /// </remarks>
        [JsiiProperty(name: "triggerName", typeJson: "{\"primitive\":\"string\"}")]
        string TriggerName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        /// Example : "oss"
        /// </remarks>
        [JsiiProperty(name: "triggerType", typeJson: "{\"primitive\":\"string\"}")]
        string TriggerType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        /// Example : "acs:ram::1234567890:role/fc-test"
        /// </remarks>
        [JsiiProperty(name: "invocationRole", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InvocationRole
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: service version or alias.
        /// Example : "LATEST"
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Qualifier
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        /// Example : "acs:oss:cn-shanghai:12345:mybucket"
        /// </remarks>
        [JsiiProperty(name: "sourceArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FC::Trigger`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosTriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosTriggerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IRosTriggerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: functionName: Function name.
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
            public string FunctionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Service name.
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
            /// </remarks>
            [JsiiProperty(name: "triggerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object TriggerConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: triggerName: Trigger name.
            /// Example : "image_resize"
            /// </remarks>
            [JsiiProperty(name: "triggerName", typeJson: "{\"primitive\":\"string\"}")]
            public string TriggerName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
            /// Example : "oss"
            /// </remarks>
            [JsiiProperty(name: "triggerType", typeJson: "{\"primitive\":\"string\"}")]
            public string TriggerType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
            /// Example : "acs:ram::1234567890:role/fc-test"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "invocationRole", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InvocationRole
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: service version or alias.
            /// Example : "LATEST"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Qualifier
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
            /// Example : "acs:oss:cn-shanghai:12345:mybucket"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceArn
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
