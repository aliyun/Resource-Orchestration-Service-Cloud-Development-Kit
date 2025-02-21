package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpnGateway`.
type IVpnGateway interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute DisasterRecoveryInternetIp: The second IP address assigned by the system to create an IPsec-VPN connection.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
	AttrDisasterRecoveryInternetIp() interface{}
	// Attribute DisasterRecoveryVSwitchId: The ID of the second vSwitch associated with the VPN gateway.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
	AttrDisasterRecoveryVSwitchId() interface{}
	// Attribute InternetIp: The public IP address of the VPN gateway.
	AttrInternetIp() interface{}
	// Attribute OrderId: The order ID.
	AttrOrderId() interface{}
	// Attribute Spec: The specification of the VPN gateway.
	AttrSpec() interface{}
	// Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
	AttrSslMaxConnections() interface{}
	// Attribute SslVpnInternetIp: The IP address of the SSL-VPN connection.This attribute is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.
	AttrSslVpnInternetIp() interface{}
	// Attribute VpcId: The ID of the virtual private cloud (VPC) to which the VPN gateway belongs.
	AttrVpcId() interface{}
	// Attribute VpnGatewayId: ID of the VPN gateway.
	AttrVpnGatewayId() interface{}
	// Attribute VpnType: The type of the VPN gateway.
	AttrVpnType() interface{}
	// Attribute VSwitchId: The ID of the vSwitch to which the VPN gateway belongs.
	AttrVSwitchId() interface{}
	Props() *VpnGatewayProps
}

// The jsii proxy for IVpnGateway
type jsiiProxy_IVpnGateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpnGateway) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrDisasterRecoveryInternetIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisasterRecoveryInternetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrDisasterRecoveryVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisasterRecoveryVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrInternetIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrSslMaxConnections() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslMaxConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrSslVpnInternetIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslVpnInternetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrVpnGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpnGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrVpnType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpnType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnGateway) Props() *VpnGatewayProps {
	var returns *VpnGatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

