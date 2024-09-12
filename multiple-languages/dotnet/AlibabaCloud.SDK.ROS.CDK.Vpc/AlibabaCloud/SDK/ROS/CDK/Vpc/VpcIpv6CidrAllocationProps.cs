using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `VpcIpv6CidrAllocation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcipv6cidrallocation
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.VpcIpv6CidrAllocationProps")]
    public class VpcIpv6CidrAllocationProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IVpcIpv6CidrAllocationProps
    {
        private object? _addressPoolType;

        /// <summary>Property addressPoolType: The type of the IPv6 address pool.</summary>
        /// <remarks>
        /// Set the value to custom.
        /// Note This parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addressPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AddressPoolType
        {
            get => _addressPoolType;
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
                _addressPoolType = value;
            }
        }

        private object? _ipv6CidrBlock;

        /// <summary>Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Ipv6CidrBlock
        {
            get => _ipv6CidrBlock;
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
                _ipv6CidrBlock = value;
            }
        }

        private object? _ipv6Isp;

        /// <summary>Property ipv6Isp: The type of IPv6 CIDR block.</summary>
        /// <remarks>
        /// Valid values:
        /// BGP (default)
        /// BGP_International
        /// ChinaMobile
        /// ChinaUnicom
        /// ChinaTelecom
        /// ChinaMobile_L2
        /// ChinaUnicom_L2
        /// ChinaTelecom_L2
        /// Note
        /// If your Alibaba Cloud account is allowed to use single-ISP bandwidth, valid values are: ChinaTelecom, ChinaUnicom, and ChinaMobile.
        /// You can reserve only one IPv6 CIDR block of each type. After a reserved IPv6 CIDR block of a type is allocated to a VPC, you can reserve another IPv6 CIDR of the type.
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
    }
}
