using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `Certificate`.</summary>
    [JsiiInterface(nativeType: typeof(ICertificate), fullyQualifiedName: "@alicloud/ros-cdk-esa.ICertificate")]
    public interface ICertificate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ApplyCode: Certificate application error code.</summary>
        [JsiiProperty(name: "attrApplyCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApplyCode
        {
            get;
        }

        /// <summary>Attribute ApplyMessage: Certificate application error message.</summary>
        [JsiiProperty(name: "attrApplyMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApplyMessage
        {
            get;
        }

        /// <summary>Attribute CasId: Cloud certificate ID.</summary>
        [JsiiProperty(name: "attrCasId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCasId
        {
            get;
        }

        /// <summary>Attribute CertId: The certificate Id.</summary>
        [JsiiProperty(name: "attrCertId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertId
        {
            get;
        }

        /// <summary>Attribute Certificate: Certificate content.</summary>
        [JsiiProperty(name: "attrCertificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertificate
        {
            get;
        }

        /// <summary>Attribute CertName: The certificate name.</summary>
        [JsiiProperty(name: "attrCertName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertName
        {
            get;
        }

        /// <summary>Attribute CommonName: Common Name (CN) field of the certificate.</summary>
        [JsiiProperty(name: "attrCommonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommonName
        {
            get;
        }

        /// <summary>Attribute CreateTime: Creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DCV: DCV information.</summary>
        [JsiiProperty(name: "attrDcv", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDcv
        {
            get;
        }

        /// <summary>Attribute Domains: A list of domain names.</summary>
        /// <remarks>
        /// Multiple domain names are separated by commas.
        /// </remarks>
        [JsiiProperty(name: "attrDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomains
        {
            get;
        }

        /// <summary>Attribute FingerprintSha256: SHA256 fingerprint of the certificate.</summary>
        [JsiiProperty(name: "attrFingerprintSha256", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFingerprintSha256
        {
            get;
        }

        /// <summary>Attribute Issuer: Certificate issuer.</summary>
        [JsiiProperty(name: "attrIssuer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIssuer
        {
            get;
        }

        /// <summary>Attribute IssuerCN: Common name of the certificate issuer.</summary>
        [JsiiProperty(name: "attrIssuerCn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIssuerCn
        {
            get;
        }

        /// <summary>Attribute NotAfter: End time of the certificate validity period.</summary>
        [JsiiProperty(name: "attrNotAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotAfter
        {
            get;
        }

        /// <summary>Attribute NotBefore: Start time of the certificate validity period.</summary>
        [JsiiProperty(name: "attrNotBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotBefore
        {
            get;
        }

        /// <summary>Attribute PubAlg: Certificate public key algorithm.</summary>
        [JsiiProperty(name: "attrPubAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPubAlg
        {
            get;
        }

        /// <summary>Attribute SerialNumber: Serial number of the certificate.</summary>
        [JsiiProperty(name: "attrSerialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSerialNumber
        {
            get;
        }

        /// <summary>Attribute SigAlg: Certificate signature algorithm.</summary>
        [JsiiProperty(name: "attrSigAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSigAlg
        {
            get;
        }

        /// <summary>Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.</summary>
        [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteId
        {
            get;
        }

        /// <summary>Attribute SiteName: Site name.</summary>
        [JsiiProperty(name: "attrSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteName
        {
            get;
        }

        /// <summary>Attribute UpdateTime: Update time.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.CertificateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.ICertificateProps Props
        {
            get;
        }

        /// <summary>Represents a `Certificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICertificate), fullyQualifiedName: "@alicloud/ros-cdk-esa.ICertificate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ICertificate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ApplyCode: Certificate application error code.</summary>
            [JsiiProperty(name: "attrApplyCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApplyCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ApplyMessage: Certificate application error message.</summary>
            [JsiiProperty(name: "attrApplyMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApplyMessage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CasId: Cloud certificate ID.</summary>
            [JsiiProperty(name: "attrCasId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCasId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CertId: The certificate Id.</summary>
            [JsiiProperty(name: "attrCertId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCertId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Certificate: Certificate content.</summary>
            [JsiiProperty(name: "attrCertificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCertificate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CertName: The certificate name.</summary>
            [JsiiProperty(name: "attrCertName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCertName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommonName: Common Name (CN) field of the certificate.</summary>
            [JsiiProperty(name: "attrCommonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommonName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Creation time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DCV: DCV information.</summary>
            [JsiiProperty(name: "attrDcv", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDcv
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Domains: A list of domain names.</summary>
            /// <remarks>
            /// Multiple domain names are separated by commas.
            /// </remarks>
            [JsiiProperty(name: "attrDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomains
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FingerprintSha256: SHA256 fingerprint of the certificate.</summary>
            [JsiiProperty(name: "attrFingerprintSha256", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFingerprintSha256
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Issuer: Certificate issuer.</summary>
            [JsiiProperty(name: "attrIssuer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIssuer
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IssuerCN: Common name of the certificate issuer.</summary>
            [JsiiProperty(name: "attrIssuerCn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIssuerCn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotAfter: End time of the certificate validity period.</summary>
            [JsiiProperty(name: "attrNotAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotAfter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotBefore: Start time of the certificate validity period.</summary>
            [JsiiProperty(name: "attrNotBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotBefore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PubAlg: Certificate public key algorithm.</summary>
            [JsiiProperty(name: "attrPubAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPubAlg
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SerialNumber: Serial number of the certificate.</summary>
            [JsiiProperty(name: "attrSerialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSerialNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SigAlg: Certificate signature algorithm.</summary>
            [JsiiProperty(name: "attrSigAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSigAlg
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.</summary>
            [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteName: Site name.</summary>
            [JsiiProperty(name: "attrSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: Update time.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.CertificateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.ICertificateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.ICertificateProps>()!;
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
