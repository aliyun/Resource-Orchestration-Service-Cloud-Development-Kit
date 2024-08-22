package alicloudroscdkvpc


// Properties for defining a `SnatEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
type SnatEntryProps struct {
	// Property snatIp: The public IP address.
	//
	// Separate multiple EIPs with commas.
	SnatIp interface{} `field:"required" json:"snatIp" yaml:"snatIp"`
	// Property snatTableId: The ID of the SNAT table.
	SnatTableId interface{} `field:"required" json:"snatTableId" yaml:"snatTableId"`
	// Property eipAffinity: Specifies whether to enable EIP affinity.
	//
	// Valid values:
	// 0: no
	// 1: yes
	// If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
	EipAffinity interface{} `field:"optional" json:"eipAffinity" yaml:"eipAffinity"`
	// Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
	SnatEntryName interface{} `field:"optional" json:"snatEntryName" yaml:"snatEntryName"`
	// Property sourceCidr: Specifies the network segment of the switch.
	//
	// For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
	SourceCidr interface{} `field:"optional" json:"sourceCidr" yaml:"sourceCidr"`
	// Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
	SourceVSwitchIds interface{} `field:"optional" json:"sourceVSwitchIds" yaml:"sourceVSwitchIds"`
}

