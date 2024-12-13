using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `ApplicationScalingRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationScalingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.ApplicationScalingRuleProps")]
    public interface IApplicationScalingRuleProps
    {
        /// <summary>Property appId: The ID of the application.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppId
        {
            get;
        }

        /// <summary>Property scalingRuleName: The name of the auto scaling policy.</summary>
        /// <remarks>
        /// The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
        /// </remarks>
        [JsiiProperty(name: "scalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingRuleName
        {
            get;
        }

        /// <summary>Property scalingRuleType: The type of the auto scaling policy.</summary>
        /// <remarks>
        /// Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
        /// </remarks>
        [JsiiProperty(name: "scalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingRuleType
        {
            get;
        }

        /// <summary>Property minReadyInstanceRatio: The minimum percentage of surviving instances.</summary>
        /// <remarks>
        /// The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
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

        /// <summary>Property minReadyInstances: Minimum number of surviving instances.</summary>
        /// <remarks>
        /// The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to <strong>-1</strong>, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
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

        /// <summary>Property scalingRuleEnable: Whether to enable the scaling rule.</summary>
        [JsiiProperty(name: "scalingRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy.</summary>
        /// <remarks>
        /// This parameter is required when you select monitoring indicator elasticity policy setting.
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

        /// <summary>Property scalingRuleTimer: The configuration of the timer scaling policy.</summary>
        [JsiiProperty(name: "scalingRuleTimer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleTimer
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ApplicationScalingRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplicationScalingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.ApplicationScalingRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IApplicationScalingRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appId: The ID of the application.</summary>
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scalingRuleName: The name of the auto scaling policy.</summary>
            /// <remarks>
            /// The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
            /// </remarks>
            [JsiiProperty(name: "scalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scalingRuleType: The type of the auto scaling policy.</summary>
            /// <remarks>
            /// Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
            /// </remarks>
            [JsiiProperty(name: "scalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingRuleType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property minReadyInstanceRatio: The minimum percentage of surviving instances.</summary>
            /// <remarks>
            /// The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minReadyInstanceRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinReadyInstanceRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minReadyInstances: Minimum number of surviving instances.</summary>
            /// <remarks>
            /// The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to <strong>-1</strong>, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minReadyInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinReadyInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingRuleEnable: Whether to enable the scaling rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingRuleEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy.</summary>
            /// <remarks>
            /// This parameter is required when you select monitoring indicator elasticity policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleMetric", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleMetricProperty\"}]}}", isOptional: true)]
            public object? ScalingRuleMetric
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingRuleTimer: The configuration of the timer scaling policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleTimer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty\"}]}}", isOptional: true)]
            public object? ScalingRuleTimer
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
