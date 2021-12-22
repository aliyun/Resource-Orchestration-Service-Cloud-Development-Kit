using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ALIYUN::CS::ClusterNodePool`.</summary>
    [JsiiInterface(nativeType: typeof(IRosClusterNodePoolProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePoolProps")]
    public interface IRosClusterNodePoolProps
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
        /// <strong>Property</strong>: scalingGroup: The configurations of the scaling group used by the node pool.
        /// </remarks>
        [JsiiProperty(name: "scalingGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty\"}]}}")]
        object ScalingGroup
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoScaling: The configurations of auto scaling.
        /// </remarks>
        [JsiiProperty(name: "autoScaling", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoScaling
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: count: The number of nodes in the node pool.
        /// </remarks>
        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Count
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: kubernetesConfig: The configurations of the ACK cluster.
        /// </remarks>
        [JsiiProperty(name: "kubernetesConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KubernetesConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: management: The configurations of the managed node pool.
        /// </remarks>
        [JsiiProperty(name: "management", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Management
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: nodePoolInfo: The configurations of the node pool.
        /// </remarks>
        [JsiiProperty(name: "nodePoolInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NodePoolInfo
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: teeConfig: The configurations of confidential computing.
        /// </remarks>
        [JsiiProperty(name: "teeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TeeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CS::ClusterNodePool`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterNodePoolProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePoolProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IRosClusterNodePoolProps
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
            /// <strong>Property</strong>: scalingGroup: The configurations of the scaling group used by the node pool.
            /// </remarks>
            [JsiiProperty(name: "scalingGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty\"}]}}")]
            public object ScalingGroup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoScaling: The configurations of auto scaling.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoScaling", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty\"}]}}", isOptional: true)]
            public object? AutoScaling
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: count: The number of nodes in the node pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Count
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kubernetesConfig: The configurations of the ACK cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kubernetesConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty\"}]}}", isOptional: true)]
            public object? KubernetesConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: management: The configurations of the managed node pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "management", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty\"}]}}", isOptional: true)]
            public object? Management
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nodePoolInfo: The configurations of the node pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodePoolInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty\"}]}}", isOptional: true)]
            public object? NodePoolInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: teeConfig: The configurations of confidential computing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "teeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty\"}]}}", isOptional: true)]
            public object? TeeConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
