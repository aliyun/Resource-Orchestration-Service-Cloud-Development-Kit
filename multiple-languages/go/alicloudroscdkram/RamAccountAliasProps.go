package alicloudroscdkram


// Properties for defining a `RamAccountAlias`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
type RamAccountAliasProps struct {
	// Property accountAlias: The alias of the Alibaba Cloud account.
	//
	// The alias must be 1 to 50 characters in length, and can contain lowercase letters,
	// digits, hyphens (-), periods (.) and underscores (_).
	// Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
	// hyphen (-) and cannot have two consecutive hyphens (-).
	AccountAlias interface{} `field:"required" json:"accountAlias" yaml:"accountAlias"`
}

