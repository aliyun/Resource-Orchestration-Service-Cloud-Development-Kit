using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MSE::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mse.RosClusterProps")]
    public class RosClusterProps : AlibabaCloud.SDK.ROS.CDK.Mse.IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        /// </remarks>
        [JsiiProperty(name: "clusterSpecification", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterSpecification
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: cluster type
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        /// </remarks>
        [JsiiProperty(name: "clusterVersion", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceCount: instance count
        /// </remarks>
        [JsiiProperty(name: "instanceCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double InstanceCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: netType: network type, Enum: privatenet,pubnet
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NetType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskType: disk type
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DiskType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateSlbSpecification:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateSlbSpecification
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pubNetworkFlow: pub network flow
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PubNetworkFlow
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pubSlbSpecification:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pubSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PubSlbSpecification
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: vpc id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: switcher Id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }
    }
}
