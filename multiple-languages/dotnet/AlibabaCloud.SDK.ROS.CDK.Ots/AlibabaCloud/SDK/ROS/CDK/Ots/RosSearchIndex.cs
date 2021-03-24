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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ots.RosSearchIndex))!;

        /// <remarks>
        /// <strong>Attribute</strong>: IndexName: Index name.
        /// </remarks>
        [JsiiProperty(name: "attrIndexName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIndexName
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
        /// <strong>Property</strong>: fieldSchemas: list of field_schema.
        /// </remarks>
        [JsiiProperty(name: "fieldSchemas", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object FieldSchemas
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: indexName: The index name.
        /// </remarks>
        [JsiiProperty(name: "indexName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string IndexName
        {
            get => GetInstanceProperty<string>()!;
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
        /// <strong>Property</strong>: tableName: The table name of the OTS instance.
        /// </remarks>
        [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string TableName
        {
            get => GetInstanceProperty<string>()!;
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
        [JsiiInterface(nativeType: typeof(IFieldSortProperty), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty")]
        public interface IFieldSortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldName: Sorted field name.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"primitive\":\"string\"}")]
            string FieldName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
            /// </remarks>
            [JsiiProperty(name: "sortMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? SortMode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            /// </remarks>
            [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? SortOrder
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
                [JsiiProperty(name: "fieldName", typeJson: "{\"primitive\":\"string\"}")]
                public string FieldName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sortMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? SortMode
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? SortOrder
                {
                    get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "fieldName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string FieldName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SortMode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SortOrder
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
            [JsiiProperty(name: "fieldName", typeJson: "{\"primitive\":\"string\"}")]
            string FieldName
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
            [JsiiProperty(name: "sortMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? SortMode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order
            /// </remarks>
            [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? SortOrder
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
                [JsiiProperty(name: "fieldName", typeJson: "{\"primitive\":\"string\"}")]
                public string FieldName
                {
                    get => GetInstanceProperty<string>()!;
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
                [JsiiProperty(name: "sortMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? SortMode
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? SortOrder
                {
                    get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "fieldName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string FieldName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: points: The parameter of GeoDistanceSort
            /// </remarks>
            [JsiiProperty(name: "points", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Points
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortMode: Sorting method when there are multiple values in the field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SortMode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The sort order can be sorted in ascending or descending order
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SortOrder
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
            [JsiiProperty(name: "routingFields", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
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
            [JsiiProperty(name: "sorters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
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
            [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? SortOrder
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
                [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? SortOrder
                {
                    get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SortOrder
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
            [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? SortOrder
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
                [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? SortOrder
                {
                    get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "sortOrder", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SortOrder
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
            [JsiiProperty(name: "fieldSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? FieldSort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: geoDistanceSort: You can use GeoDistanceSort to sort the query result based on distances of geographical locations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "geoDistanceSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? GeoDistanceSort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryKeySort: You can use PrimaryKeySort to sort the query result based on the order of primary key columns.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "primaryKeySort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty\"}]}}", isOptional: true, isOverride: true)]
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
            [JsiiProperty(name: "scoreSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? ScoreSort
            {
                get;
                set;
            }
        }
    }
}
