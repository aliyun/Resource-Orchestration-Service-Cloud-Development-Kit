using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::CAS::PcaCertificate`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPcaCertificate`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cas.PcaCertificate), fullyQualifiedName: "@alicloud/ros-cdk-cas.PcaCertificate", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cas.PcaCertificateProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class PcaCertificate : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificate
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public PcaCertificate(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificateProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificateProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PcaCertificate(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PcaCertificate(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Algorithm: The key algorithm type of the root CA certificate.</summary>
        /// <remarks>
        /// The key algorithm is expressed using the '<encryption algorithm="algorithm" xmlns="http://www.w3.org/1999/xhtml"></encryption>_&lt; key length&gt;' format.
        /// </remarks>
        [JsiiProperty(name: "attrAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAlgorithm
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CertificateType: The type of CA.</summary>
        [JsiiProperty(name: "attrCertificateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCertificateType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CommonName: The common name or abbreviation of the organization.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrCommonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCommonName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.</summary>
        /// <remarks>
        /// For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
        /// </remarks>
        [JsiiProperty(name: "attrCountryCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCountryCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Identifier: Certificate Identifier.</summary>
        [JsiiProperty(name: "attrIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIdentifier
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IssuerType: The institution issuing the CA.</summary>
        [JsiiProperty(name: "attrIssuerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIssuerType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Locality: Name of the city where the organization is located.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrLocality", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLocality
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrOrganization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOrganization
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrganizationUnit: The name of the department or branch under the organization.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrOrganizationUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOrganizationUnit
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute State: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.</summary>
        /// <remarks>
        /// Support the use of Chinese, English characters.
        /// </remarks>
        [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrState
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Years: The validity period of the root CA certificate, in years.</summary>
        [JsiiProperty(name: "attrYears", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrYears
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cas.PcaCertificateProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificateProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cas.IPcaCertificateProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
