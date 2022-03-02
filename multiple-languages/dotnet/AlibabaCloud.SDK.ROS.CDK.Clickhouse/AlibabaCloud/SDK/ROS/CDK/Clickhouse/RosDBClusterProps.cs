using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ClickHouse::DBCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-clickhouse.RosDBClusterProps")]
    public class RosDBClusterProps : AlibabaCloud.SDK.ROS.CDK.Clickhouse.IRosDBClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: category: Series, value: Basic: Basic version
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Category
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterNetworkType: Network type of the cluster instance, value: VPC
        /// </remarks>
        [JsiiProperty(name: "dbClusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterNetworkType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
        /// </remarks>
        [JsiiProperty(name: "dbClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterVersion: Version, value:  19.15.2.2
        /// </remarks>
        [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNodeCount: Number of node groups
        /// </remarks>
        [JsiiProperty(name: "dbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbNodeCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNodeStorage: DBNodeStorage
        /// </remarks>
        [JsiiProperty(name: "dbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbNodeStorage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
        /// </remarks>
        [JsiiProperty(name: "dbNodeStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbNodeStorageType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: paymentType: PayType
        /// </remarks>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PaymentType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterDescription: DBClusterDescription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbClusterDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: encryptionKey: KMS key ID
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EncryptionKey
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encryptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EncryptionType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: usedTime: When Period is Month, the value of UsedTime is [1-9].  When Period is Year, the value of UsedTime is [1-3]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UsedTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VpcId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitchId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: ZoneId
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
