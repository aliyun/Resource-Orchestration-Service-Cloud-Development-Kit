using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Marketplace
{
    /// <summary>Properties for defining a `ALIYUN::MarketPlace::Order`.</summary>
    [JsiiInterface(nativeType: typeof(IRosOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-marketplace.RosOrderProps")]
    public interface IRosOrderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: productCode: Product code for the resource.
        /// </remarks>
        [JsiiProperty(name: "productCode", typeJson: "{\"primitive\":\"string\"}")]
        string ProductCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: skuCode: Sku code for the resource.
        /// </remarks>
        [JsiiProperty(name: "skuCode", typeJson: "{\"primitive\":\"string\"}")]
        string SkuCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The resource charge type. Default value is Prepaid
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Duration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: preference: Customized parameters.
        /// </remarks>
        [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Preference
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: quantity: Resource number. Default value is 1
        /// </remarks>
        [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Quantity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::MarketPlace::Order`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-marketplace.RosOrderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Marketplace.IRosOrderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: productCode: Product code for the resource.
            /// </remarks>
            [JsiiProperty(name: "productCode", typeJson: "{\"primitive\":\"string\"}")]
            public string ProductCode
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: skuCode: Sku code for the resource.
            /// </remarks>
            [JsiiProperty(name: "skuCode", typeJson: "{\"primitive\":\"string\"}")]
            public string SkuCode
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: The resource charge type. Default value is Prepaid
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Duration
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: preference: Customized parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Preference
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: quantity: Resource number. Default value is 1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Quantity
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
