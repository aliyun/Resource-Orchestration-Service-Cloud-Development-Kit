package alicloudroscdksls


// Properties for defining a `AnalyzeProductLog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-analyzeproductlog
type AnalyzeProductLogProps struct {
	// Property cloudProduct: The cloud product name.
	CloudProduct interface{} `field:"required" json:"cloudProduct" yaml:"cloudProduct"`
	// Property logstore: The logstore name.
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	// Property project: The project name.
	Project interface{} `field:"required" json:"project" yaml:"project"`
	// Property overwrite: Whether to overwrite the existing analysis rule.
	Overwrite interface{} `field:"optional" json:"overwrite" yaml:"overwrite"`
}

