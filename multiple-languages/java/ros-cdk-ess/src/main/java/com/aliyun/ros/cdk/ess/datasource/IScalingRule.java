package com.aliyun.ros.cdk.ess.datasource;

/**
 * Represents a <code>ScalingRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.843Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.IScalingRule")
@software.amazon.jsii.Jsii.Proxy(IScalingRule.Jsii$Proxy.class)
public interface IScalingRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AdjustmentType: The adjustment method of the scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdjustmentType();

    /**
     * Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdjustmentValue();

    /**
     * Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.
     * <p>
     * The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarms();

    /**
     * Attribute Cooldown: The cooldown period of the scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCooldown();

    /**
     * Attribute DisableScaleIn: Indicates whether scale-in is disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableScaleIn();

    /**
     * Attribute EstimatedInstanceWarmup: The warm-up period of instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEstimatedInstanceWarmup();

    /**
     * Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitialMaxSize();

    /**
     * Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxSize();

    /**
     * Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetricName();

    /**
     * Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinAdjustmentMagnitude();

    /**
     * Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinSize();

    /**
     * Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveScalingMode();

    /**
     * Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveTaskBufferTime();

    /**
     * Attribute PredictiveValueBehavior: The action on the predicted maximum value.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveValueBehavior();

    /**
     * Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveValueBuffer();

    /**
     * Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleInEvaluationCount();

    /**
     * Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleOutEvaluationCount();

    /**
     * Attribute ScalingGroupId: The ID of the scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId();

    /**
     * Attribute ScalingRuleAri: The unique identifier of the scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleAri();

    /**
     * Attribute ScalingRuleId: The ID of the scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId();

    /**
     * Attribute ScalingRuleName: The name of the scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleName();

    /**
     * Attribute ScalingRuleType: The type of the scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleType();

    /**
     * Attribute StepAdjustments: The step adjustments of the step scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStepAdjustments();

    /**
     * Attribute TargetValue: The target value of the metric.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetValue();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ess.datasource.IScalingRule.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AdjustmentType: The adjustment method of the scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdjustmentType() {
            return software.amazon.jsii.Kernel.get(this, "attrAdjustmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdjustmentValue() {
            return software.amazon.jsii.Kernel.get(this, "attrAdjustmentValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.
         * <p>
         * The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarms() {
            return software.amazon.jsii.Kernel.get(this, "attrAlarms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cooldown: The cooldown period of the scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCooldown() {
            return software.amazon.jsii.Kernel.get(this, "attrCooldown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisableScaleIn: Indicates whether scale-in is disabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableScaleIn() {
            return software.amazon.jsii.Kernel.get(this, "attrDisableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EstimatedInstanceWarmup: The warm-up period of instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEstimatedInstanceWarmup() {
            return software.amazon.jsii.Kernel.get(this, "attrEstimatedInstanceWarmup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitialMaxSize() {
            return software.amazon.jsii.Kernel.get(this, "attrInitialMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxSize() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetricName() {
            return software.amazon.jsii.Kernel.get(this, "attrMetricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinAdjustmentMagnitude() {
            return software.amazon.jsii.Kernel.get(this, "attrMinAdjustmentMagnitude", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinSize() {
            return software.amazon.jsii.Kernel.get(this, "attrMinSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveScalingMode() {
            return software.amazon.jsii.Kernel.get(this, "attrPredictiveScalingMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveTaskBufferTime() {
            return software.amazon.jsii.Kernel.get(this, "attrPredictiveTaskBufferTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredictiveValueBehavior: The action on the predicted maximum value.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveValueBehavior() {
            return software.amazon.jsii.Kernel.get(this, "attrPredictiveValueBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveValueBuffer() {
            return software.amazon.jsii.Kernel.get(this, "attrPredictiveValueBuffer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleInEvaluationCount() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleInEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleOutEvaluationCount() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleOutEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingGroupId: The ID of the scaling group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleAri: The unique identifier of the scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleAri() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleAri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleId: The ID of the scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleName: The name of the scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleType: The type of the scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleType() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StepAdjustments: The step adjustments of the step scaling rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStepAdjustments() {
            return software.amazon.jsii.Kernel.get(this, "attrStepAdjustments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetValue: The target value of the metric.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetValue() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IScalingRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IScalingRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AdjustmentType: The adjustment method of the scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdjustmentType() {
            return software.amazon.jsii.Kernel.get(this, "attrAdjustmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdjustmentValue() {
            return software.amazon.jsii.Kernel.get(this, "attrAdjustmentValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.
         * <p>
         * The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarms() {
            return software.amazon.jsii.Kernel.get(this, "attrAlarms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cooldown: The cooldown period of the scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCooldown() {
            return software.amazon.jsii.Kernel.get(this, "attrCooldown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisableScaleIn: Indicates whether scale-in is disabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableScaleIn() {
            return software.amazon.jsii.Kernel.get(this, "attrDisableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EstimatedInstanceWarmup: The warm-up period of instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEstimatedInstanceWarmup() {
            return software.amazon.jsii.Kernel.get(this, "attrEstimatedInstanceWarmup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitialMaxSize() {
            return software.amazon.jsii.Kernel.get(this, "attrInitialMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxSize() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetricName() {
            return software.amazon.jsii.Kernel.get(this, "attrMetricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinAdjustmentMagnitude() {
            return software.amazon.jsii.Kernel.get(this, "attrMinAdjustmentMagnitude", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinSize() {
            return software.amazon.jsii.Kernel.get(this, "attrMinSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveScalingMode() {
            return software.amazon.jsii.Kernel.get(this, "attrPredictiveScalingMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveTaskBufferTime() {
            return software.amazon.jsii.Kernel.get(this, "attrPredictiveTaskBufferTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredictiveValueBehavior: The action on the predicted maximum value.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveValueBehavior() {
            return software.amazon.jsii.Kernel.get(this, "attrPredictiveValueBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredictiveValueBuffer() {
            return software.amazon.jsii.Kernel.get(this, "attrPredictiveValueBuffer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleInEvaluationCount() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleInEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleOutEvaluationCount() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleOutEvaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingGroupId: The ID of the scaling group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleAri: The unique identifier of the scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleAri() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleAri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleId: The ID of the scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleName: The name of the scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleType: The type of the scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleType() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StepAdjustments: The step adjustments of the step scaling rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStepAdjustments() {
            return software.amazon.jsii.Kernel.get(this, "attrStepAdjustments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetValue: The target value of the metric.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetValue() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.datasource.ScalingRuleProps.class));
        }
    }
}
