package datasource


// Properties for defining a `FileSystems`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
type FileSystemsProps struct {
	// Property fileSystemId: The ID of the file system to be created.
	FileSystemId interface{} `field:"optional" json:"fileSystemId" yaml:"fileSystemId"`
	// Property fileSystemType: File system type.
	//
	// Value:
	// -standard (default): Universal NAS
	// -extreme: extreme NAS
	// -cpfs: file storage CPFS.
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

