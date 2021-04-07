using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CAS::Certificate`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cas.CertificateProps")]
    public class CertificateProps : AlibabaCloud.SDK.ROS.CDK.Cas.ICertificateProps
    {
        /// <summary>Property cert: Specify the content of the certificate.</summary>
        /// <remarks>
        /// To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "cert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Cert
        {
            get;
            set;
        }

        /// <summary>Property key: Specify the certificate private key content.</summary>
        /// <remarks>
        /// To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Key
        {
            get;
            set;
        }

        /// <summary>Property name: Custom certificate name.</summary>
        /// <remarks>
        /// The certificate name under a user cannot be duplicated.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property lang: Specifies the language type for requesting and receiving messages.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Lang
        {
            get;
            set;
        }

        /// <summary>Property sourceIp: Specifies the source IP address of the request.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SourceIp
        {
            get;
            set;
        }
    }
}
