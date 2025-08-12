using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ScalingRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IScalingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingRuleProps")]
    public interface IScalingRuleProps
    {
        /// <summary>Property scalingGroupId: ID of the scaling group of a scaling rule.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <summary>Property adjustmentType: Adjustment mode of a scaling rule.</summary>
        /// <remarks>
        /// Optional values:
        ///
        /// <list type="bullet">
        /// <description>QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.</description>
        /// <description>PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.</description>
        /// <description>TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "adjustmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AdjustmentType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property adjustmentValue: Adjusted value of a scaling rule.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description>QuantityChangeInCapacity: [-500, 500]</description>
        /// <description>PercentChangeInCapacity: [-100, 10000]</description>
        /// <description>TotalCapacity: [0, 1000]</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "adjustmentValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AdjustmentValue
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cooldown: Cool-down time of a scaling rule.</summary>
        /// <remarks>
        /// Value range: [0, 86,400], in seconds. The default value is empty.
        /// </remarks>
        [JsiiProperty(name: "cooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cooldown
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property disableScaleIn: Specifies whether to disable scale-in.</summary>
        /// <remarks>
        /// This parameter is applicable only to target tracking scaling rules.
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "disableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisableScaleIn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property estimatedInstanceWarmup: The warm-up period of the ECS instances.</summary>
        /// <remarks>
        /// This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
        /// Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
        /// Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        /// </remarks>
        [JsiiProperty(name: "estimatedInstanceWarmup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EstimatedInstanceWarmup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.</summary>
        /// <remarks>
        /// Default value: the same as the value of MaxSize
        /// </remarks>
        [JsiiProperty(name: "initialMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InitialMaxSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property metricName: The predefined metric to monitor.</summary>
        /// <remarks>
        /// This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
        /// Valid values of a target tracking scaling rule:
        ///
        /// <list type="bullet">
        /// <description>CpuUtilizationAgent:  (recommended) the CPU utilization.</description>
        /// <description>MemoryUtilization: (recommended) the memory usage.- CpuUtilization: the average CPU utilization.</description>
        /// <description>IntranetTx: the outbound traffic over an internal network.</description>
        /// <description>IntranetRx: the average inbound traffic over an internal network.</description>
        /// <description>VpcInternetTx: the outbound traffic from a virtual private cloud (VPC) to the Internet.</description>
        /// <description>VpcInternetRx: the inbound traffic from the Internet to a VPC.</description>
        /// <description>LoadBalancerRealServerAverageQps: the queries per second (QPS) per Application Load Balancer (ALB) server group.
        /// Valid values of a predictive scaling rule:</description>
        /// <description>CpuUtilization: the average CPU utilization.</description>
        /// <description>IntranetRx: the average inbound traffic over an internal network.</description>
        /// <description>IntranetTx: the average outbound traffic over an internal network.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MetricName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.</summary>
        /// <remarks>
        /// This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        /// </remarks>
        [JsiiProperty(name: "minAdjustmentMagnitude", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinAdjustmentMagnitude
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property predictiveScalingMode: The mode of the predictive scaling rule.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>PredictAndScale: generates forecasts and creates forecast tasks.</description>
        /// <description>PredictOnly: generates forecasts but does not create forecast tasks.
        /// Default value: PredictAndScale</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "predictiveScalingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PredictiveScalingMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.</summary>
        /// <remarks>
        /// By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
        /// Default value: 0
        /// </remarks>
        [JsiiProperty(name: "predictiveTaskBufferTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PredictiveTaskBufferTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property predictiveValueBehavior: The action taken on the predicted maximum value.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        ///
        /// <list type="bullet">
        /// <description>PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.</description>
        /// <description>PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
        /// Default value: MaxOverridePredictiveValue</description>
        /// </list></description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "predictiveValueBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PredictiveValueBehavior
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.</summary>
        /// <remarks>
        /// When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
        /// Default value: 0
        /// </remarks>
        [JsiiProperty(name: "predictiveValueBuffer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PredictiveValueBuffer
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered.</summary>
        /// <remarks>
        /// After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
        /// Default value: 15.
        /// </remarks>
        [JsiiProperty(name: "scaleInEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScaleInEvaluationCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered.</summary>
        /// <remarks>
        /// After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
        /// Default value: 3.
        /// </remarks>
        [JsiiProperty(name: "scaleOutEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScaleOutEvaluationCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.</summary>
        /// <remarks>
        /// It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        /// </remarks>
        [JsiiProperty(name: "scalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingRuleType: The type of the scaling rule.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.</description>
        /// <description>TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.</description>
        /// <description>StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.</description>
        /// <description>PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
        /// If this parameter value is not specified, the default value is SimpleScalingRule.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "scalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property stepAdjustment:.</summary>
        [JsiiProperty(name: "stepAdjustment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StepAdjustment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property targetValue: The target value of a metric.</summary>
        /// <remarks>
        /// This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        /// </remarks>
        [JsiiProperty(name: "targetValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetValue
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ScalingRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IScalingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IScalingRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property scalingGroupId: ID of the scaling group of a scaling rule.</summary>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property adjustmentType: Adjustment mode of a scaling rule.</summary>
            /// <remarks>
            /// Optional values:
            ///
            /// <list type="bullet">
            /// <description>QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.</description>
            /// <description>PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.</description>
            /// <description>TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "adjustmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AdjustmentType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property adjustmentValue: Adjusted value of a scaling rule.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description>QuantityChangeInCapacity: [-500, 500]</description>
            /// <description>PercentChangeInCapacity: [-100, 10000]</description>
            /// <description>TotalCapacity: [0, 1000]</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "adjustmentValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AdjustmentValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cooldown: Cool-down time of a scaling rule.</summary>
            /// <remarks>
            /// Value range: [0, 86,400], in seconds. The default value is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cooldown
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property disableScaleIn: Specifies whether to disable scale-in.</summary>
            /// <remarks>
            /// This parameter is applicable only to target tracking scaling rules.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableScaleIn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property estimatedInstanceWarmup: The warm-up period of the ECS instances.</summary>
            /// <remarks>
            /// This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
            /// Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
            /// Valid values: 0 to 86400. Unit: seconds. Default value: 300.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "estimatedInstanceWarmup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EstimatedInstanceWarmup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.</summary>
            /// <remarks>
            /// Default value: the same as the value of MaxSize
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "initialMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InitialMaxSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property metricName: The predefined metric to monitor.</summary>
            /// <remarks>
            /// This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
            /// Valid values of a target tracking scaling rule:
            ///
            /// <list type="bullet">
            /// <description>CpuUtilizationAgent:  (recommended) the CPU utilization.</description>
            /// <description>MemoryUtilization: (recommended) the memory usage.- CpuUtilization: the average CPU utilization.</description>
            /// <description>IntranetTx: the outbound traffic over an internal network.</description>
            /// <description>IntranetRx: the average inbound traffic over an internal network.</description>
            /// <description>VpcInternetTx: the outbound traffic from a virtual private cloud (VPC) to the Internet.</description>
            /// <description>VpcInternetRx: the inbound traffic from the Internet to a VPC.</description>
            /// <description>LoadBalancerRealServerAverageQps: the queries per second (QPS) per Application Load Balancer (ALB) server group.
            /// Valid values of a predictive scaling rule:</description>
            /// <description>CpuUtilization: the average CPU utilization.</description>
            /// <description>IntranetRx: the average inbound traffic over an internal network.</description>
            /// <description>IntranetTx: the average outbound traffic over an internal network.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MetricName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.</summary>
            /// <remarks>
            /// This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minAdjustmentMagnitude", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinAdjustmentMagnitude
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property predictiveScalingMode: The mode of the predictive scaling rule.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>PredictAndScale: generates forecasts and creates forecast tasks.</description>
            /// <description>PredictOnly: generates forecasts but does not create forecast tasks.
            /// Default value: PredictAndScale</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "predictiveScalingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PredictiveScalingMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.</summary>
            /// <remarks>
            /// By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
            /// Default value: 0
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "predictiveTaskBufferTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PredictiveTaskBufferTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property predictiveValueBehavior: The action taken on the predicted maximum value.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
            ///
            /// <list type="bullet">
            /// <description>PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.</description>
            /// <description>PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
            /// Default value: MaxOverridePredictiveValue</description>
            /// </list></description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "predictiveValueBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PredictiveValueBehavior
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.</summary>
            /// <remarks>
            /// When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
            /// Default value: 0
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "predictiveValueBuffer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PredictiveValueBuffer
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered.</summary>
            /// <remarks>
            /// After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
            /// Default value: 15.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scaleInEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScaleInEvaluationCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered.</summary>
            /// <remarks>
            /// After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
            /// Default value: 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scaleOutEvaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScaleOutEvaluationCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.</summary>
            /// <remarks>
            /// It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingRuleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingRuleType: The type of the scaling rule.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.</description>
            /// <description>TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.</description>
            /// <description>StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.</description>
            /// <description>PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
            /// If this parameter value is not specified, the default value is SimpleScalingRule.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingRuleType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property stepAdjustment:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "stepAdjustment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? StepAdjustment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property targetValue: The target value of a metric.</summary>
            /// <remarks>
            /// This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetValue
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
