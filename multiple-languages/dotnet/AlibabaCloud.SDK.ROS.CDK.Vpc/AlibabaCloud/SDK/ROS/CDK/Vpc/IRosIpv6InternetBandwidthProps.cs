using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::Ipv6InternetBandwidth`.</summary>
    [JsiiInterface(nativeType: typeof(IRosIpv6InternetBandwidthProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpv6InternetBandwidthProps")]
    public interface IRosIpv6InternetBandwidthProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
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

        /// <remarks>
        /// <strong>Property</strong>: ipv6AddressId: ID of IPv6 address.
        /// </remarks>
        [JsiiProperty(name: "ipv6AddressId", typeJson: "{\"primitive\":\"string\"}")]
        string Ipv6AddressId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6GatewayId: ID of IPv6 gateway.
        /// </remarks>
        [JsiiProperty(name: "ipv6GatewayId", typeJson: "{\"primitive\":\"string\"}")]
        string Ipv6GatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: IPv6 public network bandwidth billing, value:
        /// PayByTraffic: by using the traffic accounting.
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

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::Ipv6InternetBandwidth`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosIpv6InternetBandwidthProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpv6InternetBandwidthProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosIpv6InternetBandwidthProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
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

            /// <remarks>
            /// <strong>Property</strong>: ipv6AddressId: ID of IPv6 address.
            /// </remarks>
            [JsiiProperty(name: "ipv6AddressId", typeJson: "{\"primitive\":\"string\"}")]
            public string Ipv6AddressId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6GatewayId: ID of IPv6 gateway.
            /// </remarks>
            [JsiiProperty(name: "ipv6GatewayId", typeJson: "{\"primitive\":\"string\"}")]
            public string Ipv6GatewayId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: IPv6 public network bandwidth billing, value:
            /// PayByTraffic: by using the traffic accounting.
            /// PayByBandwidth (default): Bandwidth billing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]?>();
            }
        }
    }
}
