using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `RosAuditCallback`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAuditCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.RosAuditCallbackProps")]
    public interface IRosAuditCallbackProps
    {
        /// <remarks>
        /// <strong>Property</strong>: auditCallbackName: The AuditCallback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        /// </remarks>
        [JsiiProperty(name: "auditCallbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AuditCallbackName
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
        /// <strong>Property</strong>: cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
        /// </remarks>
        [JsiiProperty(name: "cryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CryptType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: url: The detection result will be called back to the url.
        /// </remarks>
        [JsiiProperty(name: "url", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Url
        {
            get;
        }

        /// <summary>Properties for defining a `RosAuditCallback`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAuditCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.RosAuditCallbackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IRosAuditCallbackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: auditCallbackName: The AuditCallback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
            /// </remarks>
            [JsiiProperty(name: "auditCallbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AuditCallbackName
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
            /// <strong>Property</strong>: cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
            /// </remarks>
            [JsiiProperty(name: "cryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CryptType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: url: The detection result will be called back to the url.
            /// </remarks>
            [JsiiProperty(name: "url", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Url
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
