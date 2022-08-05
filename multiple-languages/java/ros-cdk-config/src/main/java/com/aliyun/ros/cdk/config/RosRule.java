package com.aliyun.ros.cdk.config;

/**
 * A ROS template type:  `ALIYUN::Config::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:03.225Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosRule")
public class RosRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.config.RosRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::Config::Rule`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RosRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigRuleArn() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigRuleArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigRuleTriggerTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigRuleTriggerTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEventSource() {
        return software.amazon.jsii.Kernel.get(this, "attrEventSource", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExcludeResourceIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "attrExcludeResourceIdsScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInputParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrInputParameters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaximumExecutionFrequency() {
        return software.amazon.jsii.Kernel.get(this, "attrMaximumExecutionFrequency", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRegionIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionIdsScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceTypesScope() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceTypesScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRiskLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceIdentifier", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceOwner() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceOwner", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTagKeyScope() {
        return software.amazon.jsii.Kernel.get(this, "attrTagKeyScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTagValueScope() {
        return software.amazon.jsii.Kernel.get(this, "attrTagValueScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConfigRuleTriggerTypes() {
        return software.amazon.jsii.Kernel.get(this, "configRuleTriggerTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigRuleTriggerTypes(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "configRuleTriggerTypes", java.util.Objects.requireNonNull(value, "configRuleTriggerTypes is required"));
    }

    /**
     */
    public void setConfigRuleTriggerTypes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configRuleTriggerTypes", java.util.Objects.requireNonNull(value, "configRuleTriggerTypes is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getResourceTypesScope() {
        return software.amazon.jsii.Kernel.get(this, "resourceTypesScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceTypesScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceTypesScope", java.util.Objects.requireNonNull(value, "resourceTypesScope is required"));
    }

    /**
     */
    public void setResourceTypesScope(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "resourceTypesScope", java.util.Objects.requireNonNull(value, "resourceTypesScope is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "sourceIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceIdentifier(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceIdentifier", java.util.Objects.requireNonNull(value, "sourceIdentifier is required"));
    }

    /**
     */
    public void setSourceIdentifier(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceIdentifier", java.util.Objects.requireNonNull(value, "sourceIdentifier is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceOwner() {
        return software.amazon.jsii.Kernel.get(this, "sourceOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceOwner(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceOwner", java.util.Objects.requireNonNull(value, "sourceOwner is required"));
    }

    /**
     */
    public void setSourceOwner(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceOwner", java.util.Objects.requireNonNull(value, "sourceOwner is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcludeResourceIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "excludeResourceIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcludeResourceIdsScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "excludeResourceIdsScope", value);
    }

    /**
     */
    public void setExcludeResourceIdsScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excludeResourceIdsScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInputParameters() {
        return software.amazon.jsii.Kernel.get(this, "inputParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInputParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "inputParameters", value);
    }

    /**
     */
    public void setInputParameters(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "inputParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaximumExecutionFrequency() {
        return software.amazon.jsii.Kernel.get(this, "maximumExecutionFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaximumExecutionFrequency(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "maximumExecutionFrequency", value);
    }

    /**
     */
    public void setMaximumExecutionFrequency(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maximumExecutionFrequency", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRegionIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "regionIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegionIdsScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "regionIdsScope", value);
    }

    /**
     */
    public void setRegionIdsScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "regionIdsScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupIdsScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupIdsScope", value);
    }

    /**
     */
    public void setResourceGroupIdsScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupIdsScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTagKeyLogicScope() {
        return software.amazon.jsii.Kernel.get(this, "tagKeyLogicScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTagKeyLogicScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tagKeyLogicScope", value);
    }

    /**
     */
    public void setTagKeyLogicScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tagKeyLogicScope", value);
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
     * A fluent builder for {@link com.aliyun.ros.cdk.config.RosRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.RosRule> {
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
        private final com.aliyun.ros.cdk.config.RosRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.RosRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param configRuleTriggerTypes This parameter is required.
         */
        public Builder configRuleTriggerTypes(final java.lang.String configRuleTriggerTypes) {
            this.props.configRuleTriggerTypes(configRuleTriggerTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param configRuleTriggerTypes This parameter is required.
         */
        public Builder configRuleTriggerTypes(final com.aliyun.ros.cdk.core.IResolvable configRuleTriggerTypes) {
            this.props.configRuleTriggerTypes(configRuleTriggerTypes);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceTypesScope This parameter is required.
         */
        public Builder resourceTypesScope(final com.aliyun.ros.cdk.core.IResolvable resourceTypesScope) {
            this.props.resourceTypesScope(resourceTypesScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceTypesScope This parameter is required.
         */
        public Builder resourceTypesScope(final java.util.List<? extends java.lang.Object> resourceTypesScope) {
            this.props.resourceTypesScope(resourceTypesScope);
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
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceIdentifier This parameter is required.
         */
        public Builder sourceIdentifier(final java.lang.String sourceIdentifier) {
            this.props.sourceIdentifier(sourceIdentifier);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceIdentifier This parameter is required.
         */
        public Builder sourceIdentifier(final com.aliyun.ros.cdk.core.IResolvable sourceIdentifier) {
            this.props.sourceIdentifier(sourceIdentifier);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceOwner This parameter is required.
         */
        public Builder sourceOwner(final java.lang.String sourceOwner) {
            this.props.sourceOwner(sourceOwner);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceOwner This parameter is required.
         */
        public Builder sourceOwner(final com.aliyun.ros.cdk.core.IResolvable sourceOwner) {
            this.props.sourceOwner(sourceOwner);
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
         * @param excludeResourceIdsScope This parameter is required.
         */
        public Builder excludeResourceIdsScope(final java.lang.String excludeResourceIdsScope) {
            this.props.excludeResourceIdsScope(excludeResourceIdsScope);
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
         * @param inputParameters This parameter is required.
         */
        public Builder inputParameters(final com.aliyun.ros.cdk.core.IResolvable inputParameters) {
            this.props.inputParameters(inputParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param inputParameters This parameter is required.
         */
        public Builder inputParameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> inputParameters) {
            this.props.inputParameters(inputParameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param maximumExecutionFrequency This parameter is required.
         */
        public Builder maximumExecutionFrequency(final java.lang.String maximumExecutionFrequency) {
            this.props.maximumExecutionFrequency(maximumExecutionFrequency);
            return this;
        }
        /**
         * @return {@code this}
         * @param maximumExecutionFrequency This parameter is required.
         */
        public Builder maximumExecutionFrequency(final com.aliyun.ros.cdk.core.IResolvable maximumExecutionFrequency) {
            this.props.maximumExecutionFrequency(maximumExecutionFrequency);
            return this;
        }

        /**
         * @return {@code this}
         * @param regionIdsScope This parameter is required.
         */
        public Builder regionIdsScope(final java.lang.String regionIdsScope) {
            this.props.regionIdsScope(regionIdsScope);
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
         * @param resourceGroupIdsScope This parameter is required.
         */
        public Builder resourceGroupIdsScope(final java.lang.String resourceGroupIdsScope) {
            this.props.resourceGroupIdsScope(resourceGroupIdsScope);
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
         * @param tagKeyLogicScope This parameter is required.
         */
        public Builder tagKeyLogicScope(final java.lang.String tagKeyLogicScope) {
            this.props.tagKeyLogicScope(tagKeyLogicScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param tagKeyLogicScope This parameter is required.
         */
        public Builder tagKeyLogicScope(final com.aliyun.ros.cdk.core.IResolvable tagKeyLogicScope) {
            this.props.tagKeyLogicScope(tagKeyLogicScope);
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.config.RosRule}.
         */
        @Override
        public com.aliyun.ros.cdk.config.RosRule build() {
            return new com.aliyun.ros.cdk.config.RosRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
