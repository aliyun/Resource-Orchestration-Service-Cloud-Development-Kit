package alicloudroscdkassemblyschema


// Artifact properties for ROS stacks.
type AliyunRosStackProperties struct {
	// A file relative to the assembly root which contains the ROS template for this stack.
	TemplateFile *string `field:"required" json:"templateFile" yaml:"templateFile"`
	// Values for ROS stack parameters that should be passed when the stack is deployed.
	Parameters *map[string]*string `field:"optional" json:"parameters" yaml:"parameters"`
	// The name to use for the ROS stack.
	StackName *string `field:"optional" json:"stackName" yaml:"stackName"`
	// Values for ROS stack tags that should be passed when the stack is deployed.
	Tags *map[string]*string `field:"optional" json:"tags" yaml:"tags"`
}

