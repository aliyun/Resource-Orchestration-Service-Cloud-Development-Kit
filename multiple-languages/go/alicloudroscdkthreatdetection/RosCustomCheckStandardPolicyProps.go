package alicloudroscdkthreatdetection


// Properties for defining a `RosCustomCheckStandardPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
type RosCustomCheckStandardPolicyProps struct {
	PolicyShowName interface{} `field:"required" json:"policyShowName" yaml:"policyShowName"`
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	DependentPolicyId interface{} `field:"optional" json:"dependentPolicyId" yaml:"dependentPolicyId"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

