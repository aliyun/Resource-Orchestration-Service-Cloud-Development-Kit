package alicloudroscdkcloudfw


// Properties for defining a `RosVpcFirewallControlPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
type RosVpcFirewallControlPolicyProps struct {
	AclAction interface{} `field:"required" json:"aclAction" yaml:"aclAction"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	Destination interface{} `field:"required" json:"destination" yaml:"destination"`
	DestinationType interface{} `field:"required" json:"destinationType" yaml:"destinationType"`
	NewOrder interface{} `field:"required" json:"newOrder" yaml:"newOrder"`
	Proto interface{} `field:"required" json:"proto" yaml:"proto"`
	Source interface{} `field:"required" json:"source" yaml:"source"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	VpcFirewallId interface{} `field:"required" json:"vpcFirewallId" yaml:"vpcFirewallId"`
	ApplicationName interface{} `field:"optional" json:"applicationName" yaml:"applicationName"`
	ApplicationNameList interface{} `field:"optional" json:"applicationNameList" yaml:"applicationNameList"`
	DestPort interface{} `field:"optional" json:"destPort" yaml:"destPort"`
	DestPortGroup interface{} `field:"optional" json:"destPortGroup" yaml:"destPortGroup"`
	DestPortType interface{} `field:"optional" json:"destPortType" yaml:"destPortType"`
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	MemberUid interface{} `field:"optional" json:"memberUid" yaml:"memberUid"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	Release interface{} `field:"optional" json:"release" yaml:"release"`
	RepeatDays interface{} `field:"optional" json:"repeatDays" yaml:"repeatDays"`
	RepeatEndTime interface{} `field:"optional" json:"repeatEndTime" yaml:"repeatEndTime"`
	RepeatStartTime interface{} `field:"optional" json:"repeatStartTime" yaml:"repeatStartTime"`
	RepeatType interface{} `field:"optional" json:"repeatType" yaml:"repeatType"`
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
}

