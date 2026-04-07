using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosSiteOriginClientCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-siteoriginclientcertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSiteOriginClientCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosSiteOriginClientCertificateProps")]
    public interface IRosSiteOriginClientCertificateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: certificate: The certificate content.
        /// </remarks>
        [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Certificate
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateKey: The private key of the certificate.
        /// </remarks>
        [JsiiProperty(name: "privateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrivateKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: siteId: Site ID.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: siteOriginClientCertificateName: The certificate name.
        /// </remarks>
        [JsiiProperty(name: "siteOriginClientCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SiteOriginClientCertificateName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: validityDays: The validity period of the certificate. Unit: day.
        /// </remarks>
        [JsiiProperty(name: "validityDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ValidityDays
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSiteOriginClientCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-siteoriginclientcertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSiteOriginClientCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosSiteOriginClientCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosSiteOriginClientCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: certificate: The certificate content.
            /// </remarks>
            [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Certificate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: privateKey: The private key of the certificate.
            /// </remarks>
            [JsiiProperty(name: "privateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrivateKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: Site ID.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: siteOriginClientCertificateName: The certificate name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "siteOriginClientCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SiteOriginClientCertificateName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: validityDays: The validity period of the certificate. Unit: day.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validityDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValidityDays
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
