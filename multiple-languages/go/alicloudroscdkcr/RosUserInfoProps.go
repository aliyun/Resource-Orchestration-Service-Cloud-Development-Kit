package alicloudroscdkcr


// Properties for defining a `RosUserInfo`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
type RosUserInfoProps struct {
	User interface{} `field:"required" json:"user" yaml:"user"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

