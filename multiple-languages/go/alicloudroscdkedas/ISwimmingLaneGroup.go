package alicloudroscdkedas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/internal"
)

// Represents a `SwimmingLaneGroup`.
type ISwimmingLaneGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: The ID of the swimming lane group.
	AttrGroupId() interface{}
	Props() *SwimmingLaneGroupProps
}

// The jsii proxy for ISwimmingLaneGroup
type jsiiProxy_ISwimmingLaneGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISwimmingLaneGroup) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISwimmingLaneGroup) Props() *SwimmingLaneGroupProps {
	var returns *SwimmingLaneGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

