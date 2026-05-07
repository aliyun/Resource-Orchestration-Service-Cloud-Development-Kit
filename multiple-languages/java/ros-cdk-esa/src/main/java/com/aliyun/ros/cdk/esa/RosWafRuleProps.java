package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosWafRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-wafrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.231Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosWafRuleProps.Jsii$Proxy.class)
public interface RosWafRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPhase();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRulesetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShared() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosWafRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosWafRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosWafRuleProps> {
        java.lang.Object phase;
        java.lang.Object siteId;
        java.lang.Object config;
        java.lang.Object rulesetId;
        java.lang.Object shared;
        java.lang.Object siteVersion;

        /**
         * Sets the value of {@link RosWafRuleProps#getPhase}
         * @param phase the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder phase(java.lang.String phase) {
            this.phase = phase;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getPhase}
         * @param phase the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder phase(com.aliyun.ros.cdk.core.IResolvable phase) {
            this.phase = phase;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getConfig}
         * @param config the value to be set.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getConfig}
         * @param config the value to be set.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.esa.RosWafRule.ConfigProperty config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getRulesetId}
         * @param rulesetId the value to be set.
         * @return {@code this}
         */
        public Builder rulesetId(java.lang.Number rulesetId) {
            this.rulesetId = rulesetId;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getRulesetId}
         * @param rulesetId the value to be set.
         * @return {@code this}
         */
        public Builder rulesetId(com.aliyun.ros.cdk.core.IResolvable rulesetId) {
            this.rulesetId = rulesetId;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getShared}
         * @param shared the value to be set.
         * @return {@code this}
         */
        public Builder shared(com.aliyun.ros.cdk.core.IResolvable shared) {
            this.shared = shared;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getShared}
         * @param shared the value to be set.
         * @return {@code this}
         */
        public Builder shared(com.aliyun.ros.cdk.esa.RosWafRule.SharedProperty shared) {
            this.shared = shared;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getSiteVersion}
         * @param siteVersion the value to be set.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosWafRuleProps#getSiteVersion}
         * @param siteVersion the value to be set.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosWafRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosWafRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosWafRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosWafRuleProps {
        private final java.lang.Object phase;
        private final java.lang.Object siteId;
        private final java.lang.Object config;
        private final java.lang.Object rulesetId;
        private final java.lang.Object shared;
        private final java.lang.Object siteVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.phase = software.amazon.jsii.Kernel.get(this, "phase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rulesetId = software.amazon.jsii.Kernel.get(this, "rulesetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shared = software.amazon.jsii.Kernel.get(this, "shared", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteVersion = software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.phase = java.util.Objects.requireNonNull(builder.phase, "phase is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.config = builder.config;
            this.rulesetId = builder.rulesetId;
            this.shared = builder.shared;
            this.siteVersion = builder.siteVersion;
        }

        @Override
        public final java.lang.Object getPhase() {
            return this.phase;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getConfig() {
            return this.config;
        }

        @Override
        public final java.lang.Object getRulesetId() {
            return this.rulesetId;
        }

        @Override
        public final java.lang.Object getShared() {
            return this.shared;
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

            data.set("phase", om.valueToTree(this.getPhase()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getConfig() != null) {
                data.set("config", om.valueToTree(this.getConfig()));
            }
            if (this.getRulesetId() != null) {
                data.set("rulesetId", om.valueToTree(this.getRulesetId()));
            }
            if (this.getShared() != null) {
                data.set("shared", om.valueToTree(this.getShared()));
            }
            if (this.getSiteVersion() != null) {
                data.set("siteVersion", om.valueToTree(this.getSiteVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosWafRuleProps.Jsii$Proxy that = (RosWafRuleProps.Jsii$Proxy) o;

            if (!phase.equals(that.phase)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
            if (this.rulesetId != null ? !this.rulesetId.equals(that.rulesetId) : that.rulesetId != null) return false;
            if (this.shared != null ? !this.shared.equals(that.shared) : that.shared != null) return false;
            return this.siteVersion != null ? this.siteVersion.equals(that.siteVersion) : that.siteVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.phase.hashCode();
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
            result = 31 * result + (this.rulesetId != null ? this.rulesetId.hashCode() : 0);
            result = 31 * result + (this.shared != null ? this.shared.hashCode() : 0);
            result = 31 * result + (this.siteVersion != null ? this.siteVersion.hashCode() : 0);
            return result;
        }
    }
}
