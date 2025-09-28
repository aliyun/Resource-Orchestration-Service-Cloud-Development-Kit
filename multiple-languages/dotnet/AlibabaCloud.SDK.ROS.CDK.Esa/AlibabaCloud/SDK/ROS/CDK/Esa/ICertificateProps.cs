using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `Certificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.CertificateProps")]
    public interface ICertificateProps
    {
        /// <summary>Property createdType: The certificate type.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>cas (Certificate Center Certificate)</description>
        /// <description>upload (custom upload certificate)</description>
        /// <description>free( Free certificate).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "createdType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CreatedType
        {
            get;
        }

        /// <summary>Property domains: A list of domain names.</summary>
        /// <remarks>
        /// Multiple domain names are separated by commas.
        /// </remarks>
        [JsiiProperty(name: "domains", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Domains
        {
            get;
        }

        /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites interface.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property casId: Cloud certificate ID.</summary>
        [JsiiProperty(name: "casId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CasId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certId: The certificate Id.</summary>
        [JsiiProperty(name: "certId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certificate: Certificate content.</summary>
        [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Certificate
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certName: The certificate name.</summary>
        [JsiiProperty(name: "certName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateKey: The certificate private key.</summary>
        [JsiiProperty(name: "privateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Certificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.CertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ICertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property createdType: The certificate type.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>cas (Certificate Center Certificate)</description>
            /// <description>upload (custom upload certificate)</description>
            /// <description>free( Free certificate).</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "createdType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CreatedType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domains: A list of domain names.</summary>
            /// <remarks>
            /// Multiple domain names are separated by commas.
            /// </remarks>
            [JsiiProperty(name: "domains", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Domains
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites interface.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property casId: Cloud certificate ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "casId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CasId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property certId: The certificate Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property certificate: Certificate content.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Certificate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property certName: The certificate name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateKey: The certificate private key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateKey
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
