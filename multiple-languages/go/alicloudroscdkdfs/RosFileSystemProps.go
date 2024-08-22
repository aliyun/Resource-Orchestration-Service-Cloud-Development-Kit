package alicloudroscdkdfs


// Properties for defining a `RosFileSystem`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
type RosFileSystemProps struct {
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	SpaceCapacity interface{} `field:"required" json:"spaceCapacity" yaml:"spaceCapacity"`
	StorageType interface{} `field:"required" json:"storageType" yaml:"storageType"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	DataRedundancyType interface{} `field:"optional" json:"dataRedundancyType" yaml:"dataRedundancyType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	FileSystemName interface{} `field:"optional" json:"fileSystemName" yaml:"fileSystemName"`
	PartitionNumber interface{} `field:"optional" json:"partitionNumber" yaml:"partitionNumber"`
	ProvisionedThroughputInMiBps interface{} `field:"optional" json:"provisionedThroughputInMiBps" yaml:"provisionedThroughputInMiBps"`
	StorageSetName interface{} `field:"optional" json:"storageSetName" yaml:"storageSetName"`
	ThroughputMode interface{} `field:"optional" json:"throughputMode" yaml:"throughputMode"`
}

