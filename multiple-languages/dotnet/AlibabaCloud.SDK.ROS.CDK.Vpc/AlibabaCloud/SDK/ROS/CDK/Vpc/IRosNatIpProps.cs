using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosNatIp`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNatIpProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNatIpProps")]
    public interface IRosNatIpProps
    {
        /// <remarks>
        /// <strong>Property</strong>: natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create
        /// the NAT IP address.
        /// </remarks>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatGatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: natIpCidr: The CIDR block to which the NAT IP address belongs.
        /// </remarks>
        [JsiiProperty(name: "natIpCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpCidr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: natIpDescription: The description of the NAT IP address.
        /// The description must be 2 to 256 characters in length. It must start with a letter
        /// but cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "natIpDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpDescription
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: natIpName: The name of the NAT IP address.
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
        /// with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "natIpName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: natIp: The NAT IP address that you want to create.
        /// If you do not specify an IP address, the system selects a random IP address from the
        /// specified CIDR block.
        /// </remarks>
        [JsiiProperty(name: "natIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NatIp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
        /// </remarks>
        [JsiiProperty(name: "natIpCidrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NatIpCidrId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosNatIp`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNatIpProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNatIpProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosNatIpProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create
            /// the NAT IP address.
            /// </remarks>
            [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: natIpCidr: The CIDR block to which the NAT IP address belongs.
            /// </remarks>
            [JsiiProperty(name: "natIpCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: natIpDescription: The description of the NAT IP address.
            /// The description must be 2 to 256 characters in length. It must start with a letter
            /// but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiProperty(name: "natIpDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: natIpName: The name of the NAT IP address.
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
            /// (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
            /// with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiProperty(name: "natIpName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: natIp: The NAT IP address that you want to create.
            /// If you do not specify an IP address, the system selects a random IP address from the
            /// specified CIDR block.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "natIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NatIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "natIpCidrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NatIpCidrId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
