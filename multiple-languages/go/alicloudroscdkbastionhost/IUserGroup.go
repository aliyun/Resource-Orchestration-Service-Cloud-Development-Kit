package alicloudroscdkbastionhost

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbastionhost/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `UserGroup`.
type IUserGroup interface {
	alicloudroscdkcore.IResource
	// Attribute UserGroupId: The ID of the user group.
	AttrUserGroupId() interface{}
	Props() *UserGroupProps
}

// The jsii proxy for IUserGroup
type jsiiProxy_IUserGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserGroup) AttrUserGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserGroup) Props() *UserGroupProps {
	var returns *UserGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

