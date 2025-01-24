package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `Role`.
type IRole interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: Name of alicloud resource.
	AttrArn() interface{}
	// Attribute RoleId: Id of ram role.
	AttrRoleId() interface{}
	// Attribute RoleName: Name of ram role.
	AttrRoleName() interface{}
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

func (j *jsiiProxy_IRole) Props() *RoleProps {
	var returns *RoleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

