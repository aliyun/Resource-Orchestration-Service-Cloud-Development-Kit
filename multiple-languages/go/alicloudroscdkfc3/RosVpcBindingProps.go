package alicloudroscdkfc3


// Properties for defining a `RosVpcBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-vpcbinding
type RosVpcBindingProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

