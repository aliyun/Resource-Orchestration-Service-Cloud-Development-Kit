using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `ALIYUN::CAS::Certificate`.</summary>
    [JsiiInterface(nativeType: typeof(ICertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.CertificateProps")]
    public interface ICertificateProps
    {
        /// <summary>Property cert: Specify the content of the certificate.</summary>
        /// <remarks>
        /// To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "cert", typeJson: "{\"primitive\":\"string\"}")]
        string Cert
        {
            get;
        }

        /// <summary>Property key: Specify the certificate private key content.</summary>
        /// <remarks>
        /// To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
        string Key
        {
            get;
        }

        /// <summary>Property name: Custom certificate name.</summary>
        /// <remarks>
        /// The certificate name under a user cannot be duplicated.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property lang: Specifies the language type for requesting and receiving messages.</summary>
        [JsiiProperty(name: "lang", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Lang
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceIp: Specifies the source IP address of the request.</summary>
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
            [JsiiProperty(name: "cert", typeJson: "{\"primitive\":\"string\"}")]
            public string Cert
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property key: Specify the certificate private key content.</summary>
            /// <remarks>
            /// To use the PEM encoding format.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
            public string Key
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property name: Custom certificate name.</summary>
            /// <remarks>
            /// The certificate name under a user cannot be duplicated.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property lang: Specifies the language type for requesting and receiving messages.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Lang
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sourceIp: Specifies the source IP address of the request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceIp
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
