using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `SiteOriginClientCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-siteoriginclientcertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISiteOriginClientCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.SiteOriginClientCertificateProps")]
    public interface ISiteOriginClientCertificateProps
    {
        /// <summary>Property certificate: The certificate content.</summary>
        [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Certificate
        {
            get;
        }

        /// <summary>Property privateKey: The private key of the certificate.</summary>
        [JsiiProperty(name: "privateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrivateKey
        {
            get;
        }

        /// <summary>Property siteId: Site ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property siteOriginClientCertificateName: The certificate name.</summary>
        [JsiiProperty(name: "siteOriginClientCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SiteOriginClientCertificateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property validityDays: The validity period of the certificate.</summary>
        /// <remarks>
        /// Unit: day.
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

        /// <summary>Properties for defining a `SiteOriginClientCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-siteoriginclientcertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISiteOriginClientCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.SiteOriginClientCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ISiteOriginClientCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property certificate: The certificate content.</summary>
            [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Certificate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property privateKey: The private key of the certificate.</summary>
            [JsiiProperty(name: "privateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrivateKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: Site ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteOriginClientCertificateName: The certificate name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "siteOriginClientCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SiteOriginClientCertificateName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validityDays: The validity period of the certificate.</summary>
            /// <remarks>
            /// Unit: day.
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
