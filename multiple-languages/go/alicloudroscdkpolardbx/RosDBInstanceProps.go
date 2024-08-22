package alicloudroscdkpolardbx


// Properties for defining a `RosDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
type RosDBInstanceProps struct {
	DbNodeClass interface{} `field:"required" json:"dbNodeClass" yaml:"dbNodeClass"`
	DbNodeCount interface{} `field:"required" json:"dbNodeCount" yaml:"dbNodeCount"`
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	PrimaryZone interface{} `field:"required" json:"primaryZone" yaml:"primaryZone"`
	TopologyType interface{} `field:"required" json:"topologyType" yaml:"topologyType"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecondaryZone interface{} `field:"optional" json:"secondaryZone" yaml:"secondaryZone"`
	SecurityIpConfig interface{} `field:"optional" json:"securityIpConfig" yaml:"securityIpConfig"`
	TertiaryZone interface{} `field:"optional" json:"tertiaryZone" yaml:"tertiaryZone"`
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
}

