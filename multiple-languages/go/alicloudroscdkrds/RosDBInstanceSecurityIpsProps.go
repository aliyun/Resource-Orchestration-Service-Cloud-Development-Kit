package alicloudroscdkrds


// Properties for defining a `RosDBInstanceSecurityIps`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstancesecurityips
type RosDBInstanceSecurityIpsProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	DbInstanceIpArrayAttribute interface{} `field:"required" json:"dbInstanceIpArrayAttribute" yaml:"dbInstanceIpArrayAttribute"`
	DbInstanceIpArrayName interface{} `field:"optional" json:"dbInstanceIpArrayName" yaml:"dbInstanceIpArrayName"`
}

