package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.927Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingRule")
public class ScalingRule extends com.aliyun.ros.cdk.core.Resource {

    protected ScalingRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingRule`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingRule`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public ScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleAri() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleAri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScalingRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScalingRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.ScalingRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScalingRuleProps.Builder();
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
         * @param adjustmentType This parameter is required.
         */
        public Builder adjustmentType(final java.lang.String adjustmentType) {
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
         * @param cooldown This parameter is required.
         */
        public Builder cooldown(final java.lang.Number cooldown) {
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
         * @param initialMaxSize This parameter is required.
         */
        public Builder initialMaxSize(final java.lang.Number initialMaxSize) {
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
         * @param minAdjustmentMagnitude This parameter is required.
         */
        public Builder minAdjustmentMagnitude(final java.lang.Number minAdjustmentMagnitude) {
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
         * @param predictiveTaskBufferTime This parameter is required.
         */
        public Builder predictiveTaskBufferTime(final java.lang.Number predictiveTaskBufferTime) {
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
         * @param predictiveValueBuffer This parameter is required.
         */
        public Builder predictiveValueBuffer(final java.lang.Number predictiveValueBuffer) {
            this.props.predictiveValueBuffer(predictiveValueBuffer);
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
         * @param scalingRuleType This parameter is required.
         */
        public Builder scalingRuleType(final java.lang.String scalingRuleType) {
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.ScalingRule}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.ScalingRule build() {
            return new com.aliyun.ros.cdk.ess.ScalingRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
