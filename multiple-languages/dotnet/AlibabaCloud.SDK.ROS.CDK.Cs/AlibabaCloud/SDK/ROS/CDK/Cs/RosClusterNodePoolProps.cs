using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CS::ClusterNodePool`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePoolProps")]
    public class RosClusterNodePoolProps : AlibabaCloud.SDK.ROS.CDK.Cs.IRosClusterNodePoolProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroup: The configurations of the scaling group used by the node pool.
        /// </remarks>
        [JsiiProperty(name: "scalingGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty\"}]}}", isOverride: true)]
        public object ScalingGroup
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoScaling: The configurations of auto scaling.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoScaling", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoScaling
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: count: The number of nodes in the node pool.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Count
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: kubernetesConfig: The configurations of the ACK cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "kubernetesConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? KubernetesConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: management: The configurations of the managed node pool.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "management", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? Management
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodePoolInfo: The configurations of the node pool.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nodePoolInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? NodePoolInfo
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: teeConfig: The configurations of confidential computing.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "teeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? TeeConfig
        {
            get;
            set;
        }
    }
}
