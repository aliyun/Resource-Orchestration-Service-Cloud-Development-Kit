package alicloudroscdkrds


// Properties for defining a `DBInstanceSecurityIps`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstancesecurityips
type DBInstanceSecurityIpsProps struct {
	// Property dbInstanceId: Database instance id to update security ips.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property dbInstanceIpArrayAttribute: Security ips to add or remove.
	DbInstanceIpArrayAttribute interface{} `field:"required" json:"dbInstanceIpArrayAttribute" yaml:"dbInstanceIpArrayAttribute"`
	// Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'.
	//
	// Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
	DbInstanceIpArrayName interface{} `field:"optional" json:"dbInstanceIpArrayName" yaml:"dbInstanceIpArrayName"`
}

