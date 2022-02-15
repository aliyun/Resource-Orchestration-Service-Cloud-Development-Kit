using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>A ROS template type:  `ALIYUN::OTS::SearchIndex`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndexProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosSearchIndex : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::OTS::SearchIndex`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosSearchIndex(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ots.IRosSearchIndexProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSearchIndex(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSearchIndex(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex))!;

        /// <remarks>
        /// <strong>Attribute</strong>: IndexName: Index name.
        /// </remarks>
        [JsiiProperty(name: "attrIndexName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrIndexName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
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
        /// <strong>Property</strong>: fieldSchemas: list of field_schema.
        /// </remarks>
        [JsiiProperty(name: "fieldSchemas", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.FieldSchemasProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object FieldSchemas
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: indexName: The index name.
        /// </remarks>
        [JsiiProperty(name: "indexName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object IndexName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the OTS instance in which table will locate.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object InstanceName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tableName: The table name of the OTS instance.
        /// </remarks>
        [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object TableName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: indexSetting: Index settings
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "indexSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty\"}]}}", isOptional: true)]
        public virtual object? IndexSetting
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: indexSort: This parameter specifies how data is sorted.
        /// By default, the data is sorted in the same way as the primary key of the table.
        /// If the search index contains NESTED fields, data is not sorted by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "indexSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty\"}]}}", isOptional: true)]
        public virtual object? IndexSort
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IFieldSchemasProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.FieldSchemasProperty")]
        public interface IFieldSchemasProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldName: This parameter specifies the name of the field (column) to index.
            /// The field can be a primary key column or an attribute column.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object FieldName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: fieldType: This parameter specifies the type of the field. Type: FieldType.
            /// For more information, see the description of field types for a search index.
            /// </remarks>
            [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object FieldType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: analyzer: This parameter specifies the tokenizer.
            /// You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
            /// </remarks>
            [JsiiProperty(name: "analyzer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Analyzer
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
            /// </remarks>
            [JsiiProperty(name: "enableSortAndAgg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnableSortAndAgg
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: index: This parameter specifies whether to index the column.
            /// The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
            /// </remarks>
            [JsiiProperty(name: "index", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Index
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: isArray: This parameter specifies whether the column is an array.
            /// A value of true indicates that the column is an array. Data written to the column must be a JSON array.
            /// Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
            /// </remarks>
            [JsiiProperty(name: "isArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IsArray
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: store: This parameter specifies whether to store the values of the field in the search index.
            /// A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
            /// This configuration optimizes query performance.
            /// </remarks>
            [JsiiProperty(name: "store", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Store
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: subFieldSchemas: This parameter specifies the list of field schemas for subfields.
            /// If the column is a NESTED column, you must specify this parameter to configure the index types of subcolumns in the NESTED column.
            /// </remarks>
            [JsiiProperty(name: "subFieldSchemas", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SubFieldSchemas
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IFieldSchemasProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.FieldSchemasProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IFieldSchemasProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: fieldName: This parameter specifies the name of the field (column) to index.
                /// The field can be a primary key column or an attribute column.
                /// </remarks>
                [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object FieldName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: fieldType: This parameter specifies the type of the field. Type: FieldType.
                /// For more information, see the description of field types for a search index.
                /// </remarks>
                [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object FieldType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: analyzer: This parameter specifies the tokenizer.
                /// You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "analyzer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Analyzer
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableSortAndAgg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EnableSortAndAgg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: index: This parameter specifies whether to index the column.
                /// The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "index", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Index
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: isArray: This parameter specifies whether the column is an array.
                /// A value of true indicates that the column is an array. Data written to the column must be a JSON array.
                /// Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "isArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IsArray
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: store: This parameter specifies whether to store the values of the field in the search index.
                /// A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
                /// This configuration optimizes query performance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "store", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Store
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: subFieldSchemas: This parameter specifies the list of field schemas for subfields.
                /// If the column is a NESTED column, you must specify this parameter to configure the index types of subcolumns in the NESTED column.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "subFieldSchemas", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? SubFieldSchemas
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosSearchIndex.FieldSchemasProperty")]
        public class FieldSchemasProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IFieldSchemasProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldName: This parameter specifies the name of the field (column) to index.
            /// The field can be a primary key column or an attribute column.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: fieldType: This parameter specifies the type of the field. Type: FieldType.
            /// For more information, see the description of field types for a search index.
            /// </remarks>
            [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: analyzer: This parameter specifies the tokenizer.
            /// You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "analyzer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Analyzer
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSortAndAgg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSortAndAgg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: index: This parameter specifies whether to index the column.
            /// The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "index", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Index
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: isArray: This parameter specifies whether the column is an array.
            /// A value of true indicates that the column is an array. Data written to the column must be a JSON array.
            /// Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsArray
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: store: This parameter specifies whether to store the values of the field in the search index.
            /// A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
            /// This configuration optimizes query performance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "store", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Store
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: subFieldSchemas: This parameter specifies the list of field schemas for subfields.
            /// If the column is a NESTED column, you must specify this parameter to configure the index types of subcolumns in the NESTED column.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "subFieldSchemas", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SubFieldSchemas
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IFieldSortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty")]
        public interface IFieldSortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldName: Sorted field name.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object FieldName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
            /// </remarks>
            [JsiiProperty(name: "sortMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SortMode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            /// </remarks>
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SortOrder
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IFieldSortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IFieldSortProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: fieldName: Sorted field name.
                /// </remarks>
                [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object FieldName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sortMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SortMode
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SortOrder
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty")]
        public class FieldSortProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IFieldSortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldName: Sorted field name.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortMode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortOrder
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IGeoDistanceSortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty")]
        public interface IGeoDistanceSortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldName: Sorted field name.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object FieldName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: points: The parameter of GeoDistanceSort
            /// </remarks>
            [JsiiProperty(name: "points", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Points
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
            /// </remarks>
            [JsiiProperty(name: "sortMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SortMode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order
            /// </remarks>
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SortOrder
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IGeoDistanceSortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IGeoDistanceSortProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: fieldName: Sorted field name.
                /// </remarks>
                [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object FieldName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: points: The parameter of GeoDistanceSort
                /// </remarks>
                [JsiiProperty(name: "points", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Points
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sortMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SortMode
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SortOrder
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty")]
        public class GeoDistanceSortProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IGeoDistanceSortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldName: Sorted field name.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: points: The parameter of GeoDistanceSort
            /// </remarks>
            [JsiiProperty(name: "points", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Points
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortMode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortOrder
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IIndexSettingProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty")]
        public interface IIndexSettingProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: routingFields: You can use this advanced feature to customize routing fields.
            /// You can specify some primary key columns as routing fields.
            /// Tablestore distributes data that is written to a search index to different partitions based on the specified routing fields.
            /// The data with the same routing field values is distributed to the same data partition.
            /// </remarks>
            [JsiiProperty(name: "routingFields", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RoutingFields
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IIndexSettingProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IIndexSettingProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: routingFields: You can use this advanced feature to customize routing fields.
                /// You can specify some primary key columns as routing fields.
                /// Tablestore distributes data that is written to a search index to different partitions based on the specified routing fields.
                /// The data with the same routing field values is distributed to the same data partition.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "routingFields", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RoutingFields
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty")]
        public class IndexSettingProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IIndexSettingProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: routingFields: You can use this advanced feature to customize routing fields.
            /// You can specify some primary key columns as routing fields.
            /// Tablestore distributes data that is written to a search index to different partitions based on the specified routing fields.
            /// The data with the same routing field values is distributed to the same data partition.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routingFields", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RoutingFields
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IIndexSortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty")]
        public interface IIndexSortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: sorters: This parameter specifies the sorting methods.  Valid values:
            /// - PrimaryKeySort: The index is sorted by primary key in ascending or descending order.
            /// - FieldSort: The index is sorted by a specified column in ascending or descending order.
            /// </remarks>
            [JsiiProperty(name: "sorters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object Sorters
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IIndexSortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IIndexSortProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: sorters: This parameter specifies the sorting methods.  Valid values:
                /// - PrimaryKeySort: The index is sorted by primary key in ascending or descending order.
                /// - FieldSort: The index is sorted by a specified column in ascending or descending order.
                /// </remarks>
                [JsiiProperty(name: "sorters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object Sorters
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty")]
        public class IndexSortProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IIndexSortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: sorters: This parameter specifies the sorting methods.  Valid values:
            /// - PrimaryKeySort: The index is sorted by primary key in ascending or descending order.
            /// - FieldSort: The index is sorted by a specified column in ascending or descending order.
            /// </remarks>
            [JsiiProperty(name: "sorters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Sorters
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPrimaryKeySortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty")]
        public interface IPrimaryKeySortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            /// </remarks>
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SortOrder
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPrimaryKeySortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IPrimaryKeySortProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SortOrder
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty")]
        public class PrimaryKeySortProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IPrimaryKeySortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortOrder
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IScoreSortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty")]
        public interface IScoreSortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order
            /// </remarks>
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SortOrder
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IScoreSortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IScoreSortProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SortOrder
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty")]
        public class ScoreSortProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.IScoreSortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortOrder
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISortersProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty")]
        public interface ISortersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldSort: Sort by field value.
            /// Only fields that are indexed and have sorting and statistical aggregation functions enabled can be pre-sorted
            /// </remarks>
            [JsiiProperty(name: "fieldSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FieldSort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: geoDistanceSort: You can use GeoDistanceSort to sort the query result based on distances of geographical locations.
            /// </remarks>
            [JsiiProperty(name: "geoDistanceSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? GeoDistanceSort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryKeySort: You can use PrimaryKeySort to sort the query result based on the order of primary key columns.
            /// </remarks>
            [JsiiProperty(name: "primaryKeySort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PrimaryKeySort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: scoreSort: You can use ScoreSort to sort the query result by keyword relevance score.
            /// ScoreSort is applicable to scenarios such as full-text indexing.
            /// Note Note that you must set ScoreSort to sort the query result by keyword relevance score. Otherwise, the query result is sorted based on the value of the IndexSort field.
            /// </remarks>
            [JsiiProperty(name: "scoreSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ScoreSort
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISortersProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.ISortersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: fieldSort: Sort by field value.
                /// Only fields that are indexed and have sorting and statistical aggregation functions enabled can be pre-sorted
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fieldSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty\"}]}}", isOptional: true)]
                public object? FieldSort
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: geoDistanceSort: You can use GeoDistanceSort to sort the query result based on distances of geographical locations.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "geoDistanceSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty\"}]}}", isOptional: true)]
                public object? GeoDistanceSort
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: primaryKeySort: You can use PrimaryKeySort to sort the query result based on the order of primary key columns.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "primaryKeySort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty\"}]}}", isOptional: true)]
                public object? PrimaryKeySort
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: scoreSort: You can use ScoreSort to sort the query result by keyword relevance score.
                /// ScoreSort is applicable to scenarios such as full-text indexing.
                /// Note Note that you must set ScoreSort to sort the query result by keyword relevance score. Otherwise, the query result is sorted based on the value of the IndexSort field.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "scoreSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty\"}]}}", isOptional: true)]
                public object? ScoreSort
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty")]
        public class SortersProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.ISortersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldSort: Sort by field value.
            /// Only fields that are indexed and have sorting and statistical aggregation functions enabled can be pre-sorted
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fieldSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty\"}]}}", isOptional: true)]
            public object? FieldSort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: geoDistanceSort: You can use GeoDistanceSort to sort the query result based on distances of geographical locations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "geoDistanceSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty\"}]}}", isOptional: true)]
            public object? GeoDistanceSort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryKeySort: You can use PrimaryKeySort to sort the query result based on the order of primary key columns.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "primaryKeySort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty\"}]}}", isOptional: true)]
            public object? PrimaryKeySort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: scoreSort: You can use ScoreSort to sort the query result by keyword relevance score.
            /// ScoreSort is applicable to scenarios such as full-text indexing.
            /// Note Note that you must set ScoreSort to sort the query result by keyword relevance score. Otherwise, the query result is sorted based on the value of the IndexSort field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scoreSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty\"}]}}", isOptional: true)]
            public object? ScoreSort
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISubFieldSchemasProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty")]
        public interface ISubFieldSchemasProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldName: This parameter specifies the name of the field (column) to index.
            /// The field can be a primary key column or an attribute column.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object FieldName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: fieldType: This parameter specifies the type of the field. Type: FieldType.
            /// For more information, see the description of field types for a search index.
            /// </remarks>
            [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object FieldType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: analyzer: This parameter specifies the tokenizer.
            /// You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
            /// </remarks>
            [JsiiProperty(name: "analyzer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Analyzer
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
            /// </remarks>
            [JsiiProperty(name: "enableSortAndAgg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnableSortAndAgg
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: index: This parameter specifies whether to index the column.
            /// The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
            /// </remarks>
            [JsiiProperty(name: "index", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Index
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: isArray: This parameter specifies whether the column is an array.
            /// A value of true indicates that the column is an array. Data written to the column must be a JSON array.
            /// Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
            /// </remarks>
            [JsiiProperty(name: "isArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IsArray
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: store: This parameter specifies whether to store the values of the field in the search index.
            /// A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
            /// This configuration optimizes query performance.
            /// </remarks>
            [JsiiProperty(name: "store", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Store
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISubFieldSchemasProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.ISubFieldSchemasProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: fieldName: This parameter specifies the name of the field (column) to index.
                /// The field can be a primary key column or an attribute column.
                /// </remarks>
                [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object FieldName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: fieldType: This parameter specifies the type of the field. Type: FieldType.
                /// For more information, see the description of field types for a search index.
                /// </remarks>
                [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object FieldType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: analyzer: This parameter specifies the tokenizer.
                /// You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "analyzer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Analyzer
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableSortAndAgg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EnableSortAndAgg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: index: This parameter specifies whether to index the column.
                /// The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "index", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Index
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: isArray: This parameter specifies whether the column is an array.
                /// A value of true indicates that the column is an array. Data written to the column must be a JSON array.
                /// Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "isArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IsArray
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: store: This parameter specifies whether to store the values of the field in the search index.
                /// A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
                /// This configuration optimizes query performance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "store", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Store
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty")]
        public class SubFieldSchemasProperty : AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex.ISubFieldSchemasProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldName: This parameter specifies the name of the field (column) to index.
            /// The field can be a primary key column or an attribute column.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: fieldType: This parameter specifies the type of the field. Type: FieldType.
            /// For more information, see the description of field types for a search index.
            /// </remarks>
            [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: analyzer: This parameter specifies the tokenizer.
            /// You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "analyzer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Analyzer
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSortAndAgg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSortAndAgg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: index: This parameter specifies whether to index the column.
            /// The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "index", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Index
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: isArray: This parameter specifies whether the column is an array.
            /// A value of true indicates that the column is an array. Data written to the column must be a JSON array.
            /// Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsArray
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: store: This parameter specifies whether to store the values of the field in the search index.
            /// A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
            /// This configuration optimizes query performance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "store", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Store
            {
                get;
                set;
            }
        }
    }
}
