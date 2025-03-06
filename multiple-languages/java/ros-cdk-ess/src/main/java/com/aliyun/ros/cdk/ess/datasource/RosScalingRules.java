package com.aliyun.ros.cdk.ess.datasource;

/**
 * This class is a base encapsulation around the ROS resource type <code>DATASOURCE::ESS::ScalingRules</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.855Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.RosScalingRules")
public class RosScalingRules extends com.aliyun.ros.cdk.core.RosResource {

    protected RosScalingRules(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosScalingRules(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ess.datasource.RosScalingRules.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosScalingRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.RosScalingRulesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleIds() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRules() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRefreshOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "refreshOptions", value);
    }

    /**
     */
    public void setRefreshOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "refreshOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", value);
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleAris() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleAris", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleAris(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "scalingRuleAris", value);
    }

    /**
     */
    public void setScalingRuleAris(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleAris", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleIds() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "scalingRuleIds", value);
    }

    /**
     */
    public void setScalingRuleIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleNames() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "scalingRuleNames", value);
    }

    /**
     */
    public void setScalingRuleNames(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleNames", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleType() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleType", value);
    }

    /**
     */
    public void setScalingRuleType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShowAlarmRules() {
        return software.amazon.jsii.Kernel.get(this, "showAlarmRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShowAlarmRules(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "showAlarmRules", value);
    }

    /**
     */
    public void setShowAlarmRules(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "showAlarmRules", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.datasource.RosScalingRules}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.datasource.RosScalingRules> {
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
        private final com.aliyun.ros.cdk.ess.datasource.RosScalingRulesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.datasource.RosScalingRulesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param refreshOptions This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param refreshOptions This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleAris This parameter is required.
         */
        public Builder scalingRuleAris(final java.util.List<? extends java.lang.Object> scalingRuleAris) {
            this.props.scalingRuleAris(scalingRuleAris);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleAris This parameter is required.
         */
        public Builder scalingRuleAris(final com.aliyun.ros.cdk.core.IResolvable scalingRuleAris) {
            this.props.scalingRuleAris(scalingRuleAris);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleIds This parameter is required.
         */
        public Builder scalingRuleIds(final java.util.List<? extends java.lang.Object> scalingRuleIds) {
            this.props.scalingRuleIds(scalingRuleIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleIds This parameter is required.
         */
        public Builder scalingRuleIds(final com.aliyun.ros.cdk.core.IResolvable scalingRuleIds) {
            this.props.scalingRuleIds(scalingRuleIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleNames This parameter is required.
         */
        public Builder scalingRuleNames(final java.util.List<? extends java.lang.Object> scalingRuleNames) {
            this.props.scalingRuleNames(scalingRuleNames);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleNames This parameter is required.
         */
        public Builder scalingRuleNames(final com.aliyun.ros.cdk.core.IResolvable scalingRuleNames) {
            this.props.scalingRuleNames(scalingRuleNames);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleType This parameter is required.
         */
        public Builder scalingRuleType(final java.lang.String scalingRuleType) {
            this.props.scalingRuleType(scalingRuleType);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleType This parameter is required.
         */
        public Builder scalingRuleType(final com.aliyun.ros.cdk.core.IResolvable scalingRuleType) {
            this.props.scalingRuleType(scalingRuleType);
            return this;
        }

        /**
         * @return {@code this}
         * @param showAlarmRules This parameter is required.
         */
        public Builder showAlarmRules(final java.lang.Boolean showAlarmRules) {
            this.props.showAlarmRules(showAlarmRules);
            return this;
        }
        /**
         * @return {@code this}
         * @param showAlarmRules This parameter is required.
         */
        public Builder showAlarmRules(final com.aliyun.ros.cdk.core.IResolvable showAlarmRules) {
            this.props.showAlarmRules(showAlarmRules);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.datasource.RosScalingRules}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.datasource.RosScalingRules build() {
            return new com.aliyun.ros.cdk.ess.datasource.RosScalingRules(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
