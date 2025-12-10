package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>HttpsBasicConfiguration</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.490Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.HttpsBasicConfigurationProps")
@software.amazon.jsii.Jsii.Proxy(HttpsBasicConfigurationProps.Jsii$Proxy.class)
public interface HttpsBasicConfigurationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property siteId: Site ID, which can be obtained by calling the <a href="~~ListSites~~">ListSites</a> interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCiphersuite() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCiphersuiteGroup() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttp2() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttp3() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttps() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOcspStapling() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return null;
    }

    /**
     * Property ruleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     * Property sequence: Order of rule execution.
     * <p>
     * The smaller the value, the higher the priority for execution.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return null;
    }

    /**
     * Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTls10() {
        return null;
    }

    /**
     * Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTls11() {
        return null;
    }

    /**
     * Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTls12() {
        return null;
    }

    /**
     * Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTls13() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HttpsBasicConfigurationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HttpsBasicConfigurationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HttpsBasicConfigurationProps> {
        java.lang.Object siteId;
        java.lang.Object ciphersuite;
        java.lang.Object ciphersuiteGroup;
        java.lang.Object http2;
        java.lang.Object http3;
        java.lang.Object https;
        java.lang.Object ocspStapling;
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object sequence;
        java.lang.Object tls10;
        java.lang.Object tls11;
        java.lang.Object tls12;
        java.lang.Object tls13;

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getSiteId}
         * @param siteId Property siteId: Site ID, which can be obtained by calling the <a href="~~ListSites~~">ListSites</a> interface. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getSiteId}
         * @param siteId Property siteId: Site ID, which can be obtained by calling the <a href="~~ListSites~~">ListSites</a> interface. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getCiphersuite}
         * @param ciphersuite Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
         * @return {@code this}
         */
        public Builder ciphersuite(java.lang.String ciphersuite) {
            this.ciphersuite = ciphersuite;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getCiphersuite}
         * @param ciphersuite Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
         * @return {@code this}
         */
        public Builder ciphersuite(com.aliyun.ros.cdk.core.IResolvable ciphersuite) {
            this.ciphersuite = ciphersuite;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getCiphersuiteGroup}
         * @param ciphersuiteGroup Property ciphersuiteGroup: Cipher suite group.
         *                         Default is all cipher suites. Possible values:
         *                         <p>
         *                         <ul>
         *                         <li>all: All cipher suites.</li>
         *                         <li>strict: Strong cipher suites.</li>
         *                         <li>custom: Custom cipher suites.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder ciphersuiteGroup(java.lang.String ciphersuiteGroup) {
            this.ciphersuiteGroup = ciphersuiteGroup;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getCiphersuiteGroup}
         * @param ciphersuiteGroup Property ciphersuiteGroup: Cipher suite group.
         *                         Default is all cipher suites. Possible values:
         *                         <p>
         *                         <ul>
         *                         <li>all: All cipher suites.</li>
         *                         <li>strict: Strong cipher suites.</li>
         *                         <li>custom: Custom cipher suites.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder ciphersuiteGroup(com.aliyun.ros.cdk.core.IResolvable ciphersuiteGroup) {
            this.ciphersuiteGroup = ciphersuiteGroup;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getHttp2}
         * @param http2 Property http2: Indicates whether HTTP2 is enabled.
         *              Default is on. Possible values:
         *              <p>
         *              <ul>
         *              <li>on: Enabled.</li>
         *              <li>off: Disabled.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder http2(java.lang.String http2) {
            this.http2 = http2;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getHttp2}
         * @param http2 Property http2: Indicates whether HTTP2 is enabled.
         *              Default is on. Possible values:
         *              <p>
         *              <ul>
         *              <li>on: Enabled.</li>
         *              <li>off: Disabled.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder http2(com.aliyun.ros.cdk.core.IResolvable http2) {
            this.http2 = http2;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getHttp3}
         * @param http3 Property http3: Whether to enable HTTP3, which is enabled by default.
         *              The value can be:
         *              <p>
         *              <ul>
         *              <li>on: Enabled.</li>
         *              <li>off: Disabled.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder http3(java.lang.String http3) {
            this.http3 = http3;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getHttp3}
         * @param http3 Property http3: Whether to enable HTTP3, which is enabled by default.
         *              The value can be:
         *              <p>
         *              <ul>
         *              <li>on: Enabled.</li>
         *              <li>off: Disabled.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder http3(com.aliyun.ros.cdk.core.IResolvable http3) {
            this.http3 = http3;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getHttps}
         * @param https Property https: Whether to enable HTTPS.
         *              Default is enabled. Possible values:
         *              <p>
         *              <ul>
         *              <li>on: Enable.</li>
         *              <li>off: Disable.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder https(java.lang.String https) {
            this.https = https;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getHttps}
         * @param https Property https: Whether to enable HTTPS.
         *              Default is enabled. Possible values:
         *              <p>
         *              <ul>
         *              <li>on: Enable.</li>
         *              <li>off: Disable.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder https(com.aliyun.ros.cdk.core.IResolvable https) {
            this.https = https;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getOcspStapling}
         * @param ocspStapling Property ocspStapling: Indicates whether OCSP is enabled.
         *                     Default is off. Possible values:
         *                     <p>
         *                     <ul>
         *                     <li>on: Enabled.</li>
         *                     <li>off: Disabled.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder ocspStapling(java.lang.String ocspStapling) {
            this.ocspStapling = ocspStapling;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getOcspStapling}
         * @param ocspStapling Property ocspStapling: Indicates whether OCSP is enabled.
         *                     Default is off. Possible values:
         *                     <p>
         *                     <ul>
         *                     <li>on: Enabled.</li>
         *                     <li>off: Disabled.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder ocspStapling(com.aliyun.ros.cdk.core.IResolvable ocspStapling) {
            this.ocspStapling = ocspStapling;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li>on: open.</li>
         *                   <li>off: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li>on: open.</li>
         *                   <li>off: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(java.lang.Number sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getTls10}
         * @param tls10 Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable.
         * @return {@code this}
         */
        public Builder tls10(java.lang.String tls10) {
            this.tls10 = tls10;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getTls10}
         * @param tls10 Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable.
         * @return {@code this}
         */
        public Builder tls10(com.aliyun.ros.cdk.core.IResolvable tls10) {
            this.tls10 = tls10;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getTls11}
         * @param tls11 Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * @return {@code this}
         */
        public Builder tls11(java.lang.String tls11) {
            this.tls11 = tls11;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getTls11}
         * @param tls11 Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * @return {@code this}
         */
        public Builder tls11(com.aliyun.ros.cdk.core.IResolvable tls11) {
            this.tls11 = tls11;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getTls12}
         * @param tls12 Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * @return {@code this}
         */
        public Builder tls12(java.lang.String tls12) {
            this.tls12 = tls12;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getTls12}
         * @param tls12 Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * @return {@code this}
         */
        public Builder tls12(com.aliyun.ros.cdk.core.IResolvable tls12) {
            this.tls12 = tls12;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getTls13}
         * @param tls13 Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * @return {@code this}
         */
        public Builder tls13(java.lang.String tls13) {
            this.tls13 = tls13;
            return this;
        }

        /**
         * Sets the value of {@link HttpsBasicConfigurationProps#getTls13}
         * @param tls13 Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable.
         * @return {@code this}
         */
        public Builder tls13(com.aliyun.ros.cdk.core.IResolvable tls13) {
            this.tls13 = tls13;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HttpsBasicConfigurationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HttpsBasicConfigurationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HttpsBasicConfigurationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HttpsBasicConfigurationProps {
        private final java.lang.Object siteId;
        private final java.lang.Object ciphersuite;
        private final java.lang.Object ciphersuiteGroup;
        private final java.lang.Object http2;
        private final java.lang.Object http3;
        private final java.lang.Object https;
        private final java.lang.Object ocspStapling;
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object sequence;
        private final java.lang.Object tls10;
        private final java.lang.Object tls11;
        private final java.lang.Object tls12;
        private final java.lang.Object tls13;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ciphersuite = software.amazon.jsii.Kernel.get(this, "ciphersuite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ciphersuiteGroup = software.amazon.jsii.Kernel.get(this, "ciphersuiteGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.http2 = software.amazon.jsii.Kernel.get(this, "http2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.http3 = software.amazon.jsii.Kernel.get(this, "http3", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.https = software.amazon.jsii.Kernel.get(this, "https", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ocspStapling = software.amazon.jsii.Kernel.get(this, "ocspStapling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sequence = software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tls10 = software.amazon.jsii.Kernel.get(this, "tls10", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tls11 = software.amazon.jsii.Kernel.get(this, "tls11", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tls12 = software.amazon.jsii.Kernel.get(this, "tls12", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tls13 = software.amazon.jsii.Kernel.get(this, "tls13", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.ciphersuite = builder.ciphersuite;
            this.ciphersuiteGroup = builder.ciphersuiteGroup;
            this.http2 = builder.http2;
            this.http3 = builder.http3;
            this.https = builder.https;
            this.ocspStapling = builder.ocspStapling;
            this.rule = builder.rule;
            this.ruleEnable = builder.ruleEnable;
            this.ruleName = builder.ruleName;
            this.sequence = builder.sequence;
            this.tls10 = builder.tls10;
            this.tls11 = builder.tls11;
            this.tls12 = builder.tls12;
            this.tls13 = builder.tls13;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getCiphersuite() {
            return this.ciphersuite;
        }

        @Override
        public final java.lang.Object getCiphersuiteGroup() {
            return this.ciphersuiteGroup;
        }

        @Override
        public final java.lang.Object getHttp2() {
            return this.http2;
        }

        @Override
        public final java.lang.Object getHttp3() {
            return this.http3;
        }

        @Override
        public final java.lang.Object getHttps() {
            return this.https;
        }

        @Override
        public final java.lang.Object getOcspStapling() {
            return this.ocspStapling;
        }

        @Override
        public final java.lang.Object getRule() {
            return this.rule;
        }

        @Override
        public final java.lang.Object getRuleEnable() {
            return this.ruleEnable;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getSequence() {
            return this.sequence;
        }

        @Override
        public final java.lang.Object getTls10() {
            return this.tls10;
        }

        @Override
        public final java.lang.Object getTls11() {
            return this.tls11;
        }

        @Override
        public final java.lang.Object getTls12() {
            return this.tls12;
        }

        @Override
        public final java.lang.Object getTls13() {
            return this.tls13;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getCiphersuite() != null) {
                data.set("ciphersuite", om.valueToTree(this.getCiphersuite()));
            }
            if (this.getCiphersuiteGroup() != null) {
                data.set("ciphersuiteGroup", om.valueToTree(this.getCiphersuiteGroup()));
            }
            if (this.getHttp2() != null) {
                data.set("http2", om.valueToTree(this.getHttp2()));
            }
            if (this.getHttp3() != null) {
                data.set("http3", om.valueToTree(this.getHttp3()));
            }
            if (this.getHttps() != null) {
                data.set("https", om.valueToTree(this.getHttps()));
            }
            if (this.getOcspStapling() != null) {
                data.set("ocspStapling", om.valueToTree(this.getOcspStapling()));
            }
            if (this.getRule() != null) {
                data.set("rule", om.valueToTree(this.getRule()));
            }
            if (this.getRuleEnable() != null) {
                data.set("ruleEnable", om.valueToTree(this.getRuleEnable()));
            }
            if (this.getRuleName() != null) {
                data.set("ruleName", om.valueToTree(this.getRuleName()));
            }
            if (this.getSequence() != null) {
                data.set("sequence", om.valueToTree(this.getSequence()));
            }
            if (this.getTls10() != null) {
                data.set("tls10", om.valueToTree(this.getTls10()));
            }
            if (this.getTls11() != null) {
                data.set("tls11", om.valueToTree(this.getTls11()));
            }
            if (this.getTls12() != null) {
                data.set("tls12", om.valueToTree(this.getTls12()));
            }
            if (this.getTls13() != null) {
                data.set("tls13", om.valueToTree(this.getTls13()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.HttpsBasicConfigurationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HttpsBasicConfigurationProps.Jsii$Proxy that = (HttpsBasicConfigurationProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            if (this.ciphersuite != null ? !this.ciphersuite.equals(that.ciphersuite) : that.ciphersuite != null) return false;
            if (this.ciphersuiteGroup != null ? !this.ciphersuiteGroup.equals(that.ciphersuiteGroup) : that.ciphersuiteGroup != null) return false;
            if (this.http2 != null ? !this.http2.equals(that.http2) : that.http2 != null) return false;
            if (this.http3 != null ? !this.http3.equals(that.http3) : that.http3 != null) return false;
            if (this.https != null ? !this.https.equals(that.https) : that.https != null) return false;
            if (this.ocspStapling != null ? !this.ocspStapling.equals(that.ocspStapling) : that.ocspStapling != null) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            if (this.ruleEnable != null ? !this.ruleEnable.equals(that.ruleEnable) : that.ruleEnable != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.sequence != null ? !this.sequence.equals(that.sequence) : that.sequence != null) return false;
            if (this.tls10 != null ? !this.tls10.equals(that.tls10) : that.tls10 != null) return false;
            if (this.tls11 != null ? !this.tls11.equals(that.tls11) : that.tls11 != null) return false;
            if (this.tls12 != null ? !this.tls12.equals(that.tls12) : that.tls12 != null) return false;
            return this.tls13 != null ? this.tls13.equals(that.tls13) : that.tls13 == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.ciphersuite != null ? this.ciphersuite.hashCode() : 0);
            result = 31 * result + (this.ciphersuiteGroup != null ? this.ciphersuiteGroup.hashCode() : 0);
            result = 31 * result + (this.http2 != null ? this.http2.hashCode() : 0);
            result = 31 * result + (this.http3 != null ? this.http3.hashCode() : 0);
            result = 31 * result + (this.https != null ? this.https.hashCode() : 0);
            result = 31 * result + (this.ocspStapling != null ? this.ocspStapling.hashCode() : 0);
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.ruleEnable != null ? this.ruleEnable.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.sequence != null ? this.sequence.hashCode() : 0);
            result = 31 * result + (this.tls10 != null ? this.tls10.hashCode() : 0);
            result = 31 * result + (this.tls11 != null ? this.tls11.hashCode() : 0);
            result = 31 * result + (this.tls12 != null ? this.tls12.hashCode() : 0);
            result = 31 * result + (this.tls13 != null ? this.tls13.hashCode() : 0);
            return result;
        }
    }
}
