package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Activation`.
type IActivation interface {
	alicloudroscdkcore.IResource
	// Attribute ActivationId: Activation code ID.
	AttrActivationId() interface{}
	// Attribute CreateTime: The time when the activation code was created.
	AttrCreateTime() interface{}
	// Attribute DeregisteredCount: The number of instances that have been logged out.
	AttrDeregisteredCount() interface{}
	// Attribute Description: The description of the activation code.
	AttrDescription() interface{}
	// Attribute Disabled: Indicates whether the activation code is disabled.
	AttrDisabled() interface{}
	// Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.
	AttrInstanceCount() interface{}
	// Attribute InstanceName: The default prefix of the instance name.
	AttrInstanceName() interface{}
	// Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.
	AttrIpAddressRange() interface{}
	// Attribute RegisteredCount: The number of instances that were registered.
	AttrRegisteredCount() interface{}
	// Attribute TimeToLiveInHours: The validity period of the activation code.
	//
	// Unit: hours.
	AttrTimeToLiveInHours() interface{}
	Props() *ActivationProps
}

// The jsii proxy for IActivation
type jsiiProxy_IActivation struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_IActivation) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
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

func (j *jsiiProxy_IActivation) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivation) AttrDisabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivation) AttrInstanceCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivation) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActivation) AttrIpAddressRange() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddressRange",
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

func (j *jsiiProxy_IActivation) AttrTimeToLiveInHours() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimeToLiveInHours",
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

