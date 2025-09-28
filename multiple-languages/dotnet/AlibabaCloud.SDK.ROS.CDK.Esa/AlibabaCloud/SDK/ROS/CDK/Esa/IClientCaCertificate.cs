using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `ClientCaCertificate`.</summary>
    [JsiiInterface(nativeType: typeof(IClientCaCertificate), fullyQualifiedName: "@alicloud/ros-cdk-esa.IClientCaCertificate")]
    public interface IClientCaCertificate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Certificate: Certificate content.</summary>
        [JsiiProperty(name: "attrCertificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertificate
        {
            get;
        }

        /// <summary>Attribute ClientCaCertId: ClientCaCertificate Id.</summary>
        [JsiiProperty(name: "attrClientCaCertId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClientCaCertId
        {
            get;
        }

        /// <summary>Attribute ClientCaCertName: The certificate name.</summary>
        [JsiiProperty(name: "attrClientCaCertName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClientCaCertName
        {
            get;
        }

        /// <summary>Attribute CommonName: The certificate common name.</summary>
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

        /// <summary>Attribute Issuer: Certificate Authority.</summary>
        [JsiiProperty(name: "attrIssuer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIssuer
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

        /// <summary>Attribute PubkeyAlgorithm: Certificate public key algorithm.</summary>
        [JsiiProperty(name: "attrPubkeyAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPubkeyAlgorithm
        {
            get;
        }

        /// <summary>Attribute SAN: Alternate certificate subject name.</summary>
        [JsiiProperty(name: "attrSan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSan
        {
            get;
        }

        /// <summary>Attribute SignatureAlgorithm: Certificate signature algorithm.</summary>
        [JsiiProperty(name: "attrSignatureAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSignatureAlgorithm
        {
            get;
        }

        /// <summary>Attribute SiteId: Site Id.</summary>
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

        /// <summary>Attribute UpdateTime: Update time.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.ClientCaCertificateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IClientCaCertificateProps Props
        {
            get;
        }

        /// <summary>Represents a `ClientCaCertificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClientCaCertificate), fullyQualifiedName: "@alicloud/ros-cdk-esa.IClientCaCertificate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IClientCaCertificate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Certificate: Certificate content.</summary>
            [JsiiProperty(name: "attrCertificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCertificate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClientCaCertId: ClientCaCertificate Id.</summary>
            [JsiiProperty(name: "attrClientCaCertId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClientCaCertId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClientCaCertName: The certificate name.</summary>
            [JsiiProperty(name: "attrClientCaCertName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClientCaCertName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommonName: The certificate common name.</summary>
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

            /// <summary>Attribute Issuer: Certificate Authority.</summary>
            [JsiiProperty(name: "attrIssuer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIssuer
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

            /// <summary>Attribute PubkeyAlgorithm: Certificate public key algorithm.</summary>
            [JsiiProperty(name: "attrPubkeyAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPubkeyAlgorithm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SAN: Alternate certificate subject name.</summary>
            [JsiiProperty(name: "attrSan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SignatureAlgorithm: Certificate signature algorithm.</summary>
            [JsiiProperty(name: "attrSignatureAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSignatureAlgorithm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteId: Site Id.</summary>
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

            /// <summary>Attribute UpdateTime: Update time.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.ClientCaCertificateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IClientCaCertificateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IClientCaCertificateProps>()!;
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
