package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::EventRuleTargets`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:03.130Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.EventRuleTargetsProps")
@software.amazon.jsii.Jsii.Proxy(EventRuleTargetsProps.Jsii$Proxy.class)
public interface EventRuleTargetsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ruleName: The name of the alert rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     * Property contactParameters: CONTACT configuration.A maximum of 5 parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContactParameters() {
        return null;
    }

    /**
     * Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFcParameters() {
        return null;
    }

    /**
     * Property mnsParameters: MNS configuration.A maximum of 5 parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMnsParameters() {
        return null;
    }

    /**
     * Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsParameters() {
        return null;
    }

    /**
     * Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebhookParameters() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EventRuleTargetsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EventRuleTargetsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EventRuleTargetsProps> {
        java.lang.Object ruleName;
        java.lang.Object contactParameters;
        java.lang.Object fcParameters;
        java.lang.Object mnsParameters;
        java.lang.Object slsParameters;
        java.lang.Object webhookParameters;

        /**
         * Sets the value of {@link EventRuleTargetsProps#getRuleName}
         * @param ruleName Property ruleName: The name of the alert rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getRuleName}
         * @param ruleName Property ruleName: The name of the alert rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getContactParameters}
         * @param contactParameters Property contactParameters: CONTACT configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder contactParameters(com.aliyun.ros.cdk.core.IResolvable contactParameters) {
            this.contactParameters = contactParameters;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getContactParameters}
         * @param contactParameters Property contactParameters: CONTACT configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder contactParameters(java.util.List<? extends java.lang.Object> contactParameters) {
            this.contactParameters = contactParameters;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getFcParameters}
         * @param fcParameters Property fcParameters: FC configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder fcParameters(com.aliyun.ros.cdk.core.IResolvable fcParameters) {
            this.fcParameters = fcParameters;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getFcParameters}
         * @param fcParameters Property fcParameters: FC configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder fcParameters(java.util.List<? extends java.lang.Object> fcParameters) {
            this.fcParameters = fcParameters;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getMnsParameters}
         * @param mnsParameters Property mnsParameters: MNS configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder mnsParameters(com.aliyun.ros.cdk.core.IResolvable mnsParameters) {
            this.mnsParameters = mnsParameters;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getMnsParameters}
         * @param mnsParameters Property mnsParameters: MNS configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder mnsParameters(java.util.List<? extends java.lang.Object> mnsParameters) {
            this.mnsParameters = mnsParameters;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getSlsParameters}
         * @param slsParameters Property slsParameters: SLS configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder slsParameters(com.aliyun.ros.cdk.core.IResolvable slsParameters) {
            this.slsParameters = slsParameters;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getSlsParameters}
         * @param slsParameters Property slsParameters: SLS configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder slsParameters(java.util.List<? extends java.lang.Object> slsParameters) {
            this.slsParameters = slsParameters;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getWebhookParameters}
         * @param webhookParameters Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder webhookParameters(com.aliyun.ros.cdk.core.IResolvable webhookParameters) {
            this.webhookParameters = webhookParameters;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleTargetsProps#getWebhookParameters}
         * @param webhookParameters Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
         * @return {@code this}
         */
        public Builder webhookParameters(java.util.List<? extends java.lang.Object> webhookParameters) {
            this.webhookParameters = webhookParameters;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EventRuleTargetsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EventRuleTargetsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EventRuleTargetsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EventRuleTargetsProps {
        private final java.lang.Object ruleName;
        private final java.lang.Object contactParameters;
        private final java.lang.Object fcParameters;
        private final java.lang.Object mnsParameters;
        private final java.lang.Object slsParameters;
        private final java.lang.Object webhookParameters;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contactParameters = software.amazon.jsii.Kernel.get(this, "contactParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fcParameters = software.amazon.jsii.Kernel.get(this, "fcParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mnsParameters = software.amazon.jsii.Kernel.get(this, "mnsParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsParameters = software.amazon.jsii.Kernel.get(this, "slsParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.webhookParameters = software.amazon.jsii.Kernel.get(this, "webhookParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.contactParameters = builder.contactParameters;
            this.fcParameters = builder.fcParameters;
            this.mnsParameters = builder.mnsParameters;
            this.slsParameters = builder.slsParameters;
            this.webhookParameters = builder.webhookParameters;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getContactParameters() {
            return this.contactParameters;
        }

        @Override
        public final java.lang.Object getFcParameters() {
            return this.fcParameters;
        }

        @Override
        public final java.lang.Object getMnsParameters() {
            return this.mnsParameters;
        }

        @Override
        public final java.lang.Object getSlsParameters() {
            return this.slsParameters;
        }

        @Override
        public final java.lang.Object getWebhookParameters() {
            return this.webhookParameters;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ruleName", om.valueToTree(this.getRuleName()));
            if (this.getContactParameters() != null) {
                data.set("contactParameters", om.valueToTree(this.getContactParameters()));
            }
            if (this.getFcParameters() != null) {
                data.set("fcParameters", om.valueToTree(this.getFcParameters()));
            }
            if (this.getMnsParameters() != null) {
                data.set("mnsParameters", om.valueToTree(this.getMnsParameters()));
            }
            if (this.getSlsParameters() != null) {
                data.set("slsParameters", om.valueToTree(this.getSlsParameters()));
            }
            if (this.getWebhookParameters() != null) {
                data.set("webhookParameters", om.valueToTree(this.getWebhookParameters()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.EventRuleTargetsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EventRuleTargetsProps.Jsii$Proxy that = (EventRuleTargetsProps.Jsii$Proxy) o;

            if (!ruleName.equals(that.ruleName)) return false;
            if (this.contactParameters != null ? !this.contactParameters.equals(that.contactParameters) : that.contactParameters != null) return false;
            if (this.fcParameters != null ? !this.fcParameters.equals(that.fcParameters) : that.fcParameters != null) return false;
            if (this.mnsParameters != null ? !this.mnsParameters.equals(that.mnsParameters) : that.mnsParameters != null) return false;
            if (this.slsParameters != null ? !this.slsParameters.equals(that.slsParameters) : that.slsParameters != null) return false;
            return this.webhookParameters != null ? this.webhookParameters.equals(that.webhookParameters) : that.webhookParameters == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ruleName.hashCode();
            result = 31 * result + (this.contactParameters != null ? this.contactParameters.hashCode() : 0);
            result = 31 * result + (this.fcParameters != null ? this.fcParameters.hashCode() : 0);
            result = 31 * result + (this.mnsParameters != null ? this.mnsParameters.hashCode() : 0);
            result = 31 * result + (this.slsParameters != null ? this.slsParameters.hashCode() : 0);
            result = 31 * result + (this.webhookParameters != null ? this.webhookParameters.hashCode() : 0);
            return result;
        }
    }
}
