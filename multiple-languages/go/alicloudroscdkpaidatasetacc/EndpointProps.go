package alicloudroscdkpaidatasetacc


// Properties for defining a `Endpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
type EndpointProps struct {
	// Property instanceId: The ID of the acceleration instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property name: The name of the Mount Target.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property type: The network type of the Mount Target.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vswitchId: The ID of the vSwitch.
	VswitchId interface{} `field:"optional" json:"vswitchId" yaml:"vswitchId"`
}

