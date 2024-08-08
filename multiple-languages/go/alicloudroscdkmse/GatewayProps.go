package alicloudroscdkmse


// Properties for defining a `Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
type GatewayProps struct {
	// Property replica: Gateway Node Number.
	Replica interface{} `field:"required" json:"replica" yaml:"replica"`
	// Property spec: Gateway Node Specifications.
	Spec interface{} `field:"required" json:"spec" yaml:"spec"`
	// Property vpcId: VpcId.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: VSwitchId.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property backupVSwitchId: VSwitchId For Backup.
	BackupVSwitchId interface{} `field:"optional" json:"backupVSwitchId" yaml:"backupVSwitchId"`
	// Property enterpriseSecurityGroup:.
	EnterpriseSecurityGroup interface{} `field:"optional" json:"enterpriseSecurityGroup" yaml:"enterpriseSecurityGroup"`
	// Property internetSlbSpec:.
	InternetSlbSpec interface{} `field:"optional" json:"internetSlbSpec" yaml:"internetSlbSpec"`
	// Property name:.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property slbSpec:.
	SlbSpec interface{} `field:"optional" json:"slbSpec" yaml:"slbSpec"`
}

