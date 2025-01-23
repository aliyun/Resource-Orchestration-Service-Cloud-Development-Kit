package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `NatIpCidrs`.
type INatIpCidrs interface {
	alicloudroscdkcore.IResource
	// Attribute NatIpCidrIds: The list of nat ip cidr IDs.
	AttrNatIpCidrIds() interface{}
	// Attribute NatIpCidrs: The list of nat ip cidrs.
	AttrNatIpCidrs() interface{}
	Props() *NatIpCidrsProps
}

// The jsii proxy for INatIpCidrs
type jsiiProxy_INatIpCidrs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INatIpCidrs) AttrNatIpCidrIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatIpCidrIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatIpCidrs) AttrNatIpCidrs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatIpCidrs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatIpCidrs) Props() *NatIpCidrsProps {
	var returns *NatIpCidrsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

