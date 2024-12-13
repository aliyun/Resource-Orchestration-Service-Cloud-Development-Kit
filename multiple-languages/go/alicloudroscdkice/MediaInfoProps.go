package alicloudroscdkice


// Properties for defining a `MediaInfo`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
type MediaInfoProps struct {
	// Property inputUrl: The URL of the media asset in another service.
	//
	// The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
	// OSS URL in one of the following formats:
	// http(s):\/\/example-bucket.oss-cn-shanghai.aliyuncs.com\/example.mp4
	// oss:\/\/example-bucket\/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
	// URL of an ApsaraVideo VOD media asset
	// vod:\/\/***20b48fb04483915d4f2cd8ac****.
	InputUrl interface{} `field:"required" json:"inputUrl" yaml:"inputUrl"`
	// Property businessType: The business type of the media asset.
	//
	// Valid values:
	// subtitles
	// watermark
	// opening
	// ending
	// general.
	BusinessType interface{} `field:"optional" json:"businessType" yaml:"businessType"`
	// Property cateId: The category ID.
	CateId interface{} `field:"optional" json:"cateId" yaml:"cateId"`
	// Property coverUrl: The thumbnail URL of the media asset.
	//
	// The value can be up to 128 bytes in length.
	// The value must be encoded in UTF-8.
	CoverUrl interface{} `field:"optional" json:"coverUrl" yaml:"coverUrl"`
	// Property description: The description of the media asset.
	//
	// The value can be up to 1,024 bytes in length.
	// The value must be encoded in UTF-8.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property mediaTags: The tags of the media asset.
	//
	// Up to 16 tags are supported.
	// Separate multiple tags with commas (,).
	// Each tag can be up to 32 bytes in length.
	// The value must be encoded in UTF-8.
	MediaTags interface{} `field:"optional" json:"mediaTags" yaml:"mediaTags"`
	// Property mediaType: The type of the media asset.
	//
	// Valid values:
	// image
	// video
	// audio
	// text
	// We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
	// .
	MediaType interface{} `field:"optional" json:"mediaType" yaml:"mediaType"`
	// Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL.
	//
	// Default value: false. Valid values:
	// - true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.
	// - false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
	Overwrite interface{} `field:"optional" json:"overwrite" yaml:"overwrite"`
	// Property referenceId: The custom ID.
	//
	// The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
	ReferenceId interface{} `field:"optional" json:"referenceId" yaml:"referenceId"`
	// Property registerConfig: The registration configurations.
	//
	// By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
	// By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
	RegisterConfig interface{} `field:"optional" json:"registerConfig" yaml:"registerConfig"`
	// Property smartTagTemplateId: The ID of the smart tagging template.
	//
	// Valid values:
	// S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
	// S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
	// S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
	// After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
	SmartTagTemplateId interface{} `field:"optional" json:"smartTagTemplateId" yaml:"smartTagTemplateId"`
	// Property title: The title.
	//
	// If you do not specify this parameter, a default title is automatically generated based on the date.
	// The value can be up to 128 bytes in length.
	// The value must be encoded in UTF-8.
	Title interface{} `field:"optional" json:"title" yaml:"title"`
	// Property userData: The user data.
	//
	// You can specify a custom callback URL.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property workflowId: The workflow ID.
	WorkflowId interface{} `field:"optional" json:"workflowId" yaml:"workflowId"`
}

