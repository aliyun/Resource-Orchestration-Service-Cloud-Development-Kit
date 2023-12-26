using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `RosASKCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-askcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosASKClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosASKClusterProps")]
    public interface IRosASKClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: addons: The add-ons to be installed for the cluster.
        /// </remarks>
        [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosASKCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Addons
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterSpec: The managed cluster spec. Value:
        /// ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        /// ack.standard: Standard hosting cluster.
        /// Default value: ack.pro.small.
        /// </remarks>
        [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionProtection: Specifies whether to enable deletion protection for the cluster.
        /// After deletion protection is enabled, the cluster cannot be deleted
        /// in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        /// false: disables deletion protection for the cluster.
        /// Default value: false.
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

        /// <remarks>
        /// <strong>Property</strong>: endpointPublicAccess: Whether to enable the public network API Server:
        /// true: which means that the public network API Server is open.
        /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default value: true.
        /// </remarks>
        [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointPublicAccess
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: kubernetesVersion: The version of the Kubernetes cluster.
        /// </remarks>
        [JsiiProperty(name: "kubernetesVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KubernetesVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: privateZone: Whether to enable PrivateZone for service discovery.
        /// </remarks>
        [JsiiProperty(name: "privateZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateZone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of resource group.
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

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
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

        /// <remarks>
        /// <strong>Property</strong>: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
        /// </remarks>
        [JsiiProperty(name: "serviceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceCidr
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceDiscoveryTypes: Intra-cluster service discovery type,
        /// used to specify the service discovery method in the ASK cluster.
        /// CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
        /// a set of containers needs to be deployed in the cluster for DNS resolution.
        /// By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
        /// PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
        /// the PrivateZone service needs to be enabled.
        /// Default value: off
        /// </remarks>
        [JsiiProperty(name: "serviceDiscoveryTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceDiscoveryTypes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: snatEntry: Whether to configure SNAT for the network.
        /// When a VPC can access the public network environment, set it to false.
        /// When an existing VPC cannot access the public network environment:
        /// When set to True, SNAT is configured and the public network environment can be accessed at this time.
        /// If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        /// Default to true.
        /// </remarks>
        [JsiiProperty(name: "snatEntry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnatEntry
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tag the cluster.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosASKCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cs.RosASKCluster.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: timeZone: The time zone used by the cluster..
        /// </remarks>
        [JsiiProperty(name: "timeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeZone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC ID.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
        /// Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        /// </remarks>
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosASKCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-askcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosASKClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosASKClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IRosASKClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: addons: The add-ons to be installed for the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosASKCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Addons
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterSpec: The managed cluster spec. Value:
            /// ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
            /// ack.standard: Standard hosting cluster.
            /// Default value: ack.pro.small.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionProtection: Specifies whether to enable deletion protection for the cluster.
            /// After deletion protection is enabled, the cluster cannot be deleted
            /// in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
            /// false: disables deletion protection for the cluster.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointPublicAccess: Whether to enable the public network API Server:
            /// true: which means that the public network API Server is open.
            /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointPublicAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kubernetesVersion: The version of the Kubernetes cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kubernetesVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KubernetesVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: privateZone: Whether to enable PrivateZone for service discovery.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceDiscoveryTypes: Intra-cluster service discovery type,
            /// used to specify the service discovery method in the ASK cluster.
            /// CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
            /// a set of containers needs to be deployed in the cluster for DNS resolution.
            /// By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
            /// PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
            /// the PrivateZone service needs to be enabled.
            /// Default value: off
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceDiscoveryTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ServiceDiscoveryTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: snatEntry: Whether to configure SNAT for the network.
            /// When a VPC can access the public network environment, set it to false.
            /// When an existing VPC cannot access the public network environment:
            /// When set to True, SNAT is configured and the public network environment can be accessed at this time.
            /// If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
            /// Default to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snatEntry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnatEntry
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tag the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosASKCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cs.RosASKCluster.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cs.RosASKCluster.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeZone: The time zone used by the cluster..
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: VPC ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
            /// Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The zone ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
