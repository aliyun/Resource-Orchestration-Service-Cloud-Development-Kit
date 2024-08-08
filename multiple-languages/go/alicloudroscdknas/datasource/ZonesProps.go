package datasource


// Properties for defining a `Zones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
type ZonesProps struct {
	// Property fileSystemType: The type of the file system.
	//
	// Default value: all. Valid values:
	// standard: General-purpose NAS file system
	// extreme: Extreme NAS file system
	// cpfs: CPFS file system.
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

