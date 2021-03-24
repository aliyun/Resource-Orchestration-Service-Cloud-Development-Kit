using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::AssignIpv6Addresses`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAssignIpv6AddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAssignIpv6AddressesProps")]
    public interface IRosAssignIpv6AddressesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Elastic network interface ID.
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string NetworkInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
        /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
        /// </remarks>
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Ipv6AddressCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
        /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
        /// </remarks>
        [JsiiProperty(name: "ipv6Addresses", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Addresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::AssignIpv6Addresses`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAssignIpv6AddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAssignIpv6AddressesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosAssignIpv6AddressesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceId: Elastic network interface ID.
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string NetworkInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
            /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Ipv6AddressCount
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
            /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Addresses", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6Addresses
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
