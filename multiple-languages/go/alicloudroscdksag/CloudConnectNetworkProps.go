package alicloudroscdksag


// Properties for defining a `CloudConnectNetwork`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
type CloudConnectNetworkProps struct {
	// Property description: The description of the CCN instance.
	//
	// The description must be 2 to 256 characters in length and can contain letters,
	// digits, underscores (_), and hyphens (-). The description must start with a
	// letter.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property isDefault: Whether is created by system.
	IsDefault interface{} `field:"optional" json:"isDefault" yaml:"isDefault"`
	// Property name: The name of the CCN instance.
	//
	// The name must be 2 to 128 characters in length and can contain letters, digits,
	// periods (.), underscores (_),and hyphens (-). The name must start with a letter.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCloudConnectNetwork_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

