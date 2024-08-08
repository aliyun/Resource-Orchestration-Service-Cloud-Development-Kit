package alicloudroscdkarms


// Properties for defining a `AlertContact`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
type AlertContactProps struct {
	// Property contactName: The name of the alert contact that you want to create.
	ContactName interface{} `field:"required" json:"contactName" yaml:"contactName"`
	// Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
	DingRobotWebhookUrl interface{} `field:"optional" json:"dingRobotWebhookUrl" yaml:"dingRobotWebhookUrl"`
	// Property email: The email address of the contact.
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	// Property phoneNum: The phone number of the contact.
	PhoneNum interface{} `field:"optional" json:"phoneNum" yaml:"phoneNum"`
	// Property proxyUserId: Internal parameters.
	ProxyUserId interface{} `field:"optional" json:"proxyUserId" yaml:"proxyUserId"`
	// Property regionId: Region ID.
	//
	// Default to region of stack.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	// Property systemNoc: Specifies whether to receive system alerts.
	SystemNoc interface{} `field:"optional" json:"systemNoc" yaml:"systemNoc"`
}

