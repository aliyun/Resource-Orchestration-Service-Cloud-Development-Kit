using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::Certificate`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosCertificateProps")]
    public interface IRosCertificateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: certificate: The content of the certificate public key.
        /// </remarks>
        [JsiiProperty(name: "certificate", typeJson: "{\"primitive\":\"string\"}")]
        string Certificate
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
        /// </remarks>
        [JsiiProperty(name: "aliCloudCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AliCloudCertificateId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: aliCloudCertificateName: The name of the Alibaba Cloud certificate.
        /// </remarks>
        [JsiiProperty(name: "aliCloudCertificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AliCloudCertificateName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: certificateName: The name of the certificate.
        /// </remarks>
        [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CertificateName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: certificateType: The type of the certificate.
        /// </remarks>
        [JsiiProperty(name: "certificateType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CertificateType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: privateKey: The private key.
        /// </remarks>
        [JsiiProperty(name: "privateKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PrivateKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::Certificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IRosCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: certificate: The content of the certificate public key.
            /// </remarks>
            [JsiiProperty(name: "certificate", typeJson: "{\"primitive\":\"string\"}")]
            public string Certificate
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aliCloudCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AliCloudCertificateId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: aliCloudCertificateName: The name of the Alibaba Cloud certificate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aliCloudCertificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AliCloudCertificateName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: certificateName: The name of the certificate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificateName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: certificateType: The type of the certificate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificateType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificateType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: privateKey: The private key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PrivateKey
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]?>();
            }
        }
    }
}
