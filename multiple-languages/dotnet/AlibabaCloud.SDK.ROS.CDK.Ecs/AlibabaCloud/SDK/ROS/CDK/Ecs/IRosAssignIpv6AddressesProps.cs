using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosAssignIpv6Addresses`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAssignIpv6AddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAssignIpv6AddressesProps")]
    public interface IRosAssignIpv6AddressesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Elastic network interface ID.
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
        /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
        /// </remarks>
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6AddressCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 10. Example value: 2001:db8:1234:1a00::*** .
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

        /// <remarks>
        /// <strong>Property</strong>: ipv6PrefixCount: IPv6 prefix specified number of randomly generated interfaces elasticity.
        /// </remarks>
        [JsiiProperty(name: "ipv6PrefixCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6PrefixCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC.
        /// </remarks>
        [JsiiProperty(name: "ipv6Prefixes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Prefixes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAssignIpv6Addresses`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAssignIpv6AddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAssignIpv6AddressesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosAssignIpv6AddressesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceId: Elastic network interface ID.
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
            /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6AddressCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 10. Example value: 2001:db8:1234:1a00::*** .
            /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Addresses", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6Addresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6PrefixCount: IPv6 prefix specified number of randomly generated interfaces elasticity.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6PrefixCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6PrefixCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Prefixes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6Prefixes
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
