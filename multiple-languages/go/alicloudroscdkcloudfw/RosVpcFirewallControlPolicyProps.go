package alicloudroscdkcloudfw


// Properties for defining a `RosVpcFirewallControlPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
type RosVpcFirewallControlPolicyProps struct {
	AclAction interface{} `field:"required" json:"aclAction" yaml:"aclAction"`
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	Destination interface{} `field:"required" json:"destination" yaml:"destination"`
	DestinationType interface{} `field:"required" json:"destinationType" yaml:"destinationType"`
	NewOrder interface{} `field:"required" json:"newOrder" yaml:"newOrder"`
	Proto interface{} `field:"required" json:"proto" yaml:"proto"`
	Source interface{} `field:"required" json:"source" yaml:"source"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	VpcFirewallId interface{} `field:"required" json:"vpcFirewallId" yaml:"vpcFirewallId"`
	DestPort interface{} `field:"optional" json:"destPort" yaml:"destPort"`
	DestPortGroup interface{} `field:"optional" json:"destPortGroup" yaml:"destPortGroup"`
	DestPortType interface{} `field:"optional" json:"destPortType" yaml:"destPortType"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}

