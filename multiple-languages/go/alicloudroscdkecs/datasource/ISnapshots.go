package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Snapshots`.
type ISnapshots interface {
	alicloudroscdkcore.IResource
	// Attribute SnapshotIds: the list of snapshot ids.
	AttrSnapshotIds() interface{}
	// Attribute Snapshots: the list of snapshots.
	AttrSnapshots() interface{}
	Props() *SnapshotsProps
}

// The jsii proxy for ISnapshots
type jsiiProxy_ISnapshots struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISnapshots) AttrSnapshotIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshots) AttrSnapshots() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshots",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshots) Props() *SnapshotsProps {
	var returns *SnapshotsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

