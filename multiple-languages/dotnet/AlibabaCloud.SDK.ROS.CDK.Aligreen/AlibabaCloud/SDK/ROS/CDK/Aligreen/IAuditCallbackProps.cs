using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `AuditCallback`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAuditCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.AuditCallbackProps")]
    public interface IAuditCallbackProps
    {
        /// <summary>Property auditCallbackName: The AuditCallback name defined by the customer.</summary>
        /// <remarks>
        /// It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        /// </remarks>
        [JsiiProperty(name: "auditCallbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AuditCallbackName
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

        /// <summary>Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.</summary>
        /// <remarks>
        /// The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
        /// </remarks>
        [JsiiProperty(name: "cryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CryptType
        {
            get;
        }

        /// <summary>Property url: The detection result will be called back to the url.</summary>
        [JsiiProperty(name: "url", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Url
        {
            get;
        }

        /// <summary>Properties for defining a `AuditCallback`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAuditCallbackProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.AuditCallbackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IAuditCallbackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property auditCallbackName: The AuditCallback name defined by the customer.</summary>
            /// <remarks>
            /// It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
            /// </remarks>
            [JsiiProperty(name: "auditCallbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AuditCallbackName
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

            /// <summary>Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.</summary>
            /// <remarks>
            /// The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
            /// </remarks>
            [JsiiProperty(name: "cryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CryptType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property url: The detection result will be called back to the url.</summary>
            [JsiiProperty(name: "url", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Url
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
