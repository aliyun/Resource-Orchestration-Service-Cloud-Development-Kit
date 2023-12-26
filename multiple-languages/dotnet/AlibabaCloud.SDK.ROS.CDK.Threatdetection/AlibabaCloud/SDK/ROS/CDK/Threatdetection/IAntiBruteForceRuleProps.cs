using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `AntiBruteForceRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAntiBruteForceRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.AntiBruteForceRuleProps")]
    public interface IAntiBruteForceRuleProps
    {
        /// <summary>Property antiBruteForceRuleName: The name of the defense rule.</summary>
        [JsiiProperty(name: "antiBruteForceRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AntiBruteForceRuleName
        {
            get;
        }

        /// <summary>Property failCount: The maximum number of failed logon attempts from an account.</summary>
        /// <remarks>
        /// Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        /// </remarks>
        [JsiiProperty(name: "failCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FailCount
        {
            get;
        }

        /// <summary>Property forbiddenTime: The period of time during which logons from an account are not allowed.</summary>
        /// <remarks>
        /// Unit: minutes. Valid values:
        ///
        /// <list type="bullet">
        /// <description>5: 5 minutes</description>
        /// <description>15: 15 minutes</description>
        /// <description>30: 30 minutes</description>
        /// <description>60: 1 hour</description>
        /// <description>120: 2 hours</description>
        /// <description>360: 6 hours</description>
        /// <description>720: 12 hours</description>
        /// <description>1440: 24 hours</description>
        /// <description>10080: 7 days</description>
        /// <description>52560000: permanent</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "forbiddenTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ForbiddenTime
        {
            get;
        }

        /// <summary>Property span: The maximum period of time during which failed logon attempts from an account can occur.</summary>
        /// <remarks>
        /// Unit: minutes. Valid values:
        ///
        /// <list type="bullet">
        /// <description>1</description>
        /// <description>2</description>
        /// <description>5</description>
        /// <description>10</description>
        /// <description>15</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "span", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Span
        {
            get;
        }

        /// <summary>Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.</summary>
        [JsiiProperty(name: "uuidList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object UuidList
        {
            get;
        }

        /// <summary>Property defaultRule: Specifies whether to set the defense rule as the default rule.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: yes</description>
        /// <description>false: no</description>
        /// </list>
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

        /// <summary>Properties for defining a `AntiBruteForceRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAntiBruteForceRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.AntiBruteForceRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAntiBruteForceRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property antiBruteForceRuleName: The name of the defense rule.</summary>
            [JsiiProperty(name: "antiBruteForceRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AntiBruteForceRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property failCount: The maximum number of failed logon attempts from an account.</summary>
            /// <remarks>
            /// Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
            /// </remarks>
            [JsiiProperty(name: "failCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FailCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property forbiddenTime: The period of time during which logons from an account are not allowed.</summary>
            /// <remarks>
            /// Unit: minutes. Valid values:
            ///
            /// <list type="bullet">
            /// <description>5: 5 minutes</description>
            /// <description>15: 15 minutes</description>
            /// <description>30: 30 minutes</description>
            /// <description>60: 1 hour</description>
            /// <description>120: 2 hours</description>
            /// <description>360: 6 hours</description>
            /// <description>720: 12 hours</description>
            /// <description>1440: 24 hours</description>
            /// <description>10080: 7 days</description>
            /// <description>52560000: permanent</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "forbiddenTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ForbiddenTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property span: The maximum period of time during which failed logon attempts from an account can occur.</summary>
            /// <remarks>
            /// Unit: minutes. Valid values:
            ///
            /// <list type="bullet">
            /// <description>1</description>
            /// <description>2</description>
            /// <description>5</description>
            /// <description>10</description>
            /// <description>15</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "span", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Span
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.</summary>
            [JsiiProperty(name: "uuidList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object UuidList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property defaultRule: Specifies whether to set the defense rule as the default rule.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: yes</description>
            /// <description>false: no</description>
            /// </list>
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
