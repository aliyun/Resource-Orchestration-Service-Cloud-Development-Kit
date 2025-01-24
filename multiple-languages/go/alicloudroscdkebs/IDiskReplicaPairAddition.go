package alicloudroscdkebs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/internal"
)

// Represents a `DiskReplicaPairAddition`.
type IDiskReplicaPairAddition interface {
	alicloudroscdkcore.IResource
	// Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
	AttrReplicaGroupId() interface{}
	// Attribute ReplicaPairId: The ID of the replication pair.
	AttrReplicaPairId() interface{}
	Props() *DiskReplicaPairAdditionProps
}

// The jsii proxy for IDiskReplicaPairAddition
type jsiiProxy_IDiskReplicaPairAddition struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDiskReplicaPairAddition) AttrReplicaGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicaGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPairAddition) AttrReplicaPairId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicaPairId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPairAddition) Props() *DiskReplicaPairAdditionProps {
	var returns *DiskReplicaPairAdditionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

