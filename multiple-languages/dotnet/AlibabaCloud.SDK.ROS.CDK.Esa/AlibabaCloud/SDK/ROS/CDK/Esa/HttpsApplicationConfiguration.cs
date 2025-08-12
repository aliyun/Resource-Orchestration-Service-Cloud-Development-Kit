using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ESA::HttpsApplicationConfiguration`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpsApplicationConfiguration`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Esa.HttpsApplicationConfiguration), fullyQualifiedName: "@alicloud/ros-cdk-esa.HttpsApplicationConfiguration", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-esa.HttpsApplicationConfigurationProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class HttpsApplicationConfiguration : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfiguration
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public HttpsApplicationConfiguration(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfigurationProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfigurationProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected HttpsApplicationConfiguration(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected HttpsApplicationConfiguration(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AltSvc: Function switch, default off.</summary>
        [JsiiProperty(name: "attrAltSvc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAltSvc
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.</summary>
        /// <remarks>
        /// This parameter is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrAltSvcClear", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAltSvcClear
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.</summary>
        /// <remarks>
        /// The default value is 86400 seconds.
        /// </remarks>
        [JsiiProperty(name: "attrAltSvcMa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAltSvcMa
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.</summary>
        /// <remarks>
        /// This parameter is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrAltSvcPersist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAltSvcPersist
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigId: Config Id.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigType: The type of the configuration.</summary>
        [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Hsts: Whether to enable HSTS.</summary>
        /// <remarks>
        /// It is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHsts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHsts
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.</summary>
        [JsiiProperty(name: "attrHstsIncludeSubdomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHstsIncludeSubdomains
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HstsMaxAge: The expiration time of HSTS, in seconds.</summary>
        [JsiiProperty(name: "attrHstsMaxAge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHstsMaxAge
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HstsPreload: Whether to enable HSTS preloading.</summary>
        /// <remarks>
        /// It is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHstsPreload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHstsPreload
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpsForce: Whether to enable forced HTTPS.</summary>
        /// <remarks>
        /// It is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHttpsForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHttpsForce
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.</summary>
        [JsiiProperty(name: "attrHttpsForceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHttpsForceCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.</summary>
        /// <remarks>
        /// This parameter is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHttpsNoSniDeny", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHttpsNoSniDeny
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpsSniVerify: Whether to enable SNI verification.</summary>
        /// <remarks>
        /// It is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHttpsSniVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHttpsSniVerify
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.</summary>
        [JsiiProperty(name: "attrHttpsSniWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHttpsSniWhitelist
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRule
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleName: Rule name.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Sequence: Order of rule execution.</summary>
        /// <remarks>
        /// The smaller the value, the higher the priority for execution.
        /// </remarks>
        [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSequence
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SiteVersion: The version number of the site configuration.</summary>
        /// <remarks>
        /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        /// </remarks>
        [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSiteVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.HttpsApplicationConfigurationProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfigurationProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfigurationProps>()!;
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
