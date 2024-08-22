package alicloudroscdkots


type RosSearchIndex_SubFieldSchemasProperty struct {
	FieldName interface{} `field:"required" json:"fieldName" yaml:"fieldName"`
	FieldType interface{} `field:"required" json:"fieldType" yaml:"fieldType"`
	Analyzer interface{} `field:"optional" json:"analyzer" yaml:"analyzer"`
	EnableSortAndAgg interface{} `field:"optional" json:"enableSortAndAgg" yaml:"enableSortAndAgg"`
	Index interface{} `field:"optional" json:"index" yaml:"index"`
	IsArray interface{} `field:"optional" json:"isArray" yaml:"isArray"`
	Store interface{} `field:"optional" json:"store" yaml:"store"`
}

