package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `Snapshot`.
type ISnapshot interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute SnapshotId: The snapshot ID.
	AttrSnapshotId() interface{}
	Props() *SnapshotProps
}

// The jsii proxy for ISnapshot
type jsiiProxy_ISnapshot struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISnapshot) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrSnapshotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotId",
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

