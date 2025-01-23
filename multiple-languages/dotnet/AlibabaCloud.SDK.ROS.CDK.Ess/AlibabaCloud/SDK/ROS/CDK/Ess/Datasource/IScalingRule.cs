using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess.Datasource
{
    /// <summary>Represents a `ScalingRule`.</summary>
    [JsiiInterface(nativeType: typeof(IScalingRule), fullyQualifiedName: "@alicloud/ros-cdk-ess.datasource.IScalingRule")]
    public interface IScalingRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AdjustmentType: The adjustment method of the scaling rule.</summary>
        [JsiiProperty(name: "attrAdjustmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAdjustmentType
        {
            get;
        }

        /// <summary>Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.</summary>
        [JsiiProperty(name: "attrAdjustmentValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAdjustmentValue
        {
            get;
        }

        /// <summary>Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.</summary>
        /// <remarks>
        /// The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
        /// </remarks>
        [JsiiProperty(name: "attrAlarms", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAlarms
        {
            get;
        }

        /// <summary>Attribute Cooldown: The cooldown period of the scaling rule.</summary>
        [JsiiProperty(name: "attrCooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCooldown
        {
            get;
        }

        /// <summary>Attribute DisableScaleIn: Indicates whether scale-in is disabled.</summary>
        [JsiiProperty(name: "attrDisableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisableScaleIn
        {
            get;
        }

        /// <summary>Attribute EstimatedInstanceWarmup: The warm-up period of instances.</summary>
        [JsiiProperty(name: "attrEstimatedInstanceWarmup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEstimatedInstanceWarmup
        {
            get;
        }

        /// <summary>Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.</summary>
        [JsiiProperty(name: "attrInitialMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInitialMaxSize
        {
            get;
        }

        /// <summary>Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.</summary>
        [JsiiProperty(name: "attrMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaxSize
        {
            get;
        }

        /// <summary>Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.</summary>
        [JsiiProperty(name: "attrMetricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMetricName
        {
            get;
        }

        /// <summary>Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.</summary>
        [JsiiProperty(name: "attrMinAdjustmentMagnitude", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMinAdjustmentMagnitude
        {
            get;
        }

        /// <summary>Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.</summary>
        [JsiiProperty(name: "attrMinSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMinSize
        {
            get;
        }

        /// <summary>Attribute PredictiveScalingMode: The mode of the predictive scaling rule.</summary>
        [JsiiProperty(name: "attrPredictiveScalingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPredictiveScalingMode
        {
            get;
        }

        /// <summary>Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.</summary>
        [JsiiProperty(name: "attrPredictiveTaskBufferTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPredictiveTaskBufferTime
        {
            get;
        }

        /// <summary>Attribute PredictiveValueBehavior: The action on the predicted maximum value.</summary>
        [JsiiProperty(name: "attrPredictiveValueBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPredictiveValueBehavior
        {
            get;
        }

        /// <summary>Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.</summary>
        [JsiiProperty(name: "attrPredictiveValueBuffer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPredictiveValueBuffer
        {
            get;
        }

        /// <summary>Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.</summary>
        [JsiiProperty(name: "attrScaleInEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScaleInEvaluationCount
        {
            get;
        }

        /// <summary>Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.</summary>
        [JsiiProperty(name: "attrScaleOutEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScaleOutEvaluationCount
        {
            get;
        }

        /// <summary>Attribute ScalingGroupId: The ID of the scaling group.</summary>
        [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingGroupId
        {
            get;
        }

        /// <summary>Attribute ScalingRuleAri: The unique identifier of the scaling rule.</summary>
        [JsiiProperty(name: "attrScalingRuleAri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingRuleAri
        {
            get;
        }

        /// <summary>Attribute ScalingRuleId: The ID of the scaling rule.</summary>
        [JsiiProperty(name: "attrScalingRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingRuleId
        {
            get;
        }

        /// <summary>Attribute ScalingRuleName: The name of the scaling rule.</summary>
        [JsiiProperty(name: "attrScalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingRuleName
        {
            get;
        }

        /// <summary>Attribute ScalingRuleType: The type of the scaling rule.</summary>
        [JsiiProperty(name: "attrScalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingRuleType
        {
            get;
        }

        /// <summary>Attribute StepAdjustments: The step adjustments of the step scaling rule.</summary>
        [JsiiProperty(name: "attrStepAdjustments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStepAdjustments
        {
            get;
        }

        /// <summary>Attribute TargetValue: The target value of the metric.</summary>
        [JsiiProperty(name: "attrTargetValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetValue
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ess.datasource.ScalingRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `ScalingRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScalingRule), fullyQualifiedName: "@alicloud/ros-cdk-ess.datasource.IScalingRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AdjustmentType: The adjustment method of the scaling rule.</summary>
            [JsiiProperty(name: "attrAdjustmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAdjustmentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.</summary>
            [JsiiProperty(name: "attrAdjustmentValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAdjustmentValue
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.</summary>
            /// <remarks>
            /// The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
            /// </remarks>
            [JsiiProperty(name: "attrAlarms", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAlarms
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Cooldown: The cooldown period of the scaling rule.</summary>
            [JsiiProperty(name: "attrCooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCooldown
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DisableScaleIn: Indicates whether scale-in is disabled.</summary>
            [JsiiProperty(name: "attrDisableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisableScaleIn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EstimatedInstanceWarmup: The warm-up period of instances.</summary>
            [JsiiProperty(name: "attrEstimatedInstanceWarmup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEstimatedInstanceWarmup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.</summary>
            [JsiiProperty(name: "attrInitialMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInitialMaxSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.</summary>
            [JsiiProperty(name: "attrMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaxSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.</summary>
            [JsiiProperty(name: "attrMetricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMetricName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.</summary>
            [JsiiProperty(name: "attrMinAdjustmentMagnitude", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMinAdjustmentMagnitude
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.</summary>
            [JsiiProperty(name: "attrMinSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMinSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PredictiveScalingMode: The mode of the predictive scaling rule.</summary>
            [JsiiProperty(name: "attrPredictiveScalingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPredictiveScalingMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.</summary>
            [JsiiProperty(name: "attrPredictiveTaskBufferTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPredictiveTaskBufferTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PredictiveValueBehavior: The action on the predicted maximum value.</summary>
            [JsiiProperty(name: "attrPredictiveValueBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPredictiveValueBehavior
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.</summary>
            [JsiiProperty(name: "attrPredictiveValueBuffer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPredictiveValueBuffer
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.</summary>
            [JsiiProperty(name: "attrScaleInEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScaleInEvaluationCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.</summary>
            [JsiiProperty(name: "attrScaleOutEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScaleOutEvaluationCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingGroupId: The ID of the scaling group.</summary>
            [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingRuleAri: The unique identifier of the scaling rule.</summary>
            [JsiiProperty(name: "attrScalingRuleAri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingRuleAri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingRuleId: The ID of the scaling rule.</summary>
            [JsiiProperty(name: "attrScalingRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingRuleName: The name of the scaling rule.</summary>
            [JsiiProperty(name: "attrScalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingRuleType: The type of the scaling rule.</summary>
            [JsiiProperty(name: "attrScalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingRuleType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StepAdjustments: The step adjustments of the step scaling rule.</summary>
            [JsiiProperty(name: "attrStepAdjustments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStepAdjustments
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetValue: The target value of the metric.</summary>
            [JsiiProperty(name: "attrTargetValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetValue
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ess.datasource.ScalingRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingRuleProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
