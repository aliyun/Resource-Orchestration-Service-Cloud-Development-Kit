package alicloudroscdkbastionhost

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbastionhost/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `HostAccount`.
type IHostAccount interface {
	alicloudroscdkcore.IResource
	// Attribute HostAccountId: The ID of the host account.
	AttrHostAccountId() interface{}
	Props() *HostAccountProps
}

// The jsii proxy for IHostAccount
type jsiiProxy_IHostAccount struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHostAccount) AttrHostAccountId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostAccountId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHostAccount) Props() *HostAccountProps {
	var returns *HostAccountProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

