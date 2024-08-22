package alicloudroscdkcms


// Properties for defining a `SlsGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-slsgroup
type SlsGroupProps struct {
	// Property slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25.
	SlsGroupConfig interface{} `field:"required" json:"slsGroupConfig" yaml:"slsGroupConfig"`
	// Property slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter.
	SlsGroupName interface{} `field:"required" json:"slsGroupName" yaml:"slsGroupName"`
	// Property slsGroupDescription: The description of the Logstore group.
	SlsGroupDescription interface{} `field:"optional" json:"slsGroupDescription" yaml:"slsGroupDescription"`
}

