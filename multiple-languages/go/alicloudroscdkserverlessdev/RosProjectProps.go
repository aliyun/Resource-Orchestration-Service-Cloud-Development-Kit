package alicloudroscdkserverlessdev


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-serverlessdev-project
type RosProjectProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
}

