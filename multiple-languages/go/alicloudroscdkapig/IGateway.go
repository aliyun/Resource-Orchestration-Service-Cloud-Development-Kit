package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Gateway`.
type IGateway interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation timestamp.
	//
	// Unit: milliseconds.
	AttrCreateTime() interface{}
	// Attribute Environments: The list of environments associated with the Gateway.
	AttrEnvironments() interface{}
	// Attribute ExpireTime: Package year and package month expiration timestamp.
	//
	// Unit: milliseconds.
	AttrExpireTime() interface{}
	// Attribute GatewayId: The ID of the Gateway.
	AttrGatewayId() interface{}
	// Attribute GatewayName: The name of the resource.
	AttrGatewayName() interface{}
	// Attribute GatewayType: The type of the gateway.
	AttrGatewayType() interface{}
	// Attribute LoadBalancers: The list of Gateway ingress addresses.
	AttrLoadBalancers() interface{}
	// Attribute PaymentType: The payment type of the gateway.
	AttrPaymentType() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SecurityGroup: The Security Group of the Gateway.
	AttrSecurityGroup() interface{}
	// Attribute Spec: Gateway instance specifications.
	AttrSpec() interface{}
	// Attribute Tags: The tags of the Gateway.
	AttrTags() interface{}
	// Attribute UpdateTime: Update the timestamp.
	//
	// Unit: milliseconds.
	AttrUpdateTime() interface{}
	// Attribute Version: The gateway version.
	AttrVersion() interface{}
	// Attribute Vpc: The VPC associated with the Gateway.
	AttrVpc() interface{}
	// Attribute VSwitch: The virtual switch associated with the Gateway.
	AttrVSwitch() interface{}
	// Attribute Zones: The List of zones associated with the Gateway.
	AttrZones() interface{}
	Props() *GatewayProps
}

// The jsii proxy for IGateway
type jsiiProxy_IGateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGateway) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrEnvironments() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironments",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrGatewayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrGatewayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrLoadBalancers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrSecurityGroup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrVpc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrVSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrZones() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZones",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) Props() *GatewayProps {
	var returns *GatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

