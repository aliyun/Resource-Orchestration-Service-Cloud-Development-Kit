using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CAS::Certificate`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cas.RosCertificateProps")]
    public class RosCertificateProps : AlibabaCloud.SDK.ROS.CDK.Cas.IRosCertificateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cert: Specify the content of the certificate. To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "cert", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Cert
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: key: Specify the certificate private key content. To use the PEM encoding format.
        /// </remarks>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Key
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Custom certificate name. The certificate name under a user cannot be duplicated.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: lang: Specifies the language type for requesting and receiving messages.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lang", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Lang
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceIp: Specifies the source IP address of the request.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SourceIp
        {
            get;
            set;
        }
    }
}
