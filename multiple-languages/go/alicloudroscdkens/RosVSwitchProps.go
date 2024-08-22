package alicloudroscdkens


// Properties for defining a `RosVSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
type RosVSwitchProps struct {
	CidrBlock interface{} `field:"required" json:"cidrBlock" yaml:"cidrBlock"`
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	NetworkId interface{} `field:"required" json:"networkId" yaml:"networkId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	VSwitchName interface{} `field:"optional" json:"vSwitchName" yaml:"vSwitchName"`
}

