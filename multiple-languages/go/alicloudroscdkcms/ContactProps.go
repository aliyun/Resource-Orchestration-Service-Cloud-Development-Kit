package alicloudroscdkcms


// Properties for defining a `Contact`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
type ContactProps struct {
	// Property channels: undefined.
	Channels interface{} `field:"required" json:"channels" yaml:"channels"`
	// Property contactName: The name of the alarm contact.
	ContactName interface{} `field:"required" json:"contactName" yaml:"contactName"`
	// Property describe: The description of the alert contact.
	Describe interface{} `field:"required" json:"describe" yaml:"describe"`
}

