package alicloudroscdkkafka


type RosInstance_DeployOptionProperty struct {
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	CrossZone interface{} `field:"optional" json:"crossZone" yaml:"crossZone"`
	DeployModule interface{} `field:"optional" json:"deployModule" yaml:"deployModule"`
	IsEipInner interface{} `field:"optional" json:"isEipInner" yaml:"isEipInner"`
	IsForceSelectedZones interface{} `field:"optional" json:"isForceSelectedZones" yaml:"isForceSelectedZones"`
	IsSetUserAndPassword interface{} `field:"optional" json:"isSetUserAndPassword" yaml:"isSetUserAndPassword"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Notifier interface{} `field:"optional" json:"notifier" yaml:"notifier"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	SecurityGroup interface{} `field:"optional" json:"securityGroup" yaml:"securityGroup"`
	SelectedZones interface{} `field:"optional" json:"selectedZones" yaml:"selectedZones"`
	ServiceVersion interface{} `field:"optional" json:"serviceVersion" yaml:"serviceVersion"`
	Username interface{} `field:"optional" json:"username" yaml:"username"`
	UserPhoneNum interface{} `field:"optional" json:"userPhoneNum" yaml:"userPhoneNum"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

