package alicloudroscdkresourcemanager


// Properties for defining a `RosMessageContact`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
type RosMessageContactProps struct {
	EmailAddress interface{} `field:"required" json:"emailAddress" yaml:"emailAddress"`
	MessageContactName interface{} `field:"required" json:"messageContactName" yaml:"messageContactName"`
	MessageTypes interface{} `field:"required" json:"messageTypes" yaml:"messageTypes"`
	Title interface{} `field:"required" json:"title" yaml:"title"`
	PhoneNumber interface{} `field:"optional" json:"phoneNumber" yaml:"phoneNumber"`
}

