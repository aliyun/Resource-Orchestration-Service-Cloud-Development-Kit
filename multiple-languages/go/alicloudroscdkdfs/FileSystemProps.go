package alicloudroscdkdfs


// Properties for defining a `FileSystem`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
type FileSystemProps struct {
	// Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	// Property spaceCapacity: Capacity of the file system.
	//
	// When the actual storage data size reaches the file system capacity, no further
	// data can be written.
	// Unit: GiB.
	SpaceCapacity interface{} `field:"required" json:"spaceCapacity" yaml:"spaceCapacity"`
	// Property storageType: Type of storage media.
	//
	// Values:
	// STANDARD (default) : standard type.
	// PERFORMANCE: performance type.
	StorageType interface{} `field:"required" json:"storageType" yaml:"storageType"`
	// Property zoneId: zone id.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property dataRedundancyType: Data redundancy mode of the file system.
	//
	// Valid values:
	// - LRS (default): locally redundant storage
	// - ZRS: zone-redundant storage. When ZRS is selected, the zoneId parameter must be
	// a string containing a list of multiple zone IDs for zone-redundant deployment,
	// for example, <codeph>`zoneId1,zoneId2`.
	DataRedundancyType interface{} `field:"optional" json:"dataRedundancyType" yaml:"dataRedundancyType"`
	// Property description: The description of the file system.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property fileSystemName: File system name.
	//
	// The naming convention is as follows:
	// - Length must be 6 to 64 characters.
	// - Must be globally unique and cannot be an empty string.
	// - Supports English letters and can contain digits, underscores (_), and hyphens
	// (-).
	FileSystemName interface{} `field:"optional" json:"fileSystemName" yaml:"fileSystemName"`
	// Property partitionNumber: The reserved parameters.
	PartitionNumber interface{} `field:"optional" json:"partitionNumber" yaml:"partitionNumber"`
	// Property provisionedThroughputInMiBps: Preset throughput.
	//
	// This parameter is required when the ThroughputMode parameter
	// is set to Provisioned.
	// Unit: MB\/s
	// Valid values: 1 to 5120.
	ProvisionedThroughputInMiBps interface{} `field:"optional" json:"provisionedThroughputInMiBps" yaml:"provisionedThroughputInMiBps"`
	// Property storageSetName: The reserved parameters.
	StorageSetName interface{} `field:"optional" json:"storageSetName" yaml:"storageSetName"`
	// Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.
	ThroughputMode interface{} `field:"optional" json:"throughputMode" yaml:"throughputMode"`
}

