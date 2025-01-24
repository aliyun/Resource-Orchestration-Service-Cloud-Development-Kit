package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/datasource/internal"
)

// Represents a `DiskReplicaGroups`.
type IDiskReplicaGroups interface {
	alicloudroscdkcore.IResource
	// Attribute DiskReplicaGroups: The list of disk replica groups.
	AttrDiskReplicaGroups() interface{}
	// Attribute ReplicaGroupIds: The list of replica group IDs.
	AttrReplicaGroupIds() interface{}
	Props() *DiskReplicaGroupsProps
}

// The jsii proxy for IDiskReplicaGroups
type jsiiProxy_IDiskReplicaGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDiskReplicaGroups) AttrDiskReplicaGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskReplicaGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroups) AttrReplicaGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicaGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroups) Props() *DiskReplicaGroupsProps {
	var returns *DiskReplicaGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

