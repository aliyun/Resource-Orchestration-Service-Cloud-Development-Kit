package alicloudroscdkcddc


// Properties for defining a `MyBase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
type MyBaseProps struct {
	// Property ecsClassList: ECS Class List.
	EcsClassList interface{} `field:"required" json:"ecsClassList" yaml:"ecsClassList"`
	// Property engine: Database type.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property payType: Payment type, currently only supports PrePaid.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property period: The period of the subscription in months.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property securityGroupId: The ID of the security group.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: Virtual switch ID.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: Availability Zone ID.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoRenew: Whether to enable auto renew.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property dedicatedHostGroupDescription: The name of the dedicated cluster.
	DedicatedHostGroupDescription interface{} `field:"optional" json:"dedicatedHostGroupDescription" yaml:"dedicatedHostGroupDescription"`
	// Property dedicatedHostGroupId: The ID of the dedicated cluster.
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	// Property ecsDeploymentSetId: The ID of the deployment set.
	EcsDeploymentSetId interface{} `field:"optional" json:"ecsDeploymentSetId" yaml:"ecsDeploymentSetId"`
	// Property ecsHostName: The host name of the ECS instance.
	EcsHostName interface{} `field:"optional" json:"ecsHostName" yaml:"ecsHostName"`
	// Property ecsInstanceName: The name of the ECS instance.
	EcsInstanceName interface{} `field:"optional" json:"ecsInstanceName" yaml:"ecsInstanceName"`
	// Property ecsUniqueSuffix: The unique suffix of the ECS instance.
	EcsUniqueSuffix interface{} `field:"optional" json:"ecsUniqueSuffix" yaml:"ecsUniqueSuffix"`
	// Property imageId: The image ID.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property internetChargeType: Network billing type.
	//
	// Value range:
	// PayByBandwidth: billed based on fixed bandwidth.
	// PayByTraffic: Pay by traffic usage.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
	//
	// Unit is Mbps(Mega bit per second).
	// Range is [0,200]. Default is 1.
	// While the property is not 0, public ip will be assigned for instance.
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	// Property keyPairName: The name of the key pair.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property osPassword: Password of created ecs instance.
	//
	// Must contain at least 3 types of special character, lower character, upper character, number.
	OsPassword interface{} `field:"optional" json:"osPassword" yaml:"osPassword"`
	// Property passwordInherit: Whether to inherit the password from the parent cluster.
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	// Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property userData: User-defined script data, the original data is up to 16KB.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property userDataInBase64: The user data of the ECS instance.
	UserDataInBase64 interface{} `field:"optional" json:"userDataInBase64" yaml:"userDataInBase64"`
}

