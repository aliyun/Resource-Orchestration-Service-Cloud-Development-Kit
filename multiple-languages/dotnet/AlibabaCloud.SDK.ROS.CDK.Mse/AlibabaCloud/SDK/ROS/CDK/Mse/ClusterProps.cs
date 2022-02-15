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
        [JsiiProperty(name: "clusterSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterSpecification
        {
            get;
            set;
        }

        /// <summary>Property clusterType: cluster type.</summary>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterType
        {
            get;
            set;
        }

        /// <summary>Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.</summary>
        [JsiiProperty(name: "clusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterVersion
        {
            get;
            set;
        }

        /// <summary>Property instanceCount: instance count.</summary>
        [JsiiProperty(name: "instanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceCount
        {
            get;
            set;
        }

        /// <summary>Property netType: network type, Enum: privatenet,pubnet.</summary>
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetType
        {
            get;
            set;
        }

        /// <summary>Property aclEntryList: acl entry list.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "aclEntryList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? AclEntryList
        {
            get;
            set;
        }

        /// <summary>Property clusterAliasName: cluster alias name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "clusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClusterAliasName
        {
            get;
            set;
        }

        /// <summary>Property connectionType: network connect type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ConnectionType
        {
            get;
            set;
        }

        /// <summary>Property diskCapacity: disk capacity, unit: G.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "diskCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DiskCapacity
        {
            get;
            set;
        }

        /// <summary>Property diskType: disk type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "diskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DiskType
        {
            get;
            set;
        }

        /// <summary>Property privateSlbSpecification:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "privateSlbSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PrivateSlbSpecification
        {
            get;
            set;
        }

        /// <summary>Property pubNetworkFlow: pub network flow.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PubNetworkFlow
        {
            get;
            set;
        }

        /// <summary>Property pubSlbSpecification:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "pubSlbSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PubSlbSpecification
        {
            get;
            set;
        }

        /// <summary>Property requestPars:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "requestPars", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RequestPars
        {
            get;
            set;
        }

        /// <summary>Property vpcId: vpc id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: switcher Id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }
    }
}
