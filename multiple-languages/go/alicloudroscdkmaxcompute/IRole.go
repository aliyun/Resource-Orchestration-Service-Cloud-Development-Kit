package alicloudroscdkmaxcompute

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmaxcompute/internal"
)

// Represents a `Role`.
type IRole interface {
	alicloudroscdkcore.IResource
	// Attribute ProjectName: The name of the MaxCompute project.
	AttrProjectName() interface{}
	// Attribute RoleName: The name of the project role.
	AttrRoleName() interface{}
	Props() *RoleProps
}

// The jsii proxy for IRole
type jsiiProxy_IRole struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRole) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRole) AttrRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRole) Props() *RoleProps {
	var returns *RoleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

