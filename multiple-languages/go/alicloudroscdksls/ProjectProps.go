package alicloudroscdksls


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
type ProjectProps struct {
	// Property name: Project name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property dataRedundancyType: Disaster recovery type.LRS: Local redundant storage.ZRS: Local redundant storage.
	DataRedundancyType interface{} `field:"optional" json:"dataRedundancyType" yaml:"dataRedundancyType"`
	// Property description: Project description: <>'"\ is not supported, up to 64 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property resourceGroupId: The ID of the resource group to which the sls project belongs.
	//
	// If not provided, the project belongs to the default resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to project.
	//
	// Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosProject_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

