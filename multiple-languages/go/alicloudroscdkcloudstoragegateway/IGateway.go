package alicloudroscdkcloudstoragegateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudstoragegateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Gateway`.
type IGateway interface {
	alicloudroscdkcore.IResource
	// Attribute GatewayId: The ID of the gateway.
	AttrGatewayId() interface{}
	Props() *GatewayProps
}

// The jsii proxy for IGateway
type jsiiProxy_IGateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGateway) AttrGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) Props() *GatewayProps {
	var returns *GatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

