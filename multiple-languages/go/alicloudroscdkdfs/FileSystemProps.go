package alicloudroscdkdfs


// Properties for defining a `FileSystem`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
type FileSystemProps struct {
	// Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	// Property spaceCapacity: Capacity of the file system.
	//
	// When the actual data volume reaches the file system capacity, data cannot be written.
	// Unit: GB.
	SpaceCapacity interface{} `field:"required" json:"spaceCapacity" yaml:"spaceCapacity"`
	// Property storageType: Type of storage media.
	//
	// Values:
	// STANDARD (default) : standard type.
	// PERFORMANCE: performance type.
	StorageType interface{} `field:"required" json:"storageType" yaml:"storageType"`
	// Property zoneId: zone id.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property dataRedundancyType: Redundancy mode of the file system.
	//
	// Values:
	// LRS (default) : local redundancy.
	// ZRS: in-city redundancy.
	DataRedundancyType interface{} `field:"optional" json:"dataRedundancyType" yaml:"dataRedundancyType"`
	// Property description: The description of the file system.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property fileSystemName: Name of the file system.
	//
	// The naming rules are as follows:
	// The value contains 6 to 100 characters.
	// Globally unique and cannot be an empty string.
	// The value can contain letters and digits and underscores (_).
	FileSystemName interface{} `field:"optional" json:"fileSystemName" yaml:"fileSystemName"`
	// Property partitionNumber: The reserved parameters.
	PartitionNumber interface{} `field:"optional" json:"partitionNumber" yaml:"partitionNumber"`
	// Property provisionedThroughputInMiBps: Preset handling capacity.
	//
	// Unit: MB\/sdata range: 1-5120.
	ProvisionedThroughputInMiBps interface{} `field:"optional" json:"provisionedThroughputInMiBps" yaml:"provisionedThroughputInMiBps"`
	// Property storageSetName: The reserved parameters.
	StorageSetName interface{} `field:"optional" json:"storageSetName" yaml:"storageSetName"`
	// Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.
	ThroughputMode interface{} `field:"optional" json:"throughputMode" yaml:"throughputMode"`
}

