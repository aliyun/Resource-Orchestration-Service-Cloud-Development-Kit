using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `UserCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.UserCertificateProps")]
    public interface IUserCertificateProps
    {
        /// <summary>Property cert: The certificate content in PEM format.</summary>
        [JsiiProperty(name: "cert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cert
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certificateName: Custom certificate name.</summary>
        /// <remarks>
        /// Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
        /// The certificate name under the same user cannot be duplicated.
        /// </remarks>
        [JsiiProperty(name: "certificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertificateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptCert: The content of the encryption certificate in PEM format.</summary>
        [JsiiProperty(name: "encryptCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptCert
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.</summary>
        [JsiiProperty(name: "encryptPrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptPrivateKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property key: The private key content of the certificate in PEM format.</summary>
        [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Key
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceId: Resource ID.</summary>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property signCert: The signature certificate content in PEM format.</summary>
        [JsiiProperty(name: "signCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SignCert
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property signPrivateKey: The private key content of the signature certificate in PEM format.</summary>
        [JsiiProperty(name: "signPrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SignPrivateKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of certificate.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cas.RosUserCertificate.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cas.RosUserCertificate.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `UserCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.UserCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.IUserCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cert: The certificate content in PEM format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cert
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property certificateName: Custom certificate name.</summary>
            /// <remarks>
            /// Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
            /// The certificate name under the same user cannot be duplicated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertificateName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptCert: The content of the encryption certificate in PEM format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encryptCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptCert
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encryptPrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptPrivateKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property key: The private key content of the certificate in PEM format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceId: Resource ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property signCert: The signature certificate content in PEM format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "signCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SignCert
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property signPrivateKey: The private key content of the signature certificate in PEM format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "signPrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SignPrivateKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of certificate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cas.RosUserCertificate.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cas.RosUserCertificate.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cas.RosUserCertificate.ITagsProperty[]?>();
            }
        }
    }
}
