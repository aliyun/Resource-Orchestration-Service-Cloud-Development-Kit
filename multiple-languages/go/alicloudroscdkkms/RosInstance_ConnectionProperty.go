package alicloudroscdkkms


type RosInstance_ConnectionProperty struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	ZoneIds interface{} `field:"required" json:"zoneIds" yaml:"zoneIds"`
}

