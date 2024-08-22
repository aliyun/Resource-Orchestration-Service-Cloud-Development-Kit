package alicloudroscdkpolardb


// Properties for defining a `GlobalDatabaseNetwork`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
type GlobalDatabaseNetworkProps struct {
	// Property dbClusterId: The ID of the primary cluster.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property gdnDescription: The description of the GDN.
	GdnDescription interface{} `field:"optional" json:"gdnDescription" yaml:"gdnDescription"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

