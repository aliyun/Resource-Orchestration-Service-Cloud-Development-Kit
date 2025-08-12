using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `HttpsApplicationConfiguration`.</summary>
    [JsiiInterface(nativeType: typeof(IHttpsApplicationConfiguration), fullyQualifiedName: "@alicloud/ros-cdk-esa.IHttpsApplicationConfiguration")]
    public interface IHttpsApplicationConfiguration : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AltSvc: Function switch, default off.</summary>
        [JsiiProperty(name: "attrAltSvc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAltSvc
        {
            get;
        }

        /// <summary>Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.</summary>
        /// <remarks>
        /// This parameter is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrAltSvcClear", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAltSvcClear
        {
            get;
        }

        /// <summary>Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.</summary>
        /// <remarks>
        /// The default value is 86400 seconds.
        /// </remarks>
        [JsiiProperty(name: "attrAltSvcMa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAltSvcMa
        {
            get;
        }

        /// <summary>Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.</summary>
        /// <remarks>
        /// This parameter is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrAltSvcPersist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAltSvcPersist
        {
            get;
        }

        /// <summary>Attribute ConfigId: Config Id.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigId
        {
            get;
        }

        /// <summary>Attribute ConfigType: The type of the configuration.</summary>
        [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigType
        {
            get;
        }

        /// <summary>Attribute Hsts: Whether to enable HSTS.</summary>
        /// <remarks>
        /// It is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHsts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHsts
        {
            get;
        }

        /// <summary>Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.</summary>
        [JsiiProperty(name: "attrHstsIncludeSubdomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHstsIncludeSubdomains
        {
            get;
        }

        /// <summary>Attribute HstsMaxAge: The expiration time of HSTS, in seconds.</summary>
        [JsiiProperty(name: "attrHstsMaxAge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHstsMaxAge
        {
            get;
        }

        /// <summary>Attribute HstsPreload: Whether to enable HSTS preloading.</summary>
        /// <remarks>
        /// It is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHstsPreload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHstsPreload
        {
            get;
        }

        /// <summary>Attribute HttpsForce: Whether to enable forced HTTPS.</summary>
        /// <remarks>
        /// It is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHttpsForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttpsForce
        {
            get;
        }

        /// <summary>Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.</summary>
        [JsiiProperty(name: "attrHttpsForceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttpsForceCode
        {
            get;
        }

        /// <summary>Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.</summary>
        /// <remarks>
        /// This parameter is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHttpsNoSniDeny", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttpsNoSniDeny
        {
            get;
        }

        /// <summary>Attribute HttpsSniVerify: Whether to enable SNI verification.</summary>
        /// <remarks>
        /// It is disabled by default.
        /// </remarks>
        [JsiiProperty(name: "attrHttpsSniVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttpsSniVerify
        {
            get;
        }

        /// <summary>Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.</summary>
        [JsiiProperty(name: "attrHttpsSniWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttpsSniWhitelist
        {
            get;
        }

        /// <summary>Attribute Rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRule
        {
            get;
        }

        /// <summary>Attribute RuleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleEnable
        {
            get;
        }

        /// <summary>Attribute RuleName: Rule name.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        /// <summary>Attribute Sequence: Order of rule execution.</summary>
        /// <remarks>
        /// The smaller the value, the higher the priority for execution.
        /// </remarks>
        [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSequence
        {
            get;
        }

        /// <summary>Attribute SiteVersion: The version number of the site configuration.</summary>
        /// <remarks>
        /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        /// </remarks>
        [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteVersion
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.HttpsApplicationConfigurationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfigurationProps Props
        {
            get;
        }

        /// <summary>Represents a `HttpsApplicationConfiguration`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHttpsApplicationConfiguration), fullyQualifiedName: "@alicloud/ros-cdk-esa.IHttpsApplicationConfiguration")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfiguration
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AltSvc: Function switch, default off.</summary>
            [JsiiProperty(name: "attrAltSvc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAltSvc
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.</summary>
            /// <remarks>
            /// This parameter is disabled by default.
            /// </remarks>
            [JsiiProperty(name: "attrAltSvcClear", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAltSvcClear
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.</summary>
            /// <remarks>
            /// The default value is 86400 seconds.
            /// </remarks>
            [JsiiProperty(name: "attrAltSvcMa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAltSvcMa
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.</summary>
            /// <remarks>
            /// This parameter is disabled by default.
            /// </remarks>
            [JsiiProperty(name: "attrAltSvcPersist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAltSvcPersist
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigId: Config Id.</summary>
            [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigType: The type of the configuration.</summary>
            [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Hsts: Whether to enable HSTS.</summary>
            /// <remarks>
            /// It is disabled by default.
            /// </remarks>
            [JsiiProperty(name: "attrHsts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHsts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.</summary>
            [JsiiProperty(name: "attrHstsIncludeSubdomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHstsIncludeSubdomains
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HstsMaxAge: The expiration time of HSTS, in seconds.</summary>
            [JsiiProperty(name: "attrHstsMaxAge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHstsMaxAge
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HstsPreload: Whether to enable HSTS preloading.</summary>
            /// <remarks>
            /// It is disabled by default.
            /// </remarks>
            [JsiiProperty(name: "attrHstsPreload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHstsPreload
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HttpsForce: Whether to enable forced HTTPS.</summary>
            /// <remarks>
            /// It is disabled by default.
            /// </remarks>
            [JsiiProperty(name: "attrHttpsForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttpsForce
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.</summary>
            [JsiiProperty(name: "attrHttpsForceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttpsForceCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.</summary>
            /// <remarks>
            /// This parameter is disabled by default.
            /// </remarks>
            [JsiiProperty(name: "attrHttpsNoSniDeny", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttpsNoSniDeny
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HttpsSniVerify: Whether to enable SNI verification.</summary>
            /// <remarks>
            /// It is disabled by default.
            /// </remarks>
            [JsiiProperty(name: "attrHttpsSniVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttpsSniVerify
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.</summary>
            [JsiiProperty(name: "attrHttpsSniWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttpsSniWhitelist
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Rule: Rule content, using conditional expressions to match user requests.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleEnable: Rule switch.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiProperty(name: "attrRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleName: Rule name.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Sequence: Order of rule execution.</summary>
            /// <remarks>
            /// The smaller the value, the higher the priority for execution.
            /// </remarks>
            [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSequence
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteVersion: The version number of the site configuration.</summary>
            /// <remarks>
            /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
            /// </remarks>
            [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.HttpsApplicationConfigurationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfigurationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfigurationProps>()!;
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
