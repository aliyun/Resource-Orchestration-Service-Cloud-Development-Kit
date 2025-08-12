using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ESS::ScalingRule`, which is used to query the information about a scaling rule.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingRule`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.ScalingRule), fullyQualifiedName: "@alicloud/ros-cdk-ess.datasource.ScalingRule", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ess.datasource.ScalingRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ScalingRule : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingRule
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public ScalingRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingRuleProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingRuleProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ScalingRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ScalingRule(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AdjustmentType: The adjustment method of the scaling rule.</summary>
        [JsiiProperty(name: "attrAdjustmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAdjustmentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.</summary>
        [JsiiProperty(name: "attrAdjustmentValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAdjustmentValue
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.</summary>
        /// <remarks>
        /// The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
        /// </remarks>
        [JsiiProperty(name: "attrAlarms", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAlarms
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Cooldown: The cooldown period of the scaling rule.</summary>
        [JsiiProperty(name: "attrCooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCooldown
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DisableScaleIn: Indicates whether scale-in is disabled.</summary>
        [JsiiProperty(name: "attrDisableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDisableScaleIn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EstimatedInstanceWarmup: The warm-up period of instances.</summary>
        [JsiiProperty(name: "attrEstimatedInstanceWarmup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEstimatedInstanceWarmup
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.</summary>
        [JsiiProperty(name: "attrInitialMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInitialMaxSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.</summary>
        [JsiiProperty(name: "attrMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaxSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.</summary>
        [JsiiProperty(name: "attrMetricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMetricName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.</summary>
        [JsiiProperty(name: "attrMinAdjustmentMagnitude", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMinAdjustmentMagnitude
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.</summary>
        [JsiiProperty(name: "attrMinSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMinSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PredictiveScalingMode: The mode of the predictive scaling rule.</summary>
        [JsiiProperty(name: "attrPredictiveScalingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPredictiveScalingMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.</summary>
        [JsiiProperty(name: "attrPredictiveTaskBufferTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPredictiveTaskBufferTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PredictiveValueBehavior: The action on the predicted maximum value.</summary>
        [JsiiProperty(name: "attrPredictiveValueBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPredictiveValueBehavior
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.</summary>
        [JsiiProperty(name: "attrPredictiveValueBuffer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPredictiveValueBuffer
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.</summary>
        [JsiiProperty(name: "attrScaleInEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScaleInEvaluationCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.</summary>
        [JsiiProperty(name: "attrScaleOutEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScaleOutEvaluationCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingGroupId: The ID of the scaling group.</summary>
        [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScalingGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingRuleAri: The unique identifier of the scaling rule.</summary>
        [JsiiProperty(name: "attrScalingRuleAri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScalingRuleAri
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingRuleId: The ID of the scaling rule.</summary>
        [JsiiProperty(name: "attrScalingRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScalingRuleId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingRuleName: The name of the scaling rule.</summary>
        [JsiiProperty(name: "attrScalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScalingRuleName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingRuleType: The type of the scaling rule.</summary>
        [JsiiProperty(name: "attrScalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScalingRuleType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StepAdjustments: The step adjustments of the step scaling rule.</summary>
        [JsiiProperty(name: "attrStepAdjustments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStepAdjustments
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TargetValue: The target value of the metric.</summary>
        [JsiiProperty(name: "attrTargetValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTargetValue
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ess.datasource.ScalingRuleProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingRuleProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingRuleProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
