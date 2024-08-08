package alicloudroscdkecs


// Properties for defining a `Command`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-command
type CommandProps struct {
	// Property type: The type of command.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property commandContent: The content of command.
	//
	// Content requires base64 encoding. Maximum size support 16KB.
	CommandContent interface{} `field:"optional" json:"commandContent" yaml:"commandContent"`
	// Property contentEncoding: The encoding mode of script content (CommandContent).
	//
	// Valid values (case insensitive):
	// PlainText: The script content is not encoded, and transmitted in plaintext.
	// Base64: base64-encoded.
	// Default value: Base64. If the specified value of this parameter is invalid, Base64 is used by default.
	ContentEncoding interface{} `field:"optional" json:"contentEncoding" yaml:"contentEncoding"`
	// Property description: The description of command.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enableParameter: Specifies whether the script contains custom parameters.
	//
	// Default value: false.
	EnableParameter interface{} `field:"optional" json:"enableParameter" yaml:"enableParameter"`
	// Property name: The name of command.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to command.
	//
	// Max support 20 tags to add during create command. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCommand_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property timeout: Total timeout when the command is executed in the instance.
	//
	// Input the time unit as second. Default is 60s.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	// Property workingDir: The path where command will be executed in the instance.
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
}

