using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `NetworkPackage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackage
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.NetworkPackageProps")]
    public interface INetworkPackageProps
    {
        /// <summary>Property bandwidth: The maximum public bandwidth.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// Valid values for the pay-by-data-transfer type (PayByTraffic): 10 to 200.
        /// Valid values for the pay-by-bandwith type (PayByBandwidth): 10 to 1000.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bandwidth
        {
            get;
        }

        /// <summary>Property officeSiteId: The ID of the workspace.</summary>
        [JsiiProperty(name: "officeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OfficeSiteId
        {
            get;
        }

        /// <summary>Property autoPay: Specifies whether to enable automatic payment.</summary>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Specifies whether to enable auto-renewal.</summary>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: The metering method of the pay-as-you-go Internet access package.</summary>
        /// <remarks>
        /// Valid values:
        /// PayByTraffic: pay-by-data-transfer.
        /// PayByBandwidth: pay-by-bandwidth.
        /// Default value: PayByTraffic.
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payType: The billing method of the Internet access package.</summary>
        /// <remarks>
        /// Enumeration Value:
        /// PostPaid
        /// PrePaid
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The duration of the Internet access package.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodUnit: The unit of duration that you want to use for the Internet access package.</summary>
        /// <remarks>
        /// Enumeration Value:
        /// MonthYearWeek
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property promotionId: The ID of the sales promotion.</summary>
        [JsiiProperty(name: "promotionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PromotionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `NetworkPackage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackage
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.NetworkPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.INetworkPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidth: The maximum public bandwidth.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// Valid values for the pay-by-data-transfer type (PayByTraffic): 10 to 200.
            /// Valid values for the pay-by-bandwith type (PayByBandwidth): 10 to 1000.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property officeSiteId: The ID of the workspace.</summary>
            [JsiiProperty(name: "officeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OfficeSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoPay: Specifies whether to enable automatic payment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Specifies whether to enable auto-renewal.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: The metering method of the pay-as-you-go Internet access package.</summary>
            /// <remarks>
            /// Valid values:
            /// PayByTraffic: pay-by-data-transfer.
            /// PayByBandwidth: pay-by-bandwidth.
            /// Default value: PayByTraffic.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payType: The billing method of the Internet access package.</summary>
            /// <remarks>
            /// Enumeration Value:
            /// PostPaid
            /// PrePaid
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The duration of the Internet access package.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The unit of duration that you want to use for the Internet access package.</summary>
            /// <remarks>
            /// Enumeration Value:
            /// MonthYearWeek
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property promotionId: The ID of the sales promotion.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "promotionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PromotionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
