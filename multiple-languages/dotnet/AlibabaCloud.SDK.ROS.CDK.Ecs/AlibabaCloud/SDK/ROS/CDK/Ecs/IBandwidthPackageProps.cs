using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::BandwidthPackage`.</summary>
    [JsiiInterface(nativeType: typeof(IBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.BandwidthPackageProps")]
    public interface IBandwidthPackageProps
    {
        /// <summary>Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.</summary>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double Bandwidth
        {
            get;
        }

        /// <summary>Property ipCount: Total internet IPs of this Bandwidth package, [1-5].</summary>
        [JsiiProperty(name: "ipCount", typeJson: "{\"primitive\":\"number\"}")]
        double IpCount
        {
            get;
        }

        /// <summary>Property natGatewayId: Create bandwidth package for specified NAT gateway.</summary>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"primitive\":\"string\"}")]
        string NatGatewayId
        {
            get;
        }

        /// <summary>Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "bandwidthPackageName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BandwidthPackageName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the bandwidth package, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
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

        /// <summary>Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.</summary>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The availability zone where the bandwidth package will be created.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.BandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.</summary>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double Bandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property ipCount: Total internet IPs of this Bandwidth package, [1-5].</summary>
            [JsiiProperty(name: "ipCount", typeJson: "{\"primitive\":\"number\"}")]
            public double IpCount
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property natGatewayId: Create bandwidth package for specified NAT gateway.</summary>
            [JsiiProperty(name: "natGatewayId", typeJson: "{\"primitive\":\"string\"}")]
            public string NatGatewayId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthPackageName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BandwidthPackageName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: Description of the bandwidth package, [2, 256] characters.</summary>
            /// <remarks>
            /// Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property zoneId: The availability zone where the bandwidth package will be created.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ZoneId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
