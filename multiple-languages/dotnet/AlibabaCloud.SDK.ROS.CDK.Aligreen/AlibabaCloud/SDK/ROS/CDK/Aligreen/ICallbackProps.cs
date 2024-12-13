using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `Callback`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.CallbackProps")]
    public interface ICallbackProps
    {
        /// <summary>Property callbackName: The Callback name defined by the customer.</summary>
        /// <remarks>
        /// It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        /// </remarks>
        [JsiiProperty(name: "callbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CallbackName
        {
            get;
        }

        /// <summary>Property callbackSuggestions: List of audit results supported by message notification.</summary>
        /// <remarks>
        /// Value: block: confirmed violation, review: Suspected violation, pass: normal.
        /// </remarks>
        [JsiiProperty(name: "callbackSuggestions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object CallbackSuggestions
        {
            get;
        }

        /// <summary>Property callbackTypes: A list of Callback types.</summary>
        /// <remarks>
        /// Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        /// </remarks>
        [JsiiProperty(name: "callbackTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object CallbackTypes
        {
            get;
        }

        /// <summary>Property callbackUrl: The detection result will be called back to the url.</summary>
        [JsiiProperty(name: "callbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CallbackUrl
        {
            get;
        }

        /// <summary>Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.</summary>
        /// <remarks>
        /// Value: 0:SHA256,1: SM3.
        /// </remarks>
        [JsiiProperty(name: "cryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CryptType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Callback`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.CallbackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.ICallbackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property callbackName: The Callback name defined by the customer.</summary>
            /// <remarks>
            /// It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
            /// </remarks>
            [JsiiProperty(name: "callbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CallbackName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property callbackSuggestions: List of audit results supported by message notification.</summary>
            /// <remarks>
            /// Value: block: confirmed violation, review: Suspected violation, pass: normal.
            /// </remarks>
            [JsiiProperty(name: "callbackSuggestions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object CallbackSuggestions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property callbackTypes: A list of Callback types.</summary>
            /// <remarks>
            /// Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
            /// </remarks>
            [JsiiProperty(name: "callbackTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object CallbackTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property callbackUrl: The detection result will be called back to the url.</summary>
            [JsiiProperty(name: "callbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CallbackUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.</summary>
            /// <remarks>
            /// Value: 0:SHA256,1: SM3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CryptType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
