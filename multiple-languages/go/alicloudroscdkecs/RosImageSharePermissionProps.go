package alicloudroscdkecs


// Properties for defining a `RosImageSharePermission`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
type RosImageSharePermissionProps struct {
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	Accounts interface{} `field:"optional" json:"accounts" yaml:"accounts"`
	IsPublic interface{} `field:"optional" json:"isPublic" yaml:"isPublic"`
	KeepPermission interface{} `field:"optional" json:"keepPermission" yaml:"keepPermission"`
}

