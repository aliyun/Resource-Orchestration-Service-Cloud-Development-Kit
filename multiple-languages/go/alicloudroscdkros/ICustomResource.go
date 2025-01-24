package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `CustomResource`.
type ICustomResource interface {
	alicloudroscdkcore.IResource
	// Attribute Outputs: Output data received from service provider.
	AttrOutputs() interface{}
	Props() *CustomResourceProps
}

// The jsii proxy for ICustomResource
type jsiiProxy_ICustomResource struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomResource) AttrOutputs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOutputs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResource) Props() *CustomResourceProps {
	var returns *CustomResourceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

