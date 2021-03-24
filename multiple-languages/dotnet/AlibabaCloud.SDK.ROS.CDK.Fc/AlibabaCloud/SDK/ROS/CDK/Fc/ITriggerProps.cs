using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::Trigger`.</summary>
    [JsiiInterface(nativeType: typeof(ITriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.TriggerProps")]
    public interface ITriggerProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
        string FunctionName
        {
            get;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <summary>Property triggerConfig: Event source specific trigger configuration.</summary>
        /// <remarks>
        /// The value is different according to trigger type.
        /// </remarks>
        [JsiiProperty(name: "triggerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object TriggerConfig
        {
            get;
        }

        /// <summary>Property triggerName: Trigger name.</summary>
        /// <remarks>
        /// Example : "image_resize"
        /// </remarks>
        [JsiiProperty(name: "triggerName", typeJson: "{\"primitive\":\"string\"}")]
        string TriggerName
        {
            get;
        }

        /// <summary>Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".</summary>
        [JsiiProperty(name: "triggerType", typeJson: "{\"primitive\":\"string\"}")]
        string TriggerType
        {
            get;
        }

        /// <summary>Property invocationRole: The role grants event source the permission to run function on behalf of user.</summary>
        /// <remarks>
        /// This is optional for some triggers.
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

        /// <summary>Property qualifier: service version or alias.</summary>
        /// <remarks>
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

        /// <summary>Property sourceArn: The Aliyun Resource Name (ARN) of event source.</summary>
        /// <remarks>
        /// This is optional for some triggers.
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
        [JsiiTypeProxy(nativeType: typeof(ITriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.TriggerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.ITriggerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property functionName: Function name.</summary>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
            public string FunctionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property triggerConfig: Event source specific trigger configuration.</summary>
            /// <remarks>
            /// The value is different according to trigger type.
            /// </remarks>
            [JsiiProperty(name: "triggerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object TriggerConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property triggerName: Trigger name.</summary>
            /// <remarks>
            /// Example : "image_resize"
            /// </remarks>
            [JsiiProperty(name: "triggerName", typeJson: "{\"primitive\":\"string\"}")]
            public string TriggerName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".</summary>
            [JsiiProperty(name: "triggerType", typeJson: "{\"primitive\":\"string\"}")]
            public string TriggerType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property invocationRole: The role grants event source the permission to run function on behalf of user.</summary>
            /// <remarks>
            /// This is optional for some triggers.
            /// Example : "acs:ram::1234567890:role/fc-test"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "invocationRole", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InvocationRole
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property qualifier: service version or alias.</summary>
            /// <remarks>
            /// Example : "LATEST"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Qualifier
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sourceArn: The Aliyun Resource Name (ARN) of event source.</summary>
            /// <remarks>
            /// This is optional for some triggers.
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
