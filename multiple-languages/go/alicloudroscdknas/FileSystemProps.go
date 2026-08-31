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
	// Performance、Capacity、Premium(Available when the file_system_type is standard)
	// standard、advance(Available when the file_system_type is extreme)
	// advance_100、advance_200(Available when the file_system_type is cpfs).
	StorageType interface{} `field:"required" json:"storageType" yaml:"storageType"`
	// Property bandwidth: Maximum file system throughput, unit is MB\/s.
	//
	// Required and valid only when FileSystemType=cpfs.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property capacity: Specify the capacity of the file system.
	//
	// Unit: GiB. This parameter is required
	// and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
	// Specify a value based on the specifications on the following buy page:
	// *   Extreme NAS (Pay-as-you-go)
	// *   CPFS (Pay-as-you-go).
	Capacity interface{} `field:"optional" json:"capacity" yaml:"capacity"`
	// Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property deletionForce: Whether delete all mount targets on the file system and then delete file system.
	//
	// Default is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property description: The description of the file system.
	//
	// Limits:
	// *   Must be 2 to 128 characters in length.
	// *   Must start with a letter but cannot start with `http:\/\/` or `https:\/\/`.
	// *   Can contain digits, colons (:), underscores (_), and hyphens (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property duration: The period of subscription in months.
	//
	// Required and valid when ChargeType is Subscription.
	// When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property encryptType: Specifies whether to encrypt data in the file system.
	//
	// You can use the keys that are managed by Key Management Service (KMS) to encrypt
	// data in a file system. When you read and write the encrypted data, the data is
	// automatically decrypted.
	// Valid values:
	// *   0 (default): The data in the file system is not encrypted.
	// *   1: A NAS-managed key is used to encrypt the data in the file system. This
	// value is valid if FileSystemType is set to standard or extreme.
	// *   2: A KMS-managed key is used to encrypt the data in the file system. This
	// value is valid if the FileSystemType parameter is set to standard or extreme.
	// >
	// *   Extreme NAS: All regions except China East 1 Finance support KMS-managed
	// keys.
	// *   General-purpose NAS: All regions support KMS-managed keys.
	EncryptType interface{} `field:"optional" json:"encryptType" yaml:"encryptType"`
	// Property fileSystemType: File system type.
	//
	// Allowed values: standard(default), extreme, cpfs.
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property snapshotId: The snapshot ID.
	//
	// This parameter is available only for advanced Extreme NAS file systems.
	// > You can create a file system from a snapshot. The version of the file system is
	// the same as that of the source file system. For example, the source file system
	// of the snapshot uses version 1. To create a file system of version 2, create File
	// System A from the snapshot and create File System B of version 2. Then copy the
	// data and migrate your business from File System A to File System B.
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	// Property tags: Tags to attach to filesystem.
	//
	// Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosFileSystem_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: The VPC ID.
	//
	// *   This parameter is required if FileSystemType is set to cpfs or cpfsse.
	// *   This parameter is reserved and not required if FileSystemType is set to
	// standard or extreme.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vSwitch ID.
	//
	// *   This parameter is required if FileSystemType is set to cpfs.
	// *   If FileSystemType is not set to cpfs, this parameter is reserved and not
	// required.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The ID of the zone.
	//
	// Each region has multiple isolated locations known as zones. Each zone has its own
	// independent power supply and network.
	// This parameter is not required if FileSystemType is set to standard. By default,
	// a random zone is selected based on the protocol type and storage type.
	// This parameter is required if FileSystemType is set to extreme or cpfs.
	// >
	// *   An Elastic Compute Service (ECS) instance and a file system that reside in
	// different zones of the same region can access each other.
	// *   We recommend that you select the zone where the ECS instance resides. This
	// prevents cross-zone latency between the file system and the ECS instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

