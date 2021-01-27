package com.aliyun.ros.cdk.waf;

/**
 * Properties for defining a `ALIYUN::WAF::AclRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.720Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.AclRuleProps")
@software.amazon.jsii.Jsii.Proxy(AclRuleProps.Jsii$Proxy.class)
public interface AclRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDomain();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRules();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getRuleId() {
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
        private java.lang.String domain;
        private java.lang.String instanceId;
        private java.lang.String rules;
        private java.lang.String region;
        private java.lang.Number ruleId;

        /**
         * Sets the value of {@link AclRuleProps#getDomain}
         * @param domain the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getRules}
         * @param rules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(java.lang.String rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getRegion}
         * @param region the value to be set.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link AclRuleProps#getRuleId}
         * @param ruleId the value to be set.
         * @return {@code this}
         */
        public Builder ruleId(java.lang.Number ruleId) {
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
            return new Jsii$Proxy(domain, instanceId, rules, region, ruleId);
        }
    }

    /**
     * An implementation for {@link AclRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AclRuleProps {
        private final java.lang.String domain;
        private final java.lang.String instanceId;
        private final java.lang.String rules;
        private final java.lang.String region;
        private final java.lang.Number ruleId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ruleId = software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String domain, final java.lang.String instanceId, final java.lang.String rules, final java.lang.String region, final java.lang.Number ruleId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domain = java.util.Objects.requireNonNull(domain, "domain is required");
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.rules = java.util.Objects.requireNonNull(rules, "rules is required");
            this.region = region;
            this.ruleId = ruleId;
        }

        @Override
        public final java.lang.String getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.String getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.String getRules() {
            return this.rules;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Number getRuleId() {
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
