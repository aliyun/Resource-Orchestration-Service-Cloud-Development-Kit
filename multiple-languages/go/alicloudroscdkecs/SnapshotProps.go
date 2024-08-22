package alicloudroscdkecs


// Properties for defining a `Snapshot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
type SnapshotProps struct {
	// Property diskId: Indicates the ID of the specified disk.
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	// Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:\/\/ or https:\/\/.
	//
	// The description will appear on the console. By default, the value is zero.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property instantAccess: Specifies whether to enable the instant access feature.
	//
	// Valid values:
	// true: enables the instant access feature. This feature can be enabled only for enhanced SSDs (ESSDs)
	// false: disables the instant access feature. If InstantAccess is set to false, normal snapshots are created.
	// Default value: false.
	// Note This parameter and the Category parameter cannot be specified at the same time.
	// For more information, see the "Description" section in this topic.
	InstantAccess interface{} `field:"optional" json:"instantAccess" yaml:"instantAccess"`
	// Property instantAccessRetentionDays: Specifies the retention period of the instant access feature.
	//
	// After the retention period ends,
	// the snapshot is automatically released. This parameter takes effect only when InstantAccess
	// is set to true. Unit: days.
	// Valid values: 1 to 65535. By default, the value of
	// this parameter is the same as that of RetentionDays.
	InstantAccessRetentionDays interface{} `field:"optional" json:"instantAccessRetentionDays" yaml:"instantAccessRetentionDays"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property retentionDays: Set the retention period of a snapshot in days.
	//
	// The snapshot will be automatically released after the retention period expires.
	// The value ranges from 1 to 65536.
	RetentionDays interface{} `field:"optional" json:"retentionDays" yaml:"retentionDays"`
	// Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters.
	//
	// It must begin with an uppercase\/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:\/\/ or https:\/\/.
	SnapshotName interface{} `field:"optional" json:"snapshotName" yaml:"snapshotName"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSnapshot_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property timeout: The number of minutes to wait for create snapshot.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

