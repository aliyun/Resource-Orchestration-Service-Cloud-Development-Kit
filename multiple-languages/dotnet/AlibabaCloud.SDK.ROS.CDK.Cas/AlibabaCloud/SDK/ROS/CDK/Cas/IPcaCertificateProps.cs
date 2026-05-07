using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `PcaCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPcaCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.PcaCertificateProps")]
    public interface IPcaCertificateProps
    {
        /// <summary>Property commonName: The common name or abbreviation of the organization.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "commonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CommonName
        {
            get;
        }

        /// <summary>Property locality: Name of the city where the organization is located.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "locality", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Locality
        {
            get;
        }

        /// <summary>Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "organization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Organization
        {
            get;
        }

        /// <summary>Property organizationUnit: The name of the department or branch under the organization.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "organizationUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrganizationUnit
        {
            get;
        }

        /// <summary>Property state: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// &lt;props = "intl"&gt; Name of the province or state where the organization is located. Support the use of Chinese, English characters. .
        /// </remarks>
        [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object State
        {
            get;
        }

        /// <summary>Property years: The validity period of the root CA certificate, in years.</summary>
        /// <remarks>
        ///     It is recommended to set to 5~10 years.
        /// </remarks>
        [JsiiProperty(name: "years", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Years
        {
            get;
        }

        /// <summary>Property algorithm: The key algorithm type of the root CA certificate.</summary>
        /// <remarks>
        /// The key algorithm is expressed using the '<encryption algorithm="algorithm" xmlns="http://www.w3.org/1999/xhtml"></encryption>_&lt; key length&gt;' format. Value:
        ///
        /// <list type="bullet">
        /// <description><strong>RSA_1024</strong>: The corresponding signature algorithm is Sha256WithRSA.</description>
        /// <description><strong>RSA_2048</strong>: The corresponding signature algorithm is Sha256WithRSA.</description>
        /// <description><strong>RSA_4096</strong>: The corresponding signature algorithm is Sha256WithRSA.</description>
        /// <description><strong>ECC_256</strong>: The signature algorithm is Sha256WithECDSA.</description>
        /// <description><strong>ECC_384</strong>: The corresponding signature algorithm is Sha256WithECDSA.</description>
        /// <description><strong>ECC_512</strong>: The signature algorithm is Sha256WithECDSA.</description>
        /// <description><strong>SM2_256</strong>: The corresponding signature algorithm is SM3WithSM2.</description>
        /// </list>
        ///
        /// The encryption algorithm of the root CA certificate must be the same as the <strong>certificate algorithm</strong> of the private Root CA you purchased. Example: If the <strong>certificate algorithm</strong> selected when you purchase a private Root CA is <strong>RSA</strong>, the key algorithm of the root CA certificate must be <strong>RSA_1024</strong>, <strong>RSA_2048</strong>, or <strong>RSA_4096</strong>.
        /// </remarks>
        [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Algorithm
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property caStatus: The current CA status.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>Issue: Enabled.</description>
        /// <description>Forbidden: Disabled.</description>
        /// <description>Revoke: Revoked.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "caStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CaStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.</summary>
        /// <remarks>
        /// For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
        /// For more information about the codes of different countries, see <strong>International Code</strong> in [Management Company Information](~~ 198289 ~~).
        /// </remarks>
        [JsiiProperty(name: "countryCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CountryCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PcaCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPcaCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.PcaCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property commonName: The common name or abbreviation of the organization.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "commonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CommonName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property locality: Name of the city where the organization is located.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "locality", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Locality
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "organization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Organization
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property organizationUnit: The name of the department or branch under the organization.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "organizationUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrganizationUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property state: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// &lt;props = "intl"&gt; Name of the province or state where the organization is located. Support the use of Chinese, English characters. .
            /// </remarks>
            [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object State
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property years: The validity period of the root CA certificate, in years.</summary>
            /// <remarks>
            ///     It is recommended to set to 5~10 years.
            /// </remarks>
            [JsiiProperty(name: "years", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Years
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property algorithm: The key algorithm type of the root CA certificate.</summary>
            /// <remarks>
            /// The key algorithm is expressed using the '<encryption algorithm="algorithm" xmlns="http://www.w3.org/1999/xhtml"></encryption>_&lt; key length&gt;' format. Value:
            ///
            /// <list type="bullet">
            /// <description><strong>RSA_1024</strong>: The corresponding signature algorithm is Sha256WithRSA.</description>
            /// <description><strong>RSA_2048</strong>: The corresponding signature algorithm is Sha256WithRSA.</description>
            /// <description><strong>RSA_4096</strong>: The corresponding signature algorithm is Sha256WithRSA.</description>
            /// <description><strong>ECC_256</strong>: The signature algorithm is Sha256WithECDSA.</description>
            /// <description><strong>ECC_384</strong>: The corresponding signature algorithm is Sha256WithECDSA.</description>
            /// <description><strong>ECC_512</strong>: The signature algorithm is Sha256WithECDSA.</description>
            /// <description><strong>SM2_256</strong>: The corresponding signature algorithm is SM3WithSM2.</description>
            /// </list>
            ///
            /// The encryption algorithm of the root CA certificate must be the same as the <strong>certificate algorithm</strong> of the private Root CA you purchased. Example: If the <strong>certificate algorithm</strong> selected when you purchase a private Root CA is <strong>RSA</strong>, the key algorithm of the root CA certificate must be <strong>RSA_1024</strong>, <strong>RSA_2048</strong>, or <strong>RSA_4096</strong>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Algorithm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property caStatus: The current CA status.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>Issue: Enabled.</description>
            /// <description>Forbidden: Disabled.</description>
            /// <description>Revoke: Revoked.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "caStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CaStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.</summary>
            /// <remarks>
            /// For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
            /// For more information about the codes of different countries, see <strong>International Code</strong> in [Management Company Information](~~ 198289 ~~).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "countryCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CountryCode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
