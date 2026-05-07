using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Represents a `PcaCertificate`.</summary>
    [JsiiInterface(nativeType: typeof(IPcaCertificate), fullyQualifiedName: "@alicloud/ros-cdk-cas.IPcaCertificate")]
    public interface IPcaCertificate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Algorithm: The key algorithm type of the root CA certificate.</summary>
        /// <remarks>
        /// The key algorithm is expressed using the '<encryption algorithm="algorithm" xmlns="http://www.w3.org/1999/xhtml"></encryption>_&lt; key length&gt;' format.
        /// </remarks>
        [JsiiProperty(name: "attrAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAlgorithm
        {
            get;
        }

        /// <summary>Attribute CertificateType: The type of CA.</summary>
        [JsiiProperty(name: "attrCertificateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertificateType
        {
            get;
        }

        /// <summary>Attribute CommonName: The common name or abbreviation of the organization.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrCommonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommonName
        {
            get;
        }

        /// <summary>Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.</summary>
        /// <remarks>
        /// For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
        /// </remarks>
        [JsiiProperty(name: "attrCountryCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCountryCode
        {
            get;
        }

        /// <summary>Attribute Identifier: Certificate Identifier.</summary>
        [JsiiProperty(name: "attrIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIdentifier
        {
            get;
        }

        /// <summary>Attribute IssuerType: The institution issuing the CA.</summary>
        [JsiiProperty(name: "attrIssuerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIssuerType
        {
            get;
        }

        /// <summary>Attribute Locality: Name of the city where the organization is located.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrLocality", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLocality
        {
            get;
        }

        /// <summary>Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrOrganization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrganization
        {
            get;
        }

        /// <summary>Attribute OrganizationUnit: The name of the department or branch under the organization.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrOrganizationUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrganizationUnit
        {
            get;
        }

        /// <summary>Attribute State: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrState
        {
            get;
        }

        /// <summary>Attribute Years: The validity period of the root CA certificate, in years.</summary>
        [JsiiProperty(name: "attrYears", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrYears
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cas.PcaCertificateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificateProps Props
        {
            get;
        }

        /// <summary>Represents a `PcaCertificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPcaCertificate), fullyQualifiedName: "@alicloud/ros-cdk-cas.IPcaCertificate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Algorithm: The key algorithm type of the root CA certificate.</summary>
            /// <remarks>
            /// The key algorithm is expressed using the '<encryption algorithm="algorithm" xmlns="http://www.w3.org/1999/xhtml"></encryption>_&lt; key length&gt;' format.
            /// </remarks>
            [JsiiProperty(name: "attrAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAlgorithm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CertificateType: The type of CA.</summary>
            [JsiiProperty(name: "attrCertificateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCertificateType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommonName: The common name or abbreviation of the organization.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "attrCommonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommonName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.</summary>
            /// <remarks>
            /// For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
            /// </remarks>
            [JsiiProperty(name: "attrCountryCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCountryCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Identifier: Certificate Identifier.</summary>
            [JsiiProperty(name: "attrIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIdentifier
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IssuerType: The institution issuing the CA.</summary>
            [JsiiProperty(name: "attrIssuerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIssuerType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Locality: Name of the city where the organization is located.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "attrLocality", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLocality
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "attrOrganization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrganization
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OrganizationUnit: The name of the department or branch under the organization.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "attrOrganizationUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrganizationUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute State: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.</summary>
            /// <remarks>
            /// Support the use of Chinese, English characters.
            /// </remarks>
            [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrState
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Years: The validity period of the root CA certificate, in years.</summary>
            [JsiiProperty(name: "attrYears", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrYears
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cas.PcaCertificateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificateProps>()!;
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
