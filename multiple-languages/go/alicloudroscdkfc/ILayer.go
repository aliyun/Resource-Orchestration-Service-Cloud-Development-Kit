package alicloudroscdkfc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/internal"
)

// Represents a `Layer`.
type ILayer interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The name of the layer resource.
	AttrArn() interface{}
	// Attribute LayerName: The name of layer.
	AttrLayerName() interface{}
	// Attribute Version: The version of the layer resource.
	AttrVersion() interface{}
	Props() *LayerProps
}

// The jsii proxy for ILayer
type jsiiProxy_ILayer struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILayer) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayer) AttrLayerName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLayerName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayer) AttrVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayer) Props() *LayerProps {
	var returns *LayerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

