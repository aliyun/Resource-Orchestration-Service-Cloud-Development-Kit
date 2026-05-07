package alicloudroscdkrocketmq5


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-account
type RosAccountProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
	Username interface{} `field:"required" json:"username" yaml:"username"`
	AccountStatus interface{} `field:"optional" json:"accountStatus" yaml:"accountStatus"`
}

