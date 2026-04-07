package alicloudroscdkhbr


// Properties for defining a `RosPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
type RosPolicyProps struct {
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	Rules interface{} `field:"required" json:"rules" yaml:"rules"`
	PolicyDescription interface{} `field:"optional" json:"policyDescription" yaml:"policyDescription"`
}

