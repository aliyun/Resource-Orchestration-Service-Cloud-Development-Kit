using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OTS::SearchIndex`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.SearchIndexProps")]
    public class SearchIndexProps : AlibabaCloud.SDK.ROS.CDK.Ots.ISearchIndexProps
    {
        /// <summary>Property fieldSchemas: list of field_schema.</summary>
        [JsiiProperty(name: "fieldSchemas", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object FieldSchemas
        {
            get;
            set;
        }

        /// <summary>Property indexName: The index name.</summary>
        [JsiiProperty(name: "indexName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string IndexName
        {
            get;
            set;
        }

        /// <summary>Property instanceName: The name of the OTS instance in which table will locate.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceName
        {
            get;
            set;
        }

        /// <summary>Property tableName: The table name of the OTS instance.</summary>
        [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TableName
        {
            get;
            set;
        }

        /// <summary>Property indexSetting: Index settings.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "indexSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? IndexSetting
        {
            get;
            set;
        }

        /// <summary>Property indexSort: This parameter specifies how data is sorted.</summary>
        /// <remarks>
        /// By default, the data is sorted in the same way as the primary key of the table.
        /// If the search index contains NESTED fields, data is not sorted by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "indexSort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? IndexSort
        {
            get;
            set;
        }
    }
}
