package alicloudroscdkcore


// Packaging modes for file assets.
type FileAssetPackaging string

const (
	// The asset source path points to a directory, which should be archived using zip and and then uploaded to Aliyun OSS bucket.
	FileAssetPackaging_ZIP_DIRECTORY FileAssetPackaging = "ZIP_DIRECTORY"
	// The asset source path points to a single file, which should be uploaded to Aliyun OSS bucket.
	FileAssetPackaging_FILE FileAssetPackaging = "FILE"
)

