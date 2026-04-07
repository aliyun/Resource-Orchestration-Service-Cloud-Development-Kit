package alicloudroscdkresourcemanager


// Properties for defining a `ResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
type ResourceGroupProps struct {
	// Property displayName: The display name of the resource group.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property name: The name of the resource group.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property tags: Tags to attach to resource group.
	//
	// Max support 20 tags to add during create resource group. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosResourceGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

