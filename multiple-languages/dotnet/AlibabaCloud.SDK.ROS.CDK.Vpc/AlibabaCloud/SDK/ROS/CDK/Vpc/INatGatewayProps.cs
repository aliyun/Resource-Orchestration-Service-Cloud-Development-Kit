using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `NatGateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natgateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INatGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NatGatewayProps")]
    public interface INatGatewayProps
    {
        /// <summary>Property vpcId: The VPC id to create NAT gateway.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The VSwitch id to create NAT gateway.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.</summary>
        /// <remarks>
        /// Default value is false.
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
        /// <remarks>
        /// Default to False.
        /// </remarks>
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the NAT gateway, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property eipBindMode: The mode in which the EIP is associated with the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
        /// NAT: NAT mode. IPv4 gateways are supported.
        /// Note If the EIP is associated with the NAT gateway in NAT mode,
        /// the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs.
        /// Make sure that the vSwitch has sufficient private IP addresses.
        /// Otherwise, the EIP cannot be associated with the NAT gateway.
        /// In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
        /// </remarks>
        [JsiiProperty(name: "eipBindMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EipBindMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature.</summary>
        /// <remarks>
        /// Default: True
        /// </remarks>
        [JsiiProperty(name: "icmpReplyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IcmpReplyEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceChargeType: The billing method.</summary>
        /// <remarks>
        /// The default value is PostPaid (which means pay-as-you-go).
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: The billing method for the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:
        /// PayBySpec: billed on a pay-by-specification basis.
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "natGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NatGatewayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property natType: The type of the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Enhanced: enhanced NAT gateway.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "natType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NatType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkType: The type of the created NAT gateway.</summary>
        /// <remarks>
        /// Internet: public network NAT gateway.
        /// Intranet: VPC NAT gateway.
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityProtectionEnabled: Specifies whether to enable the firewall feature.</summary>
        /// <remarks>
        /// Default: False
        /// </remarks>
        [JsiiProperty(name: "securityProtectionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityProtectionEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to natgateway.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNatGateway.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosNatGateway.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `NatGateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natgateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INatGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NatGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.INatGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The VPC id to create NAT gateway.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The VSwitch id to create NAT gateway.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.</summary>
            /// <remarks>
            /// Default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
            /// <remarks>
            /// Default to False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of the NAT gateway, [2, 256] characters.</summary>
            /// <remarks>
            /// Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eipBindMode: The mode in which the EIP is associated with the NAT gateway.</summary>
            /// <remarks>
            /// Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
            /// NAT: NAT mode. IPv4 gateways are supported.
            /// Note If the EIP is associated with the NAT gateway in NAT mode,
            /// the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs.
            /// Make sure that the vSwitch has sufficient private IP addresses.
            /// Otherwise, the EIP cannot be associated with the NAT gateway.
            /// In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipBindMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EipBindMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature.</summary>
            /// <remarks>
            /// Default: True
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "icmpReplyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IcmpReplyEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The billing method.</summary>
            /// <remarks>
            /// The default value is PostPaid (which means pay-as-you-go).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: The billing method for the NAT gateway.</summary>
            /// <remarks>
            /// Valid values:
            /// PayBySpec: billed on a pay-by-specification basis.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "natGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NatGatewayName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property natType: The type of the NAT gateway.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Enhanced: enhanced NAT gateway.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "natType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NatType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkType: The type of the created NAT gateway.</summary>
            /// <remarks>
            /// Internet: public network NAT gateway.
            /// Intranet: VPC NAT gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityProtectionEnabled: Specifies whether to enable the firewall feature.</summary>
            /// <remarks>
            /// Default: False
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityProtectionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityProtectionEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to natgateway.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNatGateway.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosNatGateway.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosNatGateway.ITagsProperty[]?>();
            }
        }
    }
}
