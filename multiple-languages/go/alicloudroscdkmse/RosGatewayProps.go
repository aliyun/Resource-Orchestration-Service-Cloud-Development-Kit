package alicloudroscdkmse


// Properties for defining a `RosGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
type RosGatewayProps struct {
	Replica interface{} `field:"required" json:"replica" yaml:"replica"`
	Spec interface{} `field:"required" json:"spec" yaml:"spec"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	BackupVSwitchId interface{} `field:"optional" json:"backupVSwitchId" yaml:"backupVSwitchId"`
	EnterpriseSecurityGroup interface{} `field:"optional" json:"enterpriseSecurityGroup" yaml:"enterpriseSecurityGroup"`
	InternetSlbSpec interface{} `field:"optional" json:"internetSlbSpec" yaml:"internetSlbSpec"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	SlbSpec interface{} `field:"optional" json:"slbSpec" yaml:"slbSpec"`
}

