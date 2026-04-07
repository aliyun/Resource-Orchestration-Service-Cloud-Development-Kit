package alicloudroscdkedsuser


// Properties for defining a `RosUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
type RosUserProps struct {
	EndUserId interface{} `field:"required" json:"endUserId" yaml:"endUserId"`
	AutoLockTime interface{} `field:"optional" json:"autoLockTime" yaml:"autoLockTime"`
	BusinessChannel interface{} `field:"optional" json:"businessChannel" yaml:"businessChannel"`
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	IsLocalAdmin interface{} `field:"optional" json:"isLocalAdmin" yaml:"isLocalAdmin"`
	OrgId interface{} `field:"optional" json:"orgId" yaml:"orgId"`
	OwnerType interface{} `field:"optional" json:"ownerType" yaml:"ownerType"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	PasswordExpireDays interface{} `field:"optional" json:"passwordExpireDays" yaml:"passwordExpireDays"`
	Phone interface{} `field:"optional" json:"phone" yaml:"phone"`
	RealNickName interface{} `field:"optional" json:"realNickName" yaml:"realNickName"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

