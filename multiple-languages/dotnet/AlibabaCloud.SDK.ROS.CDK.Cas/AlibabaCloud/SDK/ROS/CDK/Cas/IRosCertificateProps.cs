using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `ALIYUN::CAS::Certificate`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.RosCertificateProps")]
    public interface IRosCertificateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cert: Specify the content of the certificate. To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "cert", typeJson: "{\"primitive\":\"string\"}")]
        string Cert
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: key: Specify the certificate private key content. To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
        string Key
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Custom certificate name. The certificate name under a user cannot be duplicated.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: lang: Specifies the language type for requesting and receiving messages.
        /// </remarks>
        [JsiiProperty(name: "lang", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Lang
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceIp: Specifies the source IP address of the request.
        /// </remarks>
        [JsiiProperty(name: "sourceIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CAS::Certificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.RosCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.IRosCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cert: Specify the content of the certificate. To use the PEM encoding format.
            /// </remarks>
            [JsiiProperty(name: "cert", typeJson: "{\"primitive\":\"string\"}")]
            public string Cert
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: key: Specify the certificate private key content. To use the PEM encoding format.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
            public string Key
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Custom certificate name. The certificate name under a user cannot be duplicated.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: lang: Specifies the language type for requesting and receiving messages.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Lang
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceIp: Specifies the source IP address of the request.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceIp
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
