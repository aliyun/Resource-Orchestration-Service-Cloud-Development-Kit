package alicloudroscdkvpc


type RosNetworkAcl_IngressAclEntriesProperty struct {
	Policy interface{} `field:"required" json:"policy" yaml:"policy"`
	Port interface{} `field:"required" json:"port" yaml:"port"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EntryType interface{} `field:"optional" json:"entryType" yaml:"entryType"`
	NetworkAclEntryName interface{} `field:"optional" json:"networkAclEntryName" yaml:"networkAclEntryName"`
	SourceCidrIp interface{} `field:"optional" json:"sourceCidrIp" yaml:"sourceCidrIp"`
}

