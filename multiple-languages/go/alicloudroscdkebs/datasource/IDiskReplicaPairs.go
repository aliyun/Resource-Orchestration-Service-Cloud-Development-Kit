package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/datasource/internal"
)

// Represents a `DiskReplicaPairs`.
type IDiskReplicaPairs interface {
	alicloudroscdkcore.IResource
	// Attribute DiskReplicaPairs: The list of disk replica pairs.
	AttrDiskReplicaPairs() interface{}
	// Attribute ReplicaPairIds: The list of replica pair IDs.
	AttrReplicaPairIds() interface{}
	Props() *DiskReplicaPairsProps
}

// The jsii proxy for IDiskReplicaPairs
type jsiiProxy_IDiskReplicaPairs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDiskReplicaPairs) AttrDiskReplicaPairs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskReplicaPairs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPairs) AttrReplicaPairIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicaPairIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPairs) Props() *DiskReplicaPairsProps {
	var returns *DiskReplicaPairsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

