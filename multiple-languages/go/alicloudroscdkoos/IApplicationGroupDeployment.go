package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `ApplicationGroupDeployment`.
type IApplicationGroupDeployment interface {
	alicloudroscdkcore.IResource
	Props() *ApplicationGroupDeploymentProps
}

// The jsii proxy for IApplicationGroupDeployment
type jsiiProxy_IApplicationGroupDeployment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplicationGroupDeployment) Props() *ApplicationGroupDeploymentProps {
	var returns *ApplicationGroupDeploymentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

