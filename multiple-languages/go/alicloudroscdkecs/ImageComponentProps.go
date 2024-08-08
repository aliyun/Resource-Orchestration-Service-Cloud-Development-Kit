package alicloudroscdkecs


// Properties for defining a `ImageComponent`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
type ImageComponentProps struct {
	// Property content: The content of the image component.
	//
	// The content consists of up to 127 commands.
	Content interface{} `field:"required" json:"content" yaml:"content"`
	// Property componentType: The type of the image component.
	//
	// Only image build components are supported. Set the value to Build.Default value: Build.
	ComponentType interface{} `field:"optional" json:"componentType" yaml:"componentType"`
	// Property description: The description.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The component name.
	//
	// The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/.The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
	// Note If you do not configure Name, the return value of ImageComponentId is used.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property systemType: The operating system type supported by the image component.
	//
	// Only Linux is supported. Set the value to Linux.Default value: Linux.
	SystemType interface{} `field:"optional" json:"systemType" yaml:"systemType"`
	// Property tags:.
	Tags *[]*RosImageComponent_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

