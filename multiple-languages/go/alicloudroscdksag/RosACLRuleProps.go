package alicloudroscdksag


// Properties for defining a `RosACLRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule
type RosACLRuleProps struct {
	AclId interface{} `field:"required" json:"aclId" yaml:"aclId"`
	DestCidr interface{} `field:"required" json:"destCidr" yaml:"destCidr"`
	DestPortRange interface{} `field:"required" json:"destPortRange" yaml:"destPortRange"`
	Direction interface{} `field:"required" json:"direction" yaml:"direction"`
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	Policy interface{} `field:"required" json:"policy" yaml:"policy"`
	SourceCidr interface{} `field:"required" json:"sourceCidr" yaml:"sourceCidr"`
	SourcePortRange interface{} `field:"required" json:"sourcePortRange" yaml:"sourcePortRange"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DpiGroupIds interface{} `field:"optional" json:"dpiGroupIds" yaml:"dpiGroupIds"`
	DpiSignatureIds interface{} `field:"optional" json:"dpiSignatureIds" yaml:"dpiSignatureIds"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

