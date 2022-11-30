package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::ScalingRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:19.534Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingRuleProps")
@software.amazon.jsii.Jsii.Proxy(ScalingRuleProps.Jsii$Proxy.class)
public interface ScalingRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property scalingGroupId: ID of the scaling group of a scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     * Property adjustmentType: Adjustment mode of a scaling rule.
     * <p>
     * Optional values:
     * <p>
     * <ul>
     * <li>QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.</li>
     * <li>PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.</li>
     * <li>TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdjustmentType() {
        return null;
    }

    /**
     * Property adjustmentValue: Adjusted value of a scaling rule.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li>QuantityChangeInCapacity: [-500, 500]</li>
     * <li>PercentChangeInCapacity: [-100, 10000]</li>
     * <li>TotalCapacity: [0, 1000]</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdjustmentValue() {
        return null;
    }

    /**
     * Property cooldown: Cool-down time of a scaling rule.
     * <p>
     * Value range: [0, 86,400], in seconds. The default value is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCooldown() {
        return null;
    }

    /**
     * Property disableScaleIn: Specifies whether to disable scale-in.
     * <p>
     * This parameter is applicable only to target tracking scaling rules.
     * Default value: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableScaleIn() {
        return null;
    }

    /**
     * Property estimatedInstanceWarmup: The warm-up period of the ECS instances.
     * <p>
     * This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
     * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
     * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEstimatedInstanceWarmup() {
        return null;
    }

    /**
     * Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
     * <p>
     * Default value: the same as the value of MaxSize
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitialMaxSize() {
        return null;
    }

    /**
     * Property metricName: The predefined metric to monitor.
     * <p>
     * This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
     * Valid values of a target tracking scaling rule:
     * <p>
     * <ul>
     * <li>CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network</li>
     * <li>ClassicInternetTx: the average public network outbound traffic over the classic network</li>
     * <li>VpcInternetRx: the average public network inbound traffic over the VPC</li>
     * <li>VpcInternetTx: the average public network outbound traffic over the VPC</li>
     * <li>IntranetRx: the average internal network inbound traffic</li>
     * <li>IntranetTx: the average internal network outbound traffic
     * Valid values of a predictive scaling rule:</li>
     * <li>CpuUtilization: the average CPU utilization</li>
     * <li>IntranetRx: the average internal network inbound traffic</li>
     * <li>IntranetTx: the average internal network outbound traffic</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetricName() {
        return null;
    }

    /**
     * Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.
     * <p>
     * This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinAdjustmentMagnitude() {
        return null;
    }

    /**
     * Property predictiveScalingMode: The mode of the predictive scaling rule.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>PredictAndScale: generates forecasts and creates forecast tasks.</li>
     * <li>PredictOnly: generates forecasts but does not create forecast tasks.
     * Default value: PredictAndScale</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveScalingMode() {
        return null;
    }

    /**
     * Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.
     * <p>
     * By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
     * Default value: 0
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveTaskBufferTime() {
        return null;
    }

    /**
     * Property predictiveValueBehavior: The action taken on the predicted maximum value.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     * <p>
     * <ul>
     * <li>PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.</li>
     * <li>PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
     * Default value: MaxOverridePredictiveValue</li>
     * </ul></li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveValueBehavior() {
        return null;
    }

    /**
     * Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
     * <p>
     * When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
     * Default value: 0
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredictiveValueBuffer() {
        return null;
    }

    /**
     * Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered.
     * <p>
     * After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 15.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScaleInEvaluationCount() {
        return null;
    }

    /**
     * Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered.
     * <p>
     * After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScaleOutEvaluationCount() {
        return null;
    }

    /**
     * Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.
     * <p>
     * It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleName() {
        return null;
    }

    /**
     * Property scalingRuleType: The type of the scaling rule.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.</li>
     * <li>TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.</li>
     * <li>StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.</li>
     * <li>PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
     * If this parameter value is not specified, the default value is SimpleScalingRule.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleType() {
        return null;
    }

    /**
     * Property stepAdjustment:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStepAdjustment() {
        return null;
    }

    /**
     * Property targetValue: The target value of a metric.
     * <p>
     * This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetValue() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScalingRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScalingRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScalingRuleProps> {
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
         * Sets the value of {@link ScalingRuleProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: ID of the scaling group of a scaling rule. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: ID of the scaling group of a scaling rule. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getAdjustmentType}
         * @param adjustmentType Property adjustmentType: Adjustment mode of a scaling rule.
         *                       Optional values:
         *                       <p>
         *                       <ul>
         *                       <li>QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.</li>
         *                       <li>PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.</li>
         *                       <li>TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder adjustmentType(java.lang.String adjustmentType) {
            this.adjustmentType = adjustmentType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getAdjustmentType}
         * @param adjustmentType Property adjustmentType: Adjustment mode of a scaling rule.
         *                       Optional values:
         *                       <p>
         *                       <ul>
         *                       <li>QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.</li>
         *                       <li>PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.</li>
         *                       <li>TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder adjustmentType(com.aliyun.ros.cdk.core.IResolvable adjustmentType) {
            this.adjustmentType = adjustmentType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getAdjustmentValue}
         * @param adjustmentValue Property adjustmentValue: Adjusted value of a scaling rule.
         *                        Value range:
         *                        <p>
         *                        <ul>
         *                        <li>QuantityChangeInCapacity: [-500, 500]</li>
         *                        <li>PercentChangeInCapacity: [-100, 10000]</li>
         *                        <li>TotalCapacity: [0, 1000]</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder adjustmentValue(java.lang.Number adjustmentValue) {
            this.adjustmentValue = adjustmentValue;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getAdjustmentValue}
         * @param adjustmentValue Property adjustmentValue: Adjusted value of a scaling rule.
         *                        Value range:
         *                        <p>
         *                        <ul>
         *                        <li>QuantityChangeInCapacity: [-500, 500]</li>
         *                        <li>PercentChangeInCapacity: [-100, 10000]</li>
         *                        <li>TotalCapacity: [0, 1000]</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder adjustmentValue(com.aliyun.ros.cdk.core.IResolvable adjustmentValue) {
            this.adjustmentValue = adjustmentValue;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getCooldown}
         * @param cooldown Property cooldown: Cool-down time of a scaling rule.
         *                 Value range: [0, 86,400], in seconds. The default value is empty.
         * @return {@code this}
         */
        public Builder cooldown(java.lang.Number cooldown) {
            this.cooldown = cooldown;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getCooldown}
         * @param cooldown Property cooldown: Cool-down time of a scaling rule.
         *                 Value range: [0, 86,400], in seconds. The default value is empty.
         * @return {@code this}
         */
        public Builder cooldown(com.aliyun.ros.cdk.core.IResolvable cooldown) {
            this.cooldown = cooldown;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getDisableScaleIn}
         * @param disableScaleIn Property disableScaleIn: Specifies whether to disable scale-in.
         *                       This parameter is applicable only to target tracking scaling rules.
         *                       Default value: false
         * @return {@code this}
         */
        public Builder disableScaleIn(java.lang.Boolean disableScaleIn) {
            this.disableScaleIn = disableScaleIn;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getDisableScaleIn}
         * @param disableScaleIn Property disableScaleIn: Specifies whether to disable scale-in.
         *                       This parameter is applicable only to target tracking scaling rules.
         *                       Default value: false
         * @return {@code this}
         */
        public Builder disableScaleIn(com.aliyun.ros.cdk.core.IResolvable disableScaleIn) {
            this.disableScaleIn = disableScaleIn;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getEstimatedInstanceWarmup}
         * @param estimatedInstanceWarmup Property estimatedInstanceWarmup: The warm-up period of the ECS instances.
         *                                This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
         *                                Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
         *                                Valid values: 0 to 86400. Unit: seconds. Default value: 300.
         * @return {@code this}
         */
        public Builder estimatedInstanceWarmup(java.lang.Number estimatedInstanceWarmup) {
            this.estimatedInstanceWarmup = estimatedInstanceWarmup;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getEstimatedInstanceWarmup}
         * @param estimatedInstanceWarmup Property estimatedInstanceWarmup: The warm-up period of the ECS instances.
         *                                This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
         *                                Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
         *                                Valid values: 0 to 86400. Unit: seconds. Default value: 300.
         * @return {@code this}
         */
        public Builder estimatedInstanceWarmup(com.aliyun.ros.cdk.core.IResolvable estimatedInstanceWarmup) {
            this.estimatedInstanceWarmup = estimatedInstanceWarmup;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getInitialMaxSize}
         * @param initialMaxSize Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
         *                       Default value: the same as the value of MaxSize
         * @return {@code this}
         */
        public Builder initialMaxSize(java.lang.Number initialMaxSize) {
            this.initialMaxSize = initialMaxSize;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getInitialMaxSize}
         * @param initialMaxSize Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
         *                       Default value: the same as the value of MaxSize
         * @return {@code this}
         */
        public Builder initialMaxSize(com.aliyun.ros.cdk.core.IResolvable initialMaxSize) {
            this.initialMaxSize = initialMaxSize;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getMetricName}
         * @param metricName Property metricName: The predefined metric to monitor.
         *                   This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
         *                   Valid values of a target tracking scaling rule:
         *                   <p>
         *                   <ul>
         *                   <li>CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network</li>
         *                   <li>ClassicInternetTx: the average public network outbound traffic over the classic network</li>
         *                   <li>VpcInternetRx: the average public network inbound traffic over the VPC</li>
         *                   <li>VpcInternetTx: the average public network outbound traffic over the VPC</li>
         *                   <li>IntranetRx: the average internal network inbound traffic</li>
         *                   <li>IntranetTx: the average internal network outbound traffic
         *                   Valid values of a predictive scaling rule:</li>
         *                   <li>CpuUtilization: the average CPU utilization</li>
         *                   <li>IntranetRx: the average internal network inbound traffic</li>
         *                   <li>IntranetTx: the average internal network outbound traffic</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder metricName(java.lang.String metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getMetricName}
         * @param metricName Property metricName: The predefined metric to monitor.
         *                   This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
         *                   Valid values of a target tracking scaling rule:
         *                   <p>
         *                   <ul>
         *                   <li>CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network</li>
         *                   <li>ClassicInternetTx: the average public network outbound traffic over the classic network</li>
         *                   <li>VpcInternetRx: the average public network inbound traffic over the VPC</li>
         *                   <li>VpcInternetTx: the average public network outbound traffic over the VPC</li>
         *                   <li>IntranetRx: the average internal network inbound traffic</li>
         *                   <li>IntranetTx: the average internal network outbound traffic
         *                   Valid values of a predictive scaling rule:</li>
         *                   <li>CpuUtilization: the average CPU utilization</li>
         *                   <li>IntranetRx: the average internal network inbound traffic</li>
         *                   <li>IntranetTx: the average internal network outbound traffic</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder metricName(com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getMinAdjustmentMagnitude}
         * @param minAdjustmentMagnitude Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.
         *                               This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
         * @return {@code this}
         */
        public Builder minAdjustmentMagnitude(java.lang.Number minAdjustmentMagnitude) {
            this.minAdjustmentMagnitude = minAdjustmentMagnitude;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getMinAdjustmentMagnitude}
         * @param minAdjustmentMagnitude Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.
         *                               This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
         * @return {@code this}
         */
        public Builder minAdjustmentMagnitude(com.aliyun.ros.cdk.core.IResolvable minAdjustmentMagnitude) {
            this.minAdjustmentMagnitude = minAdjustmentMagnitude;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getPredictiveScalingMode}
         * @param predictiveScalingMode Property predictiveScalingMode: The mode of the predictive scaling rule.
         *                              Valid values:
         *                              <p>
         *                              <ul>
         *                              <li>PredictAndScale: generates forecasts and creates forecast tasks.</li>
         *                              <li>PredictOnly: generates forecasts but does not create forecast tasks.
         *                              Default value: PredictAndScale</li>
         *                              </ul>
         * @return {@code this}
         */
        public Builder predictiveScalingMode(java.lang.String predictiveScalingMode) {
            this.predictiveScalingMode = predictiveScalingMode;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getPredictiveScalingMode}
         * @param predictiveScalingMode Property predictiveScalingMode: The mode of the predictive scaling rule.
         *                              Valid values:
         *                              <p>
         *                              <ul>
         *                              <li>PredictAndScale: generates forecasts and creates forecast tasks.</li>
         *                              <li>PredictOnly: generates forecasts but does not create forecast tasks.
         *                              Default value: PredictAndScale</li>
         *                              </ul>
         * @return {@code this}
         */
        public Builder predictiveScalingMode(com.aliyun.ros.cdk.core.IResolvable predictiveScalingMode) {
            this.predictiveScalingMode = predictiveScalingMode;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getPredictiveTaskBufferTime}
         * @param predictiveTaskBufferTime Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.
         *                                 By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
         *                                 Default value: 0
         * @return {@code this}
         */
        public Builder predictiveTaskBufferTime(java.lang.Number predictiveTaskBufferTime) {
            this.predictiveTaskBufferTime = predictiveTaskBufferTime;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getPredictiveTaskBufferTime}
         * @param predictiveTaskBufferTime Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.
         *                                 By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
         *                                 Default value: 0
         * @return {@code this}
         */
        public Builder predictiveTaskBufferTime(com.aliyun.ros.cdk.core.IResolvable predictiveTaskBufferTime) {
            this.predictiveTaskBufferTime = predictiveTaskBufferTime;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getPredictiveValueBehavior}
         * @param predictiveValueBehavior Property predictiveValueBehavior: The action taken on the predicted maximum value.
         *                                Valid values:
         *                                <p>
         *                                <ul>
         *                                <li>MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
         *                                <p>
         *                                <ul>
         *                                <li>PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.</li>
         *                                <li>PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
         *                                Default value: MaxOverridePredictiveValue</li>
         *                                </ul></li>
         *                                </ul>
         * @return {@code this}
         */
        public Builder predictiveValueBehavior(java.lang.String predictiveValueBehavior) {
            this.predictiveValueBehavior = predictiveValueBehavior;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getPredictiveValueBehavior}
         * @param predictiveValueBehavior Property predictiveValueBehavior: The action taken on the predicted maximum value.
         *                                Valid values:
         *                                <p>
         *                                <ul>
         *                                <li>MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
         *                                <p>
         *                                <ul>
         *                                <li>PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.</li>
         *                                <li>PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
         *                                Default value: MaxOverridePredictiveValue</li>
         *                                </ul></li>
         *                                </ul>
         * @return {@code this}
         */
        public Builder predictiveValueBehavior(com.aliyun.ros.cdk.core.IResolvable predictiveValueBehavior) {
            this.predictiveValueBehavior = predictiveValueBehavior;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getPredictiveValueBuffer}
         * @param predictiveValueBuffer Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
         *                              When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
         *                              Default value: 0
         * @return {@code this}
         */
        public Builder predictiveValueBuffer(java.lang.Number predictiveValueBuffer) {
            this.predictiveValueBuffer = predictiveValueBuffer;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getPredictiveValueBuffer}
         * @param predictiveValueBuffer Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
         *                              When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
         *                              Default value: 0
         * @return {@code this}
         */
        public Builder predictiveValueBuffer(com.aliyun.ros.cdk.core.IResolvable predictiveValueBuffer) {
            this.predictiveValueBuffer = predictiveValueBuffer;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getScaleInEvaluationCount}
         * @param scaleInEvaluationCount Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered.
         *                               After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
         *                               Default value: 15.
         * @return {@code this}
         */
        public Builder scaleInEvaluationCount(java.lang.Number scaleInEvaluationCount) {
            this.scaleInEvaluationCount = scaleInEvaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getScaleInEvaluationCount}
         * @param scaleInEvaluationCount Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered.
         *                               After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
         *                               Default value: 15.
         * @return {@code this}
         */
        public Builder scaleInEvaluationCount(com.aliyun.ros.cdk.core.IResolvable scaleInEvaluationCount) {
            this.scaleInEvaluationCount = scaleInEvaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getScaleOutEvaluationCount}
         * @param scaleOutEvaluationCount Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered.
         *                                After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
         *                                Default value: 3.
         * @return {@code this}
         */
        public Builder scaleOutEvaluationCount(java.lang.Number scaleOutEvaluationCount) {
            this.scaleOutEvaluationCount = scaleOutEvaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getScaleOutEvaluationCount}
         * @param scaleOutEvaluationCount Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered.
         *                                After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
         *                                Default value: 3.
         * @return {@code this}
         */
        public Builder scaleOutEvaluationCount(com.aliyun.ros.cdk.core.IResolvable scaleOutEvaluationCount) {
            this.scaleOutEvaluationCount = scaleOutEvaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getScalingRuleName}
         * @param scalingRuleName Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.
         *                        It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
         * @return {@code this}
         */
        public Builder scalingRuleName(java.lang.String scalingRuleName) {
            this.scalingRuleName = scalingRuleName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getScalingRuleName}
         * @param scalingRuleName Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.
         *                        It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
         * @return {@code this}
         */
        public Builder scalingRuleName(com.aliyun.ros.cdk.core.IResolvable scalingRuleName) {
            this.scalingRuleName = scalingRuleName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getScalingRuleType}
         * @param scalingRuleType Property scalingRuleType: The type of the scaling rule.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.</li>
         *                        <li>TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.</li>
         *                        <li>StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.</li>
         *                        <li>PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
         *                        If this parameter value is not specified, the default value is SimpleScalingRule.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder scalingRuleType(java.lang.String scalingRuleType) {
            this.scalingRuleType = scalingRuleType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getScalingRuleType}
         * @param scalingRuleType Property scalingRuleType: The type of the scaling rule.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.</li>
         *                        <li>TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.</li>
         *                        <li>StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.</li>
         *                        <li>PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
         *                        If this parameter value is not specified, the default value is SimpleScalingRule.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder scalingRuleType(com.aliyun.ros.cdk.core.IResolvable scalingRuleType) {
            this.scalingRuleType = scalingRuleType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getStepAdjustment}
         * @param stepAdjustment Property stepAdjustment:.
         * @return {@code this}
         */
        public Builder stepAdjustment(com.aliyun.ros.cdk.core.IResolvable stepAdjustment) {
            this.stepAdjustment = stepAdjustment;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getStepAdjustment}
         * @param stepAdjustment Property stepAdjustment:.
         * @return {@code this}
         */
        public Builder stepAdjustment(java.util.List<? extends java.lang.Object> stepAdjustment) {
            this.stepAdjustment = stepAdjustment;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getTargetValue}
         * @param targetValue Property targetValue: The target value of a metric.
         *                    This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
         * @return {@code this}
         */
        public Builder targetValue(java.lang.Number targetValue) {
            this.targetValue = targetValue;
            return this;
        }

        /**
         * Sets the value of {@link ScalingRuleProps#getTargetValue}
         * @param targetValue Property targetValue: The target value of a metric.
         *                    This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
         * @return {@code this}
         */
        public Builder targetValue(com.aliyun.ros.cdk.core.IResolvable targetValue) {
            this.targetValue = targetValue;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScalingRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScalingRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScalingRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingRuleProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.ScalingRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScalingRuleProps.Jsii$Proxy that = (ScalingRuleProps.Jsii$Proxy) o;

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
