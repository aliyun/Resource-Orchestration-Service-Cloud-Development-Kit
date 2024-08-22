package alicloudroscdknas


// Properties for defining a `Fileset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
type FilesetProps struct {
	// Property fileSystemId: File system ID.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property fileSystemPath: The absolute path of Fileset to be created.
	//
	// The parent catalog of specified the directory must be a directory in the file system.
	// The length is 2 to 1024 characters.
	// Specify the directory must start with positive (\/).
	FileSystemPath interface{} `field:"required" json:"fileSystemPath" yaml:"fileSystemPath"`
	// Property description: Fileset description information.
	//
	// The length is 2 to 128 English or Chinese characters.
	// Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
	// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

