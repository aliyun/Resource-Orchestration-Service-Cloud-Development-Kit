package datasource


// Properties for defining a `RosPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policy
type RosPolicyProps struct {
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

