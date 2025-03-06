package com.aliyun.ros.cdk.config;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Config::AggregateCompliancePack</code>, which is used to create a compliance package for an account group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.240Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosAggregateCompliancePack")
public class RosAggregateCompliancePack extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAggregateCompliancePack(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAggregateCompliancePack(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.config.RosAggregateCompliancePack.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAggregateCompliancePack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RosAggregateCompliancePackProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCompliancePackId() {
        return software.amazon.jsii.Kernel.get(this, "attrCompliancePackId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAggregatorId() {
        return software.amazon.jsii.Kernel.get(this, "aggregatorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAggregatorId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aggregatorId", java.util.Objects.requireNonNull(value, "aggregatorId is required"));
    }

    /**
     */
    public void setAggregatorId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aggregatorId", java.util.Objects.requireNonNull(value, "aggregatorId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCompliancePackName() {
        return software.amazon.jsii.Kernel.get(this, "compliancePackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCompliancePackName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "compliancePackName", java.util.Objects.requireNonNull(value, "compliancePackName is required"));
    }

    /**
     */
    public void setCompliancePackName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "compliancePackName", java.util.Objects.requireNonNull(value, "compliancePackName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRiskLevel() {
        return software.amazon.jsii.Kernel.get(this, "riskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRiskLevel(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "riskLevel", java.util.Objects.requireNonNull(value, "riskLevel is required"));
    }

    /**
     */
    public void setRiskLevel(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "riskLevel", java.util.Objects.requireNonNull(value, "riskLevel is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCompliancePackTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "compliancePackTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCompliancePackTemplateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "compliancePackTemplateId", value);
    }

    /**
     */
    public void setCompliancePackTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "compliancePackTemplateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfigRules() {
        return software.amazon.jsii.Kernel.get(this, "configRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigRules(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configRules", value);
    }

    /**
     */
    public void setConfigRules(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.config.RosAggregateCompliancePack.ConfigRulesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.config.RosAggregateCompliancePack.ConfigRulesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "configRules", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultEnable() {
        return software.amazon.jsii.Kernel.get(this, "defaultEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "defaultEnable", value);
    }

    /**
     */
    public void setDefaultEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcludeRegionIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "excludeRegionIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcludeRegionIdsScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "excludeRegionIdsScope", value);
    }

    /**
     */
    public void setExcludeRegionIdsScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excludeRegionIdsScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcludeResourceGroupIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "excludeResourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcludeResourceGroupIdsScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "excludeResourceGroupIdsScope", value);
    }

    /**
     */
    public void setExcludeResourceGroupIdsScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excludeResourceGroupIdsScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcludeResourceIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "excludeResourceIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcludeResourceIdsScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excludeResourceIdsScope", value);
    }

    /**
     */
    public void setExcludeResourceIdsScope(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "excludeResourceIdsScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRegionIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "regionIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegionIdsScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "regionIdsScope", value);
    }

    /**
     */
    public void setRegionIdsScope(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "regionIdsScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupIdsScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupIdsScope", value);
    }

    /**
     */
    public void setResourceGroupIdsScope(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "resourceGroupIdsScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "resourceIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceIdsScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceIdsScope", value);
    }

    /**
     */
    public void setResourceIdsScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceIdsScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTagKeyScope() {
        return software.amazon.jsii.Kernel.get(this, "tagKeyScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTagKeyScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tagKeyScope", value);
    }

    /**
     */
    public void setTagKeyScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tagKeyScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTagValueScope() {
        return software.amazon.jsii.Kernel.get(this, "tagValueScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTagValueScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tagValueScope", value);
    }

    /**
     */
    public void setTagValueScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tagValueScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateContent() {
        return software.amazon.jsii.Kernel.get(this, "templateContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateContent(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateContent", value);
    }

    /**
     */
    public void setTemplateContent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateContent", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRuleParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigRuleParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigRuleParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getParameterValue();

        /**
         * @return a {@link Builder} of {@link ConfigRuleParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigRuleParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigRuleParametersProperty> {
            java.lang.Object parameterName;
            java.lang.Object parameterValue;

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getParameterName}
             * @param parameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterName(java.lang.String parameterName) {
                this.parameterName = parameterName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getParameterName}
             * @param parameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterName(com.aliyun.ros.cdk.core.IResolvable parameterName) {
                this.parameterName = parameterName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getParameterValue}
             * @param parameterValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterValue(java.lang.String parameterValue) {
                this.parameterValue = parameterValue;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getParameterValue}
             * @param parameterValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterValue(com.aliyun.ros.cdk.core.IResolvable parameterValue) {
                this.parameterValue = parameterValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigRuleParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigRuleParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConfigRuleParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigRuleParametersProperty {
            private final java.lang.Object parameterName;
            private final java.lang.Object parameterValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.parameterName = software.amazon.jsii.Kernel.get(this, "parameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.parameterValue = software.amazon.jsii.Kernel.get(this, "parameterValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.parameterName = java.util.Objects.requireNonNull(builder.parameterName, "parameterName is required");
                this.parameterValue = java.util.Objects.requireNonNull(builder.parameterValue, "parameterValue is required");
            }

            @Override
            public final java.lang.Object getParameterName() {
                return this.parameterName;
            }

            @Override
            public final java.lang.Object getParameterValue() {
                return this.parameterValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("parameterName", om.valueToTree(this.getParameterName()));
                data.set("parameterValue", om.valueToTree(this.getParameterValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRuleParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigRuleParametersProperty.Jsii$Proxy that = (ConfigRuleParametersProperty.Jsii$Proxy) o;

                if (!parameterName.equals(that.parameterName)) return false;
                return this.parameterValue.equals(that.parameterValue);
            }

            @Override
            public final int hashCode() {
                int result = this.parameterName.hashCode();
                result = 31 * result + (this.parameterValue.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRiskLevel();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigRuleId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigRuleName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigRuleParameters() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getManagedRuleIdentifier() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigRulesProperty> {
            java.lang.Object riskLevel;
            java.lang.Object configRuleId;
            java.lang.Object configRuleName;
            java.lang.Object configRuleParameters;
            java.lang.Object description;
            java.lang.Object managedRuleIdentifier;

            /**
             * Sets the value of {@link ConfigRulesProperty#getRiskLevel}
             * @param riskLevel the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder riskLevel(java.lang.Number riskLevel) {
                this.riskLevel = riskLevel;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getRiskLevel}
             * @param riskLevel the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder riskLevel(com.aliyun.ros.cdk.core.IResolvable riskLevel) {
                this.riskLevel = riskLevel;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getConfigRuleId}
             * @param configRuleId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configRuleId(java.lang.String configRuleId) {
                this.configRuleId = configRuleId;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getConfigRuleId}
             * @param configRuleId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configRuleId(com.aliyun.ros.cdk.core.IResolvable configRuleId) {
                this.configRuleId = configRuleId;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getConfigRuleName}
             * @param configRuleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configRuleName(java.lang.String configRuleName) {
                this.configRuleName = configRuleName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getConfigRuleName}
             * @param configRuleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configRuleName(com.aliyun.ros.cdk.core.IResolvable configRuleName) {
                this.configRuleName = configRuleName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getConfigRuleParameters}
             * @param configRuleParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configRuleParameters(com.aliyun.ros.cdk.core.IResolvable configRuleParameters) {
                this.configRuleParameters = configRuleParameters;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getConfigRuleParameters}
             * @param configRuleParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configRuleParameters(java.util.List<? extends java.lang.Object> configRuleParameters) {
                this.configRuleParameters = configRuleParameters;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getManagedRuleIdentifier}
             * @param managedRuleIdentifier the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedRuleIdentifier(java.lang.String managedRuleIdentifier) {
                this.managedRuleIdentifier = managedRuleIdentifier;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRulesProperty#getManagedRuleIdentifier}
             * @param managedRuleIdentifier the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedRuleIdentifier(com.aliyun.ros.cdk.core.IResolvable managedRuleIdentifier) {
                this.managedRuleIdentifier = managedRuleIdentifier;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConfigRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigRulesProperty {
            private final java.lang.Object riskLevel;
            private final java.lang.Object configRuleId;
            private final java.lang.Object configRuleName;
            private final java.lang.Object configRuleParameters;
            private final java.lang.Object description;
            private final java.lang.Object managedRuleIdentifier;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.riskLevel = software.amazon.jsii.Kernel.get(this, "riskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configRuleId = software.amazon.jsii.Kernel.get(this, "configRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configRuleName = software.amazon.jsii.Kernel.get(this, "configRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configRuleParameters = software.amazon.jsii.Kernel.get(this, "configRuleParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.managedRuleIdentifier = software.amazon.jsii.Kernel.get(this, "managedRuleIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.riskLevel = java.util.Objects.requireNonNull(builder.riskLevel, "riskLevel is required");
                this.configRuleId = builder.configRuleId;
                this.configRuleName = builder.configRuleName;
                this.configRuleParameters = builder.configRuleParameters;
                this.description = builder.description;
                this.managedRuleIdentifier = builder.managedRuleIdentifier;
            }

            @Override
            public final java.lang.Object getRiskLevel() {
                return this.riskLevel;
            }

            @Override
            public final java.lang.Object getConfigRuleId() {
                return this.configRuleId;
            }

            @Override
            public final java.lang.Object getConfigRuleName() {
                return this.configRuleName;
            }

            @Override
            public final java.lang.Object getConfigRuleParameters() {
                return this.configRuleParameters;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getManagedRuleIdentifier() {
                return this.managedRuleIdentifier;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("riskLevel", om.valueToTree(this.getRiskLevel()));
                if (this.getConfigRuleId() != null) {
                    data.set("configRuleId", om.valueToTree(this.getConfigRuleId()));
                }
                if (this.getConfigRuleName() != null) {
                    data.set("configRuleName", om.valueToTree(this.getConfigRuleName()));
                }
                if (this.getConfigRuleParameters() != null) {
                    data.set("configRuleParameters", om.valueToTree(this.getConfigRuleParameters()));
                }
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getManagedRuleIdentifier() != null) {
                    data.set("managedRuleIdentifier", om.valueToTree(this.getManagedRuleIdentifier()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigRulesProperty.Jsii$Proxy that = (ConfigRulesProperty.Jsii$Proxy) o;

                if (!riskLevel.equals(that.riskLevel)) return false;
                if (this.configRuleId != null ? !this.configRuleId.equals(that.configRuleId) : that.configRuleId != null) return false;
                if (this.configRuleName != null ? !this.configRuleName.equals(that.configRuleName) : that.configRuleName != null) return false;
                if (this.configRuleParameters != null ? !this.configRuleParameters.equals(that.configRuleParameters) : that.configRuleParameters != null) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                return this.managedRuleIdentifier != null ? this.managedRuleIdentifier.equals(that.managedRuleIdentifier) : that.managedRuleIdentifier == null;
            }

            @Override
            public final int hashCode() {
                int result = this.riskLevel.hashCode();
                result = 31 * result + (this.configRuleId != null ? this.configRuleId.hashCode() : 0);
                result = 31 * result + (this.configRuleName != null ? this.configRuleName.hashCode() : 0);
                result = 31 * result + (this.configRuleParameters != null ? this.configRuleParameters.hashCode() : 0);
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.managedRuleIdentifier != null ? this.managedRuleIdentifier.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.RosAggregateCompliancePack}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.RosAggregateCompliancePack> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.config.RosAggregateCompliancePackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.RosAggregateCompliancePackProps.Builder();
        }

        /**
         * @return {@code this}
         * @param aggregatorId This parameter is required.
         */
        public Builder aggregatorId(final java.lang.String aggregatorId) {
            this.props.aggregatorId(aggregatorId);
            return this;
        }
        /**
         * @return {@code this}
         * @param aggregatorId This parameter is required.
         */
        public Builder aggregatorId(final com.aliyun.ros.cdk.core.IResolvable aggregatorId) {
            this.props.aggregatorId(aggregatorId);
            return this;
        }

        /**
         * @return {@code this}
         * @param compliancePackName This parameter is required.
         */
        public Builder compliancePackName(final java.lang.String compliancePackName) {
            this.props.compliancePackName(compliancePackName);
            return this;
        }
        /**
         * @return {@code this}
         * @param compliancePackName This parameter is required.
         */
        public Builder compliancePackName(final com.aliyun.ros.cdk.core.IResolvable compliancePackName) {
            this.props.compliancePackName(compliancePackName);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param riskLevel This parameter is required.
         */
        public Builder riskLevel(final java.lang.Number riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param riskLevel This parameter is required.
         */
        public Builder riskLevel(final com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param compliancePackTemplateId This parameter is required.
         */
        public Builder compliancePackTemplateId(final java.lang.String compliancePackTemplateId) {
            this.props.compliancePackTemplateId(compliancePackTemplateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param compliancePackTemplateId This parameter is required.
         */
        public Builder compliancePackTemplateId(final com.aliyun.ros.cdk.core.IResolvable compliancePackTemplateId) {
            this.props.compliancePackTemplateId(compliancePackTemplateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param configRules This parameter is required.
         */
        public Builder configRules(final com.aliyun.ros.cdk.core.IResolvable configRules) {
            this.props.configRules(configRules);
            return this;
        }
        /**
         * @return {@code this}
         * @param configRules This parameter is required.
         */
        public Builder configRules(final java.util.List<? extends java.lang.Object> configRules) {
            this.props.configRules(configRules);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultEnable This parameter is required.
         */
        public Builder defaultEnable(final java.lang.Boolean defaultEnable) {
            this.props.defaultEnable(defaultEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultEnable This parameter is required.
         */
        public Builder defaultEnable(final com.aliyun.ros.cdk.core.IResolvable defaultEnable) {
            this.props.defaultEnable(defaultEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param excludeRegionIdsScope This parameter is required.
         */
        public Builder excludeRegionIdsScope(final java.lang.String excludeRegionIdsScope) {
            this.props.excludeRegionIdsScope(excludeRegionIdsScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param excludeRegionIdsScope This parameter is required.
         */
        public Builder excludeRegionIdsScope(final com.aliyun.ros.cdk.core.IResolvable excludeRegionIdsScope) {
            this.props.excludeRegionIdsScope(excludeRegionIdsScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param excludeResourceGroupIdsScope This parameter is required.
         */
        public Builder excludeResourceGroupIdsScope(final java.lang.String excludeResourceGroupIdsScope) {
            this.props.excludeResourceGroupIdsScope(excludeResourceGroupIdsScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param excludeResourceGroupIdsScope This parameter is required.
         */
        public Builder excludeResourceGroupIdsScope(final com.aliyun.ros.cdk.core.IResolvable excludeResourceGroupIdsScope) {
            this.props.excludeResourceGroupIdsScope(excludeResourceGroupIdsScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param excludeResourceIdsScope This parameter is required.
         */
        public Builder excludeResourceIdsScope(final com.aliyun.ros.cdk.core.IResolvable excludeResourceIdsScope) {
            this.props.excludeResourceIdsScope(excludeResourceIdsScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param excludeResourceIdsScope This parameter is required.
         */
        public Builder excludeResourceIdsScope(final java.util.List<? extends java.lang.Object> excludeResourceIdsScope) {
            this.props.excludeResourceIdsScope(excludeResourceIdsScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param regionIdsScope This parameter is required.
         */
        public Builder regionIdsScope(final com.aliyun.ros.cdk.core.IResolvable regionIdsScope) {
            this.props.regionIdsScope(regionIdsScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param regionIdsScope This parameter is required.
         */
        public Builder regionIdsScope(final java.util.List<? extends java.lang.Object> regionIdsScope) {
            this.props.regionIdsScope(regionIdsScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupIdsScope This parameter is required.
         */
        public Builder resourceGroupIdsScope(final com.aliyun.ros.cdk.core.IResolvable resourceGroupIdsScope) {
            this.props.resourceGroupIdsScope(resourceGroupIdsScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupIdsScope This parameter is required.
         */
        public Builder resourceGroupIdsScope(final java.util.List<? extends java.lang.Object> resourceGroupIdsScope) {
            this.props.resourceGroupIdsScope(resourceGroupIdsScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceIdsScope This parameter is required.
         */
        public Builder resourceIdsScope(final java.lang.String resourceIdsScope) {
            this.props.resourceIdsScope(resourceIdsScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceIdsScope This parameter is required.
         */
        public Builder resourceIdsScope(final com.aliyun.ros.cdk.core.IResolvable resourceIdsScope) {
            this.props.resourceIdsScope(resourceIdsScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param tagKeyScope This parameter is required.
         */
        public Builder tagKeyScope(final java.lang.String tagKeyScope) {
            this.props.tagKeyScope(tagKeyScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param tagKeyScope This parameter is required.
         */
        public Builder tagKeyScope(final com.aliyun.ros.cdk.core.IResolvable tagKeyScope) {
            this.props.tagKeyScope(tagKeyScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param tagValueScope This parameter is required.
         */
        public Builder tagValueScope(final java.lang.String tagValueScope) {
            this.props.tagValueScope(tagValueScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param tagValueScope This parameter is required.
         */
        public Builder tagValueScope(final com.aliyun.ros.cdk.core.IResolvable tagValueScope) {
            this.props.tagValueScope(tagValueScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateContent This parameter is required.
         */
        public Builder templateContent(final java.lang.String templateContent) {
            this.props.templateContent(templateContent);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateContent This parameter is required.
         */
        public Builder templateContent(final com.aliyun.ros.cdk.core.IResolvable templateContent) {
            this.props.templateContent(templateContent);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.config.RosAggregateCompliancePack}.
         */
        @Override
        public com.aliyun.ros.cdk.config.RosAggregateCompliancePack build() {
            return new com.aliyun.ros.cdk.config.RosAggregateCompliancePack(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
