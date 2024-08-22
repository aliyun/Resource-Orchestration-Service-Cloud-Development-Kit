package datasource


// Properties for defining a `RosDisks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
type RosDisksProps struct {
	AdditionalAttributes interface{} `field:"optional" json:"additionalAttributes" yaml:"additionalAttributes"`
	AutoSnapshotPolicyId interface{} `field:"optional" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	DeleteAutoSnapshot interface{} `field:"optional" json:"deleteAutoSnapshot" yaml:"deleteAutoSnapshot"`
	DeleteWithInstance interface{} `field:"optional" json:"deleteWithInstance" yaml:"deleteWithInstance"`
	DiskChargeType interface{} `field:"optional" json:"diskChargeType" yaml:"diskChargeType"`
	DiskIds interface{} `field:"optional" json:"diskIds" yaml:"diskIds"`
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
	EnableAutomatedSnapshotPolicy interface{} `field:"optional" json:"enableAutomatedSnapshotPolicy" yaml:"enableAutomatedSnapshotPolicy"`
	EnableAutoSnapshot interface{} `field:"optional" json:"enableAutoSnapshot" yaml:"enableAutoSnapshot"`
	EnableShared interface{} `field:"optional" json:"enableShared" yaml:"enableShared"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	Filters interface{} `field:"optional" json:"filters" yaml:"filters"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	MultiAttach interface{} `field:"optional" json:"multiAttach" yaml:"multiAttach"`
	Portable interface{} `field:"optional" json:"portable" yaml:"portable"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	Tags *[]*RosDisks_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

