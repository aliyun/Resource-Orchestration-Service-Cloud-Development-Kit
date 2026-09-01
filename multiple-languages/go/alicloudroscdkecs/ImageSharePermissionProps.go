package alicloudroscdkecs


// Properties for defining a `ImageSharePermission`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
type ImageSharePermissionProps struct {
	// Property imageId: The ID of the custom image.
	//
	// ><notice>
	// You can no longer share images that are encrypted by using a service key. You can
	// share only images that are encrypted by using a customer managed key (CMK). If
	// you attempt to share an image that is encrypted by using a service key, the
	// request fails.
	// ><\/notice>.
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	// Property accounts: Alibaba Cloud account IDs authorized to share the image.
	Accounts interface{} `field:"optional" json:"accounts" yaml:"accounts"`
	// Property isPublic: Specifies whether to publish or unpublish the community image.
	//
	// Valid values:
	// - true: publishes the image as a community image.
	// - false: unpublishes the community image. The image becomes a custom image. If
	// the image is a custom image, this setting has no effect.
	// Default value: false.
	IsPublic interface{} `field:"optional" json:"isPublic" yaml:"isPublic"`
	// Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
	KeepPermission interface{} `field:"optional" json:"keepPermission" yaml:"keepPermission"`
}

