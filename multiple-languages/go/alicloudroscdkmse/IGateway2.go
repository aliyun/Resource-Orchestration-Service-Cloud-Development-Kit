package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `Gateway2`.
type IGateway2 interface {
	alicloudroscdkcore.IResource
	// Attribute GatewayUniqueId: The unique ID of the gateway.
	AttrGatewayUniqueId() interface{}
	Props() *Gateway2Props
}

// The jsii proxy for IGateway2
type jsiiProxy_IGateway2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGateway2) AttrGatewayUniqueId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayUniqueId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway2) Props() *Gateway2Props {
	var returns *Gateway2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

