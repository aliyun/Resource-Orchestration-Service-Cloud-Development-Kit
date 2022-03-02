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
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Bandwidth
        {
            get;
            set;
        }

        /// <summary>Property type: The type of the bandwidth plan.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Type
        {
            get;
            set;
        }

        /// <summary>Property autoPay: The AutoPay of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <summary>Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoUseCoupon
        {
            get;
            set;
        }

        /// <summary>Property bandwidthType: the bandwidth BandwidthType of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BandwidthType
        {
            get;
            set;
        }

        /// <summary>Property billingType: The BillingType of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "billingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BillingType
        {
            get;
            set;
        }

        /// <summary>Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdA", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CbnGeographicRegionIdA
        {
            get;
            set;
        }

        /// <summary>Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdB", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CbnGeographicRegionIdB
        {
            get;
            set;
        }

        /// <summary>Property chargeType: The ChargeType of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ChargeType
        {
            get;
            set;
        }

        /// <summary>Property duration:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Duration
        {
            get;
            set;
        }

        /// <summary>Property pricingCycle:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PricingCycle
        {
            get;
            set;
        }

        /// <summary>Property ratio: The Ratio of the bandwidth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ratio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Ratio
        {
            get;
            set;
        }
    }
}
