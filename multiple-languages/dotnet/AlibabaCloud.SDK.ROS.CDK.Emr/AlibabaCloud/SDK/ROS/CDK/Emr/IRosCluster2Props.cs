using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Properties for defining a `ALIYUN::EMR::Cluster2`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCluster2Props), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster2Props")]
    public interface IRosCluster2Props
    {
        /// <remarks>
        /// <strong>Property</strong>: applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
        /// </remarks>
        [JsiiProperty(name: "applications", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.ApplicationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Applications
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: Cluster type.Ranges:
        /// Datalake: The new version of the data lake.
        /// OLAP: Data analysis.
        /// DataFlow: Real -time data stream.
        /// DataServing: Data service.
        /// Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
        /// </remarks>
        [JsiiProperty(name: "nodeAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.NodeAttributesProperty\"}]}}")]
        object NodeAttributes
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
        /// </remarks>
        [JsiiProperty(name: "nodeGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.NodeGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object NodeGroups
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
        /// </remarks>
        [JsiiProperty(name: "releaseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReleaseVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
        /// </remarks>
        [JsiiProperty(name: "applicationConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.ApplicationConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApplicationConfigs
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
        /// </remarks>
        [JsiiProperty(name: "bootstrapScripts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.BootstrapScriptsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BootstrapScripts
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deployMode: Application deployment mode in the cluster.Ranges:
        /// Normal: non -high available deployment.Cluster 1 master node.
        /// HA: High availability deployment.High availability deployment requires at least 3 master nodes.
        /// </remarks>
        [JsiiProperty(name: "deployMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeployMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: paymentType: Payment type. Ranges:
        /// PayAsYouGo: Post-paid, pay-as-you-go.
        /// Subscription: Prepaid, yearly and monthly.
        /// Default: PayAsYouGo.
        /// </remarks>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PaymentType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group ID.
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
        /// <strong>Property</strong>: securityMode: Cluster Kerberos security mode.Ranges:
        /// Normal: General mode, does not open the Kerberos mode.
        /// Kerberos: Open the Kerberos mode.
        /// </remarks>
        [JsiiProperty(name: "securityMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
        /// </remarks>
        [JsiiProperty(name: "subscriptionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.SubscriptionConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SubscriptionConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster2.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::EMR::Cluster2`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCluster2Props), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.IRosCluster2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
            /// </remarks>
            [JsiiProperty(name: "applications", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.ApplicationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Applications
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
            /// </remarks>
            [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterType: Cluster type.Ranges:
            /// Datalake: The new version of the data lake.
            /// OLAP: Data analysis.
            /// DataFlow: Real -time data stream.
            /// DataServing: Data service.
            /// Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
            /// </remarks>
            [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
            /// </remarks>
            [JsiiProperty(name: "nodeAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.NodeAttributesProperty\"}]}}")]
            public object NodeAttributes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
            /// </remarks>
            [JsiiProperty(name: "nodeGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.NodeGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object NodeGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
            /// </remarks>
            [JsiiProperty(name: "releaseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReleaseVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "applicationConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.ApplicationConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ApplicationConfigs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bootstrapScripts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.BootstrapScriptsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BootstrapScripts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deployMode: Application deployment mode in the cluster.Ranges:
            /// Normal: non -high available deployment.Cluster 1 master node.
            /// HA: High availability deployment.High availability deployment requires at least 3 master nodes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deployMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeployMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: paymentType: Payment type. Ranges:
            /// PayAsYouGo: Post-paid, pay-as-you-go.
            /// Subscription: Prepaid, yearly and monthly.
            /// Default: PayAsYouGo.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityMode: Cluster Kerberos security mode.Ranges:
            /// Normal: General mode, does not open the Kerberos mode.
            /// Kerberos: Open the Kerberos mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "subscriptionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.SubscriptionConfigProperty\"}]}}", isOptional: true)]
            public object? SubscriptionConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster2.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster2.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster2.ITagsProperty[]?>();
            }
        }
    }
}
