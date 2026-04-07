package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `Role`.
type IRole interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The resource descriptor of the role.
	AttrArn() interface{}
	// Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.
	AttrAssumeRolePolicyDocument() interface{}
	// Attribute CreateTime: Role creation time.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the Resource Manager role.
	AttrDescription() interface{}
	// Attribute MaxSessionDuration: Role maximum session time.
	//
	// Valid values: [3600-43200].
	AttrMaxSessionDuration() interface{}
	// Attribute RoleId: This ID of Resource Manager role.
	AttrRoleId() interface{}
	// Attribute RoleName: Role Name.
	AttrRoleName() interface{}
	// Attribute UpdateDate: Role update time.
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

func (j *jsiiProxy_IRole) AttrAssumeRolePolicyDocument() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAssumeRolePolicyDocument",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRole) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
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

