package datasource


// Properties for defining a `RosFileSystem`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
type RosFileSystemProps struct {
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

