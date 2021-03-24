using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::Ipv6InternetBandwidth`.</summary>
    [JsiiInterface(nativeType: typeof(IIpv6InternetBandwidthProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.Ipv6InternetBandwidthProps")]
    public interface IIpv6InternetBandwidthProps
    {
        /// <summary>Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.</summary>
        /// <remarks>
        /// When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
        /// When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
        /// Small (default free version), the public network bandwidth range 1-500.
        /// Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
        /// Large (Enterprise Edition), the public network bandwidth range 1-2000.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double Bandwidth
        {
            get;
        }

        /// <summary>Property ipv6AddressId: ID of IPv6 address.</summary>
        [JsiiProperty(name: "ipv6AddressId", typeJson: "{\"primitive\":\"string\"}")]
        string Ipv6AddressId
        {
            get;
        }

        /// <summary>Property ipv6GatewayId: ID of IPv6 gateway.</summary>
        [JsiiProperty(name: "ipv6GatewayId", typeJson: "{\"primitive\":\"string\"}")]
        string Ipv6GatewayId
        {
            get;
        }

        /// <summary>Property internetChargeType: IPv6 public network bandwidth billing, value: PayByTraffic: by using the traffic accounting.</summary>
        /// <remarks>
        /// PayByBandwidth (default): Bandwidth billing.
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

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::Ipv6InternetBandwidth`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpv6InternetBandwidthProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.Ipv6InternetBandwidthProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6InternetBandwidthProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.</summary>
            /// <remarks>
            /// When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
            /// When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
            /// Small (default free version), the public network bandwidth range 1-500.
            /// Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
            /// Large (Enterprise Edition), the public network bandwidth range 1-2000.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double Bandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property ipv6AddressId: ID of IPv6 address.</summary>
            [JsiiProperty(name: "ipv6AddressId", typeJson: "{\"primitive\":\"string\"}")]
            public string Ipv6AddressId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property ipv6GatewayId: ID of IPv6 gateway.</summary>
            [JsiiProperty(name: "ipv6GatewayId", typeJson: "{\"primitive\":\"string\"}")]
            public string Ipv6GatewayId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property internetChargeType: IPv6 public network bandwidth billing, value: PayByTraffic: by using the traffic accounting.</summary>
            /// <remarks>
            /// PayByBandwidth (default): Bandwidth billing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}
