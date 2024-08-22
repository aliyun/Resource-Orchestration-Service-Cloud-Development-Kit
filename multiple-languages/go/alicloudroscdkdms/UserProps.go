package alicloudroscdkdms


// Properties for defining a `User`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-user
type UserProps struct {
	// Property uid: UserAliYunUid.
	Uid interface{} `field:"required" json:"uid" yaml:"uid"`
	// Property mobile: UserMobile.
	Mobile interface{} `field:"optional" json:"mobile" yaml:"mobile"`
	// Property roleNames: UserRole.
	RoleNames interface{} `field:"optional" json:"roleNames" yaml:"roleNames"`
	// Property status: UserStatus.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property tid:.
	Tid interface{} `field:"optional" json:"tid" yaml:"tid"`
	// Property userName: UserNickName.
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

