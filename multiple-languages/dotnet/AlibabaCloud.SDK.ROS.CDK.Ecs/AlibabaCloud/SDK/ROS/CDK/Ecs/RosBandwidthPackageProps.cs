using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::BandwidthPackage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosBandwidthPackageProps")]
    public class RosBandwidthPackageProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosBandwidthPackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Bandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipCount: Total internet IPs of this Bandwidth package, [1-5]
        /// </remarks>
        [JsiiProperty(name: "ipCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double IpCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: natGatewayId: Create bandwidth package for specified NAT gateway
        /// </remarks>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NatGatewayId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthPackageName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BandwidthPackageName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the bandwidth package, [2, 256] characters. Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The availability zone where the bandwidth package will be created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}
