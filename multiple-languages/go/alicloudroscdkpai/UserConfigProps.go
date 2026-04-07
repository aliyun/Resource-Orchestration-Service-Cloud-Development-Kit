package alicloudroscdkpai


// Properties for defining a `UserConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
type UserConfigProps struct {
	// Property categoryName: Represents a resource attribute for a configuration category.
	CategoryName interface{} `field:"required" json:"categoryName" yaml:"categoryName"`
	// Property configKey: Represents the resource attribute of the configuration Key.
	ConfigKey interface{} `field:"required" json:"configKey" yaml:"configKey"`
	// Property configs: Represents a resource property for the configuration list.
	Configs interface{} `field:"optional" json:"configs" yaml:"configs"`
}

