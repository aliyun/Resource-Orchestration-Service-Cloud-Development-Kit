package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>ALIYUN::ESS::ScalingRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:02.037Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosScalingRuleProps.Jsii$Proxy.class)
public interface RosScalingRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdjustmentType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdjustmentValue() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCooldown() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableScaleIn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEstimatedInstanceWarmup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitialMaxSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetricName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinAdjustmentMagnitude() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveScalingMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveTaskBufferTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveValueBehavior() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveValueBuffer() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScaleInEvaluationCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScaleOutEvaluationCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStepAdjustment() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetValue() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosScalingRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosScalingRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosScalingRuleProps> {
        java.lang.Object scalingGroupId;
        java.lang.Object adjustmentType;
        java.lang.Object adjustmentValue;
        java.lang.Object cooldown;
        java.lang.Object disableScaleIn;
        java.lang.Object estimatedInstanceWarmup;
        java.lang.Object initialMaxSize;
        java.lang.Object metricName;
        java.lang.Object minAdjustmentMagnitude;
        java.lang.Object predictiveScalingMode;
        java.lang.Object predictiveTaskBufferTime;
        java.lang.Object predictiveValueBehavior;
        java.lang.Object predictiveValueBuffer;
        java.lang.Object scaleInEvaluationCount;
        java.lang.Object scaleOutEvaluationCount;
        java.lang.Object scalingRuleName;
        java.lang.Object scalingRuleType;
        java.lang.Object stepAdjustment;
        java.lang.Object targetValue;

        /**
         * Sets the value of {@link RosScalingRuleProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getAdjustmentType}
         * @param adjustmentType the value to be set.
         * @return {@code this}
         */
        public Builder adjustmentType(java.lang.String adjustmentType) {
            this.adjustmentType = adjustmentType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getAdjustmentType}
         * @param adjustmentType the value to be set.
         * @return {@code this}
         */
        public Builder adjustmentType(com.aliyun.ros.cdk.core.IResolvable adjustmentType) {
            this.adjustmentType = adjustmentType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getAdjustmentValue}
         * @param adjustmentValue the value to be set.
         * @return {@code this}
         */
        public Builder adjustmentValue(java.lang.Number adjustmentValue) {
            this.adjustmentValue = adjustmentValue;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getAdjustmentValue}
         * @param adjustmentValue the value to be set.
         * @return {@code this}
         */
        public Builder adjustmentValue(com.aliyun.ros.cdk.core.IResolvable adjustmentValue) {
            this.adjustmentValue = adjustmentValue;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getCooldown}
         * @param cooldown the value to be set.
         * @return {@code this}
         */
        public Builder cooldown(java.lang.Number cooldown) {
            this.cooldown = cooldown;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getCooldown}
         * @param cooldown the value to be set.
         * @return {@code this}
         */
        public Builder cooldown(com.aliyun.ros.cdk.core.IResolvable cooldown) {
            this.cooldown = cooldown;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getDisableScaleIn}
         * @param disableScaleIn the value to be set.
         * @return {@code this}
         */
        public Builder disableScaleIn(java.lang.Boolean disableScaleIn) {
            this.disableScaleIn = disableScaleIn;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getDisableScaleIn}
         * @param disableScaleIn the value to be set.
         * @return {@code this}
         */
        public Builder disableScaleIn(com.aliyun.ros.cdk.core.IResolvable disableScaleIn) {
            this.disableScaleIn = disableScaleIn;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getEstimatedInstanceWarmup}
         * @param estimatedInstanceWarmup the value to be set.
         * @return {@code this}
         */
        public Builder estimatedInstanceWarmup(java.lang.Number estimatedInstanceWarmup) {
            this.estimatedInstanceWarmup = estimatedInstanceWarmup;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getEstimatedInstanceWarmup}
         * @param estimatedInstanceWarmup the value to be set.
         * @return {@code this}
         */
        public Builder estimatedInstanceWarmup(com.aliyun.ros.cdk.core.IResolvable estimatedInstanceWarmup) {
            this.estimatedInstanceWarmup = estimatedInstanceWarmup;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getInitialMaxSize}
         * @param initialMaxSize the value to be set.
         * @return {@code this}
         */
        public Builder initialMaxSize(java.lang.Number initialMaxSize) {
            this.initialMaxSize = initialMaxSize;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getInitialMaxSize}
         * @param initialMaxSize the value to be set.
         * @return {@code this}
         */
        public Builder initialMaxSize(com.aliyun.ros.cdk.core.IResolvable initialMaxSize) {
            this.initialMaxSize = initialMaxSize;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getMetricName}
         * @param metricName the value to be set.
         * @return {@code this}
         */
        public Builder metricName(java.lang.String metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getMetricName}
         * @param metricName the value to be set.
         * @return {@code this}
         */
        public Builder metricName(com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getMinAdjustmentMagnitude}
         * @param minAdjustmentMagnitude the value to be set.
         * @return {@code this}
         */
        public Builder minAdjustmentMagnitude(java.lang.Number minAdjustmentMagnitude) {
            this.minAdjustmentMagnitude = minAdjustmentMagnitude;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getMinAdjustmentMagnitude}
         * @param minAdjustmentMagnitude the value to be set.
         * @return {@code this}
         */
        public Builder minAdjustmentMagnitude(com.aliyun.ros.cdk.core.IResolvable minAdjustmentMagnitude) {
            this.minAdjustmentMagnitude = minAdjustmentMagnitude;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getPredictiveScalingMode}
         * @param predictiveScalingMode the value to be set.
         * @return {@code this}
         */
        public Builder predictiveScalingMode(java.lang.String predictiveScalingMode) {
            this.predictiveScalingMode = predictiveScalingMode;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getPredictiveScalingMode}
         * @param predictiveScalingMode the value to be set.
         * @return {@code this}
         */
        public Builder predictiveScalingMode(com.aliyun.ros.cdk.core.IResolvable predictiveScalingMode) {
            this.predictiveScalingMode = predictiveScalingMode;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getPredictiveTaskBufferTime}
         * @param predictiveTaskBufferTime the value to be set.
         * @return {@code this}
         */
        public Builder predictiveTaskBufferTime(java.lang.Number predictiveTaskBufferTime) {
            this.predictiveTaskBufferTime = predictiveTaskBufferTime;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getPredictiveTaskBufferTime}
         * @param predictiveTaskBufferTime the value to be set.
         * @return {@code this}
         */
        public Builder predictiveTaskBufferTime(com.aliyun.ros.cdk.core.IResolvable predictiveTaskBufferTime) {
            this.predictiveTaskBufferTime = predictiveTaskBufferTime;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getPredictiveValueBehavior}
         * @param predictiveValueBehavior the value to be set.
         * @return {@code this}
         */
        public Builder predictiveValueBehavior(java.lang.String predictiveValueBehavior) {
            this.predictiveValueBehavior = predictiveValueBehavior;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getPredictiveValueBehavior}
         * @param predictiveValueBehavior the value to be set.
         * @return {@code this}
         */
        public Builder predictiveValueBehavior(com.aliyun.ros.cdk.core.IResolvable predictiveValueBehavior) {
            this.predictiveValueBehavior = predictiveValueBehavior;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getPredictiveValueBuffer}
         * @param predictiveValueBuffer the value to be set.
         * @return {@code this}
         */
        public Builder predictiveValueBuffer(java.lang.Number predictiveValueBuffer) {
            this.predictiveValueBuffer = predictiveValueBuffer;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getPredictiveValueBuffer}
         * @param predictiveValueBuffer the value to be set.
         * @return {@code this}
         */
        public Builder predictiveValueBuffer(com.aliyun.ros.cdk.core.IResolvable predictiveValueBuffer) {
            this.predictiveValueBuffer = predictiveValueBuffer;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getScaleInEvaluationCount}
         * @param scaleInEvaluationCount the value to be set.
         * @return {@code this}
         */
        public Builder scaleInEvaluationCount(java.lang.Number scaleInEvaluationCount) {
            this.scaleInEvaluationCount = scaleInEvaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getScaleInEvaluationCount}
         * @param scaleInEvaluationCount the value to be set.
         * @return {@code this}
         */
        public Builder scaleInEvaluationCount(com.aliyun.ros.cdk.core.IResolvable scaleInEvaluationCount) {
            this.scaleInEvaluationCount = scaleInEvaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getScaleOutEvaluationCount}
         * @param scaleOutEvaluationCount the value to be set.
         * @return {@code this}
         */
        public Builder scaleOutEvaluationCount(java.lang.Number scaleOutEvaluationCount) {
            this.scaleOutEvaluationCount = scaleOutEvaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getScaleOutEvaluationCount}
         * @param scaleOutEvaluationCount the value to be set.
         * @return {@code this}
         */
        public Builder scaleOutEvaluationCount(com.aliyun.ros.cdk.core.IResolvable scaleOutEvaluationCount) {
            this.scaleOutEvaluationCount = scaleOutEvaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getScalingRuleName}
         * @param scalingRuleName the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleName(java.lang.String scalingRuleName) {
            this.scalingRuleName = scalingRuleName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getScalingRuleName}
         * @param scalingRuleName the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleName(com.aliyun.ros.cdk.core.IResolvable scalingRuleName) {
            this.scalingRuleName = scalingRuleName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getScalingRuleType}
         * @param scalingRuleType the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleType(java.lang.String scalingRuleType) {
            this.scalingRuleType = scalingRuleType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getScalingRuleType}
         * @param scalingRuleType the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleType(com.aliyun.ros.cdk.core.IResolvable scalingRuleType) {
            this.scalingRuleType = scalingRuleType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getStepAdjustment}
         * @param stepAdjustment the value to be set.
         * @return {@code this}
         */
        public Builder stepAdjustment(com.aliyun.ros.cdk.core.IResolvable stepAdjustment) {
            this.stepAdjustment = stepAdjustment;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getStepAdjustment}
         * @param stepAdjustment the value to be set.
         * @return {@code this}
         */
        public Builder stepAdjustment(java.util.List<? extends java.lang.Object> stepAdjustment) {
            this.stepAdjustment = stepAdjustment;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getTargetValue}
         * @param targetValue the value to be set.
         * @return {@code this}
         */
        public Builder targetValue(java.lang.Number targetValue) {
            this.targetValue = targetValue;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRuleProps#getTargetValue}
         * @param targetValue the value to be set.
         * @return {@code this}
         */
        public Builder targetValue(com.aliyun.ros.cdk.core.IResolvable targetValue) {
            this.targetValue = targetValue;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosScalingRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScalingRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosScalingRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScalingRuleProps {
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object adjustmentType;
        private final java.lang.Object adjustmentValue;
        private final java.lang.Object cooldown;
        private final java.lang.Object disableScaleIn;
        private final java.lang.Object estimatedInstanceWarmup;
        private final java.lang.Object initialMaxSize;
        private final java.lang.Object metricName;
        private final java.lang.Object minAdjustmentMagnitude;
        private final java.lang.Object predictiveScalingMode;
        private final java.lang.Object predictiveTaskBufferTime;
        private final java.lang.Object predictiveValueBehavior;
        private final java.lang.Object predictiveValueBuffer;
        private final java.lang.Object scaleInEvaluationCount;
        private final java.lang.Object scaleOutEvaluationCount;
        private final java.lang.Object scalingRuleName;
        private final java.lang.Object scalingRuleType;
        private final java.lang.Object stepAdjustment;
        private final java.lang.Object targetValue;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.adjustmentType = software.amazon.jsii.Kernel.get(this, "adjustmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.adjustmentValue = software.amazon.jsii.Kernel.get(this, "adjustmentValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cooldown = software.amazon.jsii.Kernel.get(this, "cooldown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableScaleIn = software.amazon.jsii.Kernel.get(this, "disableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.estimatedInstanceWarmup = software.amazon.jsii.Kernel.get(this, "estimatedInstanceWarmup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initialMaxSize = software.amazon.jsii.Kernel.get(this, "initialMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metricName = software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minAdjustmentMagnitude = software.amazon.jsii.Kernel.get(this, "minAdjustmentMagnitude", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.predictiveScalingMode = software.amazon.jsii.Kernel.get(this, "predictiveScalingMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.predictiveTaskBufferTime = software.amazon.jsii.Kernel.get(this, "predictiveTaskBufferTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.predictiveValueBehavior = software.amazon.jsii.Kernel.get(this, "predictiveValueBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.predictiveValueBuffer = software.amazon.jsii.Kernel.get(this, "predictiveValueBuffer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scaleInEvaluationCount = software.amazon.jsii.Kernel.get(this, "scaleInEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scaleOutEvaluationCount = software.amazon.jsii.Kernel.get(this, "scaleOutEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleName = software.amazon.jsii.Kernel.get(this, "scalingRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleType = software.amazon.jsii.Kernel.get(this, "scalingRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stepAdjustment = software.amazon.jsii.Kernel.get(this, "stepAdjustment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetValue = software.amazon.jsii.Kernel.get(this, "targetValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.adjustmentType = builder.adjustmentType;
            this.adjustmentValue = builder.adjustmentValue;
            this.cooldown = builder.cooldown;
            this.disableScaleIn = builder.disableScaleIn;
            this.estimatedInstanceWarmup = builder.estimatedInstanceWarmup;
            this.initialMaxSize = builder.initialMaxSize;
            this.metricName = builder.metricName;
            this.minAdjustmentMagnitude = builder.minAdjustmentMagnitude;
            this.predictiveScalingMode = builder.predictiveScalingMode;
            this.predictiveTaskBufferTime = builder.predictiveTaskBufferTime;
            this.predictiveValueBehavior = builder.predictiveValueBehavior;
            this.predictiveValueBuffer = builder.predictiveValueBuffer;
            this.scaleInEvaluationCount = builder.scaleInEvaluationCount;
            this.scaleOutEvaluationCount = builder.scaleOutEvaluationCount;
            this.scalingRuleName = builder.scalingRuleName;
            this.scalingRuleType = builder.scalingRuleType;
            this.stepAdjustment = builder.stepAdjustment;
            this.targetValue = builder.targetValue;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getAdjustmentType() {
            return this.adjustmentType;
        }

        @Override
        public final java.lang.Object getAdjustmentValue() {
            return this.adjustmentValue;
        }

        @Override
        public final java.lang.Object getCooldown() {
            return this.cooldown;
        }

        @Override
        public final java.lang.Object getDisableScaleIn() {
            return this.disableScaleIn;
        }

        @Override
        public final java.lang.Object getEstimatedInstanceWarmup() {
            return this.estimatedInstanceWarmup;
        }

        @Override
        public final java.lang.Object getInitialMaxSize() {
            return this.initialMaxSize;
        }

        @Override
        public final java.lang.Object getMetricName() {
            return this.metricName;
        }

        @Override
        public final java.lang.Object getMinAdjustmentMagnitude() {
            return this.minAdjustmentMagnitude;
        }

        @Override
        public final java.lang.Object getPredictiveScalingMode() {
            return this.predictiveScalingMode;
        }

        @Override
        public final java.lang.Object getPredictiveTaskBufferTime() {
            return this.predictiveTaskBufferTime;
        }

        @Override
        public final java.lang.Object getPredictiveValueBehavior() {
            return this.predictiveValueBehavior;
        }

        @Override
        public final java.lang.Object getPredictiveValueBuffer() {
            return this.predictiveValueBuffer;
        }

        @Override
        public final java.lang.Object getScaleInEvaluationCount() {
            return this.scaleInEvaluationCount;
        }

        @Override
        public final java.lang.Object getScaleOutEvaluationCount() {
            return this.scaleOutEvaluationCount;
        }

        @Override
        public final java.lang.Object getScalingRuleName() {
            return this.scalingRuleName;
        }

        @Override
        public final java.lang.Object getScalingRuleType() {
            return this.scalingRuleType;
        }

        @Override
        public final java.lang.Object getStepAdjustment() {
            return this.stepAdjustment;
        }

        @Override
        public final java.lang.Object getTargetValue() {
            return this.targetValue;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            if (this.getAdjustmentType() != null) {
                data.set("adjustmentType", om.valueToTree(this.getAdjustmentType()));
            }
            if (this.getAdjustmentValue() != null) {
                data.set("adjustmentValue", om.valueToTree(this.getAdjustmentValue()));
            }
            if (this.getCooldown() != null) {
                data.set("cooldown", om.valueToTree(this.getCooldown()));
            }
            if (this.getDisableScaleIn() != null) {
                data.set("disableScaleIn", om.valueToTree(this.getDisableScaleIn()));
            }
            if (this.getEstimatedInstanceWarmup() != null) {
                data.set("estimatedInstanceWarmup", om.valueToTree(this.getEstimatedInstanceWarmup()));
            }
            if (this.getInitialMaxSize() != null) {
                data.set("initialMaxSize", om.valueToTree(this.getInitialMaxSize()));
            }
            if (this.getMetricName() != null) {
                data.set("metricName", om.valueToTree(this.getMetricName()));
            }
            if (this.getMinAdjustmentMagnitude() != null) {
                data.set("minAdjustmentMagnitude", om.valueToTree(this.getMinAdjustmentMagnitude()));
            }
            if (this.getPredictiveScalingMode() != null) {
                data.set("predictiveScalingMode", om.valueToTree(this.getPredictiveScalingMode()));
            }
            if (this.getPredictiveTaskBufferTime() != null) {
                data.set("predictiveTaskBufferTime", om.valueToTree(this.getPredictiveTaskBufferTime()));
            }
            if (this.getPredictiveValueBehavior() != null) {
                data.set("predictiveValueBehavior", om.valueToTree(this.getPredictiveValueBehavior()));
            }
            if (this.getPredictiveValueBuffer() != null) {
                data.set("predictiveValueBuffer", om.valueToTree(this.getPredictiveValueBuffer()));
            }
            if (this.getScaleInEvaluationCount() != null) {
                data.set("scaleInEvaluationCount", om.valueToTree(this.getScaleInEvaluationCount()));
            }
            if (this.getScaleOutEvaluationCount() != null) {
                data.set("scaleOutEvaluationCount", om.valueToTree(this.getScaleOutEvaluationCount()));
            }
            if (this.getScalingRuleName() != null) {
                data.set("scalingRuleName", om.valueToTree(this.getScalingRuleName()));
            }
            if (this.getScalingRuleType() != null) {
                data.set("scalingRuleType", om.valueToTree(this.getScalingRuleType()));
            }
            if (this.getStepAdjustment() != null) {
                data.set("stepAdjustment", om.valueToTree(this.getStepAdjustment()));
            }
            if (this.getTargetValue() != null) {
                data.set("targetValue", om.valueToTree(this.getTargetValue()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosScalingRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosScalingRuleProps.Jsii$Proxy that = (RosScalingRuleProps.Jsii$Proxy) o;

            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (this.adjustmentType != null ? !this.adjustmentType.equals(that.adjustmentType) : that.adjustmentType != null) return false;
            if (this.adjustmentValue != null ? !this.adjustmentValue.equals(that.adjustmentValue) : that.adjustmentValue != null) return false;
            if (this.cooldown != null ? !this.cooldown.equals(that.cooldown) : that.cooldown != null) return false;
            if (this.disableScaleIn != null ? !this.disableScaleIn.equals(that.disableScaleIn) : that.disableScaleIn != null) return false;
            if (this.estimatedInstanceWarmup != null ? !this.estimatedInstanceWarmup.equals(that.estimatedInstanceWarmup) : that.estimatedInstanceWarmup != null) return false;
            if (this.initialMaxSize != null ? !this.initialMaxSize.equals(that.initialMaxSize) : that.initialMaxSize != null) return false;
            if (this.metricName != null ? !this.metricName.equals(that.metricName) : that.metricName != null) return false;
            if (this.minAdjustmentMagnitude != null ? !this.minAdjustmentMagnitude.equals(that.minAdjustmentMagnitude) : that.minAdjustmentMagnitude != null) return false;
            if (this.predictiveScalingMode != null ? !this.predictiveScalingMode.equals(that.predictiveScalingMode) : that.predictiveScalingMode != null) return false;
            if (this.predictiveTaskBufferTime != null ? !this.predictiveTaskBufferTime.equals(that.predictiveTaskBufferTime) : that.predictiveTaskBufferTime != null) return false;
            if (this.predictiveValueBehavior != null ? !this.predictiveValueBehavior.equals(that.predictiveValueBehavior) : that.predictiveValueBehavior != null) return false;
            if (this.predictiveValueBuffer != null ? !this.predictiveValueBuffer.equals(that.predictiveValueBuffer) : that.predictiveValueBuffer != null) return false;
            if (this.scaleInEvaluationCount != null ? !this.scaleInEvaluationCount.equals(that.scaleInEvaluationCount) : that.scaleInEvaluationCount != null) return false;
            if (this.scaleOutEvaluationCount != null ? !this.scaleOutEvaluationCount.equals(that.scaleOutEvaluationCount) : that.scaleOutEvaluationCount != null) return false;
            if (this.scalingRuleName != null ? !this.scalingRuleName.equals(that.scalingRuleName) : that.scalingRuleName != null) return false;
            if (this.scalingRuleType != null ? !this.scalingRuleType.equals(that.scalingRuleType) : that.scalingRuleType != null) return false;
            if (this.stepAdjustment != null ? !this.stepAdjustment.equals(that.stepAdjustment) : that.stepAdjustment != null) return false;
            return this.targetValue != null ? this.targetValue.equals(that.targetValue) : that.targetValue == null;
        }

        @Override
        public final int hashCode() {
            int result = this.scalingGroupId.hashCode();
            result = 31 * result + (this.adjustmentType != null ? this.adjustmentType.hashCode() : 0);
            result = 31 * result + (this.adjustmentValue != null ? this.adjustmentValue.hashCode() : 0);
            result = 31 * result + (this.cooldown != null ? this.cooldown.hashCode() : 0);
            result = 31 * result + (this.disableScaleIn != null ? this.disableScaleIn.hashCode() : 0);
            result = 31 * result + (this.estimatedInstanceWarmup != null ? this.estimatedInstanceWarmup.hashCode() : 0);
            result = 31 * result + (this.initialMaxSize != null ? this.initialMaxSize.hashCode() : 0);
            result = 31 * result + (this.metricName != null ? this.metricName.hashCode() : 0);
            result = 31 * result + (this.minAdjustmentMagnitude != null ? this.minAdjustmentMagnitude.hashCode() : 0);
            result = 31 * result + (this.predictiveScalingMode != null ? this.predictiveScalingMode.hashCode() : 0);
            result = 31 * result + (this.predictiveTaskBufferTime != null ? this.predictiveTaskBufferTime.hashCode() : 0);
            result = 31 * result + (this.predictiveValueBehavior != null ? this.predictiveValueBehavior.hashCode() : 0);
            result = 31 * result + (this.predictiveValueBuffer != null ? this.predictiveValueBuffer.hashCode() : 0);
            result = 31 * result + (this.scaleInEvaluationCount != null ? this.scaleInEvaluationCount.hashCode() : 0);
            result = 31 * result + (this.scaleOutEvaluationCount != null ? this.scaleOutEvaluationCount.hashCode() : 0);
            result = 31 * result + (this.scalingRuleName != null ? this.scalingRuleName.hashCode() : 0);
            result = 31 * result + (this.scalingRuleType != null ? this.scalingRuleType.hashCode() : 0);
            result = 31 * result + (this.stepAdjustment != null ? this.stepAdjustment.hashCode() : 0);
            result = 31 * result + (this.targetValue != null ? this.targetValue.hashCode() : 0);
            return result;
        }
    }
}
