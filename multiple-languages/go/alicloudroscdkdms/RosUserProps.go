package alicloudroscdkdms


// Properties for defining a `RosUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-user
type RosUserProps struct {
	Uid interface{} `field:"required" json:"uid" yaml:"uid"`
	Mobile interface{} `field:"optional" json:"mobile" yaml:"mobile"`
	RoleNames interface{} `field:"optional" json:"roleNames" yaml:"roleNames"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	Tid interface{} `field:"optional" json:"tid" yaml:"tid"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

