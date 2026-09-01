using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `SNatEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SNatEntryProps")]
    public interface ISNatEntryProps
    {
        /// <summary>Property sNatIp: Source IP, must belongs to bandwidth package internet IP.</summary>
        [JsiiProperty(name: "sNatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SNatIp
        {
            get;
        }

        /// <summary>Property sNatTableId: Create SNAT entry in specified SNAT table.</summary>
        [JsiiProperty(name: "sNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SNatTableId
        {
            get;
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

        /// <summary>Property sourceVSwitchId: The ID of the vSwitch.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>When you add an SNAT entry to an Internet NAT gateway, this parameter
        /// specifies that ECS instances in the vSwitch can use the SNAT entry to access the
        /// Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
        /// address pool, connections are hashed to these EIPs. Network traffic may not be
        /// evenly distributed to the EIPs because the amount of traffic that passes through
        /// each connection varies. We recommend that you associate these EIPs with the same
        /// EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
        /// on individual EIPs.</description>
        /// <description>When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
        /// that ECS instances in the vSwitch can use the SNAT entry to access external
        /// networks.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sourceVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SNatEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SNatEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISNatEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property sNatIp: Source IP, must belongs to bandwidth package internet IP.</summary>
            [JsiiProperty(name: "sNatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SNatIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sNatTableId: Create SNAT entry in specified SNAT table.</summary>
            [JsiiProperty(name: "sNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SNatTableId
            {
                get => GetInstanceProperty<object>()!;
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

            /// <summary>Property sourceVSwitchId: The ID of the vSwitch.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>When you add an SNAT entry to an Internet NAT gateway, this parameter
            /// specifies that ECS instances in the vSwitch can use the SNAT entry to access the
            /// Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
            /// address pool, connections are hashed to these EIPs. Network traffic may not be
            /// evenly distributed to the EIPs because the amount of traffic that passes through
            /// each connection varies. We recommend that you associate these EIPs with the same
            /// EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
            /// on individual EIPs.</description>
            /// <description>When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
            /// that ECS instances in the vSwitch can use the SNAT entry to access external
            /// networks.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
