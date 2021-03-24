using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::BandwidthPackage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.BandwidthPackageProps")]
    public class BandwidthPackageProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IBandwidthPackageProps
    {
        /// <summary>Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.</summary>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Bandwidth
        {
            get;
            set;
        }

        /// <summary>Property ipCount: Total internet IPs of this Bandwidth package, [1-5].</summary>
        [JsiiProperty(name: "ipCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double IpCount
        {
            get;
            set;
        }

        /// <summary>Property natGatewayId: Create bandwidth package for specified NAT gateway.</summary>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NatGatewayId
        {
            get;
            set;
        }

        /// <summary>Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthPackageName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BandwidthPackageName
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the bandwidth package, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetChargeType
        {
            get;
            set;
        }

        /// <summary>Property zoneId: The availability zone where the bandwidth package will be created.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}
