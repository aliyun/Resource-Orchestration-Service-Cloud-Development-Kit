package alicloudroscdkedsuser


// Properties for defining a `RosUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
type RosUserProps struct {
	EndUserId interface{} `field:"required" json:"endUserId" yaml:"endUserId"`
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	OrgId interface{} `field:"optional" json:"orgId" yaml:"orgId"`
	OwnerType interface{} `field:"optional" json:"ownerType" yaml:"ownerType"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	Phone interface{} `field:"optional" json:"phone" yaml:"phone"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

