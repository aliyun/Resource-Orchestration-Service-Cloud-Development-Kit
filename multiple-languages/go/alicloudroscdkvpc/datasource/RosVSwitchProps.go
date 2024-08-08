package datasource


// Properties for defining a `RosVSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
type RosVSwitchProps struct {
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

