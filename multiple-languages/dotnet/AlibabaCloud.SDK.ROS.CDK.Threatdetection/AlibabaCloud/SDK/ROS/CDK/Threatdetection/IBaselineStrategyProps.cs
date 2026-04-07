using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `BaselineStrategy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBaselineStrategyProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.BaselineStrategyProps")]
    public interface IBaselineStrategyProps
    {
        /// <summary>Property baselineStrategyName: The new name of the baseline check policy.</summary>
        [JsiiProperty(name: "baselineStrategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BaselineStrategyName
        {
            get;
        }

        /// <summary>Property customType: The type of the baseline check policy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>custom</strong>: a custom baseline check policy</description>
        /// <description><strong>common</strong>: a standard baseline check policy.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "customType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CustomType
        {
            get;
        }

        /// <summary>Property cycleDays: The new interval of the baseline check.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>1</strong>: every 2 days</description>
        /// <description><strong>3</strong>: every 4 days</description>
        /// <description><strong>7</strong>: every 8 days</description>
        /// <description><strong>30</strong>: every 31 days.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "cycleDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CycleDays
        {
            get;
        }

        /// <summary>Property endTime: The time when the baseline check based on the baseline check policy ends.</summary>
        /// <remarks>
        /// Specify the time in the hh:mm:ss format.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndTime
        {
            get;
        }

        /// <summary>Property riskSubTypeName: The subtype of the baselines.</summary>
        [JsiiProperty(name: "riskSubTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RiskSubTypeName
        {
            get;
        }

        /// <summary>Property startTime: The time when the baseline check based on the baseline check policy starts.</summary>
        /// <remarks>
        /// Specify the time in the hh:mm:ss format.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StartTime
        {
            get;
        }

        /// <summary>Property targetType: The method that is used to apply the baseline check policy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>groupId</strong>: asset groups</description>
        /// <description><strong>uuid</strong>: assets.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetType
        {
            get;
        }

        /// <summary>Properties for defining a `BaselineStrategy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBaselineStrategyProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.BaselineStrategyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IBaselineStrategyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property baselineStrategyName: The new name of the baseline check policy.</summary>
            [JsiiProperty(name: "baselineStrategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BaselineStrategyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property customType: The type of the baseline check policy.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>custom</strong>: a custom baseline check policy</description>
            /// <description><strong>common</strong>: a standard baseline check policy.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "customType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CustomType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cycleDays: The new interval of the baseline check.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>1</strong>: every 2 days</description>
            /// <description><strong>3</strong>: every 4 days</description>
            /// <description><strong>7</strong>: every 8 days</description>
            /// <description><strong>30</strong>: every 31 days.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "cycleDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CycleDays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endTime: The time when the baseline check based on the baseline check policy ends.</summary>
            /// <remarks>
            /// Specify the time in the hh:mm:ss format.
            /// </remarks>
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property riskSubTypeName: The subtype of the baselines.</summary>
            [JsiiProperty(name: "riskSubTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RiskSubTypeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property startTime: The time when the baseline check based on the baseline check policy starts.</summary>
            /// <remarks>
            /// Specify the time in the hh:mm:ss format.
            /// </remarks>
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetType: The method that is used to apply the baseline check policy.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>groupId</strong>: asset groups</description>
            /// <description><strong>uuid</strong>: assets.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
