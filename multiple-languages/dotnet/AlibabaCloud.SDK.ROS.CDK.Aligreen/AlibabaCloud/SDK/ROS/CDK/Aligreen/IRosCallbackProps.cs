using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `RosCallback`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.RosCallbackProps")]
    public interface IRosCallbackProps
    {
        /// <remarks>
        /// <strong>Property</strong>: callbackName: The Callback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        /// </remarks>
        [JsiiProperty(name: "callbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CallbackName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
        /// </remarks>
        [JsiiProperty(name: "callbackSuggestions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object CallbackSuggestions
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        /// </remarks>
        [JsiiProperty(name: "callbackTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object CallbackTypes
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: callbackUrl: The detection result will be called back to the url.
        /// </remarks>
        [JsiiProperty(name: "callbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CallbackUrl
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service. Value: 0:SHA256,1: SM3.
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

        /// <summary>Properties for defining a `RosCallback`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.RosCallbackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IRosCallbackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: callbackName: The Callback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
            /// </remarks>
            [JsiiProperty(name: "callbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CallbackName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
            /// </remarks>
            [JsiiProperty(name: "callbackSuggestions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object CallbackSuggestions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
            /// </remarks>
            [JsiiProperty(name: "callbackTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object CallbackTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: callbackUrl: The detection result will be called back to the url.
            /// </remarks>
            [JsiiProperty(name: "callbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CallbackUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service. Value: 0:SHA256,1: SM3.
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
