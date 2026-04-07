using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosBaselineStrategy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBaselineStrategyProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosBaselineStrategyProps")]
    public interface IRosBaselineStrategyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: baselineStrategyName: The new name of the baseline check policy.
        /// </remarks>
        [JsiiProperty(name: "baselineStrategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BaselineStrategyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: customType: The type of the baseline check policy. Valid values:
        /// *   **custom**: a custom baseline check policy
        /// *   **common**: a standard baseline check policy.
        /// </remarks>
        [JsiiProperty(name: "customType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CustomType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cycleDays: The new interval of the baseline check. Valid values:
        /// *   **1**: every 2 days
        /// *   **3**: every 4 days
        /// *   **7**: every 8 days
        /// *   **30**: every 31 days.
        /// </remarks>
        [JsiiProperty(name: "cycleDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CycleDays
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: riskSubTypeName: The subtype of the baselines.
        /// </remarks>
        [JsiiProperty(name: "riskSubTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RiskSubTypeName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StartTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetType: The method that is used to apply the baseline check policy. Valid values:
        /// *   **groupId**: asset groups
        /// *   **uuid**: assets.
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetType
        {
            get;
        }

        /// <summary>Properties for defining a `RosBaselineStrategy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBaselineStrategyProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosBaselineStrategyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosBaselineStrategyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: baselineStrategyName: The new name of the baseline check policy.
            /// </remarks>
            [JsiiProperty(name: "baselineStrategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BaselineStrategyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: customType: The type of the baseline check policy. Valid values:
            /// *   **custom**: a custom baseline check policy
            /// *   **common**: a standard baseline check policy.
            /// </remarks>
            [JsiiProperty(name: "customType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CustomType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cycleDays: The new interval of the baseline check. Valid values:
            /// *   **1**: every 2 days
            /// *   **3**: every 4 days
            /// *   **7**: every 8 days
            /// *   **30**: every 31 days.
            /// </remarks>
            [JsiiProperty(name: "cycleDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CycleDays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
            /// </remarks>
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: riskSubTypeName: The subtype of the baselines.
            /// </remarks>
            [JsiiProperty(name: "riskSubTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RiskSubTypeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
            /// </remarks>
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetType: The method that is used to apply the baseline check policy. Valid values:
            /// *   **groupId**: asset groups
            /// *   **uuid**: assets.
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
