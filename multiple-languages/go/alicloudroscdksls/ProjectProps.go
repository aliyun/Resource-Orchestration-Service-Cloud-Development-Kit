package alicloudroscdksls


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
type ProjectProps struct {
	// Property name: Project name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property description: Project description: <>'"\ is not supported, up to 64 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property tags: Tags to attach to project.
	//
	// Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosProject_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

