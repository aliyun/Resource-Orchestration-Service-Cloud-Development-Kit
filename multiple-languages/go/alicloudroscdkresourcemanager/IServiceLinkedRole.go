package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `ServiceLinkedRole`.
type IServiceLinkedRole interface {
	alicloudroscdkcore.IResource
	Props() *ServiceLinkedRoleProps
}

// The jsii proxy for IServiceLinkedRole
type jsiiProxy_IServiceLinkedRole struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServiceLinkedRole) Props() *ServiceLinkedRoleProps {
	var returns *ServiceLinkedRoleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

