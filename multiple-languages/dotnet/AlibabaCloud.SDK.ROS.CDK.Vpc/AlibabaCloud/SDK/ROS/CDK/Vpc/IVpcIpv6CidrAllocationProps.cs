using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `VpcIpv6CidrAllocation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcipv6cidrallocation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVpcIpv6CidrAllocationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpcIpv6CidrAllocationProps")]
    public interface IVpcIpv6CidrAllocationProps
    {
        /// <summary>Property addressPoolType: The type of the IPv6 address pool.</summary>
        /// <remarks>
        /// Set the value to custom.
        /// Note This parameter is required.
        /// </remarks>
        [JsiiProperty(name: "addressPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressPoolType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.</summary>
        [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6CidrBlock
        {
            get
            {
                return null;
            }
        }

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
        [JsiiProperty(name: "ipv6Isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Isp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VpcIpv6CidrAllocation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcipv6cidrallocation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVpcIpv6CidrAllocationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpcIpv6CidrAllocationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpcIpv6CidrAllocationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressPoolType: The type of the IPv6 address pool.</summary>
            /// <remarks>
            /// Set the value to custom.
            /// Note This parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressPoolType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6CidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

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
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
