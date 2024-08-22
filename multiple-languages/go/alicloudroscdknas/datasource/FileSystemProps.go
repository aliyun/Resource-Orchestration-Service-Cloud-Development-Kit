package datasource


// Properties for defining a `FileSystem`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
type FileSystemProps struct {
	// Property fileSystemId: The ID of the file system to be created.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

