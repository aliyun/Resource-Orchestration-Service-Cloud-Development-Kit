package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/datasource/internal"
)

// Represents a `Users`.
type IUsers interface {
	alicloudroscdkcore.IResource
	// Attribute UserNames: The list of user names.
	AttrUserNames() interface{}
	// Attribute Users: The list of users.
	AttrUsers() interface{}
	Props() *UsersProps
}

// The jsii proxy for IUsers
type jsiiProxy_IUsers struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUsers) AttrUserNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUsers) AttrUsers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUsers) Props() *UsersProps {
	var returns *UsersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

