package alicloudroscdkfc3


// Properties for defining a `VpcBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-vpcbinding
type VpcBindingProps struct {
	// Property functionName: Function Name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property vpcId: VPC instance ID.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

