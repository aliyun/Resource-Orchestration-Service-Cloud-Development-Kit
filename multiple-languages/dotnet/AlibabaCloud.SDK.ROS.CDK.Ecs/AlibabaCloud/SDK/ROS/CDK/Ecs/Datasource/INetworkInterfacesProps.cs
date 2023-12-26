using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `NetworkInterfaces`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkInterfacesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.NetworkInterfacesProps")]
    public interface INetworkInterfacesProps
    {
        /// <summary>Property instanceId: The ID of the instance to which the ENI is bound.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6Addresses: IPv6 address N of the ENI.</summary>
        /// <remarks>
        /// You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        /// </remarks>
        [JsiiProperty(name: "ipv6Addresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Addresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkInterfaceIds: The ID of ENI N.</summary>
        /// <remarks>
        /// Valid values of N: 1 to 100.
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkInterfaceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkInterfaceName: The name of the ENI.</summary>
        [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkInterfaceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property primaryIpAddress: The primary private IPv4 address of the ENI.</summary>
        [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrimaryIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddresses: Secondary private IPv4 address N of the ENI.</summary>
        /// <remarks>
        /// Valid values of N: 1 to 100.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the eni belongs.</summary>
        /// <remarks>
        /// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: The ID of the security group to which the secondary ENI belongs.</summary>
        /// <remarks>
        /// To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
        /// To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.</summary>
        [JsiiProperty(name: "serviceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceManaged
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The state of the ENI.</summary>
        /// <remarks>
        /// Valid values:
        /// Creating: The ENI is being created.
        /// Available: The ENI is not bound to an instance.
        /// Attaching: The ENI is being bound to an instance.
        /// InUse: The ENI is bound to an instance.
        /// Detaching: The ENI is being unbound from an instance.
        /// Deleting: The ENI is being deleted.
        /// CreateFailed: The ENI cannot be created.
        /// This parameter is empty by default, which indicates that ENIs in all states are queried.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of eni.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosNetworkInterfaces.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosNetworkInterfaces.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: The type of the ENI.</summary>
        /// <remarks>
        /// Valid values:
        /// Primary
        /// Secondary
        /// This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the vSwitch to which the ENI is connected.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `NetworkInterfaces`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkInterfacesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.NetworkInterfacesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.INetworkInterfacesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the instance to which the ENI is bound.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6Addresses: IPv6 address N of the ENI.</summary>
            /// <remarks>
            /// You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Addresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Ipv6Addresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkInterfaceIds: The ID of ENI N.</summary>
            /// <remarks>
            /// Valid values of N: 1 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NetworkInterfaceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkInterfaceName: The name of the ENI.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkInterfaceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property primaryIpAddress: The primary private IPv4 address of the ENI.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrimaryIpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateIpAddresses: Secondary private IPv4 address N of the ENI.</summary>
            /// <remarks>
            /// Valid values of N: 1 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PrivateIpAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the eni belongs.</summary>
            /// <remarks>
            /// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: The ID of the security group to which the secondary ENI belongs.</summary>
            /// <remarks>
            /// To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
            /// To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceManaged
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The state of the ENI.</summary>
            /// <remarks>
            /// Valid values:
            /// Creating: The ENI is being created.
            /// Available: The ENI is not bound to an instance.
            /// Attaching: The ENI is being bound to an instance.
            /// InUse: The ENI is bound to an instance.
            /// Detaching: The ENI is being unbound from an instance.
            /// Deleting: The ENI is being deleted.
            /// CreateFailed: The ENI cannot be created.
            /// This parameter is empty by default, which indicates that ENIs in all states are queried.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of eni.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosNetworkInterfaces.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosNetworkInterfaces.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosNetworkInterfaces.ITagsProperty[]?>();
            }

            /// <summary>Property type: The type of the ENI.</summary>
            /// <remarks>
            /// Valid values:
            /// Primary
            /// Secondary
            /// This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch to which the ENI is connected.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
