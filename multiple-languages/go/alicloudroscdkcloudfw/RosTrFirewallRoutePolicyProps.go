package alicloudroscdkcloudfw


// Properties for defining a `RosTrFirewallRoutePolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
type RosTrFirewallRoutePolicyProps struct {
	FirewallId interface{} `field:"required" json:"firewallId" yaml:"firewallId"`
	PolicyDescription interface{} `field:"required" json:"policyDescription" yaml:"policyDescription"`
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	DestCandidateList interface{} `field:"optional" json:"destCandidateList" yaml:"destCandidateList"`
	SrcCandidateList interface{} `field:"optional" json:"srcCandidateList" yaml:"srcCandidateList"`
}

