package alicloudroscdkpolardb


// Properties for defining a `RosGlobalDatabaseNetwork`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
type RosGlobalDatabaseNetworkProps struct {
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	GdnDescription interface{} `field:"optional" json:"gdnDescription" yaml:"gdnDescription"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

