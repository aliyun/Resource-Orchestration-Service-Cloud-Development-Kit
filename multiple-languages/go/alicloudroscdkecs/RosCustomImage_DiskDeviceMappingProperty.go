package alicloudroscdkecs


type RosCustomImage_DiskDeviceMappingProperty struct {
	Device interface{} `field:"optional" json:"device" yaml:"device"`
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
	Size interface{} `field:"optional" json:"size" yaml:"size"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
}

