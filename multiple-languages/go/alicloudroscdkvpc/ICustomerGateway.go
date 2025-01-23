package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `CustomerGateway`.
type ICustomerGateway interface {
	alicloudroscdkcore.IResource
	// Attribute CustomerGatewayId: The ID of the user gateway.
	AttrCustomerGatewayId() interface{}
	Props() *CustomerGatewayProps
}

// The jsii proxy for ICustomerGateway
type jsiiProxy_ICustomerGateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomerGateway) AttrCustomerGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomerGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomerGateway) Props() *CustomerGatewayProps {
	var returns *CustomerGatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

