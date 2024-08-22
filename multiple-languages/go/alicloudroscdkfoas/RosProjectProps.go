package alicloudroscdkfoas


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-project
type RosProjectProps struct {
	DeployType interface{} `field:"required" json:"deployType" yaml:"deployType"`
	ManagerIds interface{} `field:"required" json:"managerIds" yaml:"managerIds"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	OrderId interface{} `field:"optional" json:"orderId" yaml:"orderId"`
}

