package alicloudroscdkclickhouse


// Properties for defining a `RosEnterpriseDBClusterAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
type RosEnterpriseDBClusterAccountProps struct {
	Account interface{} `field:"required" json:"account" yaml:"account"`
	AccountType interface{} `field:"required" json:"accountType" yaml:"accountType"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DmlAuthSetting interface{} `field:"optional" json:"dmlAuthSetting" yaml:"dmlAuthSetting"`
}

