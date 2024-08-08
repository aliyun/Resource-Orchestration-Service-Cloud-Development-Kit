package datasource


// Properties for defining a `Snapshots`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
type SnapshotsProps struct {
	// Property category: The category of the snapshot.
	//
	// Valid values:
	// Standard: normal snapshot
	// Flash: local snapshot
	// The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
	//   If you have used local snapshots before December 14, 2020, you can use this parameter.
	//   If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
	//   Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	// Property diskId: The ID of the disk.
	DiskId interface{} `field:"optional" json:"diskId" yaml:"diskId"`
	// Property encrypted: Specifies whether the snapshot is encrypted.
	//
	// Default value: false.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property filters: Filter value when querying resources.
	Filters interface{} `field:"optional" json:"filters" yaml:"filters"`
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the snapshot belongs.
	//
	// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property snapshotIds: The IDs of snapshots.
	//
	// The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
	SnapshotIds interface{} `field:"optional" json:"snapshotIds" yaml:"snapshotIds"`
	// Property snapshotLinkId: The ID of the snapshot chain.
	SnapshotLinkId interface{} `field:"optional" json:"snapshotLinkId" yaml:"snapshotLinkId"`
	// Property snapshotName: The name of the snapshot.
	SnapshotName interface{} `field:"optional" json:"snapshotName" yaml:"snapshotName"`
	// Property snapshotType: Specifies whether the snapshot has been used to create images or disks.
	//
	// Valid values:
	// auto: automatic snapshot
	// user: manual snapshot
	// all: all snapshot types.
	SnapshotType interface{} `field:"optional" json:"snapshotType" yaml:"snapshotType"`
	// Property sourceDiskType: The type of the source disk for which the snapshot was created.
	//
	// Valid values:
	// System: system disk
	// Data: data disk
	// Note These values are case-insensitive.
	SourceDiskType interface{} `field:"optional" json:"sourceDiskType" yaml:"sourceDiskType"`
	// Property status: The status of the snapshot.
	//
	// Default value: all. Valid values:
	// progressing: The snapshot is being created.
	// accomplished: The snapshot is created.
	// failed: The snapshot fails to be created.
	// all: all snapshot statuses.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property tags: Tags of snapshot.
	Tags *[]*RosSnapshots_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property usage: The type of the snapshot.
	//
	// Default value: all. Valid values:
	// image: The snapshot has been used to create custom images.
	// disk: The snapshot has been used to create disks.
	// image_disk: The snapshot has been used to create custom images and data disks.
	// none: The snapshot has not been used to create custom images or disks.
	Usage interface{} `field:"optional" json:"usage" yaml:"usage"`
}

