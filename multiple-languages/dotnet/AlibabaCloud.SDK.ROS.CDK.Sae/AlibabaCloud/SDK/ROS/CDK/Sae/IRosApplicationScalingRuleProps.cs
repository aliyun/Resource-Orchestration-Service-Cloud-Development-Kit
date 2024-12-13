using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `RosApplicationScalingRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplicationScalingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRuleProps")]
    public interface IRosApplicationScalingRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: The ID of the application.
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleName: The name of the auto scaling policy. The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
        /// </remarks>
        [JsiiProperty(name: "scalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingRuleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleType: The type of the auto scaling policy. Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
        /// </remarks>
        [JsiiProperty(name: "scalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingRuleType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: minReadyInstanceRatio: The minimum percentage of surviving instances. The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
        /// </remarks>
        [JsiiProperty(name: "minReadyInstanceRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinReadyInstanceRatio
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: minReadyInstances: Minimum number of surviving instances. The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to **-1**, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
        /// </remarks>
        [JsiiProperty(name: "minReadyInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinReadyInstances
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleEnable: Whether to enable the scaling rule.
        /// </remarks>
        [JsiiProperty(name: "scalingRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleEnable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleMetric: Configuration of monitoring indicator elasticity policy. This parameter is required when you select monitoring indicator elasticity policy setting.
        /// </remarks>
        [JsiiProperty(name: "scalingRuleMetric", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleMetricProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleMetric
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleTimer: The configuration of the timer scaling policy.
        /// </remarks>
        [JsiiProperty(name: "scalingRuleTimer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleTimer
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosApplicationScalingRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationScalingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IRosApplicationScalingRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appId: The ID of the application.
            /// </remarks>
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingRuleName: The name of the auto scaling policy. The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
            /// </remarks>
            [JsiiProperty(name: "scalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingRuleType: The type of the auto scaling policy. Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
            /// </remarks>
            [JsiiProperty(name: "scalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingRuleType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: minReadyInstanceRatio: The minimum percentage of surviving instances. The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minReadyInstanceRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinReadyInstanceRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: minReadyInstances: Minimum number of surviving instances. The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to **-1**, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minReadyInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinReadyInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingRuleEnable: Whether to enable the scaling rule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingRuleEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingRuleMetric: Configuration of monitoring indicator elasticity policy. This parameter is required when you select monitoring indicator elasticity policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleMetric", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleMetricProperty\"}]}}", isOptional: true)]
            public object? ScalingRuleMetric
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingRuleTimer: The configuration of the timer scaling policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleTimer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty\"}]}}", isOptional: true)]
            public object? ScalingRuleTimer
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
