package alicloudroscdkcs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/internal"
)

// Represents a `GrantPermissions`.
type IGrantPermissions interface {
	alicloudroscdkcore.IResource
	Props() *GrantPermissionsProps
}

// The jsii proxy for IGrantPermissions
type jsiiProxy_IGrantPermissions struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGrantPermissions) Props() *GrantPermissionsProps {
	var returns *GrantPermissionsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

