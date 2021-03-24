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
        [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double ClusterType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkMode: Network Type. 1- classic network, 2-VPC
        /// </remarks>
        [JsiiProperty(name: "networkMode", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double NetworkMode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LogicalRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "oversoldFactor", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? OversoldFactor
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC network ID. If network selection VPC, this parameter Required
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }
    }
}
