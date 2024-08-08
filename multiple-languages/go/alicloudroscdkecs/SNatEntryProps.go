package alicloudroscdkecs


// Properties for defining a `SNatEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
type SNatEntryProps struct {
	// Property sNatIp: Source IP, must belongs to bandwidth package internet IP.
	SNatIp interface{} `field:"required" json:"sNatIp" yaml:"sNatIp"`
	// Property sNatTableId: Create SNAT entry in specified SNAT table.
	SNatTableId interface{} `field:"required" json:"sNatTableId" yaml:"sNatTableId"`
	// Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
	SnatEntryName interface{} `field:"optional" json:"snatEntryName" yaml:"snatEntryName"`
	// Property sourceCidr: Specifies the network segment of the switch.
	//
	// For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
	SourceCidr interface{} `field:"optional" json:"sourceCidr" yaml:"sourceCidr"`
	// Property sourceVSwitchId: Allow which switch can access internet.
	SourceVSwitchId interface{} `field:"optional" json:"sourceVSwitchId" yaml:"sourceVSwitchId"`
}

