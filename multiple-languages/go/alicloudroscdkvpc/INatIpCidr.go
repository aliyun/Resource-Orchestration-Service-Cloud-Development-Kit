package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `NatIpCidr`.
type INatIpCidr interface {
	alicloudroscdkcore.IResource
	// Attribute NatIpCidrId: The ID of the NAT CIDR block.
	AttrNatIpCidrId() interface{}
	Props() *NatIpCidrProps
}

// The jsii proxy for INatIpCidr
type jsiiProxy_INatIpCidr struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INatIpCidr) AttrNatIpCidrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatIpCidrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatIpCidr) Props() *NatIpCidrProps {
	var returns *NatIpCidrProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

