package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Group`.
type IGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: The ID of the group.
	AttrGroupId() interface{}
	Props() *GroupProps
}

// The jsii proxy for IGroup
type jsiiProxy_IGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGroup) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) Props() *GroupProps {
	var returns *GroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

