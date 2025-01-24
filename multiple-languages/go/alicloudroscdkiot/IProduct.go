package alicloudroscdkiot

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkiot/internal"
)

// Represents a `Product`.
type IProduct interface {
	alicloudroscdkcore.IResource
	// Attribute IotInstanceId: IOT instance ID.
	AttrIotInstanceId() interface{}
	// Attribute ProductKey: The globally unique identifier of the product issued by IoT Platform.
	AttrProductKey() interface{}
	Props() *ProductProps
}

// The jsii proxy for IProduct
type jsiiProxy_IProduct struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProduct) AttrIotInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIotInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProduct) AttrProductKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProduct) Props() *ProductProps {
	var returns *ProductProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

