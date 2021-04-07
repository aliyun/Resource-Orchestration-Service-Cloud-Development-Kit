using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::VirtualBorderRouter`.</summary>
    [JsiiInterface(nativeType: typeof(IVirtualBorderRouterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VirtualBorderRouterProps")]
    public interface IVirtualBorderRouterProps
    {
        /// <summary>Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.</summary>
        [JsiiProperty(name: "localGatewayIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalGatewayIp
        {
            get;
        }

        /// <summary>Property peerGatewayIp: The IP address of the peer router interface of the VBR.</summary>
        /// <remarks>
        /// Only the owner of the VBR can set or modify the value.
        /// This parameter is required when you create a VBR for the owner of the physical connection.
        /// You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
        /// </remarks>
        [JsiiProperty(name: "peerGatewayIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerGatewayIp
        {
            get;
        }

        /// <summary>Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the user side.</summary>
        /// <remarks>
        /// The two IP addresses must fall within the same subnet.
        /// </remarks>
        [JsiiProperty(name: "peeringSubnetMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeeringSubnetMask
        {
            get;
        }

        /// <summary>Property physicalConnectionId: The ID of the physical connection.</summary>
        [JsiiProperty(name: "physicalConnectionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PhysicalConnectionId
        {
            get;
        }

        /// <summary>Property vlanId: The VLAN ID of the VBR.</summary>
        /// <remarks>
        /// Valid values: 1 to 2999.
        /// Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
        /// two VBRs of the same physical connection must be different.
        /// </remarks>
        [JsiiProperty(name: "vlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VlanId
        {
            get;
        }

        /// <summary>Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical connection.</summary>
        /// <remarks>
        /// Note Only the owner of the physical connection can set this parameter.
        /// </remarks>
        [JsiiProperty(name: "circuitCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CircuitCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the VBR.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. It must start with a letter
        /// but cannot start with http:// or https://.
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

        /// <summary>Property name: The name of the VBR.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
        /// underscores (_), and hyphens (-). The name cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::VirtualBorderRouter`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVirtualBorderRouterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VirtualBorderRouterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVirtualBorderRouterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.</summary>
            [JsiiProperty(name: "localGatewayIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalGatewayIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property peerGatewayIp: The IP address of the peer router interface of the VBR.</summary>
            /// <remarks>
            /// Only the owner of the VBR can set or modify the value.
            /// This parameter is required when you create a VBR for the owner of the physical connection.
            /// You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
            /// </remarks>
            [JsiiProperty(name: "peerGatewayIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerGatewayIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the user side.</summary>
            /// <remarks>
            /// The two IP addresses must fall within the same subnet.
            /// </remarks>
            [JsiiProperty(name: "peeringSubnetMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeeringSubnetMask
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property physicalConnectionId: The ID of the physical connection.</summary>
            [JsiiProperty(name: "physicalConnectionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PhysicalConnectionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vlanId: The VLAN ID of the VBR.</summary>
            /// <remarks>
            /// Valid values: 1 to 2999.
            /// Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
            /// two VBRs of the same physical connection must be different.
            /// </remarks>
            [JsiiProperty(name: "vlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VlanId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical connection.</summary>
            /// <remarks>
            /// Note Only the owner of the physical connection can set this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "circuitCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CircuitCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the VBR.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length. It must start with a letter
            /// but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the VBR.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
            /// underscores (_), and hyphens (-). The name cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
