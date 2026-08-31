using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `SnatEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISnatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SnatEntryProps")]
    public interface ISnatEntryProps
    {
        /// <summary>Property snatIp: The public IP address.</summary>
        /// <remarks>
        /// Separate multiple EIPs with commas.
        /// </remarks>
        [JsiiProperty(name: "snatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SnatIp
        {
            get;
        }

        /// <summary>Property snatTableId: The ID of the SNAT table.</summary>
        [JsiiProperty(name: "snatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SnatTableId
        {
            get;
        }

        /// <summary>Property eipAffinity: Specifies whether to enable EIP affinity.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: no
        /// 1: yes
        /// If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
        /// </remarks>
        [JsiiProperty(name: "eipAffinity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EipAffinity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkInterfaceId: The ID of the elastic network interface.</summary>
        /// <remarks>
        /// The IPv4 addresses of the elastic network interface will be used as the SNAT IP addresses.
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkInterfaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snatEntryName: The name of the SNAT entry.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must start with a letter but
        /// cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
        /// </remarks>
        [JsiiProperty(name: "snatEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnatEntryName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block.</summary>
        /// <remarks>
        /// You can specify an SNAT entry in the following ways:
        ///
        /// <list type="bullet">
        /// <description>You can specify the CIDR block of the VPC where the NAT gateway is deployed.
        /// Then, all ECS instances in the VPC can access the Internet or external networks
        /// by using SNAT.</description>
        /// <description>You can specify the CIDR block of a vSwitch, for example, 192.168.1.0/24.
        /// Then, the ECS instances in the vSwitch can access the Internet or external
        /// networks by using SNAT.</description>
        /// <description>You can specify the IP address of an ECS instance, for example,
        /// 192.168.1.1/32. Then, the ECS instance can access the Internet or external
        /// networks by using SNAT.</description>
        /// <description>You can specify a custom CIDR block. Then, all ECS instances within the
        /// specified CIDR block can access the Internet or external networks by using SNAT.
        /// When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
        /// EIP, the ECS instance uses the specified EIP to access the Internet.
        /// If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
        /// specified in the SnatIp parameter to access the Internet.
        /// You cannot specify this parameter and SourceVSwtichId at the same time. If
        /// SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
        /// specified, you cannot specify SourceVSwitchId.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.</summary>
        /// <remarks>
        /// When updating this list parameter, a new item will lead to a creation of new Snat Entry with latest properties, a removed item will lead to a deletion of the attached SnatEntry
        /// </remarks>
        [JsiiProperty(name: "sourceVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceVSwitchIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SnatEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISnatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SnatEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ISnatEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property snatIp: The public IP address.</summary>
            /// <remarks>
            /// Separate multiple EIPs with commas.
            /// </remarks>
            [JsiiProperty(name: "snatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SnatIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property snatTableId: The ID of the SNAT table.</summary>
            [JsiiProperty(name: "snatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SnatTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property eipAffinity: Specifies whether to enable EIP affinity.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: no
            /// 1: yes
            /// If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipAffinity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EipAffinity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkInterfaceId: The ID of the elastic network interface.</summary>
            /// <remarks>
            /// The IPv4 addresses of the elastic network interface will be used as the SNAT IP addresses.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkInterfaceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snatEntryName: The name of the SNAT entry.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. It must start with a letter but
            /// cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snatEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnatEntryName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block.</summary>
            /// <remarks>
            /// You can specify an SNAT entry in the following ways:
            ///
            /// <list type="bullet">
            /// <description>You can specify the CIDR block of the VPC where the NAT gateway is deployed.
            /// Then, all ECS instances in the VPC can access the Internet or external networks
            /// by using SNAT.</description>
            /// <description>You can specify the CIDR block of a vSwitch, for example, 192.168.1.0/24.
            /// Then, the ECS instances in the vSwitch can access the Internet or external
            /// networks by using SNAT.</description>
            /// <description>You can specify the IP address of an ECS instance, for example,
            /// 192.168.1.1/32. Then, the ECS instance can access the Internet or external
            /// networks by using SNAT.</description>
            /// <description>You can specify a custom CIDR block. Then, all ECS instances within the
            /// specified CIDR block can access the Internet or external networks by using SNAT.
            /// When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
            /// EIP, the ECS instance uses the specified EIP to access the Internet.
            /// If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
            /// specified in the SnatIp parameter to access the Internet.
            /// You cannot specify this parameter and SourceVSwtichId at the same time. If
            /// SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
            /// specified, you cannot specify SourceVSwitchId.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.</summary>
            /// <remarks>
            /// When updating this list parameter, a new item will lead to a creation of new Snat Entry with latest properties, a removed item will lead to a deletion of the attached SnatEntry
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceVSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
