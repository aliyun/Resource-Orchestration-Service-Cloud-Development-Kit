package com.aliyun.ros.cdk.config;

/**
 * Properties for defining a `ALIYUN::Config::CompliancePack`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.632Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosCompliancePackProps")
@software.amazon.jsii.Jsii.Proxy(RosCompliancePackProps.Jsii$Proxy.class)
public interface RosCompliancePackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCompliancePackName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRiskLevel();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompliancePackTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigRules() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCompliancePackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCompliancePackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCompliancePackProps> {
        private java.lang.Object compliancePackName;
        private java.lang.Object description;
        private java.lang.Object riskLevel;
        private java.lang.Object compliancePackTemplateId;
        private java.lang.Object configRules;

        /**
         * Sets the value of {@link RosCompliancePackProps#getCompliancePackName}
         * @param compliancePackName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder compliancePackName(java.lang.String compliancePackName) {
            this.compliancePackName = compliancePackName;
            return this;
        }

        /**
         * Sets the value of {@link RosCompliancePackProps#getCompliancePackName}
         * @param compliancePackName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder compliancePackName(com.aliyun.ros.cdk.core.IResolvable compliancePackName) {
            this.compliancePackName = compliancePackName;
            return this;
        }

        /**
         * Sets the value of {@link RosCompliancePackProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCompliancePackProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCompliancePackProps#getRiskLevel}
         * @param riskLevel the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(java.lang.Number riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosCompliancePackProps#getRiskLevel}
         * @param riskLevel the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosCompliancePackProps#getCompliancePackTemplateId}
         * @param compliancePackTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder compliancePackTemplateId(java.lang.String compliancePackTemplateId) {
            this.compliancePackTemplateId = compliancePackTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosCompliancePackProps#getCompliancePackTemplateId}
         * @param compliancePackTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder compliancePackTemplateId(com.aliyun.ros.cdk.core.IResolvable compliancePackTemplateId) {
            this.compliancePackTemplateId = compliancePackTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosCompliancePackProps#getConfigRules}
         * @param configRules the value to be set.
         * @return {@code this}
         */
        public Builder configRules(com.aliyun.ros.cdk.core.IResolvable configRules) {
            this.configRules = configRules;
            return this;
        }

        /**
         * Sets the value of {@link RosCompliancePackProps#getConfigRules}
         * @param configRules the value to be set.
         * @return {@code this}
         */
        public Builder configRules(java.util.List<? extends java.lang.Object> configRules) {
            this.configRules = configRules;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCompliancePackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCompliancePackProps build() {
            return new Jsii$Proxy(compliancePackName, description, riskLevel, compliancePackTemplateId, configRules);
        }
    }

    /**
     * An implementation for {@link RosCompliancePackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCompliancePackProps {
        private final java.lang.Object compliancePackName;
        private final java.lang.Object description;
        private final java.lang.Object riskLevel;
        private final java.lang.Object compliancePackTemplateId;
        private final java.lang.Object configRules;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.compliancePackName = software.amazon.jsii.Kernel.get(this, "compliancePackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.riskLevel = software.amazon.jsii.Kernel.get(this, "riskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compliancePackTemplateId = software.amazon.jsii.Kernel.get(this, "compliancePackTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configRules = software.amazon.jsii.Kernel.get(this, "configRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object compliancePackName, final java.lang.Object description, final java.lang.Object riskLevel, final java.lang.Object compliancePackTemplateId, final java.lang.Object configRules) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.compliancePackName = java.util.Objects.requireNonNull(compliancePackName, "compliancePackName is required");
            this.description = java.util.Objects.requireNonNull(description, "description is required");
            this.riskLevel = java.util.Objects.requireNonNull(riskLevel, "riskLevel is required");
            this.compliancePackTemplateId = compliancePackTemplateId;
            this.configRules = configRules;
        }

        @Override
        public final java.lang.Object getCompliancePackName() {
            return this.compliancePackName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getRiskLevel() {
            return this.riskLevel;
        }

        @Override
        public final java.lang.Object getCompliancePackTemplateId() {
            return this.compliancePackTemplateId;
        }

        @Override
        public final java.lang.Object getConfigRules() {
            return this.configRules;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("compliancePackName", om.valueToTree(this.getCompliancePackName()));
            data.set("description", om.valueToTree(this.getDescription()));
            data.set("riskLevel", om.valueToTree(this.getRiskLevel()));
            if (this.getCompliancePackTemplateId() != null) {
                data.set("compliancePackTemplateId", om.valueToTree(this.getCompliancePackTemplateId()));
            }
            if (this.getConfigRules() != null) {
                data.set("configRules", om.valueToTree(this.getConfigRules()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosCompliancePackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCompliancePackProps.Jsii$Proxy that = (RosCompliancePackProps.Jsii$Proxy) o;

            if (!compliancePackName.equals(that.compliancePackName)) return false;
            if (!description.equals(that.description)) return false;
            if (!riskLevel.equals(that.riskLevel)) return false;
            if (this.compliancePackTemplateId != null ? !this.compliancePackTemplateId.equals(that.compliancePackTemplateId) : that.compliancePackTemplateId != null) return false;
            return this.configRules != null ? this.configRules.equals(that.configRules) : that.configRules == null;
        }

        @Override
        public final int hashCode() {
            int result = this.compliancePackName.hashCode();
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.riskLevel.hashCode());
            result = 31 * result + (this.compliancePackTemplateId != null ? this.compliancePackTemplateId.hashCode() : 0);
            result = 31 * result + (this.configRules != null ? this.configRules.hashCode() : 0);
            return result;
        }
    }
}
