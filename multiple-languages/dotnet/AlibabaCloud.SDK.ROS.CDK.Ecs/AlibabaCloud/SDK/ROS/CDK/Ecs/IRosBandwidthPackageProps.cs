using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::BandwidthPackage`.</summary>
    [JsiiInterface(nativeType: typeof(IRosBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosBandwidthPackageProps")]
    public interface IRosBandwidthPackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double Bandwidth
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipCount: Total internet IPs of this Bandwidth package, [1-5]
        /// </remarks>
        [JsiiProperty(name: "ipCount", typeJson: "{\"primitive\":\"number\"}")]
        double IpCount
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: natGatewayId: Create bandwidth package for specified NAT gateway
        /// </remarks>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"primitive\":\"string\"}")]
        string NatGatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiProperty(name: "bandwidthPackageName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BandwidthPackageName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the bandwidth package, [2, 256] characters. Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The availability zone where the bandwidth package will be created.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::BandwidthPackage`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosBandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double Bandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipCount: Total internet IPs of this Bandwidth package, [1-5]
            /// </remarks>
            [JsiiProperty(name: "ipCount", typeJson: "{\"primitive\":\"number\"}")]
            public double IpCount
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: natGatewayId: Create bandwidth package for specified NAT gateway
            /// </remarks>
            [JsiiProperty(name: "natGatewayId", typeJson: "{\"primitive\":\"string\"}")]
            public string NatGatewayId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthPackageName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BandwidthPackageName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the bandwidth package, [2, 256] characters. Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The availability zone where the bandwidth package will be created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ZoneId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
