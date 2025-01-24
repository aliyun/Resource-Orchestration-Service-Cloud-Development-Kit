package alicloudroscdkrocketmq

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq/internal"
)

// Represents a `Group`.
type IGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: Group ID.
	AttrGroupId() interface{}
	// Attribute GroupType: Group Type.
	AttrGroupType() interface{}
	// Attribute InstanceId: Instance ID.
	AttrInstanceId() interface{}
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

func (j *jsiiProxy_IGroup) AttrGroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
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

