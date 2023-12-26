using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `AssignIpv6Addresses`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAssignIpv6AddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.AssignIpv6AddressesProps")]
    public interface IAssignIpv6AddressesProps
    {
        /// <summary>Property networkInterfaceId: Elastic network interface ID.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInterfaceId
        {
            get;
        }

        /// <summary>Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.</summary>
        /// <remarks>
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

        /// <summary>Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.</summary>
        /// <remarks>
        /// Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
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

        /// <summary>Properties for defining a `AssignIpv6Addresses`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAssignIpv6AddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.AssignIpv6AddressesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IAssignIpv6AddressesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property networkInterfaceId: Elastic network interface ID.</summary>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.</summary>
            /// <remarks>
            /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6AddressCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.</summary>
            /// <remarks>
            /// Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
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
