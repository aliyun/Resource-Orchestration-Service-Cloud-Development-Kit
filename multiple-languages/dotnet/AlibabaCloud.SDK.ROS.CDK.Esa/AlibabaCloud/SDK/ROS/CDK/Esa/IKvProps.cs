using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `Kv`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kv
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IKvProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.KvProps")]
    public interface IKvProps
    {
        /// <summary>Property key: The key name.</summary>
        /// <remarks>
        /// The name can be up to 512 characters in length and cannot contain spaces or backslashes ().
        /// </remarks>
        [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Key
        {
            get;
        }

        /// <summary>Property namespace: The name specified when calling [CreatevNamespace] https:\/\/help.aliyun.com\/document_detail\/2850317.html.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <summary>Property value: The content of the key.</summary>
        /// <remarks>
        /// If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
        /// </remarks>
        [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Value
        {
            get;
        }

        /// <summary>Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000).</summary>
        /// <remarks>
        /// If the content is larger than 2 MB, call [PutKvWithHighCapacity] https://www.alibabacloud.com/help/en/doc-detail/2850486.html.
        /// </remarks>
        [JsiiProperty(name: "expiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Expiration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time.</summary>
        /// <remarks>
        /// The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
        /// </remarks>
        [JsiiProperty(name: "expirationTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExpirationTtl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Kv`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kv
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IKvProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.KvProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IKvProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property key: The key name.</summary>
            /// <remarks>
            /// The name can be up to 512 characters in length and cannot contain spaces or backslashes ().
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespace: The name specified when calling [CreatevNamespace] https:\/\/help.aliyun.com\/document_detail\/2850317.html.</summary>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property value: The content of the key.</summary>
            /// <remarks>
            /// If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Value
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000).</summary>
            /// <remarks>
            /// If the content is larger than 2 MB, call [PutKvWithHighCapacity] https://www.alibabacloud.com/help/en/doc-detail/2850486.html.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Expiration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time.</summary>
            /// <remarks>
            /// The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expirationTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExpirationTtl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
