package alicloudroscdknas


// Properties for defining a `FileSystem`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
type FileSystemProps struct {
	// Property protocolType: Type of protocol used.
	//
	// Valid values: NFS, SMB, cpfs.
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	// Property storageType: The storage type of the file System.
	//
	// Valid values:
	// Performance、Capacity(Available when the file_system_type is standard)
	// standard、advance(Available when the file_system_type is extreme)
	// advance_100、advance_200(Available when the file_system_type is cpfs).
	StorageType interface{} `field:"required" json:"storageType" yaml:"storageType"`
	// Property bandwidth: Maximum file system throughput, unit is MB\/s.
	//
	// Required and valid only when FileSystemType=cpfs.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property capacity: File system capacity, the unit is GB.
	//
	// Required and valid when FileSystemType=extreme or cpfs.
	Capacity interface{} `field:"optional" json:"capacity" yaml:"capacity"`
	// Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property deletionForce: Whether delete all mount targets on the file system and then delete file system.
	//
	// Default is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property description: File system description (space characters are not allowed).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property duration: The period of subscription in months.
	//
	// Required and valid when ChargeType is Subscription.
	// When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property encryptType: Specifies whether to encrypt data.
	//
	// You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
	// 0: specifies that no encryption is applied to data on the file system.
	// 1: specifies that encryption is applied to data on the file system.
	EncryptType interface{} `field:"optional" json:"encryptType" yaml:"encryptType"`
	// Property fileSystemType: File system type.
	//
	// Allowed values: standard(default), extreme, cpfs.
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
	// Property snapshotId: Snapshot ID.
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	// Property tags: Tags to attach to filesystem.
	//
	// Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosFileSystem_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: Vpc ID.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: VSwitch ID.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: Zone ID.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

