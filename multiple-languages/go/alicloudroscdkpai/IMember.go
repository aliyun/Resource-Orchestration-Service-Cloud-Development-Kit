package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `Member`.
type IMember interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Create UTC time in ISO8601 format.
	AttrCreateTime() interface{}
	// Attribute DisplayName: Member display name.
	AttrDisplayName() interface{}
	// Attribute MemberId: The member ID.
	AttrMemberId() interface{}
	// Attribute MemberName: The name of user.
	AttrMemberName() interface{}
	// Attribute Roles: The list of roles.
	AttrRoles() interface{}
	// Attribute UserId: The first ID of the resource.
	AttrUserId() interface{}
	Props() *MemberProps
}

// The jsii proxy for IMember
type jsiiProxy_IMember struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMember) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMember) AttrDisplayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisplayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMember) AttrMemberId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMemberId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMember) AttrMemberName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMemberName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMember) AttrRoles() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoles",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMember) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMember) Props() *MemberProps {
	var returns *MemberProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

