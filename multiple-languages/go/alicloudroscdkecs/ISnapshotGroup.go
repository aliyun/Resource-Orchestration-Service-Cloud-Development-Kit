package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SnapshotGroup`.
type ISnapshotGroup interface {
	alicloudroscdkcore.IResource
	// Attribute SnapshotGroupId: The ID of the snapshot-consistent group.
	AttrSnapshotGroupId() interface{}
	Props() *SnapshotGroupProps
}

// The jsii proxy for ISnapshotGroup
type jsiiProxy_ISnapshotGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISnapshotGroup) AttrSnapshotGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshotGroup) Props() *SnapshotGroupProps {
	var returns *SnapshotGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

