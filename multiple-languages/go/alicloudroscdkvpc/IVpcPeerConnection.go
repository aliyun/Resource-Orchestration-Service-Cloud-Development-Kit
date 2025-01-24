package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpcPeerConnection`.
type IVpcPeerConnection interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The ID of the VPC peering connection.
	AttrInstanceId() interface{}
	Props() *VpcPeerConnectionProps
}

// The jsii proxy for IVpcPeerConnection
type jsiiProxy_IVpcPeerConnection struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcPeerConnection) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcPeerConnection) Props() *VpcPeerConnectionProps {
	var returns *VpcPeerConnectionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

