using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ADB::DBCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-adb.RosDBClusterProps")]
    public class RosDBClusterProps : AlibabaCloud.SDK.ROS.CDK.Adb.IRosDBClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterCategory: The edition of the cluster.
        /// Valid values when the cluster is in reserved mode:
        /// Basic
        /// Cluster
        /// When the cluster is in elastic mode, set the value to MixedStorage.
        /// </remarks>
        [JsiiProperty(name: "dbClusterCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterCategory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterVersion: The version of the cluster. Set the value to 3.0.
        /// </remarks>
        [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mode: The mode of the cluster. Valid values:
        /// Reserver: the reserved mode
        /// Flexible: the elastic mode
        /// </remarks>
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Mode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: The billing method of the cluster. Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PayType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: computeResource: The computing resource of the cluster. This parameter is required in elastic mode.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "computeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ComputeResource
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
        /// Basic Edition: T8, T16, T32, and T52
        /// Cluster Edition: C8 and C32
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbClusterClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbClusterClass
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterDescription: The description of the cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbClusterDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNodeGroupCount: The number of node groups. This parameter is required in reserved mode. Valid values:
        /// T8, T16, T32, and T52: 1
        /// C8 and C32: 1 to 128
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbNodeGroupCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbNodeGroupCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
        /// T8: 100 to 500
        /// T16 and T32: 100 to 2000
        /// T52: 100 to 4000
        /// C8: 100 to 1000
        /// C32: 100 to 8000
        /// Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbNodeStorage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: elasticIoResource: Elastic IO Unit
        /// Note the flexible mode cluster will use this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "elasticIoResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ElasticIoResource
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: executorCount: ExecutorCount
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "executorCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ExecutorCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        /// Valid values when the Period parameter is set to Year: 1, 2, and 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
        /// Year: subscription on a yearly basis
        /// Month: subscription on a monthly basis
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PeriodType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-adb.RosDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Adb.RosDBCluster.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneId
        {
            get;
            set;
        }
    }
}
