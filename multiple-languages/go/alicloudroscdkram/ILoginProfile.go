package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `LoginProfile`.
type ILoginProfile interface {
	alicloudroscdkcore.IResource
	// Attribute Password: The password of the RAM user.
	AttrPassword() interface{}
	Props() *LoginProfileProps
}

// The jsii proxy for ILoginProfile
type jsiiProxy_ILoginProfile struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILoginProfile) AttrPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoginProfile) Props() *LoginProfileProps {
	var returns *LoginProfileProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

