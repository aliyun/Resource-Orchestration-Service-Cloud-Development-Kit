package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpcGatewayEndpointAssociation`.
type IVpcGatewayEndpointAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute EndpointId: The gateway endpoint instance ID to associate the routing table.
	AttrEndpointId() interface{}
	Props() *VpcGatewayEndpointAssociationProps
}

// The jsii proxy for IVpcGatewayEndpointAssociation
type jsiiProxy_IVpcGatewayEndpointAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcGatewayEndpointAssociation) AttrEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcGatewayEndpointAssociation) Props() *VpcGatewayEndpointAssociationProps {
	var returns *VpcGatewayEndpointAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

