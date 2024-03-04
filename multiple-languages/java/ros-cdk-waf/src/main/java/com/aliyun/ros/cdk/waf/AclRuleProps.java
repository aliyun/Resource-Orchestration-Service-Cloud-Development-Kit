package com.aliyun.ros.cdk.waf;

/**
 * Properties for defining a <code>AclRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:55.232Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.AclRuleProps")
@software.amazon.jsii.Jsii.Proxy(AclRuleProps.Jsii$Proxy.class)
public interface AclRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domain: Domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomain();

    /**
     * Property instanceId: WAF instance ID.
     * <p>
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRules();

    /**
     * Property region: Examples of areas where the WAF.
     * <p>
     * Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
        return null;
    }

    /**
     * Property ruleId: Precise access control rule ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AclRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AclRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AclRuleProps> {
        java.lang.Object domain;
        java.lang.Object instanceId;
        java.lang.Object rules;
        java.lang.Object region;
        java.lang.Object ruleId;

        /**
         * Sets the value of {@link AclRuleProps#getDomain}
         * @param domain Property domain: Domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getDomain}
         * @param domain Property domain: Domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getInstanceId}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         *                   Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getInstanceId}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         *                   Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getRules}
         * @param rules Property rules: Detailed information of precise access control rules, expressed in JSON format strings. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(java.lang.String rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getRules}
         * @param rules Property rules: Detailed information of precise access control rules, expressed in JSON format strings. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getRegion}
         * @param region Property region: Examples of areas where the WAF.
         *               Value:
         *               cn: China mainland (default)
         *               cn-hongkong: China HongKong and other overseas
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getRegion}
         * @param region Property region: Examples of areas where the WAF.
         *               Value:
         *               cn: China mainland (default)
         *               cn-hongkong: China HongKong and other overseas
         * @return {@code this}
         */
        public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getRuleId}
         * @param ruleId Property ruleId: Precise access control rule ID.
         * @return {@code this}
         */
        public Builder ruleId(java.lang.Number ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getRuleId}
         * @param ruleId Property ruleId: Precise access control rule ID.
         * @return {@code this}
         */
        public Builder ruleId(com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AclRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AclRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AclRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AclRuleProps {
        private final java.lang.Object domain;
        private final java.lang.Object instanceId;
        private final java.lang.Object rules;
        private final java.lang.Object region;
        private final java.lang.Object ruleId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleId = software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domain = java.util.Objects.requireNonNull(builder.domain, "domain is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.rules = java.util.Objects.requireNonNull(builder.rules, "rules is required");
            this.region = builder.region;
            this.ruleId = builder.ruleId;
        }

        @Override
        public final java.lang.Object getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getRules() {
            return this.rules;
        }

        @Override
        public final java.lang.Object getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Object getRuleId() {
            return this.ruleId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domain", om.valueToTree(this.getDomain()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("rules", om.valueToTree(this.getRules()));
            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }
            if (this.getRuleId() != null) {
                data.set("ruleId", om.valueToTree(this.getRuleId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf.AclRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AclRuleProps.Jsii$Proxy that = (AclRuleProps.Jsii$Proxy) o;

            if (!domain.equals(that.domain)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!rules.equals(that.rules)) return false;
            if (this.region != null ? !this.region.equals(that.region) : that.region != null) return false;
            return this.ruleId != null ? this.ruleId.equals(that.ruleId) : that.ruleId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domain.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.rules.hashCode());
            result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
            result = 31 * result + (this.ruleId != null ? this.ruleId.hashCode() : 0);
            return result;
        }
    }
}
