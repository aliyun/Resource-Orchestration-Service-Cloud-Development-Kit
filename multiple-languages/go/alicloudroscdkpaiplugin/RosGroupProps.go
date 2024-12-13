package alicloudroscdkpaiplugin


// Properties for defining a `RosGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
type RosGroupProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Source interface{} `field:"required" json:"source" yaml:"source"`
	Algorithm interface{} `field:"optional" json:"algorithm" yaml:"algorithm"`
	Column interface{} `field:"optional" json:"column" yaml:"column"`
	Filter interface{} `field:"optional" json:"filter" yaml:"filter"`
	InferenceJobId interface{} `field:"optional" json:"inferenceJobId" yaml:"inferenceJobId"`
	PhoneNumber interface{} `field:"optional" json:"phoneNumber" yaml:"phoneNumber"`
	Project interface{} `field:"optional" json:"project" yaml:"project"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	Table interface{} `field:"optional" json:"table" yaml:"table"`
	Text interface{} `field:"optional" json:"text" yaml:"text"`
	Uri interface{} `field:"optional" json:"uri" yaml:"uri"`
}

