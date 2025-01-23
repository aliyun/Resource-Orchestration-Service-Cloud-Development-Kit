package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `Snapshot`.
type ISnapshot interface {
	alicloudroscdkcore.IResource
	// Attribute SnapShotId: The ID of the snapshot.
	AttrSnapShotId() interface{}
	Props() *SnapshotProps
}

// The jsii proxy for ISnapshot
type jsiiProxy_ISnapshot struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISnapshot) AttrSnapShotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapShotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) Props() *SnapshotProps {
	var returns *SnapshotProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

