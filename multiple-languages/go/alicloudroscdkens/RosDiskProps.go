package alicloudroscdkens


// Properties for defining a `RosDisk`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
type RosDiskProps struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	InstanceChargeType interface{} `field:"required" json:"instanceChargeType" yaml:"instanceChargeType"`
	Size interface{} `field:"required" json:"size" yaml:"size"`
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
}

