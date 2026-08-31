package alicloudroscdkpolardb


// Properties for defining a `Application`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-application
type ApplicationProps struct {
	// Property applicationType: The type of the application.
	//
	// Valid values:
	// - supabase: Creates a managed Supabase application.
	// - raycluster: Creates a managed Ray Cluster application.
	// - polarclaw: Creates a managed PolarClaw application.
	ApplicationType interface{} `field:"required" json:"applicationType" yaml:"applicationType"`
	// Property architecture: The architecture of the application.
	//
	// This parameter is required.
	Architecture interface{} `field:"required" json:"architecture" yaml:"architecture"`
	// Property dbClusterId: The ID of the database cluster.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property autoCreatePolarFs: Specifies whether to automatically create a PolarFS cold storage instance.
	//
	// Valid
	// values:
	// - false (default): Does not automatically create the instance.
	// - true: Automatically creates the instance.
	AutoCreatePolarFs interface{} `field:"optional" json:"autoCreatePolarFs" yaml:"autoCreatePolarFs"`
	// Property components: A list of custom child components for the application.
	Components interface{} `field:"optional" json:"components" yaml:"components"`
	// Property description: The description of the application.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property payType: The billing method of the cluster.
	//
	// Valid values:
	// Postpaid: pay-as-you-go
	// Prepaid: subscription.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property period: The subscription period type.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property polarFsInstanceId: The ID of the PolarFileSystem (PolarFS) cold storage or high-performance instance.
	//
	// This parameter is empty by default. If you specify this parameter, the
	// corresponding storage is mounted to the application.
	// This feature is currently supported only by the following applications:
	// - supabase
	// - raycluster.
	PolarFsInstanceId interface{} `field:"optional" json:"polarFsInstanceId" yaml:"polarFsInstanceId"`
	// Property securityGroupId: The ID of the security group.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityIpList: The IP address whitelist.
	//
	// If you do not specify this parameter, the default value
	// `127.0.0.1` is used.
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vSwitch.
	//
	// The default value is the current vSwitch in the primary zone of the
	// instance.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone.
	//
	// The default value is the primary zone of the instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

