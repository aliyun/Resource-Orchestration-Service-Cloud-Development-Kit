package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `GatewayService`.
type IGatewayService interface {
	alicloudroscdkcore.IResource
	// Attribute Name: The name of the service.
	AttrName() interface{}
	// Attribute ServiceId: The ID of the gateway service.
	AttrServiceId() interface{}
	Props() *GatewayServiceProps
}

// The jsii proxy for IGatewayService
type jsiiProxy_IGatewayService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGatewayService) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGatewayService) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGatewayService) Props() *GatewayServiceProps {
	var returns *GatewayServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

