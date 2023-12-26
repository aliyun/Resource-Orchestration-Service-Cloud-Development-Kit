using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>Properties for defining a `Table`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITableProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.TableProps")]
    public interface ITableProps
    {
        /// <summary>Property instanceName: The name of the OTS instance in which table will locate.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property primaryKey: It describes the attribute value of primary key.</summary>
        /// <remarks>
        /// The number of primary_key should not be less than one and not be more than four.
        /// </remarks>
        [JsiiProperty(name: "primaryKey", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object PrimaryKey
        {
            get;
        }

        /// <summary>Property tableName: The table name of the OTS instance.</summary>
        [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TableName
        {
            get;
        }

        /// <summary>Property columns: Attribute column for table store.</summary>
        [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ColumnsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Columns
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deviationCellVersionInSec: Maximum version deviation.</summary>
        /// <remarks>
        /// The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        /// </remarks>
        [JsiiProperty(name: "deviationCellVersionInSec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeviationCellVersionInSec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxVersions: The maximum number of versions stored in this table.</summary>
        /// <remarks>
        /// The valid value is 1-2147483647. Default to 1.
        /// </remarks>
        [JsiiProperty(name: "maxVersions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxVersions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property reservedThroughput: The initial reserved read\/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.</summary>
        [JsiiProperty(name: "reservedThroughput", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReservedThroughput
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secondaryIndices: The secondary indices of the table.</summary>
        [JsiiProperty(name: "secondaryIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryIndices
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeToLive: The retention time of data stored in this table (unit: second).</summary>
        /// <remarks>
        /// The value maximum is 2147483647 and -1 means never expired. Default to -1.
        /// </remarks>
        [JsiiProperty(name: "timeToLive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeToLive
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Table`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITableProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.TableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.ITableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceName: The name of the OTS instance in which table will locate.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property primaryKey: It describes the attribute value of primary key.</summary>
            /// <remarks>
            /// The number of primary_key should not be less than one and not be more than four.
            /// </remarks>
            [JsiiProperty(name: "primaryKey", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object PrimaryKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property tableName: The table name of the OTS instance.</summary>
            [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TableName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property columns: Attribute column for table store.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ColumnsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Columns
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deviationCellVersionInSec: Maximum version deviation.</summary>
            /// <remarks>
            /// The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deviationCellVersionInSec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeviationCellVersionInSec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxVersions: The maximum number of versions stored in this table.</summary>
            /// <remarks>
            /// The valid value is 1-2147483647. Default to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxVersions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxVersions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property reservedThroughput: The initial reserved read\/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "reservedThroughput", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty\"}]}}", isOptional: true)]
            public object? ReservedThroughput
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secondaryIndices: The secondary indices of the table.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecondaryIndices
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeToLive: The retention time of data stored in this table (unit: second).</summary>
            /// <remarks>
            /// The value maximum is 2147483647 and -1 means never expired. Default to -1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeToLive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeToLive
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
