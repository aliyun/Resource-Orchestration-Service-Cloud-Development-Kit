package com.aliyun.ros.cdk.ess.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ESS::ScalingRule</code>, which is used to query the information about a scaling rule.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.640Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.ScalingRule")
public class ScalingRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ess.datasource.IScalingRule {

    protected ScalingRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AdjustmentType: The adjustment method of the scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdjustmentType() {
        return software.amazon.jsii.Kernel.get(this, "attrAdjustmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdjustmentValue() {
        return software.amazon.jsii.Kernel.get(this, "attrAdjustmentValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.
     * <p>
     * The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarms() {
        return software.amazon.jsii.Kernel.get(this, "attrAlarms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Cooldown: The cooldown period of the scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCooldown() {
        return software.amazon.jsii.Kernel.get(this, "attrCooldown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DisableScaleIn: Indicates whether scale-in is disabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableScaleIn() {
        return software.amazon.jsii.Kernel.get(this, "attrDisableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EstimatedInstanceWarmup: The warm-up period of instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEstimatedInstanceWarmup() {
        return software.amazon.jsii.Kernel.get(this, "attrEstimatedInstanceWarmup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitialMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "attrInitialMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetricName() {
        return software.amazon.jsii.Kernel.get(this, "attrMetricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinAdjustmentMagnitude() {
        return software.amazon.jsii.Kernel.get(this, "attrMinAdjustmentMagnitude", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinSize() {
        return software.amazon.jsii.Kernel.get(this, "attrMinSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveScalingMode() {
        return software.amazon.jsii.Kernel.get(this, "attrPredictiveScalingMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveTaskBufferTime() {
        return software.amazon.jsii.Kernel.get(this, "attrPredictiveTaskBufferTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PredictiveValueBehavior: The action on the predicted maximum value.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveValueBehavior() {
        return software.amazon.jsii.Kernel.get(this, "attrPredictiveValueBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveValueBuffer() {
        return software.amazon.jsii.Kernel.get(this, "attrPredictiveValueBuffer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleInEvaluationCount() {
        return software.amazon.jsii.Kernel.get(this, "attrScaleInEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleOutEvaluationCount() {
        return software.amazon.jsii.Kernel.get(this, "attrScaleOutEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingGroupId: The ID of the scaling group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingRuleAri: The unique identifier of the scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleAri() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleAri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingRuleId: The ID of the scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingRuleName: The name of the scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingRuleType: The type of the scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleType() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StepAdjustments: The step adjustments of the step scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStepAdjustments() {
        return software.amazon.jsii.Kernel.get(this, "attrStepAdjustments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TargetValue: The target value of the metric.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetValue() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.datasource.ScalingRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.datasource.ScalingRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps.Builder();
        }

        /**
         * Property scalingRuleId: The ID of the scaling rule that you want to query.
         * <p>
         * @return {@code this}
         * @param scalingRuleId Property scalingRuleId: The ID of the scaling rule that you want to query. This parameter is required.
         */
        public Builder scalingRuleId(final java.lang.String scalingRuleId) {
            this.props.scalingRuleId(scalingRuleId);
            return this;
        }
        /**
         * Property scalingRuleId: The ID of the scaling rule that you want to query.
         * <p>
         * @return {@code this}
         * @param scalingRuleId Property scalingRuleId: The ID of the scaling rule that you want to query. This parameter is required.
         */
        public Builder scalingRuleId(final com.aliyun.ros.cdk.core.IResolvable scalingRuleId) {
            this.props.scalingRuleId(scalingRuleId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.datasource.ScalingRule}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.datasource.ScalingRule build() {
            return new com.aliyun.ros.cdk.ess.datasource.ScalingRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
