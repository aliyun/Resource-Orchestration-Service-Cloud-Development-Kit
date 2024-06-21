package com.aliyun.ros.cdk.config;

/**
 * Properties for defining a <code>CompliancePack</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:08.205Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.CompliancePackProps")
@software.amazon.jsii.Jsii.Proxy(CompliancePackProps.Jsii$Proxy.class)
public interface CompliancePackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property compliancePackName: Compliance Package Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCompliancePackName();

    /**
     * Property configRules:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfigRules();

    /**
     * Property riskLevel: Ris Level, valid values: 1 | 2 | 3.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRiskLevel();

    /**
     * Property compliancePackTemplateId: Compliance Package Template Id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompliancePackTemplateId() {
        return null;
    }

    /**
     * Property configRuleIds: Compliance Package rule ID list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigRuleIds() {
        return null;
    }

    /**
     * Property description: Description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CompliancePackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CompliancePackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CompliancePackProps> {
        java.lang.Object compliancePackName;
        java.lang.Object configRules;
        java.lang.Object riskLevel;
        java.lang.Object compliancePackTemplateId;
        java.lang.Object configRuleIds;
        java.lang.Object description;

        /**
         * Sets the value of {@link CompliancePackProps#getCompliancePackName}
         * @param compliancePackName Property compliancePackName: Compliance Package Name. This parameter is required.
         * @return {@code this}
         */
        public Builder compliancePackName(java.lang.String compliancePackName) {
            this.compliancePackName = compliancePackName;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getCompliancePackName}
         * @param compliancePackName Property compliancePackName: Compliance Package Name. This parameter is required.
         * @return {@code this}
         */
        public Builder compliancePackName(com.aliyun.ros.cdk.core.IResolvable compliancePackName) {
            this.compliancePackName = compliancePackName;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getConfigRules}
         * @param configRules Property configRules:. This parameter is required.
         * @return {@code this}
         */
        public Builder configRules(java.lang.String configRules) {
            this.configRules = configRules;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getConfigRules}
         * @param configRules Property configRules:. This parameter is required.
         * @return {@code this}
         */
        public Builder configRules(com.aliyun.ros.cdk.core.IResolvable configRules) {
            this.configRules = configRules;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getRiskLevel}
         * @param riskLevel Property riskLevel: Ris Level, valid values: 1 | 2 | 3. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(java.lang.Number riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getRiskLevel}
         * @param riskLevel Property riskLevel: Ris Level, valid values: 1 | 2 | 3. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getCompliancePackTemplateId}
         * @param compliancePackTemplateId Property compliancePackTemplateId: Compliance Package Template Id.
         * @return {@code this}
         */
        public Builder compliancePackTemplateId(java.lang.String compliancePackTemplateId) {
            this.compliancePackTemplateId = compliancePackTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getCompliancePackTemplateId}
         * @param compliancePackTemplateId Property compliancePackTemplateId: Compliance Package Template Id.
         * @return {@code this}
         */
        public Builder compliancePackTemplateId(com.aliyun.ros.cdk.core.IResolvable compliancePackTemplateId) {
            this.compliancePackTemplateId = compliancePackTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getConfigRuleIds}
         * @param configRuleIds Property configRuleIds: Compliance Package rule ID list.
         * @return {@code this}
         */
        public Builder configRuleIds(com.aliyun.ros.cdk.core.IResolvable configRuleIds) {
            this.configRuleIds = configRuleIds;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getConfigRuleIds}
         * @param configRuleIds Property configRuleIds: Compliance Package rule ID list.
         * @return {@code this}
         */
        public Builder configRuleIds(java.util.List<? extends java.lang.Object> configRuleIds) {
            this.configRuleIds = configRuleIds;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getDescription}
         * @param description Property description: Description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CompliancePackProps#getDescription}
         * @param description Property description: Description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CompliancePackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CompliancePackProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CompliancePackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CompliancePackProps {
        private final java.lang.Object compliancePackName;
        private final java.lang.Object configRules;
        private final java.lang.Object riskLevel;
        private final java.lang.Object compliancePackTemplateId;
        private final java.lang.Object configRuleIds;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.compliancePackName = software.amazon.jsii.Kernel.get(this, "compliancePackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configRules = software.amazon.jsii.Kernel.get(this, "configRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.riskLevel = software.amazon.jsii.Kernel.get(this, "riskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compliancePackTemplateId = software.amazon.jsii.Kernel.get(this, "compliancePackTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configRuleIds = software.amazon.jsii.Kernel.get(this, "configRuleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.compliancePackName = java.util.Objects.requireNonNull(builder.compliancePackName, "compliancePackName is required");
            this.configRules = java.util.Objects.requireNonNull(builder.configRules, "configRules is required");
            this.riskLevel = java.util.Objects.requireNonNull(builder.riskLevel, "riskLevel is required");
            this.compliancePackTemplateId = builder.compliancePackTemplateId;
            this.configRuleIds = builder.configRuleIds;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getCompliancePackName() {
            return this.compliancePackName;
        }

        @Override
        public final java.lang.Object getConfigRules() {
            return this.configRules;
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
        public final java.lang.Object getConfigRuleIds() {
            return this.configRuleIds;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("compliancePackName", om.valueToTree(this.getCompliancePackName()));
            data.set("configRules", om.valueToTree(this.getConfigRules()));
            data.set("riskLevel", om.valueToTree(this.getRiskLevel()));
            if (this.getCompliancePackTemplateId() != null) {
                data.set("compliancePackTemplateId", om.valueToTree(this.getCompliancePackTemplateId()));
            }
            if (this.getConfigRuleIds() != null) {
                data.set("configRuleIds", om.valueToTree(this.getConfigRuleIds()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.CompliancePackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CompliancePackProps.Jsii$Proxy that = (CompliancePackProps.Jsii$Proxy) o;

            if (!compliancePackName.equals(that.compliancePackName)) return false;
            if (!configRules.equals(that.configRules)) return false;
            if (!riskLevel.equals(that.riskLevel)) return false;
            if (this.compliancePackTemplateId != null ? !this.compliancePackTemplateId.equals(that.compliancePackTemplateId) : that.compliancePackTemplateId != null) return false;
            if (this.configRuleIds != null ? !this.configRuleIds.equals(that.configRuleIds) : that.configRuleIds != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.compliancePackName.hashCode();
            result = 31 * result + (this.configRules.hashCode());
            result = 31 * result + (this.riskLevel.hashCode());
            result = 31 * result + (this.compliancePackTemplateId != null ? this.compliancePackTemplateId.hashCode() : 0);
            result = 31 * result + (this.configRuleIds != null ? this.configRuleIds.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
