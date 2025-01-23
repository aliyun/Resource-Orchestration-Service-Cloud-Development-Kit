package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `CustomerGateway`.
type ICustomerGateway interface {
	alicloudroscdkcore.IResource
	// Attribute Asn: Asn.
	AttrAsn() interface{}
	// Attribute AuthKey: The authentication key of the local data center gateway device BGP routing protocol.
	AttrAuthKey() interface{}
	// Attribute CreateTime: The time when the customer gateway was created.
	AttrCreateTime() interface{}
	// Attribute CustomerGatewayId: The ID of the customer gateway.
	AttrCustomerGatewayId() interface{}
	// Attribute CustomerGatewayName: The name of the customer gateway.
	AttrCustomerGatewayName() interface{}
	// Attribute Description: The description of the customer gateway.
	AttrDescription() interface{}
	// Attribute IpAddress: The IP address of the customer gateway.
	AttrIpAddress() interface{}
	Props() *CustomerGatewayProps
}

// The jsii proxy for ICustomerGateway
type jsiiProxy_ICustomerGateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomerGateway) AttrAsn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAsn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomerGateway) AttrAuthKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomerGateway) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_ICustomerGateway) AttrCustomerGatewayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomerGatewayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomerGateway) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomerGateway) AttrIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddress",
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

