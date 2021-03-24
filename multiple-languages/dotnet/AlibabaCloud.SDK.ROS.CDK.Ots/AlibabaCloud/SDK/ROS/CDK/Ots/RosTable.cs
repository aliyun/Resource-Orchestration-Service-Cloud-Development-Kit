using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>A ROS template type:  `ALIYUN::OTS::Table`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ots.RosTable), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ots.RosTableProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosTable : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::OTS::Table`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosTable(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ots.IRosTableProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosTable(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosTable(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ots.RosTable))!;

        /// <remarks>
        /// <strong>Attribute</strong>: TableName: Table name
        /// </remarks>
        [JsiiProperty(name: "attrTableName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTableName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the OTS instance in which table will locate.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string InstanceName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        /// </remarks>
        [JsiiProperty(name: "primaryKey", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object PrimaryKey
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tableName: The table name of the OTS instance.
        /// </remarks>
        [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string TableName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: columns: Attribute column for table store.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ColumnsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Columns
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deviationCellVersionInSec", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? DeviationCellVersionInSec
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxVersions", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? MaxVersions
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "reservedThroughput", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty\"}]}}", isOptional: true)]
        public virtual object? ReservedThroughput
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: secondaryIndices: The secondary indices of the table.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "secondaryIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? SecondaryIndices
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeToLive", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? TimeToLive
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IColumnsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.ColumnsProperty")]
        public interface IColumnsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The column name of the column.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            string Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the column.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            string Type
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IColumnsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.ColumnsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IColumnsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The column name of the column.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
                public string Name
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The type of the column.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
                public string Type
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosTable.ColumnsProperty")]
        public class ColumnsProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IColumnsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The column name of the column.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the column.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Type
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPrimaryKeyProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty")]
        public interface IPrimaryKeyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Name for primary key.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            string Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            string Type
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IPrimaryKeyProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IPrimaryKeyProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: Name for primary key.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
                public string Name
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
                public string Type
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty")]
        public class PrimaryKeyProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IPrimaryKeyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Name for primary key.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Type
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IReservedThroughputProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty")]
        public interface IReservedThroughputProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
            /// </remarks>
            [JsiiProperty(name: "read", typeJson: "{\"primitive\":\"number\"}")]
            double Read
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
            /// </remarks>
            [JsiiProperty(name: "write", typeJson: "{\"primitive\":\"number\"}")]
            double Write
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IReservedThroughputProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IReservedThroughputProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
                /// </remarks>
                [JsiiProperty(name: "read", typeJson: "{\"primitive\":\"number\"}")]
                public double Read
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
                /// </remarks>
                [JsiiProperty(name: "write", typeJson: "{\"primitive\":\"number\"}")]
                public double Write
                {
                    get => GetInstanceProperty<double>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty")]
        public class ReservedThroughputProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.IReservedThroughputProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
            /// </remarks>
            [JsiiProperty(name: "read", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Read
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
            /// </remarks>
            [JsiiProperty(name: "write", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Write
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISecondaryIndicesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty")]
        public interface ISecondaryIndicesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columns: The columns of the index.
            /// </remarks>
            [JsiiProperty(name: "columns", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            string[] Columns
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexName: The index name.
            /// </remarks>
            [JsiiProperty(name: "indexName", typeJson: "{\"primitive\":\"string\"}")]
            string IndexName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryKeys: The primary keys of the index.
            /// </remarks>
            [JsiiProperty(name: "primaryKeys", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            string[] PrimaryKeys
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexType: The index type
            /// </remarks>
            [JsiiProperty(name: "indexType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? IndexType
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISecondaryIndicesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.ISecondaryIndicesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: columns: The columns of the index.
                /// </remarks>
                [JsiiProperty(name: "columns", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
                public string[] Columns
                {
                    get => GetInstanceProperty<string[]>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: indexName: The index name.
                /// </remarks>
                [JsiiProperty(name: "indexName", typeJson: "{\"primitive\":\"string\"}")]
                public string IndexName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: primaryKeys: The primary keys of the index.
                /// </remarks>
                [JsiiProperty(name: "primaryKeys", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
                public string[] PrimaryKeys
                {
                    get => GetInstanceProperty<string[]>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: indexType: The index type
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "indexType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? IndexType
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty")]
        public class SecondaryIndicesProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosTable.ISecondaryIndicesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columns: The columns of the index.
            /// </remarks>
            [JsiiProperty(name: "columns", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
            public string[] Columns
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexName: The index name.
            /// </remarks>
            [JsiiProperty(name: "indexName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string IndexName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryKeys: The primary keys of the index.
            /// </remarks>
            [JsiiProperty(name: "primaryKeys", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
            public string[] PrimaryKeys
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexType: The index type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "indexType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? IndexType
            {
                get;
                set;
            }
        }
    }
}
