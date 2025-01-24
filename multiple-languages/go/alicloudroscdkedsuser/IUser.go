package alicloudroscdkedsuser

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedsuser/internal"
)

// Represents a `User`.
type IUser interface {
	alicloudroscdkcore.IResource
	// Attribute EndUserId: The name of the end user.
	AttrEndUserId() interface{}
	Props() *UserProps
}

// The jsii proxy for IUser
type jsiiProxy_IUser struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUser) AttrEndUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndUserId",
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

