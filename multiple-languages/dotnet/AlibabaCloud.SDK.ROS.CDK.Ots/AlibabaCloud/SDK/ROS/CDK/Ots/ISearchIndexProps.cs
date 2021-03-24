using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>Properties for defining a `ALIYUN::OTS::SearchIndex`.</summary>
    [JsiiInterface(nativeType: typeof(ISearchIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.SearchIndexProps")]
    public interface ISearchIndexProps
    {
        /// <summary>Property fieldSchemas: list of field_schema.</summary>
        [JsiiProperty(name: "fieldSchemas", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FieldSchemas
        {
            get;
        }

        /// <summary>Property indexName: The index name.</summary>
        [JsiiProperty(name: "indexName", typeJson: "{\"primitive\":\"string\"}")]
        string IndexName
        {
            get;
        }

        /// <summary>Property instanceName: The name of the OTS instance in which table will locate.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceName
        {
            get;
        }

        /// <summary>Property tableName: The table name of the OTS instance.</summary>
        [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}")]
        string TableName
        {
            get;
        }

        /// <summary>Property indexSetting: Index settings.</summary>
        [JsiiProperty(name: "indexSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IndexSetting
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property indexSort: This parameter specifies how data is sorted.</summary>
        /// <remarks>
        /// By default, the data is sorted in the same way as the primary key of the table.
        /// If the search index contains NESTED fields, data is not sorted by default.
        /// </remarks>
        [JsiiProperty(name: "indexSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IndexSort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::OTS::SearchIndex`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISearchIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.SearchIndexProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.ISearchIndexProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property fieldSchemas: list of field_schema.</summary>
            [JsiiProperty(name: "fieldSchemas", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldSchemas
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property indexName: The index name.</summary>
            [JsiiProperty(name: "indexName", typeJson: "{\"primitive\":\"string\"}")]
            public string IndexName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceName: The name of the OTS instance in which table will locate.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property tableName: The table name of the OTS instance.</summary>
            [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}")]
            public string TableName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property indexSetting: Index settings.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "indexSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty\"}]}}", isOptional: true)]
            public object? IndexSetting
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property indexSort: This parameter specifies how data is sorted.</summary>
            /// <remarks>
            /// By default, the data is sorted in the same way as the primary key of the table.
            /// If the search index contains NESTED fields, data is not sorted by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "indexSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty\"}]}}", isOptional: true)]
            public object? IndexSort
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
