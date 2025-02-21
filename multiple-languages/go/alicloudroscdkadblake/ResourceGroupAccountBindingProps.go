package alicloudroscdkadblake


// Properties for defining a `ResourceGroupAccountBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroupaccountbinding
type ResourceGroupAccountBindingProps struct {
	// Property accountName: The name of the account.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property dbClusterId: The ID of the database cluster.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property groupName: The name of the resource group.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
}

