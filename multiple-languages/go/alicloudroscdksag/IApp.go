package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `App`.
type IApp interface {
	alicloudroscdkcore.IResource
	// Attribute OrderId: The ID of the order that you placed to subscribe to the SAG APP instance.
	AttrOrderId() interface{}
	// Attribute SmartAGId: The ID of the SAG APP instance.
	AttrSmartAgId() interface{}
	Props() *AppProps
}

// The jsii proxy for IApp
type jsiiProxy_IApp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApp) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrSmartAgId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSmartAgId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) Props() *AppProps {
	var returns *AppProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

