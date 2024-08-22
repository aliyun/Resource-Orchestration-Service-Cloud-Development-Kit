package alicloudroscdkecs


// Properties for defining a `SnapshotGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshotgroup
type SnapshotGroupProps struct {
	// Property description: The description of the snapshot-consistent group.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskIds: The IDs of cloud disk for which you want to create snapshots.
	//
	// You can specify multiple cloud disk IDs across instances within the same zone. The length of the list ranges from 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
	// Take note of the following items:
	// You cannot specify both DiskIds and ExcludeDiskIdin the same request.
	// If InstanceId is set, you can use DiskIds to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskIds to specify cloud disks attached to multiple instances.
	DiskIds interface{} `field:"optional" json:"diskIds" yaml:"diskIds"`
	// Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots.
	//
	// If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. The length of the list ranges from 1 to 16.
	// This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
	// Note You cannot specify ExcludeDiskIds and DiskIds in the same request.
	ExcludeDiskIds interface{} `field:"optional" json:"excludeDiskIds" yaml:"excludeDiskIds"`
	// Property instanceId: The instance ID.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property name: The name of the snapshot-consistent group.
	//
	// The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to snapshot-consistent group.
	//
	// Max support 20 tags to add during create snapshot-consistent group. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSnapshotGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

