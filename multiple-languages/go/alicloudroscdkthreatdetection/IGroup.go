package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `Group`.
type IGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupFlag: The type of the server group.
	AttrGroupFlag() interface{}
	// Attribute GroupId: The ID of the server group for which you want to add to or remove servers.
	AttrGroupId() interface{}
	// Attribute GroupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
	AttrGroupName() interface{}
	Props() *GroupProps
}

// The jsii proxy for IGroup
type jsiiProxy_IGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGroup) AttrGroupFlag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupFlag",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IGroup) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
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

