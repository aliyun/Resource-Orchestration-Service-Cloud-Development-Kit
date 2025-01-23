package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `NatGateway`.
type INatGateway interface {
	alicloudroscdkcore.IResource
	// Attribute AutoPay: Indicates whether automatic payment is enabled.
	//
	// Valid values:
	// false: no
	// true: yes.
	AttrAutoPay() interface{}
	// Attribute BusinessStatus: The status of the NAT gateway.
	//
	// Valid values:
	// Normal: normal
	// FinancialLocked: locked due to overdue payments.
	AttrBusinessStatus() interface{}
	// Attribute CreateTime: The time when the NAT gateway was created.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrCreateTime() interface{}
	// Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled.
	//
	// Valid values:
	// true: yes
	// false: no.
	AttrDeletionProtection() interface{}
	// Attribute Description: The description of the NAT gateway.
	AttrDescription() interface{}
	// Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP).
	//
	// Valid values:
	// MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
	AttrEipBindMode() interface{}
	// Attribute ExpiredTime: The time when the NAT gateway expires.
	AttrExpiredTime() interface{}
	// Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
	AttrForwardTableIds() interface{}
	// Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled.
	//
	// Valid values:
	// true: yes
	// false: no.
	AttrIcmpReplyEnabled() interface{}
	// Attribute InternetChargeType: The metering method of the NAT gateway.
	//
	// Valid values:
	// PayBySpec: pay-by-specification
	// PayByLcu: pay-by-CU.
	AttrInternetChargeType() interface{}
	// Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
	AttrIpLists() interface{}
	// Attribute NatGatewayId: The ID of the NAT gateway.
	AttrNatGatewayId() interface{}
	// Attribute NatGatewayName: The name of the NAT gateway.
	//
	// The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
	AttrNatGatewayName() interface{}
	// Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
	AttrNatGatewayPrivateInfo() interface{}
	// Attribute NatType: The type of the NAT gateway.
	//
	// The value is set to Enhanced (enhanced NAT gateway).
	AttrNatType() interface{}
	// Attribute NetworkType: The type of NAT gateway.
	//
	// Valid values:
	// internet: an Internet NAT gateway
	// intranet: a VPC NAT gateway.
	AttrNetworkType() interface{}
	// Attribute PaymentType: The billing method of the NAT gateway.
	//
	// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
	AttrPaymentType() interface{}
	// Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled.
	//
	// Valid values:
	// false: no
	// true: yes.
	AttrSecurityProtectionEnabled() interface{}
	// Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
	AttrSnatTableIds() interface{}
	// Attribute Spec: The size of the NAT gateway.
	//
	// An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
	AttrSpec() interface{}
	// Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
	AttrVpcId() interface{}
	Props() *NatGatewayProps
}

// The jsii proxy for INatGateway
type jsiiProxy_INatGateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INatGateway) AttrAutoPay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoPay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrBusinessStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBusinessStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrEipBindMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEipBindMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrForwardTableIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrForwardTableIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrIcmpReplyEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIcmpReplyEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrIpLists() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpLists",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrNatGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrNatGatewayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatGatewayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrNatGatewayPrivateInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatGatewayPrivateInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrNatType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrSecurityProtectionEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityProtectionEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrSnatTableIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnatTableIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) Props() *NatGatewayProps {
	var returns *NatGatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

