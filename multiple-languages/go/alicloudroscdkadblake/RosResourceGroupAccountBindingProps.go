package alicloudroscdkadblake


// Properties for defining a `RosResourceGroupAccountBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroupaccountbinding
type RosResourceGroupAccountBindingProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
}

