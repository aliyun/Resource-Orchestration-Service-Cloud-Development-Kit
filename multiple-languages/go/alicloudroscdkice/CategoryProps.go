package alicloudroscdkice


// Properties for defining a `Category`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
type CategoryProps struct {
	// Property cateName: The category name.
	//
	// The value can be up to 64 bytes in length.
	// The value must be encoded in UTF-8.
	CateName interface{} `field:"required" json:"cateName" yaml:"cateName"`
	// Property parentId: The ID of the parent category.
	ParentId interface{} `field:"optional" json:"parentId" yaml:"parentId"`
	// Property type: The type of the category.
	//
	// Valid values:
	// default: audio, video, and image files. This is the default value.
	// material: short video materials.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

