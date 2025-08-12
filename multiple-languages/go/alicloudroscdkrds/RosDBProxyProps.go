package alicloudroscdkrds


// Properties for defining a `RosDBProxy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbproxy
type RosDBProxyProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	DbProxyInstanceNum interface{} `field:"optional" json:"dbProxyInstanceNum" yaml:"dbProxyInstanceNum"`
	DbProxyInstanceType interface{} `field:"optional" json:"dbProxyInstanceType" yaml:"dbProxyInstanceType"`
	DbProxyNodes interface{} `field:"optional" json:"dbProxyNodes" yaml:"dbProxyNodes"`
	PersistentConnectionStatus interface{} `field:"optional" json:"persistentConnectionStatus" yaml:"persistentConnectionStatus"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

