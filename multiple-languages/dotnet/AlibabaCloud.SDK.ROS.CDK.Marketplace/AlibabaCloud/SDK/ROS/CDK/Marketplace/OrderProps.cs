using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Marketplace
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MarketPlace::Order`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-marketplace.OrderProps")]
    public class OrderProps : AlibabaCloud.SDK.ROS.CDK.Marketplace.IOrderProps
    {
        /// <summary>Property productCode: Product code for the resource.</summary>
        [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ProductCode
        {
            get;
            set;
        }

        /// <summary>Property skuCode: Sku code for the resource.</summary>
        [JsiiProperty(name: "skuCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SkuCode
        {
            get;
            set;
        }

        /// <summary>Property chargeType: The resource charge type.</summary>
        /// <remarks>
        /// Default value is Prepaid
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ChargeType
        {
            get;
            set;
        }

        /// <summary>Property duration: Duration of the resource.</summary>
        /// <remarks>
        /// If ChargeType is specified as Postpaid, this value will be ignore.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Duration
        {
            get;
            set;
        }

        /// <summary>Property preference: Customized parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? Preference
        {
            get;
            set;
        }

        /// <summary>Property pricingCycle: Price cycle of the resource.</summary>
        /// <remarks>
        /// This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PricingCycle
        {
            get;
            set;
        }

        /// <summary>Property quantity: Resource number.</summary>
        /// <remarks>
        /// Default value is 1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "quantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Quantity
        {
            get;
            set;
        }
    }
}
