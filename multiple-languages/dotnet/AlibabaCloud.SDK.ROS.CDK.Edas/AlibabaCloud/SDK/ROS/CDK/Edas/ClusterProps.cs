using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.ClusterProps")]
    public class ClusterProps : AlibabaCloud.SDK.ROS.CDK.Edas.IClusterProps
    {
        /// <summary>Property clusterName: Cluster name.</summary>
        [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterName
        {
            get;
            set;
        }

        /// <summary>Property clusterType: Cluster type.</summary>
        /// <remarks>
        /// 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double ClusterType
        {
            get;
            set;
        }

        /// <summary>Property networkMode: Network Type.</summary>
        /// <remarks>
        /// 1- classic network, 2-VPC
        /// </remarks>
        [JsiiProperty(name: "networkMode", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double NetworkMode
        {
            get;
            set;
        }

        /// <summary>Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).</summary>
        [JsiiOptional]
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LogicalRegionId
        {
            get;
            set;
        }

        /// <summary>Property oversoldFactor: Docker CPU cluster oversold.</summary>
        /// <remarks>
        /// Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "oversoldFactor", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? OversoldFactor
        {
            get;
            set;
        }

        /// <summary>Property vpcId: VPC network ID.</summary>
        /// <remarks>
        /// If network selection VPC, this parameter Required
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
