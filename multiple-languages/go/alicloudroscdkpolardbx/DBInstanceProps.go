package alicloudroscdkpolardbx


// Properties for defining a `DBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
type DBInstanceProps struct {
	// Property dbNodeClass: The specification of the nodes in the instance you want to create.
	DbNodeClass interface{} `field:"required" json:"dbNodeClass" yaml:"dbNodeClass"`
	// Property dbNodeCount: The number of nodes in the instance you want to create.
	DbNodeCount interface{} `field:"required" json:"dbNodeCount" yaml:"dbNodeCount"`
	// Property engineVersion: The version of the database engine.
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	// Property primaryZone: The primary zone.
	PrimaryZone interface{} `field:"required" json:"primaryZone" yaml:"primaryZone"`
	// Property topologyType: The topology type of the instance.
	//
	// Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
	TopologyType interface{} `field:"required" json:"topologyType" yaml:"topologyType"`
	// Property vpcId: The ID of the VPC to which the instance belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the vSwitch.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property autoRenew: Specifies whether to enable auto-renewal for the instance.
	//
	// Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property dbInstanceDescription: The description of the instance.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property payType: The billing method of the instance.
	//
	// Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property period: The unit of the billing cycle for the instance.
	//
	// The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property resourceGroupId: The ID of resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property secondaryZone: The secondary zone.
	SecondaryZone interface{} `field:"optional" json:"secondaryZone" yaml:"secondaryZone"`
	// Property securityIpConfig: Instance whitelist configuration.
	SecurityIpConfig interface{} `field:"optional" json:"securityIpConfig" yaml:"securityIpConfig"`
	// Property tertiaryZone: The tertiary zone.
	TertiaryZone interface{} `field:"optional" json:"tertiaryZone" yaml:"tertiaryZone"`
	// Property usedTime: The subscription period of the instance.
	//
	// Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
}

