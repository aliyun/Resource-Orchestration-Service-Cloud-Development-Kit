package alicloudroscdkresourcemanager


// Properties for defining a `RosFolder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
type RosFolderProps struct {
	FolderName interface{} `field:"required" json:"folderName" yaml:"folderName"`
	ParentFolderId interface{} `field:"optional" json:"parentFolderId" yaml:"parentFolderId"`
}

