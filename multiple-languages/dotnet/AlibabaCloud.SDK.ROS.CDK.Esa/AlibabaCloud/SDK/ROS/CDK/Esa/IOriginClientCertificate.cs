using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `OriginClientCertificate`.</summary>
    [JsiiInterface(nativeType: typeof(IOriginClientCertificate), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginClientCertificate")]
    public interface IOriginClientCertificate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Certificate: The certificate content.</summary>
        [JsiiProperty(name: "attrCertificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertificate
        {
            get;
        }

        /// <summary>Attribute CommonName: The Common Name of the certificate.</summary>
        [JsiiProperty(name: "attrCommonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommonName
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the certificate was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.</summary>
        [JsiiProperty(name: "attrFingerprintSha256", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFingerprintSha256
        {
            get;
        }

        /// <summary>Attribute Hostnames: The domain names to associate.</summary>
        [JsiiProperty(name: "attrHostnames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostnames
        {
            get;
        }

        /// <summary>Attribute Issuer: The certificate authority (CA) that issued the certificate.</summary>
        [JsiiProperty(name: "attrIssuer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIssuer
        {
            get;
        }

        /// <summary>Attribute NotAfter: The time when the certificate expires.</summary>
        [JsiiProperty(name: "attrNotAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotAfter
        {
            get;
        }

        /// <summary>Attribute NotBefore: The time when the certificate takes effect.</summary>
        [JsiiProperty(name: "attrNotBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotBefore
        {
            get;
        }

        /// <summary>Attribute OriginClientCertificateId: The certificate ID.</summary>
        [JsiiProperty(name: "attrOriginClientCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginClientCertificateId
        {
            get;
        }

        /// <summary>Attribute OriginClientCertificateName: The certificate name.</summary>
        [JsiiProperty(name: "attrOriginClientCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginClientCertificateName
        {
            get;
        }

        /// <summary>Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.</summary>
        [JsiiProperty(name: "attrPubkeyAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPubkeyAlgorithm
        {
            get;
        }

        /// <summary>Attribute SAN: The Subject Alternative Name (SAN) of the certificate.</summary>
        [JsiiProperty(name: "attrSan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSan
        {
            get;
        }

        /// <summary>Attribute SerialNumber: The serial number of the certificate.</summary>
        [JsiiProperty(name: "attrSerialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSerialNumber
        {
            get;
        }

        /// <summary>Attribute SignatureAlgorithm: The signature algorithm of the certificate.</summary>
        [JsiiProperty(name: "attrSignatureAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSignatureAlgorithm
        {
            get;
        }

        /// <summary>Attribute SiteId: The website ID.</summary>
        [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteId
        {
            get;
        }

        /// <summary>Attribute SiteName: The website name.</summary>
        [JsiiProperty(name: "attrSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteName
        {
            get;
        }

        /// <summary>Attribute Type: The certificate type.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        /// <summary>Attribute UpdateTime: The time when the certificate was updated.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginClientCertificateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IOriginClientCertificateProps Props
        {
            get;
        }

        /// <summary>Represents a `OriginClientCertificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IOriginClientCertificate), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginClientCertificate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginClientCertificate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Certificate: The certificate content.</summary>
            [JsiiProperty(name: "attrCertificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCertificate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommonName: The Common Name of the certificate.</summary>
            [JsiiProperty(name: "attrCommonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommonName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the certificate was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.</summary>
            [JsiiProperty(name: "attrFingerprintSha256", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFingerprintSha256
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Hostnames: The domain names to associate.</summary>
            [JsiiProperty(name: "attrHostnames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostnames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Issuer: The certificate authority (CA) that issued the certificate.</summary>
            [JsiiProperty(name: "attrIssuer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIssuer
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotAfter: The time when the certificate expires.</summary>
            [JsiiProperty(name: "attrNotAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotAfter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotBefore: The time when the certificate takes effect.</summary>
            [JsiiProperty(name: "attrNotBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotBefore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginClientCertificateId: The certificate ID.</summary>
            [JsiiProperty(name: "attrOriginClientCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginClientCertificateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginClientCertificateName: The certificate name.</summary>
            [JsiiProperty(name: "attrOriginClientCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginClientCertificateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.</summary>
            [JsiiProperty(name: "attrPubkeyAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPubkeyAlgorithm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SAN: The Subject Alternative Name (SAN) of the certificate.</summary>
            [JsiiProperty(name: "attrSan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SerialNumber: The serial number of the certificate.</summary>
            [JsiiProperty(name: "attrSerialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSerialNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SignatureAlgorithm: The signature algorithm of the certificate.</summary>
            [JsiiProperty(name: "attrSignatureAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSignatureAlgorithm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteId: The website ID.</summary>
            [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteName: The website name.</summary>
            [JsiiProperty(name: "attrSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: The certificate type.</summary>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: The time when the certificate was updated.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginClientCertificateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IOriginClientCertificateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IOriginClientCertificateProps>()!;
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
