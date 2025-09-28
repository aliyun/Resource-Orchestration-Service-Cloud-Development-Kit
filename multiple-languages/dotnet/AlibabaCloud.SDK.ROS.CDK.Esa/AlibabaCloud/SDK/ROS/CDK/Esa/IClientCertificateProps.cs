using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `ClientCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClientCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.ClientCertificateProps")]
    public interface IClientCertificateProps
    {
        /// <summary>Property siteId: Site Id.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property validityDays: Certificate validity period.</summary>
        [JsiiProperty(name: "validityDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ValidityDays
        {
            get;
        }

        /// <summary>Property csr: Certificate signing request content.</summary>
        [JsiiProperty(name: "csr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Csr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pkeyType: The private key algorithm type.</summary>
        [JsiiProperty(name: "pkeyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PkeyType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ClientCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClientCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.ClientCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IClientCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property siteId: Site Id.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property validityDays: Certificate validity period.</summary>
            [JsiiProperty(name: "validityDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ValidityDays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property csr: Certificate signing request content.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "csr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Csr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pkeyType: The private key algorithm type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pkeyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PkeyType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
