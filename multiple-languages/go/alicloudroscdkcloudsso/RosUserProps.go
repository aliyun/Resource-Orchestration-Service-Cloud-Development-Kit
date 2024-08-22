package alicloudroscdkcloudsso


// Properties for defining a `RosUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
type RosUserProps struct {
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	FirstName interface{} `field:"optional" json:"firstName" yaml:"firstName"`
	LastName interface{} `field:"optional" json:"lastName" yaml:"lastName"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

