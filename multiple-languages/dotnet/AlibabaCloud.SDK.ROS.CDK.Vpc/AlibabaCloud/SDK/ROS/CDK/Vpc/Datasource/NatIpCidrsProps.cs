using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `NatIpCidrs`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.datasource.NatIpCidrsProps")]
    public class NatIpCidrsProps : AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatIpCidrsProps
    {
        private object _natGatewayId;

        /// <summary>Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.</summary>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NatGatewayId
        {
            get => _natGatewayId;
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
                _natGatewayId = value;
            }
        }

        private object? _natIpCidr;

        /// <summary>Property natIpCidr: Create a NAT IP ADDRESS.</summary>
        /// <remarks>
        /// The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "natIpCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NatIpCidr
        {
            get => _natIpCidr;
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
                _natIpCidr = value;
            }
        }
    }
}
