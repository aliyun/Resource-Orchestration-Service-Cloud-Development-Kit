package alicloudroscdkdrds


// Properties for defining a `RosDrdsDB`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsdb
type RosDrdsDBProps struct {
	DrdsInstanceId interface{} `field:"required" json:"drdsInstanceId" yaml:"drdsInstanceId"`
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	DbInstanceIsCreating interface{} `field:"optional" json:"dbInstanceIsCreating" yaml:"dbInstanceIsCreating"`
	DbInstType interface{} `field:"optional" json:"dbInstType" yaml:"dbInstType"`
	DbName interface{} `field:"optional" json:"dbName" yaml:"dbName"`
	Encode interface{} `field:"optional" json:"encode" yaml:"encode"`
	InstDbName interface{} `field:"optional" json:"instDbName" yaml:"instDbName"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	RdsInstance interface{} `field:"optional" json:"rdsInstance" yaml:"rdsInstance"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

