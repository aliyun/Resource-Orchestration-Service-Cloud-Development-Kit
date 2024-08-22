package alicloudroscdkcddc


// Properties for defining a `RosMyBase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
type RosMyBaseProps struct {
	EcsClassList interface{} `field:"required" json:"ecsClassList" yaml:"ecsClassList"`
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	DedicatedHostGroupDescription interface{} `field:"optional" json:"dedicatedHostGroupDescription" yaml:"dedicatedHostGroupDescription"`
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	EcsDeploymentSetId interface{} `field:"optional" json:"ecsDeploymentSetId" yaml:"ecsDeploymentSetId"`
	EcsHostName interface{} `field:"optional" json:"ecsHostName" yaml:"ecsHostName"`
	EcsInstanceName interface{} `field:"optional" json:"ecsInstanceName" yaml:"ecsInstanceName"`
	EcsUniqueSuffix interface{} `field:"optional" json:"ecsUniqueSuffix" yaml:"ecsUniqueSuffix"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	OsPassword interface{} `field:"optional" json:"osPassword" yaml:"osPassword"`
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	UserDataInBase64 interface{} `field:"optional" json:"userDataInBase64" yaml:"userDataInBase64"`
}

