package alicloudroscdkots


type RosTable_SecondaryIndicesProperty struct {
	Columns interface{} `field:"required" json:"columns" yaml:"columns"`
	IndexName interface{} `field:"required" json:"indexName" yaml:"indexName"`
	PrimaryKeys interface{} `field:"required" json:"primaryKeys" yaml:"primaryKeys"`
	IndexType interface{} `field:"optional" json:"indexType" yaml:"indexType"`
}

