package alicloudroscdkcloudfw


// Properties for defining a `TrFirewallRoutePolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
type TrFirewallRoutePolicyProps struct {
	// Property firewallId: The instance ID of the VPC firewall.
	FirewallId interface{} `field:"required" json:"firewallId" yaml:"firewallId"`
	// Property policyDescription: The description of the traffic redirection instance.
	PolicyDescription interface{} `field:"required" json:"policyDescription" yaml:"policyDescription"`
	// Property policyName: The name of the traffic redirection instance.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property policyType: The type of the traffic redirection scenario of the VPC firewall.
	//
	// Valid values:
	// fullmesh: interconnected instances
	// one_to_one: instance to instance
	// end_to_end: instance to instances.
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	// Property destCandidateList: The secondary traffic redirection instances.
	DestCandidateList interface{} `field:"optional" json:"destCandidateList" yaml:"destCandidateList"`
	// Property srcCandidateList: The primary traffic redirection instances.
	SrcCandidateList interface{} `field:"optional" json:"srcCandidateList" yaml:"srcCandidateList"`
}

