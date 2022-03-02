using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosBandwidthPackageProps")]
    public class RosBandwidthPackageProps : AlibabaCloud.SDK.ROS.CDK.Ga.IRosBandwidthPackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth provided by the bandwidth plan.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Bandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the bandwidth plan
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Type
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: The AutoPay of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoUseCoupon
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthType: the bandwidth BandwidthType of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BandwidthType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: billingType: The BillingType of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "billingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BillingType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdA", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CbnGeographicRegionIdA
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdB", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CbnGeographicRegionIdB
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The ChargeType of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: duration:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Duration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PricingCycle
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ratio: The Ratio of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ratio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Ratio
        {
            get;
            set;
        }
    }
}
