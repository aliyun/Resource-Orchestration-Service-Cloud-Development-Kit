package alicloudroscdkrds


// Properties for defining a `RosPostgresExtensions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-postgresextensions
type RosPostgresExtensionsProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	Extensions interface{} `field:"optional" json:"extensions" yaml:"extensions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RiskConfirmed interface{} `field:"optional" json:"riskConfirmed" yaml:"riskConfirmed"`
	SourceDatabase interface{} `field:"optional" json:"sourceDatabase" yaml:"sourceDatabase"`
}

