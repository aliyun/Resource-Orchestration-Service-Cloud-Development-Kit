using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::NatIpCidrs`.</summary>
    [JsiiInterface(nativeType: typeof(INatIpCidrsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.NatIpCidrsProps")]
    public interface INatIpCidrsProps
    {
        /// <summary>Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.</summary>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatGatewayId
        {
            get;
        }

        /// <summary>Property natIpCidr: Create a NAT IP ADDRESS.</summary>
        /// <remarks>
        /// The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
        /// </remarks>
        [JsiiProperty(name: "natIpCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NatIpCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::NatIpCidrs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INatIpCidrsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.NatIpCidrsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatIpCidrsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.</summary>
            [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIpCidr: Create a NAT IP ADDRESS.</summary>
            /// <remarks>
            /// The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "natIpCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NatIpCidr
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
