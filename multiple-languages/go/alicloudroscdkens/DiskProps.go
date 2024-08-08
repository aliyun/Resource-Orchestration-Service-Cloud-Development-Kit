package alicloudroscdkens


// Properties for defining a `Disk`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
type DiskProps struct {
	// Property category: The category of the disk.
	//
	// Valid values:
	// cloud_efficiency: ultra disk.
	// cloud_ssd: all-flash disk.
	Category interface{} `field:"required" json:"category" yaml:"category"`
	// Property ensRegionId: The ID of the edge node.
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	// Property instanceChargeType: The billing method of the instance.
	//
	// Set the value to PostPaid.
	InstanceChargeType interface{} `field:"required" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property size: The size of the disk.
	//
	// Unit: GiB.
	Size interface{} `field:"required" json:"size" yaml:"size"`
	// Property diskName: The name of the disk.
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	// Property encrypted: Specifies whether to encrypt the new system disk.
	//
	// Valid values:
	// true
	// false (default): no.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
	//
	// Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property snapshotId: The ID of the snapshot that you want to use to create the disk.
	//
	// The following limits apply to the SnapshotId and Size parameters:
	// If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
	// If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
}

