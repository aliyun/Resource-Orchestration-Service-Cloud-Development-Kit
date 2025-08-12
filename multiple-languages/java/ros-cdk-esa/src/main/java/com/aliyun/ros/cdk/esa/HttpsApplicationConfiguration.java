package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::HttpsApplicationConfiguration</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.361Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.HttpsApplicationConfiguration")
public class HttpsApplicationConfiguration extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IHttpsApplicationConfiguration {

    protected HttpsApplicationConfiguration(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HttpsApplicationConfiguration(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public HttpsApplicationConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public HttpsApplicationConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AltSvc: Function switch, default off.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvc() {
        return software.amazon.jsii.Kernel.get(this, "attrAltSvc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.
     * <p>
     * This parameter is disabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcClear() {
        return software.amazon.jsii.Kernel.get(this, "attrAltSvcClear", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.
     * <p>
     * The default value is 86400 seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcMa() {
        return software.amazon.jsii.Kernel.get(this, "attrAltSvcMa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.
     * <p>
     * This parameter is disabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcPersist() {
        return software.amazon.jsii.Kernel.get(this, "attrAltSvcPersist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigId: Config Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigType: The type of the configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Hsts: Whether to enable HSTS.
     * <p>
     * It is disabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHsts() {
        return software.amazon.jsii.Kernel.get(this, "attrHsts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsIncludeSubdomains() {
        return software.amazon.jsii.Kernel.get(this, "attrHstsIncludeSubdomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsMaxAge() {
        return software.amazon.jsii.Kernel.get(this, "attrHstsMaxAge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HstsPreload: Whether to enable HSTS preloading.
     * <p>
     * It is disabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsPreload() {
        return software.amazon.jsii.Kernel.get(this, "attrHstsPreload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpsForce: Whether to enable forced HTTPS.
     * <p>
     * It is disabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsForce() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsForceCode() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsForceCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.
     * <p>
     * This parameter is disabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsNoSniDeny() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsNoSniDeny", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpsSniVerify: Whether to enable SNI verification.
     * <p>
     * It is disabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsSniVerify() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsSniVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsSniWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsSniWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
        return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Sequence: Order of rule execution.
     * <p>
     * The smaller the value, the higher the priority for execution.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
        return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.HttpsApplicationConfiguration}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.HttpsApplicationConfiguration> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps.Builder();
        }

        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property altSvc: Function switch, default off.
         * <p>
         * Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param altSvc Property altSvc: Function switch, default off. This parameter is required.
         */
        public Builder altSvc(final java.lang.String altSvc) {
            this.props.altSvc(altSvc);
            return this;
        }
        /**
         * Property altSvc: Function switch, default off.
         * <p>
         * Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param altSvc Property altSvc: Function switch, default off. This parameter is required.
         */
        public Builder altSvc(final com.aliyun.ros.cdk.core.IResolvable altSvc) {
            this.props.altSvc(altSvc);
            return this;
        }

        /**
         * Property altSvcClear: Alt-Svc whether The header contains the clear parameter.
         * <p>
         * This parameter is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param altSvcClear Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is required.
         */
        public Builder altSvcClear(final java.lang.String altSvcClear) {
            this.props.altSvcClear(altSvcClear);
            return this;
        }
        /**
         * Property altSvcClear: Alt-Svc whether The header contains the clear parameter.
         * <p>
         * This parameter is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param altSvcClear Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is required.
         */
        public Builder altSvcClear(final com.aliyun.ros.cdk.core.IResolvable altSvcClear) {
            this.props.altSvcClear(altSvcClear);
            return this;
        }

        /**
         * Property altSvcMa: The effective time of the Alt-Svc, in seconds.
         * <p>
         * The default value is 86400 seconds.
         * <p>
         * @return {@code this}
         * @param altSvcMa Property altSvcMa: The effective time of the Alt-Svc, in seconds. This parameter is required.
         */
        public Builder altSvcMa(final java.lang.String altSvcMa) {
            this.props.altSvcMa(altSvcMa);
            return this;
        }
        /**
         * Property altSvcMa: The effective time of the Alt-Svc, in seconds.
         * <p>
         * The default value is 86400 seconds.
         * <p>
         * @return {@code this}
         * @param altSvcMa Property altSvcMa: The effective time of the Alt-Svc, in seconds. This parameter is required.
         */
        public Builder altSvcMa(final com.aliyun.ros.cdk.core.IResolvable altSvcMa) {
            this.props.altSvcMa(altSvcMa);
            return this;
        }

        /**
         * Property altSvcPersist: Alt-Svc whether The header contains the persist parameter.
         * <p>
         * This parameter is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param altSvcPersist Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is required.
         */
        public Builder altSvcPersist(final java.lang.String altSvcPersist) {
            this.props.altSvcPersist(altSvcPersist);
            return this;
        }
        /**
         * Property altSvcPersist: Alt-Svc whether The header contains the persist parameter.
         * <p>
         * This parameter is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param altSvcPersist Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is required.
         */
        public Builder altSvcPersist(final com.aliyun.ros.cdk.core.IResolvable altSvcPersist) {
            this.props.altSvcPersist(altSvcPersist);
            return this;
        }

        /**
         * Property hsts: Whether to enable HSTS.
         * <p>
         * It is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param hsts Property hsts: Whether to enable HSTS. This parameter is required.
         */
        public Builder hsts(final java.lang.String hsts) {
            this.props.hsts(hsts);
            return this;
        }
        /**
         * Property hsts: Whether to enable HSTS.
         * <p>
         * It is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param hsts Property hsts: Whether to enable HSTS. This parameter is required.
         */
        public Builder hsts(final com.aliyun.ros.cdk.core.IResolvable hsts) {
            this.props.hsts(hsts);
            return this;
        }

        /**
         * Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
         * <p>
         * Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param hstsIncludeSubdomains Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. This parameter is required.
         */
        public Builder hstsIncludeSubdomains(final java.lang.String hstsIncludeSubdomains) {
            this.props.hstsIncludeSubdomains(hstsIncludeSubdomains);
            return this;
        }
        /**
         * Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
         * <p>
         * Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param hstsIncludeSubdomains Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. This parameter is required.
         */
        public Builder hstsIncludeSubdomains(final com.aliyun.ros.cdk.core.IResolvable hstsIncludeSubdomains) {
            this.props.hstsIncludeSubdomains(hstsIncludeSubdomains);
            return this;
        }

        /**
         * Property hstsMaxAge: The expiration time of HSTS, in seconds.
         * <p>
         * @return {@code this}
         * @param hstsMaxAge Property hstsMaxAge: The expiration time of HSTS, in seconds. This parameter is required.
         */
        public Builder hstsMaxAge(final java.lang.String hstsMaxAge) {
            this.props.hstsMaxAge(hstsMaxAge);
            return this;
        }
        /**
         * Property hstsMaxAge: The expiration time of HSTS, in seconds.
         * <p>
         * @return {@code this}
         * @param hstsMaxAge Property hstsMaxAge: The expiration time of HSTS, in seconds. This parameter is required.
         */
        public Builder hstsMaxAge(final com.aliyun.ros.cdk.core.IResolvable hstsMaxAge) {
            this.props.hstsMaxAge(hstsMaxAge);
            return this;
        }

        /**
         * Property hstsPreload: Whether to enable HSTS preloading.
         * <p>
         * It is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param hstsPreload Property hstsPreload: Whether to enable HSTS preloading. This parameter is required.
         */
        public Builder hstsPreload(final java.lang.String hstsPreload) {
            this.props.hstsPreload(hstsPreload);
            return this;
        }
        /**
         * Property hstsPreload: Whether to enable HSTS preloading.
         * <p>
         * It is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param hstsPreload Property hstsPreload: Whether to enable HSTS preloading. This parameter is required.
         */
        public Builder hstsPreload(final com.aliyun.ros.cdk.core.IResolvable hstsPreload) {
            this.props.hstsPreload(hstsPreload);
            return this;
        }

        /**
         * Property httpsForce: Whether to enable forced HTTPS.
         * <p>
         * It is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param httpsForce Property httpsForce: Whether to enable forced HTTPS. This parameter is required.
         */
        public Builder httpsForce(final java.lang.String httpsForce) {
            this.props.httpsForce(httpsForce);
            return this;
        }
        /**
         * Property httpsForce: Whether to enable forced HTTPS.
         * <p>
         * It is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param httpsForce Property httpsForce: Whether to enable forced HTTPS. This parameter is required.
         */
        public Builder httpsForce(final com.aliyun.ros.cdk.core.IResolvable httpsForce) {
            this.props.httpsForce(httpsForce);
            return this;
        }

        /**
         * Property httpsForceCode: Forced HTTPS jump status code, value range: 301 302 307 308.
         * <p>
         * @return {@code this}
         * @param httpsForceCode Property httpsForceCode: Forced HTTPS jump status code, value range: 301 302 307 308. This parameter is required.
         */
        public Builder httpsForceCode(final java.lang.String httpsForceCode) {
            this.props.httpsForceCode(httpsForceCode);
            return this;
        }
        /**
         * Property httpsForceCode: Forced HTTPS jump status code, value range: 301 302 307 308.
         * <p>
         * @return {@code this}
         * @param httpsForceCode Property httpsForceCode: Forced HTTPS jump status code, value range: 301 302 307 308. This parameter is required.
         */
        public Builder httpsForceCode(final com.aliyun.ros.cdk.core.IResolvable httpsForceCode) {
            this.props.httpsForceCode(httpsForceCode);
            return this;
        }

        /**
         * Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.
         * <p>
         * This parameter is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param httpsNoSniDeny Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is required.
         */
        public Builder httpsNoSniDeny(final java.lang.String httpsNoSniDeny) {
            this.props.httpsNoSniDeny(httpsNoSniDeny);
            return this;
        }
        /**
         * Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.
         * <p>
         * This parameter is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param httpsNoSniDeny Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is required.
         */
        public Builder httpsNoSniDeny(final com.aliyun.ros.cdk.core.IResolvable httpsNoSniDeny) {
            this.props.httpsNoSniDeny(httpsNoSniDeny);
            return this;
        }

        /**
         * Property httpsSniVerify: Whether to enable SNI verification.
         * <p>
         * It is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param httpsSniVerify Property httpsSniVerify: Whether to enable SNI verification. This parameter is required.
         */
        public Builder httpsSniVerify(final java.lang.String httpsSniVerify) {
            this.props.httpsSniVerify(httpsSniVerify);
            return this;
        }
        /**
         * Property httpsSniVerify: Whether to enable SNI verification.
         * <p>
         * It is disabled by default. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param httpsSniVerify Property httpsSniVerify: Whether to enable SNI verification. This parameter is required.
         */
        public Builder httpsSniVerify(final com.aliyun.ros.cdk.core.IResolvable httpsSniVerify) {
            this.props.httpsSniVerify(httpsSniVerify);
            return this;
        }

        /**
         * Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
         * <p>
         * @return {@code this}
         * @param httpsSniWhitelist Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces. This parameter is required.
         */
        public Builder httpsSniWhitelist(final java.lang.String httpsSniWhitelist) {
            this.props.httpsSniWhitelist(httpsSniWhitelist);
            return this;
        }
        /**
         * Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
         * <p>
         * @return {@code this}
         * @param httpsSniWhitelist Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces. This parameter is required.
         */
        public Builder httpsSniWhitelist(final com.aliyun.ros.cdk.core.IResolvable httpsSniWhitelist) {
            this.props.httpsSniWhitelist(httpsSniWhitelist);
            return this;
        }

        /**
         * Property paymentType: Payment Type.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Payment Type. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: Payment Type.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Payment Type. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         * Match all incoming requests: value set to true
         * Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
        }
        /**
         * Property rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         * Match all incoming requests: value set to true
         * Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
        }

        /**
         * Property ruleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final java.lang.String ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }
        /**
         * Property ruleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set. Value range:
         * on: Enabled.
         * off: Disabled.
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }

        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: Order of rule execution. This parameter is required.
         */
        public Builder sequence(final java.lang.Number sequence) {
            this.props.sequence(sequence);
            return this;
        }
        /**
         * Property sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: Order of rule execution. This parameter is required.
         */
        public Builder sequence(final com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.props.sequence(sequence);
            return this;
        }

        /**
         * Property siteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final java.lang.Number siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }
        /**
         * Property siteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.HttpsApplicationConfiguration}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.HttpsApplicationConfiguration build() {
            return new com.aliyun.ros.cdk.esa.HttpsApplicationConfiguration(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
