package com.aliyun.ros.cdk.ess;

/**
 * A ROS template type:  <code>ALIYUN::ESS::ScalingRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:02.034Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingRule")
public class RosScalingRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosScalingRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosScalingRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ess.RosScalingRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ESS::ScalingRule</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.RosScalingRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleAri() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleAri", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAdjustmentType() {
        return software.amazon.jsii.Kernel.get(this, "adjustmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdjustmentType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "adjustmentType", value);
    }

    /**
     */
    public void setAdjustmentType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "adjustmentType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAdjustmentValue() {
        return software.amazon.jsii.Kernel.get(this, "adjustmentValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdjustmentValue(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "adjustmentValue", value);
    }

    /**
     */
    public void setAdjustmentValue(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "adjustmentValue", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCooldown() {
        return software.amazon.jsii.Kernel.get(this, "cooldown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCooldown(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cooldown", value);
    }

    /**
     */
    public void setCooldown(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cooldown", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDisableScaleIn() {
        return software.amazon.jsii.Kernel.get(this, "disableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisableScaleIn(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "disableScaleIn", value);
    }

    /**
     */
    public void setDisableScaleIn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "disableScaleIn", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEstimatedInstanceWarmup() {
        return software.amazon.jsii.Kernel.get(this, "estimatedInstanceWarmup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEstimatedInstanceWarmup(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "estimatedInstanceWarmup", value);
    }

    /**
     */
    public void setEstimatedInstanceWarmup(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "estimatedInstanceWarmup", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInitialMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "initialMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInitialMaxSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "initialMaxSize", value);
    }

    /**
     */
    public void setInitialMaxSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "initialMaxSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMetricName() {
        return software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMetricName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "metricName", value);
    }

    /**
     */
    public void setMetricName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "metricName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinAdjustmentMagnitude() {
        return software.amazon.jsii.Kernel.get(this, "minAdjustmentMagnitude", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinAdjustmentMagnitude(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minAdjustmentMagnitude", value);
    }

    /**
     */
    public void setMinAdjustmentMagnitude(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minAdjustmentMagnitude", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveScalingMode() {
        return software.amazon.jsii.Kernel.get(this, "predictiveScalingMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPredictiveScalingMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "predictiveScalingMode", value);
    }

    /**
     */
    public void setPredictiveScalingMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "predictiveScalingMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveTaskBufferTime() {
        return software.amazon.jsii.Kernel.get(this, "predictiveTaskBufferTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPredictiveTaskBufferTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "predictiveTaskBufferTime", value);
    }

    /**
     */
    public void setPredictiveTaskBufferTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "predictiveTaskBufferTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveValueBehavior() {
        return software.amazon.jsii.Kernel.get(this, "predictiveValueBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPredictiveValueBehavior(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "predictiveValueBehavior", value);
    }

    /**
     */
    public void setPredictiveValueBehavior(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "predictiveValueBehavior", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveValueBuffer() {
        return software.amazon.jsii.Kernel.get(this, "predictiveValueBuffer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPredictiveValueBuffer(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "predictiveValueBuffer", value);
    }

    /**
     */
    public void setPredictiveValueBuffer(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "predictiveValueBuffer", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScaleInEvaluationCount() {
        return software.amazon.jsii.Kernel.get(this, "scaleInEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScaleInEvaluationCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "scaleInEvaluationCount", value);
    }

    /**
     */
    public void setScaleInEvaluationCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scaleInEvaluationCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScaleOutEvaluationCount() {
        return software.amazon.jsii.Kernel.get(this, "scaleOutEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScaleOutEvaluationCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "scaleOutEvaluationCount", value);
    }

    /**
     */
    public void setScaleOutEvaluationCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scaleOutEvaluationCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleName() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleName", value);
    }

    /**
     */
    public void setScalingRuleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleName", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getStepAdjustment() {
        return software.amazon.jsii.Kernel.get(this, "stepAdjustment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStepAdjustment(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "stepAdjustment", value);
    }

    /**
     */
    public void setStepAdjustment(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosScalingRule.StepAdjustmentProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosScalingRule.StepAdjustmentProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "stepAdjustment", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetValue() {
        return software.amazon.jsii.Kernel.get(this, "targetValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetValue(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "targetValue", value);
    }

    /**
     */
    public void setTargetValue(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetValue", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty")
    @software.amazon.jsii.Jsii.Proxy(StepAdjustmentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface StepAdjustmentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMetricIntervalLowerBound() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMetricIntervalUpperBound() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScalingAdjustment() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link StepAdjustmentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link StepAdjustmentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<StepAdjustmentProperty> {
            java.lang.Object metricIntervalLowerBound;
            java.lang.Object metricIntervalUpperBound;
            java.lang.Object scalingAdjustment;

            /**
             * Sets the value of {@link StepAdjustmentProperty#getMetricIntervalLowerBound}
             * @param metricIntervalLowerBound the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricIntervalLowerBound(java.lang.Number metricIntervalLowerBound) {
                this.metricIntervalLowerBound = metricIntervalLowerBound;
                return this;
            }

            /**
             * Sets the value of {@link StepAdjustmentProperty#getMetricIntervalLowerBound}
             * @param metricIntervalLowerBound the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricIntervalLowerBound(com.aliyun.ros.cdk.core.IResolvable metricIntervalLowerBound) {
                this.metricIntervalLowerBound = metricIntervalLowerBound;
                return this;
            }

            /**
             * Sets the value of {@link StepAdjustmentProperty#getMetricIntervalUpperBound}
             * @param metricIntervalUpperBound the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricIntervalUpperBound(java.lang.Number metricIntervalUpperBound) {
                this.metricIntervalUpperBound = metricIntervalUpperBound;
                return this;
            }

            /**
             * Sets the value of {@link StepAdjustmentProperty#getMetricIntervalUpperBound}
             * @param metricIntervalUpperBound the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricIntervalUpperBound(com.aliyun.ros.cdk.core.IResolvable metricIntervalUpperBound) {
                this.metricIntervalUpperBound = metricIntervalUpperBound;
                return this;
            }

            /**
             * Sets the value of {@link StepAdjustmentProperty#getScalingAdjustment}
             * @param scalingAdjustment the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scalingAdjustment(java.lang.Number scalingAdjustment) {
                this.scalingAdjustment = scalingAdjustment;
                return this;
            }

            /**
             * Sets the value of {@link StepAdjustmentProperty#getScalingAdjustment}
             * @param scalingAdjustment the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scalingAdjustment(com.aliyun.ros.cdk.core.IResolvable scalingAdjustment) {
                this.scalingAdjustment = scalingAdjustment;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link StepAdjustmentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public StepAdjustmentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link StepAdjustmentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StepAdjustmentProperty {
            private final java.lang.Object metricIntervalLowerBound;
            private final java.lang.Object metricIntervalUpperBound;
            private final java.lang.Object scalingAdjustment;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.metricIntervalLowerBound = software.amazon.jsii.Kernel.get(this, "metricIntervalLowerBound", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.metricIntervalUpperBound = software.amazon.jsii.Kernel.get(this, "metricIntervalUpperBound", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scalingAdjustment = software.amazon.jsii.Kernel.get(this, "scalingAdjustment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.metricIntervalLowerBound = builder.metricIntervalLowerBound;
                this.metricIntervalUpperBound = builder.metricIntervalUpperBound;
                this.scalingAdjustment = builder.scalingAdjustment;
            }

            @Override
            public final java.lang.Object getMetricIntervalLowerBound() {
                return this.metricIntervalLowerBound;
            }

            @Override
            public final java.lang.Object getMetricIntervalUpperBound() {
                return this.metricIntervalUpperBound;
            }

            @Override
            public final java.lang.Object getScalingAdjustment() {
                return this.scalingAdjustment;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMetricIntervalLowerBound() != null) {
                    data.set("metricIntervalLowerBound", om.valueToTree(this.getMetricIntervalLowerBound()));
                }
                if (this.getMetricIntervalUpperBound() != null) {
                    data.set("metricIntervalUpperBound", om.valueToTree(this.getMetricIntervalUpperBound()));
                }
                if (this.getScalingAdjustment() != null) {
                    data.set("scalingAdjustment", om.valueToTree(this.getScalingAdjustment()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                StepAdjustmentProperty.Jsii$Proxy that = (StepAdjustmentProperty.Jsii$Proxy) o;

                if (this.metricIntervalLowerBound != null ? !this.metricIntervalLowerBound.equals(that.metricIntervalLowerBound) : that.metricIntervalLowerBound != null) return false;
                if (this.metricIntervalUpperBound != null ? !this.metricIntervalUpperBound.equals(that.metricIntervalUpperBound) : that.metricIntervalUpperBound != null) return false;
                return this.scalingAdjustment != null ? this.scalingAdjustment.equals(that.scalingAdjustment) : that.scalingAdjustment == null;
            }

            @Override
            public final int hashCode() {
                int result = this.metricIntervalLowerBound != null ? this.metricIntervalLowerBound.hashCode() : 0;
                result = 31 * result + (this.metricIntervalUpperBound != null ? this.metricIntervalUpperBound.hashCode() : 0);
                result = 31 * result + (this.scalingAdjustment != null ? this.scalingAdjustment.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.RosScalingRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.RosScalingRule> {
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
        private final com.aliyun.ros.cdk.ess.RosScalingRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.RosScalingRuleProps.Builder();
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
         * @param adjustmentType This parameter is required.
         */
        public Builder adjustmentType(final java.lang.String adjustmentType) {
            this.props.adjustmentType(adjustmentType);
            return this;
        }
        /**
         * @return {@code this}
         * @param adjustmentType This parameter is required.
         */
        public Builder adjustmentType(final com.aliyun.ros.cdk.core.IResolvable adjustmentType) {
            this.props.adjustmentType(adjustmentType);
            return this;
        }

        /**
         * @return {@code this}
         * @param adjustmentValue This parameter is required.
         */
        public Builder adjustmentValue(final java.lang.Number adjustmentValue) {
            this.props.adjustmentValue(adjustmentValue);
            return this;
        }
        /**
         * @return {@code this}
         * @param adjustmentValue This parameter is required.
         */
        public Builder adjustmentValue(final com.aliyun.ros.cdk.core.IResolvable adjustmentValue) {
            this.props.adjustmentValue(adjustmentValue);
            return this;
        }

        /**
         * @return {@code this}
         * @param cooldown This parameter is required.
         */
        public Builder cooldown(final java.lang.Number cooldown) {
            this.props.cooldown(cooldown);
            return this;
        }
        /**
         * @return {@code this}
         * @param cooldown This parameter is required.
         */
        public Builder cooldown(final com.aliyun.ros.cdk.core.IResolvable cooldown) {
            this.props.cooldown(cooldown);
            return this;
        }

        /**
         * @return {@code this}
         * @param disableScaleIn This parameter is required.
         */
        public Builder disableScaleIn(final java.lang.Boolean disableScaleIn) {
            this.props.disableScaleIn(disableScaleIn);
            return this;
        }
        /**
         * @return {@code this}
         * @param disableScaleIn This parameter is required.
         */
        public Builder disableScaleIn(final com.aliyun.ros.cdk.core.IResolvable disableScaleIn) {
            this.props.disableScaleIn(disableScaleIn);
            return this;
        }

        /**
         * @return {@code this}
         * @param estimatedInstanceWarmup This parameter is required.
         */
        public Builder estimatedInstanceWarmup(final java.lang.Number estimatedInstanceWarmup) {
            this.props.estimatedInstanceWarmup(estimatedInstanceWarmup);
            return this;
        }
        /**
         * @return {@code this}
         * @param estimatedInstanceWarmup This parameter is required.
         */
        public Builder estimatedInstanceWarmup(final com.aliyun.ros.cdk.core.IResolvable estimatedInstanceWarmup) {
            this.props.estimatedInstanceWarmup(estimatedInstanceWarmup);
            return this;
        }

        /**
         * @return {@code this}
         * @param initialMaxSize This parameter is required.
         */
        public Builder initialMaxSize(final java.lang.Number initialMaxSize) {
            this.props.initialMaxSize(initialMaxSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param initialMaxSize This parameter is required.
         */
        public Builder initialMaxSize(final com.aliyun.ros.cdk.core.IResolvable initialMaxSize) {
            this.props.initialMaxSize(initialMaxSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param metricName This parameter is required.
         */
        public Builder metricName(final java.lang.String metricName) {
            this.props.metricName(metricName);
            return this;
        }
        /**
         * @return {@code this}
         * @param metricName This parameter is required.
         */
        public Builder metricName(final com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.props.metricName(metricName);
            return this;
        }

        /**
         * @return {@code this}
         * @param minAdjustmentMagnitude This parameter is required.
         */
        public Builder minAdjustmentMagnitude(final java.lang.Number minAdjustmentMagnitude) {
            this.props.minAdjustmentMagnitude(minAdjustmentMagnitude);
            return this;
        }
        /**
         * @return {@code this}
         * @param minAdjustmentMagnitude This parameter is required.
         */
        public Builder minAdjustmentMagnitude(final com.aliyun.ros.cdk.core.IResolvable minAdjustmentMagnitude) {
            this.props.minAdjustmentMagnitude(minAdjustmentMagnitude);
            return this;
        }

        /**
         * @return {@code this}
         * @param predictiveScalingMode This parameter is required.
         */
        public Builder predictiveScalingMode(final java.lang.String predictiveScalingMode) {
            this.props.predictiveScalingMode(predictiveScalingMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param predictiveScalingMode This parameter is required.
         */
        public Builder predictiveScalingMode(final com.aliyun.ros.cdk.core.IResolvable predictiveScalingMode) {
            this.props.predictiveScalingMode(predictiveScalingMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param predictiveTaskBufferTime This parameter is required.
         */
        public Builder predictiveTaskBufferTime(final java.lang.Number predictiveTaskBufferTime) {
            this.props.predictiveTaskBufferTime(predictiveTaskBufferTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param predictiveTaskBufferTime This parameter is required.
         */
        public Builder predictiveTaskBufferTime(final com.aliyun.ros.cdk.core.IResolvable predictiveTaskBufferTime) {
            this.props.predictiveTaskBufferTime(predictiveTaskBufferTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param predictiveValueBehavior This parameter is required.
         */
        public Builder predictiveValueBehavior(final java.lang.String predictiveValueBehavior) {
            this.props.predictiveValueBehavior(predictiveValueBehavior);
            return this;
        }
        /**
         * @return {@code this}
         * @param predictiveValueBehavior This parameter is required.
         */
        public Builder predictiveValueBehavior(final com.aliyun.ros.cdk.core.IResolvable predictiveValueBehavior) {
            this.props.predictiveValueBehavior(predictiveValueBehavior);
            return this;
        }

        /**
         * @return {@code this}
         * @param predictiveValueBuffer This parameter is required.
         */
        public Builder predictiveValueBuffer(final java.lang.Number predictiveValueBuffer) {
            this.props.predictiveValueBuffer(predictiveValueBuffer);
            return this;
        }
        /**
         * @return {@code this}
         * @param predictiveValueBuffer This parameter is required.
         */
        public Builder predictiveValueBuffer(final com.aliyun.ros.cdk.core.IResolvable predictiveValueBuffer) {
            this.props.predictiveValueBuffer(predictiveValueBuffer);
            return this;
        }

        /**
         * @return {@code this}
         * @param scaleInEvaluationCount This parameter is required.
         */
        public Builder scaleInEvaluationCount(final java.lang.Number scaleInEvaluationCount) {
            this.props.scaleInEvaluationCount(scaleInEvaluationCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param scaleInEvaluationCount This parameter is required.
         */
        public Builder scaleInEvaluationCount(final com.aliyun.ros.cdk.core.IResolvable scaleInEvaluationCount) {
            this.props.scaleInEvaluationCount(scaleInEvaluationCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param scaleOutEvaluationCount This parameter is required.
         */
        public Builder scaleOutEvaluationCount(final java.lang.Number scaleOutEvaluationCount) {
            this.props.scaleOutEvaluationCount(scaleOutEvaluationCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param scaleOutEvaluationCount This parameter is required.
         */
        public Builder scaleOutEvaluationCount(final com.aliyun.ros.cdk.core.IResolvable scaleOutEvaluationCount) {
            this.props.scaleOutEvaluationCount(scaleOutEvaluationCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleName This parameter is required.
         */
        public Builder scalingRuleName(final java.lang.String scalingRuleName) {
            this.props.scalingRuleName(scalingRuleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleName This parameter is required.
         */
        public Builder scalingRuleName(final com.aliyun.ros.cdk.core.IResolvable scalingRuleName) {
            this.props.scalingRuleName(scalingRuleName);
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
         * @param stepAdjustment This parameter is required.
         */
        public Builder stepAdjustment(final com.aliyun.ros.cdk.core.IResolvable stepAdjustment) {
            this.props.stepAdjustment(stepAdjustment);
            return this;
        }
        /**
         * @return {@code this}
         * @param stepAdjustment This parameter is required.
         */
        public Builder stepAdjustment(final java.util.List<? extends java.lang.Object> stepAdjustment) {
            this.props.stepAdjustment(stepAdjustment);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetValue This parameter is required.
         */
        public Builder targetValue(final java.lang.Number targetValue) {
            this.props.targetValue(targetValue);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetValue This parameter is required.
         */
        public Builder targetValue(final com.aliyun.ros.cdk.core.IResolvable targetValue) {
            this.props.targetValue(targetValue);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.RosScalingRule}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.RosScalingRule build() {
            return new com.aliyun.ros.cdk.ess.RosScalingRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
