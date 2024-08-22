package alicloudroscdkecs


// Properties for defining a `ImageSharePermission`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
type ImageSharePermissionProps struct {
	// Property imageId: The shared custom image ID.
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	// Property accounts: Alibaba Cloud account IDs authorized to share the image.
	Accounts interface{} `field:"optional" json:"accounts" yaml:"accounts"`
	// Property isPublic: Whether to publish or remove community mirrors.
	//
	// If this property is not set, no changes will be made to the community image.
	IsPublic interface{} `field:"optional" json:"isPublic" yaml:"isPublic"`
	// Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
	KeepPermission interface{} `field:"optional" json:"keepPermission" yaml:"keepPermission"`
}

