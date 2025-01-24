package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/datasource/internal"
)

// Represents a `Roles`.
type IRoles interface {
	alicloudroscdkcore.IResource
	// Attribute RoleNames: The list of role names.
	AttrRoleNames() interface{}
	// Attribute Roles: The list of roles.
	AttrRoles() interface{}
	Props() *RolesProps
}

// The jsii proxy for IRoles
type jsiiProxy_IRoles struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRoles) AttrRoleNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoleNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoles) AttrRoles() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoles",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoles) Props() *RolesProps {
	var returns *RolesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

