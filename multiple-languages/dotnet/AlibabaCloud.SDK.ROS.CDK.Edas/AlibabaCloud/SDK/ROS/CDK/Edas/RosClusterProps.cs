using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosClusterProps")]
    public class RosClusterProps : AlibabaCloud.SDK.ROS.CDK.Edas.IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterName: Cluster name
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkMode: Network Type. 1- classic network, 2-VPC
        /// </remarks>
        [JsiiProperty(name: "networkMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetworkMode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LogicalRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "oversoldFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OversoldFactor
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC network ID. If network selection VPC, this parameter Required
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }
    }
}
