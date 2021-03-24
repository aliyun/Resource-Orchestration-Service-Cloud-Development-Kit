using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Marketplace
{
    /// <summary>Properties for defining a `ALIYUN::MarketPlace::Order`.</summary>
    [JsiiInterface(nativeType: typeof(IOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-marketplace.OrderProps")]
    public interface IOrderProps
    {
        /// <summary>Property productCode: Product code for the resource.</summary>
        [JsiiProperty(name: "productCode", typeJson: "{\"primitive\":\"string\"}")]
        string ProductCode
        {
            get;
        }

        /// <summary>Property skuCode: Sku code for the resource.</summary>
        [JsiiProperty(name: "skuCode", typeJson: "{\"primitive\":\"string\"}")]
        string SkuCode
        {
            get;
        }

        /// <summary>Property chargeType: The resource charge type.</summary>
        /// <remarks>
        /// Default value is Prepaid
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

        /// <summary>Property duration: Duration of the resource.</summary>
        /// <remarks>
        /// If ChargeType is specified as Postpaid, this value will be ignore.
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

        /// <summary>Property preference: Customized parameters.</summary>
        [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Preference
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: Price cycle of the resource.</summary>
        /// <remarks>
        /// This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
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

        /// <summary>Property quantity: Resource number.</summary>
        /// <remarks>
        /// Default value is 1
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
        [JsiiTypeProxy(nativeType: typeof(IOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-marketplace.OrderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Marketplace.IOrderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property productCode: Product code for the resource.</summary>
            [JsiiProperty(name: "productCode", typeJson: "{\"primitive\":\"string\"}")]
            public string ProductCode
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property skuCode: Sku code for the resource.</summary>
            [JsiiProperty(name: "skuCode", typeJson: "{\"primitive\":\"string\"}")]
            public string SkuCode
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property chargeType: The resource charge type.</summary>
            /// <remarks>
            /// Default value is Prepaid
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property duration: Duration of the resource.</summary>
            /// <remarks>
            /// If ChargeType is specified as Postpaid, this value will be ignore.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Duration
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property preference: Customized parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Preference
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: Price cycle of the resource.</summary>
            /// <remarks>
            /// This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property quantity: Resource number.</summary>
            /// <remarks>
            /// Default value is 1
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
