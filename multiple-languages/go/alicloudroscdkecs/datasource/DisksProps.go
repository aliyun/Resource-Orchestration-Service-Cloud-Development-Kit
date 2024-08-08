package datasource


// Properties for defining a `Disks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
type DisksProps struct {
	// Property additionalAttributes: The value of attribute N.
	//
	// Set the value to IOPS, which indicates the maximum IOPS of the disk.
	AdditionalAttributes interface{} `field:"optional" json:"additionalAttributes" yaml:"additionalAttributes"`
	// Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
	AutoSnapshotPolicyId interface{} `field:"optional" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	// Property category: The category of the disk.
	//
	// Valid values:
	// all: all disk categories
	// cloud: basic disk
	// cloud_efficiency: ultra disk
	// cloud_ssd: standard SSD
	// ephemeral: retired local disk
	// ephemeral_ssd: local SSD
	// cloud_essd: ESSD
	// local_ssd_pro: I\/O-intensive local disk
	// local_hdd_pro: throughput-intensive local disk.
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	// Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
	//
	// Default value: false.
	DeleteAutoSnapshot interface{} `field:"optional" json:"deleteAutoSnapshot" yaml:"deleteAutoSnapshot"`
	// Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released.
	//
	// Valid values:
	// true: The cloud disk is released when its associated instance is released.
	// false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
	// Default value: false.
	DeleteWithInstance interface{} `field:"optional" json:"deleteWithInstance" yaml:"deleteWithInstance"`
	// Property diskChargeType: The billing method of the disk.
	//
	// Valid values:
	// PrePaid: subscription
	// PostPaid: pay-as-you-go.
	DiskChargeType interface{} `field:"optional" json:"diskChargeType" yaml:"diskChargeType"`
	// Property diskIds: The IDs of disks.
	//
	// The value is a JSON array that consists of up to 100 disk IDs.
	// Separate the disk IDs with commas (,).
	DiskIds interface{} `field:"optional" json:"diskIds" yaml:"diskIds"`
	// Property diskName: The name of the disk.
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	// Property diskType: The type of the disk.
	//
	// Valid values:
	// all: system disk and data disk
	// system: system disk
	// data: data disk
	// Default value: all.
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
	// Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
	//
	// true: An automatic snapshot policy is applied to the cloud disk.
	// false: No automatic snapshot policy is applied to the cloud disk.
	// Default value: false.
	EnableAutomatedSnapshotPolicy interface{} `field:"optional" json:"enableAutomatedSnapshotPolicy" yaml:"enableAutomatedSnapshotPolicy"`
	// Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
	//
	// true: The automatic snapshot policy feature is enabled for the cloud disk.
	// false: The automatic snapshot policy feature is disabled for the cloud disk.
	// Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
	EnableAutoSnapshot interface{} `field:"optional" json:"enableAutoSnapshot" yaml:"enableAutoSnapshot"`
	// Property enableShared: Specifies whether the disk is a Shared Block Storage device.
	EnableShared interface{} `field:"optional" json:"enableShared" yaml:"enableShared"`
	// Property encrypted: Specifies whether to query only encrypted cloud disks.
	//
	// Default value: false.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property filters: Filter value when querying resources.
	Filters interface{} `field:"optional" json:"filters" yaml:"filters"`
	// Property instanceId: The ID of the instance to which the disk is attached.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk.
	//
	// Valid values:
	// Disabled: The multi-attach feature is disabled.
	// Enabled: The multi-attach feature is enabled.
	// LegacyShared: Shared Block Storage devices are queried.
	// The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
	MultiAttach interface{} `field:"optional" json:"multiAttach" yaml:"multiAttach"`
	// Property portable: Specifies whether the disk is removable.
	//
	// Valid values:
	// true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
	// false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
	// The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
	// Local disks
	// Local SSDs
	// Subscription data disks.
	Portable interface{} `field:"optional" json:"portable" yaml:"portable"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the disk belongs.
	//
	// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property snapshotId: The ID of the snapshot used to create the cloud disk.
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	// Property status: The state of the cloud disk.
	//
	// For more information, see Disk states. Valid values:
	// In_use
	// Available
	// Attaching
	// Detaching
	// Creating
	// ReIniting
	// All
	// Default value: All.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property tags: Tags of disks.
	Tags *[]*RosDisks_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zoneId: The ID of the zone for which to query resources.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

