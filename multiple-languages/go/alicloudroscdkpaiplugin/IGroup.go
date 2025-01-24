package alicloudroscdkpaiplugin

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaiplugin/internal"
)

// Represents a `Group`.
type IGroup interface {
	alicloudroscdkcore.IResource
	// Attribute Amount: The number of the user group.
	AttrAmount() interface{}
	// Attribute CreatedTime: The creation time of the user group.
	AttrCreatedTime() interface{}
	// Attribute Id: The ID of the user group.
	AttrId() interface{}
	// Attribute Name: The name of the user group.
	AttrName() interface{}
	Props() *GroupProps
}

// The jsii proxy for IGroup
type jsiiProxy_IGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGroup) AttrAmount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) AttrCreatedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
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

