package alicloudroscdkcms


// Properties for defining a `ContactGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
type ContactGroupProps struct {
	// Property contactGroupName: The name of the alert contact group.
	ContactGroupName interface{} `field:"required" json:"contactGroupName" yaml:"contactGroupName"`
	// Property contactNames: The name of the alert contact.
	ContactNames interface{} `field:"required" json:"contactNames" yaml:"contactNames"`
	// Property describe: The description of the alert contact group.
	Describe interface{} `field:"required" json:"describe" yaml:"describe"`
}

