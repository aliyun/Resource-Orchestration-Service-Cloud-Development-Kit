using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosVirtualBorderRouter`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVirtualBorderRouterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVirtualBorderRouterProps")]
    public interface IRosVirtualBorderRouterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
        /// </remarks>
        [JsiiProperty(name: "localGatewayIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalGatewayIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: peerGatewayIp: The IP address of the peer router interface of the VBR.
        /// Only the owner of the VBR can set or modify the value.
        /// This parameter is required when you create a VBR for the owner of the physical connection.
        /// You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
        /// </remarks>
        [JsiiProperty(name: "peerGatewayIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerGatewayIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the
        /// user side.
        /// The two IP addresses must fall within the same subnet.
        /// </remarks>
        [JsiiProperty(name: "peeringSubnetMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeeringSubnetMask
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: physicalConnectionId: The ID of the physical connection.
        /// </remarks>
        [JsiiProperty(name: "physicalConnectionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PhysicalConnectionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999.
        /// Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
        /// two VBRs of the same physical connection must be different.
        /// </remarks>
        [JsiiProperty(name: "vlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VlanId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical
        /// connection.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the VBR.
        /// The description must be 2 to 256 characters in length. It must start with a letter
        /// but cannot start with http:\/\/ or https:\/\/.
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

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the VBR.
        /// The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
        /// underscores (_), and hyphens (-). The name cannot start with http:\/\/ or https:\/\/.
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

        /// <summary>Properties for defining a `RosVirtualBorderRouter`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVirtualBorderRouterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVirtualBorderRouterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVirtualBorderRouterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
            /// </remarks>
            [JsiiProperty(name: "localGatewayIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalGatewayIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: peerGatewayIp: The IP address of the peer router interface of the VBR.
            /// Only the owner of the VBR can set or modify the value.
            /// This parameter is required when you create a VBR for the owner of the physical connection.
            /// You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
            /// </remarks>
            [JsiiProperty(name: "peerGatewayIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerGatewayIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the
            /// user side.
            /// The two IP addresses must fall within the same subnet.
            /// </remarks>
            [JsiiProperty(name: "peeringSubnetMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeeringSubnetMask
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: physicalConnectionId: The ID of the physical connection.
            /// </remarks>
            [JsiiProperty(name: "physicalConnectionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PhysicalConnectionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999.
            /// Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
            /// two VBRs of the same physical connection must be different.
            /// </remarks>
            [JsiiProperty(name: "vlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VlanId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical
            /// connection.
            /// Note Only the owner of the physical connection can set this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "circuitCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CircuitCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the VBR.
            /// The description must be 2 to 256 characters in length. It must start with a letter
            /// but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the VBR.
            /// The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
            /// underscores (_), and hyphens (-). The name cannot start with http:\/\/ or https:\/\/.
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
