package alicloudroscdkfc3


// Properties for defining a `RosFunctionVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functionversion
type RosFunctionVersionProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

