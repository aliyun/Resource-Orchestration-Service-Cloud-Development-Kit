package alicloudroscdkclickhouse


// Properties for defining a `EnterpriseDBClusterSecurityIP`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
type EnterpriseDBClusterSecurityIPProps struct {
	// Property dbInstanceId: The cluster ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property groupName: The name of the whitelist whose settings you want to modify.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property securityIpList: The IP addresses and CIDR blocks in the whitelist.
	SecurityIpList interface{} `field:"required" json:"securityIpList" yaml:"securityIpList"`
}

