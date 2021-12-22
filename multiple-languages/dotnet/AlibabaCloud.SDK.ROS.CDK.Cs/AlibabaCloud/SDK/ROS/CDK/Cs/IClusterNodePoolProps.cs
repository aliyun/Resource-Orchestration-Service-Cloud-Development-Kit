using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ALIYUN::CS::ClusterNodePool`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterNodePoolProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterNodePoolProps")]
    public interface IClusterNodePoolProps
    {
        /// <summary>Property clusterId: Cluster ID.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property scalingGroup: The configurations of the scaling group used by the node pool.</summary>
        [JsiiProperty(name: "scalingGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty\"}]}}")]
        object ScalingGroup
        {
            get;
        }

        /// <summary>Property autoScaling: The configurations of auto scaling.</summary>
        [JsiiProperty(name: "autoScaling", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoScaling
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property count: The number of nodes in the node pool.</summary>
        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Count
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kubernetesConfig: The configurations of the ACK cluster.</summary>
        [JsiiProperty(name: "kubernetesConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KubernetesConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property management: The configurations of the managed node pool.</summary>
        [JsiiProperty(name: "management", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Management
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nodePoolInfo: The configurations of the node pool.</summary>
        [JsiiProperty(name: "nodePoolInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NodePoolInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property teeConfig: The configurations of confidential computing.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IClusterNodePoolProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterNodePoolProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IClusterNodePoolProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: Cluster ID.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scalingGroup: The configurations of the scaling group used by the node pool.</summary>
            [JsiiProperty(name: "scalingGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty\"}]}}")]
            public object ScalingGroup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoScaling: The configurations of auto scaling.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoScaling", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty\"}]}}", isOptional: true)]
            public object? AutoScaling
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property count: The number of nodes in the node pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Count
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kubernetesConfig: The configurations of the ACK cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kubernetesConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty\"}]}}", isOptional: true)]
            public object? KubernetesConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property management: The configurations of the managed node pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "management", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty\"}]}}", isOptional: true)]
            public object? Management
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nodePoolInfo: The configurations of the node pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "nodePoolInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty\"}]}}", isOptional: true)]
            public object? NodePoolInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property teeConfig: The configurations of confidential computing.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "teeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty\"}]}}", isOptional: true)]
            public object? TeeConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
