package alicloudroscdkvpc


// Properties for defining a `RosSnatEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
type RosSnatEntryProps struct {
	SnatIp interface{} `field:"required" json:"snatIp" yaml:"snatIp"`
	SnatTableId interface{} `field:"required" json:"snatTableId" yaml:"snatTableId"`
	EipAffinity interface{} `field:"optional" json:"eipAffinity" yaml:"eipAffinity"`
	SnatEntryName interface{} `field:"optional" json:"snatEntryName" yaml:"snatEntryName"`
	SourceCidr interface{} `field:"optional" json:"sourceCidr" yaml:"sourceCidr"`
	SourceVSwitchIds interface{} `field:"optional" json:"sourceVSwitchIds" yaml:"sourceVSwitchIds"`
}

