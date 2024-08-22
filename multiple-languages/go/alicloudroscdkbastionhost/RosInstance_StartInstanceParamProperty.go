package alicloudroscdkbastionhost


type RosInstance_StartInstanceParamProperty struct {
	SecurityGroupIds interface{} `field:"required" json:"securityGroupIds" yaml:"securityGroupIds"`
	VswitchId interface{} `field:"required" json:"vswitchId" yaml:"vswitchId"`
}

