using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod
{
    /// <summary>Properties for defining a `ALIYUN::VOD::MessageCallback`.</summary>
    [JsiiInterface(nativeType: typeof(IRosMessageCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.RosMessageCallbackProps")]
    public interface IRosMessageCallbackProps
    {
        /// <remarks>
        /// <strong>Property</strong>: callbackType: Callback method.
        /// </remarks>
        [JsiiProperty(name: "callbackType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CallbackType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: appId: App ID. If it is not passed, it is the ID of the default
        /// application of the system, with a fixed value: app-1000000.
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: authKey: Authentication Key, up to 32 characters, must contain both uppercase
        /// and lowercase letters and numbers. This parameter can be set when the callback method is HTTP.
        /// </remarks>
        [JsiiProperty(name: "authKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: authSwitch: The authentication switch of the HTTP callback,
        /// this parameter is valid when the callback method is set to HTTP.
        /// </remarks>
        [JsiiProperty(name: "authSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthSwitch
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: callbackUrl: Callback address. When the callback method is HTTP,
        /// this parameter needs to be set. The length of the callback address
        /// URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
        /// </remarks>
        [JsiiProperty(name: "callbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CallbackUrl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: eventTypeList: Callback event type. When the value is empty, all message notifications are turned off,
        /// and when the value is ALL, all message notifications are turned on.
        /// You can also specify to enable certain message notifications,
        /// and use a comma (,) to separate multiple event types.
        /// </remarks>
        [JsiiProperty(name: "eventTypeList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EventTypeList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mnsEndpoint: This parameter needs to be set when the callback method is MNS for the
        /// message queue public network endpoint. You can log in to the message service
        /// console and click the Get Endpoint button in the upper right corner to get it.
        /// </remarks>
        [JsiiProperty(name: "mnsEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MnsEndpoint
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mnsQueueName: The name of the message queue, which can be viewed in the queue
        /// list by logging in to the message service console.
        /// When the callback method is MNS, this parameter needs to be set.
        /// </remarks>
        [JsiiProperty(name: "mnsQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MnsQueueName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VOD::MessageCallback`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosMessageCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.RosMessageCallbackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.IRosMessageCallbackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: callbackType: Callback method.
            /// </remarks>
            [JsiiProperty(name: "callbackType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CallbackType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: appId: App ID. If it is not passed, it is the ID of the default
            /// application of the system, with a fixed value: app-1000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: authKey: Authentication Key, up to 32 characters, must contain both uppercase
            /// and lowercase letters and numbers. This parameter can be set when the callback method is HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: authSwitch: The authentication switch of the HTTP callback,
            /// this parameter is valid when the callback method is set to HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: callbackUrl: Callback address. When the callback method is HTTP,
            /// this parameter needs to be set. The length of the callback address
            /// URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "callbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CallbackUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: eventTypeList: Callback event type. When the value is empty, all message notifications are turned off,
            /// and when the value is ALL, all message notifications are turned on.
            /// You can also specify to enable certain message notifications,
            /// and use a comma (,) to separate multiple event types.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eventTypeList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EventTypeList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mnsEndpoint: This parameter needs to be set when the callback method is MNS for the
            /// message queue public network endpoint. You can log in to the message service
            /// console and click the Get Endpoint button in the upper right corner to get it.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mnsEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MnsEndpoint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mnsQueueName: The name of the message queue, which can be viewed in the queue
            /// list by logging in to the message service console.
            /// When the callback method is MNS, this parameter needs to be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mnsQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MnsQueueName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
