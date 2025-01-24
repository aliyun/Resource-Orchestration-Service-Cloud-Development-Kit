package alicloudroscdkpaidlc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaidlc/internal"
)

// Represents a `Tensorboard`.
type ITensorboard interface {
	alicloudroscdkcore.IResource
	// Attribute TensorboardId: Tensorboard id.
	AttrTensorboardId() interface{}
	// Attribute TensorboardUrl: Tensorboard url.
	AttrTensorboardUrl() interface{}
	Props() *TensorboardProps
}

// The jsii proxy for ITensorboard
type jsiiProxy_ITensorboard struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITensorboard) AttrTensorboardId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTensorboardId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITensorboard) AttrTensorboardUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTensorboardUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITensorboard) Props() *TensorboardProps {
	var returns *TensorboardProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

