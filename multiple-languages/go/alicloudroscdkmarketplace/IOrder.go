package alicloudroscdkmarketplace

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmarketplace/internal"
)

// Represents a `Order`.
type IOrder interface {
	alicloudroscdkcore.IResource
	// Attribute OrderId: Order ID of created instance.
	AttrOrderId() interface{}
	Props() *OrderProps
}

// The jsii proxy for IOrder
type jsiiProxy_IOrder struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOrder) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOrder) Props() *OrderProps {
	var returns *OrderProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

