package alicloudroscdkcore


// With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
//
// You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
// attribute, ROS deletes the resource by default.
type RosDeletionPolicy string

const (
	// ROS will deletes the resource and all its content if applicable during stack deletion.
	//
	// You can add this deletion policy to any resource type.
	RosDeletionPolicy_DELETE RosDeletionPolicy = "DELETE"
	// ROS keeps the resource without deleting the resource or its contents when its stack is deleted.
	//
	// You can add this deletion policy to any resource type.
	RosDeletionPolicy_RETAIN RosDeletionPolicy = "RETAIN"
)

