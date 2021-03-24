using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OTS::Table`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosTableProps")]
    public class RosTableProps : AlibabaCloud.SDK.ROS.CDK.Ots.IRosTableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the OTS instance in which table will locate.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        /// </remarks>
        [JsiiProperty(name: "primaryKey", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object PrimaryKey
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tableName: The table name of the OTS instance.
        /// </remarks>
        [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TableName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: columns: Attribute column for table store.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ColumnsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Columns
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deviationCellVersionInSec", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? DeviationCellVersionInSec
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxVersions", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MaxVersions
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "reservedThroughput", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? ReservedThroughput
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: secondaryIndices: The secondary indices of the table.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "secondaryIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? SecondaryIndices
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeToLive", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? TimeToLive
        {
            get;
            set;
        }
    }
}
