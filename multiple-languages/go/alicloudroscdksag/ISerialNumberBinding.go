package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `SerialNumberBinding`.
type ISerialNumberBinding interface {
	alicloudroscdkcore.IResource
	// Attribute SmartAGId: The ID of the SAG instance.
	AttrSmartAgId() interface{}
	Props() *SerialNumberBindingProps
}

// The jsii proxy for ISerialNumberBinding
type jsiiProxy_ISerialNumberBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISerialNumberBinding) AttrSmartAgId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSmartAgId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISerialNumberBinding) Props() *SerialNumberBindingProps {
	var returns *SerialNumberBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

