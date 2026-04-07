using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `OriginCaCertificate`.</summary>
    [JsiiInterface(nativeType: typeof(IOriginCaCertificate), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginCaCertificate")]
    public interface IOriginCaCertificate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Certificate: The certificate content.</summary>
        [JsiiProperty(name: "attrCertificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertificate
        {
            get;
        }

        /// <summary>Attribute CommonName: The certificate common name.</summary>
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

        /// <summary>Attribute Issuer: The certificate authority (CA) that issued the certificate.</summary>
        [JsiiProperty(name: "attrIssuer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIssuer
        {
            get;
        }

        /// <summary>Attribute Name: The certificate name.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
        }

        /// <summary>Attribute NotAfter: The expiration date of the certificate validity period.</summary>
        [JsiiProperty(name: "attrNotAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotAfter
        {
            get;
        }

        /// <summary>Attribute NotBefore: The start time of the certificate validity period.</summary>
        [JsiiProperty(name: "attrNotBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotBefore
        {
            get;
        }

        /// <summary>Attribute OriginCaCertificateId: The certificate ID.</summary>
        [JsiiProperty(name: "attrOriginCaCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginCaCertificateId
        {
            get;
        }

        /// <summary>Attribute PubkeyAlgorithm: Certificate public key algorithm.</summary>
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

        /// <summary>Attribute Type: The type of the certificate.</summary>
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

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginCaCertificateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IOriginCaCertificateProps Props
        {
            get;
        }

        /// <summary>Represents a `OriginCaCertificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IOriginCaCertificate), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginCaCertificate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginCaCertificate
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

            /// <summary>Attribute CommonName: The certificate common name.</summary>
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

            /// <summary>Attribute Issuer: The certificate authority (CA) that issued the certificate.</summary>
            [JsiiProperty(name: "attrIssuer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIssuer
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: The certificate name.</summary>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotAfter: The expiration date of the certificate validity period.</summary>
            [JsiiProperty(name: "attrNotAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotAfter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotBefore: The start time of the certificate validity period.</summary>
            [JsiiProperty(name: "attrNotBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotBefore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginCaCertificateId: The certificate ID.</summary>
            [JsiiProperty(name: "attrOriginCaCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginCaCertificateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PubkeyAlgorithm: Certificate public key algorithm.</summary>
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

            /// <summary>Attribute Type: The type of the certificate.</summary>
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

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginCaCertificateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IOriginCaCertificateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IOriginCaCertificateProps>()!;
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
