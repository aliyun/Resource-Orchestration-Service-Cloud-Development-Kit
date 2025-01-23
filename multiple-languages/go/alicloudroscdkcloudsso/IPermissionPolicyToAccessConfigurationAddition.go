package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PermissionPolicyToAccessConfigurationAddition`.
type IPermissionPolicyToAccessConfigurationAddition interface {
	alicloudroscdkcore.IResource
	Props() *PermissionPolicyToAccessConfigurationAdditionProps
}

// The jsii proxy for IPermissionPolicyToAccessConfigurationAddition
type jsiiProxy_IPermissionPolicyToAccessConfigurationAddition struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPermissionPolicyToAccessConfigurationAddition) Props() *PermissionPolicyToAccessConfigurationAdditionProps {
	var returns *PermissionPolicyToAccessConfigurationAdditionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

