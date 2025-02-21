using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adblake
{
    /// <summary>Properties for defining a `ResourceGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-adblake.ResourceGroupProps")]
    public interface IResourceGroupProps
    {
        /// <summary>Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property engine: Database engine, value: AnalyticDB (default): AnalyticDB for mysql engine.</summary>
        /// <remarks>
        /// Sparkwarehouse: Sparkwarehous engine.
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <summary>Property groupName: The name of the resource group.</summary>
        /// <remarks>
        /// The name can be up to 255 characters in length.
        /// The name must start with a letter or digit.
        /// The name can contain letters, digits, hyphens (-), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Property groupType: The type of the resource group.</summary>
        /// <remarks>
        /// Valid values:
        /// Interactive
        /// Job
        /// Note For more information about resource groups, see Resource group overview.
        /// </remarks>
        [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupType
        {
            get;
        }

        /// <summary>Property autoStopInterval: Automatically stop time, the unit is minutes (m).</summary>
        [JsiiProperty(name: "autoStopInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoStopInterval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterMode: The mode of cluster.</summary>
        /// <remarks>
        /// Default: AutoScale.
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

        /// <summary>Property clusterSizeResource: A reserved parameter.</summary>
        [JsiiProperty(name: "clusterSizeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterSizeResource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableSpot: Specifies whether to enable the spot instance feature for the resource group.</summary>
        /// <remarks>
        /// After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
        /// True
        /// False
        /// </remarks>
        [JsiiProperty(name: "enableSpot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSpot
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engineParams: Engine configuration.</summary>
        [JsiiProperty(name: "engineParams", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EngineParams
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxClusterCount: A reserved parameter.</summary>
        [JsiiProperty(name: "maxClusterCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxClusterCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxComputeResource: The maximum reserved computing resources.</summary>
        /// <remarks>
        /// If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
        /// If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
        /// </remarks>
        [JsiiProperty(name: "maxComputeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxComputeResource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property minClusterCount: A reserved parameter.</summary>
        [JsiiProperty(name: "minClusterCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinClusterCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property minComputeResource: The minimum reserved computing resources.</summary>
        /// <remarks>
        /// When GroupType is set to Interactive, set this parameter to 16ACU.
        /// When GroupType is set to Job, set this parameter to 0ACU.
        /// </remarks>
        [JsiiProperty(name: "minComputeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinComputeResource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rules: The job resubmission rules.</summary>
        [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-adblake.RosResourceGroup.RulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Rules
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ResourceGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-adblake.ResourceGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Adblake.IResourceGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property engine: Database engine, value: AnalyticDB (default): AnalyticDB for mysql engine.</summary>
            /// <remarks>
            /// Sparkwarehouse: Sparkwarehous engine.
            /// </remarks>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupName: The name of the resource group.</summary>
            /// <remarks>
            /// The name can be up to 255 characters in length.
            /// The name must start with a letter or digit.
            /// The name can contain letters, digits, hyphens (-), and underscores (_).
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupType: The type of the resource group.</summary>
            /// <remarks>
            /// Valid values:
            /// Interactive
            /// Job
            /// Note For more information about resource groups, see Resource group overview.
            /// </remarks>
            [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoStopInterval: Automatically stop time, the unit is minutes (m).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoStopInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoStopInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterMode: The mode of cluster.</summary>
            /// <remarks>
            /// Default: AutoScale.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterSizeResource: A reserved parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterSizeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterSizeResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableSpot: Specifies whether to enable the spot instance feature for the resource group.</summary>
            /// <remarks>
            /// After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
            /// True
            /// False
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSpot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSpot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engineParams: Engine configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "engineParams", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? EngineParams
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxClusterCount: A reserved parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxClusterCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxClusterCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxComputeResource: The maximum reserved computing resources.</summary>
            /// <remarks>
            /// If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
            /// If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxComputeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxComputeResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minClusterCount: A reserved parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "minClusterCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinClusterCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minComputeResource: The minimum reserved computing resources.</summary>
            /// <remarks>
            /// When GroupType is set to Interactive, set this parameter to 16ACU.
            /// When GroupType is set to Job, set this parameter to 0ACU.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minComputeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinComputeResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rules: The job resubmission rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-adblake.RosResourceGroup.RulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Rules
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
