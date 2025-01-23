package alicloudroscdkcr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
)

// Represents a `UserInfo`.
type IUserInfo interface {
	alicloudroscdkcore.IResource
	// Attribute LoginName: Login name.
	AttrLoginName() interface{}
	// Attribute UserId: User ID.
	AttrUserId() interface{}
	Props() *UserInfoProps
}

// The jsii proxy for IUserInfo
type jsiiProxy_IUserInfo struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserInfo) AttrLoginName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoginName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserInfo) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserInfo) Props() *UserInfoProps {
	var returns *UserInfoProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

