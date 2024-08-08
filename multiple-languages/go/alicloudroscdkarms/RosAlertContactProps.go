package alicloudroscdkarms


// Properties for defining a `RosAlertContact`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
type RosAlertContactProps struct {
	ContactName interface{} `field:"required" json:"contactName" yaml:"contactName"`
	DingRobotWebhookUrl interface{} `field:"optional" json:"dingRobotWebhookUrl" yaml:"dingRobotWebhookUrl"`
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	PhoneNum interface{} `field:"optional" json:"phoneNum" yaml:"phoneNum"`
	ProxyUserId interface{} `field:"optional" json:"proxyUserId" yaml:"proxyUserId"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	SystemNoc interface{} `field:"optional" json:"systemNoc" yaml:"systemNoc"`
}

