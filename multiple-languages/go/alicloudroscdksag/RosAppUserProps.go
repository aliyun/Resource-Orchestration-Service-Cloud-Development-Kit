package alicloudroscdksag


// Properties for defining a `RosAppUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
type RosAppUserProps struct {
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
	UserMail interface{} `field:"required" json:"userMail" yaml:"userMail"`
	ClientIp interface{} `field:"optional" json:"clientIp" yaml:"clientIp"`
	Disable interface{} `field:"optional" json:"disable" yaml:"disable"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

