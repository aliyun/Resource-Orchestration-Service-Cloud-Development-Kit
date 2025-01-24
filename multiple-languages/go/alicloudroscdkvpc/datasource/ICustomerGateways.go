package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `CustomerGateways`.
type ICustomerGateways interface {
	alicloudroscdkcore.IResource
	// Attribute CustomerGatewayIds: The list of customer gateway IDs.
	AttrCustomerGatewayIds() interface{}
	// Attribute CustomerGateways: The list of customer gateways.
	AttrCustomerGateways() interface{}
	Props() *CustomerGatewaysProps
}

// The jsii proxy for ICustomerGateways
type jsiiProxy_ICustomerGateways struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomerGateways) AttrCustomerGatewayIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomerGatewayIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomerGateways) AttrCustomerGateways() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomerGateways",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomerGateways) Props() *CustomerGatewaysProps {
	var returns *CustomerGatewaysProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

