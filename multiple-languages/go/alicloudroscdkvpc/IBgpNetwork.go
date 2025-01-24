package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `BgpNetwork`.
type IBgpNetwork interface {
	alicloudroscdkcore.IResource
	// Attribute DstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect to a data center.
	AttrDstCidrBlock() interface{}
	// Attribute RouterId: The ID of the vRouter associated with the router interface.
	AttrRouterId() interface{}
	Props() *BgpNetworkProps
}

// The jsii proxy for IBgpNetwork
type jsiiProxy_IBgpNetwork struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBgpNetwork) AttrDstCidrBlock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDstCidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpNetwork) AttrRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpNetwork) Props() *BgpNetworkProps {
	var returns *BgpNetworkProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

