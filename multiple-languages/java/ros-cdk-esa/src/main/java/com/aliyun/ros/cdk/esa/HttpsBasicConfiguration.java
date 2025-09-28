package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::HttpsBasicConfiguration</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.427Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.HttpsBasicConfiguration")
public class HttpsBasicConfiguration extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IHttpsBasicConfiguration {

    protected HttpsBasicConfiguration(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HttpsBasicConfiguration(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HttpsBasicConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HttpsBasicConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphersuite() {
        return software.amazon.jsii.Kernel.get(this, "attrCiphersuite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CiphersuiteGroup: Cipher suite group.
     * <p>
     * Default is all cipher suites.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphersuiteGroup() {
        return software.amazon.jsii.Kernel.get(this, "attrCiphersuiteGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigId: ConfigId of the configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Http2: Indicates whether HTTP2 is enabled.
     * <p>
     * Default is on.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2() {
        return software.amazon.jsii.Kernel.get(this, "attrHttp2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Http3: Whether to enable HTTP3, which is enabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp3() {
        return software.amazon.jsii.Kernel.get(this, "attrHttp3", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Https: Whether to enable HTTPS.
     * <p>
     * Default is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttps() {
        return software.amazon.jsii.Kernel.get(this, "attrHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OcspStapling: Indicates whether OCSP is enabled.
     * <p>
     * Default is off.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOcspStapling() {
        return software.amazon.jsii.Kernel.get(this, "attrOcspStapling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
     * Attribute Tls10: Whether to enable TLS1.0. Default is disabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls10() {
        return software.amazon.jsii.Kernel.get(this, "attrTls10", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tls11: Whether to enable TLS1.1. Default is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls11() {
        return software.amazon.jsii.Kernel.get(this, "attrTls11", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tls12: Whether to enable TLS1.2. Default is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls12() {
        return software.amazon.jsii.Kernel.get(this, "attrTls12", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tls13: Whether to enable TLS1.3. Default is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls13() {
        return software.amazon.jsii.Kernel.get(this, "attrTls13", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.HttpsBasicConfiguration}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.HttpsBasicConfiguration> {
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
        private final com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps.Builder();
        }

        /**
         * Property siteId: Site ID, which can be obtained by calling the <a href="~~ListSites~~">ListSites</a> interface.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: Site ID, which can be obtained by calling the <a href="~~ListSites~~">ListSites</a> interface. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: Site ID, which can be obtained by calling the <a href="~~ListSites~~">ListSites</a> interface.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: Site ID, which can be obtained by calling the <a href="~~ListSites~~">ListSites</a> interface. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
         * <p>
         * @return {@code this}
         * @param ciphersuite Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom. This parameter is required.
         */
        public Builder ciphersuite(final java.lang.String ciphersuite) {
            this.props.ciphersuite(ciphersuite);
            return this;
        }
        /**
         * Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
         * <p>
         * @return {@code this}
         * @param ciphersuite Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom. This parameter is required.
         */
        public Builder ciphersuite(final com.aliyun.ros.cdk.core.IResolvable ciphersuite) {
            this.props.ciphersuite(ciphersuite);
            return this;
        }

        /**
         * Property ciphersuiteGroup: Cipher suite group.
         * <p>
         * Default is all cipher suites. Possible values:
         * <p>
         * <ul>
         * <li>all: All cipher suites.</li>
         * <li>strict: Strong cipher suites.</li>
         * <li>custom: Custom cipher suites.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ciphersuiteGroup Property ciphersuiteGroup: Cipher suite group. This parameter is required.
         */
        public Builder ciphersuiteGroup(final java.lang.String ciphersuiteGroup) {
            this.props.ciphersuiteGroup(ciphersuiteGroup);
            return this;
        }
        /**
         * Property ciphersuiteGroup: Cipher suite group.
         * <p>
         * Default is all cipher suites. Possible values:
         * <p>
         * <ul>
         * <li>all: All cipher suites.</li>
         * <li>strict: Strong cipher suites.</li>
         * <li>custom: Custom cipher suites.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ciphersuiteGroup Property ciphersuiteGroup: Cipher suite group. This parameter is required.
         */
        public Builder ciphersuiteGroup(final com.aliyun.ros.cdk.core.IResolvable ciphersuiteGroup) {
            this.props.ciphersuiteGroup(ciphersuiteGroup);
            return this;
        }

        /**
         * Property http2: Indicates whether HTTP2 is enabled.
         * <p>
         * Default is on. Possible values:
         * <p>
         * <ul>
         * <li>on: Enabled.</li>
         * <li>off: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param http2 Property http2: Indicates whether HTTP2 is enabled. This parameter is required.
         */
        public Builder http2(final java.lang.String http2) {
            this.props.http2(http2);
            return this;
        }
        /**
         * Property http2: Indicates whether HTTP2 is enabled.
         * <p>
         * Default is on. Possible values:
         * <p>
         * <ul>
         * <li>on: Enabled.</li>
         * <li>off: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param http2 Property http2: Indicates whether HTTP2 is enabled. This parameter is required.
         */
        public Builder http2(final com.aliyun.ros.cdk.core.IResolvable http2) {
            this.props.http2(http2);
            return this;
        }

        /**
         * Property http3: Whether to enable HTTP3, which is enabled by default.
         * <p>
         * The value can be:
         * <p>
         * <ul>
         * <li>on: Enabled.</li>
         * <li>off: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param http3 Property http3: Whether to enable HTTP3, which is enabled by default. This parameter is required.
         */
        public Builder http3(final java.lang.String http3) {
            this.props.http3(http3);
            return this;
        }
        /**
         * Property http3: Whether to enable HTTP3, which is enabled by default.
         * <p>
         * The value can be:
         * <p>
         * <ul>
         * <li>on: Enabled.</li>
         * <li>off: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param http3 Property http3: Whether to enable HTTP3, which is enabled by default. This parameter is required.
         */
        public Builder http3(final com.aliyun.ros.cdk.core.IResolvable http3) {
            this.props.http3(http3);
            return this;
        }

        /**
         * Property https: Whether to enable HTTPS.
         * <p>
         * Default is enabled. Possible values:
         * <p>
         * <ul>
         * <li>on: Enable.</li>
         * <li>off: Disable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param https Property https: Whether to enable HTTPS. This parameter is required.
         */
        public Builder https(final java.lang.String https) {
            this.props.https(https);
            return this;
        }
        /**
         * Property https: Whether to enable HTTPS.
         * <p>
         * Default is enabled. Possible values:
         * <p>
         * <ul>
         * <li>on: Enable.</li>
         * <li>off: Disable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param https Property https: Whether to enable HTTPS. This parameter is required.
         */
        public Builder https(final com.aliyun.ros.cdk.core.IResolvable https) {
            this.props.https(https);
            return this;
        }

        /**
         * Property ocspStapling: Indicates whether OCSP is enabled.
         * <p>
         * Default is off. Possible values:
         * <p>
         * <ul>
         * <li>on: Enabled.</li>
         * <li>off: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ocspStapling Property ocspStapling: Indicates whether OCSP is enabled. This parameter is required.
         */
        public Builder ocspStapling(final java.lang.String ocspStapling) {
            this.props.ocspStapling(ocspStapling);
            return this;
        }
        /**
         * Property ocspStapling: Indicates whether OCSP is enabled.
         * <p>
         * Default is off. Possible values:
         * <p>
         * <ul>
         * <li>on: Enabled.</li>
         * <li>off: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ocspStapling Property ocspStapling: Indicates whether OCSP is enabled. This parameter is required.
         */
        public Builder ocspStapling(final com.aliyun.ros.cdk.core.IResolvable ocspStapling) {
            this.props.ocspStapling(ocspStapling);
            return this;
        }

        /**
         * Property rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         * <p>
         * <ul>
         * <li>Match all incoming requests: value set to true</li>
         * <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         * </ul>
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
         * <p>
         * <ul>
         * <li>Match all incoming requests: value set to true</li>
         * <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         * </ul>
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
         * <p>
         * <ul>
         * <li>on: open.</li>
         * <li>off: close.</li>
         * </ul>
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
         * <p>
         * <ul>
         * <li>on: open.</li>
         * <li>off: close.</li>
         * </ul>
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
         * Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable.
         * <p>
         * @return {@code this}
         * @param tls10 Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable. This parameter is required.
         */
        public Builder tls10(final java.lang.String tls10) {
            this.props.tls10(tls10);
            return this;
        }
        /**
         * Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable.
         * <p>
         * @return {@code this}
         * @param tls10 Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable. This parameter is required.
         */
        public Builder tls10(final com.aliyun.ros.cdk.core.IResolvable tls10) {
            this.props.tls10(tls10);
            return this;
        }

        /**
         * Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * <p>
         * @return {@code this}
         * @param tls11 Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable. This parameter is required.
         */
        public Builder tls11(final java.lang.String tls11) {
            this.props.tls11(tls11);
            return this;
        }
        /**
         * Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * <p>
         * @return {@code this}
         * @param tls11 Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable. This parameter is required.
         */
        public Builder tls11(final com.aliyun.ros.cdk.core.IResolvable tls11) {
            this.props.tls11(tls11);
            return this;
        }

        /**
         * Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * <p>
         * @return {@code this}
         * @param tls12 Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable. This parameter is required.
         */
        public Builder tls12(final java.lang.String tls12) {
            this.props.tls12(tls12);
            return this;
        }
        /**
         * Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * <p>
         * @return {@code this}
         * @param tls12 Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable. This parameter is required.
         */
        public Builder tls12(final com.aliyun.ros.cdk.core.IResolvable tls12) {
            this.props.tls12(tls12);
            return this;
        }

        /**
         * Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * <p>
         * @return {@code this}
         * @param tls13 Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable. This parameter is required.
         */
        public Builder tls13(final java.lang.String tls13) {
            this.props.tls13(tls13);
            return this;
        }
        /**
         * Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * <p>
         * @return {@code this}
         * @param tls13 Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable. This parameter is required.
         */
        public Builder tls13(final com.aliyun.ros.cdk.core.IResolvable tls13) {
            this.props.tls13(tls13);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.HttpsBasicConfiguration}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.HttpsBasicConfiguration build() {
            return new com.aliyun.ros.cdk.esa.HttpsBasicConfiguration(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
