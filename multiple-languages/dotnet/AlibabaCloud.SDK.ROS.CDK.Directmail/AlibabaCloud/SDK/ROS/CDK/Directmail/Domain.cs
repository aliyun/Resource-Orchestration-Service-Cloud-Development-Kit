using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::DirectMail::Domain`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Directmail.Domain), fullyQualifiedName: "@alicloud/ros-cdk-directmail.Domain", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-directmail.DomainProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Domain : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Directmail.IDomain
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Domain(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Directmail.IDomainProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Directmail.IDomainProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Domain(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Domain(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute CnameAuthStatus: Cname auth status.</summary>
        [JsiiProperty(name: "attrCnameAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCnameAuthStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CnameConfirmStatus: Cname confirm status.</summary>
        [JsiiProperty(name: "attrCnameConfirmStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCnameConfirmStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CnameRecord: Cname record.</summary>
        [JsiiProperty(name: "attrCnameRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCnameRecord
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The creation time of the domain.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DefaultDomain: Default domain.</summary>
        [JsiiProperty(name: "attrDefaultDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDefaultDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DnsMx: DNS MX.</summary>
        [JsiiProperty(name: "attrDnsMx", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDnsMx
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DnsSpf: DNS SPF.</summary>
        [JsiiProperty(name: "attrDnsSpf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDnsSpf
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DnsTxt: DNS txt.</summary>
        [JsiiProperty(name: "attrDnsTxt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDnsTxt
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DomainId: The ID of the domain.</summary>
        [JsiiProperty(name: "attrDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDomainId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DomainName: The name of the domain.</summary>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DomainType: The type of the domain.</summary>
        [JsiiProperty(name: "attrDomainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDomainType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IcpStatus: ICP status.</summary>
        [JsiiProperty(name: "attrIcpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIcpStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MxAuthStatus: MX auth status.</summary>
        [JsiiProperty(name: "attrMxAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMxAuthStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MxRecord: MX Record.</summary>
        [JsiiProperty(name: "attrMxRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMxRecord
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SpfAuthStatus: SPF auth status.</summary>
        [JsiiProperty(name: "attrSpfAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSpfAuthStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SpfRecord: SPF record.</summary>
        [JsiiProperty(name: "attrSpfRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSpfRecord
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TlDomainName: TL domain name.</summary>
        [JsiiProperty(name: "attrTlDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTlDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TracefRecord: Tracef Record.</summary>
        [JsiiProperty(name: "attrTracefRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTracefRecord
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-directmail.DomainProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Directmail.IDomainProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Directmail.IDomainProps>()!;
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
