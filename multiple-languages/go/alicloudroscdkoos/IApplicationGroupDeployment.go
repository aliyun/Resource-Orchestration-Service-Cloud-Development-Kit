package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `ApplicationGroupDeployment`.
type IApplicationGroupDeployment interface {
	alicloudroscdkcore.IResource
	// Attribute ApplicationName: The name of the application.
	AttrApplicationName() interface{}
	// Attribute ExecutionId: The execution ID of the application group deployment.
	AttrExecutionId() interface{}
	// Attribute Name: The name of the application group.
	AttrName() interface{}
	Props() *ApplicationGroupDeploymentProps
}

// The jsii proxy for IApplicationGroupDeployment
type jsiiProxy_IApplicationGroupDeployment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplicationGroupDeployment) AttrApplicationName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApplicationName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplicationGroupDeployment) AttrExecutionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExecutionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplicationGroupDeployment) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
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

