package alicloudroscdkmaxcompute


// Properties for defining a `RosTable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
type RosTableProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	IfNotExists interface{} `field:"optional" json:"ifNotExists" yaml:"ifNotExists"`
	Lifecycle interface{} `field:"optional" json:"lifecycle" yaml:"lifecycle"`
	Schema interface{} `field:"optional" json:"schema" yaml:"schema"`
	StringSchema interface{} `field:"optional" json:"stringSchema" yaml:"stringSchema"`
}

