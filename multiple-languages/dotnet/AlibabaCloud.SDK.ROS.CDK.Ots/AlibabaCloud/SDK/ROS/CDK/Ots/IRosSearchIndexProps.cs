using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>Properties for defining a `ALIYUN::OTS::SearchIndex`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSearchIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndexProps")]
    public interface IRosSearchIndexProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fieldSchemas: list of field_schema.
        /// </remarks>
        [JsiiProperty(name: "fieldSchemas", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FieldSchemas
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
        /// <strong>Property</strong>: instanceName: The name of the OTS instance in which table will locate.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: tableName: The table name of the OTS instance.
        /// </remarks>
        [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}")]
        string TableName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: indexSetting: Index settings
        /// </remarks>
        [JsiiProperty(name: "indexSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IndexSetting
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: indexSort: This parameter specifies how data is sorted. 
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
        [JsiiTypeProxy(nativeType: typeof(IRosSearchIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosSearchIndexProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.IRosSearchIndexProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fieldSchemas: list of field_schema.
            /// </remarks>
            [JsiiProperty(name: "fieldSchemas", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldSchemas
            {
                get => GetInstanceProperty<object>()!;
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
            /// <strong>Property</strong>: instanceName: The name of the OTS instance in which table will locate.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: tableName: The table name of the OTS instance.
            /// </remarks>
            [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}")]
            public string TableName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexSetting: Index settings
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "indexSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty\"}]}}", isOptional: true)]
            public object? IndexSetting
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: indexSort: This parameter specifies how data is sorted. 
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
