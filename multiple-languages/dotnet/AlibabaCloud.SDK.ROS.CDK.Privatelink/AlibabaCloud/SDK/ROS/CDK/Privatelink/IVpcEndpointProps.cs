using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpoint`.</summary>
    [JsiiInterface(nativeType: typeof(IVpcEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.VpcEndpointProps")]
    public interface IVpcEndpointProps
    {
        /// <summary>Property securityGroupId: The security group associated with the endpoint network interface.</summary>
        /// <remarks>
        /// The security group can control the data communication from the VPC to the endpoint network interface.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object SecurityGroupId
        {
            get;
        }

        /// <summary>Property vpcId: The VPC to which the endpoint belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property endpointDescription: The description of the endpoint.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
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

        /// <summary>Property endpointName: The name of the endpoint.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain digits, underscores
        /// (_), and hyphens (-). The name must start with a letter.
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

        /// <summary>Property endpointType: Endpoint type.</summary>
        [JsiiProperty(name: "endpointType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property protectedEnabled: Specifies whether to enable user authentication.</summary>
        /// <remarks>
        /// This parameter is available in Security Token Service (STS) mode. Valid values:
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

        /// <summary>Property serviceId: The endpoint service that is associated with the endpoint.</summary>
        /// <remarks>
        /// One of ServiceId and ServiceName is required.
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

        /// <summary>Property serviceName: The name of the endpoint service that is associated with the endpoint.</summary>
        /// <remarks>
        /// One of ServiceId and ServiceName is required.
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

        /// <summary>Property zone:.</summary>
        [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Zone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone.</summary>
        /// <remarks>
        /// Set the value to 1.
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

        /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpoint`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpcEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.VpcEndpointProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property securityGroupId: The security group associated with the endpoint network interface.</summary>
            /// <remarks>
            /// The security group can control the data communication from the VPC to the endpoint network interface.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object SecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The VPC to which the endpoint belongs.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointDescription: The description of the endpoint.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointName: The name of the endpoint.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length and can contain digits, underscores
            /// (_), and hyphens (-). The name must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointType: Endpoint type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "endpointType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protectedEnabled: Specifies whether to enable user authentication.</summary>
            /// <remarks>
            /// This parameter is available in Security Token Service (STS) mode. Valid values:
            /// true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
            /// false (default): no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protectedEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtectedEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceId: The endpoint service that is associated with the endpoint.</summary>
            /// <remarks>
            /// One of ServiceId and ServiceName is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceName: The name of the endpoint service that is associated with the endpoint.</summary>
            /// <remarks>
            /// One of ServiceId and ServiceName is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zone:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Zone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone.</summary>
            /// <remarks>
            /// Set the value to 1.
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
