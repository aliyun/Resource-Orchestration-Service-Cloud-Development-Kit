using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `Instances`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.InstancesProps")]
    public interface IInstancesProps
    {
        /// <summary>Property additionalAttributes: The value of attribute N.</summary>
        /// <remarks>
        /// Valid values of N: 1 to 20. Valid values:
        /// META_OPTIONS: instance metadata
        /// DDH_CLUSTER: dedicated host cluster
        /// NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
        /// </remarks>
        [JsiiProperty(name: "additionalAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AdditionalAttributes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property eipAddresses: The elastic IP addresses (EIPs) of instances.</summary>
        /// <remarks>
        /// This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        /// </remarks>
        [JsiiProperty(name: "eipAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EipAddresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property filters: Filter value when querying resources.</summary>
        [JsiiProperty(name: "filters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosInstances.FiltersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Filters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.</summary>
        [JsiiProperty(name: "hpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HpcClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageId: The ID of the image.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property innerIpAddresses: The internal IP addresses of instances located in the classic network.</summary>
        /// <remarks>
        /// This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        /// </remarks>
        [JsiiProperty(name: "innerIpAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InnerIpAddresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceChargeType: The billing method of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PostPaid: pay-as-you-go
        /// PrePaid: subscription
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

        /// <summary>Property instanceId: The IDs of instances.</summary>
        /// <remarks>
        /// The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceIds: The IDs of instances.</summary>
        /// <remarks>
        /// The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceName: The name of the instance.</summary>
        /// <remarks>
        /// Fuzzy search with the asterisk (*) wildcard is supported.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceNetworkType: The network type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// classic: classic network
        /// vpc: VPC
        /// </remarks>
        [JsiiProperty(name: "instanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: The instance type of the instance.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceTypeFamily: The instance family of the instance.</summary>
        [JsiiProperty(name: "instanceTypeFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceTypeFamily
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: The billing method for network usage.</summary>
        /// <remarks>
        /// Valid values:
        /// PayByBandwidth: pay-by-bandwidth
        /// PayByTraffic: pay-by-traffic
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

        /// <summary>Property ioOptimized: Specifies whether the instance is I\/O optimized.</summary>
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IoOptimized
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6Address: IPv6 address N of the elastic network interface (ENI).</summary>
        /// <remarks>
        /// You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        /// </remarks>
        [JsiiProperty(name: "ipv6Address", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Address
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPairName: The name of the SSH key pair bound to the instance.</summary>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyPairName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddresses: The private IP addresses of instances located in VPCs.</summary>
        /// <remarks>
        /// This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
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

        /// <summary>Property publicIpAddresses: The public IP addresses of instances.</summary>
        /// <remarks>
        /// The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        /// </remarks>
        [JsiiProperty(name: "publicIpAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PublicIpAddresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.</summary>
        [JsiiProperty(name: "rdmaIpAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RdmaIpAddresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the instance belongs.</summary>
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

        /// <summary>Property securityGroupId: The ID of the security group to which the instance belongs.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The state of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Pending
        /// Running
        /// Starting
        /// Stopping
        /// Stopped
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

        /// <summary>Property tags: Tags of instance.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosInstances.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosInstances.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the vSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The zone ID of the instance.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Instances`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.InstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property additionalAttributes: The value of attribute N.</summary>
            /// <remarks>
            /// Valid values of N: 1 to 20. Valid values:
            /// META_OPTIONS: instance metadata
            /// DDH_CLUSTER: dedicated host cluster
            /// NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AdditionalAttributes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eipAddresses: The elastic IP addresses (EIPs) of instances.</summary>
            /// <remarks>
            /// This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? EipAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property filters: Filter value when querying resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "filters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosInstances.FiltersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Filters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HpcClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageId: The ID of the image.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property innerIpAddresses: The internal IP addresses of instances located in the classic network.</summary>
            /// <remarks>
            /// This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "innerIpAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InnerIpAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The billing method of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// PostPaid: pay-as-you-go
            /// PrePaid: subscription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: The IDs of instances.</summary>
            /// <remarks>
            /// The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceIds: The IDs of instances.</summary>
            /// <remarks>
            /// The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceName: The name of the instance.</summary>
            /// <remarks>
            /// Fuzzy search with the asterisk (*) wildcard is supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceNetworkType: The network type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// classic: classic network
            /// vpc: VPC
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceNetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: The instance type of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceTypeFamily: The instance family of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceTypeFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceTypeFamily
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: The billing method for network usage.</summary>
            /// <remarks>
            /// Valid values:
            /// PayByBandwidth: pay-by-bandwidth
            /// PayByTraffic: pay-by-traffic
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ioOptimized: Specifies whether the instance is I\/O optimized.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IoOptimized
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6Address: IPv6 address N of the elastic network interface (ENI).</summary>
            /// <remarks>
            /// You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Address", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Ipv6Address
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyPairName: The name of the SSH key pair bound to the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateIpAddresses: The private IP addresses of instances located in VPCs.</summary>
            /// <remarks>
            /// This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PrivateIpAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property publicIpAddresses: The public IP addresses of instances.</summary>
            /// <remarks>
            /// The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicIpAddresses", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PublicIpAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rdmaIpAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RdmaIpAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the instance belongs.</summary>
            /// <remarks>
            /// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: The ID of the security group to which the instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The state of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Pending
            /// Running
            /// Starting
            /// Stopping
            /// Stopped
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosInstances.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosInstances.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosInstances.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The zone ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
