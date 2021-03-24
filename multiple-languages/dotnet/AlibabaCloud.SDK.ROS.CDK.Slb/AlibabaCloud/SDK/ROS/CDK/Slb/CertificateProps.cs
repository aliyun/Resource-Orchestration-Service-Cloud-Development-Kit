using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::Certificate`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.CertificateProps")]
    public class CertificateProps : AlibabaCloud.SDK.ROS.CDK.Slb.ICertificateProps
    {
        /// <summary>Property certificate: The content of the certificate public key.</summary>
        [JsiiProperty(name: "certificate", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Certificate
        {
            get;
            set;
        }

        /// <summary>Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "aliCloudCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AliCloudCertificateId
        {
            get;
            set;
        }

        /// <summary>Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "aliCloudCertificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AliCloudCertificateName
        {
            get;
            set;
        }

        /// <summary>Property certificateName: The name of the certificate.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CertificateName
        {
            get;
            set;
        }

        /// <summary>Property certificateType: The type of the certificate.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "certificateType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CertificateType
        {
            get;
            set;
        }

        /// <summary>Property privateKey: The private key.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "privateKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateKey
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }
    }
}
