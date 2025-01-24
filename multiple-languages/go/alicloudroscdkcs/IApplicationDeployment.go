package alicloudroscdkcs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/internal"
)

// Represents a `ApplicationDeployment`.
type IApplicationDeployment interface {
	alicloudroscdkcore.IResource
	// Attribute TaskId: The task ID of the application deployment.
	AttrTaskId() interface{}
	Props() *ApplicationDeploymentProps
}

// The jsii proxy for IApplicationDeployment
type jsiiProxy_IApplicationDeployment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplicationDeployment) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplicationDeployment) Props() *ApplicationDeploymentProps {
	var returns *ApplicationDeploymentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

