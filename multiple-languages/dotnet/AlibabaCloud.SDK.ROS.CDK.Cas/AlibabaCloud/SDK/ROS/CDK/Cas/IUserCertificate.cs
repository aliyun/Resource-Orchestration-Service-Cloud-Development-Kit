using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Represents a `UserCertificate`.</summary>
    [JsiiInterface(nativeType: typeof(IUserCertificate), fullyQualifiedName: "@alicloud/ros-cdk-cas.IUserCertificate")]
    public interface IUserCertificate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Cert: The certificate content in PEM format.</summary>
        [JsiiProperty(name: "attrCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCert
        {
            get;
        }

        /// <summary>Attribute CertId: Certificate ID.</summary>
        [JsiiProperty(name: "attrCertId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertId
        {
            get;
        }

        /// <summary>Attribute CertificateName: Custom certificate name.</summary>
        /// <remarks>
        /// Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
        /// </remarks>
        [JsiiProperty(name: "attrCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertificateName
        {
            get;
        }

        /// <summary>Attribute EncryptCert: The content of the encryption certificate in PEM format.</summary>
        [JsiiProperty(name: "attrEncryptCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEncryptCert
        {
            get;
        }

        /// <summary>Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.</summary>
        [JsiiProperty(name: "attrEncryptPrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEncryptPrivateKey
        {
            get;
        }

        /// <summary>Attribute Key: The private key content of the certificate in PEM format.</summary>
        [JsiiProperty(name: "attrKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKey
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SignCert: The signature certificate content in PEM format.</summary>
        [JsiiProperty(name: "attrSignCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSignCert
        {
            get;
        }

        /// <summary>Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.</summary>
        [JsiiProperty(name: "attrSignPrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSignPrivateKey
        {
            get;
        }

        /// <summary>Attribute Tags: The tag of the resource.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cas.UserCertificateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cas.IUserCertificateProps Props
        {
            get;
        }

        /// <summary>Represents a `UserCertificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUserCertificate), fullyQualifiedName: "@alicloud/ros-cdk-cas.IUserCertificate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.IUserCertificate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Cert: The certificate content in PEM format.</summary>
            [JsiiProperty(name: "attrCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCert
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CertId: Certificate ID.</summary>
            [JsiiProperty(name: "attrCertId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCertId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CertificateName: Custom certificate name.</summary>
            /// <remarks>
            /// Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
            /// </remarks>
            [JsiiProperty(name: "attrCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCertificateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EncryptCert: The content of the encryption certificate in PEM format.</summary>
            [JsiiProperty(name: "attrEncryptCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEncryptCert
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.</summary>
            [JsiiProperty(name: "attrEncryptPrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEncryptPrivateKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Key: The private key content of the certificate in PEM format.</summary>
            [JsiiProperty(name: "attrKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SignCert: The signature certificate content in PEM format.</summary>
            [JsiiProperty(name: "attrSignCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSignCert
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.</summary>
            [JsiiProperty(name: "attrSignPrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSignPrivateKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tag of the resource.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cas.UserCertificateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cas.IUserCertificateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cas.IUserCertificateProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
