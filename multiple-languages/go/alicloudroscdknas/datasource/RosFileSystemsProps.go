package datasource


// Properties for defining a `RosFileSystems`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
type RosFileSystemsProps struct {
	FileSystemId interface{} `field:"optional" json:"fileSystemId" yaml:"fileSystemId"`
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

