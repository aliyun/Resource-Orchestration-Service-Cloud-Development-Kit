package alicloudroscdkcr


// Properties for defining a `UserInfo`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
type UserInfoProps struct {
	// Property user: User info.
	//
	// If user exists, will update user info.
	User interface{} `field:"required" json:"user" yaml:"user"`
	// Property instanceId: The ID of enterprise edition ACR instance.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

