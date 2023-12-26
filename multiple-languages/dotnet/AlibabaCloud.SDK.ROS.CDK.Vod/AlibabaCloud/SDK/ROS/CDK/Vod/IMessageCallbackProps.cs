using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod
{
    /// <summary>Properties for defining a `MessageCallback`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMessageCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.MessageCallbackProps")]
    public interface IMessageCallbackProps
    {
        /// <summary>Property callbackType: Callback method.</summary>
        [JsiiProperty(name: "callbackType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CallbackType
        {
            get;
        }

        /// <summary>Property appId: App ID.</summary>
        /// <remarks>
        /// If it is not passed, it is the ID of the default
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

        /// <summary>Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers.</summary>
        /// <remarks>
        /// This parameter can be set when the callback method is HTTP.
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

        /// <summary>Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP.</summary>
        [JsiiProperty(name: "authSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthSwitch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property callbackUrl: Callback address.</summary>
        /// <remarks>
        /// When the callback method is HTTP,
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

        /// <summary>Property eventTypeList: Callback event type.</summary>
        /// <remarks>
        /// When the value is empty, all message notifications are turned off,
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

        /// <summary>Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint.</summary>
        /// <remarks>
        /// You can log in to the message service
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

        /// <summary>Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console.</summary>
        /// <remarks>
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

        /// <summary>Properties for defining a `MessageCallback`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMessageCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.MessageCallbackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.IMessageCallbackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property callbackType: Callback method.</summary>
            [JsiiProperty(name: "callbackType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CallbackType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appId: App ID.</summary>
            /// <remarks>
            /// If it is not passed, it is the ID of the default
            /// application of the system, with a fixed value: app-1000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers.</summary>
            /// <remarks>
            /// This parameter can be set when the callback method is HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property callbackUrl: Callback address.</summary>
            /// <remarks>
            /// When the callback method is HTTP,
            /// this parameter needs to be set. The length of the callback address
            /// URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "callbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CallbackUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eventTypeList: Callback event type.</summary>
            /// <remarks>
            /// When the value is empty, all message notifications are turned off,
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

            /// <summary>Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint.</summary>
            /// <remarks>
            /// You can log in to the message service
            /// console and click the Get Endpoint button in the upper right corner to get it.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mnsEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MnsEndpoint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console.</summary>
            /// <remarks>
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
