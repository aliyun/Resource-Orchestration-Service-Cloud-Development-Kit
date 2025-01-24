package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Deployment`.
type IDeployment interface {
	alicloudroscdkcore.IResource
	Props() *DeploymentProps
}

// The jsii proxy for IDeployment
type jsiiProxy_IDeployment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeployment) Props() *DeploymentProps {
	var returns *DeploymentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

