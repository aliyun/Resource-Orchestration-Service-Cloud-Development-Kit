package alicloudroscdkecs


// Properties for defining a `RosSNatEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
type RosSNatEntryProps struct {
	SNatIp interface{} `field:"required" json:"sNatIp" yaml:"sNatIp"`
	SNatTableId interface{} `field:"required" json:"sNatTableId" yaml:"sNatTableId"`
	SnatEntryName interface{} `field:"optional" json:"snatEntryName" yaml:"snatEntryName"`
	SourceCidr interface{} `field:"optional" json:"sourceCidr" yaml:"sourceCidr"`
	SourceVSwitchId interface{} `field:"optional" json:"sourceVSwitchId" yaml:"sourceVSwitchId"`
}

