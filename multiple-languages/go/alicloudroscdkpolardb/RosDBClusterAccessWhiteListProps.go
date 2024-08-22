package alicloudroscdkpolardb


// Properties for defining a `RosDBClusterAccessWhiteList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
type RosDBClusterAccessWhiteListProps struct {
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	SecurityIps interface{} `field:"required" json:"securityIps" yaml:"securityIps"`
	DbClusterIpArrayName interface{} `field:"optional" json:"dbClusterIpArrayName" yaml:"dbClusterIpArrayName"`
}

