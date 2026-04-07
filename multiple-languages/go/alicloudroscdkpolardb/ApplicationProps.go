package alicloudroscdkpolardb


// Properties for defining a `Application`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-application
type ApplicationProps struct {
	// Property applicationType: The type of the application.
	//
	// This parameter is required.
	ApplicationType interface{} `field:"required" json:"applicationType" yaml:"applicationType"`
	// Property architecture: The architecture of the application.
	//
	// This parameter is required.
	Architecture interface{} `field:"required" json:"architecture" yaml:"architecture"`
	// Property dbClusterId: The ID of the database cluster.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property autoCreatePolarFs: Whether to auto create PolarFS.
	AutoCreatePolarFs interface{} `field:"optional" json:"autoCreatePolarFs" yaml:"autoCreatePolarFs"`
	// Property components: The list of components.
	Components interface{} `field:"optional" json:"components" yaml:"components"`
	// Property description: The description of the application.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property payType: The billing method of the cluster.
	//
	// Valid values:
	// Postpaid: pay-as-you-go
	// Prepaid: subscription.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property period: The period of the application.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property polarFsInstanceId: The ID of the PolarFS instance.
	PolarFsInstanceId interface{} `field:"optional" json:"polarFsInstanceId" yaml:"polarFsInstanceId"`
	// Property securityGroupId: The ID of the security group.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityIpList: The security IP list of the component.
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the VSwitch.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The ID of the zone.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

