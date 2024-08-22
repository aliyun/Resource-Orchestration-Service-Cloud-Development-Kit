package datasource


// Properties for defining a `RosPolicies`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-policies
type RosPoliciesProps struct {
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	PolicyName interface{} `field:"optional" json:"policyName" yaml:"policyName"`
	PolicyType interface{} `field:"optional" json:"policyType" yaml:"policyType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RoleName interface{} `field:"optional" json:"roleName" yaml:"roleName"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

