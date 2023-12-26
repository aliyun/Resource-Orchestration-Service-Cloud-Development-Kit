using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `Certificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.CertificateProps")]
    public interface ICertificateProps
    {
        /// <summary>Property cert: Specify the content of the certificate.</summary>
        /// <remarks>
        /// To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "cert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Cert
        {
            get;
        }

        /// <summary>Property key: Specify the certificate private key content.</summary>
        /// <remarks>
        /// To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Key
        {
            get;
        }

        /// <summary>Property name: Custom certificate name.</summary>
        /// <remarks>
        /// The certificate name under a user cannot be duplicated.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property lang: Specifies the language type for requesting and receiving messages.</summary>
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lang
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceIp: Specifies the source IP address of the request.</summary>
        [JsiiProperty(name: "sourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Certificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.CertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.ICertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cert: Specify the content of the certificate.</summary>
            /// <remarks>
            /// To use the PEM encoding format.
            /// </remarks>
            [JsiiProperty(name: "cert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Cert
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property key: Specify the certificate private key content.</summary>
            /// <remarks>
            /// To use the PEM encoding format.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: Custom certificate name.</summary>
            /// <remarks>
            /// The certificate name under a user cannot be duplicated.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property lang: Specifies the language type for requesting and receiving messages.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lang
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceIp: Specifies the source IP address of the request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceIp
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
