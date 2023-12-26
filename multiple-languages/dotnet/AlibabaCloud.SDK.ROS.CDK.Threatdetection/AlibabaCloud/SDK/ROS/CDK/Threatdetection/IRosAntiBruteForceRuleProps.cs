using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosAntiBruteForceRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAntiBruteForceRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRuleProps")]
    public interface IRosAntiBruteForceRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: antiBruteForceRuleName: The name of the defense rule.
        /// </remarks>
        [JsiiProperty(name: "antiBruteForceRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AntiBruteForceRuleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: failCount: The maximum number of failed logon attempts from an account.
        /// Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        /// </remarks>
        [JsiiProperty(name: "failCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FailCount
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: forbiddenTime: The period of time during which logons from an account are not allowed.
        /// Unit: minutes. Valid values:
        /// - 5: 5 minutes
        /// - 15: 15 minutes
        /// - 30: 30 minutes
        /// - 60: 1 hour
        /// - 120: 2 hours
        /// - 360: 6 hours
        /// - 720: 12 hours
        /// - 1440: 24 hours
        /// - 10080: 7 days
        /// - 52560000: permanent
        /// </remarks>
        [JsiiProperty(name: "forbiddenTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ForbiddenTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: span: The maximum period of time during which failed logon attempts from an account can occur.
        /// Unit: minutes. Valid values:
        /// - 1
        /// - 2
        /// - 5
        /// - 10
        /// - 15
        /// </remarks>
        [JsiiProperty(name: "span", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Span
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: uuidList: The UUIDs of the servers to which you want to apply the defense rule.
        /// </remarks>
        [JsiiProperty(name: "uuidList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object UuidList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultRule: Specifies whether to set the defense rule as the default rule.
        /// Valid values:
        /// - true: yes
        /// - false: no
        /// </remarks>
        [JsiiProperty(name: "defaultRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultRule
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAntiBruteForceRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAntiBruteForceRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosAntiBruteForceRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: antiBruteForceRuleName: The name of the defense rule.
            /// </remarks>
            [JsiiProperty(name: "antiBruteForceRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AntiBruteForceRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: failCount: The maximum number of failed logon attempts from an account.
            /// Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
            /// </remarks>
            [JsiiProperty(name: "failCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FailCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: forbiddenTime: The period of time during which logons from an account are not allowed.
            /// Unit: minutes. Valid values:
            /// - 5: 5 minutes
            /// - 15: 15 minutes
            /// - 30: 30 minutes
            /// - 60: 1 hour
            /// - 120: 2 hours
            /// - 360: 6 hours
            /// - 720: 12 hours
            /// - 1440: 24 hours
            /// - 10080: 7 days
            /// - 52560000: permanent
            /// </remarks>
            [JsiiProperty(name: "forbiddenTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ForbiddenTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: span: The maximum period of time during which failed logon attempts from an account can occur.
            /// Unit: minutes. Valid values:
            /// - 1
            /// - 2
            /// - 5
            /// - 10
            /// - 15
            /// </remarks>
            [JsiiProperty(name: "span", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Span
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: uuidList: The UUIDs of the servers to which you want to apply the defense rule.
            /// </remarks>
            [JsiiProperty(name: "uuidList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object UuidList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultRule: Specifies whether to set the defense rule as the default rule.
            /// Valid values:
            /// - true: yes
            /// - false: no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultRule
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
