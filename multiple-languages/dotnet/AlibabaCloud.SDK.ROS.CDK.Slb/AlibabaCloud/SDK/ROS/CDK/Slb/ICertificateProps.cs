using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::Certificate`.</summary>
    [JsiiInterface(nativeType: typeof(ICertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.CertificateProps")]
    public interface ICertificateProps
    {
        /// <summary>Property certificate: The content of the certificate public key.</summary>
        [JsiiProperty(name: "certificate", typeJson: "{\"primitive\":\"string\"}")]
        string Certificate
        {
            get;
        }

        /// <summary>Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.</summary>
        [JsiiProperty(name: "aliCloudCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AliCloudCertificateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.</summary>
        [JsiiProperty(name: "aliCloudCertificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AliCloudCertificateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certificateName: The name of the certificate.</summary>
        [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CertificateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certificateType: The type of the certificate.</summary>
        [JsiiProperty(name: "certificateType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CertificateType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateKey: The private key.</summary>
        [JsiiProperty(name: "privateKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PrivateKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::Certificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.CertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.ICertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property certificate: The content of the certificate public key.</summary>
            [JsiiProperty(name: "certificate", typeJson: "{\"primitive\":\"string\"}")]
            public string Certificate
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aliCloudCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AliCloudCertificateId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aliCloudCertificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AliCloudCertificateName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property certificateName: The name of the certificate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificateName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property certificateType: The type of the certificate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificateType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificateType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property privateKey: The private key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PrivateKey
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}
