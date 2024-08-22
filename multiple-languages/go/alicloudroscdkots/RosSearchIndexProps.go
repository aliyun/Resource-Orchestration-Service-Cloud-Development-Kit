package alicloudroscdkots


// Properties for defining a `RosSearchIndex`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-searchindex
type RosSearchIndexProps struct {
	FieldSchemas interface{} `field:"required" json:"fieldSchemas" yaml:"fieldSchemas"`
	IndexName interface{} `field:"required" json:"indexName" yaml:"indexName"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	TableName interface{} `field:"required" json:"tableName" yaml:"tableName"`
	IndexSetting interface{} `field:"optional" json:"indexSetting" yaml:"indexSetting"`
	IndexSort interface{} `field:"optional" json:"indexSort" yaml:"indexSort"`
}

