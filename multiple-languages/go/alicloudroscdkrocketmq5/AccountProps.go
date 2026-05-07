package alicloudroscdkrocketmq5


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-account
type AccountProps struct {
	// Property instanceId: The unifed ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property password: Account password Length Limit: 3~64 characters.
	Password interface{} `field:"required" json:"password" yaml:"password"`
	// Property username: Account Name Length Limit: 3~64 characters Character limit: Supports letters a ~ z or A ~ Z, numbers 0~9, underscore (_) and dash (-).
	Username interface{} `field:"required" json:"username" yaml:"username"`
	// Property accountStatus: Account Status DISABLE: DISABLE.
	//
	// ENABLE: Enabled.
	AccountStatus interface{} `field:"optional" json:"accountStatus" yaml:"accountStatus"`
}

