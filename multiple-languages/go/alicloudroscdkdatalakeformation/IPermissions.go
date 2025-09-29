package alicloudroscdkdatalakeformation

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdatalakeformation/internal"
)

// Represents a `Permissions`.
type IPermissions interface {
	alicloudroscdkcore.IResource
	Props() *PermissionsProps
}

// The jsii proxy for IPermissions
type jsiiProxy_IPermissions struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPermissions) Props() *PermissionsProps {
	var returns *PermissionsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

