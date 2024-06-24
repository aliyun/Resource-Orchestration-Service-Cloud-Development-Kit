package com.aliyun.ros.cdk.config;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Config::CompliancePack</code>, which is used to create a compliance package.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:05.273Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosCompliancePack")
public class RosCompliancePack extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCompliancePack(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCompliancePack(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.config.RosCompliancePack.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCompliancePack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RosCompliancePackProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountId() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCompliancePackId() {
        return software.amazon.jsii.Kernel.get(this, "attrCompliancePackId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCompliancePackName() {
        return software.amazon.jsii.Kernel.get(this, "attrCompliancePackName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCompliancePackTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrCompliancePackTemplateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRiskLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getConfigRules() {
        return software.amazon.jsii.Kernel.get(this, "configRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigRules(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "configRules", java.util.Objects.requireNonNull(value, "configRules is required"));
    }

    /**
     */
    public void setConfigRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configRules", java.util.Objects.requireNonNull(value, "configRules is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfigRuleIds() {
        return software.amazon.jsii.Kernel.get(this, "configRuleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigRuleIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configRuleIds", value);
    }

    /**
     */
    public void setConfigRuleIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.config.RosCompliancePack.ConfigRuleIdsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.config.RosCompliancePack.ConfigRuleIdsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "configRuleIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosCompliancePack.ConfigRuleIdsProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigRuleIdsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigRuleIdsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigRuleId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigRuleIdsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigRuleIdsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigRuleIdsProperty> {
            java.lang.Object configRuleId;

            /**
             * Sets the value of {@link ConfigRuleIdsProperty#getConfigRuleId}
             * @param configRuleId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configRuleId(java.lang.String configRuleId) {
                this.configRuleId = configRuleId;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRuleIdsProperty#getConfigRuleId}
             * @param configRuleId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configRuleId(com.aliyun.ros.cdk.core.IResolvable configRuleId) {
                this.configRuleId = configRuleId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigRuleIdsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigRuleIdsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConfigRuleIdsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigRuleIdsProperty {
            private final java.lang.Object configRuleId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.configRuleId = software.amazon.jsii.Kernel.get(this, "configRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.configRuleId = builder.configRuleId;
            }

            @Override
            public final java.lang.Object getConfigRuleId() {
                return this.configRuleId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConfigRuleId() != null) {
                    data.set("configRuleId", om.valueToTree(this.getConfigRuleId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosCompliancePack.ConfigRuleIdsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigRuleIdsProperty.Jsii$Proxy that = (ConfigRuleIdsProperty.Jsii$Proxy) o;

                return this.configRuleId != null ? this.configRuleId.equals(that.configRuleId) : that.configRuleId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.configRuleId != null ? this.configRuleId.hashCode() : 0;
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.RosCompliancePack}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.RosCompliancePack> {
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
        private final com.aliyun.ros.cdk.config.RosCompliancePackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.RosCompliancePackProps.Builder();
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
         * @param configRules This parameter is required.
         */
        public Builder configRules(final java.lang.String configRules) {
            this.props.configRules(configRules);
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
         * @param configRuleIds This parameter is required.
         */
        public Builder configRuleIds(final com.aliyun.ros.cdk.core.IResolvable configRuleIds) {
            this.props.configRuleIds(configRuleIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param configRuleIds This parameter is required.
         */
        public Builder configRuleIds(final java.util.List<? extends java.lang.Object> configRuleIds) {
            this.props.configRuleIds(configRuleIds);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.config.RosCompliancePack}.
         */
        @Override
        public com.aliyun.ros.cdk.config.RosCompliancePack build() {
            return new com.aliyun.ros.cdk.config.RosCompliancePack(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
