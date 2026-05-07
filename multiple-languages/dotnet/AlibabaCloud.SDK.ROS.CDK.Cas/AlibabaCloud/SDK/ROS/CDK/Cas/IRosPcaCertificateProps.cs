using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `RosPcaCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPcaCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.RosPcaCertificateProps")]
    public interface IRosPcaCertificateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: commonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "commonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CommonName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "locality", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Locality
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "organization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Organization
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: organizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "organizationUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrganizationUnit
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters. <\/props>
        /// <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. <\/props>.
        /// </remarks>
        [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object State
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: years: The validity period of the root CA certificate, in years.
        /// > It is recommended to set to 5~10 years.
        /// </remarks>
        [JsiiProperty(name: "years", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Years
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '<encryption algorithm >_< key length>' format. Value:
        /// - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
        /// - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
        /// - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
        /// - **ECC_256**: The signature algorithm is Sha256WithECDSA.
        /// - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA.
        /// - **ECC_512**: The signature algorithm is Sha256WithECDSA.
        /// - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.
        ///
        /// The encryption algorithm of the root CA certificate must be the same as the **certificate algorithm** of the private Root CA you purchased. Example: If the **certificate algorithm** selected when you purchase a private Root CA is **RSA**, the key algorithm of the root CA certificate must be **RSA\_1024**, **RSA\_2048**, or **RSA\_4096**.
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

        /// <remarks>
        /// <strong>Property</strong>: caStatus: The current CA status. Value:
        /// - Issue: Enabled.
        /// - Forbidden: Disabled.
        /// - Revoke: Revoked.
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

        /// <remarks>
        /// <strong>Property</strong>: countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
        /// For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
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

        /// <summary>Properties for defining a `RosPcaCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPcaCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.RosPcaCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.IRosPcaCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: commonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "commonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CommonName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "locality", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Locality
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "organization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Organization
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: organizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "organizationUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrganizationUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters. <\/props>
            /// <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. <\/props>.
            /// </remarks>
            [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object State
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: years: The validity period of the root CA certificate, in years.
            /// > It is recommended to set to 5~10 years.
            /// </remarks>
            [JsiiProperty(name: "years", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Years
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '<encryption algorithm >_< key length>' format. Value:
            /// - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
            /// - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
            /// - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
            /// - **ECC_256**: The signature algorithm is Sha256WithECDSA.
            /// - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA.
            /// - **ECC_512**: The signature algorithm is Sha256WithECDSA.
            /// - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.
            ///
            /// The encryption algorithm of the root CA certificate must be the same as the **certificate algorithm** of the private Root CA you purchased. Example: If the **certificate algorithm** selected when you purchase a private Root CA is **RSA**, the key algorithm of the root CA certificate must be **RSA\_1024**, **RSA\_2048**, or **RSA\_4096**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Algorithm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: caStatus: The current CA status. Value:
            /// - Issue: Enabled.
            /// - Forbidden: Disabled.
            /// - Revoke: Revoked.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "caStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CaStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
            /// For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
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
