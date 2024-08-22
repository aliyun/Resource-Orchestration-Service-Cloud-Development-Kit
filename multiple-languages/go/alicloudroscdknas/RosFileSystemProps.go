package alicloudroscdknas


// Properties for defining a `RosFileSystem`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
type RosFileSystemProps struct {
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	StorageType interface{} `field:"required" json:"storageType" yaml:"storageType"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	Capacity interface{} `field:"optional" json:"capacity" yaml:"capacity"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	EncryptType interface{} `field:"optional" json:"encryptType" yaml:"encryptType"`
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	Tags *[]*RosFileSystem_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

