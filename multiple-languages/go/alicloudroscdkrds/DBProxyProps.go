package alicloudroscdkrds


// Properties for defining a `DBProxy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbproxy
type DBProxyProps struct {
	// Property dbInstanceId: Instance ID of the DB.
	//
	// DescribeDBInstances can be called to get it.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property vpcId: The VPC ID to which the instance belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The virtual switch ID to which the instance belongs.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1. Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances.
	DbProxyInstanceNum interface{} `field:"optional" json:"dbProxyInstanceNum" yaml:"dbProxyInstanceNum"`
	// Property dbProxyInstanceType: Database proxy instance type, value: common: general-purpose agent exclusive: exclusive proxy (default).
	DbProxyInstanceType interface{} `field:"optional" json:"dbProxyInstanceType" yaml:"dbProxyInstanceType"`
	// Property dbProxyNodes: List of proxy nodes.
	DbProxyNodes interface{} `field:"optional" json:"dbProxyNodes" yaml:"dbProxyNodes"`
	// Property persistentConnectionStatus: Whether to enable connection hold.Value: Enabled: Turn on connection hold Disabled: Close connection hold illustrate Only RDS MySQL supports this parameter. When modifying the connection remains, the ConfigDBProxyService value is Modify.
	PersistentConnectionStatus interface{} `field:"optional" json:"persistentConnectionStatus" yaml:"persistentConnectionStatus"`
	// Property resourceGroupId: Resource Group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

