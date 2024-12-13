using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    /// <summary>Properties for defining a `ClusterV2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClusterV2Props), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.ClusterV2Props")]
    public interface IClusterV2Props
    {
        /// <summary>Property clusterName: Cluster name.</summary>
        /// <remarks>
        /// The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterName
        {
            get;
        }

        /// <summary>Property sharedStorages: The list of shared storage configurations.</summary>
        [JsiiProperty(name: "sharedStorages", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.SharedStoragesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object SharedStorages
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the VPC used by the cluster.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch used by the cluster.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property additionalPackages: A list of software to install on the cluster.</summary>
        /// <remarks>
        /// Range from 0 to 10.
        /// </remarks>
        [JsiiProperty(name: "additionalPackages", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.AdditionalPackagesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AdditionalPackages
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property addons: Cluster custom service component configuration to support only one component.</summary>
        [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Addons
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clientVersion: Cluster client version.</summary>
        /// <remarks>
        /// By default, the latest version is used.
        /// </remarks>
        [JsiiProperty(name: "clientVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClientVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterCategory: Cluster series.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Standard: The standard version.</description>
        /// <description>Serverless: Hosted version</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "clusterCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterCredentials: Security credentials for the cluster.</summary>
        [JsiiProperty(name: "clusterCredentials", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCredentialsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterCredentials
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterCustomConfiguration: Cluster post-processing scripts.</summary>
        [JsiiProperty(name: "clusterCustomConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCustomConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterCustomConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterDescription: Cluster description.</summary>
        /// <remarks>
        /// The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        /// </remarks>
        [JsiiProperty(name: "clusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterMode: Cluster deployment type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Integrated: Public cloud clustering.</description>
        /// <description>Hybrid: Hybrid cloud cluster.</description>
        /// <description>Custom: The cluster is customized</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "clusterMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>true: Cluster deletion protection is enabled.</description>
        /// <description>false: This turns off cluster deletion protection.
        /// Default value: false</description>
        /// </list>
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

        /// <summary>Property isEnterpriseSecurityGroup: Whether to create an enterprise security group.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Enterprise security groups are automatically created and used.</description>
        /// <description>false: Normal security groups are automatically created and used instead of enterprise security groups.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "isEnterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsEnterpriseSecurityGroup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property manager: The cluster manages node configuration.</summary>
        [JsiiProperty(name: "manager", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Manager
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.</summary>
        [JsiiProperty(name: "maxCoreCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxCoreCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.</summary>
        [JsiiProperty(name: "maxCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queues: Cluster queue configuration.</summary>
        /// <remarks>
        /// The number of queues is supported from 0 to 8.
        /// </remarks>
        [JsiiProperty(name: "queues", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.QueuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Queues
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to cluster_v2.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ehpc.RosClusterV2.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ClusterV2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClusterV2Props), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.ClusterV2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.IClusterV2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterName: Cluster name.</summary>
            /// <remarks>
            /// The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
            /// </remarks>
            [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sharedStorages: The list of shared storage configurations.</summary>
            [JsiiProperty(name: "sharedStorages", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.SharedStoragesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object SharedStorages
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the VPC used by the cluster.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch used by the cluster.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property additionalPackages: A list of software to install on the cluster.</summary>
            /// <remarks>
            /// Range from 0 to 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalPackages", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.AdditionalPackagesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AdditionalPackages
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property addons: Cluster custom service component configuration to support only one component.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Addons
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clientVersion: Cluster client version.</summary>
            /// <remarks>
            /// By default, the latest version is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clientVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClientVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterCategory: Cluster series.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Standard: The standard version.</description>
            /// <description>Serverless: Hosted version</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterCredentials: Security credentials for the cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterCredentials", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCredentialsProperty\"}]}}", isOptional: true)]
            public object? ClusterCredentials
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterCustomConfiguration: Cluster post-processing scripts.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterCustomConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCustomConfigurationProperty\"}]}}", isOptional: true)]
            public object? ClusterCustomConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterDescription: Cluster description.</summary>
            /// <remarks>
            /// The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterMode: Cluster deployment type.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Integrated: Public cloud clustering.</description>
            /// <description>Hybrid: Hybrid cloud cluster.</description>
            /// <description>Custom: The cluster is customized</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>true: Cluster deletion protection is enabled.</description>
            /// <description>false: This turns off cluster deletion protection.
            /// Default value: false</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isEnterpriseSecurityGroup: Whether to create an enterprise security group.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: Enterprise security groups are automatically created and used.</description>
            /// <description>false: Normal security groups are automatically created and used instead of enterprise security groups.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isEnterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsEnterpriseSecurityGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property manager: The cluster manages node configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "manager", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerProperty\"}]}}", isOptional: true)]
            public object? Manager
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxCoreCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxCoreCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queues: Cluster queue configuration.</summary>
            /// <remarks>
            /// The number of queues is supported from 0 to 8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queues", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.QueuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Queues
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to cluster_v2.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterV2.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ehpc.RosClusterV2.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ehpc.RosClusterV2.ITagsProperty[]?>();
            }
        }
    }
}
