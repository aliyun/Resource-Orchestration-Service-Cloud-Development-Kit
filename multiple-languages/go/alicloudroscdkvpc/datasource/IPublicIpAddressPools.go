package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `PublicIpAddressPools`.
type IPublicIpAddressPools interface {
	alicloudroscdkcore.IResource
	// Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.
	AttrPublicIpAddressPoolIds() interface{}
	// Attribute PublicIpAddressPools: The list of public ip address pools.
	AttrPublicIpAddressPools() interface{}
	Props() *PublicIpAddressPoolsProps
}

// The jsii proxy for IPublicIpAddressPools
type jsiiProxy_IPublicIpAddressPools struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPublicIpAddressPools) AttrPublicIpAddressPoolIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddressPoolIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPools) AttrPublicIpAddressPools() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddressPools",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPools) Props() *PublicIpAddressPoolsProps {
	var returns *PublicIpAddressPoolsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

