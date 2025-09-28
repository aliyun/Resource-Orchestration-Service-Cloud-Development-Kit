package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>CompressionRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.387Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.CompressionRuleProps")
@software.amazon.jsii.Jsii.Proxy(CompressionRuleProps.Jsii$Proxy.class)
public interface CompressionRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property brotli: Brotli compression.
     * <p>
     * Value range:
     * on: Enable.
     * off: Disable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBrotli() {
        return null;
    }

    /**
     * Property gzip: Gzip compression.
     * <p>
     * Value range:
     * on: Enable.
     * off: Disable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGzip() {
        return null;
    }

    /**
     * Property paymentType: Payment Type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
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
     * on: Enable.
     * off: Disable.
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
     * Property siteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
    }

    /**
     * Property zstd: Zstd compression.
     * <p>
     * Value range:
     * on: Enable.
     * off: Disable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZstd() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CompressionRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CompressionRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CompressionRuleProps> {
        java.lang.Object siteId;
        java.lang.Object brotli;
        java.lang.Object gzip;
        java.lang.Object paymentType;
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object sequence;
        java.lang.Object siteVersion;
        java.lang.Object zstd;

        /**
         * Sets the value of {@link CompressionRuleProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getBrotli}
         * @param brotli Property brotli: Brotli compression.
         *               Value range:
         *               on: Enable.
         *               off: Disable.
         * @return {@code this}
         */
        public Builder brotli(java.lang.String brotli) {
            this.brotli = brotli;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getBrotli}
         * @param brotli Property brotli: Brotli compression.
         *               Value range:
         *               on: Enable.
         *               off: Disable.
         * @return {@code this}
         */
        public Builder brotli(com.aliyun.ros.cdk.core.IResolvable brotli) {
            this.brotli = brotli;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getGzip}
         * @param gzip Property gzip: Gzip compression.
         *             Value range:
         *             on: Enable.
         *             off: Disable.
         * @return {@code this}
         */
        public Builder gzip(java.lang.String gzip) {
            this.gzip = gzip;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getGzip}
         * @param gzip Property gzip: Gzip compression.
         *             Value range:
         *             on: Enable.
         *             off: Disable.
         * @return {@code this}
         */
        public Builder gzip(com.aliyun.ros.cdk.core.IResolvable gzip) {
            this.gzip = gzip;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getPaymentType}
         * @param paymentType Property paymentType: Payment Type.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getPaymentType}
         * @param paymentType Property paymentType: Payment Type.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getRule}
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
         * Sets the value of {@link CompressionRuleProps#getRule}
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
         * Sets the value of {@link CompressionRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   on: Enable.
         *                   off: Disable.
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   on: Enable.
         *                   off: Disable.
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(java.lang.Number sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getZstd}
         * @param zstd Property zstd: Zstd compression.
         *             Value range:
         *             on: Enable.
         *             off: Disable.
         * @return {@code this}
         */
        public Builder zstd(java.lang.String zstd) {
            this.zstd = zstd;
            return this;
        }

        /**
         * Sets the value of {@link CompressionRuleProps#getZstd}
         * @param zstd Property zstd: Zstd compression.
         *             Value range:
         *             on: Enable.
         *             off: Disable.
         * @return {@code this}
         */
        public Builder zstd(com.aliyun.ros.cdk.core.IResolvable zstd) {
            this.zstd = zstd;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CompressionRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CompressionRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CompressionRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CompressionRuleProps {
        private final java.lang.Object siteId;
        private final java.lang.Object brotli;
        private final java.lang.Object gzip;
        private final java.lang.Object paymentType;
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object sequence;
        private final java.lang.Object siteVersion;
        private final java.lang.Object zstd;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.brotli = software.amazon.jsii.Kernel.get(this, "brotli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gzip = software.amazon.jsii.Kernel.get(this, "gzip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sequence = software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteVersion = software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zstd = software.amazon.jsii.Kernel.get(this, "zstd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.brotli = builder.brotli;
            this.gzip = builder.gzip;
            this.paymentType = builder.paymentType;
            this.rule = builder.rule;
            this.ruleEnable = builder.ruleEnable;
            this.ruleName = builder.ruleName;
            this.sequence = builder.sequence;
            this.siteVersion = builder.siteVersion;
            this.zstd = builder.zstd;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getBrotli() {
            return this.brotli;
        }

        @Override
        public final java.lang.Object getGzip() {
            return this.gzip;
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
        public final java.lang.Object getZstd() {
            return this.zstd;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getBrotli() != null) {
                data.set("brotli", om.valueToTree(this.getBrotli()));
            }
            if (this.getGzip() != null) {
                data.set("gzip", om.valueToTree(this.getGzip()));
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
            if (this.getZstd() != null) {
                data.set("zstd", om.valueToTree(this.getZstd()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.CompressionRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CompressionRuleProps.Jsii$Proxy that = (CompressionRuleProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            if (this.brotli != null ? !this.brotli.equals(that.brotli) : that.brotli != null) return false;
            if (this.gzip != null ? !this.gzip.equals(that.gzip) : that.gzip != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            if (this.ruleEnable != null ? !this.ruleEnable.equals(that.ruleEnable) : that.ruleEnable != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.sequence != null ? !this.sequence.equals(that.sequence) : that.sequence != null) return false;
            if (this.siteVersion != null ? !this.siteVersion.equals(that.siteVersion) : that.siteVersion != null) return false;
            return this.zstd != null ? this.zstd.equals(that.zstd) : that.zstd == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.brotli != null ? this.brotli.hashCode() : 0);
            result = 31 * result + (this.gzip != null ? this.gzip.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.ruleEnable != null ? this.ruleEnable.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.sequence != null ? this.sequence.hashCode() : 0);
            result = 31 * result + (this.siteVersion != null ? this.siteVersion.hashCode() : 0);
            result = 31 * result + (this.zstd != null ? this.zstd.hashCode() : 0);
            return result;
        }
    }
}
