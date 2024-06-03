using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `BasicAccelerator`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBasicAcceleratorProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BasicAcceleratorProps")]
    public interface IBasicAcceleratorProps
    {
        /// <summary>Property autoPay: Specifies whether to enable automatic payment.</summary>
        /// <remarks>
        /// Valid values:
        /// false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
        /// true: enables automatic payment. Payments are automatically completed.
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance.</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables auto-renewal for the basic GA instance.
        /// false: disables auto-renewal for the basic GA instance. This is the default value.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewDuration: The auto-renewal duration.</summary>
        /// <remarks>
        /// Unit: months.Valid values: 1 to 12. Default value: 1.
        /// </remarks>
        [JsiiProperty(name: "autoRenewDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills.</summary>
        /// <remarks>
        /// Valid values:
        /// true: automatically applies coupons to your bills.
        /// false: does not automatically apply coupons to your bills. This is the default value.
        /// </remarks>
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoUseCoupon
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bandwidthBillingType: The bandwidth billing method.</summary>
        /// <remarks>
        /// Valid values:
        /// BandwidthPackage: billed based on bandwidth plans.
        /// CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
        /// CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
        /// </remarks>
        [JsiiProperty(name: "bandwidthBillingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BandwidthBillingType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: The billing method.</summary>
        /// <remarks>
        /// Valid values:
        /// PREPAY (default)POSTPAY
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property duration: The subscription duration of the GA instance.</summary>
        /// <remarks>
        /// If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
        /// If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Duration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: The billing cycle.</summary>
        /// <remarks>
        /// Valid values:
        /// Month
        /// Year
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property promotionOptionNo: The code of the coupon.</summary>
        [JsiiProperty(name: "promotionOptionNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PromotionOptionNo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The tags of the basic GA instance.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosBasicAccelerator.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ga.RosBasicAccelerator.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `BasicAccelerator`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBasicAcceleratorProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BasicAcceleratorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IBasicAcceleratorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property autoPay: Specifies whether to enable automatic payment.</summary>
            /// <remarks>
            /// Valid values:
            /// false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
            /// true: enables automatic payment. Payments are automatically completed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance.</summary>
            /// <remarks>
            /// Valid values:
            /// true: enables auto-renewal for the basic GA instance.
            /// false: disables auto-renewal for the basic GA instance. This is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewDuration: The auto-renewal duration.</summary>
            /// <remarks>
            /// Unit: months.Valid values: 1 to 12. Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills.</summary>
            /// <remarks>
            /// Valid values:
            /// true: automatically applies coupons to your bills.
            /// false: does not automatically apply coupons to your bills. This is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoUseCoupon
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidthBillingType: The bandwidth billing method.</summary>
            /// <remarks>
            /// Valid values:
            /// BandwidthPackage: billed based on bandwidth plans.
            /// CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
            /// CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthBillingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthBillingType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: The billing method.</summary>
            /// <remarks>
            /// Valid values:
            /// PREPAY (default)POSTPAY
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property duration: The subscription duration of the GA instance.</summary>
            /// <remarks>
            /// If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
            /// If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: The billing cycle.</summary>
            /// <remarks>
            /// Valid values:
            /// Month
            /// Year
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property promotionOptionNo: The code of the coupon.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "promotionOptionNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PromotionOptionNo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The tags of the basic GA instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosBasicAccelerator.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ga.RosBasicAccelerator.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ga.RosBasicAccelerator.ITagsProperty[]?>();
            }
        }
    }
}
