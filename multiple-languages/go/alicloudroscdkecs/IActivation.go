package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `Activation`.
type IActivation interface {
	alicloudroscdkcore.IResource
	// Attribute ActivationCode: Activation code.
	AttrActivationCode() interface{}
	// Attribute ActivationId: Activation code ID.
	AttrActivationId() interface{}
	// Attribute DeregisteredCount: The number of instances that have been logged out.
	AttrDeregisteredCount() interface{}
	// Attribute RegisteredCount: The number of registered instances.
	AttrRegisteredCount() interface{}
	Props() *ActivationProps
}

// The jsii proxy for IActivation
type jsiiProxy_IActivation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IActivation) AttrActivationCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActivationCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivation) AttrActivationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActivationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivation) AttrDeregisteredCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeregisteredCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivation) AttrRegisteredCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegisteredCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivation) Props() *ActivationProps {
	var returns *ActivationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

