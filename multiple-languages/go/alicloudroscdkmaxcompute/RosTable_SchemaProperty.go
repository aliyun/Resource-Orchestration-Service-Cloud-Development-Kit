package alicloudroscdkmaxcompute


type RosTable_SchemaProperty struct {
	Columns interface{} `field:"required" json:"columns" yaml:"columns"`
	Partitions interface{} `field:"optional" json:"partitions" yaml:"partitions"`
}

