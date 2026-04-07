package alicloudroscdkedas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/internal"
)

// Represents a `SwimmingLane`.
type ISwimmingLane interface {
	alicloudroscdkcore.IResource
	// Attribute LaneId: The ID of the swimming lane.
	AttrLaneId() interface{}
	Props() *SwimmingLaneProps
}

// The jsii proxy for ISwimmingLane
type jsiiProxy_ISwimmingLane struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISwimmingLane) AttrLaneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISwimmingLane) Props() *SwimmingLaneProps {
	var returns *SwimmingLaneProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

