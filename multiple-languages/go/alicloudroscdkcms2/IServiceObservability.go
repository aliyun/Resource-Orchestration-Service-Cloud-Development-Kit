package alicloudroscdkcms2

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms2/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ServiceObservability`.
type IServiceObservability interface {
	alicloudroscdkcore.IResource
	// Attribute Workspace: The workspace of the service observability.
	AttrWorkspace() interface{}
	Props() *ServiceObservabilityProps
}

// The jsii proxy for IServiceObservability
type jsiiProxy_IServiceObservability struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServiceObservability) AttrWorkspace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceObservability) Props() *ServiceObservabilityProps {
	var returns *ServiceObservabilityProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

