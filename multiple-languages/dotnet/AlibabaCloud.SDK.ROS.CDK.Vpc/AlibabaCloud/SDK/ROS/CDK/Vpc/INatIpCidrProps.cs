using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `NatIpCidr`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INatIpCidrProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NatIpCidrProps")]
    public interface INatIpCidrProps
    {
        /// <summary>Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block.</summary>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatGatewayId
        {
            get;
        }

        /// <summary>Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway.</summary>
        /// <remarks>
        /// The new CIDR block must meet the following conditions:
        /// The NAT CIDR block must fall within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or their subnets.
        /// The subnet mask must be 16 to 32 bits in length.
        /// The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
        /// If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
        /// </remarks>
        [JsiiProperty(name: "natIpCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpCidr
        {
            get;
        }

        /// <summary>Property natIpCidrDescription: The description of the NAT CIDR block.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "natIpCidrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpCidrDescription
        {
            get;
        }

        /// <summary>Property natIpCidrName: The name of the CIDR block.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "natIpCidrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpCidrName
        {
            get;
        }

        /// <summary>Properties for defining a `NatIpCidr`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INatIpCidrProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NatIpCidrProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.INatIpCidrProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block.</summary>
            [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway.</summary>
            /// <remarks>
            /// The new CIDR block must meet the following conditions:
            /// The NAT CIDR block must fall within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or their subnets.
            /// The subnet mask must be 16 to 32 bits in length.
            /// The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
            /// If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
            /// </remarks>
            [JsiiProperty(name: "natIpCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIpCidrDescription: The description of the NAT CIDR block.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:// or https://.
            /// </remarks>
            [JsiiProperty(name: "natIpCidrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpCidrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIpCidrName: The name of the CIDR block.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:// or https://.
            /// </remarks>
            [JsiiProperty(name: "natIpCidrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpCidrName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
