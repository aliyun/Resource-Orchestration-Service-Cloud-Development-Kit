package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `NatIp`.
type INatIp interface {
	alicloudroscdkcore.IResource
	// Attribute NatIp: NAT IP address.
	AttrNatIp() interface{}
	// Attribute NatIpId: The ID of the NAT IP address.
	AttrNatIpId() interface{}
	Props() *NatIpProps
}

// The jsii proxy for INatIp
type jsiiProxy_INatIp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INatIp) AttrNatIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatIp) AttrNatIpId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatIpId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatIp) Props() *NatIpProps {
	var returns *NatIpProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

