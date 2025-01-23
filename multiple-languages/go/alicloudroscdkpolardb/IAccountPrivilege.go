package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `AccountPrivilege`.
type IAccountPrivilege interface {
	alicloudroscdkcore.IResource
	Props() *AccountPrivilegeProps
}

// The jsii proxy for IAccountPrivilege
type jsiiProxy_IAccountPrivilege struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccountPrivilege) Props() *AccountPrivilegeProps {
	var returns *AccountPrivilegeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

