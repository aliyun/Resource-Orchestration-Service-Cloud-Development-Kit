package alicloudroscdkpai


// Properties for defining a `ResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-resourcegroup
type ResourceGroupProps struct {
	// Property computingResourceProvider: The computing resource provider of the resource group.
	ComputingResourceProvider interface{} `field:"optional" json:"computingResourceProvider" yaml:"computingResourceProvider"`
	// Property description: The description of the resource group.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The name of the resource group.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property resourceType: The type of the resource group.
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	// Property tag: The tags of the resource group.
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	// Property userVpc: User VPC configuration containing network settings for the resource group.
	UserVpc interface{} `field:"optional" json:"userVpc" yaml:"userVpc"`
	// Property version: The version of the resource group.
	Version interface{} `field:"optional" json:"version" yaml:"version"`
}

