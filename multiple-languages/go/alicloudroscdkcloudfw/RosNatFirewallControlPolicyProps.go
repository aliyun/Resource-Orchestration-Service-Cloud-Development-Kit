package alicloudroscdkcloudfw


// Properties for defining a `RosNatFirewallControlPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
type RosNatFirewallControlPolicyProps struct {
	AclAction interface{} `field:"required" json:"aclAction" yaml:"aclAction"`
	ApplicationNameList interface{} `field:"required" json:"applicationNameList" yaml:"applicationNameList"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	Destination interface{} `field:"required" json:"destination" yaml:"destination"`
	DestinationType interface{} `field:"required" json:"destinationType" yaml:"destinationType"`
	Direction interface{} `field:"required" json:"direction" yaml:"direction"`
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	NewOrder interface{} `field:"required" json:"newOrder" yaml:"newOrder"`
	Proto interface{} `field:"required" json:"proto" yaml:"proto"`
	Source interface{} `field:"required" json:"source" yaml:"source"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	DestPort interface{} `field:"optional" json:"destPort" yaml:"destPort"`
	DestPortGroup interface{} `field:"optional" json:"destPortGroup" yaml:"destPortGroup"`
	DestPortType interface{} `field:"optional" json:"destPortType" yaml:"destPortType"`
	DomainResolveType interface{} `field:"optional" json:"domainResolveType" yaml:"domainResolveType"`
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	Release interface{} `field:"optional" json:"release" yaml:"release"`
	RepeatDays interface{} `field:"optional" json:"repeatDays" yaml:"repeatDays"`
	RepeatEndTime interface{} `field:"optional" json:"repeatEndTime" yaml:"repeatEndTime"`
	RepeatStartTime interface{} `field:"optional" json:"repeatStartTime" yaml:"repeatStartTime"`
	RepeatType interface{} `field:"optional" json:"repeatType" yaml:"repeatType"`
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
}

