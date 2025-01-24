package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `User`.
type IUser interface {
	alicloudroscdkcore.IResource
	// Attribute UserId: The ID of the user.
	AttrUserId() interface{}
	Props() *UserProps
}

// The jsii proxy for IUser
type jsiiProxy_IUser struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUser) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUser) Props() *UserProps {
	var returns *UserProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

