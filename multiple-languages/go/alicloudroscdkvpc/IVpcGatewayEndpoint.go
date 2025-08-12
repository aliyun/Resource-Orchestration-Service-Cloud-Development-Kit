package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpcGatewayEndpoint`.
type IVpcGatewayEndpoint interface {
	alicloudroscdkcore.IResource
	// Attribute EndpointId: Gateway endpoint instance ID.
	AttrEndpointId() interface{}
	Props() *VpcGatewayEndpointProps
}

// The jsii proxy for IVpcGatewayEndpoint
type jsiiProxy_IVpcGatewayEndpoint struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcGatewayEndpoint) AttrEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcGatewayEndpoint) Props() *VpcGatewayEndpointProps {
	var returns *VpcGatewayEndpointProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

