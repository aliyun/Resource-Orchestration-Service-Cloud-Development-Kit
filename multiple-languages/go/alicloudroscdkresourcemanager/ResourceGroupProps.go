package alicloudroscdkresourcemanager


// Properties for defining a `ResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
type ResourceGroupProps struct {
	// Property displayName: The display name of the resource group.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property name: The unique identifier of the resource group.
	Name interface{} `field:"required" json:"name" yaml:"name"`
}

