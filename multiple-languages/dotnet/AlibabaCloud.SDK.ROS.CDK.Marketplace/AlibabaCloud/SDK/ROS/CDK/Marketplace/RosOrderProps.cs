using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Marketplace
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MarketPlace::Order`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-marketplace.RosOrderProps")]
    public class RosOrderProps : AlibabaCloud.SDK.ROS.CDK.Marketplace.IRosOrderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: productCode: Product code for the resource.
        /// </remarks>
        [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProductCode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: skuCode: Sku code for the resource.
        /// </remarks>
        [JsiiProperty(name: "skuCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SkuCode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The resource charge type. Default value is Prepaid
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Duration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: preference: Customized parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Preference
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PricingCycle
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: quantity: Resource number. Default value is 1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "quantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Quantity
        {
            get;
            set;
        }
    }
}
