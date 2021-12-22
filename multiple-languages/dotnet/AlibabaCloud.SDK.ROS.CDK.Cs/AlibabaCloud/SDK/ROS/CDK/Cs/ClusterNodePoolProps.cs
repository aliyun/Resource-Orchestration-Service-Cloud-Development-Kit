using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CS::ClusterNodePool`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.ClusterNodePoolProps")]
    public class ClusterNodePoolProps : AlibabaCloud.SDK.ROS.CDK.Cs.IClusterNodePoolProps
    {
        /// <summary>Property clusterId: Cluster ID.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ClusterId
        {
            get;
            set;
        }

        /// <summary>Property scalingGroup: The configurations of the scaling group used by the node pool.</summary>
        [JsiiProperty(name: "scalingGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty\"}]}}", isOverride: true)]
        public object ScalingGroup
        {
            get;
            set;
        }

        /// <summary>Property autoScaling: The configurations of auto scaling.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoScaling", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoScaling
        {
            get;
            set;
        }

        /// <summary>Property count: The number of nodes in the node pool.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Count
        {
            get;
            set;
        }

        /// <summary>Property kubernetesConfig: The configurations of the ACK cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "kubernetesConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? KubernetesConfig
        {
            get;
            set;
        }

        /// <summary>Property management: The configurations of the managed node pool.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "management", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? Management
        {
            get;
            set;
        }

        /// <summary>Property nodePoolInfo: The configurations of the node pool.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "nodePoolInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? NodePoolInfo
        {
            get;
            set;
        }

        /// <summary>Property teeConfig: The configurations of confidential computing.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "teeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? TeeConfig
        {
            get;
            set;
        }
    }
}
