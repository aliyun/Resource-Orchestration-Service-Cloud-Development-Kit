package alicloudroscdksls


// Properties for defining a `RosAnalyzeProductLog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-analyzeproductlog
type RosAnalyzeProductLogProps struct {
	CloudProduct interface{} `field:"required" json:"cloudProduct" yaml:"cloudProduct"`
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
	Overwrite interface{} `field:"optional" json:"overwrite" yaml:"overwrite"`
}

