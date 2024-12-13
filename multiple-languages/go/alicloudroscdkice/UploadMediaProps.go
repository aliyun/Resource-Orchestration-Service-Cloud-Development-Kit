package alicloudroscdkice


// Properties for defining a `UploadMedia`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
type UploadMediaProps struct {
	// Property appId: The application ID.
	//
	// Default value: app-1000000.
	AppId interface{} `field:"optional" json:"appId" yaml:"appId"`
	// Property entityId: The entity ID.
	//
	// You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
	EntityId interface{} `field:"optional" json:"entityId" yaml:"entityId"`
	// Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required.
	//
	// The file type. Valid values: video, image, audio, text, and other.
	// Name: required. The file name without the extension.
	// Size: optional. The file size.
	// Ext: required. The file name extension.
	FileInfo interface{} `field:"optional" json:"fileInfo" yaml:"fileInfo"`
	// Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required.
	//
	// The value can be up to 128 characters in length.
	// The value must be encoded in UTF-8.
	// Description: optional.
	// The value can be up to 1,024 characters in length.
	// The value must be encoded in UTF-8.
	// CateId: optional.
	// Tags: optional.
	// BusinessType: required. Valid values:
	// opening or ending if Type is set to video
	// default or cover if Type is set to image
	// subtitles or font if Type is set to text
	// watermark if Type is set to material
	// general CoverURL: optional.
	// DynamicMetaData: The value is a string.
	MediaMetaData interface{} `field:"optional" json:"mediaMetaData" yaml:"mediaMetaData"`
	// Property postProcessConfig: Type = video || audio There is a post-upload processing action.
	//
	// ProcessType Value: Workflow.
	PostProcessConfig interface{} `field:"optional" json:"postProcessConfig" yaml:"postProcessConfig"`
	// Property uploadTargetConfig: The destination storage address.
	//
	// Set StorageType to oss.
	// Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
	UploadTargetConfig interface{} `field:"optional" json:"uploadTargetConfig" yaml:"uploadTargetConfig"`
	// Property userData: The user data.
	//
	// The value must be a JSON string. You can configure settings such as message callbacks.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
}

