package alicloudroscdkpolardb


// Properties for defining a `RosApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-application
type RosApplicationProps struct {
	ApplicationType interface{} `field:"required" json:"applicationType" yaml:"applicationType"`
	Architecture interface{} `field:"required" json:"architecture" yaml:"architecture"`
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	AutoCreatePolarFs interface{} `field:"optional" json:"autoCreatePolarFs" yaml:"autoCreatePolarFs"`
	Components interface{} `field:"optional" json:"components" yaml:"components"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PolarFsInstanceId interface{} `field:"optional" json:"polarFsInstanceId" yaml:"polarFsInstanceId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

