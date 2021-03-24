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
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Bandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the bandwidth plan
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Type
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: The AutoPay of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoPay
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoUseCoupon
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthType: the bandwidth BandwidthType of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BandwidthType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: billingType: The BillingType of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "billingType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BillingType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdA", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CbnGeographicRegionIdA
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdB", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CbnGeographicRegionIdB
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The ChargeType of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: duration:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Duration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PricingCycle
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ratio: The Ratio of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ratio", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Ratio
        {
            get;
            set;
        }
    }
}
