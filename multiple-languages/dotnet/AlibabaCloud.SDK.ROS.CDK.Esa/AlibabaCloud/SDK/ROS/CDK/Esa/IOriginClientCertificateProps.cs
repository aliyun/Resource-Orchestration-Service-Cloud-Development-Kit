using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `OriginClientCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originclientcertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOriginClientCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginClientCertificateProps")]
    public interface IOriginClientCertificateProps
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

        /// <summary>Property siteId: The website ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property hostnames: The domain names to associate.</summary>
        [JsiiProperty(name: "hostnames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Hostnames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property originClientCertificateName: The certificate name.</summary>
        [JsiiProperty(name: "originClientCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginClientCertificateName
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

        /// <summary>Properties for defining a `OriginClientCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originclientcertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOriginClientCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginClientCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginClientCertificateProps
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

            /// <summary>Property siteId: The website ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property hostnames: The domain names to associate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hostnames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Hostnames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property originClientCertificateName: The certificate name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "originClientCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginClientCertificateName
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
