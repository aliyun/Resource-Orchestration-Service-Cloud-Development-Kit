using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MSE::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mse.ClusterProps")]
    public class ClusterProps : AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps
    {
        /// <summary>Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.</summary>
        [JsiiProperty(name: "clusterSpecification", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterSpecification
        {
            get;
            set;
        }

        /// <summary>Property clusterType: cluster type.</summary>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterType
        {
            get;
            set;
        }

        /// <summary>Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.</summary>
        [JsiiProperty(name: "clusterVersion", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterVersion
        {
            get;
            set;
        }

        /// <summary>Property instanceCount: instance count.</summary>
        [JsiiProperty(name: "instanceCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double InstanceCount
        {
            get;
            set;
        }

        /// <summary>Property netType: network type, Enum: privatenet,pubnet.</summary>
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NetType
        {
            get;
            set;
        }

        /// <summary>Property diskType: disk type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DiskType
        {
            get;
            set;
        }

        /// <summary>Property privateSlbSpecification:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "privateSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateSlbSpecification
        {
            get;
            set;
        }

        /// <summary>Property pubNetworkFlow: pub network flow.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PubNetworkFlow
        {
            get;
            set;
        }

        /// <summary>Property pubSlbSpecification:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "pubSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PubSlbSpecification
        {
            get;
            set;
        }

        /// <summary>Property vpcId: vpc id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: switcher Id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }
    }
}
