package alicloudroscdkcas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcas/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Order`.
type IOrder interface {
	alicloudroscdkcore.IResource
	Props() *OrderProps
}

// The jsii proxy for IOrder
type jsiiProxy_IOrder struct {
	internal.Type__alicloudroscdkcoreIResource
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

