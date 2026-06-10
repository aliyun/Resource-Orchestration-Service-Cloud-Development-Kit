using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `Quota`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-quota
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IQuotaProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.QuotaProps")]
    public interface IQuotaProps
    {
        /// <summary>Property quotaName: The name of the quota.</summary>
        [JsiiProperty(name: "quotaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QuotaName
        {
            get;
        }

        /// <summary>Property allocateStrategy: The allocation strategy.</summary>
        [JsiiProperty(name: "allocateStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocateStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterSpec: The cluster specification.</summary>
        [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the quota.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property labels: The labels associated with the quota.</summary>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosQuota.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property min: The minimum resource allocation configuration.</summary>
        [JsiiProperty(name: "min", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosQuota.MinProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Min
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parentQuotaId: The ID of the parent quota.</summary>
        [JsiiProperty(name: "parentQuotaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParentQuotaId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queueStrategy: The queue strategy.</summary>
        [JsiiProperty(name: "queueStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property quotaConfig: The quota configuration.</summary>
        [JsiiProperty(name: "quotaConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QuotaConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupIds: The list of resource group IDs.</summary>
        [JsiiProperty(name: "resourceGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceType: The type of the resource.</summary>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Quota`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-quota
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IQuotaProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.QuotaProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IQuotaProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property quotaName: The name of the quota.</summary>
            [JsiiProperty(name: "quotaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QuotaName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allocateStrategy: The allocation strategy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "allocateStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocateStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterSpec: The cluster specification.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ClusterSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the quota.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property labels: The labels associated with the quota.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosQuota.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property min: The minimum resource allocation configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "min", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosQuota.MinProperty\"}]}}", isOptional: true)]
            public object? Min
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parentQuotaId: The ID of the parent quota.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parentQuotaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParentQuotaId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queueStrategy: The queue strategy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "queueStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property quotaConfig: The quota configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "quotaConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? QuotaConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupIds: The list of resource group IDs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceType: The type of the resource.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
