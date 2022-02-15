using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ClickHouse::DBCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-clickhouse.DBClusterProps")]
    public class DBClusterProps : AlibabaCloud.SDK.ROS.CDK.Clickhouse.IDBClusterProps
    {
        /// <summary>Property category: Series, value: Basic: Basic version.</summary>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Category
        {
            get;
            set;
        }

        /// <summary>Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.</summary>
        [JsiiProperty(name: "dbClusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterNetworkType
        {
            get;
            set;
        }

        /// <summary>Property dbClusterType: Cluster instance type, value:  Common: normal instance;</summary>
        /// <remarks>
        /// Readonly: read-only instance; Guard: disaster recovery instance
        /// </remarks>
        [JsiiProperty(name: "dbClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterType
        {
            get;
            set;
        }

        /// <summary>Property dbClusterVersion: Version, value:  19.15.2.2.</summary>
        [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterVersion
        {
            get;
            set;
        }

        /// <summary>Property dbNodeCount: Number of node groups.</summary>
        [JsiiProperty(name: "dbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbNodeCount
        {
            get;
            set;
        }

        /// <summary>Property dbNodeStorage: DBNodeStorage.</summary>
        [JsiiProperty(name: "dbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbNodeStorage
        {
            get;
            set;
        }

        /// <summary>Property dbNodeStorageType: Instance node storage type.</summary>
        /// <remarks>
        /// Valid values:  cloud_essd, cloud_efficiency.
        /// </remarks>
        [JsiiProperty(name: "dbNodeStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbNodeStorageType
        {
            get;
            set;
        }

        /// <summary>Property paymentType: PayType.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PaymentType
        {
            get;
            set;
        }

        /// <summary>Property dbClusterDescription: DBClusterDescription.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbClusterDescription
        {
            get;
            set;
        }

        /// <summary>Property encryptionKey: KMS key ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EncryptionKey
        {
            get;
            set;
        }

        /// <summary>Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "encryptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EncryptionType
        {
            get;
            set;
        }

        /// <summary>Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property usedTime: When Period is Month, the value of UsedTime is [1-9].</summary>
        /// <remarks>
        /// When Period is Year, the value of UsedTime is [1-3]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UsedTime
        {
            get;
            set;
        }

        /// <summary>Property vpcId: VpcId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VSwitchId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property zoneId: ZoneId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneId
        {
            get;
            set;
        }
    }
}
