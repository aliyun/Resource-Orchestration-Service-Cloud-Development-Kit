package com.aliyun.ros.cdk.config;

/**
 * Properties for defining a `ALIYUN::Config::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:03.227Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosRuleProps.Jsii$Proxy.class)
public interface RosRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfigRuleTriggerTypes();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceTypesScope();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRiskLevel();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceIdentifier();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceOwner();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeResourceIdsScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInputParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaximumExecutionFrequency() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionIdsScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupIdsScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagKeyLogicScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagKeyScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagValueScope() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRuleProps> {
        java.lang.Object configRuleTriggerTypes;
        java.lang.Object resourceTypesScope;
        java.lang.Object riskLevel;
        java.lang.Object ruleName;
        java.lang.Object sourceIdentifier;
        java.lang.Object sourceOwner;
        java.lang.Object description;
        java.lang.Object excludeResourceIdsScope;
        java.lang.Object inputParameters;
        java.lang.Object maximumExecutionFrequency;
        java.lang.Object regionIdsScope;
        java.lang.Object resourceGroupIdsScope;
        java.lang.Object tagKeyLogicScope;
        java.lang.Object tagKeyScope;
        java.lang.Object tagValueScope;

        /**
         * Sets the value of {@link RosRuleProps#getConfigRuleTriggerTypes}
         * @param configRuleTriggerTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder configRuleTriggerTypes(java.lang.String configRuleTriggerTypes) {
            this.configRuleTriggerTypes = configRuleTriggerTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getConfigRuleTriggerTypes}
         * @param configRuleTriggerTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder configRuleTriggerTypes(com.aliyun.ros.cdk.core.IResolvable configRuleTriggerTypes) {
            this.configRuleTriggerTypes = configRuleTriggerTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getResourceTypesScope}
         * @param resourceTypesScope the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceTypesScope(com.aliyun.ros.cdk.core.IResolvable resourceTypesScope) {
            this.resourceTypesScope = resourceTypesScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getResourceTypesScope}
         * @param resourceTypesScope the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceTypesScope(java.util.List<? extends java.lang.Object> resourceTypesScope) {
            this.resourceTypesScope = resourceTypesScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRiskLevel}
         * @param riskLevel the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(java.lang.Number riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRiskLevel}
         * @param riskLevel the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getSourceIdentifier}
         * @param sourceIdentifier the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceIdentifier(java.lang.String sourceIdentifier) {
            this.sourceIdentifier = sourceIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getSourceIdentifier}
         * @param sourceIdentifier the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceIdentifier(com.aliyun.ros.cdk.core.IResolvable sourceIdentifier) {
            this.sourceIdentifier = sourceIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getSourceOwner}
         * @param sourceOwner the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceOwner(java.lang.String sourceOwner) {
            this.sourceOwner = sourceOwner;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getSourceOwner}
         * @param sourceOwner the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceOwner(com.aliyun.ros.cdk.core.IResolvable sourceOwner) {
            this.sourceOwner = sourceOwner;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getExcludeResourceIdsScope}
         * @param excludeResourceIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder excludeResourceIdsScope(java.lang.String excludeResourceIdsScope) {
            this.excludeResourceIdsScope = excludeResourceIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getExcludeResourceIdsScope}
         * @param excludeResourceIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder excludeResourceIdsScope(com.aliyun.ros.cdk.core.IResolvable excludeResourceIdsScope) {
            this.excludeResourceIdsScope = excludeResourceIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getInputParameters}
         * @param inputParameters the value to be set.
         * @return {@code this}
         */
        public Builder inputParameters(com.aliyun.ros.cdk.core.IResolvable inputParameters) {
            this.inputParameters = inputParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getInputParameters}
         * @param inputParameters the value to be set.
         * @return {@code this}
         */
        public Builder inputParameters(java.util.Map<java.lang.String, ? extends java.lang.Object> inputParameters) {
            this.inputParameters = inputParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getMaximumExecutionFrequency}
         * @param maximumExecutionFrequency the value to be set.
         * @return {@code this}
         */
        public Builder maximumExecutionFrequency(java.lang.String maximumExecutionFrequency) {
            this.maximumExecutionFrequency = maximumExecutionFrequency;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getMaximumExecutionFrequency}
         * @param maximumExecutionFrequency the value to be set.
         * @return {@code this}
         */
        public Builder maximumExecutionFrequency(com.aliyun.ros.cdk.core.IResolvable maximumExecutionFrequency) {
            this.maximumExecutionFrequency = maximumExecutionFrequency;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRegionIdsScope}
         * @param regionIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder regionIdsScope(java.lang.String regionIdsScope) {
            this.regionIdsScope = regionIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRegionIdsScope}
         * @param regionIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder regionIdsScope(com.aliyun.ros.cdk.core.IResolvable regionIdsScope) {
            this.regionIdsScope = regionIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getResourceGroupIdsScope}
         * @param resourceGroupIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupIdsScope(java.lang.String resourceGroupIdsScope) {
            this.resourceGroupIdsScope = resourceGroupIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getResourceGroupIdsScope}
         * @param resourceGroupIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupIdsScope(com.aliyun.ros.cdk.core.IResolvable resourceGroupIdsScope) {
            this.resourceGroupIdsScope = resourceGroupIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getTagKeyLogicScope}
         * @param tagKeyLogicScope the value to be set.
         * @return {@code this}
         */
        public Builder tagKeyLogicScope(java.lang.String tagKeyLogicScope) {
            this.tagKeyLogicScope = tagKeyLogicScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getTagKeyLogicScope}
         * @param tagKeyLogicScope the value to be set.
         * @return {@code this}
         */
        public Builder tagKeyLogicScope(com.aliyun.ros.cdk.core.IResolvable tagKeyLogicScope) {
            this.tagKeyLogicScope = tagKeyLogicScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getTagKeyScope}
         * @param tagKeyScope the value to be set.
         * @return {@code this}
         */
        public Builder tagKeyScope(java.lang.String tagKeyScope) {
            this.tagKeyScope = tagKeyScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getTagKeyScope}
         * @param tagKeyScope the value to be set.
         * @return {@code this}
         */
        public Builder tagKeyScope(com.aliyun.ros.cdk.core.IResolvable tagKeyScope) {
            this.tagKeyScope = tagKeyScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getTagValueScope}
         * @param tagValueScope the value to be set.
         * @return {@code this}
         */
        public Builder tagValueScope(java.lang.String tagValueScope) {
            this.tagValueScope = tagValueScope;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getTagValueScope}
         * @param tagValueScope the value to be set.
         * @return {@code this}
         */
        public Builder tagValueScope(com.aliyun.ros.cdk.core.IResolvable tagValueScope) {
            this.tagValueScope = tagValueScope;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRuleProps {
        private final java.lang.Object configRuleTriggerTypes;
        private final java.lang.Object resourceTypesScope;
        private final java.lang.Object riskLevel;
        private final java.lang.Object ruleName;
        private final java.lang.Object sourceIdentifier;
        private final java.lang.Object sourceOwner;
        private final java.lang.Object description;
        private final java.lang.Object excludeResourceIdsScope;
        private final java.lang.Object inputParameters;
        private final java.lang.Object maximumExecutionFrequency;
        private final java.lang.Object regionIdsScope;
        private final java.lang.Object resourceGroupIdsScope;
        private final java.lang.Object tagKeyLogicScope;
        private final java.lang.Object tagKeyScope;
        private final java.lang.Object tagValueScope;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configRuleTriggerTypes = software.amazon.jsii.Kernel.get(this, "configRuleTriggerTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceTypesScope = software.amazon.jsii.Kernel.get(this, "resourceTypesScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.riskLevel = software.amazon.jsii.Kernel.get(this, "riskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceIdentifier = software.amazon.jsii.Kernel.get(this, "sourceIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceOwner = software.amazon.jsii.Kernel.get(this, "sourceOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeResourceIdsScope = software.amazon.jsii.Kernel.get(this, "excludeResourceIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.inputParameters = software.amazon.jsii.Kernel.get(this, "inputParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maximumExecutionFrequency = software.amazon.jsii.Kernel.get(this, "maximumExecutionFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionIdsScope = software.amazon.jsii.Kernel.get(this, "regionIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupIdsScope = software.amazon.jsii.Kernel.get(this, "resourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagKeyLogicScope = software.amazon.jsii.Kernel.get(this, "tagKeyLogicScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagKeyScope = software.amazon.jsii.Kernel.get(this, "tagKeyScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagValueScope = software.amazon.jsii.Kernel.get(this, "tagValueScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configRuleTriggerTypes = java.util.Objects.requireNonNull(builder.configRuleTriggerTypes, "configRuleTriggerTypes is required");
            this.resourceTypesScope = java.util.Objects.requireNonNull(builder.resourceTypesScope, "resourceTypesScope is required");
            this.riskLevel = java.util.Objects.requireNonNull(builder.riskLevel, "riskLevel is required");
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.sourceIdentifier = java.util.Objects.requireNonNull(builder.sourceIdentifier, "sourceIdentifier is required");
            this.sourceOwner = java.util.Objects.requireNonNull(builder.sourceOwner, "sourceOwner is required");
            this.description = builder.description;
            this.excludeResourceIdsScope = builder.excludeResourceIdsScope;
            this.inputParameters = builder.inputParameters;
            this.maximumExecutionFrequency = builder.maximumExecutionFrequency;
            this.regionIdsScope = builder.regionIdsScope;
            this.resourceGroupIdsScope = builder.resourceGroupIdsScope;
            this.tagKeyLogicScope = builder.tagKeyLogicScope;
            this.tagKeyScope = builder.tagKeyScope;
            this.tagValueScope = builder.tagValueScope;
        }

        @Override
        public final java.lang.Object getConfigRuleTriggerTypes() {
            return this.configRuleTriggerTypes;
        }

        @Override
        public final java.lang.Object getResourceTypesScope() {
            return this.resourceTypesScope;
        }

        @Override
        public final java.lang.Object getRiskLevel() {
            return this.riskLevel;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getSourceIdentifier() {
            return this.sourceIdentifier;
        }

        @Override
        public final java.lang.Object getSourceOwner() {
            return this.sourceOwner;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getExcludeResourceIdsScope() {
            return this.excludeResourceIdsScope;
        }

        @Override
        public final java.lang.Object getInputParameters() {
            return this.inputParameters;
        }

        @Override
        public final java.lang.Object getMaximumExecutionFrequency() {
            return this.maximumExecutionFrequency;
        }

        @Override
        public final java.lang.Object getRegionIdsScope() {
            return this.regionIdsScope;
        }

        @Override
        public final java.lang.Object getResourceGroupIdsScope() {
            return this.resourceGroupIdsScope;
        }

        @Override
        public final java.lang.Object getTagKeyLogicScope() {
            return this.tagKeyLogicScope;
        }

        @Override
        public final java.lang.Object getTagKeyScope() {
            return this.tagKeyScope;
        }

        @Override
        public final java.lang.Object getTagValueScope() {
            return this.tagValueScope;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("configRuleTriggerTypes", om.valueToTree(this.getConfigRuleTriggerTypes()));
            data.set("resourceTypesScope", om.valueToTree(this.getResourceTypesScope()));
            data.set("riskLevel", om.valueToTree(this.getRiskLevel()));
            data.set("ruleName", om.valueToTree(this.getRuleName()));
            data.set("sourceIdentifier", om.valueToTree(this.getSourceIdentifier()));
            data.set("sourceOwner", om.valueToTree(this.getSourceOwner()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getExcludeResourceIdsScope() != null) {
                data.set("excludeResourceIdsScope", om.valueToTree(this.getExcludeResourceIdsScope()));
            }
            if (this.getInputParameters() != null) {
                data.set("inputParameters", om.valueToTree(this.getInputParameters()));
            }
            if (this.getMaximumExecutionFrequency() != null) {
                data.set("maximumExecutionFrequency", om.valueToTree(this.getMaximumExecutionFrequency()));
            }
            if (this.getRegionIdsScope() != null) {
                data.set("regionIdsScope", om.valueToTree(this.getRegionIdsScope()));
            }
            if (this.getResourceGroupIdsScope() != null) {
                data.set("resourceGroupIdsScope", om.valueToTree(this.getResourceGroupIdsScope()));
            }
            if (this.getTagKeyLogicScope() != null) {
                data.set("tagKeyLogicScope", om.valueToTree(this.getTagKeyLogicScope()));
            }
            if (this.getTagKeyScope() != null) {
                data.set("tagKeyScope", om.valueToTree(this.getTagKeyScope()));
            }
            if (this.getTagValueScope() != null) {
                data.set("tagValueScope", om.valueToTree(this.getTagValueScope()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRuleProps.Jsii$Proxy that = (RosRuleProps.Jsii$Proxy) o;

            if (!configRuleTriggerTypes.equals(that.configRuleTriggerTypes)) return false;
            if (!resourceTypesScope.equals(that.resourceTypesScope)) return false;
            if (!riskLevel.equals(that.riskLevel)) return false;
            if (!ruleName.equals(that.ruleName)) return false;
            if (!sourceIdentifier.equals(that.sourceIdentifier)) return false;
            if (!sourceOwner.equals(that.sourceOwner)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.excludeResourceIdsScope != null ? !this.excludeResourceIdsScope.equals(that.excludeResourceIdsScope) : that.excludeResourceIdsScope != null) return false;
            if (this.inputParameters != null ? !this.inputParameters.equals(that.inputParameters) : that.inputParameters != null) return false;
            if (this.maximumExecutionFrequency != null ? !this.maximumExecutionFrequency.equals(that.maximumExecutionFrequency) : that.maximumExecutionFrequency != null) return false;
            if (this.regionIdsScope != null ? !this.regionIdsScope.equals(that.regionIdsScope) : that.regionIdsScope != null) return false;
            if (this.resourceGroupIdsScope != null ? !this.resourceGroupIdsScope.equals(that.resourceGroupIdsScope) : that.resourceGroupIdsScope != null) return false;
            if (this.tagKeyLogicScope != null ? !this.tagKeyLogicScope.equals(that.tagKeyLogicScope) : that.tagKeyLogicScope != null) return false;
            if (this.tagKeyScope != null ? !this.tagKeyScope.equals(that.tagKeyScope) : that.tagKeyScope != null) return false;
            return this.tagValueScope != null ? this.tagValueScope.equals(that.tagValueScope) : that.tagValueScope == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configRuleTriggerTypes.hashCode();
            result = 31 * result + (this.resourceTypesScope.hashCode());
            result = 31 * result + (this.riskLevel.hashCode());
            result = 31 * result + (this.ruleName.hashCode());
            result = 31 * result + (this.sourceIdentifier.hashCode());
            result = 31 * result + (this.sourceOwner.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.excludeResourceIdsScope != null ? this.excludeResourceIdsScope.hashCode() : 0);
            result = 31 * result + (this.inputParameters != null ? this.inputParameters.hashCode() : 0);
            result = 31 * result + (this.maximumExecutionFrequency != null ? this.maximumExecutionFrequency.hashCode() : 0);
            result = 31 * result + (this.regionIdsScope != null ? this.regionIdsScope.hashCode() : 0);
            result = 31 * result + (this.resourceGroupIdsScope != null ? this.resourceGroupIdsScope.hashCode() : 0);
            result = 31 * result + (this.tagKeyLogicScope != null ? this.tagKeyLogicScope.hashCode() : 0);
            result = 31 * result + (this.tagKeyScope != null ? this.tagKeyScope.hashCode() : 0);
            result = 31 * result + (this.tagValueScope != null ? this.tagValueScope.hashCode() : 0);
            return result;
        }
    }
}
