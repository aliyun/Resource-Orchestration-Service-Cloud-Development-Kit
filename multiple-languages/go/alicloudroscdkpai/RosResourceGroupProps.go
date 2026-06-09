package alicloudroscdkpai


// Properties for defining a `RosResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-resourcegroup
type RosResourceGroupProps struct {
	ComputingResourceProvider interface{} `field:"optional" json:"computingResourceProvider" yaml:"computingResourceProvider"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	UserVpc interface{} `field:"optional" json:"userVpc" yaml:"userVpc"`
	Version interface{} `field:"optional" json:"version" yaml:"version"`
}

