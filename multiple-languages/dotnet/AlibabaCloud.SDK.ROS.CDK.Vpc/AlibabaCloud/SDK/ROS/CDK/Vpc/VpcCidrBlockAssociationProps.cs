using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `VpcCidrBlockAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpccidrblockassociation
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.VpcCidrBlockAssociationProps")]
    public class VpcCidrBlockAssociationProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IVpcCidrBlockAssociationProps
    {
        private object _vpcId;

        /// <summary>Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get => _vpcId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _vpcId = value;
            }
        }

        private object? _ipamPoolId;

        /// <summary>Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ipamPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IpamPoolId
        {
            get => _ipamPoolId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ipamPoolId = value;
            }
        }

        private object? _iPv6CidrBlock;

        /// <summary>Property iPv6CidrBlock: The IPv6 CIDR block to be added.</summary>
        /// <remarks>
        /// Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "iPv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IPv6CidrBlock
        {
            get => _iPv6CidrBlock;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _iPv6CidrBlock = value;
            }
        }

        private object? _ipv6Isp;

        /// <summary>Property ipv6Isp: The type of the IPv6 CIDR block.</summary>
        /// <remarks>
        /// Valid values:
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
            get => _ipv6Isp;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ipv6Isp = value;
            }
        }

        private object? _ipVersion;

        /// <summary>Property ipVersion: The version of the IP address.</summary>
        /// <remarks>
        /// Valid values:
        /// IPV4: the IPv4 address.
        /// IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IpVersion
        {
            get => _ipVersion;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ipVersion = value;
            }
        }

        private object? _secondaryCidrBlock;

        /// <summary>Property secondaryCidrBlock: The IPv4 CIDR block to be added.</summary>
        /// <remarks>
        /// Take note of the following requirements:
        /// You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8.
        /// You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
        /// The CIDR block must meet the following requirements:
        /// The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
        /// The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
        /// Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "secondaryCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecondaryCidrBlock
        {
            get => _secondaryCidrBlock;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _secondaryCidrBlock = value;
            }
        }

        private object? _secondaryCidrMask;

        /// <summary>Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.</summary>
        /// <remarks>
        /// Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "secondaryCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecondaryCidrMask
        {
            get => _secondaryCidrMask;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _secondaryCidrMask = value;
            }
        }
    }
}
