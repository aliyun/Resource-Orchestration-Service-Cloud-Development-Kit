package alicloudroscdkmaxcompute


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
type ProjectProps struct {
	// Property name: The name of the project.
	//
	// It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property comment: The comments of project.
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	// Property defaultQuota: Default Computing Resource Group.
	DefaultQuota interface{} `field:"optional" json:"defaultQuota" yaml:"defaultQuota"`
	// Property ipWhiteList: IP whitelist.
	IpWhiteList interface{} `field:"optional" json:"ipWhiteList" yaml:"ipWhiteList"`
	// Property properties: Project base attributes.
	Properties interface{} `field:"optional" json:"properties" yaml:"properties"`
}

