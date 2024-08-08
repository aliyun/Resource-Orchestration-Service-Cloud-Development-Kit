package alicloudroscdkresourcemanager


// Properties for defining a `Folder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
type FolderProps struct {
	// Property folderName: The name of the folder.
	FolderName interface{} `field:"required" json:"folderName" yaml:"folderName"`
	// Property parentFolderId: The ID of the parent folder.
	//
	// If not set, the system default value will be used.
	ParentFolderId interface{} `field:"optional" json:"parentFolderId" yaml:"parentFolderId"`
}

