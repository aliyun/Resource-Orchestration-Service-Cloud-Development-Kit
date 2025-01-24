package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Authorization`.
type IAuthorization interface {
	alicloudroscdkcore.IResource
	Props() *AuthorizationProps
}

// The jsii proxy for IAuthorization
type jsiiProxy_IAuthorization struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAuthorization) Props() *AuthorizationProps {
	var returns *AuthorizationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

