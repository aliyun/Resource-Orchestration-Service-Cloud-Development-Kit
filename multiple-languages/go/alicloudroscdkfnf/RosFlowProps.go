package alicloudroscdkfnf


// Properties for defining a `RosFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-flow
type RosFlowProps struct {
	Definition interface{} `field:"required" json:"definition" yaml:"definition"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	RequestId interface{} `field:"optional" json:"requestId" yaml:"requestId"`
	RoleArn interface{} `field:"optional" json:"roleArn" yaml:"roleArn"`
}

