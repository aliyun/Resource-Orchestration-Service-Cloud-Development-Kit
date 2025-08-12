package alicloudroscdkmse


// Properties for defining a `RosGateway2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
type RosGateway2Props struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	AcceptLanguage interface{} `field:"optional" json:"acceptLanguage" yaml:"acceptLanguage"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	ClbNetworkType interface{} `field:"optional" json:"clbNetworkType" yaml:"clbNetworkType"`
	EnableHardwareAcceleration interface{} `field:"optional" json:"enableHardwareAcceleration" yaml:"enableHardwareAcceleration"`
	EnableSls interface{} `field:"optional" json:"enableSls" yaml:"enableSls"`
	EnableXtrace interface{} `field:"optional" json:"enableXtrace" yaml:"enableXtrace"`
	EnterpriseSecurityGroup interface{} `field:"optional" json:"enterpriseSecurityGroup" yaml:"enterpriseSecurityGroup"`
	InternetSlb interface{} `field:"optional" json:"internetSlb" yaml:"internetSlb"`
	ManagedEntryNetworkType interface{} `field:"optional" json:"managedEntryNetworkType" yaml:"managedEntryNetworkType"`
	MserVersion interface{} `field:"optional" json:"mserVersion" yaml:"mserVersion"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	NlbNetworkType interface{} `field:"optional" json:"nlbNetworkType" yaml:"nlbNetworkType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	Replica interface{} `field:"optional" json:"replica" yaml:"replica"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SlbSpec interface{} `field:"optional" json:"slbSpec" yaml:"slbSpec"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	Tags *[]*RosGateway2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	VSwitchId2 interface{} `field:"optional" json:"vSwitchId2" yaml:"vSwitchId2"`
	XtraceRatio interface{} `field:"optional" json:"xtraceRatio" yaml:"xtraceRatio"`
	ZoneInfo interface{} `field:"optional" json:"zoneInfo" yaml:"zoneInfo"`
}

