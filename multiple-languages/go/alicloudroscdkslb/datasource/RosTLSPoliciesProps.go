package datasource


// Properties for defining a `RosTLSPolicies`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
type RosTLSPoliciesProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	TlsPolicyName interface{} `field:"optional" json:"tlsPolicyName" yaml:"tlsPolicyName"`
}

