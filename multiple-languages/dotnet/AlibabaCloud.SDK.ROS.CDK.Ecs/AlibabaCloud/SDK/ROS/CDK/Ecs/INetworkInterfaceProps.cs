using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `NetworkInterface`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkInterfaceProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfaceProps")]
    public interface INetworkInterfaceProps
    {
        /// <summary>Property vSwitchId: The ID of the VSwitch for the elastic network interface.</summary>
        /// <remarks>
        /// The private IP addresses
        /// for the elastic network interface are assigned from the available CIDR block of
        /// the VSwitch.
        ///
        ///     <notice xmlns="http://www.w3.org/1999/xhtml"></notice>
        ///
        /// The elastic network interface and the instance to be attached must be in the same
        /// availability zone but can belong to different VSwitches.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.</summary>
        [JsiiProperty(name: "deleteOnRelease", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteOnRelease
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the elastic network interface.</summary>
        /// <remarks>
        /// The description must be 2 to
        /// 256 characters long and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
        /// Default value: empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface.</summary>
        /// <remarks>
        /// Range: 1-10
        /// <strong>Note</strong>: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
        /// </remarks>
        [JsiiProperty(name: "ipv4PrefixCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv4PrefixCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.</summary>
        [JsiiProperty(name: "ipv4Prefixes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv4Prefixes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6AddressCount: The number of random IPv6 addresses to assign to the elastic network interface.</summary>
        /// <remarks>
        /// Valid values: 1 to 10.
        ///
        ///     You must specify either <c>Ipv6Address.N</c> or <c>Ipv6AddressCount</c>, but not both, to
        ///     assign IPv6 addresses.
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

        /// <summary>Property ipv6Addresses: The IPv6 address N to assign to the ENI.</summary>
        [JsiiProperty(name: "ipv6Addresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Addresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface.</summary>
        /// <remarks>
        /// Range: 1-10
        /// <strong>Note</strong>: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
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

        /// <summary>Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.</summary>
        [JsiiProperty(name: "ipv6Prefixes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Prefixes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkInterfaceName: Name of your ENI.</summary>
        /// <remarks>
        /// It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkInterfaceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkInterfaceTrafficMode: The traffic mode of the elastic network interface.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>Standard</c>: uses the TCP traffic mode.</description>
        /// <description><c>HighPerformance</c>: enables the Elastic RDMA Interface (ERI) and uses the RDMA
        /// traffic mode.</description>
        /// </list>
        ///
        ///     An elastic network interface in RDMA traffic mode can be attached only to an
        ///     ERI-supported instance type. The number of these elastic network interfaces that
        ///     can be attached is limited by the instance family. Default value: <c>Standard</c>.
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceTrafficMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkInterfaceTrafficMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property primaryIpAddress: The primary private IP address of the ENI.</summary>
        /// <remarks>
        /// The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
        /// </remarks>
        [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrimaryIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.</summary>
        /// <remarks>
        /// This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queueNumber: The number of queues that are supported by the ENI.</summary>
        /// <remarks>
        /// Valid values: 1 to 2048.
        /// When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
        /// By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
        /// </remarks>
        [JsiiProperty(name: "queueNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueNumber
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rxQueueSize: Elastic network card inbound queue depth.</summary>
        /// <remarks>
        /// <strong>Note</strong>: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
        /// Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
        /// </remarks>
        [JsiiProperty(name: "rxQueueSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RxQueueSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.</summary>
        [JsiiProperty(name: "secondaryPrivateIpAddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryPrivateIpAddressCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: The ID of the security group for the elastic network interface.</summary>
        /// <remarks>
        /// The security
        /// group and the elastic network interface must be in the same VPC.
        ///
        ///     You must specify either <c>SecurityGroupId</c> or <c>SecurityGroupIds.N</c>, but not
        ///     both.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupIds: The IDs of one or more security groups to which to add the elastic network interface.</summary>
        /// <remarks>
        /// The security groups and the elastic network interface must be in the
        /// same VPC. The valid values of N depend on the maximum number of security groups
        /// to which an elastic network interface can be added.
        ///
        ///     You must specify either <c>SecurityGroupId</c> or <c>SecurityGroupIds.N</c>, but not
        ///     both.
        /// </remarks>
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupIds
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosNetworkInterface.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosNetworkInterface.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property txQueueSize: Elastic network card outbound queue depth.</summary>
        /// <remarks>
        /// <strong>Note</strong>: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
        /// Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
        /// </remarks>
        [JsiiProperty(name: "txQueueSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TxQueueSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `NetworkInterface`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkInterfaceProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch for the elastic network interface.</summary>
            /// <remarks>
            /// The private IP addresses
            /// for the elastic network interface are assigned from the available CIDR block of
            /// the VSwitch.
            ///
            ///     <notice xmlns="http://www.w3.org/1999/xhtml"></notice>
            ///
            /// The elastic network interface and the instance to be attached must be in the same
            /// availability zone but can belong to different VSwitches.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deleteOnRelease", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteOnRelease
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the elastic network interface.</summary>
            /// <remarks>
            /// The description must be 2 to
            /// 256 characters long and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// Default value: empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface.</summary>
            /// <remarks>
            /// Range: 1-10
            /// <strong>Note</strong>: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv4PrefixCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv4PrefixCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv4Prefixes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Ipv4Prefixes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6AddressCount: The number of random IPv6 addresses to assign to the elastic network interface.</summary>
            /// <remarks>
            /// Valid values: 1 to 10.
            ///
            ///     You must specify either <c>Ipv6Address.N</c> or <c>Ipv6AddressCount</c>, but not both, to
            ///     assign IPv6 addresses.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6AddressCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6Addresses: The IPv6 address N to assign to the ENI.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Addresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Ipv6Addresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface.</summary>
            /// <remarks>
            /// Range: 1-10
            /// <strong>Note</strong>: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6PrefixCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6PrefixCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Prefixes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Ipv6Prefixes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkInterfaceName: Name of your ENI.</summary>
            /// <remarks>
            /// It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkInterfaceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkInterfaceTrafficMode: The traffic mode of the elastic network interface.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>Standard</c>: uses the TCP traffic mode.</description>
            /// <description><c>HighPerformance</c>: enables the Elastic RDMA Interface (ERI) and uses the RDMA
            /// traffic mode.</description>
            /// </list>
            ///
            ///     An elastic network interface in RDMA traffic mode can be attached only to an
            ///     ERI-supported instance type. The number of these elastic network interfaces that
            ///     can be attached is limited by the instance family. Default value: <c>Standard</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceTrafficMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkInterfaceTrafficMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property primaryIpAddress: The primary private IP address of the ENI.</summary>
            /// <remarks>
            /// The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrimaryIpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.</summary>
            /// <remarks>
            /// This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PrivateIpAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queueNumber: The number of queues that are supported by the ENI.</summary>
            /// <remarks>
            /// Valid values: 1 to 2048.
            /// When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
            /// By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queueNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rxQueueSize: Elastic network card inbound queue depth.</summary>
            /// <remarks>
            /// <strong>Note</strong>: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
            /// Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rxQueueSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RxQueueSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryPrivateIpAddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondaryPrivateIpAddressCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: The ID of the security group for the elastic network interface.</summary>
            /// <remarks>
            /// The security
            /// group and the elastic network interface must be in the same VPC.
            ///
            ///     You must specify either <c>SecurityGroupId</c> or <c>SecurityGroupIds.N</c>, but not
            ///     both.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupIds: The IDs of one or more security groups to which to add the elastic network interface.</summary>
            /// <remarks>
            /// The security groups and the elastic network interface must be in the
            /// same VPC. The valid values of N depend on the maximum number of security groups
            /// to which an elastic network interface can be added.
            ///
            ///     You must specify either <c>SecurityGroupId</c> or <c>SecurityGroupIds.N</c>, but not
            ///     both.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosNetworkInterface.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosNetworkInterface.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosNetworkInterface.ITagsProperty[]?>();
            }

            /// <summary>Property txQueueSize: Elastic network card outbound queue depth.</summary>
            /// <remarks>
            /// <strong>Note</strong>: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
            /// Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "txQueueSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TxQueueSize
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
