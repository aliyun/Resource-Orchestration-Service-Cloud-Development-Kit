package alicloudroscdkdms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdms/internal"
)

// Represents a `User`.
type IUser interface {
	alicloudroscdkcore.IResource
	// Attribute Mobile: UserMobile.
	AttrMobile() interface{}
	// Attribute ParentUid: ParentAliYunUid.
	AttrParentUid() interface{}
	// Attribute RoleIds: UserRoleId.
	AttrRoleIds() interface{}
	// Attribute RoleNames: UserRole.
	AttrRoleNames() interface{}
	// Attribute Uid: UserAliYunUid.
	AttrUid() interface{}
	// Attribute UserId: UserId.
	AttrUserId() interface{}
	// Attribute UserName: UserNickName.
	AttrUserName() interface{}
	Props() *UserProps
}

// The jsii proxy for IUser
type jsiiProxy_IUser struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUser) AttrMobile() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMobile",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUser) AttrParentUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParentUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUser) AttrRoleIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoleIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUser) AttrRoleNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoleNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUser) AttrUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUid",
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

