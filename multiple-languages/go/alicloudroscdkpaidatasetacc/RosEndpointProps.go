package alicloudroscdkpaidatasetacc


// Properties for defining a `RosEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
type RosEndpointProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VswitchId interface{} `field:"optional" json:"vswitchId" yaml:"vswitchId"`
}

