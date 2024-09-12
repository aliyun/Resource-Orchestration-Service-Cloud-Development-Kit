using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosVpcCidrBlockAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpccidrblockassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpcCidrBlockAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpcCidrBlockAssociationProps")]
    public interface IRosVpcCidrBlockAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC to which you want to add a secondary CIDR block.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.
        /// </remarks>
        [JsiiProperty(name: "ipamPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamPoolId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: iPv6CidrBlock: The IPv6 CIDR block to be added.
        /// Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
        /// </remarks>
        [JsiiProperty(name: "iPv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IPv6CidrBlock
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6Isp: The type of the IPv6 CIDR block. Valid values:
        /// BGP (default)
        /// ChinaMobile
        /// ChinaUnicom
        /// ChinaTelecom
        /// Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
        /// </remarks>
        [JsiiProperty(name: "ipv6Isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Isp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipVersion: The version of the IP address. Valid values:
        /// IPV4: the IPv4 address.
        /// IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
        /// </remarks>
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: secondaryCidrBlock: The IPv4 CIDR block to be added. Take note of the following requirements:
        /// You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0\/16, 172.16.0.0\/12, and 10.0.0.0\/8.
        /// You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, 169.254.0.0\/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
        /// The CIDR block must meet the following requirements:
        /// The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
        /// The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
        /// Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
        /// </remarks>
        [JsiiProperty(name: "secondaryCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryCidrBlock
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.
        /// Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
        /// </remarks>
        [JsiiProperty(name: "secondaryCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryCidrMask
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVpcCidrBlockAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpccidrblockassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcCidrBlockAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpcCidrBlockAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpcCidrBlockAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC to which you want to add a secondary CIDR block.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipamPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamPoolId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iPv6CidrBlock: The IPv6 CIDR block to be added.
            /// Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iPv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IPv6CidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6Isp: The type of the IPv6 CIDR block. Valid values:
            /// BGP (default)
            /// ChinaMobile
            /// ChinaUnicom
            /// ChinaTelecom
            /// Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6Isp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipVersion: The version of the IP address. Valid values:
            /// IPV4: the IPv4 address.
            /// IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secondaryCidrBlock: The IPv4 CIDR block to be added. Take note of the following requirements:
            /// You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0\/16, 172.16.0.0\/12, and 10.0.0.0\/8.
            /// You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, 169.254.0.0\/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
            /// The CIDR block must meet the following requirements:
            /// The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
            /// The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
            /// Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondaryCidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.
            /// Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondaryCidrMask
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
