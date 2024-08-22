package alicloudroscdkots


// Properties for defining a `SearchIndex`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-searchindex
type SearchIndexProps struct {
	// Property fieldSchemas: list of field_schema.
	FieldSchemas interface{} `field:"required" json:"fieldSchemas" yaml:"fieldSchemas"`
	// Property indexName: The index name.
	IndexName interface{} `field:"required" json:"indexName" yaml:"indexName"`
	// Property instanceName: The name of the OTS instance in which table will locate.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property tableName: The table name of the OTS instance.
	TableName interface{} `field:"required" json:"tableName" yaml:"tableName"`
	// Property indexSetting: Index settings.
	IndexSetting interface{} `field:"optional" json:"indexSetting" yaml:"indexSetting"`
	// Property indexSort: This parameter specifies how data is sorted.
	//
	// By default, the data is sorted in the same way as the primary key of the table.
	// If the search index contains NESTED fields, data is not sorted by default.
	IndexSort interface{} `field:"optional" json:"indexSort" yaml:"indexSort"`
}

