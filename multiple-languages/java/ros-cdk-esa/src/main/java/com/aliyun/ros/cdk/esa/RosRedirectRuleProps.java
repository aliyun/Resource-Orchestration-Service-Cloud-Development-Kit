package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosRedirectRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-redirectrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.587Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosRedirectRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosRedirectRuleProps.Jsii$Proxy.class)
public interface RosRedirectRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReserveQueryString();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStatusCode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetUrl();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRedirectRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRedirectRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRedirectRuleProps> {
        java.lang.Object reserveQueryString;
        java.lang.Object siteId;
        java.lang.Object statusCode;
        java.lang.Object targetUrl;
        java.lang.Object type;
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object siteVersion;

        /**
         * Sets the value of {@link RosRedirectRuleProps#getReserveQueryString}
         * @param reserveQueryString the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder reserveQueryString(java.lang.String reserveQueryString) {
            this.reserveQueryString = reserveQueryString;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getReserveQueryString}
         * @param reserveQueryString the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder reserveQueryString(com.aliyun.ros.cdk.core.IResolvable reserveQueryString) {
            this.reserveQueryString = reserveQueryString;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getStatusCode}
         * @param statusCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder statusCode(java.lang.Number statusCode) {
            this.statusCode = statusCode;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getStatusCode}
         * @param statusCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder statusCode(com.aliyun.ros.cdk.core.IResolvable statusCode) {
            this.statusCode = statusCode;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getTargetUrl}
         * @param targetUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetUrl(java.lang.String targetUrl) {
            this.targetUrl = targetUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getTargetUrl}
         * @param targetUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetUrl(com.aliyun.ros.cdk.core.IResolvable targetUrl) {
            this.targetUrl = targetUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getRuleEnable}
         * @param ruleEnable the value to be set.
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getRuleEnable}
         * @param ruleEnable the value to be set.
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getSiteVersion}
         * @param siteVersion the value to be set.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosRedirectRuleProps#getSiteVersion}
         * @param siteVersion the value to be set.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRedirectRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRedirectRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRedirectRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRedirectRuleProps {
        private final java.lang.Object reserveQueryString;
        private final java.lang.Object siteId;
        private final java.lang.Object statusCode;
        private final java.lang.Object targetUrl;
        private final java.lang.Object type;
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object siteVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.reserveQueryString = software.amazon.jsii.Kernel.get(this, "reserveQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.statusCode = software.amazon.jsii.Kernel.get(this, "statusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetUrl = software.amazon.jsii.Kernel.get(this, "targetUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteVersion = software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.reserveQueryString = java.util.Objects.requireNonNull(builder.reserveQueryString, "reserveQueryString is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.statusCode = java.util.Objects.requireNonNull(builder.statusCode, "statusCode is required");
            this.targetUrl = java.util.Objects.requireNonNull(builder.targetUrl, "targetUrl is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.rule = builder.rule;
            this.ruleEnable = builder.ruleEnable;
            this.ruleName = builder.ruleName;
            this.siteVersion = builder.siteVersion;
        }

        @Override
        public final java.lang.Object getReserveQueryString() {
            return this.reserveQueryString;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getStatusCode() {
            return this.statusCode;
        }

        @Override
        public final java.lang.Object getTargetUrl() {
            return this.targetUrl;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
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
        public final java.lang.Object getSiteVersion() {
            return this.siteVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("reserveQueryString", om.valueToTree(this.getReserveQueryString()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            data.set("statusCode", om.valueToTree(this.getStatusCode()));
            data.set("targetUrl", om.valueToTree(this.getTargetUrl()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getRule() != null) {
                data.set("rule", om.valueToTree(this.getRule()));
            }
            if (this.getRuleEnable() != null) {
                data.set("ruleEnable", om.valueToTree(this.getRuleEnable()));
            }
            if (this.getRuleName() != null) {
                data.set("ruleName", om.valueToTree(this.getRuleName()));
            }
            if (this.getSiteVersion() != null) {
                data.set("siteVersion", om.valueToTree(this.getSiteVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosRedirectRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRedirectRuleProps.Jsii$Proxy that = (RosRedirectRuleProps.Jsii$Proxy) o;

            if (!reserveQueryString.equals(that.reserveQueryString)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (!statusCode.equals(that.statusCode)) return false;
            if (!targetUrl.equals(that.targetUrl)) return false;
            if (!type.equals(that.type)) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            if (this.ruleEnable != null ? !this.ruleEnable.equals(that.ruleEnable) : that.ruleEnable != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            return this.siteVersion != null ? this.siteVersion.equals(that.siteVersion) : that.siteVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.reserveQueryString.hashCode();
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.statusCode.hashCode());
            result = 31 * result + (this.targetUrl.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.ruleEnable != null ? this.ruleEnable.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.siteVersion != null ? this.siteVersion.hashCode() : 0);
            return result;
        }
    }
}
