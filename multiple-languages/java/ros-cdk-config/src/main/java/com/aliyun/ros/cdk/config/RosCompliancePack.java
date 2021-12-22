package com.aliyun.ros.cdk.config;

/**
 * A ROS template type:  `ALIYUN::Config::CompliancePack`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:57.186Z")
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
     * Create a new `ALIYUN::Config::CompliancePack`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
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
        software.amazon.jsii.Kernel.set(this, "configRules", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosCompliancePack.ConfigRuleParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigRuleParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigRuleParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getParameterName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getParameterValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRequired() {
            return null;
        }

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
            java.lang.Object required;

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getParameterName}
             * @param parameterName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterName(java.lang.String parameterName) {
                this.parameterName = parameterName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getParameterName}
             * @param parameterName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterName(com.aliyun.ros.cdk.core.IResolvable parameterName) {
                this.parameterName = parameterName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getParameterValue}
             * @param parameterValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterValue(java.lang.String parameterValue) {
                this.parameterValue = parameterValue;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getParameterValue}
             * @param parameterValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterValue(com.aliyun.ros.cdk.core.IResolvable parameterValue) {
                this.parameterValue = parameterValue;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getRequired}
             * @param required the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder required(java.lang.Boolean required) {
                this.required = required;
                return this;
            }

            /**
             * Sets the value of {@link ConfigRuleParametersProperty#getRequired}
             * @param required the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder required(com.aliyun.ros.cdk.core.IResolvable required) {
                this.required = required;
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
            private final java.lang.Object required;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.parameterName = software.amazon.jsii.Kernel.get(this, "parameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.parameterValue = software.amazon.jsii.Kernel.get(this, "parameterValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.required = software.amazon.jsii.Kernel.get(this, "required", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.parameterName = builder.parameterName;
                this.parameterValue = builder.parameterValue;
                this.required = builder.required;
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
            public final java.lang.Object getRequired() {
                return this.required;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getParameterName() != null) {
                    data.set("parameterName", om.valueToTree(this.getParameterName()));
                }
                if (this.getParameterValue() != null) {
                    data.set("parameterValue", om.valueToTree(this.getParameterValue()));
                }
                if (this.getRequired() != null) {
                    data.set("required", om.valueToTree(this.getRequired()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosCompliancePack.ConfigRuleParametersProperty"));
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

                if (this.parameterName != null ? !this.parameterName.equals(that.parameterName) : that.parameterName != null) return false;
                if (this.parameterValue != null ? !this.parameterValue.equals(that.parameterValue) : that.parameterValue != null) return false;
                return this.required != null ? this.required.equals(that.required) : that.required == null;
            }

            @Override
            public final int hashCode() {
                int result = this.parameterName != null ? this.parameterName.hashCode() : 0;
                result = 31 * result + (this.parameterValue != null ? this.parameterValue.hashCode() : 0);
                result = 31 * result + (this.required != null ? this.required.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosCompliancePack.ConfigRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigRulesProperty extends software.amazon.jsii.JsiiSerializable {

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
            java.lang.Object configRuleId;
            java.lang.Object configRuleName;
            java.lang.Object configRuleParameters;
            java.lang.Object managedRuleIdentifier;

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
            private final java.lang.Object configRuleId;
            private final java.lang.Object configRuleName;
            private final java.lang.Object configRuleParameters;
            private final java.lang.Object managedRuleIdentifier;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.configRuleId = software.amazon.jsii.Kernel.get(this, "configRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configRuleName = software.amazon.jsii.Kernel.get(this, "configRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configRuleParameters = software.amazon.jsii.Kernel.get(this, "configRuleParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.managedRuleIdentifier = software.amazon.jsii.Kernel.get(this, "managedRuleIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.configRuleId = builder.configRuleId;
                this.configRuleName = builder.configRuleName;
                this.configRuleParameters = builder.configRuleParameters;
                this.managedRuleIdentifier = builder.managedRuleIdentifier;
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
            public final java.lang.Object getManagedRuleIdentifier() {
                return this.managedRuleIdentifier;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConfigRuleId() != null) {
                    data.set("configRuleId", om.valueToTree(this.getConfigRuleId()));
                }
                if (this.getConfigRuleName() != null) {
                    data.set("configRuleName", om.valueToTree(this.getConfigRuleName()));
                }
                if (this.getConfigRuleParameters() != null) {
                    data.set("configRuleParameters", om.valueToTree(this.getConfigRuleParameters()));
                }
                if (this.getManagedRuleIdentifier() != null) {
                    data.set("managedRuleIdentifier", om.valueToTree(this.getManagedRuleIdentifier()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosCompliancePack.ConfigRulesProperty"));
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

                if (this.configRuleId != null ? !this.configRuleId.equals(that.configRuleId) : that.configRuleId != null) return false;
                if (this.configRuleName != null ? !this.configRuleName.equals(that.configRuleName) : that.configRuleName != null) return false;
                if (this.configRuleParameters != null ? !this.configRuleParameters.equals(that.configRuleParameters) : that.configRuleParameters != null) return false;
                return this.managedRuleIdentifier != null ? this.managedRuleIdentifier.equals(that.managedRuleIdentifier) : that.managedRuleIdentifier == null;
            }

            @Override
            public final int hashCode() {
                int result = this.configRuleId != null ? this.configRuleId.hashCode() : 0;
                result = 31 * result + (this.configRuleName != null ? this.configRuleName.hashCode() : 0);
                result = 31 * result + (this.configRuleParameters != null ? this.configRuleParameters.hashCode() : 0);
                result = 31 * result + (this.managedRuleIdentifier != null ? this.managedRuleIdentifier.hashCode() : 0);
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
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.config.RosCompliancePack}.
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
