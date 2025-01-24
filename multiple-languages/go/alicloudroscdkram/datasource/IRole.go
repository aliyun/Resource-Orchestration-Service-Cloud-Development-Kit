package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/datasource/internal"
)

// Represents a `Role`.
type IRole interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The ARN of the RAM role.
	AttrArn() interface{}
	// Attribute CreateDate: The time when the RAM role was created.
	AttrCreateDate() interface{}
	// Attribute Description: The description of the RAM role.
	AttrDescription() interface{}
	// Attribute MaxSessionDuration: The maximum session duration of the RAM role.
	AttrMaxSessionDuration() interface{}
	// Attribute RoleId: The ID of the RAM role.
	AttrRoleId() interface{}
	// Attribute RoleName: The name of the RAM role.
	AttrRoleName() interface{}
	// Attribute UpdateDate: The time when the RAM role was last updated.
	AttrUpdateDate() interface{}
	Props() *RoleProps
}

// The jsii proxy for IRole
type jsiiProxy_IRole struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRole) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRole) AttrCreateDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRole) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRole) AttrMaxSessionDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxSessionDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRole) AttrRoleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoleId",
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

func (j *jsiiProxy_IRole) AttrUpdateDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateDate",
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

