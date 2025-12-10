package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosHttpsApplicationConfiguration</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.639Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosHttpsApplicationConfigurationProps")
@software.amazon.jsii.Jsii.Proxy(RosHttpsApplicationConfigurationProps.Jsii$Proxy.class)
public interface RosHttpsApplicationConfigurationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAltSvc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAltSvcClear() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAltSvcMa() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAltSvcPersist() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHsts() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHstsIncludeSubdomains() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHstsMaxAge() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHstsPreload() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsForce() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsForceCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsNoSniDeny() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsSniVerify() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsSniWhitelist() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosHttpsApplicationConfigurationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosHttpsApplicationConfigurationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosHttpsApplicationConfigurationProps> {
        java.lang.Object siteId;
        java.lang.Object altSvc;
        java.lang.Object altSvcClear;
        java.lang.Object altSvcMa;
        java.lang.Object altSvcPersist;
        java.lang.Object hsts;
        java.lang.Object hstsIncludeSubdomains;
        java.lang.Object hstsMaxAge;
        java.lang.Object hstsPreload;
        java.lang.Object httpsForce;
        java.lang.Object httpsForceCode;
        java.lang.Object httpsNoSniDeny;
        java.lang.Object httpsSniVerify;
        java.lang.Object httpsSniWhitelist;
        java.lang.Object paymentType;
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object sequence;
        java.lang.Object siteVersion;

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getAltSvc}
         * @param altSvc the value to be set.
         * @return {@code this}
         */
        public Builder altSvc(java.lang.String altSvc) {
            this.altSvc = altSvc;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getAltSvc}
         * @param altSvc the value to be set.
         * @return {@code this}
         */
        public Builder altSvc(com.aliyun.ros.cdk.core.IResolvable altSvc) {
            this.altSvc = altSvc;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getAltSvcClear}
         * @param altSvcClear the value to be set.
         * @return {@code this}
         */
        public Builder altSvcClear(java.lang.String altSvcClear) {
            this.altSvcClear = altSvcClear;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getAltSvcClear}
         * @param altSvcClear the value to be set.
         * @return {@code this}
         */
        public Builder altSvcClear(com.aliyun.ros.cdk.core.IResolvable altSvcClear) {
            this.altSvcClear = altSvcClear;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getAltSvcMa}
         * @param altSvcMa the value to be set.
         * @return {@code this}
         */
        public Builder altSvcMa(java.lang.String altSvcMa) {
            this.altSvcMa = altSvcMa;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getAltSvcMa}
         * @param altSvcMa the value to be set.
         * @return {@code this}
         */
        public Builder altSvcMa(com.aliyun.ros.cdk.core.IResolvable altSvcMa) {
            this.altSvcMa = altSvcMa;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getAltSvcPersist}
         * @param altSvcPersist the value to be set.
         * @return {@code this}
         */
        public Builder altSvcPersist(java.lang.String altSvcPersist) {
            this.altSvcPersist = altSvcPersist;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getAltSvcPersist}
         * @param altSvcPersist the value to be set.
         * @return {@code this}
         */
        public Builder altSvcPersist(com.aliyun.ros.cdk.core.IResolvable altSvcPersist) {
            this.altSvcPersist = altSvcPersist;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHsts}
         * @param hsts the value to be set.
         * @return {@code this}
         */
        public Builder hsts(java.lang.String hsts) {
            this.hsts = hsts;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHsts}
         * @param hsts the value to be set.
         * @return {@code this}
         */
        public Builder hsts(com.aliyun.ros.cdk.core.IResolvable hsts) {
            this.hsts = hsts;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHstsIncludeSubdomains}
         * @param hstsIncludeSubdomains the value to be set.
         * @return {@code this}
         */
        public Builder hstsIncludeSubdomains(java.lang.String hstsIncludeSubdomains) {
            this.hstsIncludeSubdomains = hstsIncludeSubdomains;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHstsIncludeSubdomains}
         * @param hstsIncludeSubdomains the value to be set.
         * @return {@code this}
         */
        public Builder hstsIncludeSubdomains(com.aliyun.ros.cdk.core.IResolvable hstsIncludeSubdomains) {
            this.hstsIncludeSubdomains = hstsIncludeSubdomains;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHstsMaxAge}
         * @param hstsMaxAge the value to be set.
         * @return {@code this}
         */
        public Builder hstsMaxAge(java.lang.String hstsMaxAge) {
            this.hstsMaxAge = hstsMaxAge;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHstsMaxAge}
         * @param hstsMaxAge the value to be set.
         * @return {@code this}
         */
        public Builder hstsMaxAge(com.aliyun.ros.cdk.core.IResolvable hstsMaxAge) {
            this.hstsMaxAge = hstsMaxAge;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHstsPreload}
         * @param hstsPreload the value to be set.
         * @return {@code this}
         */
        public Builder hstsPreload(java.lang.String hstsPreload) {
            this.hstsPreload = hstsPreload;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHstsPreload}
         * @param hstsPreload the value to be set.
         * @return {@code this}
         */
        public Builder hstsPreload(com.aliyun.ros.cdk.core.IResolvable hstsPreload) {
            this.hstsPreload = hstsPreload;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsForce}
         * @param httpsForce the value to be set.
         * @return {@code this}
         */
        public Builder httpsForce(java.lang.String httpsForce) {
            this.httpsForce = httpsForce;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsForce}
         * @param httpsForce the value to be set.
         * @return {@code this}
         */
        public Builder httpsForce(com.aliyun.ros.cdk.core.IResolvable httpsForce) {
            this.httpsForce = httpsForce;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsForceCode}
         * @param httpsForceCode the value to be set.
         * @return {@code this}
         */
        public Builder httpsForceCode(java.lang.String httpsForceCode) {
            this.httpsForceCode = httpsForceCode;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsForceCode}
         * @param httpsForceCode the value to be set.
         * @return {@code this}
         */
        public Builder httpsForceCode(com.aliyun.ros.cdk.core.IResolvable httpsForceCode) {
            this.httpsForceCode = httpsForceCode;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsNoSniDeny}
         * @param httpsNoSniDeny the value to be set.
         * @return {@code this}
         */
        public Builder httpsNoSniDeny(java.lang.String httpsNoSniDeny) {
            this.httpsNoSniDeny = httpsNoSniDeny;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsNoSniDeny}
         * @param httpsNoSniDeny the value to be set.
         * @return {@code this}
         */
        public Builder httpsNoSniDeny(com.aliyun.ros.cdk.core.IResolvable httpsNoSniDeny) {
            this.httpsNoSniDeny = httpsNoSniDeny;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsSniVerify}
         * @param httpsSniVerify the value to be set.
         * @return {@code this}
         */
        public Builder httpsSniVerify(java.lang.String httpsSniVerify) {
            this.httpsSniVerify = httpsSniVerify;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsSniVerify}
         * @param httpsSniVerify the value to be set.
         * @return {@code this}
         */
        public Builder httpsSniVerify(com.aliyun.ros.cdk.core.IResolvable httpsSniVerify) {
            this.httpsSniVerify = httpsSniVerify;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsSniWhitelist}
         * @param httpsSniWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder httpsSniWhitelist(java.lang.String httpsSniWhitelist) {
            this.httpsSniWhitelist = httpsSniWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getHttpsSniWhitelist}
         * @param httpsSniWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder httpsSniWhitelist(com.aliyun.ros.cdk.core.IResolvable httpsSniWhitelist) {
            this.httpsSniWhitelist = httpsSniWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getRuleEnable}
         * @param ruleEnable the value to be set.
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getRuleEnable}
         * @param ruleEnable the value to be set.
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getSequence}
         * @param sequence the value to be set.
         * @return {@code this}
         */
        public Builder sequence(java.lang.Number sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getSequence}
         * @param sequence the value to be set.
         * @return {@code this}
         */
        public Builder sequence(com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getSiteVersion}
         * @param siteVersion the value to be set.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosHttpsApplicationConfigurationProps#getSiteVersion}
         * @param siteVersion the value to be set.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosHttpsApplicationConfigurationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosHttpsApplicationConfigurationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosHttpsApplicationConfigurationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosHttpsApplicationConfigurationProps {
        private final java.lang.Object siteId;
        private final java.lang.Object altSvc;
        private final java.lang.Object altSvcClear;
        private final java.lang.Object altSvcMa;
        private final java.lang.Object altSvcPersist;
        private final java.lang.Object hsts;
        private final java.lang.Object hstsIncludeSubdomains;
        private final java.lang.Object hstsMaxAge;
        private final java.lang.Object hstsPreload;
        private final java.lang.Object httpsForce;
        private final java.lang.Object httpsForceCode;
        private final java.lang.Object httpsNoSniDeny;
        private final java.lang.Object httpsSniVerify;
        private final java.lang.Object httpsSniWhitelist;
        private final java.lang.Object paymentType;
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object sequence;
        private final java.lang.Object siteVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.altSvc = software.amazon.jsii.Kernel.get(this, "altSvc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.altSvcClear = software.amazon.jsii.Kernel.get(this, "altSvcClear", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.altSvcMa = software.amazon.jsii.Kernel.get(this, "altSvcMa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.altSvcPersist = software.amazon.jsii.Kernel.get(this, "altSvcPersist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hsts = software.amazon.jsii.Kernel.get(this, "hsts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hstsIncludeSubdomains = software.amazon.jsii.Kernel.get(this, "hstsIncludeSubdomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hstsMaxAge = software.amazon.jsii.Kernel.get(this, "hstsMaxAge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hstsPreload = software.amazon.jsii.Kernel.get(this, "hstsPreload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsForce = software.amazon.jsii.Kernel.get(this, "httpsForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsForceCode = software.amazon.jsii.Kernel.get(this, "httpsForceCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsNoSniDeny = software.amazon.jsii.Kernel.get(this, "httpsNoSniDeny", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsSniVerify = software.amazon.jsii.Kernel.get(this, "httpsSniVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsSniWhitelist = software.amazon.jsii.Kernel.get(this, "httpsSniWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sequence = software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteVersion = software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.altSvc = builder.altSvc;
            this.altSvcClear = builder.altSvcClear;
            this.altSvcMa = builder.altSvcMa;
            this.altSvcPersist = builder.altSvcPersist;
            this.hsts = builder.hsts;
            this.hstsIncludeSubdomains = builder.hstsIncludeSubdomains;
            this.hstsMaxAge = builder.hstsMaxAge;
            this.hstsPreload = builder.hstsPreload;
            this.httpsForce = builder.httpsForce;
            this.httpsForceCode = builder.httpsForceCode;
            this.httpsNoSniDeny = builder.httpsNoSniDeny;
            this.httpsSniVerify = builder.httpsSniVerify;
            this.httpsSniWhitelist = builder.httpsSniWhitelist;
            this.paymentType = builder.paymentType;
            this.rule = builder.rule;
            this.ruleEnable = builder.ruleEnable;
            this.ruleName = builder.ruleName;
            this.sequence = builder.sequence;
            this.siteVersion = builder.siteVersion;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getAltSvc() {
            return this.altSvc;
        }

        @Override
        public final java.lang.Object getAltSvcClear() {
            return this.altSvcClear;
        }

        @Override
        public final java.lang.Object getAltSvcMa() {
            return this.altSvcMa;
        }

        @Override
        public final java.lang.Object getAltSvcPersist() {
            return this.altSvcPersist;
        }

        @Override
        public final java.lang.Object getHsts() {
            return this.hsts;
        }

        @Override
        public final java.lang.Object getHstsIncludeSubdomains() {
            return this.hstsIncludeSubdomains;
        }

        @Override
        public final java.lang.Object getHstsMaxAge() {
            return this.hstsMaxAge;
        }

        @Override
        public final java.lang.Object getHstsPreload() {
            return this.hstsPreload;
        }

        @Override
        public final java.lang.Object getHttpsForce() {
            return this.httpsForce;
        }

        @Override
        public final java.lang.Object getHttpsForceCode() {
            return this.httpsForceCode;
        }

        @Override
        public final java.lang.Object getHttpsNoSniDeny() {
            return this.httpsNoSniDeny;
        }

        @Override
        public final java.lang.Object getHttpsSniVerify() {
            return this.httpsSniVerify;
        }

        @Override
        public final java.lang.Object getHttpsSniWhitelist() {
            return this.httpsSniWhitelist;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
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
        public final java.lang.Object getSiteVersion() {
            return this.siteVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getAltSvc() != null) {
                data.set("altSvc", om.valueToTree(this.getAltSvc()));
            }
            if (this.getAltSvcClear() != null) {
                data.set("altSvcClear", om.valueToTree(this.getAltSvcClear()));
            }
            if (this.getAltSvcMa() != null) {
                data.set("altSvcMa", om.valueToTree(this.getAltSvcMa()));
            }
            if (this.getAltSvcPersist() != null) {
                data.set("altSvcPersist", om.valueToTree(this.getAltSvcPersist()));
            }
            if (this.getHsts() != null) {
                data.set("hsts", om.valueToTree(this.getHsts()));
            }
            if (this.getHstsIncludeSubdomains() != null) {
                data.set("hstsIncludeSubdomains", om.valueToTree(this.getHstsIncludeSubdomains()));
            }
            if (this.getHstsMaxAge() != null) {
                data.set("hstsMaxAge", om.valueToTree(this.getHstsMaxAge()));
            }
            if (this.getHstsPreload() != null) {
                data.set("hstsPreload", om.valueToTree(this.getHstsPreload()));
            }
            if (this.getHttpsForce() != null) {
                data.set("httpsForce", om.valueToTree(this.getHttpsForce()));
            }
            if (this.getHttpsForceCode() != null) {
                data.set("httpsForceCode", om.valueToTree(this.getHttpsForceCode()));
            }
            if (this.getHttpsNoSniDeny() != null) {
                data.set("httpsNoSniDeny", om.valueToTree(this.getHttpsNoSniDeny()));
            }
            if (this.getHttpsSniVerify() != null) {
                data.set("httpsSniVerify", om.valueToTree(this.getHttpsSniVerify()));
            }
            if (this.getHttpsSniWhitelist() != null) {
                data.set("httpsSniWhitelist", om.valueToTree(this.getHttpsSniWhitelist()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
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
            if (this.getSiteVersion() != null) {
                data.set("siteVersion", om.valueToTree(this.getSiteVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosHttpsApplicationConfigurationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosHttpsApplicationConfigurationProps.Jsii$Proxy that = (RosHttpsApplicationConfigurationProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            if (this.altSvc != null ? !this.altSvc.equals(that.altSvc) : that.altSvc != null) return false;
            if (this.altSvcClear != null ? !this.altSvcClear.equals(that.altSvcClear) : that.altSvcClear != null) return false;
            if (this.altSvcMa != null ? !this.altSvcMa.equals(that.altSvcMa) : that.altSvcMa != null) return false;
            if (this.altSvcPersist != null ? !this.altSvcPersist.equals(that.altSvcPersist) : that.altSvcPersist != null) return false;
            if (this.hsts != null ? !this.hsts.equals(that.hsts) : that.hsts != null) return false;
            if (this.hstsIncludeSubdomains != null ? !this.hstsIncludeSubdomains.equals(that.hstsIncludeSubdomains) : that.hstsIncludeSubdomains != null) return false;
            if (this.hstsMaxAge != null ? !this.hstsMaxAge.equals(that.hstsMaxAge) : that.hstsMaxAge != null) return false;
            if (this.hstsPreload != null ? !this.hstsPreload.equals(that.hstsPreload) : that.hstsPreload != null) return false;
            if (this.httpsForce != null ? !this.httpsForce.equals(that.httpsForce) : that.httpsForce != null) return false;
            if (this.httpsForceCode != null ? !this.httpsForceCode.equals(that.httpsForceCode) : that.httpsForceCode != null) return false;
            if (this.httpsNoSniDeny != null ? !this.httpsNoSniDeny.equals(that.httpsNoSniDeny) : that.httpsNoSniDeny != null) return false;
            if (this.httpsSniVerify != null ? !this.httpsSniVerify.equals(that.httpsSniVerify) : that.httpsSniVerify != null) return false;
            if (this.httpsSniWhitelist != null ? !this.httpsSniWhitelist.equals(that.httpsSniWhitelist) : that.httpsSniWhitelist != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            if (this.ruleEnable != null ? !this.ruleEnable.equals(that.ruleEnable) : that.ruleEnable != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.sequence != null ? !this.sequence.equals(that.sequence) : that.sequence != null) return false;
            return this.siteVersion != null ? this.siteVersion.equals(that.siteVersion) : that.siteVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.altSvc != null ? this.altSvc.hashCode() : 0);
            result = 31 * result + (this.altSvcClear != null ? this.altSvcClear.hashCode() : 0);
            result = 31 * result + (this.altSvcMa != null ? this.altSvcMa.hashCode() : 0);
            result = 31 * result + (this.altSvcPersist != null ? this.altSvcPersist.hashCode() : 0);
            result = 31 * result + (this.hsts != null ? this.hsts.hashCode() : 0);
            result = 31 * result + (this.hstsIncludeSubdomains != null ? this.hstsIncludeSubdomains.hashCode() : 0);
            result = 31 * result + (this.hstsMaxAge != null ? this.hstsMaxAge.hashCode() : 0);
            result = 31 * result + (this.hstsPreload != null ? this.hstsPreload.hashCode() : 0);
            result = 31 * result + (this.httpsForce != null ? this.httpsForce.hashCode() : 0);
            result = 31 * result + (this.httpsForceCode != null ? this.httpsForceCode.hashCode() : 0);
            result = 31 * result + (this.httpsNoSniDeny != null ? this.httpsNoSniDeny.hashCode() : 0);
            result = 31 * result + (this.httpsSniVerify != null ? this.httpsSniVerify.hashCode() : 0);
            result = 31 * result + (this.httpsSniWhitelist != null ? this.httpsSniWhitelist.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.ruleEnable != null ? this.ruleEnable.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.sequence != null ? this.sequence.hashCode() : 0);
            result = 31 * result + (this.siteVersion != null ? this.siteVersion.hashCode() : 0);
            return result;
        }
    }
}
