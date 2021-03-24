using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.BandwidthPackageProps")]
    public class BandwidthPackageProps : AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackageProps
    {
        /// <summary>Property bandwidth: The bandwidth provided by the bandwidth plan.</summary>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Bandwidth
        {
            get;
            set;
        }

        /// <summary>Property type: The type of the bandwidth plan.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Type
        {
            get;
            set;
        }

        /// <summary>Property autoPay: The AutoPay of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoPay
        {
            get;
            set;
        }

        /// <summary>Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoUseCoupon
        {
            get;
            set;
        }

        /// <summary>Property bandwidthType: the bandwidth BandwidthType of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BandwidthType
        {
            get;
            set;
        }

        /// <summary>Property billingType: The BillingType of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "billingType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BillingType
        {
            get;
            set;
        }

        /// <summary>Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdA", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CbnGeographicRegionIdA
        {
            get;
            set;
        }

        /// <summary>Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdB", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CbnGeographicRegionIdB
        {
            get;
            set;
        }

        /// <summary>Property chargeType: The ChargeType of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ChargeType
        {
            get;
            set;
        }

        /// <summary>Property duration:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Duration
        {
            get;
            set;
        }

        /// <summary>Property pricingCycle:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PricingCycle
        {
            get;
            set;
        }

        /// <summary>Property ratio: The Ratio of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ratio", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Ratio
        {
            get;
            set;
        }
    }
}
