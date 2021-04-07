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
        [JsiiProperty(name: "clusterSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ClusterSpecification
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: cluster type
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ClusterType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        /// </remarks>
        [JsiiProperty(name: "clusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ClusterVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceCount: instance count
        /// </remarks>
        [JsiiProperty(name: "instanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: netType: network type, Enum: privatenet,pubnet
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object NetType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: aclEntryList: acl entry list
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aclEntryList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? AclEntryList
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterAliasName: cluster alias name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ClusterAliasName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionType: network connect type
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ConnectionType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskCapacity:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DiskCapacity
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskType: disk type
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DiskType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateSlbSpecification:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateSlbSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PrivateSlbSpecification
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pubNetworkFlow: pub network flow
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PubNetworkFlow
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pubSlbSpecification:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pubSlbSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PubSlbSpecification
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: requestPars:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestPars", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RequestPars
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: vpc id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: switcher Id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VSwitchId
        {
            get;
            set;
        }
    }
}
