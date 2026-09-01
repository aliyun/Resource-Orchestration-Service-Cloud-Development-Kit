package alicloudroscdkecs


// Properties for defining a `Snapshot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
type SnapshotProps struct {
	// Property diskId: Indicates the ID of the specified disk.
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	// Property description: The snapshot description must be 2 to 256 characters in length and cannot start with `http:\/\/` or `https:\/\/`.
	//
	// This parameter is empty by default.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property instantAccess: Specifies whether to enable the Instant Access feature.
	//
	// Valid values:
	// - true: Enables the Instant Access feature. This feature can be enabled only for
	// snapshots of ESSD cloud disks.
	// - false: Disables the Instant Access feature. A standard snapshot is created.
	// Default value: false.
	// > This parameter is deprecated. standard snapshots for ESSD cloud disks now
	// include the [Instant Access]() feature by default at no additional cost.
	InstantAccess interface{} `field:"optional" json:"instantAccess" yaml:"instantAccess"`
	// Property instantAccessRetentionDays: The retention period for the Instant Access feature, in days.
	//
	// The snapshot is
	// automatically deleted when this retention period expires. This parameter takes
	// effect only when `InstantAccess` is set to `true`. Valid values: 1 to 65,535.
	// Defaults to the value of `RetentionDays`.
	// > This parameter is deprecated. standard snapshots for ESSD cloud disks now
	// include the [Instant Access]() feature by default at no additional cost.
	InstantAccessRetentionDays interface{} `field:"optional" json:"instantAccessRetentionDays" yaml:"instantAccessRetentionDays"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property retentionDays: The retention period of the snapshot, in days.
	//
	// Valid values: 1 to 65,536. The
	// snapshot is automatically deleted when the retention period expires.
	// If this parameter is not specified, the snapshot is retained indefinitely.
	RetentionDays interface{} `field:"optional" json:"retentionDays" yaml:"retentionDays"`
	// Property snapshotName: The snapshot name must be 2 to 128 characters long.
	//
	// It must start with a letter
	// or a Chinese character and can contain letters, digits, colons (:), underscores
	// (_), periods (.), and hyphens (-).
	// > The name cannot start with `http:\/\/` or `https:\/\/`. To avoid conflicts with
	// auto snapshot names, the name cannot start with `auto`.
	SnapshotName interface{} `field:"optional" json:"snapshotName" yaml:"snapshotName"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSnapshot_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property timeout: The number of minutes to wait for create snapshot.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

