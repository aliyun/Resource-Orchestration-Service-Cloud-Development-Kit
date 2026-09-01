using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `RosVpcEndpoint`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpcEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.RosVpcEndpointProps")]
    public interface IRosVpcEndpointProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC to which the endpoint belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointDescription: The description of the endpoint.
        /// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "endpointDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointName: The name of the endpoint.
        /// The name must be 2 to 128 characters long, start with a letter or a Chinese
        /// character, and can contain digits, hyphens (-), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "endpointName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointType: The type of the endpoint. Valid values:
        /// - Interface: an interface endpoint. You can add Application Load Balancer (ALB),
        /// CLB, and Network Load Balancer (NLB) instances as service
        /// resources.
        /// - Reverse: a reverse endpoint. You can add a VPC NAT Gateway as a service
        /// resource.
        /// - GatewayLoadBalancer: a Gateway Load Balancer endpoint. You can add a Gateway
        /// Load Balancer (GWLB) as a service resource.
        /// > Services that support reverse endpoints are provided exclusively by the cloud
        /// platform and its partners. You cannot create them by default. To request access,
        /// contact your account manager.
        /// </remarks>
        [JsiiProperty(name: "endpointType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: protectedEnabled: Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values:
        /// true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
        /// false (default): no
        /// </remarks>
        [JsiiProperty(name: "protectedEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtectedEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        /// </remarks>
        [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpoint.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Privatelink.RosVpcEndpoint.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zone: The list of zones for the endpoint.
        /// </remarks>
        [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Zone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone. Set the value to 1.
        /// </remarks>
        [JsiiProperty(name: "zonePrivateIpAddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZonePrivateIpAddressCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVpcEndpoint`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.RosVpcEndpointProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Privatelink.IRosVpcEndpointProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The VPC to which the endpoint belongs.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointDescription: The description of the endpoint.
            /// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointName: The name of the endpoint.
            /// The name must be 2 to 128 characters long, start with a letter or a Chinese
            /// character, and can contain digits, hyphens (-), and underscores (_).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointType: The type of the endpoint. Valid values:
            /// - Interface: an interface endpoint. You can add Application Load Balancer (ALB),
            /// CLB, and Network Load Balancer (NLB) instances as service
            /// resources.
            /// - Reverse: a reverse endpoint. You can add a VPC NAT Gateway as a service
            /// resource.
            /// - GatewayLoadBalancer: a Gateway Load Balancer endpoint. You can add a Gateway
            /// Load Balancer (GWLB) as a service resource.
            /// > Services that support reverse endpoints are provided exclusively by the cloud
            /// platform and its partners. You cannot create them by default. To request access,
            /// contact your account manager.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: protectedEnabled: Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values:
            /// true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
            /// false (default): no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protectedEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtectedEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpoint.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Privatelink.RosVpcEndpoint.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Privatelink.RosVpcEndpoint.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zone: The list of zones for the endpoint.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Zone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone. Set the value to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zonePrivateIpAddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZonePrivateIpAddressCount
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
