using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Flink
{
    /// <summary>Properties for defining a `InstanceV2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instancev2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceV2Props), fullyQualifiedName: "@alicloud/ros-cdk-flink.InstanceV2Props")]
    public interface IInstanceV2Props
    {
        /// <summary>Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go.</summary>
        /// <remarks>
        /// PRE: subscription.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChargeType
        {
            get;
        }

        /// <summary>Property instanceName: The name of instance.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property storage: Resource specifications.</summary>
        /// <remarks>
        /// When ChargeType is configured as PRE, the resource specification parameters must be filled.
        /// </remarks>
        [JsiiProperty(name: "storage", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosInstanceV2.StorageProperty\"}]}}")]
        object Storage
        {
            get;
        }

        /// <summary>Property vpcId: VPC ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchIds: Virtual switch ID.</summary>
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchIds
        {
            get;
        }

        /// <summary>Property autoRenew: When the payment type is the monthly package, the value of the value is as follows: true: Automatic renewal.</summary>
        /// <remarks>
        /// false: Manual renewal.
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

        /// <summary>Property duration: Number of order cycle.</summary>
        /// <remarks>
        /// When ChargeType is configured as PRE, the duration parameter must be filled.
        /// If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
        /// If PricingCycle is year, the valid range is 1 to 3
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

        /// <summary>Property pricingCycle: The ordering cycle only supports ordering in the year and month.</summary>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property promotionCode: Promo Code.</summary>
        [JsiiProperty(name: "promotionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PromotionCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceSpec: Resource specifications.</summary>
        /// <remarks>
        /// When ChargeType is configured as PRE, the resource specification parameters must be filled.
        /// </remarks>
        [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosInstanceV2.ResourceSpecProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use.</summary>
        [JsiiProperty(name: "usePromotionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UsePromotionCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `InstanceV2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instancev2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceV2Props), fullyQualifiedName: "@alicloud/ros-cdk-flink.InstanceV2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Flink.IInstanceV2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go.</summary>
            /// <remarks>
            /// PRE: subscription.
            /// </remarks>
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceName: The name of instance.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property storage: Resource specifications.</summary>
            /// <remarks>
            /// When ChargeType is configured as PRE, the resource specification parameters must be filled.
            /// </remarks>
            [JsiiProperty(name: "storage", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosInstanceV2.StorageProperty\"}]}}")]
            public object Storage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: VPC ID.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchIds: Virtual switch ID.</summary>
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoRenew: When the payment type is the monthly package, the value of the value is as follows: true: Automatic renewal.</summary>
            /// <remarks>
            /// false: Manual renewal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property duration: Number of order cycle.</summary>
            /// <remarks>
            /// When ChargeType is configured as PRE, the duration parameter must be filled.
            /// If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
            /// If PricingCycle is year, the valid range is 1 to 3
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: The ordering cycle only supports ordering in the year and month.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property promotionCode: Promo Code.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "promotionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PromotionCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceSpec: Resource specifications.</summary>
            /// <remarks>
            /// When ChargeType is configured as PRE, the resource specification parameters must be filled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosInstanceV2.ResourceSpecProperty\"}]}}", isOptional: true)]
            public object? ResourceSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "usePromotionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UsePromotionCode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
