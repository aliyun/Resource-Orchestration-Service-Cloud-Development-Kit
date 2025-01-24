package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/datasource/internal"
)

// Represents a `User`.
type IUser interface {
	alicloudroscdkcore.IResource
	// Attribute Comments: The comments of the RAM user.
	AttrComments() interface{}
	// Attribute DisplayName: The display name of the RAM user.
	AttrDisplayName() interface{}
	// Attribute Email: The email address of the RAM user.
	AttrEmail() interface{}
	// Attribute MobilePhone: The mobile phone number of the RAM user.
	AttrMobilePhone() interface{}
	// Attribute UserId: The ID of the RAM user.
	AttrUserId() interface{}
	// Attribute UserName: The name of the RAM user.
	AttrUserName() interface{}
	Props() *UserProps
}

// The jsii proxy for IUser
type jsiiProxy_IUser struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUser) AttrComments() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrComments",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUser) AttrDisplayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisplayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUser) AttrEmail() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEmail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUser) AttrMobilePhone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMobilePhone",
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

