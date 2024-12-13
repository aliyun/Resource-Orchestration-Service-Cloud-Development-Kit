package alicloudroscdkddos


// Properties for defining a `RosPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
type RosPolicyProps struct {
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ActionType interface{} `field:"optional" json:"actionType" yaml:"actionType"`
	BlackIpList interface{} `field:"optional" json:"blackIpList" yaml:"blackIpList"`
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	WhiteIpList interface{} `field:"optional" json:"whiteIpList" yaml:"whiteIpList"`
}

