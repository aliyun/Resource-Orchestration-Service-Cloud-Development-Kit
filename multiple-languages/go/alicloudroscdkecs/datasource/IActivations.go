package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Activations`.
type IActivations interface {
	alicloudroscdkcore.IResource
	// Attribute ActivationIds: The list of activation IDs.
	AttrActivationIds() interface{}
	// Attribute Activations: The list of activations.
	AttrActivations() interface{}
	Props() *ActivationsProps
}

// The jsii proxy for IActivations
type jsiiProxy_IActivations struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IActivations) AttrActivationIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActivationIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivations) AttrActivations() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActivations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivations) Props() *ActivationsProps {
	var returns *ActivationsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

