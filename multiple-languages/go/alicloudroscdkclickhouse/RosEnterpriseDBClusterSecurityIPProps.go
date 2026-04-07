package alicloudroscdkclickhouse


// Properties for defining a `RosEnterpriseDBClusterSecurityIP`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
type RosEnterpriseDBClusterSecurityIPProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	SecurityIpList interface{} `field:"required" json:"securityIpList" yaml:"securityIpList"`
}

