package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::BaselineStrategy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.539Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosBaselineStrategy")
public class RosBaselineStrategy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBaselineStrategy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBaselineStrategy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosBaselineStrategy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBaselineStrategy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosBaselineStrategyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBaselineStrategyId() {
        return software.amazon.jsii.Kernel.get(this, "attrBaselineStrategyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBaselineStrategyName() {
        return software.amazon.jsii.Kernel.get(this, "attrBaselineStrategyName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCustomType() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCycleDays() {
        return software.amazon.jsii.Kernel.get(this, "attrCycleDays", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRiskSubTypeName() {
        return software.amazon.jsii.Kernel.get(this, "attrRiskSubTypeName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetType() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBaselineStrategyName() {
        return software.amazon.jsii.Kernel.get(this, "baselineStrategyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBaselineStrategyName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "baselineStrategyName", java.util.Objects.requireNonNull(value, "baselineStrategyName is required"));
    }

    /**
     */
    public void setBaselineStrategyName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "baselineStrategyName", java.util.Objects.requireNonNull(value, "baselineStrategyName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCustomType() {
        return software.amazon.jsii.Kernel.get(this, "customType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "customType", java.util.Objects.requireNonNull(value, "customType is required"));
    }

    /**
     */
    public void setCustomType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customType", java.util.Objects.requireNonNull(value, "customType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCycleDays() {
        return software.amazon.jsii.Kernel.get(this, "cycleDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCycleDays(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cycleDays", java.util.Objects.requireNonNull(value, "cycleDays is required"));
    }

    /**
     */
    public void setCycleDays(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cycleDays", java.util.Objects.requireNonNull(value, "cycleDays is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEndTime() {
        return software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndTime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endTime", java.util.Objects.requireNonNull(value, "endTime is required"));
    }

    /**
     */
    public void setEndTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endTime", java.util.Objects.requireNonNull(value, "endTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRiskSubTypeName() {
        return software.amazon.jsii.Kernel.get(this, "riskSubTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRiskSubTypeName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "riskSubTypeName", java.util.Objects.requireNonNull(value, "riskSubTypeName is required"));
    }

    /**
     */
    public void setRiskSubTypeName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "riskSubTypeName", java.util.Objects.requireNonNull(value, "riskSubTypeName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStartTime() {
        return software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStartTime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "startTime", java.util.Objects.requireNonNull(value, "startTime is required"));
    }

    /**
     */
    public void setStartTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "startTime", java.util.Objects.requireNonNull(value, "startTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetType() {
        return software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetType", java.util.Objects.requireNonNull(value, "targetType is required"));
    }

    /**
     */
    public void setTargetType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetType", java.util.Objects.requireNonNull(value, "targetType is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosBaselineStrategy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosBaselineStrategy> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosBaselineStrategyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosBaselineStrategyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param baselineStrategyName This parameter is required.
         */
        public Builder baselineStrategyName(final java.lang.String baselineStrategyName) {
            this.props.baselineStrategyName(baselineStrategyName);
            return this;
        }
        /**
         * @return {@code this}
         * @param baselineStrategyName This parameter is required.
         */
        public Builder baselineStrategyName(final com.aliyun.ros.cdk.core.IResolvable baselineStrategyName) {
            this.props.baselineStrategyName(baselineStrategyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param customType This parameter is required.
         */
        public Builder customType(final java.lang.String customType) {
            this.props.customType(customType);
            return this;
        }
        /**
         * @return {@code this}
         * @param customType This parameter is required.
         */
        public Builder customType(final com.aliyun.ros.cdk.core.IResolvable customType) {
            this.props.customType(customType);
            return this;
        }

        /**
         * @return {@code this}
         * @param cycleDays This parameter is required.
         */
        public Builder cycleDays(final java.lang.Number cycleDays) {
            this.props.cycleDays(cycleDays);
            return this;
        }
        /**
         * @return {@code this}
         * @param cycleDays This parameter is required.
         */
        public Builder cycleDays(final com.aliyun.ros.cdk.core.IResolvable cycleDays) {
            this.props.cycleDays(cycleDays);
            return this;
        }

        /**
         * @return {@code this}
         * @param endTime This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param endTime This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param riskSubTypeName This parameter is required.
         */
        public Builder riskSubTypeName(final java.lang.String riskSubTypeName) {
            this.props.riskSubTypeName(riskSubTypeName);
            return this;
        }
        /**
         * @return {@code this}
         * @param riskSubTypeName This parameter is required.
         */
        public Builder riskSubTypeName(final com.aliyun.ros.cdk.core.IResolvable riskSubTypeName) {
            this.props.riskSubTypeName(riskSubTypeName);
            return this;
        }

        /**
         * @return {@code this}
         * @param startTime This parameter is required.
         */
        public Builder startTime(final java.lang.String startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param startTime This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetType This parameter is required.
         */
        public Builder targetType(final java.lang.String targetType) {
            this.props.targetType(targetType);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetType This parameter is required.
         */
        public Builder targetType(final com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.props.targetType(targetType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosBaselineStrategy}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosBaselineStrategy build() {
            return new com.aliyun.ros.cdk.threatdetection.RosBaselineStrategy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
