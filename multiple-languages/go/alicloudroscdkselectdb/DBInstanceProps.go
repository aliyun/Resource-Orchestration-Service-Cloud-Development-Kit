package alicloudroscdkselectdb


// Properties for defining a `DBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
type DBInstanceProps struct {
	// Property cacheSize: Reserve cache size.
	CacheSize interface{} `field:"required" json:"cacheSize" yaml:"cacheSize"`
	// Property chargeType: The paid type of instance.Value: Postpaid: Postpaid (pay per quantity). Prepaid: Prepaid (year and monthly).
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	// Property dbInstanceClass: The class of the DB instance.
	//
	// Call DescribeAllDBInstanceClass API to check the latest class list.
	DbInstanceClass interface{} `field:"required" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	// Property engineVersion: Database version.
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	// Property vpcId: VPC id.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: Switch ID.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: Availability Zone ID.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	// Property connectionString: Database connection address.
	ConnectionString interface{} `field:"optional" json:"connectionString" yaml:"connectionString"`
	// Property dbInstanceDescription: Example Notes Information.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property engine: Database type, default value is selectdb.
	Engine interface{} `field:"optional" json:"engine" yaml:"engine"`
	// Property period: Specify the prepaid cluster as annual or monthly type.Value description: Year: Year-end type. Month: Month type. Note This parameter takes effect and is required only if ChargeType is Prepaid.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property resourceGroupId: Resource Group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityIpList: The default IP whitelist of the instance.
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property tags: The list of tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags.
	Tags *[]*RosDBInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property usedTime: Specifies the purchase duration of the prepaid instance.Value description: When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral). When Period is Month, the UsedTime value range is: 1~9 (integral). Note This parameter takes effect and is required only if ChargeType is Prepaid.
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
}

