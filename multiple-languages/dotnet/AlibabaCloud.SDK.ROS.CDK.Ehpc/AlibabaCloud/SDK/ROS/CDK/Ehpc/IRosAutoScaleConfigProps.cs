using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    /// <summary>Properties for defining a `RosAutoScaleConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAutoScaleConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.RosAutoScaleConfigProps")]
    public interface IRosAutoScaleConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
        /// true: enables auto scale-out.
        /// false: disables auto scale-out
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "enableAutoGrow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAutoGrow
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
        /// true: enables auto scale-in.
        /// false: disables auto scale-in
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "enableAutoShrink", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAutoShrink
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
        /// </remarks>
        [JsiiProperty(name: "excludeNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeNodes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: extraNodesGrowRatio: The percentage of extra compute nodes.
        /// Default value: 0
        /// </remarks>
        [JsiiProperty(name: "extraNodesGrowRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExtraNodesGrowRatio
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
        /// Default value: 2
        /// </remarks>
        [JsiiProperty(name: "growIntervalInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GrowIntervalInMinutes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: growRatio: The percentage of each round of scale-out.
        /// Default value: 100
        /// </remarks>
        [JsiiProperty(name: "growRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GrowRatio
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
        /// Default value: 20
        /// </remarks>
        [JsiiProperty(name: "growTimeoutInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GrowTimeoutInMinutes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: The ID of the image.
        /// If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
        /// If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
        /// If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
        /// Default value: 100
        /// </remarks>
        [JsiiProperty(name: "maxNodesInCluster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxNodesInCluster
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: queues:
        /// </remarks>
        [JsiiProperty(name: "queues", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.QueuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Queues
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
        /// Default value: 3
        /// </remarks>
        [JsiiProperty(name: "shrinkIdleTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShrinkIdleTimes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
        /// Default value: 2
        /// </remarks>
        [JsiiProperty(name: "shrinkIntervalInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShrinkIntervalInMinutes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
        /// </remarks>
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotPriceLimit
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotStrategy: The preemption policy of the compute nodes. Valid values:
        /// NoSpot: The compute nodes are pay-as-you-go instances.
        /// SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
        /// SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
        /// Default value: NoSpot
        /// </remarks>
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAutoScaleConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAutoScaleConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.RosAutoScaleConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.IRosAutoScaleConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: Cluster ID.
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
            /// true: enables auto scale-out.
            /// false: disables auto scale-out
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAutoGrow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAutoGrow
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
            /// true: enables auto scale-in.
            /// false: disables auto scale-in
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAutoShrink", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAutoShrink
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "excludeNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcludeNodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: extraNodesGrowRatio: The percentage of extra compute nodes.
            /// Default value: 0
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "extraNodesGrowRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExtraNodesGrowRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
            /// Default value: 2
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "growIntervalInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GrowIntervalInMinutes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: growRatio: The percentage of each round of scale-out.
            /// Default value: 100
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "growRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GrowRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
            /// Default value: 20
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "growTimeoutInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GrowTimeoutInMinutes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageId: The ID of the image.
            /// If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
            /// If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
            /// If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
            /// Default value: 100
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxNodesInCluster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxNodesInCluster
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: queues:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queues", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.QueuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Queues
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
            /// Default value: 3
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shrinkIdleTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShrinkIdleTimes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
            /// Default value: 2
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shrinkIntervalInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShrinkIntervalInMinutes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotPriceLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotStrategy: The preemption policy of the compute nodes. Valid values:
            /// NoSpot: The compute nodes are pay-as-you-go instances.
            /// SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
            /// SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
            /// Default value: NoSpot
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotStrategy
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
