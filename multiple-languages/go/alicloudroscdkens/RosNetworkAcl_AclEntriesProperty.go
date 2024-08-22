package alicloudroscdkens


type RosNetworkAcl_AclEntriesProperty struct {
	CidrBlock interface{} `field:"required" json:"cidrBlock" yaml:"cidrBlock"`
	Direction interface{} `field:"required" json:"direction" yaml:"direction"`
	Policy interface{} `field:"required" json:"policy" yaml:"policy"`
	PortRange interface{} `field:"required" json:"portRange" yaml:"portRange"`
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	NetworkAclEntryName interface{} `field:"optional" json:"networkAclEntryName" yaml:"networkAclEntryName"`
}

