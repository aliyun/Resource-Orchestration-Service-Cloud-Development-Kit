package alicloudroscdksag


// Properties for defining a `CloudConnectNetwork`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
type CloudConnectNetworkProps struct {
	// Property description: The description of the CCN instance.
	//
	// The description can contain 2 to 256 characters. The description cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property isDefault: Whether is created by system.
	IsDefault interface{} `field:"optional" json:"isDefault" yaml:"isDefault"`
	// Property name: The name of the CCN instance.
	//
	// The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCloudConnectNetwork_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

