package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `User`.
type IUser interface {
	alicloudroscdkcore.IResource
	// Attribute CreateDate: Create date of ram user.
	AttrCreateDate() interface{}
	// Attribute LastLoginDate: Last login date of ram user.
	AttrLastLoginDate() interface{}
	// Attribute UserId: Id of ram user.
	AttrUserId() interface{}
	// Attribute UserName: Name of ram user.
	AttrUserName() interface{}
	Props() *UserProps
}

// The jsii proxy for IUser
type jsiiProxy_IUser struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUser) AttrCreateDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUser) AttrLastLoginDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastLoginDate",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IUser) AttrUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserName",
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

